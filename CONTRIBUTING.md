# How to add or change a card

The page at https://accutempengineering.github.io/Accutemp-tech-reference/ reads every card from one file: **cards.js**. You never need to touch index.html or app.js to add a card.

## Easiest way

Ask Grok Bot: "Add a card to the tech reference under (section) about (topic)." It will add the entry, check it, and push it.

## Doing it yourself on GitHub

1. Open **cards.js** in the repo and click the pencil (Edit).
2. Press Ctrl+F and search for the section title you want, for example `"Gas Furnaces"`.
3. Inside that section's `"content": [ ... ]` list, paste a new entry after the last card. Example:

```json
{
 "id": "furn-153",
 "title": "Pressure switch won't close",
 "level": "sub",
 "tags": ["combustion"],
 "intro": "One or two sentences on when to use this card.",
 "rows": [
  ["Safety", "LOTO and verify de-energized before opening the cabinet. Follow Accutemp safety rules."],
  ["1. First check", "What to look at first."],
  ["2. Reading", "What to measure and what the number should be (or: verify on unit nameplate / IOM)."]
 ],
 "tip": "One short field tip.",
 "sources": [
  {"label": "Manufacturer source", "url": "https://example.com/manual.pdf", "name": "Maker manual name", "date": "May 2026"}
 ],
 "quickCheck": [
  {"label": "1. First check", "text": "What to look at first."}
 ]
}
```

4. Commit the change. The live page updates in about 1 to 2 minutes, and phones pick it up the next time they open it with signal.

## What each field means

| Field | Needed? | What it is |
| --- | --- | --- |
| `id` | yes | Short unique name, letters/numbers/dashes. Pick the section prefix and the next unused number (search the file to make sure it is not taken). |
| `title` | yes | What shows on the card button. |
| `level` | yes | `"sub"` for a card inside a section, `"top"` for a whole section. |
| `tags` | no | Filter chips the card shows up under. Use the `tag` values from the `"chips"` list at the top of cards.js (for example `"wiring"`, `"airflow"`, `"walk-in"`). |
| `intro` | no | Opening paragraph. |
| `rows` | no | The step / reading table: each row is `["Label", "Text"]`. |
| `tip` | no | Shows as "Field tip:". |
| `sources` | no | Where the card's facts come from: `name`, `url`, and if known `label` and `date` (the document's own date or revision). Simple cards show them in the card body. For cards stored as `content` HTML, any source that is not already linked in the card text shows on a "Sources:" line at the bottom. |
| `reviewed` | no | Date (`"YYYY-MM-DD"`) the card's specs were last checked against its cited sources. Shows as a green "Reviewed:" line, kept separate from "Last updated". Only set it when you actually compared every spec on the card to a source listed in `sources`. Never set it to make a card look checked. |
| `reviewNote` | no | One sentence after the Reviewed date saying what was checked against what. |
| `quickCheck` | no | Optional yellow "Check this first" box at the top of the card. Only copy steps that are already written in the same card. Leave it out if the card has no clear first steps. |
| `updated` | auto | "Last updated" date. Do not type it: it comes from git history (see below). |

If a value on a card does not match its source, do not change it quietly and do not mark the card Reviewed. Write down both numbers and the source and ask Justin which is right.

To hide a whole tab (for example one that has no real content yet), add `"hidden": true` to that tab in the `"tabs"` list. Its button and its cards disappear from the page and from search. Remove the line to show it again.

Older cards store their text in a `"content"` list of `{"html": ...}` pieces. That is the original page text copied exactly; edit the words inside the quotes if needed, and leave the tags around them alone.

## Rules that keep the page working

* Every entry is separated from the next by a comma. A missing or extra comma breaks the file. Phones that already opened the page keep showing the last good version, but new visitors would see an error, so check the page after you commit.
* Use straight double quotes `"` around text. If your text needs a double quote (like 12"), write it as `\"`.
* Do not invent specs. If a value can't be verified, write the procedure and say "verify on unit nameplate / IOM".

## Last updated dates

Each card's "Last updated" date is the date of the commit where its current text first appeared. After editing cards, run `python3 tools/card_dates.py` (or ask Grok Bot to) and commit the result.

## Checks (for whoever edits the code)

* `python3 tools/verify_cards.py --old-ref <commit>` compares every card against an older version of the page (a cards.js commit, or 79ecb71 for the last single-file page). Use `--allow-new` for added card ids and `--allow-diff id=field+field,...` for changes you made on purpose (for example `eq-87=links`). Anything else that changed fails the check.
* `python3 tools/test_site.py` runs phone layout, search, filter and offline checks in headless Chrome (needs `pip install playwright`).
* The offline copy is handled by `sw-ref.js`. Bump `VERSION` there when app.js, styles.css or the caching rules change (it is `accutemp-ref-v2` as of Nov 13, 2026); card-only edits do not need it.
