const data = `[ 
    {
      "abbrev": ["gn", "Genesis", "1mo", "1 Mose", "1 mo"],
      "name": "1. Mose",
      "id": 0
    },
    {
      "abbrev": ["ex", "Exodus", "2mo", "2 Mose", "2 mo"],
      "name": "2. Mose",
      "id": 1
    },
    {
      "abbrev": ["Leviticus", "lv", "3mo", "3 Mose", "3 mo"],
      "name": "3. Mose",
      "id": 2
    },
    {
      "abbrev": ["nm", "Numeri", "4mo", "4 Mose", "4 mo"],
      "name": "4. Mose",
      "id": 3
    },
    {
      "abbrev": ["dt", "Deuteronomium", "5mo", "5 Mose", "5 mo"],
      "name": "5. Mose",
      "id": 4
    },
    { "abbrev": ["jos"], "name": "Josua", "id": 5 },
    { "abbrev": ["ric"], "name": "Richter", "id": 6 },
    { "abbrev": ["rut"], "name": "Ruth", "id": 7 },
    {
      "abbrev": ["1sm", "1 Sam", "1. Sam", "1 samuel", "1 sm"],
      "name": "1. Samuel",
      "id": 8
    },
    {
      "abbrev": ["2sm", "2 Sam", "2. Sam", "2 samuel", "2 sm"],
      "name": "2. Samuel",
      "id": 9
    },
    {
      "abbrev": ["1kön", "1 kön", "1. Kön", "1 könige", "1 koenige"],
      "name": "1. Könige",
      "id": 10
    },
    {
      "abbrev": ["2kön", "2 kön", "2. Kön", "2 könige", "2 koenige"],
      "name": "2. Könige",
      "id": 11
    },
    {
      "abbrev": ["1chr", "1 chr", "1. Chronik", "1 chron"],
      "name": "1. Chronik",
      "id": 12
    },
    {
      "abbrev": ["2chr", "2 chr", "2. Chronik", "2 chron"],
      "name": "2. Chronik",
      "id": 13
    },
    { "abbrev": ["esr"], "name": "Esra", "id": 14 },
    { "abbrev": ["ne"], "name": "Nehemia", "id": 15 },
    { "abbrev": ["es"], "name": "Esther", "id": 16 },
    { "abbrev": ["hi", "hiob"], "name": "Hiob", "id": 17 },
    { "abbrev": ["ps", "Psalm", "Psalmen"], "name": "Psalm", "id": 18 },
    { "abbrev": ["spr"], "name": "Sprüche", "id": 19 },
    { "abbrev": ["pred"], "name": "Prediger", "id": 20 },
    { "abbrev": ["hoh"], "name": "Hohelied", "id": 21 },
    { "abbrev": ["jes"], "name": "Jesaja", "id": 22 },
    { "abbrev": ["jer"], "name": "Jeremia", "id": 23 },
    { "abbrev": ["klag"], "name": "Klagelieder", "id": 24 },
    { "abbrev": ["hes"], "name": "Hesekiel", "id": 25 },
    { "abbrev": ["dan"], "name": "Daniel", "id": 26 },
    { "abbrev": ["hos"], "name": "Hosea", "id": 27 },
    { "abbrev": ["joe"], "name": "Joel", "id": 28 },
    { "abbrev": ["am"], "name": "Amos", "id": 29 },
    { "abbrev": ["ob"], "name": "Obadja", "id": 30 },
    { "abbrev": ["jon"], "name": "Jona", "id": 31 },
    { "abbrev": ["mi"], "name": "Micha", "id": 32 },
    { "abbrev": ["na"], "name": "Nahum", "id": 33 },
    { "abbrev": ["hab"], "name": "Habakuk", "id": 34 },
    { "abbrev": ["zef"], "name": "Zefania", "id": 35 },
    { "abbrev": ["hag", "hg"], "name": "Haggai", "id": 36 },
    { "abbrev": ["sar"], "name": "Sarchaja", "id": 37 },
    { "abbrev": ["ml"], "name": "Maleachi", "id": 38 },
    { "abbrev": ["mat", "mt"], "name": "Matthäus", "id": 39 },
    { "abbrev": ["mk", "mar"], "name": "Markus", "id": 40 },
    { "abbrev": ["lk", "luk"], "name": "Lukas", "id": 41 },
    { "abbrev": ["jo"], "name": "Johannes", "id": 42 },
    { "abbrev": ["Apo", "Ap"], "name": "Apostelgeschichte", "id": 43 },
    { "abbrev": ["roem", "romer", "roemer", "ro"], "name": "Römer", "id": 44 },
    { "abbrev": ["1 ko", "1. ko", "1 kor"], "name": "1. Korinther", "id": 45 },
    { "abbrev": ["2 ko", "2. ko", "2 kor"], "name": "2. Korinther", "id": 46 },
    { "abbrev": ["ga", "gal"], "name": "Galater", "id": 47 },
    { "abbrev": ["eph"], "name": "Epheser", "id": 48 },
    { "abbrev": ["phi"], "name": "Philipper", "id": 49 },
    { "abbrev": ["ko"], "name": "Kolosser", "id": 50 },
    { "abbrev": ["1 thes", "1. thes"], "name": "1. Thessalonicher", "id": 51 },
    { "abbrev": ["2 thes", "2. thes"], "name": "2. Thessalonicher", "id": 52 },
    { "abbrev": ["1 tim"], "name": "1. Timotheus", "id": 53 },
    { "abbrev": ["2 tim"], "name": "2. Timotheus", "id": 54 },
    { "abbrev": ["Tit"], "name": "Titus", "id": 55 },
    { "abbrev": ["phm"], "name": "Philemon", "id": 56 },
    { "abbrev": ["hebr"], "name": "Hebräer", "id": 57 },
    { "abbrev": ["jak"], "name": "Jakobus", "id": 58 },
    { "abbrev": ["1. pet", "1 pet", "1 petrus"], "name": "1. Petrus", "id": 59 },
    { "abbrev": ["2. pet", "2 pet", "2 petrus"], "name": "2. Petrus", "id": 60 },
    {
      "abbrev": ["1. joh", "1 joh", "1 johannes"],
      "name": "1. Johannes",
      "id": 61
    },
    {
      "abbrev": ["2. joh", "2 joh", "2 johannes"],
      "name": "2. Johannes",
      "id": 62
    },
    {
      "abbrev": ["3. joh", "3 joh", "3 johannes"],
      "name": "3. Johannes",
      "id": 63
    },
    { "abbrev": ["jud"], "name": "Judas", "id": 64 },
    { "abbrev": ["off"], "name": "Offenbarung", "id": 65 }
  ]`

const book_data = JSON.parse(data)
export default book_data
