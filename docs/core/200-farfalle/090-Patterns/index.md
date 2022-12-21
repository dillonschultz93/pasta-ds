---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Patterns # title case
permalink: farfalle/patterns # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
parent: Farfalle # title case
has_children: true
layout: default
nav_order: 90
---

# Patterns

In an atomic design system, a Pattern is a group of Elements that function together as a unit to create a specific UI element or component. Elements are the next smaller building blocks in Pasta atomic design system and are typically basic items such as form fields, buttons, and labels. Patterns are created by combining Elements in specific ways to create more complex UI elements, such as a search form or a navigation menu.

![You're in Patterns]({{site.baseurl}}/assets/images/YPL-DOC-Atomic-POV-Patterns.png){: .naked}

Patterns are typically used to create functional UI components, such as forms, lists, and tables. They are often composed of multiple Elements, such as form fields, labels, and buttons, and can be used to create more complex UI elements, such as a login form or a search bar. The goal of using Patterns in an atomic design system is to create reusable, modular components that can be easily incorporated into different templates and pages.


## Examples

<table class="tableOfPreviews">
  <tbody>
  <tr>

   {% assign i = 0 %}  

   {% for image in site.static_files %}
      {% if image.path contains 'FFL/images' %}
         {% if image.path contains 'FFL-P' %}
            {% if image.path contains 'preview_01' %}
               {% if image.path contains '--dark' %}
               {% else %}
                  {% if image.path contains '.gif' %}
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
      {% endif %}
   {% endfor %}

   </tr>
  </tbody>
</table>

