(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"4mXO":function(e,t,n){e.exports=n("ShA9")},Juyh:function(e,t,n){"use strict";n.r(t);var r=n("r0ML"),a=n.n(r),o=n("i0m8"),i=n("St8r"),s=n("KpFA"),c=(n("cNRa"),n("MPav")),u=n("H2TA"),l=n("NqtD"),p=a.a.forwardRef((function(e,t){var n=e.classes,r=e.className,s=e.component,u=void 0===s?"div":s,p=e.disableGutters,f=void 0!==p&&p,d=e.fixed,h=void 0!==d&&d,m=e.maxWidth,v=void 0===m?"lg":m,b=Object(i.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return a.a.createElement(u,Object(o.a)({className:Object(c.a)(n.root,r,h&&n.fixed,f&&n.disableGutters,!1!==v&&n["maxWidth".concat(Object(l.a)(String(v)))]),ref:t},b))})),f=Object(u.a)((function(e){var t;return{root:(t={width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},Object(s.a)(t,e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),Object(s.a)(t,e.breakpoints.up("md"),{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)}),t),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,n){var r=e.breakpoints.values[n];return 0!==r&&(t[e.breakpoints.up(n)]={maxWidth:r}),t}),{}),maxWidthXs:Object(s.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(s.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(s.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(s.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(s.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(p),d=n("ofer"),h=n("hlFM"),m=n("Z79C"),v=n("bfFb"),b=a.a.forwardRef((function(e,t){var n=e.classes,r=e.className,s=e.color,u=void 0===s?"primary":s,p=e.component,f=void 0===p?"a":p,h=e.onBlur,b=e.onFocus,g=e.TypographyClasses,x=e.underline,y=void 0===x?"hover":x,O=e.variant,k=void 0===O?"inherit":O,w=Object(i.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),j=Object(m.a)(),N=j.isFocusVisible,R=j.onBlurVisible,W=j.ref,C=a.a.useState(!1),E=C[0],L=C[1],M=Object(v.a)(t,W);return a.a.createElement(d.a,Object(o.a)({className:Object(c.a)(n.root,n["underline".concat(Object(l.a)(y))],r,E&&n.focusVisible,{button:n.button}[f]),classes:g,color:u,component:f,onBlur:function(e){E&&(R(),L(!1)),h&&h(e)},onFocus:function(e){N(e)&&L(!0),b&&b(e)},ref:M,variant:k},w))})),g=Object(u.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(b),x=n("Z3vd"),y=n("R/WZ"),O=n("HR5l"),k=a.a.createElement;function w(e){return k(O.a,e,k("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"}))}var j=Object(y.a)((function(e){return{root:{margin:e.spacing(6,0,3)},lightBulb:{verticalAlign:"middle",marginRight:e.spacing(1)}}}));function N(){var e=j();return k(d.a,{className:e.root,color:"textSecondary"},k(w,{className:e.lightBulb}),"Pro tip: See more"," ",k(g,{href:"https://material-ui.com/getting-started/templates/"},"templates")," on the Material-UI documentation.")}var R=n("hfKm"),W=n.n(R);var C=n("UXZV"),E=n.n(C);function L(){return(L=E.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var M=n("4mXO"),U=n.n(M),S=n("pLtp"),T=n.n(S);function V(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=T()(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(U.a){var o=U()(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var F=n("nOHt"),B=n("YFqc"),H=n.n(B),_=a.a.createElement,A=a.a.forwardRef((function(e,t){var n=e.as,r=e.href,a=e.prefetch,o=V(e,["as","href","prefetch"]);return _(H.a,{href:r,prefetch:a,as:n},_("a",L({ref:t},o)))}));function D(e){var t,n,r,a=e.activeClassName,o=void 0===a?"active":a,i=e.className,s=e.innerRef,u=e.naked,l=V(e,["activeClassName","className","innerRef","naked"]),p=Object(F.useRouter)(),f=Object(c.a)(i,(t={},n=o,r=p.pathname===e.href&&o,n in t?W()(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t));return u?_(A,L({className:f,ref:s},l)):_(g,L({component:A,className:f,ref:s},l))}var P=a.a.forwardRef((function(e,t){return _(D,L({},e,{innerRef:t}))}));n.d(t,"default",(function(){return G}));var X=a.a.createElement;function z(){return X(d.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",X(g,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}function G(){return X(f,{maxWidth:"sm"},X(h.a,{my:4},X(d.a,{variant:"h4",component:"h1",gutterBottom:!0},"Next.js example"),X(x.a,{variant:"contained",color:"primary",component:P,naked:!0,href:"/"},"Go to the main page"),X(N,null),X(z,null)))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),a=n("WaGi"),o=n("ZDA2"),i=n("/+P4"),s=n("N9n2"),c=n("5Uuq"),u=n("KI45");t.__esModule=!0,t.default=void 0;var l,p=u(n("LX0d")),f=n("ueZm"),d=c(n("r0ML")),h=(u(n("cNRa")),u(n("nOHt"))),m=(n("P5f7"),n("g/15"));function v(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var b=new p.default,g=window.IntersectionObserver;function x(){return l||(g?l=new g((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var y=function(e){function t(e){var n;return r(this,t),(n=o(this,i(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(a,o){if(r&&a===t&&o===n)return r;var i=e(a,o);return t=a,n=o,r=i,i}}((function(e,t){return{href:v(e),as:t?v(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,a=t.target;if("A"!==r||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),i=o.href,s=o.as;if(function(e){var t=(0,f.parse)(e,!1,!0),n=(0,f.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,f.resolve)(c,i),s=s?(0,f.resolve)(c,s):i,e.preventDefault();var u=n.props.scroll;null==u&&(u=s.indexOf("#")<0),h.default[n.props.replace?"replace":"push"](i,s,{shallow:n.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return s(t,e),a(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=x();return n?(n.observe(e),b.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,(function(){t.prefetch()})))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,f.resolve)(e,t);h.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),i={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch()},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||r),d.default.cloneElement(o,i)}}]),t}(d.Component);y.propTypes=void 0;var O=y;t.default=O},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])}},[["rB5V",1,0]]]);