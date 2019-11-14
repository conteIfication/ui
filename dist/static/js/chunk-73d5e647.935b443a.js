(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73d5e647"],{"04e5":function(t,e,i){},"13b7":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"dataForm",attrs:{rules:t.rules,model:t.tempItem,"label-width":"150px"}},[i("el-form-item",{attrs:{label:"名称",prop:"name"}},[t.isShow?i("span",[t._v(t._s(t.tempItem.name))]):i("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"路由名称"},model:{value:t.tempItem.name,callback:function(e){t.$set(t.tempItem,"name",e)},expression:"tempItem.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"绑定到的接口",prop:"api"}},[t.isShow?i("span",[t._v(t._s(t.tempItem.apiName))]):[i("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"绑定到的接口"},model:{value:t.tempItem.api,callback:function(e){t.$set(t.tempItem,"api",e)},expression:"tempItem.api"}},t._l(t.apiList,function(t){return i("el-option",{key:t.id,attrs:{value:t.id,label:t.name}})}),1)]],2),t._v(" "),i("el-form-item",{attrs:{label:"路由到新集群",prop:"clusterID"}},[t.isShow?i("span",[t._v(t._s(t.tempItem.clusterName))]):[i("el-select",{attrs:{placeholder:"选择绑定到的集群"},model:{value:t.tempItem.clusterID,callback:function(e){t.$set(t.tempItem,"clusterID",t._n(e))},expression:"tempItem.clusterID"}},t._l(t.clusterList,function(t,e){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)]],2),t._v(" "),i("el-form-item",{attrs:{label:"路由策略"}},[t.isShow?i("span",[t._v(t._s(t.tempItem.strategy))]):[i("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"选择路由策略"},model:{value:t.tempItem.strategy,callback:function(e){t.$set(t.tempItem,"strategy",t._n(e))},expression:"tempItem.strategy"}},t._l(t.routingStrategyConstant,function(t){return i("el-option",{key:t.value,attrs:{value:t.value,label:t.title}})}),1)]],2),t._v(" "),i("el-form-item",{attrs:{label:"路由流量的比例",prop:"trafficRate"}},["show"==t.showType?i("span",[t._v(t._s(t.tempItem.trafficRate))]):i("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"例如：50"},model:{value:t.tempItem.trafficRate,callback:function(e){t.$set(t.tempItem,"trafficRate",t._n(e))},expression:"tempItem.trafficRate"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"路由匹配条件"}},[t.tempItem.conditions&&t.tempItem.conditions.length>0?[i("el-table",{staticStyle:{width:"900px"},attrs:{data:t.tempItem.conditions,border:""}},[i("el-table-column",{attrs:{label:"数据源"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(t._f("sourceFilter")(e.row.parameter.source)))])]}}],null,!1,3144697624)}),t._v(" "),i("el-table-column",{attrs:{label:"关键词"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.parameter.name))])]}}],null,!1,2902839270)}),t._v(" "),i("el-table-column",{attrs:{label:"路径Index"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.parameter.index))])]}}],null,!1,1290550431)}),t._v(" "),i("el-table-column",{attrs:{label:"操作符"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(t._f("cmpFilter")(e.row.cmp)))])]}}],null,!1,772275167)}),t._v(" "),i("el-table-column",{attrs:{label:"填写表达式"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.expect))])]}}],null,!1,2818930105)}),t._v(" "),t.isShow?t._e():i("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(i){return t.handleUpdateCondition(e.row,e.$index)}}},[t._v("修改\n                            ")]),t._v(" "),i("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(i){return t.handleDeleteCondition(e.row,e.$index)}}},[t._v("删除\n                            ")])]}}],null,!1,788123467)})],1),t._v(" "),t.isShow?t._e():i("el-button",{attrs:{type:"text"},on:{click:t.handleCreateCondition}},[t._v("新增匹配条件\n                ")])]:[t.isShow?t._e():i("el-button",{attrs:{type:"text"},on:{click:t.handleCreateCondition}},[t._v("新增匹配条件\n                ")])]],2),t._v(" "),i("el-form-item",{attrs:{label:"路由状态"}},[i("el-switch",{attrs:{disabled:t.isShow,"active-color":"#13ce66","inactive-color":"#f1f1f1"},model:{value:t.tempItem.status,callback:function(e){t.$set(t.tempItem,"status",e)},expression:"tempItem.status"}}),t._v(" "),i("el-tooltip",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticClass:"item",attrs:{effect:"dark",placement:"top-start"}},[i("div",{attrs:{slot:"content"},slot:"content"},[t._v("只有开关开着，路由才能生效。")]),t._v(" "),i("i",{staticClass:"el-icon-info",staticStyle:{"margin-left":"10px",color:"#909399"}})])],1),t._v(" "),i("div",{staticStyle:{"margin-left":"70px"}},[i("el-button",{on:{click:t.goList}},[t._v("返回")]),t._v(" "),t.isShow?i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.goEdit()}}},[t._v("编辑")]):t._e(),t._v(" "),t.isCreate?i("el-button",{attrs:{loading:t.submitting,type:"primary"},on:{click:function(e){return t.createItem("dataForm")}}},[t._v("提交\n            ")]):t.isUpdate?i("el-button",{attrs:{loading:t.submitting,type:"primary"},on:{click:function(e){return t.updateItem("dataForm")}}},[t._v("提交\n            ")]):t._e()],1)],1),t._v(" "),i("el-dialog",{attrs:{title:t.dialogStatusTitle,visible:t.dialogFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{ref:"dataFormCondition",attrs:{rules:t.rules2,model:t.tempCondition,inline:!0}},[i("el-form-item",{staticStyle:{width:"150px"},attrs:{label:"数据源"}},[i("el-select",{attrs:{placeholder:"placeholder"},model:{value:t.tempCondition.parameter.source,callback:function(e){t.$set(t.tempCondition.parameter,"source",e)},expression:"tempCondition.parameter.source"}},t._l(t.sourceConstant,function(t){return i("el-option",{key:t.value,attrs:{label:t.title,value:t.value}})}),1)],1),t._v(" "),5!=t.tempCondition.parameter.source?i("el-form-item",{staticStyle:{width:"150px"},attrs:{label:"关键词"}},[i("el-input",{model:{value:t.tempCondition.parameter.name,callback:function(e){t.$set(t.tempCondition.parameter,"name",e)},expression:"tempCondition.parameter.name"}})],1):i("el-form-item",{staticStyle:{width:"150px"},attrs:{label:"路径Index"}},[i("el-input",{staticStyle:{width:"80%"},model:{value:t.tempCondition.parameter.index,callback:function(e){t.$set(t.tempCondition.parameter,"index",t._n(e))},expression:"tempCondition.parameter.index"}}),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top-start"}},[i("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n                        http://example.com/path1/path2/path3?xxx=aa,填写1匹配path1，2匹配path2，3匹配path3\n                    ")]),t._v(" "),i("i",{staticClass:"el-icon-info",staticStyle:{"margin-left":"10px",color:"#909399"}})])],1),t._v(" "),i("el-form-item",{staticStyle:{width:"100px"},attrs:{label:"操作符"}},[i("el-select",{attrs:{placeholder:"操作符"},model:{value:t.tempCondition.cmp,callback:function(e){t.$set(t.tempCondition,"cmp",e)},expression:"tempCondition.cmp"}},t._l(t.cmpConstant,function(t){return i("el-option",{key:t.value,attrs:{label:t.title,value:t.value}})}),1)],1),t._v(" "),i("el-form-item",{staticStyle:{width:"200px"},attrs:{label:"表达式"}},[i("el-input",{attrs:{placeholder:"placeholder"},model:{value:t.tempCondition.expect,callback:function(e){t.$set(t.tempCondition,"expect",e)},expression:"tempCondition.expect"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),"create"==t.dialogStatus?i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.createItemCondition("dataFormCondition")}}},[t._v("\n                提交\n            ")]):t._e(),t._v(" "),"update"==t.dialogStatus?i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.updateItemCondition("dataFormCondition")}}},[t._v("\n                提交\n            ")]):t._e()],1)],1)],1)},a=[],r=(i("a481"),i("7f7f"),i("28a5"),i("f042")),o=i("7ea2"),s=i("4ec3"),l=i("ed08"),c=i("2435");function u(){return{parameter:{name:"",source:"",index:""},cmp:"",expect:""}}function m(){return{id:void 0,name:"",clusterID:void 0,api:void 0,conditions:[],strategy:c["v"].split,trafficRate:void 0,status:!0}}var d={name:"routingForm",props:{showType:{type:String,default:c["d"].create},editItem:{type:Object}},data:function(){return{loading:!0,submitting:!1,rules:{name:[{required:!0,message:"请填写名称",trigger:"change"}],clusterID:[{required:!0,message:"请选择cluster",trigger:"change"}],api:[{required:!0,message:"请选择Api",trigger:"change"}],trafficRate:[{required:!0,message:"请填写trafficRate",trigger:"change"},{type:"number",message:"请输入数字",trigger:"change"}]},rules2:{},tempItem:m(),routingStrategyConstant:c["u"],clusterList:[],apiList:[],cmpConstant:c["b"],sourceConstant:c["r"],tempCondition:u(),tempConditionIndex:-1,dialogFormVisible:!1,dialogStatus:c["d"].create}},computed:{isShow:function(){return this._isShow()},isCreate:function(){return this._isCreate()},isUpdate:function(){return this._isUpdate()},dialogStatusTitle:function(){return c["e"][this.dialogStatus]}},created:function(){this.init()},watch:{editItem:function(t,e){this.tempItem=Object(l["e"])(this.tempItem,Object(l["a"])(t)),this.tempItem.status=this.tempItem.status==c["s"].up,this.loading=!1,this.submitting=!1,this.initShow()}},methods:{init:function(){var t=this;this._isShow()?this.rules={}:this._isCreate()&&(this.loading=!1),o["b"]().then(function(e){t.clusterList=e,t.initShow()}),s["b"]().then(function(e){t.apiList=e,t.initShow()})},initShow:function(){if(this._isShow()){var t=Object(l["f"])(this.clusterList,this.tempItem.clusterID);t&&this.$set(this.tempItem,"clusterName",t.name);var e=Object(l["f"])(this.apiList,this.tempItem.api);e&&this.$set(this.tempItem,"apiName",e.name)}},goList:function(){this.$router.replace({path:"/routing"}),this.$destroy()},goEdit:function(){this.$router.push({path:"/routing/edit",query:{id:this.tempItem.id}})},createItem:function(t){var e=this;this.submitting||this.$refs[t].validate(function(t){if(!t)return!1;e._doCreateItem()})},_doCreateItem:function(){var t=this,e=Object(l["a"])(this.tempItem);e.status=e.status?c["s"].up:c["s"].down,this.submitting=!0,r["d"](e).then(function(){t.$message({type:"success",message:"创建成功!"}),setTimeout(function(){t.goList()},2e3)}).catch(function(){t.submitting=!1})},updateItem:function(t){var e=this;this.submitting||this.$refs[t].validate(function(t){if(!t)return!1;e._doUpdateItem()})},_doUpdateItem:function(){var t=this,e=Object(l["a"])(this.tempItem);e.status=e.status?c["s"].up:c["s"].down,this.submitting=!0,r["d"](e).then(function(){t.$message({type:"success",message:"修改成功!"}),setTimeout(function(){t.goList()},2e3)}).catch(function(){t.submitting=!1})},handleCreateCondition:function(){var t=this;this.initTempCondition(),this.dialogStatus=c["d"].create,this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs["dataFormCondition"].clearValidate()})},handleDeleteCondition:function(t,e){var i=this;function n(){i.tempItem.conditions.splice(e,1)}this.$confirm("是否删除该表达式？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n()})},handleUpdateCondition:function(t,e){this.initTempCondition(),this.tempCondition=Object(l["a"])(t),this.dialogFormVisible=!0,this.dialogStatus=c["d"].update},createItemCondition:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;var i=Object(l["a"])(e.tempCondition);5==i.parameter.source?i.parameter.name="":i.parameter.index=0,e.tempItem.conditions.push(i),e.dialogFormVisible=!1,e.initTempCondition()})},updateItemCondition:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;var i=Object(l["a"])(e.tempCondition);5==i.parameter.source?i.parameter.name="":i.parameter.index=0,e.tempItem.conditions.splice(e.tempConditionIndex,1,i),e.initTempCondition(),e.dialogFormVisible=!1})},initTempCondition:function(){this.tempCondition=u()},_isUpdate:function(){return this.showType===c["d"].update},_isShow:function(){return this.showType===c["d"].show},_isCreate:function(){return this.showType===c["d"].create}}},p=d,f=(i("93a8"),i("2877")),h=Object(f["a"])(p,n,a,!1,null,"9c89f81e",null);e["a"]=h.exports},"28a5":function(t,e,i){"use strict";var n=i("aae3"),a=i("cb7c"),r=i("ebd6"),o=i("0390"),s=i("9def"),l=i("5f1b"),c=i("520a"),u=i("79e5"),m=Math.min,d=[].push,p="split",f="length",h="lastIndex",v=4294967295,b=!u(function(){RegExp(v,"y")});i("214f")("split",2,function(t,e,i,u){var g;return g="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[f]||2!="ab"[p](/(?:ab)*/)[f]||4!="."[p](/(.?)(.?)/)[f]||"."[p](/()()/)[f]>1||""[p](/.?/)[f]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!n(t))return i.call(a,t,e);var r,o,s,l=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,p=void 0===e?v:e>>>0,b=new RegExp(t.source,u+"g");while(r=c.call(b,a)){if(o=b[h],o>m&&(l.push(a.slice(m,r.index)),r[f]>1&&r.index<a[f]&&d.apply(l,r.slice(1)),s=r[0][f],m=o,l[f]>=p))break;b[h]===r.index&&b[h]++}return m===a[f]?!s&&b.test("")||l.push(""):l.push(a.slice(m)),l[f]>p?l.slice(0,p):l}:"0"[p](void 0,0)[f]?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(i,n){var a=t(this),r=void 0==i?void 0:i[e];return void 0!==r?r.call(i,a,n):g.call(String(a),i,n)},function(t,e){var n=u(g,t,this,e,g!==i);if(n.done)return n.value;var c=a(t),d=String(this),p=r(c,RegExp),f=c.unicode,h=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(b?"y":"g"),_=new p(b?c:"^(?:"+c.source+")",h),I=void 0===e?v:e>>>0;if(0===I)return[];if(0===d.length)return null===l(_,d)?[d]:[];var w=0,C=0,x=[];while(C<d.length){_.lastIndex=b?C:0;var y,S=l(_,b?d:d.slice(C));if(null===S||(y=m(s(_.lastIndex+(b?0:C)),d.length))===w)C=o(d,C,f);else{if(x.push(d.slice(w,C)),x.length===I)return x;for(var k=1;k<=S.length-1;k++)if(x.push(S[k]),x.length===I)return x;C=w=y}}return x.push(d.slice(w)),x}]})},"4ec3":function(t,e,i){"use strict";i.d(e,"b",function(){return s}),i.d(e,"c",function(){return l}),i.d(e,"d",function(){return c}),i.d(e,"a",function(){return u});var n=i("b775"),a=i("2435"),r="/apis";function o(t){return Object(n["a"])({url:r,method:"GET",params:t})}function s(){return new Promise(function(t,e){var i=[],n="",r=a["c"];function s(a){o(a).then(function(e){e=e||[];var a=e.length;if(a>0){if(i=i.concat(e),n=e[a-1]||{},n.id){var o={after:n.id,limit:r};s(o)}}else t(i)}).catch(function(){e()})}var l={after:"",limit:r};s(l)})}function l(t){return Object(n["a"])({url:r+"/"+t,method:"GET"})}function c(t){return Object(n["a"])({url:r,method:"PUT",data:t})}function u(t){return Object(n["a"])({url:r+"/"+t,method:"DELETE"})}},"7ea2":function(t,e,i){"use strict";i.d(e,"b",function(){return s}),i.d(e,"d",function(){return l}),i.d(e,"e",function(){return c}),i.d(e,"a",function(){return u}),i.d(e,"c",function(){return m});var n=i("b775"),a=i("2435"),r="/clusters";function o(t){return Object(n["a"])({url:r,method:"GET",params:t})}function s(){return new Promise(function(t,e){var i=[],n="",r=a["c"];function s(a){o(a).then(function(e){e=e||[];var a=e.length;if(a>0){if(i=i.concat(e),n=e[a-1]||{},n.id){var o={after:n.id,limit:r};s(o)}}else t(i)}).catch(function(){e()})}var l={after:"",limit:r};s(l)})}function l(t){return Object(n["a"])({url:r+"/"+t,method:"GET"})}function c(t){return Object(n["a"])({url:r,method:"PUT",data:t})}function u(t){return Object(n["a"])({url:r+"/"+t,method:"DELETE"})}function m(t){return Object(n["a"])({url:r+"/"+t+"/binds",method:"GET"})}},"93a8":function(t,e,i){"use strict";var n=i("04e5"),a=i.n(n);a.a},b775:function(t,e,i){"use strict";var n=i("bc3a"),a=i.n(n),r=i("5c96"),o="",s="",l=s+"/v1",c=a.a.create({baseURL:o+l,timeout:6e4});c.interceptors.request.use(function(t){return t},function(t){console.error(t),Promise.reject(t)}),c.interceptors.response.use(function(t){var e=t.data||{};t.headers;return 0===e.code?e.data:(Object(r["Message"])({message:e.data,type:"error",duration:5e3}),Promise.reject("error"))},function(t){return Object(r["Message"])({message:t.data||"网络异常",type:"error",duration:5e3}),Promise.reject(t)}),e["a"]=c},f042:function(t,e,i){"use strict";i.d(e,"b",function(){return s}),i.d(e,"c",function(){return l}),i.d(e,"d",function(){return c}),i.d(e,"a",function(){return u});var n=i("b775"),a=i("2435"),r="/routings";function o(t){return Object(n["a"])({url:r,method:"GET",params:t})}function s(){return new Promise(function(t,e){var i=[],n="",r=a["c"];function s(a){o(a).then(function(e){e=e||[];var a=e.length;if(a>0){if(i=i.concat(e),n=e[a-1]||{},n.id){var o={after:n.id,limit:r};s(o)}}else t(i)}).catch(function(){e()})}var l={after:"",limit:r};s(l)})}function l(t){return Object(n["a"])({url:r+"/"+t,method:"GET"})}function c(t){return Object(n["a"])({url:r,method:"PUT",data:t})}function u(t){return Object(n["a"])({url:r+"/"+t,method:"DELETE"})}}}]);