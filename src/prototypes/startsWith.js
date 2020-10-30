const _ = require("lodash");

/**
 * startsWith method
 * @param {import("quick.db")} db 
 */
module.exports = (db) => {
    db.startsWith = function (key, ops = {}) {
        if (!key || typeof key !== "string") return [];
        const data = db.all(ops);
        let arb = data.filter(i => i.ID.startsWith(key)).map(m => ({ ID: m.ID, data: db.get(m.ID) }));
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
        let arb = data.filter(i => i.ID.startsWith(key)).map(m => ({ ID: m.ID, data: db.get(m.ID) }));
        if (ops && ops.sort && typeof ops.sort === 'string') {
            if (ops.sort.startsWith('.')) ops.sort = ops.sort.slice(1);
            ops.sort = ops.sort.split('.');
            arb = _.sortBy(arb, ops.sort).reverse();
        }

        return typeof ops.limit !== "number" || ops.limit <= 0 ? arb : arb.slice(0, ops.limit);
    }

    return db;
}