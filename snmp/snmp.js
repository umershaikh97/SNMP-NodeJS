const { SOFTWARE_VERSION, DB_QUERY, DISC_SPACE } = require('./OID_Constants.js'); // import OID constants
const db = require('../config/database.js');
const SnmpSignals = require('../models/snmpSignals.js');

class Snmp {
    softwareVersionNo = '6.1.1'; // we can return the static string against the first OID (as per requirement)

    //  username/password should never be exposed like this, they should be declared in .env (enviroment variables)
    //  but to keep the things simple, I'm declaring it in this way. It is not recommended thou

    // you need to change this username and password as per your login roles for DB
    // db_userName = 'umershaikh';
    // db_password = '12345';

    // This trap function will recieve OIDs as an argument, and then perform tasks based on these OIDs 
    trap = (oids = []) => {
        oids.map(oid => {
            switch (oid) {
                case SOFTWARE_VERSION:
                    console.log(`${oid} = STRING: '${this.softwareVersionNo}'`);
                    break;
                case DB_QUERY:
                    SnmpSignals.findAll({
                        limit: 1,
                        order: [['signalTime', 'DESC']]
                    })
                        .then(entries => {
                            if (entries && entries.length) {
                                const latestEntry = JSON.parse(JSON.stringify(entries[0]));
                                console.log(`${oid} = STRING: '${latestEntry.signalValue}'`);
                            }
                            else {
                                console.log(`Failed for OID: ${oid} (no record found in DB)`)
                            }
                        })
                        .catch(() => { console.log(`Failed for OID: ${oid} (error in fetching data from DB)`) });
                    break;
                case DISC_SPACE:
                    console.log(oid);
                    break;
                default:
                    console.log('Invalid OID');
                    break;
            }

        })
    }
}

module.exports = new Snmp(); 