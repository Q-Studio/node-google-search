# node-google-search

[![Join the chat at https://gitter.im/Q-Studio/node-google-search](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Q-Studio/node-google-search?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
google search for node js


 

## Examples

as below
```js

var google = require('node-google-search');

google.search('Javascript blog',function(json){
  // do something
  console.log(json);

});

```