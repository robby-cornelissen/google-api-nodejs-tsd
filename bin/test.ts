'use strict';

import * as google from "googleapis";

// simple
google.discovery('v1').apis.list({
    preferred: true
}, (e, directoryList) => {
    if(e) {
        console.error(e);
    } else {
        console.log(directoryList.items.map(item => item.name + ' ' + item.version).join('\n'));
    }
});

// verbose
import Discovery = google.discovery.v1.Discovery;
import DirectoryList = google.discovery.v1.DirectoryList;

let discovery: Discovery = google.discovery('v1');

discovery.apis.list({
    preferred: true
}, (e, directoryList: DirectoryList) => {
    if(e) {
        console.error(e);
    } else {
        console.log(directoryList.items.map(item => item.name + ' ' + item.version).join('\n'));
    }
});