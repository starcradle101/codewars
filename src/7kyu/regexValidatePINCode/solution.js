// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

export function validatePIN(pin) {
  //return true or false
  const IREG = /^\d{4}$|^\d{6}$/;

  return IREG.test(pin);
}
