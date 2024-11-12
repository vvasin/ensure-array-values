/**
 * Ensures that all values in the provided array match the specified type `T`.
 *
 * This utility function helps in creating arrays necessarily containing all
 * types of the provided union. It's particularly useful for creating type-safe
 * lists of object keys.
 *
 * @template T - The type that all values in the array must match.
 * @returns A function that takes an array and returns it if all values matches
 * the type `T`, otherwise causes a type error.
 *
 * @example
 * ```typescript
 * // A type to create a list of keys for
 * type Foo = {
 *   bar: string;
 *   baz: number;
 * };
 *
 * // A complete list of keys
 * const fooKeys = ensureArrayValues<keyof Foo>()(['bar', 'baz']);
 *
 * // A complete readonly list of keys
 * const readonlyFooKeys = ensureArrayValues<keyof Foo>()(['bar', 'baz'] as const);
 *
 * // An incomplete list of keys causes the type error:
 * // Argument of type 'string[]' is not assignable to parameter of type 'never'.
 * const incompleteFooKeys = ensureArrayValues<keyof Foo>()(['bar']);
 *
 * // An extra key causes the type error:
 * // Type '"key"' is not assignable to type 'keyof Foo'.
 * const extraFooKeys = ensureArrayValues<keyof Foo>()(['bar', 'baz', 'key']);
 * ```
 */
export default function ensureArrayValues<T>() {
  return <A extends readonly T[]>(array: [T] extends [A[number]] ? A : never) =>
    array;
}
