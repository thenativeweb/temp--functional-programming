{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE UndecidableInstances #-}

-- Haskell Intro und Typentheorie

-- Terme / Konstanten
x = 3 -- Integer
userName = "strangedev" -- String

-- Funktionen / Lambdas
-- myAdd = (\ x y -> x + y)

-- ist das selbe wie:
-- myAdd x y = x + y

-- Funktionstypen
myAdd :: Integer -> Integer -> Integer
myAdd x y = x + y

-- Warum nicht:
-- myAdd :: (Integer, Integer) -> Integer
-- Es gibt nur einstellige Funktionen -> siehe Currying

-- Typableitung

-- Vorraussetzungen:
-- (+) :: Integer -> Integer -> Integer

-- Leite ab:
-- (\ x y -> x + y) 3 2

-- Mit Typen:
-- (\ x y -> x + y) 3: Integer 2: Integer
-- 3: Integer + 2: Integer
-- 6: Integer

-- Pattern matching
powerInt :: Integer -> Integer -> Integer
powerInt base 0 = 1
powerInt base exponent = base * (powerInt base (exponent - 1))


-- Typklassen / Generische Programmierung
addInt :: Integer -> Integer -> Integer
addInt x y = x + y

class ReportItem r where
  toString :: r -> String

printReport :: (ReportItem r) => [r] -> String
-- TODO: wie würde man das implementieren?
printReport items = error "Not implemented!"

-- TODO: Eine Instanz bauen

-- Typklassen sind expressiver als Generics -> Siehe Addable in TypeScript
class Addable a where
  add :: a -> a -> a

instance (Num n) => Addable n where
  add a b = a + b
