---
title: Linguine # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
permalink: linguine # title case
nav_order: 890
has_children: true
layout: default # title case
---

# Linguine `LGN 0.1.0`

Linguine is a Pasta [navigation](https://pmarsceill.github.io/just-the-docs/docs/navigation-structure/) boilerplate for new projects.

If you need to create a new project you need to duplicate the folders marked with a `⌾`:

```
pasta
└─ docs
    ├─ _sass
    ├─ assets
    │   ├─ farfalle
    │   ├─ images
    │   ├─ js
    │   └─ ⌾ linguine
    │       ├─ design-tokens
    │       ├─ images
    │       └─ js
    ├─ core
    │   ├─ 020-Foundations
    │   ├─ 100-farfalle
    │   ├─ ⌾ 890-linguine
    │   │   ├─ 040-Tokens
    │   │   ├─ 050-Primitives
    │   │   ├─ 070-Components
    │   │   ├─ 090-Patterns
    │   │   ├─ 100-Content
    │   │   └─ index.md
    │   ├─ 900-tools
    │   ├─ 980-commitee
    │   └─ 990-news
    └─ index.md
```
You then need to rename these 2 folders, inside `core` change the `nav_order` in and also replace all the names and references to `linguine` in all front matter headers for all the files.

In your `index.md`:


```markdown
---
title: {~~ Linguine ~> YourProjectName ~~}
permalink: {~~ Linguine ~> YourProjectName ~~}
has_children: true
layout: default
nav_order: {~~ 890 ~> YourProjectTocIndex ~~}
---
```

… and in all children and grand-children, ie:

```markdown
---
title: Sizes
permalink: {~~ Linguine ~> YourProjectName ~~}/tokens/sizes
grand_parent: {~~ Linguine ~> YourProjectName ~~}
parent: Tokens
layout: default
nav_order: 10
---

# Sizes `{~~ LGN ~> yourProjectAbbreviation ~~}`
```
