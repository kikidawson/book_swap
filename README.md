# Book Me Up
A web application, to allow users to offer books for use by a community of users other users.

## Motivation
To demonstrate the ability to build a high quality single page web app, in a new framework as part of a team. Also, to enjoy ourselves.

## Build status
Build status of continuous integration i.e. travis, appveyor etc. Ex. -

[![Build Status](https://travis-ci.org/akashnimare/foco.svg?branch=master)](https://travis-ci.org/akashnimare/foco)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/akashnimare/foco?branch=master&svg=true)](https://ci.appveyor.com/project/akashnimare/foco/branch/master)

## Code style
If you're using any code style like xo, standard etc. That will help others while contributing to your project. Ex. -

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Screenshots
Include logo/demo screenshot etc.

## Tech/framework used
Ex. -

<b>Built with</b>
- [Electron](https://electron.atom.io)

## Features
What makes your project stand out?

## Code Example
Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Installation
### Database Installation
You will need homebrew, if you don't please install [Homebrew](https://brew.sh/).

`$ brew tap mongodb/brew`
`$ brew install mongodb-community`

If you have note upgraded to MacOs Catalina or above, then;
`$ sudo mkdir -p /data/db`
`sudo chown -R `id -un` /data/db`

If you do have Caratalina or above:
`sudo mkdir -p /Syste,/Volumes/Data/data/db`
`sudo chown -R `id -un` /System/Volumes/Data/data/db` 


## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests
Describe and show how to run the tests with code examples.

## How to use?
If people like your project they’ll want to learn how they can use it. To do so include step by step guide to use your project.

### Database Setup
Mongodb needs to be running for the app to work:
`$ brew services run mongodb-community`

To check it's working:
`$ brew services list`

To Stop:
`$ brew services stop mongodb-community`

## Contribute

Let people know how they can contribute into your project. A [contributing guideline](https://github.com/zulip/zulip-electron/blob/master/CONTRIBUTING.md) will be a big plus.

## Credits
Give proper credits. This could be a link to any repo which inspired you to build this project, any blogposts or links to people who contrbuted in this project.

#### Anything else that seems useful

## License
A short snippet describing the license (MIT, Apache etc)

MIT © [Yourname]()
