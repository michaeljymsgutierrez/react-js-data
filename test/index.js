"use strict";

(function() {
  const global = window || self;

  const reactData = {
    store: {},
    schema: {},

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

      if (typeof schema.type === "string") {
        this.store[schema.type] = [];
        this.schema[schema.type] = schema;
      }

      console.log(this.store);
      console.log(this.schema);
    }
  };

  if (typeof global !== undefined) {
    global.reactData = reactData;
  }
})();
