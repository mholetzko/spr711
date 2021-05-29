import json
from pathlib import Path
from typing import Dict, List, Any

JSON_DICT_PATH = Path(".").absolute() / "season_raw.json"
OUT_JSON_PATH = Path(".").absolute().parent / "season.json"


class Entry:
    def __init__(self, name: str, type: str, season: List[str]):
        self.name = name
        self.type = type
        self.season = season
        self.harvest = []
        self.storage = []
        self.nonavailable = []
        self._translate_to_seasonlists()

    def _translate_to_seasonlists(self):
        idx = 0
        month_str = [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAI",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
        ]
        for month in self.season:
            if month == "s":
                self.storage.append(month_str[idx])
            elif month == "h":
                self.harvest.append(month_str[idx])
            else:
                self.nonavailable.append(month_str[idx])
            if idx < len(month_str) - 1:
                idx += 1


def load_season_list() -> List[List[Any]]:
    with JSON_DICT_PATH.open("r") as jd:
        content = json.load(jd)
        return content
    return [[]]


def translate_to_js_data(inp: List[List[Any]]) -> List[Entry]:
    header = inp[:1]
    data = inp[1:]
    entries: List[Entry] = []
    for csv_data in data:
        row = csv_data[0].split(";")
        entries.append(Entry(row[0], row[1], row[2:]))

    return entries


def dump_to_dict(inp: List[Entry]) -> None:
    food_list = {"Food": []}
    for entry in inp:
        dict = {
            "name": f"{entry.name}",
            "type": f"{entry.type}",
            "harvest_season": f"{entry.harvest}",
            "storage_season": f"{entry.storage}",
        }
        food_list["Food"].append(dict)
    with OUT_JSON_PATH.open("w") as od:
        json.dump(food_list, od, sort_keys=True, indent=4)


scraped_seasonal_fruits = load_season_list()
entries = translate_to_js_data(scraped_seasonal_fruits)
dump_to_dict(entries)
