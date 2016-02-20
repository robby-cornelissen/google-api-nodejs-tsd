declare module "nunjucks" {
    export function render(name: string, context: any, callback?: (e: Error, result: any) => any): any;

    export function renderString(string: string, context: any, callback?: (e: Error, result: any) => any): any;

    export function compile(string: string, environment?: any, path?: string): any;

    export function configure(path?: string, options?: Options): any;

    export function configure(options?: Options): any;

    export function installJinjaCompat(): void;

    interface Options {
        autoescape?: boolean;
        throwOnUndefined?: boolean;
        trimBlocks?: boolean;
        lstripBlocks?: boolean;
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