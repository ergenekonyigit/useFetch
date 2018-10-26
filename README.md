# `@rehooks/fetch`

> React hook for fetching json data

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add @rehooks/fetch
```

## Usage

```js
import useFetch from '@rehooks/fetch';

function MyComponent() {
  let value = useFetch('https://api.github.com/repos/ergenekonyigit/nemene');

  // value = {
  //   "id": 115508797,
  //   "node_id": "MDEwOlJlcG9zaXRvcnkxMTU1MDg3OTc=",
  //   "name": "nemene",
  //   "full_name": "ergenekonyigit/nemene",
  //   "private": false,
  //   "owner": {
  //     "login": "ergenekonyigit",
  //     "id": 7110136,
  //     "node_id": "MDQ6VXNlcjcxMTAxMzY=",
  //     "avatar_url": "https://avatars3.githubusercontent.com/u/7110136?v=4",
  //     "gravatar_id": "",
  //     "url": "https://api.github.com/users/ergenekonyigit",
  //     "html_url": "https://github.com/ergenekonyigit",
  //     ...
  // }

  return value.loading ? (
      <div>Loading...</div>
    ) : (
      <pre>{JSON.stringify(value.data, null, 2)}</pre>
    );
}
```
