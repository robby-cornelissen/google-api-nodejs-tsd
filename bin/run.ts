'use strict';

import {Generator} from "../lib/generator";

let generator = new Generator();
generator.generate().then(() => console.log('Done')).catch((e) => console.error(e));

import * as google from "googleapis";

//let r = google.discovery('v1').apis.list({}, (e, d) => {
//    console.log(e);
//    console.log(d.discoveryVersion);
//});

google.discovery('v1').apis.list({}, (error, data) => {
    console.log(data.discoveryVersion);
})