(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf8d4c1e"],{"1f4f":function(e,t,s){"use strict";s("8b37");var a=s("80d2"),i=s("7560"),r=s("58df");t["a"]=Object(r["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(a["h"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(e){return e("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"2f91":function(e,t,s){"use strict";var a=s("4f4d"),i=s("2abc");t["a"]={mixins:[a["a"]],created(){this.retrieve(decodeURIComponent(this.$route.params.id))},computed:{item(){return this.find(decodeURIComponent(this.$route.params.id))}},methods:{del(){this.deleteItem(this.item).then(()=>{this.showMessage(this.item["@id"]+" deleted."),this.$router.push({name:this.$options.servicePrefix+"List"}).catch(()=>{})})},formatDateTime:i["a"],editHandler(){this.$router.push({name:this.$options.servicePrefix+"Update",params:{id:this.item["@id"]}})}},watch:{error(e){e&&this.showError(e)},deleteError(e){e&&this.showError(e)}},beforeDestroy(){this.reset()}}},"3a5e":function(e,t,s){"use strict";var a=s("a797"),i=s("490a"),r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center"},[t(a["a"],{attrs:{value:e.visible}},[t(i["a"],{attrs:{indeterminate:"",size:"64"}})],1)],1)},o=[],d={props:{visible:{type:Boolean,required:!0}}},n=d,l=s("2877"),h=Object(l["a"])(n,r,o,!1,null,null,null);t["a"]=h.exports},"7b8f":function(e,t,s){"use strict";s.r(t);var a=s("1f4f"),i=s("2a7f"),r=function(){var e=this,t=e._self._c;return t("div",[t("Toolbar",{attrs:{list:()=>e.$router.push("/customers"),"handle-edit":e.editHandler,"handle-delete":e.del}},[t("template",{slot:"left"},[e.item?t(i["a"],[e._v(e._s(`${e.$options.servicePrefix} ${e.item["@id"]}`))]):e._e()],1)],2),t("br"),e.item?t("div",{staticClass:"table-customer-show"},[t(a["a"],[t("template",{slot:"default"},[t("thead",[t("tr",[t("th",[e._v("Field")]),t("th",[e._v("Value")])])]),t("tbody",[t("tr",[t("td",[t("strong",[e._v("Name")])]),t("td",[e._v(" "+e._s(e.item["name"])+" ")])])])])],2)],1):e._e(),t("Loading",{attrs:{visible:e.isLoading}})],1)},o=[],d=s("2f62"),n=s("5935"),l=s("3a5e"),h=s("2f91"),c=s("6908");const m="Customer";var u={name:"CustomerShow",servicePrefix:m,components:{Loading:l["a"],Toolbar:c["a"]},mixins:[h["a"]],computed:{...Object(n["c"])("customer",{isLoading:"isLoading"}),...Object(d["c"])("customer",["find"])},methods:{...Object(d["b"])("customer",{deleteItem:"del",reset:"resetShow",retrieve:"load"})}},p=u,f=s("2877"),b=Object(f["a"])(p,r,o,!1,null,null,null);t["default"]=b.exports},"8b37":function(e,t,s){}}]);
//# sourceMappingURL=chunk-bf8d4c1e.07ea87c2.js.map