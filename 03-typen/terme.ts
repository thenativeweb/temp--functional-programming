// Kanonische Terme
type MyBoolean = true | false;

// Interfaces entsprechen Haskell Typklassen
interface ReportItem {
  toString(): string;
}

class UsersReportItem implements ReportItem {
  public toString(): string {
    return "";
  }
}

class InvoicesReportItem implements ReportItem {
  public toString(): string {
    return "";
  }
}

const printReport = function(reportItems: ReportItem[]): string {
  return reportItems
    .map(reportItem => reportItem.toString())
    .join('\n');
};

// Aber Typklassen sind expressiver.
interface Addable {
  add: (a: Addable, b: Addable) => Addable;
}

class MyInt implements Addable {
  public value: number;
  
  constructor(value) {
    this.value = value;
  }
  
  add(a: Addable, b: Addable) {
    // TODO: Wie würde man dieses Problem lösen?
    return new MyInt(a.value, b.value);
  }
}