/* Model Definition
 * This will map api data to main store
 *
 */

this.reactData.model({
  type: "users",

  profile: { belongsTo: "profiles" },
  addresses: { hasMany: "addresses" },

  firstName: "string",
  lastName: "string",
  birthDate: "date",
  mobileNumber: "number",
  employmentStatus: "boolean"
});
