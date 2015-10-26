# Node.js Vanillacoin Client

vanillacoin-node is a Vanillacoin client for Node.js. It is a fork of the excellent countable's Dogecoin Client (https://github.com/countable/node-dogecoin) intended for use with Vanillacoin.

*Basic example:*
Install it from npmjs:
~~~
ñpm install vanillacoin-node
~~~

Create a test.js file:
~~~js
var vanillacoin = require('vanillacoin-node')()

vanillacoin.auth('user', '')

vanillacoin.getInfo(function() {
    console.log(arguments);
})
~~~

Test !
~~~
node test.js
~~~