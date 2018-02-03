/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const assert = require("assert")
const CLIEngine = require("eslint").CLIEngine
const util = require("./lib/util")

describe("CLIEngine", () => {
    util.installThisPlugin(before, after)

    // ここからテスト
    it("accessor-pairsルールのメッセージが翻訳されている。", () => {
        const engine = new CLIEngine({
            plugins: ["ja"],
            rules: { "accessor-pairs": "error" },
            useEslintrc: false,
        })
        const code = "var obj = { set value(x) {} }"
        const result = engine.executeOnText(code, "test.js").results[0]

        assert.strictEqual(result.messages.length, 1)
        assert.strictEqual(result.messages[0].ruleId, "accessor-pairs")
        assert.strictEqual(result.messages[0].message, "ゲッターが必要です。")
    })
})
