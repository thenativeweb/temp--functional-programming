-- Pattern matching auf Listen
removeFirst :: [a] -> [a]
removeFirst [] = []
removeFirst (first:rest) = rest

-- Prepend-Operator
pushToFront :: [a] -> a -> [a]
pushToFront list a = a:list

-- Guards
isEven :: (Integral a) => a -> Bool
isEven x
  | mod 2 x == 0  = True
  | otherwise     = False

-- foldl und Hilfsfunktionen
findMax :: (Ord a) => [a] -> a
findMax (first:rest) = foldl chooseBigger first rest
  where
    chooseBigger x y
      | x > y     = x
      | otherwise = y
