// TODO complete this definition file and factor it out of this project

declare module "nunjucks" {
    export function render(name: string, context: any, callback?: (e: Error, result: any) => any): any;

    export function renderString(src: string, context: any, callback?: (e: Error, result: any) => any): any;

    export function compile(src: string, environment?: any, path?: string): any;

    export function configure(path?: string, opts?: Options): any;

    export function configure(opts?: Options): any;

    export function installJinjaCompat(): void;

    export interface Obj {
        init(...args: any[]): void;
    }

    export interface Environment {
        new(loaders?: Loader | Loader[], opts?: EnvironmentOptions): Environment;
        render(name: string, context: any, callback?: (e: Error, result: any) => any): any;
        renderString(src: string, context: any, callback?: (e: Error, result: any) => any): any;
        addFilter(name: string, func: Function, async?: boolean): Environment;
        getFilter(name: String): Function;
        // TODO continue with extensions
    }

    export interface Loader extends Obj {
        on(name: string, func: Function): void;
        emit(name: string, ...args: any[]): void;
        resolve(from: string, to: string): string;
        isRelative(filename: string): boolean;
        getSource(name: string): {
            src: string;
            path: string;
            noCache?: boolean;
        }
    }

    export interface FileSystemLoader extends Loader {
        new (searchPaths?: string | string[], opts?: {
            watch?: boolean;
            noCache?: boolean;
        }): FileSystemLoader;
    }

    export interface WebLoader extends Loader {
        new (baseURL?: string, opts?: {
            useCache?: boolean;
            async?: boolean;
        }): WebLoader;
    }

    interface EnvironmentOptions {
        autoescape?: boolean;
        throwOnUndefined?: boolean;
        trimBlocks?: boolean;
        lstripBlocks?: boolean;
    }

    interface Options extends EnvironmentOptions {
        watch?: boolean;
        noCache?: boolean;
        web?: {
            useCache?: boolean;
            async?: boolean;
        };
        express?: any;
        tags?: {
            blockStart?: string;
            blockEnd?: string;
            variableStart?: string;
            variableEnd?: string;
            commentStart?: string;
            commentEnd?: string;
        }
    }
}