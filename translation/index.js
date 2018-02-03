/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const Linter = require("eslint").Linter
const semver = require("semver")
const linter = new Linter()

// 対応するバージョンの翻訳データを読み込む。
const ranges = [
    "*",
]
const version = ranges.findIndex(range => semver.satisfies(linter.version, range))

module.exports = require(`./${(version / 1000).toFixed(3).slice(2)}.json`)
