# A starter webpack project for React

This is a starter project that uses webpack to transpile and bundle ES6 React code. To use, consider these steps:

- Use the template button to duplicate this repo
- Name your repo according to the app you're building

```sh
git clone https://github.com/[your-account]/[your-app].git
cd [your-app] && npm i
```

To start the development server with a watcher that rebuilds your code, run `npm run dev`. The assets built by webpack are placed in `server/public`. This folder is defined as a static folder in an Express.js server.

Additional components should be placed in `client/components`.

Key needs to track:

- which note it represents
- whether it is white or black
- isPlaying

Piano needs to track:

- render 12 keys
- track input
- play notes
