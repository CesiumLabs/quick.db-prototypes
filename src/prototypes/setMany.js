/**
 * Multiple set method
 * @param {import("quick.db")} db 
 */
module.exports = (db) => {

    db.setMany = function (items = [], ops = {}) {
        if (!Array.isArray(items)) throw new Error("Items must be Array.");
       
        const cleaned = items.filter(item => item.key && typeof item.key === "string");

        cleaned.forEach(clean => {
            db.set(clean.key, clean.value, ops);
        });

        return cleaned;
    }

    db.table.prototype.setMany = function (items = [], ops = {}) {
        if (!Array.isArray(items)) throw new Error("Items must be Array.");
       
        const cleaned = items.filter(item => item.key && typeof item.key === "string");

        cleaned.forEach(clean => {
            db.set(clean.key, clean.value, ops);
        });

        return cleaned;
    }

    return db;

};