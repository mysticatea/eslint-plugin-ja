/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const assert = require("assert")
const Linter = require("eslint").Linter
const translation = require("../translation")
const rules = new Linter().getRules()
const VAR_PATTERN = /{{\s*(\S+?)\s*}}/g

/**
 * 指定されたメッセージから変数を抽出します。
 * @param {string} text メッセージ。
 * @returns {Set<string>} 変数名の集合。
 */
function getVariables(text) {
    const variables = new Set()
    let m = null

    VAR_PATTERN.lastIndex = 0
    while ((m = VAR_PATTERN.exec(text)) != null) {
        variables.add(m[1])
    }

    return variables
}

describe("変数記述", () => {
    for (const ruleId of Object.keys(translation)) {
        const jaMessages = translation[ruleId]
        const enMessages = rules.get(ruleId).meta.messages

        for (const messageId of Object.keys(jaMessages)) {
            const jaMessage = jaMessages[messageId]
            const enMessage = enMessages[messageId]
            const jaVariables = getVariables(jaMessage)
            const enVariables = getVariables(enMessage)

            describe(`${ruleId}/${messageId}`, () => {
                for (const variable of jaVariables) {
                    it(`変数'{{${variable}}}'が翻訳前のメッセージに存在すべきです。`, () => {
                        assert(enVariables.has(variable))
                    })
                }
            })
        }
    }
})
