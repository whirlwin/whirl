var whirl = (function() {
  "use strict";

  function ns(namespace) {
    if (namespace == undefined) {
      console.log('Please provide a namespace');
    }

    else if (!/^\w+(\.\w+)*$/.test(namespace)) {
      console.log('Illegal namespace. Format: foo.bar.baz');
    }
  }

  return {
    ns: ns
  }

})();
