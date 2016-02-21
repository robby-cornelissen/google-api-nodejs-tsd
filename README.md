# google-api-nodejs-tsd

Typescript definitions for the [Google APIs Node.js Client](https://github.com/google/google-api-nodejs-client), generated based on the endpoint metadata made available through the [Google API Discovery Service](https://developers.google.com/discovery/).

## Importing and using

To use the type definitions for a given Google API, you need to reference both the base definition file (`googleapis/googleapis.d.ts`) and the API-specific definition file in your project.

```TypeScript
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

// typed
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
```

## Caveats

* The definitions, as well as the definition generator are largely untested.
* Certain call patterns allowed by the Google client are as of yet undefined in the definitions.

## TODO

* Generate `typings.json` files so that definitions can be installed using [typings](https://github.com/typings/typings).
* Generate documentation to be added to the definition files.
* Generate tests to go along with the definition files.
* Add support for various JSON Schema constructs (e.g. `patternProperties`)
* Factor out JSON Schema to Typescript definition conversion into a separate project.
* Complete the definitions for the [Google Auth Node.js Library](https://github.com/google/google-auth-library-nodejs) and put them in a separate project.
* Complete the definitions for [Nunjucks](https://mozilla.github.io/nunjucks/) and put them in a separate project.
* Submit definitions to [DefinitelyTyped](http://definitelytyped.org/).
* A whole lotta testing