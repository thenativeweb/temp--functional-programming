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

// "Typklasse" in TS (mit Typparameter!)
interface Algebra<TImpl> {
  add: (a: TImpl, b: TImpl) => TImpl;
  zero: () => TImpl;
  unit: () => TImpl;
  equals: (a: TImpl, b: TImpl) => boolean;
  inverse: (a: TImpl) => TImpl;
}

const minus = <TImpl,>(algebra: Algebra<TImpl>, a: TImpl, b: TImpl): TImpl => {
  return algebra.add(a, algebra.inverse(b));
};

const multiply = <TImpl,>(algebra: Algebra<TImpl>, a: TImpl, b: TImpl): TImpl => {
  if (algebra.equals(algebra.zero(), b)) {
    return algebra.zero();
  }

  return algebra.add(a, multiply(algebra, a, minus(algebra, b, algebra.unit())));
};

class RealAlgebra implements Algebra<number> {
  add(a: number, b: number) { return a + b }
  unit() { return 1}
  zero() { return 0 };
  equals(a: number, b: number) { return a === b }
  inverse(a: number){ return -a }
}

console.log(JSON.stringify(multiply(new RealAlgebra(), 3, -2), null, 2));
