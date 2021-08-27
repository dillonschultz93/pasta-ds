---
layout: default
title: Tokens Plugin
parent: Tools
nav_order: 50
---

# Tokens Plugin (Figma)
{: .no_toc}
<!-- ↑ skips H1 inside TOC -->

- TOC
{:toc}

## We write in HJSON

Figma Tokens Plugin uses a [JSON](https://en.wikipedia.org/wiki/JSON) based data-set to access Figma objects' attributes, properties and styles. JSON is tedious to write, and read.

### HJSON

We use [HJSON](https://hjson.github.io/) to write our tokens code because it's way easier! HJSON allows the use comments, and you don't need to write all the tidious  `"` or `,`: better, faster.

#### Important rules

You still need to keep the `"` (apostrophe) for the `values` of your HJSON, but can still skip them for the keys. The reason is that Figma Tokens plugin doesn't recognize raw mumbers only "strings" for calculation. Thus, do this:

```json
base: {
    value: "2"
    type: "other"
}
```

Don't do that:

```json
base: {
    value: 2
    type: other
}
```

#### Convert your HJSON


Before pasting your JSON code inside Figma (plugin) you need to convert your You can then convert your HJSON into JSON using a package or its [online converter](https://hjson.github.io/try.html).

<table class="layoutOnly">
<thead>
  <tr>
    <th>HJSON</th>
    <th>JSON (output)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><img src="{{site.baseurl}}/assets/images/YPL-DOC-HJSON-01.png" alt="Hjson Code"></td>
    <td><img src="{{site.baseurl}}/assets/images/YPL-DOC-HJSON-02.png" alt="Hjson output (JSON)"></td>
  </tr>
</tbody>
</table>


#### Tools

##### Convert your HJSON to JSON
<br>
[Atom Package](https://atom.io/packages/language-hjson){: .btn .mr-2}
[Online Editor ↗](https://hjson.github.io/try.html){: .btn .mr-2 }

<!-- [Sublime Text](https://github.com/hjson/sublime-hjson){: .btn .mr-2 }
[Visual Studio](https://marketplace.visualstudio.com/items?itemName=laktak.hjson){: .btn } -->

##### Color your json
<br>
[Atom Package](https://atom.io/packages/json-colorer){: .btn .mr-2}

##### Flatten your json

The package can flattens or unflattens your code. That:

```json
{
  "p1": {
    "bold": {
      "value": {
        "fontFamily": "$TKC.font.family.bold",
        "fontWeight": "$TKC.font.weight.500",
        "fontSize": "$TKSM.scale.seqArithA.400",
        "lineHeight": "round($TKSM.scale.seqArithA.400 * $TKSC.ratio.leading.large)"
      },
      "description": "none",
      "type": "typography"
    }
  }
}
```
is turned into this:

```json
{
  "p1.bold.value.fontFamily": "$TKC.font.family.bold",
  "p1.bold.value.fontWeight": "$TKC.font.weight.500",
  "p1.bold.value.fontSize": "$TKSM.scale.seqArithA.400",
  "p1.bold.value.lineHeight": "round($TKSM.scale.seqArithA.400 * $TKSC.ratio.leading.large)",
  "p1.bold.description": "none",
  "p1.bold.type": "typography"
}
```


<br>
[Atom Package](https://atom.io/packages/flatten-json){: .btn .mr-2}





## The Figma Plugin

We are using [Jan Six' plugin](https://jansix.at/resources/figma-tokens) to inject a token-based logic into our Pasta Figma library.


The most attractive feature of this plugin is its ability to use [math](https://github.com/six7/figma-tokens/issues/192) and variables (strangely named "aliases") aka use tokens as operands for other tokens.

2 noticable features exposed by the plugin:

1. Token Sets allow you to organize tokens by [Schemes]({{site.baseurl}}/Foundation.html#schemes)
2. A JSON editor (minimalist but conveniant)

![Figma Tokens Plugin Screenshots]({{site.baseurl}}/assets/images/YPL-DOC-FigmaTokensPlugin-001.png)


## Usage and Limitations

Please refer to [the plugin doc](https://docs.tokens.studio/) to learn about it's usage.
You can also watch [this video](https://www.designsystemtalks.com/talks/design-tokens-in-figma-how-to-get-started-today) for a quick overview of its features.

<!-- ### Available Tokens · Aug 20 2021

| Figma Tokens||
| --- | --- |
| Size | Font Sizes |
| Space | Colors |
| Border Radius | Border Width |
| Border Width | Opacity |
| Box Shadow | Typography |
| Font Families | Font Weights |
| Line Heights | Letter Spacing |
| Paragraph Spacing | Other | -->

New Tokens and features are added regularly, please check the plugin [changelog](https://docs.tokens.studio/changelog)

## Tokens Snippets

You'll find below usefull snippets for various tokens formats.

### Other

The `Other` category allows to manipulates data Figma attributes not (yet) supported by the plugin.
This might help us to express some dimensions of our design logic than cannot be handle inside Figma (ie: responsiveness).
Foremost, this category can be used to store large-scope constants and variables.

```json
# HJSON

Constants: {
  some_random_constant: {
   value: 8
   type: other
  }
  another_random_thing: {
   value: 1024
   type: other
  }
}
```

### Box Shadow

```json
# HJSON

shadow-medium: {
  value: {
   x: 0
   y: 4
   spread: 0
   color: hsla(0,0,0,0.2)
   blur: 20
  }
  type: boxShadow
}
```
