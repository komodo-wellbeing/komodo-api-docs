"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[716],{2198:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),s=n(614);const a={blue:"#3DA2EB",green:"#2CDD9C",red:"#E63B19"};function o(e){let{type:t,url:n,headers:o,responses:i}=e;const l={border:`solid ${a.blue} 4px`,borderRadius:8,padding:14},u={fontSize:18},c={padding:4,borderRadius:8};return r.createElement("div",{style:l},r.createElement("h1",{style:{fontSize:24}},"\ud83d\ude80 ",r.createElement("span",{style:{fontWeight:"bold"}},t)," ",r.createElement("span",null,"https://api.komodowellbeing.com",n)),r.createElement("h2",{style:u},"Headers"),r.createElement("ul",null,o.map((e=>r.createElement("li",null,r.createElement("span",{style:{backgroundColor:a.blue,...c}},e.name)," ",e.description)))),i.length>0&&r.createElement(r.Fragment,null,r.createElement("h2",{style:u},"Responses"),r.createElement("ul",null,i.map((e=>r.createElement("li",null,r.createElement("span",{style:{backgroundColor:a[e.color],...c}},e.status),e.description&&` ${e.description}`,e.example&&r.createElement(s.Z,{language:"json",showLineNumbers:!0},e.example)))))))}},496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),s=(n(7294),n(3905)),a=n(2198);const o={id:"cube-meta",title:"Meta",slug:"/cube/meta/"},i="Meta",l={unversionedId:"cube-meta",id:"cube-meta",title:"Meta",description:"Meta-information for the cubes defined in the data model can be retrieved.",source:"@site/docs/cube-meta.mdx",sourceDirName:".",slug:"/cube/meta/",permalink:"/komodo-api-docs/docs/cube/meta/",draft:!1,tags:[],version:"current",frontMatter:{id:"cube-meta",title:"Meta",slug:"/cube/meta/"},sidebar:"docs",previous:{title:"Introduction",permalink:"/komodo-api-docs/docs/cube/"}},u={},c=[],m={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"meta"},"Meta"),(0,s.kt)("p",null,"Meta-information for the cubes defined in the data model can be retrieved."),(0,s.kt)(a.Z,{type:"GET",url:"/cube/v1/meta",headers:[{name:"Authorization",description:"Token returned by authentication process"}],responses:[{status:"200 Successful",color:"green",example:'{\n    "cubes": [\n        "public": true,\n        "name": "GroupMembers",\n        "title": "Group Members",\n        "dimensions": [\n            {\n                "name": "GroupMembers.id",\n                "title": "Group Members Id",\n                "type": "number",\n                "shortTitle": "Id",\n                "suggestFilterValues": true,\n                "isVisible": true,\n            },\n            {\n                "name": "GroupMembers.name",\n                "title": "Group Members Name",\n                "type": "string",\n                "shortTitle": "Name",\n                "suggestFilterValues": true,\n                "isVisible": true,\n            },\n            ...\n        ],\n        "measures": [\n            {\n                "name": "GroupMembers.count",\n                "title": "Group Members Count",\n                "shortTitle": "Count",\n                "type": "number",\n                "aggType": "count",\n                "isVisible": true,\n            },\n            ...\n        ],\n        "segments": [...],\n        ...\n    ]\n}'},{status:"401 Forbidden",description:"Missing or invalid authentication token",color:"red"}],mdxType:"ApiRequest"}))}p.isMDXComponent=!0}}]);