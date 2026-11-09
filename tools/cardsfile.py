"""Read and write cards.js (a JSON object wrapped in one line of JavaScript)."""
import json, os

PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "cards.js")
HEADER = "/* Accutemp Field Reference card data. See CONTRIBUTING.md for how to add a card. */\nwindow.ACCUTEMP_DATA = "


def load(path=PATH):
    s = open(path, encoding="utf-8").read()
    return json.loads(s[s.index("=") + 1:].strip().rstrip(";"))


def save(data, path=PATH):
    with open(path, "w", encoding="utf-8") as f:
        f.write(HEADER)
        json.dump(data, f, ensure_ascii=False, indent=1)
        f.write(";\n")
