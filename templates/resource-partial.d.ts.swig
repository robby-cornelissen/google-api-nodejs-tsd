{{ name }}: {
    {%- if resource.methods -%}
        {%- for name, method in methods -%}
            {%- filter indent -%}
            {%- include "./method-partial.d.ts.swig" with method -%}
            {%- endfilter -%}
        {%- endfor -%}
    {%- endif -%}

    {%- if resource.resources -%}
        {%- for name, resource in resources -%}
            {%- filter indent -%}
            {%- include "./resource-partial.d.ts.swig" with resource -%}
            {%- endfilter -%}
        {%- endfor -%}
    {%- endif -%}
};