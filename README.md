# Test-O'clock 👨‍🎓

## Intro 🙋‍♂️

This project is a code evaluation for the Company O'Clock.
The goal was to build a currency converter based on http://fixer.io API.

## Intent 👨‍🔧

For this project I chose to focus on builing a small component library and write all styling from scratch.
There is some dependencies for utilities (ClickAwayHandler from materialUI, react-grid-system, popper.js for positioning, react-spring for animations) but all components were written from scratch.

They are available as a UI kit that can be tested in storybook.

## Demo 🚀

App is hosted at : http://rare-ear.surge.sh/

## Stack 🧰

- NX.dev for monorepo
- Typescript
- CSS Modules and LESS a preprocessor
- Prettier
- Jest and testing-library/react
- Cypress
- Redux / redux-saga

## Design 👨‍🎨

I did some very basic wireframing in Figma that can be accessed here : https://www.figma.com/file/OcGt686QhIptKbxLEp4Yj9/OClock-test

## Commands 🕹

### Run the app

`npm run start converter`

### Run the app

`npm run build converter`

### Run app tests

`npm run test converter`

### Run e2e tests

`npm run e2e`

### Run the storybook

`npm run storybook`

### Run component tests

`npm run test components`

# Known issue

When reloading the app on **Firefox**, Fixer API raises an error :

```
Access Restricted - Your current Subscription Plan does not support HTTPS Encryption
```

even tho the call is made as HTTP.

This appears to be caused by Firefox privacy policy.

**Hard reloading (cmd + maj + R) fixes the issue.**
