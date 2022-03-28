---
project_name: Farfalle # title case
project_id: FFL # 3-letter code 
title: — Header # title case
UID: P000A # ["P","E","F"] + Hexa code/index
variants: ["01","02"] # all variants index
permalink: farfalle/patterns/header # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Patterns # title case
layout: default
nav_order: 50
---

# Header&nbsp;`{{ page.project_id }}.{{ page.UID }}`{% for item in page.variants %}&nbsp;`{{item | default: ""}}`{% endfor %}
{: .no_toc}

| UID | Ticket | Owner | Figma | Pasta Version |
|---|---|---|---|---|
|`{{ page.project_id }}.{{ page.UID }}`|[&#35;15](https://github.com/yummly/pasta/issues/15)|[Robert](https://github.com/robert-ANML)|[TBD](https://www.figma.com/file/le9hbXPWmA55qUA7a7otgH)|[TBD](https://github.com/yummly/pasta/releases)|

- TOC
{:toc}

## Preview

Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis.

![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-imgPlaceholder-Full.png){: .darkenabled}
