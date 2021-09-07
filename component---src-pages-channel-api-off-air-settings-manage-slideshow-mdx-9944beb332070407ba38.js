(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{gvl2:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return p}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),l=n("XbGe");n("qKvR");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={},i={_frontmatter:r},c=l.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(c,b({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Get Slideshow"),Object(a.b)("p",null,"Returns the slideshow images"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"GET https://api.video.ibm.com/channels/{channelId}/settings/off-air/slideshow.json\n")),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with a ",Object(a.b)("inlineCode",{parentName:"p"},"slideshow")," array of the following key-value pairs."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Id")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"title")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"title")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"fileName")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Filename")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"createdAt")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Upload time")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"url")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"URL")))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-json"}),'{\n  "slideshow": [\n    {\n      "id": "6867410",\n      "title": "Image 1",\n      "fileName": "44203712_223x223_1611153920.jpg",\n      "createdAt": "2021-01-20 06:45:25",\n      "url": "https://ustvstaticcdn1-a.akamaihd.net/images/uphoto_file/4/4/2/0/44203712/th/smalls2_120_44203712_223x223_1611153920.jpg"\n    },\n    ...\n  ]\n}\n')),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token could not access the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Reorder Slideshow"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"PUT https://api.video.ibm.com/channels/{channelId}/settings/off-air/slideshow.json\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"slideshow")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"int[]"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Slideshow image ids")))),Object(a.b)("p",null,"The Content-Type of the request should be ",Object(a.b)("strong",{parentName:"p"},"application/x-www-form-urlencoded"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"You have to send every image id. For removing images use the ",Object(a.b)("a",b({parentName:"strong"},{href:"/channel-api-off-air-settings/manage-slideshow#delete-image"}),"Delete image")," call.")),Object(a.b)("p",null,"Example of the request:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"POST /channels/1234/settings/off-air/slideshow.json HTTP/1.1\nHost: api.video.ibm.com\nAuthorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950\nContent-Type: application/x-www-form-urlencoded\n\nslideshow[]=123979122&slideshow[]=124044209\n")),Object(a.b)("p",null,"Note that the token in the above call is only an example."),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success the response body is empty with an HTTP Status code of 204."),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"400 Bad Request"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"bad_request")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Invalid ",Object(a.b)("inlineCode",{parentName:"td"},"slideshow"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token could not access the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Upload a new slideshow image"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"POST https://api.video.ibm.com/channels/{channelId}/settings/off-air/images.json\n")),Object(a.b)("h3",null,"Request"),Object(a.b)("p",null,"The image must be passed in the HTTP body as binary data."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Supported image types:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"image/jpeg"),Object(a.b)("li",{parentName:"ul"},"image/png"),Object(a.b)("li",{parentName:"ul"},"image/gif"))),Object(a.b)("li",{parentName:"ul"},"Maximum image size: 10 MB")),Object(a.b)("p",null,"CURL example:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"curl --location --request POST 'https://git.api.video.ibm.com.lh/channels/1234/settings/off-air/images.json' \\\n--header 'Authorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950' \\\n--header 'Content-Type: image/png' \\\n--data-binary '@/path/to/your/new/slideshow/image.png'\n")),Object(a.b)("p",null,"Note that the token in the above call is only an example."),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success the response body is empty with an HTTP Status code of 201."),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"400 Bad Request"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"bad_request")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Invalid (eg. too large image)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token could not access the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Get a slideshow image"),Object(a.b)("p",null,"Returns a slideshow image"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"GET https://api.video.ibm.com/channels/{channelId}/settings/off-air/images/{imageId}.json\n")),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value pairs under ",Object(a.b)("inlineCode",{parentName:"p"},"image"),"."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Id")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"title")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"title")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"fileName")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Filename")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"createdAt")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Upload time")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"url")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"URL")))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-json"}),'{\n  "image": {\n    "id": "6867410",\n    "title": "Image 1",\n    "fileName": "44203712_223x223_1611153920.jpg",\n    "createdAt": "2021-01-20 06:45:25",\n    "url": "https://ustvstaticcdn1-a.akamaihd.net/images/uphoto_file/4/4/2/0/44203712/th/smalls2_120_44203712_223x223_1611153920.jpg"\n  }\n}\n')),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token could not access the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"not_found")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Image not found")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Change image title"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"PUT https://api.video.ibm.com/channels/{channelId}/settings/off-air/images/{imageId}.json\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"title")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Title, maximum length: 50")))),Object(a.b)("p",null,"The Content-Type of the request should be ",Object(a.b)("strong",{parentName:"p"},"application/x-www-form-urlencoded"),"."),Object(a.b)("p",null,"Example of the request:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"PUT /channels/1234/settings/off-air/images/6867410.json HTTP/1.1\nHost: api.video.ibm.com\nAuthorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950\nContent-Type: application/x-www-form-urlencoded\n\ntitle=New title\n")),Object(a.b)("p",null,"Note that the token in the above call is only an example."),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success the response body is empty with an HTTP Status code of 204."),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"400 Bad Request"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"bad_request")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Invalid ",Object(a.b)("inlineCode",{parentName:"td"},"title"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token could not access the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"not_found")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Image not found")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Delete image"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"DELETE https://api.video.ibm.com/channels/{channelId}/settings/off-air/images/{imageId}.json\n")),Object(a.b)("p",null,"Example of the request:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"DELETE /channels/1234/settings/off-air/images/6867410.json HTTP/1.1\nHost: api.video.ibm.com\nAuthorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950\n")),Object(a.b)("p",null,"Note that the token in the above call is only an example."),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success the response body is empty with an HTTP Status code of 204."),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token could not access the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"not_found")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Image not found")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-off-air-settings-manage-slideshow-mdx-9944beb332070407ba38.js.map