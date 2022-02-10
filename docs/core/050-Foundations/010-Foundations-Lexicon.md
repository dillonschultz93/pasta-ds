---
title: Lexicon # title case
permalink: foundations/lexicon # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
parent: Foundations # title case
layout: default
nav_order: 10
---

# Lexicon
{: .no_toc}

<a href="https://docs.google.com/document/d/1jLctpKyaXQ1c-7_8Sq6btXVsom8lTNNVsCfADxyvcWk/export?format=pdf" alt="WIP" class="btn">Cheat sheet (PDF)</a>


<hr>

- TOC
{:toc}

### Pasta

Pasta refers to Yummly Product Language or its Design System subpart. You can find "YPL" or "PST" as acronyms referring to Pasta.

### Zero Information Loss Rule

The first rule of Pasta is that no information — specifically the Design Logic — shall be lost or turned implicit at any level/granularity of the specifications and implementation. In other words,  within Pasta and all its client platforms, all implemented attributes can always be reverse-engineered to the primal design thinking behind it.

### Nomenclature

Pasta is using a strict naming convention as the main means to comply with its Zero Information Loss Rule.

### Tokens

Tokens, also known as Design Tokens, are the constants required to implement all elements of Yummly's products interface or content.
They are the quarks of Atomic Design.

### Choices

Choices, also known as Choice Tokens, are the foundational choices made for design. Brand Color Palettes, Sizes and Spaces Relationship (Scales), Font Face, etc.

### Decisions

Decisions, also known as Decision Tokens, are how and where the choices are injected into the design elements: the brand accent color can be used for a button background attribute in idle state or/and an icon, etc.
Choices feed Decisions.

### Math, Alias, Super, and Proxy Tokens

Other categories of tokens can be used. They are explicit intermediates that help to guarantee Pasta Zero Information Loss Rule.


### Pasta Tokens

Pasta or Raw tokens, or Pasta Tokens, are the tokens before they are translated to the platform's specific equivalent.

### Resolving

Resolving tokens is the operation that reduces tokens into an end result (ie: 12pt) or into another or intermediate tokens (ie: aliases, proxy).

### Apparatuses

Pasta Apparatuses are a collection of scripts that automates tedious tasks and prevent human errors. Examples: calculating accessibility colors, interpolating the tracking in relation to font sizes, following Pasta tokens naming convention, etc.

### Pasta Taxonomy

Following the Atomic Design approach, Pasta uses a hierarchy of objects that are nested in each other in a logical way: Choices Tokens, Decisions Tokens, Primitives, Components, Patterns, Features.

![Pasta Atomic Design]({{site.baseurl}}/assets/images/YPL-DOC-PastaAtomicDesign.png)

### Primitives

Are the simplest visual artifact used as the elementary brick to build most objects: text styles, background "material", icons, and glyphs.

### Components

Autonomous items that fulfill a function and are used to build Patterns. Components can surface interaction, states, animations: buttons, slider, radio buttons, form fields.

### Patterns

Patterns are coherent assemblages of components providing a conventional UI block: a card, a carousel, a navigation bar.

### Features

Features are a collection of Patterns and components that serves a specific task within a user experience or user flow: a shopping list, an onboarding funnel, a search result page.


### Translators

The translators, aka attributes mappers, are a set of scripts that uses the Attributes Dictionary to translate the Raw Tokens into Platform-specific equivalent (Cf. Amazon Style Dictionary).

### Attributes Dictionary

The attributes Dictionary is a Hash Table that maps Pasta Raw Decisions Tokens to their platform's specific counterparts.

### Proxy Tokens

Proxy tokens are the resolution of attributes that cannot be directly translated to specific platforms (ie: margins do not exist in iOS which implies the generation of a "fringe" Proxy Token — and [its strict resolution protocol]({{site.baseurl}}/foundations/challenges#rules) — to be finally used to feed the iOS "padding" attributes).

### Platforms

All systems Pasta is servicing its tokens and specifications to. Currently: Figma, iOS, Web, Android.

### Operations

Pasta Operations are all operations required by Pasta: committee meetings, maintenance, curation, component election workflow, etc.

### Pasta Committee

The [Pasta Committee]({{site.baseurl}}/committee) has ownership and  is responsible for the maintenance, decisions, curation, documentation, and implementation of Pasta. It meets at least once a week.
Its members (curators, contributors, subscribers, and advisors) are appointed  each quarter.
