(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0ee4cde"],{"25f0":function(e,t,r){"use strict";var o=r("6eeb"),a=r("825a"),s=r("d039"),i=r("ad6d"),n="toString",c=RegExp.prototype,l=c[n],m=s((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u=l.name!=n;(m||u)&&o(RegExp.prototype,n,(function(){var e=a(this),t=String(e.source),r=e.flags,o=String(void 0===r&&e instanceof RegExp&&!("flags"in c)?i.call(e):r);return"/"+t+"/"+o}),{unsafe:!0})},"9d82":function(e,t,r){},ad6d:function(e,t,r){"use strict";var o=r("825a");e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b448:function(e,t,r){"use strict";var o=r("9d82"),a=r.n(o);a.a},f70d:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-overlay",{attrs:{show:e.loading,opacity:"0.6",rouded:""}},[r("section",{staticClass:"product"},[r("b-row",{staticClass:"product__options"},[r("b-button",{staticClass:"mr-3",attrs:{variant:"success",disabled:e.disabledFields},on:{click:e.saveItem}},[e._v("Guardar")]),r("b-button",{staticClass:"mr-3",attrs:{variant:"secondary"},on:{click:e.editItem}},[e._v("Editar")]),r("b-button",{attrs:{variant:"danger"},on:{click:e.removeItem}},[e._v("Eliminar")])],1),r("b-row",{staticClass:"product__row"},[r("b-col",{attrs:{cols:"4"}},[r("div",{staticClass:"product__img mb-5"},[r("img",{attrs:{src:e.product.img,alt:"alt"}})]),r("b-form-group",[r("b-form-file",{attrs:{disabled:e.disabledFields,type:"file",accept:"image/jpeg, image/png"},model:{value:e.form.img,callback:function(t){e.$set(e.form,"img",t)},expression:"form.img"}})],1)],1),r("b-col",{attrs:{cols:"7"}},[r("b-form",[r("b-row",[r("b-col",[r("b-form-group",{attrs:{disabled:"",label:"Nº de Referencia"}},[r("b-form-input",{model:{value:e.form.referenceNumberCommon,callback:function(t){e.$set(e.form,"referenceNumberCommon",t)},expression:"form.referenceNumberCommon"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{disabled:e.disabledFields,label:"Proveedor"}},[r("b-form-input",{model:{value:e.form.provider,callback:function(t){e.$set(e.form,"provider",t)},expression:"form.provider"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{disabled:e.disabledFields,label:"Temporada"}},[r("b-form-input",{model:{value:e.form.season,callback:function(t){e.$set(e.form,"season",t)},expression:"form.season"}})],1)],1)],1),r("b-row",[r("b-col",[r("b-form-group",{attrs:{disabled:e.disabledFields,label:"Nombre"}},[r("b-form-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{disabled:e.disabledFields,label:"Fecha de compra"}},[r("b-form-datepicker",{model:{value:e.form.buyDate,callback:function(t){e.$set(e.form,"buyDate",t)},expression:"form.buyDate"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{disabled:"",label:"Total Stock"}},[r("b-form-input",{model:{value:e.form.totalStock,callback:function(t){e.$set(e.form,"totalStock",t)},expression:"form.totalStock"}})],1)],1)],1),r("b-row",[r("b-col",[r("b-form-group",{attrs:{label:"Categoria"}},[r("b-form-select",{attrs:{disabled:e.disabledFields},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}},e._l(e.categories,(function(t){return r("b-form-select-option",{key:t.name,attrs:{value:t._id}},[e._v(e._s(t.name))])})),1)],1)],1)],1),r("b-row",[r("b-col",[r("b-form-group",{attrs:{disabled:e.disabledFields,label:"Promocion"}},[r("b-form-checkbox",{model:{value:e.form.promotionOn,callback:function(t){e.$set(e.form,"promotionOn",t)},expression:"form.promotionOn"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{disabled:e.disabledFields,label:"Precio de compra"}},[r("b-form-input",{attrs:{type:"number"},model:{value:e.form.purchasePrice,callback:function(t){e.$set(e.form,"purchasePrice",t)},expression:"form.purchasePrice"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{disabled:e.disabledFields,label:"Precio de venta"}},[r("b-form-input",{attrs:{type:"number"},model:{value:e.form.salePrice,callback:function(t){e.$set(e.form,"salePrice",t)},expression:"form.salePrice"}})],1)],1),e.form.promotionOn?r("b-col",[r("b-form-group",{attrs:{disabled:e.disabledFields,label:"Porcentaje"}},[r("b-form-input",{attrs:{type:"number"},model:{value:e.form.percentage,callback:function(t){e.$set(e.form,"percentage",t)},expression:"form.percentage"}})],1)],1):e._e(),e.form.promotionOn?r("b-col",[r("b-form-group",{attrs:{disabled:"",label:"Precio con porcentaje"}},[r("b-form-input",{attrs:{placeholder:e.checkPromotion,type:"number"}})],1)],1):e._e()],1),r("b-row",[r("b-col",[r("b-form-group",{staticClass:"mr-5",attrs:{disabled:e.disabledFields,label:"Accesorio"}},[r("b-form-checkbox",{model:{value:e.form.accesory,callback:function(t){e.$set(e.form,"accesory",t)},expression:"form.accesory"}})],1)],1),r("b-col",[e.form.accesory?r("b-form-group",{attrs:{label:"Cantidad accesorio"}},[r("b-form-input",{attrs:{type:"number"},model:{value:e.form.totalStock,callback:function(t){e.$set(e.form,"totalStock",t)},expression:"form.totalStock"}})],1):e._e()],1)],1),e.form.accesory?e._e():r("b-row",[r("b-form-group",{attrs:{label:"Stock"}},[r("hr"),e._l(e.form.stock,(function(t,o){return r("b-row",{key:o},[r("b-button",{staticClass:"mt-3",attrs:{disabled:e.disabledFields,variant:"link"},on:{click:function(t){return e.removeItemFromStock(o)}}},[r("i",{staticClass:"fas fa-minus"})]),r("b-button",{staticClass:"mt-3",attrs:{disabled:e.disabledFields,variant:"link"},on:{click:function(t){return e.addItem()}}},[r("i",{staticClass:"fas fa-plus"})]),r("b-col",[r("b-form-group",{attrs:{label:"Referencia"}}),r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{disabled:e.disabledFields,placeholder:t.ref},model:{value:t.ref,callback:function(r){e.$set(t,"ref",r)},expression:"item.ref"}})],1),r("b-col",[r("b-form-group",{attrs:{label:"Color"}}),r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{disabled:e.disabledFields,placeholder:t.color},model:{value:t.color,callback:function(r){e.$set(t,"color",r)},expression:"item.color"}})],1),r("b-col",e._l(t.quantity,(function(t,a){return r("b-row",{key:a,staticClass:"mt-3"},[r("b-col",[r("b-form-group",{attrs:{label:"Talla"}},[r("b-input",{attrs:{disabled:e.disabledFields},model:{value:t.size,callback:function(r){e.$set(t,"size",r)},expression:"units.size"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{label:"Cantidad"}},[r("b-input",{attrs:{disabled:e.disabledFields,type:"number"},model:{value:t.units,callback:function(r){e.$set(t,"units",r)},expression:"units.units"}})],1)],1),r("b-button",{attrs:{disabled:e.disabledFields,variant:"link"},on:{click:function(t){return e.addQuantity(o)}}},[r("i",{staticClass:"fas fa-plus"})]),r("b-button",{attrs:{disabled:e.disabledFields,variant:"link"},on:{click:function(t){return e.removeQuantity(o)}}},[r("i",{staticClass:"fas fa-minus"})])],1)})),1)],1)}))],2)],1)],1)],1)],1)],1)])},a=[],s=(r("a4d3"),r("e01a"),r("4160"),r("a434"),r("b0c0"),r("a9e3"),r("d3b7"),r("25f0"),r("159b"),r("96cf"),r("1da1")),i=r("5530"),n=r("bc3a"),c=r.n(n),l=r("2f62"),m={name:"GetSingleProduct",data:function(){return{loading:!1,disabledFields:!0,form:{referenceNumberCommon:"",provider:"",season:"",name:"",buyDate:"",totalStock:0,purchasePrice:0,salePrice:0,percentage:0,stock:[],promotionOn:"",img:null,accesory:"",category:"",priceWithDiscount:0}}},computed:Object(i["a"])({},Object(l["c"])(["product","categories"]),{checkPromotion:function(){if(this.form.promotionOn){var e=this.form.salePrice*(this.form.percentage/100);return this.form.priceWithDiscount=this.form.salePrice-e,this.form.priceWithDiscount.toString()}return this.form.percentage=0,0}}),methods:Object(i["a"])({},Object(l["b"])(["getSingleProduct","getCategories"]),{editItem:function(){this.disabledFields=!this.disabledFields},addQuantity:function(e){this.form.stock[e].quantity.push({size:"",units:0})},addItem:function(){this.form.stock.push({ref:"",color:"",quantity:[{size:"",units:0}]})},removeItemFromStock:function(e){1!==this.form.stock.length&&this.form.stock.splice(e,1)},removeQuantity:function(e){1!==this.form.stock[e].quantity.length&&this.form.stock[e].quantity.splice(e,1)},removeItem:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,c.a.delete("https://www.macalola.com/product/".concat(e.form.referenceNumberCommon),{headers:{authorization:sessionStorage.getItem("adminToken")}});case 4:e.$router.push({path:"/administration/products"}),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.$bvToast.toast("Error",{title:"al borrar producto",variant:"danger",solid:!0});case 10:return t.prev=10,e.loading=!1,t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})))()},saveItem:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.form.accesory||(e.form.totalStock=0,e.form.stock.forEach((function(t){t.quantity.forEach((function(t){e.form.totalStock+=Number(t.units)}))}))),e.loading=!0,r=new FormData,r.append("provider",e.form.provider),r.append("buyDate",e.form.buyDate),r.append("season",e.form.season),r.append("name",e.form.name),r.append("purchasePrice",e.form.purchasePrice),r.append("salePrice",0===e.form.priceWithDiscount?e.form.salePrice:e.form.priceWithDiscount),r.append("percentage",e.form.percentage),r.append("promotionOn",e.form.promotionOn),r.append("description",e.form.description),r.append("stock",JSON.stringify(e.form.stock)||[]),r.append("accesory",e.form.accesory),r.append("totalStock",e.form.totalStock),r.append("category",e.form.category),r.append("img",e.form.img),t.next=20,c.a.put("https://www.macalola.com/product/".concat(e.form.referenceNumberCommon),r,{headers:{"content-type":"multipart/form-data",authorization:sessionStorage.getItem("adminToken")}});case 20:e.$bvToast.toast("Ok:)",{title:"Producto actualizado correctamente",variant:"success",solid:!0}),e.$router.push({path:"/administration/products"}),t.next=27;break;case 24:t.prev=24,t.t0=t["catch"](0),e.$bvToast.toast("Error",{title:"No se pudo actualizar el producto",variant:"danger",solid:!0});case 27:return t.prev=27,e.loading=!1,t.finish(27);case 30:case"end":return t.stop()}}),t,null,[[0,24,27,30]])})))()}}),created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.getCategories(),t.prev=1,e.loading=!0,t.next=5,e.getSingleProduct(e.$route.params.ref);case 5:e.form.referenceNumberCommon=e.product.referenceNumberCommon,e.form.provider=e.product.provider,e.form.season=e.product.season,e.form.name=e.product.name,e.form.buyDate=e.product.buyDate,e.form.totalStock=e.product.totalStock,e.form.purchasePrice=e.product.purchasePrice,e.form.salePrice=e.product.salePrice,e.form.percentage=e.product.percentage,e.form.stock=e.product.stock,e.form.promotionOn=e.product.promotionOn,e.form.accesory=e.product.accesory,e.form.priceWithDiscount=e.product.salePrice,e.form.category=e.product.category,t.next=24;break;case 21:t.prev=21,t.t0=t["catch"](1),e.$bvToast.toast("Error",{title:"No se pudo obtener el producto",variant:"danger",solid:!0});case 24:return t.prev=24,e.loading=!1,t.finish(24);case 27:case"end":return t.stop()}}),t,null,[[1,21,24,27]])})))()}},u=m,d=(r("b448"),r("2877")),f=Object(d["a"])(u,o,a,!1,null,"466bf966",null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-a0ee4cde.9779f570.js.map