---
published: true
title: Restoring machine setup after an EMP attack
layout: post
tags: [bash, setup]
categories: [dev]
---
Do you also have multiple machines, and have a habit of wiping/reformatting your machines? One reason people don't wipe as frequently is because **it's hard to setup a machine like you're used to**.

That used to be me; I'm very OCD about my programming environment. Few months ago I **had to wipe many times**, and the manual machine setup was def a pain. So I asked for more pain by writing a bash script to automate it once and for all.

It's quite easy. You're basically compiling all the commands you type into the terminal into a script, and run the bulk at one go. With the liberty of scripting, you can actually improve the process even further.

I develop mostly on MacOS, but I have to setup a Unix at times too. Being all OCD and with over 30 wipes and refinements, my bash mac_setup script is now well polished - it even checks for the OS (Mac or Unix) and run the corresponding subscript.

Here is the [setup script](https://github.com/kengz/mac_setup). It checks for the target's existence then install or update. Overall, it:

- configures the system preferences and security settings
- writes the new `.bash_profile`
- installs apps via brew Cask
- installs the dev dependencies
- downloads and restores my Sublime setting woohoo!

I typically just boot into my fresh new OS, download the script from my Github and leave it to run. When I come back after 20 minutes, I'm greeted with a familiar machine.

Feel free to fork or clone my [setup script repo](https://github.com/kengz/mac_setup). Yes the repo title says
> Set up your new mac in case of an EMP attack.

because u can recover within 20 minutes. Neat ayy?

Anyway here's a preview of the script:

```bash
#!/bin/bash

#####################################
# This script sets up your machine
# Permission set to user readable & executable
# by: chmod 775 ./setup
# run by right-clicking it
#####################################


#####################################
# Preparing to run
#####################################
echo "
================================================

Welcome to the Mac Setup
by Wah Loon Keng @ Dec 15 2015
for bug reports, contact [ kengzwl@gmail.com ]

This will take under 30 minutes.

================================================
"
# Ask for the administrator password upfront
[ "$UID" -eq 0 ] || exec sudo bash "$0" "$@"
# sudo -v
# prevent sleep for this script; & runs in background
caffeinate -d &
# Keep-alive: update existing `sudo` time stamp until this script has finished
while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &




#####################################
# System Preference customization
#####################################
# Systems prefs, location at: ~/Library/Preferences
# to read, e.g.:
# defaults read com.apple.dock
# reset if u fucked up:
# defaults delete com.apple.dock; killall Dock
echo "
================================================

Customizing System Preferences

================================================
"

#####################################
# System-wide UI / Behavior
#####################################
# use dark menu bar and Dock
defaults write NSGlobalDomain AppleInterfaceStyle -string Dark

# highlight color = red
defaults write NSGlobalDomain AppleHighlightColor -string "1.000000 0.733333 0.721569"

# Require password immediately after sleep or screen saver begins
defaults write com.apple.screensaver askForPassword -int 1
defaults write com.apple.screensaver askForPasswordDelay -int 0

# ... more

# Installs homebrew
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"


# upgrade and check
brew update && brew upgrade
brew doctor

# install the prereq
brew install git
brew install wget

# homebrew taps
brew tap caskroom/cask
brew tap caskroom/versions
brew tap caskroom/fonts


#####################################
# Install common apps
#####################################
# Installs cask, really vital
brew install caskroom/cask/brew-cask

# Install the basic apps for work
brew cask install google-chrome
brew cask install 1password
brew cask install tunnelblick
brew cask install sublime-text3
brew cask install font-source-code-pro
brew cask install slack
brew cask install spotify
brew cask install shiftit
brew cask install java

# download the vpn configs for tunnelblick
curl -o ~/Downloads/openvpn.zip https://www.privateinternetaccess.com/openvpn/openvpn.zip
unzip ~/Downloads/openvpn.zip -d ~/Downloads/openvpn/
rm ~/Downloads/openvpn.zip

# ... and more

```

