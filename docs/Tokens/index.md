---
layout: default
title: Tokens
nav_order: 4
has_children: true
---

# Tokens


## Choices, Decisions and Aliases

Tokens are splits into 3 main catageories:

- `Choices` are the style choices that define look'n feel of the system at a high level
- `Decisions` are where the previous choices are injected inside the objects library
- `Aliases` are tokens pointing to another token but have a more user-friendly name

| Stem | Meaning | Prefix |
| :--- | :--- | :---: |
| `TKC` | Choice Token | `YPL-TKC-` |
| `TKD` | Decision Token | `YPL-TKD-` |
| `TKA` | Alias Token | `YPL-TKA-` |


## Math and Super

Pasta has 2 extra catgories:

-  `Math` tokens contain math operations
-  `Super` tokens are tokens that are used as operands at the highest decision level

| Stem | Meaning | Prefix |
| :--- | :--- | :---: |
| `TKM` | Math Token | `YPL-TKM-` |
| `TKSM` | Super Math Token | `YPL-TKM-` |
| `TKSC` | Super Choice Token | `YPL-TKSC-` |
