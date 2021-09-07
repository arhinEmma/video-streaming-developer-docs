(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{Hdcr:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return o}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),l=a("XbGe");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var b={},i={_frontmatter:b},p=l.a;function o(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(n.b)(p,r({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"To upload a file you must do the following steps:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Initiate an upload process by an API call. In the response you can find the video ID for the new upload and an upload ID that you will have to send with every request."),Object(n.b)("li",{parentName:"ol"},"Upload the video in 1MB parts. You might need to make several requests in this stage until all the parts of the video file have been uploaded."),Object(n.b)("li",{parentName:"ol"},"When the upload is finished, send an “upload complete” signal, which will start the processing of your video."),Object(n.b)("li",{parentName:"ol"},"Call the API to check the status of processing the video.")),Object(n.b)("h2",null,"Initialize an upload"),Object(n.b)("p",null,"Initiate the upload process."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"POST https://api.video.ibm.com/v2/channels/{channel_id}/uploads.json\n")),Object(n.b)("h3",null,"Parameters"),Object(n.b)("p",null,"The parameters for the POST request:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"PARAMETER"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"TYPE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"title")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"OPTIONAL"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Video title")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"description")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"OPTIONAL"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Video description")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"protect")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"OPTIONAL"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Video protection level. Supported values: ",Object(n.b)("inlineCode",{parentName:"td"},"public"),", ",Object(n.b)("inlineCode",{parentName:"td"},"private"))))),Object(n.b)("h3",null,"Success response"),Object(n.b)("p",null,"Upon success a response with HTTP status “201 Created” is returned with the key-value pairs containing the video ID and upload ID."),Object(n.b)("p",null,"Example of a success response:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "videoId": 1234567890,\n  "uploadId": "28691235606490ab81a8c0.96744426"\n}\n')),Object(n.b)("h3",null,"Error responses"),Object(n.b)("p",null,"Possible error responses:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"400 Bad Request"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"protect_level_invalid")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Invalid protect level has been sent")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"403 Forbidden"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The API user is not allowed to manage the given channel")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"404 Not Found"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"not_found")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Channel was not found")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(n.b)("h2",null,"Upload the video file"),Object(n.b)("p",null,"In this stage you need to upload the video file in 1MB parts. You can find an example of this in the downloadable PHP sample code: ",Object(n.b)("a",r({parentName:"p"},{href:"https://developers.video.ibm.com/channel-api-php-sample-code"}),"https://developers.video.ibm.com/channel-api-php-sample-code")),Object(n.b)("p",null,"Before you start uploading the parts, you will need to calculate the total number of parts and the total size of the file."),Object(n.b)("p",null,"To upload one part send a multi-part file request to this endpoint:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"POST https://api.video.ibm.com/v2/channels/{channel_id}/uploads/{video_id}/part.json\n")),Object(n.b)("h3",null,"Parameters"),Object(n.b)("p",null,"The parameters for the POST request:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"PARAMETER"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"TYPE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"uploadId")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"REQUIRED"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The upload ID from the init response")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"partIndex")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"int"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"REQUIRED"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The index of the current part")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"totalPartCount")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"int"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"REQUIRED"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The total number of parts that will be uploaded")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"totalFileSize")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"int"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"REQUIRED"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The total size of the video file")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"file")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"binary"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"REQUIRED"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The current file part’s content")))),Object(n.b)("h3",null,"Success response"),Object(n.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the key-value pairs containing the video ID and upload ID."),Object(n.b)("h3",null,"Error responses"),Object(n.b)("p",null,"Possible error responses:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"400 Bad Request"),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Invalid parameters. Look at the returned hint value for the exact error.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"403 Forbidden"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The API user is not allowed to manage the given channel")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"404 Not Found"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"not_found")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Channel or video was not found")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"413 Payload too large"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"file_too_large")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The incoming file is larger than 4GB")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(n.b)("h2",null,"Send “upload completed” signal"),Object(n.b)("p",null,"The “upload completed” signal tells to our server that it can start to process the file."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"POST https://api.video.ibm.com/v2/channels/{channel_id}/uploads/{video_id}/completed.json\n")),Object(n.b)("h3",null,"Parameters"),Object(n.b)("p",null,"The parameters for the POST request:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"PARAMETER"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"TYPE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"uploadId")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"REQUIRED"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The upload ID from the init response")))),Object(n.b)("h3",null,"Success response"),Object(n.b)("p",null,"Upon success, a response with HTTP status “200 OK” is returned."),Object(n.b)("h3",null,"Error responses"),Object(n.b)("p",null,"Possible error responses:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"400 Bad Request"),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Invalid parameters. Look at the returned hint value for the exact error.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"404 Not Found"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"not_found")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Channel or video was not found")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(n.b)("h3",null,"Check status of processing"),Object(n.b)("p",null,"Returns the status of processing the specific video."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"GET https://api.video.ibm.com/channels/{channel_id}/uploads/{video_id}.json\n")),Object(n.b)("h3",null,"Parameters"),Object(n.b)("p",null,"This request has no parameters."),Object(n.b)("h3",null,"Success response"),Object(n.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with a key-value pair."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"KEY"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"TYPE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"status")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The current status. Possible values: ",Object(n.b)("inlineCode",{parentName:"td"},"initiated"),", ",Object(n.b)("inlineCode",{parentName:"td"},"transferred"),", ",Object(n.b)("inlineCode",{parentName:"td"},"queued"),", ",Object(n.b)("inlineCode",{parentName:"td"},"pending"),", ",Object(n.b)("inlineCode",{parentName:"td"},"transcoding"),", ",Object(n.b)("inlineCode",{parentName:"td"},"complete"),", ",Object(n.b)("inlineCode",{parentName:"td"},"error"))))),Object(n.b)("h3",null,"Error responses"),Object(n.b)("p",null,"Possible error responses:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"404 Not Found"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"not_found")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Channel was not found")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-video-management-upload-videos-new-mdx-16cac3add3982b15fb4d.js.map