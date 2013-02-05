var whirl = (function() {
  "use strict";

  function newClass(namespace, body) {
    if (checkArguments(namespace, body)) {
      // Validates
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

      var tmpJson = '';
      var closing = '';

      //window[identifiers[0]] = JSON.parse('{"' + identifiers[1] + '": {"' + identifiers[2] + '":24}}');

      function createObject(o, array) {
      if(array.length === 0) {
        return body;

        } else {
          var obj = {};
          obj[array[0]] = createObject(obj, array.splice(1));
          return obj;
        }
      }

      var a;
      var o = createObject(a, identifiers);

      window[identifiers[0]] = o;

      return;
      for (var i = 1; i < identifiers.length; i++) {
        tmpJson += '{"' + identifiers[i] + '":';
        closing += '}';
      }

      tmpJson += 'null' + closing;

      var x = JSON.parse(tmpJson);

      window[identifiers[0]] = x;

      for (var i in window[identifiers[0]]) {
        //console.log(i);
      }

      /*

      var bd = body();

      //console.log(window[identifiers[0]]);

      var last = null;
      var a = gd(window[identifiers[0]]);
      */

      function gd(obj) {
        for (var i in obj) {
          return obj[i] == null ? obj : gd(obj[i]);
        }
      }
    }


    // Checking ----------------------------------------------------------------

    if (namespace == undefined || body == undefined) {
      invalidate('Invalid arguments. The syntax for invoking newClass is: ' +
        'whirl.newClass(namespace, body())');
    }

    else {
      checkNamespace(namespace);

      if (valid) {
        createClass(namespace);
      }
    }

    return valid;
  }

  return {
    newClass: newClass
  }

})();
