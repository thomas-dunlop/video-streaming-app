(this["webpackJsonpvideo-streaming-front-end"]=this["webpackJsonpvideo-streaming-front-end"]||[]).push([[0],{55:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(19),i=n.n(r),s=(n(55),n(56),n(48)),j=n(6),l=n(26),o=n.n(l),d=n(32),b=n(7),h=n(2),O=n(8),u=n(46),x=n(84),p=n(47),m=n(86),f=n(83),v=n(44),g=n.n(v),y=n(1),w=function(e){return Object(y.jsx)(g.a,{url:e.url,controls:!0})},k=n(50),C=n(29),L=function(){return Object(y.jsx)(k.a,{bg:"light",variant:"light",style:{marginBottom:"25px"},children:Object(y.jsxs)(C.a,{children:[Object(y.jsx)(C.a.Link,{href:"/",children:"Home"}),Object(y.jsx)(C.a.Link,{href:"/upload",children:"Upload"}),Object(y.jsx)(C.a.Link,{href:"/videos",children:"Videos"})]})})},N=n(87),F=function(e){return Object(y.jsxs)(N.a,{className:"text-center",style:{width:"25%",margin:"20px"},children:[Object(y.jsx)(N.a.Img,{varient:"top",src:e.imageURL,style:{height:"200px",margin:"auto"}}),Object(y.jsxs)(N.a.Body,{children:[Object(y.jsx)(N.a.Title,{children:e.title}),Object(y.jsx)(f.a,{href:e.endpoint,children:e.buttonTitle})]})]})},S="https://video-streaming-demo-app.herokuapp.com/",V=function(){var e=Object(c.useState)({name:"",value:""}),t=Object(O.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),i=Object(O.a)(r,2),s=i[0],j=i[1],l=Object(c.useState)(null),v=Object(O.a)(l,2),g=v[0],k=v[1],C=function(e){var t=e.target,c=t.name,r=t.value;a(Object(h.a)(Object(h.a)({},n),{},Object(b.a)({},c,r)))},N=function(){var e=Object(d.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(c=new FormData).append("file",s),c.append("name",n.name),c.append("value",n.value),e.next=7,fetch(S+"api/upload",{method:"POST",body:c});case 7:if(!e.sent.ok){e.next=12;break}window.location.reload(),e.next=13;break;case 12:throw new Error("Failed to Upload Video");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{children:[Object(y.jsx)(L,{}),Object(y.jsx)(u.a,{children:Object(y.jsxs)(x.a,{children:[Object(y.jsx)(p.a,{children:Object(y.jsxs)(m.a,{children:[Object(y.jsxs)(m.a.Group,{className:"mb-3",controlId:"name",children:[Object(y.jsx)(m.a.Label,{children:"File Name"}),Object(y.jsx)(m.a.Control,{type:"text",name:"name",value:n.name,onChange:C,placeholder:"Enter File Name"})]}),Object(y.jsxs)(m.a.Group,{className:"mb-3",controlId:"value",children:[Object(y.jsx)(m.a.Label,{children:"File Value"}),Object(y.jsx)(m.a.Control,{type:"number",name:"value",value:n.value,onChange:C,placeholder:"Enter File Value"})]}),Object(y.jsxs)(m.a.Group,{className:"mb-3",controlId:"file",children:[Object(y.jsx)(m.a.Label,{children:"Attach File"}),Object(y.jsx)(m.a.Control,{type:"file",name:"file",onChange:function(e){j(e.target.files[0]);var t=window.URL.createObjectURL(e.target.files[0]);k(t)}})]}),Object(y.jsx)(f.a,{variant:"primary",onClick:N,children:"Submit"})]})}),Object(y.jsx)(p.a,{children:g?Object(y.jsxs)("div",{children:[Object(y.jsx)("br",{}),Object(y.jsx)(w,{url:g})]}):null})]})})]})},T=n(85),U=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),i=Object(O.a)(r,2),s=i[0],j=i[1],l=Object(c.useState)({}),x=Object(O.a)(l,2),p=x[0],v=x[1];Object(c.useEffect)((function(){fetch(S+"api/videos").then((function(e){if(e.ok)return e.json()})).then((function(e){a(e),j(!0)})).catch((function(e){console.error("Error fetching data",e)})).finally((function(){j(!0)}))}),[]);var g=function(e){var t=e.target,n=t.name,c=t.value;v(Object(h.a)(Object(h.a)({},p),{},Object(b.a)({},n,c)))},w=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=S+"api/videos/?"+new URLSearchParams(p).toString(),e.next=4,fetch(t);case 4:if(!(n=e.sent).ok){e.next=13;break}return e.next=8,n.json();case 8:c=e.sent,a(c),console.log(c),e.next=14;break;case 13:throw new Error("Failed to get Videos");case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();return!1===s?Object(y.jsx)("p",{children:"Loading"}):Object(y.jsxs)("div",{children:[Object(y.jsx)(L,{}),Object(y.jsxs)(u.a,{children:[n?Object(y.jsxs)(T.a,{striped:!0,bordered:!0,hover:!0,children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"id"}),Object(y.jsx)("th",{children:"Name"}),Object(y.jsx)("th",{children:"Value"}),Object(y.jsx)("th",{children:"Date Created"}),Object(y.jsx)("th",{children:"Link"})]})}),Object(y.jsx)("tbody",{children:n.map((function(e){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:e._id}),Object(y.jsx)("td",{children:e.metadata.name}),Object(y.jsx)("td",{children:e.metadata.value}),Object(y.jsx)("td",{children:e.uploadDate}),Object(y.jsx)("td",{children:Object(y.jsx)("a",{href:"/videos/"+e._id,children:"Watch"})})]})}))})]}):Object(y.jsx)("p",{children:"No videos found"}),Object(y.jsx)("br",{}),Object(y.jsx)("h3",{children:"Query"}),Object(y.jsx)("h5",{children:"Current Query:"}),Object(y.jsx)("p",{children:JSON.stringify(p)}),Object(y.jsx)(m.a,{children:Object(y.jsxs)(m.a.Group,{className:"mb-3",controlId:"metadata.name",children:[Object(y.jsx)(m.a.Label,{children:"Name"}),Object(y.jsx)(m.a.Control,{type:"text",name:"metadata.name",onChange:g,placeholder:"Enter Name To Query"})]})}),Object(y.jsx)(m.a,{children:Object(y.jsxs)(m.a.Group,{className:"mb-3",controlId:"metadata.value",children:[Object(y.jsx)(m.a.Label,{children:"Value"}),Object(y.jsx)(m.a.Control,{type:"text",name:"metadata.value",onChange:g,placeholder:"Enter Value To Query"})]})}),Object(y.jsx)(f.a,{variant:"primary",onClick:w,children:"Submit"}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)(f.a,{variant:"primary",onClick:function(){window.location.reload()},children:"Clear"})]})]})},E=function(){var e=Object(j.g)().id,t="".concat(S,"api/stream/").concat(e);return Object(y.jsxs)("div",{children:[Object(y.jsx)(L,{}),Object(y.jsxs)(u.a,{fluid:!0,children:[Object(y.jsxs)("div",{class:"d-flex flex-column justify-content-center",children:[Object(y.jsx)(w,{url:t}),Object(y.jsx)("p",{children:"Video id: ".concat(e)})]}),Object(y.jsx)("a",{href:t,download:!0,children:"Download"})]})]})},I=n.p+"static/media/video-solid.6bb6cff1.svg",A=n.p+"static/media/upload-solid.ce8758e2.svg",B=function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(L,{}),Object(y.jsx)(u.a,{children:Object(y.jsxs)("div",{class:"d-flex flex-row justify-content-center",children:[Object(y.jsx)(F,{title:"Upload A Video",buttonTitle:"Upload",endpoint:"/upload",imageURL:A}),Object(y.jsx)(F,{title:"View A Video",buttonTitle:"View",endpoint:"/videos",imageURL:I})]})})]})};var D=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("header",{className:"App-header",children:Object(y.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css",integrity:"sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU",crossorigin:"anonymous"})}),Object(y.jsx)(s.a,{children:Object(y.jsxs)(j.c,{children:[Object(y.jsx)(j.a,{path:"/",element:Object(y.jsx)(B,{})}),Object(y.jsx)(j.a,{path:"upload",element:Object(y.jsx)(V,{})}),Object(y.jsx)(j.a,{path:"videos",element:Object(y.jsx)(U,{})}),Object(y.jsx)(j.a,{path:"videos/:id",element:Object(y.jsx)(E,{})})]})})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(D,{})}),document.getElementById("root")),G()}},[[81,1,2]]]);
//# sourceMappingURL=main.0b8d12df.chunk.js.map