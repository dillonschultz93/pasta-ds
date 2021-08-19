---
layout: default
title: Tokens Plugin
parent: Tools
nav_order: 50
---

# Tokens Plugin (Figma)

We are using [Jan Six amazing plugin](https://jansix.at/resources/figma-tokens) to inject a token-based logic into our Pasta Figma library.
The most attractuve feature of this plugin is its ability to use [math](https://github.com/six7/figma-tokens/issues/192) and cross-refrence (strangly named "aliases") aka other tokens as operands.

## Usage and Limitations

Please refer to [the plugin doc](https://docs.tokens.studio/) to learn about it's usage.
You can also watch [this video](https://www.designsystemtalks.com/talks/design-tokens-in-figma-how-to-get-started-today) for a quick overview of its features.

We recommend to use a professional code editor to manipulate our JSON-tokens library. Avoid to directly edit your JSON inside the plugin. 
The plugin will convert any shorthand syntax such as:

```json
    "TKM": {
        "color.primary.400": {
            "value": "hsla(50,50,50,1)",
            "description": "Primary background color",
            "type": "color"
        }
    }
```

Into its broken-down counterpart:

```json
    "TKM": {
      "color": {
        "primary": {
          "400": {
             "value": "hsla(50,50,50,1)",
             "description": "Primary background color",
             "type": "color"
          }
        }
      }
    }
```



## Tokens JSON Code Snippets

### "Other" format

The `Other` category allows to manipulates data Figma attributes not (yet) supported by the plugin.
This might help us to express some dimensions of our design logic than cannot be handle inside Figma (ie: responsiveness).
Foremost, this category can be used to store large-scope constants and variables:

```json
  "Constants": {
    "some_random_constant": {
      "value": "8",
      "type": "other"
    },
    "another_random_thing": {
      "value": "1024",
      "type": "other"
    }
```    


### Box Shadow format

```json
  "shadow-001": {
    "value": {
      "x": "0",
      "y": "4",
      "spread": "0",
      "color": "hsla(0,0,0,0.2)",
      "blur": "20"
    },
    "type": "boxShadow"
  }
```