const { SOFTWARE_VERSION, DB_QUERY, DISC_SPACE } = require('./OID_Constants.js'); // import OID constants

class Snmp {
    softwareVersionNo = '6.1.1'; // we can return the static string against the first OID (as per requirement)

    //  username/password should never be exposed like this, they should be declared in .env (enviroment variables)
    //  but to keep the things simple, I'm declaring it in this way. It is not recommended thou

    // you need to change this username and password as per your login roles for DB
    db_userName = 'umershaikh';
    db_password = '12345';

    // This trap function will recieve OIDs as an argument, and then perform tasks based on these OIDs 
    trap = (oids = []) => {
        oids.map(oid => {
            switch (oid) {
                case SOFTWARE_VERSION:
                    console.log(`${oid} = STRING: '${this.softwareVersionNo}'`);
                    break;
                case DB_QUERY:
                    const connectionString = `postgres://${this.db_userName}:${this.db_password}@localhost/afinitiTest`
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