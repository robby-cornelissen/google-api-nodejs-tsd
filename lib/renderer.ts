'use strict';

import * as nunjucks from "nunjucks";

type Globals = { [key: string]: string; };

export abstract class Renderer {
    protected globals: Globals;

    constructor(globals: Globals) {
        this.globals = globals;
    }

    abstract render(template: string, data: any): Promise<string>;
}

export class NunjucksRenderer extends Renderer {
    private env;

    constructor(path: string, globals: Globals) {
        super(globals);

        this.env = nunjucks.configure(path, {
            autoescape: false,
            trimblocks: true,
            lstripblocks: true
        });

        for (let name in globals) {
            this.env.addGlobal(name, globals[name]);
        }
    }

    render(template: string, data: any): Promise<string> {
        return new Promise((resolve, reject) => {
            this.env.renderString(template, data, (e, result) => {
                if (e) {
                    return reject(e);
                }

                return resolve(result);
            });
        });
    }
}