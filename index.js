/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const Linter = require("eslint").Linter
const translation = require("./translation")

// 各ルールのメッセージを上書きする
const rules = new Linter().getRules()
for (const ruleId of Object.keys(translation)) {
    const rule = rules.get(ruleId)

    if (rule && rule.meta && rule.meta.messages) {
        Object.assign(rule.meta.messages, translation[ruleId])
    }
}
