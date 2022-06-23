-- Typklassen / Generische Programmierung
addInt :: Integer -> Integer -> Integer
addInt x y = x + y

class ReportItem r where
  toString :: r -> String

printReport :: (ReportItem r) => [r] -> String
-- Wie würde man das implementieren?
-- Siehe Extra-Kapitel!
printReport items = error "Not implemented!"

-- Typklassen sind expressiver als Generics -> Siehe Addable in TypeScript
class Addable a where
  add :: a -> a -> a

-- interface Addable<TImpl> {
--   add: (b: TImpl) => TImpl;
-- }

instance (Num n) => Addable n where
  add a b = a + b
