# Google WSK and Tinypress

This is the source repo of my website-blog [kengz.me](http://kengz.me). It is made with [Github Pages](https://pages.github.com), [Google Web Starter Kit(WSK)](https://github.com/google/web-starter-kit), and [Tinypress](https://tinypress.co).

It hosts a full webpage on **Github Pages**, with the design done on **Google WSK**, and also houses a minimal **Tinypress** blog. The hosting, webpage design, and blog posting/injection are all very minimal and fast - that's the point.

Fork this repo to use the entire setup.

## Tl;dr

Do all your dev and place all your `.html, .css, .scss, .js` etc. resource files in `app/`. Touch nothing else.

Put your custom `.css` files under `app/styles/`, and link them in `index.html` under the `build:css` clause.

```html
<!-- Your styles -->
<!-- build:css styles/main.min.css -->
<link rel="stylesheet" href="styles/yourstyle.css">
<!-- endbuild -->
```

Put your custom `.js` files under `app/scripts/`, and link them in `index.html` under the `build:js` clause/

```html
<!-- build:js scripts/main.min.js -->
<script src="scripts/main.js"></script>
<script src="scripts/github.js"></script>
<!-- endbuild -->
```

The `gulp` build system will pick up the resources, minify and optimize them, then relink the new resources for you. 

When developing, to compile and live-preview the dev build, do

```bash
gulp serve
```

When you're done, to compile and live-preview the deployment build, do

```bash
gulp serve:main
# or without preview, do
gulp
```

Then deploy to your page. Use **Tinypress** as usual; your blog will appear where the template string is injected in WSK.


## Details

The details of how Github Pages, Google WSK and Tinypress as hacked together is detailed in my blogpost, which I included as excerp below:

Keng is really lazy; he wants to code as little as possible for this project.

We have two aims here:

- a website with sections for different topics
- a section dedicated for blogging

Let's get started. The source code is hosted on [my repo](https://github.com/kengz/kengz.github.io).

We will host the site with [Github Pages](https://pages.github.com). Follow their instructions.

For the website we use [Google Web Starter Kit (WSK)](https://github.com/google/web-starter-kit). It is styled with [Google MDL](http://www.getmdl.io). You can also see it as a static-site generator. WSK houses a lot of optimization tools written by the Google team, and it uses familiar build tools such as `minify` and `gulp` for streamlined building.

For blogging we use [Tinypress](https://tinypress.co), which is really minimal - just write your post on the site in `Markdown`, then hit `post`. Tinypress will then push your material to your github pages.

But, it's not really that easy, is it? We wish to house the blog under a section of the website. The problem is - Tinypress or Jekyll needs to control and setup the root `index.html`, i.e. it needs an empty repo to create a full site with its own resources. So, if you start with Tinypress, you can't really customize it much to be a website; instead you'll just get a bare blog.

So, Keng spent some time cracking Tinypress, and hacked it to merge under the Google WSK website.


### Build System

Suppose you have set up your Github Pages together with the [CNAME](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/). Note that Github Pages needs an `index.html` at the root; this is a must.

Next, clone the [Google WSK](https://github.com/google/web-starter-kit) elsewhere and copy the content **(except its .git!)** into your Github Pages repo. We need to hack its `gulp` to tweak the default build.

Suppose you know how to run `gulp`; otherwise [it's really simple](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md). Just install it, and run the commands from the terminal at project root.

This is how WSK organizes their folders and builds:

- `app/` is where you do all the developments and tests. The `app/` folder contains all website resources such as the `.html`, `.css`, `.scss` and `.js` files. Summon the dev build/preview by the command `gulp serve`.

- `dist/` houses the files for deployment. `gulp` will source from `app/`, minifies and optimizes files, and copy the built files to `dist/`. `gulp serve:main` runs the build then pulls up a deployment preview.

Now, recall that Github Pages requires the root folder to be the deployment build folder, since it needs `index.html` at root. Keng has modified the `gulpfile` so that the deployment build writes to the root. Use the same `gulp` commands as before.


### Website

Now that the build system is set up, you can design the site. The original WSK provides a good starting boilerplate. Refer to [Google MDL](http://www.getmdl.io) for usage. Or, you can look at the my `app/` folder. The page you're currently viewing has multiple tabs for different sections. 

For Tinypress to be able to inject under the blog section, we add the template string snippet in `app/index.html`, like so:


```html
<div class="wrap">
  <div class="container content ">
    <div class="posts">
       ...<!-- template string here -->
    </div>
  </div>
</div>
```

Put your custom `.css` files under `app/styles/`, and link them in `index.html` under the `build:css` clause.

```html
<!-- Your styles -->
<!-- build:css styles/main.min.css -->
<link rel="stylesheet" href="styles/yourstyle.css">
<!-- endbuild -->
```

Put your custom `.js` files under `app/scripts/`, and link them in `index.html` under the `build:js` clause.

```html
<!-- build:js scripts/main.min.js -->
<script src="scripts/main.js"></script>
<script src="scripts/github.js"></script>
<!-- endbuild -->
```

The `gulp` build system will pick up the resources, minify and optimize them, then relink the new resources for you.


### Blog

Next, we wish to house the Tinypress a section, without changing how we post from it. Recall also, now that we have occupied the root folder, Tinypress cannot setup its resources normally. We need to hack.

Tinypress uses template strings. You will see the folders `_includes/`, `_layouts/` and `_posts`. Just so that Tinypress still gets access to the root `index.html`, we add `tinypress_index.html`. 

The deployment build will finish building the resources, move the completed build `index.html` into `layout_preview.html` for live preview, then copy `tinypress_index.html` into `index.html` for Tinypress to use.

With the template string we injected earlier into `app/index.html`, now Tinypress gets a handle on the repo to inject the Markdown blog contents.


### Build

You're basically done. With the build system set up, and a small hack for Tinypress, you can update and customize the website however you like, and can write blog posts very easily from Tinypress. The best of both worlds!


## License

Apache 2.0  
Copyright 2015 Google Inc
