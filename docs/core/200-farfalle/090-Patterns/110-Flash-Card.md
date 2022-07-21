---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: — Flash Card # title case
UID: P0007 # ["P","E","F"] + Hexa code/index
variants: [] # all variants index
permalink: farfalle/patterns/flash-card # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Patterns # title case
layout: default
nav_order: 110
nav_exclude: true
---

# Flash Card&nbsp;`{{ page.project_id }}.{{ page.UID }}`{% for item in page.variants %}&nbsp;`{{item | default: ""}}`{% endfor %}
{: .no_toc}

<table class="headTopBorder">
  <thead>
    <tr>
      <th>UID</th>
      <th>Ticket</th>
      <th>Owner</th>
      <th>Options</th>
      <th>Tokens</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>{{ page.project_id }}.{{ page.UID }}</code></td>
      <td><a href="https://github.com/yummly/pasta/issues/13">&#35;13</a></td>
      <td><a href="https://github.com/robert-ANML">Robert</a></td>
      <td><span data-toolclip='TBD'><code>TBD</code></span></td>
      <td><a href="{{ site.url }}/pasta/assets/projects/{{ page.project_id }}/tokens/">Folder&nbsp;→</a></td>
      <td><a href="#accessibility-status"><span id="statusWidget"></span><span>0%</span></a></td>
    </tr>
    {% if page.variants.size > 0 %}
    <tr>
      <td colspan="6" class="pageHeaderVariantsRow">
        {% for item in page.variants %}<a href="#{{ page.UID }}-{{item}}"><code>-{{item | default: ""}}</code></a> {% endfor %}
      </td>
    </tr>
    {% endif %}
  </tbody>
</table>

- TOC
{:toc}

## Preview

Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis.

![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-imgPlaceholder-Full.png){: .darkenabled}

<!-- 
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fle9hbXPWmA55qUA7a7otgH%2Fbranch%2F63eOdP9xlxgPcmHnwcHGO5%2FPasta-0.1.0%3Fpage-id%3D4001%253A70652%26node-id%3D4053%253A63175%26viewport%3D711%252C25%252C0.12%26scaling%3Dmin-zoom%26starting-point-node-id%3D4053%253A63175%26show-proto-sidebar%3D1" allowfullscreen></iframe>
 -->


<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="910" height="610" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fle9hbXPWmA55qUA7a7otgH%2Fbranch%2F63eOdP9xlxgPcmHnwcHGO5%2FPasta-0.1.0%3Fpage-id%3D4001%253A70652%26node-id%3D4053%253A63177%26viewport%3D711%252C25%252C0.12%26scaling%3Dmin-zoom%26starting-point-node-id%3D4053%253A63175" allowfullscreen></iframe>