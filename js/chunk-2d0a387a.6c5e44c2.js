(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a387a"],{"0323":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("strong",[t._v("Products")]),s("b-button",{staticClass:"float-right",attrs:{to:{name:"products.item",params:{id:"new"}},variant:"primary",size:"sm"}},[s("font-awesome-icon",{attrs:{icon:"plus"}}),t._v(" Add Product\n    ")],1)],1),s("div",[t.productList.loading?s("em",[t._v("\n      Loading products...\n      "),s("font-awesome-icon",{attrs:{icon:"spinner",size:"xs",spin:""}})],1):[0===t.productList.items.length?s("p",[t._v("\n        No products exist yet. Please add one to get started.\n      ")]):t._e(),t.productList.items.length>0?s("ul",[s("b-table",{attrs:{striped:"",hover:"",items:t.productList.items,fields:t.productListTableFields},scopedSlots:t._u([{key:"Name",fn:function(e){return[s("router-link",{attrs:{to:{name:"products.item",params:{id:e.item.ProductId}}}},[t._v("\n              "+t._s(e.value)+"\n            ")])]}}])})],1):t._e()]],2),s("router-view")],1)},o=[],i=s("2f62"),a={name:"ProductList",data:function(){return{productListTableFields:[{key:"Name",sortable:!0},{key:"Description",sortable:!1}]}},computed:Object(i["b"])({productList:function(t){return t.product.list}}),created:function(){0===this.$store.state.category.list.items.length&&this.$store.dispatch("category/getList"),this.$store.dispatch("product/getList")}},n=a,d=s("2877"),c=Object(d["a"])(n,r,o,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0a387a.6c5e44c2.js.map