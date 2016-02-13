{{ name }}: {
{% if resource.methods -%}
    {%- for name, method in methods -%}
        {%- filter indent -%}
            {%- include "./method-partial.d.ts.swig" with method -%}
        {%- endfilter -%}
        {%- if not loop.last -%}{{ br }}{%- endif -%}
    {%- endfor -%}
{%- endif -%}

{%- if resource.resources -%}
    {%- for name, resource in resources -%}
        {%- filter indent -%}
            {%- include "./resource-partial.d.ts.swig" with resource -%}
        {%- endfilter -%}
        {%- if not loop.last -%}{{ br }}{%- endif -%}
    {%- endfor -%}
{%- endif %}
};