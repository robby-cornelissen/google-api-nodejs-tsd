{{ name }}: {
    {%- if resource.methods -%}{{ br }}
        {%- for name, method in methods -%}
            {%- filter indent -%}
                {%- include "./api-method.d.ts.swig" with method -%}
            {%- endfilter -%}
            {%- if not loop.last -%}{{ br }}{%- endif -%}
        {%- endfor -%}
    {%- endif -%}
    {%- if resource.resources -%}{{ br }}
        {%- for name, resource in resources -%}
            {%- filter indent -%}
                {%- include "./api-resource.d.ts.swig" with resource -%}
            {%- endfilter -%}
            {%- if not loop.last -%}{{ br }}{%- endif -%}
        {%- endfor -%}
    {%- endif %}
};