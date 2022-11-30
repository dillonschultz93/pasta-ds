---
title: Pasta Operations # title case
permalink: protocols/Pasta-Operations # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
parent: Protocols
layout: default
nav_order: 10
---

# Pasta Operations

There are two repos that the design team contributes to and maintains:

- [`yummly/pasta`](https://github.com/yummly/pasta) (the knowledge base)
  - This repo contains the knowledge base site, which uses Jekyll and is served by GitHub Pages.
- [`yummly/pasta-dictionary`](https://github.com/yummly/pasta-dictionary) (the token generation tool) - This repo contains the source tokens and scripts that transform the source tokens into platform specific tokens.

## Procedures

These are the procedures to follow when you are working and contributing to any of the design repos.

### Pasta Dictionary

#### Create a new component

To create a new element/pattern there are two ways; using the generator script, or creating files manually. The easiest way is to use the former.

##### Steps:

1. In your terminal make sure you are at the root of the project
2. Type `npm run generate-element` to generate the element files OR type `npm run generate-pattern` to generate the pattern files.
3. Follow the prompts in the terminal.
4. You should see the new element or pattern in the proper project directory.

#### Build from source

Once you've created the source tokens and filled out the knowledge base info file you can then build a new set of output tokens.

##### Steps:

1. In your terminal make sure you are at the root of the project
2. Type `npm run build` to build new tokens to the `dist/` directory at the root.
3. Commit those new tokens to your working git branch.
4. Push those commits and open a new pull request in Github.
5. Once the pull request is accepted, merge it into the `main` branch.

#### Publish new version

We utilize GitHub's workflow actions and tagged releases features to version Pasta.

Types of versions:

- Major - 1.X.X
- Minor - X.1.X
- Patch - X.X.1
- Pre-release - X.X.X-pre.1

##### Steps:

1. Create a new branch off `main` named `release/[version type]`. 2. So, for example, if we just updated a few tokens and didn't need to create any new elements, then we would name the branch `release/patch`
2. Push that branch. You might need to run the command `git push --set-upstream origin release/[version type]`. Pushing this branch will invoke a GitHub action that will bump the version number, publish to Yummly's npm registry, and create a tagged release in the repo.
3. Monitor the action by visiting the repo's [actions tab](https://github.com/yummly/pasta-dictionary/actions).
4. Once the action is successful open a pull request on GitHub back into the `main` branch.
5. When the pull request is accepted, merge, and then delete the branch.
6. Finally, switch back to the `main` branch locally and `git pull`. Once that is pulled you'll want to delete the local release branch using the command `git branch -D release/[version type]`.

### Knowledge Base

#### Updating the tokens version
When we can expect new elements or patterns to publish it is best to be aligned with the most current version of tokens published.

##### Steps:
1. Open the `package.json` file at the root of the project
2. Find the package `@yummly/pasta-dictionary` under the `devDependencies` section and bump the version to the most recent version. Save those changes.
3. In your terminal make sure you're at the root of the project and type `npm i`. This will install the latest version of the tokens. A post install script will then invoke and arrange the tokens in the `./docs/_data/` directory.

<!-- ## Procedures

<section class="flex-1_1-cols">
  <div markdown="1">


### Create new Component

<details markdown="1">
<summary>Dependencies</summary>

  - **[Repo›Folder›file1]()** · Description
  - **[Repo›Folder›file2]()** · Description
  - **[Repo›Folder›file…]()** · Description

</details>

#### Steps:
<input type="checkbox" data-status-category="protocol" class="checklistItem"><strong>Step1</strong><br>
(Description)
<br><br>
<input type="checkbox" data-status-category="protocol" class="checklistItem"><strong>Step2</strong><br>
(Description)
<br><br>
<input type="checkbox" data-status-category="protocol" class="checklistItem"><strong>Step…</strong><br>
(Description)
<br><br>
  </div>
  <div markdown="1">
### Compile Maintainer code › Pasta

<details markdown="1">
<summary>Dependencies</summary>

  - **[Repo›Folder›file1]()** · Description
  - **[Repo›Folder›file2]()** · Description
  - **[Repo›Folder›file…]()** · Description

</details>

#### Steps:
<input type="checkbox" data-status-category="protocol" class="checklistItem"><strong>Step1</strong><br>
(Description)
<br><br>
<input type="checkbox" data-status-category="protocol" class="checklistItem"><strong>Step2</strong><br>
(Description)
<br><br>
<input type="checkbox" data-status-category="protocol" class="checklistItem"><strong>Step…</strong><br>
(Description)
<br><br>
  </div>
</section> -->

### The Pasta Pipeline Map · Summary

Qui culpa eligendi sit sed esse nulla cum sunt odio voluptatem. Quia voluptas in nobis tempora nostrum ut.Qui culpa eligendi sit sed esse nulla cum sunt odio voluptatem. Quia voluptas in nobis tempora nostrum ut.Qui culpa eligendi sit sed esse nulla cum sunt odio voluptatem. Quia voluptas in nobis tempora nostrum ut.

![Preview]({{site.baseurl}}/assets/images/YPL-DOC-imgPlaceholder-Full.png){: .darkenabled}

<section class="flex-1_1-cols">
  <div markdown="1">
  </div>
</section>
