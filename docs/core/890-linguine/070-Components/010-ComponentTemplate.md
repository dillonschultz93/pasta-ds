---
project_id: LGN # 3-letter code
title: Component Template # title case
UID: C0000 # "C" = Component + Hexa code/index
permalink: linguine/components/component-template # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Linguine # title case
parent: Components # title case
layout: default
nav_order: 10
---

<div class="mode_switcher"></div>

# 🆃 Component Name&nbsp;`{{ page.project_id }}`
{: .no_toc}

| UID | Ticket | Owner |Pasta Release|
|---|---|---|---|
|`{{ page.project_id }}-{{ page.UID }}`|[Github Issue &#35;2](https://github.com/yummly/pasta/issues/2)|[Robert](https://github.com/robert-ANML)|[TBD](https://github.com/yummly/pasta/releases)|

- TOC
{:toc}


## Preview

Short Description: Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue.

![]({{site.baseurl}}/assets/images/YPL-DOC-imgPlaceholder-Full.png)

[Switch to Dark Mode]()

### Figma Link

<a href="https://www.figma.com/file/MAptaE54Hyzvx1FQCfWebi/YPL-Pattern-Card-Recipe-Large?node-id=0%3A1" class="btn">To Figma →</a>

… and beyond!

## Dependencies

![Dependencies Blueprint]({{site.baseurl}}/assets/images/YPL-DOC-imgPlaceholder-Full.png)

<section class="flex-1_2-cols">
   <div>
    <br>
     In order to implement this Component you will need to implement all its dependencies first.<br>
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
            <td><code>LGN-V0001</code></td><td>Primitive (Icon)</td>
            <td><a href="{{site.baseurl}}/farfalle/components/buttons#button-icons" alt="WIP" class="btn">Button Icon →</a></td>
         </tr>
         <tr>
            <td><code>LGN-V000F</code></td><td>Primitive (typo)</td>
            <td><a href="{{site.baseurl}}/farfalle/components/chips" alt="WIP" class="btn">Button Label →</a></td>
         </tr>
        </tbody>
     </table>
   </div>
 </section>

## Decisions

![Decisions Blueprint]({{site.baseurl}}/assets/images/YPL-DOC-imgPlaceholder-Full.png)

### Interaction

|↓ impacted| idle | over | pressed | disabled | focused | pending |
|---|---|---|---|---|---|---|
| Attribute &#35;1|`token`|N/A|`token`|`token`|`token`|N/A|
| Attribute &#35;2|`token`|N/A|`token`|`token`|`token`|N/A|
| Attribute &#35;3|`token`|N/A|`token`|`token`|`token`|N/A|
| Attribute &#35;4|`token`|N/A|`token`|`token`|`token`|N/A|
{: .type-01}

### Variations

##### Breakpoints
{: .no_toc}

|↓ impacted|sm (320)| md (384)| lg(512)|
|---|---|---|---|
| Attribute &#35;1|N/A|N/A|N/A|
| Attribute &#35;2|N/A|N/A|N/A|
{: .type-01}

##### Modes
{: .no_toc}

|↓ impacted|Light|Dark|
|---|---|---|
| Attribute &#35;1|`token`|`token`|
| Attribute &#35;2|`token`|`token`|
| Attribute &#35;3|`token`|`token`|
| Attribute &#35;4|`token`|`token`|
{: .type-01}

##### Themes
{: .no_toc}

|↓ impacted|Theme &#35;1 |Theme &#35;2|Theme &#35;3|
|---|---|---|
| Attribute &#35;1|`token`|`token`|`token`|
| Attribute &#35;2|`token`|`token`|`token`|
| Attribute &#35;3|`token`|`token`|`token`|
| Attribute &#35;4|`token`|`token`|`token`|
{: .type-01}

### Animations

<section class="flex-1_2-cols">
   <div>
     Little explanation. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis.
   </div>
   <div>
      <img src="{{site.baseurl}}/assets/images/YPL-DOC-imgAnimPlaceholder-twoThird.gif" alt="WIP">
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


## Writing Guidelines

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

 ## Analytics Tracking

 Please inject the snippet below when you implement this component:

 <input type="checkbox" class="checklistItem" checked>Option #1<br>
 <input type="checkbox" class="checklistItem" checked>Option #2<br>
 <input type="checkbox" class="checklistItem">Option #3<br>
 <input type="checkbox" class="checklistItem">Option #4<br>

 ```
 //
 // The generated snippet will show there
 //


 ```

## Tokens Playground

Playground · Component-siloed Tokens including all required Choices and Decisions:

<table>
    <tr class="playground-details-row" id="css">
        <td><button class="btn">CSS Tokens</button></td>
        <td>
          <details class="playground-details"><summary>Preview</summary>
            <figure class="highlight">
              <code class="language-css" data-lang="css">
                <!-- Generated by the pasta-patterns-recipe-cards.js script -->
              </code>
            </figure>
          </details>
        </td>
    </tr>
    <tr class="playground-details-row" id="ios">
        <td><button class="btn">iOS Tokens</button></td>
        <td>
          <details class="playground-details"><summary>Preview</summary>
            <figure class="highlight">
              <code class="language-json" data-lang="json">
                <!-- Generated by the pasta-patterns-recipe-cards.js script -->
              </code>
            </figure>
          </details>
        </td>
    </tr>
    <tr class="playground-details-row" id="android">
        <td><button class="btn">Android Tokens</button></td>
        <td>
          <details class="playground-details"><summary>Preview</summary>
            <figure class="highlight">
              <code class="language-xml" data-lang="xml">
                <!-- Generated by the pasta-patterns-recipe-cards.js script -->
              </code>
            </figure>
          </details>
        </td>
    </tr>
    <tr class="playground-details-row" id="figma-tokens">
        <td><button class="btn">Figma Tokens</button></td>
        <td>
          <details class="playground-details"><summary>Preview</summary>
            <figure class="highlight">
              <code class="language-json" data-lang="json">
                <!-- Generated by the pasta-patterns-recipe-cards.js script -->
              </code>
            </figure>
          </details>
        </td>
    </tr>
</table>

<details>
<summary>Raw</summary>
{% highlight javascript %}
{
  //// CHOICES

    // Dimensions
    "YPL.FFL.TKUI_M.scales.geoA.400": "8",
    "YPL.FFL.TKUI_M.scales.arithA.100": "10",
    "YPL.FFL.TKUI_M.scales.arithA.200": "12",
    "YPL.FFL.TKUI_M.scales.arithA.400": "16",
    "YPL.FFL.TKUI_M.scales.arithA.600": "24",
    "YPL.FFL.TKUI_M.scales.arithA.1000": "28",
    "YPL.FFL.TKUI_M.scales.arithC.900": "60",
    "YPL.FFL.TKUI_M.scales.geoA.900": "256",
    "YPL.FFL.TKUI_M.scales.geoA.1000": "512",

    // Typography
    "YPL.FFL.TKUI_C.typo.face.bold": "Europa-Bold",

    // Colors
    "YPL.FFL.TKUI_C.colors.white": "ffffff",
    "YPL.FFL.TKUI_C.colors.black": "000000",
    "YPL.FFL.TKUI_C.colors.blackish": "242424",
    "YPL.FFL.TKUI_C.colors.gray.300": "bababa",
    "YPL.FFL.TKUI_C.colors.oldOrange": "e05f1f",
    "YPL.FFL.TKUI_C.colors.oldCyan": "3b9690",

    // Dark Theme Colors:
    "YPL.FFL.TKUI_C.colors.springGreen": "00ee66", // option #1 for accent
    "YPL.FFL.TKUI_C.colors.orangeFlame": "ff5221c", // option #2 for accent
    "YPL.FFL.TKUI_C.colors.MD_dark.z100.backgrd": "2e2e2e", // background material
    "YPL.FFL.TKUI_C.colors.MD_dark.z400.backgrd": "151515", // foreground material

  //// COMPONENTS & PRIMITIVES

    // buttonIcon
    "YPL.FFL.TKUI_D.buttonIcon.width": "YPL.FFL.TKUI_M.scales.arithA.600",
    "YPL.FFL.TKUI_D.buttonIcon.height": "YPL.FFL.TKUI_M.scales.arithA.600",
    "YPL.FFL.TKUI_D.buttonIcon.glyphColor": "YPL.FFL.TKUI_C.colors.black",
    "YPL.FFL.TKUI_D.buttonIcon.bgColor": "YPL.FFL.TKUI_C.colors.white",

    // chip
    "YPL.FFL.TKUI_D.chip.width": "YPL.FFL.TKUI_M.scales.arithC.900",
    "YPL.FFL.TKUI_D.chip.height": "YPL.FFL.TKUI_M.scales.arithA.600",
    "YPL.FFL.TKUI_D.chip.bgColor": "YPL.FFL.TKUI_C.colors.black",

    // rating
    "YPL.FFL.TKUI_D.rating.height": "YPL.FFL.TKUI_M.scales.arithA.200",
    "YPL.FFL.TKUI_D.rating.icon.color": "YPL.FFL.TKUI_C.colors.oldOrange",
    "YPL.FFL.TKUI_D.rating.icon.width": "YPL.FFL.TKUI_M.scales.arithA.200",
    "YPL.FFL.TKUI_D.rating.text.size": "YPL.FFL.TKUI_M.scales.arithA.200",
    "YPL.FFL.TKUI_D.rating.text.color": "YPL.FFL.TKUI_C.colors.oldOrange",

    // eyebrow
    "YPL.FFL.TKUI_D.eyebrow.face": "YPL.FFL.TKUI_C.typo.face.bold",
    "YPL.FFL.TKUI_D.eyebrow.size": "YPL.FFL.TKUI_M.scales.arithA.200",
    "YPL.FFL.TKUI_D.eyebrow.color": "YPL.FFL.TKUI_C.colors.gray.300",

  //// DECISIONS

    // Main
    "YPL.FFL.TKUI_D.cardRecipeLarge.width": "100%",
    "YPL.FFL.TKUI_D.cardRecipeLarge.height": "432pt",
    "YPL.FFL.TKUI_D.cardRecipeLarge.radius": "YPL.FFL.TKUI_M.scales.geoA.400",
    "YPL.FFL.TKUI_D.cardRecipeLarge.bgGradient": "gradient(58deg, #000000 100%, #000000 0%)",
    "YPL.FFL.TKUI_D.cardRecipeLarge.bgImage.fillMode": "COVER",
    "YPL.FFL.TKUI_D.cardRecipeLarge.paddingLeft": "YPL.FFL.TKUI_M.scales.arithA.600", // overrides all paddings ← Fringe
    "YPL.FFL.TKUI_D.cardRecipeLarge.paddingRight": "YPL.FFL.TKUI_M.scales.arithA.600", // overrides all paddings ← Fringe
    "YPL.FFL.TKUI_D.cardRecipeLarge.fringeBottom": "YPL.FFL.TKUI_M.scales.arithA.600", // ♺

    // (sub) Containers
    "YPL.FFL.TKUI_D.cardRecipeLarge.block.width": "100%", // TBD
    "YPL.FFL.TKUI_D.cardRecipeLarge.block.maxWidth": "YPL.FFL.TKUI_M.scales.geoA.1000", // TBD
    "YPL.FFL.TKUI_D.cardRecipeLarge.blockCopy.width": "87%", // TBD
    "YPL.FFL.TKUI_D.cardRecipeLarge.rating.fringeBottom": "YPL.FFL.TKUI_M.scales.geoA.400", // override?

    // Typo
    "YPL.FFL.TKUI_D.cardRecipeLarge.title.typo.face": "YPL.FFL.TKUI_C.typo.face.bold",
    "YPL.FFL.TKUI_D.cardRecipeLarge.title.typo.size": "YPL.FFL.TKUI_M.scales.arithA.600",
    "YPL.FFL.TKUI_D.cardRecipeLarge.title.typo.lineHeight": "YPL.FFL.TKUI_M.scales.arithA.1000",
    "YPL.FFL.TKUI_D.cardRecipeLarge.title.typo.fringeBottom": "YPL.FFL.TKUI_M.scales.arithA.400" // ♺
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
|<input type="checkbox" class="checklistItem"><strong>Dark and Light Modes</strong><br>Works properly across both color Modes|
|<input type="checkbox" class="checklistItem" checked><strong>All interactive states</strong><br>Includes all interactive states that are applicable: hover, down, focus, keyboard focus, disabled, etc.|
|<input type="checkbox" class="checklistItem" checked> <strong>Document Variations</strong><br>Includes relevant options: variant, styles, sizes, orientations, optional iconography, decorations|
|<input type="checkbox" class="checklistItem"><strong>All color Schemes</strong><br>Works properly across all color Schemes|

|Design Constraints|
|---|
|<input type="checkbox" class="checklistItem" checked><strong>Breakpoints and platform scales</strong><br>Includes a desktop scale (web desktop) and a mobile scale (iOS, Android)|
|<input type="checkbox" class="checklistItem"><strong>"Yield point" behaviors</strong><br>Includes guidelines for behaviors at maximum strain, often around text size: wrapping, truncation, overflow, animation|

|Content|
|---|
|<input type="checkbox" class="checklistItem"><strong>Writing guidelines</strong><br>Includes content standards or usage guidelines for how to write or format in-product content for the component|
|<input type="checkbox" class="checklistItem"><strong>Internationalization guidelines</strong><br>Works properly across various locales and includes guidelines for bi-directionality (RTL)|
|<input type="checkbox" class="checklistItem" checked><strong>Accessiblity Content</strong><br>Accessibility content has been addressed (WCAG 1.1.1)|

|Accessiblity|
|---|
|<input type="checkbox" class="checklistItem" checked><strong>Accessiblity</strong><br>All required accessiblity criteria have been addressed|

|Tokens|
|---|
|<input type="checkbox" class="checklistItem" checked><strong>Design tokens</strong><br>All Choices, all Decisions, thus all design attributes (color, typography, layout, animation, etc.) are available as design tokens for all plateforms|
|<input type="checkbox" class="checklistItem" checked><strong>Tokens Reversibility</strong><br>The Artifact(s) UID has been injected inside all associated tokens (Choices)|

|Analytics|
|---|
|<input type="checkbox" class="checklistItem" checked><strong>Log Snippet</strong><br>The analytics log snippet has been provided|

|Implementation|
|---|
|<input type="checkbox" class="checklistItem" checked><strong>Figma</strong><br>All Tokens have been injected inside Figma components and tested|
|<input type="checkbox" class="checklistItem" checked><strong>Pasta Release Version</strong><br>Pasta V0.1.0|
|<input type="checkbox" class="checklistItem" checked><strong>iOS</strong><br>Artifact(s) have been implemented inside iOS component library|
|<input type="checkbox" class="checklistItem" checked><strong>Android<strong><br>Artifact(s) have been implemented inside iOS component library|
|<input type="checkbox" class="checklistItem" checked><strong>Web</strong><br>Artifact(s) have been implemented inside Web component library|
