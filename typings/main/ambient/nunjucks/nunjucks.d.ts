// TODO complete this definition file and factor it out of this project

declare module "nunjucks" {
    import {Application} from "express";

    export function render(name: string, context?: Ctx): string;
    export function render(name: string, context: Ctx, callback: Callback): void;

    export function renderString(src: string, context?: Ctx): string;
    export function renderString(src: string, context: Ctx, callback: Callback): void;

    export function compile(src: string, environment?: any, path?: string): any;

    export function configure(path?: string, opts?: Options): any;

    export function configure(opts?: Options): any;

    export function installJinjaCompat(): void;

    export interface Environment extends Obj {
        opts: EnvironmentOptions;

        new(loaders?: Loader | Loader[], opts?: EnvironmentOptions): Environment;

        render(name: string, context?: Ctx): string;
        render(name: string, context: Ctx, callback: Callback): void;
        renderString(src: string, context?: Ctx): string;
        renderString(src: string, context: Ctx, callback: Callback): void;
        addFilter(name: string, func: Function, async?: boolean): Environment;
        getFilter(name: string): Function;
        addExtension(name: string, ext: Extension): Environment;
        removeExtension(name: string): void;
        hasExtension(name: string): boolean;
        addGlobal(name: string, value: any): Environment;
        getGlobal(name: string): any;
        getTemplate(name: string, eagerCompile?: boolean): Template;
        getTemplate(name: string, eagerCompile: boolean, callback: (err: Error, tmpl: Template) => void): void;
        express(app: Application): Environment;
    }

    export interface Loader extends Obj {
        async?: boolean;

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

    export interface Template {
        new(src: string, env?: Environment, path?: string, eagerCompile?: boolean): Template;

        render(context: Ctx): string;
        render(context: Ctx, callback: Callback): void;
    }

    export interface Extension {
        tags: string[];
        parse: (parser: any, nodes: any, lexer: any) => any;
    }

    export interface EnvironmentOptions {
        dev?: boolean;
        autoescape?: boolean;
        throwOnUndefined?: boolean;
        trimBlocks?: boolean;
        lstripBlocks?: boolean;
    }

    export interface Options extends EnvironmentOptions {
        watch?: boolean;
        noCache?: boolean;
        web?: {
            useCache?: boolean;
            async?: boolean;
        };
        express?: Application;
        tags?: {
            blockStart?: string;
            blockEnd?: string;
            variableStart?: string;
            variableEnd?: string;
            commentStart?: string;
            commentEnd?: string;
        }
    }

    interface Obj {
        init(...args: any[]): void;
    }

    type Callback = (err?: Error, result?: string) => void;

    type Ctx = { [key: string]: any };
}