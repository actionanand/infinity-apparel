# Infinity Apparel

It's react based online clothing shop app(infinity-apparel).

## Update for CRA v4.0.0+ and React 17+
Create React App and the React team have changed the default template that comes with the base react project scaffolding!
What this means is that it no longer ships with a `service-worker.js` file

### Creating React App with PWA (including `service-worker.js` file)

```bash
npx create-react-app infinity-apparel --template cra-template-pwa
```

### Installing `Node-Sass`

1. Install node-sass
```bash
yarn add node-sass
```
2. Remove `yarn.lock` or `package-lock.json` and `node_modules` folder to *resolve react-scripts and babel jest version conflict*
```bash
rm -rf yarn.lock
rm -rf node_modules/
```

## Resources

All the necessary resources related to react are included below

### UI Library

1. [React Desktop](https://reactdesktop.js.org/ "React Desktop")
1. [React Blessed](https://github.com/Yomguithereal/react-blessed "React Blessed - GitHub")
1. [React 360](https://github.com/facebookarchive/react-360 "React 360 - GitHub")
1. [React CRA - Docs](https://reactjs.org/docs/create-a-new-react-app.html "React - Create React App - Docs")

### CSS

1. [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
1. [Grid By Example](https://gridbyexample.com/what/)
1. [Cubic Bezier](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function "Cubic Bezier - MDN")
1. [Styled Component](https://styled-components.com/ "Styled Component - NPM")

### Node Packages

1. [Node Sass](https://www.npmjs.com/package/node-sass "Node Sass")
1. [React Router Dom](https://www.npmjs.com/package/react-router-dom "React Router Dom - NPM Pkg")
1. [Firebase](https://www.npmjs.com/package/firebase "Firebase NPM")
1. [Redux](https://www.npmjs.com/package/redux)
1. [React-Redux](https://www.npmjs.com/package/react-redux)
1. [Redux-logger](https://www.npmjs.com/package/redux-logger)
1. [Reselect (Memoization ~ ~ ~ Caching lib)](https://www.npmjs.com/package/reselect "Memoization NPM lib - reselect")
1. [Redux Persist](https://www.npmjs.com/package/redux-persist "Redux Persist")
1. [lodash.memoize](https://www.npmjs.com/package/lodash.memoize "lodash.memoize")
1. [React Stripe Checkout](https://www.npmjs.com/package/react-stripe-checkout "React Stripe Checkout - NPM")
1. [Redux Thunk](https://www.npmjs.com/package/redux-thunk)
1. [Redux Saga](https://www.npmjs.com/package/redux-saga "redux saga")
1. [Stripe Node js Lib](https://www.npmjs.com/package/stripe "Stripe Node js Lib")
1. [Axios - npm](https://www.npmjs.com/package/axios "Axios - npm")
1. [Fetch Post Doc](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options "Fetch api - post document")
1. [GZip - compression](https://www.npmjs.com/package/compression "GZip - compression npm")

### Redux

1. [Connect docs](https://react-redux.js.org/api/connect)

### React Study - Miscellaneous

1. [React Lifecycle Methods Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ "React Lifecycle Methods Diagram")
1. [React - setState docs](https://reactjs.org/docs/react-component.html#setstate "React - setState docs")
1. [HTML Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events "HTML Events")
1. [React SyntheticEvent](https://reactjs.org/docs/events.html "React SyntheticEvent")
1. [Object Destructuring - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring "Object Destructuring")
1. [Events Bindingin React](https://reactjs.org/docs/handling-events.html "Handling Events in React")
1. [React Router Dom - Docs](https://reactrouter.com/web/guides/quick-start "React Router Dom - Docs")
1. [Adding Images, Fonts, and Files](https://create-react-app.dev/docs/adding-images-fonts-and-files/ "Adding Images, Fonts, and Files in react app")

### Miscellaneous

1. [React Sandbox](https://codesandbox.io/s/new)
1. [JSON Placeholder - users](https://jsonplaceholder.typicode.com/users "JSON Placeholder - users")
1. [Robohash - Image API](https://robohash.org/1?set=set2)
1. [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en "React Developer Tools - Chrome Extension")
1. [Profiler](https://reactjs.org/docs/profiler.html#usage "Profiler Official doc")
1. [React - unPkg (UMD Build)](https://unpkg.com/react@16.8.6/umd/react.development.js "React - unPkg react@16.8.6")
1. [React DOM - unPkg (UMD Build)](https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js "React DOM - unPkg react-dom@16.8.6")
1. [UTF-8 Wingdings](https://www.w3schools.com/charsets/ref_utf_dingbats.asp "UTF-8 Wingdings - w3schools")
1. [Stripe JS Doc](https://stripe.com/docs/stripe-js "Stripe JS Doc")
1. [⚛️ Heroku Buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack "⚛️ Heroku Buildpack for create-react-app: static hosting for React.js web apps")
1. [Firebase Batch Doc](https://firebase.google.com/docs/firestore/manage-data/transactions "Firebase Batch Doc")
1. [Generator Function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*, "Generator Function* - mdn")
1. [Media Query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media "Media Query - mdn")
1. [Cheatsheet - css grid](https://css-tricks.com/snippets/css/complete-guide-grid/ "A Complete Guide to Grid - CSS Tricks")

## Set your stripe publishable key 

Set the `publishableKey` variable in the `stripe-button.component.jsx` with your own publishable key from the stripe dashboard.

![alt text](https://i.ibb.co/djQTmVF/Screen-Shot-2019-07-01-at-2-18-50-AM.png "image to publishable key")

## Things to set before you deploy

Remember to add a file called `.env` to the root folder! In that `.env` file remember to add a `STRIPE_SECRET_KEY` value equal to your own secret key from your stripe dashboard. You can find it in the same place where you found your publishable key in the developers tab under api keys. You will have to enter the password in to reveal it! 

![alt text](https://i.ibb.co/wpLx8Lh/Screen-Shot-2019-07-01-at-2-26-26-AM.png "image to secret key")

## Set to an existing Heroku app

To set to an existing Heroku app you already have deployed, you need to know the name of the app you want to deploy to. To see a list of all the apps you currently have on Heroku:

```bash
heroku apps
```

Copy the name of the app you want to connect the project to, then run:

```bash
heroku git:remote -a <PASTE_YOUR_APP_NAME_HERE>
```

And now you'll have your repo connected to the heroku app under the git remote name `heroku`.

If the Heroku app you connected was deploying just a create-react-app project from earlier in the lesson, you will need to remove the `mars/create-react-app-buildpack` buildpack first. You can check if you have this buildpack by running:

```bash
heroku buildpacks
```

Which will list any buildpacks you currently have, if you see `mars/create-react-app-buildpack` in the list, you can remove it by running:

```bash
heroku buildpacks:remove mars/create-react-app-buildpack
```

Then skip to the bottom of this article to see what to do next!


## To create a new Heroku app

Create a new Heroku project by typing in your terminal:

```bash
heroku create
```

This will create a new Heroku project for you. Then run:

```bash
git remote -v
```

You should see heroku `https://git.heroku.com/<RANDOMLY_GENERATED_NAME_OF_YOUR_APP>` in the list. This means you have successfully connected your project to the newly created Heroku app under the git remote of `heroku`.


## Deploying to Heroku

Before we deploy, you also need to set a config variable of `STRIPE_SECRET_KEY` to the same secret key value from your stripe dashboard, the same one in your `.env` file. The `.env` file is only for local development, in order for our heroku production app to have access to this secret key, we add it to our Heroku projects config variables by typing:

```bash
heroku config:set STRIPE_SECRET_KEY=<YOUR_STRIPE_SECRET_KEY>
```

After that, you can deploy to heroku by running:

```git
git push heroku master
```

You will see this warning message if you are pushing to an existing app:

```git
! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://git.heroku.com/hasura-crwn-clothing.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

This is because we are pushing to an existing app that was deploying an entirely different repository from what we have now. Simply run:

```git
git push heroku master --force
```

This will overwrite the existing Heroku app with our new code.


## Open our Heroku project

After heroku finishes building our project, we can simply run:

```bash
heroku open
```

This will open up our browser and take us to our newly deployed Heroku project!