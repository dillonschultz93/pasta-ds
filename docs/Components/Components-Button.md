---
layout: default
title: Button
parent: Components
nav_order: 10
---

# Button

<!-- ![This is a representation of a component and its attributes]({{site.baseurl}}/assets/images/YPL-DOC-button-001.png) -->

## Specification

### The Math

We want to calculate our buttons size (height) as function of their text/label size:

- Font-sizes are expressed in pt **but** we want to express the button height in px
- We always want an **even** value for the button height and width attributes to avoid pixel hinting issue at its border


### Anatomy

![This is a representation of a component and its attributes]({{site.baseurl}}/assets/images/YPL-DOC-button-002.png)

<!-- ![This is a representation of a component and its attributes]({{site.baseurl}}/assets/images/YPL-DOC-Image_Placeholder-full.png) -->



[Figma File](https://www.figma.com/file/zYeBHpXPApw1ujD0BoHjVe/Buttons?node-id=155%3A1786){: .btn }


## Tokens

### Super Choices `TKSC`

```
TKSC.font.size.base
```

### Choices `TKC`
```
TKC.cyan~teal.400.hue
TKC.cyan~teal.400.saturation
TKC.cyan~teal.400.lightness
```

### Math `TKM`


```json
TKM.font.size.h3: TKM.font.size.hx = round($TKSC.font.size.base * $TKSC.font.size.scale ^ (4-x))
```

### Decisions `TKD`

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
<!-- 
## Variants

## Do's and Dont's

## Content · Micro Copy Rules -->
