(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"+u0+":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return p}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("XbGe");n("qKvR");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={},i={_frontmatter:l},d=r.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(d,b({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"List export tasks for a channel"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"GET https://api.video.ibm.com/channels/{channelId}/chat/exports.json\n")),Object(a.b)("h3",null,"Query Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"PARAMETER"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"page")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Page number. The first page’s index is 1")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"pagesize")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Size of a page.")))),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success, a response with HTTP status “200 OK” is returned with the following key-value pairs inside the ",Object(a.b)("inlineCode",{parentName:"p"},"exports")," root array.\nTimestamp ares Unix timestamps in seconds."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Task ID")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"status")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Values: ",Object(a.b)("inlineCode",{parentName:"td"},"init"),", ",Object(a.b)("inlineCode",{parentName:"td"},"pending"),", ",Object(a.b)("inlineCode",{parentName:"td"},"completed"),", ",Object(a.b)("inlineCode",{parentName:"td"},"failed"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"requested_at")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"timestamp"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export init date")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"expires_at")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"timestamp"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export expiration")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"is_expired")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"An export lives up 24 hours, after expiration it will expire, and needs to be deleted manually")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"start_date")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"timestamp"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export starting time")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"end_date")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"timestamp"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export ending time")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"part_count")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"An export can contain up to 25 rooms (including direct and room conversations). If the requested export contains more, there will be multiple parts (tasks) created.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"part")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Part number")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"file_size")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export size in bytes if the export is completed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"download_url")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Url where the export json file can be downloaded")))),Object(a.b)("p",null,"Additionally there is a ",Object(a.b)("inlineCode",{parentName:"p"},"paging")," element in the response with the following values:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"previous")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Link to the previous page (if exists)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"next")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Link to the next page (if exists)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"page_count")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Number of available pages")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"item_count")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Total number of items")))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-json"}),'{\n  "exports": [\n    {\n      "id": 123,\n      "status": "init",\n      "requested_at": 1622111094,\n      "expires_at": 1622311094,\n      "is_expired": false,\n      "start_date": 1622111094,\n      "end_date": 1632111094,\n      "part_count": 1,\n      "part": 1,\n      "file_size": null,\n      "download_url": null\n    }\n  ],\n  "paging": {\n    "previous": "https://api.video.ibm.com/channels/CHANNEL_ID/chat/exports.json?page=1",\n    "next": "https://api.video.ibm.com/channels/CHANNEL_ID/chat/exports.json?page=3",\n    "page_count": 32,\n    "item_count": 1\n  }\n}\n')),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"402 Payment Required"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_request")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The user does not have the ",Object(a.b)("inlineCode",{parentName:"td"},"streamchat")," benefit")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Forbidden"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The API user is not allowed to manage the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"not_found")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Channel not found")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Initialize an export"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"POST https://api.video.ibm.com/channels/{channelId}/chat/exports.json\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"start_date")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"timestamp"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Start date of the export")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"end_date")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"timestamp"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"End date of the export")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"include_main")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export should contain the General room. Default: ",Object(a.b)("inlineCode",{parentName:"td"},"true"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"include_private")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export should include direct/group conversations. Default: ",Object(a.b)("inlineCode",{parentName:"td"},"false"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"rooms")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string[]"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"List of the rooms to be included in the export request")))),Object(a.b)("p",null,"The Content-Type of the request should be ",Object(a.b)("strong",{parentName:"p"},"application/x-www-form-urlencoded"),"."),Object(a.b)("p",null,"Example of the request:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"POST /channels/1234/chat/exports.json HTTP/1.1\nHost: api.video.ibm.com\nAuthorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950\nContent-Type: application/x-www-form-urlencoded\n\nstart_date=1622111094&end_date=1623111094&include_main=true&include_private=false&rooms[]=room_7dce3a5c-4ecd-4275-a4f9-c39aba521f02\n")),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success, a response with HTTP status “200 OK” is returned with the following key-value pairs inside the ",Object(a.b)("inlineCode",{parentName:"p"},"exports")," root array.\nTimestamps are Unix timestamps in seconds."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Task ID")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"status")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Values: ",Object(a.b)("inlineCode",{parentName:"td"},"init"),", ",Object(a.b)("inlineCode",{parentName:"td"},"pending"),", ",Object(a.b)("inlineCode",{parentName:"td"},"completed"),", ",Object(a.b)("inlineCode",{parentName:"td"},"failed"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"requested_at")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"timestamp"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export init date")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"expires_at")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"timestamp"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export expiration")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"is_expired")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"An export lives up 24 hours, after expiration it will expire, and needs to be deleted manually")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"start_date")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"timestamp"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export starting time")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"end_date")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"timestamp"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export ending time")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"part_count")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"An export can contain up to 25 rooms (including direct and room conversations). If the requested export contains more, there will be multiple parts (tasks) created.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"part")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Part number")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"file_size")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export size in bytes if the export is completed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"download_url")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Url where the export json file can be downloaded")))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-json"}),'{\n  "exports": [\n    {\n      "id": 123,\n      "status": "init",\n      "requested_at": 1622111094,\n      "expires_at": 1622311094,\n      "is_expired": false,\n      "start_date": 1622111094,\n      "end_date": 1632111094,\n      "part_count": 1,\n      "part": 1,\n      "file_size": null,\n      "download_url": null\n    }\n  ]\n}\n')),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"400 Bad Request"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"bad_request")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Invalid value was supplied")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"402 Payment Required"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_request")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The user does not have the ",Object(a.b)("inlineCode",{parentName:"td"},"streamchat")," benefit")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Forbidden"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The API user is not allowed to manage the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"not_found")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Channel not found")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Get an export task on a channel"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"GET https://api.video.ibm.com/channels/{channelId}/chat/exports/{taskId}.json\n")),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success, a response with HTTP status “200 OK” is returned with the following key-value pairs inside the ",Object(a.b)("inlineCode",{parentName:"p"},"export")," root object.\nTimestamps are Unix timestamps in seconds."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Task ID")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"status")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Values: ",Object(a.b)("inlineCode",{parentName:"td"},"init"),", ",Object(a.b)("inlineCode",{parentName:"td"},"pending"),", ",Object(a.b)("inlineCode",{parentName:"td"},"completed"),", ",Object(a.b)("inlineCode",{parentName:"td"},"failed"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"requested_at")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"timestamp"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export init date")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"expires_at")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"timestamp"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export expiration")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"is_expired")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"An export lives up 24 hours, after expiration it will expire, and needs to be deleted manually")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"start_date")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"timestamp"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export starting time")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"end_date")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"timestamp"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export ending time")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"part_count")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"An export can contain up to 25 rooms (including direct and room conversations). If the requested export contains more, there will be multiple parts (tasks) created.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"part")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Part number")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"file_size")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export size in bytes if the export is completed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"download_url")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Url where the export json file can be downloaded")))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-json"}),'{\n  "export": {\n    "id": 123,\n    "status": "init",\n    "requested_at": 1622111094,\n    "expires_at": 1622311094,\n    "is_expired": false,\n    "start_date": 1622111094,\n    "end_date": 1632111094,\n    "part_count": 1,\n    "part": 1,\n    "file_size": null,\n    "download_url": null\n  }\n}\n')),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"402 Payment Required"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_request")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The user does not have the ",Object(a.b)("inlineCode",{parentName:"td"},"streamchat")," benefit")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Forbidden"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The API user is not allowed to manage the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"not_found")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Channel not found")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Delete an export task"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"DELETE https://api.video.ibm.com/channels/{channelId}/chat/exports/{taskId}.json\n")),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success, a response with HTTP status ““204” No content” is returned."),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"402 Payment Required"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_request")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The user does not have the ",Object(a.b)("inlineCode",{parentName:"td"},"streamchat")," benefit")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Forbidden"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The API user is not allowed to manage the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"not_found")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Channel not found")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Restart an export task"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"POST https://api.video.ibm.com/channels/{channelId}/chat/exports/{taskId}/restart.json\n")),Object(a.b)("p",null,"Upon success, a response with HTTP status “200 OK” is returned with the following key-value pairs inside the ",Object(a.b)("inlineCode",{parentName:"p"},"export")," root object.\nTimestamps are Unix timestamps in seconds."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Task ID")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"status")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Values: ",Object(a.b)("inlineCode",{parentName:"td"},"init"),", ",Object(a.b)("inlineCode",{parentName:"td"},"pending"),", ",Object(a.b)("inlineCode",{parentName:"td"},"completed"),", ",Object(a.b)("inlineCode",{parentName:"td"},"failed"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"requested_at")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"timestamp"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export init date")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"expires_at")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"timestamp"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export expiration")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"is_expired")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"An export lives up 24 hours, after expiration it will expire, and needs to be deleted manually")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"start_date")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"timestamp"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export starting time")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"end_date")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"timestamp"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export ending time")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"part_count")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"An export can contain up to 25 rooms (including direct and room conversations). If the requested export contains more, there will be multiple parts (tasks) created.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"part")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Part number")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"file_size")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Export size in bytes if the export is completed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"download_url")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Url where the export json file can be downloaded")))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-json"}),'{\n  "export": {\n    "id": 123,\n    "status": "init",\n    "requested_at": 1622111094,\n    "expires_at": 1622311094,\n    "is_expired": false,\n    "start_date": 1622111094,\n    "end_date": 1632111094,\n    "part_count": 1,\n    "part": 1,\n    "file_size": null,\n    "download_url": null\n  }\n}\n')),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"402 Payment Required"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_request")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The user does not have the ",Object(a.b)("inlineCode",{parentName:"td"},"streamchat")," benefit")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Forbidden"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The API user is not allowed to manage the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"not_found")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Channel not found")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-chat-2-0-export-mdx-a1d27617109dbd7d9481.js.map