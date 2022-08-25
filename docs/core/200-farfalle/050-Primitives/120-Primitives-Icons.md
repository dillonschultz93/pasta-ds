---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Icons # title case
UID: F0003 # ["P","E","F"] + Hexa code/index
variants: ["001","002","003","004","005","006","007","008","009","00A","00B","00C","00D","00E","00F","010","011","012","013","014","015","016","017","018","019","01A","01B","01C","01D","01E","01F","020","021","022","023","401","402","403","404","405","406","407","408","409","40A","40B","40C","40D","40E","40F","410","411","412","413","414","415","416","417","418","419","41A","41B","41C","41D","41E","41F","420","421","422","423", "424", "3FF","7FF"] # all variants index
permalink: farfalle/primitives/icons-F0003 # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Primitives # title case
layout: default
nav_order: 120
---

<!-- FIXME — ↑↓ not clear where "3FF" and "7FF" are represented, in the local SVG yup but not inside the Zip archive  -->

# Icons
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
      <td><a href="https://github.com/yummly/pasta/issues/26">&#35;26</a></td>
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


<a href="https://www.figma.com/file/PU3d2lfOmmqlqw4Qkdiwai/Pasta-0.1.0?node-id=1932%3A89439" class="btn iconed figmaBadge">To Figma →</a> &nbsp;&nbsp; <a href="{{site.baseurl}}/assets/projects/{{page.project_id}}/assets/YPL.FFL.icons-220824.zip" class="btn iconed downloadBadge">Download Zip</a>

<!-- - TOC
{:toc} -->

## 16pt
{: no_toc}

<table class="tableOfIcons">
  <tbody>
    {% assign icons_16 = site.static_files | where: "size", "16" %}
    {% tablerow icon in icons_16 cols:6 %}
      <span data-toolclip="{{icon.basename}}">
        <img src="{{site.baseurl}}{{icon.path}}" id="{{icon.basename | remove: "YPL.FFL." | strip}}">
      </span>
    {% endtablerow %}
  </tbody>
</table>

## 24pt
{: no_toc}

Variants UIDs go from `4xx` to `7FE`. `7FF` is reserved for placholder.


<table class="tableOfIcons">
  <tbody>
    {% assign icons_24 = site.static_files | where: "size", "24" %}
    {% tablerow icon in icons_24 cols:6 %}
      <span data-toolclip="{{icon.basename}}">
        <img src="{{site.baseurl}}{{icon.path}}" id="{{icon.basename | remove: "YPL.FFL." | strip}}">
      </span>
    {% endtablerow %}
  </tbody>
</table>
