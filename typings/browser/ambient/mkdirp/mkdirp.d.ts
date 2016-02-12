// Compiled using typings@0.6.7
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/2d6c5ce48d8817f043c0bda966b7c76a44491bd3/mkdirp/mkdirp.d.ts
// Type definitions for mkdirp 0.3.0
// Project: http://github.com/substack/node-mkdirp
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'mkdirp' {

	function mkdirp(dir: string, cb: (err: any, made: string) => void): void;
	function mkdirp(dir: string, flags: any, cb: (err: any, made: string) => void): void;

	module mkdirp {
		function sync(dir: string, flags?: any): string;
	}
	export = mkdirp;
}