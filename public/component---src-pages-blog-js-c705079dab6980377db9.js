(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"5t3b":function(e,t,a){e.exports={header:"header-module--header--1C-DW",logo:"header-module--logo--1EGkM",navItems:"header-module--nav-items--2qkkh",navItem:"header-module--nav-item--1kPYv",headerWrapper:"header-module--header-wrapper--QfzBU",greenAccent:"header-module--green-accent--3hxlS"}},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("rY4l"),o=a("JwsL"),c=a("kl0w"),i=a.n(c);t.a=function(e){var t=e.children;return n.a.createElement("div",{className:i.a.layout},n.a.createElement(l.a,null),n.a.createElement("main",null,t),n.a.createElement(o.a,null))}},CKyx:function(e,t,a){e.exports={hireSection:"hire-module--hire-section--1Nrbr",hireWrapper:"hire-module--hire-wrapper--2SGyB",btn:"hire-module--btn--1E7K0"}},JwsL:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("NaA2"),o=a.n(l);t.a=function(){return n.a.createElement("footer",{className:o.a.footer},n.a.createElement("div",{className:o.a.footerWrapper},n.a.createElement("div",{className:o.a.copyright},"© Chris DeMars 2020"),n.a.createElement("div",{className:o.a.socialLinks},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.linkedin.com/in/chrisdemars/",target:"_blank",norel:"noreferer"},"LinkedIn")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitter.com/saltnburnem",target:"_blank",norel:"noreferer"},"Twitter"))))))}},NaA2:function(e,t,a){e.exports={footer:"footer-module--footer--V5wV3",footerWrapper:"footer-module--footer-wrapper--jyaEc",socialLinks:"footer-module--social-links--1MwLU"}},S0TQ:function(e,t,a){e.exports={blog:"blog-module--blog--i5sg7"}},Wbzz:function(e,t,a){"use strict";a("xfY5");var r=a("q1tI"),n=a.n(r),l=a("+ZDr"),o=a.n(l);a.d(t,"a",(function(){return o.a}));a("lw3w"),a("emEt").default.enqueue,n.a.createContext({})},cdnC:function(e,t,a){},fb1x:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),o=a("CKyx"),c=a.n(o);t.a=function(){return n.a.createElement("section",{className:c.a.hireSection},n.a.createElement("div",{className:c.a.hireWrapper},n.a.createElement("h2",null,"Hire Me!"),n.a.createElement("p",null,"Are you looking for an accessibility specialist to create an experience that is usable for everyone? What about someone that can architect the user experience? Maybe a developer with amazing CSS chops? Lets work together. I'd love to see what you having going on!"),n.a.createElement(l.a,{to:"/contact",className:c.a.btn},"Get in touch!")))}},kl0w:function(e,t,a){e.exports={layout:"layout-module--layout--2-jDq"}},lw3w:function(e,t,a){var r;e.exports=(r=a("rzlk"))&&r.default||r},qncB:function(e,t,a){var r=a("XKFU"),n=a("vhPU"),l=a("eeVq"),o=a("/e88"),c="["+o+"]",i=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),u=function(e,t,a){var n={},c=l((function(){return!!o[e]()||"​"!="​"[e]()})),i=n[e]=c?t(m):o[e];a&&(n[a]=i),r(r.P+r.F*c,"String",n)},m=u.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(s,"")),e};e.exports=u},rY4l:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),o=(a("cdnC"),a("5t3b")),c=a.n(o);t.a=function(){return n.a.createElement("div",{className:c.a.header},n.a.createElement("header",{className:c.a.headerWrapper},n.a.createElement("h1",{className:c.a.logo},"Chris",n.a.createElement("span",{className:c.a.greenAccent},"DeMars")),n.a.createElement("nav",null,n.a.createElement("ul",{className:c.a.navItems},n.a.createElement("li",{className:c.a.navItem},n.a.createElement(l.a,{to:"/"},"Home")),n.a.createElement("li",{className:c.a.navItem},n.a.createElement(l.a,{to:"/about"},"About")),n.a.createElement("li",{className:c.a.navItem},n.a.createElement(l.a,{to:"/blog"},"Blog")),n.a.createElement("li",{className:c.a.navItem},n.a.createElement(l.a,{to:"/contact"},"Contact"))))))}},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var r=a("q1tI"),n=a.n(r),l=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},vx99:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),o=a("Bl7J"),c=a("fb1x"),i=a("S0TQ"),s=a.n(i);t.default=function(e){var t=e.data,a=(t.site.siteMetadata.title,t.allMarkdownRemark.edges);return n.a.createElement(o.a,null,n.a.createElement("section",{className:s.a.blog},n.a.createElement("h2",null,"Thoughts & Non-sense"),a.map((function(e){var t=e.node,a=t.frontmatter.title||t.frontmatter.path;return n.a.createElement("article",{key:t.frontmatter.path},n.a.createElement("header",null,n.a.createElement("h3",null,n.a.createElement(l.a,{style:{boxShadow:"none"},to:t.frontmatter.path},a)),n.a.createElement("small",null,t.frontmatter.date)),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}})))}))),n.a.createElement(c.a,null))};var u="447737932"},xfY5:function(e,t,a){"use strict";var r=a("dyZX"),n=a("aagx"),l=a("LZWt"),o=a("Xbzi"),c=a("apmT"),i=a("eeVq"),s=a("kJMx").f,u=a("EemH").f,m=a("hswa").f,f=a("qncB").trim,h=r.Number,p=h,d=h.prototype,E="Number"==l(a("Kuth")(d)),v="trim"in String.prototype,g=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var a,r,n,l=(t=v?t.trim():f(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+t}for(var o,i=t.slice(2),s=0,u=i.length;s<u;s++)if((o=i.charCodeAt(s))<48||o>n)return NaN;return parseInt(i,r)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof h&&(E?i((function(){d.valueOf.call(a)})):"Number"!=l(a))?o(new p(g(t)),a,h):g(t)};for(var N,b=a("nh4g")?s(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;b.length>I;I++)n(p,N=b[I])&&!n(h,N)&&m(h,N,u(p,N));h.prototype=d,d.constructor=h,a("KroJ")(r,"Number",h)}}}]);
//# sourceMappingURL=component---src-pages-blog-js-c705079dab6980377db9.js.map