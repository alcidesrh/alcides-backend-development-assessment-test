(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35c0bff0"],{1120:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e._self._c;return t("div",[t("Toolbar",{attrs:{"handle-submit":e.onSendForm,"handle-reset":e.resetForm}}),t("VehicleForm",{ref:"createForm",attrs:{values:e.item,errors:e.violations}}),t("Loading",{attrs:{visible:e.isLoading}})],1)},i=[],a=r("2f62"),o=r("5935"),n=r("f84b"),l=r("3a5e"),u=r("6908"),c=r("2260");const d="Vehicle",{mapFields:m}=Object(o["a"])({getterType:"vehicle/getField",mutationType:"vehicle/updateField"});var h={name:"VehicleCreate",servicePrefix:d,mixins:[c["a"]],components:{Loading:l["a"],Toolbar:u["a"],VehicleForm:n["a"]},data(){return{item:{}}},computed:{...m(["error","isLoading","created","violations"])},methods:{...Object(a["b"])("vehicle",["create","reset"])}},p=h,v=r("2877"),f=Object(v["a"])(p,s,i,!1,null,null,null);t["default"]=f.exports},2260:function(e,t,r){"use strict";var s=r("4f4d"),i=r("2abc");t["a"]={mixins:[s["a"]],methods:{formatDateTime:i["a"],onCreated(e){this.showMessage(e["@id"]+" created"),this.$router.push({name:this.$options.servicePrefix+"Update",params:{id:e["@id"]}})},onSendForm(){const e=this.$refs.createForm;e.$v.$touch(),e.$v.$invalid||(console.log(e.$v.item.$model,e.$v),this.create(e.$v.item.$model))},resetForm(){this.$refs.createForm.$v.$reset(),this.item={}}},watch:{created(e){e&&this.onCreated(e)},error(e){e&&this.showError(e)}}}},"3a5e":function(e,t,r){"use strict";var s=r("a797"),i=r("490a"),a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center"},[t(s["a"],{attrs:{value:e.visible}},[t(i["a"],{attrs:{indeterminate:"",size:"64"}})],1)],1)},o=[],n={props:{visible:{type:Boolean,required:!0}}},l=n,u=r("2877"),c=Object(u["a"])(l,a,o,!1,null,null,null);t["a"]=c.exports},"4bd4":function(e,t,r){"use strict";r("caad");var s=r("58df"),i=r("7e2b"),a=r("3206");t["a"]=Object(s["a"])(i["a"],Object(a["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",t=>{this.$set(this.errorBag,e._uid,t)},{immediate:!0}),r={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?r.shouldValidate=e.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(e._uid)||(r.valid=t(e)))}):r.valid=t(e),r},validate(){return 0===this.inputs.filter(e=>!e.validate(!0)).length},reset(){this.inputs.forEach(e=>e.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(e=>e.resetValidation()),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find(t=>t._uid===e._uid);if(!t)return;const r=this.watchers.find(e=>e._uid===t._uid);r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==t._uid),this.inputs=this.inputs.filter(e=>e._uid!==t._uid),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},"62ad":function(e,t,r){"use strict";r("13d5"),r("caad"),r("4b85");var s=r("2b0e"),i=r("d9f7"),a=r("80d2");const o=["sm","md","lg","xl"],n=(()=>o.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),l=(()=>o.reduce((e,t)=>(e["offset"+Object(a["E"])(t)]={type:[String,Number],default:null},e),{}))(),u=(()=>o.reduce((e,t)=>(e["order"+Object(a["E"])(t)]={type:[String,Number],default:null},e),{}))(),c={col:Object.keys(n),offset:Object.keys(l),order:Object.keys(u)};function d(e,t,r){let s=e;if(null!=r&&!1!==r){if(t){const r=t.replace(e,"");s+="-"+r}return"col"!==e||""!==r&&!0!==r?(s+="-"+r,s.toLowerCase()):s.toLowerCase()}}const m=new Map;t["a"]=s["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...n,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:r,children:s,parent:a}){let o="";for(const i in t)o+=String(t[i]);let n=m.get(o);if(!n){let e;for(e in n=[],c)c[e].forEach(r=>{const s=t[r],i=d(e,r,s);i&&n.push(i)});const r=n.some(e=>e.startsWith("col-"));n.push({col:!r||!t.cols,["col-"+t.cols]:t.cols,["offset-"+t.offset]:t.offset,["order-"+t.order]:t.order,["align-self-"+t.alignSelf]:t.alignSelf}),m.set(o,n)}return e(t.tag,Object(i["a"])(r,{class:n}),s)}})},f84b:function(e,t,r){"use strict";var s=r("62ad"),i=r("a523"),a=r("4bd4"),o=r("0fd9"),n=r("b974"),l=r("8654"),u=function(){var e=this,t=e._self._c;return t(a["a"],[t(i["a"],{attrs:{fluid:""}},[t(o["a"],[t(s["a"],{attrs:{cols:"12",sm:"6",md:"6"}},[t(l["a"],{attrs:{"error-messages":e.yearErrors,label:e.$t("year")},on:{input:function(t){return e.$v.item.year.$touch()},blur:function(t){return e.$v.item.year.$touch()}},model:{value:e.item.year,callback:function(t){e.$set(e.item,"year",e._n(t))},expression:"item.year"}})],1),t(s["a"],{attrs:{cols:"12",sm:"6",md:"6"}},[t(l["a"],{attrs:{"error-messages":e.makeErrors,label:e.$t("make")},on:{input:function(t){return e.$v.item.make.$touch()},blur:function(t){return e.$v.item.make.$touch()}},model:{value:e.item.make,callback:function(t){e.$set(e.item,"make",t)},expression:"item.make"}})],1)],1),t(o["a"],[t(s["a"],{attrs:{cols:"12",sm:"6",md:"6"}},[t(l["a"],{attrs:{"error-messages":e.modelErrors,label:e.$t("model")},on:{input:function(t){return e.$v.item.model.$touch()},blur:function(t){return e.$v.item.model.$touch()}},model:{value:e.item.model,callback:function(t){e.$set(e.item,"model",t)},expression:"item.model"}})],1),t(s["a"],{attrs:{cols:"12",sm:"6",md:"6"}},[t(l["a"],{attrs:{"error-messages":e.vinErrors,label:e.$t("vin")},on:{input:function(t){return e.$v.item.vin.$touch()},blur:function(t){return e.$v.item.vin.$touch()}},model:{value:e.item.vin,callback:function(t){e.$set(e.item,"vin",t)},expression:"item.vin"}})],1)],1),t(o["a"],[t(s["a"],{attrs:{cols:"12",sm:"6",md:"6"}},[t(n["a"],{attrs:{items:e.partsSelectItems,"error-messages":e.partsErrors,"no-data-text":e.$t("No results"),label:e.$t("parts"),multiple:"","item-text":"name","item-value":"@id",chips:""},model:{value:e.item.parts,callback:function(t){e.$set(e.item,"parts",t)},expression:"item.parts"}})],1)],1)],1)],1)},c=[],d=r("3852"),m=r.n(d),h=r("1dce"),p=r("2f62"),v=r("5935"),f={name:"VehicleForm",mixins:[h["validationMixin"]],props:{values:{type:Object,required:!0},errors:{type:Object,default:()=>{}},initialValues:{type:Object,default:()=>{}}},mounted(){this.partsGetSelectItems(),this.ordersGetSelectItems()},data(){return{year:null,make:null,model:null,vin:null,parts:null,orders:null}},computed:{...Object(v["c"])("part",{partsSelectItems:"selectItems"}),...Object(v["c"])("order",{ordersSelectItems:"selectItems"}),item(){return this.initialValues||this.values},yearErrors(){const e=[];return this.$v.item.year.$dirty?(m()(this.violations,"year")&&e.push(this.violations.year),e):e},makeErrors(){const e=[];return this.$v.item.make.$dirty?(m()(this.violations,"make")&&e.push(this.violations.make),e):e},modelErrors(){const e=[];return this.$v.item.model.$dirty?(m()(this.violations,"model")&&e.push(this.violations.model),e):e},vinErrors(){const e=[];return this.$v.item.vin.$dirty?(m()(this.violations,"vin")&&e.push(this.violations.vin),e):e},partsErrors(){const e=[];return this.$v.item.parts.$dirty?(m()(this.violations,"parts")&&e.push(this.violations.parts),e):e},ordersErrors(){const e=[];return this.$v.item.orders.$dirty?(m()(this.violations,"orders")&&e.push(this.violations.orders),e):e},violations(){return this.errors||{}}},methods:{...Object(p["b"])({partsGetSelectItems:"part/fetchSelectItems"}),...Object(p["b"])({ordersGetSelectItems:"order/fetchSelectItems"})},validations:{item:{year:{},make:{},model:{},vin:{},parts:{},orders:{}}}},b=f,$=r("2877"),g=Object($["a"])(b,u,c,!1,null,null,null);t["a"]=g.exports}}]);
//# sourceMappingURL=chunk-35c0bff0.c5e3878b.js.map