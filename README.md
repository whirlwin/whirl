whirl.js
========

Namespaces in JavaScript made easy

---

Getting started
---------------

1. Download [whirl.js](https://raw.github.com/whirlwin/whirl/master/whirl.js)

2. Add it to your project

3. Create a class
>     whirl.newClass('my.own.namespace', function() {
>
>       // Private functions
>       function getFoo() { return 'foo'; }
>
>       // Public functions
>       function getBar() { return 'bar'; }
>
>       // Expose only public functions
>       return { getBar: getBar };
>     });

4. Test your class

>     my.own.namespace.getBar(); // Returns 'bar'

Rationale
---------
- **Q:** Why do I need a namespace?

 - **A:** To avoid overwriting other functions unintentionally
  
- **Q:** Why differentiate between so called public and private functions?

 - **A:** To clearly determine which are the core functions
