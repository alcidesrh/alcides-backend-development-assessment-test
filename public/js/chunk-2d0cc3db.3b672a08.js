(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc3db"],{"4ca7":function(e,t,s){"use strict";s.r(t);var a=s("a523"),i=s("8fea"),o=s("0e8f"),n=s("a722"),r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"customer-list"},[t("Toolbar",{attrs:{"handle-add":e.addHandler}}),t(a["a"],{attrs:{"grid-list-xl":"",fluid:""}},[t(n["a"],{attrs:{row:"",wrap:""}},[t(o["a"],{attrs:{sm12:""}},[t("h1",[e._v("Customer List")])]),t(o["a"],{attrs:{lg12:""}},[t(i["a"],{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,"items-per-page":e.options.itemsPerPage,loading:e.isLoading,"loading-text":e.$t("Loading..."),options:e.options,"server-items-length":e.totalItems,"item-key":"@id"},on:{"update:itemsPerPage":function(t){return e.$set(e.options,"itemsPerPage",t)},"update:items-per-page":function(t){return e.$set(e.options,"itemsPerPage",t)},"update:options":[function(t){e.options=t},e.onUpdateOptions]},scopedSlots:e._u([{key:"item.action",fn:function(s){return t("ActionCell",{attrs:{"handle-show":()=>e.showHandler(s.item),"handle-edit":()=>e.editHandler(s.item),"handle-delete":()=>e.deleteHandler(s.item)}})}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1)],1)],1)},l=[],d=s("2f62"),c=s("5935"),m=s("cc4b"),u=s("9771"),p=s("6908"),g={name:"CustomerList",servicePrefix:"Customer",mixins:[m["a"]],components:{Toolbar:p["a"],ActionCell:u["a"]},data(){return{headers:[{text:"Name",value:"name"},{text:"Actions",value:"action",sortable:!1}],selected:[]}},computed:{...Object(d["c"])("customer",{items:"list"}),...Object(c["c"])("customer",{deletedItem:"deleted",error:"error",isLoading:"isLoading",resetList:"resetList",totalItems:"totalItems",view:"view"})},methods:{...Object(d["b"])("customer",{getPage:"fetchAll",deleteItem:"del"})}},f=g,h=s("2877"),b=Object(h["a"])(f,r,l,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0cc3db.3b672a08.js.map