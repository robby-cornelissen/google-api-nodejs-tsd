'use strict';

import * as req from 'request';
import {Request, RequestCallback, Options} from 'request';
import {IncomingMessage} from 'http';

const PACKAGE: any = require('googleapis/package.json');
const USER_AGENT: string = 'google-api-nodejs-client/' + PACKAGE.version;

export class Transporter {
    request(options: Options, callback?: RequestCallback): Request {
        options = this.configure(options);

        // TODO need to update typings when available
        // TODO check https://github.com/DefinitelyTyped/DefinitelyTyped/issues/7979
        return req(options.uri || options.url, options, this.wrapCallback(callback));
    }

    private configure(options: Options): Options {
        options.headers = options.headers || {};
        options.headers['User-Agent'] = options.headers['User-Agent']
            ? options.headers['User-Agent'] + ' ' + USER_AGENT
            : USER_AGENT;

        return options;
    }

    // TODO refactor
    private wrapCallback(callback?: RequestCallback): RequestCallback {
        return function(e: any, response: IncomingMessage, body: any) {
            if (e || !body) {
                return callback && callback(e, body, response);
            }

            try {
                body = JSON.parse(body);
            } catch (ignored) {
            }

            if (body && body.error && response.statusCode !== 200) {
                if (typeof body.error === 'string') {
                    e = new Error(body.error);
                    e.code = response.statusCode;
                } else if (Array.isArray(body.error.errors)) {
                    e = new Error(body.error.errors.map(e => e.message).join('\n'));
                    e.code = body.error.code;
                    e.errors = body.error.errors;
                } else {
                    e = new Error(body.error.message);
                    e.code = body.error.code || response.statusCode;
                }

                body = null;
            } else if (response.statusCode >= 500) {
                e = new Error(body);
                e.code = response.statusCode;
                body = null;
            }

            if (callback) {
                callback(e, body, response);
            }
        };
    }
}