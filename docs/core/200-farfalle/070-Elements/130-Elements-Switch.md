---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Switch # title case + UID
UID: E0004 # ["P","E","F"] + Hexa code/index
permalink: farfalle/elements/switch-E0004 # lowercase & UID + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Elements # title case
layout: default
nav_order: 140
---

# {{ page.title }} `{{ page.UID }}`
{: .no_toc}

COPY
{: .label.red}

<div class="tabs">
  <input type="radio" name="tabs_section_name" id="tab_name_01" checked="checked">
  <label for="tab_name_01" class="fatTab">Usage</label>
  <div class="tab" markdown="1">
<!-- ================ -->
<!-- ==== USAGE ===== -->
<!-- ================ -->

<p>
  {{site.data[page.project_id][page.UID].meta.description}}
</p>

![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-{{page.UID}}-preview_01.png){: .darkenabled}

<!-- - TOC
{:toc} -->

## Variations and Options

![Variations]({{ site.baseurl }}/assets/projects/{{ page.project_id }}/images/YPL-DOC-{{ page.project_id }}-{{ page.UID }}-variations_01.png){: .darkenabled}

<table>
  <!-- <caption>my caption</caption> -->
  <thead>
    <tr>
      <th>Variant</th>
      <th>Type</th>
      <th>usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>-002</code></td>
      <td>Switch Button</td>
      <td>Used as a way to toggle between boolean states.</td>
    </tr>
    <tr>
      <td><code>-003</code></td>
      <td>Icon</td>
      <td>Used when just an icon is required</td>
    </tr>  
    <tr>
      <td><code>-004</code></td>
      <td>Checkbox</td>
      <td>Used as a user action to select items in a list.</td>
    </tr>  
  </tbody>
</table>

## Usage Examples

<section class="flex-1_1-cols usage_examples">
    <div>
        <h4>Switch Button  &nbsp;&nbsp; <code>-002</code></h4>
        <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-{{page.project_id}}-{{page.UID}}-usage-01.png" alt="FIXME">
        <p>↑ Nostrum qui eveniet sunt delectus ut vel consequatur nostrum ipsum est natus aut dolor ex.</p>        
    </div>
</section>
  
  </div>
  <input type="radio" name="tabs_section_name" id="tab_name_02">
  <label for="tab_name_02" class="fatTab">Specs</label>
  <div class="tab" markdown="1">
<!-- ================= -->
<!-- ==== SPECS ====== -->
<!-- ================= -->

<a href="https://www.figma.com/file/ObprVaht5ejRnbld7KFRn5/%F0%9F%94%92-Commit-Vault?node-id=358%3A7030&viewport=672%2C492%2C0.05&t=2vzOHkD53OzIDIgG-11" class="btn iconed figmaBadge">To Figma →<a>

<!-- <a href="{{site.data[page.project_id][page.UID].meta.figmaLink}}" class="btn iconed figmaBadge">To Figma →<a> -->
<!-- FIXME: wrong figma URL ↑ should be https://www.figma.com/file/PU3d2lfOmmqlqw4Qkdiwai/Pasta-0.1.0?node-id=1737%3A68833&viewport=250%2C45%2C0.11&t=gdYBOoFvMhh6U3vN-11 -->

### Layout

![Layout Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-{{page.UID}}-layout_01.png)
<!-- FIXME: Image is missing -->

### Dependencies

![Dependencies Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-{{page.UID}}-bp_dependencies_01.png)

{% include dependency-tree.html %}

{% include instantiation-section.html %}

## Decisions

{% include predictionary-source.html %}

![Decisions Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-{{page.UID}}-bp_decisions_01.png)

#### Options

![Variations]({{ site.baseurl }}/assets/projects/{{ page.project_id }}/images/YPL-DOC-{{ page.project_id }}-{{ page.UID }}-variations_01.png){: .darkenabled}

{% include options-table.html %}

### Interaction

{% include interaction-table.html %}

  </div>
  <input type="radio" name="tabs_section_name" id="tab_name_03">
  <label for="tab_name_03" class="fatTab">Status</label>
  <div class="tab" markdown="1">
<!-- ================= -->
<!-- ==== STATUS ===== -->
<!-- ================= -->

{% include element-header.html %}
<!-- FIXME: remove unused variants -->

## Checklist

Please comply to and update the checklist below:

| Design |
| --- |
| <input type="checkbox" data-status-category="design" class="checklistItem"><strong>Dark and Light Modes</strong><br>Works properly for both Modes |
| <input type="checkbox" data-status-category="design" class="checklistItem"><strong>All interactive states</strong><br>Includes all applicable interactive states: idle, over, pressed, focus, disabled, highlighted idle, highlighted disabled, etc. |
| <input type="checkbox" data-status-category="design" class="checklistItem"> <strong>Document Variations</strong><br>Includes relevant options: variant, styles, sizes, orientations, optional iconography, decorations |
| <input type="checkbox" data-status-category="design" class="checklistItem"><strong>Breakpoints and platform scales</strong><br>Includes a desktop scale (web desktop) and a mobile scale (iOS, Android)|
| <input type="checkbox" data-status-category="design" class="checklistItem"><strong>"Yield point" behaviors</strong><br>Includes guidelines for behaviors at maximum strain, often around text size: wrapping, truncation, overflow, animation |

| Accessiblity |
| --- |
| <input type="checkbox" data-status-category="accessibility-global" class="checklistItem"><strong>Accessiblity</strong><br>All required accessiblity criteria have been met |

<table class="Last3ThCentered">
    <thead>
    <tr>
        <th>Criterion</th>
        <th>Description</th>
        <th>Pending</th>
        <th>Done</th>
        <th>N/A</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><a href="https://www.w3.org/TR/WCAG21/#text-alternatives">1.1.1</a></td>
        <td>Text Alternatives</td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_1_1P" name="WCAG_1_1_1" value="pending" checked></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_1_1D" name="WCAG_1_1_1" value="done"></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_1_1N" name="WCAG_1_1_1" value="N/A"></td>
    </tr>
    <tr>
        <td><a href="https://www.w3.org/TR/WCAG21/#use-of-color">1.4.1</a></td>
        <td>Color not the only way to convey information</td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_1P" name="WCAG_1_4_1" value="pending" checked></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_1D" name="WCAG_1_4_1" value="done"></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_1N" name="WCAG_1_4_1" value="N/A"></td>
    </tr>
    <tr>
        <td><a href="https://www.w3.org/TR/WCAG21/#contrast-minimum">1.4.3</a></td>
        <td>Text Color Contrast</td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_3P" name="WCAG_1_4_3" value="pending" checked></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_3D" name="WCAG_1_4_3" value="done"></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_3N" name="WCAG_1_4_3" value="N/A"></td>
    </tr>
    <tr>
        <td><a href="https://www.w3.org/TR/WCAG21/#contrast-enhanced">1.4.6</a></td>
        <td>Text Color Contrast AAA</td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_6P" name="WCAG_1_4_6" value="pending" checked></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_6D" name="WCAG_1_4_6" value="done"></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_6N" name="WCAG_1_4_6" value="N/A"></td>
    </tr>
    <tr>
        <td><a href="https://www.w3.org/TR/WCAG21/#non-text-contrast">1.4.11</a></td>
        <td>Fill Color Contrast</td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_11P" name="WCAG_1_4_11" value="pending" checked></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_11D" name="WCAG_1_4_11" value="done"></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_11N" name="WCAG_1_4_11" value="N/A"></td>
    </tr>
    <tr>
        <td><a href="https://www.w3.org/TR/WCAG21/#resize-text">1.4.4</a></td>
        <td>200% Text Size</td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_4P" name="WCAG_1_4_4" value="pending" checked></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_4D" name="WCAG_1_4_4" value="done"></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_4N" name="WCAG_1_4_4" value="N/A"></td>
    </tr>
    <tr>
        <td><a href="https://www.w3.org/TR/WCAG21/#text-spacing">1.4.12</a></td>
        <td>Text Spacing</td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_12P" name="WCAG_1_4_12" value="pending" checked></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_12D" name="WCAG_1_4_12" value="done"></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_12N" name="WCAG_1_4_12" value="N/A"></td>
    </tr>
    <tr>
        <td><a href="https://www.w3.org/TR/WCAG21/#keyboard-no-exception">2.1.3</a></td>
        <td>Keyboard Operable</td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_2_1_3P" name="WCAG_2_1_3" value="pending" checked></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_2_1_3D" name="WCAG_2_1_3" value="done"></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_2_1_3N" name="WCAG_2_1_3" value="N/A"></td>
    </tr>
    </tbody>
</table>


| Implementation |
| --- |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Figma</strong><br>All Tokens have been injected inside Figma components and tested  |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>iOS</strong><br>Component(s) have been implemented inside iOS component library     |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Android</strong><br>Component(s) have been implemented inside iOS component library |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>CSS</strong><br>Component(s) have been implemented inside Web component library     |

  </div>  
</div>