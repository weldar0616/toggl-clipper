export class TogglTask {
  constructor() {
    this._items = [];
  }

  scraping() {
    const scrapedString = (xpath = '') => {
      const xPathResult = document.evaluate(`${xpath}`, document, null, XPathResult.STRING_TYPE, null);
      return xPathResult.stringValue;
    };

    const firstDate = scrapedString('//*[@id="root"]/div/div[2]/div[3]/div/div[1]/div/div[4]/div[1]/ul/div[1]/div/div[2]/div/span');
    if (firstDate !== 'Today') return false;

    const totalTimeString = scrapedString('//*[@id="root"]/div/div[2]/div[3]/div/div[1]/div/div[4]/div[1]/ul/div[1]/div/div[3]/span');
    // TODO: 時間として扱えるように

    const itemListWrapperXPathResult = document.evaluate('//*[@id="root"]/div/div[2]/div[3]/div/div[1]/div/div[4]/div[1]/ul', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    const itemLen = itemListWrapperXPathResult.snapshotItem(0).childNodes.length;

    const titleXPaths = (n = 1) => `//*[@id="root"]/div/div[2]/div[3]/div/div[1]/div/div[4]/div[1]/ul/div[${n + 1}]/div/div[1]/div/div[1]/div/div[1]`;
    const tagXPaths = (n = 1) => `//*[@id="root"]/div/div[2]/div[3]/div/div[1]/div/div[4]/div[1]/ul/div[${n + 1}]/div/div[3]/div/div[1]/span`;
    const timeXPaths = (n = 1) => `//*[@id="root"]/div/div[2]/div[3]/div/div[1]/div/div[4]/div[1]/ul/div[${n + 1}]/div/div[5]/div/div[1]/div[1]/div/span`;
    for (let i = 1; i <= itemLen - 1; i++) {
      const title = scrapedString(titleXPaths(i));
      const tag = scrapedString(tagXPaths(i));
      const time = scrapedString(timeXPaths(i));
      this._items.push(new TogglTaskItem({ title, tag, time }));
    }
    console.log(this._items);
    return true;
  }

  get formattedText() {
    return "";
  }
}

class TogglTaskItem {
  constructor(args) {
    this._title = args.title;
    this._tag = args.tag;
    this._time = args.time;
  }
  get title() { return this._title; }
  set title(arg) { this._title = arg; }
  get tag() { return this._tag; }
  set tag(arg) { this._tag = arg; }
  get time() { return this._time; }
  set time(arg) { this._time = arg; }
}