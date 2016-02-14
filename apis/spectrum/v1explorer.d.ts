import {Request, RequestCallback} from 'request';

export interface Spectrum {
    new(options: any): Spectrum;

    paws: {
        getSpectrum: (params: any, callback: RequestCallback) => Request;
        getSpectrumBatch: (params: any, callback: RequestCallback) => Request;
        init: (params: any, callback: RequestCallback) => Request;
        notifySpectrumUse: (params: any, callback: RequestCallback) => Request;
        register: (params: any, callback: RequestCallback) => Request;
        verifyDevice: (params: any, callback: RequestCallback) => Request;
    };
}