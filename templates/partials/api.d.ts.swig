export interface {{[name, version]|toInterfaceName}} {
    new(options?: any): {{[name, version]|toInterfaceName}};
    {%- if api.methods || api.resources -%}{{ br }}{%- endif -%}
    {%- if api.methods -%}{{ br }}
        {%- for name, method in api.methods -%}
            {%- filter indent -%}
                {%- include "./partials/method.d.ts.swig" with method -%}
            {%- endfilter -%}{%- if not loop.last -%}{{ br }}{%- endif -%}
        {%- endfor -%}
    {%- endif -%}
    {%- if api.resources -%}{{ br }}
        {%- for name, resource in api.resources -%}
            {%- filter indent -%}
                {%- include "./partials/resource.d.ts.swig" with resource -%}
            {%- endfilter -%}{%- if not loop.last -%}{{ br }}{%- endif -%}
        {%- endfor -%}
    {%- endif %}
}