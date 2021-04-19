'use strict';

const mongo = require('mongodb');
const dbname = "charCollection";
const constr = `mongodb://localhost:27017`;
const conparam = { useNewUrlParser: true, useUnifiedTopology: true };
mongo.connect(
    constr, conparam, function (error, con) {
    if (error) {
        throw error;
    }
    console.log(`Connected to server`);
    const db = con.db(dbname);
    // do stuff
    con.close();
});