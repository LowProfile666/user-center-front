"use strict";(self["webpackChunkuser_center_front"]=self["webpackChunkuser_center_front"]||[]).push([[694],{694:function(e,a,s){s.r(a),s.d(a,{default:function(){return f}});var t=s(6768),r=s(144),u=s(2399),n=s(7694),l=s(1387),o=s(5835);const c={id:"loginView"};var d=(0,t.pM)({__name:"LoginView",setup(e){const a=(0,l.rd)(),s=(0,o.n)(),d=(0,r.Kh)({userAccount:"",userPassword:""}),i=async()=>{const e=await(0,u.pH)(d);2e3===e.data.code&&e.data.data?(n.Ay.success("登录成功"),s.setLoginUser(e.data.data),await a.replace("/index")):n.Ay.error(e.data.msg)};return(e,a)=>{const s=(0,t.g2)("a-input"),r=(0,t.g2)("a-form-item"),u=(0,t.g2)("a-input-password"),n=(0,t.g2)("a-button"),l=(0,t.g2)("a-form");return(0,t.uX)(),(0,t.CE)("div",c,[a[3]||(a[3]=(0,t.Lk)("div",{class:"title"},"欢迎登录用户中心",-1)),(0,t.bF)(l,{class:"login-form",model:d,"label-col":{span:4},"wrapper-col":{span:18},"label-align":"left",onFinish:i},{default:(0,t.k6)((()=>[(0,t.bF)(r,{label:"账号",name:"userAccount",rules:[{required:!0,message:"请输入账号"}]},{default:(0,t.k6)((()=>[(0,t.bF)(s,{value:d.userAccount,"onUpdate:value":a[0]||(a[0]=e=>d.userAccount=e)},null,8,["value"])])),_:1}),(0,t.bF)(r,{label:"密码",name:"userPassword",rules:[{required:!0,message:"请输入密码"}]},{default:(0,t.k6)((()=>[(0,t.bF)(u,{value:d.userPassword,"onUpdate:value":a[1]||(a[1]=e=>d.userPassword=e)},null,8,["value"])])),_:1}),(0,t.bF)(r,{"wrapper-col":{offset:10,span:14}},{default:(0,t.k6)((()=>[(0,t.bF)(n,{type:"primary","html-type":"submit"},{default:(0,t.k6)((()=>a[2]||(a[2]=[(0,t.eW)("登录")]))),_:1})])),_:1})])),_:1},8,["model"])])}}}),i=s(1241);const p=(0,i.A)(d,[["__scopeId","data-v-3c2750e8"]]);var f=p}}]);
//# sourceMappingURL=694.5922186b.js.map