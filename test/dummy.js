// Namespace alter/init
this.reactData.setNamespace("api/v1");
// Host alter/init
this.reactData.setHost(
  `${window.location.protocol}//${window.location.hostname}:8081`
);

// Model Definition
// This will map api data to main store
this.reactData.model({
  type: "customer-profiles",

  profile: { belongsTo: "profiles" },
  addresses: { hasMany: "addresses" },

  firstName: "string",
  lastName: "string",
  birthDate: "date",
  mobileNumber: "number",
  employmentStatus: "boolean"
});

// Store query invoke
this.reactData.store.query("customer-profiles", { include: "addresses" });
this.reactData.store.query("customer-profiles", { include: "addresses" });

console.log(this.reactData.store);
