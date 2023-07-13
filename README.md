# Grow Therapy Assessment

✨ **This workspace has been generated with [Nx build system.](https://nx.dev)** ✨

## Live Demo

The app is deployed to github pages under the `/docs` folder of the main branch, to see the app live go to:

https://grow.javierlerones.dev/

## Description

The wikipedia API allows you to get a list of articles with the most page views for a
specific day:

https://wikitech.wikimedia.org/wiki/Analytics/AQS/Pageviews
https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/2015/10/10

Create a display of the most viewed pages for a specific day based on user inputs

- A user should be able to select a time on a calendar (defaulting to yesterday)
- A user should be able to decide how many results to show (options being 25, 50,
75, 100, 200 default to 100)
- Based on what is selected, a user will see a frontend view that includes the name
of the article, the number of views and the rank.

## Enhancements

I picked allowing the users to search by country, using the separate API endpoint listed in the wikimedia documentation page.

## Start the app

To start the development server run:

```
nx serve grow
```

or 
```
yarn nx serve grow
```
if you don't have nx cli installed globally.

Open your browser and navigate to http://localhost:4200/.


## Testing

To run unit tests run this tasks:

```
nx test
```

You can also run the e2e integration test on headless Cypress with:

```
nx e2e e2e
```

Or if you want to keep the cypress app open and monitor the tests while running:

```
nx e2e e2e --watch
```

And to run the linter:

```
nx lint
```

## Build

To build the app for deployment: 

```
nx build --prod
```


