{%- macro _method(name, method) -%}
{{ name }}: (params: any, callback: Callback) => Request;
{%- endmacro -%}

{%- macro _resource(name, resource) -%}
{{ name }}: {
    {%- if resource.methods -%}{{ br }}{%- for name, method in resource.methods -%}
        {%- filter indent -%}{{ _method(name, method) }}{%- endfilter -%}
        {%- if not loop.last -%}{{ br }}{%- endif -%}
    {%- endfor -%}{%- endif -%}
    {%- if resource.resources -%}{{ br }}{%- for name, resource in resource.resources -%}
        {%- filter indent -%}{{ _resource(name, resource) }}{%- endfilter -%}
        {%- if not loop.last -%}{{ br }}{%- endif -%}
    {%- endfor -%}{%- endif %}
};
{%- endmacro -%}

{%- macro _schema(name, schema) -%}
{%- if schema.type === 'object' -%}
interface {{ name }} {
    {%- if schema.properties -%}{{ br }}{%- for name, property in schema.properties -%}
        {%- filter indent -%}{{ name }}: {{ _schemaType(property) }};{%- endfilter -%}
        {%- if not loop.last -%}{{ br }}{%- endif -%}
    {%- endfor -%}{%- endif %}
}
{%- endif -%}
{%- endmacro -%}

{%- macro _schemaType(description) -%}
{%- if description.type === 'null' -%}
void
{%- elseif description.type === 'string' -%}
string
{%- elseif description.type === 'boolean' -%}
boolean
{%- elseif description.type === 'number' -%}
number
{%- elseif description.type === 'integer' -%}
number
{%- elseif description.type === 'object' -%}
{{ _schemaObject(description) }}
{%- elseif description.type === 'array' -%}
{%- if description.items -%}{{ _schemaType(description.items) }}{%- else -%}any{%- endif -%}[]
{%- elseif element.$ref -%}
{{ element.$ref }}
{%- else -%}
any
{%- endif -%}
{%- endmacro -%}

{%- macro _schemaObject(description) -%}
{}
{%- endmacro -%}