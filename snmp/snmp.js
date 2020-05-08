const { SOFTWARE_VERSION, DB_QUERY, DISC_SPACE } = require('./OID_Constants.js'); // import OID constants

class Snmp {

    // This function will recieve OIDs as an argument, and then perform tasks based on these OIDs 
    trap = (oids = []) => {
        oids.map((oid, index) => {
            console.log(SOFTWARE_VERSION)

        })
    }
}

module.exports = new Snmp(); 