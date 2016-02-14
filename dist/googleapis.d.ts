declare module "googleapis" {
    import {Request, RequestCallback} from 'request';

    interface GoogleApis {
        new(options?: any): GoogleApis;
        options(options?: any): void;
        adexchangebuyer(version: string): any;        adexchangebuyer(version: 'v1.2'): google.AdexchangebuyerV1_2;
        adexchangebuyer(version: 'v1.3'): google.AdexchangebuyerV1_3;
        adexchangebuyer(version: 'v1.4'): google.AdexchangebuyerV1_4;
        adexchangeseller(version: string): any;        adexchangeseller(version: 'v1'): google.AdexchangesellerV1;
        adexchangeseller(version: 'v1.1'): google.AdexchangesellerV1_1;
        adexchangeseller(version: 'v2.0'): google.AdexchangesellerV2_0;
        admin(version: string): any;        admin(version: 'datatransfer_v1'): google.AdminDatatransfer_v1;
        admin(version: 'directory_v1'): google.AdminDirectory_v1;
        admin(version: 'reports_v1'): google.AdminReports_v1;
        adsense(version: string): any;        adsense(version: 'v1.2'): google.AdsenseV1_2;
        adsense(version: 'v1.3'): google.AdsenseV1_3;
        adsense(version: 'v1.4'): google.AdsenseV1_4;
        adsensehost(version: string): any;        adsensehost(version: 'v4.1'): google.AdsensehostV4_1;
        analytics(version: string): any;        analytics(version: 'v2.4'): google.AnalyticsV2_4;
        analytics(version: 'v3'): google.AnalyticsV3;
        androidenterprise(version: string): any;        androidenterprise(version: 'v1'): google.AndroidenterpriseV1;
        androidpublisher(version: string): any;        androidpublisher(version: 'v1'): google.AndroidpublisherV1;
        androidpublisher(version: 'v1.1'): google.AndroidpublisherV1_1;
        androidpublisher(version: 'v2'): google.AndroidpublisherV2;
        appsactivity(version: string): any;        appsactivity(version: 'v1'): google.AppsactivityV1;
        appstate(version: string): any;        appstate(version: 'v1'): google.AppstateV1;
        autoscaler(version: string): any;        autoscaler(version: 'v1beta2'): google.AutoscalerV1beta2;
        bigquery(version: string): any;        bigquery(version: 'v2'): google.BigqueryV2;
        blogger(version: string): any;        blogger(version: 'v2'): google.BloggerV2;
        blogger(version: 'v3'): google.BloggerV3;
        books(version: string): any;        books(version: 'v1'): google.BooksV1;
        calendar(version: string): any;        calendar(version: 'v3'): google.CalendarV3;
        civicinfo(version: string): any;        civicinfo(version: 'v2'): google.CivicinfoV2;
        cloudbuild(version: string): any;        cloudbuild(version: 'v1'): google.CloudbuildV1;
        cloudlatencytest(version: string): any;        cloudlatencytest(version: 'v2'): google.CloudlatencytestV2;
        cloudmonitoring(version: string): any;        cloudmonitoring(version: 'v2beta2'): google.CloudmonitoringV2beta2;
        clouduseraccounts(version: string): any;        clouduseraccounts(version: 'alpha'): google.ClouduseraccountsAlpha;
        clouduseraccounts(version: 'beta'): google.ClouduseraccountsBeta;
        clouduseraccounts(version: 'vm_alpha'): google.ClouduseraccountsVm_alpha;
        clouduseraccounts(version: 'vm_beta'): google.ClouduseraccountsVm_beta;
        compute(version: string): any;        compute(version: 'beta'): google.ComputeBeta;
        compute(version: 'v1'): google.ComputeV1;
        content(version: string): any;        content(version: 'v2sandbox'): google.ContentV2sandbox;
        content(version: 'v2'): google.ContentV2;
        coordinate(version: string): any;        coordinate(version: 'v1'): google.CoordinateV1;
        customsearch(version: string): any;        customsearch(version: 'v1'): google.CustomsearchV1;
        datastore(version: string): any;        datastore(version: 'v1beta1'): google.DatastoreV1beta1;
        datastore(version: 'v1beta2'): google.DatastoreV1beta2;
        deploymentmanager(version: string): any;        deploymentmanager(version: 'v2'): google.DeploymentmanagerV2;
        deploymentmanager(version: 'v2beta1'): google.DeploymentmanagerV2beta1;
        deploymentmanager(version: 'v2beta2'): google.DeploymentmanagerV2beta2;
        dfareporting(version: string): any;        dfareporting(version: 'v1'): google.DfareportingV1;
        dfareporting(version: 'v1.1'): google.DfareportingV1_1;
        dfareporting(version: 'v1.2'): google.DfareportingV1_2;
        dfareporting(version: 'v1.3'): google.DfareportingV1_3;
        dfareporting(version: 'v2.0'): google.DfareportingV2_0;
        dfareporting(version: 'v2.1'): google.DfareportingV2_1;
        dfareporting(version: 'v2.2'): google.DfareportingV2_2;
        dfareporting(version: 'v2.3'): google.DfareportingV2_3;
        dfareporting(version: 'v2.4'): google.DfareportingV2_4;
        discovery(version: string): any;        discovery(version: 'v1'): google.DiscoveryV1;
        dns(version: string): any;        dns(version: 'v1'): google.DnsV1;
        doubleclickbidmanager(version: string): any;        doubleclickbidmanager(version: 'v1'): google.DoubleclickbidmanagerV1;
        doubleclicksearch(version: string): any;        doubleclicksearch(version: 'v2'): google.DoubleclicksearchV2;
        drive(version: string): any;        drive(version: 'v1'): google.DriveV1;
        drive(version: 'v2'): google.DriveV2;
        drive(version: 'v3'): google.DriveV3;
        fitness(version: string): any;        fitness(version: 'v1'): google.FitnessV1;
        freebase(version: string): any;        freebase(version: 'v1'): google.FreebaseV1;
        fusiontables(version: string): any;        fusiontables(version: 'v1'): google.FusiontablesV1;
        fusiontables(version: 'v2'): google.FusiontablesV2;
        games(version: string): any;        games(version: 'v1'): google.GamesV1;
        gamesConfiguration(version: string): any;        gamesConfiguration(version: 'v1configuration'): google.GamesconfigurationV1configuration;
        gamesManagement(version: string): any;        gamesManagement(version: 'v1management'): google.GamesmanagementV1management;
        gan(version: string): any;        gan(version: 'v1beta1'): google.GanV1beta1;
        genomics(version: string): any;        genomics(version: 'v1beta2'): google.GenomicsV1beta2;
        genomics(version: 'v1alpha2'): google.GenomicsV1alpha2;
        genomics(version: 'v1'): google.GenomicsV1;
        gmail(version: string): any;        gmail(version: 'v1'): google.GmailV1;
        groupsmigration(version: string): any;        groupsmigration(version: 'v1'): google.GroupsmigrationV1;
        groupssettings(version: string): any;        groupssettings(version: 'v1'): google.GroupssettingsV1;
        appengine(version: string): any;        appengine(version: 'v1beta4'): google.AppengineV1beta4;
        appengine(version: 'v1beta5'): google.AppengineV1beta5;
        classroom(version: string): any;        classroom(version: 'v1'): google.ClassroomV1;
        cloudbilling(version: string): any;        cloudbilling(version: 'v1'): google.CloudbillingV1;
        clouddebugger(version: string): any;        clouddebugger(version: 'v2'): google.ClouddebuggerV2;
        cloudresourcemanager(version: string): any;        cloudresourcemanager(version: 'v1beta1'): google.CloudresourcemanagerV1beta1;
        cloudtrace(version: string): any;        cloudtrace(version: 'v1'): google.CloudtraceV1;
        container(version: string): any;        container(version: 'v1'): google.ContainerV1;
        dataflow(version: string): any;        dataflow(version: 'v1b3'): google.DataflowV1b3;
        dataproc(version: string): any;        dataproc(version: 'v1alpha1'): google.DataprocV1alpha1;
        dataproc(version: 'v1'): google.DataprocV1;
        dataproc(version: 'v1beta1'): google.DataprocV1beta1;
        iam(version: string): any;        iam(version: 'v1alpha1'): google.IamV1alpha1;
        iam(version: 'v1'): google.IamV1;
        kgsearch(version: string): any;        kgsearch(version: 'v1'): google.KgsearchV1;
        logging(version: string): any;        logging(version: 'v2beta1'): google.LoggingV2beta1;
        partners(version: string): any;        partners(version: 'v2'): google.PartnersV2;
        people(version: string): any;        people(version: 'v1'): google.PeopleV1;
        playmoviespartner(version: string): any;        playmoviespartner(version: 'v1'): google.PlaymoviespartnerV1;
        proximitybeacon(version: string): any;        proximitybeacon(version: 'v1beta1'): google.ProximitybeaconV1beta1;
        pubsub(version: string): any;        pubsub(version: 'v1beta1a'): google.PubsubV1beta1a;
        pubsub(version: 'v1'): google.PubsubV1;
        pubsub(version: 'v1beta2'): google.PubsubV1beta2;
        script(version: string): any;        script(version: 'v1'): google.ScriptV1;
        storagetransfer(version: string): any;        storagetransfer(version: 'v1'): google.StoragetransferV1;
        youtubereporting(version: string): any;        youtubereporting(version: 'v1'): google.YoutubereportingV1;
        identitytoolkit(version: string): any;        identitytoolkit(version: 'v3'): google.IdentitytoolkitV3;
        licensing(version: string): any;        licensing(version: 'v1'): google.LicensingV1;
        manager(version: string): any;        manager(version: 'v1beta2'): google.ManagerV1beta2;
        mirror(version: string): any;        mirror(version: 'v1'): google.MirrorV1;
        oauth2(version: string): any;        oauth2(version: 'v1'): google.Oauth2V1;
        oauth2(version: 'v2'): google.Oauth2V2;
        pagespeedonline(version: string): any;        pagespeedonline(version: 'v1'): google.PagespeedonlineV1;
        pagespeedonline(version: 'v2'): google.PagespeedonlineV2;
        plus(version: string): any;        plus(version: 'v1'): google.PlusV1;
        plusDomains(version: string): any;        plusDomains(version: 'v1'): google.PlusdomainsV1;
        prediction(version: string): any;        prediction(version: 'v1.2'): google.PredictionV1_2;
        prediction(version: 'v1.3'): google.PredictionV1_3;
        prediction(version: 'v1.4'): google.PredictionV1_4;
        prediction(version: 'v1.5'): google.PredictionV1_5;
        prediction(version: 'v1.6'): google.PredictionV1_6;
        qpxExpress(version: string): any;        qpxExpress(version: 'v1'): google.QpxexpressV1;
        replicapool(version: string): any;        replicapool(version: 'v1beta1'): google.ReplicapoolV1beta1;
        replicapool(version: 'v1beta2'): google.ReplicapoolV1beta2;
        replicapoolupdater(version: string): any;        replicapoolupdater(version: 'v1beta1'): google.ReplicapoolupdaterV1beta1;
        reseller(version: string): any;        reseller(version: 'v1sandbox'): google.ResellerV1sandbox;
        reseller(version: 'v1'): google.ResellerV1;
        resourceviews(version: string): any;        resourceviews(version: 'v1beta1'): google.ResourceviewsV1beta1;
        resourceviews(version: 'v1beta2'): google.ResourceviewsV1beta2;
        serviceregistry(version: string): any;        serviceregistry(version: 'alpha'): google.ServiceregistryAlpha;
        siteVerification(version: string): any;        siteVerification(version: 'v1'): google.SiteverificationV1;
        spectrum(version: string): any;        spectrum(version: 'v1explorer'): google.SpectrumV1explorer;
        sqladmin(version: string): any;        sqladmin(version: 'v1beta3'): google.SqladminV1beta3;
        sqladmin(version: 'v1beta4'): google.SqladminV1beta4;
        storage(version: string): any;        storage(version: 'v1'): google.StorageV1;
        storage(version: 'v1beta1'): google.StorageV1beta1;
        storage(version: 'v1beta2'): google.StorageV1beta2;
        tagmanager(version: string): any;        tagmanager(version: 'v1'): google.TagmanagerV1;
        taskqueue(version: string): any;        taskqueue(version: 'v1beta1'): google.TaskqueueV1beta1;
        taskqueue(version: 'v1beta2'): google.TaskqueueV1beta2;
        tasks(version: string): any;        tasks(version: 'v1'): google.TasksV1;
        translate(version: string): any;        translate(version: 'v2'): google.TranslateV2;
        urlshortener(version: string): any;        urlshortener(version: 'v1'): google.UrlshortenerV1;
        vision(version: string): any;        vision(version: 'v1'): google.VisionV1;
        webfonts(version: string): any;        webfonts(version: 'v1'): google.WebfontsV1;
        webmasters(version: string): any;        webmasters(version: 'v3'): google.WebmastersV3;
        youtube(version: string): any;        youtube(version: 'v3'): google.YoutubeV3;
        youtubeAnalytics(version: string): any;        youtubeAnalytics(version: 'v1'): google.YoutubeanalyticsV1;
        youtubeAnalytics(version: 'v1beta1'): google.YoutubeanalyticsV1beta1;

    }

    module google {
        export interface AdexchangebuyerV1_2 {
            new(options?: any): AdexchangebuyerV1_2;
            accounts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            creatives: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface AdexchangebuyerV1_3 {
            new(options?: any): AdexchangebuyerV1_3;
            accounts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            billingInfo: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            budget: {
                get: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            creatives: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            directDeals: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            performanceReport: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            pretargetingConfig: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface AdexchangebuyerV1_4 {
            new(options?: any): AdexchangebuyerV1_4;
            accounts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            billingInfo: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            budget: {
                get: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            creatives: {
                addDeal: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                removeDeal: (params: any, callback: RequestCallback) => Request;
            };
            marketplacedeals: {
                delete: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            marketplacenotes: {
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            performanceReport: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            pretargetingConfig: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            products: {
                get: (params: any, callback: RequestCallback) => Request;
                search: (params: any, callback: RequestCallback) => Request;
            };
            proposals: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                search: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface AdexchangesellerV1 {
            new(options?: any): AdexchangesellerV1;
            adclients: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            adunits: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                customchannels: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            customchannels: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                adunits: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            reports: {
                generate: (params: any, callback: RequestCallback) => Request;
                saved: {
                    generate: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            urlchannels: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface AdexchangesellerV1_1 {
            new(options?: any): AdexchangesellerV1_1;
            accounts: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            adclients: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            adunits: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                customchannels: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            alerts: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            customchannels: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                adunits: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            metadata: {
                dimensions: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                metrics: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            preferreddeals: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            reports: {
                generate: (params: any, callback: RequestCallback) => Request;
                saved: {
                    generate: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            urlchannels: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface AdexchangesellerV2_0 {
            new(options?: any): AdexchangesellerV2_0;
            accounts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                adclients: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                alerts: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                customchannels: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
                metadata: {
                    dimensions: {
                        list: (params: any, callback: RequestCallback) => Request;
                    };
                    metrics: {
                        list: (params: any, callback: RequestCallback) => Request;
                    };
                };
                preferreddeals: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
                reports: {
                    generate: (params: any, callback: RequestCallback) => Request;
                    saved: {
                        generate: (params: any, callback: RequestCallback) => Request;
                        list: (params: any, callback: RequestCallback) => Request;
                    };
                };
                urlchannels: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
        }
        
        export interface AdminDatatransfer_v1 {
            new(options?: any): AdminDatatransfer_v1;
            applications: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            transfers: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface AdminDirectory_v1 {
            new(options?: any): AdminDirectory_v1;
            asps: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            channels: {
                stop: (params: any, callback: RequestCallback) => Request;
            };
            chromeosdevices: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            customers: {
                get: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            domainAliases: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            domains: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            groups: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                aliases: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    insert: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            members: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            mobiledevices: {
                action: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            notifications: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            orgunits: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            privileges: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            resources: {
                calendars: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    insert: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
            };
            roleAssignments: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            roles: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            schemas: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            tokens: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            users: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                makeAdmin: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                undelete: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                watch: (params: any, callback: RequestCallback) => Request;
                aliases: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    insert: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    watch: (params: any, callback: RequestCallback) => Request;
                };
                photos: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
            };
            verificationCodes: {
                generate: (params: any, callback: RequestCallback) => Request;
                invalidate: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface AdminReports_v1 {
            new(options?: any): AdminReports_v1;
            activities: {
                list: (params: any, callback: RequestCallback) => Request;
                watch: (params: any, callback: RequestCallback) => Request;
            };
            channels: {
                stop: (params: any, callback: RequestCallback) => Request;
            };
            customerUsageReports: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            userUsageReport: {
                get: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface AdsenseV1_2 {
            new(options?: any): AdsenseV1_2;
            accounts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                adclients: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                adunits: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    customchannels: {
                        list: (params: any, callback: RequestCallback) => Request;
                    };
                };
                customchannels: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    adunits: {
                        list: (params: any, callback: RequestCallback) => Request;
                    };
                };
                reports: {
                    generate: (params: any, callback: RequestCallback) => Request;
                    saved: {
                        generate: (params: any, callback: RequestCallback) => Request;
                        list: (params: any, callback: RequestCallback) => Request;
                    };
                };
                savedadstyles: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
                urlchannels: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            adclients: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            adunits: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                customchannels: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            customchannels: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                adunits: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            reports: {
                generate: (params: any, callback: RequestCallback) => Request;
                saved: {
                    generate: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            savedadstyles: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            urlchannels: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface AdsenseV1_3 {
            new(options?: any): AdsenseV1_3;
            accounts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                adclients: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                adunits: {
                    get: (params: any, callback: RequestCallback) => Request;
                    getAdCode: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    customchannels: {
                        list: (params: any, callback: RequestCallback) => Request;
                    };
                };
                alerts: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                customchannels: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    adunits: {
                        list: (params: any, callback: RequestCallback) => Request;
                    };
                };
                reports: {
                    generate: (params: any, callback: RequestCallback) => Request;
                    saved: {
                        generate: (params: any, callback: RequestCallback) => Request;
                        list: (params: any, callback: RequestCallback) => Request;
                    };
                };
                savedadstyles: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
                urlchannels: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            adclients: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            adunits: {
                get: (params: any, callback: RequestCallback) => Request;
                getAdCode: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                customchannels: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            alerts: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            customchannels: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                adunits: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            metadata: {
                dimensions: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                metrics: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            reports: {
                generate: (params: any, callback: RequestCallback) => Request;
                saved: {
                    generate: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            savedadstyles: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            urlchannels: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface AdsenseV1_4 {
            new(options?: any): AdsenseV1_4;
            accounts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                adclients: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                adunits: {
                    get: (params: any, callback: RequestCallback) => Request;
                    getAdCode: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    customchannels: {
                        list: (params: any, callback: RequestCallback) => Request;
                    };
                };
                alerts: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
                customchannels: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    adunits: {
                        list: (params: any, callback: RequestCallback) => Request;
                    };
                };
                payments: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                reports: {
                    generate: (params: any, callback: RequestCallback) => Request;
                    saved: {
                        generate: (params: any, callback: RequestCallback) => Request;
                        list: (params: any, callback: RequestCallback) => Request;
                    };
                };
                savedadstyles: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
                urlchannels: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            adclients: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            adunits: {
                get: (params: any, callback: RequestCallback) => Request;
                getAdCode: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                customchannels: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            alerts: {
                delete: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            customchannels: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                adunits: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            metadata: {
                dimensions: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                metrics: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            payments: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            reports: {
                generate: (params: any, callback: RequestCallback) => Request;
                saved: {
                    generate: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            savedadstyles: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            urlchannels: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface AdsensehostV4_1 {
            new(options?: any): AdsensehostV4_1;
            accounts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                adclients: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
                adunits: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    getAdCode: (params: any, callback: RequestCallback) => Request;
                    insert: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
                reports: {
                    generate: (params: any, callback: RequestCallback) => Request;
                };
            };
            adclients: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            associationsessions: {
                start: (params: any, callback: RequestCallback) => Request;
                verify: (params: any, callback: RequestCallback) => Request;
            };
            customchannels: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            reports: {
                generate: (params: any, callback: RequestCallback) => Request;
            };
            urlchannels: {
                delete: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface AnalyticsV2_4 {
            new(options?: any): AnalyticsV2_4;
            data: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            management: {
                accounts: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                goals: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                profiles: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                segments: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                webproperties: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
        }
        
        export interface AnalyticsV3 {
            new(options?: any): AnalyticsV3;
            data: {
                ga: {
                    get: (params: any, callback: RequestCallback) => Request;
                };
                mcf: {
                    get: (params: any, callback: RequestCallback) => Request;
                };
                realtime: {
                    get: (params: any, callback: RequestCallback) => Request;
                };
            };
            management: {
                accountSummaries: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                accountUserLinks: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    insert: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
                accounts: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                customDataSources: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                customDimensions: {
                    get: (params: any, callback: RequestCallback) => Request;
                    insert: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
                customMetrics: {
                    get: (params: any, callback: RequestCallback) => Request;
                    insert: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
                experiments: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    insert: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
                filters: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    insert: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
                goals: {
                    get: (params: any, callback: RequestCallback) => Request;
                    insert: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
                profileFilterLinks: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    insert: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
                profileUserLinks: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    insert: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
                profiles: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    insert: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
                segments: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                unsampledReports: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    insert: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
                uploads: {
                    deleteUploadData: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    uploadData: (params: any, callback: RequestCallback) => Request;
                };
                webPropertyAdWordsLinks: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    insert: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
                webproperties: {
                    get: (params: any, callback: RequestCallback) => Request;
                    insert: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
                webpropertyUserLinks: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    insert: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
            };
            metadata: {
                columns: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            provisioning: {
                createAccountTicket: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface AndroidenterpriseV1 {
            new(options?: any): AndroidenterpriseV1;
            collections: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            collectionviewers: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            devices: {
                get: (params: any, callback: RequestCallback) => Request;
                getState: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                setState: (params: any, callback: RequestCallback) => Request;
            };
            enterprises: {
                delete: (params: any, callback: RequestCallback) => Request;
                enroll: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getStoreLayout: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                sendTestPushNotification: (params: any, callback: RequestCallback) => Request;
                setAccount: (params: any, callback: RequestCallback) => Request;
                setStoreLayout: (params: any, callback: RequestCallback) => Request;
                unenroll: (params: any, callback: RequestCallback) => Request;
            };
            entitlements: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            grouplicenses: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            grouplicenseusers: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            installs: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            permissions: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            products: {
                approve: (params: any, callback: RequestCallback) => Request;
                generateApprovalUrl: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getAppRestrictionsSchema: (params: any, callback: RequestCallback) => Request;
                getPermissions: (params: any, callback: RequestCallback) => Request;
                updatePermissions: (params: any, callback: RequestCallback) => Request;
            };
            storelayoutclusters: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            storelayoutpages: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            users: {
                generateToken: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getAvailableProductSet: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                revokeToken: (params: any, callback: RequestCallback) => Request;
                setAvailableProductSet: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface AndroidpublisherV1 {
            new(options?: any): AndroidpublisherV1;
            purchases: {
                cancel: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface AndroidpublisherV1_1 {
            new(options?: any): AndroidpublisherV1_1;
            inapppurchases: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            purchases: {
                cancel: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface AndroidpublisherV2 {
            new(options?: any): AndroidpublisherV2;
            edits: {
                commit: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                validate: (params: any, callback: RequestCallback) => Request;
                apklistings: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    deleteall: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
                apks: {
                    addexternallyhosted: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    upload: (params: any, callback: RequestCallback) => Request;
                };
                details: {
                    get: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
                expansionfiles: {
                    get: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                    upload: (params: any, callback: RequestCallback) => Request;
                };
                images: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    deleteall: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    upload: (params: any, callback: RequestCallback) => Request;
                };
                listings: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    deleteall: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
                testers: {
                    get: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
                tracks: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
            };
            entitlements: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            inappproducts: {
                batch: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            purchases: {
                products: {
                    get: (params: any, callback: RequestCallback) => Request;
                };
                subscriptions: {
                    cancel: (params: any, callback: RequestCallback) => Request;
                    defer: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    refund: (params: any, callback: RequestCallback) => Request;
                    revoke: (params: any, callback: RequestCallback) => Request;
                };
            };
        }
        
        export interface AppsactivityV1 {
            new(options?: any): AppsactivityV1;
            activities: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface AppstateV1 {
            new(options?: any): AppstateV1;
            states: {
                clear: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface AutoscalerV1beta2 {
            new(options?: any): AutoscalerV1beta2;
            autoscalers: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            zoneOperations: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            zones: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface BigqueryV2 {
            new(options?: any): BigqueryV2;
            datasets: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            jobs: {
                cancel: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getQueryResults: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                query: (params: any, callback: RequestCallback) => Request;
            };
            projects: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            tabledata: {
                insertAll: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            tables: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface BloggerV2 {
            new(options?: any): BloggerV2;
            blogs: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            comments: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            pages: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            posts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            users: {
                get: (params: any, callback: RequestCallback) => Request;
                blogs: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
        }
        
        export interface BloggerV3 {
            new(options?: any): BloggerV3;
            blogUserInfos: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            blogs: {
                get: (params: any, callback: RequestCallback) => Request;
                getByUrl: (params: any, callback: RequestCallback) => Request;
                listByUser: (params: any, callback: RequestCallback) => Request;
            };
            comments: {
                approve: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                listByBlog: (params: any, callback: RequestCallback) => Request;
                markAsSpam: (params: any, callback: RequestCallback) => Request;
                removeContent: (params: any, callback: RequestCallback) => Request;
            };
            pageViews: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            pages: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                publish: (params: any, callback: RequestCallback) => Request;
                revert: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            postUserInfos: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            posts: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getByPath: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                publish: (params: any, callback: RequestCallback) => Request;
                revert: (params: any, callback: RequestCallback) => Request;
                search: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            users: {
                get: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface BooksV1 {
            new(options?: any): BooksV1;
            bookshelves: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                volumes: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            cloudloading: {
                addBook: (params: any, callback: RequestCallback) => Request;
                deleteBook: (params: any, callback: RequestCallback) => Request;
                updateBook: (params: any, callback: RequestCallback) => Request;
            };
            dictionary: {
                listOfflineMetadata: (params: any, callback: RequestCallback) => Request;
            };
            layers: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                annotationData: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
                volumeAnnotations: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            myconfig: {
                getUserSettings: (params: any, callback: RequestCallback) => Request;
                releaseDownloadAccess: (params: any, callback: RequestCallback) => Request;
                requestAccess: (params: any, callback: RequestCallback) => Request;
                syncVolumeLicenses: (params: any, callback: RequestCallback) => Request;
                updateUserSettings: (params: any, callback: RequestCallback) => Request;
            };
            mylibrary: {
                annotations: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    insert: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    summary: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
                bookshelves: {
                    addVolume: (params: any, callback: RequestCallback) => Request;
                    clearVolumes: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    moveVolume: (params: any, callback: RequestCallback) => Request;
                    removeVolume: (params: any, callback: RequestCallback) => Request;
                    volumes: {
                        list: (params: any, callback: RequestCallback) => Request;
                    };
                };
                readingpositions: {
                    get: (params: any, callback: RequestCallback) => Request;
                    setPosition: (params: any, callback: RequestCallback) => Request;
                };
            };
            notification: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            onboarding: {
                listCategories: (params: any, callback: RequestCallback) => Request;
                listCategoryVolumes: (params: any, callback: RequestCallback) => Request;
            };
            personalizedstream: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            promooffer: {
                accept: (params: any, callback: RequestCallback) => Request;
                dismiss: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
            };
            series: {
                get: (params: any, callback: RequestCallback) => Request;
                membership: {
                    get: (params: any, callback: RequestCallback) => Request;
                };
            };
            volumes: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                associated: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                mybooks: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                recommended: {
                    list: (params: any, callback: RequestCallback) => Request;
                    rate: (params: any, callback: RequestCallback) => Request;
                };
                useruploaded: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
        }
        
        export interface CalendarV3 {
            new(options?: any): CalendarV3;
            acl: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                watch: (params: any, callback: RequestCallback) => Request;
            };
            calendarList: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                watch: (params: any, callback: RequestCallback) => Request;
            };
            calendars: {
                clear: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            channels: {
                stop: (params: any, callback: RequestCallback) => Request;
            };
            colors: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            events: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                import: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                instances: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                move: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                quickAdd: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                watch: (params: any, callback: RequestCallback) => Request;
            };
            freebusy: {
                query: (params: any, callback: RequestCallback) => Request;
            };
            settings: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                watch: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface CivicinfoV2 {
            new(options?: any): CivicinfoV2;
            divisions: {
                search: (params: any, callback: RequestCallback) => Request;
            };
            elections: {
                electionQuery: (params: any, callback: RequestCallback) => Request;
                voterInfoQuery: (params: any, callback: RequestCallback) => Request;
            };
            representatives: {
                representativeInfoByAddress: (params: any, callback: RequestCallback) => Request;
                representativeInfoByDivision: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface CloudbuildV1 {
            new(options?: any): CloudbuildV1;
            projects: {
                builds: {
                    get: (params: any, callback: RequestCallback) => Request;
                    create: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    cancel: (params: any, callback: RequestCallback) => Request;
                };
            };
            operations: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface CloudlatencytestV2 {
            new(options?: any): CloudlatencytestV2;
            statscollection: {
                updateaggregatedstats: (params: any, callback: RequestCallback) => Request;
                updatestats: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface CloudmonitoringV2beta2 {
            new(options?: any): CloudmonitoringV2beta2;
            metricDescriptors: {
                create: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            timeseries: {
                list: (params: any, callback: RequestCallback) => Request;
                write: (params: any, callback: RequestCallback) => Request;
            };
            timeseriesDescriptors: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface ClouduseraccountsAlpha {
            new(options?: any): ClouduseraccountsAlpha;
            globalAccountsOperations: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            groups: {
                addMember: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getIamPolicy: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                removeMember: (params: any, callback: RequestCallback) => Request;
                setIamPolicy: (params: any, callback: RequestCallback) => Request;
                testIamPermissions: (params: any, callback: RequestCallback) => Request;
            };
            linux: {
                getAuthorizedKeysView: (params: any, callback: RequestCallback) => Request;
                getLinuxAccountViews: (params: any, callback: RequestCallback) => Request;
            };
            users: {
                addPublicKey: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getIamPolicy: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                removePublicKey: (params: any, callback: RequestCallback) => Request;
                setIamPolicy: (params: any, callback: RequestCallback) => Request;
                testIamPermissions: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface ClouduseraccountsBeta {
            new(options?: any): ClouduseraccountsBeta;
            globalAccountsOperations: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            groups: {
                addMember: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                removeMember: (params: any, callback: RequestCallback) => Request;
            };
            linux: {
                getAuthorizedKeysView: (params: any, callback: RequestCallback) => Request;
                getLinuxAccountViews: (params: any, callback: RequestCallback) => Request;
            };
            users: {
                addPublicKey: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                removePublicKey: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface ClouduseraccountsVm_alpha {
            new(options?: any): ClouduseraccountsVm_alpha;
            globalAccountsOperations: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            groups: {
                addMember: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getIamPolicy: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                removeMember: (params: any, callback: RequestCallback) => Request;
                setIamPolicy: (params: any, callback: RequestCallback) => Request;
                testIamPermissions: (params: any, callback: RequestCallback) => Request;
            };
            linux: {
                getAuthorizedKeysView: (params: any, callback: RequestCallback) => Request;
                getLinuxAccountViews: (params: any, callback: RequestCallback) => Request;
            };
            users: {
                addPublicKey: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getIamPolicy: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                removePublicKey: (params: any, callback: RequestCallback) => Request;
                setIamPolicy: (params: any, callback: RequestCallback) => Request;
                testIamPermissions: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface ClouduseraccountsVm_beta {
            new(options?: any): ClouduseraccountsVm_beta;
            globalAccountsOperations: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            groups: {
                addMember: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                removeMember: (params: any, callback: RequestCallback) => Request;
            };
            linux: {
                getAuthorizedKeysView: (params: any, callback: RequestCallback) => Request;
                getLinuxAccountViews: (params: any, callback: RequestCallback) => Request;
            };
            users: {
                addPublicKey: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                removePublicKey: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface ComputeBeta {
            new(options?: any): ComputeBeta;
            addresses: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            autoscalers: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            backendServices: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getHealth: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            diskTypes: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            disks: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                createSnapshot: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                resize: (params: any, callback: RequestCallback) => Request;
            };
            firewalls: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            forwardingRules: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                setTarget: (params: any, callback: RequestCallback) => Request;
            };
            globalAddresses: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            globalForwardingRules: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                setTarget: (params: any, callback: RequestCallback) => Request;
            };
            globalOperations: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            httpHealthChecks: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            httpsHealthChecks: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            images: {
                delete: (params: any, callback: RequestCallback) => Request;
                deprecate: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getFromFamily: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            instanceGroupManagers: {
                abandonInstances: (params: any, callback: RequestCallback) => Request;
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                deleteInstances: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                listManagedInstances: (params: any, callback: RequestCallback) => Request;
                recreateInstances: (params: any, callback: RequestCallback) => Request;
                resize: (params: any, callback: RequestCallback) => Request;
                setAutoHealingPolicies: (params: any, callback: RequestCallback) => Request;
                setInstanceTemplate: (params: any, callback: RequestCallback) => Request;
                setTargetPools: (params: any, callback: RequestCallback) => Request;
            };
            instanceGroups: {
                addInstances: (params: any, callback: RequestCallback) => Request;
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                listInstances: (params: any, callback: RequestCallback) => Request;
                removeInstances: (params: any, callback: RequestCallback) => Request;
                setNamedPorts: (params: any, callback: RequestCallback) => Request;
            };
            instanceTemplates: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            instances: {
                addAccessConfig: (params: any, callback: RequestCallback) => Request;
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                attachDisk: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                deleteAccessConfig: (params: any, callback: RequestCallback) => Request;
                detachDisk: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getSerialPortOutput: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                reset: (params: any, callback: RequestCallback) => Request;
                setDiskAutoDelete: (params: any, callback: RequestCallback) => Request;
                setLabels: (params: any, callback: RequestCallback) => Request;
                setMachineType: (params: any, callback: RequestCallback) => Request;
                setMetadata: (params: any, callback: RequestCallback) => Request;
                setScheduling: (params: any, callback: RequestCallback) => Request;
                setTags: (params: any, callback: RequestCallback) => Request;
                start: (params: any, callback: RequestCallback) => Request;
                stop: (params: any, callback: RequestCallback) => Request;
            };
            licenses: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            machineTypes: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            networks: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            projects: {
                get: (params: any, callback: RequestCallback) => Request;
                setCommonInstanceMetadata: (params: any, callback: RequestCallback) => Request;
                setUsageExportBucket: (params: any, callback: RequestCallback) => Request;
            };
            regionOperations: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            regions: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            routers: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getRouterStatus: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            routes: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            snapshots: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            sslCertificates: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            subnetworks: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            targetHttpProxies: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                setUrlMap: (params: any, callback: RequestCallback) => Request;
            };
            targetHttpsProxies: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                setSslCertificates: (params: any, callback: RequestCallback) => Request;
                setUrlMap: (params: any, callback: RequestCallback) => Request;
            };
            targetInstances: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            targetPools: {
                addHealthCheck: (params: any, callback: RequestCallback) => Request;
                addInstance: (params: any, callback: RequestCallback) => Request;
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getHealth: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                removeHealthCheck: (params: any, callback: RequestCallback) => Request;
                removeInstance: (params: any, callback: RequestCallback) => Request;
                setBackup: (params: any, callback: RequestCallback) => Request;
            };
            targetVpnGateways: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            urlMaps: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                validate: (params: any, callback: RequestCallback) => Request;
            };
            vpnTunnels: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            zoneOperations: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            zones: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface ComputeV1 {
            new(options?: any): ComputeV1;
            addresses: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            autoscalers: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            backendServices: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getHealth: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            diskTypes: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            disks: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                createSnapshot: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            firewalls: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            forwardingRules: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                setTarget: (params: any, callback: RequestCallback) => Request;
            };
            globalAddresses: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            globalForwardingRules: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                setTarget: (params: any, callback: RequestCallback) => Request;
            };
            globalOperations: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            httpHealthChecks: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            httpsHealthChecks: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            images: {
                delete: (params: any, callback: RequestCallback) => Request;
                deprecate: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            instanceGroupManagers: {
                abandonInstances: (params: any, callback: RequestCallback) => Request;
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                deleteInstances: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                listManagedInstances: (params: any, callback: RequestCallback) => Request;
                recreateInstances: (params: any, callback: RequestCallback) => Request;
                resize: (params: any, callback: RequestCallback) => Request;
                setInstanceTemplate: (params: any, callback: RequestCallback) => Request;
                setTargetPools: (params: any, callback: RequestCallback) => Request;
            };
            instanceGroups: {
                addInstances: (params: any, callback: RequestCallback) => Request;
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                listInstances: (params: any, callback: RequestCallback) => Request;
                removeInstances: (params: any, callback: RequestCallback) => Request;
                setNamedPorts: (params: any, callback: RequestCallback) => Request;
            };
            instanceTemplates: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            instances: {
                addAccessConfig: (params: any, callback: RequestCallback) => Request;
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                attachDisk: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                deleteAccessConfig: (params: any, callback: RequestCallback) => Request;
                detachDisk: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getSerialPortOutput: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                reset: (params: any, callback: RequestCallback) => Request;
                setDiskAutoDelete: (params: any, callback: RequestCallback) => Request;
                setMachineType: (params: any, callback: RequestCallback) => Request;
                setMetadata: (params: any, callback: RequestCallback) => Request;
                setScheduling: (params: any, callback: RequestCallback) => Request;
                setTags: (params: any, callback: RequestCallback) => Request;
                start: (params: any, callback: RequestCallback) => Request;
                stop: (params: any, callback: RequestCallback) => Request;
            };
            licenses: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            machineTypes: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            networks: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            projects: {
                get: (params: any, callback: RequestCallback) => Request;
                moveDisk: (params: any, callback: RequestCallback) => Request;
                moveInstance: (params: any, callback: RequestCallback) => Request;
                setCommonInstanceMetadata: (params: any, callback: RequestCallback) => Request;
                setUsageExportBucket: (params: any, callback: RequestCallback) => Request;
            };
            regionOperations: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            regions: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            routes: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            snapshots: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            sslCertificates: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            subnetworks: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            targetHttpProxies: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                setUrlMap: (params: any, callback: RequestCallback) => Request;
            };
            targetHttpsProxies: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                setSslCertificates: (params: any, callback: RequestCallback) => Request;
                setUrlMap: (params: any, callback: RequestCallback) => Request;
            };
            targetInstances: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            targetPools: {
                addHealthCheck: (params: any, callback: RequestCallback) => Request;
                addInstance: (params: any, callback: RequestCallback) => Request;
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getHealth: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                removeHealthCheck: (params: any, callback: RequestCallback) => Request;
                removeInstance: (params: any, callback: RequestCallback) => Request;
                setBackup: (params: any, callback: RequestCallback) => Request;
            };
            targetVpnGateways: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            urlMaps: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                validate: (params: any, callback: RequestCallback) => Request;
            };
            vpnTunnels: {
                aggregatedList: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            zoneOperations: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            zones: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface ContentV2sandbox {
            new(options?: any): ContentV2sandbox;
            orders: {
                acknowledge: (params: any, callback: RequestCallback) => Request;
                advancetestorder: (params: any, callback: RequestCallback) => Request;
                cancel: (params: any, callback: RequestCallback) => Request;
                cancellineitem: (params: any, callback: RequestCallback) => Request;
                createtestorder: (params: any, callback: RequestCallback) => Request;
                custombatch: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getbymerchantorderid: (params: any, callback: RequestCallback) => Request;
                gettestordertemplate: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                refund: (params: any, callback: RequestCallback) => Request;
                returnlineitem: (params: any, callback: RequestCallback) => Request;
                shiplineitems: (params: any, callback: RequestCallback) => Request;
                updatemerchantorderid: (params: any, callback: RequestCallback) => Request;
                updateshipment: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface ContentV2 {
            new(options?: any): ContentV2;
            accounts: {
                authinfo: (params: any, callback: RequestCallback) => Request;
                custombatch: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            accountshipping: {
                custombatch: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            accountstatuses: {
                custombatch: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            accounttax: {
                custombatch: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            datafeeds: {
                custombatch: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            datafeedstatuses: {
                custombatch: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            inventory: {
                custombatch: (params: any, callback: RequestCallback) => Request;
                set: (params: any, callback: RequestCallback) => Request;
            };
            orders: {
                acknowledge: (params: any, callback: RequestCallback) => Request;
                advancetestorder: (params: any, callback: RequestCallback) => Request;
                cancel: (params: any, callback: RequestCallback) => Request;
                cancellineitem: (params: any, callback: RequestCallback) => Request;
                createtestorder: (params: any, callback: RequestCallback) => Request;
                custombatch: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getbymerchantorderid: (params: any, callback: RequestCallback) => Request;
                gettestordertemplate: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                refund: (params: any, callback: RequestCallback) => Request;
                returnlineitem: (params: any, callback: RequestCallback) => Request;
                shiplineitems: (params: any, callback: RequestCallback) => Request;
                updatemerchantorderid: (params: any, callback: RequestCallback) => Request;
                updateshipment: (params: any, callback: RequestCallback) => Request;
            };
            products: {
                custombatch: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            productstatuses: {
                custombatch: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface CoordinateV1 {
            new(options?: any): CoordinateV1;
            customFieldDef: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            jobs: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            location: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            schedule: {
                get: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            team: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            worker: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface CustomsearchV1 {
            new(options?: any): CustomsearchV1;
            cse: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DatastoreV1beta1 {
            new(options?: any): DatastoreV1beta1;
            datasets: {
                allocateIds: (params: any, callback: RequestCallback) => Request;
                beginTransaction: (params: any, callback: RequestCallback) => Request;
                blindWrite: (params: any, callback: RequestCallback) => Request;
                commit: (params: any, callback: RequestCallback) => Request;
                lookup: (params: any, callback: RequestCallback) => Request;
                rollback: (params: any, callback: RequestCallback) => Request;
                runQuery: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DatastoreV1beta2 {
            new(options?: any): DatastoreV1beta2;
            datasets: {
                allocateIds: (params: any, callback: RequestCallback) => Request;
                beginTransaction: (params: any, callback: RequestCallback) => Request;
                commit: (params: any, callback: RequestCallback) => Request;
                lookup: (params: any, callback: RequestCallback) => Request;
                rollback: (params: any, callback: RequestCallback) => Request;
                runQuery: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DeploymentmanagerV2 {
            new(options?: any): DeploymentmanagerV2;
            deployments: {
                cancelPreview: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                stop: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            manifests: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            operations: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            resources: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            types: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DeploymentmanagerV2beta1 {
            new(options?: any): DeploymentmanagerV2beta1;
            deployments: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            manifests: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            operations: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            resources: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            types: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DeploymentmanagerV2beta2 {
            new(options?: any): DeploymentmanagerV2beta2;
            deployments: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            manifests: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            operations: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            resources: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            types: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DfareportingV1 {
            new(options?: any): DfareportingV1;
            dimensionValues: {
                query: (params: any, callback: RequestCallback) => Request;
            };
            files: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            reports: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                run: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                files: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            userProfiles: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DfareportingV1_1 {
            new(options?: any): DfareportingV1_1;
            dimensionValues: {
                query: (params: any, callback: RequestCallback) => Request;
            };
            files: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            reports: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                run: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                files: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            userProfiles: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DfareportingV1_2 {
            new(options?: any): DfareportingV1_2;
            dimensionValues: {
                query: (params: any, callback: RequestCallback) => Request;
            };
            files: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            reports: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                run: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                files: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            userProfiles: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DfareportingV1_3 {
            new(options?: any): DfareportingV1_3;
            dimensionValues: {
                query: (params: any, callback: RequestCallback) => Request;
            };
            files: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            reports: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                run: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                compatibleFields: {
                    query: (params: any, callback: RequestCallback) => Request;
                };
                files: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            userProfiles: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DfareportingV2_0 {
            new(options?: any): DfareportingV2_0;
            accountActiveAdSummaries: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            accountPermissionGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            accountPermissions: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            accountUserProfiles: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            accounts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            ads: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            advertiserGroups: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            advertisers: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            browsers: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            campaignCreativeAssociations: {
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            campaigns: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            changeLogs: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            cities: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            connectionTypes: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            contentCategories: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            countries: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            creativeAssets: {
                insert: (params: any, callback: RequestCallback) => Request;
            };
            creativeFieldValues: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            creativeFields: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            creativeGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            creatives: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            dimensionValues: {
                query: (params: any, callback: RequestCallback) => Request;
            };
            directorySiteContacts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            directorySites: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            eventTags: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            files: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            floodlightActivities: {
                delete: (params: any, callback: RequestCallback) => Request;
                generatetag: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            floodlightActivityGroups: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            floodlightConfigurations: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            landingPages: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            metros: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            mobileCarriers: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            operatingSystemVersions: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            operatingSystems: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            placementGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            placementStrategies: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            placements: {
                generatetags: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            platformTypes: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            postalCodes: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            regions: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            reports: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                run: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                compatibleFields: {
                    query: (params: any, callback: RequestCallback) => Request;
                };
                files: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            sites: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            sizes: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            subaccounts: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            userProfiles: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            userRolePermissionGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            userRolePermissions: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            userRoles: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DfareportingV2_1 {
            new(options?: any): DfareportingV2_1;
            accountActiveAdSummaries: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            accountPermissionGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            accountPermissions: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            accountUserProfiles: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            accounts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            ads: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            advertiserGroups: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            advertisers: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            browsers: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            campaignCreativeAssociations: {
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            campaigns: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            changeLogs: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            cities: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            connectionTypes: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            contentCategories: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            countries: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            creativeAssets: {
                insert: (params: any, callback: RequestCallback) => Request;
            };
            creativeFieldValues: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            creativeFields: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            creativeGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            creatives: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            dimensionValues: {
                query: (params: any, callback: RequestCallback) => Request;
            };
            directorySiteContacts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            directorySites: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            eventTags: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            files: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            floodlightActivities: {
                delete: (params: any, callback: RequestCallback) => Request;
                generatetag: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            floodlightActivityGroups: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            floodlightConfigurations: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            inventoryItems: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            landingPages: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            metros: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            mobileCarriers: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            operatingSystemVersions: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            operatingSystems: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            orderDocuments: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            orders: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            placementGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            placementStrategies: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            placements: {
                generatetags: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            platformTypes: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            postalCodes: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            projects: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            regions: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            remarketingListShares: {
                get: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            remarketingLists: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            reports: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                run: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                compatibleFields: {
                    query: (params: any, callback: RequestCallback) => Request;
                };
                files: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            sites: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            sizes: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            subaccounts: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            targetableRemarketingLists: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            userProfiles: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            userRolePermissionGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            userRolePermissions: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            userRoles: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DfareportingV2_2 {
            new(options?: any): DfareportingV2_2;
            accountActiveAdSummaries: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            accountPermissionGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            accountPermissions: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            accountUserProfiles: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            accounts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            ads: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            advertiserGroups: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            advertisers: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            browsers: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            campaignCreativeAssociations: {
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            campaigns: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            changeLogs: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            cities: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            connectionTypes: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            contentCategories: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            countries: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            creativeAssets: {
                insert: (params: any, callback: RequestCallback) => Request;
            };
            creativeFieldValues: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            creativeFields: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            creativeGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            creatives: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            dimensionValues: {
                query: (params: any, callback: RequestCallback) => Request;
            };
            directorySiteContacts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            directorySites: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            eventTags: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            files: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            floodlightActivities: {
                delete: (params: any, callback: RequestCallback) => Request;
                generatetag: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            floodlightActivityGroups: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            floodlightConfigurations: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            inventoryItems: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            landingPages: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            metros: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            mobileCarriers: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            operatingSystemVersions: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            operatingSystems: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            orderDocuments: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            orders: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            placementGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            placementStrategies: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            placements: {
                generatetags: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            platformTypes: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            postalCodes: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            projects: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            regions: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            remarketingListShares: {
                get: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            remarketingLists: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            reports: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                run: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                compatibleFields: {
                    query: (params: any, callback: RequestCallback) => Request;
                };
                files: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            sites: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            sizes: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            subaccounts: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            targetableRemarketingLists: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            userProfiles: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            userRolePermissionGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            userRolePermissions: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            userRoles: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DfareportingV2_3 {
            new(options?: any): DfareportingV2_3;
            accountActiveAdSummaries: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            accountPermissionGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            accountPermissions: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            accountUserProfiles: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            accounts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            ads: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            advertiserGroups: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            advertisers: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            browsers: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            campaignCreativeAssociations: {
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            campaigns: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            changeLogs: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            cities: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            connectionTypes: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            contentCategories: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            countries: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            creativeAssets: {
                insert: (params: any, callback: RequestCallback) => Request;
            };
            creativeFieldValues: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            creativeFields: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            creativeGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            creatives: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            dimensionValues: {
                query: (params: any, callback: RequestCallback) => Request;
            };
            directorySiteContacts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            directorySites: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            eventTags: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            files: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            floodlightActivities: {
                delete: (params: any, callback: RequestCallback) => Request;
                generatetag: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            floodlightActivityGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            floodlightConfigurations: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            inventoryItems: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            landingPages: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            metros: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            mobileCarriers: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            operatingSystemVersions: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            operatingSystems: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            orderDocuments: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            orders: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            placementGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            placementStrategies: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            placements: {
                generatetags: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            platformTypes: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            postalCodes: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            projects: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            regions: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            remarketingListShares: {
                get: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            remarketingLists: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            reports: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                run: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                compatibleFields: {
                    query: (params: any, callback: RequestCallback) => Request;
                };
                files: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            sites: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            sizes: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            subaccounts: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            targetableRemarketingLists: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            userProfiles: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            userRolePermissionGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            userRolePermissions: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            userRoles: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DfareportingV2_4 {
            new(options?: any): DfareportingV2_4;
            accountActiveAdSummaries: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            accountPermissionGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            accountPermissions: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            accountUserProfiles: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            accounts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            ads: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            advertiserGroups: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            advertisers: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            browsers: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            campaignCreativeAssociations: {
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            campaigns: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            changeLogs: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            cities: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            connectionTypes: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            contentCategories: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            countries: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            creativeAssets: {
                insert: (params: any, callback: RequestCallback) => Request;
            };
            creativeFieldValues: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            creativeFields: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            creativeGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            creatives: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            dimensionValues: {
                query: (params: any, callback: RequestCallback) => Request;
            };
            directorySiteContacts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            directorySites: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            eventTags: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            files: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            floodlightActivities: {
                delete: (params: any, callback: RequestCallback) => Request;
                generatetag: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            floodlightActivityGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            floodlightConfigurations: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            inventoryItems: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            landingPages: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            metros: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            mobileCarriers: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            operatingSystemVersions: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            operatingSystems: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            orderDocuments: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            orders: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            placementGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            placementStrategies: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            placements: {
                generatetags: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            platformTypes: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            postalCodes: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            projects: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            regions: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            remarketingListShares: {
                get: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            remarketingLists: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            reports: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                run: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                compatibleFields: {
                    query: (params: any, callback: RequestCallback) => Request;
                };
                files: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            sites: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            sizes: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            subaccounts: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            targetableRemarketingLists: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            userProfiles: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            userRolePermissionGroups: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            userRolePermissions: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            userRoles: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DiscoveryV1 {
            new(options?: any): DiscoveryV1;
            apis: {
                getRest: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DnsV1 {
            new(options?: any): DnsV1;
            changes: {
                create: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            managedZones: {
                create: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            projects: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            resourceRecordSets: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DoubleclickbidmanagerV1 {
            new(options?: any): DoubleclickbidmanagerV1;
            lineitems: {
                downloadlineitems: (params: any, callback: RequestCallback) => Request;
                uploadlineitems: (params: any, callback: RequestCallback) => Request;
            };
            queries: {
                createquery: (params: any, callback: RequestCallback) => Request;
                deletequery: (params: any, callback: RequestCallback) => Request;
                getquery: (params: any, callback: RequestCallback) => Request;
                listqueries: (params: any, callback: RequestCallback) => Request;
                runquery: (params: any, callback: RequestCallback) => Request;
            };
            reports: {
                listreports: (params: any, callback: RequestCallback) => Request;
            };
            rubicon: {
                notifyproposalchange: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DoubleclicksearchV2 {
            new(options?: any): DoubleclicksearchV2;
            conversion: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                updateAvailability: (params: any, callback: RequestCallback) => Request;
            };
            reports: {
                generate: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getFile: (params: any, callback: RequestCallback) => Request;
                request: (params: any, callback: RequestCallback) => Request;
            };
            savedColumns: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DriveV1 {
            new(options?: any): DriveV1;
            files: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DriveV2 {
            new(options?: any): DriveV2;
            about: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            apps: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            changes: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                watch: (params: any, callback: RequestCallback) => Request;
            };
            channels: {
                stop: (params: any, callback: RequestCallback) => Request;
            };
            children: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            comments: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            files: {
                copy: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                emptyTrash: (params: any, callback: RequestCallback) => Request;
                export: (params: any, callback: RequestCallback) => Request;
                generateIds: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                touch: (params: any, callback: RequestCallback) => Request;
                trash: (params: any, callback: RequestCallback) => Request;
                untrash: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                watch: (params: any, callback: RequestCallback) => Request;
            };
            parents: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            permissions: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getIdForEmail: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            properties: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            realtime: {
                get: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            replies: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            revisions: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DriveV3 {
            new(options?: any): DriveV3;
            about: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            changes: {
                getStartPageToken: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                watch: (params: any, callback: RequestCallback) => Request;
            };
            channels: {
                stop: (params: any, callback: RequestCallback) => Request;
            };
            comments: {
                create: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            files: {
                copy: (params: any, callback: RequestCallback) => Request;
                create: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                emptyTrash: (params: any, callback: RequestCallback) => Request;
                export: (params: any, callback: RequestCallback) => Request;
                generateIds: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                watch: (params: any, callback: RequestCallback) => Request;
            };
            permissions: {
                create: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            replies: {
                create: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            revisions: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface FitnessV1 {
            new(options?: any): FitnessV1;
            users: {
                dataSources: {
                    create: (params: any, callback: RequestCallback) => Request;
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                    datasets: {
                        delete: (params: any, callback: RequestCallback) => Request;
                        get: (params: any, callback: RequestCallback) => Request;
                        patch: (params: any, callback: RequestCallback) => Request;
                    };
                };
                dataset: {
                    aggregate: (params: any, callback: RequestCallback) => Request;
                };
                sessions: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
            };
        }
        
        export interface FreebaseV1 {
            new(options?: any): FreebaseV1;
            reconcile: (params: any, callback: RequestCallback) => Request;
            search: (params: any, callback: RequestCallback) => Request;
        }
        
        export interface FusiontablesV1 {
            new(options?: any): FusiontablesV1;
            column: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            query: {
                sql: (params: any, callback: RequestCallback) => Request;
                sqlGet: (params: any, callback: RequestCallback) => Request;
            };
            style: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            table: {
                copy: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                importRows: (params: any, callback: RequestCallback) => Request;
                importTable: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            task: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            template: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface FusiontablesV2 {
            new(options?: any): FusiontablesV2;
            column: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            query: {
                sql: (params: any, callback: RequestCallback) => Request;
                sqlGet: (params: any, callback: RequestCallback) => Request;
            };
            style: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            table: {
                copy: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                importRows: (params: any, callback: RequestCallback) => Request;
                importTable: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                replaceRows: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            task: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            template: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface GamesV1 {
            new(options?: any): GamesV1;
            achievementDefinitions: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            achievements: {
                increment: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                reveal: (params: any, callback: RequestCallback) => Request;
                setStepsAtLeast: (params: any, callback: RequestCallback) => Request;
                unlock: (params: any, callback: RequestCallback) => Request;
                updateMultiple: (params: any, callback: RequestCallback) => Request;
            };
            applications: {
                get: (params: any, callback: RequestCallback) => Request;
                played: (params: any, callback: RequestCallback) => Request;
                verify: (params: any, callback: RequestCallback) => Request;
            };
            events: {
                listByPlayer: (params: any, callback: RequestCallback) => Request;
                listDefinitions: (params: any, callback: RequestCallback) => Request;
                record: (params: any, callback: RequestCallback) => Request;
            };
            leaderboards: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            metagame: {
                getMetagameConfig: (params: any, callback: RequestCallback) => Request;
                listCategoriesByPlayer: (params: any, callback: RequestCallback) => Request;
            };
            players: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            pushtokens: {
                remove: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            questMilestones: {
                claim: (params: any, callback: RequestCallback) => Request;
            };
            quests: {
                accept: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            revisions: {
                check: (params: any, callback: RequestCallback) => Request;
            };
            rooms: {
                create: (params: any, callback: RequestCallback) => Request;
                decline: (params: any, callback: RequestCallback) => Request;
                dismiss: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                join: (params: any, callback: RequestCallback) => Request;
                leave: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                reportStatus: (params: any, callback: RequestCallback) => Request;
            };
            scores: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                listWindow: (params: any, callback: RequestCallback) => Request;
                submit: (params: any, callback: RequestCallback) => Request;
                submitMultiple: (params: any, callback: RequestCallback) => Request;
            };
            snapshots: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            turnBasedMatches: {
                cancel: (params: any, callback: RequestCallback) => Request;
                create: (params: any, callback: RequestCallback) => Request;
                decline: (params: any, callback: RequestCallback) => Request;
                dismiss: (params: any, callback: RequestCallback) => Request;
                finish: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                join: (params: any, callback: RequestCallback) => Request;
                leave: (params: any, callback: RequestCallback) => Request;
                leaveTurn: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                rematch: (params: any, callback: RequestCallback) => Request;
                sync: (params: any, callback: RequestCallback) => Request;
                takeTurn: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface GamesconfigurationV1configuration {
            new(options?: any): GamesconfigurationV1configuration;
            achievementConfigurations: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            imageConfigurations: {
                upload: (params: any, callback: RequestCallback) => Request;
            };
            leaderboardConfigurations: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface GamesmanagementV1management {
            new(options?: any): GamesmanagementV1management;
            achievements: {
                reset: (params: any, callback: RequestCallback) => Request;
                resetAll: (params: any, callback: RequestCallback) => Request;
                resetAllForAllPlayers: (params: any, callback: RequestCallback) => Request;
                resetForAllPlayers: (params: any, callback: RequestCallback) => Request;
                resetMultipleForAllPlayers: (params: any, callback: RequestCallback) => Request;
            };
            applications: {
                listHidden: (params: any, callback: RequestCallback) => Request;
            };
            events: {
                reset: (params: any, callback: RequestCallback) => Request;
                resetAll: (params: any, callback: RequestCallback) => Request;
                resetAllForAllPlayers: (params: any, callback: RequestCallback) => Request;
                resetForAllPlayers: (params: any, callback: RequestCallback) => Request;
                resetMultipleForAllPlayers: (params: any, callback: RequestCallback) => Request;
            };
            players: {
                hide: (params: any, callback: RequestCallback) => Request;
                unhide: (params: any, callback: RequestCallback) => Request;
            };
            quests: {
                reset: (params: any, callback: RequestCallback) => Request;
                resetAll: (params: any, callback: RequestCallback) => Request;
                resetAllForAllPlayers: (params: any, callback: RequestCallback) => Request;
                resetForAllPlayers: (params: any, callback: RequestCallback) => Request;
                resetMultipleForAllPlayers: (params: any, callback: RequestCallback) => Request;
            };
            rooms: {
                reset: (params: any, callback: RequestCallback) => Request;
                resetForAllPlayers: (params: any, callback: RequestCallback) => Request;
            };
            scores: {
                reset: (params: any, callback: RequestCallback) => Request;
                resetAll: (params: any, callback: RequestCallback) => Request;
                resetAllForAllPlayers: (params: any, callback: RequestCallback) => Request;
                resetForAllPlayers: (params: any, callback: RequestCallback) => Request;
                resetMultipleForAllPlayers: (params: any, callback: RequestCallback) => Request;
            };
            turnBasedMatches: {
                reset: (params: any, callback: RequestCallback) => Request;
                resetForAllPlayers: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface GanV1beta1 {
            new(options?: any): GanV1beta1;
            advertisers: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            ccOffers: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            events: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            links: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            publishers: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            reports: {
                get: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface GenomicsV1beta2 {
            new(options?: any): GenomicsV1beta2;
            annotationSets: {
                create: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                search: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            annotations: {
                batchCreate: (params: any, callback: RequestCallback) => Request;
                create: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                search: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            callsets: {
                create: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                search: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            datasets: {
                create: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                undelete: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            experimental: {
                jobs: {
                    create: (params: any, callback: RequestCallback) => Request;
                };
            };
            jobs: {
                cancel: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                search: (params: any, callback: RequestCallback) => Request;
            };
            readgroupsets: {
                delete: (params: any, callback: RequestCallback) => Request;
                export: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                import: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                search: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                coveragebuckets: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            reads: {
                search: (params: any, callback: RequestCallback) => Request;
            };
            references: {
                get: (params: any, callback: RequestCallback) => Request;
                search: (params: any, callback: RequestCallback) => Request;
                bases: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            referencesets: {
                get: (params: any, callback: RequestCallback) => Request;
                search: (params: any, callback: RequestCallback) => Request;
            };
            variants: {
                create: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                search: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            variantsets: {
                create: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                export: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                importVariants: (params: any, callback: RequestCallback) => Request;
                mergeVariants: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                search: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface GmailV1 {
            new(options?: any): GmailV1;
            users: {
                getProfile: (params: any, callback: RequestCallback) => Request;
                stop: (params: any, callback: RequestCallback) => Request;
                watch: (params: any, callback: RequestCallback) => Request;
                drafts: {
                    create: (params: any, callback: RequestCallback) => Request;
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    send: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
                history: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                labels: {
                    create: (params: any, callback: RequestCallback) => Request;
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
                messages: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    import: (params: any, callback: RequestCallback) => Request;
                    insert: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    modify: (params: any, callback: RequestCallback) => Request;
                    send: (params: any, callback: RequestCallback) => Request;
                    trash: (params: any, callback: RequestCallback) => Request;
                    untrash: (params: any, callback: RequestCallback) => Request;
                    attachments: {
                        get: (params: any, callback: RequestCallback) => Request;
                    };
                };
                threads: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    modify: (params: any, callback: RequestCallback) => Request;
                    trash: (params: any, callback: RequestCallback) => Request;
                    untrash: (params: any, callback: RequestCallback) => Request;
                };
            };
        }
        
        export interface GroupsmigrationV1 {
            new(options?: any): GroupsmigrationV1;
            archive: {
                insert: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface GroupssettingsV1 {
            new(options?: any): GroupssettingsV1;
            groups: {
                get: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface AppengineV1beta4 {
            new(options?: any): AppengineV1beta4;
            apps: {
                get: (params: any, callback: RequestCallback) => Request;
                modules: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    versions: {
                        create: (params: any, callback: RequestCallback) => Request;
                        delete: (params: any, callback: RequestCallback) => Request;
                        get: (params: any, callback: RequestCallback) => Request;
                        list: (params: any, callback: RequestCallback) => Request;
                    };
                };
                operations: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
        }
        
        export interface AppengineV1beta5 {
            new(options?: any): AppengineV1beta5;
            apps: {
                get: (params: any, callback: RequestCallback) => Request;
                operations: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
                services: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    versions: {
                        create: (params: any, callback: RequestCallback) => Request;
                        delete: (params: any, callback: RequestCallback) => Request;
                        get: (params: any, callback: RequestCallback) => Request;
                        list: (params: any, callback: RequestCallback) => Request;
                    };
                };
            };
        }
        
        export interface ClassroomV1 {
            new(options?: any): ClassroomV1;
            courses: {
                create: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                aliases: {
                    create: (params: any, callback: RequestCallback) => Request;
                    delete: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
                teachers: {
                    create: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    delete: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
                students: {
                    create: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    delete: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            invitations: {
                create: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                accept: (params: any, callback: RequestCallback) => Request;
            };
            userProfiles: {
                get: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface CloudbillingV1 {
            new(options?: any): CloudbillingV1;
            billingAccounts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                projects: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            projects: {
                getBillingInfo: (params: any, callback: RequestCallback) => Request;
                updateBillingInfo: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface ClouddebuggerV2 {
            new(options?: any): ClouddebuggerV2;
            controller: {
                debuggees: {
                    register: (params: any, callback: RequestCallback) => Request;
                    breakpoints: {
                        list: (params: any, callback: RequestCallback) => Request;
                        update: (params: any, callback: RequestCallback) => Request;
                    };
                };
            };
            debugger: {
                debuggees: {
                    list: (params: any, callback: RequestCallback) => Request;
                    breakpoints: {
                        set: (params: any, callback: RequestCallback) => Request;
                        get: (params: any, callback: RequestCallback) => Request;
                        delete: (params: any, callback: RequestCallback) => Request;
                        list: (params: any, callback: RequestCallback) => Request;
                    };
                };
            };
        }
        
        export interface CloudresourcemanagerV1beta1 {
            new(options?: any): CloudresourcemanagerV1beta1;
            projects: {
                create: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                undelete: (params: any, callback: RequestCallback) => Request;
                getIamPolicy: (params: any, callback: RequestCallback) => Request;
                setIamPolicy: (params: any, callback: RequestCallback) => Request;
                testIamPermissions: (params: any, callback: RequestCallback) => Request;
            };
            organizations: {
                list: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                setIamPolicy: (params: any, callback: RequestCallback) => Request;
                getIamPolicy: (params: any, callback: RequestCallback) => Request;
                testIamPermissions: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface CloudtraceV1 {
            new(options?: any): CloudtraceV1;
            projects: {
                patchTraces: (params: any, callback: RequestCallback) => Request;
                traces: {
                    list: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                };
            };
        }
        
        export interface ContainerV1 {
            new(options?: any): ContainerV1;
            projects: {
                zones: {
                    getServerconfig: (params: any, callback: RequestCallback) => Request;
                    clusters: {
                        list: (params: any, callback: RequestCallback) => Request;
                        get: (params: any, callback: RequestCallback) => Request;
                        create: (params: any, callback: RequestCallback) => Request;
                        update: (params: any, callback: RequestCallback) => Request;
                        delete: (params: any, callback: RequestCallback) => Request;
                    };
                    operations: {
                        list: (params: any, callback: RequestCallback) => Request;
                        get: (params: any, callback: RequestCallback) => Request;
                    };
                };
            };
        }
        
        export interface DataflowV1b3 {
            new(options?: any): DataflowV1b3;
            projects: {
                workerMessages: (params: any, callback: RequestCallback) => Request;
                jobs: {
                    create: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    getMetrics: (params: any, callback: RequestCallback) => Request;
                    messages: {
                        list: (params: any, callback: RequestCallback) => Request;
                    };
                    workItems: {
                        reportStatus: (params: any, callback: RequestCallback) => Request;
                        lease: (params: any, callback: RequestCallback) => Request;
                    };
                };
            };
        }
        
        export interface DataprocV1alpha1 {
            new(options?: any): DataprocV1alpha1;
            projects: {
                clusters: {
                    create: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    agents: {
                        create: (params: any, callback: RequestCallback) => Request;
                        update: (params: any, callback: RequestCallback) => Request;
                        get: (params: any, callback: RequestCallback) => Request;
                        list: (params: any, callback: RequestCallback) => Request;
                        delete: (params: any, callback: RequestCallback) => Request;
                    };
                    tasks: {
                        lease: (params: any, callback: RequestCallback) => Request;
                        report: (params: any, callback: RequestCallback) => Request;
                    };
                };
                jobs: {
                    submit: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    cancel: (params: any, callback: RequestCallback) => Request;
                    delete: (params: any, callback: RequestCallback) => Request;
                };
            };
            operations: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                cancel: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DataprocV1 {
            new(options?: any): DataprocV1;
            media: {
                upload: (params: any, callback: RequestCallback) => Request;
                download: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface DataprocV1beta1 {
            new(options?: any): DataprocV1beta1;
            projects: {
                clusters: {
                    create: (params: any, callback: RequestCallback) => Request;
                    patch: (params: any, callback: RequestCallback) => Request;
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    diagnose: (params: any, callback: RequestCallback) => Request;
                };
                jobs: {
                    submit: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    cancel: (params: any, callback: RequestCallback) => Request;
                    delete: (params: any, callback: RequestCallback) => Request;
                };
            };
            operations: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                cancel: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface GenomicsV1alpha2 {
            new(options?: any): GenomicsV1alpha2;
            operations: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                cancel: (params: any, callback: RequestCallback) => Request;
            };
            pipelines: {
                create: (params: any, callback: RequestCallback) => Request;
                run: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface GenomicsV1 {
            new(options?: any): GenomicsV1;
            datasets: {
                list: (params: any, callback: RequestCallback) => Request;
                create: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                undelete: (params: any, callback: RequestCallback) => Request;
                setIamPolicy: (params: any, callback: RequestCallback) => Request;
                getIamPolicy: (params: any, callback: RequestCallback) => Request;
                testIamPermissions: (params: any, callback: RequestCallback) => Request;
            };
            operations: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                cancel: (params: any, callback: RequestCallback) => Request;
            };
            readgroupsets: {
                import: (params: any, callback: RequestCallback) => Request;
                export: (params: any, callback: RequestCallback) => Request;
                search: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                coveragebuckets: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            reads: {
                search: (params: any, callback: RequestCallback) => Request;
                stream: (params: any, callback: RequestCallback) => Request;
            };
            referencesets: {
                search: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
            };
            references: {
                search: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                bases: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            variants: {
                import: (params: any, callback: RequestCallback) => Request;
                search: (params: any, callback: RequestCallback) => Request;
                create: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                stream: (params: any, callback: RequestCallback) => Request;
            };
            variantsets: {
                create: (params: any, callback: RequestCallback) => Request;
                export: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                search: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
            };
            callsets: {
                search: (params: any, callback: RequestCallback) => Request;
                create: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface IamV1alpha1 {
            new(options?: any): IamV1alpha1;}
        
        export interface IamV1 {
            new(options?: any): IamV1;
            projects: {
                serviceAccounts: {
                    list: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    create: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                    delete: (params: any, callback: RequestCallback) => Request;
                    signBlob: (params: any, callback: RequestCallback) => Request;
                    getIamPolicy: (params: any, callback: RequestCallback) => Request;
                    setIamPolicy: (params: any, callback: RequestCallback) => Request;
                    testIamPermissions: (params: any, callback: RequestCallback) => Request;
                    keys: {
                        list: (params: any, callback: RequestCallback) => Request;
                        get: (params: any, callback: RequestCallback) => Request;
                        create: (params: any, callback: RequestCallback) => Request;
                        delete: (params: any, callback: RequestCallback) => Request;
                    };
                };
            };
        }
        
        export interface KgsearchV1 {
            new(options?: any): KgsearchV1;
            entities: {
                search: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface LoggingV2beta1 {
            new(options?: any): LoggingV2beta1;
            projects: {
                logs: {
                    delete: (params: any, callback: RequestCallback) => Request;
                };
                sinks: {
                    list: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    create: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                    delete: (params: any, callback: RequestCallback) => Request;
                };
                metrics: {
                    list: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    create: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                    delete: (params: any, callback: RequestCallback) => Request;
                };
            };
            entries: {
                write: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            monitoredResourceDescriptors: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface PartnersV2 {
            new(options?: any): PartnersV2;
            userEvents: {
                log: (params: any, callback: RequestCallback) => Request;
            };
            clientMessages: {
                log: (params: any, callback: RequestCallback) => Request;
            };
            userStates: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            companies: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                leads: {
                    create: (params: any, callback: RequestCallback) => Request;
                };
            };
        }
        
        export interface PeopleV1 {
            new(options?: any): PeopleV1;
            people: {
                get: (params: any, callback: RequestCallback) => Request;
                getBatchGet: (params: any, callback: RequestCallback) => Request;
                connections: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
        }
        
        export interface PlaymoviespartnerV1 {
            new(options?: any): PlaymoviespartnerV1;
            accounts: {
                avails: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
                orders: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
                experienceLocales: {
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
                storeInfos: {
                    list: (params: any, callback: RequestCallback) => Request;
                    country: {
                        get: (params: any, callback: RequestCallback) => Request;
                    };
                };
            };
        }
        
        export interface ProximitybeaconV1beta1 {
            new(options?: any): ProximitybeaconV1beta1;
            beacons: {
                register: (params: any, callback: RequestCallback) => Request;
                decommission: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                activate: (params: any, callback: RequestCallback) => Request;
                deactivate: (params: any, callback: RequestCallback) => Request;
                attachments: {
                    create: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    delete: (params: any, callback: RequestCallback) => Request;
                    batchDelete: (params: any, callback: RequestCallback) => Request;
                };
                diagnostics: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            namespaces: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            beaconinfo: {
                getforobserved: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface PubsubV1beta1a {
            new(options?: any): PubsubV1beta1a;
            topics: {
                create: (params: any, callback: RequestCallback) => Request;
                publish: (params: any, callback: RequestCallback) => Request;
                publishBatch: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
            };
            subscriptions: {
                create: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                modifyPushConfig: (params: any, callback: RequestCallback) => Request;
                pull: (params: any, callback: RequestCallback) => Request;
                pullBatch: (params: any, callback: RequestCallback) => Request;
                modifyAckDeadline: (params: any, callback: RequestCallback) => Request;
                acknowledge: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface PubsubV1 {
            new(options?: any): PubsubV1;
            projects: {
                topics: {
                    setIamPolicy: (params: any, callback: RequestCallback) => Request;
                    getIamPolicy: (params: any, callback: RequestCallback) => Request;
                    testIamPermissions: (params: any, callback: RequestCallback) => Request;
                    create: (params: any, callback: RequestCallback) => Request;
                    publish: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    delete: (params: any, callback: RequestCallback) => Request;
                    subscriptions: {
                        list: (params: any, callback: RequestCallback) => Request;
                    };
                };
                subscriptions: {
                    setIamPolicy: (params: any, callback: RequestCallback) => Request;
                    getIamPolicy: (params: any, callback: RequestCallback) => Request;
                    testIamPermissions: (params: any, callback: RequestCallback) => Request;
                    create: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    delete: (params: any, callback: RequestCallback) => Request;
                    modifyAckDeadline: (params: any, callback: RequestCallback) => Request;
                    acknowledge: (params: any, callback: RequestCallback) => Request;
                    pull: (params: any, callback: RequestCallback) => Request;
                    modifyPushConfig: (params: any, callback: RequestCallback) => Request;
                };
            };
        }
        
        export interface PubsubV1beta2 {
            new(options?: any): PubsubV1beta2;
            projects: {
                topics: {
                    setIamPolicy: (params: any, callback: RequestCallback) => Request;
                    getIamPolicy: (params: any, callback: RequestCallback) => Request;
                    testIamPermissions: (params: any, callback: RequestCallback) => Request;
                    create: (params: any, callback: RequestCallback) => Request;
                    publish: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    delete: (params: any, callback: RequestCallback) => Request;
                    subscriptions: {
                        list: (params: any, callback: RequestCallback) => Request;
                    };
                };
                subscriptions: {
                    setIamPolicy: (params: any, callback: RequestCallback) => Request;
                    getIamPolicy: (params: any, callback: RequestCallback) => Request;
                    testIamPermissions: (params: any, callback: RequestCallback) => Request;
                    create: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    delete: (params: any, callback: RequestCallback) => Request;
                    modifyAckDeadline: (params: any, callback: RequestCallback) => Request;
                    acknowledge: (params: any, callback: RequestCallback) => Request;
                    pull: (params: any, callback: RequestCallback) => Request;
                    modifyPushConfig: (params: any, callback: RequestCallback) => Request;
                };
            };
        }
        
        export interface ScriptV1 {
            new(options?: any): ScriptV1;
            scripts: {
                run: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface StoragetransferV1 {
            new(options?: any): StoragetransferV1;
            googleServiceAccounts: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            v1: {
                getGoogleServiceAccount: (params: any, callback: RequestCallback) => Request;
            };
            transferJobs: {
                create: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            transferOperations: {
                pause: (params: any, callback: RequestCallback) => Request;
                resume: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                cancel: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface YoutubereportingV1 {
            new(options?: any): YoutubereportingV1;
            media: {
                download: (params: any, callback: RequestCallback) => Request;
            };
            reportTypes: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            jobs: {
                create: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                reports: {
                    list: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                };
            };
        }
        
        export interface IdentitytoolkitV3 {
            new(options?: any): IdentitytoolkitV3;
            relyingparty: {
                createAuthUri: (params: any, callback: RequestCallback) => Request;
                deleteAccount: (params: any, callback: RequestCallback) => Request;
                downloadAccount: (params: any, callback: RequestCallback) => Request;
                getAccountInfo: (params: any, callback: RequestCallback) => Request;
                getOobConfirmationCode: (params: any, callback: RequestCallback) => Request;
                getProjectConfig: (params: any, callback: RequestCallback) => Request;
                getPublicKeys: (params: any, callback: RequestCallback) => Request;
                getRecaptchaParam: (params: any, callback: RequestCallback) => Request;
                resetPassword: (params: any, callback: RequestCallback) => Request;
                setAccountInfo: (params: any, callback: RequestCallback) => Request;
                signOutUser: (params: any, callback: RequestCallback) => Request;
                uploadAccount: (params: any, callback: RequestCallback) => Request;
                verifyAssertion: (params: any, callback: RequestCallback) => Request;
                verifyCustomToken: (params: any, callback: RequestCallback) => Request;
                verifyPassword: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface LicensingV1 {
            new(options?: any): LicensingV1;
            licenseAssignments: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                listForProduct: (params: any, callback: RequestCallback) => Request;
                listForProductAndSku: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface ManagerV1beta2 {
            new(options?: any): ManagerV1beta2;
            deployments: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            templates: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface MirrorV1 {
            new(options?: any): MirrorV1;
            accounts: {
                insert: (params: any, callback: RequestCallback) => Request;
            };
            contacts: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            locations: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            settings: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            subscriptions: {
                delete: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            timeline: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                attachments: {
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    insert: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
        }
        
        export interface Oauth2V1 {
            new(options?: any): Oauth2V1;
            getCertForOpenIdConnect: (params: any, callback: RequestCallback) => Request;
            getCertForOpenIdConnectRaw: (params: any, callback: RequestCallback) => Request;
            getRobotJwk: (params: any, callback: RequestCallback) => Request;
            getRobotMetadataRaw: (params: any, callback: RequestCallback) => Request;
            getRobotMetadataX509: (params: any, callback: RequestCallback) => Request;
            tokeninfo: (params: any, callback: RequestCallback) => Request;
            userinfo: {
                get: (params: any, callback: RequestCallback) => Request;
                v2: {
                    me: {
                        get: (params: any, callback: RequestCallback) => Request;
                    };
                };
            };
        }
        
        export interface Oauth2V2 {
            new(options?: any): Oauth2V2;
            getCertForOpenIdConnect: (params: any, callback: RequestCallback) => Request;
            tokeninfo: (params: any, callback: RequestCallback) => Request;
            userinfo: {
                get: (params: any, callback: RequestCallback) => Request;
                v2: {
                    me: {
                        get: (params: any, callback: RequestCallback) => Request;
                    };
                };
            };
        }
        
        export interface PagespeedonlineV1 {
            new(options?: any): PagespeedonlineV1;
            pagespeedapi: {
                runpagespeed: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface PagespeedonlineV2 {
            new(options?: any): PagespeedonlineV2;
            pagespeedapi: {
                runpagespeed: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface PlusV1 {
            new(options?: any): PlusV1;
            activities: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                search: (params: any, callback: RequestCallback) => Request;
            };
            comments: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            people: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                listByActivity: (params: any, callback: RequestCallback) => Request;
                search: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface PlusdomainsV1 {
            new(options?: any): PlusdomainsV1;
            activities: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            audiences: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            circles: {
                addPeople: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                remove: (params: any, callback: RequestCallback) => Request;
                removePeople: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            comments: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            media: {
                insert: (params: any, callback: RequestCallback) => Request;
            };
            people: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                listByActivity: (params: any, callback: RequestCallback) => Request;
                listByCircle: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface PredictionV1_2 {
            new(options?: any): PredictionV1_2;
            predict: (params: any, callback: RequestCallback) => Request;
            hostedmodels: {
                predict: (params: any, callback: RequestCallback) => Request;
            };
            training: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface PredictionV1_3 {
            new(options?: any): PredictionV1_3;
            hostedmodels: {
                predict: (params: any, callback: RequestCallback) => Request;
            };
            training: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                predict: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface PredictionV1_4 {
            new(options?: any): PredictionV1_4;
            hostedmodels: {
                predict: (params: any, callback: RequestCallback) => Request;
            };
            trainedmodels: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                predict: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface PredictionV1_5 {
            new(options?: any): PredictionV1_5;
            hostedmodels: {
                predict: (params: any, callback: RequestCallback) => Request;
            };
            trainedmodels: {
                analyze: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                predict: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface PredictionV1_6 {
            new(options?: any): PredictionV1_6;
            hostedmodels: {
                predict: (params: any, callback: RequestCallback) => Request;
            };
            trainedmodels: {
                analyze: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                predict: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface QpxexpressV1 {
            new(options?: any): QpxexpressV1;
            trips: {
                search: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface ReplicapoolV1beta1 {
            new(options?: any): ReplicapoolV1beta1;
            pools: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                resize: (params: any, callback: RequestCallback) => Request;
                updatetemplate: (params: any, callback: RequestCallback) => Request;
            };
            replicas: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                restart: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface ReplicapoolV1beta2 {
            new(options?: any): ReplicapoolV1beta2;
            instanceGroupManagers: {
                abandonInstances: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                deleteInstances: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                recreateInstances: (params: any, callback: RequestCallback) => Request;
                resize: (params: any, callback: RequestCallback) => Request;
                setInstanceTemplate: (params: any, callback: RequestCallback) => Request;
                setTargetPools: (params: any, callback: RequestCallback) => Request;
            };
            zoneOperations: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface ReplicapoolupdaterV1beta1 {
            new(options?: any): ReplicapoolupdaterV1beta1;
            rollingUpdates: {
                cancel: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                listInstanceUpdates: (params: any, callback: RequestCallback) => Request;
                pause: (params: any, callback: RequestCallback) => Request;
                resume: (params: any, callback: RequestCallback) => Request;
                rollback: (params: any, callback: RequestCallback) => Request;
            };
            zoneOperations: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface ResellerV1sandbox {
            new(options?: any): ResellerV1sandbox;
            customers: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            subscriptions: {
                activate: (params: any, callback: RequestCallback) => Request;
                changePlan: (params: any, callback: RequestCallback) => Request;
                changeRenewalSettings: (params: any, callback: RequestCallback) => Request;
                changeSeats: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                startPaidService: (params: any, callback: RequestCallback) => Request;
                suspend: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface ResellerV1 {
            new(options?: any): ResellerV1;
            customers: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            subscriptions: {
                activate: (params: any, callback: RequestCallback) => Request;
                changePlan: (params: any, callback: RequestCallback) => Request;
                changeRenewalSettings: (params: any, callback: RequestCallback) => Request;
                changeSeats: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                startPaidService: (params: any, callback: RequestCallback) => Request;
                suspend: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface ResourceviewsV1beta1 {
            new(options?: any): ResourceviewsV1beta1;
            regionViews: {
                addresources: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                listresources: (params: any, callback: RequestCallback) => Request;
                removeresources: (params: any, callback: RequestCallback) => Request;
            };
            zoneViews: {
                addresources: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                listresources: (params: any, callback: RequestCallback) => Request;
                removeresources: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface ResourceviewsV1beta2 {
            new(options?: any): ResourceviewsV1beta2;
            zoneOperations: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            zoneViews: {
                addResources: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getService: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                listResources: (params: any, callback: RequestCallback) => Request;
                removeResources: (params: any, callback: RequestCallback) => Request;
                setService: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface ServiceregistryAlpha {
            new(options?: any): ServiceregistryAlpha;
            endpoints: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            operations: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface SiteverificationV1 {
            new(options?: any): SiteverificationV1;
            webResource: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                getToken: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface SpectrumV1explorer {
            new(options?: any): SpectrumV1explorer;
            paws: {
                getSpectrum: (params: any, callback: RequestCallback) => Request;
                getSpectrumBatch: (params: any, callback: RequestCallback) => Request;
                init: (params: any, callback: RequestCallback) => Request;
                notifySpectrumUse: (params: any, callback: RequestCallback) => Request;
                register: (params: any, callback: RequestCallback) => Request;
                verifyDevice: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface SqladminV1beta3 {
            new(options?: any): SqladminV1beta3;
            backupRuns: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            flags: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            instances: {
                clone: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                export: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                import: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                promoteReplica: (params: any, callback: RequestCallback) => Request;
                resetSslConfig: (params: any, callback: RequestCallback) => Request;
                restart: (params: any, callback: RequestCallback) => Request;
                restoreBackup: (params: any, callback: RequestCallback) => Request;
                setRootPassword: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            operations: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            sslCerts: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            tiers: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface SqladminV1beta4 {
            new(options?: any): SqladminV1beta4;
            backupRuns: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            databases: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            flags: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            instances: {
                clone: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                export: (params: any, callback: RequestCallback) => Request;
                failover: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                import: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                promoteReplica: (params: any, callback: RequestCallback) => Request;
                resetSslConfig: (params: any, callback: RequestCallback) => Request;
                restart: (params: any, callback: RequestCallback) => Request;
                restoreBackup: (params: any, callback: RequestCallback) => Request;
                startReplica: (params: any, callback: RequestCallback) => Request;
                stopReplica: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            operations: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            sslCerts: {
                createEphemeral: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            tiers: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            users: {
                delete: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface StorageV1 {
            new(options?: any): StorageV1;
            bucketAccessControls: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            buckets: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            channels: {
                stop: (params: any, callback: RequestCallback) => Request;
            };
            defaultObjectAccessControls: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            objectAccessControls: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            objects: {
                compose: (params: any, callback: RequestCallback) => Request;
                copy: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                rewrite: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                watchAll: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface StorageV1beta1 {
            new(options?: any): StorageV1beta1;
            bucketAccessControls: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            buckets: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            objectAccessControls: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            objects: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface StorageV1beta2 {
            new(options?: any): StorageV1beta2;
            bucketAccessControls: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            buckets: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            channels: {
                stop: (params: any, callback: RequestCallback) => Request;
            };
            defaultObjectAccessControls: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            objectAccessControls: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            objects: {
                compose: (params: any, callback: RequestCallback) => Request;
                copy: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                watchAll: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface TagmanagerV1 {
            new(options?: any): TagmanagerV1;
            accounts: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                containers: {
                    create: (params: any, callback: RequestCallback) => Request;
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                    environments: {
                        create: (params: any, callback: RequestCallback) => Request;
                        delete: (params: any, callback: RequestCallback) => Request;
                        get: (params: any, callback: RequestCallback) => Request;
                        list: (params: any, callback: RequestCallback) => Request;
                        patch: (params: any, callback: RequestCallback) => Request;
                        update: (params: any, callback: RequestCallback) => Request;
                    };
                    folders: {
                        create: (params: any, callback: RequestCallback) => Request;
                        delete: (params: any, callback: RequestCallback) => Request;
                        get: (params: any, callback: RequestCallback) => Request;
                        list: (params: any, callback: RequestCallback) => Request;
                        update: (params: any, callback: RequestCallback) => Request;
                        entities: {
                            list: (params: any, callback: RequestCallback) => Request;
                        };
                    };
                    move_folders: {
                        update: (params: any, callback: RequestCallback) => Request;
                    };
                    reauthorize_environments: {
                        update: (params: any, callback: RequestCallback) => Request;
                    };
                    tags: {
                        create: (params: any, callback: RequestCallback) => Request;
                        delete: (params: any, callback: RequestCallback) => Request;
                        get: (params: any, callback: RequestCallback) => Request;
                        list: (params: any, callback: RequestCallback) => Request;
                        update: (params: any, callback: RequestCallback) => Request;
                    };
                    triggers: {
                        create: (params: any, callback: RequestCallback) => Request;
                        delete: (params: any, callback: RequestCallback) => Request;
                        get: (params: any, callback: RequestCallback) => Request;
                        list: (params: any, callback: RequestCallback) => Request;
                        update: (params: any, callback: RequestCallback) => Request;
                    };
                    variables: {
                        create: (params: any, callback: RequestCallback) => Request;
                        delete: (params: any, callback: RequestCallback) => Request;
                        get: (params: any, callback: RequestCallback) => Request;
                        list: (params: any, callback: RequestCallback) => Request;
                        update: (params: any, callback: RequestCallback) => Request;
                    };
                    versions: {
                        create: (params: any, callback: RequestCallback) => Request;
                        delete: (params: any, callback: RequestCallback) => Request;
                        get: (params: any, callback: RequestCallback) => Request;
                        list: (params: any, callback: RequestCallback) => Request;
                        publish: (params: any, callback: RequestCallback) => Request;
                        restore: (params: any, callback: RequestCallback) => Request;
                        undelete: (params: any, callback: RequestCallback) => Request;
                        update: (params: any, callback: RequestCallback) => Request;
                    };
                };
                permissions: {
                    create: (params: any, callback: RequestCallback) => Request;
                    delete: (params: any, callback: RequestCallback) => Request;
                    get: (params: any, callback: RequestCallback) => Request;
                    list: (params: any, callback: RequestCallback) => Request;
                    update: (params: any, callback: RequestCallback) => Request;
                };
            };
        }
        
        export interface TaskqueueV1beta1 {
            new(options?: any): TaskqueueV1beta1;
            taskqueues: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            tasks: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                lease: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface TaskqueueV1beta2 {
            new(options?: any): TaskqueueV1beta2;
            taskqueues: {
                get: (params: any, callback: RequestCallback) => Request;
            };
            tasks: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                lease: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface TasksV1 {
            new(options?: any): TasksV1;
            tasklists: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            tasks: {
                clear: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                move: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface TranslateV2 {
            new(options?: any): TranslateV2;
            detections: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            languages: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            translations: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface UrlshortenerV1 {
            new(options?: any): UrlshortenerV1;
            url: {
                get: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface VisionV1 {
            new(options?: any): VisionV1;
            images: {
                annotate: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface WebfontsV1 {
            new(options?: any): WebfontsV1;
            webfonts: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface WebmastersV3 {
            new(options?: any): WebmastersV3;
            searchanalytics: {
                query: (params: any, callback: RequestCallback) => Request;
            };
            sitemaps: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                submit: (params: any, callback: RequestCallback) => Request;
            };
            sites: {
                add: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            urlcrawlerrorscounts: {
                query: (params: any, callback: RequestCallback) => Request;
            };
            urlcrawlerrorssamples: {
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                markAsFixed: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface YoutubeV3 {
            new(options?: any): YoutubeV3;
            activities: {
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            captions: {
                delete: (params: any, callback: RequestCallback) => Request;
                download: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            channelBanners: {
                insert: (params: any, callback: RequestCallback) => Request;
            };
            channelSections: {
                delete: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            channels: {
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            commentThreads: {
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            comments: {
                delete: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                markAsSpam: (params: any, callback: RequestCallback) => Request;
                setModerationStatus: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            fanFundingEvents: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            guideCategories: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            i18nLanguages: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            i18nRegions: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            liveBroadcasts: {
                bind: (params: any, callback: RequestCallback) => Request;
                control: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                transition: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            liveChatBans: {
                delete: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
            };
            liveChatMessages: {
                delete: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            liveChatModerators: {
                delete: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            liveStreams: {
                delete: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            playlistItems: {
                delete: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            playlists: {
                delete: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            search: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            sponsors: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            subscriptions: {
                delete: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            thumbnails: {
                set: (params: any, callback: RequestCallback) => Request;
            };
            videoAbuseReportReasons: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            videoCategories: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            videos: {
                delete: (params: any, callback: RequestCallback) => Request;
                getRating: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                rate: (params: any, callback: RequestCallback) => Request;
                reportAbuse: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            watermarks: {
                set: (params: any, callback: RequestCallback) => Request;
                unset: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface YoutubeanalyticsV1 {
            new(options?: any): YoutubeanalyticsV1;
            batchReportDefinitions: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            batchReports: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            groupItems: {
                delete: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            groups: {
                delete: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            reports: {
                query: (params: any, callback: RequestCallback) => Request;
            };
        }
        
        export interface YoutubeanalyticsV1beta1 {
            new(options?: any): YoutubeanalyticsV1beta1;
            batchReportDefinitions: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            batchReports: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            groupItems: {
                delete: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
            groups: {
                delete: (params: any, callback: RequestCallback) => Request;
                insert: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            reports: {
                query: (params: any, callback: RequestCallback) => Request;
            };
        }
        
}

    var google: GoogleApis;

    export = google;
}