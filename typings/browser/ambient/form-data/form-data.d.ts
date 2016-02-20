// Compiled using typings@0.6.8
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/bb1b99052bf1d697f0368fbff56898bc1f5a525c/form-data/form-data.d.ts
// Type definitions for form-data
// Project: https://github.com/felixge/node-form-data
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/form-data.d.ts

declare module "form-data" {
	export class FormData {
		append(key: string, value: any, options?: any): FormData;
		getHeaders(): Object;
		// TODO expand pipe
		pipe(to: any): any;
		submit(params: string|Object, callback: (error: any, response: any) => void): any;
	}
}