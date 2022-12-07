---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Surfaces # title case
UID: F0001 # ["P","E","F"] + Hexa code/index
variants: ["001","002","003","101","102","103"] # all variants index
permalink: farfalle/primitives/surfaces-F0001 # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Primitives # title case
layout: default
nav_order: 100
nav_exclude: true
---

# Surfaces
{: .no_toc}


<table class="headTopBorder">
  <!-- <caption>my caption</caption> -->
  <thead>
    <tr>
      <th>UID</th>
      <th>Ticket</th>
      <th>Owner</th>
      <th>Options</th>
      <th>{{ page.project_id }} Version</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>{{ page.project_id }}.{{ page.UID }}</code></td>
      <td><a href="https://github.com/yummly/pasta/issues/27">&#35;27</a></td>
      <td><a href="https://github.com/robert-ANML">Robert</a></td>
      <td><span data-toolclip='N/A'><code>N/A</code></span></td>
      <td><a href="https://github.com/yummly/pasta/releases">TBD</a></td>
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


## Checklist

 Please comply to and update the checklist below:

 |Ops|
 |---|
 |<input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>UID</strong>|
 |<input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>Github Ticket</strong>|
 |<input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>Figma Link(s)</strong>|
 |<input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>Design Owner</strong>|
 |<input type="checkbox" data-status-category="ops" class="checklistItem"><strong>Figma Document Link</strong><br>Inject Pasta URL inside the [Figma Component Details Panel](https://help.figma.com/hc/en-us/articles/360055203533-Use-the-Inspect-panel#View_component_details) |

 |Implementation|
 |---|
 |<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Figma</strong><br>All Tokens have been injected inside Figma components and tested|
 |<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>iOS</strong><br>Component(s) have been implemented inside iOS component library|
 |<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Android</strong><br>Component(s) have been implemented inside iOS component library|
 |<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Web</strong><br>Component(s) have been implemented inside Web component library|
