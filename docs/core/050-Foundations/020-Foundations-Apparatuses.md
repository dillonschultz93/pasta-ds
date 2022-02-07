---
title: Apparatuses # title case
permalink: foundations/apparatuses # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
parent: Foundations # title case
layout: default
nav_order: 20
---

# Apparatuses
{: .no_toc}

- TOC
{:toc}

## What are apparatuses?

Apparatuses are a collection or individual pieces of logic that a designer uses to make choices in a Design System synthesized down to reusable algorithms to dynamically generate token values. An apparatus can be as simple as generating a sizing scale, to as complex as creating a color palette based off of a base hue. It all boils down to the math based approach to Pasta.

## Types of apparatuses
There are four types of apparatuses that Pasta utilizes
- Utility
- Dimension
- Typography
- Color

Work in progress
{: .label}
### Utility
Utility apparatuses can be used for the mundane or simple repetitive tasks involved with token maintenance. For example, generating token key names.

<hr>

#### `prefixBuilder(...)`

```js
prefixBuilder(
  options: Object
);
```

Generates the prefix or domain of the token.

| **parameter**                                                      | **required** |
|--------------------------------------------------------------------|--------------|
| `options: { namespace: string, project: string, kingdom: string }` | Yes          |

<hr>

### Dimension
Dimension apparatuses are used to create the various values of tokens associated with scale, space, sizing, factors, and breakpoints.

<hr>

#### `generateScale(...)`

```js
generateScale(
  scales: Array<string>,
  scaleOptions: Object,
  namingOptions: Object,
  description: String,
  type: String
);
```

Generates all scale tokens using a set of algorithms based off of the scale options that are passed as a parameter.

| **parameter**                                                            | **required** |
|--------------------------------------------------------------------------|--------------|
| `scales: ['geoA', 'arithA', 'arithB']`                                   | Yes          |
| `scaleOptions: { base: number, ratio: number, baseIndex: number }`       | Yes          |
| `namingOptions: { namespace: string, project: string, kingdom: string }` | Yes          |
| `description: string`                                                    | No           |
| `type: string`                                                           | No           |

<hr>

#### `generateSpace(...)`

```js
generateSpace(
  namingOptions: Object,
  description: String,
  type: String
);
```

Generates all spacing tokens as choices using the scale token keys as values.

| **parameter**                                                            | **required** |
|--------------------------------------------------------------------------|--------------|
| `namingOptions: { namespace: string, project: string, kingdom: string }` | Yes          |
| `description: string`                                                    | No           |
| `type: string`                                                           | No           |

<hr>

#### `generateStaticSize(...)`

```js
generateStaticSize(
  namingOptions: Object,
  description: String,
  type: String
);
```

Generates all static size tokens as choices using a set of constant values.

| **parameter**                                                            | **required** |
|--------------------------------------------------------------------------|--------------|
| `namingOptions: { namespace: string, project: string, kingdom: string }` | Yes          |
| `description: string`                                                    | No           |
| `type: string`                                                           | No           |

<hr>

#### `generateFactor(...)`

```js
generateFactor(
  namingOptions: Object,
  description: String,
  type: String
);
```

Generates all factor tokens as choices using a set of constant values.

| **parameter**                                                            | **required** |
|--------------------------------------------------------------------------|--------------|
| `namingOptions: { namespace: string, project: string, kingdom: string }` | Yes          |
| `description: string`                                                    | No           |
| `type: string`                                                           | No           |

<hr>

#### `generateBreakpoint(...)`

```js
generateBreakpoint(
  namingOptions: Object,
  description: String,
  type: String
);
```

Generates all breakpoint tokens as choices using a set of constant values.

| **parameter**                                                            | **required** |
|--------------------------------------------------------------------------|--------------|
| `namingOptions: { namespace: string, project: string, kingdom: string }` | Yes          |
| `description: string`                                                    | No           |
| `type: string`                                                           | No           |

<hr>

### Typography
The typography apparatuses are used to help generate typography choice tokens and typography decision tokens.

<hr>

#### `getTracking(...)`

```js
generateBreakpoint(
  fontSize: Number
);
```

Gets the predicted tracking value based off of a desired font size

| **parameter**      | **required** |
|--------------------|--------------|
| `fontSize: number` | Yes          |