const snmp = require('./snmp/snmp.js');  // import snmp object 

const oids = [
    '1.3.6.1.2.1.1.1',      // OID which will return the version number of a software that runs on the system
    '1.2.6.1.4.1.53864',    // OID which will query the ‘snmpSignals’ table in a database named ‘afinitiTest’ and return the latest value of the column ‘signalValue’ as determined by the timestamp column ‘signalTime’
    '1.3.6.1.2.1.1.2'       // OID which will return the total disk space used (in bytes) for the /var/log/ folder
];

// trap function recieves OIDs as an argument, and then perform tasks based on these OIDs 
snmp.trap(oids);