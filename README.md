# Quick.db Prototypes
Prototypes for **[quick.db](https://npmjs.com/package/quick.db)**.

# Installation

```sh
$ npm i quick.db-prototypes
```

# Example

```js
const db = require("quick.db");
require("quick.db-prototypes")(db);

// access to db.startsWith
const data = db.startsWith("something", { sort: ".data" });
console.log(data);
```

# Available Methods
## db.startsWith(key, options?)
This method is identical to old `db.startsWith()` method.
**Example:**

```js
db.startsWith("something", { sort: ".data" });
```

## db.deleteAll(key?, options?)
This method can be used to remove identical keys or entire table.
**Example:**

```js
db.deleteAll("someMatchingKey");

// or

db.deleteAll(); // delete entire table
```

## db.pull(key, items | items[], options?)
This method can be used to remove items from array. Key must be a valid key and items can be a single or multiple (array).
**Example:**

```js
db.set("something", ["hello", "world", "hi", "hi", "ping"]);

db.pull("something", "hi"); // ["hello", "world", "ping"]
db.pull("something", ["hello", "world"]); // ["ping"]
```

## db.setMany(items[], options?)
This method can be used to set multiple data at once. This method takes `Array` of data containing `key` and `value` pair as data.
**Example:**

```js
const data = [
    { key: "test_1", value: "hello1" },
    { key: "test_2", value: "hello2" },
    { key: "test_3", value: "hello3" },
    { key: "test_4", value: "hello4" },
    { key: "test_5", value: "hello5" },
    { key: "test_6", value: "hello6" },
    { key: "test_7", value: "hello7" },
    { key: "test_8", value: "hello8" },
    { key: "test_9", value: "hello9" }
];

db.setMany(data);
```

# More features coming soon

# Discord Server
[![](https://i.imgur.com/f6hNUfc.png)](https://discord.gg/2SUybzb)

## -> **[Plexi Development (quick.db)](https://discord.gg/plexidev)**