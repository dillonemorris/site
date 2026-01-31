'use client'

import { useState } from 'react'
import { Highlight, themes } from 'prism-react-renderer'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

// TypeScript terms database
const TYPESCRIPT_TERMS = {
  any: {
    category: 'Basic Types',
    syntax: 'any',
    description:
      'Disables type checking for a value. Use sparingly as it defeats the purpose of TypeScript. Prefer unknown for type-safe alternatives.',
    example: `let value: any = "hello";
value = 42; // OK
value.nonExistent(); // No error (dangerous!)`,
    related: ['unknown', 'never'],
    docsUrl:
      'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any',
  },
  unknown: {
    category: 'Basic Types',
    syntax: 'unknown',
    description:
      'The type-safe counterpart to any. Unlike any, you cannot perform operations on an unknown value without first narrowing its type through type guards or assertions.',
    example: `let value: unknown = getUserInput();
if (typeof value === "string") {
  console.log(value.toUpperCase()); // OK after narrowing
}`,
    related: ['any', 'never'],
    docsUrl:
      'https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown',
  },
  never: {
    category: 'Basic Types',
    syntax: 'never',
    description:
      'Represents values that never occur. Used for functions that never return (throw errors or infinite loops) or for exhaustive type checking in switch statements.',
    example: `function throwError(message: string): never {
  throw new Error(message);
}

// Exhaustive checking
type Shape = Circle | Square;
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "square": return shape.size ** 2;
    default:
      const _exhaustive: never = shape; // Error if new type added
      return _exhaustive;
  }
}`,
    related: ['any', 'unknown', 'void'],
    docsUrl:
      'https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type',
  },
  void: {
    category: 'Basic Types',
    syntax: 'void',
    description:
      "Represents the absence of a return value. Functions that don't return anything have a void return type. Unlike never, void functions do complete execution.",
    example: `function logMessage(message: string): void {
  console.log(message);
  // No return statement
}`,
    related: ['never', 'undefined'],
    docsUrl:
      'https://www.typescriptlang.org/docs/handbook/2/functions.html#void',
  },
  type: {
    category: 'Type Keywords',
    syntax: 'type',
    description:
      'Creates a type alias for any type. More flexible than interface - can represent unions, intersections, primitives, and complex types. Use for unions and complex type logic.',
    example: `type ID = string | number;
type Point = { x: number; y: number };
type Result<T> = { success: true; data: T } | { success: false; error: string };`,
    related: ['interface', 'Union', 'Intersection'],
    docsUrl:
      'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases',
  },
  interface: {
    category: 'Type Keywords',
    syntax: 'interface',
    description:
      'Defines the shape of an object. Can be extended and merged. Prefer interface for object shapes as it provides better error messages. Use type for unions and complex types.',
    example: `interface User {
  id: number;
  name: string;
  email?: string;
}

interface Admin extends User {
  role: "admin";
}`,
    related: ['type', 'extends'],
    docsUrl:
      'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces',
  },
  typeof: {
    category: 'Type Keywords',
    syntax: 'typeof',
    description:
      'Extracts the type of a value. Useful for inferring types from existing JavaScript values or functions without manually duplicating type definitions.',
    example: `const user = { id: 1, name: "John" };
type User = typeof user; // { id: number; name: string }

function getUser() { return user; }
type GetUserReturn = ReturnType<typeof getUser>;`,
    related: ['ReturnType', 'keyof'],
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/2/typeof-types.html',
  },
  keyof: {
    category: 'Type Keywords',
    syntax: 'keyof',
    description:
      'Creates a union type of all property keys in an object type. Essential for creating type-safe property access and generic functions that work with object keys.',
    example: `interface User {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User; // "id" | "name" | "email"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}`,
    related: ['typeof', 'extends'],
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/2/keyof-types.html',
  },
  extends: {
    category: 'Type Keywords',
    syntax: 'extends',
    description:
      'Used for inheritance (interfaces/classes) and generic constraints. In conditional types, checks if one type extends another.',
    example: `// Interface extension
interface Animal { name: string; }
interface Dog extends Animal { breed: string; }

// Generic constraint
function longest<T extends { length: number }>(a: T, b: T) {
  return a.length > b.length ? a : b;
}

// Conditional type
type IsString<T> = T extends string ? true : false;`,
    related: ['interface', 'infer'],
    docsUrl:
      'https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints',
  },
  infer: {
    category: 'Type Keywords',
    syntax: 'infer',
    description:
      'Extracts types within conditional types. Used in advanced type-level programming to pull out types from complex generic types.',
    example: `// Extract return type
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Extract array element type
type ElementType<T> = T extends (infer U)[] ? U : never;

type Num = ElementType<number[]>; // number`,
    related: ['extends', 'ReturnType'],
    docsUrl:
      'https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types',
  },
  as: {
    category: 'Type Keywords',
    syntax: 'as',
    description:
      'Type assertion that tells TypeScript to treat a value as a specific type. Use sparingly - prefer type guards. Can be unsafe if used incorrectly.',
    example: `const input = document.getElementById("input") as HTMLInputElement;
input.value = "hello";

// Const assertion
const colors = ["red", "green", "blue"] as const;
// Type: readonly ["red", "green", "blue"]`,
    related: ['satisfies'],
    docsUrl:
      'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions',
  },
  satisfies: {
    category: 'Type Keywords',
    syntax: 'satisfies',
    description:
      'Validates that a value matches a type while preserving the exact type. Safer than type assertions - provides validation without widening the type.',
    example: `type Color = "red" | "green" | "blue" | { r: number; g: number; b: number };

const palette = {
  primary: "red",
  secondary: { r: 0, g: 255, b: 0 }
} satisfies Record<string, Color>;

// palette.primary is "red", not string
// palette.secondary is { r: number; g: number; b: number }`,
    related: ['as', 'type'],
    docsUrl:
      'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator',
  },
  Union: {
    category: 'Type Operators',
    syntax: '|',
    description:
      'Creates a type that can be one of several types. The value must match at least one of the union members.',
    example: `type Status = "pending" | "approved" | "rejected";
type ID = string | number;

function printId(id: string | number) {
  console.log(id);
}`,
    related: ['Intersection', 'type'],
    docsUrl:
      'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types',
  },
  Intersection: {
    category: 'Type Operators',
    syntax: '&',
    description:
      'Combines multiple types into one. The resulting type has all properties from all constituent types.',
    example: `type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;
// Type: { name: string; employeeId: number }

const staff: Staff = {
  name: "John",
  employeeId: 123
};`,
    related: ['Union', 'type'],
    docsUrl:
      'https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types',
  },
  Partial: {
    category: 'Utility Types',
    syntax: 'Partial<T>',
    description:
      'Makes all properties in T optional. Useful for update functions where not all fields need to be provided.',
    example: `interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
// Type: { id?: number; name?: string; email?: string }

function updateUser(id: number, updates: Partial<User>) {
  // updates can have any subset of User properties
}`,
    related: ['Required', 'Pick', 'Omit'],
    docsUrl:
      'https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype',
  },
  Required: {
    category: 'Utility Types',
    syntax: 'Required<T>',
    description:
      'Makes all properties in T required, removing any optional modifiers. Opposite of Partial.',
    example: `interface Config {
  host?: string;
  port?: number;
  ssl?: boolean;
}

type RequiredConfig = Required<Config>;
// Type: { host: string; port: number; ssl: boolean }

const config: RequiredConfig = {
  host: "localhost",
  port: 3000,
  ssl: true
};`,
    related: ['Partial', 'Pick', 'Omit'],
    docsUrl:
      'https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype',
  },
  Pick: {
    category: 'Utility Types',
    syntax: 'Pick<T, K>',
    description:
      'Creates a type by picking a set of properties K from T. Useful for creating subsets of existing types.',
    example: `interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserPreview = Pick<User, "id" | "name">;
// Type: { id: number; name: string }`,
    related: ['Omit', 'Partial'],
    docsUrl:
      'https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys',
  },
  Omit: {
    category: 'Utility Types',
    syntax: 'Omit<T, K>',
    description:
      'Creates a type by omitting a set of properties K from T. Opposite of Pick - removes specified properties.',
    example: `interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Omit<User, "password">;
// Type: { id: number; name: string; email: string }`,
    related: ['Pick', 'Partial'],
    docsUrl:
      'https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys',
  },
  ReturnType: {
    category: 'Utility Types',
    syntax: 'ReturnType<T>',
    description:
      'Extracts the return type of a function type. Useful for inferring types from existing functions without duplicating type definitions.',
    example: `function getUser() {
  return { id: 1, name: "John", email: "john@example.com" };
}

type User = ReturnType<typeof getUser>;
// Type: { id: number; name: string; email: string }`,
    related: ['typeof', 'Parameters'],
    docsUrl:
      'https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype',
  },
  Record: {
    category: 'Utility Types',
    syntax: 'Record<K, T>',
    description:
      'Creates an object type with keys K and values T. Useful for creating dictionaries or maps with specific key and value types.',
    example: `type Role = "admin" | "user" | "guest";

type Permissions = Record<Role, string[]>;
// Type: { admin: string[]; user: string[]; guest: string[] }

const permissions: Permissions = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"]
};`,
    related: ['Pick', 'Omit'],
    docsUrl:
      'https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type',
  },
}

export function TypeScriptLookup() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTerm, setSelectedTerm] = useState(null)

  const filteredTerms = Object.entries(TYPESCRIPT_TERMS).filter(
    ([key, term]) =>
      key.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    if (e.target.value && selectedTerm) {
      setSelectedTerm(null)
    }
  }

  const handleTermClick = (termKey) => {
    setSelectedTerm(termKey)
    setSearchQuery('')
  }

  const handleRelatedClick = (termKey) => {
    setSelectedTerm(termKey)
    document.getElementById('explanation-panel')?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    })
  }

  const selectedTermData = selectedTerm ? TYPESCRIPT_TERMS[selectedTerm] : null

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          TypeScript Lookup
        </h1>
        <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-500">
          Inspired by{' '}
          <a
            href="https://www.joshwcomeau.com/operator-lookup/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-greptile-green hover:underline"
          >
            Josh Comeau&apos;s Operator Lookup
          </a>
        </p>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Enter a TypeScript term to learn more about it:
        </p>
      </div>

      {/* Search Input */}
      <div className="relative mx-auto mb-12 max-w-2xl">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 stroke-zinc-400 dark:stroke-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for a term..."
            className="w-full border-b-2 border-zinc-200 bg-transparent py-3 pl-12 pr-4 text-zinc-800 placeholder-zinc-400 transition-colors focus:border-greptile-green focus:outline-none dark:border-zinc-700 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-greptile-green"
          />
        </div>
      </div>

      {/* "Or, pick one:" label */}
      <div className="mb-8 text-center">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Or, pick one:
        </p>
      </div>

      {/* Term Grid */}
      <div className="mx-auto mb-12 flex max-w-5xl flex-wrap justify-center gap-2">
        {filteredTerms.map(([key, term]) => (
          <button
            key={key}
            onClick={() => handleTermClick(key)}
            className={`
              rounded-md px-3 py-2.5 font-mono text-sm
              transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-greptile-green focus:ring-offset-2 dark:focus:ring-offset-zinc-900
              ${
                selectedTerm === key
                  ? 'bg-greptile-green text-white shadow-md'
                  : 'bg-white text-zinc-800 hover:bg-zinc-100 hover:shadow-sm dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700'
              }
            `}
          >
            {term.syntax}
          </button>
        ))}
      </div>

      {/* No results message */}
      {filteredTerms.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-zinc-600 dark:text-zinc-400">
            No terms found matching &ldquo;{searchQuery}&rdquo;
          </p>
        </div>
      )}

      {/* Explanation Panel */}
      {selectedTermData && (
        <div
          id="explanation-panel"
          className="mx-auto mt-16 max-w-4xl animate-fadeIn"
        >
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 shadow-lg dark:border-zinc-700 dark:bg-zinc-800/50">
            {/* Term Header */}
            <div className="mb-6 flex items-start justify-between border-b border-zinc-200 pb-6 dark:border-zinc-700">
              <div>
                <h2 className="mb-3 font-mono text-3xl font-bold text-zinc-800 dark:text-zinc-100">
                  {selectedTermData.syntax}
                </h2>
                <span className="inline-block rounded-full bg-greptile-green/20 px-3 py-1 text-xs font-semibold text-greptile-green dark:bg-greptile-green/30 dark:text-greptile-green">
                  {selectedTermData.category}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="mb-6 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              {selectedTermData.description}
            </p>

            {/* Code Example */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
                Example
              </h3>
              <Highlight
                theme={{
                  plain: {
                    color: '#fafafa', // zinc-100
                    backgroundColor: '#18181b', // zinc-900
                  },
                  styles: [
                    {
                      types: ['keyword', 'rule', 'important'],
                      style: { color: '#c084fc' }, // purple-400
                    },
                    {
                      types: ['function', 'method'],
                      style: { color: '#f472b6' }, // pink-400
                    },
                    {
                      types: ['class-name', 'maybe-class-name', 'builtin'],
                      style: { color: '#f472b6' }, // pink-400
                    },
                    {
                      types: ['string', 'template-string', 'attr-value'],
                      style: { color: '#34d399' }, // emerald-400
                    },
                    {
                      types: ['number', 'boolean'],
                      style: { color: '#fb923c' }, // orange-400
                    },
                    {
                      types: ['operator', 'combinator'],
                      style: { color: '#22d3ee' }, // cyan-400
                    },
                    {
                      types: ['property', 'attr-name'],
                      style: { color: '#93c5fd' }, // blue-300
                    },
                    {
                      types: ['type', 'type-annotation', 'return-type'],
                      style: { color: '#67e8f9' }, // cyan-300
                    },
                    {
                      types: ['constant'],
                      style: { color: '#fdba74' }, // orange-300
                    },
                    {
                      types: ['parameter'],
                      style: { color: '#e4e4e7' }, // zinc-200
                    },
                    {
                      types: ['regex'],
                      style: { color: '#f472b6' }, // pink-400
                    },
                    {
                      types: ['interpolation'],
                      style: { color: '#67e8f9' }, // cyan-300
                    },
                    {
                      types: ['punctuation', 'attr-equals'],
                      style: { color: '#a1a1aa' }, // zinc-400
                    },
                    {
                      types: ['comment'],
                      style: { color: '#71717a', fontStyle: 'italic' }, // zinc-500
                    },
                    {
                      types: ['tag', 'selector'],
                      style: { color: '#f472b6' }, // pink-400
                    },
                    {
                      types: ['module'],
                      style: { color: '#c084fc' }, // purple-400
                    },
                  ],
                }}
                code={selectedTermData.example}
                language="typescript"
              >
                {({
                  className,
                  style,
                  tokens,
                  getLineProps,
                  getTokenProps,
                }) => (
                  <pre
                    className={`${className} overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-900 p-5 font-mono text-sm shadow-inner dark:border-zinc-700 dark:bg-black`}
                    style={style}
                  >
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>

            {/* Related Terms */}
            {selectedTermData.related && selectedTermData.related.length > 0 && (
              <div className="mb-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
                  Related Terms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTermData.related.map((relatedKey) => (
                    <button
                      key={relatedKey}
                      onClick={() => handleRelatedClick(relatedKey)}
                      className="rounded-md bg-zinc-200 px-3 py-1.5 font-mono text-sm text-zinc-800 transition-all duration-200 hover:bg-greptile-green hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-greptile-green focus:ring-offset-2 dark:bg-zinc-700 dark:text-zinc-100 dark:focus:ring-offset-zinc-800"
                    >
                      {relatedKey}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Learn More Link */}
            <div className="border-t border-zinc-200 pt-4 dark:border-zinc-700">
              <a
                href={selectedTermData.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-greptile-green hover:underline"
              >
                Learn more in the TypeScript docs
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Attribution Footer */}
      <div className="mt-20 border-t border-zinc-200 pt-8 dark:border-zinc-700">
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-500">
          UI/UX design inspired by{' '}
          <a
            href="https://www.joshwcomeau.com/operator-lookup/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-greptile-green hover:underline"
          >
            Josh Comeau&apos;s Operator Lookup
          </a>{' '}
          • Content and examples tailored for TypeScript
        </p>
      </div>
    </div>
  )
}
