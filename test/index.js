"use strict";

(function() {
  const global = window || self;

  // Configuration here
  const _config = {
    namespace: null,
    host: window.location.origin
  };

  // Namespace setter & getter
  const _namespace = {
    setNamespace: function(namespace) {
      _config.namespace = namespace;
    },

    getNamespace: function() {
      return _config.namespace;
    }
  };

  // Host setter & getter
  const _host = {
    setHost: function(host) {
      _config.host = host;
    },

    getHost: function() {
      return _config.host;
    }
  };

  // AJAX Private
  const _ajax = function(options) {
    console.log(options);
  };

  const _reactData = {
    setNamespace: _namespace.setNamespace,
    getNamespace: _namespace.getNamespace,

    setHost: _host.setHost,
    getHost: _host.getHost,

    store: {
      collections: {},
      schemas: {},
      query: function(type, args) {
        return _ajax({ type, args });
        //console.log(type, args);
      }
    },

    model: function(schema) {
      // Model attribute types
      // - string
      // - number
      // - boolean
      // - date
      // Relationship
      // - hasMany
      // - belongsTo

      if (typeof schema.type === "string") {
        this.store.collections[schema.type] = [];
        this.store.schemas[schema.type] = schema;
      }
    }
  };

  if (typeof global !== undefined) {
    global.reactData = _reactData;
  }
})();
