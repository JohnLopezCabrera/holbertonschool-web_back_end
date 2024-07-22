export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    throw new TypeError('startString must be a string');
  }

  if (!startString) {
    return '';
  }

  return [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
