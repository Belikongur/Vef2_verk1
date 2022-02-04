import { variance, max, mean, median, min, std, sum } from 'mathjs';

/**
 *
 * @param {Number[]} nums
 * @returns Object with formated string representation
 *          of calculations. Or false if no data
 */
export function calc(nums) {
  if (!nums) return nums;
  const data = {
    variance: variance(nums),
    max: max(nums),
    mean: mean(nums),
    median: median(nums),
    min: min(nums),
    std: std(nums),
    sum: sum(nums),
    range: (max(nums) - min(nums))
  };

  for (const [key, value] of Object.entries(data)) {
    data[key] = Intl.NumberFormat('en-Us', {
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(value)
  }
  data.data = nums;

  return data;
}
