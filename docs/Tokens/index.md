---
layout: default
title: Tokens
nav_order: 4
has_children: true
---

# Tokens

## Domains

We distinguish tokens targeting *User Interface* elements from *Content* elements:

| Stem **Prefix** | Meaning |
| :--- | :--- |
| `TKUI_` | User Interface Token |
| `TK_C_` | Content Token |


## Choices, Decisions and Aliases

Tokens are splits into 3 main catageories:

- `Choices` are the style choices that define look'n feel of the system at a high level
- `Decisions` are where the previous choices are injected inside the objects library
- `Aliases` are tokens pointing to another token but have a more user-friendly name

| Stem Example | Meaning | Prefix |
| :--- | :--- | :---: |
| `TKUI_C` | UI Choice Token | `YPL-TKUI_C-` |
| `TK_C_A` | Content Alias Token | `YPL-TK_C_A-` |
| `TKUI_D` | UI Decision Token | `YPL-TKUI_D-` |


## Math Tokens

`Math` Tokens contain math operations. We do not distinguish between Math and Decisions, aka a Decision token can be substitute with a Math Token.


| Stem Example | Meaning | Prefix |
| :--- | :--- | :---: |
| `TKUI_M` | UI Math Token | `YPL-TKUI_M-` |
| `TK_C_M` | Content Math Token | `YPL-TK_C_M-` |


## Super Tokens

At the higher possible scope Pasta has Super Tokens or "Supers".
They a the few Tokens that rule them all.

NB: Decisions Tokens cannot be Supers.

| Stem | Meaning | Prefix |
| :--- | :--- | :---: |
| `TKUI_SC` | Super Choice Token | `YPL-TKM-` |
| `TKUI_SM` | Super Math Token | `YPL-TKM-` |
| `TKUI_SA` | Super Alias Token | `YPL-TKSC-` |
