import { describe, expect, it } from '@jest/globals';
import { parse } from '../src/parser';

describe('parser', () => {
    it('converts to number', () => {
        const input = `# hello world`;

        const parsed = parse(input);

        expect(parsed).toBe('<h1>hello world</h1>');
    });

    //it('reverses a different string', () => {
    //    const input = 'bar';
//
    //    const result = reverse(input);
//
    //    expect(result).toBe('rab');
    //});
//
    //it('should return undefined for undefined', () => {
    //    const input = undefined;
//
    //    const result = reverse(input);
//
    //    expect(result).toBe(undefined);
    //});

});