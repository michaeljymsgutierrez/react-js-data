/* Model Definition
 * This will map api data to main store
 *
 */

this.reactData.model({
  type: "users",

  profile: { belongsTo: "profile" },
  addresses: { hasMany: "address" },

  firstName: "string",
  lastName: "string",
  birthDate: "date",
  mobileNumber: "number",
  employmentStatus: "boolean"
});
