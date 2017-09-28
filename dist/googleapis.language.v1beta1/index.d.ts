// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        language(version: string): any;
        language(version: 'v1beta1'): language.v1beta1.Language;
    }

    namespace language {
        namespace v1beta1 {
            export interface Language {
                new(options: any): Language;

                'documents': {
                    'annotateText': (parameters: { [key: string]: any; }, callback: (error: any, body: AnnotateTextResponse, response: any) => void) => Request;
                    'analyzeEntities': (parameters: { [key: string]: any; }, callback: (error: any, body: AnalyzeEntitiesResponse, response: any) => void) => Request;
                    'analyzeSyntax': (parameters: { [key: string]: any; }, callback: (error: any, body: AnalyzeSyntaxResponse, response: any) => void) => Request;
                    'analyzeSentiment': (parameters: { [key: string]: any; }, callback: (error: any, body: AnalyzeSentimentResponse, response: any) => void) => Request;
                };

            }

            export interface AnalyzeSyntaxResponse {
                'sentences': Sentence[];
                'tokens': Token[];
                'language': string;
            }

            export interface Entity {
                'mentions': EntityMention[];
                'name': string;
                'salience': number;
                'metadata': {
                    [name: string]: string
                ;
                };
                'type': string;
            }

            export interface AnnotateTextRequest {
                'encodingType': string;
                'document': Document;
                'features': Features;
            }

            export interface AnnotateTextResponse {
                'sentences': Sentence[];
                'tokens': Token[];
                'entities': Entity[];
                'documentSentiment': Sentiment;
                'language': string;
            }

            export interface AnalyzeSentimentRequest {
                'encodingType': string;
                'document': Document;
            }

            export interface DependencyEdge {
                'label': string;
                'headTokenIndex': number;
            }

            export interface TextSpan {
                'beginOffset': number;
                'content': string;
            }

            export interface Token {
                'partOfSpeech': PartOfSpeech;
                'dependencyEdge': DependencyEdge;
                'text': TextSpan;
                'lemma': string;
            }

            export interface Status {
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
            }

            export interface EntityMention {
                'type': string;
                'text': TextSpan;
            }

            export interface Features {
                'extractDocumentSentiment': boolean;
                'extractSyntax': boolean;
                'extractEntities': boolean;
            }

            export interface Document {
                'language': string;
                'content': string;
                'type': string;
                'gcsContentUri': string;
            }

            export interface Sentence {
                'text': TextSpan;
                'sentiment': Sentiment;
            }

            export interface AnalyzeEntitiesRequest {
                'encodingType': string;
                'document': Document;
            }

            export interface Sentiment {
                'score': number;
                'polarity': number;
                'magnitude': number;
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
                'language': string;
                'entities': Entity[];
            }

        }
    }
}
