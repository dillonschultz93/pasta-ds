---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Card Poster # title case
UID: P0001 # "P" = Pattern + Hexa code/index
variants: [] # all variants index
permalink: farfalle/patterns/card-poster-P0001 # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Patterns # title case
layout: default
nav_order: 100
---

<!-- Utility scripts -->
<script defer src="{{ site.baseurl }}/assets/js/utilities/pasta-token-generation.js"></script>
<!-- Inject Pasta Apparatus ad hoc script ↓ -->
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/index.js"></script>
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/page-script.js"></script>

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
      <td><a href="https://github.com/yummly/pasta/issues/7">&#35;7</a></td>
      <td><a href="https://github.com/robert-ANML">Robert</a></td>
      <td><span data-toolclip='.OPT_small'><code>1</code></span></td>
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

# Card Poster
{: .no_toc}

Card Posters distinctive attribute is their background image that fill the card container (bleed). The Cards can embed various information. At minima a Heading is required. Card Posters are used to promote key features within the user journey.


<div class="tabs">
  <input type="radio" name="tabs_previews" id="tab_preview_01" checked="checked">
  <label for="tab_preview_01">( <i>default</i> )</label>
  <div class="tab">
     <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0001-opt1-preview_01.png" alt="Default Preview" class="darkenabled">
  </div>
  <!-- <input type="radio" name="tabs_previews" id="tab_preview_02">
  <label for="tab_preview_02">.OPT_layout2</label>
  <div class="tab">
     <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0001-opt2-preview_01.png" alt="Layout 2 Preview" class="darkenabled">
  </div> -->
  <input type="radio" name="tabs_previews" id="tab_preview_03">
  <label for="tab_preview_03">.OPT_small</label>
  <div class="tab">
     <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0001-opt3-preview_01.png" alt="Small Preview" class="darkenabled">
  </div>
</div>

<a href="https://www.figma.com/file/le9hbXPWmA55qUA7a7otgH/Pasta-0.1.0?node-id=12%3A1694" class="btn iconed figmaBadge">To Figma →</a>

- TOC
{:toc}


## Layout

![Layout Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0001-bp_layout_01.png)

## Dependencies

![Dependencies Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0001-bp_dependencies_01.png)

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
          YPL.FFL.P0001
          ├─ .gradient
          ├─ .BLK_header
          │   └─ .chip
          ├─ .BLK_copy
              ├─ .chip          
          │   └─ .heading
          └─ .BLK_footer
              ├─ .eyebrow
              └─ .switchButton (optional)
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
            <td>.gradient</td>
            <td><span data-toolclip='"YPL.FFL.P0001.gradient.value": "{YPL.FFL.F0004-001}"'><code>FFL.F0004</code></span></td>
            <!-- <td>Element</td> -->
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/primitives/gradient-F0004" alt="Link to Primitive page" class="btn">Gradient →</a></td>
         </tr>
         <tr>
            <td>.chip</td>
            <td><span data-toolclip='"YPL.FFL.P0001.BLK_header.chip.element.value": "{YPL.FFL.E0001}"'><code>FFL.E0001</code></span></td>
            <!-- <td>Element</td> -->
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/elements/chip-E0001" alt="Link to Element page" class="btn">Chip →</a></td>
         </tr>
         <tr>
            <td>.chip</td>
            <td><span data-toolclip='"YPL.FFL.P0001.BLK_copy.chip.element.value": "{YPL.FFL.E0001}"'><code>FFL.E0001</code></span></td>
            <!-- <td>Element</td> -->
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/elements/chip-E0001" alt="Link to Element page" class="btn">Chip →</a></td>
         </tr>
         <tr>
            <td>.heading</td>
            <td><span data-toolclip='"YPL.FFL.P0001.BLK_copy.heading.style.value": "{YPL.FFL.F0002-005}"'><code>FFL.F0002-005</code></span></td>
            <!-- <td>Primitive</td> -->
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/primitives/typography-F0002#F0002-005" alt="Link to Element page" class="btn">heading →</a></td>
         </tr>
         <tr>
            <td>.eyebrow</td>
            <td><span data-toolclip='"YPL.FFL.P0001.BLK_footer.eyebrow.style.value": "{YPL.FFL.F0002-401}"'><code>FFL.F0002-401</code></span></td>
            <!-- <td>Primitive</td> -->
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/primitives/typography-F0002#F0002-401" alt="Link to Primitive page" class="btn">eyebrow →</a></td>
         </tr>
         <tr>
            <td>.switchButton</td>
            <td><span data-toolclip='"YPL.FFL.P0001.BLK_footer.switchButton.element.value": "{YPL.FFL.E0004-002}"'><code>FFL.E0004-002</code></span></td>
            <!-- <td>Element</td> -->
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/elements/switch-E0004" alt="Link to Element page" class="btn">Switch →</a></td>
         </tr>
        </tbody>
     </table>
   </div>
 </section>

## Decisions

![Decision Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0001-bp_decisions_01.png)

### Variations

##### Options

<table class="type-01 headerNoUpperCase colBordered headFramed">
  <!-- <caption>my caption</caption> -->
  <thead>
    <tr>
      <th>.OPT_small</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.P0001.OPT_small.height.value": "{YPL.FFL.TKUI_C.sizes.macro.500.value}"'><code class="language-plaintext highlighter-rouge">.height</code></span>
        <span data-toolclip='"YPL.FFL.TKUI_D.P0001.OPT_small.BLK_copy.heading.style.value": "{YPL.FFL.F0002-005}"'><code class="language-plaintext highlighter-rouge">.BLK_copy.heading.style</code></span>
        <span data-toolclip='"YPL.FFL.TKUI_D.P0001.OPT_small.BLK_header.chip.element.value": "{YPL.FFL.E0001.OPT_iconOnly}"'><code class="language-plaintext highlighter-rouge">.BLK_header.chip.element</code></span>
        <span data-toolclip='"YPL.FFL.TKUI_D.P0001.OPT_small.gradient.value": "{YPL.FFL.F0004-002}"'><code class="language-plaintext highlighter-rouge">.gradient</code></span>            
      </td>
    </tr>
  </tbody>
</table>

<!-- ##### Interaction -->

##### Modes (N/A)
{: no_toc}

Light and Dark are the same.

##### Breakpoints

<table class="headerCentered headerNoUpperCase colBordered headFramed">
  <!-- <caption>my caption</caption> -->
  <thead>
    <tr>
      <th>← .BRKP_s&nbsp;(480)</th>
      <th>← .BRKP_m&nbsp;(768)</th>
      <th>← .BRKP_l&nbsp;(1024)</th>
      <th>← .BRKP_xl&nbsp;(1920)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span class="dimmed">( <i> default </i> )</span>
      </td>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.P0001.height.BKRP_m.value": "{YPL.FFL.TKUI_C.sizes.macro.800.value}"'><code class="language-plaintext highlighter-rouge">.height</code></span>
        <span data-toolclip='"YPL.FFL.TKUI_D.P0001.BLK_copy.heading.style.value": "{YPL.FFL.F0002-002}"'><code class="language-plaintext highlighter-rouge">.BLK_copy.heading.style</code></span>
      </td>
      <td>
        <!-- <span class="dimmed">N/A</span> -->
      </td>
      <td>
        <!-- <span class="dimmed">N/A</span> -->
      </td>
    </tr>
  </tbody>
</table>


<!--   TOKENS PLAYGROUND GRAVEYARD · HJSON representation -->
<!--

## Tokens Playground

Playground · Pattern-siloed Tokens including all required Choices and Decisions:

<table>
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
</table>

<details class="copyArea">
<summary>Raw</summary>
{% highlight javascript %}
{
//////  DECISIONS - FFL.P0001

  // macro layout

    "YPL.FFL.TKUI_D.P0001.width": "{YPL.FFL.TKUI_C.percents.full.value}",
    "YPL.FFL.TKUI_D.P0001.height": "{YPL.FFL.TKUI_C.sizes.macro.700.value}",
    "YPL.FFL.TKUI_D.P0001.margin": "{YPL.FFL.TKUI_C.spaces.l.value}",
    "YPL.FFL.TKUI_D.P0001.fringeBottom": "{YPL.FFL.TKUI_C.spaces.l.value}",
    "YPL.FFL.TKUI_D.P0001.padding": "{YPL.FFL.TKUI_C.spaces.l.value}",
    "YPL.FFL.TKUI_D.P0001.radius": "{YPL.FFL.TKUI_C.sizes.micro.200.value}",

    // blocks

    "YPL.FFL.TKUI_D.P0001.BLK_copy.width": "{YPL.FFL.TKUI_C.percents.full.value}",
    "YPL.FFL.TKUI_D.P0001.BLK_copy.slack": "{YPL.FFL.TKUI_C.sizes.macro.500.value}",
    "YPL.FFL.TKUI_D.P0001.BLK_header.height": "{YPL.FFL.TKUI_C.spaces.l.value}",
    "YPL.FFL.TKUI_D.P0001.BLK_footer.height": "{YPL.FFL.TKUI_C.spaces.l.value}",

    // dependencies

      // .BLK_header
      "YPL.FFL.P0001.BLK_header.chip": "{YPL.FFL.E0001}", // instantiation TBD
      // .BLK_copy
      "YPL.FFL.P0001.BLK_copy.chip": "{YPL.FFL.E0001}", // instantiation TBD
      "YPL.FFL.P0001.BLK_copy.heading": "{YPL.FFL.F0002-003-h5}", // instantiation TBD
      // .BLK_footer
      "YPL.FFL.P0001.BLK_footer.eyebrow": "{YPL.FFL.F0002-401-eyebrow}", // instantiation TBD
      "YPL.FFL.P0001.BLK_footer.switchButton": "{YPL.FFL.E0003-003-switchIcon}", // TBD
      // .OPT_layout2
      "YPL.FFL.P0001.BLK_copy.paragraph": "{YPL.FFL.F0002-103-p_s_regular}", // instantiation
      "YPL.FFL.TKUI_D.P0001.BLK_copy.paragraph.color": "{YPL.FFL.TKUI_C.colors.white.value}",            

  // colors & stuff

    "YPL.FFL.TKUI_D.P0001.gradient": "{YPL.FFL.TKUI_C.gradients.overlay.black.BL_TR.value}",
    "YPL.FFL.TKUI_D.P0001.bgImage.fillMode": "FILL", // https://www.figma.com/plugin-docs/api/Paint/#scalemode — Should be raw token in the end
    // typo
    "YPL.FFL.TKUI_D.P0001.heading.color": "{YPL.FFL.TKUI_C.colors.white.value}",
    "YPL.FFL.TKUI_D.P0001.eyebrow.color": "{YPL.FFL.TKUI_C.colors.grey.300.value}",
    "YPL.FFL.TKUI_D.P0001.eyebrow.color": "{YPL.FFL.TKUI_C.colors.grey.300.value}",

  // micro layout

    "YPL.FFL.TKUI_D.P0001.heading.margin": "-{YPL.FFL.TKUI_C.spaces.xs.value}", //  it's a negative values
    "YPL.FFL.TKUI_D.P0001.heading.fringeBottom": "-{YPL.FFL.TKUI_C.spaces.xs.value}", //  it's a negative values
    "YPL.FFL.TKUI_D.P0001.BLK_copy.chip.margin": "{YPL.FFL.TKUI_C.spaces.s.value}",
    "YPL.FFL.TKUI_D.P0001.BLK_copy.chip.fringeBottom": "{YPL.FFL.TKUI_C.spaces.s.value}",
    "YPL.FFL.TKUI_D.P0001.heading.paddingLeft": "{YPL.FFL.TKUI_C.spaces.xxl.value}",
    "YPL.FFL.TKUI_D.P0001.BLK_footer.eyebrow.paddingLeft": "{YPL.FFL.TKUI_C.spaces.sm.value}",

  // variations

    // options

      // OPT_layout2

        "YPL.FFL.TKUI_D.P0001.gradient.OPT_layout2": "{YPL.FFL.TKUI_C.gradients.overlay.black.TL_BR.value}",
        "YPL.FFL.TKUI_D.P0001.heading.margin.OPT_layout2": "{YPL.FFL.TKUI_C.sizes.micro.400.value}",
        "YPL.FFL.TKUI_D.P0001.BLK_footer.eyebrow.paddingLeft.OPT_layout2": "{YPL.FFL.TKUI_C.spaces.none.value}", // TBD

      // OPT_small

      "YPL.FFL.TKUI_D.P0001.height.OPT_small": "{YPL.FFL.TKUI_C.sizes.macro.700.value}", // 432
      "YPL.FFL.TKUI_D.P0001.heading.size.OPT_small": "{YPL.FFL.TKUI_C.typo.europa.h7.size.value}",
      "YPL.FFL.TKUI_D.P0001.heading.tracking.OPT_small": "{YPL.FFL.TKUI_C.typo.europa.h7.tracking.value}",
      "YPL.FFL.TKUI_D.P0001.heading.leading.OPT_small": "{YPL.FFL.TKUI_C.typo.europa.h7.leading.value}",
      "YPL.FFL.TKUI_D.P0001.heading.paragraphSpacing.OPT_small": "{YPL.FFL.TKUI_C.typo.europa.h7.paragraphSpacing.value}",

    // breakpoints

    "YPL.FFL.TKUI_D.P0001.BLK_copy.width.BRKP_m": "{YPL.FFL.TKUI_C.percents.ml.value}",
    "YPL.FFL.TKUI_D.P0001.heading.size.BRKP_m": "{YPL.FFL.TKUI_C.typo.europa.h3.size.value}",
    "YPL.FFL.TKUI_D.P0001.heading.tracking.BRKP_m": "{YPL.FFL.TKUI_C.typo.europa.h3.tracking.value}",
    "YPL.FFL.TKUI_D.P0001.heading.leading.BRKP_m": "{YPL.FFL.TKUI_C.typo.europa.h3.leading.value}",
    "YPL.FFL.TKUI_D.P0001.heading.paragraphSpacing.BRKP_m": "{YPL.FFL.TKUI_C.typo.europa.h3.paragraphSpacing.value}"
}
{% endhighlight %}
</details>
-->


<!-- ## Copy Writing Guidelines -->

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
