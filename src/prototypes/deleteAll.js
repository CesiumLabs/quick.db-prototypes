/**
 * deleteAll method
 * @param {import("quick.db")} db 
 */
module.exports = (db) => {

    db.deleteAll = function (key, ops = {}) {
        if (key && typeof key !== "string") throw new Error("Key must be a string.");
        const oldData = db.all(ops).map(m => ({ ID: m.ID, data: db.get(m.ID) }));
        
        if (key) {
            let i = oldData.filter(data => !data.ID.startsWith(key));
            
            for (const n of i) {
                db.set(n.ID, n.data);
            }

            return true;
        } else {
            for (const i of oldData) {
                db.delete(i.ID);
            }
            
            return true;
        }
    }

    db.table.prototype.deleteAll = function (key, ops = {}) {
        if (key && typeof key !== "string") throw new Error("Key must be a string.");
        const oldData = db.all(ops).map(m => ({ ID: m.ID, data: db.get(m.ID) }));
        
        if (key) {
            let i = oldData.filter(data => data.ID.startsWith(key));
            
            for (const n of i) {
                db.delete(n.ID, ops);
            }

            return true;
        } else {
            for (const i of oldData) {
                db.delete(i.ID, ops);
            }
            
            return true;
        }
    }

    return db;

};