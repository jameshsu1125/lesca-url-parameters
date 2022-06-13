[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![React](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](https://lesscss.org/)
[![React](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![React](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![NPM](https://img.shields.io/badge/DEV-Jameshsu1125-9cf?style=for-the-badge)](https://www.npmjs.com/~jameshsu1125)

# Why use it?

use to pass values by url

#### [Live Demo](https://jameshsu1125.github.io/lesca-url-parameters/)

# Installation

```sh
npm install lesca-url-parameters --save
```

## Usage

```javascript
import QueryString from 'lesca-url-parameters';

// url = "https://www.example.com/?name=James&age=40&birthday=1981";
const name = QueryString.get('name'); // James
const age = QueryString.get('age'); // 40
const birthday = QueryString.get('birthday'); // 1981
```

## Development

### Methods

| method                                 |       description        |    return |
| :------------------------------------- | :----------------------: | --------: |
| .**get**(**key**:_string_):_string_    |   get url value by key   |     value |
| .**remove**(**key**:_string_):_string_ | get url after remove key |       url |
| .**root**()                            |    get html file root    |       url |
| .**file**()                            |      get html file       | file name |

### Features

- maintain if necessary
