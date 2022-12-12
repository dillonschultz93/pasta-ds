---
project_name: Farfalle # title case
project_id: FFL # 3-letter code 
title: Choices # title case
permalink: farfalle/choices # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
parent: Farfalle # title case
has_children: true
layout: default
nav_order: 40
---


# Choices

Choices are the Constants a designer uses to build GUI Components. They are Enabling Constraints that guarantee visual consistency across the User Experience. Choices are sometimes called "Options" in other Design System.

Designer **should** use Choices and Choices only to design and build new components. If a new Choice is required, then it should be submitted to — and introduced into the System by — the [Pasta Committee]({{site.baseurl}}/committee).
{: .co_warning }

## Dimensions

### Categories

Dimensions are the primary bricks to build anything. They are represented mainly by the 5 categories below.


|Category|Usage||
| --- | --- | --- |
| Spaces | Used to deal with all "empty" spaces. Their corralated Decisions are: `margin` and `padding`| [Check them →]({{site.baseurl}}/farfalle/choices/dimensions#spaces){: .btn}|
| Sizes | Sizes are used to set Components dimensions: `width`, `height`, `fontSizes`, etc.| [Check them →]({{site.baseurl}}/farfalle/choices/dimensions#sizes){: .btn}|
| Radii | Used exclusively to set Radius of Borders and Containers| [Check them →]({{site.baseurl}}/farfalle/choices/dimensions#radii){: .btn}|
| Border wdiths | Used exclusively to set Border Widths | [Check them →]({{site.baseurl}}/farfalle/choices/dimensions#border-widths){: .btn}|
| Breakpoints | Used exclusively to set Overrides when a Component reaches a certain Viewport Width | [Check them →]({{site.baseurl}}/farfalle/choices/dimensions#breakpoints){: .btn}|
{: .t-20-60-20}


### Example: Spaces

<section class="flex-1_1-cols">
   <div>
      <img src="{{site.baseurl}}/assets/projects/FFL/images/YPL-DOC-FFL-Choices-spaces-tables.png" alt="Spaces Choices" class="extraPad1">
   </div>
   <div>
      <p>These tables present all the allowed Spaces a Designer can use to build new Components within a System.</p>
      <h4>Conventional Spaces</h4>
      <p>
         Conventional Spaces are always even numbers, like in this Scale represented by <code>xs</code> <code>s</code> <code>m</code> … <code>xl</code> Tokens
      </p>
      <h4>Odd Spaces</h4>
      <p>
         Odd Spaces, below, are only allowed to address micro alignments within small Components. In that example only 3pt, 5pt and 7pt Spaces are allowed:
      </p>
      <br>      
      <img src="{{site.baseurl}}/assets/projects/FFL/images/YPL-DOC-FFL-Choices-oddSpaces.png" alt="Spaces Choices" class="extraPad1">

   </div>
</section>

## Fonts

## Color

