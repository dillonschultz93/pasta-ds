---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Navigation # title case
UID: P0009 # ["P","E","F"] + Hexa code/index
variants: ['001', '002', '003', '004'] # all variants index
permalink: farfalle/patterns/navigation-P0009 # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Patterns # title case
layout: default
nav_order: 180
---

# Navigation
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
      <td><a href="https://github.com/yummly/pasta/issues/16">&#35;16</a></td>
      <td><a href="https://github.com/robert-ANML">Robert</a></td>
      <td><span data-toolclip='N/A'><code>N/A</code></span></td>
      <td><a href="{{ site.url }}/pasta/assets/projects/{{ page.project_id }}/tokens/">Folder&nbsp;→</a></td>
      <td><a href="#status"><span id="statusWidget"></span><span>0%</span></a></td>
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

![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-{{page.UID}}-preview_01.png){: .darkenabled}

<a href="https://www.figma.com/file/PU3d2lfOmmqlqw4Qkdiwai/Pasta-0.1.0?node-id=2046%3A26607" class="btn iconed figmaBadge">To Figma →</a>

- TOC
{:toc}

## Layout

 ![Layout Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-{{page.UID}}-layout_01.png)

## Dependencies

![Dependencies Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-{{page.UID}}-bp_dependencies_01.png)

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
          ├─ .BLK_left
          │   └─ .button
          └─ .BLK_right
              └─ .button
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
     This Pattern requires that you implement and instantiate all these dependencies.<br>
     Please refer to each component in this list&nbsp;→
     </p>
   </div>
   <div>
     <table>
       <thead>
         <tr>
           <th>Instance</th>
           <th>Component</th>
           <!-- <th>Type</th> -->
           <th></th>
         </tr>
       </thead>
        <tbody>
        <tr>
            <td><code>-001</code> <code>-002</code> .button</td>
            <td><span data-toolclip='"YPL.FFL.TKUI_D.P0009-001.BLK_left.button.element.value": "{YPL.FFL.E0003-00C}"'><code>FFL.E0003-00C</code></span></td>
            <!-- <td>Element</td> -->
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}elements/button-E0003" alt="Link to Elements page" class="btn">Button →</a></td>
         </tr>
         <tr>
            <td><code>-003</code> <code>-004</code> .button</td>
            <td><span data-toolclip='"YPL.FFL.TKUI_D.P0009-001.BLK_left.button.element.value": "{YPL.FFL.E0003-00B}"'><code>FFL.E0003-00B</code></span></td>
            <!-- <td>Element</td> -->
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}elements/button-E0003" alt="Link to Elements page" class="btn">Button →</a></td>
         </tr>
        </tbody>
     </table>
   </div>
 </section>

## Decisions

![Decisions Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-{{page.UID}}-bp_decisions_01.png)

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

|Ops|
|---|
|<input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>UID</strong>|
|<input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>Github Ticket</strong>|
|<input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>Figma Link(s)</strong>|
|<input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>Design Owner</strong>|
|<input type="checkbox" data-status-category="ops" class="checklistItem"><strong>Figma Document Link</strong><br>Inject Pasta URL inside the [Figma Component Details Panel](https://help.figma.com/hc/en-us/articles/360055203533-Use-the-Inspect-panel#View_component_details) |
{: .checklistTable}

|Design|
|---|
|<input type="checkbox" data-status-category="design" class="checklistItem" checked><strong>Dark and Light Modes</strong><br>Works properly across both color Modes|
|<input type="checkbox" data-status-category="design" class="checklistItem" checked><strong>All interactive states</strong><br>Includes all applicable interactive states: idle, over, pressed, focus, disabled, highlighted idle, highlighted disabled, etc.|
|<input type="checkbox" data-status-category="design" class="checklistItem" checked> <strong>Document Variations</strong><br>Includes relevant options: variant, styles, sizes, orientations, optional iconography, decorations|
|<input type="checkbox" data-status-category="design" class="checklistItem"><strong>All color Schemes</strong><br>Works properly across all color Schemes|
{: .checklistTable}

|Design Constraints|
|---|
|<input type="checkbox" data-status-category="design" class="checklistItem"><strong>Breakpoints and platform scales</strong><br>Includes a desktop scale (web desktop) and a mobile scale (iOS, Android)|
|<input type="checkbox" data-status-category="design" class="checklistItem"><strong>"Yield point" behaviors</strong><br>Includes guidelines for behaviors at maximum strain, often around text size: wrapping, truncation, overflow, animation|
{: .checklistTable}

|Content|
|---|
|<input type="checkbox" data-status-category="content" class="checklistItem"><strong>Copy Writing guidelines</strong><br>Includes content standards or usage guidelines for how to write or format in-product content for the component|
|<input type="checkbox" data-status-category="content" class="checklistItem"><strong>Internationalization guidelines</strong><br>Works properly across various locales and includes guidelines for bi-directionality (RTL)|
|<input type="checkbox" data-status-category="content" class="checklistItem"><strong>Accessiblity Content</strong><br>Accessibility content has been addressed (WCAG 1.1.1)|
{: .checklistTable}

|Accessiblity|
|---|
|<input type="checkbox" data-status-category="accessibility-global" class="checklistItem"><strong>Accessiblity</strong><br>All required accessiblity criteria have been addressed|
{: .checklistTable}

|Tokens|
|---|
|<input type="checkbox" data-status-category="tokens" class="checklistItem" data-status-category="tokens" ><strong>Design tokens</strong><br>All Choices, all Decisions, thus all design attributes (color, typography, layout, animation, etc.) are available as design tokens for all plateforms|
|<input type="checkbox" data-status-category="tokens" class="checklistItem"><strong>Tokens Reversibility</strong><br>The Artifact(s) UID has been injected inside all associated tokens (Choices)|
{: .checklistTable}

|Implementation|
|---|
|<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Figma</strong><br>All Tokens have been injected inside Figma components and tested|
|<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Pasta Project Release Version</strong><br>Pasta `YPL.{{ page.project_id }}` `0.1.0`|
|<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>iOS</strong><br>Component(s) have been implemented inside iOS component library|
|<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Android</strong><br>Component(s) have been implemented inside iOS component library|
|<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Web</strong><br>Component(s) have been implemented inside Web component library|
|<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Analytics Log Snippets</strong><br>The analytics log snippets have been implemented|
{: .checklistTable}
