
/**
 *
 * @param {String} input
 * @returns The string with Formatted . and , correctly.
 *          100.00,21 -> 10000.21
 */
function fixDots(input) {
  const str = input.split('');
  let dot = false;
  for (let i = str.length - 1; i >= 0; i -= 1) {
    if ((str[i] === '.' || str[i] === ',') && !dot) {
      str[i] = '.';
      dot = !dot;
    } else if ((str[i] === '.' || str[i] === ',') && dot) {
      str.splice(i, 1);
    }
  }
  return str.join('');
}

/**
 *
 * @param {String} input
 * @returns Empty string if it contains word.
 *          Number if the string can be parsed
 *          to number.
 */
function checkString(input) {
  let str = input;
  if (str === '') return '';
  if (/[a-df-zA-DF-Z]+/.test(str)) return '';
  str = str.replace(/ /g, '');
  if (str.includes('e') || str.includes('E')) return Number(str);
  if (str.includes('.') || str.includes(',')) str = fixDots(str);

  return parseInt(str, 10);
}

/**
 *
 * @param {String} input
 * @returns Number[] with parsed strings
 *          Or false if data is corrupt
 */
export function convert(input) {

  const data = input.split('\n');
  const result = [];
  let skipped = 0;
  for (let i = 0; i < data.length; i += 1) {
    const num = checkString(data[i]);
    if (num === '') {
      skipped += 1;
      /* eslint-disable-next-line */
      continue;
    }
    if (Number.isNaN(num)) {
      return false;
    }

    result[i - skipped] = num;
  }
  return result;
}

/**
 *
 * @param {String} input
 * @returns Number[] of parsed strings
 *          Or false if data is corrupt
 */
export function parse(input) {
  if (input === '') return false;
  const nums = convert(input);
  if (!nums || nums.length === 0) return false;
  return nums;
}
