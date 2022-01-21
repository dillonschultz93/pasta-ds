---
project_id: FFL # 3-letter code
title: Recipe Cards # title case
permalink: farfalle/patterns/recipe-cards # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Patterns # title case
layout: default
nav_order: 100
---

# Recipe Cards `{{ page.project_id }}`
{: .no_toc}

- TOC
{:toc}

Recipe cards allow the user to engage with a recipe, and view all of its relevant information at a glance. They are composed of items containing the card background surface, elevation, image, title text, and category text, and come in several sizes.

<!-- ## Item-row
## Item-col -->

## Large

![Large Recipe Card Elements]({{site.baseurl}}/assets/projects/{{ page.project_id }}/images/YPL-DOC-FFL-LargeCardPreview@2x.jpg)

<table>
    <tr>
        <td colspan=2><strong>Figma Example Link:</strong></td>
    </tr>
    <tr>
      <td><a href="https://www.figma.com/file/le9hbXPWmA55qUA7a7otgH/Library?node-id=12%3A1694" class="btn">Figma → WIP</a></td>
      <td></td>
    </tr>
    <tr>
        <td colspan="2"><strong>Playground · Copy the Pattern-siloed Tokens including all required Choices and Decisions to clipboard:</strong></td>
    </tr>
    <tr>
        <td><a href="" class="btn">SCSS Tokens</a></td>
        <td>
        <!-- WIP: make these details summary look like simple links -->
          <details><summary>preview</summary>
            {% highlight javascript %}
              WIP
            {% endhighlight %}
          </details>
        </td>
    </tr>
    <tr>
        <td><a href="" class="btn">iOS Tokens</a></td>
        <td>
          <details><summary>preview</summary>
            {% highlight javascript %}
              WIP
            {% endhighlight %}
          </details>
        </td>
    </tr>
    <tr>
        <td><a href="" class="btn">Android Tokens</a></td>
        <td>
          <details><summary>preview</summary>
            {% highlight javascript %}
              WIP
            {% endhighlight %}
          </details>
        </td>
    </tr>
</table>

### Anatomy

#### Dependencies

![Large Recipe Card Elements]({{site.baseurl}}/assets/projects/{{ page.project_id }}/images/YPL-DOC-FFL-LargeCardBlueprint-Elements.png)

<section class="flex-1_2-cols">
   <div>
    <br>
     In order to implement this Pattern you will need to implement all its dependencies first.<br>
     Please refer to each element in this list →
   </div>
   <div>
     <table>
       <thead>
         <tr>
           <th>Type</th>
           <th>Last Update</th>
           <th>Link</th>
         </tr>
       </thead>
        <tbody>
         <tr>
            <td>Component</td><td>2021-12-13</td>
            <td><a href="{{site.baseurl}}/farfalle/components/buttons#button-icons" alt="WIP" class="btn">Button Icon →</a></td>
         </tr>
         <tr>
            <td>Component</td><td>2022-01-02</td>
            <td><a href="{{site.baseurl}}/farfalle/components/chips" alt="WIP" class="btn">Chip →</a></td>
         </tr>
         <tr>
            <td>Component</td><td>2021-12-13</td>
            <td><a href="{{site.baseurl}}/farfalle/components/ratings" alt="WIP" class="btn">Rating →</a></td>
         </tr>
         <tr>
            <td>Primitive</td><td>2021-12-13</td>
            <td><a href="{{site.baseurl}}/farfalle/primitives/typography#eyebrows" alt="WIP" class="btn">Eyebrow →</a></td>
         </tr>
        </tbody>
     </table>
   </div>
 </section>

#### Decisions

![Large Recipe Card Decisions]({{site.baseurl}}/assets/projects/{{ page.project_id }}/images/YPL-DOC-FFL-LargeCardBlueprint-Decisions.png)

##### Variants & Breakpoints
{: .no_toc}

|Are impacted ↓|sm (320)| md (384)| lg(512)|
|---|---|---|---|
|`.BlocCopy.width`|YES|YES|YES|
|`.Title.typo`|YES|YES|YES|
{: .type-01}

NB: These Breakpoints inform both viewport sizes and Parent container sizes.

##### interactions
{: .no_toc}

N/A

##### Tokens
{: .no_toc}

{% highlight javascript %}
{
   "YPL.FFL.TKUI_M.scales.geoA.400": "8",
   "YPL.FFL.TKUI_M.scales.geoA.500": "16",
   "YPL.FFL.TKUI_M.scales.geoA.600": "32",
   "YPL.FFL.TKUI_M.scales.geoA.900": "256",
   "YPL.FFL.TKUI_M.scales.geoA.1000": "512",
   "YPL.FFL.TKUI_M.scales.arithA.100": "10",
   "YPL.FFL.TKUI_M.scales.arithA.200": "12",
   "YPL.FFL.TKUI_M.scales.arithA.300": "14",
   "YPL.FFL.TKUI_M.scales.arithA.400": "16",
   "YPL.FFL.TKUI_M.scales.arithA.500": "18",
   "YPL.FFL.TKUI_M.scales.arithA.600": "20",
   "YPL.FFL.TKUI_M.scales.arithA.800": "24",
   "YPL.FFL.TKUI_M.scales.arithA.1000": "28",
   "YPL.FFL.TKUI_M.scales.arithA.1200": "32",
   "YPL.FFL.TKUI_M.scales.arithB.700": "32",
   "YPL.FFL.TKUI_M.scales.arithB.800": "40",
   "YPL.FFL.TKUI_M.scales.arithB.900": "48",
   "YPL.FFL.TKUI_M.scales.arithB.1500": "96",
   "YPL.FFL.TKUI_M.scales.arithC.800": "48",
   "YPL.FFL.TKUI_M.scales.arithC.900": "60",
   "YPL.FFL.TKUI_M.scales.arithC.1200": "96",
   "YPL.FFL.TKUI_M.scales.arithC.1600": "144",
   "YPL.FFL.TKUI_M.scales.arithC.2000": "192"
}
{% endhighlight %}

### Checklist

Please comply to and update the checklist below when adding a new component to Pasta:

<table>
    <tbody>
      <tr>
          <td>
            <input type="checkbox" class="checklistItem" checked><strong>All interactive states</strong><br>Includes all interactive states that are applicable (hover, down, focus, keyboard focus, disabled).
          </td>
          <td>
            <input type="checkbox" class="checklistItem">  <strong>Usage guidelines</strong><br>Includes a list of dos and don'ts that highlight best practices and common mistakes.
          </td>
      </tr>
      <tr>
          <td>
            <input type="checkbox" class="checklistItem"><strong>All color Schemes</strong><br>Works properly across all color Schemes (including light and dark Modes).
          </td>
          <td>
            <input type="checkbox" class="checklistItem" checked><strong>Breakpoints and platform scales</strong><br>Includes a desktop scale (web desktop) and a mobile scale (iOS, Android).
          </td>
      </tr>
      <tr>
          <td>
            <input type="checkbox" class="checklistItem" checked><strong>Accessible use of color</strong><br>Color is not used as the only visual means of conveying information (WCAG 2.0 1.4.1).
          </td>
          <td>
            <input type="checkbox" class="checklistItem"><strong>Internationalization guidelines</strong><br>Works properly across various locales and includes guidelines for bi-directionality (RTL).
          </td>
      </tr>
      <tr>
          <td>
            <input type="checkbox" class="checklistItem" checked><strong>Accessible contrast for text</strong><br>Text has a contrast ratio of at least 4.5:1 for small text and at least 3:1 for large text (WCAG 2.0 1.4.3).
          </td>
          <td>
            <input type="checkbox" class="checklistItem"><strong>Keyboard interactions</strong><br>Follows WCAG 2.0 standards for keyboard accessibility guidelines and includes a description of the keyboard interactions.
          </td>
      </tr>
      <tr>
          <td>
            <input type="checkbox" class="checklistItem" checked><strong>Accessible contrast for UI components</strong><br>Visual information required to identify components and states (except inactive components) has a contrast ratio of at least [3:1 (WCAG 2.1 1.4.11)](https://spectrum.adobe.com/page/action-button/#Design-checklist).
          </td>
          <td>
            <input type="checkbox" class="checklistItem" checked><strong>Design tokens</strong><br>All design attributes (color, typography, layout, animation, etc.) are available as design tokens.
          </td>
      </tr>
      <tr>
          <td>
            <input type="checkbox" class="checklistItem"><strong>Content design</strong><br>UI language and information design considerations have been documented.
          </td>
          <td>
            <input type="checkbox" class="checklistItem" checked><strong>Figma Link</strong><br>Includes link to a Figma file that shows multiple options, states, color themes, and platform scales.
          </td>
      </tr>
      <tr>
          <td>
            <input type="checkbox" class="checklistItem" checked> <strong>Defined options</strong><br>Includes relevant options (variant, style, size, orientation, optional iconography, decorations, selection, error state, etc.)
          </td>
          <td>
            <input type="checkbox" class="checklistItem" checked><strong>Tokens Sync</strong><br>All the Tokens have been injected inside Figma component.
          </td>
      </tr>
      <tr>
          <td>
            <input type="checkbox" class="checklistItem"><strong>Defined behaviors</strong><br>Includes guidelines for keyboard focus, layout (wrapping, truncation, overflow), animation, interactions, etc.
          </td>
          <td>
            <input type="checkbox" class="checklistItem"><strong>Writing guidelines</strong><br>Includes content standards or usage guidelines for how to write or format in-product content for the component.
          </td>
      </tr>
    </tbody>
</table>
