Styled hints for your docs
==========================

This plugins requires gitbook `>=3.0.0`.

### Install

Add the below to your `book.json` file, then run `gitbook install` :

```json
{
    "plugins": ["plugin-callouts"]
}
```

### Usage

You can now provide callouts in various ways using the `hint` tag.

```markdown
{% hint 'info' %}
**Important info**: this *note* needs to be highlighted
{% endhint %}
```
The above example will produce a `div` with the appropriate style:

```html
<div class="alert alert-info">
<i class="fa fa-info-circle"></i>
<div><strong>Important info</strong>: this <em>note</em> needs to be highlighted</div>
</div>
```

Available styles are:

- `note`
- `info` (default)
- `tip`
- `warning`
- `danger`
