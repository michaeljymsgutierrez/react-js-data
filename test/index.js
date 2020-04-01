"use strict";

(function() {
  const global = window || self;

  const reactData = {
    model: function(schema) {
      /* Model attribute types
       * - string
       * - number
       * - boolean
       * - date
       */
      console.log(schema);
    }
  };

  if (typeof global !== undefined) {
    global.reactData = reactData;
  }
})();
