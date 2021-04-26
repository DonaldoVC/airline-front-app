# Airline-Front-App

## Installation

``` bash
# go into app's directory
$ cd airline-front-app

# install app's dependencies
$ yarn install
```

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

### Basic usage

``` bash
# dev server with hot reload at http://localhost:3000
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build with minification
$ npm run build
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
Aplication
├── public/                        #static files
│   └── index.html                 #html template
│
├── src/                           #project root
│   ├── actions/                   #actions
│   ├── assets/                    #assets files
│   ├── constants/                 #constants source
│   ├── containers/                #container views source
│   ├── interceptor/               #axios interceptor
│   ├── reducers/                  #reducers source
│   ├── selectors/                 #redux selectors
│   ├── types/                     #types
│   ├── views/                     #views source
│   ├── App.tsx
│   ├── App.test.tsx
│   └── store.ts                   #redux store
│
├── .env                           #environments
├── craco.config.js                #craco config
├── buildspec.yml                  #pipeline configuration
├── taildwind.config.js            #taildwind config
├── tsconfig,json                  #ts configuration
└── package.json
```

## Creators

**Donald VC**
