(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f1194"],{"9ed6":function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"app flex-row align-items-center"},[t("div",{staticClass:"container"},[t("b-row",{staticClass:"justify-content-center"},[t("b-col",{attrs:{md:"8"}},[t("b-card-group",[t("b-card",{staticClass:"p-4",attrs:{"no-body":""}},[t("b-card-body",[t("h1",[s._v("Login")]),s.show?t("b-form",{on:{submit:s.onSubmit,reset:s.onReset}},[t("b-form-group",{attrs:{id:"usernameFormGroup",label:"Username","label-for":"username",description:"Username: art"}},[t("b-form-input",{class:{"is-invalid":s.submitted&&!s.username},attrs:{id:"username",type:"text"},model:{value:s.username,callback:function(e){s.username=e},expression:"username"}}),t("div",{directives:[{name:"show",rawName:"v-show",value:s.submitted&&!s.username,expression:"submitted && !username"}],staticClass:"invalid-feedback"},[s._v("\n                    Username is required\n                  ")])],1),t("b-form-group",{attrs:{id:"passwordFormGroup",label:"Password","label-for":"password",description:"Password: bosco"}},[t("b-form-input",{class:{"is-invalid":s.submitted&&!s.password},attrs:{id:"password",type:"password"},model:{value:s.password,callback:function(e){s.password=e},expression:"password"}}),t("div",{directives:[{name:"show",rawName:"v-show",value:s.submitted&&!s.password,expression:"submitted && !password"}],staticClass:"invalid-feedback"},[s._v("\n                    Password is required\n                  ")])],1),t("b-button",{attrs:{type:"submit",variant:"primary"}},[s._v("\n                  Login\n                  "),t("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:s.loggingIn,expression:"loggingIn"}],attrs:{icon:"spinner",size:"xs",spin:""}})],1),s._v("\n                 \n                "),t("b-button",{attrs:{type:"reset",variant:"danger"}},[s._v("Reset")])],1):s._e()],1)],1)],1)],1)],1)],1)])},n=[],r={name:"Login",data:function(){return{username:"",password:"",submitted:!1,show:!0}},computed:{loggingIn:function(){return this.$store.state.auth.status.loggingIn}},created:function(){this.$store.dispatch("auth/logout")},methods:{onSubmit:function(s){s.preventDefault(),this.submitted=!0;var e=this.$store.dispatch;this.username&&this.password&&e("auth/login",{username:this.username,password:this.password})},onReset:function(s){var e=this;s.preventDefault(),this.username="",this.password="",this.submitted=!1,this.show=!1,this.$nextTick(function(){e.show=!0})}}},i=r,o=t("2877"),u=Object(o["a"])(i,a,n,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0f1194.4fba4b53.js.map