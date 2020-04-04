"use strict";

(function() {
  const global = window || self;

  const reactData = {
    namespace: null,

    host: window.location.origin,
    setHost: function(host) {
      this.host = host;
    },

    store: {
      collections: {},
      schemas: {},
      query: function(type, args) {
        console.log(type, args);
      }
    },

    model: function(schema) {
      /* Model attribute types
       * - string
       * - number
       * - boolean
       * - date
       */

      if (typeof schema.type === "string") {
        this.store.collections[schema.type] = [];
        this.store.schemas[schema.type] = schema;
      }

      console.log(this.store);
    }
  };

  if (typeof global !== undefined) {
    global.reactData = reactData;
  }
})();
