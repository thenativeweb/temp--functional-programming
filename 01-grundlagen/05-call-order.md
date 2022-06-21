function inc (x) {
  return x + 1;
}

function double (x) {
  return x * 2;
}

function combine (x) {
  return double(inc(x)) + double(inc(x));
}

combine(23);
double(inc(23)) + double(inc(23))
double(23 + 1) + double(inc(23))
double(24) + double(inc(23))
24 * 2 + double(inc(23))
48 + double(inc(23))
48 + double(23 + 1)
48 + double(24)
48 + 24 * 2
48 + 48
96

combine(23);
double(inc(23)) + double(inc(23));
double(23 + 1)) + double(23 + 1);
(23 + 1) * 2 + (23 + 1) * 2
24 * 2 + 24 * 2
48 + 48
96
