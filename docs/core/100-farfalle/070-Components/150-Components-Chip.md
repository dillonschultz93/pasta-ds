---
project_id: FFL # 3-letter code
title: Chips # title case
permalink: farfalle/components/chips # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Components # title case
layout: default
nav_order: 150
---


# Chips `FFL`
{: .no_toc}


- TOC
{:toc}

## Anatomy
{: .no_toc}

![This is a representation of a component and its attributes](http://localhost:4000/pasta/assets/images/YPL-DOC-imgPlaceholder-Full.png)

[Figma](https://www.figma.com/file/zYeBHpXPApw1ujD0BoHjVe/Buttons?node-id=155%3A1786){: .btn }

<hr>

### The Math
{: .no_toc}

We want to calculate our buttons size (height) as function of their text/label size:

- Font-sizes are expressed in pt **but** we want to express the button height in px
- We always want an **even** value for the button height and width attributes to avoid pixel hinting issue at its border


## Tokens

### Super Choices `TKUI_SC`
{: .no_toc}

```
FFL-TKUI_SC.button.language
FFL-TKUI_SC.button.RTL
FFL-TKUI_SC.button.iconMirror

TKSC.font.size.base
```

### Choices `TKUI_C`
{: .no_toc}
```
N/A
```

### Math `TKUI_M`
{: .no_toc}


```json
FFL-TKUI_M.size.button.height.large
FFL-TKUI_M.size.button.minWidth.large
//
FFL-TKUI_M.typo.button.fontSize.large
FFL-TKUI_M.typo.button.lineHeight.large
FFL-TKUI_M.typo.button.fontWeight.large
FFL-TKUI_M.typo.button.letterSpacing.large
//
FFL-TKUI_M.size.button.radius.large
//
FFL-TKUI_M.space.button.Padding
FFL-TKUI_M.space.button.PaddingLeft.large
FFL-TKUI_M.space.button.PaddingRight.large
//
FFL-TKUI_M.space.button.Margin.large
FFL-TKUI_M.space.button.MarginBottom.large
```

### Decisions `TKUI_D`
{: .no_toc}

```json
FFL-TKUI_D.colors.button.fill.WCAG_AA
```


## Checklist

Please comply with checklist below when adding a new component to pasta:

<table>
    <tbody>
      <tr>
          <td>
            <input type="checkbox" class="checklistItem" checked><strong>All interactive states</strong><br>Includes all interactive states that are applicable (hover, down, focus, keyboard focus, disabled).
          </td>
          <td>
            <input type="checkbox" class="checklistItem">  <strong>Usage guidelines</strong><br>Includes a list of dos and don'ts that highlight best practices and common mistakes.
          </td>
      </tr>
      <tr>
          <td>
            <input type="checkbox" class="checklistItem"><strong>All color themes</strong><br>Works properly across all color themes (light and dark modes).
          </td>
          <td>
            <input type="checkbox" class="checklistItem" checked><strong>Breakpoints and platform scales</strong><br>Includes a desktop scale (web desktop) and a mobile scale (iOS, Android).
          </td>
      </tr>
      <tr>
          <td>
            <input type="checkbox" class="checklistItem" checked><strong>Accessible use of color</strong><br>Color is not used as the only visual means of conveying information (WCAG 2.0 1.4.1).
          </td>
          <td>
            <input type="checkbox" class="checklistItem"><strong>Internationalization guidelines</strong><br>Works properly across various locales and includes guidelines for bi-directionality (RTL).
          </td>
      </tr>
      <tr>
          <td>
            <input type="checkbox" class="checklistItem" checked><strong>Accessible contrast for text</strong><br>Text has a contrast ratio of at least 4.5:1 for small text and at least 3:1 for large text (WCAG 2.0 1.4.3).
          </td>
          <td>
            <input type="checkbox" class="checklistItem" checked><strong>Keyboard interactions</strong><br>Follows WCAG 2.0 standards for keyboard accessibility guidelines and includes a description of the keyboard interactions.
          </td>
      </tr>
      <tr>
          <td>
            <input type="checkbox" class="checklistItem" checked><strong>Accessible contrast for UI components</strong><br>Visual information required to identify components and states (except inactive components) has a contrast ratio of at least [3:1 (WCAG 2.1 1.4.11)](https://spectrum.adobe.com/page/action-button/#Design-checklist).
          </td>
          <td>
            <input type="checkbox" class="checklistItem" checked><strong>Design tokens</strong><br>All design attributes (color, typography, layout, animation, etc.) are available as design tokens.
          </td>
      </tr>
      <tr>
          <td>
            <input type="checkbox" class="checklistItem"><strong>Content design</strong><br>UI language and information design considerations have been documented.
          </td>
          <td>
            <input type="checkbox" class="checklistItem"><strong>Figma Link</strong><br>Includes link to a Figma file that shows multiple options, states, color themes, and platform scales.
          </td>
      </tr>
      <tr>
          <td>
            <input type="checkbox" class="checklistItem" checked> <strong>Defined options</strong><br>Includes relevant options (variant, style, size, orientation, optional iconography, decorations, selection, error state, etc.)
          </td>
          <td>
            <input type="checkbox" class="checklistItem"><strong>Tokens Sync</strong><br>Tokens have been injected inside Figma component as well.
          </td>
      </tr>
      <tr>
          <td>
            <input type="checkbox" class="checklistItem" checked><strong>Defined behaviors</strong><br>Includes guidelines for keyboard focus, layout (wrapping, truncation, overflow), animation, interactions, etc.
          </td>
          <td>
            <input type="checkbox" class="checklistItem" checked><strong>Writing guidelines</strong><br>Includes content standards or usage guidelines for how to write or format in-product content for the component.
          </td>
      </tr>
    </tbody>
</table>
