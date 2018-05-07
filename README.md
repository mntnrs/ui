# UI

##### MNTNR.Systems User Interfaces

This is a multi-package repo that includes all component, web, and
native UI code written with JavaScript package manager compatible
languages.

## Developing

The repo is laid out as a multi-package repo. This is partially so we
don't have to publish anything to NPM if we don't want to take on the
additional burden yet. Since this is a multi-package repo, we use
[boltpkg][boltpkg] to handle development.

* `./packages/*` contains design system packages and other re-usable
  logic.
* `./ui/*` contains full user interfaces. The native app, blogs,
  marketing sites, and the web application.

[boltpkg]: https://github.com/boltpkg/bolt
