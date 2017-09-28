// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        language(version: string): any;
        language(version: 'v1beta2'): language.v1beta2.Language;
    }

    namespace language {
        namespace v1beta2 {
            export interface Language {
                new(options: any): Language;

                'documents': {
                    'analyzeSentiment': (parameters: { [key: string]: any; }, callback: (error: any, body: AnalyzeSentimentResponse, response: any) => void) => Request;
                    'analyzeEntitySentiment': (parameters: { [key: string]: any; }, callback: (error: any, body: AnalyzeEntitySentimentResponse, response: any) => void) => Request;
                    'analyzeEntities': (parameters: { [key: string]: any; }, callback: (error: any, body: AnalyzeEntitiesResponse, response: any) => void) => Request;
                    'analyzeSyntax': (parameters: { [key: string]: any; }, callback: (error: any, body: AnalyzeSyntaxResponse, response: any) => void) => Request;
                    'annotateText': (parameters: { [key: string]: any; }, callback: (error: any, body: AnnotateTextResponse, response: any) => void) => Request;
                    'classifyText': (parameters: { [key: string]: any; }, callback: (error: any, body: ClassifyTextResponse, response: any) => void) => Request;
                };

            }

            export interface Status {
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
            }

            export interface Features {
                'extractEntities': boolean;
                'classifyText': boolean;
                'extractEntitySentiment': boolean;
                'extractDocumentSentiment': boolean;
                'extractSyntax': boolean;
            }

            export interface Document {
                'language': string;
                'content': string;
                'type': string;
                'gcsContentUri': string;
            }

            export interface AnalyzeEntitiesRequest {
                'encodingType': string;
                'document': Document;
            }

            export interface ClassifyTextRequest {
                'document': Document;
            }

            export interface AnalyzeEntitySentimentResponse {
                'entities': Entity[];
                'language': string;
            }

            export interface AnalyzeSentimentResponse {
                'documentSentiment': Sentiment;
                'language': string;
                'sentences': Sentence[];
            }

            export interface AnalyzeSyntaxResponse {
                'language': string;
                'sentences': Sentence[];
                'tokens': Token[];
            }

            export interface AnnotateTextResponse {
                'tokens': Token[];
                'documentSentiment': Sentiment;
                'categories': ClassificationCategory[];
                'language': string;
                'entities': Entity[];
                'sentences': Sentence[];
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

            export interface ClassifyTextResponse {
                'categories': ClassificationCategory[];
            }

            export interface EntityMention {
                'type': string;
                'text': TextSpan;
                'sentiment': Sentiment;
            }

            export interface Sentence {
                'text': TextSpan;
                'sentiment': Sentiment;
            }

            export interface Sentiment {
                'score': number;
                'magnitude': number;
            }

            export interface AnalyzeEntitySentimentRequest {
                'encodingType': string;
                'document': Document;
            }

            export interface PartOfSpeech {
                'case': string;
                'tense': string;
                'reciprocity': string;
                'form': string;
                'number': string;
                'voice': string;
                'aspect': string;
                'mood': string;
                'tag': string;
                'gender': string;
                'person': string;
                'proper': string;
            }

            export interface ClassificationCategory {
                'confidence': number;
                'name': string;
            }

            export interface AnalyzeSyntaxRequest {
                'encodingType': string;
                'document': Document;
            }

            export interface AnalyzeEntitiesResponse {
                'language': string;
                'entities': Entity[];
            }

            export interface Entity {
                'name': string;
                'type': string;
                'metadata': {
                    [name: string]: string
                ;
                };
                'salience': number;
                'sentiment': Sentiment;
                'mentions': EntityMention[];
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

        }
    }
}
