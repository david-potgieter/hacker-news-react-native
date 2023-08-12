# Hacker News App

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Acknowledgements](#acknowledgements)

### Important Versions Used:

- react: "18.2.0"
- react-native: "0.72.3"
- typescript: "5.1.6"

### Notable Tools Used:

#### FlashList

[FlashList](https://shopify.github.io/flash-list/) is a package from Shopify to replace the standard FlatList. It's much more performant, and although having most of the same props, it speeds up the app and is a breeze to work with.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed React Native as per [here](https://reactnative.dev/docs/environment-setup)
- You have installed Maestro as per [here](https://maestro.mobile.dev/getting-started/installing-maestro)

## Installation

1. Clone the repo `git clone repo`
2. Checkout the working branch `git checkout main`
3. Change directory and install all deps and tools: `cd app && yarn get-started`
4. Update the needed vars:

   - Inside `package.json` update the simulator(s) to match your platform. (`test:maestro:android` and `test:maestro:ios`)

## Usage

Running the app

Individually:

- `yarn react-native run-android`
- `yarn react-native run-ios`

From a single Metro instance:

- `yarn start`
- Pressing `i` for iOS, or `a` for Android inside the Metro Terminal

## Tests

To run the tests for the helper functions, simply run:

- `yarn test`

### Integration Tests

Maestro tests are split into two for each platform, and can be run from the command line using:

- `yarn test:maestro:android`
- `yarn test:maestro:ios`

## Troubleshooting
