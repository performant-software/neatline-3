//import React, {Component} from 'react';
import LocalizedStrings from 'react-localization';

export let strings = new LocalizedStrings({
 en: {

   //for exhibits/index.js
     createExhibit:"Create an Exhibit",
     browseExhibit:"Browse Exhibits",
     refreshExhibits:"Refresh Exhibits",
     exhibit: "Exhibit",
     title: "Title",
     created: "Created",
     public: "Public",
     delete: "Delete",
     exhibit_delete_confirmation:"Are you sure you want to delete the Neatline exhibit {0}? This will delete the exhibit and its associated metadata.",
     yes: "Yes",
     no: "No",

   //for exhibits/create.js, components/exhibitForms.js
     //title, createExhibit already defined
     create_exhibit_error:"Error: failed to create exhibit",
     update_exhibit_error:"Error: failed to update exhibit",
     delete_exhibit_error:"Error: exhibit failed to delete",
     slug:"URL Slug",
     narrative:"Narrative",
     accessible_url:"Alternative Accessible URL",
     default_spatial_layer:"Default Spatial Layer",
     additional_spatial_layers:"Additional Spatial Layers",
     image_layer:"Image Layer",
     zoom_levels:"Zoom Levels",
     wms_address:"WMS Address",
     wms_layers:"WMS Layers",
     spatial_querying:"Spatial Querying",
     //public already defined
     create_exhibit:"Create exhibit",

   //for exhibits/show.js
     //Exhibit already defined
     records:"Records",
     new_record:"New Record",
     save_record:"Save Record",
     save_exhibit:"Save Exhibit",
     text:"Text",
     style:"Style",
     text_description:"Text Description",
     //title, slug,already defined
     loading:"Loading...",
     body:"Body",
     colors:"Colors",
     fill_color:"Fill Color",
     stroke_color:"Stroke Color",
     fill_opacity:"Fill Opacity",
     stroke_opacity:"Stroke Opacity",
     selected:"Selected",
     selected_fill_color:"Selected - Fill Color",
     selected_stroke_color:"Selected - Stroke Color",
     selected_stroke_opacity:"Selected - Stroke Opacity",
     selected_fill_opacity:"Selected - Fill Opacity",
     dimensions:"Dimensions",
     stroke_width:"Stroke Width",
     point_radius:"Point Radius",
     z_index:"Z-Index",
     order_weight:"Order/Weight",
     dates:"Dates",
     start_date:"Start Date",
     end_date:"End Date",
     after_date:"After Date",
     before_date:"Before Date",
     imagery:"Imagery",
     point_image:"Point Image",
     //wms_layers, wms_address already defined
     visibility:"Visibility",
     min_zoom:"Min Zoom",
     max_zoom:"Max Zoom",
     default_zoom:"Default Zoom",
     default_focus:"Default Focus",
     create:"Create",
     unsaved_changes:"You have unsaved changes!",
     update_record_error:"Error updating record",
     delete_record_error:"Error deleting record",
     create_record_error:"Error creating record",
     record_delete_confirmation:"Are you sure you want to delete the Neatline record {0}?",


 },
 es:{
   //PLEASE note: Spanish translations are very rough, and they only exist
   //to demonstrate the i18n functionality, with no intent to offend anyone.

   //for exhibits/index.js
     createExhibit:"Crear una presentación",
     browseExhibit:"Ver presentación",
     refreshExhibits:"Actualizar las presentaciones",
     exhibit: "Presentación",
     title: "Título",
     created: "Creado",
     public: "Público",
     delete: "Borrar",
     exhibit_delete_confirmation:"Está seguro que quiere borrar la presentación {0}? Esta acción va a borrar la presentación y su metadata asociada.",
     yes: "Sí",
     no: "No",


   //for exhibits/create.js, components/exhibitForms.js
     //title, createExhibit already defined
     create_exhibit_error:"Error: no pudo crear una presentación",
     update_exhibit_error:"Error: no pudo actualizar la presentación",
     delete_exhibit_error:"Error: no pudo deletar la presentación",
     slug:"URL slug",
     narrative:"Narración",
     accessible_url:"URL accesible alternativo",
     default_spatial_layer:"Valor por el defecto para capa espacial",
     additional_spatial_layers:"Capas espaciales adicionales",
     image_layer:"Capa del imagen",
     zoom_levels:"Nivel del zoom",
     wms_layers:"Capa del WMS",
     wms_address:"Dirección del WMS",
     spatial_querying:"Pregunta espacial",
     //public already defined
     create_exhibit:"Crear la presentación",

   //for exhibits/show.js
       //Exhibit already defined
     records:"Archivos",
     new_record:"Un archivo nuevo",
     save_record:"Grabar el archivo",
     save_exhibit:"Grabar la presentación",
     text:"Texto",
     style:"Estilo",
     text_description:"Descripción del texto",
     //title, slug,already defined
     loading:"Cargando...",
     body:"Cuerpo",
     colors:"Colores",
     fill_color:"Color llenado",
     stroke_color:"Color del trazo",
     fill_opacity:"Opacidad llenada",
     stroke_opacity:"Opacidad del trazo",
     selected:"Seleccionado",
     selected_fill_color:"Color llenado",
     selected_stroke_color:"Color del trazo",
     selected_stroke_opacity:"Opacidad llenada",
     selected_fill_opacity:"Opacidad del trazo",
     dimensions:"Dimensiones",
     stroke_width:"Ancho del trazo",
     point_radius:"Radio del punto",
     z_index:"indice Z",
     order_weight:"Orden/peso",
     dates:"Fechas",
     start_date:"Fecha del comienzo",
     end_date:"Fecha del fin",
     after_date:"Fecha después",
     before_date:"Fecha antes",
     imagery:"Imaginería",
     point_image:"Imagen del punto",
     //wms_layers, wms_address already defined
     visibility:"Visibilidad",
     min_zoom:"Zoom mínimo",
     max_zoom:"Zoom máximo",
     default_zoom:"Valor por el defecto para zoom",
     default_focus:"Valor por el defecto para enfoque",
     create:"Crear",
     unsaved_changes:"¡Tiene cambios que no están grabados!",
     update_record_error:"Error: no pudo actualizar el archivo",
     delete_record_error:"Error: no pudo deletar el archivo",
     create_record_error:"Error: no pudo crear el archivo",
     record_delete_confirmation:"¿Está seguro que quiere borrar el archivo {0}?",
 },

/*
//template, maybe for future use
 emptyList: {
   createExhibit:"",
   browseExhibit:"",
   refreshExhibits:"",
   exhibit: "",
   title: "",
   created: "",
   public: "",
   delete: "",
   exhibit_delete_confirmation:"",
   yes: "",
   no: "",

 //for exhibits/create.js, components/exhibitForms.js
   //title, createExhibit already defined
   create_exhibit_error:"",
   update_exhibit_error:"",
   delete_exhibit_error:"",
   slug:"",
   narrative:"",
   accessible_url:"",
   default_spatial_layer:"",
   additional_spatial_layers:"",
   image_layer:"",
   zoom_levels:"",
   wms_layers:"",
   wms_address:"",
   spatial_querying:"",
   //public already defined
   create_exhibit:"",

 //for exhibits/show.js
     //Exhibit already defined
   records:"",
   new_record:"",
   save_record:"",
   save_exhibit:"",
   text:"",
   style:"",
   text_description:"",
   //title, slug,already defined
   loading:"",
   body:"",
   colors:"",
   fill_color:"",
   stroke_color:"",
   fill_opacity:"",
   stroke_opacity:"",
   selected:"",
   selected_fill_color:"",
   selected_stroke_color:"",
   selected_stroke_opacity:"",
   selected_fill_opacity:"",
   dimensions:"",
   stroke_width:"",
   point_radius:"",
   z_index:"",
   order_weight:"",
   dates:"",
   start_date:"",
   end_date:"",
   after_date:"",
   before_date:"",
   imagery:"",
   point_image:"",
   //wms_layers, wms_address already defined
   visibility:"",
   min_zoom:"",
   max_zoom:"",
   default_zoom:"",
   default_focus:"",
   create:"",
   unsaved_changes:"",
   update_record_error:"",
   delete_record_error:"",
   create_record_error:"",
   record_delete_confirmation:"",

 }
*/
});