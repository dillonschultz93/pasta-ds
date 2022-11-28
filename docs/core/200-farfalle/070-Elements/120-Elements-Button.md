---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Button # title case
UID: E0003 # ["P","E","F"] + Hexa code/index
permalink: farfalle/elements/button-E0003 # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Elements # title case
layout: default
nav_order: 120
---

{% include element-header.html %}
<!-- FIXME: remove unused variants -->

# {{ page.title }} `{{ page.UID }}`
{: .no_toc}

<!-- {{site.data[page.project_id][page.UID].meta.description}} -->
<!-- FIXME: I'm not sure we use this description here, in my mind it's more for the config source than the KB -->


![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-preview_01.png){: .darkenabled}


<a href="{{site.data[page.project_id][page.UID].meta.figmaLink}}" class="btn iconed figmaBadge">To Figma →<a>
<!-- FIXME: wrong figma URL ↑ should be https://www.figma.com/file/PU3d2lfOmmqlqw4Qkdiwai/Pasta-0.1.0?node-id=1737%3A68833&viewport=250%2C45%2C0.11&t=gdYBOoFvMhh6U3vN-11 -->


- TOC
{:toc}

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
      <td><code>-001</code> <code>-002</code> <code>-003</code></td>
      <td>Primary Buttons</td>
      <td>Used for the main user action, 1 allowed per screen</td>
    </tr>
    <tr>
      <td><code>-00A</code> <code>-009</code></td>
      <td>Interstitial</td>
      <td>Used as interstitial actions, within text or small spaces</td>
    </tr>           
    <tr>
      <td><code>-00B</code> <code>-00C</code></td>
      <td>Icon Only</td>
      <td>Used as inclusion inside tiny spaces</td>
    </tr>        
    <tr>
      <td><code>-00E</code></td>
      <td>Placeholder</td>
      <td>Occupy the exact space of the asset or widget it will soon be replaced with</td>
    </tr>         
  </tbody>
</table>




## Layout

![Layout Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-layout_01.png)

## Dependencies

![Dependencies Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-bp_dependencies_01.png)

{% include dependency-tree.html %}
<hr>

### Links

{% include instantiation-section.html %}

## Decisions

![Decisions Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-bp_decisions_01.png)

### Variations

![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-preview_02.png){: .darkenabled}


### Usage

<section class="flex-1_1-cols">
    <div>
        <p><code>-002</code></p>
        <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-usage_002_01.png" alt="FIXME">
        <p>↑ Nostrum qui eveniet sunt delectus ut vel consequatur nostrum ipsum est natus aut dolor ex.</p>        
    </div>
    <div>   
        <p><code>-002.OPT_smallTint</code></p>
        <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-usage_002_OPT_smallTint_01.png" alt="FIXME">
        <p>↑ Et Voluptas Dolorem Commodi</p>        
    </div>
</section>

<section class="flex-1_1-cols">
    <div>
        <p><code>-00A</code></p>
        <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-usage_00A_01.png" alt="FIXME">
        <p>Say somthing</p>
    </div>
    <div>
        <p><code>-009</code></p>
        <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-usage_009_01.png" alt="FIXME">
        <p>Nostrum qui eveniet sunt delectus ut vel consequatur nostrum ipsum est natus aut dolor ex.</p>          
    </div>
</section>

<section class="flex-1_1-cols">
    <div>
        <p><code>-00B.OPT_smallGray</code></p>
        <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-usage_00B_OPT_smallGray_01.png" alt="FIXME">
        <p>Nostrum qui eveniet sunt delectus ut vel consequatur nostrum ipsum est natus aut dolor ex.</p>          
    </div>
    <div>   
        <p><code>-002.OPT_small</code></p>
        <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-usage_00C_OPT_small_01.png" alt="FIXME">
        <p>Est quisquam non dolor consequatur sint. Qui praesentium placeat voluptas atque optio aut dignissimos minus tempore molestiae.</p>
    </div>
</section>

<section class="flex-2_1-cols">
    <div>
        <p><code>-00E</code></p>
        <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-usage_00E_01.png" alt="FIXME">        
    </div>
    <div>
        <br>
        <p>← Est quisquam non dolor consequatur sint. Qui praesentium placeat voluptas atque optio aut dignissimos minus tempore molestiae.</p>
    </div>
</section>



### Interaction

{% include interaction-table.html %}

## Checklist

Please comply to and update the checklist below:
<!-- FIXME: the markdown for table is very dirty, never ending dashes lines ↓ -->


| Design                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <input type="checkbox" data-status-category="design" class="checklistItem"><strong>Dark and Light Modes</strong><br>Works properly for both Modes                                                                                           |
| <input type="checkbox" data-status-category="design" class="checklistItem"><strong>All interactive states</strong><br>Includes all applicable interactive states: idle, over, pressed, focus, disabled, highlighted idle, highlighted disabled, etc. |
| <input type="checkbox" data-status-category="design" class="checklistItem"> <strong>Document Variations</strong><br>Includes relevant options: variant, styles, sizes, orientations, optional iconography, decorations                               |
| <input type="checkbox" data-status-category="design" class="checklistItem"><strong>Breakpoints and platform scales</strong><br>Includes a desktop scale (web desktop) and a mobile scale (iOS, Android)                                       |
| <input type="checkbox" data-status-category="design" class="checklistItem"><strong>"Yield point" behaviors</strong><br>Includes guidelines for behaviors at maximum strain, often around text size: wrapping, truncation, overflow, animation |

| Accessiblity                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
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



| Implementation                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Figma</strong><br>All Tokens have been injected inside Figma components and tested  |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>iOS</strong><br>Component(s) have been implemented inside iOS component library     |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Android</strong><br>Component(s) have been implemented inside iOS component library |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>CSS</strong><br>Component(s) have been implemented inside Web component library     |


