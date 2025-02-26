import { buildCollection, buildProperty } from "@firecms/core";

// This is a demo collection with many of the available properties
export const blogCollection = buildCollection({
    id: "blog",
    name: "blog collection",
    description: "blog",
    path: "blog",
    inlineEditing:false,
    customId:true,
    properties: {

        slug: ({entityId})=> ({
            dataType: "string",
            name: "slug",
            validation: {
                unique:true,
            },
            defaultValue: entityId,
            editable:false,
        }),


        created_at: {
            dataType: "date",
            name: "Created at",
            autoValue: "on_create",

        },

        updated_on: {
            dataType: "date",
            name: "Updated at",
            autoValue: "on_update"
        },

        title: {
            dataType: "string",
            name: "Title",
            validation:{
                required: true,
            }
        },

        keyword: {
            dataType: "string",
            name: "keyword",
            validation:{
                required: true,
            }
        },

        body: {
            dataType:"string",
            markdown: true,
        },

        tag: {
            dataType: "string",
            name: "Tag",
            enumValues: {
                Desarrollo101: "Desarrollo 101",
                JavaScript: "JavaScript",
            }
        },


        autor: {
            name: "Autor",
            dataType: "string",
            defaultValue: "Lasfito",
            editable:false,
        },
      

        // storing a single image
        thumbnail: {
            dataType: "string",
            name: "Thumbnail",
            storage: {
                storagePath: "images",
                acceptedFiles: [
                    "image/*"
                ],
                maxSize: 1000000,
                metadata: {
                    cacheControl: "max-age=1000000"
                }
            }
        },

        translations: {
            dataType:"array",
            name: "translations",
            of: {
                dataType:"reference",
                path:"translations"
            }
        },

       /*  translationsV2:({entityId})=> ({
            dataType:"array",
            name: entityId,
            of: {
                dataType:"reference",
                path:`blog/${entityId}/translations`
            }
        }) */
    }
});
