---
title: Challenges # title case
permalink: foundations/challenges # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
parent: Foundations # title case
layout: default
nav_order: 50
---

# Challenges
{: .no_toc}

- TOC
{:toc}
## Specifying Margins for non Web Platforms

<section class="flex-1_2-cols">
  <div>
    <h3>Margins</h3>
    <p>Margins are defining the minmum space required around a component independently from its context.</p>
    <p>They present "smart" behaviour in the way they interact when components are stacked on top of each other or side by side:</p>
    <ul>
      <li>Margins are not context dependent</li>
      <li>Margins always fully overlaps</li>
      <li>(The biggest margin set the space)</li>
    </ul>
    <p>
      In the example (1), where we focus on vertical spaces to simplify, we can identify 3 stacked components: a header, a text paragraph and a button. Each component has its own set of margins (2).<br>
      We can see (3) how these vertical spaces are set using the simple rules described above. Variations in the order of stacking of the components offer the expected variations in the inter-spaces thanks to these rules: compare the space under the Header component  in exemple (3) vs (4).
    </p>
    <p>
      CSS provides a proper implementation of Margins that matches print and publishing design century-old best practices.
    </p>
  </div>
  <div>
    <img src="{{site.baseurl}}/assets/images/YPL-DOC-challenges-layout-001.png" alt="WIP">
  </div>
</section>

<section class="flex-1_2-cols">
  <div>
    <h3>The mobile apps challenge</h3>
    <p>
      Unlike CSS (A), iOS and Android do not provide a proper implementation of margins.
      They need ad hoc spaces instead (B). This implies a far more dense specification scheme, and multiplies the number of tokens required to serve it.
    </p>
    <p>
      In other words, and from a pure "inter-space perspective", components are seen by these platforms as unidentified items separated by hard coded space. Information is lost.
    </p>
  </div>
  <div>
    <img src="{{site.baseurl}}/assets/images/YPL-DOC-challenges-layout-002.png" alt="WIP">
  </div>
</section>

<h3>Proposal</h3>

<section class="flex-1_2-cols">
  <div>
    <p>
      <strong>As a first implemenation for our tokens, we want to try to save part of the lost information in resolving the Margin overlaps into what we call Fringes.</strong>
    </p>
  </div>
  <div>
    <p>
      We cannot use "gap", "inset" or "padding" since all these terms are used somehow by the CSS specification,
      and can be interpreted by the web plateform.
    </p>
    <p>
      Back at the Component level the surrounding space will most likely always be specified using margins, but at the Pattern level we then ask mobile platforms to totally ignore margins. To do so we inject an extra term, the resolved version of the space represented by overlaping margins of 2 consecutive component: Fringes.
    </p>
  </div>
</section>

<img src="{{site.baseurl}}/assets/images/YPL-DOC-challenges-layout-003.png" alt="WIP">

<h4 id="rules">Rules</h4>

<section class="flex-1_1-cols">
  <div>
    <p>
      To help to resolve our margins into fringes we use some rules of thumb:
      <li><code>fringeTop</code> is always null, or set to zero</li>
      <li>Always try to resolve vertical space between two components into the <code>fringeBottom</code> of the component on top</li>
    </p>
  </div>
  <div>
    <img src="{{site.baseurl}}/assets/images/YPL-DOC-challenges-layout-004.png" alt="WIP">
  </div>
</section>


<!-- BEM › Box Element Modifier
YPL-FFL-BOX_ID-paddingTop = 16pt
YPL-FFL-BOX_ID-COMP_paragraph-FringeBottom = 12pt
YPL-FFL-BOX_ID-COMP_header-marginTop = 8pt
YPL-FFL-BOX_ID-COMP_header-FringeBottom = 16pt -->

## Meeting 1.4.4 Criterion
