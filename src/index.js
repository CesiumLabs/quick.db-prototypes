const _ = require("lodash");

/**
 * Quick.db prototypes
 * @param {import("quick.db")} db Databse
 */
module.exports = (db) => {
    if (!db) throw new Error("missing quick.db");
    
    db.startsWith = function (key, ops = {}) {
        if (!key || typeof key !== "string") return [];
        const data = db.all(ops);
        let arb = data.filter(i => i.ID.startsWith(key)).map(m => ({ ID: m.ID, data: !isNaN(m.data) ? parseInt(m.data) : m.data }));
        if (ops && ops.sort && typeof ops.sort === 'string') {
            if (ops.sort.startsWith('.')) ops.sort = ops.sort.slice(1);
            ops.sort = ops.sort.split('.');
            arb = _.sortBy(arb, ops.sort).reverse();
        }

        return typeof ops.limit !== "number" || ops.limit <= 0 ? arb : arb.slice(0, ops.limit);
    }

    db.table.prototype.startsWith = function (key, ops = {}) {
        if (!key || typeof key !== "string") return [];
        const data = this.all(ops);
        let arb = data.filter(i => i.ID.startsWith(key)).map(m => ({ ID: m.ID, data: !isNaN(m.data) ? parseInt(m.data) : m.data }));
        if (ops && ops.sort && typeof ops.sort === 'string') {
            if (ops.sort.startsWith('.')) ops.sort = ops.sort.slice(1);
            ops.sort = ops.sort.split('.');
            arb = _.sortBy(arb, ops.sort).reverse();
        }

        return typeof ops.limit !== "number" || ops.limit <= 0 ? arb : arb.slice(0, ops.limit);
    }

    return db;
}