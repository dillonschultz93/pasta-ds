---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Tabs # title case
UID: P0013 # ["P","E","F"] + Hexa code/index
permalink: farfalle/patterns/tabs-P0013 # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case · ⚠️ ACTIVATE THIS
parent: Patterns # title case — ["Elements","Patterns","Primitives","Choices"] 
layout: default
nav_order: 260
---

<div class="maintenance-tags" markdown=1>
⚠️ 2 NEW TYPO STYLES REQUIRED
{: .label.red}
⚠️ USAGE
{: .label.red}
⚠️ COPY
{: .label.red}
</div>

# {{ page.title }} `{{ page.UID }}`
{: .no_toc}

<div class="figma-refs">
  <a href="{{site.data[page.project_id][page.UID].meta.figmaLink}}" class="btn iconed figmaBadge">To Figma →</a>
</div>

<div class="tabs">
  <input type="radio" name="tabs_section_name" id="tab_name_01" checked="checked">
  <label for="tab_name_01" class="fatTab">Usage</label>
  <div class="tab" markdown="1">
<!-- ================ -->
<!-- ==== USAGE ===== -->
<!-- ================ -->

<p>
  Tabs are used to organize content into separate views which are displayed one at a time.
</p>

![Preview]({{ site.baseurl }}/assets/projects/{{ page.project_id }}/images/YPL-DOC-{{ page.project_id }}-{{ page.UID }}-preview_01.png){: .darkenabled}
<!-- ![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-imgPlaceholder-Full.png){: .darkenabled} -->

<!-- - TOC
{:toc} -->


## Variants and Options

<!-- IF TABS ARE REQUIRED -->

<!-- <div class="tabs">
  <input type="radio" name="variants" id="variant_UID1" checked="checked">
  <label for="variant_UID1">Variant_UID1</label>
  <div class="tab" markdown="1">
![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0013-YYY-preview_01.png){: .darkenabled}
Variant_Preview_#1
  </div>
  <input type="radio" name="variants" id="variant_UID2">
  <label for="variant_UID2">Variant_UID2</label>
  <div class="tab" markdown="1">
![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0013-YYY-preview_02.png){: .darkenabled}
Variant_Preview_#2
  </div>
  <input type="radio" name="variants" id="variant_UID3">
  <label for="variant_UID3">Variant_UID3</label>
  <div class="tab" markdown="1">
![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0013-YYY-preview_03.png){: .darkenabled}
Variant_Preview_#3
  </div>  
</div> -->


![Variations]({{ site.baseurl }}/assets/projects/{{ page.project_id }}/images/YPL-DOC-{{ page.project_id }}-{{ page.UID }}-variations_01.png){: .darkenabled}
<!-- ![Variations]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-imgPlaceholder-Full.png){: .darkenabled} -->


<table id="variants-options">
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
      <td><code>-001</code></td>
      <td>Default</td>
      <td>Used to convey more information on the tab view with a description underneath the label.</td>
    </tr>   
    <tr>
      <td><code>-001.OPT_descriptionOff</code></td>
      <td>Hidden Description</td>
      <td>Doesn't show the description</td>
    </tr>    
    <tr>
      <td><code>-002</code></td>
      <td>No Description</td>
      <td>Doesn't have a description</td>
    </tr>           
  </tbody>
</table>

<!-- ## Usage Examples -->
  
  </div>
  <input type="radio" name="tabs_section_name" id="tab_name_02">
  <label for="tab_name_02" class="fatTab">Specs</label>
  <div class="tab" markdown="1">
<!-- ================= -->
<!-- ==== SPECS ====== -->
<!-- ================= -->

### Layout


![Layout Blueprint]({{ site.baseurl }}/assets/projects/{{ page.project_id }}/images/YPL-DOC-{{ page.project_id }}-{{ page.UID }}-layout_01.png)
<!-- ![Layout Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-imgPlaceholder-Full.png){: .darkenabled} -->



### Dependencies


![Dependencies Blueprint]({{ site.baseurl }}/assets/projects/{{ page.project_id }}/images/YPL-DOC-{{ page.project_id }}-{{ page.UID }}-bp_dependencies_01.png)
<!-- ![Dependencies Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-imgPlaceholder-Full.png){: .darkenabled} -->



{% include dependency-tree.html %}

{% include instantiation-section.html %}

## Decisions

{% include predictionary-source.html %}

![Decisions Blueprint]({{ site.baseurl }}/assets/projects/{{ page.project_id }}/images/YPL-DOC-{{ page.project_id }}-{{ page.UID }}-bp_decisions_01.png)
<!-- ![Decisions Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-imgPlaceholder-Full.png){: .darkenabled} -->

### Options


![Variations]({{ site.baseurl }}/assets/projects/{{ page.project_id }}/images/YPL-DOC-{{ page.project_id }}-{{ page.UID }}-variations_01.png){: .darkenabled}
<!-- ![Variations]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-imgPlaceholder-Full.png){: .darkenabled} -->


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
| <input type="checkbox" data-status-category="design" class="checklistItem" checked><strong>All interactive states</strong><br>Includes all applicable interactive states: idle, over, pressed, focus, disabled, highlighted idle, highlighted disabled, etc. |
| <input type="checkbox" data-status-category="design" class="checklistItem"> <strong>Document Variations</strong><br>Includes relevant options: variant, styles, sizes, orientations, optional iconography, decorations |
| <input type="checkbox" data-status-category="design" class="checklistItem"><strong>Breakpoints and platform scales</strong><br>Includes a desktop scale (web desktop) and a mobile scale (iOS, Android)|

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