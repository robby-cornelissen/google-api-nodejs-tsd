declare module "googleapis" {
    import {Request, RequestCallback} from 'request';

    interface GoogleApis {
        new(options?: any): GoogleApis;
        options(options?: any): void;

        {%- for name, versions in index -%}
            {{ br }}
            {%- filter indent(8) -%}{{ name }}(version: string): any;{%- endfilter -%}
            {%- if versions -%}
                {%- for version in versions -%}
                    {%- set Name = name|capitalize -%}
                    {%- set Version = version|replace('\.', '_')|capitalize -%}
                    {%- set Interface = [Name, Version]|join('') -%}

                    {%- filter indent(8) -%}{{ name }}(version: '{{version}}'): google.{{Interface}};{%- endfilter -%}
                    {%- if not loop.last -%}{{ br }}{%- endif -%}
                {%- endfor -%}
            {%- endif -%}
        {%- endfor -%}
    }

    module google {
        {%- if apis -%}
            {{ br }}
            {%- for api in apis -%}
                {%- filter indent(8) -%}
                    {%- include "./api-partial.d.ts.swig" with api -%}
                {%- endfilter -%}
                {%- if not loop.last -%}{{ br }}{%- endif -%}
            {%- endfor -%}
            {{ br }}
        {%- endif -%}
    }

    var google: GoogleApis;

    export = google;
}