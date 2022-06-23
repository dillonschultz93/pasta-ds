---
title: News # title case
permalink: news # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
layout: default
nav_order: 990
---

# News

# To be documented

## Nesting level protocol within components

### We do not allow nested blocks

 <section class="flex-1_1-cols">
   <div>
      {% highlight txt %}YPL.FFL.TKUI_D.P0003-001.BLK_bottom.width {% endhighlight %}
      <hr class="dd-do">
      {% highlight txt %} YPL.FFL.TKUI_D.P0003-001.BLK_copy.BLK_bottom.height {% endhighlight %}
      <hr class="dd-dont">
   </div>
   <div>
   </div>
</section>

### We always access children via the Parent Block

 <section class="flex-1_1-cols">
   <div>
      {% highlight txt %}YPL.FFL.TKUI_D.P0003-001.BLK_bottom.title.fontSize {% endhighlight %}
      <hr class="dd-do">
      {% highlight txt %} YPL.FFL.TKUI_D.P0003-001.title.fontSize {% endhighlight %}
      <hr class="dd-dont">
   </div>
   <div>
   </div>
</section>





