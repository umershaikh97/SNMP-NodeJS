const { SOFTWARE_VERSION, DB_QUERY, DISC_SPACE } = require('./OID_Constants.js'); // import OID constants

class Snmp {
    softwareVersionNo = '6.1.1';

    // This function will recieve OIDs as an argument, and then perform tasks based on these OIDs 
    trap = (oids = []) => {
        oids.map((oid, index) => {
            switch (oid) {
                case SOFTWARE_VERSION:
                    console.log(`${oid} = STRING: '${this.softwareVersionNo}'`);
                    break;
                case DB_QUERY:
                    console.log(oid);
                    break;
                case DISC_SPACE:
                    console.log(oid);
                    break;
                default:
                    console.log('invalid OID');
                    break;
            }

        })
    }
}

module.exports = new Snmp(); 