(this["webpackJsonpvideo-streaming-front-end"]=this["webpackJsonpvideo-streaming-front-end"]||[]).push([[0],{55:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(19),r=c.n(s),i=(c(55),c(56),c(47)),j=c(6),l=c(37),d=c.n(l),o=c(43),b=c(7),h=c(2),O=c(8),x=c(33),u=c(84),p=c(83),f=c(44),m=c.n(f),v=c(1),g=function(e){return Object(v.jsx)(m.a,{url:e.url,controls:!0})},y=c(49),w=c(28),k=function(){return Object(v.jsx)(y.a,{children:Object(v.jsxs)(w.a,{children:[Object(v.jsx)(w.a.Link,{href:"/",children:"Home"}),Object(v.jsx)(w.a.Link,{href:"/upload",children:"Upload"}),Object(v.jsx)(w.a.Link,{href:"/videos",children:"Videos"})]})})},F=function(){var e=Object(n.useState)({name:"",value:""}),t=Object(O.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),r=Object(O.a)(s,2),i=r[0],j=r[1],l=Object(n.useState)(null),f=Object(O.a)(l,2),m=f[0],y=f[1],w=function(e){var t=e.target,n=t.name,s=t.value;a(Object(h.a)(Object(h.a)({},c),{},Object(b.a)({},n,s)))},F=function(){var e=Object(o.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(n=new FormData).append("file",i),n.append("name",c.name),n.append("value",c.value),e.next=7,fetch("http://localhost:3000/api/upload",{method:"POST",body:n});case 7:if(!e.sent.ok){e.next=12;break}window.location.reload(),e.next=13;break;case 12:throw new Error("Failed to Upload Video");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{children:[Object(v.jsx)(k,{}),Object(v.jsxs)(x.a,{children:[Object(v.jsxs)(u.a,{children:[Object(v.jsxs)(u.a.Group,{className:"mb-3",controlId:"name",children:[Object(v.jsx)(u.a.Label,{children:"File Name"}),Object(v.jsx)(u.a.Control,{type:"text",name:"name",value:c.name,onChange:w,placeholder:"Enter File Name"})]}),Object(v.jsxs)(u.a.Group,{className:"mb-3",controlId:"value",children:[Object(v.jsx)(u.a.Label,{children:"File Value"}),Object(v.jsx)(u.a.Control,{type:"number",name:"value",value:c.value,onChange:w,placeholder:"Enter File Value"})]}),Object(v.jsxs)(u.a.Group,{className:"mb-3",controlId:"file",children:[Object(v.jsx)(u.a.Label,{children:"Attach File"}),Object(v.jsx)(u.a.Control,{type:"file",name:"file",onChange:function(e){j(e.target.files[0]);var t=URL.createObjectURL(e.target.files[0]);y(t)}})]}),Object(v.jsx)(p.a,{variant:"primary",onClick:F,children:"Submit"})]}),m?Object(v.jsx)("div",{children:Object(v.jsx)(g,{url:m})}):null]})]})},L=c(46),C=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(O.a)(s,2),i=r[0],j=r[1];return Object(n.useEffect)((function(){fetch("http://localhost:3000/api/videos").then((function(e){if(e.ok)return e.json()})).then((function(e){a(e),j(!0)})).catch((function(e){console.error("Error fetching data",e)})).finally((function(){j(!0)}))}),[]),!1===i?Object(v.jsx)("p",{children:"Loading"}):Object(v.jsxs)("div",{children:[Object(v.jsx)(k,{}),Object(v.jsx)(x.a,{children:Object(v.jsxs)(L.a,{striped:!0,bordered:!0,hover:!0,children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"id"}),Object(v.jsx)("th",{children:"Name"}),Object(v.jsx)("th",{children:"Value"}),Object(v.jsx)("th",{children:"Link"})]})}),Object(v.jsx)("tbody",{children:c.map((function(e){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:e._id}),Object(v.jsx)("td",{children:e.metadata.name}),Object(v.jsx)("td",{children:e.metadata.value}),Object(v.jsx)("td",{children:Object(v.jsx)("a",{href:"/videos/"+e._id,children:"Watch"})})]})}))})]})})]})},V=function(){var e=Object(j.g)().id,t="http://localhost:3000/api/videos/".concat(e);return Object(v.jsxs)("div",{children:[Object(v.jsx)(k,{}),Object(v.jsx)(x.a,{fluid:!0,children:Object(v.jsxs)("div",{class:"d-flex flex-column justify-content-center",children:[Object(v.jsx)(g,{url:t}),Object(v.jsx)("p",{children:"Video id: ".concat(e)})]})})]})},N=c(85),S=c.p+"static/media/video-solid.6bb6cff1.svg",A=c.p+"static/media/upload-solid.eb516d3c.svg",I=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(k,{}),Object(v.jsx)(x.a,{children:Object(v.jsxs)("div",{class:"d-flex flex-row justify-content-center",children:[Object(v.jsxs)(N.a,{className:"text-center",style:{width:"25%",margin:"20px"},children:[Object(v.jsx)(N.a.Img,{varient:"top",src:A}),Object(v.jsxs)(N.a.Body,{children:[Object(v.jsx)(N.a.Title,{children:"Upload A Video"}),Object(v.jsx)(p.a,{href:"/upload",children:"Upload"})]})]}),Object(v.jsxs)(N.a,{className:"text-center",style:{width:"25%",margin:"20px"},children:[Object(v.jsx)(N.a.Img,{varient:"top",src:S}),Object(v.jsxs)(N.a.Body,{children:[Object(v.jsx)(N.a.Title,{children:"View A Video"}),Object(v.jsx)(p.a,{href:"/videos",children:"View"})]})]})]})})]})};var E=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("header",{className:"App-header",children:Object(v.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css",integrity:"sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU",crossorigin:"anonymous"})}),Object(v.jsx)(i.a,{children:Object(v.jsxs)(j.c,{children:[Object(v.jsx)(j.a,{path:"/",element:Object(v.jsx)(I,{})}),Object(v.jsx)(j.a,{path:"upload",element:Object(v.jsx)(F,{})}),Object(v.jsx)(j.a,{path:"videos",element:Object(v.jsx)(C,{})}),Object(v.jsx)(j.a,{path:"videos/:id",element:Object(v.jsx)(V,{})})]})})]})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,86)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(E,{})}),document.getElementById("root")),T()}},[[81,1,2]]]);
//# sourceMappingURL=main.66253676.chunk.js.map