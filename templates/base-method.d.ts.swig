{{ name }}(version: string): any;
{%- if versions -%}{{ br }}
    {%- for version in versions -%}
        {{ name }}(version: '{{version}}'): google.{{[name, version]|toInterfaceName}};
        {%- if not loop.last -%}{{ br }}{%- endif -%}
    {%- endfor -%}
{%- endif -%}