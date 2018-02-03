/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const fs = require("fs")
const Linter = require("eslint").Linter
const logger = console

const FILE_PATH = "ja.json"
const oldTranslation = JSON.parse(fs.readFileSync(FILE_PATH, "utf8") || "{}")
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

fs.writeFileSync(FILE_PATH, JSON.stringify(translation, null, 4))
