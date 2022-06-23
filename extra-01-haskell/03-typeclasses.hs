class ReportItem r where
  title :: r -> String
  body :: r -> String


-- Aufgabe 2)
generateReport :: (ReportItem r) => [r] -> String
