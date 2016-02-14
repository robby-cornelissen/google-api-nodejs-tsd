'use strict';

import {TsDefGenerator} from "../lib/ts-def-generator";

let generator = new TsDefGenerator();
generator.generate().then(() => console.log('Done')).catch((e) => console.error(e));