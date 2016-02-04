---
published: true
title: npm vs RubyGem vs PyPI
layout: post
tags: [npm, rubygem, pypi]
categories: [dev]
---
If you're a *Node* developer, then you know how spoilt we are (all hail the almightly babysitter **npm**). 

Let's not talk about languages, because I firmly believe that languages are designed to suit certain needs, so I don't take the *"which language is better"* argument.

Instead, I'd love to talk about packaging - because it's so central to modern development. A good packaging manager is crucial to foster a good open source standard in a community.

This week I try to find out if we can do stuff the **npm-way** with the package managers of *Python* and *Ruby*, i.e. how do you publish a proper package there.



## npm

Here's a [**sample npm file structure**](https://github.com/kengz/neo4jKB) that I wrote. Of course it's more well polished than the two below cuz I'm mainly a Node dev.

If you head over to [the site](https://www.npmjs.com), it's pretty damn active; in fact it's the world's largest package manager. People `npm install` a lot.


It has:

- a nice search interface
- proper package page sourced from its Github's `README.md`, with details on installation, usage, etc.
- a side bar with relevant stats


Let's quickly go over how we work with *npm*. 


1. Create a Github repo with `README.md, LICENSE, .gitignore`, and clone it.
2. Write your module under `lib/`, and import the needed methods to one point of entry `index.js`.
3. At root, run `npm init` to setup the `package.json`, which will take care of everything nicely using simple JSON format.
4. Run `npm publish` and voila. Your new package is up and available immediately. Just do `npm i <package>` to install.


At the time of writing, *npm* has about 800Mil downloads per week. That's more than all the *RubyGem* downloads (700Mil) ever. This is the magic when doing a thing is so effortless (in *npm*), everyone does it without a second thought. I remember when I started as a newbie with *npm* I went through everything smoothly, thanks to the great `README.md` most packages have.



## RubyGem

Here's a [**sample RubyGem file structure**](https://github.com/johnthedong/Deal_Aggregator) that I wrote. For guide, look at [DigitalOcean's](https://www.digitalocean.com/community/tutorials/how-to-package-and-distribute-ruby-applications-as-a-gem-using-rubygems).


[*RubyGem*](https://rubygems.org) is the npm of *Ruby*, and the packages are called **Gems**. It the grand-daddy of modern dev, but there's a few things that made me cringe. Grand-daddy is old now.


It has:

- a bad search interface: unintelligent, non-suggestive, and worst of all you have to go back to the homepage to search again. What year is this?
- the gem pages are mostly poorly written because there isn't a robust standard for it in the community
- a side bar with some stats, Okay.

Let's quickly go over how we work with *RubyGem*. 

1. Create a Github repo with `README.md, LICENSE, .gitignore`, and clone it.
2. Ahhh do `gem install bundler` first. At root, ~~run `npm init` to setup the `package.json`, which will take care of everything nicely using simple JSON format.~~ run `bundle gem <gem>` to generate the necessary files. That's pretty nice. But there's a nightmarish part: the *Gem* specs are split across different files: write it in functional Ruby `<gem>.gemspec` without a single standardized format, source the gem dependencies from `Gemfile`, and add a `Rakefile` for publishing your gem. *No, there is no standardized `package.json` to handle all these things for you under a single JSON file.* **Welcome to the brutal world you spoilt brat.**
3. Write your module under `lib/<gem>`, ~~and import the needed methods to one point of entry `index.js`.~~ add a `version.rb` under it, then import the needed methods to one point of entry `lib/<gem>.rb`.
4. Run ~`npm publish` and voila~ `gem push <gem>-<version>.gem`. Oh if you think that's 3 arguments too long, wait till you see how to use `Rake`. Whyyy gosh whyyy? But you can do `gem install <gem>` simply, thank god.





## PyPI

Here's a [**sample PyPI file structure**](https://github.com/kengz/python-structure) that I wrote, along with a **simple guide**.

I love Python, but [PyPI](https://pypi.python.org/pypi) *gives me cancer*. Okay I get it, the user base is different from the sassy Node devs, and who gives a shit about user interface? Ain't nobody got time for that (except for web developers).


It has:

- the most useless search interface using only simple regex. It floods the results with multiple versions of the same package, so good luck browsing.
- ~proper package page sourced from its Github's `README.md`,~ PyPI can't handle Markdown apparently, so enjoy your plain text formatting. Some important packages actually have details on installation, usage, etc. cuz otherwise you'd be fucking lost - goodluck finding the Github page of the package, even if it exists in the first place!
- ~~a side bar with relevant stats~~Most serious users are scientific coders and they know exactly what package they're looking for, so who cares bout stats in that case.


Let's quickly go over how we work with *PyPI*. But first, good luck with the fragmentation - Python2 v.s. Python3, virtualenv v.s. pyvenv...

Now that you're done choosing,


1. Create a Github repo with `README.md, LICENSE, .gitignore`, and clone it.
2. Write your module under `<package>/`. Add `<package>/__init__.py`, and import the needed methods within it.
3. ~~At root, run `npm init` to setup the `package.json`, which will take care of everything nicely using simple JSON format.~~Copy the `setup.py` from someone else who has written it, and there's no standardization. Ohh wanna list your dependencies? Do `pip install <deps>` as you dev, then at the end only specify these dependencies using `pip3 freeze > requirements.txt`
4. ~~Run `npm publish` and voila.~~ Nightmare isn't over. First, register your package name `python setup.py register`. If successful, then upload your smelly tar balls to PyPI `python setup.py sdist upload` (who the hell devs with tar files and manual installation today?). Your new package is up and available ~~immediately~~ a century later before you can do `pip install <package>` to install the just-published version.
5. Btw all the cray involving `pip` and packages are best done with `virtualenv` or whatever you choose.




## Conclusion

I love all the three languages - Node, Ruby, Python. However, modern dev is so much about open source and external dependencies - you can't write powerful code efficiently without relying on open source modules. *No dev is an island now.*

That being said, I love *npm*, but *RubyGem* and *PyPI* kinda made me went **"ehmmmm, what year is this?"** I'll still have to use both of them (and cringe every time I do), but I just have to suck it up and stop being a spoilt brat. The world isn't all nice, you know.
