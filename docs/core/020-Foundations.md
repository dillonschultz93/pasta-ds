---
title: Foundations # title case
permalink: foundations # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
layout: default
nav_order: 20
---

# Foundations
{: .no_toc}
<!-- ↑ skips H1 inside TOC -->

- TOC
{:toc}

## Principles

### Accessible
{: .no_toc}

{: .no_toc}

### Definite
{: .no_toc}

{: .no_toc}

### Transferable
{: .no_toc}

{: .no_toc}

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

## Tokens

We distinguish tokens targeting *User Interface* elements from *Content* elements:

| Stem Prefix | Meaning |
| :--- | :--- |
| `TKUI_` | User Interface Token |
| `TK_C_` | Content Token |


### Choices, Decisions and Aliases
{: .no_toc}


Tokens are splits into 3 main catageories:

- `Choices` are the style choices that define look'n feel of the system at a high level
- `Decisions` are where the previous choices are injected inside the objects library
- `Aliases` are tokens pointing to another token but have a more user-friendly name

| Stem Example | Meaning | Prefix |
| :--- | :--- | :---: |
| `TKUI_C` | UI Choice Token | `YPL-TKUI_C-` |
| `TK_C_A` | Content Alias Token | `YPL-TK_C_A-` |
| `TKUI_D` | UI Decision Token | `YPL-TKUI_D-` |


### Math Tokens
{: .no_toc}


`Math` Tokens contain math operations. We do not distinguish between Math and Decisions, aka a Decision token can be substitute with a Math Token.


| Stem Example | Meaning | Prefix |
| :--- | :--- | :---: |
| `TKUI_M` | UI Math Token | `YPL-TKUI_M-` |
| `TK_C_M` | Content Math Token | `YPL-TK_C_M-` |


### Super Tokens
{: .no_toc}


At the higher possible scope Pasta has Super Tokens or "Supers".
They a the few Tokens that rule them all.

NB: Decisions Tokens cannot be Supers.

| Stem | Meaning | Prefix |
| :--- | :--- | :---: |
| `TKUI_SC` | Super Choice Token | `YPL-TKM-` |
| `TKUI_SM` | Super Math Token | `YPL-TKM-` |
| `TKUI_SA` | Super Alias Token | `YPL-TKSC-` |


## Naming convention

Naming convention inside YPL is strict. This helps to easily identify objects just by reading their name.

### Plural vs Singular
{: .no_toc}


The name (stem) of categories or types of attribute are plural. ie:

`colors`, `ratios`, `radii`

The name (stem) of an item, or one instance, of an attribute are singular. ie:

`color`, `ratio`, `radius`

This helps to distinguish groups from singular items, easily.

### Name construction and Stems
{: .no_toc}


To understand the difference between Choices and Decisions Tokens please refer to [this section]({{site.baseurl}}/foundations#choices-decisions-and-aliases).

#### Choices
{: .no_toc}

{: .no_toc}

![]({{site.baseurl}}/assets/images/YPL-DOC-naming-choices-01.png)

#### Decisions
{: .no_toc}

{: .no_toc}

![]({{site.baseurl}}/assets/images/YPL-DOC-naming-decisions-01.png)

Names are made of Stems (or Morphemes) split in 3 categories: the Domain (prefix) followed by the Selectors sequence followed by Modifiers. Stems are separated by the dot character ` . ` .
Once exproted, the first Stem is always `YPL`. If the object is interactive it always ends with a State Stem.

### Stem Categories
{: .no_toc}


#### Domain
{: .no_toc}

{: .no_toc}


##### Namespace
{: .no_toc}

{: .no_toc}

Within figma the Namespace `YPL` is ignored, but Pasta Tokens names always includes it within their Prefixes once exported.

##### Project
{: .no_toc}

{: .no_toc}

Pasta structure allows the creation of siloed Projects. Consequently, the token names must always include the Project stem it belongs to. Examples:

| Stem | Project |Description|
| :--- | :--- | :---: |
|`FFL` |Farfalle|Yummly main design system|
|`LGN` |Linguine|Design System template - Sandbox for future projects|

##### Kingdom
{: .no_toc}

{: .no_toc}

The Kingdom defines what category of token you are dealing with:

| Stem | Meaning | |
| :--- | :--- | :---: |
| `TKUI_SC` | Super Choice UI Token |
| `TKUI_SM` | Super Math UI Token |
| `TKUI_M` | UI Math Token |
| `TKUI_C` | UI Choice Token |
| `TKUI_D` | UI Decision Token |
| `TKUI_A` | UI Alias Token |
| `TK_C_` | **Prefix for Content Tokens** replace the first 5 letters above to infer the name of Content Related tokens |

#### Selector
{: .no_toc}

{: .no_toc}

The Selectors Stems are often aggregated into a sequence that mimics CSS attributes logic. In the example addressed here we have to follow this specific order:

```
Object › Object Feature › Object Feature Attribute › Parent (Modifier) 
```

In other words a `button.border.color.hero` stems-sequence maps to the following CSS:

```css
.hero button {
    border-color: #333;
}
```

Some example of Selectors:

| Examples | Type | |
| :--- | ---: | :--- |
| `button` | Component | targeted component |
| `h1` | Primitive | targeted primitive |
| `radio` | Component | targeted component |
| `li` | Component |targeted component|
| `border` | Component Feature |targeted feature|
| `background` | Component Feature |targeted feature|
| `Color` | Feature of Component Attribute |targeted [attribute/property](https://en.wikipedia.org/wiki/Attribute_(computing)#:~:text=display%20the%20checked%20attribute%20and%20property%20of%20a%20checkbox%20as%20it%20changes.)|

Consequently, the variable below is a Decision Token that should only be applied to buttons contained inside a `hero` block (pattern) and that will target its border-color attribute (and set its property to #333):

```js
YPL.FFL.TKUI_D.button.border.color.hero: #333;
```

### Modifiers
{: .no_toc}


Modifiers modify/override an object style when applied.
They are split in 4 categories: Schemes, Parents, Discrete Modifiers and States.

#### Schemes
{: .no_toc}

{: .no_toc}

Schemes are large-scope modifiers, they usually applies to a vast set of objects. When forming a sequence Schemes Types follow a hierarchy and should be presented in this order: Mode › Theme › Compliance-Criteria

| Examples | Type | |
| :--- | ---: | :--- |
| `MD_dark` | Drak Mode | Modes are the largest scope for styling, they encompass sub-schemes such as Themes and Compliance guidelines |
| `TH_pink` | Theme | Themes, or Skins, are often used to give a different flavor or note to sections of a GUI (ie: Pro) or bring diversity to content |
| `WCAG_AA` | Compliance Criteria | Those schemes are used to match specific guidelines such as WCGA |

NB: large scope Stems includes prefixes using capitals letter and underscore to easily distinguish them from higher granularity selectors or attributes, ie:

-  `MD_dark` is a Scheme
-  Whereas `dark` is a shade

#### Parent, block, container
{: .no_toc}

{: .no_toc}

A Parent is the Parent Container of the targetted Object. They influence subsets of objects or specific objects within a same Schemes scope

| Examples | Type | |
| :--- | ---: | :--- |
| `hero` | Parent | Container, parent of grand-parent of the target |
| `article` | Parent | Container, parent of grand-parent of the target |

#### Discrete Modifiers
{: .no_toc}

{: .no_toc}

Discrete Modifiers influence subsets of objects or specific objects within a same Scheme scope.

| Examples | Type | Description |
| :--- | ---: | :--- |
| `CTA` | Variant | A Call To Action control |
| `primary` | Variant | Often a boeotian way to address Selected or Highlighted states |
| `alert` | Semantic | Styles an object by adding a semantic dimension to it |
| `small` | Attribute | Selects objects via another of their attributes |

#### States
{: .no_toc}

{: .no_toc}

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

Consequently, the variable below is a Decision Token that should only be applied to CTA buttons contained inside a `hero` block (Pattern) and that will target its border-color attribute when in a highlighted-idle state if the dark-mode is active:

```scss
YPL.FFL.TKUI_D.button.border.color.MD_dark.hero.CTA.hi: #333;
```


### Index convention
{: .no_toc}



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


## Color Terms


![WIP]({{site.baseurl}}/assets/images/YPL-DOC-colors-030-TokenNaming.png)


### Infering color index
{: .no_toc}


#### Luminance Index
{: .no_toc}

{: .no_toc}

![WIP]({{site.baseurl}}/assets/images/YPL-DOC-colors-010-shadesIndex.png)

Calculating relative Luminance:

```js
Y = 0.2126 * R + 0.7152 * G + 0.0722 * B
```
Ressources:

- [Wikipedia](https://contrastchecker.online/color-relative-luminance-calculator)
- [online calculator](https://contrastchecker.online/color-relative-luminance-calculator)
- [How to Assess Luminance and Contrast · article](https://www.myndex.com/WEB/LuminanceContrast)
- [Figma LCH Color Picker](https://www.figma.com/community/plugin/969496279507778512/LCH)


#### Index convention
{: .no_toc}

{: .no_toc}

| Stem | Luminance | Font-Weight Equivalence |
| :--- | :--- | --- |
| `100` | Y ≃ 90 | Extra Light |
| `200` | Y ≃ 80 | Light / Thin |
| `300` | Y ≃ 70 | Book / Demi |
| `400` | Y ≃ 60 | Regular |
| `500` | Y ≃ 50 | Medium |
| `600` | Y ≃ 40 | Semibold / Demibold |
| `700` | Y ≃ 30 | Bold |
| `800` | Y ≃ 20 | Black / Extra Bold / Heavy |
| `900` | Y ≃ 10 | Extra or Ultra Black / Fat / Poster |
| > 900 | darks | "Jumbo" domain |





<section class="flex-1_2-cols">
  <div>
    <h4 id="use-luminance-LCH-YCL">Use Luminance<br>(LCH / YCL)</h4>
    <p>
      WIP — Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Sed posuere consectetur est at lobortis.
    </p>
  </div>
  <div>
    <img src="{{site.baseurl}}/assets/images/YPL-DOC-colors-011-indexingShadesYCL_LCH.png" alt="WIP">
    <hr class="dd-do">
  </div>
</section>

<section class="flex-1_2-cols">
  <div>
    <h4 id="dont-use-lightness-HSL-HSB">Don't use lightness or brightness<br>(HSL / HSB)</h4>
    <p>
      WIP — Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Sed posuere consectetur est at lobortis.
    </p>
  </div>
  <div>
    <img src="{{site.baseurl}}/assets/images/YPL-DOC-colors-011-indexingShadesHSL.png" alt="WIP">
    <hr class="dd-dont">
  </div>
</section>


### Root name
{: .no_toc}


![WIP]({{site.baseurl}}/assets/images/YPL-DOC-colors-011-primarySecondaryTertiary.png)

#### Root names scope and protanopia
{: .no_toc}

{: .no_toc}

![WIP]({{site.baseurl}}/assets/images/YPL-DOC-colors-012-PST-scopes-protanopia.png)

### Naming protocol
{: .no_toc}



<table class="layoutOnly">
<!-- <caption>my caption</caption> -->
<tbody>
  <tr>
    <td style="width: 100%">
    <h4>Simple case</h4>
    <p>
      WIP — Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Sed posuere consectetur est at lobortis.
    </p>
    </td>
    <td>
      <img src="{{site.baseurl}}/assets/images/YPL-DOC-colors-020-indexingAndNaming.png" alt="WIP">
    </td>
  </tr>
</tbody>
</table>

<table class="layoutOnly">
<!-- <caption>my caption</caption> -->
<tbody>
  <tr>
    <td style="width: 100%">
    <h4>Complex case</h4>
    <p>
      WIP — Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Sed posuere consectetur est at lobortis.
    </p>
    </td>
    <td>
      <img src="{{site.baseurl}}/assets/images/YPL-DOC-colors-021-indexingAndNaming.png" alt="WIP">
    </td>
  </tr>
</tbody>
</table>

<!--
![WIP]({{site.baseurl}}/assets/images/YPL-DOC-colors-020-indexingAndNaming.png)
![WIP]({{site.baseurl}}/assets/images/YPL-DOC-colors-021-indexingAndNaming.png) -->





<!--
## Criteria

Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.

### Inclusiveness
{: .no_toc}


Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.

### Dark Mode
{: .no_toc}


Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.

#### Colors shift
{: .no_toc}

{: .no_toc}

Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.

#### Fonts weight shift
{: .no_toc}

{: .no_toc}

Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.

### Icons platforms-contextual semantics
{: .no_toc}


Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.

### Adaptive-Responsive-ness savviness
{: .no_toc}


Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.

### Engineering & design bridging
{: .no_toc}


Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.

### Ethical Design
{: .no_toc}


Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. -->
