![Kali](./images/logo.svg)

Made with ❤️ by [KALI](https://kali.day/)

# Kali UI

Kali's specialized component library. Loosely based on React Native Paper.

### Table of Contents

- [Kali UI](#kali-ui)
  - [Table of Contents](#table-of-contents)
  - [What is Kali UI?](#what-is-kali-ui)
  - [Project Overview](#project-overview)
    - [Folder Structure:](#folder-structure)
    - [Technologies](#technologies)
      - [Frameworks \& Libraries](#frameworks--libraries)
      - [Data Management](#data-management)
      - [Form Handling](#form-handling)
      - [Device Interaction](#device-interaction)
      - [Third-Party Services](#third-party-services)
      - [Development Tools](#development-tools)
    - [Integrating Everything Together](#integrating-everything-together)
  - [Quickstart:](#quickstart)
  - [Linking](#linking)

## What is Kali UI?

Kali UI is a monorepo that contains both design system utilities tailored for our mobile marketplace and our mobile marketplace itself. features modular and reusable UI components to speed up the development process and maintain a consistent design.

We divided our app into two main workspaces:

- `@kali/ui` - Library that contains all the UI components and styles used in our mobile marketplace.

- `@kali/kali-marketplace` - Our mobile marketplace application, leveraging the `@kali/ui` library directly from the monorepo.

See [the `ui` package readme](./packages/ui/README.md) for details.

see [the `kali-marketplace` package readme](./kali/README.md) for details.

## Project Overview

The repository runs a lerna/monorepo setup that consist in 2 workspaces:
**kali** and **packages**, where **packages** is a collection of design system utilities that build into the design system library (`@kali/ui`) and **kali** is the mobile marketplace application that uses the design system library.

Said that, the workspaces are divided into the following structure:

- **/kali:** houses our mobile marketplace application, which consumes the `@kali/ui` library.
- **/packages/core:** Non-native, javascript components go here. These are components that work perfectly across web, ios and android without any adjustments
- **/packages/native:** Native components that rely on expo/react-native modules likes `expo-av` and `@expo/vector-icons`. This houses our Icon components
- **/packages/ui:** pulls in everything from `@kali/core` and `@kali/native` and re-exports it. This is what any user will install to use this Library

- **/packages/types:** Shared typescript types.

**Chances are, you'll spend most of your time in `/kali`**

### Folder Structure:

```
kali-expo
├── packages
│   ├── core
│   |   ├── src
|   |   |   ├── components
|   |   |   ├── interfaces
|   |   |   ├── styles
|   |   |   └── index.ts
│   |   ├── package.json
│   |   ├── babel.config.js
│   |   ├── jest-setup.js
│   |   ├── tsconfig.json
│   |   └── README.md
│   ├── native
│   |   ├── src
|   |   |   ├── components
|   |   |   └── index.ts
|   |   ├── package.json
│   |   ├── babel.config.js
│   |   ├── README.md
│   |   └── tsconfig.json
│   ├── types
│   |   ├── src
|   |   |   └── index.ts
|   │   ├── README.md
|   │   ├── package.json
|   │   ├── tsconfig.json
|   │   └── babel.config.js
│   └── ui
│       ├── src
|       |   └──  index.ts
|       ├── package.json
|       ├── tsconfig.json
|       └── README.md
├── scripts
├── kali
|   ├── app
|   |   ├── auth
|   |   |   ├── _layout
|   |   |   ├── email
|   |   |   ├── login
|   |   |   ├── register
|   |   |   ├── recovery
|   |   |   ├── reset
|   |   |   └── providers
|   |   ├── onboarding
|   |   |   ├── _layout
|   |   |   ├── consistency
|   |   |   ├── goal
|   |   |   ├── name
|   |   |   ├── notifications
|   |   |   ├── points
|   |   |   ├── steps
|   |   |   └── track
|   |   └── (tabs)
|   |       ├── _layout
|   |       ├── profile
|   |       |   ├── goal
|   |       |   ├── settings
|   |       |   ├── index
|   |       |   ├── permissions
|   |       |   └── edit
|   |       ├── home
|   |       └── activity
|   ├── components
|   ├── config
|   ├── themes
|   ├── package.json
|   ├── babel.config.js
|   ├── app.json
|   ├── tsconfig.json
|   └── README.md
├── images
├── package.json
├── lerna.json
└── tsconfig.json
```

### Technologies

The combination of these technologies offers a solid foundation for building scalable, maintainable, and feature-rich mobile applications. Here’s how they integrate together:

#### Frameworks & Libraries

| Technology                                                | Purpose                         | Advantages                           |
| --------------------------------------------------------- | ------------------------------- | ------------------------------------ |
| [React Native](https://reactnative.dev/)                  | Cross-platform mobile framework | Single codebase, large community     |
| [Expo](https://expo.io/)                                  | Simplifies RN development       | Easy setup, quick updates            |
| [Expo Router](https://docs.expo.dev/router/introduction/) | Routing library                 | Declarative navigation, deep linking |

#### Data Management

| Technology                                       | Purpose                   | Advantages                                    |
| ------------------------------------------------ | ------------------------- | --------------------------------------------- |
| [React Query](https://react-query.tanstack.com/) | Data fetching and caching | Simplifies async operations, powerful caching |
| [Jotai](https://docs.pmnd.rs/jotai/introduction) | State management          | Fine-grained reactivity, minimalistic API     |

#### Form Handling

| Technology                                      | Purpose                   | Advantages                            |
| ----------------------------------------------- | ------------------------- | ------------------------------------- |
| [React Hook Form](https://react-hook-form.com/) | Form state and validation | Minimal re-renders, robust validation |

#### Device Interaction

| Technology                                                         | Purpose            | Advantages                                    |
| ------------------------------------------------------------------ | ------------------ | --------------------------------------------- |
| [Expo Sensors](https://docs.expo.dev/versions/latest/sdk/sensors/) | Device sensor APIs | Simplified sensor integration, cross-platform |

#### Third-Party Services

| Technology                                                                     | Purpose            | Advantages                         |
| ------------------------------------------------------------------------------ | ------------------ | ---------------------------------- |
| [Stripe](https://stripe.com/docs)                                              | Payment processing | Secure transactions, extensive API |
| [Supabase](https://supabase.io/)                                               | Backend services   | Real-time, robust auth/storage     |
| [Expo Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/) | Push notifications | Reliable delivery, cross-platform  |

#### Development Tools

| Technology                                                                                          | Purpose             | Advantages                                |
| --------------------------------------------------------------------------------------------------- | ------------------- | ----------------------------------------- |
| [Lerna](https://lerna.js.org/)                                                                      | Monorepo management | Streamlined dependencies, CI/CD           |
| [Yarn](https://yarnpkg.com/)                                                                        | Package management  | Fast installs, deterministic resolution   |
| [TypeScript](https://www.typescriptlang.org/)                                                       | Static typing       | Early error detection, better refactoring |
| [Jest](https://jestjs.io/) and [RTL](https://testing-library.com/docs/react-testing-library/intro/) | Testing             | Comprehensive, encourages best practices  |
| [Metro](https://facebook.github.io/metro/)                                                          | Bundling            | Fast, efficient code splitting            |
| [Babel](https://babeljs.io/)                                                                        | Transpilation       | Compatibility with latest JS features     |
| [ESLint](https://eslint.org/)                                                                       | Linter              | Improved readability, consistent style    |
| [Prettier](https://prettier.io/)                                                                    | Code Formatter      | Improved code formatting                  |
| [Husky](https://typicode.github.io/husky/)                                                          | Git Hooks           | Automates checks, enforces standards      |
| [Commitlint](https://commitlint.js.org/)                                                            | Commit Linter       | Enforces commit message conventions       |
| [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)                              | Commit Standard     | Standardized commit message format        |

### Integrating Everything Together

Our technology stack is integrated to promote rapid development while ensuring code quality and maintainability. Here’s how each piece fits:

1. **Development Environment**: Tools like Expo, Metro, Babel, and Yarn create a cohesive environment. Features like hot reloading and fast builds streamline the development process.

2. **Code Quality**: TypeScript, ESLint, Prettier, Husky, and Commitlint ensure high standards, reducing bugs and improving readability.

3. **State and Data Handling**: Jotai and React Query manage state and server-state efficiently, ensuring data sync and responsive UI while reusing state logic.

4. **UI Library**: The @kali/ui package leverages React Native and Expo components for a consistent, reusable UI library.

5. **Mobile Features**: Expo Sensors, Expo Notifications, and third-party integrations like Stripe and Supabase add essential functionality.

## Quickstart:

Getting started with the project involves cloning the repository, installing dependencies, and running the application.

```sh
git clone https://github.com/jeanc18rlos/kali-expo && cd kali-expo
git fetch && git checkout 51
yarn && yarn bootstrap && yarn build
yarn kali start -c
```

Any changes in the `packages/` typescript files should be automatically picked
up by the Metro bundler and reflected in the kali application.

Please read the [contributing guide](CONTRIBUTING.md) before making
a pull-request and to understand the full development flow

## Linking

If you want to dynamically link these packages into a project using `yarn link`,
make sure to run `yarn watch <packagename>` from the root folder so that lerna
can properly cross link everything, then `yarn link` from the particular package
directory (not the root!) you are interested in.

So if using `@kali/core` in a create-react-app, this would look like:

```console
# In kali-expo/
$ yarn install
$ yarn watch core

# In ./packages/core/
$ yarn link

# In create-react-app project root
$ <shutdown any running create-react-app dev mode>
$ yarn add @kali/core # only if this is the first time using it
$ yarn install
$ yarn link @kali/core
$ yarn start
```
