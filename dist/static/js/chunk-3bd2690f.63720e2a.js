(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bd2690f"],{3520:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{"prefix-icon":"el-icon-search",placeholder:"Cluster名称",clearable:""},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v(" "),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{loading:t.listLoading,type:"primary"},on:{click:t.getList}},[t._v("刷新\n        ")]),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{float:"right"},attrs:{type:"danger",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("添加\n        ")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.showList,"element-loading-text":"加载中...",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Cluster名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"负载均衡算法"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("loadBalanceFilter")(e.row.loadBalance)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"350"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return t.handleShowList(e.row)}}},[t._v("查看绑定的服务")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{background:"","current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.size,layout:"total, sizes, prev, pager, next, jumper",total:t.pageInfo.totalSize},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},a=[],s=(n("ac6a"),n("7f7f"),n("7ea2")),r=n("6724"),o=(n("2435"),n("ed08")),l="clusterIndex",c={name:l,directives:{waves:r["a"]},data:function(){return{listQuery:{name:"",loadBalance:void 0,page:1,size:10},listLoading:!0,dataList:[],showList:[],pageInfo:{totalSize:void 0}}},created:function(){this.getList()},watch:{$route:function(t,e){t.name!==l&&this.$destroy()},"listQuery.name":function(){this.handleFilter()}},computed:{},methods:{getList:function(){var t=this;this.listLoading=!0,s["b"]().then(function(e){t.updateList(e)}).catch(function(){t.listLoading=!1})},updateList:function(t){this.dataList=t||[],this.pageInfo.totalSize=this.dataList.length,this.listLoading=!1,this.updateShowList()},handleFilter:function(){this.listQuery.page=1,this.updateShowList()},updateShowList:function(){var t=this,e=[],n=[];this.dataList.forEach(function(n,i){var a=t.listQuery.name,s=t.listQuery.domain,r=t.listQuery.tag,l=t.listQuery.matchRule,c=!0;if(a&&(c=Object(o["i"])(n.name,a)),c&&s&&(c=Object(o["i"])(n.domain,s)),c&&r&&n.tags&&n.tags.length>0)for(var u=0,d=n.tags.length;u<d;u++){var h=n.tags[u]||{};c=Object(o["i"])(h.name,r)||Object(o["i"])(h.value,r)}c&&-1!==l&&(c=n.matchRule===l),c&&e.push(n)}),e.forEach(function(e,i){e=e||{};var a=t.listQuery.page,s=t.listQuery.size,r=i,o=a*s,l=o-s,c=!0;c=r>=l&&r<o,c&&n.push(e)}),this.showList=n,this.pageInfo.totalSize=e.length},handleDelete:function(t){var e=this,n=t.id;this.$confirm("是否删除该集群？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e._doDeleteItem(n)})},handleSizeChange:function(t){this.listQuery.size=t,this.listQuery.page=1,this.updateShowList()},handleCurrentChange:function(t){this.listQuery.page=t,this.updateShowList()},_doDeleteItem:function(t){var e=this;t&&s["a"](t).then(function(t){e.$message({type:"success",message:"删除成功!"}),e.getList()})},handleCreate:function(){this.$router.push({path:"/cluster/new"})},handleShowList:function(t){this.$router.push({path:"/server",query:{id:t.id}})},handleUpdate:function(t){this.$router.push({path:"/cluster/edit",query:{id:t.id}})}}},u=c,d=n("2877"),h=Object(d["a"])(u,i,a,!1,null,"73974664",null);e["default"]=h.exports},6724:function(t,e,n){"use strict";n("8d41");var i={bind:function(t,e){t.addEventListener("click",function(n){var i=Object.assign({},e.value),a=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),s=a.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var r=s.getBoundingClientRect(),o=s.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(r.width,r.height)+"px",s.appendChild(o)),a.type){case"center":o.style.top=r.height/2-o.offsetHeight/2+"px",o.style.left=r.width/2-o.offsetWidth/2+"px";break;default:o.style.top=n.pageY-r.top-o.offsetHeight/2-document.body.scrollTop+"px",o.style.left=n.pageX-r.left-o.offsetWidth/2-document.body.scrollLeft+"px"}return o.style.backgroundColor=a.color,o.className="waves-ripple z-active",!1}},!1)}},a=function(t){t.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(a)),i.install=a;e["a"]=i},"7ea2":function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"d",function(){return l}),n.d(e,"e",function(){return c}),n.d(e,"a",function(){return u}),n.d(e,"c",function(){return d});var i=n("b775"),a=n("2435"),s="/clusters";function r(t){return Object(i["a"])({url:s,method:"GET",params:t})}function o(){return new Promise(function(t,e){var n=[],i="",s=a["c"];function o(a){r(a).then(function(e){e=e||[];var a=e.length;if(a>0){if(n=n.concat(e),i=e[a-1]||{},i.id){var r={after:i.id,limit:s};o(r)}}else t(n)}).catch(function(){e()})}var l={after:"",limit:s};o(l)})}function l(t){return Object(i["a"])({url:s+"/"+t,method:"GET"})}function c(t){return Object(i["a"])({url:s,method:"PUT",data:t})}function u(t){return Object(i["a"])({url:s+"/"+t,method:"DELETE"})}function d(t){return Object(i["a"])({url:s+"/"+t+"/binds",method:"GET"})}},"8d41":function(t,e,n){},b775:function(t,e,n){"use strict";var i=n("bc3a"),a=n.n(i),s=n("5c96"),r="",o="",l=o+"/v1",c=a.a.create({baseURL:r+l,timeout:6e4});c.interceptors.request.use(function(t){return t},function(t){console.error(t),Promise.reject(t)}),c.interceptors.response.use(function(t){var e=t.data||{};t.headers;return 0===e.code?e.data:(Object(s["Message"])({message:e.data,type:"error",duration:5e3}),Promise.reject("error"))},function(t){return Object(s["Message"])({message:t.data||"网络异常",type:"error",duration:5e3}),Promise.reject(t)}),e["a"]=c}}]);