---
layout: default
title: Foundation
nav_order: 2
has_children: false
---

# Foundation
{: .no_toc}
<!-- ↑ skips H1 inside TOC -->

- TOC
{:toc}


## Taxonomy

The types of objects described inside Pasta's Design System are named following an atomic design approach as advocated by [Brad Frost](https://atomicdesign.bradfrost.com/chapter-2/). Pasta is highly Design-Tokens focused, a category not represented inside Brad Frost classification. Here's the adapted atomic hierarchy used inside Pasta Design System:

<table class="type-01">
    <!-- <caption>vertical-align</caption> -->
    <thead>
        <tr>
            <th></th>
            <th>Tokens</th>
            <th>Primitives</th>
            <th>Components</th>
            <th>Patterns</th>
        </tr>
    </thead>
    <tbody>
        <tr class="faded">
            <td valign="top">B. Frost</td>
            <td valign="top"></td>
            <td valign="top">Atoms</td>
            <td valign="top">Molecules</td>
            <td valign="top">Organism</td>
        </tr>
        <tr>
            <td valign="top">Description</td>
            <td valign="top">The foundational constants used to build everything</td>
            <td valign="top">An indivisible part of a visual or UI item</td>
            <td valign="top">An autonomous item which surface clear affordance</td>
            <td valign="top">A coherent assemblage of components providing a conventional UI block</td>
        </tr>
        <tr>
            <td valign="top"></td>
            <td valign="top">
                Split in 4 categories:
                <ol>
                    <li>Choices: (as limited as possible)</li>
                    <li>Decisions: where we map the Choices to objects attributes</li>
                    <li>Aliases: sometimes used to make Tokens more human-friendly/readable</li>
                    <li>Math: logic generated tokens such as size scale and color contrast dependencies</li>
                </ol>
            </td>
            <td valign="top">
                Examples:
                <ul>
                    <li>A glyph, an icon</li>
                    <li>The control part ⦿ of a radio button</li>
                    <li>The label of a radio button</li>
                    <li>Paragraph</li>
                </ul>
            </td>
            <td valign="top">
                Examples:
                <ul>
                    <li>A radio button (control + label)</li>
                    <li>A button (shape + text)</li>
                    <li>A form field (field + label)</li>
                </ul>
            </td>
            <td valign="top">
                Examples
                <ul>
                    <li>Bar</li>
                    <li>Card</li>
                    <li>Carrousel </li>
                    <li>A search widget (field + label + icon + button)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td valign="top">Alternate Names (on other DS or Platforms)</td>
            <td valign="top">"Design Tokens"</td>
            <td valign="top">"Component" (misleading in our opinion), "Element"</td>
            <td valign="top">"Widget"</td>
            <td valign="top">"Block"</td>
        </tr>
    </tbody>
</table>


## Naming convention

Naming convention inside YPL is strict. This helps to easily identify objects just by reading their name.

![]({{site.baseurl}}/assets/images/YPL-DOC-naming-001.png)

Names are made of Stems (or Morphemes) split in 3 categories: the Domain (prefix) followed by the Selectors sequence followed by Modifiers. Stems are separated by the en dash character ` - ` (U+2013).
The first Stem is always `YPL` and if the object is interactive it always ends with a State Stem.

### Stem Categories

#### Domain

Pasta Names always include a Prefix built using our `YPL-` namespace and the Kingdom stem:

| Stem | Meaning |
| :--- | :--- | :---: |
| `TKUI_SM` | Super Math UI Token |
| `TKUI_SC` | Super Choice UI Token |
| `TKUI_M` | UI Math Token |
| `TKUI_C` | UI Choice Token |
| `TKUI_D` | UI Decision Token |
| `TKUI_A` | UI Alias Token |
| `TK_C_` | **Prefix for Content Tokens** replace the first 5 letters above to infer the name of Content Related tokens |

#### Selector

The Selectors Stems are often aggregated into a sequence that mimics CSS selectors logic. They go from lowest to highest granularity, from left to right. In the example addressed here we have to follow this specific order:

```
Parent(s) (Container) › Object › Object Feature › Object Feature Attribute
```

In other words a `hero-button-border-color` stems-sequence mimics the following CSS:

```css
.hero button {
    border-color: #333;
}
```
↑ The class `.hero` is a div (block) containing the targeted button component. Follows the Feature-Attribute sequence, in this case targeting the color of the border. Another example: `border-radius` would have targeted the radius of the border instead (duh!).

Some example of Selectors:

| Examples | Type | |
| :--- | ---: | :--- |
| `hero` | Parent | Container, parent of grand-parent of the target |
| `article` | Parent | Container, parent of grand-parent of the target |
| `button` | Component | targeted component |
| `h1` | Primitive | targeted primitive |
| `radio` | Component | targeted component |
| `li` | Component |targeted component|
| `border` | Component Feature |targeted feature|
| `background` | Component Feature |targeted feature|
| `Color` | Feature of Component Attribute |targeted [attribute/property](https://en.wikipedia.org/wiki/Attribute_(computing)#:~:text=display%20the%20checked%20attribute%20and%20property%20of%20a%20checkbox%20as%20it%20changes.)|

Consequently, the variable below is a Decision Token that should only be applied to buttons contained inside a `hero` block (pattern) and that will target its border-color attribute (and set its property to #333):

```scss
$YPL-TKUID-hero-button-border-color: #333;
```

### Modifiers

Modifiers modify/override an object style when applied.
They are split in 3 categories: Schemes, Discrete and States.

#### Schemes

Schemes are large-scope modifiers, they usually applies to a vast set of objects. When forming a sequence Schemes Types follow a hierarchy and should be presented in this order: Mode › Theme › Compliance-Criteria

| Examples | Type | |
| :--- | ---: | :--- |
| `MD_dark` | Mode | Modes are the largest scope for styling, they encompass sub-schemes such as Themes and Compliance guidelines |
| `pink` | Theme | Themes, or Skins, are often used to give a different flavor or note to sections of a GUI (ie: Pro) or bring diversity to content |
| `WCAG_AA` | Compliance Criteria | Those schemes are used to match specific guidelines such as WCGA |

#### Discrete Modifiers

Discrete Modifiers influence subsets of objects or specific objects within a same scope.

| Examples | Type | Description |
| :--- | ---: | :--- |
| `CTA` | Variant | A Call To Action control |
| `primary` | Variant | Often a boeotian way to address Selected or Highlighted states |
| `alert` | Semantic | Styles an object by adding a semantic dimension to it |
| `small` | Attribute | Selects objects via another of their attributes |

#### States

States are dynamic Modifiers, they vary in time following various inputs and feedback including user interaction.

| Stem | Meaning | Description |
| :--- | :---: | :--- |
| `i` | Idle | A control is on its active default State |
| `o` | Over | On desktop, a pointer is over the control |
| `p` | Pressed or touched | When control is clicked or touched |
| `d` | Disabled | Selects objects via one of their attributes |

| Stem | Meaning | Description |
| :--- | :---: | :--- |
| `hi` | Highlighted Idle | A control is on a Focused, Selected or Highlighted Idle state |
| `ho` | Highlighted Overed | A control is on a Focused or Highlighted Over state |
| `hp` | Highlighted Pressed | A control is on a Focused or Highlighted Pressed state |
| `hu` | Highlighted Unfocused | The unselected/unfocus highlighted state (hu) is used when a control has the focus but its parent container loses the focus |

Consequently, the variable below is a Decision Token that should only be applied to CTA buttons contained inside a `hero` block (pattern) and that will target its border-color attribute when in a highlighted-idle state if the dark-mode is active:

```scss
$YPL-TKUID-hero-button-border-color-MD_dark-CTA-hi: #333;
```


### Index convention


|Index|Font Weight|Luminance|
| --- | --- | --- |
| 100 | Extra or Ultra Light | Y ≃ 90 |
| 200 | Light or Thin | Y ≃ 80 |
| 300 | Book or Demi | Y ≃ 70 |
| **• 400** | Regular or Normal | Y ≃ 60 |
| 500 | Medium | Y ≃ 50 |
| 600 | Semibold, Demibold | Y ≃ 40 |
| 700 | Bold | Y ≃ 30 |
| 800 | Black, Extra Bold or Heavy | Y ≃ 20 |
| 900 | Extra or Ultra Black, Fat, Poster | Y ≃ 10 |
| > 900 | Required for other categories |  |


<!--
## Criteria

Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.

### Inclusiveness

Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.

### Dark Mode

Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.

#### Colors shift

Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.

#### Fonts weight shift

Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.

### Icons platforms-contextual semantics

Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.

### Adaptive-Responsive-ness savviness

Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.

### Engineering & design bridging

Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.

### Ethical Design

Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. -->
