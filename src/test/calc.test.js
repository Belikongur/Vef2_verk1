import { describe, expect, it } from '@jest/globals';
import { calc } from '../calc.js';

describe('parser', () => {
  it('Number[]->Object with calculations', () => {
    const input = [1, 2, 3, 4, 5];

    expect(calc(input).data).toStrictEqual([1, 2, 3, 4, 5]);
    expect(calc(input).variance).toBe(2.5);
    expect(calc(input).max).toBe(5);
    expect(calc(input).mean).toBe(3);
    expect(calc(input).median).toBe(3);
    expect(calc(input).min).toBe(1);
    expect(calc(input).std).toBe(1.58);
    expect(calc(input).sum).toBe(15);
    expect(calc(input).range).toBe(4);

  });

});
