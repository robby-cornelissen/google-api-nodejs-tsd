// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        language(version: string): any;
        language(version: 'v1'): language.v1.Language;
    }

    namespace language {
        namespace v1 {
            export interface Language {
                new(options: any): Language;

                'documents': {
                    'analyzeEntitySentiment': (parameters: { [key: string]: any; }, callback: (error: any, body: AnalyzeEntitySentimentResponse, response: any) => void) => Request;
                    'analyzeEntities': (parameters: { [key: string]: any; }, callback: (error: any, body: AnalyzeEntitiesResponse, response: any) => void) => Request;
                    'analyzeSyntax': (parameters: { [key: string]: any; }, callback: (error: any, body: AnalyzeSyntaxResponse, response: any) => void) => Request;
                    'analyzeSentiment': (parameters: { [key: string]: any; }, callback: (error: any, body: AnalyzeSentimentResponse, response: any) => void) => Request;
                    'annotateText': (parameters: { [key: string]: any; }, callback: (error: any, body: AnnotateTextResponse, response: any) => void) => Request;
                };

            }

            export interface AnalyzeSyntaxResponse {
                'language': string;
                'sentences': Sentence[];
                'tokens': Token[];
            }

            export interface Entity {
                'mentions': EntityMention[];
                'name': string;
                'type': string;
                'metadata': {
                    [name: string]: string
                ;
                };
                'salience': number;
                'sentiment': Sentiment;
            }

            export interface AnnotateTextRequest {
                'encodingType': string;
                'document': Document;
                'features': Features;
            }

            export interface AnalyzeSentimentRequest {
                'encodingType': string;
                'document': Document;
            }

            export interface AnnotateTextResponse {
                'language': string;
                'sentences': Sentence[];
                'tokens': Token[];
                'entities': Entity[];
                'documentSentiment': Sentiment;
            }

            export interface DependencyEdge {
                'headTokenIndex': number;
                'label': string;
            }

            export interface Token {
                'partOfSpeech': PartOfSpeech;
                'dependencyEdge': DependencyEdge;
                'text': TextSpan;
                'lemma': string;
            }

            export interface TextSpan {
                'beginOffset': number;
                'content': string;
            }

            export interface Status {
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
            }

            export interface EntityMention {
                'type': string;
                'text': TextSpan;
                'sentiment': Sentiment;
            }

            export interface Features {
                'extractEntitySentiment': boolean;
                'extractDocumentSentiment': boolean;
                'extractSyntax': boolean;
                'extractEntities': boolean;
            }

            export interface Sentence {
                'sentiment': Sentiment;
                'text': TextSpan;
            }

            export interface Document {
                'gcsContentUri': string;
                'language': string;
                'content': string;
                'type': string;
            }

            export interface Sentiment {
                'score': number;
                'magnitude': number;
            }

            export interface AnalyzeEntitiesRequest {
                'encodingType': string;
                'document': Document;
            }

            export interface AnalyzeEntitySentimentResponse {
                'entities': Entity[];
                'language': string;
            }

            export interface AnalyzeEntitySentimentRequest {
                'encodingType': string;
                'document': Document;
            }

            export interface PartOfSpeech {
                'form': string;
                'number': string;
                'voice': string;
                'aspect': string;
                'mood': string;
                'tag': string;
                'gender': string;
                'person': string;
                'proper': string;
                'case': string;
                'tense': string;
                'reciprocity': string;
            }

            export interface AnalyzeSyntaxRequest {
                'encodingType': string;
                'document': Document;
            }

            export interface AnalyzeSentimentResponse {
                'documentSentiment': Sentiment;
                'language': string;
                'sentences': Sentence[];
            }

            export interface AnalyzeEntitiesResponse {
                'entities': Entity[];
                'language': string;
            }

        }
    }
}
