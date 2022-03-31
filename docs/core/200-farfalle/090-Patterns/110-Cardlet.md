---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Cardlet # title case
UID: P0002 # ["P","E","F"] + Hexa code/index
variants: [] # all variants index
permalink: farfalle/patterns/cardlet # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Patterns # title case
layout: default
nav_order: 110
---

# Cardlet
{: .no_toc}

Cardlets are a way to present several items of a same category. They're part of collections, lists, caroussels. They sometimes present advanced interaction (swipe, move, re-order… ).

| UID | Ticket | Owner |Figma|Pasta Version|
|---|---|---|---|---|
|`{{ page.project_id }}.{{ page.UID }}`{% for item in page.variants %}&nbsp;`{{item | default: ""}}`{% endfor %}|[&#35;8](https://github.com/yummly/pasta/issues/8)|[Robert](https://github.com/robert-ANML)|[Cardlet Page](https://www.figma.com/file/KAOO6VWYzBV9Xz7kWJtFOG/?node-id=1475%3A36781)|[TBD](https://github.com/yummly/pasta/releases)|
{: .headTopBorder}


![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0002-preview_01.png){: .darkenabled}

<a href="https://www.figma.com/file/KAOO6VWYzBV9Xz7kWJtFOG/?node-id=1475%3A36781" class="btn iconed figmaBadge">To Figma →</a>

- TOC
{:toc}


## Layout

 ![Layout Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0002-layout_01.png)


## Dependencies

![Dependencies Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0002-bp_dependencies_01.png)

<section class="flex-1_2-cols">
   <div>
    <br>
     In order to implement this Pattern you will need to implement all its dependencies first.<br>
     Please refer to each element in this list&nbsp;→
   </div>
   <div>
     <table>
       <thead>
         <tr>
           <th>UID</th>
           <th>Type</th>
           <th>Link</th>
         </tr>
       </thead>
        <tbody>
         <tr>
            <td><code>LGN-EXXXX</code></td><td>Element</td>
            <td><a href="{{site.baseurl}}/TBD" alt="WIP" class="btn">Button Icon →</a></td>
         </tr>
         <tr>
            <td><code>LGN-EXXXX</code></td><td>Element</td>
            <td><a href="{{site.baseurl}}/TBD" alt="WIP" class="btn">Chip →</a></td>
         </tr>
         <tr>
            <td><code>LGN-EXXXX</code></td><td>Element</td>
            <td><a href="{{site.baseurl}}/TBD" alt="WIP" class="btn">Rating →</a></td>
         </tr>
         <tr>
            <td><code>LGN-V0004</code></td><td>Primitive</td>
            <td><a href="{{site.baseurl}}/TBD" alt="WIP" class="btn">Eyebrow →</a></td>
         </tr>
        </tbody>
     </table>
   </div>
 </section>


## Decisions

![Decisions Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0002-bp_decisions_01.png)

### Interaction

#### default
{: .no_toc}

|↓ impacted| idle | over | pressed | disabled | focused | pending |
|---|---|---|---|---|---|---|
|Attribute &#35;1|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|N/A|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|N/A|
|Attribute &#35;2|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|N/A|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|N/A|
{: .type-01}

#### highlighted
{: .no_toc}

|↓ impacted| h-idle | h-over | h-pressed | h-disabled | h-focused | h-pending |
|---|---|---|---|---|---|---|
|Attribute &#35;1|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|N/A|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|N/A|
|Attribute &#35;2|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|N/A|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|N/A|
{: .type-01}

### Variations

##### Breakpoints
{: .no_toc}

|↓ impacted|sm (320)| md (384)| lg(512)|
|---|---|---|---|
|Attribute &#35;1|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|
|Attribute &#35;2|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|
{: .type-01}

##### Modes
{: .no_toc}

|↓ impacted|Light|Dark|
|---|---|---|
|Attribute &#35;1|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|
|Attribute &#35;2|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|
{: .type-01}

##### Themes
{: .no_toc}

|↓ impacted|Theme &#35;1 |Theme &#35;2|Theme &#35;3|
|---|---|---|
|Attribute &#35;1|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|
|Attribute &#35;2|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|
{: .type-01}

### Animations

<section class="flex-1_2-cols">
   <div>
     Little explanation. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis.
   </div>
   <div>
      <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-imgAnimPlaceholder-twoThird.gif" alt="WIP">
   </div>
 </section>

## Accessibility Checklist

| Criterion | Description | Pending| Done | N/A |
|---|---|:---:|:---:|:---:|
|[1.1.1](https://www.w3.org/TR/WCAG21/#text-alternatives)|Text Alternatives|<input type="radio" id="WCAG_1_1_1P" name="WCAG_1_1_1" value="Pending" checked>|<input type="radio" id="WCAG_1_1_1D" name="WCAG_1_1_1" value="Done">|<input type="radio" id="WCAG_1_1_1N" name="WCAG_1_1_1" value="N/A">|
|[1.4.1](https://www.w3.org/TR/WCAG21/#use-of-color)|Color not the only way to convey information|<input type="radio" id="WCAG_1_4_1P" name="WCAG_1_4_1" value="Pending" checked>|<input type="radio" id="WCAG_1_4_1D" name="WCAG_1_4_1" value="Done">|<input type="radio" id="WCAG_1_4_1N" name="WCAG_1_4_1" value="N/A">|
|[1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum)|Text Color Contrast|<input type="radio" id="WCAG_1_4_3P" name="WCAG_1_4_3" value="Pending" checked>|<input type="radio" id="WCAG_1_4_3D" name="WCAG_1_4_3" value="Done">|<input type="radio" id="WCAG_1_4_3N" name="WCAG_1_4_3" value="N/A">|
|[1.4.6](https://www.w3.org/TR/WCAG21/#contrast-enhanced)|Text Color Contrast AAA|<input type="radio" id="WCAG_1_4_6P" name="WCAG_1_4_6" value="Pending" checked>|<input type="radio" id="WCAG_1_4_6D" name="WCAG_1_4_6" value="Done">|<input type="radio" id="WCAG_1_4_6N" name="WCAG_1_4_6" value="N/A">|
|[1.4.11](https://www.w3.org/TR/WCAG21/#non-text-contrast)|Fill Color Contrast|<input type="radio" id="WCAG_1_4_11P" name="WCAG_1_4_11" value="Pending" checked>|<input type="radio" id="WCAG_1_4_11D" name="WCAG_1_4_11" value="Done">|<input type="radio" id="WCAG_1_4_11N" name="WCAG_1_4_11" value="N/A">|
|[1.4.4](https://www.w3.org/TR/WCAG21/#resize-text)|200% Text Size|<input type="radio" id="WCAG_1_4_4P" name="WCAG_1_4_4" value="Pending" checked>|<input type="radio" id="WCAG_1_4_4D" name="WCAG_1_4_4" value="Done">|<input type="radio" id="WCAG_1_4_4N" name="WCAG_1_4_4" value="N/A">|
|[1.4.12](https://www.w3.org/TR/WCAG21/#text-spacing)|Text Spacing|<input type="radio" id="WCAG_1_4_12P" name="WCAG_1_4_12" value="Pending" checked>|<input type="radio" id="WCAG_1_4_12D" name="WCAG_1_4_12" value="Done">|<input type="radio" id="WCAG_1_4_12N" name="WCAG_1_4_12" value="N/A">|
|[2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception)|Keyboard Operable|<input type="radio" id="WCAG_2_1_3P" name="WCAG_2_1_3" value="Pending" checked>|<input type="radio" id="WCAG_2_1_3D" name="WCAG_2_1_3" value="Done">|<input type="radio" id="WCAG_2_1_3N" name="WCAG_2_1_3" value="N/A">|


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
 </section>

## Tokens Playground

Playground · Pattern-siloed Tokens including all required Choices and Decisions:

<table>
    <tr class="playground-details-row" id="css">
        <td><button class="btn">CSS Tokens</button></td>
    </tr>
    <tr class="playground-details-row" id="ios">
        <td><button class="btn">iOS Tokens</button></td>
    </tr>
    <tr class="playground-details-row" id="android">
        <td><button class="btn">Android Tokens</button></td>
    </tr>
    <tr class="playground-details-row" id="figma-tokens">
        <td><button class="btn">Figma Tokens</button></td>
    </tr>
</table>

<details>
<summary>Raw</summary>
{% highlight javascript %}
  {
  //////  DECISIONS - FFL.P0001

    // macro layout

      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.width": "YPL.FFL.TKUI_C.percents.full.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.height": "YPL.FFL.TKUI_C.sizes.macro.700.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.margin": "YPL.FFL.TKUI_C.spaces.l.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.fringeBottom": "YPL.FFL.TKUI_C.spaces.l.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.padding": "YPL.FFL.TKUI_C.spaces.l.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.radius": "YPL.FFL.TKUI_C.sizes.micro.200.value",
      // blocks
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.width": "YPL.FFL.TKUI_C.percents.full.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.slack": "YPL.FFL.TKUI_C.sizes.macro.500.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockHeader.height": "YPL.FFL.TKUI_C.spaces.l.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockFooter.height": "YPL.FFL.TKUI_C.spaces.l.value",

      // dependencies

        // .blockHeader
        "YPL.FFL.P0001.HMN_posterCard.blockHeader.chip": "YPL.FFL.E0001.HMN_chip", // instantiation
        // .blockCopy
        "YPL.FFL.P0001.HMN_posterCard.blockCopy.chip": "YPL.FFL.E0001.HMN_chip", // instantiation
        "YPL.FFL.P0001.HMN_posterCard.blockCopy.heading": "YPL.FFL.F0002-003.HMN_typo_europa-h5", // instantiation
        // .blockFooter
        "YPL.FFL.P0001.HMN_posterCard.blockFooter.eyebrow": "YPL.FFL.F0002-401.HMN_typo_europa-eyebrow.", // instantiation
        "YPL.FFL.P0001.HMN_posterCard.blockFooter.switchButton": "YPL.FFL.E0003-003.HMN_button-switchIcon", // TBD

    // colors & stuff

      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.gradient": "YPL.FFL.TKUI_C.gradients.overlay.black.BL_TR",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.bgImage.fillMode": "FILL", // https://www.figma.com/plugin-docs/api/Paint/#scalemode
      // typo
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.color": "YPL.FFL.TKUI_C.colors.white.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.eyebrow.color": "YPL.FFL.TKUI_C.colors.grey.300.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.eyebrow.color": "YPL.FFL.TKUI_C.colors.grey.300.value",

    // micro layout

      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.margin": "negativeOf(YPL.FFL.TKUI_C.spaces.xs)", //  it's a negative values
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.fringeBottom": "negativeOf(YPL.FFL.TKUI_C.spaces.xs)", //  it's a negative values
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.chip.margin": "YPL.FFL.TKUI_C.spaces.s",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.chip.fringeBottom": "YPL.FFL.TKUI_C.spaces.s",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.paddingLeft": "YPL.FFL.TKUI_C.spaces.xxl",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockFooter.eyebrow.paddingLeft": "YPL.FFL.TKUI_C.spaces.sm",

    // variations

      // options

        // OPT_layout2

          // dependencies
          "YPL.FFL.P0001.HMN_posterCard.blockCopy.paragraph": "YPL.FFL.F0002-103.HMN_typo_europa-p_s_regular", // instantiation
          // decisions
          "YPL.FFL.TKUI_D.P0001.HMN_posterCard.gradient.OPT_layout2": "YPL.FFL.TKUI_C.gradients.overlay.black.TL_BR",
          "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.paragraph.color": "YPL.FFL.TKUI_C.colors.white.value",
          "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.margin": "YPL.FFL.TKUI_C.sizes.micro.400.value",
          "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockFooter.eyebrow.paddingLeft": "YPL.FFL.TKUI_C.spaces.none", // TBD

        // OPT_small
        "YPL.FFL.TKUI_D.P0001.HMN_posterCard.height.OPT_small": "YPL.FFL.TKUI_C.sizes.macro.700.value", // 432
        "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.size.OPT_small": "YPL.FFL.TKUI_C.typo.europa.h7.size.value",
        "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.tracking.OPT_small": "YPL.FFL.TKUI_C.typo.europa.h7.tracking.value",
        "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.leading.OPT_small": "YPL.FFL.TKUI_C.typo.europa.h7.leading.value",
        "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.paragraphSpacing.OPT_small": "YPL.FFL.TKUI_C.typo.europa.h7.paragraphSpacing.value",

      // breakpoints
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.width.BRKP_m": "YPL.FFL.TKUI_C.percents.ml.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.size.BRKP_m": "YPL.FFL.TKUI_C.typo.europa.h3.size.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.tracking.BRKP_m": "YPL.FFL.TKUI_C.typo.europa.h3.tracking.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.leading.BRKP_m": "YPL.FFL.TKUI_C.typo.europa.h3.leading.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.paragraphSpacing.BRKP_m": "YPL.FFL.TKUI_C.typo.europa.h3.paragraphSpacing.value"
  }
{% endhighlight %}
</details>


## Checklist

Please comply to and update the checklist below:

|Ops|
|---|
|<input type="checkbox" class="checklistItem" checked><strong>UID</strong>|
|<input type="checkbox" class="checklistItem" checked><strong>Github Ticket</strong>|
|<input type="checkbox" class="checklistItem" checked><strong>Figma Link(s)</strong>|
|<input type="checkbox" class="checklistItem" checked><strong>Design Owner</strong>|

|Design|
|---|
|<input type="checkbox" class="checklistItem" checked><strong>Dark and Light Modes</strong><br>Works properly across both color Modes|
|<input type="checkbox" class="checklistItem"><strong>All interactive states</strong><br>Includes all applicable interactive states: idle, over, pressed, focus, disabled, highlighted idle, highlighted disabled, etc.|
|<input type="checkbox" class="checklistItem"> <strong>Document Variations</strong><br>Includes relevant options: variant, styles, sizes, orientations, optional iconography, decorations|
|<input type="checkbox" class="checklistItem"><strong>All color Schemes</strong><br>Works properly across all color Schemes|

|Design Constraints|
|---|
|<input type="checkbox" class="checklistItem"><strong>Breakpoints and platform scales</strong><br>Includes a desktop scale (web desktop) and a mobile scale (iOS, Android)|
|<input type="checkbox" class="checklistItem"><strong>"Yield point" behaviors</strong><br>Includes guidelines for behaviors at maximum strain, often around text size: wrapping, truncation, overflow, animation|

|Content|
|---|
|<input type="checkbox" class="checklistItem"><strong>Copy Writing guidelines</strong><br>Includes content standards or usage guidelines for how to write or format in-product content for the component|
|<input type="checkbox" class="checklistItem"><strong>Internationalization guidelines</strong><br>Works properly across various locales and includes guidelines for bi-directionality (RTL)|
|<input type="checkbox" class="checklistItem"><strong>Accessiblity Content</strong><br>Accessibility content has been addressed (WCAG 1.1.1)|

|Accessiblity|
|---|
|<input type="checkbox" class="checklistItem"><strong>Accessiblity</strong><br>All required accessiblity criteria have been addressed|

|Tokens|
|---|
|<input type="checkbox" class="checklistItem"><strong>Design tokens</strong><br>All Choices, all Decisions, thus all design attributes (color, typography, layout, animation, etc.) are available as design tokens for all plateforms|
|<input type="checkbox" class="checklistItem"><strong>Tokens Reversibility</strong><br>The Artifact(s) UID has been injected inside all associated tokens (Choices)|

|Implementation|
|---|
|<input type="checkbox" class="checklistItem"><strong>Figma Document Link</strong><br>Inject Pasta URL inside the [Figma Component Details Panel](https://help.figma.com/hc/en-us/articles/360055203533-Use-the-Inspect-panel#View_component_details) |
|<input type="checkbox" class="checklistItem"><strong>Figma</strong><br>All Tokens have been injected inside Figma components and tested|
|<input type="checkbox" class="checklistItem"><strong>Pasta Release Version</strong><br>Pasta `V0.1.0`|
|<input type="checkbox" class="checklistItem"><strong>iOS</strong><br>Artifact(s) have been implemented inside iOS component library|
|<input type="checkbox" class="checklistItem"><strong>Android<strong><br>Artifact(s) have been implemented inside iOS component library|
|<input type="checkbox" class="checklistItem"><strong>Web</strong><br>Artifact(s) have been implemented inside Web component library|
|<input type="checkbox" class="checklistItem"><strong>Analytics Log Snippets</strong><br>The analytics log snippets have been implemented|
