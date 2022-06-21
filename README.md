# Strapi V4 custom field example

## Background
This repository is a demo for creating a custom field in content manager in admin panel, but it doesnt cover changing underlying DB structure.

## Concept
Basic idea are coming from (Customizing fields in the Strapi admin panel by Cyril Lopez), Mainly on two parts.  
1. Register your custom field, in admin/src during register phase
    - For code detail, please refer to '/src/plugins/custom-field/admin/src/index.js'
2. Use Strapi predefined hooks to mutate edit view, such that it can pick parameters from content-types schema and replace actual wanted type  
    - For code detail, please refer to '/src/plugins/custom-field/admin/src/mutateEditViewLayout.js'
    - also '/src/api/animal/content-types/animal/schema.json' for self defined parameters

## More
- It only change the FE rendering field, but underlying DB type it is still refer to the original declared type. (in this example 'json').  
So if you are looking for changing also types, you may want to change values in middleware


## Reference
[Youtube - Customizing fields in the Strapi admin panel by Cyril Lopez](https://www.youtube.com/watch?v=55KJ2sCX8ws)  
[Strapi Doc - Creating a new WYSIWYG field in the admin panel](https://docs.strapi.io/developer-docs/latest/guides/registering-a-field-in-admin.html)
