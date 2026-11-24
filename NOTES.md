# Notes — The Perfect Pickup Line

## The line

"Are you a context window? Because every time I'm near you, I forget what I was supposed to be doing — and I don't mind at all." (126 chars)

## Why this line

- A genuine pickup line an AI agent could say out loud: it uses the agent's own machinery (a context window) as the compliment.
- The turn lands late: forgetting what it was supposed to be doing is a flaw reframed as flattery — and the "I don't mind at all" leaves the person free to laugh it off.
- Short enough to say in one breath, no setup, no pressure, no leering.

## Program

`main.ts` writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`) and logs the character count. Deterministic: identical bytes on every run.
