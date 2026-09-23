# Basketball Drills

Interactive basketball drill instruction for coaches and players.

The development site is published with GitHub Pages at [dev.decent.coach](https://dev.decent.coach).

## Local preview

Open `index.html` directly or serve this directory with any static file server, for example:

```sh
python3 -m http.server 8000
```

## Drill storage

```text
assets/courts/                    Reusable full- and half-court SVGs
data/catalog.js                  Complete drill list and source groupings
data/drills/<drill-id>.js        One structured lesson per completed drill
index.html                       Shared interface and animation renderer
```

Drill data uses JavaScript object files instead of fetched JSON so the app continues to work when `index.html` is opened directly with a `file://` URL. Each lesson defines:

- metadata, categories, summary, and equipment;
- court type, asset, aspect ratio, and starting end;
- players with stable IDs and `offense`, `defense`, or `neutral` team roles;
- step titles, instructions, normalized percentage positions, ball ownership, court focus, and movement paths.

To add a completed drill, create its file under `data/drills/`, include that script before the app script in `index.html`, and ensure its title matches the catalog entry. Catalog entries without loaded lesson data remain disabled.
