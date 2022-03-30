---
title: Attributes Mapping # title case
permalink: foundations/attributes-mapping # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
parent: Foundations # title case
layout: default
nav_order: 60
---


# Attributes Mapping
{: .no_toc}

- TOC
{:toc}

## Hash table

| Pasta Apparatus | Figma-Tokens-Plugin | AttributeFigma-Tokens-Plugin | TypeFigma API Attributes |   CSS  | iOS | Android |
| --- | --- | --- | --- | --- | --- | --- |
| Margin          |                     |                              |                          | margin | ♺ fringe| ♺ fringe|



<details>
<summary>Figma Plugins Attributes (draft)</summary>
{% highlight javascript %}
{
  "SIZE": {
    "value": "123",
    "description": "blah",
    "type": "sizing"
  },
  "SPACE": {
    "value": "654",
    "description": "blah",
    "type": "spacing"
  },
  "COLOR": {
    "value": "#FF0000",
    "description": "blah",
    "type": "color"
  },
  "BORDER-RADIUS": {
    "value": "12",
    "description": "blah",
    "type": "borderRadius"
  },
  "BORDER-WIDTH": {
    "value": "2",
    "description": "blah",
    "type": "borderWidth"
  },
  "FONT-FAMILIES": {
    "value": "Roboto",
    "description": "blah",
    "type": "fontFamilies"
  },
  "FONT-WEIGHT": {
    "value": "Bold",
    "description": "400",
    "type": "fontWeights"
  },
  "LETTER-SPACING": {
    "value": "-1",
    "description": "blah",
    "type": "letterSpacing"
  },
  "LINE-HEIGHT": {
    "value": "16",
    "description": "e.g. 100% or 14",
    "type": "lineHeights"
  },
  "FONT-SIZE": {
    "value": "16",
    "description": "blah",
    "type": "fontSizes"
  },
  "PARAGRAPH-SPACING": {
    "value": "24",
    "description": "blah",
    "type": "paragraphSpacing"
  },
  "TYPOGRAPHY": {
    "value": {
      "fontFamily": "Europa-Light",
      "fontWeight": "Light",
      "lineHeight": "24",
      "fontSize": "19",
      "letterSpacing": "0.5",
      "paragraphSpacing": "20"
    },
    "description": "Blah",
    "type": "typography"
  },
  "OPACITY": {
    "value": "0.33",
    "description": "blah",
    "type": "opacity"
  },
  "BOXSHADOW": {
    "value": {
      "x": "0",
      "y": "8",
      "blur": "16",
      "spread": "0",
      "color": "#000000"
    },
    "description": "blah",
    "type": "boxShadow"
  },
  "OTHER": {
    "value": "3.14159",
    "description": "Approximation of PI",
    "type": "other"
  }
}
{% endhighlight %}
</details>
