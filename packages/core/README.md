![Kali](../../images/logo.svg)

Made with ❤️ by [KALI](https://kali.day/)

# @kali/core

This module contains platform agnostic components used by @kali/ui.

You should look `@kali/ui` if you are just looking to use these components
in your own projects.

This module is consumed by the `ui` module, which injects native dependencies
and re-export the components with those dependencies included for react-native
projects.

It is possible, but not advised, to directly consume components from this module

## Contributing

If you're looking to contribute to components in `@kali/ui` this is usually
the module you're looking for. Checkout [@kali/native](../native/) if you
need to add a module with a native dependency. But please open a PR to discuss
first. It's possible! There's just some gotcha's we should talk through before
you start.

### Note on Dependencies

`@kali/native` can (and should) depend on this module when composing
components to create higher-order functionality, and to share interfaces. This
module should _never_ depend on `@kali/native`, directly or otherwise, as
that will break non-Expo toolchains that expect to be able use `@kali/core`
directly.
