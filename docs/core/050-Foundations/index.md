---
title: Foundations # title case
permalink: foundations # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
layout: default
nav_order: 10
has_children: true
layout: default
---

# Foundations

<section class="flex-1_1-cols">
  <div>
    <h2>Principles</h2>
    <ul>
      <li>Definite: the Zero-Information Loss Rule</li>
      <li>Usability over maintenance</li>
      <li>Document as you build Rule</li>
      <li>Token strong inheritance scheme</li>
      <li>UI vs Content clear dichotomy</li>
      <li>Semantic Versioning</li>
    </ul>
  </div>
  <div>
    <h2>Ingredients</h2>
    <ul>
      <li>A <a href="{{site.baseurl}}/committee">committee</a> of curators</li>
      <li>Subscribers</li>
      <li>Governance (reccuring meetings)</li>
      <li>A <a href="{{site.baseurl}}/brand">Brand Style Guide</a></li>
      <li><a href="{{site.baseurl}}/foundations/apparatuses">Apparatuses</a> to help us automate and generate our Design Tokens</li>
      <li><a href="{{site.baseurl}}/tools">Tools</a></li>
      <li>And this very Knowledge Base (aka RTFM)</li>
    </ul>
  </div>
</section>

## Principles

### Definite, Entropy-Proof and Reversible
{: .no_toc}

#### Rule &#35;1

The first rule of Pasta is that no information — specifically the Design Logic — shall be lost or turned implicit at any granularity of the specifications and implementation. In other words, within Pasta and all its subscriber-platforms, all attributes can always be reverse-engineered to the primal design thinking behind them.

#### Reversibility

This principle and first Rule implies that the information chain inside Pasta is Reversible. This can be translated as follow: from any given Pattern you can easily list all its constituent Parts (and Tokens) _AND_ starting from any given Token (or part) you can easily list all the Patterns built with it. Symmetry.

#### Consequent rules from the above

- All Tokens have **explicite names** that embed their satus within the inheritance flow
- All Tokens must **maintain these explicit names down to their implementation**
- **The Resolution of Tokens is always "called out"** and done as early as possible without violating Rule &#35;1
- **Several Categories of Tokens are required** to fullfil these principles and rules (`Super`, `Math`, `Overrides`, `Aliases`, `Proxy`, etc.)
- All Pasta's Artifacts (Primitives, Components, Patterns) have a **Unique Identifier** (UID)

### Accessible
{: .no_toc}

### Transferable
{: .no_toc}
