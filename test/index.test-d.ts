import {describe, expectTypeOf, it} from 'vitest';
import ensureArrayValues from '../src/index';

describe('ensureArrayValues', () => {
  type Foo = {
    bar: string;
    baz: number;
  };

  it('ensures that the provided array includes all possible values of the specified type', () => {
    const incompleteFooKeys = ['bar'] as const;
    type IncompleteFooKey = (typeof incompleteFooKeys)[number];

    expectTypeOf<IncompleteFooKey>().toMatchTypeOf<keyof Foo>();
    expectTypeOf<keyof Foo>().not.toMatchTypeOf<IncompleteFooKey>();
    // @ts-expect-error
    ensureArrayValues<keyof Foo>()(incompleteFooKeys);
  });

  it('ensures that the provided array does not include values outside the specified type', () => {
    const extraFooKeys = ['bar', 'baz', 'key'] as const;
    type ExtraFooKey = (typeof extraFooKeys)[number];

    expectTypeOf<ExtraFooKey>().not.toMatchTypeOf<keyof Foo>();
    expectTypeOf<keyof Foo>().toMatchTypeOf<ExtraFooKey>();
    // @ts-expect-error
    ensureArrayValues<keyof Foo>()(incompleteFooKeys);
  });
});
