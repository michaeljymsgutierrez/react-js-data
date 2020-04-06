"use strict";

(function() {
  const global = window || self;

  /* Namespace Privacy
   *
   */
  const _namespace = {
    namespace: null,

    setNamespace: function(namespace) {
      this.namespace = namespace;
    },

    getNamespace: function() {
      return this.namespace;
    }
  };

  const _reactData = {
    host: window.location.origin,
    setHost: function(host) {
      this.host = host;
    },

    store: {
      collections: {},
      schemas: {},
      query: function(type, args) {
        //console.log(type, args);
      }
    },

    ajax: function(options) {
      //console.log(options);
    },

    model: function(schema) {
      /* Model attribute types
       * - string
       * - number
       * - boolean
       * - date
       * Relationship
       * - hasMany
       * - belongsTo
       */

      if (typeof schema.type === "string") {
        this.store.collections[schema.type] = [];
        this.store.schemas[schema.type] = schema;
      }
    }
  };

  if (typeof global !== undefined) {
    global.reactData = reactData;
  }
})();
