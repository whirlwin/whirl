var whirl = (function() {
  "use strict";

  function newClass(namespace, body) {
    if (checkArguments(namespace, body)) {
      console.log('good');
    }
  }

  function checkArguments(namespace, body) {
    var valid = true;


    // Local functions ---------------------------------------------------------

    function invalidate(message) {
      valid = false;
      console.log(message);
    }

    function checkNamespace(namespace) {
      if (!/^\w+(\.\w+)*$/.test(namespace)) {
        invalidate('Please provide a valid namespace. E.g. foo.bar.baz');
      }

      else if (window[namespace] != undefined) {
        invalidate('The namespace is already taken');
      }
    }

    function createClass(namespace) {
      var identifiers = namespace.split('.');
    }


    // Checking ----------------------------------------------------------------

    if (namespace == undefined || body == undefined) {
      invalidate('Invalid arguments. The syntax for invoking newClass is: ' +
        'whirl.newClass(namespace, body())');
    }

    else if (checkNamespace(namespace)) {}

    else {
      createClass(namespace);
    }


    return valid;
  }

  return {
    newClass: newClass
  }

})();
