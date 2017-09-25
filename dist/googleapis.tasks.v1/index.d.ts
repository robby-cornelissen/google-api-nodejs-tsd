// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        tasks(version: string): any;
        tasks(version: 'v1'): tasks.v1.Tasks;
    }

    namespace tasks {
        namespace v1 {
            export interface Tasks {
                new(options: any): Tasks;

                'tasklists': {
                    'delete': (parameters: { [key: string]: any; 'tasklist': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'tasklist': string}, callback: (error: any, body: TaskList, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: TaskList, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: string, 'pageToken'?: string}, callback: (error: any, body: TaskLists, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'tasklist': string}, callback: (error: any, body: TaskList, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'tasklist': string}, callback: (error: any, body: TaskList, response: any) => void) => Request;
                };
                'tasks': {
                    'clear': (parameters: { [key: string]: any; 'tasklist': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'task': string, 'tasklist': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'task': string, 'tasklist': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'parent'?: string, 'previous'?: string, 'tasklist': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'completedMax'?: string, 'completedMin'?: string, 'dueMax'?: string, 'dueMin'?: string, 'maxResults'?: string, 'pageToken'?: string, 'showCompleted'?: boolean, 'showDeleted'?: boolean, 'showHidden'?: boolean, 'tasklist': string, 'updatedMin'?: string}, callback: (error: any, body: Tasks, response: any) => void) => Request;
                    'move': (parameters: { [key: string]: any; 'parent'?: string, 'previous'?: string, 'task': string, 'tasklist': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'task': string, 'tasklist': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'task': string, 'tasklist': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                };

            }

            export interface Task {
                'completed': string;
                'deleted': boolean;
                'due': string;
                'etag': string;
                'hidden': boolean;
                'id': string;
                'kind': string;
                'links': {
                    'description': string;
                    'link': string;
                    'type': string;
                }[];
                'notes': string;
                'parent': string;
                'position': string;
                'selfLink': string;
                'status': string;
                'title': string;
                'updated': string;
            }

            export interface TaskList {
                'etag': string;
                'id': string;
                'kind': string;
                'selfLink': string;
                'title': string;
                'updated': string;
            }

            export interface TaskLists {
                'etag': string;
                'items': TaskList[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface Tasks {
                'etag': string;
                'items': Task[];
                'kind': string;
                'nextPageToken': string;
            }

        }
    }
}
