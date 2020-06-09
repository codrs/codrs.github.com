(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Cu42:function(e,t,a){},EF0S:function(e,t,a){"use strict";a("tUrg"),a("SRfc"),a("f3/d"),a("KKXr");var n=a("q1tI"),l=a.n(n);function r(e){return e.split(".").reverse()[0]}function c(e){switch(r(e)){case"snap":case"AppImage":case"deb":case"rpm":case"pacman":return"linux";case"dmg":case"zip":return"mac";case"exe":return"windows";default:return"unknown"}}function s(e){return new Date(e).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}function o(e){return{os:c(e.name),link:e.browser_download_url,fileType:r(e.name)}}var i=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={publishedAt:null,latestVersion:null,downloads:null},t.getDownloadText=function(e,t){return"windows"===e&&t.link.match(/Portable\.exe/)?"portable":t.fileType},t.renderDownloads=function(e){return t.state.downloads&&t.state.downloads.reduce((function(a,n){return n.os===e&&a.push(l.a.createElement("a",{key:n.fileType,href:n.link},l.a.createElement("b",null,t.getDownloadText(e,n)))),a}),[])},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){var e=this;if(sessionStorage.getItem("gistoReleases")){var t=JSON.parse(sessionStorage.getItem("gistoReleases")),a=t.assets.map((function(e){return o(e)})).filter((function(e){return"unknown"!==e}));this.setState({publishedAt:s(t.published_at),latestVersion:"v"+t.name,downloads:a})}else fetch("https://api.github.com/repos/Gisto/Gisto/releases/latest").then((function(e){return e.json()})).then((function(t){sessionStorage.setItem("gistoReleases",JSON.stringify(t));var a=t,n=a.assets.map((function(e){return o(e)})).filter((function(e){return"unknown"!==e}));e.setState({publishedAt:s(a.published_at),latestVersion:"v"+a.name,downloads:n})}))},r.render=function(){return l.a.createElement("section",{className:"whiter boxes inner"},l.a.createElement("div",{className:"w-container"},l.a.createElement("p",{className:"txt-grey txt-center"},l.a.createElement("b",null,"LATEST VERSION:")," ",l.a.createElement("span",{className:"latest-release-version"},this.state.latestVersion)," |",l.a.createElement("a",{href:"https://github.com/Gisto/Gisto/blob/master/CHANGELOG.md",className:"txt-red txt-underline"},"Change log"),"| ",l.a.createElement("b",null,"RELEASED:")," ",l.a.createElement("span",{className:"published_at"},this.state.publishedAt)),l.a.createElement("br",null),l.a.createElement("div",{className:"w-container"},l.a.createElement("div",{className:"w-row"},l.a.createElement("div",{className:"download w-col w-col-3 w-clearfix txt-center"},l.a.createElement("p",{className:"txt-center"},l.a.createElement("i",{className:"fa fa-windows fa-4x"})),l.a.createElement("h3",null,l.a.createElement("b",null,"Windows"),l.a.createElement("br",null),"Download"),l.a.createElement("span",null,this.renderDownloads("windows"))),l.a.createElement("div",{className:"download w-col w-col-3 w-clearfix txt-center"},l.a.createElement("p",{className:"txt-center"},l.a.createElement("i",{className:"fa fa-apple fa-4x"})),l.a.createElement("h3",null,l.a.createElement("b",null,"macOS"),l.a.createElement("br",null),"Download"),l.a.createElement("span",null,this.renderDownloads("mac"))),l.a.createElement("div",{className:"download w-col w-col-3 w-clearfix txt-center"},l.a.createElement("p",{className:"txt-center"},l.a.createElement("i",{className:"fa fa-linux fa-4x"})),l.a.createElement("h3",null,l.a.createElement("b",null,"Linux"),l.a.createElement("br",null),"Download"),l.a.createElement("span",null,this.renderDownloads("linux"))),l.a.createElement("div",{className:"download w-col w-col-3 w-clearfix txt-center"},l.a.createElement("p",{className:"txt-center"},l.a.createElement("i",{className:"fa fa-cogs fa-4x"})),l.a.createElement("h3",null,"Latest",l.a.createElement("br",null)," ",l.a.createElement("b",null,"from Github")),l.a.createElement("a",{href:"https://github.com/Gisto/Gisto/releases"},"GitHub releases"))),l.a.createElement("div",{className:"w-container"},l.a.createElement("div",{className:"w-row"},l.a.createElement("div",{className:"w-col w-col-pull-1 w-col-push-3 w-col-6 "},l.a.createElement("h2",null,"Other install options:"),l.a.createElement("div",null,l.a.createElement("p",null,"via ",l.a.createElement("b",null,"Homebrew cask")," (MacOS):"),l.a.createElement("pre",null,l.a.createElement("span",null,"SHELL"),"$ brew cask install gisto"),l.a.createElement("small",null,"Please note that it might be slightly outdated version"),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("p",null,"via ",l.a.createElement("b",null,"snapcraft")," (Linux):"),l.a.createElement("pre",null,l.a.createElement("span",null,"SHELL"),"$ sudo snap install gisto"),l.a.createElement("small",null,"Install Gisto on your Linux distribution:"," ",l.a.createElement("a",{href:"https://snapcraft.io/gisto"},"https://snapcraft.io/gisto")),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("p",null,"via ",l.a.createElement("b",null,"AUR")," (ArchLinux):"),l.a.createElement("pre",null,l.a.createElement("span",null,"SHELL (using yay)"),"$ yay -S gisto"),l.a.createElement("pre",null,l.a.createElement("span",null,"SHELL (using pakku)"),"$ pakku -S gisto"),l.a.createElement("pre",null,l.a.createElement("span",null,"SHELL (using trizen)"),"$ trizen -S gisto"),l.a.createElement("small",null,"Please note that it might be slightly outdated version"))))),l.a.createElement("div",{className:"w-row"},l.a.createElement("p",{className:"txt-grey txt-center"},l.a.createElement("b",null,"PREVIOUS VERSION:")," 0.3.2"),l.a.createElement("br",null),l.a.createElement("div",{className:"w-col w-col-12 w-clearfix txt-center"},l.a.createElement("p",null,"Development of this version is stopped at &quote;v0.3.2&quote; and it should be considered obsolete. No updates, features or bugfixes will be issued.")),l.a.createElement("div",{className:"download w-col w-col-12 w-clearfix txt-center"},l.a.createElement("a",{href:"https://github.com/Gisto/Gisto/releases/download/0.3.2-beta/Gisto-v0.3.2-windows-x64.zip"},l.a.createElement("i",{className:"fa fa-windows"})," Windows"),l.a.createElement("a",{href:"https://github.com/Gisto/Gisto/releases/download/0.3.2-beta/Gisto-v0.3.2-macos-x64.dmg"},l.a.createElement("i",{className:"fa fa-apple"})," MACOS"),l.a.createElement("a",{href:"https://github.com/Gisto/Gisto/releases/download/0.3.2-beta/Gisto-v0.3.2-linux-win32.zip"},l.a.createElement("i",{className:"fa fa-linux"})," Linux 32bit"),l.a.createElement("a",{href:"https://github.com/Gisto/Gisto/releases/download/0.3.2-beta/Gisto-v0.3.2-linux-x64.zip"},l.a.createElement("i",{className:"fa fa-linux"})," Linux 64bit"))))))},n}(n.Component);t.a=i},H1Ta:function(e,t,a){},OGtf:function(e,t,a){var n=a("XKFU"),l=a("eeVq"),r=a("vhPU"),c=/"/g,s=function(e,t,a,n){var l=String(r(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(c,"&quot;")+'"'),s+">"+l+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*l((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("TJpk"),c=a("Wbzz"),s=a("LbRr"),o=a("W/9C"),i=a("Wlnj");var m=["https://camo.githubusercontent.com/5d6d4a596d8a290f34c3d4997314076d27c68683/68747470733a2f2f696d6775722e636f6d2f4a7838546339732e706e67","https://camo.githubusercontent.com/167453afa79d0f2b3eee9b5436be08682976f5b9/68747470733a2f2f696d6775722e636f6d2f4f777365796b562e706e67","https://camo.githubusercontent.com/7c6db3c04ccbc2b60b41a079016a40a3edc687b8/68747470733a2f2f696d6775722e636f6d2f7969454a524e742e706e67","https://camo.githubusercontent.com/3ab6b0d1da376692ee05e5096cc0f1481c75563a/68747470733a2f2f696d6775722e636f6d2f4a7455437366492e706e67","https://camo.githubusercontent.com/d878121736eb99225f5449cf3f5b8e65e324893c/68747470733a2f2f696d6775722e636f6d2f31796c695968522e706e67","https://camo.githubusercontent.com/2a727b8251db908fa58552b631786e96c84a5019/68747470733a2f2f696d6775722e636f6d2f616f57355638452e706e67",a.n(i).a],u=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={current:m[0]},t.setImage=function(e){return t.setState({current:e})},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"app-image",className:"shadow"},l.a.createElement("img",{alt:"Gisto",className:"opaque",width:"460",height:"288",src:this.state.current})),l.a.createElement("p",{id:"app-image-controls"},m.map((function(t,a){return l.a.createElement(l.a.Fragment,{key:t},l.a.createElement("span",{className:e.state.current===m[a]?"selected":"",onClick:function(){return e.setImage(m[a])}})," ")}))))},n}(l.a.Component),d=(a("Cu42"),a("H1Ta"),a("e7SR"),a("Z5W2")),f=a.n(d),E=a("g1UF"),p=a.n(E),h=a("XkQt"),w=a.n(h),g=a("EF0S"),b=function(e){var t=e.user,a=e.repo,n=e.type,r=e.count;return l.a.createElement("iframe",{title:n,src:"https://ghbtns.com/github-btn.html?user="+t+"&repo="+a+"&type="+n+"&count="+r,allowTransparency:"true",frameBorder:"0",scrolling:"0",width:"95",height:"20"})},v=a("F7AD"),x=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"w-container"},l.a.createElement("div",{className:"w-row"},l.a.createElement("div",{className:"w-col w-col-6 w-clearfix not-a-player"},l.a.createElement("p",null,l.a.createElement(v.a,null)," is a code snippet manager that runs on GitHub Gists and adds additional features such as searching, tagging and sharing gists while including a rich code editor."),l.a.createElement("p",null,"All your data is stored on GitHub and you can access it from GitHub Gists at any time with changes carrying over to ",l.a.createElement(v.a,null),"."),l.a.createElement("a",{href:"https://github.com/Gisto/Gisto",className:"btn bg-grey txt-white"},l.a.createElement("i",{className:"fa fa-github"}))," ",l.a.createElement("a",{href:"https://twitter.com/gistoapp",className:"btn bg-grey twitter txt-white"},l.a.createElement("i",{className:"fa fa-twitter"}))," ",l.a.createElement("a",{href:"https://github.com/Gisto/Gisto/blob/master/CHANGELOG.md",className:"btn bg-grey txt-white"},"Changelog ",l.a.createElement("i",{className:"fa fa-chevron-right"}))),l.a.createElement("div",{className:"w-col w-col-6 w-clearfix app-image"},l.a.createElement(u,null)))),l.a.createElement("section",{className:"boxes"},l.a.createElement("div",{className:"w-container"},l.a.createElement("div",{className:"w-row"},l.a.createElement(c.a,{to:"features",className:"w-col w-col-4 w-clearfix box bg-grey txt-white uppercase"},l.a.createElement("i",{className:"fa fa-fire-extinguisher fa-4x pull-left"}),l.a.createElement("h3",null,"Features"),l.a.createElement("span",null,l.a.createElement("i",null,"List of features and new additions")," ",l.a.createElement("i",{className:"fa fa-chevron-right"}))),l.a.createElement("a",{href:"https://web.gistoapp.com",className:"w-col w-col-4 w-clearfix box bg-greyer txt-white uppercase"},l.a.createElement("i",{className:"fa fa-laptop fa-4x pull-left"}),l.a.createElement("h3",null,"Web client"),l.a.createElement("span",null,l.a.createElement("i",null,"Full featured web client is now available")," ",l.a.createElement("i",{className:"fa fa-chevron-right"}))),l.a.createElement("a",{href:"#download",className:"w-col w-col-4 w-clearfix box bg-tomato txt-white uppercase innsite"},l.a.createElement("i",{className:"fa fa-download fa-4x pull-left"}),l.a.createElement("h3",null,"Downloads"),l.a.createElement("span",null,l.a.createElement("i",null,"Mirrors, nightly builds and prev. versions")," ",l.a.createElement("i",{className:"fa fa-chevron-right"})))))),l.a.createElement("div",{className:"social w-clearfix"},l.a.createElement(b,{repo:"gisto",user:"gisto",type:"fork",count:!0}),l.a.createElement(b,{repo:"gisto",user:"gisto",type:"watch",count:!0})))},N=function(){return l.a.createElement("div",{className:"w-container"},l.a.createElement("div",{className:"w-row"},l.a.createElement("div",{className:"w-col w-col-4 w-clearfix"},l.a.createElement("h3",null,l.a.createElement("b",null,"why")),l.a.createElement("p",null,l.a.createElement(v.a,null)," started by fulfilling a lack of a syntax highlighted and cloud synchronized code snippet solution.")),l.a.createElement("div",{className:"w-col w-col-4 w-clearfix the-who"},l.a.createElement("h3",null,l.a.createElement("b",null,"who")),l.a.createElement("p",null,l.a.createElement(v.a,null)," is developed by a team of two web developers on their spare time."),l.a.createElement("p",null,"We appreciate any suggestions or contributions to make ",l.a.createElement(v.a,null)," better.")),l.a.createElement("div",{className:"w-col w-col-4 w-clearfix"},l.a.createElement("h3",null,l.a.createElement("b",null,"how")),l.a.createElement("p",null,l.a.createElement(v.a,null)," is built using the open web technologies using several open source projects such as React, Electron, Monaco Editor and many more"))))};t.default=function(){var e;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Helmet,null,l.a.createElement("title",null,"Gisto - Snippets Made Awesome")),l.a.createElement(s.a,null),l.a.createElement("section",{className:"home"},l.a.createElement("div",{className:"under-nav"},l.a.createElement("h1",null,"Snippets Made Awesome"),l.a.createElement(x,null),l.a.createElement("h1",null,"Features"))),l.a.createElement("section",{className:"whiter boxes features-boxes"},l.a.createElement("div",{className:"w-container"},l.a.createElement("div",{className:"w-row"},l.a.createElement("div",{className:"w-col w-col-4 w-clearfix feat"},l.a.createElement("img",((e={alt:"Gisto",src:f.a}).alt="Edit",e)),l.a.createElement("h3",null,"Rich Editor"),l.a.createElement("p",null,l.a.createElement(v.a,null)," includes open-source ",l.a.createElement("a",{href:"https://microsoft.github.io/monaco-editor/"},"monaco editor"),". A rich code editor for editing your Gists and includes features such as syntax highlighting auto-completion emmet and more.")),l.a.createElement("div",{className:"w-col w-col-4 w-clearfix feat"},l.a.createElement("img",{src:p.a,alt:"Edit"}),l.a.createElement("h3",null,"Search"),l.a.createElement("p",null,"Gists can be found quickly using our search and can be filtered by gist description, file names, tag or multiple tags, language and more.")),l.a.createElement("div",{className:"w-col w-col-4 w-clearfix feat"},l.a.createElement("img",{src:w.a,alt:"Edit"}),l.a.createElement("h3",null,"Tags"),l.a.createElement("p",null,l.a.createElement(v.a,null)," allows you to tag Gists with custom tags to help you find your Gists easily. Just add hashtag to snippet title and you done. Later gitsts can be found by typing hash-tag into search or from the tag list on the dashboard."))),l.a.createElement("div",{className:"center-holder"},l.a.createElement(c.a,{to:"features",className:"btn bg-grey txt-white btn-center"},"More features ",l.a.createElement("i",{className:"fa fa-chevron-right"}))))),l.a.createElement("h1",{id:"about"},"About ",l.a.createElement(v.a,null)),l.a.createElement("section",{className:"whiter boxes"},l.a.createElement(N,null)),l.a.createElement("h1",{id:"download"},"Downloads"),l.a.createElement(g.a,null),l.a.createElement(o.a,null))}},Wlnj:function(e,t,a){e.exports=a.p+"static/colours2-78ccd60797813bb71b9e4b1073060987.png"},XkQt:function(e,t,a){e.exports=a.p+"static/tagging-2001f951a6e032365fd285621498b770.png"},Z5W2:function(e,t,a){e.exports=a.p+"static/edit-0208387549100db11339e4e75dd15c03.png"},e7SR:function(e,t,a){},g1UF:function(e,t,a){e.exports=a.p+"static/search-c9c0f0140fc0b214eca2401fbf07f83e.png"},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-pages-index-js-a19bd896dd1e15c79435.js.map