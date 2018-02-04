/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const fs = require("fs")
const path = require("path")
const Linter = require("eslint").Linter
const logger = console

const ROOT = "translation"
const translationFiles = fs.readdirSync(ROOT)
    .filter(filename => path.extname(filename) === ".json")
    .sort()
    .reverse()
const filePath = path.join(ROOT, translationFiles[0])
const oldTranslation = JSON.parse(fs.readFileSync(filePath, "utf8") || "{}")
const translation = {}

for (const [ruleId, { meta }] of new Linter().getRules()) {
    if (meta.messages == null) {
        logger.log("Skipped '%s' since no meta.messages", ruleId)
        continue
    }

    const oldMessages = oldTranslation[ruleId] || {}
    const messages = (translation[ruleId] = {})

    for (const messageId of Object.keys(meta.messages)) {
        messages[messageId] = oldMessages[messageId] || meta.messages[messageId]
    }
}

fs.writeFileSync(filePath, `${JSON.stringify(translation, null, 4)}\n`)
