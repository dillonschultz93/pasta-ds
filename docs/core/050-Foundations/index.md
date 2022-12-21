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
      <li>Tokens strong inheritance scheme</li>
      <li>Components strong decoupling scheme</li>
      <li>UI vs Content clear dichotomy</li>
      <li>Usability over maintenance Rule</li>
      <li>Document as you build Rule</li>      
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
{: .no_toc}

The first rule of Pasta is that no information — specifically the Design Logic — shall be lost or turned implicit at any granularity of the specifications and implementation. In other words, within Pasta and all its subscriber-platforms, all attributes can always be reverse-engineered to the primal design thinking behind them.

#### Reversibility
{: .no_toc}

This principle and first Rule implies that the information chain inside Pasta is Reversible. This can be translated as follow: from any given Pattern you can easily list all its constituent Parts (and Tokens) _AND_ starting from any given Token (or part) you can easily list all the Patterns built with it. Symmetry.

#### Consequent rules from the above
{: .no_toc}

- All Tokens have **explicite names** that embed their satus within the inheritance flow
- All Tokens must **maintain these explicit names down to their implementation**
- **The Resolution of Tokens is always "called out"** and done as early as possible without violating Rule &#35;1
- **Several Categories of Tokens are required** to fullfil these principles and rules (`Super`, `Math`, `Overrides`, `Aliases`, `Proxy`, etc.)
- All Pasta's Artifacts (Primitives, Components, Patterns) have a **Unique Identifier** (UID)

### Accessible
{: .no_toc}

An accessible user interface (UI) is a design that makes it easy for people with disabilities to use and interact with a product, <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">website</a>, or application. Accessible UIs consider the needs of users with disabilities such as visual impairments, motor impairments, and cognitive impairments, and provide features and design elements that enable these users to navigate and use the product effectively.

Some examples of features that might be included in an accessible UI include:

- Large, high-contrast text to make it easier for users with visual impairments to read
- Alt text for images to provide a text-based description of the content for users who are unable to see the images
- Keyboard-only navigation to allow users who are unable to use a mouse to navigate and interact with the product
- Audio descriptions of visual content for users who are unable to see the content
- Simplified and consistent navigation to make it easier for users with cognitive impairments to understand and use the product.

Designing an accessible UI requires careful consideration of the needs of users with disabilities and testing to ensure that the product is easy to use for these users. It is an important aspect of inclusive design and can help to ensure that products and services are available to a wider audience.

### Transferable
{: .no_toc}

Pasta declares and repesents its outputs (Components) using a platform agnostic Abstraction: its formalism is not opinionated and thus can be translated into any other forms to target any platform (iOS, Web, Android) or tool (Figma, Sketch).

Pasta is built using JSON (in fact json5), Javascript and a minimal number of external libraries or frameworks. 
It's simple, and portable.

