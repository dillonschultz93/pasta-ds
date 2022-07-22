---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Content Slider # title case
UID: P0010 # "P" = Pattern + Hexa code/index
variants: ["001","002"] # all variants index
permalink: farfalle/patterns/content-slider-P0010 # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Patterns # title case
layout: default
nav_order: 400
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
      <td><a href="https://github.com/yummly/pasta/issues/44">&#35;44</a></td>
      <td><a href="https://github.com/robert-ANML">Robert</a></td>
      <td><span data-toolclip='N/A'><code>N/A</code></span></td>
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

# Content Slider
{: .no_toc}

Content Sliders offer horizontal scroll to a row of Components.


   <div class="tabs">
     <input type="radio" name="previews" id="tab_preview_01" checked="checked">
     <label for="tab_preview_01">( Animation )</label>
     <div class="tab">
        <figure class="videoSnippet AR-16x10">
          <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0010-preview_01.gif" alt="Animation" >
        </figure>
     </div>
     <input type="radio" name="previews" id="tab_preview_02">
     <label for="tab_preview_02">-001</label>
     <div class="tab">
          <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0010-preview_02.png" alt="Poster Card Slider" class="darkenabled">
     </div>
     <input type="radio" name="previews" id="tab_preview_03">
     <label for="tab_preview_03">-002</label>
     <div class="tab">
          <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0010-preview_03.png" alt="Poster Card Slider" class="darkenabled">
     </div>  
   </div>


<a href="https://www.figma.com/file/le9hbXPWmA55qUA7a7otgH/Pasta-0.1.0?node-id=3935%3A52818" class="btn iconed figmaBadge">To Figma →</a>

- TOC
{:toc}


<!-- ## Layout -->
<!-- ![Layout Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0001-bp_layout_01.png) -->

## Dependencies

 <div class="tabs">
   <input type="radio" name="dependencies" id="tab_dependencies_01" checked="checked">
   <label for="tab_dependencies_01">-001</label>
   <div class="tab">
    <br>
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
              YPL.FFL.P0010-001
              └─ .posterCard
         {% endhighlight %}
       </div>
     </section>
    </details>
    <hr>
    <h3>Links</h3>
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
                <td>.posterCard</td>
                <td><span data-toolclip='"YPL.FFL.TKUI_D.P0010.posterCard.value": "{YPL.FFL.P0001}"'><code>FFL.P0001</code></span></td>
                <!-- <td>Element</td> -->
                <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/patterns/poster-card-P0001" alt="Link to Primitive page" class="btn">Poster Card →</a></td>
             </tr>       
            </tbody>
         </table>
       </div>
     </section>


   </div>
   <input type="radio" name="dependencies" id="tab_dependencies_02">
   <label for="tab_dependencies_02">-002</label>
   <div class="tab">
    <br>   
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
              YPL.FFL.P0010-002
              └─ .posterCard
         {% endhighlight %}
       </div>
     </section>
    </details>
    <hr>
    <h3>Links</h3>
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
                <td>.posterCard</td>
                <td><span data-toolclip='"YPL.FFL.TKUI_D.P0010.posterCard.value": "{YPL.FFL.P0001.OPT_small}"'><code>FFL.P0001</code></span></td>
                <!-- <td>Element</td> -->
                <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/patterns/poster-card-P0001#options" alt="Link to Primitive page" class="btn">(.OPT_small) →</a></td>
             </tr>         
            </tbody>
         </table>
       </div>
     </section>    
   </div>
 </div>

<!-- ![Dependencies Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0001-bp_dependencies_01.png) -->


## Decisions

![Decision Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0010-bp_decisions_01.png)


<details>
<summary>Raw Tokens Playground</summary>
{% highlight json %}

// -001
"YPL.FFL.TKUI_D.P0010-001.width": "{YPL.FFL.TKUI_C.sizes.macro.650.value}",
"YPL.FFL.TKUI_D.P0010-001.paddingTop.value": "{YPL.FFL.TKUI_C.spaces.l.value}",
"YPL.FFL.TKUI_D.P0010-001.paddingBottom.value": "{YPL.FFL.TKUI_C.spaces.xxxl.value}",
"YPL.FFL.TKUI_D.P0010-001.CHILDREN.marginTop.value": "{YPL.FFL.TKUI_C.spaces.none.value}",
"YPL.FFL.TKUI_D.P0010-001.CHILDREN.marginRight.value": "{YPL.FFL.TKUI_C.spaces.m.value}",
"YPL.FFL.TKUI_D.P0010-001.CHILDREN.marginBottom.value": "{YPL.FFL.TKUI_C.spaces.none.value}",
"YPL.FFL.TKUI_D.P0010-001.CHILDREN.marginLeft.value": "{YPL.FFL.TKUI_C.spaces.none.value}",
"YPL.FFL.TKUI_D.P0010-001.CHILD_FIRST.marginLeft.value": "{YPL.FFL.TKUI_C.spaces.l.value}",
"YPL.FFL.TKUI_D.P0010-001.CHILD_LAST.marginRight.value": "{YPL.FFL.TKUI_C.spaces.l.value}",
{% endhighlight %}

{% highlight json %}

// -002
"YPL.FFL.TKUI_D.P0010-001.width": "{YPL.FFL.TKUI_C.sizes.macro.660.value}",
"YPL.FFL.TKUI_D.P0010-002.paddingTop.value": "{YPL.FFL.TKUI_C.spaces.l.value}",
"YPL.FFL.TKUI_D.P0010-002.paddingBottom.value": "{YPL.FFL.TKUI_C.spaces.xxxl.value}",
"YPL.FFL.TKUI_D.P0010-002.CHILDREN.marginTop.value": "{YPL.FFL.TKUI_C.spaces.none.value}",
"YPL.FFL.TKUI_D.P0010-002.CHILDREN.marginRight.value": "{YPL.FFL.TKUI_C.spaces.m.value}",
"YPL.FFL.TKUI_D.P0010-002.CHILDREN.marginBottom.value": "{YPL.FFL.TKUI_C.spaces.none.value}",
"YPL.FFL.TKUI_D.P0010-002.CHILDREN.marginLeft.value": "{YPL.FFL.TKUI_C.spaces.none.value}",
"YPL.FFL.TKUI_D.P0010-002.CHILD_FIRST.marginLeft.value": "{YPL.FFL.TKUI_C.spaces.l.value}",
"YPL.FFL.TKUI_D.P0010-002.CHILD_LAST.marginRight.value": "{YPL.FFL.TKUI_C.spaces.l.value}",
{% endhighlight %}
</details>


<!-- ### Variations -->

<!-- ##### Interaction -->

<!-- ##### Modes (N/A) -->
<!-- {: no_toc} -->


<!-- ##### Breakpoints -->

<!-- <table class="headerCentered headerNoUpperCase colBordered headFramed">
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
      </td>
      <td>
      </td>
    </tr>
  </tbody>
</table> -->


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
