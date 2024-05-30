![Kali](./images/logo.svg)

Made with ❤️ by [KALI](https://kali.day/)

# Contributing

Kali uses a monorepo structure to manage its packages. The monorepo contains design system utilities that builds into bundled `@kali/ui` package and the `@kali/marketplace-app` App that uses the `@kali/ui` package to build the Kali marketplace app.

The `@kali/ui` package is the one we install in our `@kali/marketplace-app`. It pulls in everything from `@kali/core` and `@kali/native` and re-exports it.

## Overview

Since we are using a monorepo, we need to distinguish between the different packages within this monorepo setup that builds Kali. The repositories are:

- **@kali/ui:** The main package that contains the core functionality of the Kali SDK, under the `package` directory.
- **@kali/kali-marketplace:** The main package that contains the core functionality of the Kali App, under the `kali` directory.

### Branching Strategy

- **Main Branches:** We have only one main branch: `dev`.

  - `dev`: The `dev` contains the latest stable version of the `@kali/ui` library and the `@kali/kali-marketplace` app.
    - Contains the latest Expo SDK version supported.
    - Contains the latest version of the `@kali/ui` library.
    - Contains the latest version of the `@kali/kali-marketplace` app.

- **Feature branches:** We have feature branches for each new feature or bug fix. The feature branches are named as `feature/<feature-name>`.

### Run the project

To get started with the project, run `yarn bootstrap` in the root directory to install the required dependencies for each package:

```sh
yarn bootstrap
```

While targeting `@kali/ui` on dev, you should run the [kali app](/kali/) to test your changes.

To start the packager:

```sh

yarn kali start -c

```

Make sure your code passes TypeScript and ESLint. Run the following to verify:

```sh
yarn typescript
yarn lint
```

To fix formatting errors, run the following:

```sh
yarn lint --fix
```

Remember to add tests for your change if possible. Run the unit tests by:

```sh
yarn test
```

### Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

- `fix`: bug fixes, e.g. fix crash due to deprecated method.
- `feat`: new features, e.g. add new method to the module.
- `refactor`: code refactor, e.g. migrate from class components to hooks.
- `docs`: changes into documentation, e.g. add usage example for the module..
- `test`: adding or updating tests, eg add integration tests using detox.
- `chore`: tooling changes, e.g. change CI config.

Our pre-commit hooks verify that your commit message matches this format when committing.

### Linting and tests

[ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [TypeScript](https://www.typescriptlang.org/)

We use [TypeScript](https://www.typescriptlang.org/) for type checking, [ESLint](https://eslint.org/) with [Prettier](https://prettier.io/) for linting and formatting the code, and [Jest](https://jestjs.io/) for testing.

Our pre-commit hooks verify that the linter and tests pass when committing.

### Scripts

The `package.json` file contains various scripts for common tasks:

- `yarn bootstrap`: setup project by installing all dependencies and pods.
- `yarn typescript`: type-check files with TypeScript.
- `yarn lint`: lint files with ESLint.
- `yarn test`: run unit tests with Jest.
- `yarn kali start`: start the Metro server for the kali app.
- `yarn kali android`: run the kali app on Android.
- `yarn kali ios`: run the kali app on iOS.

### Sending a pull request

When you're sending a pull request:

- Prefer small pull requests focused on one change.
- Verify that linters and tests are passing.
- Review the documentation to make sure it looks good.
- Follow the pull request template when opening a pull request.
- For pull requests that change the API or implementation, discuss with maintainers first by opening an issue.

### Creating a new feature on our design system

To add your first feature to the design system, follow these steps:

Typically your PR Message should look like [this](./docs/PR_TEMPLATE.md)

## Upgrading Expo SDK Modules

To upgrade Expo SDK modules, follow these steps:

1. **Run Upgrade Script:** Execute the script `node scripts/upgrade-expo-sdk-packages.js <expo-sdk-version>`, where `<expo-sdk-version>` is the version number from Expo.

2. **Find Correct Expo Version:** Expo maintains a file called `bundledNativeModules.json` that lists all the native modules for a specific SDK version. You can find the correct version via the URL: `https://github.com/expo/expo/blob/sdk-<expo-sdk-version>/packages/expo/bundledNativeModules.json`.

```sh

# Example command to upgrade to Expo SDK version 46

node scripts/upgrade-expo-sdk-packages.js 46

```

## Get Reviewed

After creating the pull request, wait for other members to review your changes. If there are any changes requested, make the changes and push them to the same branch. The pull request will be updated automatically and so the preview build will be updated.

**Approval and Merge:** After your Pull Request is approved, it will be merged into the corresponding numeric branch (e.g., `51`). The changes will now be part of the current `51` branch release.

### Post-Merge Steps

**Testin in Staging:** Test your changes in the staging environment to ensure that everything works as expected.

### Summary

- **Branch for PR:** Create PRs against the corresponding branch (e.g., `dev`).

- **Feedback Loop:** Make requested changes and update the PR.

- **Post-Approval:** Merge into the dev branch and subsequently create a PR to merge into `dev`.

By following these steps, we ensure a smooth review process and maintain a consistent development and staging environment.
