![Kali](../../images/logo.svg)

Made with ❤️ by [KALI](https://kali.day/)

# @kali/native

Kali UI components with native dependencies that are incompatable with non-expo
build systems, such as `expo-av` or `@expo/vector-icons`.

These components are imported / injected inside the `@kali/ui` library so
that incompatable expo dependencies do not exist in `@kali/core`.

Add new components with such dependecies here.

See [`IconButton.tsx` in `core`](../core/src/components/IconButton.tsx) for an
example of a 'hybrid' component API that allows a native component to be
injected for `ui` and a web-compatible version be injected for `web`.
