---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Chip # title case
UID: E0001 # ["P","E","F"] + Hexa code/index
variants: [] # all variants index
permalink: farfalle/elements/chip-E0001 # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Elements # title case
layout: default
nav_order: 100
---

<!-- Utility scripts -->
<script defer src="{{ site.baseurl }}/assets/js/utilities/pasta-token-generation.js"></script>

<!-- Inject Pasta Apparatus ad hoc script ↓ -->
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/index.js"></script>
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/page-script.js"></script>


# Chip
{: .no_toc}

Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis.

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
      <td><a href="https://github.com/yummly/pasta/issues/9">&#35;9</a></td>
      <td><a href="https://github.com/robert-ANML">Robert</a></td>
      <td><span data-toolclip='.OPT_withIcon, .OPT_onlyIcon'><code>2</code></span></td>
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

![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL.E0001-preview_01.png){: .darkenabled}

<a href="https://www.figma.com/file/le9hbXPWmA55qUA7a7otgH/?node-id=1519%3A36181" class="btn iconed figmaBadge">To Figma →<a>

- TOC
{:toc}

## Layout

![Layout Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0001-bp_layout_01.png)

## Dependencies

![Dependencies Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0001-bp_dependencies_01.png)

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
          YPL.FFL.E0001
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
            <td>.icon</td>
            <td><span data-toolclip='"YPL.FFL.{{ page.UID }}.BLK_main.icon.asset.value": "{YPL.FFL.F0003-XXX}"'><code>FFL.F0003</code></span></td>
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/primitives/icons-F0003" alt="Link to Icon page" class="btn">Icon →</a></td>
         </tr>
         <tr>
            <td>.label</td>
            <td><span data-toolclip='"YPL.FFL.{{ page.UID }}.BLK_main.label.style.value": "{YPL.FFLF0002-401}"'><code>FFL.F0002-401</code></span></td>
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/primitives/typography-F0002#F0002-401" alt="Link to Typography Primitives page" class="btn">Eyebrow →</a></td>
         </tr>
        </tbody>
     </table>
   </div>
 </section>

## Decisions

![Decisions Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0001-bp_decisions_01.png)


### Variations

#### Options

![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL.E0001-preview_02.png){: .darkenabled}

<table class="type-01 headerNoUpperCase colBordered headFramed">
  <thead>
    <tr>
      <th>.OPT_withIcon</th>
      <th>.OPT_onlyIcon</th>   
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}.OPT_withIcon.BLK_main.icon.visible.value": "{YPL.CONST.boolean.true.value}"'><code class="language-plaintext highlighter-rouge">.BLK_main.icon.visible</code></span>
      </td>    
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}.OPT_onlyIcon.BLK_main.icon.visible.value": "{YPL.CONST.boolean.true.value}"'><code class="language-plaintext highlighter-rouge">.BLK_main.icon.visible</code></span> 
        <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}.OPT_onlyIcon.BLK_main.label.visible.value": "{YPL.CONST.boolean.false.value}"'><code class="language-plaintext highlighter-rouge">.BLK_main.label.visible</code></span>
      </td>
    </tr>
  </tbody>
</table>

<!-- #### Modes (N/A) -->
<!-- {: .no_toc} -->


<!-- #### Breakpoints (N/A) -->
<!-- {: .no_toc} -->

<!-- <table class="headerCentered headerNoUpperCase colBordered headFramed">
  <thead>
    <tr>
      <th>.BRKP_s&nbsp;(480)</th>
      <th>.BRKP_m&nbsp;(768)</th>
      <th>.BRKP_l&nbsp;(1024)</th>
      <th>.BRKP_xl&nbsp;(1920)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
    </tr>
  </tbody>
</table> -->

<!-- ## Tokens Playground

Playground · Pattern-siloed Tokens including all required Choices and Decisions: -->

<!-- <table>
    <tr class="playground-details-row" id="css">
        <td><button class="btn">CSS Tokens</button></td>
    </tr>
    <tr class="playground-details-row" id="ios">
        <td><button class="btn copy-token-btn">iOS Tokens</button></td>
    </tr>
    <tr class="playground-details-row" id="android">
        <td><button class="btn">Android Tokens</button></td>
    </tr>
    <tr class="playground-details-row" id="figma-tokens">
        <td><button class="btn">Figma Tokens</button></td>
    </tr>
</table> -->


<!--
## Copy Writing Guidelines

<section class="flex-1_1-cols">
  <div>
    <p>
     Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo.<br><br>
    </p>
    <hr class="dd-do">
  </div>
   <div>
     <p>
      Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo.<br><br>
     </p>
      <hr class="dd-dont">
 </div>
 </section> -->

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
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Android</strong><br>Component(s) have been implemented inside iOS component library  |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Web</strong><br>Component(s) have been implemented inside Web component library     |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Analytics Log Snippets</strong><br>The analytics log snippets have been implemented |
