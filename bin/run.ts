/// <reference path='../typings/index.d.ts' />
'use strict';

import {Generator} from "../lib/generator";

new Generator().generate().then(() => {
    console.log('Done')
}).catch((e) => {
    console.error(e)
});
