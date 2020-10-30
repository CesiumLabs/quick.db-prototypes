const startsWith = require("./prototypes/startsWith");
const pull = require("./prototypes/pull");
const setMany = require("./prototypes/setMany");
const deleteAll = require("./prototypes/deleteAll");

/**
 * Quick.db prototypes
 * @param {import("quick.db")} db Databse
 */
module.exports = (db) => {
    if (!db) throw new Error("missing quick.db");

    // prototypes
    startsWith(db);
    pull(db);
    setMany(db);
    deleteAll(db);

    return db;
};

module.exports.startsWith       =     startsWith;
module.exports.pull             =     pull;
module.exports.setMany          =     setMany;
module.exports.deleteAll        =     deleteAll;