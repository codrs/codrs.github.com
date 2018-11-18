(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(153),c=t(147),i=t(149),s=t(175),o=t.n(s);a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Helmet,null,r.a.createElement("title",null,"Documentation")),r.a.createElement(c.a,null),r.a.createElement("h1",null,"Documentation"),r.a.createElement("section",{className:"whiter boxes page-docs inner"},r.a.createElement("div",{className:"w-container content-container"},r.a.createElement("div",{className:"w-row"},r.a.createElement("div",{className:"w-col w-col-3 w-clearfix side-container"},r.a.createElement("h2",null,"NAV"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{className:"innsite",href:"#tags"},"Tag gist")),r.a.createElement("li",null,r.a.createElement("a",{className:"innsite",href:"#proxy"},"Usage via proxy")),r.a.createElement("li",null,r.a.createElement("a",{className:"innsite",href:"#new-snippet"},"Add new snippet")),r.a.createElement("li",null,r.a.createElement("a",{className:"innsite",href:"#devs"},"For developers"))))),r.a.createElement("div",{className:"w-col w-col-9 w-clearfix main"},r.a.createElement("h2",{id:"tags"},"Tag gist"),r.a.createElement("p",null,"Every gist can be tagged by adding hash-tag to it's title."),r.a.createElement("p",null,"For example: You have a gist titled"),r.a.createElement("pre",null,r.a.createElement("span",null,"TEXT"),"Simple html template"),r.a.createElement("p",null,'and you\'d like to tag it with "template" and "html" tags. All you need to do, is to add these tags as hash-tags to the end of the title like so:'),r.a.createElement("pre",null,r.a.createElement("span",null,"TEXT"),"Simple html template #html #template"),r.a.createElement("p",null,"Gisto will then use the hash-tags to display tags in the gist list and search by this tags."),r.a.createElement("h2",{id:"proxy"},"Usage via proxy"),r.a.createElement("p",null,"To run Gisto via proxy you'll have to start gisto with command line arguments:"),r.a.createElement("pre",null,r.a.createElement("span",null,"SHELL"),"./Gisto-x.x.x.exe --args --proxy-server=proxyhost:port"),r.a.createElement("h2",{id:"new-snippet"},"Add new snippet"),r.a.createElement("p",null,'To add new snippet, simply click the "+ New snippet" button on the top of the app.'),r.a.createElement("img",{src:o.a}),r.a.createElement("h2",{id:"devs"},"Setting up for development"),r.a.createElement("h4",null,"Pre-installed requirements:"),r.a.createElement("ul",{className:"fa-ul"},r.a.createElement("li",{className:"icons-li"},r.a.createElement("i",{className:"fa fa-chevron-circle-right"})," ",r.a.createElement("a",{href:"http://git-scm.com/downloads"},r.a.createElement("strong",null,"GIT")),"- distributed version control"),r.a.createElement("li",{className:"icons-li"},r.a.createElement("i",{className:"fa fa-chevron-circle-right"})," ",r.a.createElement("a",{href:"http://nodejs.org/"},r.a.createElement("strong",null,"Node.js")," and ",r.a.createElement("strong",null,"npm"))," - server-side software system written in JavaScript")),r.a.createElement("h2",null,"Set it all to work together:"),r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-chevron-circle-right"}),' Clone the latest "next" branch: with the following command to a directory of your choice:'),r.a.createElement("pre",null,r.a.createElement("span",null,"SHELL"),"git clone -b next --single-branch https://github.com/Gisto/Gisto.git"),r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-chevron-circle-right"})," Install dependencies in the directory created by cloning:"),r.a.createElement("pre",null,r.a.createElement("span",null,"SHELL"),"npm install"),r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-chevron-circle-right"})," Run the local application (electron mode):"),r.a.createElement("pre",null,r.a.createElement("span",null,"SHELL"),"npm run dev"),r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-chevron-circle-right"})," Run the local application (webapp):"),r.a.createElement("pre",null,r.a.createElement("span",null,"SHELL"),"npm run start:web"),r.a.createElement("i",null,"(for more commands, check-out package.json's script section)"),r.a.createElement("h4",null,r.a.createElement("b",null,"Congratulations!")," If all went well, you are now have set-up local version of Gisto in your machine."))))),r.a.createElement(i.a,null))}},143:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return h}),t.d(a,"StaticQueryContext",function(){return p}),t.d(a,"StaticQuery",function(){return d});var n=t(0),r=t.n(n),l=t(4),c=t.n(l),i=t(142),s=t.n(i);t.d(a,"Link",function(){return s.a}),t.d(a,"withPrefix",function(){return i.withPrefix}),t.d(a,"navigate",function(){return i.navigate}),t.d(a,"push",function(){return i.push}),t.d(a,"replace",function(){return i.replace}),t.d(a,"navigateTo",function(){return i.navigateTo});var o=t(145),m=t.n(o);t.d(a,"PageRenderer",function(){return m.a});var u=t(35);t.d(a,"parsePath",function(){return u.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},144:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(){return r.a.createElement("span",{className:"gisto",style:{fontWeight:400}},"{ Gisto }")}},145:function(e,a,t){var n;e.exports=(n=t(146))&&n.default||n},146:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),l=t(4),c=t.n(l),i=t(49),s=t(2),o=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=o},147:function(e,a,t){"use strict";t(34),t(48);var n=t(7),r=t.n(n),l=t(148),c=t(0),i=t.n(c),s=t(152),o=t(143),m=t(144),u=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={open:!1},a.handleMenu=function(e){return a.setState({open:e})},a}return r()(a,e),a.prototype.render=function(){var e=this,a=this.props.data,t=i.a.createElement(i.a.Fragment,null,a.site.siteMetadata&&a.site.siteMetadata.navigation.map(function(a){return i.a.createElement("span",{onClick:function(){return e.handleMenu(!1)}},i.a.createElement(o.Link,{to:a.path,key:a.path,activeClassName:"active",className:"nav-link first current"},a.displayName))}));return i.a.createElement("header",{className:"section header"},i.a.createElement("div",{className:"header"},i.a.createElement(s.a,{query:{maxWidth:599}},function(a){return a?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"mobile-menu",onClick:function(){return e.handleMenu(e.state.open=!e.state.open)}},i.a.createElement("i",{className:"fa "+(e.state.open?"fa-times":"fa-bars")+" fa-2x"})),e.state.open&&i.a.createElement("div",null,t)):null}),i.a.createElement("h1",null,i.a.createElement("strong",null,i.a.createElement(o.Link,{to:"/"},i.a.createElement(m.a,null))))),i.a.createElement("div",{className:"w-container"},i.a.createElement("div",{className:"w-row"},i.a.createElement("nav",{className:"w-col w-col-12 w-clearfix nav-column"},t))))},a}(c.Component);a.a=function(e){return i.a.createElement(o.StaticQuery,{query:"182442897",render:function(a){return i.a.createElement(u,Object.assign({data:a},e))},data:l})}},148:function(e){e.exports={data:{site:{siteMetadata:{navigation:[{path:"/",displayName:"Home"},{path:"features",displayName:"Features"},{path:"documentation",displayName:"Docs"},{path:"faq",displayName:"F.A.Q."},{path:"blog",displayName:"Blog"},{path:"downloads",displayName:"Download"}]}}}}},149:function(e,a,t){"use strict";t(34),t(26),t(151),t(48);var n=t(150),r=t(0),l=t.n(r),c=t(4),i=t.n(c),s=t(143),o=t(144),m=function(e){var a=e.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"push"}),l.a.createElement("footer",null,l.a.createElement("div",{className:"w-container"},l.a.createElement("div",{className:"w-row"},a.site.siteMetadata.contributors.map(function(e){return l.a.createElement(l.a.Fragment,{key:e.name},l.a.createElement("div",{className:"w-col w-col-1 w-clearfix"},l.a.createElement("img",{src:e.gravatar,alt:e.name})),l.a.createElement("div",{className:"w-col w-col-5 w-clearfix"},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,l.a.createElement("a",{href:e.site},e.site.replace("https://",""))," | ",l.a.createElement("a",{href:"https://twitter.com/"+e.twitter_name},l.a.createElement("i",{className:"fa fa-twitter"}))," | ",l.a.createElement("a",{href:"https://github.com/"+e.github_name},l.a.createElement("i",{className:"fa fa-github"})))))}))),l.a.createElement("p",{className:"txt-center"},"© ",(new Date).getFullYear()," ",l.a.createElement(o.a,null))),l.a.createElement("a",{href:"#top",className:"top innsite"},l.a.createElement("i",{className:"fa fa-arrow-up"})))};m.propTypes={data:i.a.object},a.a=function(e){return l.a.createElement(s.StaticQuery,{query:"66919261",render:function(a){return l.a.createElement(m,Object.assign({data:a},e))},data:n})}},150:function(e){e.exports={data:{site:{siteMetadata:{contributors:[{name:"Maayan Glikser",gravatar:"https://secure.gravatar.com/avatar/3a615b34ef2060face8fcd481c6377e1?s=80",site:"https://www.glikm.com",twitter_name:"MaayanGlikser",github_name:"morsdyce",description:"Software Developer"},{name:"Sasha Khamkov",gravatar:"https://secure.gravatar.com/avatar/7ddad1a9a1c8de452badaf82b6c30c76?s=80",site:"https://www.sanusart.com",twitter_name:"sanusart",github_name:"sanusart",description:"Web Developer"}]}}}}},175:function(e,a,t){e.exports=t.p+"static/add-new-snippet-5b387267078c67a39e27c7d83b039dde.png"}}]);
//# sourceMappingURL=component---src-pages-documentation-js-1ba7c8d7b6ac6f13d3ec.js.map