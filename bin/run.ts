'use strict';

import {Generator} from "../lib/generator";

let generator: Generator = new Generator();
generator.generateApi('https://www.googleapis.com/discovery/v1/apis/drive/v3/rest').then(() => console.log('Done'));