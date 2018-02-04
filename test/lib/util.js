/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const Module = require("module")

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
