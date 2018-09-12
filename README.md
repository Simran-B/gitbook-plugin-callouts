Styled hints for your docs
==========================

This plugins requires gitbook `>=3.0.0`.

### Install

Add the below to your `book.json` file, then run `gitbook install`:

```json
{
    "plugins": ["callouts@git+https://github.com/Simran-B/gitbook-plugin-callouts.git"]
}
```

### Usage

Various types of callouts can be embedded using a `hint` block.

```markdown
{% hint 'info' %}
**Important info**: this *note* needs to be highlighted

​    code_example = "Plugin uses renderBlock() method"

{% endhint %}
```
The above example will produce a `div` with the appropriate style:

```html
<div class="alert alert-info">
  <i class="fa fa-info-circle"></i>
  <div>
    <p><strong>Important info</strong>: this <em>note</em> needs to be highlighted</p>
    <pre><code>code_example = "Plugin uses renderBlock() method"</code></pre>
  </div>
</div>
```

Available styles:

- `note`
- `quote`
- `info` (default)
- `tip`
- `warning`
- `danger`

Preview:

![Screenshot of different callout types](https://raw.githubusercontent.com/Simran-B/gitbook-plugin-callouts/preview/preview.png)
