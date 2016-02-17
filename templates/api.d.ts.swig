{%- set namespace = [name, version] | toNamespace -%}

/// <reference path="../{{ module }}/{{ module }}.d.ts" />
declare module google {
    export interface GoogleApis {
        discovery(version: string): any;

        {{ name }}(version: '{{ version }}'): any;
    }

    export interface {{ namespace }} {
        new(options: any): {{ namespace }};

        {%- if methods || resources -%}{{ br }}{%- endif -%}
        {%- if methods -%}{{ br }}
            {%- for name, method in methods -%}
                {%- filter indent(8) -%}
                    {%- include "./api-method.d.ts.swig" with method -%}
                {%- endfilter -%}{%- if not loop.last -%}{{ br }}{%- endif -%}
            {%- endfor -%}
        {%- endif -%}
        {%- if resources -%}{{ br }}
            {%- for name, resource in resources -%}
                {%- filter indent(8) -%}
                    {%- include "./api-resource.d.ts.swig" with resource -%}
                {%- endfilter -%}{%- if not loop.last -%}{{ br }}{%- endif -%}
            {%- endfor -%}
        {%- endif %}
    }
}