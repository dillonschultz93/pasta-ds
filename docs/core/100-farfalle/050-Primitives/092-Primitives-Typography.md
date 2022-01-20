---
project_id: FFL # 3-letter code
title: Typography # title case
permalink: farfalle/primitives/typography # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Primitives # title case
layout: default
nav_order: 92
---
<script type="module">
  document.getElementsByTagName('body')[0].setAttribute('data-pasta-project-id', '{{ page.project_id }}');
  import { tokens } from '{{site.baseurl}}/assets/projects/{{ page.project_id }}/tokens/tokens.js';
  window.tokens = tokens;
</script>

<!-- ↑↑ attach variable to window
https://stackoverflow.com/a/11149036 -->


# Typography `{{ page.project_id }}`


{% include pasta-inject-chartistjs.html %}

<script type="text/javascript" src="{{site.baseurl}}/assets/js/pasta-typo-refactor.js" defer></script>

<section class="apparatus" markdown="1" data-apparatus="typo-tracking" data-typo-id="AppleNY">

## Font Tracking Apparatus
  <details open>
    <summary>Graphs</summary>
    <div class="flex-1_1-cols">
      <div>
        <div class="ct-chart ct-minor-third typo-tracking-graph-left" id="typo_tracking_typo_name_1"></div>
      </div>
      <div>
        <div class="ct-chart ct-minor-third typo-tracking-graph-left" id="typo_tracking_typo_name_2"></div>
      </div>
    </div>
  </details>
  <div class="typo-tracking_table" id="typo_tracking_table"></div>

</section>
