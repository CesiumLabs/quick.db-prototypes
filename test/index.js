const db = require("quick.db");
require("../src/index")(db);

/* ----------------------------------------------------- */

// startsWith
// db.startsWith("someKey", { sort: ".data" });

/* ----------------------------------------------------- */

// pull
// db.set("test_arr", ["user", "developer", "db", "test", "test", "omega"]);
// db.pull("test_arr", "test"); // ["user", "developer", "db", "omega"]
// db.pull("test_arr", ["db", "omega", "developer"]) // ["user"]

/* ----------------------------------------------------- */

// setMany
// const data = [
//     { key: "test_1", value: "hello1" },
//     { key: "test_2", value: "hello2" },
//     { key: "test_3", value: "hello3" },
//     { key: "test_4", value: "hello4" },
//     { key: "test_5", value: "hello5" },
//     { key: "test_6", value: "hello6" },
//     { key: "test_7", value: "hello7" },
//     { key: "test_8", value: "hello8" },
//     { key: "test_9", value: "hello9" }
// ];

// db.setMany(data);
// console.log(db.all())

/* ----------------------------------------------------- */