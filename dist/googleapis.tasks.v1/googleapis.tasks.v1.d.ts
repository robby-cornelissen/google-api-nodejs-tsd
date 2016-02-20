/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        tasks(version: string): any;
        tasks(version: 'v1'): tasks.v1.Tasks;
    }

    namespace tasks {
        namespace v1 {
            export interface Tasks {
                new(options: any): Tasks;

                'tasklists': {
                    'delete': (parameters: {'tasklist': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'tasklist': string}, callback: (error: any, body: TaskList, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: TaskList, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: string, 'pageToken'?: string}, callback: (error: any, body: TaskLists, response: any) => void) => Request;
                    'patch': (parameters: {'tasklist': string}, callback: (error: any, body: TaskList, response: any) => void) => Request;
                    'update': (parameters: {'tasklist': string}, callback: (error: any, body: TaskList, response: any) => void) => Request;
                };
                'tasks': {
                    'clear': (parameters: {'tasklist': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'delete': (parameters: {'task': string, 'tasklist': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'task': string, 'tasklist': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                    'insert': (parameters: {'parent'?: string, 'previous'?: string, 'tasklist': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                    'list': (parameters: {'completedMax'?: string, 'completedMin'?: string, 'dueMax'?: string, 'dueMin'?: string, 'maxResults'?: string, 'pageToken'?: string, 'showCompleted'?: boolean, 'showDeleted'?: boolean, 'showHidden'?: boolean, 'tasklist': string, 'updatedMin'?: string}, callback: (error: any, body: Tasks, response: any) => void) => Request;
                    'move': (parameters: {'parent'?: string, 'previous'?: string, 'task': string, 'tasklist': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                    'patch': (parameters: {'task': string, 'tasklist': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                    'update': (parameters: {'task': string, 'tasklist': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                };

            }

            interface Task {
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

            interface TaskList {
                'etag': string;
                'id': string;
                'kind': string;
                'selfLink': string;
                'title': string;
                'updated': string;
            }

            interface TaskLists {
                'etag': string;
                'items': TaskList[];
                'kind': string;
                'nextPageToken': string;
            }

            interface Tasks {
                'etag': string;
                'items': Task[];
                'kind': string;
                'nextPageToken': string;
            }

        }
    }
}