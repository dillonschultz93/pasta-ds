---
layout: default
title: Jekyll
parent: Tools
nav_order: 60
---

# Jekyll
{: .no_toc}
<!-- ↑ skips H1 inside TOC -->

- TOC
{:toc}

## Markdown + HTML

### This website

The beauty of [Jekyll](https://jekyllrb.com/) is that it translates into a static website whatever files you throw at it:

- Markdown
- HTML
- Markdown with HTML bits (← amazing!)

… as soon as you include a YAML Front Matter block at the top of your text file such as the one used for this page:

```yaml
---
layout: default
title: Jekyll
parent: Tools
nav_order: 60
---
```

[Github pages are using Jekyll too](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll). This means free hosting, right from your Repository.

### Markdown AND html

[Language-markdown](https://atom.io/packages/language-markdown) is an Atom syntax Highlighter that works for both HTML & Markdown code within the same document:

[Atom Highlighter](https://atom.io/packages/language-markdown){: .btn }

## Locally Install Jekyll

You'll find an [installation tutorial here](https://jekyllrb.com/docs/installation/macos/).

First time, run the bundle command (from [Bundler](https://bundler.io/)) inside your  cloned Repo:

```shell
bundle
```
This should install all libraries and ingredients required to run your instance of this very website.

Then everytime you need to run Jekyll make sure you are localized inisde our `docs` folder:

```shell
cd ~/pasta/docs
```

… then launch Jekyll via Bundler:

```shell
bundle exec jekyll serve --livereload
```

The `--liverload` option automatically refresh the browser when a file update is detected. You usually get a ~5 seconds lag.

## Markup Snippets

### Relative URL

Use the `{% raw %}{{site.baseurl}}{% endraw %}` moustache to access your assets, ie:

```markdown
![]({% raw %}{{site.baseurl}}{% endraw %}/assets/images/myImageFileName.png)
```

### HTML Table

```html
<table>
  <!-- <caption>my caption</caption> -->
  <thead>
    <tr>
      <th>Column</th>
      <th>Column</th>
      <th>Column</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
```

### Layout Table

Use this Class to build layout made of several columns:

```html
<table class="layoutOnly">
<!-- <caption>my caption</caption> -->
<thead>
  <tr>
    <th>Column</th>
    <th>Column</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
</tbody>
</table>
```


### Color Table (JS required)

To allow Colors tables to be generated to need to call a little script with your page by adding this line after the Front Matter block:

```html
<script type="text/javascript" src="{{site.baseurl}}/assets/vanilla/pasta.js" defer></script>
```
Then the Color table is generated using the `colorTable` class and adding the proper `data-colorValue` for each `<tr>`:

```html
<table class="colorTable">
  <!-- <caption>my caption</caption> -->
  <thead>
    <tr>
      <th>Column</th>
      <th>Column</th>
      <th>Column</th>
    </tr>
  </thead>
  <tbody>
    <tr data-colorValue="hsla(177, 44%, 51%, 1.00)">
      <td>TKUI_A.colors.cyan~teal.300</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
```
