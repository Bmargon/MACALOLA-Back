(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c78a858"],{"0759":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("hero-category"),e("grid-header-category",{attrs:{totalProducts:t.totalProducts},on:{totalPerPage:t.totalPerPage}}),e("div",{staticClass:"product container"},t._l(t.products,(function(t,a){return e("product-category",{key:a,attrs:{content:t}})})),1),e("Pagination",{attrs:{totalProducts:t.totalProducts,totalProductsPerPage:t.totalProductsPerPage},on:{updateProductsOnPageChange:t.updateProductsOnPageChange}})],1)},s=[],o=(e("96cf"),e("1da1")),n=e("bc3a"),c=e.n(n),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{staticClass:"container"},[e("ol",{staticClass:"breadcrumb justify-content-center"},[e("li",{staticClass:"breadcrumb-item"},[e("router-link",{attrs:{to:{name:"home"}}},[t._v("Home")])],1),e("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.capitalize))])]),e("div",{staticClass:"hero-content pb-5 text-center"},[e("h1",{staticClass:"hero-heading"},[t._v(t._s(t.$route.params.cat))])])])])},u=[],l=(e("fb6a"),{name:"HeroCategory",computed:{capitalize:function(){var t=this.$route.params.cat.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}}}),d=l,g=e("2877"),P=Object(g["a"])(d,i,u,!1,null,null,null),p=P.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("article",{staticClass:"container header-category"},[e("header",{staticClass:"product-grid-header"},[e("div",{staticClass:"mr-3 mb-3"},[t._v(" Mostrando "),t.perPage<t.totalProducts?e("strong",[t._v(t._s(t.perPage)+" ")]):t._e(),t._v(" "),t.perPage<t.totalProducts?e("span",[t._v("de")]):t._e(),t._v(" "),e("strong",[t._v(t._s(t.totalProducts)+" ")]),t._v("productos ")]),e("div",{staticClass:"mr-3 mb-3"},[e("span",{staticClass:"mr-2"},[t._v("Mostrar")]),t._l(t.totalPerPage,(function(a,r){return e("button",{key:r,staticClass:"page-link product-grid-header-show ",class:{active:a===t.perPage},on:{click:function(e){return t.handleTotal(a)}}},[t._v(t._s(a))])}))],2)])])},h=[],m={name:"GridHeaderCategory",props:["totalProducts"],data:function(){return{totalPerPage:[5,10,20,40],perPage:20}},methods:{handleTotal:function(t){this.perPage=t,this.$emit("totalPerPage",t)}}},v=m,b=Object(g["a"])(v,f,h,!1,null,null,null),C=b.exports,_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"d-flex justify-content-center mb-5 mt-3",attrs:{"aria-label":"page navigation"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item"},[e("button",{staticClass:"page-link",attrs:{"aria-label":"Previous"},on:{click:t.back}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("Anterior")])])]),t._l(t.getPages,(function(a,r){return e("li",{key:r,staticClass:"page-item",class:{active:r===t.currentPage}},[e("button",{staticClass:"page-link",on:{click:function(a){return t.handlePage(r)}}},[t._v(t._s(r+1))])])})),e("li",{staticClass:"page-item"},[e("button",{staticClass:"page-link",attrs:{"aria-label":"Next"},on:{click:t.next}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("Siguiente")])])])],2)])])},y=[],k={name:"Pagination",props:["totalProducts","totalProductsPerPage"],data:function(){return{currentPage:0}},watch:{currentPage:function(t){t<=0&&(this.currentPage=0),t>=this.getPages.length&&(this.currentPage=this.getPages.length-1),this.updateProductsOnPageChange(),window.scrollTo(0,0)}},computed:{getPages:function(){var t=this.totalProducts/this.totalProductsPerPage;return new Array(Math.ceil(t))}},methods:{back:function(){this.currentPage-=1},next:function(){this.currentPage+=1},updateProductsOnPageChange:function(){this.$emit("updateProductsOnPageChange",this.currentPage)},handlePage:function(t){this.currentPage=t}}},w=k,x=Object(g["a"])(w,_,y,!1,null,null,null),O=x.exports,$=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("article",[e("div",{staticClass:"col-xl-4 col-sm-6"},[e("div",{staticClass:"product mx-4"},[e("div",{staticClass:"product-image"},[t.content.promotionOn&&!t.isOffertsURL?e("div",{staticClass:"ribbon ribbon-primary"},[t._v("Oferta")]):t._e(),t.content.accesory?e("div",{staticClass:"ribbon ribbon-info"},[t._v("Accesorio")]):t._e(),0===t.content.totalStock?e("div",{staticClass:"ribbon ribbon-danger"},[t._v("Sold out")]):t._e(),e("img",{staticClass:"img",attrs:{src:t.content.img,alt:"product"}}),e("div",{staticClass:"product-hover-overlay"},[e("router-link",{attrs:{to:t.getRoute}}),e("div",{staticClass:"product-hover-overlay-buttons"},[e("router-link",{staticClass:"btn btn-dark btn-buy",attrs:{to:t.getRoute}},[e("i",{staticClass:"fa-search fa"}),e("span",{staticClass:"btn-buy-label ml-2"},[t._v("Ver")])])],1)],1)]),e("div",{staticClass:"py-4"},[e("h3",{staticClass:"h6 text-uppercase mb-1"},[e("router-link",{staticClass:"text-dark",attrs:{to:t.getRoute}},[t._v(" "+t._s(t.content.name)+" ")])],1),e("span",{staticClass:"text-muted"},[t._v(t._s(t.content.salePrice)+"€")])])])])])},A=[],R={name:"ProductCategory",props:["content"],computed:{getRoute:function(){return{path:"/i/"+this.$route.params.cat+"/"+this.content.referenceNumberCommon}},isOffertsURL:function(){return"ofertas"===this.$route.params.cat}},mounted:function(){window.scrollTo(0,0)}},j=R,E=(e("0d79"),Object(g["a"])(j,$,A,!1,null,"7817d7df",null)),S=E.exports,H=e("4a9d"),T={name:"Category",components:{HeroCategory:p,ProductCategory:S,Pagination:O,GridHeaderCategory:C},data:function(){return{products:[],from:0,totalProducts:0,totalProductsPerPage:20}},methods:{getProducts:function(t){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,"ofertas"!==a.$route.params.cat){t.next=10;break}return e="https://www.macalola.com/offers",t.next=5,c.a.get(e,{params:{from:a.from,total:a.totalProductsPerPage}});case 5:r=t.sent,a.totalProducts=r.data.total,a.products=r.data.productsDB,t.next=16;break;case 10:return s="https://www.macalola.com/bycategory/"+a.$route.params.cat,t.next=13,c.a.get(s,{params:{from:a.from,total:a.totalProductsPerPage}});case 13:o=t.sent,a.totalProducts=o.data.total,a.products=o.data.productsDB;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](0),console.log("error",t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,18]])})))()},updateProductsOnPageChange:function(t){this.from=t*this.totalProductsPerPage,this.getProducts()},totalPerPage:function(t){this.totalProductsPerPage=t,this.getProducts()}},created:function(){var t=this;H["a"].$on("refresh",(function(){t.getProducts()})),this.getProducts()},mounted:function(){window.scrollTo(0,0)}},M=T,L=(e("ded2"),Object(g["a"])(M,r,s,!1,null,"355083a0",null));a["default"]=L.exports},"0d79":function(t,a,e){"use strict";var r=e("a830"),s=e.n(r);s.a},"4a9d":function(t,a,e){"use strict";var r=e("2b0e"),s=new r["default"];a["a"]=s},"6cc1":function(t,a,e){},a830:function(t,a,e){},ded2:function(t,a,e){"use strict";var r=e("6cc1"),s=e.n(r);s.a},fb6a:function(t,a,e){"use strict";var r=e("23e7"),s=e("861d"),o=e("e8b5"),n=e("23cb"),c=e("50c4"),i=e("fc6a"),u=e("8418"),l=e("b622"),d=e("1dde"),g=e("ae40"),P=d("slice"),p=g("slice",{ACCESSORS:!0,0:0,1:2}),f=l("species"),h=[].slice,m=Math.max;r({target:"Array",proto:!0,forced:!P||!p},{slice:function(t,a){var e,r,l,d=i(this),g=c(d.length),P=n(t,g),p=n(void 0===a?g:a,g);if(o(d)&&(e=d.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)?s(e)&&(e=e[f],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return h.call(d,P,p);for(r=new(void 0===e?Array:e)(m(p-P,0)),l=0;P<p;P++,l++)P in d&&u(r,l,d[P]);return r.length=l,r}})}}]);
//# sourceMappingURL=chunk-2c78a858.34655b15.js.map