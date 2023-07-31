"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[716],{7957:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7294),s=n(614);const r={apiRequest:"apiRequest_QBr9",headingTag:"headingTag_WEVs",contents:"contents_XaVX",h1:"h1_dzso",h2:"h2_rWt0",h3:"h3_bL_Z",baseUrl:"baseUrl_J7Gk",tag:"tag_yP95",blueTag:"blueTag_WtG7",response:"response_nelD"};var l=n(9960);const o="#E63B19",i={200:{label:"Successful",color:"#2CDD9C"},400:{label:"Bad Request",color:o},401:{label:"Forbidden",color:o}};function u(e){let{type:t,url:n,request:o,responses:u}=e;return a.createElement("div",{className:r.apiRequest},a.createElement("div",{className:r.headingTag},"\ud83d\ude80 ",t),a.createElement("div",{className:r.contents},a.createElement("h1",{className:r.h1},a.createElement("span",{className:r.baseUrl},a.createElement(l.Z,{href:"/docs/environments"},"BASE_URL")),n),o&&a.createElement(a.Fragment,null,a.createElement("h2",{className:r.h2},"Request"),o.headers&&o.headers.length>0&&a.createElement(a.Fragment,null,a.createElement("h3",{className:r.h3},"Headers"),a.createElement("ul",null,o.headers.map((e=>a.createElement("li",null,a.createElement("span",{className:r.blueTag},e.name)," ",e.description))))),o.example&&a.createElement(s.Z,{language:"json",showLineNumbers:!0},o.example)),u&&u.length>0&&a.createElement(a.Fragment,null,a.createElement("h2",{className:r.h2},"Responses"),u.map((e=>a.createElement("div",{className:r.response},a.createElement("span",{style:{backgroundColor:i[e.status].color},className:r.tag},e.status," ",i[e.status].label),e.description&&` ${e.description}`,e.example&&a.createElement(s.Z,{language:"json",showLineNumbers:!0},e.example)))))))}},496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(7462),s=(n(7294),n(3905)),r=n(7957);const l={id:"cube-meta",title:"Meta Information",slug:"/cube/meta/"},o=void 0,i={unversionedId:"cube-meta",id:"cube-meta",title:"Meta Information",description:"Meta-information for the cubes defined in the data model can be retrieved.",source:"@site/docs/cube-meta.mdx",sourceDirName:".",slug:"/cube/meta/",permalink:"/komodo-api-docs/docs/cube/meta/",draft:!1,tags:[],version:"current",frontMatter:{id:"cube-meta",title:"Meta Information",slug:"/cube/meta/"},sidebar:"docs",previous:{title:"Introduction",permalink:"/komodo-api-docs/docs/cube/"},next:{title:"Loading Data",permalink:"/komodo-api-docs/docs/cube/load/"}},u={},c=[{value:"Request",id:"request",level:2},{value:"External Links",id:"external-links",level:2}],m={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Meta-information for the cubes defined in the data model can be retrieved."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)(r.Z,{type:"GET",url:"/cube/v1/meta",request:{headers:[{name:"Authorization",description:"Token returned by authentication process"}]},responses:[{status:200,color:"green",example:'{\n    "cubes": [\n        "public": true,\n        "name": "Groups",\n        "title": "Group Members",\n        "dimensions": [\n            {\n                "name": "Groups.id",\n                "title": "Group Members Id",\n                "type": "number",\n                "shortTitle": "Id",\n                "suggestFilterValues": true,\n                "isVisible": true,\n            },\n            {\n                "name": "Groups.name",\n                "title": "Group Members Name",\n                "type": "string",\n                "shortTitle": "Name",\n                "suggestFilterValues": true,\n                "isVisible": true,\n            },\n            ...\n        ],\n        "measures": [\n            {\n                "name": "Groups.count",\n                "title": "Group Members Count",\n                "shortTitle": "Count",\n                "type": "number",\n                "aggType": "count",\n                "isVisible": true,\n            },\n            ...\n        ],\n        "segments": [...],\n        ...\n    ]\n}'},{status:401,description:"Missing or invalid authentication token",color:"red",example:'{\n    "error": "Unauthorized",\n}'}],mdxType:"ApiRequest"}),(0,s.kt)("h2",{id:"external-links"},"External Links"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://cube.dev/docs/reference/rest-api#v1meta"},"Cube REST API")))}p.isMDXComponent=!0}}]);