---
title: Jekyll # title case
permalink: tools/jekyll # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
parent: Tools # title case
layout: default
nav_order: 60
---

# Jekyll
{: .no_toc}
<!-- ↑ skips H1 inside TOC -->

- TOC
{:toc}

## This website

<section class="flex-1_1-cols">
    <div>
      <p>
        The beauty of <a href="https://jekyllrb.com/">Jekyll</a> is that it translates into a static website page or post whatever markup files you throw at it:</p>
      <ul>
        <li>Markdown</li>
        <li>HTML</li>
        <li>Markdown including HTML bits</li>
      </ul>
    <p>
      You just need to include a YAML <a href="https://jekyllrb.com/docs/front-matter/">Front Matter block</a> at the top of your file →.<br><br>
      <a href="https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll">Github pages use Jekyll</a>.This means free hosting, and easy versioning right from your Repository.
    </p>
    </div>
    <div>
      <p><strong>Current page Front Matter:</strong></p>
      {% highlight yaml %}
      ---
      title: Jekyll
      permalink: tools/jekyll
      parent: Tools
      layout: default
      nav_order: 60
      ---
      {% endhighlight %}
    </div>
</section>

### Template: Just The Docs
{: .no_toc}

We are using [Just The Docs](https://pmarsceill.github.io/just-the-docs/). The template has its own set of features, styling and rules and you'd better get familiar with it if you have to contribute to the Pasta Knowledge Base.

[RTFM](https://en.wikipedia.org/wiki/RTFM)
{: .label}
We highly recommend you read these 2 sections:

|||
| --- | --- |
|Learn how to build your navigation structure|[Navigation Structure →](https://pmarsceill.github.io/just-the-docs/docs/navigation-structure/){: .btn}|
|Learn usefull components to build your content|[UI Components →](https://pmarsceill.github.io/just-the-docs/docs/ui-components){: .btn}|
{: .headless}

### Tools
{: .no_toc}

||||
| --- | --- | --- |
|Markdown Guide|New to MarkDown? Go there and learn how easy it is… |[Online Guide →](https://www.markdownguide.org/){: .btn}|
|MacDown|New to MarkDown? A simple Mac OSX Markdown Editor ideal to start learning|[Grab it! →](https://macdown.uranusjr.com/){: .btn}|
|Language Markdown| A recommended Atom package for [Atom](https://atom.io/) that probably highlight both MarkDown and HTML | [Grab Package →](https://atom.io/packages/language-markdown){: .btn } |
|Critic Markup| Annotation convention that allows to collaborate inside markup docs| [Learn →](https://github.com/CriticMarkup/CriticMarkup-toolkit){: .btn }|
{: .headless}


<section class="flex-1_1_1-cols">
  <div markdown="1">
<!-- don't use tabs to interpret as markdown  -->
#### Highlighter
{: .no_toc}
We recommend [Language-markdown](https://atom.io/packages/language-markdown), an Atom syntax Highlighter that properly highlights both HTML & Markdown code within a same `.md` document:

[Grab it!](https://atom.io/packages/language-markdown){: .btn }
  </div>
  <div>
  <!-- second col content -->
  </div>
  <div>
  <!-- third col content -->
  </div>
</section>




## Install Jekyll locally

1. <input type="checkbox" class="checklistItem"> Install Ruby and [Jekyll](https://jekyllrb.com/): You'll find an [installation tutorial here](https://jekyllrb.com/docs/installation/macos/).
2. <input type="checkbox" class="checklistItem">  You need to clone Pasta Repo using Git or [Github Desktop]({{site.baseurl}}/tools/github#github-desktop-app).
3. <input type="checkbox" class="checklistItem"> Then everytime you need to run Jekyll make sure you are localized inisde the `pasta/docs` folder:

    ```shell
    cd ~/pasta/docs

    // or on m
    ```

4. <input type="checkbox" class="checklistItem">  First time, run the `bundle` command (from [Bundler](https://bundler.io/)) inside your  cloned Repo:

    ```shell
    bundle
    ```
    This should install all libraries and ingredients required to run your instance of this very website.

5. <input type="checkbox" class="checklistItem"> You then have to run Bundler **at least once** to install all required Ruby gems

    ```shell
    bundle
    ```

6. <input type="checkbox" class="checklistItem"> … then launch Jekyll via Bundler everytime to want to work on Pasta locally:

    ```shell
    bundle exec jekyll serve --livereload
    ```

    The `--liverload` option automatically refresh the browser when a file update is detected. You usually get a ~5 seconds lag.

7. <input type="checkbox" class="checklistItem"> Pasta will be running on port `4000` on [your local host](http://localhost:4000/pasta/):

    ```shell
    http://localhost:4000/pasta/
    ```
{: .nobullets}

## Rules




## Markup Snippets

### Relative URL
{: .no_toc}

Use the `{% raw %}{{site.baseurl}}{% endraw %}` moustache to access your assets, ie:

```markdown
![]({% raw %}{{site.baseurl}}{% endraw %}/assets/images/myImageFileName.png)
```

### Code
{: .no_toc}

#### Markdown
{: .no_toc}

The standard approach using Markdown:

{% highlight markdown %}
```js
console.log("Hello!");
```
{% endhighlight %}

#### Rouge
{: .no_toc}

When you want to include some computer code inside HTML tags you might need to use [Rouge](http://rouge.jneen.net/) the code highlighter [included with Jekyll](https://jekyllrb.com/docs/liquid/tags/):

```js
{% raw %}{% highlight html %} console.log("Hello!"); {% endhighlight %}{% endraw %}
```

Beware that when you use Rouge, a little mistake in your tags will make Jekyll and your whole website crash.
To escape Rouge, like in the example above ↑, use the `{% raw %}{% ra{% endraw %}w %}` filter/tag:

```js
{% raw %}{% raw %}{% endraw %}
{% raw %}{% highlight html %} console.log("Hello!"); {% endhighlight %}{% endraw %}
{% raw %}{% end{% endraw %}{% raw %}raw %}{% endraw %}
```

### Layouts
{: .no_toc}

These are bespoke classes:

<section class="flex-1_1-cols">
  <div>
  <h4 id="2-cols-1-1">2 Cols · 1 + 1</h4>
    {% highlight html %}
    <section class="flex-1_1-cols">
      <div>
        <!-- first col content -->
      </div>
      <div>
        <!-- second col content -->
      </div>
    </section>
    {% endhighlight %}
  </div>
  <div>
    <h4 id="3-cols-1-1-1">3 Cols ·  1 + 1 + 1</h4>
    {% highlight html %}
    <section class="flex-1_1_1-cols">
      <div>
      <!-- first col content -->
      </div>
      <div>
      <!-- second col content -->
      </div>
      <div>
      <!-- third col content -->
      </div>
    </section>
    {% endhighlight %}
  </div>
</section>

<section class="flex-1_1-cols">
  <div>
    <h4 id="2-cols-1-2">2 Cols · 1/3 + 2/3</h4>

    {% highlight html %}
    <section class="flex-1_2-cols">
      <div>
        <!-- first col content -->
      </div>
      <div>
        <!-- second col content -->
      </div>
    </section>
    {% endhighlight %}

  </div>
  <div>
    <h4 id="2-cols-2-1">2 Cols · 2/3 + 1/3</h4>

    {% highlight html %}
    <section class="flex-2_1-cols">
      <div>
        <!-- first col content -->
      </div>
      <div>
        <!-- second col content -->
      </div>
    </section>
    {% endhighlight %}

  </div>
</section>

### Color Table (JS required)
{: .no_toc}

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

### HTML Table Sandbox
{: .no_toc}

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
