---
published: true
title: npm script with arguments
layout: post
tags: [npm]
categories: [dev]
---
`npm` is a powerful scripting tool to build your projects. It unifies all commands and let you do `npm start`, `npm stop`, `npm run <script>` etc., where the actual commands executed by them are defined under `package.json`.

Recently I've had the need to set some environment variables while doing `npm start`. `npm` commands allows you to pass arguments or set the env vars in several ways, but I wasn't quite satisfied:

- loading an `.env` file, or prepending like `<key>=<value> npm start` isn't elegant.
- [`npm config set <key> <value>`](https://docs.npmjs.com/cli/config): this is cumbersome af. Ain't gonna write that!
- [`npm start --<key>=<value>`](https://docs.npmjs.com/misc/config): really close to what I want! But it actually sets `$npm_config_<key>` instead of `$key`.

My use case was to start my bots of different names, say:
- `npm start` would deploy the *default* bot, 
- `npm start --bot=veronica` would deploy the *other* bot named *veronica*

I fiddled with `npm` and `bash` for hours and got it figured out. Basically we use the commands above, internally these would happen:
- `$npm_config_bot` would be set only if `--bot=veronica` is passed.
- `bash` checks if `$npm_config_bot` is set; if so it sets the `$bot=veronica`; else it sets the default `$bot=jarvis`
- then the deploy script runs with the `$bot` variable.

Below is my snippet from `package.json`:

```json
...
"scripts": {
    "start": "npm run deploy",
    "deploy": "if [ $npm_config_bot ]; then bot=$npm_config_bot; echo Bot is SET to: $bot; else bot=peppurr; echo Bot is DEFAULTED to $bot; fi; DEPLOY=.keys-$bot forever start --uid $bot index.js"
  },
...
```

Beware that if the command is split into separate `npm` scripts, due to the local scoping you'd actually lose the `$bot` variable. That's why `deploy` is such a long command.