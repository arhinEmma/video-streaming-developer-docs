(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{BHwe:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return p}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var b=n("7ljp"),a=n("XbGe"),c=n("Drr0");n("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var b in n)Object.prototype.hasOwnProperty.call(n,b)&&(e[b]=n[b])}return e}).apply(this,arguments)}var r={},o={_frontmatter:r},l=a.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,b,a={},c=Object.keys(e);for(b=0;b<c.length;b++)n=c[b],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(b.b)(l,i({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Batch input for location creation/modification."),Object(b.b)(c.k,{mdxType:"GQLCodeSnippet"},Object(b.b)(c.e,{mdxType:"GQLLine"},Object(b.b)(c.d,{mdxType:"GQLKeyword"},"type")," BatchLocationInput ",Object(b.b)(c.h,{mdxType:"GQLOpen"})),Object(b.b)(c.e,{mdxType:"GQLLine"}," "),Object(b.b)(c.e,{mdxType:"GQLLine"},Object(b.b)(c.j,{mdxType:"GQLTab"}),Object(b.b)(c.c,{mdxType:"GQLComment"},"# Name of location.")),Object(b.b)(c.e,{mdxType:"GQLLine"},Object(b.b)(c.j,{mdxType:"GQLTab"}),Object(b.b)(c.c,{mdxType:"GQLComment"},"# Must not be empty, must be unique and maximum allowed length is 60 characters.")),Object(b.b)(c.e,{mdxType:"GQLLine"},Object(b.b)(c.j,{mdxType:"GQLTab"}),Object(b.b)(c.g,{mdxType:"GQLName"},"name"),": ",Object(b.b)(c.f,{href:"/ecdn-api-scalars/String",mdxType:"GQLLink"},"String"),Object(b.b)(c.i,{mdxType:"GQLOperator"},"!")),Object(b.b)(c.e,{mdxType:"GQLLine"}," "),Object(b.b)(c.e,{mdxType:"GQLLine"},Object(b.b)(c.j,{mdxType:"GQLTab"}),Object(b.b)(c.c,{mdxType:"GQLComment"},"# ID of parent region/location.")),Object(b.b)(c.e,{mdxType:"GQLLine"},Object(b.b)(c.j,{mdxType:"GQLTab"}),Object(b.b)(c.g,{mdxType:"GQLName"},"parentID"),": ",Object(b.b)(c.f,{href:"/ecdn-api-scalars/ID",mdxType:"GQLLink"},"ID"),Object(b.b)(c.i,{mdxType:"GQLOperator"},"!")),Object(b.b)(c.e,{mdxType:"GQLLine"}," "),Object(b.b)(c.e,{mdxType:"GQLLine"},Object(b.b)(c.j,{mdxType:"GQLTab"}),Object(b.b)(c.c,{mdxType:"GQLComment"},"# Restriction for client connections. Omit if there aren't any restrictions.")),Object(b.b)(c.e,{mdxType:"GQLLine"},Object(b.b)(c.j,{mdxType:"GQLTab"}),Object(b.b)(c.g,{mdxType:"GQLName"},"clientRestriction"),": ",Object(b.b)(c.f,{href:"/ecdn-api-input-objects/ClientRestrictionInput",mdxType:"GQLLink"},"ClientRestrictionInput")),Object(b.b)(c.e,{mdxType:"GQLLine"}," "),Object(b.b)(c.e,{mdxType:"GQLLine"},Object(b.b)(c.j,{mdxType:"GQLTab"}),Object(b.b)(c.c,{mdxType:"GQLComment"},"# Whether clients can connect to servers in this location or not. Defaults to true.")),Object(b.b)(c.e,{mdxType:"GQLLine"},Object(b.b)(c.j,{mdxType:"GQLTab"}),Object(b.b)(c.g,{mdxType:"GQLName"},"clientConnectionsEnabled"),": ",Object(b.b)(c.f,{href:"/ecdn-api-scalars/Boolean",mdxType:"GQLLink"},"Boolean")),Object(b.b)(c.e,{mdxType:"GQLLine"}," "),Object(b.b)(c.e,{mdxType:"GQLLine"},Object(b.b)(c.j,{mdxType:"GQLTab"}),Object(b.b)(c.c,{mdxType:"GQLComment"},"# Whether clients can fall back to external CDNs or not. Defaults to true.")),Object(b.b)(c.e,{mdxType:"GQLLine"},Object(b.b)(c.j,{mdxType:"GQLTab"}),Object(b.b)(c.g,{mdxType:"GQLName"},"cdnFallbackEnabled"),": ",Object(b.b)(c.f,{href:"/ecdn-api-scalars/Boolean",mdxType:"GQLLink"},"Boolean")),Object(b.b)(c.e,{mdxType:"GQLLine"}," "),Object(b.b)(c.e,{mdxType:"GQLLine"},Object(b.b)(c.j,{mdxType:"GQLTab"}),Object(b.b)(c.c,{mdxType:"GQLComment"},"# External IP ranges of location. Omit if ranges are inherited.")),Object(b.b)(c.e,{mdxType:"GQLLine"},Object(b.b)(c.j,{mdxType:"GQLTab"}),Object(b.b)(c.c,{mdxType:"GQLComment"},"# Cannot be filled if inheritExternalRanges is set to true.")),Object(b.b)(c.e,{mdxType:"GQLLine"},Object(b.b)(c.j,{mdxType:"GQLTab"}),Object(b.b)(c.g,{mdxType:"GQLName"},"externalRanges"),": [",Object(b.b)(c.f,{href:"/ecdn-api-scalars/IPv4Range",mdxType:"GQLLink"},"IPv4Range"),Object(b.b)(c.i,{mdxType:"GQLOperator"},"!"),"]"),Object(b.b)(c.e,{mdxType:"GQLLine"}," "),Object(b.b)(c.e,{mdxType:"GQLLine"},Object(b.b)(c.j,{mdxType:"GQLTab"}),Object(b.b)(c.c,{mdxType:"GQLComment"},"# Whether external ranges are inherited from parent location.")),Object(b.b)(c.e,{mdxType:"GQLLine"},Object(b.b)(c.j,{mdxType:"GQLTab"}),Object(b.b)(c.c,{mdxType:"GQLComment"},"# Defaults to false, must have a parent location if it's set to true.")),Object(b.b)(c.e,{mdxType:"GQLLine"},Object(b.b)(c.j,{mdxType:"GQLTab"}),Object(b.b)(c.c,{mdxType:"GQLComment"},"# Cannot be true if externalRanges field is filled as well.")),Object(b.b)(c.e,{mdxType:"GQLLine"},Object(b.b)(c.j,{mdxType:"GQLTab"}),Object(b.b)(c.g,{mdxType:"GQLName"},"inheritExternalRanges"),": ",Object(b.b)(c.f,{href:"/ecdn-api-scalars/Boolean",mdxType:"GQLLink"},"Boolean")),Object(b.b)(c.e,{mdxType:"GQLLine"}," "),Object(b.b)(c.e,{mdxType:"GQLLine"},Object(b.b)(c.b,{mdxType:"GQLClose"}))),Object(b.b)("h2",null,"Fields"),Object(b.b)("h3",null,"name: ",Object(b.b)("a",i({parentName:"h3"},{href:"/ecdn-api-scalars/String"}),"String"),"!"),Object(b.b)("p",null,"Name of location.\nMust not be empty, must be unique and maximum allowed length is 60 characters."),Object(b.b)("h3",null,"parentID: ",Object(b.b)("a",i({parentName:"h3"},{href:"/ecdn-api-scalars/ID"}),"ID"),"!"),Object(b.b)("p",null,"ID of parent region/location."),Object(b.b)("h3",null,"clientRestriction: ",Object(b.b)("a",i({parentName:"h3"},{href:"/ecdn-api-input-objects/ClientRestrictionInput"}),"ClientRestrictionInput")),Object(b.b)("p",null,"Restriction for client connections. Omit if there aren’t any restrictions."),Object(b.b)("h3",null,"clientConnectionsEnabled: ",Object(b.b)("a",i({parentName:"h3"},{href:"/ecdn-api-scalars/Boolean"}),"Boolean")),Object(b.b)("p",null,"Whether clients can connect to servers in this location or not. Defaults to true."),Object(b.b)("h3",null,"cdnFallbackEnabled: ",Object(b.b)("a",i({parentName:"h3"},{href:"/ecdn-api-scalars/Boolean"}),"Boolean")),Object(b.b)("p",null,"Whether clients can fall back to external CDNs or not. Defaults to true."),Object(b.b)("h3",null,"externalRanges: [",Object(b.b)("a",i({parentName:"h3"},{href:"/ecdn-api-scalars/IPv4Range"}),"IPv4Range"),"!]"),Object(b.b)("p",null,"External IP ranges of location. Omit if ranges are inherited.\nCannot be filled if inheritExternalRanges is set to true."),Object(b.b)("h3",null,"inheritExternalRanges: ",Object(b.b)("a",i({parentName:"h3"},{href:"/ecdn-api-scalars/Boolean"}),"Boolean")),Object(b.b)("p",null,"Whether external ranges are inherited from parent location.\nDefaults to false, must have a parent location if it’s set to true.\nCannot be true if externalRanges field is filled as well."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ecdn-api-input-objects-batch-location-input-mdx-606f68251fec7e2c1b11.js.map