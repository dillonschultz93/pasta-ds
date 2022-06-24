---
title: Jekyll # title case
permalink: tools/jekyll # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
parent: Tools # title case
layout: default
nav_order: 60
---

# Jekyll
{: .no_toc}

<figure>
    <blockquote cite="" class="jumbo">
      <p markdown="1">
        We are using [Jekyll](https://jekyllrb.com/) to build this website, <br>
        aka Pasta Knowldge Base, <br>
        aka Yummly Product Language Single Source of Truth.
      </p>
    </blockquote>
    <!-- <figcaption>Author Name, Company · <cite><a href="">Source</a></cite></figcaption> -->
</figure>

"Jekyll is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website. You can tweak the site’s look and feel, URLs, the data displayed on the page, [and more →](https://jekyllrb.com/docs/)."


- TOC
{:toc}

## Get started

<section class="flex-2_1-cols">
      <div>
The magic of Jekyll is that you can quickly start to contribute by using simple Markdown, and little by little go into more advanced layouts and editorial features:
      </div>
      <div>
        <!-- second col content -->
      </div>
</section>
<br>
<code> 1 · Markdown </code> &nbsp;→&nbsp; <code> 2 · HTML inside Markdown </code> &nbsp;→&nbsp; <code> 3 · Add CSS' fun </code> &nbsp;→&nbsp; <code> 4 · Build a JS App </code>

### Let's gear up!
{: .no_toc}

||||
| --- | --- | --- |
|MacDown App|New to MarkDown? A simple Mac OSX Markdown Editor ideal to start learning|[Grab it! →](https://macdown.uranusjr.com/){: .btn}|
|Markdown Guide|New to MarkDown? Go there and learn how easy it is… |[Online Guide →](https://www.markdownguide.org/){: .btn}|
|Language Markdown| A recommended Atom package for [Atom](https://atom.io/) that properly highlights both MarkDown and HTML | [Grab Package →](https://atom.io/packages/language-markdown){: .btn } |
|Atom|For more advanced code/text edtion we highly recommend to switch to a professional editor such as Github Atom|[Grab Atom →](https://atom.io/){: .btn }|
|Critic Markup| Annotation convention that allows to collaborate inside markup docs| [Learn →](https://github.com/CriticMarkup/CriticMarkup-toolkit){: .btn }|
{: .headless}


### Install Jekyll locally
{: .no_toc}

GEEK ZONE
{: .label}
If you need help for the following steps please contact our current [Pasta Documentation Curator]({{site.baseurl}}/committee)

<br>


1. <input type="checkbox" class="checklistItem"> Install Ruby and [Jekyll](https://jekyllrb.com/): You'll find an [installation tutorial here](https://jekyllrb.com/docs/installation/macos/).
2. <input type="checkbox" class="checklistItem">  You need to clone our [Pasta Repo](https://github.com/yummly/pasta) using Git or [Github Desktop]({{site.baseurl}}/tools/github#github-desktop-app).
3. <input type="checkbox" class="checklistItem"> Then every time you need to run Jekyll make sure you are localized inside the `pasta/docs` folder:

    ```shell
    cd ~/pasta/docs
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

6. <input type="checkbox" class="checklistItem"> … then launch Jekyll via Bundler every time to want to work on Pasta locally:

    ```shell
    bundle exec jekyll serve --livereload --incremental
    ```

    The `--livereload` option automatically refresh the browser when a file update is detected. `--incremental` should help with the built duration length (experimental feature).

7. <input type="checkbox" class="checklistItem"> Pasta will be running on port `4000` on [your local host](http://localhost:4000/pasta/):

    ```shell
    http://localhost:4000/pasta/
    ```
{: .nobullets}


||||
| --- | --- | --- |
|Github Desktop|A native app for newbies to avoid Git command-line | [Grab it! →](https://desktop.github.com/){: .btn }|
{: .headless}


## Jekyll Features

<section class="flex-1_1-cols">
  <div>
    <p>
      The beauty of <a href="https://jekyllrb.com/">Jekyll</a> is that it translates into a static website pages or posts whatever markup files you throw at it:
    </p>
    <ul>
      <li>Markdown</li>
      <li>HTML</li>
      <li>Markdown embedding HTML bits!</li>
    </ul>
  <p>
    You just need to include a YAML <a href="https://jekyllrb.com/docs/front-matter/">Front Matter block</a> at the top of your file →
  </p>
  </div>
  <div>
    <p><strong>ie: this page Front Matter:</strong></p>
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

We host Pasta using <a href="https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll">Github pages</a>.


## Just The Docs · Jekyll's template

We are using [Just The Docs](https://pmarsceill.github.io/just-the-docs/). The template has its own set of features, styling and rules and you'd better get familiar with it if you have to contribute to Pasta.

[RTFM](https://en.wikipedia.org/wiki/RTFM)
{: .label}
We highly recommend you read these 2 sections:

|||
| --- | --- |
|Learn how to build your navigation structure|[Navigation Structure →](https://pmarsceill.github.io/just-the-docs/docs/navigation-structure/){: .btn}|
|Learn usefull components to build your content|[UI Components →](https://pmarsceill.github.io/just-the-docs/docs/ui-components){: .btn}|
{: .headless}


#### Styling Pasta
{: .no_toc}

[DIRECTIVE](https://en.wikipedia.org/wiki/RTFM)
{: .label}

<br>
**Dull by design**: Pasta look'n feel must remain colorless to never conflict with the elements and styles it showcase. Only shades of grey are allowed. We also require system fonts to be the default to not pull our readers into other consideration, focus should be on the content not its frame.

We are using both the Theme [custom scheme](https://pmarsceill.github.io/just-the-docs/docs/customization/#custom-schemes) feature and [custom scss](https://pmarsceill.github.io/just-the-docs/docs/customization/#override-and-completely-custom-styles) to style Pasta to our liking.

<hr>

<section class="flex-2_1-cols">
  <div markdown="1">
#### Includes
{: .no_toc}
If you want to create new [Includes](https://jekyllrb.com/docs/includes/) you have to push them to our [Repo](https://github.com/yummly/just-the-docs) Cf.→. You need to put your Includes files at the root of the `_includes` folder.
**Always Use the `pasta-` prefix** to distinguish them from the theme default Includes, ie:

  <figure class="highlight">
  <pre>
  <code class="language-txt" data-lang="text">
  _includes
  ├─ css
  ├─ js
  ├─ vendor
  └─ pasta-color-structure.html // ← example
  </code>
  </pre>
  </figure>

You can test your Includes before pushing them to our Theme Repo using a relative path directly and putting them directly inside Pasta's folder. Beware that your file, or its countainer folder, should be in the same folder as the doc calling it. Then call it as [explained here](https://jekyllrb.com/docs/includes/#including-files-relative-to-another-file):

  <figure class="highlight">
  <pre>
  <code class="language-text" data-lang="text">
  {% raw %}{% include_relative somedir/pasta-color-structure.html %}{% endraw %}
  </code>
  </pre>
  </figure>


  </div>
  <div markdown="1">
<!-- don't use tabs to interpret as markdown  -->
#### Our forked theme
{: .no_toc}
In order to add [Includes](https://jekyllrb.com/docs/includes/), aka HTML fragments, inside Jekyll's root `_includes` folder we had to fork the theme:

[Our forked Theme →](https://github.com/yummly/just-the-docs){: .btn }

  <details>
  <summary>For geeks</summary>

Inside <code>_config.yml</code>:<br><br>

  <figure class="highlight">
  <pre>
  <code class="language-yml" data-lang="yml">
  // ↓ using yummly forked

  remote_theme: yummly/just-the-docs
  </code>
  </pre>
  </figure>

Not sure this is necessary, inside <code>Gemfile</code>:<br><br>

  <figure class="highlight">
  <pre>
  <code class="language-yml" data-lang="yml">
  // ↓ using yummly forked

  gem 'just-the-docs', '0.3.3', git: 'https://github.com/yummly/just-the-docs/'
  </code>
  </pre>
  </figure>


  </details>

  </div>
</section>


## Usefull Snippets

### Relative URL

Use the `{% raw %}{{site.baseurl}}{% endraw %}` moustache to access your assets, ie:

```markdown
![WIP]({% raw %}{{site.baseurl}}{% endraw %}/assets/images/myImageFileName.png)
```
or

```html
<img src="{% raw %}{{site.baseurl}}{% endraw %}/assets/images/myImageFileName.png" alt="WIP">
```

### Code

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
To escape Rouge, like in the example above ↑ where we document Rouge code, use the `{% raw %}{% ra{% endraw %}w %}` filter/tag:

```js
{% raw %}{% raw %}{% endraw %}
{% raw %}{% highlight html %} console.log("Hello!"); {% endhighlight %}{% endraw %}
{% raw %}{% end{% endraw %}{% raw %}raw %}{% endraw %}
```

### Do & Don't indicators

We use `<hr>` with `dd-do` and `dd-dont` classes:

```html
<section class="flex-1_1-cols">
   <div>
      <p> you shouldn't do this</p>
      <hr class="dd-dont">
   </div>
   <div>
      <p> …but do this instead</p>
      <hr class="dd-do">
   </div>
</section>
```
… renders into:

 <section class="flex-1_1-cols">
   <div>
      <p> you shouldn't do this</p>
      <hr class="dd-dont">
   </div>
   <div>
      <p> …but do this instead</p>
      <hr class="dd-do">
   </div>
</section>


### Multiple columns sections

We use bespoke CSS classes:

<section class="flex-1_1-cols">
  <div>
  <h4 id="2-cols-1-1">2 Cols · 1/2 + 1/2</h4>
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
    <h4 id="3-cols-1-1-1">3 Cols ·  1/3 + 1/3 + 1/3</h4>
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

### Tabs

We use 2 classes `tabs` and `tab`, and radio buttons:

{% highlight html %}
   <div class="tabs">
     <input type="radio" name="tabs_section_name" id="tab_name_01" checked="checked">
     <label for="tab_name_01">Tab #1</label>
     <div class="tab">
       Tab 1 content
     </div>
     <input type="radio" name="tabs_section_name" id="tab_name_02">
     <label for="tab_name_02">Tab #2</label>
     <div class="tab">
      Tab 2 content
     </div>
     <input type="radio" name="tabs_section_name" id="tab_name_03">
     <label for="tab_name_03">Tab #3</label>
     <div class="tab">
        Tab 3 content
     </div>  
   </div>
{% endhighlight %}

… renders into:

<div class="tabs">
  <input type="radio" name="tabs_previews" id="tab_preview_01" checked="checked">
  <label for="tab_preview_01">Tab #1</label>
  <div class="tab">
    Tab 1 content
  </div>
  <input type="radio" name="tabs_previews" id="tab_preview_02">
  <label for="tab_preview_02">Tab #2</label>
  <div class="tab">
   Tab 2 content
  </div>
  <input type="radio" name="tabs_previews" id="tab_preview_03">
  <label for="tab_preview_03">Tab #3</label>
  <div class="tab">
     Tab 3 content
  </div>  
</div>


### Basic HTML Table


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
