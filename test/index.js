"use strict";

(function() {
  const global = window || self;

  const reactData = {
    store: {},

    namespace: null,

    host: window.location.origin,
    setHost: function(host) {
      this.host = host;
    },

    model: function(schema) {
      /* Model attribute types
       * - string
       * - number
       * - boolean
       * - date
       */
      console.log(this.store);
      console.log(schema);
    }
  };

  if (typeof global !== undefined) {
    global.reactData = reactData;
  }
})();
