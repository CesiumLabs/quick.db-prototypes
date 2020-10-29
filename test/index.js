const db = require("quick.db");
require("../src/index")(db);

// enables db.startsWith
console.log(db.startsWith("hello", { sort: ".data" }));