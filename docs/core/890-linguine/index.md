---
project_id: LGN # 3-letter code
project_version: 0.1.0 # semantic versioning
title: Linguine # title case
permalink: linguine # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
has_children: true
layout: default
nav_order: 890
---

# Linguine `{{ page.project_id }} {{ page.project_version }}`

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
    │   ├─ 050-Foundations
    │   ├─ 100-Brand
    │   ├─ 200-farfalle
    │   ├─ ⌾ 890-linguine
    │   │   ├─ 040-Choices
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
project_id: {~~ LGN ~> Your3LetterCode ~~} # 3-letter code
title: {~~ Linguine ~> YourProjectName ~~} # title case
permalink: {~~ Linguine ~> YourProjectName ~~} # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
has_children: true
layout: default
nav_order: {~~ 890 ~> YourProjectTocIndex ~~}
---
```

… and in all children and grand-children, ie:

```markdown
---
project_id: {~~ LGN ~> Your3LetterCode ~~} # 3-letter code
title: Dimensions
permalink: {~~ Linguine ~> YourProjectName ~~}/choices/dimensions # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: {~~ Linguine ~> YourProjectName ~~} # title case
parent: Choices
layout: default
nav_order: 10
---

# Sizes `{{ page.project_id }}`
```
