---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Thumbnail # title case
UID: E0002 # ["P","E","F"] + Hexa code/index
variants: [] # all variants index
permalink: farfalle/elements/thumbnail-E0002 # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Elements # title case
layout: default
nav_order: 110
---

<!-- Utility scripts -->
<script defer src="{{ site.baseurl }}/assets/js/utilities/pasta-token-generation.js"></script>
<!-- Inject Pasta Apparatus ad hoc script ↓ -->
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/index.js"></script>
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/page-script.js"></script>

# Thumbnail
{: .no_toc}

Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

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
      <td><a href="https://github.com/yummly/pasta/issues/22">&#35;22</a></td>
      <td><a href="https://github.com/robert-ANML">Robert</a></td>
      <td><span data-toolclip='.OPT_noLabel, .OPT_square, .OPT_squareNoLabel'><code>3</code></span></td>
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

![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-{{page.UID}}-preview_01.png){: .darkenabled}

<a href="https://www.figma.com/file/le9hbXPWmA55qUA7a7otgH/?node-id=1948%3A36688" class="btn iconed figmaBadge">To Figma →<a>

- TOC
{:toc}

## Layout

![Layout Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-{{page.UID}}-bp_layout_01.png)

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
          └─ .BLK_copy
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
            <td>.label</td>
            <td><span data-toolclip='"YPL.FFL.{{ page.UID }}.BLK_copy.label.style.value": "{YPL.FFL.F0002-401}"'><code>FFL.F0002-401</code></span></td>
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/primitives/typography-F0002#F0002-401" alt="Link to Typography Primitives page" class="btn">Eyebrow →</a></td>
         </tr>
        </tbody>
     </table>
   </div>
 </section>

## Decisions

![Decisions Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-{{page.UID}}-bp_decisions_01.png)

### Variations

#### Options

![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-{{page.UID}}-preview_02.png){: .darkenabled}

<table class="type-01 headerNoUpperCase colBordered headFramed">
  <thead>
    <tr>
      <th>.OPT_noLabel</th>
      <th>.OPT_square</th>
      <th>.OPT_squareNoLabel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.{{page.UID}}.OPT_noLabel.BLK_copy.label.visible.value": "{YPL.CONST.boolean.false.value}"'><code class="language-plaintext highlighter-rouge">.BLK_copy.label.visible</code></span>
      </td>    
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.{{page.UID}}.OPT_square.BLK_image.image.radius.value": "{YPL.FFL.TKUI_C.sizes.micro.400.value}"'><code class="language-plaintext highlighter-rouge">.BLK_image.image.radius</code></span>
      </td>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.{{page.UID}}.OPT_squareNoLabel.BLK_image.image.radius.value": "{YPL.FFL.TKUI_C.sizes.micro.400.value}"'><code class="language-plaintext highlighter-rouge">.BLK_image.image.radius</code></span> 
        <span data-toolclip='"YPL.FFL.TKUI_D.{{page.UID}}.OPT_noLabel.BLK_copy.label.visible.value": "{YPL.CONST.boolean.false.value}"'><code class="language-plaintext highlighter-rouge">.BLK_copy.label.visible</code></span>
      </td>
    </tr>
  </tbody>
</table>


## Checklist

  Please comply to and update the checklist below:

  |Ops|
  |---|
  |<input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>UID</strong>|
  |<input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>Github Ticket</strong>|
  |<input type="checkbox" data-status-category="ops" class="checklistItem"><strong>Figma Link(s)</strong>|
  |<input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>Design Owner</strong>|
  |<input type="checkbox" data-status-category="ops" class="checklistItem"><strong>Figma Document Link</strong><br>Inject Pasta URL inside the [Figma Component Details Panel](https://help.figma.com/hc/en-us/articles/360055203533-Use-the-Inspect-panel#View_component_details) |

  |Design|
  |---|
  |<input type="checkbox" data-status-category="design" class="checklistItem"><strong>Dark and Light Modes</strong><br>Works properly across both color Modes|
  |<input type="checkbox" data-status-category="design" class="checklistItem"><strong>All interactive states</strong><br>Includes all applicable interactive states: idle, over, pressed, focus, disabled, highlighted idle, highlighted disabled, etc.|
  |<input type="checkbox" data-status-category="design" class="checklistItem"> <strong>Document Variations</strong><br>Includes relevant options: variant, styles, sizes, orientations, optional iconography, decorations|
  |<input type="checkbox" data-status-category="design" class="checklistItem"><strong>All color Schemes</strong><br>Works properly across all color Schemes|

  |Design Constraints|
  |---|
  |<input type="checkbox" data-status-category="design" class="checklistItem"><strong>Breakpoints and platform scales</strong><br>Includes a desktop scale (web desktop) and a mobile scale (iOS, Android)|
  |<input type="checkbox" data-status-category="design" class="checklistItem"><strong>"Yield point" behaviors</strong><br>Includes guidelines for behaviors at maximum strain, often around text size: wrapping, truncation, overflow, animation|

  |Content|
  |---|
  |<input type="checkbox" data-status-category="content" class="checklistItem"><strong>Copy Writing guidelines</strong><br>Includes content standards or usage guidelines for how to write or format in-product content for the component|
  |<input type="checkbox" data-status-category="content" class="checklistItem"><strong>Internationalization guidelines</strong><br>Works properly across various locales and includes guidelines for bi-directionality (RTL)|
  |<input type="checkbox" data-status-category="content" class="checklistItem"><strong>Accessiblity Content</strong><br>Accessibility content has been addressed (WCAG 1.1.1)|

  |Accessiblity|
  |---|
  |<input type="checkbox" data-status-category="accessibility-global" class="checklistItem"><strong>Accessiblity</strong><br>All required accessiblity criteria have been addressed|

  |Tokens|
  |---|
  |<input type="checkbox" data-status-category="tokens" class="checklistItem" data-status-category="tokens" ><strong>Design tokens</strong><br>All Choices, all Decisions, thus all design attributes (color, typography, layout, animation, etc.) are available as design tokens for all plateforms|
  |<input type="checkbox" data-status-category="tokens" class="checklistItem"><strong>Tokens Reversibility</strong><br>The Artifact(s) UID has been injected inside all associated tokens (Choices)|

  |Implementation|
  |---|
  |<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Figma</strong><br>All Tokens have been injected inside Figma components and tested|
  |<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Pasta Release Version</strong><br>Pasta `V0.1.0`|
  |<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>iOS</strong><br>Component(s) have been implemented inside iOS component library|
  |<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Android</strong><br>Component(s) have been implemented inside iOS component library|
  |<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Web</strong><br>Component(s) have been implemented inside Web component library|
  |<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Analytics Log Snippets</strong><br>The analytics log snippets have been implemented|
