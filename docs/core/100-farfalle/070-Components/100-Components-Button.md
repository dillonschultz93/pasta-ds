---
title: Buttons # title case
permalink: farfalle/components/buttons # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Components # title case
layout: default
nav_order: 100
---


# Buttons `FFL`
{: .no_toc}
<!-- ↑ skips H1 inside TOC -->

- TOC
{:toc}


<!-- ![This is a representation of a component and its attributes]({{site.baseurl}}/assets/images/YPL-DOC-button-001.png) -->

## Specification

### Anatomy
{: .no_toc}

<!--[This is a representation of a component and its attributes]({{site.baseurl}}/assets/images/YPL-DOC-button-002.png)-->

![This is a representation of a component and its attributes](http://localhost:4000/pasta/assets/images/YPL-DOC-button-002.png)

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
TKSC.font.size.base
```

### Choices `TKUI_C`
{: .no_toc}
```
TKC.cyan~teal.400.hue
TKC.cyan~teal.400.saturation
TKC.cyan~teal.400.lightness
```

### Math `TKUI_M`
{: .no_toc}


```json
TKM.font.size.h3: TKM.font.size.hx = round($TKSC.font.size.base * $TKSC.font.size.scale ^ (4-x))
```

### Decisions `TKUI_D`
{: .no_toc}

```json
// SIZE
YPL.TKD.button.height.large
// COLOR
YPL.TKD.button.background.color.primary
// LABEL
YPL.TKD.button.label.font.size
YPL.TKD.button.label.font.color
// PADDING
YPL.TKD.button.padding.left.large
YPL.TKD.button.padding.right.large
// MARGIN
YPL.TKD.button.margin.top
YPL.TKD.button.margin.right
YPL.TKD.button.margin.bottom
YPL.TKD.button.margin.left
// RADIUS
YPL.TKD.button.border.radius
```

## Criteria
