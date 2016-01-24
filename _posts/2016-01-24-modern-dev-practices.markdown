---
published: true
title: Modern dev practices
layout: post
tags: [modern, development]
categories: [dev]
---
Modern development isn't just about writing code - it's also about *the practice as a whole*.

Traditionally, we write those complicated, yucky, half-hearted unit tests, run them once and call it a day. If you've done *Java* and *JUnit*, you know no one gets excited for that. Worse, this practice simply is decrepit.

Thank goodness, today there are nice tools to help us do things the nice way. In modern development, there are some code qc practices that goes with it! Roughly, we have the list below, with the popular choices. The examples will relate to `nodejs` because that's my main dev language, although the same practices are language-agnostic.

- version control: [Github](https://github.com)
- documentation: [JSDoc](https://github.com/jsdoc2md/jsdoc-to-markdown), [dokkerjs](http://dokkerjs.com)
- unit testing: [Mocha](https://mochajs.org) + [Chai](http://chaijs.com)
- code coverage: [Istanbul](https://github.com/gotwarlost/istanbul), [Coveralls.io](https://coveralls.io)
- dependency check: [Gemnasium](https://coveralls.io)
- continuous integration: [Travis CI](https://travis-ci.org)

Oh, and these tools are all free! What an amazing time to be a developer, isn't it?


#### Version control

*Github* is undoubtedly everyone's favorite for VC because it's just *awesome*. I sound bias, but to be fair I've used *SVN*, and still use *Bitbucket*, and I know how much they suck. Seriously. Github is a great tool, with top notch user interface, robust API for developers, and a huge community. Seriously everyone's on Github.

Why do I still use *Bitbucket*, you might wonder? It's only because they offer unlimited private repos for free, whereas Github only gives you 5. I'm a cheapskate, I know :)



#### Documentation

I've been searching for a great documentation generator that is automated - fully automated. Ideally, you should just have to annotate your source code with the docs. 

Then, when you're done, the generator should compile all the docs into a beautifully styled web page, and pushes it automatically to a hosted site - ideally the Github Pages of the project very own repo.

[`Dokkerjs`](http://dokkerjs.com) does exactly that. I found a guy writing it just when I was about to give up searching and write my own. We ended up finishing it together. An example project is [`lomath`](http://kengz.me/lomath/).

Occasionally you want something really light, and since `Markdown` is a popular format that's compatible with Github, I use [`jsdoc-to-markdown`](https://github.com/jsdoc2md/jsdoc-to-markdown) too. An example project is [`neo4jKB`](https://github.com/kengz/neo4jKB).



#### Unit testing

I know most people don't like it - I did. However, once you find a nice framework to do it, it'll be fun and satisfying, trust me. Plus, quality code must be tested, 100%-tested.

I love the [`Mocha`](https://mochajs.org) framework, which supports both *TDD* and *BDD* (test- and behavior-driven-development). My assertation library of choice for *Mocha* is [`Chai`](http://chaijs.com). *Chai* even has a variant that supports Promised-based tests. To see example tests with proper configs, look at [neo4jKB](https://github.com/kengz/neo4jKB/tree/master/test). This includes a `common.js` to share global variables, an `asset.js` to share test assets, and `mocha.opts` to specify the dev styles and test reporters.


#### Code coverage

Unit testing alone isn't enough because, when you source code gets long, you get lost. You have to make sure you've tested every function, conditional statement and branches, and considered every possibility. This is what we call code coverage. Basically, it crawls your source code and indexes all the functions with their possible break points and conditional branches.

*Mocha* does that a bit through it's reporter, but there's a more powerful option, [Istanbul](https://github.com/gotwarlost/istanbul). It allows you to more carefully exclude the parts that should not be tested, so you can get up to 100% test coverage without looking sloppy. I use *Istanbul* for offline, local coverage reporting.

Another option is [Coveralls.io](https://coveralls.io), which I use for online, deployed coverage reporting. This is nice because it automatically fetches the built tests from your CI (next up!), and updates a badge on your Github repo.



#### Dependency check

Today we build many things with open source dependencies. It's good to keep them always updated, and a way to monitor that is through [Gemnasium](https://gemnasium.com), which also automatically updates a badge on your Github repo.



#### Continuous integration

This is the final step where all the above falls into place. The idea of continuous integration is that you develop your code, write the unit tests, push to your Github, it then builds your project on several deployment environments and runs the tests. When all that is done, it pushes the code coverage to *Coveralls*, and reports the latest build status on a badge on your Github repo.

My favorite is [Travis CI](https://travis-ci.org), and I've used it in many of my projects.


### Putting it all together

So, what's the workflow of a modern developer? You write your source code and annotate it with the documentation in the comments. You can run Dokkerjs to let it push the new beautiful doc to the Github Pages fir you. 

Then, you write the unit tests, and run locally to make sure it works fine on your machine. When you're done, push your source code to Github. Travis CI automatically builds your project and runs the unit tests on your push; this ensures your project works on other platforms too.

The latest build status, code coverage, and dependency status are updated automatically on your Github pages. Altogether, you have a properly maintained repo, with automatic status update on the health and quality of your code. Users of your projects know they can rely on you when all badges are green, and know to watch out when some badges turn red. Neat, isn't it?

I know this is a short post for such a long topic; there isn't space to elaborate fully how do you do each thing. But, there are many great tutorials out there, and I hope I've given you some good options to start with. Go check them out!

If you like to see some examples, check out the pretty badges at my recent repos [`neo4jKB`](https://github.com/kengz/neo4jKB) and [`lomath`](https://github.com/kengz/lomath). Happy devving!