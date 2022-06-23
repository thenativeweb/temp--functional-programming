type Tuple<TLength extends number, TResult extends any[] = []> =
  TResult extends { length: TLength }
    ? TResult
    : Tuple<TLength, [...TResult, any]>;

    type Length<T extends any[]> = 
  T extends { length: infer L }
    ? L
    : never;

type Sub<TLhs extends number, TRhs extends number> =
  Tuple<TLhs> extends [...(infer TResult), ...Tuple<TRhs>]
    ? Length<TResult>
    : never;

    type Equals<TLhs, TRhs> =
    TLhs extends TRhs
        ? TRhs extends TLhs
          ? true
          : false
        : false;

type SkipN<TAry extends any[], TN extends number> =
  TN extends 0
    ? TAry
    : TAry extends [infer THead, ...(infer TRest)]
      ? SkipN<TRest, Sub<TN, 1>>
      : never;

type TakeN<TAry extends any[], TN extends number> =
  TN extends 0
    ? []
    : TAry extends [infer THead, ...(infer TRest)]
      ? [THead, ...TakeN<TRest, Sub<TN, 1>>]
      : never;

type PositionalFn = (...args: any[]) => any;

type PartiallyAppliedFnHelper<
  TFn extends PositionalFn,
  TArgsCount extends number,
  TBoundArgsCount extends number
> =
 Equals<TArgsCount, TBoundArgsCount> extends true
  ? ReturnType<TFn>
  : (...args: SkipN<Parameters<TFn>, TBoundArgsCount>) => ReturnType<TFn>;


type PartiallyAppliedFn<
  TFn extends PositionalFn,
  TBoundArgs extends any[],
  TArgsNo extends number = Length<Parameters<TFn>>
> =
  PartiallyAppliedFnHelper<TFn, TArgsNo, Length<TBoundArgs>>;

type CurriedVariations<
  TFn extends PositionalFn,
  TUnboundArgsNo extends number,

  TArgs extends any[] = Parameters<TFn>,
  TUnboundArgs extends any[] = TakeN<TArgs, TUnboundArgsNo>,
> =
  TUnboundArgsNo extends 0
  ? TFn
  : {
      (...headArgs: TUnboundArgs):
        CurriedVariations<
          PartiallyAppliedFn<TFn, TUnboundArgs>,
          Sub<Length<TArgs>, TUnboundArgsNo>
        >
    } & CurriedVariations<TFn, Sub<TUnboundArgsNo, 1>>;


type CurriedFn<TFn extends PositionalFn> = CurriedVariations<TFn, Length<Parameters<TFn>>>;

const autoCurry = (fn, argsCount, boundArgs) => {
  if (boundArgs.length === argsCount) {
    return fn(...boundArgs);
  }

  return (...args) => {
    return autoCurry(fn, argsCount, [...boundArgs, ...args]);
  } 
}

const curry = <TFn extends PositionalFn>(fn: TFn): CurriedFn<TFn> => autoCurry(fn, fn.length, []);

export {
  curry
};

// Concat :: [Char] -> [Char] -> [Char]
// Concat :: ([Char], [Char]) -> [Char]
// => 2 ^ #Args viele Typen!
