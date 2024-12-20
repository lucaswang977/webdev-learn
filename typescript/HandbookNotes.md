# The TypeScript Handbook Learning Notes

https://www.typescriptlang.org/docs/handbook/intro.html

## Side notes

Create a clean JS project by vite:

```bash
pnpm create vite x.x.x --template vanilla-ts
```

## TypeScript for JavaScript Programmers

- Types by Inference
- Defining Types (object, interface, type, class, primitive types(any, unknown, void, never))
- Composing Types (unions, generics)
- Structural type system

## The Basics

- Over time, you may want to be a bit more defensive against mistakes, and make TypeScript act a bit more strictly. In that case, you can use the noEmitOnError compiler option.
- Type annotations never change the runtime behavior of your program.
- This process of moving from a newer or “higher” version of ECMAScript down to an older or “lower” one is sometimes called **downleveling**.
- "strict": true in a tsconfig.json
- noImplicitAny: Turning on the noImplicitAny flag will issue an error on any variables whose type is implicitly inferred as any.
- strictNullChecks: The strictNullChecks flag makes handling null and undefined more explicit, and spares us from worrying about whether we forgot to handle null and undefined.

## Everyday Types

- The primitives: string, number, and boolean, bigint, symbol
- Arrays: Array<number>, number[]
- any: noImplicitAny
- Type Annotations on Variables: automatically infer the types
- Functions: Parameter Type Annotations, Return Type Annotations, Anonymous Functions, contextual typing
- Object Types
- Union Types
- Type Aliases and Interfaces: the differences
- Type Assertions: TypeScript only allows type assertions which convert to a more specific or less specific version of a type.
- Literal Types: Literal Inference; The "as const" suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number.
- null and undefined: strictNullChecks, Non-null Assertion Operator (Postfix !)
- Enums

## Narrowing

- Truthiness narrowing: equality narrowing, the in operator narrowing, instanceof narrowing, assignments narrowing,
- Beware of truthiness narrowing on coercing primitives such as 0, NaN, "", 0n, null, undefined, they are all coerced to false.
- Checking whether something == null actually not only checks whether it is specifically the value null - it also checks whether it’s potentially undefined. The same applies to == undefined: it checks whether a value is either null or undefined.
- Analysis of code based on reachability is called control flow analysis, and TypeScript uses this flow analysis to narrow types as it encounters type guards and assignments.
- Type predicate:
  ```Typescript
  function isFish(pet: Fish | Bird): pet is Fish {
      return (pet as Fish).swim !== undefined;
  }
  ```
- Discriminated unions and never type and exhaustiveness checking

  ```Typescript
  interface Circle {
      kind: "circle";
      radius: number;
  }

  interface Square {
      kind: "square";
      sideLength: number;
  }

  type Shape = Circle | Square;

  function getArea(shape: Shape) {
      switch (shape.kind) {
          case "circle":
          return Math.PI * shape.radius ** 2;
          case "square":
          return shape.sideLength ** 2;
          default:
          const _exhaustiveCheck: never = shape;
          return _exhaustiveCheck;
      }
  }
  ```

  Adding a new member to the Shape union, will cause a TypeScript error:

  ```Typescript
  interface Triangle {
    kind: "triangle";
    sideLength: number;
  }

  type Shape = Circle | Square | Triangle;

  function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
        return Math.PI * shape.radius ** 2;
        case "square":
        return shape.sideLength ** 2;
        default:
        const _exhaustiveCheck: never = shape;
    // Error:Type 'Triangle' is not assignable to type 'never'.

        return _exhaustiveCheck;
    }
  }
  ```

## More on Functions

- Use a type alias to name a function type.
- What is Call Signature of a Typescript function? What is Constructor Signature?
- Write good generic functions:
  - Push type parameters down
  - Use fewer type parameters
  - Type parameters should appear twice
- When writing a function type for a callback, never write an optional parameter unless you intend to call the function without passing that argument
- What is Function Overload Signatures and the Implementation Signature?
- Always prefer parameters with union types instead of overloads when possible.
- Understand those additional types: void, object, unknown, never, Function
- Understand rest parameters and rest arguments
- Use "as const" to make arrays immutable:
  ```Typescript
  const args = [8, 5] as const;
  const angle = Math.atan2(...args); // OK
  ```
- Try to understand this code piece on "this" in a function:

  ```Typescript
  interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
  }

  class DBImpl implements DB {
    private users: User[];

    constructor(users: User[]) {
      this.users = users;
    }

    filterUsers(filter: (this: User) => boolean): User[] {
      return this.users.filter(filter.bind(this));
    }
  }

  const db = new DBImpl([/* some users */]);
  const admins = db.filterUsers(function (this: User) {
    return this.admin;
  });
  ```

- Return of void:

  - A contextual function type is a function type that provides type information for a function based on where it is assigned.
  - A contextual function type (type is inferred by compiler) with a void return type (type voidFunc = () => void), when implemented, can return any other value, but it will be ignored.

    ```Typescript
    type voidFunc = () => void;

    const f1: voidFunc = () => {
      return true;
    };
    ```

  - But when a literal function definition has a void return type, that function must not return anything.

    ```Typescript
    function f2(): void {
      // @ts-expect-error
      return true;
    }

    const f3 = function (): void {
      // @ts-expect-error
      return true;
    };
    ```

## Object Types

- Property Modifiers
  - Optional Properties
  ```Typescript
  function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {}
  ```
  - readonly Properties
  ```Typescript
  interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
  }
  ```
  - Index Signatures
  ```Typescript
  interface ReadonlyStringArray {
    readonly [index: number]: string;
  }
  ```
- Excess Property Checks

  ```Typescript
  interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: unknown;
  }
  ```

- Extending Types and Intersection Types

  ```Typescript
  // Intersection
  interface Colorful {
    color: string;
  }
  interface Circle {
    radius: number;
  }

  type ColorfulCircle = Colorful & Circle;

  // Extending
  interface Colorful {
    color: string;
  }

  interface Circle {
    radius: number;
  }

  interface ColorfulCircle extends Colorful, Circle {}
  ```

- Generic Object Types: The Array Type, The ReadonlyArray Type, Tuple Types, readonly Tuple Types

## Classes

## Creating Types from Types

## Modules - Theory

- This document will focus on two of the most important module systems today: ECMAScript modules (ESM) and CommonJS (CJS).
- TypeScript detects that a file is a CommonJS or ECMAScript module, it starts by assuming that file will have its own scope.
- Who is the host? the system that ultimately consumes the output code to direct its module loading behavior.
- Understand the rules of the host enough, to compile files into a valid **output module format**, to ensure that imports in those **outputs** will **resolve successfully**, and to know what **type** to assign to **imported names**.
- The module compiler option (the compiler needs an accurate understanding of the module system so it can type check properly)
  - control the module format of any JavaScript that gets emitted during compilation
  - serves to inform the compiler about how the module kind of each file should be detected
  - how different module kinds are allowed to import each other
  - whether features like import.meta and top-level await are available
- Node.js understands both ES modules and CJS modules, but the format of each file is determined by its file extension and the type field of the first package.json file.
- TypeScript applies this same algorithm to the project’s input files to determine the module kind of each corresponding output file.
- ESM and CJS interoperability
  - ESM-only. Some runtimes, like browser engines, only support what’s actually a part of the language: ECMAScript Modules.
  - Bundler-like. ESM-transpiled-to-CJS files interacted with hand-written-CJS files implied a set of permissive interoperability rules.
  - Node.js. CommonJS modules cannot load ES modules synchronously, they can only load them asynchronously with dynamic import() calls. ES modules can default-import CJS modules, which always binds to exports.
- Module resolution is host-defined (moduleResolution). TypeScript imitates the host’s module resolution, but with types.
- The role of declaration files: the compiler assumes that wherever it sees a declaration file, there is a corresponding JavaScript file that is perfectly described by the type information in the declaration file.
  - The compiler always looks for TypeScript and declaration files first, and if it finds one, it doesn’t continue looking for the corresponding JavaScript file.
  - If it finds a TypeScript input file, it knows a JavaScript file will exist after compilation.
  - If it finds a declaration file, it knows a compilation (perhaps someone else’s) already happened and created a JavaScript file at the same time as the declaration file.

## tsconfig.json

- The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project.
- The tsconfig.json file specifies the root files and the compiler options required to compile the project.
- By invoking tsc with no input files, in which case the compiler searches for the tsconfig.json file starting in the current directory and continuing up the parent directory chain.
- By invoking tsc with no input files and a --project (or just -p) command line option that specifies the path of a directory containing a tsconfig.json file, or a path to a valid .json file containing the configurations.
- When input files are specified on the command line, tsconfig.json files are ignored.
- There may be a base configuration which you can use at [here](https://github.com/tsconfig/bases).
- Root fields
  - **files**: Specifies an allowlist of files to include in the program.
  - **extends**: The value of extends is a string which contains a path to another configuration file to inherit from.
  - **include**: Specifies an array of filenames or patterns to include in the program.
  - **exclude**: Specifies an array of filenames or patterns that should be skipped when resolving include.
  - **references**: Project references are a way to structure your TypeScript programs into smaller pieces.
  - **compilerOptions**: These options make up the bulk of TypeScript’s configuration and it covers how the language should work.
- Important compiler options:
  - **module**: You very likely want "nodenext" for modern Node.js projects and preserve or esnext for code that will be bundled.
  - **moduleResolution**: nodenext (import and require are both supported), bundler (never requires file extensions on relative paths in imports)
  - **target**: Modern browsers support all ES6 features, so ES6 is a good choice.
  - **lib**: dom, dom.iterable, esnext
  - **strict related**: strictPropertyInitialization,
