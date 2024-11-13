import {describe, expect, it} from 'vitest';
import ensureArrayValues from '../src/index';

describe('ensureArrayValues', () => {
  it('returns the provided argument', () => {
    type Foo = {
      bar: string;
      baz: number;
    };

    const fooKeys = ['bar', 'baz'] as const;
    const ensuredFooKeys = ensureArrayValues<keyof Foo>()(fooKeys);

    expect(ensuredFooKeys).toBe(fooKeys);
  });
});
