oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g unacceptacles
$ dotdigital COMMAND
running command...
$ dotdigital (--version)
unacceptacles/0.0.0 darwin-arm64 node-v16.18.0
$ dotdigital --help [COMMAND]
USAGE
  $ dotdigital COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dotdigital hello PERSON`](#dotdigital-hello-person)
* [`dotdigital hello world`](#dotdigital-hello-world)
* [`dotdigital help [COMMAND]`](#dotdigital-help-command)
* [`dotdigital plugins`](#dotdigital-plugins)
* [`dotdigital plugins:install PLUGIN...`](#dotdigital-pluginsinstall-plugin)
* [`dotdigital plugins:inspect PLUGIN...`](#dotdigital-pluginsinspect-plugin)
* [`dotdigital plugins:install PLUGIN...`](#dotdigital-pluginsinstall-plugin-1)
* [`dotdigital plugins:link PLUGIN`](#dotdigital-pluginslink-plugin)
* [`dotdigital plugins:uninstall PLUGIN...`](#dotdigital-pluginsuninstall-plugin)
* [`dotdigital plugins:uninstall PLUGIN...`](#dotdigital-pluginsuninstall-plugin-1)
* [`dotdigital plugins:uninstall PLUGIN...`](#dotdigital-pluginsuninstall-plugin-2)
* [`dotdigital plugins update`](#dotdigital-plugins-update)

## `dotdigital hello PERSON`

Say hello

```
USAGE
  $ dotdigital hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/sertlab/next-gen-js/blob/v0.0.0/dist/commands/hello/index.ts)_

## `dotdigital hello world`

Say hello world

```
USAGE
  $ dotdigital hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ dotdigital hello world
  hello world! (./src/commands/hello/world.ts)
```

## `dotdigital help [COMMAND]`

Display help for dotdigital.

```
USAGE
  $ dotdigital help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for dotdigital.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.20/src/commands/help.ts)_

## `dotdigital plugins`

List installed plugins.

```
USAGE
  $ dotdigital plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ dotdigital plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.8/src/commands/plugins/index.ts)_

## `dotdigital plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dotdigital plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ dotdigital plugins add

EXAMPLES
  $ dotdigital plugins:install myplugin 

  $ dotdigital plugins:install https://github.com/someuser/someplugin

  $ dotdigital plugins:install someuser/someplugin
```

## `dotdigital plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ dotdigital plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ dotdigital plugins:inspect myplugin
```

## `dotdigital plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dotdigital plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ dotdigital plugins add

EXAMPLES
  $ dotdigital plugins:install myplugin 

  $ dotdigital plugins:install https://github.com/someuser/someplugin

  $ dotdigital plugins:install someuser/someplugin
```

## `dotdigital plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ dotdigital plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ dotdigital plugins:link myplugin
```

## `dotdigital plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dotdigital plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dotdigital plugins unlink
  $ dotdigital plugins remove
```

## `dotdigital plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dotdigital plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dotdigital plugins unlink
  $ dotdigital plugins remove
```

## `dotdigital plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dotdigital plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dotdigital plugins unlink
  $ dotdigital plugins remove
```

## `dotdigital plugins update`

Update installed plugins.

```
USAGE
  $ dotdigital plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
