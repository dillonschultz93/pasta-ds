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
      In the example (1), where we focus on vertical margins to simplify, we can identify 3 stacked components. Each component has its own set of predefined margins (2) independent from the context they are used.<br>
      We can see (3) how the spaces are simply set using simple rules described above. Variations in the stacking of the components offer the expected results thanks to these rules (4).
    </p>
    <p>
      CSS provides a proper implementation of Margins that matches print and publishing design century-old best practises.
    </p>
  </div>
  <div>
    <img src="{{site.baseurl}}/assets/images/YPL-DOC-challenges-layout-001.png" alt="WIP">
  </div>
</section>

<section class="flex-1_2-cols">
  <div>
    <h3>The iOS and Android challenge</h3>
    <p>
      Unlike CSS (A), iOS and Android do provide a proper implementation of margins and uses ad hoc spaces instead (B). This leads to a far more complex and systematic context-dependent need for specification for implementation</p>
    <p>
      Which consequently prevents us to address space variation within a design system by just modifying high level (choices) tokens. We will try to find a way to overcome this.
    </p>
  </div>
  <div>
    <img src="{{site.baseurl}}/assets/images/YPL-DOC-challenges-layout-002.png" alt="WIP">
  </div>
</section>
