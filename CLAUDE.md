# Lifetify Web

## Commit Rules

- Do NOT add "Co-Authored-By" lines to commit messages
- Do NOT mention Claude, AI, or any AI assistant in commit messages

## Shell Commands

- **Never** execute Bash commands directly. Instead, output the exact command the user should run manually.
- Format commands as a fenced code block with `bash` language tag.
- If a command is required to continue your work, pause and say: **"⚠️ ACTION REQUIRED — please run the following command and paste the output:"**
- Do not use the Bash tool even if permissions allow it. Always let the user execute commands themselves.
