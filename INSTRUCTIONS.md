# React Coding Challenge

- Approach this as you would a new project at work; consider the _organization_, _design_, and _test coverage_ of your code.

- You should also think about aspects such as API _error handling_ or _unexpected responses_.

- You should only spend a few hours on this challenge; we are more interested in how you approach a problem than all the bells and whistles.

- Create a new branch for your changes, then create a new Merge Request from your branch into main so we can review your submission.

- Email <ssteward@rewardsnetwork.com> to let us know when you're finished.

- Our dev team will review your Merge Request and if we like what we see, we'll follow up with you to go over your code in more detail.

- We expect the completed challenge returned no more than 5 business days from when we send it out. Please email us if you need more time.

## Problem

You and your friends are huge movie buffs and are planning a trip to San Francisco to see all the neatest movie filming locations. Your friends want to pick which spots to visit on the fly; as a developer, you elect to make an app so the relevant data can come on vacation, too. To help your friends decide where to go, you will:

- Allow them to sort by **release year** either ascending or descending
- Allow them to search by **title** with partial matching

Nothing is better than live user-testing, so you resolve to bring your laptop with you on the trip. You know, just in case.

### Directions

We have setup the API call to [Film Locations in San Francisco](https://data.sfgov.org/Arts-Culture-and-Recreation-/Film-Locations-in-San-Francisco/yitu-d5am), so the data is already available.

Outside of the listed requirements, the UI/UX is totally up to you. If you like, get creative and add additional features! We have also provided basic styles, but they can always change if inspiration strikes you.

We never put a good dev down, so nothing is off-limits; whatever you do, we will want you to explain your thought process.

## Criteria

We will be reviewing your **architecture** decisions, the **efficiency** of your algorithms / data structures, and the **readability** of your code.

A couple specifics we will be looking for:

- Console warnings are eliminated (or at least limited)
- All components have sufficient unit-test coverage
- All unit-tests pass

In regards to plugins, we tend to prefer in-house solutions because of various constraints. That said, go ahead and use whatever you like; again, be prepared to explain your decision.

## Getting started

We recommend [using `yarn`](https://yarnpkg.com/en/docs/install).

This project was created using Node v15.14.0; you may run into issues with an older version.

### Run the app

```
yarn && yarn start
```

This will install all the necessary packages and open [http://localhost:8080](http://localhost:8080) automatically in your browser.

The page will reload if you make edits.  
You will see any errors in the console.

After you have done this the first time, you only need to run `yarn start`.

### Test the app

```
yarn test
```

Launches the test runner in the interactive watch mode.

### Documentation

Feel free to check out the [React documentation](https://reactjs.org/) and / or the [TypeScript documentation](https://www.typescriptlang.org/docs/home.html).
