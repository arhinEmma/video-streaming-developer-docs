(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{sIAi:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return o}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),b=a("XbGe");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},c={_frontmatter:r},i=b.a;function o(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,b={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,["components"]);return Object(n.b)(i,l({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Get the audio tracks of a video"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{}),"GET https://api.video.ibm.com/videos/{videoId}/audio/tracks.json\n")),Object(n.b)("h3",null,"Success response"),Object(n.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value pairs under a ",Object(n.b)("inlineCode",{parentName:"p"},"tracks")," element."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"KEY"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"TYPE"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"language")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Language")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"country")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Country")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"streamId")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"int"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Stream ID")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"default")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Default")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"disabled")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Disabled")))),Object(n.b)("p",null,"Example of a success response:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-json"}),'{\n  "tracks": [\n    {\n      "language": "en",\n      "country": "US",\n      "streamId": 12,\n      "default": false,\n      "disabled": false\n    },\n    {\n      "language": "fr",\n      "country": "00",\n      "streamId": 13,\n      "default": false,\n      "disabled": false\n    },\n    {\n      "language": "es",\n      "country": "00",\n      "streamId": 14,\n      "default": false,\n      "disabled": false\n    },\n    {\n      "language": "nl",\n      "country": "00",\n      "streamId": 1,\n      "default": true,\n      "disabled": false\n    }\n  ]\n}\n')),Object(n.b)("h3",null,"Error responses"),Object(n.b)("p",null,"Possible error responses:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"404 Not Found"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"not_found")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Video does not exist")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(n.b)("h2",null,"Get available audio languages"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{}),"GET https://api.video.ibm.com/videos/audio/languages.json\n")),Object(n.b)("h3",null,"Success response"),Object(n.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value pairs."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"KEY"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"TYPE"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"watson_supported")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"object"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Languages supported by ",Object(n.b)("a",l({parentName:"td"},{href:"https://www.ibm.com/watson/services/speech-to-text/"}),"IBM Watson Speech to Text"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"other")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"object"),Object(n.b)("td",l({parentName:"tr"},{align:null}))))),Object(n.b)("h3",null,"Error responses"),Object(n.b)("p",null,"Possible error responses:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(n.b)("h2",null,"Set audio track language"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{}),"PUT https://api.video.ibm.com/videos/{videoId}/audio/{streamId}/language.json\n")),Object(n.b)("h3",null,"Parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"KEY"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"TYPE"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"language")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"REQUIRED"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"One of the keys from ",Object(n.b)("a",l({parentName:"td"},{href:"/channel-api-video-management/manage-audio-tracks#get-available-audio-languages"}),"Get available audio languages"))))),Object(n.b)("p",null,"The Content-Type of the request should be ",Object(n.b)("strong",{parentName:"p"},"application/x-www-form-urlencoded"),"."),Object(n.b)("p",null,"Example of the request:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{}),"POST /videos/1234/audio/12/language.json HTTP/1.1\nHost: api.video.ibm.com\nAuthorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950\nContent-Type: application/x-www-form-urlencoded\n\nlanguage=pt-BR\n")),Object(n.b)("p",null,"The token in the above call is only an example."),Object(n.b)("h3",null,"Success response"),Object(n.b)("p",null,"Upon success the response body is empty with an HTTP Status code of 204."),Object(n.b)("h3",null,"Error responses"),Object(n.b)("p",null,"Possible error responses:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"400 Bad Request"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"bad_request")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Invalid ",Object(n.b)("inlineCode",{parentName:"td"},"language"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"403 Unauthorized"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"The provided access token could not access the given channel")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"404 Not Found"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"not_found")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Stream not found")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(n.b)("h2",null,"Get the default language of a video"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{}),"GET https://api.video.ibm.com/videos/{videoId}/audio/default-language.json\n")),Object(n.b)("h3",null,"Success response"),Object(n.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value pairs."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"KEY"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"TYPE"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"language")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Default language")))),Object(n.b)("p",null,"Example of a success response:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-json"}),'{\n  "language": "es-00"\n}\n')),Object(n.b)("h3",null,"Error responses"),Object(n.b)("p",null,"Possible error responses:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"403 Unauthorized"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"The provided access token could not access the given channel")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"404 Not Found"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"not_found")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Video not found")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(n.b)("h2",null,"Set the default language of a video"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{}),"PUT https://api.video.ibm.com/videos/{videoId}/audio/default-language.json\n")),Object(n.b)("h3",null,"Parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"KEY"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"TYPE"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"language")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"REQUIRED"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"One of the ",Object(n.b)("inlineCode",{parentName:"td"},"language")," and ",Object(n.b)("inlineCode",{parentName:"td"},"country")," pairs form ",Object(n.b)("a",l({parentName:"td"},{href:"/channel-api-video-management/manage-audio-tracks#get-the-audio-tracks-of-a-video"}),"Get the audio tracks of a video"),". See the example below.")))),Object(n.b)("p",null,"The Content-Type of the request should be ",Object(n.b)("strong",{parentName:"p"},"application/x-www-form-urlencoded"),"."),Object(n.b)("p",null,"Example of the request:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{}),"POST /videos/1234/audio/default-language.json HTTP/1.1\nHost: api.video.ibm.com\nAuthorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950\nContent-Type: application/x-www-form-urlencoded\n\nlanguage=en-US\n")),Object(n.b)("h3",null,"Success response"),Object(n.b)("p",null,"Upon success the response body is empty with an HTTP Status code of 204."),Object(n.b)("h3",null,"Error responses"),Object(n.b)("p",null,"Possible error responses:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"400 Bad Request"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"bad_request")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Invalid ",Object(n.b)("inlineCode",{parentName:"td"},"language"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"403 Unauthorized"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"The provided access token could not access the given channel")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"404 Not Found"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"not_found")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Video not found")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-video-management-manage-audio-tracks-mdx-2e2ca9311dc5590c29e7.js.map