---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Switch # title case + UID
UID: E0004 # ["P","E","F"] + Hexa code/index
variants: ['001', '002', '003'] # all variants index
permalink: farfalle/elements/switch-E0004 # lowercase & UID + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Elements # title case
layout: default
nav_order: 130
---

<!-- Utility scripts -->
<script defer src="{{ site.baseurl }}/assets/js/utilities/pasta-token-generation.js"></script>
<!-- Inject Pasta Apparatus ad hoc script ↓ -->
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/index.js"></script>
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/page-script.js"></script>

# Switch
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
      <td><a href="https://github.com/yummly/pasta/issues/29">&#35;29</a></td>
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


![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0004-preview_01.png){: .darkenabled}

<a href="https://www.figma.com/file/le9hbXPWmA55qUA7a7otgH/Pasta-0.1.0?node-id=2116%3A38531" class="btn iconed figmaBadge">To Figma →<a>

- TOC
{:toc}

<!-- ## Layout -->

## Dependencies

![Dependencies Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0004-bp_dependencies_01.png)

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
          YPL.FFL.E0004
          └─ .icon
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
            <td><span data-toolclip='"YPL.FFL.{{ page.UID }}.icon.asset.value": "{YPL.FFL.F0003-XXX}"'><code>FFL.F0003</code></span></td>
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/primitives/icons-F0003" alt="Link to Icon page" class="btn">Icon →</a></td>
         </tr>
        </tbody>
     </table>
   </div>
 </section>

## Decisions

![Decisions Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0004-bp_decisions_01.png)

![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0004-preview_02.png){: .darkenabled}

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
              <th>.o (mouse over)</th>
              <th>.p (pressed)</th>
              <th>.f (focus)</th>
              <th>.w (waiting)</th>
              <th>.d (disabled)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}-001.bgColor.i.value": "{YPL.FFL.TKUI_C.colors.transparent.value}"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span>
                <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}-001.border.color.i.value": "{YPL.FFL.TKUI_C.colors.grey.300.value}"'><code class="language-plaintext highlighter-rouge">.border.color</code></span>
                <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}-001.icon.visibility.i.value": "{YPL.CONST.boolean.false.value}"'><code class="language-plaintext highlighter-rouge">.icon.visibility</code></span>                                                  
              </td>
              <td><span class="dimmed">N/A</span></td>
              <td><span class="dimmed">N/A</span></td>
              <td><span class="dimmed">N/A</span></td>
              <td><span class="dimmed">N/A</span></td>
              <td><span class="dimmed">N/A</span></td>
            </tr>
          </tbody>
        </table>
        <h4 class="no_toc">Highlighted</h4>
        <table class="type-01 headerNoUpperCase colBordered headFramed">
          <!-- <caption>my caption</caption> -->
          <thead>
            <tr>
              <th>.hi</th>
              <th>.ho</th>
              <th>.hp</th>
              <th>.hf</th>
              <th>.hu <span data-toolclip='Occurs when a parent or grand-parent node loses the focus while the component is still highlighted. Cf. OSX Finder Columns View, when navigating within nested folders.'>(?)</span></th>
              <th>.hw</th>
              <th>.hd</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}-001.bgColor.hi.value": "YPL.FFL.TKUI_C.colors.grey.900.value"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span>
              <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}-001.border.color.hi.value": "{YPL.FFL.TKUI_C.colors.grey.900.value}"'><code class="language-plaintext highlighter-rouge">.border.color</code></span>
              <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}-001.icon.visibility.hi.value": "{YPL.CONST.boolean.true.value}"'><code class="language-plaintext highlighter-rouge">.icon.visibility</code></span>                
            </td>
            <td><span class="dimmed">N/A</span></td>
            <td><span class="dimmed">N/A</span></td>
            <td><span class="dimmed">N/A</span></td>
            <td><span class="dimmed">N/A</span></td>
            <td><span class="dimmed">N/A</span></td>
            <td><span class="dimmed">N/A</span></td>
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
              <th>.o (mouse over)</th>
              <th>.p (pressed)</th>
              <th>.f (focus)</th>
              <th>.w (waiting)</th>
              <th>.d (disabled)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}-001.icon.asset.i.value": "{YPL.FFL.F0003-001}"'><code class="language-plaintext highlighter-rouge">icon.asset</code></span>              
                <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}-001.bgColor.i.value": "YPL.FFL.TKUI_C.colors.teal.400.value"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span>
              </td>
              <td><span class="dimmed">N/A</span></td>
              <td><span class="dimmed">N/A</span></td>
              <td><span class="dimmed">N/A</span></td>
              <td><span class="dimmed">N/A</span></td>
              <td><span class="dimmed">N/A</span></td>
            </tr>
          </tbody>
        </table>
        <h4 class="no_toc">Highlighted</h4>
        <table class="type-01 headerNoUpperCase colBordered headFramed">
          <!-- <caption>my caption</caption> -->
          <thead>
            <tr>
              <th>.hi</th>
              <th>.ho</th>
              <th>.hp</th>
              <th>.hf</th>
              <th>.hu <span data-toolclip='Occurs when a parent or grand-parent node loses the focus while the component is still highlighted. Cf. OSX Finder Columns View, when navigating within nested folders.'>(?)</span></th>
              <th>.hw</th>
              <th>.hd</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>
                <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}-001.icon.asset.hi.value": "{YPL.FFL.F0003-027}"'><code class="language-plaintext highlighter-rouge">.icon.asset</code></span>              
                <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}-001.bgColor.hi.value": "YPL.FFL.TKUI_C.colors.grey.500.value"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span>            
            </td>
            <td><span class="dimmed">N/A</span></td>
            <td><span class="dimmed">N/A</span></td>
            <td><span class="dimmed">N/A</span></td>
            <td><span class="dimmed">N/A</span></td>
            <td><span class="dimmed">N/A</span></td>
            <td><span class="dimmed">N/A</span></td>
          </tr>
          </tbody>
        </table>
   </div>
   <!-- -003 -->
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
              <th>.o (mouse over)</th>
              <th>.p (pressed)</th>
              <th>.f (focus)</th>
              <th>.w (waiting)</th>
              <th>.d (disabled)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span data-toolclip='"YPL.FFL.TKUI_D.E0004-003.icon.asset.i.value": "{YPL.FFL.F0003-401}"'><code class="language-plaintext highlighter-rouge">icon.asset</code></span>              
                <span data-toolclip='"YPL.FFL.TKUI_D.E0004-003.icon.color.i.value": "{YPL.FFL.TKUI_C.colors.white.value}"'><code class="language-plaintext highlighter-rouge">.icon.color</code></span>
                <span data-toolclip='"YPL.FFL.TKUI_D.E0004-003.bgColor.i.value": "{YPL.FFL.TKUI_C.colors.teal.300.value}"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span>
              </td>
              <td><span class="dimmed">N/A</span></td>
              <td><span class="dimmed">N/A</span></td>
              <td><span class="dimmed">N/A</span></td>
              <td><span class="dimmed">N/A</span></td>
              <td><span class="dimmed">N/A</span></td>
            </tr>
          </tbody>
        </table>
        <h4 class="no_toc">Highlighted</h4>
        <table class="type-01 headerNoUpperCase colBordered headFramed">
          <!-- <caption>my caption</caption> -->
          <thead>
            <tr>
              <th>.hi</th>
              <th>.ho</th>
              <th>.hp</th>
              <th>.hf</th>
              <th>.hu <span data-toolclip='Occurs when a parent or grand-parent node loses the focus while the component is still highlighted. Cf. OSX Finder Columns View, when navigating within nested folders.'>(?)</span></th>
              <th>.hw</th>
              <th>.hd</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>
                <span data-toolclip='"YPL.FFL.TKUI_D.E0004-003.icon.asset.hi.value": "{YPL.FFL.F0003-435}"'><code class="language-plaintext highlighter-rouge">icon.asset</code></span>              
                <span data-toolclip='"YPL.FFL.TKUI_D.E0004-003.icon.color.hi.value": "{YPL.FFL.TKUI_C.colors.white.value}"'><code class="language-plaintext highlighter-rouge">.icon.color</code></span>
                <span data-toolclip='"YPL.FFL.TKUI_D.E0004-003.bgColor.hi.value": "{YPL.FFL.TKUI_C.colors.grey.700.value}"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span>
            </td>
            <td><span class="dimmed">N/A</span></td>
            <td><span class="dimmed">N/A</span></td>
            <td><span class="dimmed">N/A</span></td>
            <td><span class="dimmed">N/A</span></td>
            <td><span class="dimmed">N/A</span></td>
            <td><span class="dimmed">N/A</span></td>
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
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Android</strong><br>Component(s) have been implemented inside iOS component library  |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Web</strong><br>Component(s) have been implemented inside Web component library     |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Analytics Log Snippets</strong><br>The analytics log snippets have been implemented |
