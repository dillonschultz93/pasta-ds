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

## Collection


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
                  {% if i == 3 %}
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

