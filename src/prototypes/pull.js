/**
 * Pull method
 * @param {import("quick.db")} db 
 */
module.exports = (db) => {

    db.pull = function (key, data, ops = {}) {
        if (typeof key !== "string") throw new Error("Key must be a string.");
        const oldData = db.get(key);
        if (!Array.isArray(oldData)) throw new Error("Target is not Array!");
        let newData;
        if (Array.isArray(data)) newData = oldData.filter(d => !data.includes(d));
        else newData = oldData.filter(d => d !== data);

        return db.set(key, newData, ops);
    }

    db.table.prototype.pull = function (key, data, ops = {}) {
        if (typeof key !== "string") throw new Error("Key must be a string.");
        const oldData = db.get(key);
        if (!Array.isArray(oldData)) throw new Error("Target is not Array!");
        let newData;
        if (Array.isArray(data)) newData = oldData.filter(d => !data.includes(d));
        else newData = oldData.filter(d => d !== data);
        
        return db.set(key, newData, ops);
    }

    return db;

};