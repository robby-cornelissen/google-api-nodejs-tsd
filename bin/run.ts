'use strict';

import {TsDefGenerator} from "../lib/ts-def-generator";

let generator = new TsDefGenerator();
generator.generate().then(() => console.log('Done')).catch((e) => console.error(e));

//import * as google from "googleapis";
//
//google.discovery('v1').apis.list({}, (e, d) => {
//    console.log(e);
//    console.log(d);
//});