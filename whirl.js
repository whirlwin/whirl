var whirl = (function() {
  "use strict";

  function newClass(namespace, body) {
    if (checkArguments(namespace, body)) {
      createClass(namespace, body);
    }
  }

  function checkArguments(namespace, body) {
    var valid = true;

    //
    // Local functions ---------------------------------------------------------
    //

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

    //
    // Validation --------------------------------------------------------------
    //

    if (namespace == undefined || body == undefined) {
      invalidate('Invalid arguments. The syntax for invoking newClass is: ' +
        'whirl.newClass(namespace, body())');
    }

    else {
      checkNamespace(namespace);
    }

    return valid;
  }

  return {
    newClass: newClass
  }

  // Recursively creates the objects based on the namespace and exposes
  // the functionality returned from the method body.
  function createClass(namespace, body) {
    var identifiers = namespace.split('.');

    window[identifiers[0]] = (function createObject(array) {
      if(array.length == 0) {
        return body();

      } else {
        var obj = {};
        obj[array[0]] = createObject(array.splice(1));
        return obj;
      }
    })(identifiers);
  }
})();
