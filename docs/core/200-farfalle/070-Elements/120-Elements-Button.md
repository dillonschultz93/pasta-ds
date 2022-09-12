---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Button # title case
UID: E0003 # ["P","E","F"] + Hexa code/index
variants: [
    "001",
    "002",
    "003",
    "004",
    "005",
    "006",
    "007",
    "008",
    "009",
    "00A",
    "00B",
    "00C",
  ] # all variants index
permalink: farfalle/elements/button-E0003 # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Elements # title case
layout: default
nav_order: 120
---

<!-- Utility scripts -->
<script defer src="{{ site.baseurl }}/assets/js/utilities/pasta-token-generation.js"></script>
<!-- Inject Pasta Apparatus ad hoc script ↓ -->
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/index.js"></script>
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/page-script.js"></script>

# Button

{: .no_toc}

Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs.

{% include element-header.html %}

![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-preview_01.png){: .darkenabled}

<a href="https://www.figma.com/file/le9hbXPWmA55qUA7a7otgH/Pasta-0.1.0?node-id=1737%3A68833" class="btn iconed figmaBadge">To Figma →<a>

- TOC
{:toc}

## Layout

![Layout Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-layout_01.png)

## Dependencies

![Dependencies Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-bp_dependencies_01.png)

<details>
<summary>Tree</summary>
 <section class="flex-1_2-cols">
   <div>
    <p>
      Tree-view of all nested items. <code>(optional)</code> means that the item is not always used and displayed depending on the Component Options.
    </p>
   </div>
   <div>
     {% highlight txt %}
          YPL.FFL.{{page.UID}}
          └─ .BLK_main
              ├─ .icon (optional)
              └─ .label (optional)
     {% endhighlight %}
   </div>
 </section>
</details>
<hr>

### Links

<section class="flex-1_2-cols">
    <div>
      <br>
     <p>
      This Element requires that you implement and instantiate all these dependencies.<br>
      Please refer to each component in this list&nbsp;→
      </p>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>Instance</th>
            <th>Component</th>
            <th></th>
          </tr>
        </thead>
         <tbody>
          <tr>
             <td>.icon  </td>
             <td><span data-toolclip='"YPL.FFL.{{ page.UID }}.BLK_main.icon.asset.value": "{YPL.FFL.F0003-XXX}"'><code>FFL.F0003</code></span></td>
             <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/primitives/icons-F0003" alt="Link to Icon page" class="btn">Icon →</a></td>
          </tr>
          <tr>
             <td>.label</td>
             <td><span data-toolclip='"YPL.FFL.{{ page.UID }}.BLK_main.label.style.value": "{YPL.FFL.F0002-102}"'><code>FFL.F0002-102</code></span></td>
             <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/primitives/typography-F0002#F0002-102" alt="Link to Typography Primitives page" class="btn">Strong Paragraph →</a></td>
          </tr>
          <tr>
             <td><code>-009</code> .label</td>
             <td><span data-toolclip='"YPL.FFL.{{ page.UID }}.BLK_main.label.style.value": "{YPL.FFLF0002-104}"'><code>FFL.F0002-104</code></span></td>
             <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/primitives/typography-F0002#F0002-104" alt="Link to Typography Primitives page" class="btn">Strong S. Paragraph →</a></td>
          </tr>         
         </tbody>
      </table>
    </div>
  </section>

## Decisions

![Decisions Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-bp_decisions_01.png)

### Variations

![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-preview_02.png){: .darkenabled}

### Interaction

<div class="tabs">
  <input type="radio" name="Variants" id="variant_01" checked="checked">
  <label for="variant_01">-001</label>
  <div class="tab">
    <br>
    <h4 class="no_toc">Default</h4>
    <table class="type-01 headerNoUpperCase colBordered headFramed">
      <!-- <caption>my caption</caption> -->
      <thead>
        <tr>
          <th>.i (idle)</th>
          <th>.p (pressed)</th>
          <th>.d (disabled)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-001.bgColor.i.value": "{YPL.FFL.TKUI_C.colors.teal.400.value}"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span>                                           
          </td>
          <td><span data-toolclip='"YPL.FFL.TKUI_D.E0003-001.bgColor.p.value": "{YPL.FFL.TKUI_C.colors.teal.500.value}"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span></td>
          <td><span data-toolclip='"YPL.FFL.TKUI_D.E0003-001.bgColor.d.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span></td>
        </tr>
      </tbody>
    </table>
  </div>
  <input type="radio" name="Variants" id="variant_02">
  <label for="variant_02">-002</label>
  <div class="tab">
  <br>
  <h4 class="no_toc">Default</h4>
    <table class="type-01 headerNoUpperCase colBordered headFramed">
      <!-- <caption>my caption</caption> -->
      <thead>
        <tr>
          <th>.i (idle)</th>
          <th>.p (pressed)</th>
          <th>.d (disabled)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-002.bgColor.i.value": "{YPL.FFL.TKUI_C.colors.teal.400.value}"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span>                                           
          </td>
          <td><span data-toolclip='"YPL.FFL.TKUI_D.E0003-002.bgColor.p.value": "{YPL.FFL.TKUI_C.colors.teal.500.value}"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span></td>
          <td><span data-toolclip='"YPL.FFL.TKUI_D.E0003-002.bgColor.d.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span></td>
        </tr>
      </tbody>
    </table>
   </div>
   <input type="radio" name="Variants" id="variant_03">
  <label for="variant_03">-003</label>
  <div class="tab">
    <br>
    <h4 class="no_toc">Default</h4>
    <table class="type-01 headerNoUpperCase colBordered headFramed">
      <!-- <caption>my caption</caption> -->
      <thead>
        <tr>
          <th>.i (idle)</th>
          <th>.p (pressed)</th>
          <th>.d (disabled)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-003.bgColor.i.value": "{YPL.FFL.TKUI_C.colors.teal.400.value}"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span>                                           
          </td>
          <td><span data-toolclip='"YPL.FFL.TKUI_D.E0003-003.bgColor.p.value": "{YPL.FFL.TKUI_C.colors.teal.500.value}"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span></td>
          <td><span data-toolclip='"YPL.FFL.TKUI_D.E0003-003.bgColor.d.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span></td>
        </tr>
      </tbody>
    </table>
  </div>
  <input type="radio" name="Variants" id="variant_04">
  <label for="variant_04">-004</label>
  <div class="tab">
    <br>
    <h4 class="no_toc">Default</h4>
    <table class="type-01 headerNoUpperCase colBordered headFramed">
      <!-- <caption>my caption</caption> -->
      <thead>
        <tr>
          <th>.i (idle)</th>
          <th>.p (pressed)</th>
          <th>.d (disabled)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-004.border.color.i.value": "{YPL.FFL.TKUI_C.colors.teal.400.value}"'><code class="language-plaintext highlighter-rouge">.border.color</code></span>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-004.BLK_main.label.color.i.value": "{YPL.FFL.TKUI_C.colors.teal.400.value}"'><code class="language-plaintext highlighter-rouge">.label.color</code></span>
          </td>
          <td><span data-toolclip='"YPL.FFL.TKUI_D.E0003-004.border.color.p.value": "{YPL.FFL.TKUI_C.colors.teal.500.value}"'><code class="language-plaintext highlighter-rouge">.border.color</code></span>
          <span data-toolclip='"YPL.FFL.TKUI_D.E0003-004.BLK_main.label.color.p.value": "{YPL.FFL.TKUI_C.colors.teal.500.value}"'><code class="language-plaintext highlighter-rouge">.label.color</code></span></td>
          <td><span data-toolclip='"YPL.FFL.TKUI_D.E0003-004.border.color.d.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.border.color</code></span>
          <span data-toolclip='"YPL.FFL.TKUI_D.E0003-004.BLK_main.label.color.d.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.label.color</code></span></td>
        </tr>
      </tbody>
    </table>
  </div>
  <input type="radio" name="Variants" id="variant_05">
  <label for="variant_05">-005</label>
  <div class="tab">
    <br>
    <h4 class="no_toc">Default</h4>
    <table class="type-01 headerNoUpperCase colBordered headFramed">
      <!-- <caption>my caption</caption> -->
      <thead>
        <tr>
          <th>.i (idle)</th>
          <th>.p (pressed)</th>
          <th>.d (disabled)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-005.border.color.i.value": "{YPL.FFL.TKUI_C.colors.teal.400.value}"'><code class="language-plaintext highlighter-rouge">.border.color</code></span>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-005.BLK_main.label.color.i.value": "{YPL.FFL.TKUI_C.colors.teal.400.value}"'><code class="language-plaintext highlighter-rouge">.label.color</code></span>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-005.BLK_main.icon.color.i.value": "{YPL.FFL.TKUI_C.colors.teal.400.value}"'><code class="language-plaintext highlighter-rouge">.icon.color</code></span>
          </td>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-005.border.color.p.value": "{YPL.FFL.TKUI_C.colors.teal.500.value}"'><code class="language-plaintext highlighter-rouge">.border.color</code></span>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-005.BLK_main.label.color.p.value": "{YPL.FFL.TKUI_C.colors.teal.500.value}"'><code class="language-plaintext highlighter-rouge">.label.color</code></span>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-005.BLK_main.icon.color.p.value": "{YPL.FFL.TKUI_C.colors.teal.500.value}"'><code class="language-plaintext highlighter-rouge">.icon.color</code></span>
          </td>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-005.border.color.d.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.border.color</code></span>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-005.BLK_main.label.color.d.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.label.color</code></span>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-005.BLK_main.icon.color.d.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.icon.color</code></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <input type="radio" name="Variants" id="variant_06">
  <label for="variant_06">-006</label>
  <div class="tab">
    <br>
    <h4 class="no_toc">Default</h4>
    <table class="type-01 headerNoUpperCase colBordered headFramed">
      <!-- <caption>my caption</caption> -->
      <thead>
        <tr>
          <th>.i (idle)</th>
          <th>.p (pressed)</th>
          <th>.d (disabled)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-006.border.color.i.value": "{YPL.FFL.TKUI_C.colors.teal.400.value}"'><code class="language-plaintext highlighter-rouge">.border.color</code></span>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-006.BLK_main.label.color.i.value": "{YPL.FFL.TKUI_C.colors.teal.400.value}"'><code class="language-plaintext highlighter-rouge">.label.color</code></span>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-006.BLK_main.icon.color.i.value": "{YPL.FFL.TKUI_C.colors.teal.400.value}"'><code class="language-plaintext highlighter-rouge">.icon.color</code></span>
          </td>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-006.border.color.p.value": "{YPL.FFL.TKUI_C.colors.teal.500.value}"'><code class="language-plaintext highlighter-rouge">.border.color</code></span>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-006.BLK_main.label.color.p.value": "{YPL.FFL.TKUI_C.colors.teal.500.value}"'><code class="language-plaintext highlighter-rouge">.label.color</code></span>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-006.BLK_main.icon.color.p.value": "{YPL.FFL.TKUI_C.colors.teal.500.value}"'><code class="language-plaintext highlighter-rouge">.icon.color</code></span>
          </td>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-006.border.color.d.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.border.color</code></span>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-006.BLK_main.label.color.d.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.label.color</code></span>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-006.BLK_main.icon.color.d.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.icon.color</code></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <input type="radio" name="Variants" id="variant_07">
  <label for="variant_07">-007</label>
  <div class="tab">
    <br>
    <h4 class="no_toc">Default</h4>
    <table class="type-01 headerNoUpperCase colBordered headFramed">
      <!-- <caption>my caption</caption> -->
      <thead>
        <tr>
          <th>.i (idle)</th>
          <th>.p (pressed)</th>
          <th>.d (disabled)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-007.bgColor.i.value": "{YPL.FFL.TKUI_C.colors.teal.400.value}"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span>
          </td>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-007.bgColor.p.value": "{YPL.FFL.TKUI_C.colors.teal.500.value}"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span>
          </td>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-007.bgColor.d.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- -008 -->
  <input type="radio" name="Variants" id="variant_08">
  <label for="variant_08">-008</label>
  <div class="tab">
    <br>
    <h4 class="no_toc">Default</h4>
    <table class="type-01 headerNoUpperCase colBordered headFramed">
      <!-- <caption>my caption</caption> -->
      <thead>
        <tr>
          <th>.i (idle)</th>
          <th>.p (pressed)</th>
          <th>.d (disabled)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-008.border.color.i.value": "{YPL.FFL.TKUI_C.colors.teal.400.value}"'><code class="language-plaintext highlighter-rouge">.border.color</code></span>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-008.BLK_main.label.color.i.value": "{YPL.FFL.TKUI_C.colors.teal.400.value}"'><code class="language-plaintext highlighter-rouge">.label.color</code></span>
          </td>
          <td><span data-toolclip='"YPL.FFL.TKUI_D.E0003-008.border.color.p.value": "{YPL.FFL.TKUI_C.colors.teal.500.value}"'><code class="language-plaintext highlighter-rouge">.border.color</code></span>
          <span data-toolclip='"YPL.FFL.TKUI_D.E0003-008.BLK_main.label.color.p.value": "{YPL.FFL.TKUI_C.colors.teal.500.value}"'><code class="language-plaintext highlighter-rouge">.label.color</code></span></td>
          <td><span data-toolclip='"YPL.FFL.TKUI_D.E0003-008.border.color.d.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.border.color</code></span>
          <span data-toolclip='"YPL.FFL.TKUI_D.E0003-008.BLK_main.label.color.d.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.label.color</code></span></td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- -009 -->
  <input type="radio" name="Variants" id="variant_09">
  <label for="variant_09">-009</label>
  <div class="tab">
    <br>
    <h4 class="no_toc">Default</h4>
    <table class="type-01 headerNoUpperCase colBordered headFramed">
      <!-- <caption>my caption</caption> -->
      <thead>
        <tr>
          <th>.i (idle)</th>
          <th>.p (pressed)</th>
          <th>.d (disabled)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-009.BLK_main.label.color.i.value": "{YPL.FFL.TKUI_C.colors.teal.400.value}"'><code class="language-plaintext highlighter-rouge">.label.color</code></span>
          </td>
          <td><span data-toolclip='"YPL.FFL.TKUI_D.E0003-009.BLK_main.label.color.p.value": "{YPL.FFL.TKUI_C.colors.teal.500.value}"'><code class="language-plaintext highlighter-rouge">.label.color</code></span></td>
          <td><span data-toolclip='"YPL.FFL.TKUI_D.E0003-009.BLK_main.label.color.d.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.label.color</code></span></td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- -00A -->
  <input type="radio" name="Variants" id="variant_0A">
  <label for="variant_0A">-00A</label>
  <div class="tab">
    <br>
    <h4 class="no_toc">Default</h4>
    <table class="type-01 headerNoUpperCase colBordered headFramed">
      <!-- <caption>my caption</caption> -->
      <thead>
        <tr>
          <th>.i (idle)</th>
          <th>.p (pressed)</th>
          <th>.d (disabled)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-00A.BLK_main.label.color.i.value": "{YPL.FFL.TKUI_C.colors.grey.900.value}"'><code class="language-plaintext highlighter-rouge">.label.color</code></span>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-00A.BLK_main.icon.color.i.value": "{YPL.FFL.TKUI_C.colors.teal.400.value}"'><code class="language-plaintext highlighter-rouge">.icon.color</code></span>
          </td>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-00A.BLK_main.label.color.p.value": "{YPL.FFL.TKUI_C.colors.grey.900.value}"'><code class="language-plaintext highlighter-rouge">.label.color</code></span>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-00A.BLK_main.icon.color.p.value": "{YPL.FFL.TKUI_C.colors.teal.500.value}"'><code class="language-plaintext highlighter-rouge">.icon.color</code></span>
          </td>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-00A.BLK_main.label.color.d.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.label.color</code></span>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-00A.BLK_main.icon.color.d.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.icon.color</code></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- -00B -->
  <input type="radio" name="Variants" id="variant_0B">
  <label for="variant_0B">-00B</label>
  <div class="tab">
    <br>
    <h4 class="no_toc">Default</h4>
    <table class="type-01 headerNoUpperCase colBordered headFramed">
      <!-- <caption>my caption</caption> -->
      <thead>
        <tr>
          <th>.i (idle)</th>
          <th>.p (pressed)</th>
          <th>.d (disabled)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-00A.BLK_main.icon.color.i.value": "{YPL.FFL.TKUI_C.colors.teal.400.value}"'><code class="language-plaintext highlighter-rouge">.icon.color</code></span>
          </td>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-00A.BLK_main.icon.color.p.value": "{YPL.FFL.TKUI_C.colors.teal.500.value}"'><code class="language-plaintext highlighter-rouge">.icon.color</code></span>
          </td>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-00A.BLK_main.icon.color.d.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.icon.color</code></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- -00C -->
  <input type="radio" name="Variants" id="variant_0C">
  <label for="variant_0C">-00C</label>
  <div class="tab">
    <br>
    <h4 class="no_toc">Default</h4>
    <table class="type-01 headerNoUpperCase colBordered headFramed">
      <!-- <caption>my caption</caption> -->
      <thead>
        <tr>
          <th>.i (idle)</th>
          <th>.p (pressed)</th>
          <th>.d (disabled)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-00C.bgColor.i.value": "{YPL.FFL.TKUI_C.colors.grey.100.value}"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-00C.BLK_main.icon.color.i.value": "{YPL.FFL.TKUI_C.colors.black.value}"'><code class="language-plaintext highlighter-rouge">.icon.color</code></span>
          </td>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-00C.bgColor.p.value": "{YPL.FFL.TKUI_C.colors.grey.200.value}"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-00C.BLK_main.icon.color.p.value": "{YPL.FFL.TKUI_C.colors.grey.400.value}"'><code class="language-plaintext highlighter-rouge">.icon.color</code></span>
          </td>
          <td>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-00C.bgColor.d.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span>
            <span data-toolclip='"YPL.FFL.TKUI_D.E0003-00C.BLK_main.icon.color.d.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.icon.color</code></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
 </div>

## Accessibility Status

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

## Checklist

Please comply to and update the checklist below:

| Ops                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>UID</strong>                                                                                                                                                                            |
| <input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>Github Ticket</strong>                                                                                                                                                                  |
| <input type="checkbox" data-status-category="ops" class="checklistItem"><strong>Figma Link(s)</strong>                                                                                                                                                                          |
| <input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>Design Owner</strong>                                                                                                                                                                   |
| <input type="checkbox" data-status-category="ops" class="checklistItem"><strong>Figma Document Link</strong><br>Inject Pasta URL inside the [Figma Component Details Panel](https://help.figma.com/hc/en-us/articles/360055203533-Use-the-Inspect-panel#View_component_details) |

| Design                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <input type="checkbox" data-status-category="design" class="checklistItem"><strong>Dark and Light Modes</strong><br>Works properly across both color Modes                                                                                           |
| <input type="checkbox" data-status-category="design" class="checklistItem"><strong>All interactive states</strong><br>Includes all applicable interactive states: idle, over, pressed, focus, disabled, highlighted idle, highlighted disabled, etc. |
| <input type="checkbox" data-status-category="design" class="checklistItem"> <strong>Document Variations</strong><br>Includes relevant options: variant, styles, sizes, orientations, optional iconography, decorations                               |
| <input type="checkbox" data-status-category="design" class="checklistItem"><strong>All color Schemes</strong><br>Works properly across all color Schemes                                                                                             |

| Design Constraints                                                                                                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <input type="checkbox" data-status-category="design" class="checklistItem"><strong>Breakpoints and platform scales</strong><br>Includes a desktop scale (web desktop) and a mobile scale (iOS, Android)                                       |
| <input type="checkbox" data-status-category="design" class="checklistItem"><strong>"Yield point" behaviors</strong><br>Includes guidelines for behaviors at maximum strain, often around text size: wrapping, truncation, overflow, animation |

| Content                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <input type="checkbox" data-status-category="content" class="checklistItem"><strong>Copy Writing guidelines</strong><br>Includes content standards or usage guidelines for how to write or format in-product content for the component |
| <input type="checkbox" data-status-category="content" class="checklistItem"><strong>Internationalization guidelines</strong><br>Works properly across various locales and includes guidelines for bi-directionality (RTL)              |
| <input type="checkbox" data-status-category="content" class="checklistItem"><strong>Accessiblity Content</strong><br>Accessibility content has been addressed (WCAG 1.1.1)                                                             |

| Accessiblity                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <input type="checkbox" data-status-category="accessibility-global" class="checklistItem"><strong>Accessiblity</strong><br>All required accessiblity criteria have been addressed |

| Tokens                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <input type="checkbox" data-status-category="tokens" class="checklistItem" data-status-category="tokens" ><strong>Design tokens</strong><br>All Choices, all Decisions, thus all design attributes (color, typography, layout, animation, etc.) are available as design tokens for all plateforms |
| <input type="checkbox" data-status-category="tokens" class="checklistItem"><strong>Tokens Reversibility</strong><br>The Artifact(s) UID has been injected inside all associated tokens (Choices)                                                                                                  |

| Implementation                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Figma</strong><br>All Tokens have been injected inside Figma components and tested  |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Pasta Release Version</strong><br>Pasta `V0.1.0`                                    |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>iOS</strong><br>Component(s) have been implemented inside iOS component library     |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Android</strong><br>Component(s) have been implemented inside iOS component library |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Web</strong><br>Component(s) have been implemented inside Web component library     |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Analytics Log Snippets</strong><br>The analytics log snippets have been implemented |
