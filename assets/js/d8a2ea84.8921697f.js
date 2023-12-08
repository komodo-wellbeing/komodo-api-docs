"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[913],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={id:"cube",title:"Introduction",slug:"/cube/"},o=void 0,s={unversionedId:"cube",id:"cube",title:"Introduction",description:"All requests made to the Cube API must include an Authorization header, which is set to the token returned by the authentication process (see here).",source:"@site/docs/cube.md",sourceDirName:".",slug:"/cube/",permalink:"/komodo-api-docs/docs/cube/",draft:!1,tags:[],version:"current",frontMatter:{id:"cube",title:"Introduction",slug:"/cube/"},sidebar:"docs",previous:{title:"Introduction",permalink:"/komodo-api-docs/docs/rest/"},next:{title:"Meta Information",permalink:"/komodo-api-docs/docs/cube/meta/"}},l={},u=[{value:"Cube Explained",id:"cube-explained",level:2},{value:"Dimensions",id:"dimensions",level:3},{value:"Measures",id:"measures",level:3},{value:"Segments",id:"segments",level:3},{value:"Filters",id:"filters",level:3},{value:"Time Dimensions",id:"time-dimensions",level:3},{value:"External Links",id:"external-links",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All requests made to the Cube API must include an ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header, which is set to the token returned by the authentication process (",(0,i.kt)("a",{parentName:"p",href:"/komodo-api-docs/docs/auth/"},"see here"),")."),(0,i.kt)("h2",{id:"cube-explained"},"Cube Explained"),(0,i.kt)("h3",{id:"dimensions"},"Dimensions"),(0,i.kt)("p",null,"Dimensions in Cube are attributes related to the record(s) in question, e.g. id, name, description, etc."),(0,i.kt)("h3",{id:"measures"},"Measures"),(0,i.kt)("p",null,"Measures are aggregations of data."),(0,i.kt)("h3",{id:"segments"},"Segments"),(0,i.kt)("p",null,"Segments are predefined filters."),(0,i.kt)("h3",{id:"filters"},"Filters"),(0,i.kt)("p",null,"Filters are ways you can filter returned query results."),(0,i.kt)("h3",{id:"time-dimensions"},"Time Dimensions"),(0,i.kt)("p",null,"Time Dimensions can be included in a query to limit results to a specific time based on any time fields."),(0,i.kt)("h2",{id:"external-links"},"External Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cube.dev/docs/reference/rest-api"},"Cube REST API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cube.dev/docs/product/data-modeling/reference/dimensions"},"Cube Dimensions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cube.dev/docs/product/data-modeling/reference/measures"},"Cube Measures")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cube.dev/docs/product/data-modeling/reference/segments"},"Cube Segments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cube.dev/docs/product/apis-integrations/rest-api/query-format#filters-format"},"Cube Filters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cube.dev/docs/product/apis-integrations/rest-api/query-format#time-dimensions-format"},"Cube Time Dimensions"))))}p.isMDXComponent=!0}}]);