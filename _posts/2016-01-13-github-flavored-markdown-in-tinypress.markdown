---
published: true
title: Github flavored Markdown in Tinypress
layout: post
tags: [Tinypress, Markdown]
---
Another hack for **Tinypress** - if you noticed, it uses a different kind of `Markdown` than the one we're used to on Github.
This can be fixed by changing the `./_config.yml` that Tinypress uses, like mine [here](https://github.com/kengz/kengz.github.io/blob/master/_config.yml), which looks like:

```
excerpt_separator: ""
pygments: true
markdown: redcarpet
markdown_ext:  markdown,mkdown,mkdn,mkd,md
redcarpet:
  extensions: ["tables", "autolink", "strikethrough", "space_after_headers", "with_toc_data", "fenced_code_blocks"]
url: https://kengz.me
title: kengz
tagline: Kengz.me
description: Mein blog
paginate: 5
```

Happy blogging!