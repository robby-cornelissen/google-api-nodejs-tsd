declare module "googleapis" {
    {% if apis -%}
        {%- for api in apis -%}
            {{ api.id }}
        {%- endfor -%}
    {% endif %}
}