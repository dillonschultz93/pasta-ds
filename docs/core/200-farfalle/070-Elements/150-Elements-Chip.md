---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Chip # title case
UID: E0001 # ["P","E","F"] + Hexa code/index
variants: [] # all variants index
permalink: farfalle/elements/chip # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Elements # title case
layout: default
nav_order: 150
---

<!-- Set the choices and nomenclature for token naming -->
<!-- ⚠️ WARNING: NEVER USE COMMENTS INSIDE SCRIPT TAGS -->

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
      <td><span data-toolclip='TBD'><code>TBD</code></span></td>
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

### Instantiation

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
           <!-- <th>Type</th> -->
           <th></th>
         </tr>
       </thead>
        <tbody>
         <tr>
            <td>.icon</td>
            <td><span data-toolclip='"YPL.FFL.{{ page.UID }}.HMN_chip.block.icon": "{YPL.FFL.F0003-XXX.HMN_icon}"'><code>FFL.F0003</code></span></td>
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/primitives/icons" alt="Link to Icon page" class="btn">Icon →</a></td>
         </tr>
         <tr>
            <td>.label</td>
            <td><span data-toolclip='"YPL.FFL.{{ page.UID }}.HMN_chip.block.label": "{YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow}"'><code>FFL.F0002-401</code></span></td>
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/primitives/typography#F0002-401" alt="Link to Typography Primitives page" class="btn">Eyebrow →</a></td>
         </tr>
        </tbody>
     </table>
   </div>
 </section>

  <hr>

  <details>
  <summary>verbose snippet</summary>
  <p>
  {% highlight js %}
/// dependencies.

// .block
"YPL.FFL.E0001.HMN_chip.block.icon": "{YPL.FFL.F0003-XXX.HMN_icon}", // select icon here (for example "YPL.FFL.F0003-028")
"YPL.FFL.E0001.HMN_chip.block.label": "{YPL.FFL.F0002-401.HMN_typo_europa-eyebrow}",
{% endhighlight %}

  </p>
  </details>

  <hr>

### Tree

 <section class="flex-1_2-cols">
   <div>
    <p>
      Tree-view of all nested items. <code>(optional)</code> means that the item is not always used and displayed depending on the Component Options.
    </p>
   </div>
   <div>
     {% highlight txt %}
          YPL.FFL.1.HMN_chip
           └─ .block
               └─ .icon (optional)
               └─ .label (optional)
     {% endhighlight %}
   </div>
 </section>

## Decisions

![Decisions Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0001-bp_decisions_01.png)

### Interaction

###### Default

<table class="type-01 headerNoUpperCase colBordered headFramed">
  <!-- <caption>my caption</caption> -->
  <thead>
    <tr>
      <th>.i (idle)</th>
      <th>.o (mouse over)</th>
      <th>.p (pressed)</th>
      <th>.f (focus)</th>
      <th>.w (waiting)</th>
      <th>.d (disabled)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
    </tr>
  </tbody>
</table>

###### Highighted

<table class="type-01 headerNoUpperCase colBordered headFramed">
  <!-- <caption>my caption</caption> -->
  <thead>
    <tr>
      <th>.hi</th>
      <th>.ho</th>
      <th>.hp</th>
      <th>.hf</th>
      <th>.hu <span data-toolclip='Occurs when a parent or grand-parent node loses the focus while the compoment is still highlighted. Cf. OSX Finder Columns View, when navigating within nested folders.'>(?)</span></th>
      <th>.hw</th>
      <th>.hd</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
  </tr>
  </tbody>
</table>

### Variations

###### Options

![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL.E0001-preview_02.png){: .darkenabled}


<table class="type-01 headerNoUpperCase colBordered headFramed">
  <!-- <caption>my caption</caption> -->
  <thead>
    <tr>
      <th>.OPT_icon</th>
      <th>.OPT_iconOnly</th>
      <th>.OPT_notContained</th>
      <th>.OPT_inverse</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.height.OPT_small": "YPL.FFL.TKUI_C.sizes.micro.1400.value"'><code class="language-plaintext highlighter-rouge">.height</code></span>
      </td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="">TODO</span></td>
      <td><span class="dimmed">N/A</span></td>
    </tr>
  </tbody>
</table>

###### Modes

{: no_toc}

<table class="type-01 headerNoUpperCase colBordered headFramed">
  <thead>
    <tr>
      <th>.MD_dark</th>
      <th>.MD_light</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.bgColor.[…].MD_dark": "YPL.FFL.TKUI_C.colors.teal.300.value"'><code class="language-plaintext highlighter-rouge">.height</code></span>

      </td>
      <td><span class="">TODO</span></td>
    </tr>

  </tbody>
</table>

###### Breakpoints (N/A)

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

## Tokens Playground

Playground · Pattern-siloed Tokens including all required Choices and Decisions:

<table>
    <tr class="playground-details-row" id="css">
        <td><button class="btn copy-token-btn">CSS Tokens</button></td>
    </tr>
    <tr class="playground-details-row" id="ios">
        <td><button class="btn copy-token-btn">iOS Tokens</button></td>
    </tr>
    <tr class="playground-details-row" id="android">
        <td><button class="btn copy-token-btn">Android Tokens</button></td>
    </tr>
    <tr class="playground-details-row" id="figma-tokens">
        <td><button class="btn copy-token-btn">Figma Tokens</button></td>
    </tr>
</table>

<details>
<summary>Raw</summary>
{% highlight javascript %}
{
//////  DECISIONS - FFL.{{ page.UID }}

// macro layout

    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.width": "YPL.FFL.TKUI_C.percents.full.value",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.height": "YPL.FFL.TKUI_C.sizes.macro.700.value",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.margin": "YPL.FFL.TKUI_C.spaces.l.value",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.fringeBottom": "YPL.FFL.TKUI_C.spaces.l.value",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.padding": "YPL.FFL.TKUI_C.spaces.l.value",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.radius": "YPL.FFL.TKUI_C.sizes.micro.200.value",
    // blocks
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.blockCopy.width": "YPL.FFL.TKUI_C.percents.full.value",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.blockCopy.slack": "YPL.FFL.TKUI_C.sizes.macro.500.value",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.blockHeader.height": "YPL.FFL.TKUI_C.spaces.l.value",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.blockFooter.height": "YPL.FFL.TKUI_C.spaces.l.value",

    // dependencies

      // .blockHeader
      "YPL.FFL.{{ page.UID }}.HMN_chip.blockHeader.chip": "YPL.FFL.E0001.HMN_chip", // instantiation
      // .blockCopy
      "YPL.FFL.{{ page.UID }}.HMN_chip.blockCopy.chip": "YPL.FFL.E0001.HMN_chip", // instantiation
      "YPL.FFL.{{ page.UID }}.HMN_chip.blockCopy.heading": "YPL.FFL.F0002-003.HMN_typo_europa-h5", // instantiation
      // .blockFooter
      "YPL.FFL.{{ page.UID }}.HMN_chip.blockFooter.eyebrow": "YPL.FFL.F0002-401.HMN_typo_europa-eyebrow.", // instantiation
      "YPL.FFL.{{ page.UID }}.HMN_chip.blockFooter.switchButton": "YPL.FFL.E0003-003.HMN_button-switchIcon", // TBD

// colors & stuff

    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.gradient": "YPL.FFL.TKUI_C.gradients.overlay.black.BL_TR",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.bgImage.fillMode": "FILL", // https://www.figma.com/plugin-docs/api/Paint/#scalemode
    // typo
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.heading.color": "YPL.FFL.TKUI_C.colors.white.value",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.eyebrow.color": "YPL.FFL.TKUI_C.colors.grey.300.value",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.eyebrow.color": "YPL.FFL.TKUI_C.colors.grey.300.value",

// micro layout

    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.heading.margin": "-YPL.FFL.TKUI_C.spaces.xs)", //  it's a negative values
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.heading.fringeBottom": "-YPL.FFL.TKUI_C.spaces.xs)", //  it's a negative values
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.blockCopy.chip.margin": "YPL.FFL.TKUI_C.spaces.s",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.blockCopy.chip.fringeBottom": "YPL.FFL.TKUI_C.spaces.s",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.heading.paddingLeft": "YPL.FFL.TKUI_C.spaces.xxl",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.blockFooter.eyebrow.paddingLeft": "YPL.FFL.TKUI_C.spaces.sm",

// variations

    // options

      // OPT_layout2

        // dependencies
        "YPL.FFL.{{ page.UID }}.HMN_chip.blockCopy.paragraph": "YPL.FFL.F0002-103.HMN_typo_europa-p_s_regular", // instantiation
        // decisions
        "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.gradient.OPT_layout2": "YPL.FFL.TKUI_C.gradients.overlay.black.TL_BR",
        "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.blockCopy.paragraph.color": "YPL.FFL.TKUI_C.colors.white.value",
        "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.heading.margin": "YPL.FFL.TKUI_C.sizes.micro.400.value",
        "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.blockFooter.eyebrow.paddingLeft": "YPL.FFL.TKUI_C.spaces.none", // TBD

      // OPT_small
      "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.height.OPT_small": "YPL.FFL.TKUI_C.sizes.macro.700.value", // 432
      "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.heading.size.OPT_small": "YPL.FFL.TKUI_C.typo.europa.h7.size.value",
      "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.heading.tracking.OPT_small": "YPL.FFL.TKUI_C.typo.europa.h7.tracking.value",
      "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.heading.leading.OPT_small": "YPL.FFL.TKUI_C.typo.europa.h7.leading.value",
      "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.heading.paragraphSpacing.OPT_small": "YPL.FFL.TKUI_C.typo.europa.h7.paragraphSpacing.value",

    // breakpoints
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.blockCopy.width.BRKP_m": "YPL.FFL.TKUI_C.percents.ml.value",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.heading.size.BRKP_m": "YPL.FFL.TKUI_C.typo.europa.h3.size.value",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.heading.tracking.BRKP_m": "YPL.FFL.TKUI_C.typo.europa.h3.tracking.value",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.heading.leading.BRKP_m": "YPL.FFL.TKUI_C.typo.europa.h3.leading.value",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.heading.paragraphSpacing.BRKP_m": "YPL.FFL.TKUI_C.typo.europa.h3.paragraphSpacing.value"

}
{% endhighlight %}

</details>

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

 <section class="status-section">

   <h2 id="status">Status</h2>

   <h3 id="checklist-accessibility-section">Accessibility</h3>

   <table class="checklist-accessibility-details Last3ThCentered">
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

   <h3 id="checklist-general">General</h3>

  <table id="checklist-ops">
      <thead>
          <tr>
              <th>Ops</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td><input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>UID</strong></td>
          </tr>
          <tr>
              <td><input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>Github Ticket</strong></td>
          </tr>
          <tr>
              <td><input type="checkbox" data-status-category="ops" class="checklistItem"><strong>Figma Link(s)</strong></td>
          </tr>
          <tr>
              <td><input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>Design Owner</strong></td>
          </tr>
          <tr>
              <td><input type="checkbox" data-status-category="ops" class="checklistItem"><strong>Figma Document Link</strong><br>Inject Pasta URL inside the <a href="https://help.figma.com/hc/en-us/articles/360055203533-Use-the-Inspect-panel#View_component_details">Figma Component Details Panel</a></td>
          </tr>
      </tbody>
  </table>

  <table id="checklist-design">
      <thead>
          <tr>
              <th>Design</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>
                <input type="checkbox" data-status-category="design" class="checklistItem"><strong>Dark and Light Modes</strong><br>Works properly across both color Modes
              </td>
          </tr>
          <tr>
              <td>
                <input type="checkbox" data-status-category="design" class="checklistItem"><strong>All interactive states</strong><br>Includes all applicable interactive states: idle, over, pressed, focus, disabled, highlighted idle, highlighted disabled, etc.
              </td>
          </tr>
          <tr>
              <td>
                <input type="checkbox" data-status-category="design" class="checklistItem"> <strong>Document Variations</strong><br>Includes relevant options: variant, styles, sizes, orientations, optional iconography, decorations
              </td>
          </tr>
          <tr>
              <td>
                <input type="checkbox" data-status-category="design" class="checklistItem"><strong>All color Schemes</strong><br>Works properly across all color Schemes
              </td>
          </tr>
          <tr>
              <td>
               <input type="checkbox" data-status-category="design" class="checklistItem"><strong>Breakpoints and platform scales</strong><br>Includes a desktop scale (web desktop) and a mobile scale (iOS, Android)
             </td>
          </tr>
          <tr>
              <td>
                <input type="checkbox" data-status-category="design" class="checklistItem"><strong>"Yield point" behaviors</strong><br>Includes guidelines for behaviors at maximum strain, often around text size: wrapping, truncation, overflow, animation
              </td>
          </tr>
      </tbody>
  </table>

  <table id="checklist-content">
      <thead>
          <tr>
              <th>Content</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td><input type="checkbox" data-status-category="content" class="checklistItem"><strong>Copy Writing guidelines</strong><br>Includes content standards or usage guidelines for how to write or format in-product content for the component</td>
          </tr>
          <tr>
              <td><input type="checkbox" data-status-category="content" class="checklistItem"><strong>Internationalization guidelines</strong><br>Works properly across various locales and includes guidelines for bi-directionality (RTL)</td>
          </tr>
          <tr>
              <td><input type="checkbox" data-status-category="content" class="checklistItem"><strong>Accessiblity Content</strong><br>Accessibility content has been addressed (WCAG 1.1.1)</td>
          </tr>
      </tbody>
  </table>

  <table id="checklist-tokens">
      <thead>
          <tr>
              <th>Tokens</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>
                <input type="checkbox" data-status-category="tokens" class="checklistItem" data-status-category="tokens" ><strong>Design tokens</strong><br>All Choices, all Decisions, thus all design attributes (color, typography, layout, animation, etc.) are available as design tokens for all plateforms
              </td>
          </tr>
          <tr>
              <td>
                <input type="checkbox" data-status-category="tokens" class="checklistItem"><strong>Tokens Reversibility</strong><br>The Artifact(s) UID has been injected inside all associated tokens (Choices)
              </td>
          </tr>
      </tbody>
  </table>

  <table id="checklist-implementation">
  <thead>
      <tr>
          <th>Implementation</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td><input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Figma</strong><br>All Tokens have been injected inside Figma components and tested</td>
      </tr>
      <tr>
          <td><input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Pasta Release Version</strong><br><code>{{ page.project_id }}</code> <code>0.1.0</code></td>
      </tr>
      <tr>
          <td><input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>iOS</strong><br>Component(s) have been implemented inside iOS component library</td>
      </tr>
      <tr>
          <td><input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Android</strong><br>Component(s) have been implemented inside iOS component library</td>
      </tr>
      <tr>
          <td><input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Web</strong><br>Component(s) have been implemented inside Web component library</td>
      </tr>
      <tr>
          <td><input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Analytics Log Snippets</strong><br>The analytics log snippets have been implemented</td>
      </tr>
  </tbody>
  </table>

</section>
