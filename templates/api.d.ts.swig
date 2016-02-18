{%- import './api-macros.d.ts.swig' as macros -%}
/// <reference path="../{{ module }}/{{ module }}.d.ts" />
declare module google {
    export interface GoogleApis {
        {{ name }}(version: string): any;
        {{ name }}(version: '{{ version }}'): {{ name }}.{{ version | replace('\.', '_') }}.{{ name | capitalize }};
    }

    namespace {{ name }} {
        namespace {{ version | replace('\.', '_') }} {
            export interface {{ name | capitalize }} {
                new(options: any): {{ name | capitalize }};

                {%- if methods || resources -%}{{ br }}{%- endif -%}
                {%- if methods -%}{{ br }}{%- for name, method in methods -%}
                        {%- filter indent(16) -%}{{ macros._method(name, method) }}{%- endfilter -%}
                        {%- if not loop.last -%}{{ br }}{%- endif -%}
                {%- endfor -%}{%- endif -%}
                {%- if resources -%}{{ br }}{%- for name, resource in resources -%}
                    {%- filter indent(16) -%}{{ macros._resource(name, resource) }}{%- endfilter -%}
                    {%- if not loop.last -%}{{ br }}{%- endif -%}
                {%- endfor -%}{%- endif %}
            }

            {%- if schemas -%}{{ br }}{{ br }}{%- for name, schema in schemas -%}
                {%- filter indent(12) -%}{{ macros._schema(name, schema) }}{%- endfilter -%}
                {%- if not loop.last -%}{{ br }}{{ br }}{%- endif -%}
            {%- endfor -%}{%- endif %}
        }
    }
}