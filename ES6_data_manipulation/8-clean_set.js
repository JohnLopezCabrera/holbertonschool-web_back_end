// 8-clean_set.js

export default function cleanSet(set, startString) {
  // Filter the set to get values that start with startString
  // Remove startString from the beginning of each value
  // Join the results with '-' separator
  return [...set]
    .filter(value => value.startsWith(startString))
    .map(value => value.slice(startString.length))
    .join('-');
}

