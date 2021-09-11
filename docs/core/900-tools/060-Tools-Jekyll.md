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

## Markdown + HTML

### This website
{: .no_toc}

The beauty of [Jekyll](https://jekyllrb.com/) is that it translates into a static website whatever files you throw at it:

- Markdown
- HTML
- Markdown with HTML bits (← amazing!)

… as soon as you include a YAML Front Matter block at the top of your text file such as the one used for this page:

```yaml
---
title: Jekyll # title case
permalink: tools/jekyll # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
parent: Tools # title case
layout: default
nav_order: 60
---
```

[Github pages are using Jekyll too](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll). This means free hosting, right from your Repository.

### Markdown AND html
{: .no_toc}

[Language-markdown](https://atom.io/packages/language-markdown) is an Atom syntax Highlighter that works for both HTML & Markdown code within the same document:


[Atom Highlighter](https://atom.io/packages/language-markdown){: .btn }

## Install Jekyll locally

1. <input type="checkbox" class="checklist"> Install Ruby and [Jekyll](https://jekyllrb.com/): You'll find an [installation tutorial here](https://jekyllrb.com/docs/installation/macos/).
2. <input type="checkbox" class="checklist">  You need to clone Pasta Repo using Git or [Github Desktop]({{site.baseurl}}/tools/github#github-desktop-app).
3. <input type="checkbox" class="checklist"> Then everytime you need to run Jekyll make sure you are localized inisde the `pasta/docs` folder:

    ```shell
    cd ~/pasta/docs
    ```

4. <input type="checkbox" class="checklist">  First time, run the `bundle` command (from [Bundler](https://bundler.io/)) inside your  cloned Repo:

    ```shell
    bundle
    ```
    This should install all libraries and ingredients required to run your instance of this very website.

5. <input type="checkbox" class="checklist"> You then have to run Bundler **at least once** to install all required Ruby gems

    ```shell
    bundle
    ```

6. <input type="checkbox" class="checklist"> … then launch Jekyll via Bundler everytime to want to work on Pasta locally:

    ```shell
    bundle exec jekyll serve --livereload
    ```

    The `--liverload` option automatically refresh the browser when a file update is detected. You usually get a ~5 seconds lag.

7. <input type="checkbox" class="checklist"> Pasta will be running on port `4000` on [your local host](http://localhost:4000/pasta/):

    ```shell
    http://localhost:4000/pasta/
    ```


## Markup Snippets

### Relative URL

Use the `{% raw %}{{site.baseurl}}{% endraw %}` moustache to access your assets, ie:

```markdown
![]({% raw %}{{site.baseurl}}{% endraw %}/assets/images/myImageFileName.png)
```

### Code

#### Markdown

The standard appraoch using Markdown:

{% highlight markdown %}
```js
console.log("Hello!");
```
{% endhighlight %}

#### Rouge

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


<section class="flex-1_1-cols">
  <div>
    <h3 id="3-cols-layout-1-1-1">3 Cols layout ·  1 + 1 + 1</h3>

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
  <div>
    <h3 id="2-cols-layout-1-1">2 Cols layout · 1 + 1</h3>

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
</section>






<section class="flex-1_1-cols">
  <div>
    <h3 id="2-cols-layout-1-2">2 Cols layout · 1/3 + 2/3</h3>

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
    <h3 id="2-cols-layout-2-1">2 Cols layout · 2/3 + 1/3</h3>

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
