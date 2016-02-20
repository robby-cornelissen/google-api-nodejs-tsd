# google-api-nodejs-tsd

Typescript definitions for the [Google APIs Node.js Client](https://github.com/google/google-api-nodejs-client), generated based on the endpoint metadata made available through the [Google API Discovery Service](https://developers.google.com/discovery/).

## Caveats

* The definitions, as well as the definition generator are largely untested.
* Certain call patterns allowed by the Google client are as of yet undefined in the definitions.

## TODO

* Verify node and typings dependencies and create a build script.
* Generate documentation to be added to the definition files.
* Generate tests to go along with the definition files.
* Add support for various JSON Schema constructs (e.g. `patternProperties`)
* Factor out JSON Schema to Typescript definition conversion into a separate project.
* Complete the definitions for the [Google Auth Node.js Library](https://github.com/google/google-auth-library-nodejs) and put them in a separate project.
* Complete the definitions for [Nunjucks](https://mozilla.github.io/nunjucks/) and put them in a separate project.
* Submit definitions to [DefinitelyTyped](http://definitelytyped.org/).
* A whole lotta testing