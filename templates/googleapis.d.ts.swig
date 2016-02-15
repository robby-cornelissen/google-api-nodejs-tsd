declare module "googleapis" {
    import {Request, RequestCallback} from 'request';

    interface GoogleApis {
        new(options?: any): GoogleApis;
        options(options?: any): void;

        {%- if index -%}{{ br }}{{ br }}
            {%- for name, versions in index -%}
                {%- filter indent(8) -%}
                    {%- include "./partials/binding.d.ts.swig" with versions -%}
                {%- endfilter -%}{%- if not loop.last -%}{{ br }}{{ br }}{%- endif -%}
            {%- endfor -%}
        {%- endif %}
    }

    module google {
        {%- if apis -%}{{ br }}
            {%- for api in apis -%}
                {%- filter indent(8) -%}
                    {%- include "./partials/api.d.ts.swig" with api -%}
                {%- endfilter -%}{%- if not loop.last -%}{{ br }}{{ br }}{%- endif -%}
            {%- endfor -%}
        {%- endif %}
    }

    var google: GoogleApis;

    export = google;
}