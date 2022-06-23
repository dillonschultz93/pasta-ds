---
title: Figma # title case
permalink: protocols/figma # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
parent: Protocols
layout: default
nav_order: 10
---

# Figma
{:.no_toc}

- TOC
{:toc}

----

In this section we will discuss the different libraries you'll use and the best-practices regarding the development and maintenance of Pasta inside of Figma.

***This is not intended to be a general tutorial on how to use Figma. Please refer to [Figma Help](https://help.figma.com) for basic Figma usage and troubleshooting***.

## The Pasta Library

### Component Library
The [Pasta component library](https://www.figma.com/file/le9hbXPWmA55qUA7a7otgH/Pasta-0.1.0) is a monolithic Figma file that is comprised of design representations of the [core of Pasta](https://yummly.github.io/pasta/foundations/lexicon#pasta-taxonomy). This library is not intended to be the source of truth, but rather another platform that consumes Pasta tokens to build these designed UI representations and communicate design decisions to stakeholders; facilitating designers and engineers to build patterns and features as quickly as possible.

### Documentation Asset Library
To effectively communicate design decisions we rely on a [smaller component library](https://www.figma.com/file/tdo63LwX2hBOb0K9K6zu8W/Pasta-Meta-Assets-0.1.0) to build these documentation assets. This library includes annotations and collaboration components to effectively communicate to stakeholders.

## The Documentation Process
Documenting inside of Figma is a major part of the Pasta Knowledge Base (KB).

### Using branches
Much like the popular version control system, git, Figma also leverages a [branching system](https://help.figma.com/hc/en-us/articles/360063144053-Guide-to-branching). Branches allow Yummly designers to create a space to explore ideas and to work in an agile setting.

#### Branching Strategy
To work as efficiently on Pasta as a designer it's important to understand how branching is utilized and the etiquette around it. Branching helps us keep organized as a design team; knowing which initiatives -- such as any new elements needing to be created -- are currently in the pipeline and what stage they are at.

##### When to consider branching
A branch is most useful when you're starting individual work that's derived from an existing source; in this case it's the [main file](https://www.figma.com/file/le9hbXPWmA55qUA7a7otgH/Pasta-0.1.0?node-id=1476%3A32963). It's important to branch if you're tasked to work on:
- Creating or amending primitives, elements, or patterns
- Blueprinting (which we will get to in a little bit)

Essentially, consider branching if you plan on modifying the Pasta library in anyway.

##### Types of Branches
Branching can be useful to stay organized, but what if we can take branching a step further to reduce miscommunications? Having different types of branches can help reduce this.
- `Create` - This type of branch should be used during the initial creation of an element or pattern. The work included in this branch will include the design of a new component, that component's variants or options, and a scaffold of that component.
- `Blueprint` - This type of branch should be used during the blueprinting phase. The work included should be the various types of blueprints that will eventually be used in the Pasta Knowledge Base.
- `Tokenize` - This type of branch should be used to tokenize an element or pattern. The work included should be to apply tokens that have been imported into the Figma Tokens Plugin.
- `Amend` - This type of branch should be used to address any feedback. The work included should only be changes or amendments to existing elements or patterns; whether it should be amendments to the design, blueprint, or tokens.

##### Branching Nomenclature
Having a branching nomenclature will also allow us to stay organized and agile. Adhering to a simple format can communicate a lot and help a design team remain on the same page.

**Pasta Branching Nomenclature**

When naming the branch in Figma start with the brach type followed by a '/' and then end with the element or pattern's name.

`<Branch Type>/<Component Name>`

Here is an example:

`Tokenize/Cardlet`

Here you can see that this branch will contain work pertaining to the tokenization of the Cardlet pattern.

##### Branching Etiquette
When opening up a new branch it is important to communicate to other designers working on the Pasta Library to let them know that you're working on a specific part of the library. This can be done by simultaneously communicating on the assigned ticket and in the #pasta channel on slack. Make sure when you communicate that you include what you're working on and to ask that others refrain from touching anything that might be a dependency to the task you're working on.

<!-- ### Using the Documentation Template
[This is where we will discuss how to utilize the documentation template to facilitate the creation of a new element and/or pattern]

#### Using the Masthead
[This is where we will discuss the importance of using the masthead at the top of the documentation page]

#### Using the Collaboration Assets
[This is where we will discuss the usage of the collaboration documentation assets (flag, tag, and WIP chips) and using the built-in Figma comment feature to directly notify contributors of comments]

#### Blueprinting
[This is where we will breakdown the process of blueprinting]

##### Scaffolding
##### Dependencies
##### Layout
##### Decisions

#### Exporting Assets for the Documentation Site -->
