{%- set Name = name|capitalize -%}
{%- set Version = version|replace('\.', '_')|capitalize -%}
{%- set Interface = [Name, Version]|join('') -%}

export interface {{Interface}} {
    new(options?: any): {{Interface}};
    {%- if api.methods -%}
        {{ br }}
        {%- for name, method in api.methods -%}
            {%- filter indent -%}
                {%- include "./method-partial.d.ts.swig" with method -%}
            {%- endfilter -%}
            {%- if not loop.last -%}{{ br }}{%- endif -%}
        {%- endfor -%}
    {%- endif -%}
    {%- if api.methods || api.resources -%}{{ br }}{%- endif -%}
    {%- if api.resources -%}
        {%- for name, resource in api.resources -%}
            {%- filter indent -%}
                {%- include "./resource-partial.d.ts.swig" with resource -%}
            {%- endfilter -%}
            {%- if not loop.last -%}{{ br }}{%- endif -%}
        {%- endfor -%}
        {{ br }}
    {%- endif -%}
}
