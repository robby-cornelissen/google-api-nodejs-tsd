{%- set Name = name|capitalize -%}
{%- set Version = version|replace('\.', '_')|capitalize -%}
{%- set Namespace = [Name, Version]|join('') -%}

import {Request, RequestCallback} from 'request';

export interface {{ Name }} {
    new(options: any): {{Name}};

{% if methods -%}
    {%- for name, method in methods -%}
        {%- filter indent -%}
            {%- include "./method-partial.d.ts.swig" with method -%}
        {%- endfilter -%}
        {%- if not loop.last -%}{{ br }}{%- endif -%}
    {%- endfor -%}
{%- endif -%}
{%- methods && resources -%}{{ br }}{%- endif -%}
{%- if resources -%}
    {%- for name, resource in resources -%}
        {%- filter indent -%}
            {%- include "./resource-partial.d.ts.swig" with resource -%}
        {%- endfilter -%}
        {%- if not loop.last -%}{{ br }}{%- endif -%}
    {%- endfor -%}
{%- endif %}
}