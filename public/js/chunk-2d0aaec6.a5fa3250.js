(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aaec6"],{"12a0":function(e,t,a){"use strict";a.r(t);var i=a("a523"),s=a("8fea"),n=a("0e8f"),r=a("a722"),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"part-list"},[t("Toolbar",{attrs:{list:()=>e.$router.push("/parts"),"handle-add":e.addHandler}}),t(i["a"],{attrs:{"grid-list-xl":"",fluid:""}},[t(r["a"],{attrs:{row:"",wrap:""}},[t(n["a"],{attrs:{sm12:""}},[t("h1",[e._v("Part List")])]),t(n["a"],{attrs:{lg12:""}},[t(s["a"],{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,"items-per-page":e.options.itemsPerPage,loading:e.isLoading,"loading-text":e.$t("Loading..."),options:e.options,"server-items-length":e.totalItems,"item-key":"@id"},on:{"update:itemsPerPage":function(t){return e.$set(e.options,"itemsPerPage",t)},"update:items-per-page":function(t){return e.$set(e.options,"itemsPerPage",t)},"update:options":[function(t){e.options=t},e.onUpdateOptions]},scopedSlots:e._u([{key:"item.price",fn:function({item:t}){return[e._v(" "+e._s(e.$t(t["price"]))+" ")]}},{key:"item.description",fn:function({item:a}){return[t("div",{staticClass:"tw-truncate tw-max-w-sm"},[e._v(" "+e._s(e.$t(a["description"]))+" ")])]}},{key:"item.action",fn:function(a){return t("ActionCell",{attrs:{"handle-show":()=>e.showHandler(a.item),"handle-edit":()=>e.editHandler(a.item),"handle-delete":()=>e.deleteHandler(a.item)}})}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1)],1)],1)},l=[],d=a("2f62"),c=a("5935"),p=a("cc4b"),u=a("9771"),m=a("6908"),f={name:"PartList",servicePrefix:"Part",mixins:[p["a"]],components:{Toolbar:m["a"],ActionCell:u["a"]},data(){return{headers:[{text:"Name",value:"name"},{text:"Price",value:"price"},{text:"Description",value:"description"},{text:"Actions",value:"action",sortable:!1}],selected:[]}},computed:{...Object(d["c"])("part",{items:"list"}),...Object(c["c"])("part",{deletedItem:"deleted",error:"error",isLoading:"isLoading",resetList:"resetList",totalItems:"totalItems",view:"view"})},methods:{...Object(d["b"])("part",{getPage:"fetchAll",deleteItem:"del"})}},g=f,h=a("2877"),v=Object(h["a"])(g,o,l,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0aaec6.a5fa3250.js.map