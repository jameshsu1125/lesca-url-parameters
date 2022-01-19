[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
npm install lesca-url-parameters --save
```

# Usage

```javascript
import QueryString from 'lesca-url-parameters';

// if url is "https://www.example.com/?name=james&age=18";
const name = QueryString.get('name'); // => james
const age = QueryString.get('age'); // => 18
```

# Methods

|    method    |   options   |                          description                          | default |
| :----------: | :---------: | :-----------------------------------------------------------: | ------: |
|  .get(key)   | key[string] |                   get url parameters by key                   |         |
| .remove(key) | key[string] |                   get url after remove key                    |         |
|    root()    |             | https://.../folder/success.html => return https://.../folder/ |         |
|    file()    |             |    https://.../folder/success.html => return success.html     |         |
