'use strict';

import * as google from "googleapis";

google.discovery('v1').apis.list({
    preferred: true
}, (e, data) => {
    if(e) {
        console.error(e);
    } else {
        console.log(data.items.map(item => item.name + ' ' + item.version).join('\n'));
    }
});