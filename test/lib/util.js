/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const Module = require("module")
const TESTER_PATH = require.resolve("eslint/lib/testers/rule-tester")

/**
 * 与えられたコンテキストで、`eslint-plugin-ja`がこのプラグインを指すようにセットアップします。
 * @param {function} before mocha の before 関数。
 * @param {function} after mocha の after 関数。
 * @returns {void}
 */
module.exports.installThisPlugin = (before, after) => { //eslint-disable-line no-shadow
    let originalFindPath = null

    before(() => {
        originalFindPath = Module._findPath
        Module._findPath = function(id) {
            if (id === "eslint-plugin-ja") {
                return require.resolve("../../index.js")
            }
            return originalFindPath.apply(this, arguments)
        }
    })

    after(() => {
        Module._findPath = originalFindPath
    })
}

/**
 * 与えられた関数を実行している間だけ、RuleTester を `./rule-tester.js` に差し替えます。
 * @param {function} f 実行する関数
 * @returns {void}
 */
module.exports.withOverridenRuleTester = (f) => {
    const originalFindPath = Module._findPath
    Module._findPath = function() {
        const path = originalFindPath.apply(this, arguments)
        if (path === TESTER_PATH) {
            return require.resolve("./rule-tester.js")
        }
        return path
    }

    try {
        f()
    }
    finally {
        Module._findPath = originalFindPath
    }
}
