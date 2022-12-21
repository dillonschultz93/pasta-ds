---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Elements # title case
permalink: farfalle/elements # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
parent: Farfalle # title case
has_children: true
layout: default
nav_order: 70
---

# Elements

In an atomic design system, an element is the most basic interaction or display unit. It represents a fundamental building block that can be combined with other elements to create more complex and sophisticated designs components: Patterns.<br>
They usually fulfill a single type of interaction. They surface methods, states, animations: buttons, slider, radio buttons, form fields.

![You're in Elements]({{site.baseurl}}/assets/images/YPL-DOC-Atomic-POV-Elements.png){: .naked}

Within Pasta they are stricly made of Choices and-or Primitives. Like all Components they are not allowed to embed Components of the same or higher rank inside Pasta Taxonomy.


## Examples


<table class="tableOfPreviews">
  <tbody>
  <tr>

   {% assign i = 0 %}  

   {% for image in site.static_files %}
      {% if image.path contains 'FFL/images' %}
         {% if image.path contains 'FFL-E' %}
            {% if image.path contains 'preview_01' %}
               {% if image.path contains '-dark' %}
               {% else %}
                  {% assign i = i | plus:1 %}
                  {% if i == 4 %}
                     </tr>
                     <tr>
                  {% assign i = 1 %}
                  {% endif %}      
                  {%- assign fileStems = image.path | split: '-' -%}                 
                  <td>
                     <h6>{{ fileStems[3] }}</h6>                   
                     <img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
                  </td>    
               {% endif %}    
            {% endif %}    
         {% endif %}    
      {% endif %}
   {% endfor %}

   </tr>
  </tbody>
</table>

