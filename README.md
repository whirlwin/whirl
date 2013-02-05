whirl.js
========

Namespaces in JavaScript made easy

---

Getting started
---------------

1. Download [whirl.js](https://raw.github.com/whirlwin/whirl/master/whirl.js)

2. Create a class

    whirl.newClass('my.own.namespace', function() {

      // Create methods to expose
      function getGreeting() {
        return 'Hello!';
      }

      return { getGreeting: getGreeting };
    }
