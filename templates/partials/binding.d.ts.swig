{{ name }}(version: string): any;
{%- if versions -%}{{ br }}
    {%- for version in versions -%}
        {%- include "./partials/binding-specific.d.ts.swig" with version -%}{%- if not loop.last -%}{{ br }}{%- endif -%}
    {%- endfor -%}
{%- endif -%}