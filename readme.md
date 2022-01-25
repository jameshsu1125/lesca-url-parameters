[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/) [![npm](https://img.shields.io/badge/npm-Jameshsu1125-red)](https://www.npmjs.com/~jameshsu1125)

# Installation

```sh
npm install lesca-url-parameters --save
```

# Demo

[Live Demo](https://jameshsu1125.github.io/lesca-url-parameters/)

# Usage

```javascript
import QueryString from 'lesca-url-parameters';

// url = "https://www.example.com/?name=James&age=40&birthday=1981";
const name = QueryString.get('name'); // James
const age = QueryString.get('age'); // 40
const birthday = QueryString.get('birthday'); // 1981
```

# Methods

|    method    |   options   |       description        | default |
| :----------: | :---------: | :----------------------: | ------: |
|  .get(key)   | key[string] |   get url value by key   |         |
| .remove(key) | key[string] | get url after remove key |         |
|    root()    |             |    get html file root    |         |
|    file()    |             |      get html file       |         |
