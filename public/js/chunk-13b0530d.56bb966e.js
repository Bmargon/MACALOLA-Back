(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13b0530d"],{"0479":function(e,r,t){"use strict";var o=t("3a9e"),a=t.n(o);a.a},"3a9e":function(e,r,t){},"5c57":function(e,r,t){},"5f32":function(e,r,t){"use strict";var o=t("5c57"),a=t.n(o);a.a},"99af":function(e,r,t){"use strict";var o=t("23e7"),a=t("d039"),n=t("e8b5"),c=t("861d"),i=t("7b0b"),s=t("50c4"),l=t("8418"),u=t("65f0"),m=t("1dde"),f=t("b622"),b=t("2d00"),p=f("isConcatSpreadable"),d=9007199254740991,g="Maximum allowed index exceeded",v=b>=51||!a((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),h=m("concat"),k=function(e){if(!c(e))return!1;var r=e[p];return void 0!==r?!!r:n(e)},y=!v||!h;o({target:"Array",proto:!0,forced:y},{concat:function(e){var r,t,o,a,n,c=i(this),m=u(c,0),f=0;for(r=-1,o=arguments.length;r<o;r++)if(n=-1===r?c:arguments[r],k(n)){if(a=s(n.length),f+a>d)throw TypeError(g);for(t=0;t<a;t++,f++)t in n&&l(m,f,n[t])}else{if(f>=d)throw TypeError(g);l(m,f++,n)}return m.length=f,m}})},d416:function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",{staticClass:"products"},[t("b-nav",{attrs:{tabs:""}},[t("b-nav-item",{on:{click:function(r){return e.setForm("Productos")}}},[e._v("Productos")]),t("b-nav-item",{on:{click:function(r){return e.setForm("Crear Producto")}}},[e._v("Crear Producto")]),t("b-nav-item",{on:{click:function(r){return e.setForm("Crear Categoria")}}},[e._v("Crear Categoria")])],1),t("div",{staticClass:"products__form"},["Productos"===e.title?t("product-list"):e._e(),"Crear Producto"===e.title?t("item-form"):e._e(),"Crear Categoria"===e.title?t("category-form"):e._e()],1)],1)},a=[],n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",{staticClass:"form"},[t("b-form",{on:{submit:function(r){return r.preventDefault(),e.onSubmit(r)}}},[t("b-form-group",{attrs:{label:"Número de referencia"}},[t("b-form-input",{attrs:{required:""},model:{value:e.form.referenceNumberCommon,callback:function(r){e.$set(e.form,"referenceNumberCommon",r)},expression:"form.referenceNumberCommon"}})],1),t("b-row",[t("b-col",[t("b-form-group",{attrs:{label:"Proveedor"}},[t("b-form-input",{attrs:{required:""},model:{value:e.form.provider,callback:function(r){e.$set(e.form,"provider",r)},expression:"form.provider"}})],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Fecha de compra"}},[t("b-form-datepicker",{attrs:{required:""},model:{value:e.form.buyDate,callback:function(r){e.$set(e.form,"buyDate",r)},expression:"form.buyDate"}})],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Tempoarada"}},[t("b-form-input",{attrs:{required:""},model:{value:e.form.season,callback:function(r){e.$set(e.form,"season",r)},expression:"form.season"}})],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Nombre del producto"}},[t("b-form-input",{attrs:{required:""},model:{value:e.form.name,callback:function(r){e.$set(e.form,"name",r)},expression:"form.name"}})],1)],1)],1),t("b-row",[t("b-col",[t("b-form-group",{attrs:{label:"Precio de compra"}},[t("b-form-input",{attrs:{type:"number",required:""},model:{value:e.form.purchasePrice,callback:function(r){e.$set(e.form,"purchasePrice",r)},expression:"form.purchasePrice"}})],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Precio de venta"}},[t("b-form-input",{attrs:{type:"number",required:""},model:{value:e.form.salePrice,callback:function(r){e.$set(e.form,"salePrice",r)},expression:"form.salePrice"}},[e._v(e._s(e.calculateDiscount))])],1)],1)],1),t("b-row",[t("b-col",[t("b-form-group",{attrs:{label:"En promocion"}},[t("b-form-checkbox",{attrs:{name:"promotionOn"},model:{value:e.form.promotionOn,callback:function(r){e.$set(e.form,"promotionOn",r)},expression:"form.promotionOn"}})],1)],1),t("b-col",[e.form.promotionOn?t("b-form-group",{attrs:{label:"Porcentaje"}},[t("b-form-input",{attrs:{disabled:!e.form.promotionOn,type:"number",required:""},model:{value:e.form.percentage,callback:function(r){e.$set(e.form,"percentage",r)},expression:"form.percentage"}})],1):e._e()],1),t("b-col",[e.form.promotionOn?t("b-form-group",{attrs:{label:"Precio con porcentaje aplicado"}},[t("b-form-input",{attrs:{disabled:"",type:"number"},model:{value:e.form.priceWithDiscount,callback:function(r){e.$set(e.form,"priceWithDiscount",r)},expression:"form.priceWithDiscount"}})],1):e._e()],1)],1),t("b-form-group",{attrs:{label:"Descripcion"}},[t("b-form-textarea",{model:{value:e.form.description,callback:function(r){e.$set(e.form,"description",r)},expression:"form.description"}})],1),t("b-form-group",{attrs:{label:"Categoria"}},[t("b-form-select",{model:{value:e.form.category,callback:function(r){e.$set(e.form,"category",r)},expression:"form.category"}},e._l(e.categories,(function(r){return t("b-form-select-option",{key:r.name,attrs:{value:r._id}},[e._v(e._s(r.name))])})),1)],1),t("b-row",[t("b-col",[t("b-form-group",{attrs:{label:"Accesorio"}},[t("b-form-checkbox",{attrs:{name:"Accesorio"},model:{value:e.form.accesory,callback:function(r){e.$set(e.form,"accesory",r)},expression:"form.accesory"}})],1)],1),t("b-col",[e.form.accesory?t("b-form-group",{attrs:{label:"Total accesorios"}},[t("b-form-input",{attrs:{type:"number"},model:{value:e.form.totalStock,callback:function(r){e.$set(e.form,"totalStock",r)},expression:"form.totalStock"}})],1):e._e()],1)],1),e.form.accesory?e._e():t("div",{staticClass:"form__stock"},[t("b-form-group",{attrs:{label:"Stock"}},[t("hr"),e._l(e.form.stock,(function(r,o){return t("b-row",{key:o},[t("b-button",{staticClass:"mt-3",attrs:{variant:"link"},on:{click:function(r){return e.removeItem(o)}}},[t("i",{staticClass:"fas fa-minus"})]),t("b-button",{staticClass:"mt-3",attrs:{variant:"link"},on:{click:function(r){return e.addItem()}}},[t("i",{staticClass:"fas fa-plus"})]),t("b-col",[t("b-form-group",{attrs:{label:"Referencia"}}),t("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:r.ref},model:{value:r.ref,callback:function(t){e.$set(r,"ref",t)},expression:"item.ref"}})],1),t("b-col",[t("b-form-group",{attrs:{label:"Color"}}),t("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:r.color},model:{value:r.color,callback:function(t){e.$set(r,"color",t)},expression:"item.color"}})],1),t("b-col",e._l(r.quantity,(function(r,a){return t("b-row",{key:a,staticClass:"mt-3"},[t("b-col",[t("b-form-group",{attrs:{label:"Talla"}},[t("b-input",{model:{value:r.size,callback:function(t){e.$set(r,"size",t)},expression:"units.size"}})],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Cantidad"}},[t("b-input",{attrs:{type:"number"},model:{value:r.units,callback:function(t){e.$set(r,"units",t)},expression:"units.units"}})],1)],1),t("b-button",{attrs:{variant:"link"},on:{click:function(r){return e.addQuantity(o)}}},[t("i",{staticClass:"fas fa-plus"})]),t("b-button",{attrs:{variant:"link"},on:{click:function(r){return e.removeQuantity(o)}}},[t("i",{staticClass:"fas fa-minus"})])],1)})),1)],1)}))],2)],1),t("b-form-group",{attrs:{label:"Imagen"}},[t("b-form-file",{attrs:{required:"",type:"file",accept:"image/jpeg, image/png"},model:{value:e.form.img,callback:function(r){e.$set(e.form,"img",r)},expression:"form.img"}})],1),t("br"),t("b-overlay",{attrs:{show:e.loading,opacity:"0.6",rouded:""}},[t("b-button",{attrs:{block:"",variant:"outline-primary",type:"submit"}},[e._v("Crear")])],1)],1)],1)},c=[],i=(t("a4d3"),t("e01a"),t("4160"),t("a434"),t("b0c0"),t("a9e3"),t("159b"),t("96cf"),t("1da1")),s=t("5530"),l=t("bc3a"),u=t.n(l),m=t("2f62"),f={name:"ItemForm",data:function(){return{loading:!1,form:{provider:"",buyDate:"",season:"",name:"",purchasePrice:0,salePrice:0,percentage:0,promotionOn:!1,referenceNumberCommon:"",description:"",totalStock:0,stock:[{ref:"",color:"",quantity:[{size:"",units:0}]}],accesory:!1,category:"",img:null,priceWithDiscount:0}}},computed:Object(s["a"])({},Object(m["c"])(["categories"]),{calculateDiscount:function(){if(this.form.promotionOn){var e=this.form.salePrice*(this.form.percentage/100);return this.form.priceWithDiscount=this.form.salePrice-e,this.form.priceWithDiscount}}}),methods:Object(s["a"])({},Object(m["b"])(["getCategories"]),{onSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.form.accesory||e.form.stock.forEach((function(r){r.quantity.forEach((function(r){e.form.totalStock+=Number(r.units)}))})),t=new FormData,t.append("provider",e.form.provider),t.append("buyDate",e.form.buyDate),t.append("season",e.form.season),t.append("name",e.form.name),t.append("purchasePrice",e.form.purchasePrice),t.append("salePrice",0===e.form.priceWithDiscount?e.form.salePrice:e.form.priceWithDiscount),t.append("percentage",e.form.percentage),t.append("promotionOn",e.form.promotionOn),t.append("referenceNumberCommon",e.form.referenceNumberCommon),t.append("description",e.form.description),t.append("stock",JSON.stringify(e.form.stock)||[]),t.append("accesory",e.form.accesory),t.append("totalStock",e.form.totalStock),t.append("category",e.form.category),t.append("img",e.form.img),r.prev=17,e.loading=!0,r.next=21,u.a.post("https://www.macalola.com/product",t,{headers:{"content-type":"multipart/form-data",authorization:sessionStorage.getItem("adminToken")}});case 21:e.$bvToast.toast("OK:)",{title:"Producto creado",variant:"success",solid:!0}),e.form.provider="",e.form.buyDate="",e.form.season="",e.form.name="",e.form.purchasePrice=0,e.form.salePrice=0,e.form.percentage=0,e.form.promotionOn=!1,e.form.referenceNumberCommon="",e.form.description="",e.form.stock=0,e.form.accesory=!1,e.form.totalStock=[{ref:"",color:"",quantity:[{size:"",units:0}]}],e.form.category="",e.form.img=null,r.next=43;break;case 39:r.prev=39,r.t0=r["catch"](17),e.$bvToast.toast("Error",{title:"No se pudo crear el producto",variant:"danger",solid:!0}),console.log(r.t0);case 43:return r.prev=43,e.loading=!1,r.finish(43);case 46:case"end":return r.stop()}}),r,null,[[17,39,43,46]])})))()},addQuantity:function(e){this.form.stock[e].quantity.push({size:"",units:0})},removeQuantity:function(e){1!==this.form.stock[e].quantity.length&&this.form.stock[e].quantity.splice(e,1)},removeItem:function(e){1!==this.form.stock.length&&this.form.stock.splice(e,1)},addItem:function(){this.form.stock.push({ref:"",color:"",quantity:[{size:"",units:0}]})}}),created:function(){this.getCategories()}},b=f,p=t("2877"),d=Object(p["a"])(b,n,c,!1,null,null,null),g=d.exports,v=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",{staticClass:"category"},[t("b-row",[t("b-col",[t("b-form-group",{staticClass:"mr-3",attrs:{label:"Nombre"}},[t("b-form-input",{attrs:{required:""},model:{value:e.category.name,callback:function(r){e.$set(e.category,"name",r)},expression:"category.name"}})],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Referencia"}},[t("b-form-input",{attrs:{type:"number",required:""},model:{value:e.category.referenceNumber,callback:function(r){e.$set(e.category,"referenceNumber",r)},expression:"category.referenceNumber"}})],1)],1),t("div",{staticClass:"category__add"},[t("b-button",{attrs:{variant:"primary"},on:{click:e.postCategory}},[e._v("Añadir")])],1)],1),t("b-row",[t("b-col",[t("b-list-group",e._l(e.categories,(function(r,o){return t("b-list-group-item",{key:o},[t("span",[e._v(e._s(r.name)+" "+e._s(r.referenceNumber))]),t("b-button",{attrs:{variant:"link"},on:{click:function(r){return e.removeCategory(o)}}},[t("i",{staticClass:"fas fa-minus"})])],1)})),1)],1)],1)],1)},h=[],k={name:"CategoryForm",data:function(){return{category:{name:"",referenceNumber:""}}},methods:Object(s["a"])({},Object(m["b"])(["getCategories"]),{postCategory:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t=sessionStorage.getItem("adminToken"),r.next=4,u.a.post("https://www.macalola.com/category",e.category,{headers:{authorization:t}});case 4:return e.category.name="",e.category.referenceNumber="",r.next=8,e.getCategories();case 8:r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),e.$bvToast.toast("Error",{title:"No se pudo crear la categoria",variant:"danger",solid:!0});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},removeCategory:function(e){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,o=sessionStorage.getItem("adminToken"),a=r.categories[e]._id,t.next=5,u.a.delete("https://www.macalola.com/category/".concat(a),{headers:{authorization:o}});case 5:return t.next=7,r.getCategories();case 7:t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),r.$bvToast.toast("Error",{title:"No se pudo borrar la categoria",variant:"danger",solid:!0});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}),computed:Object(s["a"])({},Object(m["c"])(["categories"])),created:function(){this.getCategories()}},y=k,C=(t("5f32"),Object(p["a"])(y,v,h,!1,null,"2eddb70f",null)),w=C.exports,x=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("b-overlay",{attrs:{show:e.loading,opacity:"0.6",rouded:""}},[t("section",[t("b-table",{attrs:{id:"table",striped:"",hover:"",items:e.producst,fields:e.fields,"tbody-tr-class":e.rowClass},on:{"row-clicked":e.getSingleItem}}),t("b-pagination",{attrs:{"per-page":e.perPage,"aria-controls":"table","total-rows":e.rows},on:{change:e.changePage},model:{value:e.currentPage,callback:function(r){e.currentPage=r},expression:"currentPage"}})],1)])},P=[],_=(t("99af"),{name:"ProductList",data:function(){return{loading:!1,currentPage:1,perPage:19,fields:[{key:"name",label:"Nombre"},{key:"referenceNumberCommon",label:"Nº Referencia"},{key:"accesory",label:"Accesorio",sortable:!0,formatter:function(e){return e?"Si":"No"}},{key:"category",label:"Categoria",sortable:!0,formatter:function(e){return e.name}},{key:"totalStock",label:"Stock",sortable:!0}]}},computed:Object(s["a"])({},Object(m["c"])(["producst"]),{rows:function(){return this.producst.length}}),methods:Object(s["a"])({},Object(m["b"])(["getAllProducts"]),{changePage:function(e){this.currentPage=20*(e-1),console.log(e)},rowClass:function(e,r){if(e&&"row"===r)return 0===e.totalStock?"table-danger":void 0},getSingleItem:function(e){this.loading=!0,this.$router.push({path:"/administration/product/".concat(e.referenceNumberCommon,"?from=").concat(this.currentPage)}),this.loading=!1}}),created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.loading=!0,r.prev=1,r.next=4,e.getAllProducts();case 4:r.next=9;break;case 6:r.prev=6,r.t0=r["catch"](1),e.$bvToast.toast("Error",{title:"Error al cargar los productos",variant:"danger",solid:!0});case 9:return r.prev=9,e.loading=!1,r.finish(9);case 12:case"end":return r.stop()}}),r,null,[[1,6,9,12]])})))()}}),O=_,$=Object(p["a"])(O,x,P,!1,null,null,null),N=$.exports,j={components:{ItemForm:g,CategoryForm:w,ProductList:N},data:function(){return{title:"Productos"}},methods:{setForm:function(e){switch(e){case"Productos":this.title=e;break;case"Crear Producto":this.title=e;break;case"Crear Categoria":this.title=e;break;default:this.title="Productos"}}}},S=j,D=(t("0479"),Object(p["a"])(S,o,a,!1,null,"e3ceec24",null));r["default"]=D.exports}}]);
//# sourceMappingURL=chunk-13b0530d.56bb966e.js.map