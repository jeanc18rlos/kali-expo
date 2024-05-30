![Kali](../images/logo.svg)

Made with ❤️ by [KALI](https://kali.day/)

# Kali Marketplace

## Overview

Kali Marketplace is a mobile application that tracks user steps and rewards them with Kali coins. Users can use these coins to get discounts on items from the marketplace.

### Features

- **Step Tracking:** The app tracks the user's steps using the device's accelerometer.
- **Haptic Feedback:** The app provides haptic feedback to the user when they perform certain actions.
- **Dark Mode:** The app supports dark mode for users who prefer a darker interface.
- **Push Notifications:** The app sends push notifications to engage users and keep them informed about their progress.
- **Declarative Routing:** The app uses expo router to manage navigation between screens, allowing to group routes, configure layouts, and pass granular state to screens.
- **Localization:** The app supports multiple languages and locales, allowing users to switch between languages easily.
- **Offline Support:** The app works offline and syncs data with the server when the user is back online.
- **Accessibility:** The app is designed to be accessible to users with disabilities, supporting screen readers and other assistive technologies.
- **Custom Themes:** The app allows users to customize the app's appearance by choosing from a selection of themes.
- **User Authentication:** The app uses Supabase authentication to securely authenticate users and manage user sessions.
- **Atomic State Management:** The app uses Jotai for atomic state management, allowing to create and compose state atoms that can be shared across components.
- **Stripe Integration:** The app integrates with Stripe to process payments and manage subscriptions.
- **Custom Pickers and Modals:** The app uses custom pickers and modals to provide a consistent user experience across platforms.
- **Phone Picker:** The app uses a custom phone picker to allow users to select their country code and phone number easily.
- **Image Picker:** The app uses a custom image picker to allow users to select images from their device's gallery.
- **Date Picker:** The app uses a custom date picker to allow users to select dates easily.
- **Animations:** The app uses Lottie animations to provide a visually appealing experience to users.
- **Error Boundaries:** The app uses error boundaries to catch JavaScript errors anywhere in the component tree and log those errors.
- **Performance Monitoring:** The app uses Sentry to monitor performance and report crashes in real-time.
- **Analytics:** The app uses Amplitude to track user behavior and measure the impact of new features.
- **Testing:** The app uses Jest and React Testing Library for unit and integration testing, ensuring that the app works as expected.
- **Continuous Integration:** The app uses GitHub Actions for continuous integration, running tests and deploying the app automatically.

## Getting Started

To get started with the project, run `yarn bootstrap` in the root directory to install the required dependencies for each package:

```sh
yarn bootstrap
```

While developing, you should run the [kali app](/kali/) to test your changes.

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

## Contributing

We welcome contributions to Kali Marketplace! To get started, please read our [contributing guidelines](/CONTRIBUTING.md).
