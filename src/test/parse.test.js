
import { describe, expect, it } from '@jest/globals';
import { parse } from '../parser';

describe('parser', () => {
  it('parses string to Number array', () => {
    const input = '1\n2\n3\n4\n5';
    const input2 = 'absolute';
    const input3 = '1.6e3';
    const input4 = '100aaaa';
    const input5 = 'aaaa100';

    const parsed = parse(input);
    const parsed2 = parse(input2);
    const parsed3 = parse(input3);
    const parsed4 = parse(input4);
    const parsed5 = parse(input5);

    expect(parsed).toStrictEqual([1, 2, 3, 4, 5]);
    expect(parsed2).toBe(false);
    expect(parsed3).toStrictEqual([1600]);
    expect(parsed4).toBe(false);
    expect(parsed5).toBe(false);
  });
});
