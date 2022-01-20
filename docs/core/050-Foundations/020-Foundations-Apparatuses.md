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

Work in progress
{: .label}
### Dimension
Dimension apparatuses are used to create the various values of tokens associated with scale, space, sizing, factors, and breakpoints.

<hr>

#### `generateAllScaleTokens(...)`

```js
generateAllScaleTokens(
  scales: Array<string>,
  scaleOptions: Object,
  namingOptions: Object
);
```

Generates all scale tokens using a set of algorithms based off of the scale options that are passed as a parameter.

| **parameter**                                                            | **required** |
|--------------------------------------------------------------------------|--------------|
| `scales: ['geoA', 'arithA', 'arithB']`                                   | Yes          |
| `scaleOptions: { base: number, ratio: number, baseIndex: number }`       | Yes          |
| `namingOptions: { namespace: string, project: string, kingdom: string }` | Yes          |

<hr>

#### `generateAllSpaceTokens(...)`

```js
generateAllSpaceTokens(
  namingOptions: Object
);
```

Generates all spacing tokens as choices using the scale token keys as values.

| **parameter**                                                            | **required** |
|--------------------------------------------------------------------------|--------------|
| `namingOptions: { namespace: string, project: string, kingdom: string }` | Yes          |

<hr>

#### `generateAllStaticSizeTokens(...)`

```js
generateAllStaticSizeTokens(
  namingOptions: Object
);
```

Generates all static size tokens as choices using a set of constant values.

| **parameter**                                                            | **required** |
|--------------------------------------------------------------------------|--------------|
| `namingOptions: { namespace: string, project: string, kingdom: string }` | Yes          |

<hr>
