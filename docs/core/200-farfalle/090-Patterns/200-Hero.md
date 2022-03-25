---
project_id: FFL # 3-letter code
title: — Hero # title case
UID: P0008 # ["P","E","F"] + Hexa code/index
variants: [] # all variants index
permalink: farfalle/patterns/hero # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Patterns # title case
layout: default
nav_order: 200
---

# Hero&nbsp;`{{ page.project_id }}.{{ page.UID }}`{% for item in page.variants %}&nbsp;`{{item | default: ""}}`{% endfor %}
{: .no_toc}

| UID | Ticket | Owner | Figma | Pasta Version |
|---|---|---|---|---|
|`{{ page.project_id }}.{{ page.UID }}`|[&#35;14](https://github.com/yummly/pasta/issues/14)|[Robert](https://github.com/robert-ANML)|[TBD](https://www.figma.com/file/le9hbXPWmA55qUA7a7otgH)|[TBD](https://github.com/yummly/pasta/releases)|

- TOC
{:toc}

## Preview

Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis.

![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-imgPlaceholder-Full.png){: .darkenabled}
