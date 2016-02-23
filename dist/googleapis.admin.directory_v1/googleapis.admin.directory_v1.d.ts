// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        admin(version: string): any;
        admin(version: 'directory_v1'): admin.directory_v1.Admin;
    }

    namespace admin {
        namespace directory_v1 {
            export interface Admin {
                new(options: any): Admin;

                'asps': {
                    'delete': (parameters: {'codeId': number, 'userKey': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'codeId': number, 'userKey': string}, callback: (error: any, body: Asp, response: any) => void) => Request;
                    'list': (parameters: {'userKey': string}, callback: (error: any, body: Asps, response: any) => void) => Request;
                };
                'channels': {
                    'stop': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'chromeosdevices': {
                    'get': (parameters: {'customerId': string, 'deviceId': string, 'projection'?: string}, callback: (error: any, body: ChromeOsDevice, response: any) => void) => Request;
                    'list': (parameters: {'customerId': string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'projection'?: string, 'query'?: string, 'sortOrder'?: string}, callback: (error: any, body: ChromeOsDevices, response: any) => void) => Request;
                    'patch': (parameters: {'customerId': string, 'deviceId': string, 'projection'?: string}, callback: (error: any, body: ChromeOsDevice, response: any) => void) => Request;
                    'update': (parameters: {'customerId': string, 'deviceId': string, 'projection'?: string}, callback: (error: any, body: ChromeOsDevice, response: any) => void) => Request;
                };
                'customers': {
                    'get': (parameters: {'customerKey': string}, callback: (error: any, body: Customer, response: any) => void) => Request;
                    'patch': (parameters: {'customerKey': string}, callback: (error: any, body: Customer, response: any) => void) => Request;
                    'update': (parameters: {'customerKey': string}, callback: (error: any, body: Customer, response: any) => void) => Request;
                };
                'domainAliases': {
                    'delete': (parameters: {'customer': string, 'domainAliasName': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'customer': string, 'domainAliasName': string}, callback: (error: any, body: DomainAlias, response: any) => void) => Request;
                    'insert': (parameters: {'customer': string}, callback: (error: any, body: DomainAlias, response: any) => void) => Request;
                    'list': (parameters: {'customer': string, 'parentDomainName'?: string}, callback: (error: any, body: DomainAliases, response: any) => void) => Request;
                };
                'domains': {
                    'delete': (parameters: {'customer': string, 'domainName': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'customer': string, 'domainName': string}, callback: (error: any, body: Domains, response: any) => void) => Request;
                    'insert': (parameters: {'customer': string}, callback: (error: any, body: Domains, response: any) => void) => Request;
                    'list': (parameters: {'customer': string}, callback: (error: any, body: Domains2, response: any) => void) => Request;
                };
                'groups': {
                    'delete': (parameters: {'groupKey': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'groupKey': string}, callback: (error: any, body: Group, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: Group, response: any) => void) => Request;
                    'list': (parameters: {'customer'?: string, 'domain'?: string, 'maxResults'?: number, 'pageToken'?: string, 'userKey'?: string}, callback: (error: any, body: Groups, response: any) => void) => Request;
                    'patch': (parameters: {'groupKey': string}, callback: (error: any, body: Group, response: any) => void) => Request;
                    'update': (parameters: {'groupKey': string}, callback: (error: any, body: Group, response: any) => void) => Request;
                
                    'aliases': {
                        'delete': (parameters: {'alias': string, 'groupKey': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'insert': (parameters: {'groupKey': string}, callback: (error: any, body: Alias, response: any) => void) => Request;
                        'list': (parameters: {'groupKey': string}, callback: (error: any, body: Aliases, response: any) => void) => Request;
                    };
                };
                'members': {
                    'delete': (parameters: {'groupKey': string, 'memberKey': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'groupKey': string, 'memberKey': string}, callback: (error: any, body: Member, response: any) => void) => Request;
                    'insert': (parameters: {'groupKey': string}, callback: (error: any, body: Member, response: any) => void) => Request;
                    'list': (parameters: {'groupKey': string, 'maxResults'?: number, 'pageToken'?: string, 'roles'?: string}, callback: (error: any, body: Members, response: any) => void) => Request;
                    'patch': (parameters: {'groupKey': string, 'memberKey': string}, callback: (error: any, body: Member, response: any) => void) => Request;
                    'update': (parameters: {'groupKey': string, 'memberKey': string}, callback: (error: any, body: Member, response: any) => void) => Request;
                };
                'mobiledevices': {
                    'action': (parameters: {'customerId': string, 'resourceId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'delete': (parameters: {'customerId': string, 'resourceId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'customerId': string, 'projection'?: string, 'resourceId': string}, callback: (error: any, body: MobileDevice, response: any) => void) => Request;
                    'list': (parameters: {'customerId': string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'projection'?: string, 'query'?: string, 'sortOrder'?: string}, callback: (error: any, body: MobileDevices, response: any) => void) => Request;
                };
                'notifications': {
                    'delete': (parameters: {'customer': string, 'notificationId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'customer': string, 'notificationId': string}, callback: (error: any, body: Notification, response: any) => void) => Request;
                    'list': (parameters: {'customer': string, 'language'?: string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: Notifications, response: any) => void) => Request;
                    'patch': (parameters: {'customer': string, 'notificationId': string}, callback: (error: any, body: Notification, response: any) => void) => Request;
                    'update': (parameters: {'customer': string, 'notificationId': string}, callback: (error: any, body: Notification, response: any) => void) => Request;
                };
                'orgunits': {
                    'delete': (parameters: {'customerId': string, 'orgUnitPath': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'customerId': string, 'orgUnitPath': string}, callback: (error: any, body: OrgUnit, response: any) => void) => Request;
                    'insert': (parameters: {'customerId': string}, callback: (error: any, body: OrgUnit, response: any) => void) => Request;
                    'list': (parameters: {'customerId': string, 'orgUnitPath'?: string, 'type'?: string}, callback: (error: any, body: OrgUnits, response: any) => void) => Request;
                    'patch': (parameters: {'customerId': string, 'orgUnitPath': string}, callback: (error: any, body: OrgUnit, response: any) => void) => Request;
                    'update': (parameters: {'customerId': string, 'orgUnitPath': string}, callback: (error: any, body: OrgUnit, response: any) => void) => Request;
                };
                'privileges': {
                    'list': (parameters: {'customer': string}, callback: (error: any, body: Privileges, response: any) => void) => Request;
                };
                'resources': {
                    'calendars': {
                        'delete': (parameters: {'calendarResourceId': string, 'customer': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: {'calendarResourceId': string, 'customer': string}, callback: (error: any, body: CalendarResource, response: any) => void) => Request;
                        'insert': (parameters: {'customer': string}, callback: (error: any, body: CalendarResource, response: any) => void) => Request;
                        'list': (parameters: {'customer': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: CalendarResources, response: any) => void) => Request;
                        'patch': (parameters: {'calendarResourceId': string, 'customer': string}, callback: (error: any, body: CalendarResource, response: any) => void) => Request;
                        'update': (parameters: {'calendarResourceId': string, 'customer': string}, callback: (error: any, body: CalendarResource, response: any) => void) => Request;
                    };
                };
                'roleAssignments': {
                    'delete': (parameters: {'customer': string, 'roleAssignmentId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'customer': string, 'roleAssignmentId': string}, callback: (error: any, body: RoleAssignment, response: any) => void) => Request;
                    'insert': (parameters: {'customer': string}, callback: (error: any, body: RoleAssignment, response: any) => void) => Request;
                    'list': (parameters: {'customer': string, 'maxResults'?: number, 'pageToken'?: string, 'roleId'?: string, 'userKey'?: string}, callback: (error: any, body: RoleAssignments, response: any) => void) => Request;
                };
                'roles': {
                    'delete': (parameters: {'customer': string, 'roleId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'customer': string, 'roleId': string}, callback: (error: any, body: Role, response: any) => void) => Request;
                    'insert': (parameters: {'customer': string}, callback: (error: any, body: Role, response: any) => void) => Request;
                    'list': (parameters: {'customer': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: Roles, response: any) => void) => Request;
                    'patch': (parameters: {'customer': string, 'roleId': string}, callback: (error: any, body: Role, response: any) => void) => Request;
                    'update': (parameters: {'customer': string, 'roleId': string}, callback: (error: any, body: Role, response: any) => void) => Request;
                };
                'schemas': {
                    'delete': (parameters: {'customerId': string, 'schemaKey': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'customerId': string, 'schemaKey': string}, callback: (error: any, body: Schema, response: any) => void) => Request;
                    'insert': (parameters: {'customerId': string}, callback: (error: any, body: Schema, response: any) => void) => Request;
                    'list': (parameters: {'customerId': string}, callback: (error: any, body: Schemas, response: any) => void) => Request;
                    'patch': (parameters: {'customerId': string, 'schemaKey': string}, callback: (error: any, body: Schema, response: any) => void) => Request;
                    'update': (parameters: {'customerId': string, 'schemaKey': string}, callback: (error: any, body: Schema, response: any) => void) => Request;
                };
                'tokens': {
                    'delete': (parameters: {'clientId': string, 'userKey': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'clientId': string, 'userKey': string}, callback: (error: any, body: Token, response: any) => void) => Request;
                    'list': (parameters: {'userKey': string}, callback: (error: any, body: Tokens, response: any) => void) => Request;
                };
                'users': {
                    'delete': (parameters: {'userKey': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'customFieldMask'?: string, 'projection'?: string, 'userKey': string, 'viewType'?: string}, callback: (error: any, body: User, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: User, response: any) => void) => Request;
                    'list': (parameters: {'customFieldMask'?: string, 'customer'?: string, 'domain'?: string, 'event'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'projection'?: string, 'query'?: string, 'showDeleted'?: string, 'sortOrder'?: string, 'viewType'?: string}, callback: (error: any, body: Users, response: any) => void) => Request;
                    'makeAdmin': (parameters: {'userKey': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'patch': (parameters: {'userKey': string}, callback: (error: any, body: User, response: any) => void) => Request;
                    'undelete': (parameters: {'userKey': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'update': (parameters: {'userKey': string}, callback: (error: any, body: User, response: any) => void) => Request;
                    'watch': (parameters: {'customFieldMask'?: string, 'customer'?: string, 'domain'?: string, 'event'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'projection'?: string, 'query'?: string, 'showDeleted'?: string, 'sortOrder'?: string, 'viewType'?: string}, callback: (error: any, body: Channel, response: any) => void) => Request;
                
                    'aliases': {
                        'delete': (parameters: {'alias': string, 'userKey': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'insert': (parameters: {'userKey': string}, callback: (error: any, body: Alias, response: any) => void) => Request;
                        'list': (parameters: {'event'?: string, 'userKey': string}, callback: (error: any, body: Aliases, response: any) => void) => Request;
                        'watch': (parameters: {'event'?: string, 'userKey': string}, callback: (error: any, body: Channel, response: any) => void) => Request;
                    };
                    'photos': {
                        'delete': (parameters: {'userKey': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: {'userKey': string}, callback: (error: any, body: UserPhoto, response: any) => void) => Request;
                        'patch': (parameters: {'userKey': string}, callback: (error: any, body: UserPhoto, response: any) => void) => Request;
                        'update': (parameters: {'userKey': string}, callback: (error: any, body: UserPhoto, response: any) => void) => Request;
                    };
                };
                'verificationCodes': {
                    'generate': (parameters: {'userKey': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'invalidate': (parameters: {'userKey': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'list': (parameters: {'userKey': string}, callback: (error: any, body: VerificationCodes, response: any) => void) => Request;
                };

            }

            export interface Alias {
                'alias': string;
                'etag': string;
                'id': string;
                'kind': string;
                'primaryEmail': string;
            }

            export interface Aliases {
                'aliases': Alias[];
                'etag': string;
                'kind': string;
            }

            export interface Asp {
                'codeId': number;
                'creationTime': string;
                'etag': string;
                'kind': string;
                'lastTimeUsed': string;
                'name': string;
                'userKey': string;
            }

            export interface Asps {
                'etag': string;
                'items': Asp[];
                'kind': string;
            }

            export interface CalendarResource {
                'etags': string;
                'kind': string;
                'resourceDescription': string;
                'resourceEmail': string;
                'resourceId': string;
                'resourceName': string;
                'resourceType': string;
            }

            export interface CalendarResources {
                'etag': string;
                'items': CalendarResource[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface Channel {
                'address': string;
                'expiration': string;
                'id': string;
                'kind': string;
                'params': {
                    [name: string]: string
                
                };
                'payload': boolean;
                'resourceId': string;
                'resourceUri': string;
                'token': string;
                'type': string;
            }

            export interface ChromeOsDevice {
                'activeTimeRanges': {
                    'activeTime': number;
                    'date': string;
                }[];
                'annotatedAssetId': string;
                'annotatedLocation': string;
                'annotatedUser': string;
                'bootMode': string;
                'deviceId': string;
                'etag': string;
                'ethernetMacAddress': string;
                'firmwareVersion': string;
                'kind': string;
                'lastEnrollmentTime': string;
                'lastSync': string;
                'macAddress': string;
                'meid': string;
                'model': string;
                'notes': string;
                'orderNumber': string;
                'orgUnitPath': string;
                'osVersion': string;
                'platformVersion': string;
                'recentUsers': {
                    'email': string;
                    'type': string;
                }[];
                'serialNumber': string;
                'status': string;
                'supportEndDate': string;
                'willAutoRenew': boolean;
            }

            export interface ChromeOsDevices {
                'chromeosdevices': ChromeOsDevice[];
                'etag': string;
                'kind': string;
                'nextPageToken': string;
            }

            export interface Customer {
                'alternateEmail': string;
                'customerCreationTime': string;
                'customerDomain': string;
                'etag': string;
                'id': string;
                'kind': string;
                'language': string;
                'phoneNumber': string;
                'postalAddress': CustomerPostalAddress;
            }

            export interface CustomerPostalAddress {
                'addressLine1': string;
                'addressLine2': string;
                'addressLine3': string;
                'contactName': string;
                'countryCode': string;
                'locality': string;
                'organizationName': string;
                'postalCode': string;
                'region': string;
            }

            export interface DomainAlias {
                'creationTime': string;
                'domainAliasName': string;
                'etag': string;
                'kind': string;
                'parentDomainName': string;
                'verified': boolean;
            }

            export interface DomainAliases {
                'domainAliases': DomainAlias[];
                'etag': string;
                'kind': string;
            }

            export interface Domains {
                'creationTime': string;
                'domainAliases': DomainAlias[];
                'domainName': string;
                'etag': string;
                'isPrimary': boolean;
                'kind': string;
                'verified': boolean;
            }

            export interface Domains2 {
                'domains': Domains[];
                'etag': string;
                'kind': string;
            }

            export interface Group {
                'adminCreated': boolean;
                'aliases': string[];
                'description': string;
                'directMembersCount': string;
                'email': string;
                'etag': string;
                'id': string;
                'kind': string;
                'name': string;
                'nonEditableAliases': string[];
            }

            export interface Groups {
                'etag': string;
                'groups': Group[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface Member {
                'email': string;
                'etag': string;
                'id': string;
                'kind': string;
                'role': string;
                'type': string;
            }

            export interface Members {
                'etag': string;
                'kind': string;
                'members': Member[];
                'nextPageToken': string;
            }

            export interface MobileDevice {
                'adbStatus': boolean;
                'applications': {
                    'displayName': string;
                    'packageName': string;
                    'permission': string[];
                    'versionCode': number;
                    'versionName': string;
                }[];
                'basebandVersion': string;
                'buildNumber': string;
                'defaultLanguage': string;
                'developerOptionsStatus': boolean;
                'deviceCompromisedStatus': string;
                'deviceId': string;
                'email': string[];
                'etag': string;
                'firstSync': string;
                'hardwareId': string;
                'imei': string;
                'kernelVersion': string;
                'kind': string;
                'lastSync': string;
                'managedAccountIsOnOwnerProfile': boolean;
                'meid': string;
                'model': string;
                'name': string[];
                'networkOperator': string;
                'os': string;
                'otherAccountsInfo': string[];
                'resourceId': string;
                'serialNumber': string;
                'status': string;
                'supportsWorkProfile': boolean;
                'type': string;
                'unknownSourcesStatus': boolean;
                'userAgent': string;
                'wifiMacAddress': string;
            }

            export interface MobileDeviceAction {
                'action': string;
            }

            export interface MobileDevices {
                'etag': string;
                'kind': string;
                'mobiledevices': MobileDevice[];
                'nextPageToken': string;
            }

            export interface Notification {
                'body': string;
                'etag': string;
                'fromAddress': string;
                'isUnread': boolean;
                'kind': string;
                'notificationId': string;
                'sendTime': string;
                'subject': string;
            }

            export interface Notifications {
                'etag': string;
                'items': Notification[];
                'kind': string;
                'nextPageToken': string;
                'unreadNotificationsCount': number;
            }

            export interface OrgUnit {
                'blockInheritance': boolean;
                'description': string;
                'etag': string;
                'kind': string;
                'name': string;
                'orgUnitId': string;
                'orgUnitPath': string;
                'parentOrgUnitId': string;
                'parentOrgUnitPath': string;
            }

            export interface OrgUnits {
                'etag': string;
                'kind': string;
                'organizationUnits': OrgUnit[];
            }

            export interface Privilege {
                'childPrivileges': Privilege[];
                'etag': string;
                'isOuScopable': boolean;
                'kind': string;
                'privilegeName': string;
                'serviceId': string;
                'serviceName': string;
            }

            export interface Privileges {
                'etag': string;
                'items': Privilege[];
                'kind': string;
            }

            export interface Role {
                'etag': string;
                'isSuperAdminRole': boolean;
                'isSystemRole': boolean;
                'kind': string;
                'roleDescription': string;
                'roleId': string;
                'roleName': string;
                'rolePrivileges': {
                    'privilegeName': string;
                    'serviceId': string;
                }[];
            }

            export interface RoleAssignment {
                'assignedTo': string;
                'etag': string;
                'kind': string;
                'orgUnitId': string;
                'roleAssignmentId': string;
                'roleId': string;
                'scopeType': string;
            }

            export interface RoleAssignments {
                'etag': string;
                'items': RoleAssignment[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface Roles {
                'etag': string;
                'items': Role[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface Schema {
                'etag': string;
                'fields': SchemaFieldSpec[];
                'kind': string;
                'schemaId': string;
                'schemaName': string;
            }

            export interface SchemaFieldSpec {
                'etag': string;
                'fieldId': string;
                'fieldName': string;
                'fieldType': string;
                'indexed': boolean;
                'kind': string;
                'multiValued': boolean;
                'numericIndexingSpec': {
                    'maxValue': number;
                    'minValue': number;
                };
                'readAccessType': string;
            }

            export interface Schemas {
                'etag': string;
                'kind': string;
                'schemas': Schema[];
            }

            export interface Token {
                'anonymous': boolean;
                'clientId': string;
                'displayText': string;
                'etag': string;
                'kind': string;
                'nativeApp': boolean;
                'scopes': string[];
                'userKey': string;
            }

            export interface Tokens {
                'etag': string;
                'items': Token[];
                'kind': string;
            }

            export interface User {
                'addresses': any;
                'agreedToTerms': boolean;
                'aliases': string[];
                'changePasswordAtNextLogin': boolean;
                'creationTime': string;
                'customSchemas': {
                    [name: string]: UserCustomProperties
                
                };
                'customerId': string;
                'deletionTime': string;
                'emails': any;
                'etag': string;
                'externalIds': any;
                'hashFunction': string;
                'id': string;
                'ims': any;
                'includeInGlobalAddressList': boolean;
                'ipWhitelisted': boolean;
                'isAdmin': boolean;
                'isDelegatedAdmin': boolean;
                'isMailboxSetup': boolean;
                'kind': string;
                'lastLoginTime': string;
                'name': UserName;
                'nonEditableAliases': string[];
                'notes': any;
                'orgUnitPath': string;
                'organizations': any;
                'password': string;
                'phones': any;
                'primaryEmail': string;
                'relations': any;
                'suspended': boolean;
                'suspensionReason': string;
                'thumbnailPhotoEtag': string;
                'thumbnailPhotoUrl': string;
                'websites': any;
            }

            export interface UserAbout {
                'contentType': string;
                'value': string;
            }

            export interface UserAddress {
                'country': string;
                'countryCode': string;
                'customType': string;
                'extendedAddress': string;
                'formatted': string;
                'locality': string;
                'poBox': string;
                'postalCode': string;
                'primary': boolean;
                'region': string;
                'sourceIsStructured': boolean;
                'streetAddress': string;
                'type': string;
            }

            export interface UserCustomProperties {
                [name: string]: any
            
            }

            export interface UserEmail {
                'address': string;
                'customType': string;
                'primary': boolean;
                'type': string;
            }

            export interface UserExternalId {
                'customType': string;
                'type': string;
                'value': string;
            }

            export interface UserIm {
                'customProtocol': string;
                'customType': string;
                'im': string;
                'primary': boolean;
                'protocol': string;
                'type': string;
            }

            export interface UserMakeAdmin {
                'status': boolean;
            }

            export interface UserName {
                'familyName': string;
                'fullName': string;
                'givenName': string;
            }

            export interface UserOrganization {
                'costCenter': string;
                'customType': string;
                'department': string;
                'description': string;
                'domain': string;
                'location': string;
                'name': string;
                'primary': boolean;
                'symbol': string;
                'title': string;
                'type': string;
            }

            export interface UserPhone {
                'customType': string;
                'primary': boolean;
                'type': string;
                'value': string;
            }

            export interface UserPhoto {
                'etag': string;
                'height': number;
                'id': string;
                'kind': string;
                'mimeType': string;
                'photoData': string;
                'primaryEmail': string;
                'width': number;
            }

            export interface UserRelation {
                'customType': string;
                'type': string;
                'value': string;
            }

            export interface UserUndelete {
                'orgUnitPath': string;
            }

            export interface UserWebsite {
                'customType': string;
                'primary': boolean;
                'type': string;
                'value': string;
            }

            export interface Users {
                'etag': string;
                'kind': string;
                'nextPageToken': string;
                'trigger_event': string;
                'users': User[];
            }

            export interface VerificationCode {
                'etag': string;
                'kind': string;
                'userId': string;
                'verificationCode': string;
            }

            export interface VerificationCodes {
                'etag': string;
                'items': VerificationCode[];
                'kind': string;
            }

        }
    }
}