# ensure-array-values

![npm](https://img.shields.io/npm/v/ensure-array-values)

A TypeScript utility function for ensuring that all values in the provided array match the specified type.

## Installation

```bash
npm install ensure-array-values
```

## Usage

The `ensureArrayValues` function helps in creating arrays necessarily containing all types of the provided union. It's particularly useful for creating type-safe lists of object keys.

```typescript
import ensureArrayValues from 'ensure-array-values';

// A type to create a list of keys for
type Foo = {
  bar: string;
  baz: number;
};

// A complete list of keys
const fooKeys = ensureArrayValues<keyof Foo>()(['bar', 'baz']);

// A complete readonly list of keys
const readonlyFooKeys = ensureArrayValues<keyof Foo>()(['bar', 'baz'] as const);

// An incomplete list of keys causes the type error:
// Argument of type 'string[]' is not assignable to parameter of type 'never'.
const incompleteFooKeys = ensureArrayValues<keyof Foo>()(['bar']);

// An extra key causes the type error:
// Type '"key"' is not assignable to type 'keyof Foo'.
const extraFooKeys = ensureArrayValues<keyof Foo>()(['bar', 'baz', 'key']);
```
