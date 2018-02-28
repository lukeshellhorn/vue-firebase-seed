# vue-firebase-seed
This is a quick start with basic crud for a vue/firebase web app. Just add firebase key to get started.

> vue firebase seed
## Open up firebase.js and replace the placeholder key with your own key
This key can be obtained when you make a new project in the firebase console.

``` bash
# const app = initializeApp({
    apiKey: "[key]",
    authDomain: "[app domain].firebaseapp.com",
    databaseURL: "[db url].firebaseio.com",
    projectId: "[project id]",
    storageBucket: "[bucket].appspot.com",
    messagingSenderId: "[sender id]"
  });
```


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
