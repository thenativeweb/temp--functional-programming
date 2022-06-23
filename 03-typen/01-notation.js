// power :: number -> number -> number
const power = (base, exponent) => {
  if (exponent === 0) {
    return 1;
  }

  return base * power(base, exponent - 1);
};