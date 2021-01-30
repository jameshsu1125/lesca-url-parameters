[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-url-parameters --save
```

# Usage

```javascript
import { Hash } from 'lesca';

// if url is "https://www.example.com/?name=james&age=18";
console.log(Hash.get('name')); //james
console.log(Hash.get('age')); //18
```

# Methods

| method |     options      | description                                                          | default |
| :----: | :--------------: | :------------------------------------------------------------------- | ------: |
|  Hash  |     get(key)     | https://www.example.com/?name=james => get('name') => return 'james' |         |
|        |   remove(key)    | remove key                                                           |         |
|        | removeAndGo(key) | remove key and href to                                               |         |
|        |      root()      | https://.../folder/success.html => return https://.../folder/        |         |
|        |      file()      | https://.../folder/success.html => return success.html               |         |
