// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        books(version: string): any;
        books(version: 'v1'): books.v1.Books;
    }

    namespace books {
        namespace v1 {
            export interface Books {
                new(options: any): Books;

                'bookshelves': {
                    'get': (parameters: { [key: string]: any; 'shelf': string, 'source'?: string, 'userId': string}, callback: (error: any, body: Bookshelf, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'source'?: string, 'userId': string}, callback: (error: any, body: Bookshelves, response: any) => void) => Request;

                    'volumes': {
                        'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'shelf': string, 'showPreorders'?: boolean, 'source'?: string, 'startIndex'?: number, 'userId': string}, callback: (error: any, body: Volumes, response: any) => void) => Request;
                    };
                };
                'cloudloading': {
                    'addBook': (parameters: { [key: string]: any; 'drive_document_id'?: string, 'mime_type'?: string, 'name'?: string, 'upload_client_token'?: string}, callback: (error: any, body: BooksCloudloadingResource, response: any) => void) => Request;
                    'deleteBook': (parameters: { [key: string]: any; 'volumeId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'updateBook': (parameters: any, callback: (error: any, body: BooksCloudloadingResource, response: any) => void) => Request;
                };
                'dictionary': {
                    'listOfflineMetadata': (parameters: { [key: string]: any; 'cpksver': string}, callback: (error: any, body: Metadata, response: any) => void) => Request;
                };
                'layers': {
                    'get': (parameters: { [key: string]: any; 'contentVersion'?: string, 'source'?: string, 'summaryId': string, 'volumeId': string}, callback: (error: any, body: Layersummary, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'contentVersion'?: string, 'maxResults'?: number, 'pageToken'?: string, 'source'?: string, 'volumeId': string}, callback: (error: any, body: Layersummaries, response: any) => void) => Request;

                    'annotationData': {
                        'get': (parameters: { [key: string]: any; 'allowWebDefinitions'?: boolean, 'annotationDataId': string, 'contentVersion': string, 'h'?: number, 'layerId': string, 'locale'?: string, 'scale'?: number, 'source'?: string, 'volumeId': string, 'w'?: number}, callback: (error: any, body: Annotationdata, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'annotationDataId'?: string, 'contentVersion': string, 'h'?: number, 'layerId': string, 'locale'?: string, 'maxResults'?: number, 'pageToken'?: string, 'scale'?: number, 'source'?: string, 'updatedMax'?: string, 'updatedMin'?: string, 'volumeId': string, 'w'?: number}, callback: (error: any, body: Annotationsdata, response: any) => void) => Request;
                    };
                    'volumeAnnotations': {
                        'get': (parameters: { [key: string]: any; 'annotationId': string, 'layerId': string, 'locale'?: string, 'source'?: string, 'volumeId': string}, callback: (error: any, body: Volumeannotation, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'contentVersion': string, 'endOffset'?: string, 'endPosition'?: string, 'layerId': string, 'locale'?: string, 'maxResults'?: number, 'pageToken'?: string, 'showDeleted'?: boolean, 'source'?: string, 'startOffset'?: string, 'startPosition'?: string, 'updatedMax'?: string, 'updatedMin'?: string, 'volumeAnnotationsVersion'?: string, 'volumeId': string}, callback: (error: any, body: Volumeannotations, response: any) => void) => Request;
                    };
                };
                'myconfig': {
                    'getUserSettings': (parameters: any, callback: (error: any, body: Usersettings, response: any) => void) => Request;
                    'releaseDownloadAccess': (parameters: { [key: string]: any; 'cpksver': string, 'locale'?: string, 'source'?: string, 'volumeIds': string}, callback: (error: any, body: DownloadAccesses, response: any) => void) => Request;
                    'requestAccess': (parameters: { [key: string]: any; 'cpksver': string, 'licenseTypes'?: string, 'locale'?: string, 'nonce': string, 'source': string, 'volumeId': string}, callback: (error: any, body: RequestAccess, response: any) => void) => Request;
                    'syncVolumeLicenses': (parameters: { [key: string]: any; 'cpksver': string, 'features'?: string, 'includeNonComicsSeries'?: boolean, 'locale'?: string, 'nonce': string, 'showPreorders'?: boolean, 'source': string, 'volumeIds'?: string}, callback: (error: any, body: Volumes, response: any) => void) => Request;
                    'updateUserSettings': (parameters: any, callback: (error: any, body: Usersettings, response: any) => void) => Request;
                };
                'mylibrary': {
                    'annotations': {
                        'delete': (parameters: { [key: string]: any; 'annotationId': string, 'source'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'insert': (parameters: { [key: string]: any; 'annotationId'?: string, 'country'?: string, 'showOnlySummaryInResponse'?: boolean, 'source'?: string}, callback: (error: any, body: Annotation, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'contentVersion'?: string, 'layerId'?: string, 'layerIds'?: string, 'maxResults'?: number, 'pageToken'?: string, 'showDeleted'?: boolean, 'source'?: string, 'updatedMax'?: string, 'updatedMin'?: string, 'volumeId'?: string}, callback: (error: any, body: Annotations, response: any) => void) => Request;
                        'summary': (parameters: { [key: string]: any; 'layerIds': string, 'volumeId': string}, callback: (error: any, body: AnnotationsSummary, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'annotationId': string, 'source'?: string}, callback: (error: any, body: Annotation, response: any) => void) => Request;
                    };
                    'bookshelves': {
                        'addVolume': (parameters: { [key: string]: any; 'reason'?: string, 'shelf': string, 'source'?: string, 'volumeId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'clearVolumes': (parameters: { [key: string]: any; 'shelf': string, 'source'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'shelf': string, 'source'?: string}, callback: (error: any, body: Bookshelf, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'source'?: string}, callback: (error: any, body: Bookshelves, response: any) => void) => Request;
                        'moveVolume': (parameters: { [key: string]: any; 'shelf': string, 'source'?: string, 'volumeId': string, 'volumePosition': number}, callback: (error: any, body: any, response: any) => void) => Request;
                        'removeVolume': (parameters: { [key: string]: any; 'reason'?: string, 'shelf': string, 'source'?: string, 'volumeId': string}, callback: (error: any, body: any, response: any) => void) => Request;

                        'volumes': {
                            'list': (parameters: { [key: string]: any; 'country'?: string, 'maxResults'?: number, 'projection'?: string, 'q'?: string, 'shelf': string, 'showPreorders'?: boolean, 'source'?: string, 'startIndex'?: number}, callback: (error: any, body: Volumes, response: any) => void) => Request;
                        };
                    };
                    'readingpositions': {
                        'get': (parameters: { [key: string]: any; 'contentVersion'?: string, 'source'?: string, 'volumeId': string}, callback: (error: any, body: ReadingPosition, response: any) => void) => Request;
                        'setPosition': (parameters: { [key: string]: any; 'action'?: string, 'contentVersion'?: string, 'deviceCookie'?: string, 'position': string, 'source'?: string, 'timestamp': string, 'volumeId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    };
                };
                'notification': {
                    'get': (parameters: { [key: string]: any; 'locale'?: string, 'notification_id': string, 'source'?: string}, callback: (error: any, body: Notification, response: any) => void) => Request;
                };
                'onboarding': {
                    'listCategories': (parameters: { [key: string]: any; 'locale'?: string}, callback: (error: any, body: Category, response: any) => void) => Request;
                    'listCategoryVolumes': (parameters: { [key: string]: any; 'categoryId'?: string, 'locale'?: string, 'maxAllowedMaturityRating'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: Volume2, response: any) => void) => Request;
                };
                'personalizedstream': {
                    'get': (parameters: { [key: string]: any; 'locale'?: string, 'maxAllowedMaturityRating'?: string, 'source'?: string}, callback: (error: any, body: Discoveryclusters, response: any) => void) => Request;
                };
                'promooffer': {
                    'accept': (parameters: { [key: string]: any; 'androidId'?: string, 'device'?: string, 'manufacturer'?: string, 'model'?: string, 'offerId'?: string, 'product'?: string, 'serial'?: string, 'volumeId'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'dismiss': (parameters: { [key: string]: any; 'androidId'?: string, 'device'?: string, 'manufacturer'?: string, 'model'?: string, 'offerId'?: string, 'product'?: string, 'serial'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'androidId'?: string, 'device'?: string, 'manufacturer'?: string, 'model'?: string, 'product'?: string, 'serial'?: string}, callback: (error: any, body: Offers, response: any) => void) => Request;
                };
                'series': {
                    'get': (parameters: { [key: string]: any; 'series_id': string}, callback: (error: any, body: Series, response: any) => void) => Request;

                    'membership': {
                        'get': (parameters: { [key: string]: any; 'page_size'?: number, 'page_token'?: string, 'series_id': string}, callback: (error: any, body: Seriesmembership, response: any) => void) => Request;
                    };
                };
                'volumes': {
                    'get': (parameters: { [key: string]: any; 'country'?: string, 'includeNonComicsSeries'?: boolean, 'partner'?: string, 'projection'?: string, 'source'?: string, 'user_library_consistent_read'?: boolean, 'volumeId': string}, callback: (error: any, body: Volume, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'download'?: string, 'filter'?: string, 'langRestrict'?: string, 'libraryRestrict'?: string, 'maxAllowedMaturityRating'?: string, 'maxResults'?: number, 'orderBy'?: string, 'partner'?: string, 'printType'?: string, 'projection'?: string, 'q': string, 'showPreorders'?: boolean, 'source'?: string, 'startIndex'?: number}, callback: (error: any, body: Volumes, response: any) => void) => Request;

                    'associated': {
                        'list': (parameters: { [key: string]: any; 'association'?: string, 'locale'?: string, 'maxAllowedMaturityRating'?: string, 'source'?: string, 'volumeId': string}, callback: (error: any, body: Volumes, response: any) => void) => Request;
                    };
                    'mybooks': {
                        'list': (parameters: { [key: string]: any; 'acquireMethod'?: string, 'country'?: string, 'locale'?: string, 'maxResults'?: number, 'processingState'?: string, 'source'?: string, 'startIndex'?: number}, callback: (error: any, body: Volumes, response: any) => void) => Request;
                    };
                    'recommended': {
                        'list': (parameters: { [key: string]: any; 'locale'?: string, 'maxAllowedMaturityRating'?: string, 'source'?: string}, callback: (error: any, body: Volumes, response: any) => void) => Request;
                        'rate': (parameters: { [key: string]: any; 'locale'?: string, 'rating': string, 'source'?: string, 'volumeId': string}, callback: (error: any, body: BooksVolumesRecommendedRateResponse, response: any) => void) => Request;
                    };
                    'useruploaded': {
                        'list': (parameters: { [key: string]: any; 'locale'?: string, 'maxResults'?: number, 'processingState'?: string, 'source'?: string, 'startIndex'?: number, 'volumeId'?: string}, callback: (error: any, body: Volumes, response: any) => void) => Request;
                    };
                };

            }

            export interface Annotation {
                'afterSelectedText': string;
                'beforeSelectedText': string;
                'clientVersionRanges': {
                    'cfiRange': BooksAnnotationsRange;
                    'contentVersion': string;
                    'gbImageRange': BooksAnnotationsRange;
                    'gbTextRange': BooksAnnotationsRange;
                    'imageCfiRange': BooksAnnotationsRange;
                };
                'created': string;
                'currentVersionRanges': {
                    'cfiRange': BooksAnnotationsRange;
                    'contentVersion': string;
                    'gbImageRange': BooksAnnotationsRange;
                    'gbTextRange': BooksAnnotationsRange;
                    'imageCfiRange': BooksAnnotationsRange;
                };
                'data': string;
                'deleted': boolean;
                'highlightStyle': string;
                'id': string;
                'kind': string;
                'layerId': string;
                'layerSummary': {
                    'allowedCharacterCount': number;
                    'limitType': string;
                    'remainingCharacterCount': number;
                };
                'pageIds': string[];
                'selectedText': string;
                'selfLink': string;
                'updated': string;
                'volumeId': string;
            }

            export interface Annotationdata {
                'annotationType': string;
                'data': any;
                'encoded_data': string;
                'id': string;
                'kind': string;
                'layerId': string;
                'selfLink': string;
                'updated': string;
                'volumeId': string;
            }

            export interface Annotations {
                'items': Annotation[];
                'kind': string;
                'nextPageToken': string;
                'totalItems': number;
            }

            export interface AnnotationsSummary {
                'kind': string;
                'layers': {
                    'allowedCharacterCount': number;
                    'layerId': string;
                    'limitType': string;
                    'remainingCharacterCount': number;
                    'updated': string;
                }[];
            }

            export interface Annotationsdata {
                'items': Annotationdata[];
                'kind': string;
                'nextPageToken': string;
                'totalItems': number;
            }

            export interface BooksAnnotationsRange {
                'endOffset': string;
                'endPosition': string;
                'startOffset': string;
                'startPosition': string;
            }

            export interface BooksCloudloadingResource {
                'author': string;
                'processingState': string;
                'title': string;
                'volumeId': string;
            }

            export interface BooksVolumesRecommendedRateResponse {
                'consistency_token': string;
            }

            export interface Bookshelf {
                'access': string;
                'created': string;
                'description': string;
                'id': number;
                'kind': string;
                'selfLink': string;
                'title': string;
                'updated': string;
                'volumeCount': number;
                'volumesLastUpdated': string;
            }

            export interface Bookshelves {
                'items': Bookshelf[];
                'kind': string;
            }

            export interface Category {
                'items': {
                    'badgeUrl': string;
                    'categoryId': string;
                    'name': string;
                }[];
                'kind': string;
            }

            export interface ConcurrentAccessRestriction {
                'deviceAllowed': boolean;
                'kind': string;
                'maxConcurrentDevices': number;
                'message': string;
                'nonce': string;
                'reasonCode': string;
                'restricted': boolean;
                'signature': string;
                'source': string;
                'timeWindowSeconds': number;
                'volumeId': string;
            }

            export interface Dictlayerdata {
                'common': {
                    'title': string;
                };
                'dict': {
                    'source': {
                        'attribution': string;
                        'url': string;
                    };
                    'words': {
                        'derivatives': {
                            'source': {
                                'attribution': string;
                                'url': string;
                            };
                            'text': string;
                        }[];
                        'examples': {
                            'source': {
                                'attribution': string;
                                'url': string;
                            };
                            'text': string;
                        }[];
                        'senses': {
                            'conjugations': {
                                'type': string;
                                'value': string;
                            }[];
                            'definitions': {
                                'definition': string;
                                'examples': {
                                    'source': {
                                        'attribution': string;
                                        'url': string;
                                    };
                                    'text': string;
                                }[];
                            }[];
                            'partOfSpeech': string;
                            'pronunciation': string;
                            'pronunciationUrl': string;
                            'source': {
                                'attribution': string;
                                'url': string;
                            };
                            'syllabification': string;
                            'synonyms': {
                                'source': {
                                    'attribution': string;
                                    'url': string;
                                };
                                'text': string;
                            }[];
                        }[];
                        'source': {
                            'attribution': string;
                            'url': string;
                        };
                    }[];
                };
                'kind': string;
            }

            export interface Discoveryclusters {
                'clusters': {
                    'banner_with_content_container': {
                        'fillColorArgb': string;
                        'imageUrl': string;
                        'maskColorArgb': string;
                        'moreButtonText': string;
                        'moreButtonUrl': string;
                        'textColorArgb': string;
                    };
                    'subTitle': string;
                    'title': string;
                    'totalVolumes': number;
                    'uid': string;
                    'volumes': Volume[];
                }[];
                'kind': string;
                'totalClusters': number;
            }

            export interface DownloadAccessRestriction {
                'deviceAllowed': boolean;
                'downloadsAcquired': number;
                'justAcquired': boolean;
                'kind': string;
                'maxDownloadDevices': number;
                'message': string;
                'nonce': string;
                'reasonCode': string;
                'restricted': boolean;
                'signature': string;
                'source': string;
                'volumeId': string;
            }

            export interface DownloadAccesses {
                'downloadAccessList': DownloadAccessRestriction[];
                'kind': string;
            }

            export interface Geolayerdata {
                'common': {
                    'lang': string;
                    'previewImageUrl': string;
                    'snippet': string;
                    'snippetUrl': string;
                    'title': string;
                };
                'geo': {
                    'boundary': {
                        'latitude': number;
                        'longitude': number;
                    }[][];
                    'cachePolicy': string;
                    'countryCode': string;
                    'latitude': number;
                    'longitude': number;
                    'mapType': string;
                    'viewport': {
                        'hi': {
                            'latitude': number;
                            'longitude': number;
                        };
                        'lo': {
                            'latitude': number;
                            'longitude': number;
                        };
                    };
                    'zoom': number;
                };
                'kind': string;
            }

            export interface Layersummaries {
                'items': Layersummary[];
                'kind': string;
                'totalItems': number;
            }

            export interface Layersummary {
                'annotationCount': number;
                'annotationTypes': string[];
                'annotationsDataLink': string;
                'annotationsLink': string;
                'contentVersion': string;
                'dataCount': number;
                'id': string;
                'kind': string;
                'layerId': string;
                'selfLink': string;
                'updated': string;
                'volumeAnnotationsVersion': string;
                'volumeId': string;
            }

            export interface Metadata {
                'items': {
                    'download_url': string;
                    'encrypted_key': string;
                    'language': string;
                    'size': string;
                    'version': string;
                }[];
                'kind': string;
            }

            export interface Notification {
                'body': string;
                'crmExperimentIds': string[];
                'doc_id': string;
                'doc_type': string;
                'dont_show_notification': boolean;
                'iconUrl': string;
                'kind': string;
                'notificationGroup': string;
                'notification_type': string;
                'pcampaign_id': string;
                'reason': string;
                'show_notification_settings_action': boolean;
                'targetUrl': string;
                'title': string;
            }

            export interface Offers {
                'items': {
                    'artUrl': string;
                    'gservicesKey': string;
                    'id': string;
                    'items': {
                        'author': string;
                        'canonicalVolumeLink': string;
                        'coverUrl': string;
                        'description': string;
                        'title': string;
                        'volumeId': string;
                    }[];
                }[];
                'kind': string;
            }

            export interface ReadingPosition {
                'epubCfiPosition': string;
                'gbImagePosition': string;
                'gbTextPosition': string;
                'kind': string;
                'pdfPosition': string;
                'updated': string;
                'volumeId': string;
            }

            export interface RequestAccess {
                'concurrentAccess': ConcurrentAccessRestriction;
                'downloadAccess': DownloadAccessRestriction;
                'kind': string;
            }

            export interface Review {
                'author': {
                    'displayName': string;
                };
                'content': string;
                'date': string;
                'fullTextUrl': string;
                'kind': string;
                'rating': string;
                'source': {
                    'description': string;
                    'extraDescription': string;
                    'url': string;
                };
                'title': string;
                'type': string;
                'volumeId': string;
            }

            export interface Series {
                'kind': string;
                'series': {
                    'bannerImageUrl': string;
                    'imageUrl': string;
                    'seriesId': string;
                    'seriesType': string;
                    'title': string;
                }[];
            }

            export interface Seriesmembership {
                'kind': string;
                'member': Volume[];
                'nextPageToken': string;
            }

            export interface Usersettings {
                'kind': string;
                'notesExport': {
                    'folderName': string;
                    'isEnabled': boolean;
                };
                'notification': {
                    'moreFromAuthors': {
                        'opted_state': string;
                    };
                    'moreFromSeries': {
                        'opted_state': string;
                    };
                    'rewardExpirations': {
                        'opted_state': string;
                    };
                };
            }

            export interface Volume {
                'accessInfo': {
                    'accessViewStatus': string;
                    'country': string;
                    'downloadAccess': DownloadAccessRestriction;
                    'driveImportedContentLink': string;
                    'embeddable': boolean;
                    'epub': {
                        'acsTokenLink': string;
                        'downloadLink': string;
                        'isAvailable': boolean;
                    };
                    'explicitOfflineLicenseManagement': boolean;
                    'pdf': {
                        'acsTokenLink': string;
                        'downloadLink': string;
                        'isAvailable': boolean;
                    };
                    'publicDomain': boolean;
                    'quoteSharingAllowed': boolean;
                    'textToSpeechPermission': string;
                    'viewOrderUrl': string;
                    'viewability': string;
                    'webReaderLink': string;
                };
                'etag': string;
                'id': string;
                'kind': string;
                'layerInfo': {
                    'layers': {
                        'layerId': string;
                        'volumeAnnotationsVersion': string;
                    }[];
                };
                'recommendedInfo': {
                    'explanation': string;
                };
                'saleInfo': {
                    'buyLink': string;
                    'country': string;
                    'isEbook': boolean;
                    'listPrice': {
                        'amount': number;
                        'currencyCode': string;
                    };
                    'offers': {
                        'finskyOfferType': number;
                        'giftable': boolean;
                        'listPrice': {
                            'amountInMicros': number;
                            'currencyCode': string;
                        };
                        'rentalDuration': {
                            'count': number;
                            'unit': string;
                        };
                        'retailPrice': {
                            'amountInMicros': number;
                            'currencyCode': string;
                        };
                    }[];
                    'onSaleDate': string;
                    'retailPrice': {
                        'amount': number;
                        'currencyCode': string;
                    };
                    'saleability': string;
                };
                'searchInfo': {
                    'textSnippet': string;
                };
                'selfLink': string;
                'userInfo': {
                    'acquiredTime': string;
                    'acquisitionType': number;
                    'copy': {
                        'allowedCharacterCount': number;
                        'limitType': string;
                        'remainingCharacterCount': number;
                        'updated': string;
                    };
                    'entitlementType': number;
                    'familySharing': {
                        'familyRole': string;
                        'isSharingAllowed': boolean;
                        'isSharingDisabledByFop': boolean;
                    };
                    'isFamilySharedFromUser': boolean;
                    'isFamilySharedToUser': boolean;
                    'isFamilySharingAllowed': boolean;
                    'isFamilySharingDisabledByFop': boolean;
                    'isInMyBooks': boolean;
                    'isPreordered': boolean;
                    'isPurchased': boolean;
                    'isUploaded': boolean;
                    'readingPosition': ReadingPosition;
                    'rentalPeriod': {
                        'endUtcSec': string;
                        'startUtcSec': string;
                    };
                    'rentalState': string;
                    'review': Review;
                    'updated': string;
                    'userUploadedVolumeInfo': {
                        'processingState': string;
                    };
                };
                'volumeInfo': {
                    'allowAnonLogging': boolean;
                    'authors': string[];
                    'averageRating': number;
                    'canonicalVolumeLink': string;
                    'categories': string[];
                    'contentVersion': string;
                    'description': string;
                    'dimensions': {
                        'height': string;
                        'thickness': string;
                        'width': string;
                    };
                    'imageLinks': {
                        'extraLarge': string;
                        'large': string;
                        'medium': string;
                        'small': string;
                        'smallThumbnail': string;
                        'thumbnail': string;
                    };
                    'industryIdentifiers': {
                        'identifier': string;
                        'type': string;
                    }[];
                    'infoLink': string;
                    'language': string;
                    'mainCategory': string;
                    'maturityRating': string;
                    'pageCount': number;
                    'panelizationSummary': {
                        'containsEpubBubbles': boolean;
                        'containsImageBubbles': boolean;
                        'epubBubbleVersion': string;
                        'imageBubbleVersion': string;
                    };
                    'previewLink': string;
                    'printType': string;
                    'printedPageCount': number;
                    'publishedDate': string;
                    'publisher': string;
                    'ratingsCount': number;
                    'readingModes': any;
                    'samplePageCount': number;
                    'seriesInfo': Volumeseriesinfo;
                    'subtitle': string;
                    'title': string;
                };
            }

            export interface Volume2 {
                'items': Volume[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface Volumeannotation {
                'annotationDataId': string;
                'annotationDataLink': string;
                'annotationType': string;
                'contentRanges': {
                    'cfiRange': BooksAnnotationsRange;
                    'contentVersion': string;
                    'gbImageRange': BooksAnnotationsRange;
                    'gbTextRange': BooksAnnotationsRange;
                };
                'data': string;
                'deleted': boolean;
                'id': string;
                'kind': string;
                'layerId': string;
                'pageIds': string[];
                'selectedText': string;
                'selfLink': string;
                'updated': string;
                'volumeId': string;
            }

            export interface Volumeannotations {
                'items': Volumeannotation[];
                'kind': string;
                'nextPageToken': string;
                'totalItems': number;
                'version': string;
            }

            export interface Volumes {
                'items': Volume[];
                'kind': string;
                'totalItems': number;
            }

            export interface Volumeseriesinfo {
                'bookDisplayNumber': string;
                'kind': string;
                'shortSeriesBookTitle': string;
                'volumeSeries': {
                    'issue': {
                        'issueDisplayNumber': string;
                        'issueOrderNumber': number;
                    }[];
                    'orderNumber': number;
                    'seriesBookType': string;
                    'seriesId': string;
                }[];
            }

        }
    }
}
