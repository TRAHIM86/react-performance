(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}})();var af={exports:{}},Nl={};var N0;function E2(){if(N0)return Nl;N0=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function i(l,s,c){var d=null;if(c!==void 0&&(d=""+c),s.key!==void 0&&(d=""+s.key),"key"in s){c={};for(var m in s)m!=="key"&&(c[m]=s[m])}else c=s;return s=c.ref,{$$typeof:t,type:l,key:d,ref:s!==void 0?s:null,props:c}}return Nl.Fragment=a,Nl.jsx=i,Nl.jsxs=i,Nl}var C0;function A2(){return C0||(C0=1,af.exports=E2()),af.exports}var he=A2();const z2="0.5.43",Lh=`bippy-${z2}`,E0=Object.defineProperty,M2=Object.prototype.hasOwnProperty,Ll=()=>{},xy=t=>{try{Function.prototype.toString.call(t).indexOf("^_^")>-1&&setTimeout(()=>{throw Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},_y=(t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!(t&&"getFiberRoots"in t);let Sy=!1,A0;const Qf=(t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>Sy?!0:(t&&typeof t.inject=="function"&&(A0=t.inject.toString()),!!A0?.includes("(injected)")),Xs=new Set,Zf=new Set,O2=t=>{let a=new Map,i=0,l={_instrumentationIsActive:!1,_instrumentationSource:Lh,checkDCE:xy,hasUnsupportedRendererAttached:!1,inject(s){let c=++i;return a.set(c,s),Zf.add(s),l._instrumentationIsActive||(l._instrumentationIsActive=!0,Xs.forEach(d=>d())),c},on:Ll,onCommitFiberRoot:Ll,onCommitFiberUnmount:Ll,onPostCommitFiberRoot:Ll,renderers:a,supportsFiber:!0,supportsFlight:!0};try{E0(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!0,enumerable:!0,get(){return l},set(d){if(d&&typeof d=="object"){let m=l.renderers;l=d,m.size>0&&(m.forEach((p,g)=>{Zf.add(p),d.renderers.set(g,p)}),Wf(t))}}});let s=window.hasOwnProperty,c=!1;E0(window,"hasOwnProperty",{configurable:!0,value:function(...d){try{if(!c&&d[0]==="__REACT_DEVTOOLS_GLOBAL_HOOK__")return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,c=!0,-0}catch{}return s.apply(this,d)},writable:!0})}catch{Wf(t)}return l},Wf=t=>{t&&Xs.add(t);try{let a=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!a)return;if(!a._instrumentationSource){a.checkDCE=xy,a.supportsFiber=!0,a.supportsFlight=!0,a.hasUnsupportedRendererAttached=!1,a._instrumentationSource=Lh,a._instrumentationIsActive=!1;let i=_y(a);if(i||(a.on=Ll),a.renderers.size){a._instrumentationIsActive=!0,Xs.forEach(c=>c());return}let l=a.inject,s=Qf(a);s&&!i&&(Sy=!0,a.inject({scheduleRefresh(){}})&&(a._instrumentationIsActive=!0)),a.inject=c=>{let d=l(c);return Zf.add(c),s&&a.renderers.set(d,c),a._instrumentationIsActive=!0,Xs.forEach(m=>m()),d}}(a.renderers.size||a._instrumentationIsActive||Qf())&&t?.()}catch{}},R2=()=>M2.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"),jh=t=>R2()?(Wf(t),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):O2(t),D2=()=>!!(typeof window<"u"&&(window.document?.createElement||window.navigator?.product==="ReactNative")),$2=()=>{try{D2()&&jh()}catch{}};$2();const Ty=0,so=1,ky=11,L2=13,Uh=14,Hh=15,j2=60111,U2="Symbol(react.concurrent_mode)",H2="Symbol(react.async_mode)",z0=13366,Ql=t=>{switch(t.tag){case 5:case 26:case 27:return!0;default:return typeof t.type=="string"}},Cc=t=>{switch(t.tag){case 1:case 11:case 0:case 14:case 15:return!0;default:return!1}},B2=(t,a)=>{try{let i=t.dependencies,l=t.alternate?.dependencies;if(!i||!l||typeof i!="object"||!("firstContext"in i)||typeof l!="object"||!("firstContext"in l))return!1;let s=i.firstContext,c=l.firstContext;for(;s&&typeof s=="object"&&"memoizedValue"in s||c&&typeof c=="object"&&"memoizedValue"in c;){if(a(s,c)===!0)return!0;s=s?.next,c=c?.next}}catch{}return!1},Bh=t=>{let a=t.memoizedProps,i=t.alternate?.memoizedProps||{},l=t.flags??t.effectTag??0;switch(t.tag){case 1:case 9:case 11:case 0:case 14:case 15:return(l&1)==1;default:return t.alternate?i!==a||t.alternate.memoizedState!==t.memoizedState||t.alternate.ref!==t.ref:!0}},Fh=t=>!!(t.flags&(z0|8)||t.subtreeFlags&(z0|8)),F2=t=>{let a=[],i=[t];for(;i.length;){let l=i.pop();l&&(Ql(l)&&Fh(l)&&Bh(l)&&a.push(l),l.child&&i.push(l.child),l.sibling&&i.push(l.sibling))}return a},Vh=t=>{switch(t.tag){case 18:return!0;case 7:case 6:case 23:case 22:return!0;case 3:return!1;default:{let a=typeof t.type=="object"&&t.type!==null?t.type.$$typeof:t.type;switch(typeof a=="symbol"?a.toString():a){case j2:case U2:case H2:return!0;default:return!1}}}},V2=t=>{let a=[],i=[];for(Ql(t)?a.push(t):t.child&&i.push(t.child);i.length;){let l=i.pop();if(!l)break;Ql(l)?a.push(l):l.child&&i.push(l.child),l.sibling&&i.push(l.sibling)}return a};function Ny(t,a,i=!1){if(!t)return null;let l=a(t);if(l instanceof Promise)return(async()=>{if(await l===!0)return t;let c=i?t.return:t.child;for(;c;){let d=await Ey(c,a,i);if(d)return d;c=i?null:c.sibling}return null})();if(l===!0)return t;let s=i?t.return:t.child;for(;s;){let c=Cy(s,a,i);if(c)return c;s=i?null:s.sibling}return null}const Cy=(t,a,i=!1)=>{if(!t)return null;if(a(t)===!0)return t;let l=i?t.return:t.child;for(;l;){let s=Cy(l,a,i);if(s)return s;l=i?null:l.sibling}return null},Ey=async(t,a,i=!1)=>{if(!t)return null;if(await a(t)===!0)return t;let l=i?t.return:t.child;for(;l;){let s=await Ey(l,a,i);if(s)return s;l=i?null:l.sibling}return null},hr=t=>{let a=t?.actualDuration??0,i=a,l=t?.child??null;for(;a>0&&l!=null;)i-=l.actualDuration??0,l=l.sibling;return{selfTime:i,totalTime:a}},Zl=t=>!!t.updateQueue?.memoCache,_r=t=>{let a=t;return typeof a=="function"?a:typeof a=="object"&&a?_r(a.type||a.render):null},xt=t=>{let a=t;if(typeof a=="string")return a;if(typeof a!="function"&&!(typeof a=="object"&&a))return null;let i=a.displayName||a.name||null;if(i)return i;let l=_r(a);return l&&(l.displayName||l.name)||null},q2=t=>{try{if(typeof t.version=="string"&&t.bundleType>0)return"development"}catch{}return"production"},Y2=()=>{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;return!!t?._instrumentationIsActive||_y(t)||Qf(t)};let Ay=0;const ki=new WeakMap,G2=(t,a=Ay++)=>{ki.set(t,a)},Ha=t=>{let a=ki.get(t);return!a&&t.alternate&&(a=ki.get(t.alternate)),a||(a=Ay++,G2(t,a)),a},ja=(t,a,i)=>{let l=a;for(;l!=null;){if(ki.has(l)||Ha(l),!Vh(l)&&Bh(l)&&t(l,"mount"),l.tag===13)if(l.memoizedState!==null){let s=l.child,c=s?s.sibling:null;if(c){let d=c.child;d!==null&&ja(t,d,!1)}}else{let s=null;l.child!==null&&(s=l.child.child),s!==null&&ja(t,s,!1)}else l.child!=null&&ja(t,l.child,!0);l=i?l.sibling:null}},Kf=(t,a,i,l)=>{if(ki.has(a)||Ha(a),!i)return;ki.has(i)||Ha(i);let s=a.tag===13;!Vh(a)&&Bh(a)&&t(a,"update");let d=s&&i.memoizedState!==null,m=s&&a.memoizedState!==null;if(d&&m){let p=a.child?.sibling??null,g=i.child?.sibling??null;p!==null&&g!==null&&Kf(t,p,g)}else if(d&&!m){let p=a.child;p!==null&&ja(t,p,!0)}else if(!d&&m){zy(t,i);let p=a.child?.sibling??null;p!==null&&ja(t,p,!0)}else if(a.child!==i.child){let p=a.child;for(;p;){if(p.alternate){let g=p.alternate;Kf(t,p,g)}else ja(t,p,!1);p=p.sibling}}},Jf=(t,a)=>{(a.tag===3||!Vh(a))&&t(a,"unmount")},zy=(t,a)=>{let i=a.tag===13&&a.memoizedState!==null,l=a.child;for(i&&(l=(a.child?.sibling??null)?.child??null);l!==null;)l.return!==null&&(Jf(t,l),zy(t,l)),l=l.sibling};let X2=0;const M0=new WeakMap,I2=(t,a)=>{let i="current"in t?t.current:t,l=M0.get(t);l||(l={id:X2++,prevFiber:null},M0.set(t,l));let{prevFiber:s}=l;if(!i)Jf(a,i);else if(s!==null){let c=s&&s.memoizedState!=null&&s.memoizedState.element!=null&&s.memoizedState.isDehydrated!==!0,d=i.memoizedState!=null&&i.memoizedState.element!=null&&i.memoizedState.isDehydrated!==!0;!c&&d?ja(a,i,!1):c&&d?Kf(a,i,i.alternate):c&&!d&&Jf(a,i)}else ja(a,i,!0);l.prevFiber=i},Q2=t=>{let a=jh(t.onActive);a._instrumentationSource=t.name??Lh;let i=a.onCommitFiberRoot;if(t.onCommitFiberRoot){let c=(d,m,p)=>{i!==c&&(i?.(d,m,p),t.onCommitFiberRoot?.(d,m,p))};a.onCommitFiberRoot=c}let l=a.onCommitFiberUnmount;if(t.onCommitFiberUnmount){let c=(d,m)=>{a.onCommitFiberUnmount===c&&(l?.(d,m),t.onCommitFiberUnmount?.(d,m))};a.onCommitFiberUnmount=c}let s=a.onPostCommitFiberRoot;if(t.onPostCommitFiberRoot){let c=(d,m)=>{a.onPostCommitFiberRoot===c&&(s?.(d,m),t.onPostCommitFiberRoot?.(d,m))};a.onPostCommitFiberRoot=c}return a};var Ec,xe,My,Oy,Da,O0,Ry,Dy,rf,Is,Bl,$y,qh,Pf,eh,Ly,tc={},nc=[],Z2=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,co=Array.isArray;function aa(t,a){for(var i in a)t[i]=a[i];return t}function Yh(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function vr(t,a,i){var l,s,c,d={};for(c in a)c=="key"?l=a[c]:c=="ref"?s=a[c]:d[c]=a[c];if(arguments.length>2&&(d.children=arguments.length>3?Ec.call(arguments,2):i),typeof t=="function"&&t.defaultProps!=null)for(c in t.defaultProps)d[c]===void 0&&(d[c]=t.defaultProps[c]);return Qs(t,d,l,s,null)}function Qs(t,a,i,l,s){var c={type:t,props:a,key:i,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++My,__i:-1,__u:0};return s==null&&xe.vnode!=null&&xe.vnode(c),c}function $e(t){return t.children}function pn(t,a){this.props=t,this.context=a}function br(t,a){if(a==null)return t.__?br(t.__,t.__i+1):null;for(var i;a<t.__k.length;a++)if((i=t.__k[a])!=null&&i.__e!=null)return i.__e;return typeof t.type=="function"?br(t):null}function W2(t){if(t.__P&&t.__d){var a=t.__v,i=a.__e,l=[],s=[],c=aa({},a);c.__v=a.__v+1,xe.vnode&&xe.vnode(c),Gh(t.__P,c,a,t.__n,t.__P.namespaceURI,32&a.__u?[i]:null,l,i??br(a),!!(32&a.__u),s),c.__v=a.__v,c.__.__k[c.__i]=c,Fy(l,c,s),a.__e=a.__=null,c.__e!=i&&jy(c)}}function jy(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(a){if(a!=null&&a.__e!=null)return t.__e=t.__c.base=a.__e}),jy(t)}function th(t){(!t.__d&&(t.__d=!0)&&Da.push(t)&&!ac.__r++||O0!=xe.debounceRendering)&&((O0=xe.debounceRendering)||Ry)(ac)}function ac(){try{for(var t,a=1;Da.length;)Da.length>a&&Da.sort(Dy),t=Da.shift(),a=Da.length,W2(t)}finally{Da.length=ac.__r=0}}function Uy(t,a,i,l,s,c,d,m,p,g,b){var w,y,x,T,C,M,k=l&&l.__k||nc,E=a.length;for(p=K2(i,a,k,p,E),w=0;w<E;w++)(x=i.__k[w])!=null&&(y=x.__i!=-1&&k[x.__i]||tc,x.__i=w,M=Gh(t,x,y,s,c,d,m,p,g,b),T=x.__e,x.ref&&y.ref!=x.ref&&(y.ref&&Xh(y.ref,null,x),b.push(x.ref,x.__c||T,x)),C==null&&T!=null&&(C=T),4&x.__u?(p=Hy(x,p,t),y.__e&&(y.__e=null)):typeof x.type=="function"&&M!==void 0?p=M:T&&(p=T.nextSibling),x.__u&=-7);return i.__e=C,p}function K2(t,a,i,l,s){var c,d,m,p,g,b=i.length,w=b,y=0;for(t.__k=new Array(s),c=0;c<s;c++)(d=a[c])!=null&&typeof d!="boolean"&&typeof d!="function"?(typeof d=="string"||typeof d=="number"||typeof d=="bigint"||d.constructor==String?d=t.__k[c]=Qs(null,d,null,null,null):co(d)?d=t.__k[c]=Qs($e,{children:d},null,null,null):d.constructor===void 0&&d.__b>0?d=t.__k[c]=Qs(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):t.__k[c]=d,p=c+y,d.__=t,d.__b=t.__b+1,m=null,(g=d.__i=J2(d,i,p,w))!=-1&&(w--,(m=i[g])&&(m.__u|=2)),m==null||m.__v==null?(g==-1&&(s>b?y--:s<b&&y++),typeof d.type!="function"&&(d.__u|=4)):g!=p&&(g==p-1?y--:g==p+1?y++:(g>p?y--:y++,d.__u|=4))):t.__k[c]=null;if(w)for(c=0;c<b;c++)(m=i[c])!=null&&(2&m.__u)==0&&(m.__e==l&&(l=br(m)),qy(m,m));return l}function Hy(t,a,i){var l,s;if(typeof t.type=="function"){for(l=t.__k,s=0;l&&s<l.length;s++)l[s]&&(l[s].__=t,a=Hy(l[s],a,i));return a}t.__e!=a&&(a&&t.type&&!a.parentNode&&(a=br(t)),a=i.insertBefore(t.__e,a||null));do a=a&&a.nextSibling;while(a!=null&&a.nodeType==8);return a}function rc(t,a){return a=a||[],t==null||typeof t=="boolean"||(co(t)?t.some(function(i){rc(i,a)}):a.push(t)),a}function J2(t,a,i,l){var s,c,d,m=t.key,p=t.type,g=a[i],b=g!=null&&(2&g.__u)==0;if(g===null&&m==null||b&&m==g.key&&p==g.type)return i;if(l>(b?1:0)){for(s=i-1,c=i+1;s>=0||c<a.length;)if((g=a[d=s>=0?s--:c++])!=null&&(2&g.__u)==0&&m==g.key&&p==g.type)return d}return-1}function R0(t,a,i){a[0]=="-"?t.setProperty(a,i??""):t[a]=i==null?"":typeof i!="number"||Z2.test(a)?i:i+"px"}function Os(t,a,i,l,s){var c,d;e:if(a=="style")if(typeof i=="string")t.style.cssText=i;else{if(typeof l=="string"&&(t.style.cssText=l=""),l)for(a in l)i&&a in i||R0(t.style,a,"");if(i)for(a in i)l&&i[a]==l[a]||R0(t.style,a,i[a])}else if(a[0]=="o"&&a[1]=="n")c=a!=(a=a.replace($y,"$1")),d=a.toLowerCase(),a=d in t||a=="onFocusOut"||a=="onFocusIn"?d.slice(2):a.slice(2),t.l||(t.l={}),t.l[a+c]=i,i?l?i[Bl]=l[Bl]:(i[Bl]=qh,t.addEventListener(a,c?eh:Pf,c)):t.removeEventListener(a,c?eh:Pf,c);else{if(s=="http://www.w3.org/2000/svg")a=a.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(a!="width"&&a!="height"&&a!="href"&&a!="list"&&a!="form"&&a!="tabIndex"&&a!="download"&&a!="rowSpan"&&a!="colSpan"&&a!="role"&&a!="popover"&&a in t)try{t[a]=i??"";break e}catch{}typeof i=="function"||(i==null||i===!1&&a[4]!="-"?t.removeAttribute(a):t.setAttribute(a,a=="popover"&&i==1?"":i))}}function D0(t){return function(a){if(this.l){var i=this.l[a.type+t];if(a[Is]==null)a[Is]=qh++;else if(a[Is]<i[Bl])return;return i(xe.event?xe.event(a):a)}}}function Gh(t,a,i,l,s,c,d,m,p,g){var b,w,y,x,T,C,M,k,E,H,Y,Q,J,P,Z,ie,ne=a.type;if(a.constructor!==void 0)return null;128&i.__u&&(p=!!(32&i.__u),c=[m=a.__e=i.__e]),(b=xe.__b)&&b(a);e:if(typeof ne=="function"){w=d.length;try{if(E=a.props,H=ne.prototype&&ne.prototype.render,Y=(b=ne.contextType)&&l[b.__c],Q=b?Y?Y.props.value:b.__:l,i.__c?k=(y=a.__c=i.__c).__=y.__E:(H?a.__c=y=new ne(E,Q):(a.__c=y=new pn(E,Q),y.constructor=ne,y.render=eS),Y&&Y.sub(y),y.state||(y.state={}),y.__n=l,x=y.__d=!0,y.__h=[],y._sb=[]),H&&y.__s==null&&(y.__s=y.state),H&&ne.getDerivedStateFromProps!=null&&(y.__s==y.state&&(y.__s=aa({},y.__s)),aa(y.__s,ne.getDerivedStateFromProps(E,y.__s))),T=y.props,C=y.state,y.__v=a,x)H&&ne.getDerivedStateFromProps==null&&y.componentWillMount!=null&&y.componentWillMount(),H&&y.componentDidMount!=null&&y.__h.push(y.componentDidMount);else{if(H&&ne.getDerivedStateFromProps==null&&E!==T&&y.componentWillReceiveProps!=null&&y.componentWillReceiveProps(E,Q),a.__v==i.__v||!y.__e&&y.shouldComponentUpdate!=null&&y.shouldComponentUpdate(E,y.__s,Q)===!1){a.__v!=i.__v&&(y.props=E,y.state=y.__s,y.__d=!1),a.__e=i.__e,a.__k=i.__k,a.__k.some(function(pe){pe&&(pe.__=a)}),nc.push.apply(y.__h,y._sb),y._sb=[],y.__h.length&&d.push(y),m=br(i);break e}y.componentWillUpdate!=null&&y.componentWillUpdate(E,y.__s,Q),H&&y.componentDidUpdate!=null&&y.__h.push(function(){y.componentDidUpdate(T,C,M)})}if(y.context=Q,y.props=E,y.__P=t,y.__e=!1,J=xe.__r,P=0,H)y.state=y.__s,y.__d=!1,J&&J(a),b=y.render(y.props,y.state,y.context),nc.push.apply(y.__h,y._sb),y._sb=[];else do y.__d=!1,J&&J(a),b=y.render(y.props,y.state,y.context),y.state=y.__s;while(y.__d&&++P<25);y.state=y.__s,y.getChildContext!=null&&(l=aa(aa({},l),y.getChildContext())),H&&!x&&y.getSnapshotBeforeUpdate!=null&&(M=y.getSnapshotBeforeUpdate(T,C)),Z=b!=null&&b.type===$e&&b.key==null?Vy(b.props.children):b,m=Uy(t,co(Z)?Z:[Z],a,i,l,s,c,d,m,p,g),y.base=a.__e,a.__u&=-161,y.__h.length&&d.push(y),k&&(y.__E=y.__=null)}catch(pe){if(d.length=w,a.__v=null,p||c!=null){if(pe.then){for(a.__u|=p?160:128;m&&m.nodeType==8&&m.nextSibling;)m=m.nextSibling;c!=null&&(c[c.indexOf(m)]=null),a.__e=m}else if(c!=null)for(ie=c.length;ie--;)Yh(c[ie])}else a.__e=i.__e;a.__k==null&&(a.__k=i.__k||[]),pe.then||By(a),xe.__e(pe,a,i)}}else c==null&&a.__v==i.__v?(a.__k=i.__k,a.__e=i.__e):m=a.__e=P2(i.__e,a,i,l,s,c,d,p,g);return(b=xe.diffed)&&b(a),128&a.__u?void 0:m}function By(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(By))}function Fy(t,a,i){for(var l=0;l<i.length;l++)Xh(i[l],i[++l],i[++l]);xe.__c&&xe.__c(a,t),t.some(function(s){try{t=s.__h,s.__h=[],t.some(function(c){c.call(s)})}catch(c){xe.__e(c,s.__v)}})}function Vy(t){return typeof t!="object"||t==null||t.__b>0?t:co(t)?t.map(Vy):t.constructor!==void 0?null:aa({},t)}function P2(t,a,i,l,s,c,d,m,p){var g,b,w,y,x,T,C,M=i.props||tc,k=a.props,E=a.type;if(E=="svg"?s="http://www.w3.org/2000/svg":E=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),c!=null){for(g=0;g<c.length;g++)if((x=c[g])&&"setAttribute"in x==!!E&&(E?x.localName==E:x.nodeType==3)){t=x,c[g]=null;break}}if(t==null){if(E==null)return document.createTextNode(k);t=document.createElementNS(s,E,k.is&&k),m&&(xe.__m&&xe.__m(a,c),m=!1),c=null}if(E==null)M===k||m&&t.data==k||(t.data=k);else{if(c=E=="textarea"&&k.defaultValue!=null?null:c&&Ec.call(t.childNodes),!m&&c!=null)for(M={},g=0;g<t.attributes.length;g++)M[(x=t.attributes[g]).name]=x.value;for(g in M)x=M[g],g=="dangerouslySetInnerHTML"?w=x:g=="children"||g in k||g=="value"&&"defaultValue"in k||g=="checked"&&"defaultChecked"in k||Os(t,g,null,x,s);for(g in k)x=k[g],g=="children"?y=x:g=="dangerouslySetInnerHTML"?b=x:g=="value"?T=x:g=="checked"?C=x:m&&typeof x!="function"||M[g]===x||Os(t,g,x,M[g],s);if(b)m||w&&(b.__html==w.__html||b.__html==t.innerHTML)||(t.innerHTML=b.__html),a.__k=[];else if(w&&(t.innerHTML=""),Uy(a.type=="template"?t.content:t,co(y)?y:[y],a,i,l,E=="foreignObject"?"http://www.w3.org/1999/xhtml":s,c,d,c?c[0]:i.__k&&br(i,0),m,p),c!=null)for(g=c.length;g--;)Yh(c[g]);m&&E!="textarea"||(g="value",E=="progress"&&T==null?t.removeAttribute("value"):T!=null&&(T!==t[g]||E=="progress"&&!T||E=="option"&&T!=M[g])&&Os(t,g,T,M[g],s),g="checked",C!=null&&C!=t[g]&&Os(t,g,C,M[g],s))}return t}function Xh(t,a,i){try{if(typeof t=="function"){var l=typeof t.__u=="function";l&&t.__u(),l&&a==null||(t.__u=t(a))}else t.current=a}catch(s){xe.__e(s,i)}}function qy(t,a,i){var l,s;if(xe.unmount&&xe.unmount(t),(l=t.ref)&&(l.current&&l.current!=t.__e||Xh(l,null,a)),(l=t.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(c){xe.__e(c,a)}l.base=l.__P=l.__n=null}if(l=t.__k)for(s=0;s<l.length;s++)l[s]&&qy(l[s],a,i||typeof t.type!="function");i||Yh(t.__e),t.__c=t.__=t.__e=void 0}function eS(t,a,i){return this.constructor(t,i)}function Fl(t,a,i){var l,s,c,d;a==document&&(a=document.documentElement),xe.__&&xe.__(t,a),s=(l=!1)?null:a.__k,c=[],d=[],Gh(a,t=a.__k=vr($e,null,[t]),s||tc,tc,a.namespaceURI,s?null:a.firstChild?Ec.call(a.childNodes):null,c,s?s.__e:a.firstChild,l,d),Fy(c,t,d),t.props.children=null}function Yy(t){function a(i){var l,s;return this.getChildContext||(l=new Set,(s={})[a.__c]=this,this.getChildContext=function(){return s},this.componentWillUnmount=function(){l=null},this.shouldComponentUpdate=function(c){this.props.value!=c.value&&l.forEach(function(d){d.__e=!0,th(d)})},this.sub=function(c){l.add(c);var d=c.componentWillUnmount;c.componentWillUnmount=function(){l&&l.delete(c),d&&d.call(c)}}),i.children}return a.__c="__cC"+Ly++,a.__=t,a.Provider=a.__l=(a.Consumer=function(i,l){return i.children(l)}).contextType=a,a}Ec=nc.slice,xe={__e:function(t,a,i,l){for(var s,c,d;a=a.__;)if((s=a.__c)&&!s.__)try{if((c=s.constructor)&&c.getDerivedStateFromError!=null&&(s.setState(c.getDerivedStateFromError(t)),d=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(t,l||{}),d=s.__d),d)return s.__E=s}catch(m){t=m}throw t}},My=0,Oy=function(t){return t!=null&&t.constructor===void 0},pn.prototype.setState=function(t,a){var i;i=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=aa({},this.state),typeof t=="function"&&(t=t(aa({},i),this.props)),t&&aa(i,t),t!=null&&this.__v&&(a&&this._sb.push(a),th(this))},pn.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),th(this))},pn.prototype.render=$e,Da=[],Ry=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Dy=function(t,a){return t.__v.__b-a.__v.__b},ac.__r=0,rf=Math.random().toString(8),Is="__d"+rf,Bl="__a"+rf,$y=/(PointerCapture)$|Capture$/i,qh=0,Pf=D0(!1),eh=D0(!0),Ly=0;var yr,Pe,lf,$0,Wl=0,Gy=[],ct=xe,L0=ct.__b,j0=ct.__r,U0=ct.diffed,H0=ct.__c,B0=ct.unmount,F0=ct.__;function uo(t,a){ct.__h&&ct.__h(Pe,t,Wl||a),Wl=0;var i=Pe.__H||(Pe.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function Ce(t){return Wl=1,tS(Xy,t)}function tS(t,a,i){var l=uo(yr++,2);if(l.t=t,!l.__c&&(l.__=[i?i(a):Xy(void 0,a),function(m){var p=l.__N?l.__N[0]:l.__[0],g=l.t(p,m);p!==g&&(l.__N=[g,l.__[1]],l.__c.setState({}))}],l.__c=Pe,!Pe.__f)){var s=function(m,p,g){if(!l.__c.__H)return!0;var b=!1,w=l.__c.props!==m;if(l.__c.__H.__.some(function(x){if(x.__N){b=!0;var T=x.__[0];x.__=x.__N,x.__N=void 0,T!==x.__[0]&&(w=!0)}}),c){var y=c.call(this,m,p,g);return b?y||w:y}return!b||w};Pe.__f=!0;var c=Pe.shouldComponentUpdate,d=Pe.componentWillUpdate;Pe.componentWillUpdate=function(m,p,g){if(this.__e){var b=c;c=void 0,s(m,p,g),c=b}d&&d.call(this,m,p,g)},Pe.shouldComponentUpdate=s}return l.__N||l.__}function Te(t,a){var i=uo(yr++,3);!ct.__s&&Zh(i.__H,a)&&(i.__=t,i.u=a,Pe.__H.__h.push(i))}function Ih(t,a){var i=uo(yr++,4);!ct.__s&&Zh(i.__H,a)&&(i.__=t,i.u=a,Pe.__h.push(i))}function me(t){return Wl=5,Nn(function(){return{current:t}},[])}function Nn(t,a){var i=uo(yr++,7);return Zh(i.__H,a)&&(i.__=t(),i.__H=a,i.__h=t),i.__}function st(t,a){return Wl=8,Nn(function(){return t},a)}function Qh(t){var a=Pe.context[t.__c],i=uo(yr++,9);return i.c=t,a?(i.__==null&&(i.__=!0,a.sub(Pe)),a.props.value):t.__}function nS(){for(var t;t=Gy.shift();){var a=t.__H;if(t.__P&&a)try{a.__h.some(Zs),a.__h.some(nh),a.__h=[]}catch(i){a.__h=[],ct.__e(i,t.__v)}}}ct.__b=function(t){Pe=null,L0&&L0(t)},ct.__=function(t,a){t&&a.__k&&a.__k.__m&&(t.__m=a.__k.__m),F0&&F0(t,a)},ct.__r=function(t){j0&&j0(t),yr=0;var a=(Pe=t.__c).__H;a&&(lf===Pe?(a.__h=[],Pe.__h=[],a.__.some(function(i){i.__N&&(i.__=i.__N),i.u=i.__N=void 0})):(a.__h.some(Zs),a.__h.some(nh),a.__h=[],yr=0)),lf=Pe},ct.diffed=function(t){U0&&U0(t);var a=t.__c;a&&a.__H&&(a.__H.__h.length&&(Gy.push(a)!==1&&$0===ct.requestAnimationFrame||(($0=ct.requestAnimationFrame)||aS)(nS)),a.__H.__.some(function(i){i.u&&(i.__H=i.u,i.u=void 0)})),lf=Pe=null},ct.__c=function(t,a){a.some(function(i){try{i.__h.some(Zs),i.__h=i.__h.filter(function(l){return!l.__||nh(l)})}catch(l){a.some(function(s){s.__h&&(s.__h=[])}),a=[],ct.__e(l,i.__v)}}),H0&&H0(t,a)},ct.unmount=function(t){B0&&B0(t);var a,i=t.__c;i&&i.__H&&(i.__H.__.some(function(l){try{Zs(l)}catch(s){a=s}}),i.__H=void 0,a&&ct.__e(a,i.__v))};var V0=typeof requestAnimationFrame=="function";function aS(t){var a,i=function(){clearTimeout(l),V0&&cancelAnimationFrame(a),setTimeout(t)},l=setTimeout(i,35);V0&&(a=requestAnimationFrame(i))}function Zs(t){var a=Pe,i=t.__c;typeof i=="function"&&(t.__c=void 0,i()),Pe=a}function nh(t){var a=Pe;t.__c=t.__(),Pe=a}function Zh(t,a){return!t||t.length!==a.length||a.some(function(i,l){return i!==t[l]})}function Xy(t,a){return typeof a=="function"?a(t):a}var rS=Symbol.for("preact-signals");function Ac(){if(ia>1)ia--;else{var t,a=!1;for((function(){var s=lc;for(lc=void 0;s!==void 0;){var c=s.S;if(c.v===s.v)for(var d=c.t;d!==void 0;d=d.x)d.i===s.i&&(d.i=c.i);s=s.o}})();ql!==void 0;){var i=ql;for(ql=void 0,ic++;i!==void 0;){var l=i.u;if(i.u=void 0,i.f&=-3,!(8&i.f)&&Zy(i))try{i.c()}catch(s){a||(t=s,a=!0)}i=l}}if(ic=0,ia--,a)throw t}}function Iy(t){if(ia>0)return t();ah=++iS,ia++;try{return t()}finally{Ac()}}var Vl,Je=void 0;function wr(t){var a=Je,i=Vl;Je=void 0,Vl=void 0;try{return t()}finally{Je=a,Vl=i}}var ql=void 0,ia=0,ic=0,iS=0,ah=0,lc=void 0,oc=0;function Qy(t){if(Je!==void 0){var a=t.n;if(a===void 0||a.t!==Je)return a={i:0,S:t,p:Je.s,n:void 0,t:Je,e:void 0,x:void 0,r:a},Je.s!==void 0&&(Je.s.n=a),Je.s=a,t.n=a,32&Je.f&&t.S(a),a;if(a.i===-1)return a.i=0,a.n!==void 0&&(a.n.p=a.p,a.p!==void 0&&(a.p.n=a.n),a.p=Je.s,a.n=void 0,Je.s.n=a,Je.s=a),a}}function At(t,a){this.v=t,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=a?.watched,this.Z=a?.unwatched,this.name=a?.name}At.prototype.brand=rS;At.prototype.h=function(){return!0};At.prototype.S=function(t){var a=this,i=this.t;i!==t&&t.e===void 0&&(t.x=i,this.t=t,i!==void 0?i.e=t:wr(function(){var l;(l=a.W)==null||l.call(a)}))};At.prototype.U=function(t){var a=this;if(this.t!==void 0){var i=t.e,l=t.x;i!==void 0&&(i.x=l,t.e=void 0),l!==void 0&&(l.e=i,t.x=void 0),t===this.t&&(this.t=l,l===void 0&&wr(function(){var s;(s=a.Z)==null||s.call(a)}))}};At.prototype.subscribe=function(t){var a=this;return Ai(function(){var i=a.value;wr(function(){return t(i)})},{name:"sub"})};At.prototype.valueOf=function(){return this.value};At.prototype.toString=function(){return this.value+""};At.prototype.toJSON=function(){return this.value};At.prototype.peek=function(){var t=this;return wr(function(){return t.value})};Object.defineProperty(At.prototype,"value",{get:function(){var t=Qy(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if(ic>100)throw new Error("Cycle detected");(function(i){ia!==0&&ic===0&&i.l!==ah&&(i.l=ah,lc={S:i,v:i.v,i:i.i,o:lc})})(this),this.v=t,this.i++,oc++,ia++;try{for(var a=this.t;a!==void 0;a=a.x)a.t.N()}finally{Ac()}}}});function bt(t,a){return new At(t,a)}function Zy(t){for(var a=t.s;a!==void 0;a=a.n)if(a.S.i!==a.i||!a.S.h()||a.S.i!==a.i)return!0;return!1}function Wy(t){for(var a=t.s;a!==void 0;a=a.n){var i=a.S.n;if(i!==void 0&&(a.r=i),a.S.n=a,a.i=-1,a.n===void 0){t.s=a;break}}}function Ky(t){for(var a=t.s,i=void 0;a!==void 0;){var l=a.p;a.i===-1?(a.S.U(a),l!==void 0&&(l.n=a.n),a.n!==void 0&&(a.n.p=l)):i=a,a.S.n=a.r,a.r!==void 0&&(a.r=void 0),a=l}t.s=i}function Sr(t,a){At.call(this,void 0,a),this.x=t,this.s=void 0,this.g=oc-1,this.f=4}Sr.prototype=new At;Sr.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===oc))return!0;if(this.g=oc,this.f|=1,this.i>0&&!Zy(this))return this.f&=-2,!0;var t=Je;try{Wy(this),Je=this;var a=this.x();(16&this.f||this.v!==a||this.i===0)&&(this.v=a,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return Je=t,Ky(this),this.f&=-2,!0};Sr.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var a=this.s;a!==void 0;a=a.n)a.S.S(a)}At.prototype.S.call(this,t)};Sr.prototype.U=function(t){if(this.t!==void 0&&(At.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var a=this.s;a!==void 0;a=a.n)a.S.U(a)}};Sr.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};Object.defineProperty(Sr.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var t=Qy(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function Ba(t,a){return new Sr(t,a)}function Jy(t){var a=t.m;if(t.m=void 0,typeof a=="function"){ia++;var i=Je;Je=void 0;try{a()}catch(l){throw t.f&=-2,t.f|=8,Wh(t),l}finally{Je=i,Ac()}}}function Wh(t){for(var a=t.s;a!==void 0;a=a.n)a.S.U(a);t.x=void 0,t.s=void 0,Jy(t)}function lS(t){if(Je!==this)throw new Error("Out-of-order effect");Ky(this),Je=t,this.f&=-2,8&this.f&&Wh(this),Ac()}function Ei(t,a){this.x=t,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=a?.name,Vl&&Vl.push(this)}Ei.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var a=this.x();typeof a=="function"&&(this.m=a)}finally{t()}};Ei.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Jy(this),Wy(this),ia++;var t=Je;return Je=this,lS.bind(this,t)};Ei.prototype.N=function(){2&this.f||(this.f|=2,this.u=ql,ql=this)};Ei.prototype.d=function(){this.f|=8,1&this.f||Wh(this)};Ei.prototype.dispose=function(){this.d()};function Ai(t,a){var i=new Ei(t,a);try{i.c()}catch(s){throw i.d(),s}var l=i.d.bind(i);return l[Symbol.dispose]=l,l}var Kh,Rs,oS=typeof window<"u"&&!!window.__PREACT_SIGNALS_DEVTOOLS__,Py=[],ew=[];Ai(function(){Kh=this.N})();function zi(t,a){xe[t]=a.bind(null,xe[t]||function(){})}function Kl(t){if(Rs){var a=Rs;Rs=void 0,a()}Rs=t&&t.S()}function tw(t){var a=this,i=t.data,l=nw(i);l.name="ReactiveDom",l.value=i;var s=Nn(function(){for(var m=a,p=a.__v;p=p.__;)if(p.__c){p.__c.__$f|=4;break}var g=Ba(function(){var x=l.value.value;return x===0?0:x===!0?"":x||""}),b=Ba(function(){return!Array.isArray(g.value)&&!Oy(g.value)}),w=Ai(function(){if(this.N=aw,b.value){var x=g.value;m.__v&&m.__v.__e&&m.__v.__e.nodeType===3&&(m.__v.__e.data=x)}}),y=a.__$u.d;return a.__$u.d=function(){w(),y.call(this)},[b,g]},[]),c=s[0],d=s[1];return c.value?d.peek():d.value}tw.displayName="ReactiveTextNode";Object.defineProperties(At.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:tw},props:{configurable:!0,get:function(){var t=this;return{data:{get value(){return t.value}}}}},__b:{configurable:!0,value:1}});zi("__b",function(t,a){if(Kl(),typeof a.type=="string"){var i,l=a.props;for(var s in l)if(s!=="children"){var c=l[s];c instanceof At&&(i||(a.__np=i={}),i[s]=c,l[s]=c.peek())}}t(a)});zi("__r",function(t,a){if(t(a),a.type!==$e){Kl();var i,l=a.__c;l&&(l.__$f&=-2,(i=l.__$u)===void 0&&(l.__$u=i=(function(s,c){var d;return Ai(function(){d=this},{name:c}),d.c=s,d})((function(s){return function(){var c;oS&&((c=this.y)==null||c.call(this)),s.__$f|=1,s.setState({})}})(l),typeof a.type=="function"?a.type.displayName||a.type.name:""))),Kl(i)}});zi("__e",function(t,a,i,l){Kl(),t(a,i,l)});zi("diffed",function(t,a){Kl();var i;if(typeof a.type=="string"&&(i=a.__e)){var l=a.__np,s=a.props,c=i.U;if(c)for(var d in c){var m=c[d];m===void 0||l&&d in l||(m.d(),c[d]=void 0)}if(l){c||(c={},i.U=c);for(var p in l){var g=c[p],b=l[p];g===void 0?(g=sS(i,p,b,s),c[p]=g):g.o(b,s)}}}t(a)});function sS(t,a,i,l){var s=a in t&&t.ownerSVGElement===void 0,c=bt(i);return{o:function(d,m){c.value=d,l=m},d:Ai(function(){this.N=aw;var d=c.value.value;l[a]!==d&&(l[a]=d,s?t[a]=d:d!=null&&(d!==!1||a[4]==="-")?t.setAttribute(a,d):t.removeAttribute(a))})}}zi("unmount",function(t,a){if(typeof a.type=="string"){var i=a.__e;if(i){var l=i.U;if(l){i.U=void 0;for(var s in l){var c=l[s];c&&c.d()}}}var d=a.__np;if(d){var m=a.props;for(var p in d)m[p]=d[p]}a.__np=void 0}else{var g=a.__c;if(g){var b=g.__$u;b&&(g.__$u=void 0,b.d())}}t(a)});zi("__h",function(t,a,i,l){l<3&&(a.__$f|=2),t(a,i,l)});pn.prototype.shouldComponentUpdate=function(t,a){if(this.__R)return!0;var i=this.__$u,l=i&&i.s!==void 0;for(var s in a)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){var c=2&this.__$f;if(!(l||c||4&this.__$f)||1&this.__$f)return!0}else if(!(l||4&this.__$f)||3&this.__$f)return!0;for(var d in t)if(d!=="__source"&&t[d]!==this.props[d])return!0;for(var m in this.props)if(!(m in t))return!0;return!1};function nw(t,a){return Nn(function(){return bt(t,a)},[])}var cS=typeof requestAnimationFrame>"u"?setTimeout:function(t){var a=function(){clearTimeout(i),cancelAnimationFrame(l),t()},i=setTimeout(a,35),l=requestAnimationFrame(a)},uS=function(t){queueMicrotask(function(){queueMicrotask(t)})};function dS(){Iy(function(){for(var t;t=Py.shift();)Kh.call(t)})}function fS(){Py.push(this)===1&&(xe.requestAnimationFrame||cS)(dS)}function hS(){Iy(function(){for(var t;t=ew.shift();)Kh.call(t)})}function aw(){ew.push(this)===1&&(xe.requestAnimationFrame||uS)(hS)}function Jl(t,a){var i=me(t);i.current=t,Te(function(){return Ai(function(){return this.N=fS,i.current()},a)},[])}function rw(t,a){for(var i in a)t[i]=a[i];return t}function rh(t,a){for(var i in t)if(i!=="__source"&&!(i in a))return!0;for(var l in a)if(l!=="__source"&&t[l]!==a[l])return!0;return!1}function mS(t,a){var i=a(),l=Ce({t:{__:i,u:a}}),s=l[0].t,c=l[1];return Ih(function(){s.__=i,s.u=a,of(s)&&c({t:s})},[t,i,a]),Te(function(){return of(s)&&c({t:s}),t(function(){of(s)&&c({t:s})})},[t]),i}function of(t){try{return!((a=t.__)===(i=t.u())&&(a!==0||1/a==1/i)||a!=a&&i!=i)}catch{return!0}var a,i}function q0(t,a){this.props=t,this.context=a}function zc(t,a){function i(s){var c=this.props.ref;return c!=s.ref&&c&&(typeof c=="function"?c(null):c.current=null),a?!a(this.props,s)||c!=s.ref:rh(this.props,s)}function l(s){return this.shouldComponentUpdate=i,vr(t,s)}return l.displayName="Memo("+(t.displayName||t.name)+")",l.__f=l.prototype.isReactComponent=!0,l.type=t,l}(q0.prototype=new pn).isPureReactComponent=!0,q0.prototype.shouldComponentUpdate=function(t,a){return rh(this.props,t)||rh(this.state,a)};var Y0=xe.__b;xe.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Y0&&Y0(t)};var pS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Jh(t){function a(i){var l=rw({},i);return delete l.ref,t(l,i.ref||null)}return a.$$typeof=pS,a.render=t,a.prototype.isReactComponent=a.__f=!0,a.displayName="ForwardRef("+(t.displayName||t.name)+")",a}var gS=xe.__e;xe.__e=function(t,a,i,l){if(t.then){for(var s,c=a;c=c.__;)if((s=c.__c)&&s.__c)return a.__e==null&&(a.__e=i.__e,a.__k=i.__k||[]),s.__c(t,a)}gS(t,a,i,l)};var G0=xe.unmount;function iw(t,a,i){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(l){typeof l.__c=="function"&&l.__c()}),t.__c.__H=null),(t=rw({},t)).__c!=null&&(t.__c.__P===i&&(t.__c.__P=a),t.__c.__e=!0,t.__c=null),t.__k=t.__k&&t.__k.map(function(l){return iw(l,a,i)})),t}function lw(t,a,i){return t&&i&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(l){return lw(l,a,i)}),t.__c&&t.__c.__P===a&&(t.__e&&i.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=i)),t}function sf(){this.__u=0,this.o=null,this.__b=null}function ow(t){var a=t.__&&t.__.__c;return a&&a.__a&&a.__a(t)}function Ds(){this.i=null,this.l=null}xe.unmount=function(t){var a=t.__c;a&&(a.__z=!0),a&&a.__R&&a.__R(),a&&32&t.__u&&(t.type=null),G0&&G0(t)},(sf.prototype=new pn).__c=function(t,a){var i=a.__c,l=this;l.o==null&&(l.o=[]),l.o.push(i);var s=ow(l.__v),c=!1,d=function(){c||l.__z||(c=!0,i.__R=null,s?s(p):p())};i.__R=d;var m=i.__P;i.__P=null;var p=function(){if(!--l.__u){if(l.state.__a){var g=l.state.__a;l.__v.__k[0]=lw(g,g.__c.__P,g.__c.__O)}var b;for(l.setState({__a:l.__b=null});b=l.o.pop();)b.__P=m,b.forceUpdate()}};l.__u++||32&a.__u||l.setState({__a:l.__b=l.__v.__k[0]}),t.then(d,d)},sf.prototype.componentWillUnmount=function(){this.o=[]},sf.prototype.render=function(t,a){if(this.__b){if(this.__v.__k){var i=document.createElement("div"),l=this.__v.__k[0].__c;this.__v.__k[0]=iw(this.__b,i,l.__O=l.__P)}this.__b=null}var s=a.__a&&vr($e,null,t.fallback);return s&&(s.__u&=-33),[vr($e,null,a.__a?null:t.children),s]};var X0=function(t,a,i){if(++i[1]===i[0]&&t.l.delete(a),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.l.size))for(i=t.i;i;){for(;i.length>3;)i.pop()();if(i[1]<i[0])break;t.i=i=i[2]}};function vS(t){return this.getChildContext=function(){return t.context},t.children}function bS(t){var a=this,i=t.h;if(a.componentWillUnmount=function(){Fl(null,a.v),a.v=null,a.h=null},a.h&&a.h!==i&&a.componentWillUnmount(),!a.v){for(var l=a.__v;l!==null&&!l.__m&&l.__!==null;)l=l.__;a.h=i,a.v={nodeType:1,parentNode:i,childNodes:[],__k:{__m:l.__m},contains:function(){return!0},namespaceURI:i.namespaceURI,insertBefore:function(s,c){this.childNodes.push(s),a.h.insertBefore(s,c)},removeChild:function(s){this.childNodes.splice(this.childNodes.indexOf(s)>>>1,1),a.h.removeChild(s)}}}Fl(vr(vS,{context:a.context},t.__v),a.v)}function yS(t,a){var i=vr(bS,{__v:t,h:a});return i.containerInfo=a,i}(Ds.prototype=new pn).__a=function(t){var a=this,i=ow(a.__v),l=a.l.get(t);return l[0]++,function(s){var c=function(){a.props.revealOrder?(l.push(s),X0(a,t,l)):s()};i?i(c):c()}},Ds.prototype.render=function(t){this.i=null,this.l=new Map;var a=rc(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&a.reverse();for(var i=a.length;i--;)this.l.set(a[i],this.i=[1,0,this.i]);return t.children},Ds.prototype.componentDidUpdate=Ds.prototype.componentDidMount=function(){var t=this;this.l.forEach(function(a,i){X0(t,i,a)})};var wS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,xS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,_S=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,SS=/[A-Z0-9]/g,TS=typeof document<"u",kS=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};pn.prototype.isReactComponent=!0,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(pn.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(a){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:a})}})});var I0=xe.event;xe.event=function(t){return I0&&(t=I0(t)),t.persist=function(){},t.isPropagationStopped=function(){return this.cancelBubble},t.isDefaultPrevented=function(){return this.defaultPrevented},t.nativeEvent=t};var NS={configurable:!0,get:function(){return this.class}},Q0=xe.vnode;xe.vnode=function(t){typeof t.type=="string"&&(function(a){var i=a.props,l=a.type,s={},c=l.indexOf("-")==-1;for(var d in i){var m=i[d];if(!(d==="value"&&"defaultValue"in i&&m==null||TS&&d==="children"&&l==="noscript"||d==="class"||d==="className")){var p=d.toLowerCase();d==="defaultValue"&&"value"in i&&i.value==null?d="value":d==="download"&&m===!0?m="":p==="translate"&&m==="no"?m=!1:p[0]==="o"&&p[1]==="n"?p==="ondoubleclick"?d="ondblclick":p!=="onchange"||l!=="input"&&l!=="textarea"||kS(i.type)?p==="onfocus"?d="onfocusin":p==="onblur"?d="onfocusout":_S.test(d)&&(d=p):p=d="oninput":c&&xS.test(d)?d=d.replace(SS,"-$&").toLowerCase():m===null&&(m=void 0),p==="oninput"&&s[d=p]&&(d="oninputCapture"),s[d]=m}}l=="select"&&(s.multiple&&Array.isArray(s.value)&&(s.value=rc(i.children).forEach(function(g){g.props.selected=s.value.indexOf(g.props.value)!=-1})),s.defaultValue!=null&&(s.value=rc(i.children).forEach(function(g){g.props.selected=s.multiple?s.defaultValue.indexOf(g.props.value)!=-1:s.defaultValue==g.props.value}))),i.class&&!i.className?(s.class=i.class,Object.defineProperty(s,"className",NS)):i.className&&(s.class=s.className=i.className),a.props=s})(t),t.$$typeof=wS,Q0&&Q0(t)};var Z0=xe.__r;xe.__r=function(t){Z0&&Z0(t),t.__c};var W0=xe.diffed;xe.diffed=function(t){W0&&W0(t);var a=t.props,i=t.__e;i!=null&&t.type==="textarea"&&"value"in a&&a.value!==i.value&&(i.value=a.value==null?"":a.value)};var CS=0;function h(t,a,i,l,s,c){a||(a={});var d,m,p=a;if("ref"in p)for(m in p={},a)m=="ref"?d=a[m]:p[m]=a[m];var g={type:t,props:p,key:i,ref:d,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--CS,__i:-1,__u:0,__source:s,__self:c};if(typeof t=="function"&&(d=t.defaultProps))for(m in d)p[m]===void 0&&(p[m]=d[m]);return xe.vnode&&xe.vnode(g),g}let Cl=null;const ES=()=>{if(Cl!==null)return Cl;try{Cl=window.matchMedia("(color-gamut: p3)").matches}catch{Cl=!1}return Cl};ES();const AS=["/components/ui/","/packages/ui/","/design-system/","/design-systems/","/primitives/"],zS=5e3,MS=8e3,OS=1e4,RS=.5,sw=["id","class","aria-label","data-testid","role","name","title"],DS=new Set(["id","data-testid","aria-label","href","src","alt","type","name","placeholder","role","for","action","method","title","disabled","checked","readonly","required","selected","open"]),cw=new Set(["a","button","code","label","option","pre","summary","text"]),$S=new Set(["script","style","template","noscript"]),uw=new Set("display.position.top.right.bottom.left.z-index.overflow.overflow-x.overflow-y.width.height.min-width.min-height.max-width.max-height.margin-top.margin-right.margin-bottom.margin-left.padding-top.padding-right.padding-bottom.padding-left.flex-direction.flex-wrap.justify-content.align-items.align-self.align-content.flex-grow.flex-shrink.flex-basis.order.gap.row-gap.column-gap.grid-template-columns.grid-template-rows.grid-template-areas.font-family.font-size.font-weight.font-style.line-height.letter-spacing.text-align.text-decoration-line.text-decoration-style.text-transform.text-overflow.text-shadow.white-space.word-break.overflow-wrap.vertical-align.color.background-color.background-image.background-position.background-size.background-repeat.border-top-width.border-right-width.border-bottom-width.border-left-width.border-top-style.border-right-style.border-bottom-style.border-left-style.border-top-color.border-right-color.border-bottom-color.border-left-color.border-top-left-radius.border-top-right-radius.border-bottom-left-radius.border-bottom-right-radius.box-shadow.opacity.transform.filter.backdrop-filter.object-fit.object-position".split(".")),Pl=t=>typeof t=="object"&&!!t&&"nodeType"in t&&t.nodeType===Node.ELEMENT_NODE,Ph=t=>{if(!t)return null;try{return t.frameElement}catch{return null}},LS=t=>Object.assign(t,{[Symbol.dispose]:t}),em="bippy-0.6.1",K0=Object.defineProperty,jS=Object.prototype.hasOwnProperty,jl=()=>{},dw=t=>{try{Function.prototype.toString.call(t).indexOf("^_^")>-1&&setTimeout(()=>{throw Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},fw=(t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!(t&&"getFiberRoots"in t);let hw=!1,J0;const ih=(t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>hw?!0:(t&&typeof t.inject=="function"&&(J0=t.inject.toString()),!!J0?.includes("(injected)")),yi=new Set,eo=new Set,US=t=>{t&&yi.add(t);let a=new Map,i=0,l={_instrumentationIsActive:!1,_instrumentationSource:em,checkDCE:dw,hasUnsupportedRendererAttached:!1,inject(s){let c=++i;return a.set(c,s),eo.add(s),l._instrumentationIsActive||(l._instrumentationIsActive=!0,yi.forEach(d=>d())),c},on:jl,onCommitFiberRoot:jl,onCommitFiberUnmount:jl,onPostCommitFiberRoot:jl,renderers:a,supportsFiber:!0,supportsFlight:!0};try{K0(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!0,enumerable:!0,get(){return l},set(d){if(d&&typeof d=="object"){let m=l.renderers;l=d,m.size>0&&(m.forEach((p,g)=>{eo.add(p),d.renderers.set(g,p)}),lh(t))}}});let s=window.hasOwnProperty,c=!1;K0(window,"hasOwnProperty",{configurable:!0,value:function(...d){try{if(!c&&d[0]==="__REACT_DEVTOOLS_GLOBAL_HOOK__")return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,c=!0,-0}catch{}return s.apply(this,d)},writable:!0})}catch{lh(t)}return l},lh=t=>{t&&yi.add(t);try{let a=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!a)return;if(!a._instrumentationSource){a.checkDCE=dw,a.supportsFiber=!0,a.supportsFlight=!0,a.hasUnsupportedRendererAttached=!1,a._instrumentationSource=em,a._instrumentationIsActive=!1;let i=fw(a);if(i||(a.on=jl),a.renderers.size){a._instrumentationIsActive=!0,yi.forEach(c=>c());return}let l=a.inject,s=ih(a);s&&!i&&(hw=!0,a.inject({scheduleRefresh(){}})&&(a._instrumentationIsActive=!0)),a.inject=c=>{let d=l(c);return eo.add(c),s&&a.renderers.set(d,c),a._instrumentationIsActive=!0,yi.forEach(m=>m()),d}}(a.renderers.size||a._instrumentationIsActive||ih())&&t?.()}catch{}},mw=()=>jS.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"),fo=t=>mw()?(lh(t),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):US(t),HS=()=>!!(typeof window<"u"&&(window.document?.createElement||window.navigator?.product==="ReactNative"));(()=>{try{HS()&&fo()}catch{}})();const tm=t=>{switch(t.tag){case 1:case 11:case 0:case 14:case 15:return!0;default:return!1}},BS=t=>!t||typeof t!="object"?!1:"pendingProps"in t&&!("containerInfo"in t);function Mi(t,a,i=!1){if(!t)return null;let l=a(t);if(l instanceof Promise)return(async()=>{if(await l===!0)return t;let c=i?t.return:t.child;for(;c;){let d=await gw(c,a,i);if(d)return d;c=i?null:c.sibling}return null})();if(l===!0)return t;let s=i?t.return:t.child;for(;s;){let c=pw(s,a,i);if(c)return c;s=i?null:s.sibling}return null}const pw=(t,a,i=!1)=>{if(!t)return null;if(a(t)===!0)return t;let l=i?t.return:t.child;for(;l;){let s=pw(l,a,i);if(s)return s;l=i?null:l.sibling}return null},gw=async(t,a,i=!1)=>{if(!t)return null;if(await a(t)===!0)return t;let l=i?t.return:t.child;for(;l;){let s=await gw(l,a,i);if(s)return s;l=i?null:l.sibling}return null},vw=t=>{let a=t;return typeof a=="function"?a:typeof a=="object"&&a?vw(a.type||a.render):null},Ni=t=>{let a=t;if(typeof a=="string")return a;if(typeof a!="function"&&!(typeof a=="object"&&a))return null;let i=a.displayName||a.name||null;if(i)return i;let l=vw(a);return l&&(l.displayName||l.name)||null},Mc=()=>{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;return!!t?._instrumentationIsActive||fw(t)||ih(t)},nm=new Set,am=t=>{let a=t.alternate;if(!a)return t;if(a.actualStartTime&&t.actualStartTime)return a.actualStartTime>t.actualStartTime?a:t;for(let i of nm){let l=Mi(i.current,s=>{if(s===t)return!0});if(l)return l}return t},FS=t=>{if(!mw())return null;let a=t;for(;a.return;)a=a.return;let i=bw.get(a.stateNode);return i===void 0?null:fo().renderers?.get(i)??null},oh=new Set,sh=new Set,ch=new Set,uh=new Set,fi=new WeakMap,bw=new WeakMap,VS=t=>{let a=fi.get(t)??{};if(fi.set(t,a),!a.onCommitFiberRoot||t.onCommitFiberRoot!==a.onCommitFiberRoot){let i=t.onCommitFiberRoot,l=(s,c,d)=>{if(i?.(s,c,d),fi.get(t)?.onCommitFiberRoot===l){nm.add(c),bw.set(c,s);for(let m of oh)m(s,c,d)}};a.onCommitFiberRoot=l,t.onCommitFiberRoot=l}if(!a.onCommitFiberUnmount||t.onCommitFiberUnmount!==a.onCommitFiberUnmount){let i=t.onCommitFiberUnmount,l=(s,c)=>{if(i?.(s,c),fi.get(t)?.onCommitFiberUnmount===l)for(let d of sh)d(s,c)};a.onCommitFiberUnmount=l,t.onCommitFiberUnmount=l}if(!a.onPostCommitFiberRoot||t.onPostCommitFiberRoot!==a.onPostCommitFiberRoot){let i=t.onPostCommitFiberRoot,l=(s,c)=>{if(i?.(s,c),fi.get(t)?.onPostCommitFiberRoot===l)for(let d of ch)d(s,c)};a.onPostCommitFiberRoot=l,t.onPostCommitFiberRoot=l}if(!a.onScheduleFiberRoot||t.onScheduleFiberRoot!==a.onScheduleFiberRoot){let i=t.onScheduleFiberRoot,l=(s,c,d)=>{if(i?.(s,c,d),fi.get(t)?.onScheduleFiberRoot===l)for(let m of uh)m(s,c,d)};a.onScheduleFiberRoot=l,t.onScheduleFiberRoot=l}},yw=t=>{let a=fo(t.onActive);a._instrumentationSource=t.name??em,VS(a);let{onActive:i,onCommitFiberRoot:l,onCommitFiberUnmount:s,onPostCommitFiberRoot:c,onScheduleFiberRoot:d}=t;return l&&oh.add(l),s&&sh.add(s),c&&ch.add(c),d&&uh.add(d),LS(()=>{i&&yi.delete(i),l&&oh.delete(l),s&&sh.delete(s),c&&ch.delete(c),d&&uh.delete(d)})},P0=new Set,qS=t=>t.startsWith("__reactContainer$")||t.startsWith("__reactInternalInstance$")||t.startsWith("__reactFiber"),YS=t=>{let a=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(a?.renderers)for(let i of a.renderers.values())try{let l=i.findFiberByHostInstance?.(t);if(l)return l}catch{}if(typeof t=="object"&&t){if("_reactRootContainer"in t)return t._reactRootContainer?._internalRoot?.current?.child;let i=t.__internalInstanceHandle??t._internalInstanceHandle;if(BS(i))return i;let l=t;for(let s of P0){let c=l[s];if(c)return c}for(let s of Object.keys(l))if(qS(s))return P0.add(s),l[s]||null;for(let s of nm){if(FS(s.current)?.findFiberByHostInstance)continue;let c=Mi(s.current,d=>d.stateNode===t);if(c)return c}}return null},GS=new WeakMap,Tr=t=>GS.get(t)??null,Oc=t=>Tr(t)?.getFiber()??YS(t),kr=t=>{let a=t.ownerDocument?.defaultView;return!!(a&&t instanceof a.ShadowRoot)};var rm=class extends Error{constructor(a,i){super(a,i),this.name="ReactGrabError"}},XS=class extends rm{constructor(){super("Can't generate CSS selector for non-element node type."),this.name="NonElementNodeError"}},IS=class extends rm{constructor(a){super(`Timeout: Can't find a unique selector after ${a}ms`),this.name="SelectorTimeoutError",this.timeoutMs=a}},QS=class extends rm{constructor(){super("Selector was not found."),this.name="SelectorNotFoundError"}};const ww=t=>Tr(t)?.getTagName()??(t.tagName||"").toLowerCase(),xw=t=>typeof t=="object"&&!!t&&"nodeType"in t&&t.nodeType===9,ZS=t=>{if(t.assignedSlot)return t.assignedSlot;if(t.parentElement)return t.parentElement;let a=t.getRootNode();return kr(a)?a.host:xw(a)?Ph(a.defaultView):null},_w=typeof window<"u",WS=t=>0,KS=t=>{},JS=_w?(Object.getOwnPropertyDescriptor(Window.prototype,"requestAnimationFrame")?.value??window.requestAnimationFrame).bind(window):WS,eb=_w?(Object.getOwnPropertyDescriptor(Window.prototype,"cancelAnimationFrame")?.value??window.cancelAnimationFrame).bind(window):KS;new Set("A.ABBR.B.BDI.BDO.BR.CITE.CODE.DATA.DEL.DFN.EM.I.INS.KBD.MARK.Q.S.SAMP.SMALL.SPAN.STRONG.SUB.SUP.TIME.U.VAR.WBR".split("."));const PS=(t,a)=>{if(t.length!==0)throw t.length===1?t[0]:AggregateError(t,a)},cf=new Set,dh=new Set;let eT=!1;const tT=(t,a)=>{if(dh.has(t))try{t.unfreeze()}catch(i){a.push(i)}finally{dh.delete(t)}},nT=t=>{cf.add(t);try{eT&&t.isConnected()&&(t.freeze(),dh.add(t))}catch(a){throw cf.delete(t),a}return()=>{let a=[];tT(t,a),cf.delete(t),PS(a,"Unregistering renderer freeze failed")}},sc=new WeakMap,cc=new WeakMap,uc=new WeakMap,Dn=t=>typeof t=="object"&&!!t,aT=t=>typeof t=="object"&&!!t||typeof t=="function",xr=(t,a)=>typeof t[a]=="function",rT=t=>Dn(t)&&xr(t,"clone")&&xr(t,"premultiply"),iT=t=>Dn(t)&&t.isObject3D===!0&&typeof t.uuid=="string"&&typeof t.name=="string"&&typeof t.type=="string"&&typeof t.visible=="boolean"&&rT(t.matrixWorld)&&xr(t,"updateWorldMatrix"),lT=t=>Dn(t)&&t.isCamera===!0,oT=t=>iT(t)&&t.isScene===!0&&Array.isArray(t.children),sT=t=>Dn(t)&&typeof t.tagName=="string"&&t.tagName.toLowerCase()==="canvas"&&xr(t,"getContext"),cT=t=>Dn(t)&&sT(t.domElement),uT=t=>Dn(t)&&xr(t,"set"),dT=t=>Dn(t)&&xr(t,"setFromCamera")&&xr(t,"intersectObjects"),tb=t=>Dn(t)&&cT(t.gl)&&oT(t.scene)&&lT(t.camera)&&dT(t.raycaster)&&uT(t.pointer),fT=t=>t==="always"||t==="demand"||t==="never",nb=t=>Dn(t)&&typeof t.elapsedTime=="number",ab=(t,a)=>{let i=t.getState();if(typeof i.setFrameloop!="function")return;let l=nb(i.clock)?i.clock.elapsedTime:null;i.setFrameloop(a);let s=t.getState().clock;l!==null&&nb(s)&&(s.elapsedTime=l)},hT=t=>{if(cc.has(t))return;let a=null,i=nT({freeze:()=>{let l=sc.get(t);if(!l)return;let s=l.getState();if(fT(s.frameloop)&&typeof s.setFrameloop=="function"){let c=s.frameloop;ab(l,"never"),a=()=>ab(l,c)}},isConnected:()=>t.isConnected,unfreeze:()=>{a?.(),a=null}});cc.set(t,i)},mT=t=>{let a=cc.get(t);a&&(cc.delete(t),a())},pT=t=>{let a=t.current.stateNode;if(!Dn(a)||!aT(a.containerInfo))return null;let i=a.containerInfo,l=Reflect.get(i,"getState");if(typeof l!="function")return null;let s=Reflect.apply(l,i,[]);return tb(s)?()=>{let c=Reflect.apply(l,i,[]);return tb(c)?c:s}:null},uf=t=>{let a=uc.get(t);a&&(uc.delete(t),sc.get(a.canvas)===a.root&&(sc.delete(a.canvas),mT(a.canvas)))},gT=t=>{let a=pT(t);if(!a){uf(t);return}let i=a().gl.domElement;if(!i.isConnected||!t.current.child){uf(t);return}let l=uc.get(t);l&&l.canvas!==i&&(uf(t),l=void 0),l?(l.root.getState=a,l.root.selectableObjects=null):(l={canvas:i,root:{getState:a,selectableObjects:null}},uc.set(t,l)),sc.set(i,l.root),hT(i)};yw({name:"react-grab-three-selection",onCommitFiberRoot:(t,a)=>gT(a)});let Yl=null,Ul=!1;const df=new Map,fh=new WeakSet,vT=new WeakSet,hh=new WeakMap,rb=new Map,ib=new Map,bT=t=>{if(Yl===t&&(Ul=!0),fh.has(t))return!0;if(Yl===t){let a=(hh.get(t)??0)+1;return hh.set(t,a),a<4?!1:(fh.add(t),!0)}return!1};typeof window<"u"&&(window.requestAnimationFrame=t=>(bT(t),JS(i=>{let l=Yl,s=Ul;Yl=t,Ul=!1;try{t(i)}finally{let c=Ul;Yl=l,Ul=s,!c&&!vT.has(t)&&(fh.delete(t),hh.delete(t))}})),window.cancelAnimationFrame=t=>{if(df.has(t)){df.delete(t);return}let a=ib.get(t);if(a!==void 0){eb(a.nativeId),ib.delete(t);return}let i=rb.get(t);if(i!==void 0){df.delete(i),rb.delete(t);return}eb(t)});const yT=new WeakMap;yw({name:"react-grab-freeze-updates",onCommitFiberRoot:(t,a)=>{let i=fo().renderers.get(t);i&&yT.set(a,i)}});const lb=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,wT=["rsc://","file:///","webpack-internal://","webpack://","node:","turbopack://","metro://","/app-pages-browser/","/(app-pages-browser)/"],xT=["rsc://","about://React/"],_T=["<anonymous>","eval",""],Sw=/\.(jsx|tsx|ts|js)$/,ST=/(\.min|bundle|chunk|vendor|vendors|runtime|polyfill|polyfills)\.(js|mjs|cjs)$|(chunk|bundle|vendor|vendors|runtime|polyfill|polyfills|framework|app|main|index)[-_.][A-Za-z0-9_-]{4,}\.(js|mjs|cjs)$|[\da-f]{8,}\.(js|mjs|cjs)$|[-_.][\da-f]{20,}\.(js|mjs|cjs)$|\/dist\/|\/build\/|\/.next\/|\/out\/|\/node_modules\/|\.webpack\.|\.vite\.|\.turbopack\./i,TT=/^\?[\w~.-]+(?:=[^&#]*)?(?:&[\w~.-]+(?:=[^&#]*)?)*$/,kT=/\(at [^)]+\)$/,Tw=["react_stack_bottom_frame","react-stack-bottom-frame"],NT=/(^|@)\S+:\d+/,CT=/^\s*at .*(\S+:\d+|\(native\))/m,ET=/^(eval@)?(\[native code\])?$/,Rc=(t,a)=>{{let i=t.split(`
`),l=[];for(let s of i)if(/^\s*at\s+/.test(s)){let c=AT(s,void 0)[0];c&&l.push(c)}else if(/^\s*in\s+/.test(s)){let c=s.replace(/^\s*in\s+/,"").replace(/\s*\(at .*\)$/,"");l.push({functionName:c,source:s})}else if(s.match(NT)){let c=zT(s,void 0)[0];c&&l.push(c)}return im(l,a)}},kw=t=>{if(!t.includes(":"))return[t,void 0,void 0];let a=t.startsWith("(")&&/:\d+\)$/.test(t)?t.slice(1,-1):t,i=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(a);return i?[i[1],i[2]||void 0,i[3]||void 0]:[a,void 0,void 0]},im=(t,a)=>a&&a.slice!=null?Array.isArray(a.slice)?t.slice(a.slice[0],a.slice[1]):t.slice(0,a.slice):t,AT=(t,a)=>im(t.split(`
`).filter(i=>!!i.match(CT)),a).map(i=>{let l=i;l.includes("(eval ")&&(l=l.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));let s=l.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),c=s.match(/ (\(.+\)$)/);s=c?s.replace(c[0],""):s;let d=kw(c?c[1]:s);return{functionName:c&&s||void 0,fileName:["eval","<anonymous>"].includes(d[0])?void 0:d[0],lineNumber:d[1]?+d[1]:void 0,columnNumber:d[2]?+d[2]:void 0,source:l}}),zT=(t,a)=>im(t.split(`
`).filter(i=>!i.match(ET)),a).map(i=>{let l=i;if(l.includes(" > eval")&&(l=l.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),!l.includes("@")&&!l.includes(":"))return{functionName:l};{let s=/(([^\n\r"\u2028\u2029]*".[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*(?:@[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*)*(?:[\n\r\u2028\u2029][^@]*)?)?[^@]*)@/,c=l.match(s),d=c&&c[1]?c[1]:void 0,m=kw(l.replace(s,""));return{functionName:d,fileName:m[0],lineNumber:m[1]?+m[1]:void 0,columnNumber:m[2]?+m[2]:void 0,source:l}}}),ob=new WeakMap,MT=t=>Tw.some(a=>t.includes(a)),OT=t=>{let a=t.getFunctionName?.()??"";if(a)return a;let i=t.getTypeName?.()??"",l=t.getMethodName?.()??"";return i&&l?`${i}.${l}`:l},RT=t=>{let a=[];for(let i=1;i<t.length;i++){let l=t[i],s=OT(l);if(MT(s))return{frames:a,isTrusted:!0};if(l.isNative?.()){a.push({functionName:s||void 0});continue}let c=l.getScriptNameOrSourceURL?.()??"";!c&&l.isEval?.()&&(c=l.getEvalOrigin?.()??""),a.push({functionName:s&&s!=="<anonymous>"?s:void 0,fileName:c&&c!=="<anonymous>"?c:void 0,lineNumber:l.getLineNumber?.()??void 0,columnNumber:l.getColumnNumber?.()??void 0,enclosingLineNumber:l.getEnclosingLineNumber?.()??void 0,enclosingColumnNumber:l.getEnclosingColumnNumber?.()??void 0,source:`    at ${l.toString()}`})}return{frames:a,isTrusted:!1}},DT=t=>{let a=-1;for(let i of Tw)if(a=t.indexOf(i),a!==-1)break;return{frames:Rc(a===-1?t:t.slice(0,t.lastIndexOf(`
`,a))).slice(1),isTrusted:a!==-1}},dc=t=>{let a=ob.get(t);if(a)return a;let i=null,l=(m,p)=>{i=RT(p);let g=`${m.name||"Error"}: ${m.message||""}`;for(let b of p)g+=`
    at ${b.toString()}`;return g},s=Error.prepareStackTrace;Error.prepareStackTrace=l;let c;try{c=String(t.stack)}finally{Error.prepareStackTrace=s}let d=i??DT(c);return ob.set(t,d),d};var $T=44,sb="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",LT=new Uint8Array(64),Nw=new Uint8Array(128);for(let t=0;t<sb.length;t++){let a=sb.charCodeAt(t);LT[t]=a,Nw[a]=t}function El(t,a){let i=0,l=0,s=0;do s=Nw[t.next()],i|=(s&31)<<l,l+=5;while(s&32);let c=i&1;return i>>>=1,c&&(i=-2147483648|-i),a+i}function cb(t,a){return t.pos>=a?!1:t.peek()!==$T}var jT=class{constructor(t){this.pos=0,this.buffer=t}next(){return this.buffer.charCodeAt(this.pos++)}peek(){return this.buffer.charCodeAt(this.pos)}indexOf(t){let{buffer:a,pos:i}=this,l=a.indexOf(t,i);return l===-1?a.length:l}};function Cw(t){let{length:a}=t,i=new jT(t),l=[],s=0,c=0,d=0,m=0,p=0;do{let g=i.indexOf(";"),b=[],w=!0,y=0;for(s=0;i.pos<g;){let x;s=El(i,s),s<y&&(w=!1),y=s,cb(i,g)?(c=El(i,c),d=El(i,d),m=El(i,m),cb(i,g)?(p=El(i,p),x=[s,c,d,m,p]):x=[s,c,d,m]):x=[s],b.push(x),i.pos++}w||UT(b),l.push(b),i.pos=g+1}while(i.pos<=a);return l}function UT(t){t.sort(HT)}function HT(t,a){return t[0]-a[0]}const Ew=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,Aw=/^data:application\/json[^,]+base64,/,BT=/(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^*]+?)[ \t]*(?:\*\/)[ \t]*$)/,ff=new Map,hf=new Map,ub=(t,a,i,l,s)=>{if(i<0||i>=t.length)return null;let c=t[i];if(!c||c.length===0)return null;let d=null,m=0,p=c.length-1;for(;m<=p;){let x=m+p>>1;c[x][0]<=l?(d=c[x],m=x+1):p=x-1}if(!d||d.length<4)return null;let[,g,b,w]=d;if(g===void 0||b===void 0||w===void 0)return null;let y=a[g];return y?{columnNumber:w,fileName:y,lineNumber:b+1,isIgnoreListed:s?.has(g)??!1}:null},FT=(t,a,i)=>{if(t.sections){let l=a-1,s=null;for(let m of t.sections)if(l>m.offset.line||l===m.offset.line&&i>=m.offset.column)s=m;else break;if(!s)return null;let c=l-s.offset.line,d=l===s.offset.line?i-s.offset.column:i;return ub(s.map.mappings,s.map.sources,c,d,s.map.ignoredSourceIndices)}return ub(t.mappings,t.sources,a-1,i,t.ignoredSourceIndices)},VT=(t,a)=>{let i,l=a.length;for(;l>0&&!i;){let c=a.lastIndexOf(`
`,l-1)+1,d=a.slice(c,l).match(BT);d&&(i=d[1]||d[2]),l=c-1}if(!i)return null;let s=Ew.test(i);if(!(Aw.test(i)||s||i.startsWith("/"))){let c=t.split("/");c[c.length-1]=i,i=c.join("/")}return i},zw=t=>{let a=t.ignoreList??t.x_google_ignoreList;return Array.isArray(a)&&a.length>0?new Set(a):void 0},qT=t=>({file:t.file,ignoredSourceIndices:zw(t),mappings:Cw(t.mappings),names:t.names,sourceRoot:t.sourceRoot,sources:t.sources,sourcesContent:t.sourcesContent,version:3}),YT=t=>{let a=t.sections.map(({map:l,offset:s})=>({map:{...l,ignoredSourceIndices:zw(l),mappings:Cw(l.mappings)},offset:s})),i=new Set;for(let l of a)for(let s of l.map.sources)i.add(s);return{file:t.file,mappings:[],names:[],sections:a,sourceRoot:void 0,sources:Array.from(i),sourcesContent:void 0,version:3}},db=t=>{if(!t)return!1;let a=t.trim();if(!a)return!1;let i=a.match(Ew);if(!i)return!0;let l=i[0].toLowerCase();return l==="http:"||l==="https:"},GT=async(t,a=fetch)=>{if(!db(t))return null;let i=await a(t);if(!i.ok)return null;let l=await i.text();if(!l)return null;let s=VT(t,l);if(!s||!db(s)&&!Aw.test(s))return null;let c=await a(s);if(!c.ok)return null;try{let d=await c.json();return"sections"in d?YT(d):qT(d)}catch{return null}},XT=async(t,a=!0,i)=>{if(a&&ff.has(t))return ff.get(t)??null;let l=a?hf.get(t):void 0;if(l)return(await l).sourceMap;let s=GT(t,i).then(m=>({sourceMap:m,isTransientFailure:!1}),()=>({sourceMap:null,isTransientFailure:!0}));a&&hf.set(t,s);let{sourceMap:c,isTransientFailure:d}=await s;return a&&(hf.delete(t),d||ff.set(t,c)),c},lm=async(t,a=!0,i)=>await Promise.all(t.map(async l=>{if(!l.fileName)return l;let s=await XT(l.fileName,a,i);if(!s||typeof l.lineNumber!="number"||typeof l.columnNumber!="number")return l;let c=FT(s,l.lineNumber,l.columnNumber);return c?{...l,source:c.fileName&&l.source?l.source.replace(l.fileName,c.fileName):l.source,fileName:c.fileName,lineNumber:c.lineNumber,columnNumber:c.columnNumber,isIgnoreListed:c.isIgnoreListed,isSymbolicated:!0}:l})),Dc=t=>t._debugStack instanceof Error&&typeof t._debugStack?.stack=="string",IT=t=>typeof t.tag=="number",QT=t=>t._debugOwner,Mw=t=>{let a=null;if(Mi(t,s=>{if(s===t)return!1;let c=s._debugOwner;return(c===t||t.alternate!==null&&c===t.alternate)&&s._debugStack instanceof Error?(a=s._debugStack,!0):!1}),!a)return null;let{frames:i,isTrusted:l}=dc(a);if(!l)return null;for(let s=i.length-1;s>=0;s--){let c=i[s];if(c.fileName)return{...c,lineNumber:c.enclosingLineNumber||c.lineNumber,columnNumber:c.enclosingColumnNumber||c.columnNumber}}return null},ZT=()=>{let t=fo();for(let a of[...Array.from(eo),...Array.from(t.renderers.values())]){let i=a.currentDispatcherRef;if(i&&typeof i=="object")return"H"in i?i.H:i.current}return null},fb=t=>{for(let a of eo){let i=a.currentDispatcherRef;i&&typeof i=="object"&&("H"in i?i.H=t:i.current=t)}},ta=t=>`
    in ${t}`,WT=(t,a)=>{let i=ta(t);return a&&(i+=` (at ${a})`),i};let mf=!1;const pf=new WeakMap,gf=(t,a)=>{if(!t||mf)return"";let i=pf.get(t);if(i!==void 0)return i;let l=Error.prepareStackTrace;Error.prepareStackTrace=void 0,mf=!0;let s=ZT();fb(null);let c=console.error,d=console.warn;console.error=()=>{},console.warn=()=>{};try{let g={DetermineComponentFrameRoot(){let y;try{if(a){let x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(T){y=T}Reflect.construct(t,[],x)}else{try{x.call()}catch(T){y=T}t.call(x.prototype)}}else{try{throw Error()}catch(T){y=T}let x=t();x&&typeof x.catch=="function"&&x.catch(()=>{})}}catch(x){if(x instanceof Error&&y instanceof Error&&typeof x.stack=="string")return[x.stack,y.stack]}return[null,null]}};g.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot",Object.getOwnPropertyDescriptor(g.DetermineComponentFrameRoot,"name")?.configurable&&Object.defineProperty(g.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});let[b,w]=g.DetermineComponentFrameRoot();if(b&&w){let y=b.split(`
`),x=w.split(`
`),T=0,C=0;for(;T<y.length&&!y[T].includes("DetermineComponentFrameRoot");)T++;for(;C<x.length&&!x[C].includes("DetermineComponentFrameRoot");)C++;if(T===y.length||C===x.length)for(T=y.length-1,C=x.length-1;T>=1&&C>=0&&y[T]!==x[C];)C--;for(;T>=1&&C>=0;T--,C--)if(y[T]!==x[C]){if(T!==1||C!==1)do if(T--,C--,C<0||y[T]!==x[C]){let M=`
${y[T].replace(" at new "," at ")}`,k=Ni(t);return k&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",k)),pf.set(t,M),M}while(T>=1&&C>=0);break}}}finally{mf=!1,Error.prepareStackTrace=l,fb(s),console.error=c,console.warn=d}let m=t?Ni(t):"",p=m?ta(m):"";return pf.set(t,p),p},KT=(t,a)=>{let i=t.tag,l="";switch(i){case 28:l=ta("Activity");break;case 1:l=gf(t.type,!0);break;case 11:l=gf(t.type.render,!1);break;case 0:case 15:l=gf(t.type,!1);break;case 5:case 26:case 27:l=ta(t.type);break;case 16:l=ta("Lazy");break;case 13:l=t.child!==a&&a!==null?ta("Suspense Fallback"):ta("Suspense");break;case 19:l=ta("SuspenseList");break;case 30:l=ta("ViewTransition");break;default:return""}return l},JT=t=>{try{let a="",i=t,l=null;do{a+=KT(i,l);let s=i._debugInfo;if(s&&Array.isArray(s))for(let c=s.length-1;c>=0;c--){let d=s[c];typeof d.name=="string"&&(a+=WT(d.name,d.env))}l=i,i=i.return}while(i);return a}catch(a){return a instanceof Error?`
Error generating stack: ${a.message}
${a.stack}`:""}},Ow=t=>{let a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;let i=t;if(!i)return"";Error.prepareStackTrace=a,i.startsWith(`Error: react-stack-top-frame
`)&&(i=i.slice(29));let l=i.indexOf(`
`);l!==-1&&(i=i.slice(l+1));let s=Math.max(i.indexOf("react_stack_bottom_frame"),i.indexOf("react-stack-bottom-frame"));if(s!==-1&&(s=i.lastIndexOf(`
`,s)),s!==-1)i=i.slice(0,s);else return"";return i},PT=t=>!!(t.functionName&&t.fileName&&Rw(t.fileName)),ek=(t,a)=>t.fileName===a.fileName&&t.lineNumber===a.lineNumber&&t.columnNumber===a.columnNumber,tk=t=>{let a=new Map;for(let i of t)for(let l of i.stackFrames){if(!PT(l))continue;let s=l.functionName,c=a.get(s)??[];c.some(d=>ek(d,l))||(c.push(l),a.set(s,c))}return a},nk=(t,a,i)=>{if(!t.functionName)return{...t,isServer:!0};let l=a.get(t.functionName);if(!l||l.length===0)return{...t,isServer:!0};let s=i.get(t.functionName)??0,c=l[s%l.length];return i.set(t.functionName,s+1),{...t,isServer:!0,fileName:c.fileName,lineNumber:c.lineNumber,columnNumber:c.columnNumber,source:t.source?.replace("(at Server)",`(${c.fileName}:${c.lineNumber}:${c.columnNumber})`)}},Rw=t=>xT.some(a=>t.startsWith(a)),ak=t=>!t.isServer&&t.fileName&&Rw(t.fileName)?{...t,isServer:!0}:t,rk=t=>{let a=[],i=t;for(;i;)if(IT(i)){let l=i;if(i=QT(l),i&&Dc(l)){let{frames:s,isTrusted:c}=dc(l._debugStack);if(c)for(let d of s)a.push(ak(d))}}else{let l=i;if(i=l.owner,i&&l.debugStack instanceof Error)for(let s of dc(l.debugStack).frames)a.push({...s,isServer:!0})}return a},ik=t=>{let a=[];return Mi(t,i=>{if(!Dc(i))return;let l=typeof i.type=="string"?i.type:Ni(i.type)||"<anonymous>";a.push({componentName:l,stackFrames:Rc(Ow(i._debugStack?.stack))})},!0),a},Dw=async(t,a=!0,i)=>{let l=ik(t),s=Rc(JT(t)),c=tk(l),d=new Map;return lm(s.map(m=>(m.source?.includes("(at Server)")??!1)||m.source!=null&&kT.test(m.source)?nk(m,c,d):m).filter((m,p,g)=>{if(p===0)return!0;let b=g[p-1];return m.functionName!==b.functionName}),a,i)},lk=t=>!!t.fileName&&!t.isIgnoreListed,ok=async(t,a=!0,i)=>{let l=rk(t);if(l.length>0){let s=Mw(t)??{};s.functionName=Ni(t.type)??s.functionName;let c=await lm([s,...l],a,i);if(c.some((d,m)=>m>0&&lk(d)))return c}return Dw(t,a,i)},sk=t=>{let a=t._debugSource;return a?typeof a=="object"&&!!a&&"fileName"in a&&typeof a.fileName=="string"&&"lineNumber"in a&&typeof a.lineNumber=="number":!1},hb=t=>t.fileName?{fileName:t.fileName,lineNumber:t.lineNumber,columnNumber:t.columnNumber,functionName:t.functionName}:null,ck=t=>{if(!Dc(t))return null;let{frames:a,isTrusted:i}=dc(t._debugStack);if(!i)return null;for(let l of a)if(l.fileName)return l;return null},uk=async(t,a=!0,i)=>{if(sk(t))return t._debugSource||null;let l=ck(t)??Mw(t);if(l){let[c]=await lm([l],a,i),d=hb(c);if(d)return d}let s=await Dw(t,a,i);for(let c of s)if(c.fileName)return hb(c);return null},mb=t=>t.split("/").filter(Boolean).length,dk=t=>t.split("/").filter(Boolean)[0]??null,fk=t=>{let a=t.indexOf("/",1);if(a===-1||mb(t.slice(0,a))!==1)return t;let i=t.slice(a);if(!Sw.test(i)||mb(i)<2)return t;let l=dk(i);return!l||l.startsWith("@")||l.length>4?t:i},$c=t=>{if(!t||_T.some(c=>c===t))return"";let a=t,i=a.startsWith("http://")||a.startsWith("https://");if(i)try{a=new URL(a).pathname}catch{}if(i&&(a=fk(a)),a.startsWith("about://React/")){let c=a.slice(14),d=c.indexOf("/"),m=c.indexOf(":");a=d!==-1&&(m===-1||d<m)?c.slice(d+1):c}let l=!0;for(;l;){l=!1;for(let c of wT)if(a.startsWith(c)){a=a.slice(c.length),c==="file:///"&&(a=`/${a.replace(/^\/+/,"")}`),l=!0;break}}if(lb.test(a)){let c=a.match(lb);c&&(a=a.slice(c[0].length))}if(a.startsWith("//")){let c=a.indexOf("/",2);a=c===-1?"":a.slice(c)}let s=a.indexOf("?");if(s!==-1){let c=a.slice(s);TT.test(c)&&(a=a.slice(0,s))}return a},hk=t=>{let a=$c(t);return!(!a||!Sw.test(a)||ST.test(a))},mk=Symbol.for("react.context");let pk=null;const gk=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render."),$n=()=>pk,fc=t=>t._currentValue,to=(t,a,i,l=null)=>{},vk=t=>{if(typeof t=="object"&&t){let a=t;if(typeof a.then=="function"){let i=a;switch(i.status){case"fulfilled":return to("Promise",i.value),i.value;case"rejected":throw i.reason}throw gk}if(a.$$typeof===mk&&"_currentValue"in a){let i=a,l=fc(i);return to("Context (use)",l,"Use",i.displayName||"Context"),l}}throw Error("An unsupported type was passed to use(): "+String(t))},bk=t=>{let a=fc(t);return to("Context",a,"Context",t.displayName||null),a},yk=t=>{let a=$n();return[a===null?typeof t=="function"?t():t:a.memoizedState,()=>{}]},wk=(t,a,i)=>{let l=$n();return[l===null?i===void 0?a:i(a):l.memoizedState,()=>{}]},xk=t=>{let a=$n(),i=a===null?{current:t}:a.memoizedState;return to("Ref",i.current),i},_k=()=>()=>{},Sk=t=>{},Tk=t=>{},kk=t=>{},Nk=t=>{typeof t=="object"&&t&&"current"in t&&t.current},Ck=(t,a)=>{to("DebugValue",typeof a=="function"?a(t):t)},Ek=t=>t,Ak=t=>{let a=$n();return a===null?t():a.memoizedState[0]},zk=(t,a)=>{let i=$n();return i===null?a():i.memoizedState},Mk=()=>{let t=$n();return[t===null?!1:t.memoizedState,()=>{}]},Ok=t=>{let a=$n();return a===null?t:a.memoizedState},Rk=()=>{let t=$n();return t===null?"":t.memoizedState},Dk=t=>[],$k=t=>{let a=$n();return[a===null?t:a.memoizedState,()=>{}]},Lk=(t,a)=>{let i,l=null;return i=a,{value:i,error:l}},$w=t=>(a,i)=>{let l=$n(),{value:s}=Lk(l,i);return[s,()=>{},!1]},jk=$w(),Uk={readContext:fc,use:vk,useCallback:Ek,useContext:bk,useEffect:kk,useImperativeHandle:Nk,useLayoutEffect:Sk,useInsertionEffect:Tk,useMemo:Ak,useReducer:wk,useRef:xk,useState:yk,useDebugValue:Ck,useDeferredValue:Ok,useTransition:Mk,useSyncExternalStore:zk,useId:Rk,useHostTransitionStatus:()=>fc({_currentValue:null}),useFormState:$w(),useActionState:jk,useOptimistic:$k,useMemoCache:Dk,useCacheRefresh:_k,useEffectEvent:t=>t};typeof Proxy>"u"||new Proxy(Uk,{get(t,a){if(Object.prototype.hasOwnProperty.call(t,a))return t[a];let i=Error("Missing method in Dispatcher: "+a);throw i.name="ReactDebugToolsUnsupportedHookError",i}});const Lw=t=>t===void 0||!Number.isFinite(t)?3:Math.max(0,Math.floor(t)),Hk=/^(?:\.\/)?\/?\([a-z][a-z0-9-]*\)\//,ho=t=>{let a=$c(t);return a=a.replace(Hk,""),a.startsWith("./")&&(a=a.slice(2)),a},Lc=t=>{try{return decodeURIComponent(t)}catch{return t}},Bk=/(?:^|[/\\])node_modules[/\\]/,Fk=/[/\\]\.vite[/\\]deps[^/\\]*[/\\]/,jw=/\.[mc]?[jt]sx?$/i,Vk=/^chunk-[A-Za-z0-9_-]+$/,qk=/[/\\]/,Yk=/^(.+?)@v?\d/,jc=t=>t.split(qk).filter(Boolean),Gk=t=>{let[a,i]=jc(t);return!a||a.startsWith(".")?null:a.startsWith("@")?i?`${a}/${i}`:null:a},Xk=t=>{let a=jc(t)[0];if(!a)return null;let i=a.replace(jw,"");if(Vk.test(i))return null;if(!i.startsWith("@"))return i;let l=i.indexOf("_");return l===-1?null:`${i.slice(0,l)}/${i.slice(l+1)}`},pb=(t,a,i)=>{let l=t.split(a);return l.length>1?i(l[l.length-1]):null},gb=t=>t?.match(Yk)?.[1]??null,Ik=t=>{let a;try{a=new URL(t)}catch{return null}if(!a.hostname)return null;let i=jc(a.pathname).map(Lc);for(let[l,s]of i.entries()){if(s.startsWith("@")){let d=gb(i[l+1]);if(d)return`${s}/${d}`;continue}let c=gb(s);if(c)return c}return null},Qk=t=>pb(t,Fk,Xk)??pb(t,Bk,Gk),Zk=t=>{if(!t)return null;let a=$c(t);return a&&(Qk(Lc(a))||Ik(t))||null},Wk=/^@[A-Za-z0-9][A-Za-z0-9._-]*$/,Kk=/^[A-Za-z0-9][A-Za-z0-9._-]*$/,Jk=new Set(["app","web","website","frontend","client","src"]),Pk=new Set(["app","src","components","pages","features","modules","hooks","lib","utils","ui","shared","common","core","styles","assets"]),eN=t=>{let a=t;for(;a.startsWith("../")||a.startsWith("./");)a=a.slice(a.startsWith("../")?3:2);return a},tN=t=>{let a=eN(Lc($c(t)));if(a.startsWith("/"))return null;let[i,l,...s]=jc(a);return!i||!l||s.length===0||!Wk.test(i)||Pk.has(i.slice(1))||!Kk.test(l)||jw.test(l)||Jk.has(l)?null:`${i}/${l}`},nN=t=>t?Zk(t)??tN(t):null,hc=t=>{if(!t)return{origin:"unknown",packageName:null};let a=nN(t);return a?{origin:"package",packageName:a}:hk(t)?{origin:"app",packageName:null}:{origin:"unknown",packageName:null}},aN=new Set(["role","name","aria-label","rel","href"]),Gl=t=>{if(!/^[a-z-]{3,}$/i.test(t))return!1;let a=t.split(/-|[A-Z]/);for(let i of a)if(i.length<=2||/[^aeiou]{4,}/i.test(i))return!1;return!0},rN=(t,a)=>{let i=aN.has(t)||t.startsWith("data-")&&Gl(t),l=Gl(a)&&a.length<100||a.startsWith("#")&&Gl(a.slice(1));return i&&l},mh=t=>{let a=t[0].name;for(let i=1;i<t.length;i++)a=`${t[i].name} > ${a}`;return a},vb=t=>{let a=0;for(let i of t)a+=i.penalty;return a},bb=(t,a)=>vb(t)-vb(a),ph=(t,a)=>{let i=t.parentNode;if(!i)return;let l=i.firstChild;if(!l)return;let s=0;for(;l&&(Pl(l)&&(a===void 0||l.tagName.toLowerCase()===a)&&s++,l!==t);)l=l.nextSibling;return s},iN=(t,a)=>t==="html"?"html":`${t}:nth-child(${a})`,Uw=(t,a)=>t==="html"?"html":`${t}:nth-of-type(${a})`,lN=(t,a)=>{let i=[],l=t.getAttribute("id"),s=t.tagName.toLowerCase();l&&Gl(l)&&i.push({name:`#${CSS.escape(l)}`,penalty:0});for(let m of t.classList)Gl(m)&&i.push({name:`.${CSS.escape(m)}`,penalty:1});for(let m of t.attributes)a(m.name,m.value)&&i.push({name:`[${CSS.escape(m.name)}="${CSS.escape(m.value)}"]`,penalty:2});i.push({name:s,penalty:5});let c=ph(t,s);c!==void 0&&i.push({name:Uw(s,c),penalty:10});let d=ph(t);return d!==void 0&&i.push({name:iN(s,d),penalty:50}),i},gh=(t,a=OS,i=[])=>{if(a<=0)return[];if(t.length===0)return[i];let l=[];for(let s of t[0]){let c=a-l.length;if(c<=0)break;l.push(...gh(t.slice(1),c,[...i,s]))}return l},oN=(t,a)=>{let i=a.getRootNode();return kr(i)?i:xw(t)?t:t.ownerDocument},vh=(t,a)=>a.querySelectorAll(mh(t)).length===1,sN=(t,a)=>{let i=t,l=[];for(;i&&i!==a;){let s=i.tagName.toLowerCase(),c=ph(i,s);if(c===void 0)return;l.push({name:Uw(s,c),penalty:10}),i=i.parentElement}return vh(l,a)?l:void 0},cN=(t,a,i,l)=>{if(t.nodeType!==Node.ELEMENT_NODE)throw new XS;if(t.tagName.toLowerCase()==="html")return"html";let s=oN(a,t),c=Date.now(),d=[],m=t,p=0,g;for(;m&&m!==s&&!g;)if(d.push(lN(m,l)),m=m.parentElement,p++,p>=3){let b=gh(d);b.sort(bb);for(let w of b){if(Date.now()-c>i){let y=sN(t,s);if(!y)throw new IS(i);return mh(y)}if(vh(w,s)){g=w;break}}}if(!g&&p<3){let b=gh(d);b.sort(bb);for(let w of b){if(Date.now()-c>i)break;if(vh(w,s)){g=w;break}}}if(!g)throw new QS;return mh(g)},uN=/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i,dN=/:r[a-z0-9]+:/i,fN=/_r_[a-z0-9]+_(?:$|-)/i,hN=/«r[a-z0-9]+»/i,mN=/^(?:downshift-\d+(?:-|$)|headlessui-[a-z-]+-\d+(?:-|$)|mui-\d+(?:-|$)|radix-\d+(?:-|$)|react-aria-\d+(?:-|$)|react-select-\d+(?:-|$))/i,pN=/^ember\d+$/i,gN=/^\d+$/,Hw=t=>t.length>0&&t.length<=120&&!dN.test(t)&&!uN.test(t)&&!fN.test(t)&&!hN.test(t)&&!mN.test(t)&&!pN.test(t)&&!gN.test(t),om=new Set(["data-testid","data-test-id","data-test","data-cy","data-qa","aria-label","href","src","role","name","title","alt"]),Bw=new Set(["button","link","checkbox","radio","switch","tab","menuitem","option","textbox","combobox","slider","spinbutton"]),Fw=t=>t.ownerDocument.body??t.ownerDocument.documentElement,vN=t=>t.length>0&&t.length<=120,Vw=(t,a)=>om.has(t)&&vN(a)&&(t!=="role"||a.split(/\s+/).some(i=>Bw.has(i))),vf=(t,a)=>{try{let i=t.getRootNode(),l=(kr(i)?i:t.ownerDocument).querySelectorAll(a);return l.length===1&&l[0]===t}catch{return!1}},qw=t=>{let a=t.getAttribute("id"),i=null;if(a){let l=`#${CSS.escape(a)}`;if(vf(t,l)){if(Hw(a))return{selector:l,isSemantic:!0};i=l}}for(let l of om){let s=t.getAttribute(l);if(!s||!Vw(l,s))continue;let c=`[${l}=${JSON.stringify(s)}]`;if(vf(t,c))return{selector:c,isSemantic:!0};let d=`${t.tagName.toLowerCase()}${c}`;if(vf(t,d))return{selector:d,isSemantic:!0}}return i?{selector:i,isSemantic:!1}:null},bN=t=>{let a=[],i=t.getRootNode(),l=kr(i)?i:Fw(t),s=t;for(;s;){let c=s.getAttribute("id");if(c){a.unshift(`#${CSS.escape(c)}`);break}let d=s.parentNode;if(!d){a.unshift(s.tagName.toLowerCase());break}let m=Array.from(d.children).indexOf(s)+1;if(a.unshift(`${s.tagName.toLowerCase()}:nth-child(${m})`),d===l){Pl(l)&&a.unshift(l.tagName.toLowerCase());break}s=Pl(d)?d:null}return a.join(" > ")},yN=t=>{let a=qw(t);if(a)return a;try{let i=cN(t,Fw(t),200,(l,s)=>rN(l,s)||Vw(l,s));if(i)return{selector:i,isSemantic:!1}}catch{}return{selector:bN(t),isSemantic:!1}},mc=t=>{let a=Tr(t);if(a)return{selector:a.getSelector(),isSemantic:!0};let i=qw(t);if(!i?.isSemantic)return null;let l=t.getRootNode();if(kr(l)){let d=mc(l.host);return d?{selector:`${d.selector} >>> ${i.selector}`,isSemantic:!0}:null}let s=Ph(t.ownerDocument.defaultView);if(!s)return i;let c=mc(s);return c?{selector:`${c.selector} >>iframe>> ${i.selector}`,isSemantic:!0}:null},bh=t=>{let a=Tr(t);if(a)return{selector:a.getSelector(),isSemantic:!0};let i=yN(t),l=t.getRootNode();if(kr(l)){let d=bh(l.host);return{selector:`${d.selector} >>> ${i.selector}`,isSemantic:d.isSemantic&&i.isSemantic}}let s=Ph(t.ownerDocument.defaultView);if(!s)return i;let c=bh(s);return{selector:`${c.selector} >>iframe>> ${i.selector}`,isSemantic:c.isSemantic&&i.isSemantic}},wN=[...Array.from(om).filter(t=>t!=="role").map(t=>`[${t}]`),...Array.from(Bw).map(t=>`[role~="${t}"]`)].join(","),xN=["button","input","select","textarea"].join(","),Yw=t=>{let a=t.getAttribute("id");return!!(a&&Hw(a)||t.matches(wN))},_N=t=>Yw(t)||t.matches(xN),SN=t=>{let{body:a,documentElement:i}=t.ownerDocument;if(t===a||t===i)return!0;if(!a)return!1;let l=a.getElementsByTagName("*").length;return l===0?!1:t.getElementsByTagName("*").length/l>=RS},Gw=(t,a)=>{let i=t.getRootNode(),l=t;for(;l;){let s=_N(l),c=s&&SN(l);if(s){if(c&&l!==t)return t;if(!a||a(l)||c||!Yw(l)&&l===t)return l}let d=ZS(l);l=d?.getRootNode()===i?d:null}return t},TN=t=>{if(Tr(t))return mc(t);let a=null;return Gw(t,i=>{let l=mc(i);return l?(a=l,!0):!1}),a},kN=[/\/assets\/[^/?#]+-[a-z0-9_-]{6,}\.(?:c|m)?js(?:[?#]|$)/,/\/_next\/static\/.*\.(?:c|m)?js(?:[?#]|$)/,/\/static\/chunks\/.*\.(?:c|m)?js(?:[?#]|$)/],Xw=t=>{if(!t)return!1;let a=`/${ho(t)}`.toLowerCase();return kN.some(i=>i.test(a))},NN=t=>{if(!t)return!1;let a=`/${ho(t)}/`.toLowerCase();return AS.some(i=>a.includes(i))};let yb;const wb=(t=!1)=>{let a=new URL(document.baseURI);return Array.from(document.scripts).some(i=>{if(!i.src)return!1;try{let l=new URL(i.src,a);return(t||l.origin===a.origin)&&l.pathname.includes("/_next/static/")}catch{return!1}})},CN=()=>Array.from(document.scripts).some(t=>t.textContent?.includes("self.__next_f.push")),Oi=t=>(yb??=typeof document<"u"&&!!(document.getElementById("__NEXT_DATA__")||document.querySelector("nextjs-portal")||wb()||CN()&&wb(!0)),yb),Iw=t=>t.map(a=>`
  in ${a}`).join("");let $s;const EN=()=>{if($s!==void 0)return $s;let t=document.querySelector('script[src*="/_next/"]')?.src,a=t?new URL(t).pathname:"",i=a.indexOf("/_next/");return $s=i>0?a.slice(0,i):"",$s},Qw=["about://React/","rsc://React/"],AN=t=>Qw.some(a=>t.startsWith(a)),zN=t=>{for(let a of Qw){if(!t.startsWith(a))continue;let i=t.indexOf("/",a.length);if(i===-1)continue;let l=i+1,s=t.lastIndexOf("?");return Lc(s>l?t.slice(l,s):t.slice(l))}return t},MN=t=>{if(typeof t!="object"||!t||!("status"in t)||t.status!=="fulfilled"||!("value"in t)||typeof t.value!="object"||t.value===null||!("originalStackFrame"in t.value))return null;let a=t.value.originalStackFrame;return typeof a!="object"||!a||!("file"in a)||typeof a.file!="string"||!a.file||"ignored"in a&&a.ignored?null:{file:a.file,line1:"line1"in a&&typeof a.line1=="number"?a.line1:null,column1:"column1"in a&&typeof a.column1=="number"?a.column1:null}},ON=async(t,a)=>{let i=[],l=[];for(let m=0;m<t.length;m++){let p=t[m];!p.isServer||!p.fileName||(i.push(m),l.push({file:zN(p.fileName),methodName:p.functionName??"<unknown>",line1:p.lineNumber??null,column1:p.columnNumber??null,arguments:[]}))}if(l.length===0)return t;let s=new AbortController,c=setTimeout(()=>s.abort(),zS),d=()=>s.abort();a?.aborted&&s.abort(),a?.addEventListener("abort",d);try{let m=await fetch(`${EN()}/__nextjs_original-stack-frames`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({frames:l,isServer:!0,isEdgeServer:!1,isAppDirectory:!0}),priority:"high",signal:s.signal});if(!m.ok)return t;let p=await m.json();if(!Array.isArray(p))return t;let g=[...t];for(let b=0;b<i.length;b++){let w=MN(p[b]);if(!w)continue;let y=i[b];g[y]={...t[y],fileName:w.file,lineNumber:w.line1??void 0,columnNumber:w.column1??void 0,isSymbolicated:!0}}return g}catch{return t}finally{clearTimeout(c),a?.removeEventListener("abort",d)}},RN=t=>{let a=new Map;return Mi(t,i=>{if(!Dc(i))return!1;let l=Ow(i._debugStack.stack);if(!l)return!1;for(let s of Rc(l))!s.functionName||!s.fileName||AN(s.fileName)&&(a.has(s.functionName)||a.set(s.functionName,{...s,isServer:!0}));return!1},!0),a},DN=(t,a)=>{if(!a.some(l=>l.isServer&&!l.fileName&&l.functionName))return a;let i=RN(t);return i.size===0?a:a.map(l=>{if(!l.isServer||l.fileName||!l.functionName)return l;let s=i.get(l.functionName);return s?{...l,fileName:s.fileName,lineNumber:s.lineNumber,columnNumber:s.columnNumber}:l})};let yh=0;const Ws=[],$N=t=>t?.aborted?Promise.resolve(!1):yh<3?(yh+=1,Promise.resolve(!0)):new Promise(a=>{let i={abortSignal:t,resolve:a};t&&(i.handleAbort=()=>{let l=Ws.indexOf(i);l!==-1&&(Ws.splice(l,1),a(!1))},t.addEventListener("abort",i.handleAbort,{once:!0})),Ws.push(i)}),LN=()=>{let t=Ws.shift();if(t){t.abortSignal&&t.handleAbort&&t.abortSignal.removeEventListener("abort",t.handleAbort),t.resolve(!0);return}--yh},Zw=async(t,a,i=MS,l)=>{if(!await $N(l))return a;let s=new AbortController,c,d=new Promise(g=>{c=setTimeout(()=>{s.abort(),g(a)},i)}),m,p=new Promise(g=>{l&&(m=()=>{s.abort(),g(a)},l.aborted?m():l.addEventListener("abort",m,{once:!0}))});try{let g=t(s.signal);return g.catch(()=>{}),await Promise.race([g,d,p])}finally{clearTimeout(c),m&&l?.removeEventListener("abort",m),LN()}},Ww=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),jN=t=>Ww(t).replace(/"/g,"&quot;").replace(/\r/g,"&#13;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;"),Kw=(t,a)=>{if(t.length<=a)return t;let i=Math.max(0,a-3),l=t.slice(0,i),s=l.lastIndexOf("&");return`${s>l.lastIndexOf(";")?l.slice(0,s):l}...`.slice(0,a)},UN=t=>t.startsWith("data-react-grab-"),Jw=t=>t.replace(/\s+/g," ").trim(),HN=t=>{let a=[];for(let i of t.childNodes){if(i.nodeType!==Node.TEXT_NODE)continue;let l=Jw(i.textContent??"");l&&a.push(l)}return a.join(" ")},Pw=t=>t.getAttribute("aria-hidden")==="true"||t.hasAttribute("hidden")?!0:$S.has(t.tagName.toLowerCase()),e1=(t,a,i)=>{if(t.nodeType===Node.TEXT_NODE){let l=Jw(t.textContent??"");return l?(a.push(l),i-l.length):i}if(!Pl(t)||Pw(t))return i;for(let l of t.childNodes)if(i=e1(l,a,i),i<=0)break;return i},BN=(t,a)=>{if(Pw(t))return"";let i=HN(t);if(!cw.has(a)||i&&t.children.length===0)return i;let l=[];return e1(t,l,100),l.join(" ")},wh=(t,a,i)=>`${t}="${Kw(jN(a),i)}"`,FN=t=>{let a=[];for(let i of sw){if(a.length>=8)break;let l=t.getAttribute(i);if(!l)continue;let s=i==="class"?15:120;a.push(wh(i,l,s))}return a},VN=t=>t==="class"||t==="className"||t==="style",qN=t=>{let a=FN(t).map(s=>` ${s}`),i=[],l=[];for(let{name:s,value:c}of t.attributes)UN(s)||sw.includes(s)||VN(s)||(DS.has(s)?i.push(c?` ${wh(s,c,120)}`:` ${s}`):c&&l.push(` ${wh(s,c,15)}`));return[...a,...i,...l].slice(0,8).join("")},xb=t=>t.length===0?"":t.length<=2?t.map(a=>`<${ww(a)} ...>`).join(`
  `):`(${t.length} elements)`,t1=t=>{let a=Tr(t);if(a)return a.getPreview();let i=ww(t),l=qN(t),s=BN(t,i),c=[],d=[],m=!1;for(let y of t.childNodes)y.nodeType!==Node.COMMENT_NODE&&(y.nodeType===Node.TEXT_NODE?y.textContent&&y.textContent.trim().length>0&&(m=!0):Pl(y)&&(m?d.push(y):c.push(y)));let p=s.length>0&&cw.has(i),g="",b=xb(c);b&&!p&&(g+=`
  ${b}`),s&&(g+=`
  ${Kw(Ww(s),100)}`);let w=xb(d);return w&&!p&&(g+=`
  ${w}`),g.length>0?`<${i}${l}>${g}
</${i}>`:`<${i}${l} />`},YN=new Set(["_","$","motion.","styled.","chakra.","ark.","Primitive.","Slot."]),GN=new Set("AppRouter.AppRouterAnnouncer.AppDevOverlay.AppDevOverlayErrorBoundary.ClientPageRoot.ClientSegmentRoot.DevRootHTTPAccessFallbackBoundary.ErrorBoundary.ErrorBoundaryHandler.GracefulDegradeBoundary.HTTPAccessErrorFallback.HTTPAccessFallbackBoundary.HTTPAccessFallbackErrorBoundary.HandleRedirect.Head.HistoryUpdater.HotReload.InnerLayoutRouter.InnerScrollAndFocusHandler.InnerScrollAndFocusHandlerOld.InnerScrollAndMaybeFocusHandler.InnerScrollHandlerNew.LinkComponent.LoadableComponent.LoadingBoundary.LoadingBoundaryProvider.NotAllowedRootHTTPFallbackError.OfflineProvider.OuterLayoutRouter.RedirectBoundary.RedirectErrorBoundary.RenderFromTemplateContext.RenderValidationBoundaryAtThisLevel.ReplaySsrOnlyErrors.RootErrorBoundary.RootLevelDevOverlayElement.Router.ScrollAndFocusHandler.ScrollAndMaybeFocusHandler.SegmentBoundaryTrigger.SegmentBoundaryTriggerNode.SegmentStateProvider.SegmentTrieNode.SegmentViewNode.SegmentViewStateNode.ServerRoot.body.html".split(".")),XN=new Set(["<anonymous>","<unknown>","Anonymous","Unknown"]),IN=new Set(["Suspense","Fragment","StrictMode","Profiler","SuspenseList"]),QN=new Set(["MotionDOMComponent","Slot","SlotClone"]),ZN=[".Consumer",".Context",".Provider",".Slot",".SlotClone",".Slottable","ProviderProvider"],n1=(t,a=!1)=>{if(XN.has(t)||a&&GN.has(t)||IN.has(t)||QN.has(t))return!0;for(let i of ZN)if(t.endsWith(i))return!0;for(let i of YN)if(t.startsWith(i))return!0;return!1},WN=(t,a=!1)=>!(!t||n1(t,a)),KN=(t,a)=>t||a.isSemantic,JN=t=>{let a=t.alternate,i=t._debugOwner,l=t._debugSource,s=t._debugStack;return{matches:c=>(c===t||c===a||c.alternate===t)&&c._debugOwner===i&&c._debugSource===l&&c._debugStack===s}},PN=(t,a)=>t.length>a?`${t.slice(0,a)}...`:t,eC=t=>JSON.stringify(PN(t,120)),a1=(t,a,i)=>{t.get(a)===i&&t.delete(a)},tC=async(t,a)=>{for(let i=0;i<2;i+=1){let l=t();if(!l)return a();let s=await l.valuePromise;if(l.isCurrent()||i===1)return s}return a()},r1=(t,a)=>!(t.length<=1||n1(t,a)||t[0]!==t[0].toUpperCase()),Uc=(t,a)=>t&&r1(t,a)?t:null,pc=t=>!NN(t)&&!Xw(t),Ri=t=>{if(!Mc())return t;let a=t;for(;a?.ownerDocument===t.ownerDocument;){if(Oc(a))return a;if(a.parentElement){a=a.parentElement;continue}let i=a.getRootNode();a=kr(i)?i.host:null}return t},nC=t=>{let a=t.return?.child??null;for(;a;){if(a!==t&&a.key!==null)return!0;a=a.sibling}return!1},aC=t=>{let a=t,i=0;for(;a;){if(a.key!==null&&nC(a))return String(a.key);if(tm(a)&&(i+=1,i===2))break;a=a.return}return null},rC=t=>{if(!Mc())return null;let a=Oc(Ri(t));return aC(a?am(a):null)},bf=new WeakMap,yf=new WeakMap,i1=t=>{let a=Ri(t),i=Oc(a);if(!i)return null;let l=am(i);return{element:a,fiber:l,revision:JN(l)}},sm=(t,a)=>{let i=i1(t);return!!(i&&i.element===a.element&&a.revision.matches(i.fiber))},iC=(t,a,i)=>tC(()=>{let l=i1(t);return l?{isCurrent:()=>sm(t,l),valuePromise:i(l)}:null},a),l1=t=>a=>fetch(a,{signal:t,priority:"high"}),lC=(t,a)=>Zw(async i=>{try{let l=await ok(t,!0,l1(i));return Oi()?await ON(DN(t,l),i):l}catch{return null}},null,void 0,a),oC=t=>{if(!Mc())return Promise.resolve([]);let a=bf.get(t.element);if(a?.revision.matches(t.fiber))return a.promise;let i=new AbortController,l=lC(t.fiber,i.signal);if(!sm(t.element,t))return l;let s={controller:i,promise:l,revision:t.revision};return bf.set(t.element,s),a?.controller.abort(),s.promise.then(c=>{c===null&&a1(bf,t.element,s)}),s.promise},sC=t=>t[0]??null,cC=(t,a)=>!t||!tm(t)?null:Uc(Ni(t.type),a),uC=(t,a)=>Zw(async i=>{try{let l=await uk(t,!0,l1(i));if(!l?.fileName)return null;let s=Oi();return{filePath:ho(l.fileName),lineNumber:l.lineNumber??null,columnNumber:l.columnNumber??null,componentName:Uc(l.functionName,s)??cC(t._debugOwner,s),origin:hc(l.fileName).origin}}catch{return null}},null,void 0,a),dC=t=>{let a=yf.get(t.element);if(a?.revision.matches(t.fiber))return a.promise;let i=new AbortController,l=uC(t.fiber,i.signal);if(!sm(t.element,t))return l;let s={controller:i,promise:l,revision:t.revision};return yf.set(t.element,s),a?.controller.abort(),s.promise.then(c=>{c||a1(yf,t.element,s)}),s.promise},fC=async t=>{let[a,i]=await Promise.all([dC(t),oC(t)]);return{fiber:t.fiber,fiberSource:a,stack:i}},o1=(t,a)=>{let i=Oi(),l=(d,m)=>{let p=sC(d);return p?.fileName?{filePath:ho(p.fileName),lineNumber:p.lineNumber??null,columnNumber:p.columnNumber??null,componentName:Uc(p.functionName,i),origin:m}:null},s=a.filter(d=>hc(d.fileName).origin==="app"),c=s.filter(d=>pc(d.fileName));return t?.origin==="app"&&pc(t.filePath)?t:l(c,"app")||(t?.origin==="app"&&!Xw(t.filePath)?t:l(s,"app")||(t?.origin==="app"||t?.origin==="package"?t:l(a.filter(d=>hc(d.fileName).origin==="package"),"package")))},hC=t=>cm(Ri(t),1)[0]??null,cm=(t,a,i=()=>!0)=>{if(!Mc())return[];let l=Oc(t);if(!l)return[];let s=Oi(),c=[];return Mi(am(l),d=>{if(c.length>=a)return!0;if(tm(d)){let m=Ni(d.type);m&&WN(m,s)&&i(m)&&c.push(m)}return!1},!0),c},mC=["/src/app/","/src/pages/","/app/","/pages/"],pC=(t,a)=>{let i=ho(t);if(!a||!i.startsWith("/"))return i;for(let l of mC){let s=i.indexOf(l);if(s!==-1)return`/./${i.slice(s+1)}`}return i},s1=(t,a)=>{let i=pC(t.filePath,a),l=a&&t.lineNumber?`${i}:${t.lineNumber}${t.columnNumber?`:${t.columnNumber}`:""}`:i;return t.componentName?`
  in ${t.componentName} (at ${l})`:`
  in ${l}`},wf={isAppSource:!1,consumesBudget:!1},gC=(t,a,i,l)=>{let s=a.packageName,c=a.origin==="app"?t.fileName:null;if(t.isServer&&!c&&(i||!t.functionName)){let d=s?`${s} at Server`:"at Server";return{text:`
  in ${i??"<anonymous>"} (${d})`,...wf}}return!c&&i?{text:s?`
  in ${i} (${s})`:`
  in ${i}`,...wf}:s?{text:`
  in ${s}`,...wf}:c?{text:s1({componentName:i,filePath:c,lineNumber:t.lineNumber??null,columnNumber:t.columnNumber??null},l),isAppSource:!0,consumesBudget:pc(c)}:null},vC=(t,a={},i=null)=>{let l=Lw(a.maxLines),s=Math.max(l,20),c=Oi(),d=[],m=new Set,p=null,g=!1,b=!1,w=!1,y=0,x=T=>{T&&m.add(T)};if(i){let T=i.origin==="app"&&pc(i.filePath);b=T,T&&(y+=1),x(i.componentName),d.push(s1(i,c))}for(let T of t){if(!l||d.length>=s)break;let C=hc(T.fileName),M=Uc(T.functionName,c),k=C.packageName?`${C.packageName}:${M??""}:${T.isServer?"server":"client"}`:null;if(k&&k===p)continue;if(!g&&M&&M===i?.componentName){g=!0;continue}let E=gC(T,C,M,c);E!==null&&(E.consumesBudget&&y>=l||E.text!==d[d.length-1]&&(E.isAppSource&&E.consumesBudget&&(b=!0),E.consumesBudget&&(y+=1,w=!0),x(M),d.push(E.text),p=k))}return{text:d.join(""),shouldAppendSelectorHint:!b,hasBudgetedStackFrame:w,renderedComponentNames:m,remainingHardLineCapacity:Math.max(0,s-d.length)}},bC=(t,a)=>{let i=o1(t,a);return i?.origin==="app"?i:null},yC=(t,a,i)=>{let l=Math.min(i,a.remainingHardLineCapacity);if(l===0)return a;let s=Oi(),c=cm(Ri(t),l,d=>r1(d,s)&&!a.renderedComponentNames.has(d));return c.length===0?a:{...a,text:`${a.text}${Iw(c)}`,remainingHardLineCapacity:a.remainingHardLineCapacity-c.length}},wC=(t,a,i)=>{let l=i.stack??[],s=bC(i.fiberSource,l),c=Lw(a.maxLines),d=vC(l,a,s);if(d.text)return d.hasBudgetedStackFrame?d:yC(t,d,c);let m=cm(Ri(t),c),p=Math.max(c,20);return{text:Iw(m),shouldAppendSelectorHint:!0,hasBudgetedStackFrame:!1,renderedComponentNames:new Set(m),remainingHardLineCapacity:Math.max(0,p-m.length)}},xC=(t,a)=>{let i=rC(t),l=i===null?"":`
  key: ${eC(i)}`,s=a.shouldAppendSelectorHint?bh(Gw(t)):TN(t),c=s&&KN(a.shouldAppendSelectorHint,s)?s.selector:null,d=c?`
  selector: ${c}`:"";return{selector:c,text:`${a.text}${l}${d}`}},_C=(t,a,i)=>{let l=a.stack??[],s=o1(a.fiberSource,l);return{componentName:hC(t),fiber:a.fiber,source:s,stack:l,stackContext:i.text}},SC=(t,a,i)=>{let l=wC(t,a,i),s=Ri(t),c=xC(s,l);return{..._C(t,i,l),elementInfo:`${t1(s)}${c.text}`,selector:c.selector}},TC=(t,a,i)=>iC(t,()=>i(t,a,{fiber:null,fiberSource:null,stack:[]}),async l=>i(t,a,await fC(l))),kC=(t,a={})=>TC(t,a,SC);const NC=new Map(["top","right","bottom","left"].flatMap(t=>[[`border-${t}-style`,t],[`border-${t}-color`,t]]));let Al=null;const _b=new Map,CC=()=>Al||(Al=document.createElement("iframe"),Al.style.cssText="position:fixed;left:-9999px;width:0;height:0;border:none;visibility:hidden;",document.body.appendChild(Al),Al),EC=t=>{let a=_b.get(t);if(a)return a;let i=CC(),l=i.contentDocument,s=l.createElement(t);l.body.appendChild(s);let c=i.contentWindow.getComputedStyle(s),d=new Map;for(let m of uw){let p=c.getPropertyValue(m);p&&d.set(m,p)}return s.remove(),_b.set(t,d),d},AC=(t,a)=>{let i=NC.get(t);if(!i)return!1;let l=a.getPropertyValue(`border-${i}-width`);return l==="0px"||l==="0"},zC=t=>{if(Tr(t)?.supportsDomEditing===!1)return"";let a=EC(t.tagName.toLowerCase()),i=getComputedStyle(t),l=[];for(let d of uw){let m=i.getPropertyValue(d);m&&m!==a.get(d)&&(AC(d,i)||l.push(`${d}: ${m};`))}let s=t.getAttribute("class")?.trim(),c=l.join(`
`);return s?c?`className: ${s}

${c}`:`className: ${s}`:c},MC=async t=>{let a=await kC(t),i=t1(t),l=zC(t);return{element:t,snippet:a.elementInfo,htmlPreview:i,stackString:a.stackContext,stack:a.stack,componentName:a.componentName,filePath:a.source?.filePath??null,lineNumber:a.source?.lineNumber??null,columnNumber:a.source?.columnNumber??null,fiber:a.fiber,selector:a.selector,styles:l}},xf="0.2.0";var OC=Object.defineProperty,RC=(t,a,i)=>a in t?OC(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i,en=(t,a,i)=>RC(t,typeof a!="symbol"?a+"":a,i);Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(t){return[...this].sort(t)},writable:!0,configurable:!0});var Rn=typeof window<"u";function DC(t,a){return a-t}function $C(t){let a=t[0].name;const i=t.length,l=Math.min(4,i);for(let s=1;s<l;s++)a+=`, ${t[s].name}`;return a}function LC(t){let a=t[0].time;for(let i=1,l=t.length;i<l;i++)a+=t[i].time;return a}function jC(t){for(let a=0,i=t.length;a<i;a++)if(t[a].forget)return!0;return!1}var UC=t=>{let a="";const i=new Map;for(const d of t){const{forget:m,time:p,aggregatedCount:g,name:b}=d;i.has(g)||i.set(g,[]);const w=i.get(g);w&&w.push({name:b,forget:m,time:p??0})}const l=Array.from(i.keys()).sort(DC),s=[];let c=0;for(const d of l){const m=i.get(d);if(!m)continue;let p=$C(m);const g=LC(m),b=jC(m);c+=g,m.length>4&&(p+="…"),d>1&&(p+=` × ${d}`),b&&(p=`✨${p}`),s.push(p)}return a=s.join(", "),a.length?(a.length>40&&(a=`${a.slice(0,40)}…`),c>=.01&&(a+=` (${Number(c.toFixed(2))}ms)`),a):null};function Fa(t,a){return t===a||t!==t&&a!==a}var _n=()=>Rn?(window.reactScanIdCounter===void 0&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):"0",um=t=>{const a=t.createOscillator(),i=t.createGain();a.connect(i),i.connect(t.destination);const l={type:"sine",freq:[392,600],duration:.3,gain:.12},s=l.freq,c=l.duration/s.length;s.forEach((d,m)=>{a.frequency.setValueAtTime(d,t.currentTime+m*c)}),a.type=l.type,i.gain.setValueAtTime(l.gain,t.currentTime),i.gain.setTargetAtTime(0,t.currentTime+l.duration*.7,.05),a.start(),a.stop(t.currentTime+l.duration)},tt=Jh(({size:t=15,name:a,fill:i="currentColor",stroke:l="currentColor",className:s,externalURL:c="",style:d},m)=>{const p=Array.isArray(t)?t[0]:t,g=Array.isArray(t)?t[1]||t[0]:t,b=`${c}#${a}`;return h("svg",{ref:m,width:`${p}px`,height:`${g}px`,fill:i,stroke:l,className:s,style:{...d,minWidth:`${p}px`,maxWidth:`${p}px`,minHeight:`${g}px`,maxHeight:`${g}px`},children:[h("title",{children:a}),h("use",{href:b})]})}),mn=24,HC=600,mt={width:550,height:350,initialHeight:400},Tn=240,ra="react-scan-widget-settings-v2",Ks="react-scan-widget-collapsed-v1",hi="react-scan-widget-last-view-v1",BC="button, a, input, textarea, select, pre, [contenteditable], [data-react-scan-selectable]";function c1(t){var a,i,l="";if(typeof t=="string"||typeof t=="number")l+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(a=0;a<s;a++)t[a]&&(i=c1(t[a]))&&(l&&(l+=" "),l+=i)}else for(i in t)t[i]&&(l&&(l+=" "),l+=i);return l}function FC(){for(var t,a,i=0,l="",s=arguments.length;i<s;i++)(t=arguments[i])&&(a=c1(t))&&(l&&(l+=" "),l+=a);return l}var VC=(t,a)=>{const i=new Array(t.length+a.length);for(let l=0;l<t.length;l++)i[l]=t[l];for(let l=0;l<a.length;l++)i[t.length+l]=a[l];return i},qC=(t,a)=>({classGroupId:t,validator:a}),u1=(t=new Map,a=null,i)=>({nextPart:t,validators:a,classGroupId:i}),gc="-",Sb=[],YC="arbitrary..",GC=t=>{const a=IC(t),{conflictingClassGroups:i,conflictingClassGroupModifiers:l}=t;return{getClassGroupId:d=>{if(d.startsWith("[")&&d.endsWith("]"))return XC(d);const m=d.split(gc),p=m[0]===""&&m.length>1?1:0;return d1(m,p,a)},getConflictingClassGroupIds:(d,m)=>{if(m){const p=l[d],g=i[d];return p?g?VC(g,p):p:g||Sb}return i[d]||Sb}}},d1=(t,a,i)=>{if(t.length-a===0)return i.classGroupId;const s=t[a],c=i.nextPart.get(s);if(c){const g=d1(t,a+1,c);if(g)return g}const d=i.validators;if(d===null)return;const m=a===0?t.join(gc):t.slice(a).join(gc),p=d.length;for(let g=0;g<p;g++){const b=d[g];if(b.validator(m))return b.classGroupId}},XC=t=>t.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const a=t.slice(1,-1),i=a.indexOf(":"),l=a.slice(0,i);return l?YC+l:void 0})(),IC=t=>{const{theme:a,classGroups:i}=t;return QC(i,a)},QC=(t,a)=>{const i=u1();for(const l in t){const s=t[l];dm(s,i,l,a)}return i},dm=(t,a,i,l)=>{const s=t.length;for(let c=0;c<s;c++){const d=t[c];ZC(d,a,i,l)}},ZC=(t,a,i,l)=>{if(typeof t=="string"){WC(t,a,i);return}if(typeof t=="function"){KC(t,a,i,l);return}JC(t,a,i,l)},WC=(t,a,i)=>{const l=t===""?a:f1(a,t);l.classGroupId=i},KC=(t,a,i,l)=>{if(PC(t)){dm(t(l),a,i,l);return}a.validators===null&&(a.validators=[]),a.validators.push(qC(i,t))},JC=(t,a,i,l)=>{const s=Object.entries(t),c=s.length;for(let d=0;d<c;d++){const[m,p]=s[d];dm(p,f1(a,m),i,l)}},f1=(t,a)=>{let i=t;const l=a.split(gc),s=l.length;for(let c=0;c<s;c++){const d=l[c];let m=i.nextPart.get(d);m||(m=u1(),i.nextPart.set(d,m)),i=m}return i},PC=t=>"isThemeGetter"in t&&t.isThemeGetter===!0,eE=t=>{if(t<1)return{get:()=>{},set:()=>{}};let a=0,i=Object.create(null),l=Object.create(null);const s=(c,d)=>{i[c]=d,a++,a>t&&(a=0,l=i,i=Object.create(null))};return{get(c){let d=i[c];if(d!==void 0)return d;if((d=l[c])!==void 0)return s(c,d),d},set(c,d){c in i?i[c]=d:s(c,d)}}},xh="!",Tb=":",tE=[],kb=(t,a,i,l,s)=>({modifiers:t,hasImportantModifier:a,baseClassName:i,maybePostfixModifierPosition:l,isExternal:s}),nE=t=>{const{prefix:a,experimentalParseClassName:i}=t;let l=s=>{const c=[];let d=0,m=0,p=0,g;const b=s.length;for(let C=0;C<b;C++){const M=s[C];if(d===0&&m===0){if(M===Tb){c.push(s.slice(p,C)),p=C+1;continue}if(M==="/"){g=C;continue}}M==="["?d++:M==="]"?d--:M==="("?m++:M===")"&&m--}const w=c.length===0?s:s.slice(p);let y=w,x=!1;w.endsWith(xh)?(y=w.slice(0,-1),x=!0):w.startsWith(xh)&&(y=w.slice(1),x=!0);const T=g&&g>p?g-p:void 0;return kb(c,x,y,T)};if(a){const s=a+Tb,c=l;l=d=>d.startsWith(s)?c(d.slice(s.length)):kb(tE,!1,d,void 0,!0)}if(i){const s=l;l=c=>i({className:c,parseClassName:s})}return l},aE=t=>{const a=new Map;return t.orderSensitiveModifiers.forEach((i,l)=>{a.set(i,1e6+l)}),i=>{const l=[];let s=[];for(let c=0;c<i.length;c++){const d=i[c],m=d[0]==="[",p=a.has(d);m||p?(s.length>0&&(s.sort(),l.push(...s),s=[]),l.push(d)):s.push(d)}return s.length>0&&(s.sort(),l.push(...s)),l}},rE=t=>({cache:eE(t.cacheSize),parseClassName:nE(t),sortModifiers:aE(t),...GC(t)}),iE=/\s+/,lE=(t,a)=>{const{parseClassName:i,getClassGroupId:l,getConflictingClassGroupIds:s,sortModifiers:c}=a,d=[],m=t.trim().split(iE);let p="";for(let g=m.length-1;g>=0;g-=1){const b=m[g],{isExternal:w,modifiers:y,hasImportantModifier:x,baseClassName:T,maybePostfixModifierPosition:C}=i(b);if(w){p=b+(p.length>0?" "+p:p);continue}let M=!!C,k=l(M?T.substring(0,C):T);if(!k){if(!M){p=b+(p.length>0?" "+p:p);continue}if(k=l(T),!k){p=b+(p.length>0?" "+p:p);continue}M=!1}const E=y.length===0?"":y.length===1?y[0]:c(y).join(":"),H=x?E+xh:E,Y=H+k;if(d.indexOf(Y)>-1)continue;d.push(Y);const Q=s(k,M);for(let J=0;J<Q.length;++J){const P=Q[J];d.push(H+P)}p=b+(p.length>0?" "+p:p)}return p},oE=(...t)=>{let a=0,i,l,s="";for(;a<t.length;)(i=t[a++])&&(l=h1(i))&&(s&&(s+=" "),s+=l);return s},h1=t=>{if(typeof t=="string")return t;let a,i="";for(let l=0;l<t.length;l++)t[l]&&(a=h1(t[l]))&&(i&&(i+=" "),i+=a);return i},sE=(t,...a)=>{let i,l,s,c;const d=p=>{const g=a.reduce((b,w)=>w(b),t());return i=rE(g),l=i.cache.get,s=i.cache.set,c=m,m(p)},m=p=>{const g=l(p);if(g)return g;const b=lE(p,i);return s(p,b),b};return c=d,(...p)=>c(oE(...p))},cE=[],gt=t=>{const a=i=>i[t]||cE;return a.isThemeGetter=!0,a},m1=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,p1=/^\((?:(\w[\w-]*):)?(.+)\)$/i,uE=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,dE=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,fE=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,hE=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,mE=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,pE=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ma=t=>uE.test(t),Ne=t=>!!t&&!Number.isNaN(Number(t)),Oa=t=>!!t&&Number.isInteger(Number(t)),_f=t=>t.endsWith("%")&&Ne(t.slice(0,-1)),ea=t=>dE.test(t),g1=()=>!0,gE=t=>fE.test(t)&&!hE.test(t),fm=()=>!1,vE=t=>mE.test(t),bE=t=>pE.test(t),yE=t=>!ce(t)&&!ue(t),wE=t=>Va(t,y1,fm),ce=t=>m1.test(t),or=t=>Va(t,w1,gE),Nb=t=>Va(t,EE,Ne),xE=t=>Va(t,_1,g1),_E=t=>Va(t,x1,fm),Cb=t=>Va(t,v1,fm),SE=t=>Va(t,b1,bE),Ls=t=>Va(t,S1,vE),ue=t=>p1.test(t),zl=t=>Nr(t,w1),TE=t=>Nr(t,x1),Eb=t=>Nr(t,v1),kE=t=>Nr(t,y1),NE=t=>Nr(t,b1),js=t=>Nr(t,S1,!0),CE=t=>Nr(t,_1,!0),Va=(t,a,i)=>{const l=m1.exec(t);return l?l[1]?a(l[1]):i(l[2]):!1},Nr=(t,a,i=!1)=>{const l=p1.exec(t);return l?l[1]?a(l[1]):i:!1},v1=t=>t==="position"||t==="percentage",b1=t=>t==="image"||t==="url",y1=t=>t==="length"||t==="size"||t==="bg-size",w1=t=>t==="length",EE=t=>t==="number",x1=t=>t==="family-name",_1=t=>t==="number"||t==="weight",S1=t=>t==="shadow",AE=()=>{const t=gt("color"),a=gt("font"),i=gt("text"),l=gt("font-weight"),s=gt("tracking"),c=gt("leading"),d=gt("breakpoint"),m=gt("container"),p=gt("spacing"),g=gt("radius"),b=gt("shadow"),w=gt("inset-shadow"),y=gt("text-shadow"),x=gt("drop-shadow"),T=gt("blur"),C=gt("perspective"),M=gt("aspect"),k=gt("ease"),E=gt("animate"),H=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Y=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],Q=()=>[...Y(),ue,ce],J=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto","contain","none"],Z=()=>[ue,ce,p],ie=()=>[Ma,"full","auto",...Z()],ne=()=>[Oa,"none","subgrid",ue,ce],pe=()=>["auto",{span:["full",Oa,ue,ce]},Oa,ue,ce],ye=()=>[Oa,"auto",ue,ce],we=()=>["auto","min","max","fr",ue,ce],ze=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Me=()=>["start","end","center","stretch","center-safe","end-safe"],_=()=>["auto",...Z()],z=()=>[Ma,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...Z()],R=()=>[Ma,"screen","full","dvw","lvw","svw","min","max","fit",...Z()],X=()=>[Ma,"screen","full","lh","dvh","lvh","svh","min","max","fit",...Z()],F=()=>[t,ue,ce],N=()=>[...Y(),Eb,Cb,{position:[ue,ce]}],L=()=>["no-repeat",{repeat:["","x","y","space","round"]}],W=()=>["auto","cover","contain",kE,wE,{size:[ue,ce]}],K=()=>[_f,zl,or],ee=()=>["","none","full",g,ue,ce],te=()=>["",Ne,zl,or],ae=()=>["solid","dashed","dotted","double"],ve=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],le=()=>[Ne,_f,Eb,Cb],et=()=>["","none",T,ue,ce],rt=()=>["none",Ne,ue,ce],Vt=()=>["none",Ne,ue,ce],gn=()=>[Ne,ue,ce],St=()=>[Ma,"full",...Z()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ea],breakpoint:[ea],color:[g1],container:[ea],"drop-shadow":[ea],ease:["in","out","in-out"],font:[yE],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ea],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ea],shadow:[ea],spacing:["px",Ne],text:[ea],"text-shadow":[ea],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ma,ce,ue,M]}],container:["container"],columns:[{columns:[Ne,ce,ue,m]}],"break-after":[{"break-after":H()}],"break-before":[{"break-before":H()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:Q()}],overflow:[{overflow:J()}],"overflow-x":[{"overflow-x":J()}],"overflow-y":[{"overflow-y":J()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:ie()}],"inset-x":[{"inset-x":ie()}],"inset-y":[{"inset-y":ie()}],start:[{"inset-s":ie(),start:ie()}],end:[{"inset-e":ie(),end:ie()}],"inset-bs":[{"inset-bs":ie()}],"inset-be":[{"inset-be":ie()}],top:[{top:ie()}],right:[{right:ie()}],bottom:[{bottom:ie()}],left:[{left:ie()}],visibility:["visible","invisible","collapse"],z:[{z:[Oa,"auto",ue,ce]}],basis:[{basis:[Ma,"full","auto",m,...Z()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ne,Ma,"auto","initial","none",ce]}],grow:[{grow:["",Ne,ue,ce]}],shrink:[{shrink:["",Ne,ue,ce]}],order:[{order:[Oa,"first","last","none",ue,ce]}],"grid-cols":[{"grid-cols":ne()}],"col-start-end":[{col:pe()}],"col-start":[{"col-start":ye()}],"col-end":[{"col-end":ye()}],"grid-rows":[{"grid-rows":ne()}],"row-start-end":[{row:pe()}],"row-start":[{"row-start":ye()}],"row-end":[{"row-end":ye()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":we()}],"auto-rows":[{"auto-rows":we()}],gap:[{gap:Z()}],"gap-x":[{"gap-x":Z()}],"gap-y":[{"gap-y":Z()}],"justify-content":[{justify:[...ze(),"normal"]}],"justify-items":[{"justify-items":[...Me(),"normal"]}],"justify-self":[{"justify-self":["auto",...Me()]}],"align-content":[{content:["normal",...ze()]}],"align-items":[{items:[...Me(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Me(),{baseline:["","last"]}]}],"place-content":[{"place-content":ze()}],"place-items":[{"place-items":[...Me(),"baseline"]}],"place-self":[{"place-self":["auto",...Me()]}],p:[{p:Z()}],px:[{px:Z()}],py:[{py:Z()}],ps:[{ps:Z()}],pe:[{pe:Z()}],pbs:[{pbs:Z()}],pbe:[{pbe:Z()}],pt:[{pt:Z()}],pr:[{pr:Z()}],pb:[{pb:Z()}],pl:[{pl:Z()}],m:[{m:_()}],mx:[{mx:_()}],my:[{my:_()}],ms:[{ms:_()}],me:[{me:_()}],mbs:[{mbs:_()}],mbe:[{mbe:_()}],mt:[{mt:_()}],mr:[{mr:_()}],mb:[{mb:_()}],ml:[{ml:_()}],"space-x":[{"space-x":Z()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":Z()}],"space-y-reverse":["space-y-reverse"],size:[{size:z()}],"inline-size":[{inline:["auto",...R()]}],"min-inline-size":[{"min-inline":["auto",...R()]}],"max-inline-size":[{"max-inline":["none",...R()]}],"block-size":[{block:["auto",...X()]}],"min-block-size":[{"min-block":["auto",...X()]}],"max-block-size":[{"max-block":["none",...X()]}],w:[{w:[m,"screen",...z()]}],"min-w":[{"min-w":[m,"screen","none",...z()]}],"max-w":[{"max-w":[m,"screen","none","prose",{screen:[d]},...z()]}],h:[{h:["screen","lh",...z()]}],"min-h":[{"min-h":["screen","lh","none",...z()]}],"max-h":[{"max-h":["screen","lh",...z()]}],"font-size":[{text:["base",i,zl,or]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[l,CE,xE]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",_f,ce]}],"font-family":[{font:[TE,_E,a]}],"font-features":[{"font-features":[ce]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,ue,ce]}],"line-clamp":[{"line-clamp":[Ne,"none",ue,Nb]}],leading:[{leading:[c,...Z()]}],"list-image":[{"list-image":["none",ue,ce]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ue,ce]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:F()}],"text-color":[{text:F()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ae(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ne,"from-font","auto",ue,or]}],"text-decoration-color":[{decoration:F()}],"underline-offset":[{"underline-offset":[Ne,"auto",ue,ce]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:Z()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ue,ce]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ue,ce]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:N()}],"bg-repeat":[{bg:L()}],"bg-size":[{bg:W()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Oa,ue,ce],radial:["",ue,ce],conic:[Oa,ue,ce]},NE,SE]}],"bg-color":[{bg:F()}],"gradient-from-pos":[{from:K()}],"gradient-via-pos":[{via:K()}],"gradient-to-pos":[{to:K()}],"gradient-from":[{from:F()}],"gradient-via":[{via:F()}],"gradient-to":[{to:F()}],rounded:[{rounded:ee()}],"rounded-s":[{"rounded-s":ee()}],"rounded-e":[{"rounded-e":ee()}],"rounded-t":[{"rounded-t":ee()}],"rounded-r":[{"rounded-r":ee()}],"rounded-b":[{"rounded-b":ee()}],"rounded-l":[{"rounded-l":ee()}],"rounded-ss":[{"rounded-ss":ee()}],"rounded-se":[{"rounded-se":ee()}],"rounded-ee":[{"rounded-ee":ee()}],"rounded-es":[{"rounded-es":ee()}],"rounded-tl":[{"rounded-tl":ee()}],"rounded-tr":[{"rounded-tr":ee()}],"rounded-br":[{"rounded-br":ee()}],"rounded-bl":[{"rounded-bl":ee()}],"border-w":[{border:te()}],"border-w-x":[{"border-x":te()}],"border-w-y":[{"border-y":te()}],"border-w-s":[{"border-s":te()}],"border-w-e":[{"border-e":te()}],"border-w-bs":[{"border-bs":te()}],"border-w-be":[{"border-be":te()}],"border-w-t":[{"border-t":te()}],"border-w-r":[{"border-r":te()}],"border-w-b":[{"border-b":te()}],"border-w-l":[{"border-l":te()}],"divide-x":[{"divide-x":te()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":te()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ae(),"hidden","none"]}],"divide-style":[{divide:[...ae(),"hidden","none"]}],"border-color":[{border:F()}],"border-color-x":[{"border-x":F()}],"border-color-y":[{"border-y":F()}],"border-color-s":[{"border-s":F()}],"border-color-e":[{"border-e":F()}],"border-color-bs":[{"border-bs":F()}],"border-color-be":[{"border-be":F()}],"border-color-t":[{"border-t":F()}],"border-color-r":[{"border-r":F()}],"border-color-b":[{"border-b":F()}],"border-color-l":[{"border-l":F()}],"divide-color":[{divide:F()}],"outline-style":[{outline:[...ae(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ne,ue,ce]}],"outline-w":[{outline:["",Ne,zl,or]}],"outline-color":[{outline:F()}],shadow:[{shadow:["","none",b,js,Ls]}],"shadow-color":[{shadow:F()}],"inset-shadow":[{"inset-shadow":["none",w,js,Ls]}],"inset-shadow-color":[{"inset-shadow":F()}],"ring-w":[{ring:te()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:F()}],"ring-offset-w":[{"ring-offset":[Ne,or]}],"ring-offset-color":[{"ring-offset":F()}],"inset-ring-w":[{"inset-ring":te()}],"inset-ring-color":[{"inset-ring":F()}],"text-shadow":[{"text-shadow":["none",y,js,Ls]}],"text-shadow-color":[{"text-shadow":F()}],opacity:[{opacity:[Ne,ue,ce]}],"mix-blend":[{"mix-blend":[...ve(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ve()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ne]}],"mask-image-linear-from-pos":[{"mask-linear-from":le()}],"mask-image-linear-to-pos":[{"mask-linear-to":le()}],"mask-image-linear-from-color":[{"mask-linear-from":F()}],"mask-image-linear-to-color":[{"mask-linear-to":F()}],"mask-image-t-from-pos":[{"mask-t-from":le()}],"mask-image-t-to-pos":[{"mask-t-to":le()}],"mask-image-t-from-color":[{"mask-t-from":F()}],"mask-image-t-to-color":[{"mask-t-to":F()}],"mask-image-r-from-pos":[{"mask-r-from":le()}],"mask-image-r-to-pos":[{"mask-r-to":le()}],"mask-image-r-from-color":[{"mask-r-from":F()}],"mask-image-r-to-color":[{"mask-r-to":F()}],"mask-image-b-from-pos":[{"mask-b-from":le()}],"mask-image-b-to-pos":[{"mask-b-to":le()}],"mask-image-b-from-color":[{"mask-b-from":F()}],"mask-image-b-to-color":[{"mask-b-to":F()}],"mask-image-l-from-pos":[{"mask-l-from":le()}],"mask-image-l-to-pos":[{"mask-l-to":le()}],"mask-image-l-from-color":[{"mask-l-from":F()}],"mask-image-l-to-color":[{"mask-l-to":F()}],"mask-image-x-from-pos":[{"mask-x-from":le()}],"mask-image-x-to-pos":[{"mask-x-to":le()}],"mask-image-x-from-color":[{"mask-x-from":F()}],"mask-image-x-to-color":[{"mask-x-to":F()}],"mask-image-y-from-pos":[{"mask-y-from":le()}],"mask-image-y-to-pos":[{"mask-y-to":le()}],"mask-image-y-from-color":[{"mask-y-from":F()}],"mask-image-y-to-color":[{"mask-y-to":F()}],"mask-image-radial":[{"mask-radial":[ue,ce]}],"mask-image-radial-from-pos":[{"mask-radial-from":le()}],"mask-image-radial-to-pos":[{"mask-radial-to":le()}],"mask-image-radial-from-color":[{"mask-radial-from":F()}],"mask-image-radial-to-color":[{"mask-radial-to":F()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":Y()}],"mask-image-conic-pos":[{"mask-conic":[Ne]}],"mask-image-conic-from-pos":[{"mask-conic-from":le()}],"mask-image-conic-to-pos":[{"mask-conic-to":le()}],"mask-image-conic-from-color":[{"mask-conic-from":F()}],"mask-image-conic-to-color":[{"mask-conic-to":F()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:N()}],"mask-repeat":[{mask:L()}],"mask-size":[{mask:W()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ue,ce]}],filter:[{filter:["","none",ue,ce]}],blur:[{blur:et()}],brightness:[{brightness:[Ne,ue,ce]}],contrast:[{contrast:[Ne,ue,ce]}],"drop-shadow":[{"drop-shadow":["","none",x,js,Ls]}],"drop-shadow-color":[{"drop-shadow":F()}],grayscale:[{grayscale:["",Ne,ue,ce]}],"hue-rotate":[{"hue-rotate":[Ne,ue,ce]}],invert:[{invert:["",Ne,ue,ce]}],saturate:[{saturate:[Ne,ue,ce]}],sepia:[{sepia:["",Ne,ue,ce]}],"backdrop-filter":[{"backdrop-filter":["","none",ue,ce]}],"backdrop-blur":[{"backdrop-blur":et()}],"backdrop-brightness":[{"backdrop-brightness":[Ne,ue,ce]}],"backdrop-contrast":[{"backdrop-contrast":[Ne,ue,ce]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ne,ue,ce]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ne,ue,ce]}],"backdrop-invert":[{"backdrop-invert":["",Ne,ue,ce]}],"backdrop-opacity":[{"backdrop-opacity":[Ne,ue,ce]}],"backdrop-saturate":[{"backdrop-saturate":[Ne,ue,ce]}],"backdrop-sepia":[{"backdrop-sepia":["",Ne,ue,ce]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":Z()}],"border-spacing-x":[{"border-spacing-x":Z()}],"border-spacing-y":[{"border-spacing-y":Z()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ue,ce]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ne,"initial",ue,ce]}],ease:[{ease:["linear","initial",k,ue,ce]}],delay:[{delay:[Ne,ue,ce]}],animate:[{animate:["none",E,ue,ce]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[C,ue,ce]}],"perspective-origin":[{"perspective-origin":Q()}],rotate:[{rotate:rt()}],"rotate-x":[{"rotate-x":rt()}],"rotate-y":[{"rotate-y":rt()}],"rotate-z":[{"rotate-z":rt()}],scale:[{scale:Vt()}],"scale-x":[{"scale-x":Vt()}],"scale-y":[{"scale-y":Vt()}],"scale-z":[{"scale-z":Vt()}],"scale-3d":["scale-3d"],skew:[{skew:gn()}],"skew-x":[{"skew-x":gn()}],"skew-y":[{"skew-y":gn()}],transform:[{transform:[ue,ce,"","none","gpu","cpu"]}],"transform-origin":[{origin:Q()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:St()}],"translate-x":[{"translate-x":St()}],"translate-y":[{"translate-y":St()}],"translate-z":[{"translate-z":St()}],"translate-none":["translate-none"],accent:[{accent:F()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:F()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ue,ce]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":Z()}],"scroll-mx":[{"scroll-mx":Z()}],"scroll-my":[{"scroll-my":Z()}],"scroll-ms":[{"scroll-ms":Z()}],"scroll-me":[{"scroll-me":Z()}],"scroll-mbs":[{"scroll-mbs":Z()}],"scroll-mbe":[{"scroll-mbe":Z()}],"scroll-mt":[{"scroll-mt":Z()}],"scroll-mr":[{"scroll-mr":Z()}],"scroll-mb":[{"scroll-mb":Z()}],"scroll-ml":[{"scroll-ml":Z()}],"scroll-p":[{"scroll-p":Z()}],"scroll-px":[{"scroll-px":Z()}],"scroll-py":[{"scroll-py":Z()}],"scroll-ps":[{"scroll-ps":Z()}],"scroll-pe":[{"scroll-pe":Z()}],"scroll-pbs":[{"scroll-pbs":Z()}],"scroll-pbe":[{"scroll-pbe":Z()}],"scroll-pt":[{"scroll-pt":Z()}],"scroll-pr":[{"scroll-pr":Z()}],"scroll-pb":[{"scroll-pb":Z()}],"scroll-pl":[{"scroll-pl":Z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ue,ce]}],fill:[{fill:["none",...F()]}],"stroke-w":[{stroke:[Ne,zl,or,Nb]}],stroke:[{stroke:["none",...F()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},zE=sE(AE),D=(...t)=>zE(FC(t));typeof navigator<"u"&&navigator.userAgent.includes("Firefox");var T1=(t,a)=>{let i=0;return l=>{const s=Date.now();if(s-i>=a)return i=s,t(l)}},Ua=t=>{if(!Rn)return null;try{const a=localStorage.getItem(t);return a?JSON.parse(a):null}catch{return null}},Ft=(t,a)=>{if(Rn)try{window.localStorage.setItem(t,JSON.stringify(a))}catch{}},Ab=t=>{if(Rn)try{window.localStorage.removeItem(t)}catch{}},ME=24,OE=12,no=t=>{if(!t)return{name:"Unknown",wrappers:[],wrapperTypes:[]};const{tag:a,type:i,elementType:l}=t;let s=xt(i);const c=[],d=[];if(Zl(t)||a===Hh||a===Uh||i?.$$typeof===Symbol.for("react.memo")||l?.$$typeof===Symbol.for("react.memo")){const m=Zl(t);d.push({type:"memo",title:m?"This component has been auto-memoized by the React Compiler.":"Memoized component that skips re-renders if props are the same",compiler:m})}if(a===ME&&d.push({type:"lazy",title:"Lazily loaded component that supports code splitting"}),a===L2&&d.push({type:"suspense",title:"Component that can suspend while content is loading"}),a===OE&&d.push({type:"profiler",title:"Component that measures rendering performance"}),typeof s=="string"){const m=/^(\w+)\((.*)\)$/;let p=s;for(;m.test(p);){const g=p.match(m);if(g?.[1]&&g?.[2])c.unshift(g[1]),p=g[2];else break}s=p}return{name:s||"Unknown",wrappers:c,wrapperTypes:d}},fr=t=>typeof t=="number"&&Number.isFinite(t)&&t>=0,k1=t=>!!t&&typeof t=="object"&&!Array.isArray(t),La=()=>{const t=De.options.value.safeArea;if(fr(t))return{top:t,right:t,bottom:t,left:t};if(k1(t)){const a=t.top,i=t.right,l=t.bottom,s=t.left;return{top:fr(a)?a:mn,right:fr(i)?i:mn,bottom:fr(l)?l:mn,left:fr(s)?s:mn}}return{top:mn,right:mn,bottom:mn,left:mn}},Hc=bt(!1),_h=bt(null),N1=()=>({corner:"bottom-right",dimensions:{isFullWidth:!1,isFullHeight:!1,width:mt.width,height:mt.height,position:{x:mn,y:mn}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:mt.width,height:mt.height,position:{x:mn,y:mn}},componentsTree:{width:Tn}}),RE=()=>{var t,a,i,l,s;const c=N1(),d=Ua(ra);return d?{corner:(t=d.corner)!=null?t:c.corner,dimensions:(a=d.dimensions)!=null?a:c.dimensions,lastDimensions:(l=(i=d.lastDimensions)!=null?i:d.dimensions)!=null?l:c.lastDimensions,componentsTree:(s=d.componentsTree)!=null?s:c.componentsTree}:(Ft(ra,{corner:c.corner,dimensions:c.dimensions,lastDimensions:c.lastDimensions,componentsTree:c.componentsTree}),c)},se=bt(RE()),Sf=()=>{if(!Rn)return;const{dimensions:t}=se.value,{width:a,height:i,position:l}=t,s=La();se.value={...se.value,dimensions:{isFullWidth:a>=window.innerWidth-s.left-s.right,isFullHeight:i>=window.innerHeight-s.top-s.bottom,width:a,height:i,position:l}}},Ie=bt({view:"none"}),zb=Ua(Ks),Pt=bt(zb??null);function DE(){return!1}function hm(t){function a(i){return this.shouldComponentUpdate=DE,vr(t,i)}return a.displayName=`Memo(${t.displayName||t.name})`,a.prototype.isReactComponent=!0,a._forwarded=!0,a}var $E=t=>{const{count:a,getScrollElement:i,estimateSize:l,overscan:s=5}=t,[c,d]=Ce(0),[m,p]=Ce(0),g=me(),b=me(null),w=me(null),y=l(),x=st(k=>{var E,H;if(!b.current)return;const Y=(H=(E=k?.[0])==null?void 0:E.contentRect.height)!=null?H:b.current.getBoundingClientRect().height;p(Y)},[]),T=st(()=>{w.current!==null&&cancelAnimationFrame(w.current),w.current=requestAnimationFrame(()=>{x(),w.current=null})},[x]);Te(()=>{const k=i();if(!k)return;b.current=k;const E=()=>{b.current&&d(b.current.scrollTop)};x(),g.current||(g.current=new ResizeObserver(()=>{T()})),g.current.observe(k),k.addEventListener("scroll",E,{passive:!0});const H=new MutationObserver(T);return H.observe(k,{attributes:!0,childList:!0,subtree:!0}),()=>{k.removeEventListener("scroll",E),g.current&&g.current.disconnect(),H.disconnect(),w.current!==null&&cancelAnimationFrame(w.current)}},[i,x,T]);const C=Nn(()=>{const k=Math.floor(c/y),E=Math.ceil(m/y);return{start:Math.max(0,k-s),end:Math.min(a,k+E+s)}},[c,y,m,a,s]);return{virtualItems:Nn(()=>{const k=[];for(let E=C.start;E<C.end;E++)k.push({key:E,index:E,start:E*y});return k},[C,y]),totalSize:a*y,scrollTop:c,containerHeight:m}},LE=t=>{var a;const i=[];let l=t;for(;l;){const s=l.elementType,c=typeof s=="function"?s.displayName||s.name:typeof s=="string"?s:"Unknown",d=l.index!==void 0?`[${l.index}]`:"";i.unshift(`${c}${d}`),l=(a=l.return)!=null?a:null}return i.join("::")},sr=new WeakMap,jE=(t,a)=>{const i=a.bind(null,t);return document.addEventListener("scroll",i,{passive:!0,capture:!0}),()=>{document.removeEventListener("scroll",i,{capture:!0})}},UE={activeFlashes:new Map,create(t){const a=t.querySelector(".react-scan-flash-overlay"),i=a instanceof HTMLElement?a:(()=>{const s=document.createElement("div");s.className="react-scan-flash-overlay",t.appendChild(s);const c=jE(t,()=>{t.querySelector(".react-scan-flash-overlay")&&this.create(t)});return this.activeFlashes.set(t,{element:t,overlay:s,scrollCleanup:c}),s})(),l=sr.get(i);l&&(clearTimeout(l),sr.delete(i)),requestAnimationFrame(()=>{i.style.transition="none",i.style.opacity="0.9";const s=setTimeout(()=>{i.style.transition="opacity 150ms ease-out",i.style.opacity="0";const c=setTimeout(()=>{i.parentNode&&i.parentNode.removeChild(i);const d=this.activeFlashes.get(t);d?.scrollCleanup&&d.scrollCleanup(),this.activeFlashes.delete(t),sr.delete(i)},150);sr.set(i,c)},300);sr.set(i,s)})},cleanup(t){const a=this.activeFlashes.get(t);if(a){const i=sr.get(a.overlay);i&&(clearTimeout(i),sr.delete(a.overlay)),a.overlay.parentNode&&a.overlay.parentNode.removeChild(a.overlay),a.scrollCleanup&&a.scrollCleanup(),this.activeFlashes.delete(t)}},cleanupAll(){for(const[,t]of this.activeFlashes)this.cleanup(t.element)}},Mb=1e3,C1={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},Rt=bt(C1),mm=bt(0),mr=[],cr=null,HE=()=>{if(mr.length===0)return;const t=[...mr],{updates:a,totalUpdates:i,currentIndex:l,isViewingHistory:s}=Rt.value,c=[...a];let d=i;for(const{update:b}of t)c.length>=Mb&&c.shift(),c.push(b),d++;const m=Math.max(0,d-Mb);let p;s?l===i-1?p=c.length-1:l===0?p=0:m===0?p=l:p=l-1:p=c.length-1;const g=t[t.length-1];Rt.value={...Rt.value,latestFiber:g.fiber,updates:c,totalUpdates:d,windowOffset:m,currentIndex:p,isViewingHistory:s},mr=mr.slice(t.length)},E1={showTimeline:()=>{Rt.value={...Rt.value,isVisible:!0}},hideTimeline:()=>{Rt.value={...Rt.value,isVisible:!1,currentIndex:Rt.value.updates.length-1}},updateFrame:(t,a)=>{Rt.value={...Rt.value,currentIndex:t,isViewingHistory:a}},updatePlaybackSpeed:t=>{Rt.value={...Rt.value,playbackSpeed:t}},addUpdate:(t,a)=>{if(mr.push({update:t,fiber:a}),!cr){const i=()=>{HE(),cr=null,mr.length>0&&(cr=setTimeout(i,96))};cr=setTimeout(i,96)}},reset:()=>{cr&&(clearTimeout(cr),cr=null),mr=[],Rt.value=C1}},zt=bt({query:"",matches:[],currentMatchIndex:-1}),Tf=bt(!1),A1=(t,a=0,i=null)=>t.reduce((l,s,c)=>{var d,m;const p=s.element?LE(s.fiber):`${i}-${c}`,g=(d=s.fiber)!=null&&d.type?F1(s.fiber):void 0,b={...s,depth:a,nodeId:p,parentId:i,fiber:s.fiber,renderData:g};return l.push(b),(m=s.children)!=null&&m.length&&l.push(...A1(s.children,a+1,p)),l},[]),BE=t=>t.reduce((a,i)=>Math.max(a,i.depth),0),FE=(t,a)=>{if(a<=0)return 24;const c=Math.max(0,t-Tn);if(c<24)return 0;const m=Math.min(c*.3,a*24)/a;return Math.max(0,Math.min(24,m))},VE=["memo","forwardRef","lazy","suspense"],z1=t=>{const a=t.match(/\[(.*?)\]/);if(!a)return null;const i=[],l=a[1].split(",");for(const s of l){const c=s.trim().toLowerCase();c&&i.push(c)}return i},qE=t=>{if(t.length===0)return!1;for(const a of t){let i=!1;for(const l of VE)if(l.toLowerCase().includes(a)){i=!0;break}if(!i)return!1}return!0},M1=(t,a)=>{if(t.length===0)return!0;if(!a.length)return!1;for(const i of t){let l=!1;for(const s of a)if(s.type.toLowerCase().includes(i)){l=!0;break}if(!l)return!1}return!0},YE=(t,a)=>Nn(()=>{const{query:i,matches:l}=a,s=l.some(g=>g.nodeId===t.nodeId),c=z1(i)||[],d=i?i.replace(/\[.*?\]/,"").trim():"";if(!i||!s)return{highlightedText:h("span",{className:"truncate",children:t.label}),typeHighlight:!1};let m=!0;if(c.length>0)if(!t.fiber)m=!1;else{const{wrapperTypes:g}=no(t.fiber);m=M1(c,g)}let p=h("span",{className:"truncate",children:t.label});if(d)try{if(d.startsWith("/")&&d.endsWith("/")){const g=d.slice(1,-1),b=new RegExp(`(${g})`,"i"),w=t.label.split(b);p=h("span",{className:"tree-node-search-highlight",children:w.map((y,x)=>b.test(y)?h("span",{className:D("regex",{start:b.test(y)&&x===0,middle:b.test(y)&&x%2===1,end:b.test(y)&&x===w.length-1,"!ml-0":x===1}),children:y},`${t.nodeId}-${y}`):y)})}else{const g=t.label.toLowerCase(),b=d.toLowerCase(),w=g.indexOf(b);w>=0&&(p=h("span",{className:"tree-node-search-highlight",children:[t.label.slice(0,w),h("span",{className:"single",children:t.label.slice(w,w+d.length)}),t.label.slice(w+d.length)]}))}}catch{}return{highlightedText:p,typeHighlight:m&&c.length>0}},[t.label,t.nodeId,t.fiber,a]),Ob=t=>t>0?t<.1-Number.EPSILON?"< 0.1":t<1e3?Number(t.toFixed(1)).toString():`${(t/1e3).toFixed(1)}k`:"0",GE=({node:t,nodeIndex:a,hasChildren:i,isCollapsed:l,handleTreeNodeClick:s,handleTreeNodeToggle:c,searchValue:d})=>{var m,p,g;const b=me(null),w=me((p=(m=t.renderData)==null?void 0:m.renderCount)!=null?p:0),{highlightedText:y,typeHighlight:x}=YE(t,d);Te(()=>{var M;const k=(M=t.renderData)==null?void 0:M.renderCount,E=b.current;!E||!w.current||!k||w.current===k||(E.classList.remove("count-flash"),E.offsetWidth,E.classList.add("count-flash"),w.current=k)},[(g=t.renderData)==null?void 0:g.renderCount]);const T=Nn(()=>{if(!t.renderData)return null;const{selfTime:M,totalTime:k,renderCount:E}=t.renderData;return E?h("span",{className:D("flex items-center gap-x-0.5 ml-1.5","text-[10px] text-neutral-400"),children:h("span",{ref:b,title:`Self time: ${Ob(M)}ms
Total time: ${Ob(k)}ms`,className:"count-badge",children:["×",E]})}):null},[t.renderData]),C=Nn(()=>{if(!t.fiber)return null;const{wrapperTypes:M}=no(t.fiber),k=M[0];return h("span",{className:D("flex items-center gap-x-1","text-[10px] text-neutral-400 tracking-wide","overflow-hidden"),children:[k&&h($e,{children:[h("span",{title:k?.title,className:D("rounded py-[1px] px-1","bg-neutral-700 text-neutral-300","truncate",k.type==="memo"&&"bg-[#8e61e3] text-white",x&&"bg-yellow-300 text-black"),children:k.type},k.type),k.compiler&&h("span",{className:"text-yellow-300 ml-1",children:"✨"})]}),M.length>1&&`×${M.length}`,T]})},[t.fiber,x,T]);return h("button",{type:"button",title:t.title,"data-index":a,className:D("flex items-center gap-x-1","pl-1 pr-2","w-full h-7","text-left","rounded","cursor-pointer select-none"),onClick:s,children:[h("button",{type:"button","data-index":a,onClick:c,className:D("w-6 h-6 flex items-center justify-center","text-left"),children:i&&h(tt,{name:"icon-chevron-right",size:12,className:D("transition-transform",!l&&"rotate-90")})}),y,C]})},XE=()=>{const t=me(null),a=me(null),i=me(null),l=me(null),s=me(null),c=me(0),d=me(!1),m=me(!1),p=me(null),[g,b]=Ce([]),[w,y]=Ce(new Set),[x,T]=Ce(void 0),[C,M]=Ce(zt.value),k=Nn(()=>{const _=[],z=g,R=new Map(z.map(X=>[X.nodeId,X]));for(const X of z){let F=!0,N=X;for(;N.parentId;){const L=R.get(N.parentId);if(!L)break;if(w.has(L.nodeId)){F=!1;break}N=L}F&&_.push(X)}return _},[w,g]),E=28,{virtualItems:H,totalSize:Y}=$E({count:k.length,getScrollElement:()=>t.current,estimateSize:()=>E,overscan:5}),Q=st(_=>{var z;d.current=!0,(z=l.current)==null||z.blur(),Tf.value=!0;const{parentCompositeFiber:R}=pr(_);if(!R)return;re.inspectState.value={kind:"focused",focusedDomElement:_,fiber:R};const X=k.findIndex(F=>F.element===_);if(X!==-1){T(X);const F=X*E,N=t.current;if(N){const L=N.clientHeight,W=N.scrollTop;(F<W||F+E>W+L)&&N.scrollTo({top:Math.max(0,F-L/2),behavior:"instant"})}}},[k]),J=st(_=>{const z=_.currentTarget,R=Number(z.dataset.index);if(Number.isNaN(R))return;const X=k[R].element;X&&Q(X)},[k,Q]),P=st(_=>{y(z=>{const R=new Set(z);return R.has(_)?R.delete(_):R.add(_),R})},[]),Z=st(_=>{_.stopPropagation();const z=_.target,R=Number(z.dataset.index);if(Number.isNaN(R))return;const X=k[R].nodeId;P(X)},[k,P]),ie=st(_=>{var z,R,X,F,N;(z=i.current)==null||z.classList.remove("!border-red-500");const L=[];if(!_){zt.value={query:_,matches:L,currentMatchIndex:-1};return}if(_.includes("[")&&!_.includes("]")&&_.length>_.indexOf("[")+1){(R=i.current)==null||R.classList.add("!border-red-500");return}const W=z1(_)||[];if(_.includes("[")&&!qE(W)){(X=i.current)==null||X.classList.add("!border-red-500");return}const K=_.replace(/\[.*?\]/,"").trim(),ee=/^\/.*\/$/.test(K);let te=ae=>!1;if(K.startsWith("/")&&!ee&&K.length>1){(F=i.current)==null||F.classList.add("!border-red-500");return}if(ee)try{const ae=K.slice(1,-1),ve=new RegExp(ae,"i");te=le=>ve.test(le)}catch{(N=i.current)==null||N.classList.add("!border-red-500");return}else if(K){const ae=K.toLowerCase();te=ve=>ve.toLowerCase().includes(ae)}for(const ae of g){let ve=!0;if(K&&(ve=te(ae.label)),ve&&W.length>0)if(!ae.fiber)ve=!1;else{const{wrapperTypes:le}=no(ae.fiber);ve=M1(W,le)}ve&&L.push(ae)}if(zt.value={query:_,matches:L,currentMatchIndex:L.length>0?0:-1},L.length>0){const ae=L[0],ve=k.findIndex(le=>le.nodeId===ae.nodeId);if(ve!==-1){const le=ve*E,et=t.current;if(et){const rt=et.clientHeight;et.scrollTo({top:Math.max(0,le-rt/2),behavior:"instant"})}}}},[g,k]),ne=st(_=>{const z=_.currentTarget;z&&ie(z.value)},[ie]),pe=st(_=>{const{matches:z,currentMatchIndex:R}=zt.value;if(z.length===0)return;const X=_==="next"?(R+1)%z.length:(R-1+z.length)%z.length;zt.value={...zt.value,currentMatchIndex:X};const F=z[X],N=k.findIndex(L=>L.nodeId===F.nodeId);if(N!==-1){T(N);const L=N*E,W=t.current;if(W){const K=W.clientHeight;W.scrollTo({top:Math.max(0,L-K/2),behavior:"instant"})}}},[k]),ye=st(_=>{if(a.current&&(a.current.style.width=`${_}px`),t.current){t.current.style.width=`${_}px`;const z=FE(_,c.current);t.current.style.setProperty("--indentation-size",`${z}px`)}},[]),we=st(_=>{if(!p.current)return;const z=se.value.dimensions.width,R=Math.floor(z-Tn/2);p.current.classList.remove("cursor-ew-resize","cursor-w-resize","cursor-e-resize"),_<=Tn?p.current.classList.add("cursor-w-resize"):_>=R?p.current.classList.add("cursor-e-resize"):p.current.classList.add("cursor-ew-resize")},[]),ze=st(_=>{if(_.preventDefault(),_.stopPropagation(),!t.current)return;t.current.style.setProperty("pointer-events","none"),m.current=!0;const z=_.clientX,R=t.current.offsetWidth,X=se.value.dimensions.width,F=Math.floor(X-Tn/2);we(R);const N=W=>{const K=z-W.clientX,ee=R+K;we(ee);const te=Math.min(F,Math.max(Tn,ee));ye(te)},L=()=>{t.current&&(t.current.style.removeProperty("pointer-events"),document.removeEventListener("pointermove",N),document.removeEventListener("pointerup",L),se.value={...se.value,componentsTree:{...se.value.componentsTree,width:t.current.offsetWidth}},Ft(ra,se.value),m.current=!1)};document.addEventListener("pointermove",N),document.addEventListener("pointerup",L)},[ye,we]);Te(()=>{if(!t.current)return;const _=t.current.offsetWidth;return we(_),se.subscribe(()=>{t.current&&we(t.current.offsetWidth)})},[we]);const Me=st(()=>{d.current=!1},[]);return Te(()=>{let _=!0;const z=L=>{const W=new Map,K=[];for(const{element:ee,name:te,fiber:ae}of L){if(!ee)continue;let ve=te;const{name:le,wrappers:et}=no(ae);le&&(et.length>0?ve=`${et.join("(")}(${le})${")".repeat(et.length)}`:ve=le),W.set(ee,{label:le||te,title:ve,children:[],element:ee,fiber:ae})}for(const{element:ee,depth:te}of L){if(!ee)continue;const ae=W.get(ee);if(ae)if(te===0)K.push(ae);else{let ve=ee.parentElement;for(;ve;){const le=W.get(ve);if(le){le.children=le.children||[],le.children.push(ae);break}ve=ve.parentElement}}}return K},R=()=>{const L=s.current;if(!L)return;const W=f3(),K=z(W);if(K.length>0){const ee=A1(K),te=BE(ee);if(c.current=te,ye(se.value.componentsTree.width),b(ee),_){_=!1;const ae=ee.findIndex(ve=>ve.element===L);if(ae!==-1){const ve=ae*E,le=t.current;le&&setTimeout(()=>{le.scrollTo({top:ve,behavior:"instant"})},96)}}}},X=re.inspectState.subscribe(L=>{if(L.kind==="focused"){if(Tf.value)return;ie(""),s.current=L.focusedDomElement,R()}});let F=0;const N=mm.subscribe(()=>{if(re.inspectState.value.kind==="focused"){if(cancelAnimationFrame(F),m.current)return;F=requestAnimationFrame(()=>{Tf.value=!1,R()})}});return()=>{X(),N(),zt.value={query:"",matches:[],currentMatchIndex:-1}}},[]),Te(()=>{const _=z=>{if(d.current&&x)switch(z.key){case"ArrowUp":{if(z.preventDefault(),z.stopPropagation(),x>0){const R=k[x-1];R?.element&&Q(R.element)}return}case"ArrowDown":{if(z.preventDefault(),z.stopPropagation(),x<k.length-1){const R=k[x+1];R?.element&&Q(R.element)}return}case"ArrowLeft":{z.preventDefault(),z.stopPropagation();const R=k[x];R?.nodeId&&P(R.nodeId);return}case"ArrowRight":{z.preventDefault(),z.stopPropagation();const R=k[x];R?.nodeId&&P(R.nodeId);return}}};return document.addEventListener("keydown",_),()=>{document.removeEventListener("keydown",_)}},[x,k,Q,P]),Te(()=>zt.subscribe(M),[]),Te(()=>se.subscribe(z=>{var R;(R=a.current)==null||R.style.setProperty("transition","width 0.1s"),ye(z.componentsTree.width),setTimeout(()=>{var X;(X=a.current)==null||X.style.removeProperty("transition")},500)}),[]),h("div",{className:"react-scan-components-tree flex",children:[h("div",{ref:p,onPointerDown:ze,className:"relative resize-v-line",children:h("span",{children:h(tt,{name:"icon-ellipsis",size:18})})}),h("div",{ref:a,className:"flex flex-col h-full",children:[h("div",{className:"p-2 border-b border-[#1e1e1e]",children:h("div",{ref:i,title:`Search components by:

• Name (e.g., "Button") — Case insensitive, matches any part

• Regular Expression (e.g., "/^Button/") — Use forward slashes

• Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

• Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

• Navigation:
   - Enter → Next match
   - Shift + Enter → Previous match
   - Cmd/Ctrl + Enter → Select and focus match
`,className:D("relative","flex items-center gap-x-1 px-2","rounded","border border-transparent","focus-within:border-[#454545]","bg-[#1e1e1e] text-neutral-300","transition-colors","whitespace-nowrap","overflow-hidden"),children:[h(tt,{name:"icon-search",size:12,className:" text-neutral-500"}),h("div",{className:"relative flex-1 h-7 overflow-hidden",children:h("input",{ref:l,type:"text",value:zt.value.query,onClick:_=>{_.stopPropagation(),_.currentTarget.focus()},onPointerDown:_=>{_.stopPropagation()},onKeyDown:_=>{_.key==="Escape"&&_.currentTarget.blur(),zt.value.matches.length&&(_.key==="Enter"&&_.shiftKey?pe("prev"):_.key==="Enter"&&(_.metaKey||_.ctrlKey?(_.preventDefault(),_.stopPropagation(),Q(zt.value.matches[zt.value.currentMatchIndex].element),_.currentTarget.focus()):pe("next")))},onChange:ne,className:"absolute inset-y-0 inset-x-1",placeholder:"Component name, /regex/, or [type]"})}),zt.value.query?h($e,{children:[h("span",{className:"flex items-center gap-x-0.5 text-xs text-neutral-500",children:[zt.value.currentMatchIndex+1,"|",zt.value.matches.length]}),!!zt.value.matches.length&&h($e,{children:[h("button",{type:"button",onClick:_=>{_.stopPropagation(),pe("prev")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:h(tt,{name:"icon-chevron-right",className:"-rotate-90",size:12})}),h("button",{type:"button",onClick:_=>{_.stopPropagation(),pe("next")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:h(tt,{name:"icon-chevron-right",className:"rotate-90",size:12})})]}),h("button",{type:"button",onClick:_=>{_.stopPropagation(),ie("")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:h(tt,{name:"icon-close",size:12})})]}):!!g.length&&h("span",{className:"text-xs text-neutral-500",children:g.length})]})}),h("div",{className:"flex-1 overflow-hidden",children:h("div",{ref:t,onPointerLeave:Me,className:"tree h-full overflow-auto will-change-transform",children:h("div",{className:"relative w-full",style:{height:Y},children:H.map(_=>{var z;const R=k[_.index];if(!R)return null;const X=re.inspectState.value.kind==="focused"&&R.element===re.inspectState.value.focusedDomElement,F=_.index===x;return h("div",{className:D("absolute left-0 w-full overflow-hidden","text-neutral-400 hover:text-neutral-300","bg-transparent hover:bg-[#5f3f9a]/20",(X||F)&&"text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"),style:{top:_.start,height:E},children:h("div",{className:"w-full h-full",style:{paddingLeft:`calc(${R.depth} * var(--indentation-size))`},children:h(GE,{node:R,nodeIndex:_.index,hasChildren:!!((z=R.children)!=null&&z.length),isCollapsed:w.has(R.nodeId),handleTreeNodeClick:J,handleTreeNodeToggle:Z,searchValue:C})})},R.nodeId)})})})})]})]})},vc=zc(({text:t,children:a,onCopy:i,className:l,iconSize:s=14})=>{const[c,d]=Ce(!1);Te(()=>{if(c){const g=setTimeout(()=>d(!1),600);return()=>{clearTimeout(g)}}},[c]);const m=st(g=>{g.preventDefault(),g.stopPropagation(),navigator.clipboard.writeText(t).then(()=>{d(!0),i?.(!0,t)},()=>{i?.(!1,t)})},[t,i]),p=h("button",{onClick:m,type:"button",className:D("z-10","flex items-center justify-center","hover:text-dev-pink-400","transition-colors duration-200 ease-in-out","cursor-pointer",`size-[${s}px]`,l),children:h(tt,{name:`icon-${c?"check":"copy"}`,size:[s],className:D(c&&"text-green-500")})});return a?a({ClipboardIcon:p,onClick:m}):p}),IE=({length:t,expanded:a,onToggle:i,isNegative:l})=>h("div",{className:"flex items-center gap-1",children:[h("button",{type:"button",onClick:i,className:"flex items-center p-0 opacity-50",children:h(tt,{name:"icon-chevron-right",size:12,className:D("transition-[color,transform]",l?"text-[#f87171]":"text-[#4ade80]",a&&"rotate-90")})}),h("span",{children:["Array(",t,")"]})]}),Sh=({value:t,path:a,isNegative:i})=>{const[l,s]=Ce(!1);if(!(t!==null&&typeof t=="object"&&!(t instanceof Date)))return h("div",{className:"flex items-center gap-1",children:[h("span",{className:"text-gray-500",children:[a,":"]}),h("span",{className:"truncate",children:wc(t)})]});const d=Object.entries(t);return h("div",{className:"flex flex-col",children:[h("div",{className:"flex items-center gap-1",children:[h("button",{type:"button",onClick:()=>s(!l),className:"flex items-center p-0 opacity-50",children:h(tt,{name:"icon-chevron-right",size:12,className:D("transition-[color,transform]",i?"text-[#f87171]":"text-[#4ade80]",l&&"rotate-90")})}),h("span",{className:"text-gray-500",children:[a,":"]}),!l&&h("span",{className:"truncate",children:t instanceof Date?wc(t):`{${Object.keys(t).join(", ")}}`})]}),l&&h("div",{className:"pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:d.map(([m,p])=>h(Sh,{value:p,path:m,isNegative:i},m))})]})},bc=({value:t,expanded:a,onToggle:i,isNegative:l})=>{const{value:s,error:c}=ao(t);return c?h("span",{className:"text-gray-500 font-italic",children:c}):s!==null&&typeof s=="object"&&!(s instanceof Promise)?Array.isArray(s)?h("div",{className:"flex flex-col gap-1 relative",children:[h(IE,{length:s.length,expanded:a,onToggle:i,isNegative:l}),a&&h("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:s.map((m,p)=>h(Sh,{value:m,path:p.toString(),isNegative:l},p.toString()))}),h(vc,{text:jb(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:m})=>h($e,{children:m})})]}):h("div",{className:"flex items-start gap-1 relative",children:[h("button",{type:"button",onClick:i,className:D("flex items-center","p-0 mt-0.5 mr-1","opacity-50"),children:h(tt,{name:"icon-chevron-right",size:12,className:D("transition-[color,transform]",l?"text-[#f87171]":"text-[#4ade80]",a&&"rotate-90")})}),h("div",{className:"flex-1",children:a?h("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:Object.entries(s).map(([m,p])=>h(Sh,{value:p,path:m,isNegative:l},m))}):h("span",{children:wc(s)})}),h(vc,{text:jb(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:m})=>h($e,{children:m})})]}):h("span",{children:wc(s)})},QE=50;bt({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var Th=t=>{switch(t.kind){case"initialized":return t.changes.currentValue;case"partially-initialized":return t.value}},Rb=(t,a)=>{for(const i of t){const l=a.get(i.name);if(l){a.set(l.name,{count:l.count+1,currentValue:i.value,id:l.name,lastUpdated:Date.now(),name:l.name,previousValue:i.prevValue});continue}a.set(i.name,{count:1,currentValue:i.value,id:i.name,lastUpdated:Date.now(),name:i.name,previousValue:i.prevValue})}},ZE=(t,a)=>{for(const i of t){const l=a.contextChanges.get(i.contextType);if(l){if(Fa(Th(l),i.value))continue;if(l.kind==="partially-initialized"){a.contextChanges.set(i.contextType,{kind:"initialized",changes:{count:1,currentValue:i.value,id:i.contextType.toString(),lastUpdated:Date.now(),name:i.name,previousValue:l.value}});continue}a.contextChanges.set(i.contextType,{kind:"initialized",changes:{count:l.changes.count+1,currentValue:i.value,id:i.contextType.toString(),lastUpdated:Date.now(),name:i.name,previousValue:l.changes.currentValue}});continue}a.contextChanges.set(i.contextType,{kind:"partially-initialized",id:i.contextType.toString(),lastUpdated:Date.now(),name:i.name,value:i.value})}},WE=t=>{const a={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map};return t.forEach(i=>{ZE(i.contextChanges,a),Rb(i.stateChanges,a.stateChanges),Rb(i.propsChanges,a.propsChanges)}),a},Db=(t,a)=>{const i=new Map;return t.forEach((l,s)=>{i.set(s,l)}),a.forEach((l,s)=>{const c=i.get(s);if(!c){i.set(s,l);return}i.set(s,{count:c.count+l.count,currentValue:l.currentValue,id:l.id,lastUpdated:l.lastUpdated,name:l.name,previousValue:l.previousValue})}),i},KE=(t,a)=>{const i=new Map;return t.contextChanges.forEach((l,s)=>{i.set(s,l)}),a.contextChanges.forEach((l,s)=>{const c=i.get(s);if(!c){i.set(s,l);return}if(Th(l)!==Th(c))switch(c.kind){case"initialized":switch(l.kind){case"initialized":{i.set(s,{kind:"initialized",changes:{...l.changes,count:l.changes.count+c.changes.count+1,currentValue:l.changes.currentValue,previousValue:l.changes.previousValue}});return}case"partially-initialized":{i.set(s,{kind:"initialized",changes:{count:c.changes.count+1,currentValue:l.value,id:l.id,lastUpdated:l.lastUpdated,name:l.name,previousValue:c.changes.currentValue}});return}}case"partially-initialized":switch(l.kind){case"initialized":{i.set(s,{kind:"initialized",changes:{count:l.changes.count+1,currentValue:l.changes.currentValue,id:l.changes.id,lastUpdated:l.changes.lastUpdated,name:l.changes.name,previousValue:c.value}});return}case"partially-initialized":{i.set(s,{kind:"initialized",changes:{count:1,currentValue:l.value,id:l.id,lastUpdated:l.lastUpdated,name:l.name,previousValue:c.value}});return}}}}),i},JE=(t,a)=>{const i=KE(t,a),l=Db(t.propsChanges,a.propsChanges),s=Db(t.stateChanges,a.stateChanges);return{contextChanges:i,propsChanges:l,stateChanges:s}},kh=t=>Array.from(t.propsChanges.values()).reduce((a,i)=>a+i.count,0)+Array.from(t.stateChanges.values()).reduce((a,i)=>a+i.count,0)+Array.from(t.contextChanges.values()).filter(a=>a.kind==="initialized").reduce((a,i)=>a+i.changes.count,0),PE=t=>{const a=me({queue:[]}),[i,l]=Ce({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),s=re.inspectState.value.kind==="focused"?re.inspectState.value.fiber:null,c=s?Ha(s):null;return Te(()=>{const d=setInterval(()=>{a.current.queue.length!==0&&(l(m=>{var p;const g=WE(a.current.queue),b=JE(m,g),w=kh(m),x=kh(b)-w;return(p=void 0)==null||p.call(t,x),b}),a.current.queue=[])},QE);return()=>{clearInterval(d)}},[s]),Te(()=>{if(!c)return;const d=p=>{var g;(g=a.current)==null||g.queue.push(p)};let m=re.changesListeners.get(c);return m||(m=[],re.changesListeners.set(c,m)),m.push(d),()=>{var p,g;l({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),a.current.queue=[],re.changesListeners.set(c,(g=(p=re.changesListeners.get(c))==null?void 0:p.filter(b=>b!==d))!=null?g:[])}},[c]),Te(()=>()=>{l({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),a.current.queue=[]},[c]),i},e3=zc(()=>{const[t,a]=Ce(!0),i=PE(),[l,s]=Ce(!1),c=kh(i)>0;Te(()=>{if(!l&&c){const p=setTimeout(()=>{s(!0),requestAnimationFrame(()=>{a(!0)})},0);return()=>clearTimeout(p)}},[l,c]);const d=new Map(Array.from(i.contextChanges.entries()).filter(([,p])=>p.kind==="initialized").map(([p,g])=>[p,g.kind==="partially-initialized"?null:g.changes])),m=re.inspectState.value.kind==="focused"?re.inspectState.value.fiber:null;if(m)return h($e,{children:[h(n3,{}),h("div",{className:"overflow-hidden h-full flex flex-col gap-y-2",children:[h("div",{className:"flex flex-col gap-2 px-3 pt-2",children:[h("span",{className:"text-sm font-medium text-[#888]",children:["Why did"," ",h("span",{className:"text-[#A855F7]",children:xt(m)})," ","render?"]}),!c&&h("div",{className:"text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4",children:[h("div",{children:"No changes detected since selecting"}),h("div",{children:"The props, state, and context changes within your component will be reported here"})]})]}),h("div",{className:D("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"),children:[h(kf,{changes:i.propsChanges,title:"Changed Props",isExpanded:t}),h(kf,{renderName:p=>{var g;return t3(p,(g=xt(_r(m)))!=null?g:"Unknown Component")},changes:i.stateChanges,title:"Changed State",isExpanded:t}),h(kf,{changes:d,title:"Changed Context",isExpanded:t})]})]})]})}),t3=(t,a)=>{if(Number.isNaN(Number(t)))return t;const i=Number.parseInt(t);return h("span",{className:"truncate",children:[h("span",{className:"text-white",children:[i,(s=>{const c=s%10,d=s%100;if(d>=11&&d<=13)return"th";switch(c){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(i)," hook"," "]}),h("span",{style:{color:"#666"},children:["called in ",h("i",{className:"text-[#A855F7] truncate",children:a})]})]})},n3=zc(()=>{const t=me(null),a=me(null),i=me(null),l=me({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return Te(()=>{const s=T1(()=>{var d,m,p;const g=[];((d=t.current)==null?void 0:d.dataset.flash)==="true"&&g.push(t.current),((m=a.current)==null?void 0:m.dataset.flash)==="true"&&g.push(a.current),((p=i.current)==null?void 0:p.dataset.flash)==="true"&&g.push(i.current);for(const b of g)b.classList.remove("count-flash-white"),b.offsetWidth,b.classList.add("count-flash-white")},400);return Rt.subscribe(d=>{var m,p,g,b,w,y,x,T,C;if(!t.current||!a.current||!i.current)return;const{currentIndex:M,updates:k}=d,E=k[M];!E||M===0||(s(),l.current={isPropsChanged:((g=(p=(m=E.props)==null?void 0:m.changes)==null?void 0:p.size)!=null?g:0)>0,isStateChanged:((y=(w=(b=E.state)==null?void 0:b.changes)==null?void 0:w.size)!=null?y:0)>0,isContextChanged:((C=(T=(x=E.context)==null?void 0:x.changes)==null?void 0:T.size)!=null?C:0)>0},t.current.dataset.flash!=="true"&&(t.current.dataset.flash=l.current.isPropsChanged.toString()),a.current.dataset.flash!=="true"&&(a.current.dataset.flash=l.current.isStateChanged.toString()),i.current.dataset.flash!=="true"&&(i.current.dataset.flash=l.current.isContextChanged.toString()))})},[]),h("button",{type:"button",className:D("react-section-header","overflow-hidden","max-h-0","transition-[max-height]"),children:h("div",{className:D("flex-1 react-scan-expandable"),children:h("div",{className:"overflow-hidden",children:h("div",{className:"flex items-center whitespace-nowrap",children:[h("div",{className:"flex items-center gap-x-2",children:"What changed?"}),h("div",{className:D("ml-auto","change-scope","transition-opacity duration-300 delay-150"),children:[h("div",{ref:t,children:"props"}),h("div",{ref:a,children:"state"}),h("div",{ref:i,children:"context"})]})]})})})})}),a3=t=>t,kf=zc(({title:t,changes:a,renderName:i=a3})=>{const[l,s]=Ce(new Set),[c,d]=Ce(new Set),m=Array.from(a.entries());return a.size===0?null:h("div",{children:[h("div",{className:"text-xs text-[#888] mb-1.5",children:t}),h("div",{className:"flex flex-col gap-2",children:m.map(([p,g])=>{const b=c.has(String(p)),{value:w,error:y}=ao(g.previousValue),{value:x,error:T}=ao(g.currentValue),C=$1(w,x);return h("div",{children:[h("button",{onClick:()=>{d(M=>{const k=new Set(M);return k.has(String(p))?k.delete(String(p)):k.add(String(p)),k})},className:"flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs",children:h("div",{className:"flex items-center gap-1.5 flex-1",children:[h(tt,{name:"icon-chevron-right",size:12,className:D("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",{"rotate-90":b})}),h("div",{className:"whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5",children:[i(g.name),h(o3,{count:g.count,isFunction:typeof g.currentValue=="function",showWarning:C.changes.length===0,forceFlash:!0})]})]})}),h("div",{className:D("react-scan-expandable",{"react-scan-expanded":b}),children:h("div",{className:"pl-3 text-xs font-mono border-l-1 border-[#333]",children:h("div",{className:"flex flex-col gap-0.5",children:y||T?h(r3,{currError:T,prevError:y}):C.changes.length>0?h(i3,{change:g,diff:C,expandedFns:l,renderName:i,setExpandedFns:s,title:t}):h(l3,{currValue:x,entryKey:p,expandedFns:l,prevValue:w,setExpandedFns:s})})})})]},p)})})]})}),r3=({prevError:t,currError:a})=>h($e,{children:[t&&h("div",{className:"text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic",children:t}),a&&h("div",{className:"text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5",children:a})]}),i3=({diff:t,title:a,renderName:i,change:l,expandedFns:s,setExpandedFns:c})=>t.changes.map((d,m)=>{const{value:p,error:g}=ao(d.prevValue),{value:b,error:w}=ao(d.currentValue),y=typeof p=="function"||typeof b=="function";let x;return a==="Props"&&(x=d.path.length>0?`${i(String(l.name))}.${wn(d.path)}`:void 0),a==="State"&&d.path.length>0&&(x=`state.${wn(d.path)}`),x||(x=wn(d.path)),h("div",{className:D("flex flex-col gap-y-1",m<t.changes.length-1&&"mb-4"),children:[x&&h("div",{className:"text-[#666] text-[10px]",children:x}),h("button",{type:"button",className:D("group","flex items-start","py-[3px] px-1.5","text-left text-[#f87171] bg-[#2a1515]","rounded","overflow-hidden break-all",y&&"cursor-pointer"),onClick:y?()=>{const T=`${wn(d.path)}-prev`;c(C=>{const M=new Set(C);return M.has(T)?M.delete(T):M.add(T),M})}:void 0,children:[h("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),h("span",{className:"flex-1 whitespace-nowrap font-mono",children:g?h("span",{className:"italic text-[#f87171]",children:g}):y?h("div",{className:"flex gap-1 items-start flex-col",children:[h("div",{className:"flex gap-1 items-start w-full",children:[h("span",{className:"flex-1 max-h-40",children:Ch(p,s.has(`${wn(d.path)}-prev`))}),typeof p=="function"&&h(vc,{text:p.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:T})=>h($e,{children:T})})]}),p?.toString()===b?.toString()&&h("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):h(bc,{value:p,expanded:s.has(`${wn(d.path)}-prev`),onToggle:()=>{const T=`${wn(d.path)}-prev`;c(C=>{const M=new Set(C);return M.has(T)?M.delete(T):M.add(T),M})},isNegative:!0})})]}),h("button",{type:"button",className:D("group","flex items-start","py-[3px] px-1.5","text-left text-[#4ade80] bg-[#1a2a1a]","rounded","overflow-hidden break-all",y&&"cursor-pointer"),onClick:y?()=>{const T=`${wn(d.path)}-current`;c(C=>{const M=new Set(C);return M.has(T)?M.delete(T):M.add(T),M})}:void 0,children:[h("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),h("span",{className:"flex-1 whitespace-pre-wrap font-mono",children:w?h("span",{className:"italic text-[#4ade80]",children:w}):y?h("div",{className:"flex gap-1 items-start flex-col",children:[h("div",{className:"flex gap-1 items-start w-full",children:[h("span",{className:"flex-1",children:Ch(b,s.has(`${wn(d.path)}-current`))}),typeof b=="function"&&h(vc,{text:b.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:T})=>h($e,{children:T})})]}),p?.toString()===b?.toString()&&h("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):h(bc,{value:b,expanded:s.has(`${wn(d.path)}-current`),onToggle:()=>{const T=`${wn(d.path)}-current`;c(C=>{const M=new Set(C);return M.has(T)?M.delete(T):M.add(T),M})},isNegative:!1})})]})]},`${x}-${l.name}-${m}`)}),l3=({prevValue:t,currValue:a,entryKey:i,expandedFns:l,setExpandedFns:s})=>h($e,{children:[h("div",{className:"group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded",children:[h("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),h("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:h(bc,{value:t,expanded:l.has(`${String(i)}-prev`),onToggle:()=>{const c=`${String(i)}-prev`;s(d=>{const m=new Set(d);return m.has(c)?m.delete(c):m.add(c),m})},isNegative:!0})})]}),h("div",{className:"group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5",children:[h("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),h("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:h(bc,{value:a,expanded:l.has(`${String(i)}-current`),onToggle:()=>{const c=`${String(i)}-current`;s(d=>{const m=new Set(d);return m.has(c)?m.delete(c):m.add(c),m})},isNegative:!1})})]}),typeof a=="object"&&a!==null&&h("div",{className:"text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1",children:[h(tt,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),h("span",{children:"Reference changed but objects are structurally the same"})]})]}),o3=({count:t,forceFlash:a,isFunction:i,showWarning:l})=>{const s=me(!0),c=me(null),d=me(t);return Te(()=>{const m=c.current;!m||d.current===t||(m.classList.remove("count-flash"),m.offsetWidth,m.classList.add("count-flash"),d.current=t)},[t]),Te(()=>{if(s.current){s.current=!1;return}if(a){let m=setTimeout(()=>{var p;(p=c.current)==null||p.classList.add("count-flash-white"),m=setTimeout(()=>{var g;(g=c.current)==null||g.classList.remove("count-flash-white")},300)},500);return()=>{clearTimeout(m)}}},[a]),h("div",{ref:c,className:"count-badge",children:[l&&h(tt,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),i&&h(tt,{name:"icon-function",className:"text-[#A855F7] mb-px",size:14}),"x",t]})},$a={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{$a.lastRendered.clear(),$a.expandedPaths.clear(),UE.cleanupAll(),b3(),E1.reset()}},O1=class extends pn{constructor(){super(...arguments),en(this,"state",{hasError:!1,error:null}),en(this,"handleReset",()=>{this.setState({hasError:!1,error:null}),$a.cleanup()})}static getDerivedStateFromError(t){return{hasError:!0,error:t}}render(){var t;return this.state.hasError?h("div",{className:"p-4 bg-red-950/50 h-screen backdrop-blur-sm",children:[h("div",{className:"flex items-center gap-2 mb-3 text-red-400 font-medium",children:[h(tt,{name:"icon-flame",className:"text-red-500",size:16}),"Something went wrong in the inspector"]}),h("div",{className:"p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",children:((t=this.state.error)==null?void 0:t.message)||JSON.stringify(this.state.error)}),h("button",{type:"button",onClick:this.handleReset,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",children:"Reset Inspector"})]}):this.props.children}},s3=Ba(()=>D("react-scan-inspector","flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",!Hc.value&&"opacity-100 delay-300 pointer-events-auto")),c3=hm(()=>{const t=me(null),a=i=>{if(!i)return;t.current=i;const{data:l,shouldUpdate:s}=w3(i);if(s){const c={timestamp:Date.now(),fiberInfo:p3(i),props:l.fiberProps,state:l.fiberState,context:l.fiberContext,stateNames:v3(i)};E1.addUpdate(c,i)}};return Jl(()=>{const i=re.inspectState.value;wr(()=>{var l;if(i.kind!=="focused"||!i.focusedDomElement){t.current=null,$a.cleanup();return}i.kind==="focused"&&(Hc.value=!1);const{parentCompositeFiber:s}=Lb(i.focusedDomElement,i.fiber);if(!s){re.inspectState.value={kind:"inspect-off"},Ie.value={view:"none"};return}((l=t.current)==null?void 0:l.type)!==s.type&&(t.current=s,$a.cleanup(),a(s))})}),Jl(()=>{mm.value,wr(()=>{const i=re.inspectState.value;if(i.kind!=="focused"||!i.focusedDomElement){t.current=null,$a.cleanup();return}const{parentCompositeFiber:l}=Lb(i.focusedDomElement,i.fiber);if(!l){re.inspectState.value={kind:"inspect-off"},Ie.value={view:"none"};return}a(l),i.focusedDomElement.isConnected||(t.current=null,$a.cleanup(),re.inspectState.value={kind:"inspecting",hoveredDomElement:null})})}),Te(()=>()=>{$a.cleanup()},[]),h(O1,{children:h("div",{className:s3,children:h("div",{className:"w-full h-full",children:h(e3,{})})})})}),u3=hm(()=>re.inspectState.value.kind!=="focused"?null:h(O1,{children:[h(c3,{}),h(XE,{})]})),R1=t=>{var a,i,l,s;if("__REACT_DEVTOOLS_GLOBAL_HOOK__"in window){const c=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!c?.renderers)return null;for(const[,d]of Array.from(c.renderers))try{const m=(a=d.findFiberByHostInstance)==null?void 0:a.call(d,t);if(m)return m}catch{}}if("_reactRootContainer"in t){const d=t._reactRootContainer;return(s=(l=(i=d?._internalRoot)==null?void 0:i.current)==null?void 0:l.child)!=null?s:null}for(const c in t)if(c.startsWith("__reactInternalInstance$")||c.startsWith("__reactFiber"))return t[c];return null},pm=t=>{let a=t;for(;a;){if(a.stateNode instanceof Element)return a.stateNode;if(!a.child)break;a=a.child}for(;a;){if(a.stateNode instanceof Element)return a.stateNode;if(!a.return)break;a=a.return}return null},gm=t=>{if(!t)return null;try{const a=R1(t);if(!a)return null;const i=wi(a);return i?i[0]:null}catch{return null}},wi=t=>{let a=t,i=null;for(;a;){if(Cc(a))return[a,i];Ql(a)&&!i&&(i=a),a=a.return}return null},$b=(t,a)=>!!Ny(a,l=>l===t),d3=async t=>{const a=gm(t);if(!a)return null;const i=pm(a);return i?await new Promise(s=>{const c=new IntersectionObserver(d=>{var m,p;c.disconnect(),s((p=(m=d[0])==null?void 0:m.boundingClientRect)!=null?p:null)});c.observe(i)}):null},pr=t=>{const a=gm(t);if(!a)return{};if(!pm(a))return{};const l=wi(a);if(!l)return{};const[s]=l;return{parentCompositeFiber:s}},Lb=(t,a)=>{var i,l,s,c;if(!t.isConnected)return{};let d=a??gm(t);if(!d)return{};let m=d,p=null,g=null;for(;m;){if(!m.stateNode){m=m.return;continue}if((i=De.instrumentation)!=null&&i.fiberRoots.has(m.stateNode)){p=m,g=m.stateNode.current;break}m=m.return}if(!p||!g)return{};if(d=$b(d,g)?d:(l=d.alternate)!=null?l:d,!d)return{};if(!pm(d))return{};const b=(s=wi(d))==null?void 0:s[0];return b?{parentCompositeFiber:$b(b,g)?b:(c=b.alternate)!=null?c:b}:{}},D1=t=>{var a,i,l;const s=(a=t.memoizedProps)!=null?a:{},c=(l=(i=t.alternate)==null?void 0:i.memoizedProps)!=null?l:{},d=[];for(const m in s){if(m==="children")continue;const p=s[m],g=c[m];Fa(p,g)||d.push({name:m,value:p,prevValue:g,type:1})}return d},Nh=new Set(["HTML","HEAD","META","TITLE","BASE","SCRIPT","SCRIPT","STYLE","LINK","NOSCRIPT","SOURCE","TRACK","EMBED","OBJECT","PARAM","TEMPLATE","PORTAL","SLOT","AREA","XML","DOCTYPE","COMMENT"]),yc=(t,a=!0)=>{if(t.stateNode&&"nodeType"in t.stateNode){const l=t.stateNode;return a&&l.tagName&&Nh.has(l.tagName.toLowerCase())?null:l}let i=t.child;for(;i;){const l=yc(i,a);if(l)return l;i=i.sibling}return null},f3=(t=document.body)=>{const a=[],i=s=>{if(!s)return null;const{parentCompositeFiber:c}=pr(s);return c&&yc(c)===s?s:null},l=(s,c=0)=>{var d;const m=i(s);if(m){const{parentCompositeFiber:p}=pr(m);if(!p)return;a.push({element:m,depth:c,name:(d=xt(p.type))!=null?d:"Unknown",fiber:p})}for(const p of Array.from(s.children))l(p,m?c+1:c)};return l(t),a},jb=t=>{try{if(t===null)return"null";if(t===void 0)return"undefined";if(xi(t))return"Promise";if(typeof t=="function"){const a=t.toString();try{return a.replace(/\s+/g," ").replace(/{\s+/g,`{
  `).replace(/;\s+/g,`;
  `).replace(/}\s*$/g,`
}`).replace(/\(\s+/g,"(").replace(/\s+\)/g,")").replace(/,\s+/g,", ")}catch{return a}}switch(!0){case t instanceof Date:return t.toISOString();case t instanceof RegExp:return t.toString();case t instanceof Error:return`${t.name}: ${t.message}`;case t instanceof Map:return JSON.stringify(Array.from(t.entries()),null,2);case t instanceof Set:return JSON.stringify(Array.from(t),null,2);case t instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(t.buffer)),null,2);case t instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(t)),null,2);case(ArrayBuffer.isView(t)&&"length"in t):return JSON.stringify(Array.from(t),null,2);case Array.isArray(t):return JSON.stringify(t,null,2);case typeof t=="object":return JSON.stringify(t,null,2);default:return String(t)}}catch{return String(t)}},h3=(t,a)=>{try{return typeof t!="function"||typeof a!="function"?!1:t.toString()===a.toString()}catch{return!1}},$1=(t,a,i=[],l=new WeakSet)=>{if(t===a)return{type:"primitive",changes:[],hasDeepChanges:!1};if(typeof t=="function"&&typeof a=="function"){const g=h3(t,a);return{type:"primitive",changes:[{path:i,prevValue:t,currentValue:a,sameFunction:g}],hasDeepChanges:!g}}if(t===null||a===null||t===void 0||a===void 0||typeof t!="object"||typeof a!="object")return{type:"primitive",changes:[{path:i,prevValue:t,currentValue:a}],hasDeepChanges:!0};if(l.has(t)||l.has(a))return{type:"object",changes:[{path:i,prevValue:"[Circular]",currentValue:"[Circular]"}],hasDeepChanges:!1};l.add(t),l.add(a);const s=t,c=a,d=new Set([...Object.keys(s),...Object.keys(c)]),m=[];let p=!1;for(const g of d){const b=s[g],w=c[g];if(b!==w)if(typeof b=="object"&&typeof w=="object"&&b!==null&&w!==null){const y=$1(b,w,[...i,g],l);m.push(...y.changes),y.hasDeepChanges&&(p=!0)}else m.push({path:[...i,g],prevValue:b,currentValue:w}),p=!0}return{type:"object",changes:m,hasDeepChanges:p}},wn=t=>t.length===0?"":t.reduce((a,i,l)=>/^\d+$/.test(i)?`${a}[${i}]`:l===0?i:`${a}.${i}`,"");function m3(t){const a=t.replace(/\s+/g," ").trim(),i=[];let l="";for(let k=0;k<a.length;k++){const E=a[k];if(E==="="&&a[k+1]===">"){l.trim()&&i.push(l.trim()),i.push("=>"),l="",k++;continue}/[(){}[\];,<>:\?!]/.test(E)?(l.trim()&&i.push(l.trim()),i.push(E),l=""):/\s/.test(E)?(l.trim()&&i.push(l.trim()),l=""):l+=E}l.trim()&&i.push(l.trim());const s=[];for(let k=0;k<i.length;k++){const E=i[k],H=i[k+1];E==="("&&H===")"||E==="["&&H==="]"||E==="{"&&H==="}"||E==="<"&&H===">"?(s.push(E+H),k++):s.push(E)}const c=new Set,d=new Set;function m(k,E,H){let Y=0;for(let Q=H;Q<s.length;Q++){const J=s[Q];if(J===k)Y++;else if(J===E&&(Y--,Y===0))return Q}return-1}for(let k=0;k<s.length;k++)if(s[k]==="("){const H=m("(",")",k);if(H!==-1&&s[H+1]==="=>")for(let Y=k;Y<=H;Y++)c.add(Y)}for(let k=1;k<s.length;k++){const E=s[k-1],H=s[k];if(/^[a-zA-Z0-9_$]+$/.test(E)&&H==="<"){const Y=m("<",">",k);if(Y!==-1)for(let Q=k;Q<=Y;Q++)d.add(Q)}}let p=0;const g="  ",b=[];let w="";function y(){w.trim()&&b.push(w.replace(/\s+$/,"")),w=""}function x(){y(),w=g.repeat(p)}const T=[];function C(){return T.length?T[T.length-1]:null}function M(k,E=!1){w.trim()?E||/^[),;:\].}>]$/.test(k)?w+=k:w+=` ${k}`:w+=k}for(let k=0;k<s.length;k++){const E=s[k],H=s[k+1]||"";if(["(","{","[","<"].includes(E)){if(M(E),T.push(E),E==="{")p++,x();else if((E==="("||E==="["||E==="<")&&!(c.has(k)&&E==="("||d.has(k)&&E==="<")){const Y={"(":")","[":"]","<":">"}[E];H!==Y&&H!=="()"&&H!=="[]"&&H!=="<>"&&(p++,x())}}else if([")","}","]",">"].includes(E)){const Y=C();E===")"&&Y==="("||E==="]"&&Y==="["||E===">"&&Y==="<"?!(c.has(k)&&E===")")&&!(d.has(k)&&E===">")&&(p=Math.max(p-1,0),x()):E==="}"&&Y==="{"&&(p=Math.max(p-1,0),x()),T.pop(),M(E),E==="}"&&x()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(E))M(E);else if(E==="=>")M(E);else if(E===";")M(E,!0),x();else if(E===","){M(E,!0);const Y=C();!(c.has(k)&&Y==="(")&&!(d.has(k)&&Y==="<")&&Y&&["{","[","(","<"].includes(Y)&&x()}else M(E)}return y(),b.join(`
`).replace(/\n\s*\n+/g,`
`).trim()}var Ch=(t,a=!1)=>{try{const i=t.toString(),l=i.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!l)return"ƒ";const c=(l[1]||l[2]||"").replace(/\s+/g,"");return a?m3(i):`ƒ (${c}) => ...`}catch{return"ƒ"}},wc=t=>{if(t===null)return"null";if(t===void 0)return"undefined";if(typeof t=="string")return`"${t.length>150?`${t.slice(0,20)}...`:t}"`;if(typeof t=="number"||typeof t=="boolean")return String(t);if(typeof t=="function")return Ch(t);if(Array.isArray(t))return`Array(${t.length})`;if(t instanceof Map)return`Map(${t.size})`;if(t instanceof Set)return`Set(${t.size})`;if(t instanceof Date)return t.toISOString();if(t instanceof RegExp)return t.toString();if(t instanceof Error)return`${t.name}: ${t.message}`;if(typeof t=="object"){const a=Object.keys(t);return`{${a.length>2?`${a.slice(0,2).join(", ")}, ...`:a.join(", ")}}`}return String(t)},ao=t=>{var a;if(t==null)return{value:t};if(typeof t=="function")return{value:t};if(typeof t!="object")return{value:t};if(xi(t))return{value:"Promise"};try{const i=Object.getPrototypeOf(t);return i===Promise.prototype||((a=i?.constructor)==null?void 0:a.name)==="Promise"?{value:"Promise"}:{value:t}}catch{return{value:null,error:"Error accessing value"}}},xi=t=>!!t&&(t instanceof Promise||typeof t=="object"&&"then"in t),p3=t=>{var a,i;const l=hr(t);return{displayName:xt(t)||"Unknown",type:t.type,key:t.key,id:t.index,selfTime:(a=l?.selfTime)!=null?a:null,totalTime:(i=l?.totalTime)!=null?i:null}},vm=new Map,L1=new Map,bm=new Map,Eh=null,g3=/\[(?<name>\w+),\s*set\w+\]/g,v3=t=>{var a,i;const l=((i=(a=t.type)==null?void 0:a.toString)==null?void 0:i.call(a))||"";return l?Array.from(l.matchAll(g3),s=>{var c,d;return(d=(c=s.groups)==null?void 0:c.name)!=null?d:""}):[]},b3=()=>{vm.clear(),L1.clear(),bm.clear(),Eh=null},y3=t=>{const a=t.type!==Eh;return Eh=t.type,a},Nf=(t,a,i,l)=>{const s=t.get(a),c=t===vm||t===bm,d=!Fa(i,l);if(!s)return t.set(a,{count:d&&c?1:0,currentValue:i,previousValue:l,lastUpdated:Date.now()}),{hasChanged:d,count:d&&c?1:c?0:1};if(!Fa(s.currentValue,i)){const m=s.count+1;return t.set(a,{count:m,currentValue:i,previousValue:s.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:m}}return{hasChanged:!1,count:s.count}},Ub=t=>{if(!t)return{};if(t.tag===Ty||t.tag===ky||t.tag===Hh||t.tag===Uh){let a=t.memoizedState;const i={};let l=0;for(;a;)a.queue&&a.memoizedState!==void 0&&(i[l]=a.memoizedState),a=a.next,l++;return i}return t.tag===so?t.memoizedState||{}:{}},ym=t=>{var a;const i=t.memoizedProps||{},l=((a=t.alternate)==null?void 0:a.memoizedProps)||{},s={},c={},d=Object.keys(i);for(const p of d)p in i&&(s[p]=i[p],c[p]=l[p]);const m=D1(t).map(p=>({name:p.name,value:p.value,prevValue:p.prevValue}));return{current:s,prev:c,changes:m}},wm=t=>{const a=Ub(t),i=t.alternate?Ub(t.alternate):{},l=[];for(const[s,c]of Object.entries(a)){const d=t.tag===so?s:Number(s);t.alternate&&!Fa(i[s],c)&&l.push({name:d,value:c,prevValue:i[s]})}return{current:a,prev:i,changes:l}},xm=t=>{const a=Bb(t),i=t.alternate?Bb(t.alternate):new Map,l={},s={},c=[],d=new Set;for(const[m,p]of a){const g=p.displayName,b=m;if(d.has(b))continue;d.add(b),l[g]=p.value;const w=i.get(m);w&&(s[g]=w.value,Fa(w.value,p.value)||c.push({name:g,value:p.value,prevValue:w.value,contextType:m}))}return{current:l,prev:s,changes:c}},w3=t=>{const a=()=>({current:[],changes:new Set,changesCounts:new Map});if(!t)return{data:{fiberProps:a(),fiberState:a(),fiberContext:a()},shouldUpdate:!1};let i=!1;const l=y3(t),s=a();if(t.memoizedProps){const{current:w,changes:y}=ym(t);for(const[x,T]of Object.entries(w))s.current.push({name:x,value:xi(T)?{type:"promise",displayValue:"Promise"}:T});for(const x of y){const{hasChanged:T,count:C}=Nf(vm,x.name,x.value,x.prevValue);T&&(i=!0,s.changes.add(x.name),s.changesCounts.set(x.name,C))}}const c=a(),{current:d,changes:m}=wm(t);for(const[w,y]of Object.entries(d)){const x=t.tag===so?w:Number(w);c.current.push({name:x,value:y})}for(const w of m){const{hasChanged:y,count:x}=Nf(L1,w.name,w.value,w.prevValue);y&&(i=!0,c.changes.add(w.name),c.changesCounts.set(w.name,x))}const p=a(),{current:g,changes:b}=xm(t);for(const[w,y]of Object.entries(g))p.current.push({name:w,value:y});if(!l)for(const w of b){const{hasChanged:y,count:x}=Nf(bm,w.name,w.value,w.prevValue);y&&(i=!0,p.changes.add(w.name),p.changesCounts.set(w.name,x))}return!i&&!l&&(s.changes.clear(),c.changes.clear(),p.changes.clear()),{data:{fiberProps:s,fiberState:c,fiberContext:p},shouldUpdate:i||l}},Hb=new WeakMap,Bb=t=>{var a;if(!t)return new Map;const i=Hb.get(t);if(i)return i;const l=new Map;let s=t;for(;s;){const c=s.dependencies;if(c?.firstContext){let d=c.firstContext;for(;d;){const m=d.memoizedValue,p=(a=d.context)==null?void 0:a.displayName;if(l.has(m)||l.set(d.context,{value:m,displayName:p??"UnnamedContext",contextType:null}),d===d.next)break;d=d.next}}s=s.return}return Hb.set(t,l),l},Fb=t=>{const a=()=>({current:[],changes:new Set,changesCounts:new Map});if(!t)return{fiberProps:a(),fiberState:a(),fiberContext:a()};const i=a();if(t.memoizedProps){const{current:m,changes:p}=ym(t);for(const[g,b]of Object.entries(m))i.current.push({name:g,value:xi(b)?{type:"promise",displayValue:"Promise"}:b});for(const g of p)i.changes.add(g.name),i.changesCounts.set(g.name,1)}const l=a();if(t.memoizedState){const{current:m,changes:p}=wm(t);for(const[g,b]of Object.entries(m))l.current.push({name:g,value:xi(b)?{type:"promise",displayValue:"Promise"}:b});for(const g of p)l.changes.add(g.name),l.changesCounts.set(g.name,1)}const s=a(),{current:c,changes:d}=xm(t);for(const[m,p]of Object.entries(c))s.current.push({name:m,value:xi(p)?{type:"promise",displayValue:"Promise"}:p});for(const m of d)s.changes.add(m.name),s.changesCounts.set(m.name,1);return{fiberProps:i,fiberState:l,fiberContext:s}},x3={mount:1,update:2,unmount:4},Ah=0,Vb=performance.now(),Cf=0,qb=!1,j1=()=>{Cf++;const t=performance.now();t-Vb>=1e3&&(Ah=Cf,Cf=0,Vb=t),requestAnimationFrame(j1)},U1=()=>(qb||(qb=!0,j1(),Ah=60),Ah),_3=t=>{var a,i;if(!t)return[];const l=[];if(t.tag===Ty||t.tag===ky||t.tag===Hh||t.tag===Uh){let s=t.memoizedState,c=(a=t.alternate)==null?void 0:a.memoizedState,d=0;for(;s;){if(s.queue&&s.memoizedState!==void 0){const m={type:2,name:d.toString(),value:s.memoizedState,prevValue:c?.memoizedState};Fa(m.prevValue,m.value)||l.push(m)}s=s.next,c=c?.next,d++}return l}if(t.tag===so){const s={type:3,name:"state",value:t.memoizedState,prevValue:(i=t.alternate)==null?void 0:i.memoizedState};return Fa(s.prevValue,s.value)||l.push(s),l}return l},Ef=0,Yb=new WeakMap,S3=t=>{const a=Yb.get(t);return a||(Ef++,Yb.set(t,Ef),Ef)};function T3(t,a){var i;if(!t||!a)return;const l=t.memoizedValue,s={type:4,name:(i=t.context.displayName)!=null?i:"Context.Provider",value:l,contextType:S3(t.context)};this.push(s)}var k3=t=>{const a=[];return B2(t,T3.bind(a)),a},H1=new Map,Gb=!1,Af=()=>Array.from(H1.values()),N3=16,zh=new WeakMap;function B1(t){return String(Ha(t))}function F1(t){const a=B1(t),i=zh.get(_r(t));if(i)return i.get(a)}function C3(t,a){const i=_r(t.type),l=B1(t);let s=zh.get(i);s||(s=new Map,zh.set(i,s)),s.set(l,a)}var E3=(t,a,i,l,s)=>{const c=Date.now(),d=F1(t);if((l||s)&&(!d||c-(d.lastRenderTimestamp||0)>N3)){const m=d||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:c};m.renderCount=(m.renderCount||0)+1,m.selfTime=a||0,m.totalTime=i||0,m.lastRenderTimestamp=c,C3(t,{...m})}},A3=(t,a)=>{const i={isPaused:bt(!De.options.value.enabled),fiberRoots:new WeakSet};return H1.set(t,{key:t,config:a,instrumentation:i}),Gb||(Gb=!0,Q2({name:"react-scan",onActive:a.onActive,onCommitFiberRoot(l,s){i.fiberRoots.add(s);const c=Af();for(const d of c)d.config.onCommitStart();I2(s.current,(d,m)=>{const p=_r(d.type);if(!p)return null;const g=Af(),b=[];for(let E=0,H=g.length;E<H;E++)g[E].config.isValidFiber(d)&&b.push(E);if(!b.length)return null;const w=[];if(g.some(E=>E.config.trackChanges)){const E=ym(d).changes,H=wm(d).changes,Y=xm(d).changes;w.push.apply(null,E.map(Q=>({type:1,name:Q.name,value:Q.value})));for(const Q of H)d.tag===so?w.push({type:3,name:Q.name.toString(),value:Q.value}):w.push({type:2,name:Q.name.toString(),value:Q.value});w.push.apply(null,Y.map(Q=>({type:4,name:Q.name,value:Q.value,contextType:Number(Q.contextType)})))}const{selfTime:y,totalTime:x}=hr(d),T=U1(),C={phase:x3[m],componentName:xt(p),count:1,changes:w,time:y,forget:Zl(d),unnecessary:null,didCommit:Fh(d),fps:T},M=w.length>0,k=F2(d).length>0;m==="update"&&E3(d,y,x,M,k);for(let E=0,H=b.length;E<H;E++){const Y=b[E];g[Y].config.onRender(d,[C])}});for(const d of c)d.config.onCommitFinish()},onPostCommitFiberRoot(){const l=Af();for(const s of l)s.config.onPostCommitFiberRoot()}})),i},z3=t=>{var a;const i=new Map;for(let l=0,s=t.length;l<s;l++){const c=t[l];if(!c.componentName)continue;const d=(a=i.get(c.componentName))!=null?a:[],m=UC([{aggregatedCount:1,computedKey:null,name:c.componentName,frame:null,...c,changes:{type:c.changes.reduce((b,w)=>b|w.type,0),unstable:c.changes.some(b=>b.unstable)},phase:c.phase,computedCurrent:null}]);if(!m)continue;let p=null,g=null;if(c.changes)for(let b=0,w=c.changes.length;b<w;b++){const{name:y,prevValue:x,nextValue:T,unstable:C,type:M}=c.changes[b];M===1?(p??(p={}),g??(g={}),p[`${C?"⚠️":""}${y} (prev)`]=x,g[`${C?"⚠️":""}${y} (next)`]=T):d.push({prev:x,next:T,type:M===4?"context":"state",unstable:C??!1})}p&&g&&d.push({prev:p,next:g,type:"props",unstable:!1}),i.set(m,d)}for(const[l,s]of Array.from(i.entries())){console.group(`%c${l}`,"background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;");for(const{type:c,prev:d,next:m,unstable:p}of s)console.log(`${c}:`,p?"⚠️":"",d,"!==",m);console.groupEnd()}},M3=()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log("%c[·] %cReact Scan","font-weight:bold;color:#7a68e8;font-size:20px;","font-weight:bold;font-size:14px;")},Xb=7,O3="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace",R3=.2,D3=.5,Us=(t,a)=>{const i=a-t;return Math.abs(i)<D3?a:t+i*R3},$3=4,xc=40,zf=45,Mf="115,97,230";function L3(t,a){return a[0]-t[0]}function j3(t){return[...t.entries()].sort(L3)}function Ib([t,a]){let i=`${a.slice(0,$3).join(", ")} ×${t}`;return i.length>xc&&(i=`${i.slice(0,xc)}…`),i}var Qb=t=>{const a=new Map;for(const{name:c,count:d}of t)a.set(c,(a.get(c)||0)+d);const i=new Map;for(const[c,d]of a){const m=i.get(d);m?m.push(c):i.set(d,[c])}const l=j3(i);let s=Ib(l[0]);for(let c=1,d=l.length;c<d;c++)s+=", "+Ib(l[c]);return s.length>xc?`${s.slice(0,xc)}…`:s},Zb=t=>{let a=0;for(const i of t)a+=i.width*i.height;return a},U3=(t,a)=>{for(const{id:i,name:l,count:s,x:c,y:d,width:m,height:p,didCommit:g}of a){const b={id:i,name:l,count:s,x:c,y:d,width:m,height:p,frame:0,targetX:c,targetY:d,targetWidth:m,targetHeight:p,didCommit:g},w=String(b.id),y=t.get(w);y?(y.count++,y.frame=0,y.targetX=c,y.targetY=d,y.targetWidth=m,y.targetHeight=p,y.didCommit=g):t.set(w,b)}},H3=(t,a,i)=>{for(const l of t.values()){const s=l.x-a,c=l.y-i;l.targetX=s,l.targetY=c}},B3=(t,a)=>{const i=t.getContext("2d",{alpha:!0});return i&&i.scale(a,a),i},F3=(t,a,i,l)=>{t.clearRect(0,0,a.width/i,a.height/i);const s=new Map,c=new Map;for(const p of l.values()){const{x:g,y:b,width:w,height:y,targetX:x,targetY:T,targetWidth:C,targetHeight:M,frame:k}=p;x!==g&&(p.x=Us(g,x)),T!==b&&(p.y=Us(b,T)),C!==w&&(p.width=Us(w,C)),M!==y&&(p.height=Us(y,M));const E=`${x??g},${T??b}`,H=`${E},${C??w},${M??y}`,Y=s.get(E);Y?Y.push(p):s.set(E,[p]);const Q=1-k/zf;p.frame++;const J=c.get(H)||{x:g,y:b,width:w,height:y,alpha:Q};Q>J.alpha&&(J.alpha=Q),c.set(H,J)}for(const{x:p,y:g,width:b,height:w,alpha:y}of c.values()){t.strokeStyle=`rgba(${Mf},${y})`,t.lineWidth=1;const x=Math.round(p)+.5,T=Math.round(g)+.5,C=Math.round(b),M=Math.round(w);t.beginPath(),t.rect(x,T,C,M),t.stroke(),t.fillStyle=`rgba(${Mf},${y*.1})`,t.fill()}t.font=`11px ${O3}`;const d=new Map;t.textRendering="optimizeSpeed";for(const p of s.values()){const g=p[0],{x:b,y:w,frame:y}=g,x=1-y/zf,T=Qb(p),{width:C}=t.measureText(T);if(d.set(`${b},${w},${C},${T}`,{text:T,width:C,height:11,alpha:x,x:b,y:w,outlines:p}),y>zf)for(const k of p)l.delete(String(k.id))}const m=Array.from(d.entries()).sort(([p,g],[b,w])=>Zb(w.outlines)-Zb(g.outlines));for(const[p,g]of m)if(d.has(p))for(const[b,w]of d.entries()){if(p===b)continue;const{x:y,y:x,width:T,height:C}=g,{x:M,y:k,width:E,height:H}=w;y+T>M&&M+E>y&&x+C>k&&k+H>x&&(g.text=Qb(g.outlines.concat(w.outlines)),g.width=t.measureText(g.text).width,d.delete(b))}for(const p of d.values()){const{x:g,y:b,alpha:w,width:y,height:x,text:T}=p;let C=b-x-4;C<0&&(C=0),t.fillStyle=`rgba(${Mf},${w})`,t.fillRect(g,C,y+4,x+4),t.fillStyle=`rgba(255,255,255,${w})`,t.fillText(T,g+2,C+x)}return l.size>0},V3='"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var T=(t,n)=>{let r=n-t;return Math.abs(r)<.5?n:t+r*.2};var x="115,97,230";function P(t,n){return n[0]-t[0]}function F(t){return[...t.entries()].sort(P)}function v([t,n]){let r=`${n.slice(0,4).join(", ")} \\xD7${t}`;return r.length>40&&(r=`${r.slice(0,40)}\\u2026`),r}var $=t=>{let n=new Map;for(let{name:e,count:u}of t)n.set(e,(n.get(e)||0)+u);let r=new Map;for(let[e,u]of n){let A=r.get(u);A?A.push(e):r.set(u,[e])}let d=F(r),a=v(d[0]);for(let e=1,u=d.length;e<u;e++)a+=", "+v(d[e]);return a.length>40?`${a.slice(0,40)}\\u2026`:a},H=t=>{let n=0;for(let r of t)n+=r.width*r.height;return n};var N=(t,n)=>{let r=t.getContext("2d",{alpha:!0});return r&&r.scale(n,n),r},X=(t,n,r,d)=>{t.clearRect(0,0,n.width/r,n.height/r);let a=new Map,e=new Map;for(let i of d.values()){let{x:o,y:c,width:l,height:g,targetX:s,targetY:f,targetWidth:h,targetHeight:m,frame:O}=i;s!==o&&(i.x=T(o,s)),f!==c&&(i.y=T(c,f)),h!==l&&(i.width=T(l,h)),m!==g&&(i.height=T(g,m));let M=`${s??o},${f??c}`,L=`${M},${h??l},${m??g}`,S=a.get(M);S?S.push(i):a.set(M,[i]);let C=1-O/45;i.frame++;let _=e.get(L)||{x:o,y:c,width:l,height:g,alpha:C};C>_.alpha&&(_.alpha=C),e.set(L,_)}for(let{x:i,y:o,width:c,height:l,alpha:g}of e.values()){t.strokeStyle=`rgba(${x},${g})`,t.lineWidth=1;let s=Math.round(i)+.5,f=Math.round(o)+.5,h=Math.round(c),m=Math.round(l);t.beginPath(),t.rect(s,f,h,m),t.stroke(),t.fillStyle=`rgba(${x},${g*.1})`,t.fill()}t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let i of a.values()){let o=i[0],{x:c,y:l,frame:g}=o,s=1-g/45,f=$(i),{width:h}=t.measureText(f),m=11;u.set(`${c},${l},${h},${f}`,{text:f,width:h,height:m,alpha:s,x:c,y:l,outlines:i});let O=l-m-4;if(O<0&&(O=0),g>45)for(let M of i)d.delete(String(M.id))}let A=Array.from(u.entries()).sort(([i,o],[c,l])=>H(l.outlines)-H(o.outlines));for(let[i,o]of A)if(u.has(i))for(let[c,l]of u.entries()){if(i===c)continue;let{x:g,y:s,width:f,height:h}=o,{x:m,y:O,width:M,height:L}=l;g+f>m&&m+M>g&&s+h>O&&O+L>s&&(o.text=$(o.outlines.concat(l.outlines)),o.width=t.measureText(o.text).width,u.delete(c))}for(let i of u.values()){let{x:o,y:c,alpha:l,width:g,height:s,text:f}=i,h=c-s-4;h<0&&(h=0),t.fillStyle=`rgba(${x},${l})`,t.fillRect(o,h,g+4,s+4),t.fillStyle=`rgba(255,255,255,${l})`,t.fillText(f,o+2,h+s)}return d.size>0};var p=null,w=null,b=1,y=new Map,E=null,R=()=>{if(!w||!p)return;X(w,p,b,y)?E=requestAnimationFrame(R):E=null};self.onmessage=t=>{let{type:n}=t.data;if(n==="init"&&(p=t.data.canvas,b=t.data.dpr,p&&(p.width=t.data.width,p.height=t.data.height,w=N(p,b))),!(!p||!w)){if(n==="resize"){b=t.data.dpr,p.width=t.data.width*b,p.height=t.data.height*b,w.resetTransform(),w.scale(b,b),R();return}if(n==="draw-outlines"){let{data:r,names:d}=t.data,a=new Float32Array(r);for(let e=0;e<a.length;e+=7){let u=a[e+2],A=a[e+3],i=a[e+4],o=a[e+5],c=a[e+6],l={id:a[e],name:d[e/7],count:a[e+1],x:u,y:A,width:i,height:o,frame:0,targetX:u,targetY:A,targetWidth:i,targetHeight:o,didCommit:c},g=String(l.id),s=y.get(g);s?(s.count++,s.frame=0,s.targetX=u,s.targetY=A,s.targetWidth=i,s.targetHeight=o,s.didCommit=c):y.set(g,l)}E||(E=requestAnimationFrame(R));return}if(n==="scroll"){let{deltaX:r,deltaY:d}=t.data;for(let a of y.values()){let e=a.x-r,u=a.y-d;a.targetX=e,a.targetY=u}}}};})();\n',Sn=null,_c=null,gr=null,hn=1,Sc=null,_m=new Map,Xl=new Map,bi=new Set,q3=t=>{if(!Cc(t))return;const a=typeof t.type=="string"?t.type:xt(t);if(!a)return;const i=Xl.get(t),l=V2(t),s=Fh(t);i?i.count++:(Xl.set(t,{name:a,count:1,elements:l.map(c=>c.stateNode),didCommit:s?1:0}),bi.add(t))},Y3=t=>{const a=t[0];if(t.length===1)return a;let i,l,s,c;for(let d=0,m=t.length;d<m;d++){const p=t[d];i=i==null?p.x:Math.min(i,p.x),l=l==null?p.y:Math.min(l,p.y),s=s==null?p.x+p.width:Math.max(s,p.x+p.width),c=c==null?p.y+p.height:Math.max(c,p.y+p.height)}return i==null||l==null||s==null||c==null?t[0]:new DOMRect(i,l,s-i,c-l)};function G3(t,a){const i=[];for(const l of t){const s=l.target;this.seenElements.has(s)||(this.seenElements.add(s),i.push(l))}i.length>0&&this.resolveNext&&(this.resolveNext(i),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(a.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var V1=async function*(t){const a={uniqueElements:new Set(t),seenElements:new Set,resolveNext:null,done:!1},i=new IntersectionObserver(G3.bind(a));for(const l of a.uniqueElements)i.observe(l);for(;!a.done;){const l=await new Promise(s=>{a.resolveNext=s});l.length>0&&(yield l)}},X3=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer,I3=async()=>{const t=[];for(const i of bi){const l=Xl.get(i);if(l)for(let s=0;s<l.elements.length;s++)l.elements[s]instanceof Element&&t.push(l.elements[s])}const a=new Map;for await(const i of V1(t)){for(const d of i){const m=d.target,p=d.intersectionRect;d.isIntersecting&&p.width&&p.height&&a.set(m,p)}const l=[],s=[],c=[];for(const d of bi){const m=Xl.get(d);if(!m)continue;const p=[];for(let g=0;g<m.elements.length;g++){const b=m.elements[g],w=a.get(b);w&&p.push(w)}p.length&&(l.push(m),s.push(Y3(p)),c.push(Ha(d)))}if(l.length>0){const d=new X3(l.length*Xb*4),m=new Float32Array(d),p=new Array(l.length);let g;for(let b=0,w=l.length;b<w;b++){const y=l[b],x=c[b],{x:T,y:C,width:M,height:k}=s[b],{count:E,name:H,didCommit:Y}=y;if(Sn){const Q=b*Xb;m[Q]=x,m[Q+1]=E,m[Q+2]=T,m[Q+3]=C,m[Q+4]=M,m[Q+5]=k,m[Q+6]=Y,p[b]=H}else g||(g=new Array(l.length)),g[b]={id:x,name:H,count:E,x:T,y:C,width:M,height:k,didCommit:Y}}Sn?Sn.postMessage({type:"draw-outlines",data:d,names:p}):_c&&gr&&g&&(U3(_m,g),Sc||(Sc=requestAnimationFrame(Sm)))}}for(const i of bi)Xl.delete(i),bi.delete(i)},Sm=()=>{if(!gr||!_c)return;F3(gr,_c,hn,_m)?Sc=requestAnimationFrame(Sm):Sc=null},Q3=typeof OffscreenCanvas<"u"&&typeof Worker<"u",Wb=()=>Math.min(window.devicePixelRatio||1,2),Z3=()=>{W3();const t=document.createElement("div");t.setAttribute("data-react-scan","true");const a=t.attachShadow({mode:"open"}),i=document.createElement("canvas");if(i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.pointerEvents="none",i.style.zIndex="2147483646",i.setAttribute("aria-hidden","true"),a.appendChild(i),!i)return null;hn=Wb(),_c=i;const{innerWidth:l,innerHeight:s}=window;i.style.width=`${l}px`,i.style.height=`${s}px`;const c=l*hn,d=s*hn;i.width=c,i.height=d;const m=De.options.value.useOffscreenCanvasWorker===!1;if(Q3&&!window.__REACT_SCAN_EXTENSION__&&!m)try{const y=URL.createObjectURL(new Blob([V3],{type:"application/javascript"}));Sn=new Worker(y);const x=i.transferControlToOffscreen();Sn.postMessage({type:"init",canvas:x,width:i.width,height:i.height,dpr:hn},[x])}catch(y){Sn=null,De.options.value._debug==="verbose"&&console.warn("Failed to initialize OffscreenCanvas worker:",y)}Sn||(gr=B3(i,hn));let p=!1;window.addEventListener("resize",()=>{p||(p=!0,setTimeout(()=>{const y=window.innerWidth,x=window.innerHeight;hn=Wb(),i.style.width=`${y}px`,i.style.height=`${x}px`,Sn?Sn.postMessage({type:"resize",width:y,height:x,dpr:hn}):(i.width=y*hn,i.height=x*hn,gr&&(gr.resetTransform(),gr.scale(hn,hn)),Sm()),p=!1}))});let g=window.scrollX,b=window.scrollY,w=!1;return window.addEventListener("scroll",()=>{w||(w=!0,setTimeout(()=>{const{scrollX:y,scrollY:x}=window,T=y-g,C=x-b;g=y,b=x,Sn?Sn.postMessage({type:"scroll",deltaX:T,deltaY:C}):requestAnimationFrame(H3.bind(null,_m,T,C)),w=!1},32))}),setInterval(()=>{bi.size&&requestAnimationFrame(I3)},32),a.appendChild(i),t},Kb=()=>globalThis.__REACT_SCAN_STOP__,W3=()=>{const t=document.querySelector("[data-react-scan]");t&&t.remove()},K3=t=>{var a,i;if(Cc(t)&&De.options.value.showToolbar!==!1&&re.inspectState.value.kind==="focused"){const l=t,{selfTime:s}=hr(t),c=xt(t.type),d=Ha(l),m=re.reportData.get(d),p=(a=m?.count)!=null?a:0,g=(i=m?.time)!=null?i:0,b=[],w=re.changesListeners.get(Ha(t));if(w?.length){const x=D1(t).map(k=>({type:1,name:k.name,value:k.value,prevValue:k.prevValue,unstable:!1})),T=_3(t),M=k3(t).map(k=>({name:k.name,type:4,value:k.value,contextType:k.contextType}));w.forEach(k=>{k({propsChanges:x,stateChanges:T,contextChanges:M})})}const y={count:p+1,time:g+s||0,renders:[],displayName:c,type:_r(t.type)||null,changes:b};re.reportData.set(d,y),Mh=!0}},Mh=!1,Jb,J3=()=>{clearInterval(Jb),Jb=setInterval(()=>{Mh&&(re.lastReportTime.value=Date.now(),Mh=!1)},50)},P3=t=>!az.has(t.memoizedProps),Pb=!1,e4=t=>{if(Kb()||Pb)return;Pb=!0;let a,i=!1;const l=()=>{i||(a&&cancelAnimationFrame(a),a=requestAnimationFrame(()=>{i=!0;const c=Z3();c&&document.documentElement.appendChild(c),t()}))},s=A3("react-scan-devtools-0.1.0",{onCommitStart:()=>{var c,d;(d=(c=De.options.value).onCommitStart)==null||d.call(c)},onActive:(()=>{let c=!1;return()=>{Kb()||c||(c=!0,l(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:De}),J3(),M3())}})(),onError:()=>{},isValidFiber:P3,onRender:(c,d)=>{var m,p,g,b,w;Cc(c)&&((p=(m=re).interactionListeningForRenders)==null||p.call(m,c,d));const y=(g=De.instrumentation)==null?void 0:g.isPaused.value,x=re.inspectState.value.kind==="inspect-off"||re.inspectState.value.kind==="uninitialized";y&&x||(y||q3(c),De.options.value.log&&z3(d),re.inspectState.value.kind==="focused"&&(mm.value=Date.now()),x||K3(c),(w=(b=De.options.value).onRender)==null||w.call(b,c,d))},onCommitFinish:()=>{var c,d;l(),(d=(c=De.options.value).onCommitFinish)==null||d.call(c)},onPostCommitFiberRoot(){l()},trackChanges:!1});De.instrumentation=s},t4=`/*! tailwindcss v4.2.4 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-950: oklch(25.8% 0.092 26.042);
    --color-yellow-300: oklch(90.5% 0.182 98.111);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-purple-400: oklch(71.4% 0.203 305.504);
    --color-purple-500: oklch(62.7% 0.265 303.9);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-zinc-200: oklch(92% 0.004 286.32);
    --color-zinc-400: oklch(70.5% 0.015 286.067);
    --color-zinc-500: oklch(55.2% 0.016 285.938);
    --color-zinc-600: oklch(44.2% 0.017 285.786);
    --color-zinc-700: oklch(37% 0.013 285.805);
    --color-zinc-800: oklch(27.4% 0.006 286.033);
    --color-zinc-900: oklch(21% 0.006 285.885);
    --color-neutral-300: oklch(87% 0 0);
    --color-neutral-400: oklch(70.8% 0 0);
    --color-neutral-500: oklch(55.6% 0 0);
    --color-neutral-700: oklch(37.1% 0 0);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 4px;
    --container-md: 448px;
    --text-xs: 12px;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 14px;
    --text-sm--line-height: calc(1.25 / 0.875);
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-wide: 0.025em;
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 8px;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --blur-sm: 8px;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
      -o-tab-size: 4;
         tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
    font-feature-settings: normal;
    font-variation-settings: normal;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::-moz-placeholder {
    opacity: 1;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::-moz-placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    -webkit-appearance: button;
       -moz-appearance: button;
            appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .pointer-events-auto {
    pointer-events: auto;
  }
  .pointer-events-bounding-box {
    pointer-events: bounding-box;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  .collapse {
    visibility: collapse;
  }
  .visible {
    visibility: visible;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .inset-x-1 {
    inset-inline: calc(var(--spacing) * 1);
  }
  .inset-y-0 {
    inset-block: calc(var(--spacing) * 0);
  }
  .start {
    inset-inline-start: var(--spacing);
  }
  .end {
    inset-inline-end: var(--spacing);
  }
  .-top-1 {
    top: calc(var(--spacing) * -1);
  }
  .-top-2\\.5 {
    top: calc(var(--spacing) * -2.5);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-0\\.5 {
    top: calc(var(--spacing) * 0.5);
  }
  .top-1\\/2 {
    top: calc(1 / 2 * 100%);
  }
  .top-2 {
    top: calc(var(--spacing) * 2);
  }
  .-right-1 {
    right: calc(var(--spacing) * -1);
  }
  .-right-2\\.5 {
    right: calc(var(--spacing) * -2.5);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-0\\.5 {
    right: calc(var(--spacing) * 0.5);
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .right-4 {
    right: calc(var(--spacing) * 4);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .bottom-4 {
    bottom: calc(var(--spacing) * 4);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-3 {
    left: calc(var(--spacing) * 3);
  }
  .z-10 {
    z-index: 10;
  }
  .z-50 {
    z-index: 50;
  }
  .z-100 {
    z-index: 100;
  }
  .z-\\[214748365\\] {
    z-index: 214748365;
  }
  .z-\\[214748367\\] {
    z-index: 214748367;
  }
  .z-\\[124124124124\\] {
    z-index: 124124124124;
  }
  .container {
    width: 100%;
    @media (width >= 640px) {
      max-width: 640px;
    }
    @media (width >= 768px) {
      max-width: 768px;
    }
    @media (width >= 1024px) {
      max-width: 1024px;
    }
    @media (width >= 1280px) {
      max-width: 1280px;
    }
    @media (width >= 1536px) {
      max-width: 1536px;
    }
  }
  .m-\\[2px\\] {
    margin: 2px;
  }
  .mx-0\\.5 {
    margin-inline: calc(var(--spacing) * 0.5);
  }
  .mt-0\\.5 {
    margin-top: calc(var(--spacing) * 0.5);
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mr-0\\.5 {
    margin-right: calc(var(--spacing) * 0.5);
  }
  .mr-1 {
    margin-right: calc(var(--spacing) * 1);
  }
  .mr-1\\.5 {
    margin-right: calc(var(--spacing) * 1.5);
  }
  .mr-16 {
    margin-right: calc(var(--spacing) * 16);
  }
  .mr-auto {
    margin-right: auto;
  }
  .mb-1\\.5 {
    margin-bottom: calc(var(--spacing) * 1.5);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-px {
    margin-bottom: 1px;
  }
  .\\!ml-0 {
    margin-left: calc(var(--spacing) * 0) !important;
  }
  .ml-1 {
    margin-left: calc(var(--spacing) * 1);
  }
  .ml-1\\.5 {
    margin-left: calc(var(--spacing) * 1.5);
  }
  .ml-auto {
    margin-left: auto;
  }
  .block {
    display: block;
  }
  .contents {
    display: contents;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .h-1 {
    height: calc(var(--spacing) * 1);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-4\\/5 {
    height: calc(4 / 5 * 100%);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-\\[28px\\] {
    height: 28px;
  }
  .h-\\[48px\\] {
    height: 48px;
  }
  .h-\\[50px\\] {
    height: 50px;
  }
  .h-\\[150px\\] {
    height: 150px;
  }
  .h-\\[235px\\] {
    height: 235px;
  }
  .h-\\[calc\\(100\\%-25px\\)\\] {
    height: calc(100% - 25px);
  }
  .h-\\[calc\\(100\\%-40px\\)\\] {
    height: calc(100% - 40px);
  }
  .h-\\[calc\\(100\\%-48px\\)\\] {
    height: calc(100% - 48px);
  }
  .h-\\[calc\\(100\\%-150px\\)\\] {
    height: calc(100% - 150px);
  }
  .h-\\[calc\\(100\\%-200px\\)\\] {
    height: calc(100% - 200px);
  }
  .h-fit {
    height: -moz-fit-content;
    height: fit-content;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }
  .max-h-0 {
    max-height: calc(var(--spacing) * 0);
  }
  .max-h-9 {
    max-height: calc(var(--spacing) * 9);
  }
  .max-h-40 {
    max-height: calc(var(--spacing) * 40);
  }
  .min-h-9 {
    min-height: calc(var(--spacing) * 9);
  }
  .min-h-\\[48px\\] {
    min-height: 48px;
  }
  .min-h-fit {
    min-height: -moz-fit-content;
    min-height: fit-content;
  }
  .w-1 {
    width: calc(var(--spacing) * 1);
  }
  .w-1\\/2 {
    width: calc(1 / 2 * 100%);
  }
  .w-1\\/3 {
    width: calc(1 / 3 * 100%);
  }
  .w-2\\/4 {
    width: calc(2 / 4 * 100%);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-4\\/5 {
    width: calc(4 / 5 * 100%);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-80 {
    width: calc(var(--spacing) * 80);
  }
  .w-\\[20px\\] {
    width: 20px;
  }
  .w-\\[72px\\] {
    width: 72px;
  }
  .w-\\[90\\%\\] {
    width: 90%;
  }
  .w-\\[calc\\(100\\%-200px\\)\\] {
    width: calc(100% - 200px);
  }
  .w-fit {
    width: -moz-fit-content;
    width: fit-content;
  }
  .w-full {
    width: 100%;
  }
  .w-px {
    width: 1px;
  }
  .w-screen {
    width: 100vw;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .min-w-\\[200px\\] {
    min-width: 200px;
  }
  .min-w-fit {
    min-width: -moz-fit-content;
    min-width: fit-content;
  }
  .flex-1 {
    flex: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .grow {
    flex-grow: 1;
  }
  .-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-\\[200\\%\\] {
    --tw-translate-y: calc(200% * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-0 {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .scale-110 {
    --tw-scale-x: 110%;
    --tw-scale-y: 110%;
    --tw-scale-z: 110%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .-rotate-90 {
    rotate: calc(90deg * -1);
  }
  .rotate-90 {
    rotate: 90deg;
  }
  .rotate-180 {
    rotate: 180deg;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .animate-fade-in {
    animation: fadeIn ease-in forwards;
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-e-resize {
    cursor: e-resize;
  }
  .cursor-ew-resize {
    cursor: ew-resize;
  }
  .cursor-ew-resize {
    cursor: ew-resize;
  }
  .cursor-move {
    cursor: move;
  }
  .cursor-move {
    cursor: move;
  }
  .cursor-nesw-resize {
    cursor: nesw-resize;
  }
  .cursor-nesw-resize {
    cursor: nesw-resize;
  }
  .cursor-ns-resize {
    cursor: ns-resize;
  }
  .cursor-ns-resize {
    cursor: ns-resize;
  }
  .cursor-nwse-resize {
    cursor: nwse-resize;
  }
  .cursor-nwse-resize {
    cursor: nwse-resize;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .cursor-w-resize {
    cursor: w-resize;
  }
  .\\[touch-action\\:none\\] {
    touch-action: none;
  }
  .resize {
    resize: both;
  }
  .flex-col {
    flex-direction: column;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .gap-0\\.5 {
    gap: calc(var(--spacing) * 0.5);
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .space-y-1\\.5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .gap-x-0\\.5 {
    -moz-column-gap: calc(var(--spacing) * 0.5);
         column-gap: calc(var(--spacing) * 0.5);
  }
  .gap-x-1 {
    -moz-column-gap: calc(var(--spacing) * 1);
         column-gap: calc(var(--spacing) * 1);
  }
  .gap-x-1\\.5 {
    -moz-column-gap: calc(var(--spacing) * 1.5);
         column-gap: calc(var(--spacing) * 1.5);
  }
  .gap-x-2 {
    -moz-column-gap: calc(var(--spacing) * 2);
         column-gap: calc(var(--spacing) * 2);
  }
  .gap-x-3 {
    -moz-column-gap: calc(var(--spacing) * 3);
         column-gap: calc(var(--spacing) * 3);
  }
  .gap-x-4 {
    -moz-column-gap: calc(var(--spacing) * 4);
         column-gap: calc(var(--spacing) * 4);
  }
  .gap-y-0\\.5 {
    row-gap: calc(var(--spacing) * 0.5);
  }
  .gap-y-1 {
    row-gap: calc(var(--spacing) * 1);
  }
  .gap-y-2 {
    row-gap: calc(var(--spacing) * 2);
  }
  .gap-y-4 {
    row-gap: calc(var(--spacing) * 4);
  }
  .divide-y {
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(1px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    }
  }
  .divide-zinc-800 {
    :where(& > :not(:last-child)) {
      border-color: var(--color-zinc-800);
    }
  }
  .place-self-center {
    place-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .\\!overflow-visible {
    overflow: visible !important;
  }
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .overflow-x-hidden {
    overflow-x: hidden;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .rounded {
    border-radius: 4px;
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-sm {
    border-radius: var(--radius-sm);
  }
  .rounded-t-lg {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
  }
  .rounded-t-sm {
    border-top-left-radius: var(--radius-sm);
    border-top-right-radius: var(--radius-sm);
  }
  .rounded-l-md {
    border-top-left-radius: var(--radius-md);
    border-bottom-left-radius: var(--radius-md);
  }
  .rounded-l-sm {
    border-top-left-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-sm);
  }
  .rounded-tl-lg {
    border-top-left-radius: var(--radius-lg);
  }
  .rounded-r-md {
    border-top-right-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
  }
  .rounded-r-sm {
    border-top-right-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-sm);
  }
  .rounded-tr-lg {
    border-top-right-radius: var(--radius-lg);
  }
  .rounded-br-lg {
    border-bottom-right-radius: var(--radius-lg);
  }
  .rounded-bl-lg {
    border-bottom-left-radius: var(--radius-lg);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-4 {
    border-style: var(--tw-border-style);
    border-width: 4px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-l-0 {
    border-left-style: var(--tw-border-style);
    border-left-width: 0px;
  }
  .border-l-1 {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-none {
    --tw-border-style: none;
    border-style: none;
  }
  .\\!border-red-500 {
    border-color: var(--color-red-500) !important;
  }
  .border-\\[\\#1e1e1e\\] {
    border-color: #1e1e1e;
  }
  .border-\\[\\#222\\] {
    border-color: #222;
  }
  .border-\\[\\#333\\] {
    border-color: #333;
  }
  .border-\\[\\#27272A\\] {
    border-color: #27272A;
  }
  .border-transparent {
    border-color: transparent;
  }
  .border-zinc-800 {
    border-color: var(--color-zinc-800);
  }
  .bg-\\[\\#0A0A0A\\] {
    background-color: #0A0A0A;
  }
  .bg-\\[\\#1D3A66\\] {
    background-color: #1D3A66;
  }
  .bg-\\[\\#1E1E1E\\] {
    background-color: #1E1E1E;
  }
  .bg-\\[\\#1a2a1a\\] {
    background-color: #1a2a1a;
  }
  .bg-\\[\\#1e1e1e\\] {
    background-color: #1e1e1e;
  }
  .bg-\\[\\#2a1515\\] {
    background-color: #2a1515;
  }
  .bg-\\[\\#4b4b4b\\] {
    background-color: #4b4b4b;
  }
  .bg-\\[\\#5f3f9a\\] {
    background-color: #5f3f9a;
  }
  .bg-\\[\\#5f3f9a\\]\\/40 {
    background-color: color-mix(in oklab, #5f3f9a 40%, transparent);
  }
  .bg-\\[\\#6a369e\\] {
    background-color: #6a369e;
  }
  .bg-\\[\\#8e61e3\\] {
    background-color: #8e61e3;
  }
  .bg-\\[\\#7521c8\\] {
    background-color: #7521c8;
  }
  .bg-\\[\\#18181B\\] {
    background-color: #18181B;
  }
  .bg-\\[\\#18181B\\]\\/50 {
    background-color: color-mix(in oklab, #18181B 50%, transparent);
  }
  .bg-\\[\\#27272A\\] {
    background-color: #27272A;
  }
  .bg-\\[\\#44444a\\] {
    background-color: #44444a;
  }
  .bg-\\[\\#141414\\] {
    background-color: #141414;
  }
  .bg-\\[\\#214379d4\\] {
    background-color: #214379d4;
  }
  .bg-\\[\\#412162\\] {
    background-color: #412162;
  }
  .bg-\\[\\#EFD81A\\] {
    background-color: #EFD81A;
  }
  .bg-\\[\\#b77116\\] {
    background-color: #b77116;
  }
  .bg-\\[\\#b94040\\] {
    background-color: #b94040;
  }
  .bg-\\[\\#d36cff\\] {
    background-color: #d36cff;
  }
  .bg-\\[\\#efd81a6b\\] {
    background-color: #efd81a6b;
  }
  .bg-black {
    background-color: var(--color-black);
  }
  .bg-black\\/40 {
    background-color: color-mix(in srgb, #000 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 40%, transparent);
    }
  }
  .bg-green-500\\/50 {
    background-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-green-500) 50%, transparent);
    }
  }
  .bg-green-500\\/60 {
    background-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-green-500) 60%, transparent);
    }
  }
  .bg-neutral-700 {
    background-color: var(--color-neutral-700);
  }
  .bg-purple-500 {
    background-color: var(--color-purple-500);
  }
  .bg-purple-500\\/90 {
    background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-purple-500) 90%, transparent);
    }
  }
  .bg-purple-800 {
    background-color: var(--color-purple-800);
  }
  .bg-red-500 {
    background-color: var(--color-red-500);
  }
  .bg-red-500\\/90 {
    background-color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-500) 90%, transparent);
    }
  }
  .bg-red-950\\/50 {
    background-color: color-mix(in srgb, oklch(25.8% 0.092 26.042) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-950) 50%, transparent);
    }
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-yellow-300 {
    background-color: var(--color-yellow-300);
  }
  .bg-zinc-800 {
    background-color: var(--color-zinc-800);
  }
  .bg-zinc-900\\/30 {
    background-color: color-mix(in srgb, oklch(21% 0.006 285.885) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-zinc-900) 30%, transparent);
    }
  }
  .bg-zinc-900\\/50 {
    background-color: color-mix(in srgb, oklch(21% 0.006 285.885) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-zinc-900) 50%, transparent);
    }
  }
  .p-0 {
    padding: calc(var(--spacing) * 0);
  }
  .p-1 {
    padding: calc(var(--spacing) * 1);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-\\[1px\\] {
    padding-block: 1px;
  }
  .py-\\[3px\\] {
    padding-block: 3px;
  }
  .py-\\[5px\\] {
    padding-block: 5px;
  }
  .pt-0 {
    padding-top: calc(var(--spacing) * 0);
  }
  .pt-2 {
    padding-top: calc(var(--spacing) * 2);
  }
  .pt-5 {
    padding-top: calc(var(--spacing) * 5);
  }
  .pr-1 {
    padding-right: calc(var(--spacing) * 1);
  }
  .pr-1\\.5 {
    padding-right: calc(var(--spacing) * 1.5);
  }
  .pr-2 {
    padding-right: calc(var(--spacing) * 2);
  }
  .pr-2\\.5 {
    padding-right: calc(var(--spacing) * 2.5);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pl-1 {
    padding-left: calc(var(--spacing) * 1);
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
  .pl-2\\.5 {
    padding-left: calc(var(--spacing) * 2.5);
  }
  .pl-3 {
    padding-left: calc(var(--spacing) * 3);
  }
  .pl-5 {
    padding-left: calc(var(--spacing) * 5);
  }
  .pl-6 {
    padding-left: calc(var(--spacing) * 6);
  }
  .text-left {
    text-align: left;
  }
  .font-mono {
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[8px\\] {
    font-size: 8px;
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .text-\\[11px\\] {
    font-size: 11px;
  }
  .text-\\[13px\\] {
    font-size: 13px;
  }
  .text-\\[14px\\] {
    font-size: 14px;
  }
  .text-\\[17px\\] {
    font-size: 17px;
  }
  .leading-6 {
    --tw-leading: calc(var(--spacing) * 6);
    line-height: calc(var(--spacing) * 6);
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-wide {
    --tw-tracking: var(--tracking-wide);
    letter-spacing: var(--tracking-wide);
  }
  .text-wrap {
    text-wrap: wrap;
  }
  .break-words {
    overflow-wrap: break-word;
  }
  .break-all {
    word-break: break-all;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }
  .text-\\[\\#4ade80\\] {
    color: #4ade80;
  }
  .text-\\[\\#5a5a5a\\] {
    color: #5a5a5a;
  }
  .text-\\[\\#6E6E77\\] {
    color: #6E6E77;
  }
  .text-\\[\\#6F6F78\\] {
    color: #6F6F78;
  }
  .text-\\[\\#8E61E3\\] {
    color: #8E61E3;
  }
  .text-\\[\\#666\\] {
    color: #666;
  }
  .text-\\[\\#888\\] {
    color: #888;
  }
  .text-\\[\\#999\\] {
    color: #999;
  }
  .text-\\[\\#7346a0\\] {
    color: #7346a0;
  }
  .text-\\[\\#65656D\\] {
    color: #65656D;
  }
  .text-\\[\\#737373\\] {
    color: #737373;
  }
  .text-\\[\\#A1A1AA\\] {
    color: #A1A1AA;
  }
  .text-\\[\\#A855F7\\] {
    color: #A855F7;
  }
  .text-\\[\\#E4E4E7\\] {
    color: #E4E4E7;
  }
  .text-\\[\\#d36cff\\] {
    color: #d36cff;
  }
  .text-\\[\\#f87171\\] {
    color: #f87171;
  }
  .text-black {
    color: var(--color-black);
  }
  .text-gray-100 {
    color: var(--color-gray-100);
  }
  .text-gray-300 {
    color: var(--color-gray-300);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-green-500 {
    color: var(--color-green-500);
  }
  .text-neutral-300 {
    color: var(--color-neutral-300);
  }
  .text-neutral-400 {
    color: var(--color-neutral-400);
  }
  .text-neutral-500 {
    color: var(--color-neutral-500);
  }
  .text-purple-400 {
    color: var(--color-purple-400);
  }
  .text-red-300 {
    color: var(--color-red-300);
  }
  .text-red-400 {
    color: var(--color-red-400);
  }
  .text-red-500 {
    color: var(--color-red-500);
  }
  .text-white {
    color: var(--color-white);
  }
  .text-white\\/30 {
    color: color-mix(in srgb, #fff 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 30%, transparent);
    }
  }
  .text-white\\/70 {
    color: color-mix(in srgb, #fff 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 70%, transparent);
    }
  }
  .text-yellow-300 {
    color: var(--color-yellow-300);
  }
  .text-yellow-500 {
    color: var(--color-yellow-500);
  }
  .text-zinc-200 {
    color: var(--color-zinc-200);
  }
  .text-zinc-400 {
    color: var(--color-zinc-400);
  }
  .text-zinc-500 {
    color: var(--color-zinc-500);
  }
  .text-zinc-600 {
    color: var(--color-zinc-600);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .italic {
    font-style: italic;
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .opacity-100 {
    opacity: 100%;
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-white\\/\\[0\\.08\\] {
    --tw-ring-color: color-mix(in srgb, #fff 8%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-white) 8%, transparent);
    }
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .backdrop-blur-sm {
    --tw-backdrop-blur: blur(var(--blur-sm));
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[border-radius\\] {
    transition-property: border-radius;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[color\\,transform\\] {
    transition-property: color,transform;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[max-height\\] {
    transition-property: max-height;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[opacity\\] {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-none {
    transition-property: none;
  }
  .delay-0 {
    transition-delay: 0ms;
  }
  .delay-150 {
    transition-delay: 150ms;
  }
  .delay-300 {
    transition-delay: 300ms;
  }
  .\\!duration-0 {
    --tw-duration: 0ms !important;
    transition-duration: 0ms !important;
  }
  .duration-0 {
    --tw-duration: 0ms;
    transition-duration: 0ms;
  }
  .duration-120 {
    --tw-duration: 120ms;
    transition-duration: 120ms;
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
  .ease-\\[cubic-bezier\\(0\\.25\\,0\\.1\\,0\\.25\\,1\\)\\] {
    --tw-ease: cubic-bezier(0.25,0.1,0.25,1);
    transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
  }
  .ease-in {
    --tw-ease: var(--ease-in);
    transition-timing-function: var(--ease-in);
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
  .will-change-transform {
    will-change: transform;
  }
  .select-none {
    -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
  }
  .animation-delay-0 {
    animation-delay: 0s;
  }
  .animation-delay-100 {
    animation-delay: .1s;
  }
  .animation-delay-150 {
    animation-delay: .15s;
  }
  .animation-delay-200 {
    animation-delay: .2s;
  }
  .animation-delay-300 {
    animation-delay: .3s;
  }
  .animation-delay-500 {
    animation-delay: .5s;
  }
  .animation-delay-700 {
    animation-delay: .7s;
  }
  .animation-delay-1000 {
    animation-delay: 1s;
  }
  .animation-duration-0 {
    animation-duration: 0s;
  }
  .animation-duration-100 {
    animation-duration: .1s;
  }
  .animation-duration-200 {
    animation-duration: .2s;
  }
  .animation-duration-300 {
    animation-duration: .3s;
  }
  .animation-duration-500 {
    animation-duration: .5s;
  }
  .animation-duration-700 {
    animation-duration: .7s;
  }
  .animation-duration-1000 {
    animation-duration: 1s;
  }
  .group-hover\\:bg-\\[\\#5b2d89\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #5b2d89;
      }
    }
  }
  .group-hover\\:bg-\\[\\#6a6a6a\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #6a6a6a;
      }
    }
  }
  .group-hover\\:bg-\\[\\#21437982\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #21437982;
      }
    }
  }
  .group-hover\\:bg-\\[\\#efda1a2f\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #efda1a2f;
      }
    }
  }
  .group-hover\\:opacity-100 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .peer-hover\\/bottom\\:rounded-b-none {
    &:is(:where(.peer\\/bottom):hover ~ *) {
      @media (hover: hover) {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  .peer-hover\\/left\\:rounded-l-none {
    &:is(:where(.peer\\/left):hover ~ *) {
      @media (hover: hover) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  .peer-hover\\/right\\:rounded-r-none {
    &:is(:where(.peer\\/right):hover ~ *) {
      @media (hover: hover) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
  .peer-hover\\/top\\:rounded-t-none {
    &:is(:where(.peer\\/top):hover ~ *) {
      @media (hover: hover) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
  .after\\:absolute {
    &::after {
      content: var(--tw-content);
      position: absolute;
    }
  }
  .after\\:inset-0 {
    &::after {
      content: var(--tw-content);
      inset: calc(var(--spacing) * 0);
    }
  }
  .after\\:top-\\[100\\%\\] {
    &::after {
      content: var(--tw-content);
      top: 100%;
    }
  }
  .after\\:left-1\\/2 {
    &::after {
      content: var(--tw-content);
      left: calc(1 / 2 * 100%);
    }
  }
  .after\\:h-\\[6px\\] {
    &::after {
      content: var(--tw-content);
      height: 6px;
    }
  }
  .after\\:w-\\[10px\\] {
    &::after {
      content: var(--tw-content);
      width: 10px;
    }
  }
  .after\\:-translate-x-1\\/2 {
    &::after {
      content: var(--tw-content);
      --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .after\\:animate-\\[fadeOut_1s_ease-out_forwards\\] {
    &::after {
      content: var(--tw-content);
      animation: fadeOut 1s ease-out forwards;
    }
  }
  .after\\:border-t-\\[6px\\] {
    &::after {
      content: var(--tw-content);
      border-top-style: var(--tw-border-style);
      border-top-width: 6px;
    }
  }
  .after\\:border-r-\\[5px\\] {
    &::after {
      content: var(--tw-content);
      border-right-style: var(--tw-border-style);
      border-right-width: 5px;
    }
  }
  .after\\:border-l-\\[5px\\] {
    &::after {
      content: var(--tw-content);
      border-left-style: var(--tw-border-style);
      border-left-width: 5px;
    }
  }
  .after\\:border-t-white {
    &::after {
      content: var(--tw-content);
      border-top-color: var(--color-white);
    }
  }
  .after\\:border-r-transparent {
    &::after {
      content: var(--tw-content);
      border-right-color: transparent;
    }
  }
  .after\\:border-l-transparent {
    &::after {
      content: var(--tw-content);
      border-left-color: transparent;
    }
  }
  .after\\:bg-purple-500\\/30 {
    &::after {
      content: var(--tw-content);
      background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 30%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-purple-500) 30%, transparent);
      }
    }
  }
  .after\\:content-\\[\\"\\"\\] {
    &::after {
      --tw-content: "";
      content: var(--tw-content);
    }
  }
  .focus-within\\:border-\\[\\#454545\\] {
    &:focus-within {
      border-color: #454545;
    }
  }
  .hover\\:bg-\\[\\#0f0f0f\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #0f0f0f;
      }
    }
  }
  .hover\\:bg-\\[\\#5f3f9a\\]\\/20 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in oklab, #5f3f9a 20%, transparent);
      }
    }
  }
  .hover\\:bg-\\[\\#5f3f9a\\]\\/40 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in oklab, #5f3f9a 40%, transparent);
      }
    }
  }
  .hover\\:bg-\\[\\#18181B\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #18181B;
      }
    }
  }
  .hover\\:bg-\\[\\#34343b\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #34343b;
      }
    }
  }
  .hover\\:bg-red-600 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-red-600);
      }
    }
  }
  .hover\\:bg-zinc-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-zinc-700);
      }
    }
  }
  .hover\\:bg-zinc-800\\/50 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in srgb, oklch(27.4% 0.006 286.033) 50%, transparent);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-zinc-800) 50%, transparent);
        }
      }
    }
  }
  .hover\\:text-neutral-300 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-neutral-300);
      }
    }
  }
  .hover\\:text-white {
    &:hover {
      @media (hover: hover) {
        color: var(--color-white);
      }
    }
  }
}
* {
  outline: none !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}
@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: 6px;
  }
}
button {
  &:hover {
    @media (hover: hover) {
      background-image: none;
    }
  }
  --tw-outline-style: none;
  outline-style: none;
  --tw-border-style: none;
  border-style: none;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
  cursor: pointer;
}
input {
  --tw-outline-style: none;
  outline-style: none;
  --tw-border-style: none;
  border-style: none;
  background-color: transparent;
  background-image: none;
  &::-moz-placeholder {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  &::placeholder {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  &::-moz-placeholder {
    color: var(--color-neutral-500);
  }
  &::placeholder {
    color: var(--color-neutral-500);
  }
  &::-moz-placeholder {
    font-style: italic;
  }
  &::placeholder {
    font-style: italic;
  }
  &:-moz-placeholder {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:placeholder-shown {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
svg {
  height: auto;
  width: auto;
  pointer-events: none;
}
.with-data-text {
  overflow: hidden;
  &::before {
    content: attr(data-text);
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
#react-scan-toolbar {
  position: fixed;
  top: calc(var(--spacing) * 0);
  left: calc(var(--spacing) * 0);
  display: flex;
  flex-direction: column;
  --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 13px;
  color: var(--color-white);
  background-color: var(--color-black);
  -webkit-user-select: none;
  -moz-user-select: none;
       user-select: none;
  cursor: move;
  opacity: 0%;
  z-index: 2147483678;
  animation: fadeIn ease-in forwards;
  animation-delay: .3s;
  animation-duration: .3s;
  --tw-shadow: 0 4px 12px var(--tw-shadow-color, rgba(0,0,0,0.2));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  place-self: start;
  will-change: transform;
  backface-visibility: hidden;
}
#react-scan-toolbar pre,
#react-scan-toolbar textarea,
#react-scan-toolbar input[type='text'],
#react-scan-toolbar input[type='search'],
#react-scan-toolbar [data-react-scan-selectable] {
  -webkit-user-select: text;
  -moz-user-select: text;
       user-select: text;
  cursor: text;
}
.button {
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}
.resize-line-wrapper {
  position: absolute;
  overflow: hidden;
}
.resize-line {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  overflow: hidden;
  background-color: var(--color-black);
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  svg {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-right,
.resize-left {
  inset-block: calc(var(--spacing) * 0);
  width: calc(var(--spacing) * 6);
  cursor: ew-resize;
  .resize-line-wrapper {
    inset-block: calc(var(--spacing) * 0);
    width: calc(1 / 2 * 100%);
  }
  &:hover {
    .resize-line {
      --tw-translate-x: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
}
.resize-right {
  right: calc(var(--spacing) * 0);
  --tw-translate-x: calc(1 / 2 * 100%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    right: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-right-radius: var(--radius-lg);
    border-bottom-right-radius: var(--radius-lg);
    --tw-translate-x: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-left {
  left: calc(var(--spacing) * 0);
  --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    left: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-left-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    --tw-translate-x: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-top,
.resize-bottom {
  inset-inline: calc(var(--spacing) * 0);
  height: calc(var(--spacing) * 6);
  cursor: ns-resize;
  .resize-line-wrapper {
    inset-inline: calc(var(--spacing) * 0);
    height: calc(1 / 2 * 100%);
  }
  &:hover {
    .resize-line {
      --tw-translate-y: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
}
.resize-top {
  top: calc(var(--spacing) * 0);
  --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    top: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-bottom {
  bottom: calc(var(--spacing) * 0);
  --tw-translate-y: calc(1 / 2 * 100%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    bottom: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    --tw-translate-y: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-header {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-right: calc(var(--spacing) * 2);
  padding-left: calc(var(--spacing) * 3);
  min-height: calc(var(--spacing) * 9);
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
  border-color: #222;
  overflow: hidden;
  white-space: nowrap;
}
.react-scan-replay-button,
.react-scan-close-button {
  display: flex;
  align-items: center;
  padding: calc(var(--spacing) * 1);
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: 4px;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.react-scan-replay-button {
  position: relative;
  overflow: hidden;
  background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 50%, transparent) !important;
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-purple-500) 50%, transparent) !important;
  }
  &:hover {
    background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 25%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-purple-500) 25%, transparent);
    }
  }
  &.disabled {
    opacity: 50%;
    pointer-events: none;
  }
  &:before {
    content: "";
    position: absolute;
    inset: calc(var(--spacing) * 0);
    --tw-translate-x: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    animation: shimmer 2s infinite;
    background: linear-gradient(
      to right,
      transparent,
      rgba(142, 97, 227, 0.3),
      transparent
    );
  }
}
.react-scan-close-button {
  background-color: color-mix(in srgb, #fff 10%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-white) 10%, transparent);
  }
  &:hover {
    background-color: color-mix(in srgb, #fff 15%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 15%, transparent);
    }
  }
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
.react-section-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 3);
  height: calc(var(--spacing) * 7);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #888;
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
  border-color: #222;
  background-color: #0a0a0a;
}
.react-scan-section {
  display: flex;
  flex-direction: column;
  padding-inline: calc(var(--spacing) * 2);
  color: #888;
  &::before {
    content: var(--tw-content);
    color: var(--color-gray-500);
  }
  &::before {
    --tw-content: attr(data-section);
    content: var(--tw-content);
  }
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  > .react-scan-property {
    margin-left: calc(14px * -1);
  }
}
.react-scan-property {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: calc(var(--spacing) * 8);
  border-left-style: var(--tw-border-style);
  border-left-width: 1px;
  border-color: transparent;
  overflow: hidden;
}
.react-scan-property-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: calc(var(--spacing) * 7);
  max-width: 100%;
  overflow: hidden;
}
.react-scan-string {
  color: #9ecbff;
}
.react-scan-number {
  color: #79c7ff;
}
.react-scan-boolean {
  color: #56b6c2;
}
.react-scan-key {
  width: -moz-fit-content;
  width: fit-content;
  max-width: calc(var(--spacing) * 60);
  white-space: nowrap;
  color: var(--color-white);
}
.react-scan-input {
  color: var(--color-white);
  background-color: var(--color-black);
}
@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.react-scan-arrow {
  position: absolute;
  top: calc(var(--spacing) * 0);
  left: calc(var(--spacing) * 7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: calc(var(--spacing) * 7);
  width: calc(var(--spacing) * 6);
  --tw-translate-x: -100%;
  translate: var(--tw-translate-x) var(--tw-translate-y);
  z-index: 10;
  > svg {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
}
.react-scan-nested {
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: calc(var(--spacing) * 0);
    left: calc(var(--spacing) * 0);
    height: 100%;
    width: 1px;
    background-color: color-mix(in srgb, oklch(55.1% 0.027 264.364) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-500) 30%, transparent);
    }
  }
}
.react-scan-settings {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 4);
  padding-inline: calc(var(--spacing) * 4);
  padding-block: calc(var(--spacing) * 2);
  color: #888;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
}
.react-scan-preview-line {
  position: relative;
  display: flex;
  min-height: calc(var(--spacing) * 7);
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
}
.react-scan-flash-overlay {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  opacity: 0%;
  z-index: 50;
  pointer-events: none;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  mix-blend-mode: multiply;
  background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 90%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-purple-500) 90%, transparent);
  }
}
.react-scan-toggle {
  position: relative;
  display: inline-flex;
  height: calc(var(--spacing) * 6);
  width: calc(var(--spacing) * 10);
  input {
    position: absolute;
    inset: calc(var(--spacing) * 0);
    z-index: 20;
    opacity: 0%;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
  input:checked {
    + div {
      background-color: #5f3f9a;
      &::before {
        --tw-translate-x: 100%;
        translate: var(--tw-translate-x) var(--tw-translate-y);
        left: auto;
        border-color: #5f3f9a;
      }
    }
  }
  > div {
    position: absolute;
    inset: calc(var(--spacing) * 1);
    background-color: var(--color-neutral-700);
    border-radius: calc(infinity * 1px);
    pointer-events: none;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 300ms;
    transition-duration: 300ms;
    &:before {
      --tw-content: '';
      content: var(--tw-content);
      position: absolute;
      top: calc(1 / 2 * 100%);
      left: calc(var(--spacing) * 0);
      --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
      height: calc(var(--spacing) * 4);
      width: calc(var(--spacing) * 4);
      background-color: var(--color-white);
      border-style: var(--tw-border-style);
      border-width: 2px;
      border-color: var(--color-neutral-700);
      border-radius: calc(infinity * 1px);
      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      transition-property: all;
      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
      transition-duration: var(--tw-duration, var(--default-transition-duration));
      --tw-duration: 300ms;
      transition-duration: 300ms;
    }
  }
}
.react-scan-flash-active {
  opacity: 40%;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.react-scan-inspector-overlay {
  display: flex;
  flex-direction: column;
  opacity: 0%;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 200ms;
  transition-duration: 200ms;
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
  will-change: opacity;
  &.fade-out {
    opacity: 0%;
  }
  &.fade-in {
    opacity: 100%;
  }
}
.react-scan-what-changed {
  ul {
    list-style-type: disc;
    padding-left: calc(var(--spacing) * 4);
  }
  li {
    white-space: nowrap;
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      -moz-column-gap: calc(var(--spacing) * 2);
           column-gap: calc(var(--spacing) * 2);
    }
  }
}
.count-badge {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 1.5);
  padding-block: calc(var(--spacing) * 0.5);
  border-radius: 4px;
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
  color: #a855f7;
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  background-color: color-mix(in oklab, #a855f7 10%, transparent);
  transform-origin: center;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  transition-delay: 150ms;
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.count-flash {
  animation: countFlash .3s ease-out forwards;
}
.count-flash-white {
  animation: countFlashShake .3s ease-out forwards;
  transition-delay: 500ms !important;
}
.change-scope {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 1);
       column-gap: calc(var(--spacing) * 1);
  color: #666;
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  > div {
    padding-inline: calc(var(--spacing) * 1.5);
    padding-block: calc(var(--spacing) * 0.5);
    border-radius: 4px;
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
    transform-origin: center;
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    transition-delay: 150ms;
    --tw-duration: 300ms;
    transition-duration: 300ms;
    &[data-flash="true"] {
      background-color: color-mix(in oklab, #a855f7 10%, transparent);
      color: #a855f7;
    }
  }
}
.react-scan-slider {
  position: relative;
  min-height: calc(var(--spacing) * 6);
  > input {
    position: absolute;
    inset: calc(var(--spacing) * 0);
    opacity: 0%;
  }
  &:before {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    top: calc(1 / 2 * 100%);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: calc(var(--spacing) * 1.5);
    background-color: color-mix(in oklab, #8e61e3 40%, transparent);
    border-radius: var(--radius-lg);
    pointer-events: none;
  }
  &:after {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    inset-block: calc(var(--spacing) * -2);
    z-index: calc(10 * -1);
  }
  span {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(var(--spacing) * 0);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: calc(var(--spacing) * 2.5);
    width: calc(var(--spacing) * 2.5);
    border-radius: var(--radius-lg);
    background-color: #8e61e3;
    pointer-events: none;
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 75ms;
    transition-duration: 75ms;
  }
}
.resize-v-line {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: calc(var(--spacing) * 1);
  min-width: calc(var(--spacing) * 1);
  height: 100%;
  width: 100%;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  &:hover,
  &:active {
    > span {
      background-color: #222;
    }
    svg {
      opacity: 100%;
    }
  }
  &::before {
    --tw-content: "";
    content: var(--tw-content);
    position: absolute;
    inset: calc(var(--spacing) * 0);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    width: 1px;
    background-color: #222;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  > span {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: 18px;
    width: calc(var(--spacing) * 1.5);
    border-radius: 4px;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  svg {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    rotate: 90deg;
    color: var(--color-neutral-400);
    opacity: 0%;
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    z-index: 50;
  }
}
.tree-node-search-highlight {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  span {
    padding-block: 1px;
    border-radius: var(--radius-sm);
    background-color: var(--color-yellow-300);
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    color: var(--color-black);
  }
  .single {
    margin-right: 1px;
    padding-inline: 2px;
  }
  .regex {
    padding-inline: 2px;
  }
  .start {
    margin-left: 1px;
    border-top-left-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-sm);
  }
  .end {
    margin-right: 1px;
    border-top-right-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-sm);
  }
  .middle {
    margin-inline: 1px;
    border-radius: var(--radius-sm);
  }
}
.react-scan-toolbar-notification {
  position: absolute;
  inset-inline: calc(var(--spacing) * 0);
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding: calc(var(--spacing) * 1);
  padding-left: calc(var(--spacing) * 2);
  font-size: 10px;
  color: var(--color-neutral-300);
  background-color: color-mix(in srgb, #000 90%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-black) 90%, transparent);
  }
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  &:before {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    background-color: var(--color-black);
    height: calc(var(--spacing) * 2);
  }
  &.position-top {
    top: 100%;
    --tw-translate-y: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    &::before {
      top: calc(var(--spacing) * 0);
      --tw-translate-y: -100%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  &.position-bottom {
    bottom: 100%;
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    &::before {
      bottom: calc(var(--spacing) * 0);
      --tw-translate-y: 100%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  &.is-open {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-header-item {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  --tw-translate-y: calc(200% * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
  &.is-visible {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active)
  .tree {
  overflow: hidden;
}
.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 75ms;
  transition-duration: 75ms;
  transition-timing-function: ease-out;
  > * {
    min-height: 0;
  }
  &.react-scan-expanded {
    grid-template-rows: 1fr;
    transition-duration: 100ms;
  }
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-content {
  syntax: "*";
  initial-value: "";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes countFlash {
  0% {
    background-color: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }
  100% {
    background-color: rgba(168, 85, 247, 0.1);
    transform: scale(1);
  }
}
@keyframes countFlashShake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px) scale(1.1);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-divide-y-reverse: 0;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-content: "";
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
    }
  }
}
`,n4=(t,a,i=a)=>{const[l,s]=Ce(t);return Te(()=>{if(t===l)return;const d=setTimeout(()=>s(t),t?a:i);return()=>clearTimeout(d)},[t,a,i]),l},a4=async t=>{try{const a=await MC(t),i=`${a.htmlPreview}${a.stackString}`;return i.trim()?(await navigator.clipboard.writeText(i),!0):!1}catch{return!1}},r4=()=>{var t;const a=(t=window.getSelection)==null?void 0:t.call(window);return!!(a&&a.toString().length>0)},i4=()=>{const t=document.activeElement;if(!t)return!1;const a=t.tagName;return!!(a==="INPUT"||a==="TEXTAREA"||a==="SELECT"||t instanceof HTMLElement&&t.isContentEditable)},l4=()=>{if(typeof navigator>"u")return!1;const t=navigator.platform||"";return t?/Mac|iPhone|iPad|iPod/i.test(t):/Mac|iPhone|iPad|iPod/i.test(navigator.userAgent)},o4=()=>typeof window<"u"&&!!window.__REACT_GRAB__,s4=Ba(()=>D("absolute inset-0 flex items-center gap-x-2","translate-y-0","transition-transform duration-300",Hc.value&&"-translate-y-[200%]")),c4=()=>{const t=me(null),a=me(null),[i,l]=Ce(null);Jl(()=>{const c=re.inspectState.value;c.kind==="focused"&&l(c.fiber)}),Jl(()=>{const c=Rt.value;wr(()=>{var d,m;if(re.inspectState.value.kind!=="focused"||!t.current||!a.current)return;const{totalUpdates:p,currentIndex:g,updates:b,isVisible:w,windowOffset:y}=c,x=Math.max(0,p-1),T=w?`#${y+g} Re-render`:x>0?`×${x}`:"";let C;if(x>0&&g>=0&&g<b.length){const M=(m=(d=b[g])==null?void 0:d.fiberInfo)==null?void 0:m.selfTime;C=M>0?M<.1-Number.EPSILON?"< 0.1ms":`${Number(M.toFixed(1))}ms`:void 0}t.current.dataset.text=T?` • ${T}`:"",a.current.dataset.text=C?` • ${C}`:""})});const s=Nn(()=>{if(!i)return null;const{name:c,wrappers:d,wrapperTypes:m}=no(i),p=d.length?`${d.join("(")}(${c})${")".repeat(d.length)}`:c??"",g=m[0];return h("span",{title:p,className:"flex items-center gap-x-1",children:[c??"Unknown",h("span",{title:g?.title,className:"flex items-center gap-x-1 text-[10px] text-purple-400",children:!!g&&h($e,{children:[h("span",{className:D("rounded py-[1px] px-1","truncate",g.compiler&&"bg-purple-800 text-neutral-400",!g.compiler&&"bg-neutral-700 text-neutral-300",g.type==="memo"&&"bg-[#5f3f9a] text-white"),children:g.type},g.type),g.compiler&&h("span",{className:"text-yellow-300",children:"✨"})]})}),m.length>1&&h("span",{className:"text-[10px] text-neutral-400",children:["×",m.length-1]})]})},[i]);return h("div",{className:s4,children:[s,h("div",{className:"flex items-center gap-x-2 mr-auto text-xs text-[#888]",children:[h("span",{ref:t,className:"with-data-text cursor-pointer !overflow-visible",title:"Click to toggle between rerenders and total renders"}),h("span",{ref:a,className:"with-data-text !overflow-visible"})]})]})},u4=()=>{const t=n4(re.inspectState.value.kind==="focused",150,0),a=nw(!1),i=()=>{Ie.value={view:"none"},re.inspectState.value={kind:"inspect-off"}},l=async()=>{const p=re.inspectState.value;p.kind!=="focused"||!p.focusedDomElement||!await a4(p.focusedDomElement)||(a.value=!0,setTimeout(()=>{a.value=!1,i()},HC))},s=me(l);if(s.current=l,Te(()=>{const p=g=>{const b=re.inspectState.value;b.kind!=="focused"||!b.focusedDomElement||o4()||(g.metaKey||g.ctrlKey)&&(g.shiftKey||g.altKey||g.key!=="c"&&g.code!=="KeyC"||i4()||r4()||(g.preventDefault(),g.stopImmediatePropagation(),s.current()))};return document.addEventListener("keydown",p,{capture:!0}),()=>{document.removeEventListener("keydown",p,{capture:!0})}},[]),Ie.value.view==="notifications")return;const d=re.inspectState.value.kind==="focused",m=l4()?"⌘C":"Ctrl+C";return h("div",{className:"react-scan-header",children:[h("div",{className:"relative flex-1 h-full",children:h("div",{className:D("react-scan-header-item is-visible",!t&&"!duration-0"),children:h(c4,{})})}),d&&h("button",{type:"button",title:`Copy element (${m})`,className:"react-scan-close-button",onClick:l,children:h(tt,{name:a.value?"icon-check":"icon-copy",className:D(a.value&&"text-green-500")})}),h("button",{type:"button",title:"Close",className:"react-scan-close-button",onClick:i,children:h(tt,{name:"icon-close"})})]})},d4=({className:t,...a})=>h("div",{className:D("react-scan-toggle",t),children:[h("input",{type:"checkbox",...a}),h("div",{})]}),f4=({fps:t})=>{const a=i=>i<30?"#EF4444":i<50?"#F59E0B":"rgb(214,132,245)";return h("div",{className:D("flex items-center gap-x-1 px-2 w-full","h-6","rounded-md","font-mono leading-none","bg-[#141414]","ring-1 ring-white/[0.08]"),children:[h("div",{style:{color:a(t)},className:"text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",children:t}),h("span",{className:"text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",children:"FPS"})]})},h4=()=>{const[t,a]=Ce(null);return Te(()=>{const i=setInterval(()=>{a(U1())},200);return()=>clearInterval(i)},[]),h("div",{className:D("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]","whitespace-nowrap text-sm text-white"),children:t===null?h($e,{children:"️"}):h(f4,{fps:t})})},kn=t=>t(),vt=class q1 extends Array{constructor(a=25){super(),en(this,"capacity",a)}push(...a){const i=super.push(...a);for(;this.length>this.capacity;)this.shift();return i}static fromArray(a,i){const l=new q1(i);return l.push(...a),l}},m4=class{constructor(t){en(this,"subscribers",new Set),en(this,"currentValue"),this.currentValue=t}subscribe(t){return this.subscribers.add(t),t(this.currentValue),()=>{this.subscribers.delete(t)}}setState(t){this.currentValue=t,this.subscribers.forEach(a=>a(t))}getCurrentState(){return this.currentValue}},Y1=150,ey=new m4(new vt(Y1)),Mn=50,p4=class{constructor(){en(this,"channels",{})}publish(t,a,i=!0){const l=this.channels[a];if(!l){if(!i)return;this.channels[a]={callbacks:new vt(Mn),state:new vt(Mn)},this.channels[a].state.push(t);return}l.state.push(t),l.callbacks.forEach(s=>s(t))}getAvailableChannels(){return vt.fromArray(Object.keys(this.channels),Mn)}subscribe(t,a,i=!1){const l=()=>(i||this.channels[t].state.forEach(c=>{a(c)}),()=>{const c=this.channels[t].callbacks.filter(d=>d!==a);this.channels[t].callbacks=vt.fromArray(c,Mn)}),s=this.channels[t];return s?(s.callbacks.push(a),l()):(this.channels[t]={callbacks:new vt(Mn),state:new vt(Mn)},this.channels[t].callbacks.push(a),l())}updateChannelState(t,a,i=!0){const l=this.channels[t];if(!l){if(!i)return;const s=new vt(Mn),c={callbacks:new vt(Mn),state:s};this.channels[t]=c,c.state=a(s);return}l.state=a(l.state)}getChannelState(t){var a;return(a=this.channels[t].state)!=null?a:new vt(Mn)}},Tc=new p4,G1={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},Ml={providers:[/Provider$/,/^Provider$/,/^Context$/],hocs:[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],containers:[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],utilities:[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],boundaries:[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/]},g4=(t,a=G1)=>{const i=[];return a.skipProviders&&i.push(...Ml.providers),a.skipHocs&&i.push(...Ml.hocs),a.skipContainers&&i.push(...Ml.containers),a.skipUtilities&&i.push(...Ml.utilities),a.skipBoundaries&&i.push(...Ml.boundaries),!i.some(l=>l.test(t))},ty=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],v4=t=>{var a,i;for(let m=0;m<ty.length;m++)if(ty[m].test(t))return!0;const l=!/[aeiou]/i.test(t),s=((i=(a=t.match(/\d/g))==null?void 0:a.length)!=null?i:0)>t.length/2,c=/^[a-z]+$/.test(t),d=/[$_]{2,}/.test(t);return Number(l)+Number(s)+Number(c)+Number(d)>=2},b4=t=>{const a=xt(t);return a?a.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,"$<inner>"):""},y4=(t,a=G1)=>{if(!t)return[];if(!xt(t.type))return[];const l=new Array;let s=t;for(;s.return;){const d=b4(s.type);d&&!v4(d)&&g4(d,a)&&d.toLowerCase()!==d&&l.push(d),s=s.return}const c=new Array(l.length);for(let d=0;d<l.length;d++)c[d]=l[l.length-d-1];return c},w4=(t,a=()=>!0)=>{let i=t;for(;i;){const l=xt(i.type);if(l&&a(l))return l;i=i.return}return null},Of,Oh="never-hidden",x4=()=>{Of?.();const t=()=>{document.hidden&&(Oh=Date.now())};document.addEventListener("visibilitychange",t),Of=()=>{document.removeEventListener("visibilitychange",t)}},_4=t=>["pointerup","click"].includes(t)?"pointer":(t.includes("key"),["keydown","keyup"].includes(t)?"keyboard":null),Rf=null,S4=t=>{x4();const a=new Map,i=new Map,l=c=>{if(!c.interactionId)return;if(c.interactionId&&c.target&&!i.has(c.interactionId)&&i.set(c.interactionId,c.target),c.target){let m=c.target;for(;m;){if(m.id==="react-scan-toolbar-root"||m.id==="react-scan-root")return;m=m.parentElement}}const d=a.get(c.interactionId);if(d)c.duration>d.latency?(d.entries=[c],d.latency=c.duration):c.duration===d.latency&&c.startTime===d.entries[0].startTime&&d.entries.push(c);else{const m=_4(c.name);if(!m)return;const p={id:c.interactionId,latency:c.duration,entries:[c],target:c.target,type:m,startTime:c.startTime,endTime:Date.now(),processingStart:c.processingStart,processingEnd:c.processingEnd,duration:c.duration,inputDelay:c.processingStart-c.startTime,processingDuration:c.processingEnd-c.processingStart,presentationDelay:c.duration-(c.processingEnd-c.startTime),timestamp:Date.now(),timeSinceTabInactive:Oh==="never-hidden"?"never-hidden":Date.now()-Oh,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};a.set(p.id,p),Rf||(Rf=requestAnimationFrame(()=>{requestAnimationFrame(()=>{t(a.get(p.id)),Rf=null})}))}},s=new PerformanceObserver(c=>{const d=c.getEntries();for(let m=0,p=d.length;m<p;m++){const g=d[m];l(g)}});try{s.observe({type:"event",buffered:!0,durationThreshold:16}),s.observe({type:"first-input",buffered:!0})}catch{}return()=>s.disconnect()},T4=()=>S4(t=>{Tc.publish({kind:"entry-received",entry:t},"recording")}),Js=25,na=new vt(Js),k4=(t,a)=>{let i=null;for(const l of a){if(l.type!==t.type)continue;if(i===null){i=l;continue}const s=(c,d)=>Math.abs(c.startDateTime)-(d.startTime+d.timeOrigin);s(l,t)<s(i,t)&&(i=l)}return i},N4=t=>Tc.subscribe("recording",i=>{const l=i.kind==="auto-complete-race"?na.find(c=>c.interactionUUID===i.interactionUUID):k4(i.entry,na);if(!l)return;const s=l.completeInteraction(i);t(s)}),C4=({onMicroTask:t,onRAF:a,onTimeout:i,abort:l})=>{queueMicrotask(()=>{l?.()!==!0&&t()&&requestAnimationFrame(()=>{l?.()!==!0&&a()&&setTimeout(()=>{l?.()!==!0&&i()},0)})})},E4=t=>{var a;const i=R1(t);if(!i)return;let l=i?xt(i?.type):"N/A";return l||(l=(a=w4(i,c=>c.length>2))!=null?a:"N/A"),l?{componentPath:y4(i),childrenTree:{},componentName:l,elementFiber:i}:void 0},ny=(t,a)=>{let i=null;const l=p=>{switch(t){case"pointer":return p.phase==="start"?"pointerup":p.target instanceof HTMLInputElement||p.target instanceof HTMLSelectElement?"change":"click";case"keyboard":return p.phase==="start"?"keydown":"change"}},s={current:{kind:"uninitialized-stage",interactionUUID:_n(),stageStart:Date.now(),interactionType:t}},c=p=>{var g,b;if(p.composedPath().some(k=>k instanceof Element&&k.id==="react-scan-toolbar-root")||(Date.now()-s.current.stageStart>2e3&&(s.current={kind:"uninitialized-stage",interactionUUID:_n(),stageStart:Date.now(),interactionType:t}),s.current.kind!=="uninitialized-stage"))return;const y=performance.now();(g=a?.onStart)==null||g.call(a,s.current.interactionUUID);const x=E4(p.target);if(!x){(b=a?.onError)==null||b.call(a,s.current.interactionUUID);return}const T={},C=X1(T);s.current={...s.current,interactionType:t,blockingTimeStart:Date.now(),childrenTree:x.childrenTree,componentName:x.componentName,componentPath:x.componentPath,fiberRenders:T,kind:"interaction-start",interactionStartDetail:y,stopListeningForRenders:C};const M=l({phase:"end",target:p.target});document.addEventListener(M,d,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(M,d)})};document.addEventListener(l({phase:"start"}),c,{capture:!0});const d=(p,g,b)=>{var w;if(s.current.kind!=="interaction-start"&&g===i){if(t==="pointer"&&p.target instanceof HTMLSelectElement){s.current={kind:"uninitialized-stage",interactionUUID:_n(),stageStart:Date.now(),interactionType:t};return}(w=a?.onError)==null||w.call(a,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:_n(),stageStart:Date.now(),interactionType:t};return}i=g,C4({abort:b,onMicroTask:()=>s.current.kind==="uninitialized-stage"?!1:(s.current={...s.current,kind:"js-end-stage",jsEndDetail:performance.now()},!0),onRAF:()=>{var y;return s.current.kind!=="js-end-stage"&&s.current.kind!=="raf-stage"?((y=a?.onError)==null||y.call(a,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:_n(),stageStart:Date.now(),interactionType:t},!1):(s.current={...s.current,kind:"raf-stage",rafStart:performance.now()},!0)},onTimeout:()=>{var y;if(s.current.kind!=="raf-stage"){(y=a?.onError)==null||y.call(a,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:_n(),stageStart:Date.now(),interactionType:t};return}const x=Date.now(),T=Object.freeze({...s.current,kind:"timeout-stage",blockingTimeEnd:x,commitEnd:performance.now()});s.current={kind:"uninitialized-stage",interactionUUID:_n(),stageStart:x,interactionType:t};let C=!1;const M=E=>{var H;C=!0;const Y=E.kind==="auto-complete-race"?E.detailedTiming.commitEnd-E.detailedTiming.interactionStartDetail:E.entry.latency,Q={detailedTiming:T,latency:Y,completedAt:Date.now(),flushNeeded:!0};(H=a?.onComplete)==null||H.call(a,T.interactionUUID,Q,E);const J=na.filter(P=>P.interactionUUID!==T.interactionUUID);return na=vt.fromArray(J,Js),Q},k={completeInteraction:M,endDateTime:Date.now(),startDateTime:T.blockingTimeStart,type:t,interactionUUID:T.interactionUUID};if(na.push(k),A4())setTimeout(()=>{if(C)return;M({kind:"auto-complete-race",detailedTiming:T,interactionUUID:T.interactionUUID});const E=na.filter(H=>H.interactionUUID!==T.interactionUUID);na=vt.fromArray(E,Js)},1e3);else{const E=na.filter(H=>H.interactionUUID!==T.interactionUUID);na=vt.fromArray(E,Js),M({kind:"auto-complete-race",detailedTiming:T,interactionUUID:T.interactionUUID})}}})},m=p=>{const g=_n();d(p,g,()=>g!==i)};return t==="keyboard"&&document.addEventListener("keypress",m),()=>{document.removeEventListener(l({phase:"start"}),c,{capture:!0}),document.removeEventListener("keypress",m)}},ay=t=>{var a;return(a=Ny(t,i=>{if(Ql(i))return!0}))==null?void 0:a.stateNode},A4=()=>"PerformanceEventTiming"in globalThis,X1=t=>{const a=i=>{var l,s,c,d,m,p,g;const b=xt(i.type);if(!b)return;const w=t[b];if(!w){const k=new Set,E=i.return&&wi(i.return),H=E&&xt(E[0]);H&&k.add(H);const{selfTime:Y,totalTime:Q}=hr(i),J=Fb(i),P={current:[],changes:new Set,changesCounts:new Map},Z={fiberProps:J.fiberProps||P,fiberState:J.fiberState||P,fiberContext:J.fiberContext||P};t[b]={renderCount:1,hasMemoCache:Zl(i),wasFiberRenderMount:ry(i),parents:k,selfTime:Y,totalTime:Q,nodeInfo:[{element:ay(i),name:(l=xt(i.type))!=null?l:"Unknown",selfTime:hr(i).selfTime}],changes:Z};return}if((c=(s=wi(i))==null?void 0:s[0])==null?void 0:c.type){const k=i.return&&wi(i.return),E=k&&xt(k[0]);E&&w.parents.add(E)}const{selfTime:x,totalTime:T}=hr(i),C=Fb(i);if(!C)return;const M={current:[],changes:new Set,changesCounts:new Map};w.wasFiberRenderMount=w.wasFiberRenderMount||ry(i),w.hasMemoCache=w.hasMemoCache||Zl(i),w.changes={fiberProps:Df(((d=w.changes)==null?void 0:d.fiberProps)||M,C.fiberProps||M),fiberState:Df(((m=w.changes)==null?void 0:m.fiberState)||M,C.fiberState||M),fiberContext:Df(((p=w.changes)==null?void 0:p.fiberContext)||M,C.fiberContext||M)},w.renderCount+=1,w.selfTime+=x,w.totalTime+=T,w.nodeInfo.push({element:ay(i),name:(g=xt(i.type))!=null?g:"Unknown",selfTime:hr(i).selfTime})};return re.interactionListeningForRenders=a,()=>{re.interactionListeningForRenders===a&&(re.interactionListeningForRenders=null)}},Df=(t,a)=>{const i={current:[...t.current],changes:new Set,changesCounts:new Map};for(const l of a.current)i.current.some(s=>s.name===l.name)||i.current.push(l);for(const l of a.changes)if(typeof l=="string"||typeof l=="number"){i.changes.add(l);const s=t.changesCounts.get(l)||0,c=a.changesCounts.get(l)||0;i.changesCounts.set(l,s+c)}return i},ry=t=>{if(!t.alternate)return!0;const a=t.alternate,i=a&&a.memoizedState!=null&&a.memoizedState.element!=null&&a.memoizedState.isDehydrated!==!0,l=t.memoizedState!=null&&t.memoizedState.element!=null&&t.memoizedState.isDehydrated!==!0;return!i&&l},z4=t=>{let a;const i=new Set,l=(g,b)=>{const w=typeof g=="function"?g(a):g;if(!Object.is(w,a)){const y=a;a=b??(typeof w!="object"||w===null)?w:Object.assign({},a,w),i.forEach(x=>x(a,y))}},s=()=>a,m={setState:l,getState:s,getInitialState:()=>p,subscribe:(g,b)=>{let w,y;b?(w=g,y=b):y=g;let x=w?w(a):void 0;const T=(C,M)=>{if(w){const k=w(C),E=w(M);Object.is(x,k)||(x=k,y(k,E))}else y(C,M)};return i.add(T),()=>i.delete(T)}},p=a=t(l,s,m);return m},I1=(t=>z4),Hs=null;I1()(t=>({state:{events:[]},actions:{addEvent:a=>{t(i=>({state:{events:[...i.state.events,a]}}))},clear:()=>{t({state:{events:[]}})}}}));var $f=200,ro=I1()((t,a)=>{const i=new Set;return{state:{events:new vt($f)},actions:{addEvent:l=>{i.forEach(p=>p(l));const s=[...a().state.events,l],c=(p,g)=>{const b=s.find(w=>{if(w.kind!=="long-render"&&w.id!==p.id&&(p.data.startAt<=w.data.startAt&&p.data.endAt<=w.data.endAt&&p.data.endAt>=w.data.startAt||w.data.startAt<=p.data.startAt&&w.data.endAt>=p.data.startAt||p.data.startAt<=w.data.startAt&&p.data.endAt>=w.data.endAt))return!0});b&&g(b)},d=new Set;s.forEach(p=>{p.kind!=="interaction"&&c(p,()=>{d.add(p.id)})});const m=s.filter(p=>!d.has(p.id));t(()=>({state:{events:vt.fromArray(m,$f)}}))},addListener:l=>(i.add(l),()=>{i.delete(l)}),clear:()=>{t({state:{events:new vt($f)}})}}}}),M4=()=>mS(ro.subscribe,ro.getState),Ps=null,ec=null,Lf=null,Rh,O4=()=>{const t=a=>{Rh=a.composedPath().map(i=>i.id).filter(Boolean).includes("react-scan-toolbar")};return document.addEventListener("mouseover",t),Lf=t,()=>{Lf&&document.removeEventListener("mouseover",Lf)}},R4=()=>{const t=()=>{Ps=performance.now(),ec=performance.timeOrigin};return document.addEventListener("visibilitychange",t),()=>{document.removeEventListener("visibilitychange",t)}},Q1=150,jf=[];function D4(){let t,a;function i(){let s=null;Hs=null,Hs={},s=X1(Hs);const c=performance.timeOrigin,d=performance.now();return t=requestAnimationFrame(()=>{a=setTimeout(()=>{const m=performance.now(),p=m-d,g=performance.timeOrigin;jf.push(m+g);const b=jf.filter(T=>m+g-T<=1e3),w=b.length;jf=b;const y=Ps!==null&&ec!==null?m+g-(ec+Ps)<100:null,x=Rh!==null&&Rh;if(p>Q1&&!y&&document.visibilityState==="visible"&&!x){const T=g+m,C=d+c;ro.getState().actions.addEvent({kind:"long-render",id:_n(),data:{endAt:T,startAt:C,meta:{fiberRenders:Hs,latency:p,fps:w}}})}Ps=null,ec=null,s?.(),i()},0)}),s}const l=i();return()=>{l(),cancelAnimationFrame(t),clearTimeout(a)}}var $4=()=>{const t=T4(),a=O4(),i=R4(),l=D4(),s=async(p,g,b)=>{ro.getState().actions.addEvent({kind:"interaction",id:_n(),data:{startAt:g.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...g,kind:b.kind}}});const w=Tc.getChannelState("recording");g.detailedTiming.stopListeningForRenders(),w.length&&Tc.updateChannelState("recording",()=>new vt(Mn))},c=ny("pointer",{onComplete:s}),d=ny("keyboard",{onComplete:s}),m=N4(p=>{ey.setState(vt.fromArray(ey.getCurrentState().concat(p),Y1))});return()=>{a(),i(),l(),t(),c(),m(),d()}},io=t=>{var a;const i=t.filter(l=>l.length>2);return i.length===0?(a=t.at(-1))!=null?a:"Unknown":i.at(-1)},_t=t=>{switch(t.kind){case"interaction":{const{renderTime:a,otherJSTime:i,framePreparation:l,frameConstruction:s,frameDraw:c}=t;return a+i+l+s+(c??0)}case"dropped-frames":return t.otherTime+t.renderTime}},L4=t=>t.wasFiberRenderMount||t.hasMemoCache?!1:t.changes.context.length===0&&t.changes.props.length===0&&t.changes.state.length===0,mo=t=>{const a=_t(t.timing);switch(t.kind){case"interaction":return a<200?"low":a<500?"needs-improvement":"high";case"dropped-frames":return a<50?"low":a<Q1?"needs-improvement":"high"}},tn=()=>Qh(Z1),Z1=Yy(null),W1=({size:t=24,className:a})=>h("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:D(["lucide lucide-chevron-right",a]),children:h("path",{d:"m9 18 6-6-6-6"})}),j4=({className:t="",size:a=24,events:i=[]})=>{const l=i.includes(!0),s=i.filter(m=>m).length,c=s>99?">99":s,d=l?Math.max(a*.6,14):Math.max(a*.4,6);return h("div",{className:"relative",children:[h("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`lucide lucide-bell ${t}`,children:[h("path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}),h("path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"})]}),i.length>0&&s>0&&De.options.value.showNotificationCount&&h("div",{className:D(["absolute",l?"-top-2.5 -right-2.5":"-top-1 -right-1","rounded-full","flex items-center justify-center","text-[8px] font-medium text-white","aspect-square",l?"bg-red-500/90":"bg-purple-500/90"]),style:{width:`${d}px`,height:`${d}px`,padding:l?"0.5px":"0"},children:l&&c})]})},kc=({className:t="",size:a=24})=>h("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:t,children:[h("path",{d:"M18 6 6 18"}),h("path",{d:"m6 6 12 12"})]}),U4=({className:t="",size:a=24})=>h("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:t,children:[h("path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}),h("path",{d:"M16 9a5 5 0 0 1 0 6"}),h("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"})]}),H4=({className:t="",size:a=24})=>h("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:t,children:[h("path",{d:"M16 9a5 5 0 0 1 .95 2.293"}),h("path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}),h("path",{d:"m2 2 20 20"}),h("path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}),h("path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"})]}),B4=({size:t=24,className:a})=>h("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:D(["lucide lucide-arrow-left",a]),children:[h("path",{d:"m12 19-7-7 7-7"}),h("path",{d:"M19 12H5"})]}),F4=({className:t="",size:a=24})=>h("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:t,children:[h("path",{d:"M14 4.1 12 6"}),h("path",{d:"m5.1 8-2.9-.8"}),h("path",{d:"m6 12-1.9 2"}),h("path",{d:"M7.2 2.2 8 5.1"}),h("path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"})]}),V4=({className:t="",size:a=24})=>h("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:t,children:[h("path",{d:"M10 8h.01"}),h("path",{d:"M12 12h.01"}),h("path",{d:"M14 8h.01"}),h("path",{d:"M16 12h.01"}),h("path",{d:"M18 8h.01"}),h("path",{d:"M6 8h.01"}),h("path",{d:"M7 16h10"}),h("path",{d:"M8 12h.01"}),h("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"})]}),q4=({className:t="",size:a=24})=>h("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:t,style:{transform:"rotate(180deg)"},children:[h("circle",{cx:"12",cy:"12",r:"10"}),h("path",{d:"m4.9 4.9 14.2 14.2"})]}),Y4=({className:t="",size:a=24})=>h("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[h("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),h("polyline",{points:"16 17 22 17 22 11"})]}),K1=({children:t,triggerContent:a,wrapperProps:i})=>{const[l,s]=Ce("closed"),[c,d]=Ce(null),[m,p]=Ce({width:window.innerWidth,height:window.innerHeight}),g=me(null),b=me(null),w=Qh(Tm),y=me(!1);Te(()=>{const E=()=>{p({width:window.innerWidth,height:window.innerHeight}),x()};return window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[]);const x=()=>{if(g.current&&w){const E=g.current.getBoundingClientRect(),H=w.getBoundingClientRect(),Y=E.left+E.width/2,Q=E.top,J=new DOMRect(Y-H.left,Q-H.top,E.width,E.height);d(J)}};Te(()=>{x()},[g.current]),Te(()=>{if(l==="opening"){const E=setTimeout(()=>s("open"),120);return()=>clearTimeout(E)}else if(l==="closing"){const E=setTimeout(()=>s("closed"),120);return()=>clearTimeout(E)}},[l]),Te(()=>{const E=setInterval(()=>{!y.current&&l!=="closed"&&s("closing")},1e3);return()=>clearInterval(E)},[l]);const T=()=>{y.current=!0,x(),s("opening")},C=()=>{y.current=!1,x(),s("closing")},k=(()=>{var E;if(!c||!w)return{top:0,left:0};const H=w.getBoundingClientRect(),Y=175,Q=((E=b.current)==null?void 0:E.offsetHeight)||40,J=5,P=c.x+H.left,Z=c.y+H.top;let ie=P,ne=Z-4;return ie-Y/2<J?ie=J+Y/2:ie+Y/2>m.width-J&&(ie=m.width-J-Y/2),ne-Q<J&&(ne=Z+c.height+4),{top:ne-H.top,left:ie-H.left}})();return h($e,{children:[w&&c&&l!=="closed"&&yS(h("div",{ref:b,className:D(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg","transition-[opacity] duration-120 ease-out",'after:content-[""] after:absolute after:top-[100%]',"after:left-1/2 after:-translate-x-1/2","after:w-[10px] after:h-[6px]","after:border-l-[5px] after:border-l-transparent","after:border-r-[5px] after:border-r-transparent","after:border-t-[6px] after:border-t-white","pointer-events-none",l==="opening"||l==="closing"?"opacity-0":"opacity-100"]),style:{top:k.top+"px",left:k.left+"px",transform:`translate(-50%, calc(-100% - 4px)) scale(${l==="open"?1:.97})`,minWidth:"175px",willChange:"opacity, transform"},children:t}),w),h("div",{ref:g,onMouseEnter:T,onMouseLeave:C,...i,children:a})]})},G4=({selectedEvent:t})=>{const{notificationState:a,setNotificationState:i,setRoute:l}=tn();return h("div",{className:D(["flex w-full justify-between items-center px-3 py-2 text-xs"]),children:[h("div",{className:D(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]),children:[h("button",{onClick:()=>{l({route:"render-visualization",routeMessage:null})},className:D(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",a.route==="render-visualization"||a.route==="render-explanation"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Ranked"}),h("button",{onClick:()=>{l({route:"other-visualization",routeMessage:null})},className:D(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",a.route==="other-visualization"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Overview"}),h("button",{onClick:()=>{l({route:"optimize",routeMessage:null})},className:D(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",a.route==="optimize"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:h("span",{children:"Prompts"})})]}),h(K1,{triggerContent:h("button",{onClick:()=>{i(s=>{s.audioNotificationsOptions.enabled&&s.audioNotificationsOptions.audioContext.state!=="closed"&&s.audioNotificationsOptions.audioContext.close();const c=s.audioNotificationsOptions.enabled;localStorage.setItem("react-scan-notifications-audio",String(!c));const d=new AudioContext;return s.audioNotificationsOptions.enabled||um(d),c&&d.close(),{...s,audioNotificationsOptions:c?{audioContext:null,enabled:!1}:{audioContext:d,enabled:!0}}})},className:"ml-auto",children:h("div",{className:D(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]),children:[h("span",{children:"Alerts"}),a.audioNotificationsOptions.enabled?h(U4,{size:16,className:"text-[#6E6E77]"}):h(H4,{size:16,className:"text-[#6E6E77]"})]})}),children:h($e,{children:"Play a chime when a slowdown is recorded"})})]})},mi=t=>{let a="";return t.toSorted((l,s)=>s.totalTime-l.totalTime).slice(0,30).filter(l=>l.totalTime>5).forEach(l=>{let s="";s+="Component Name:",s+=l.name,s+=`
`,s+=`Rendered: ${l.count} times
`,s+=`Sum of self times for ${l.name} is ${l.totalTime.toFixed(0)}ms
`,l.changes.props.length>0&&(s+=`Changed props for all ${l.name} instances ("name:count" pairs)
`,l.changes.props.forEach(c=>{s+=`${c.name}:${c.count}x
`})),l.changes.state.length>0&&(s+=`Changed state for all ${l.name} instances ("hook index:count" pairs)
`,l.changes.state.forEach(c=>{s+=`${c.index}:${c.count}x
`})),l.changes.context.length>0&&(s+=`Changed context for all ${l.name} instances ("context display name (if exists):count" pairs)
`,l.changes.context.forEach(c=>{s+=`${c.name}:${c.count}x
`})),a+=s,a+=`
`}),a},X4=({renderTime:t,eHandlerTimeExcludingRenders:a,toRafTime:i,commitTime:l,framePresentTime:s,formattedReactData:c})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${t.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${a.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${i.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${l.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${s===null?"":`- how long it took from dom commit for the frame to be presented: ${s.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${c}`,I4=({interactionType:t,name:a,componentPath:i,time:l,renderTime:s,eHandlerTimeExcludingRenders:c,toRafTime:d,commitTime:m,framePresentTime:p,formattedReactData:g})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${t} on the component named ${a}. This component has the following ancestors ${i}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${l.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${s.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${c.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${d.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${m.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${p===null?"":`- how long it took from dom commit for the frame to be presented: ${p.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${g}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`,Q4=({renderTime:t,otherTime:a,formattedReactData:i})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${t.toFixed(0)}ms
- other time: ${a}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${i}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`,Z4=({renderTime:t,otherTime:a,formattedReactData:i})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${t.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${a}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${i}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,W4=({renderTime:t,otherTime:a,formattedReactData:i})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${t.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${a}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${i}`,K4=({interactionType:t,name:a,time:i,renderTime:l,eHandlerTimeExcludingRenders:s,toRafTime:c,commitTime:d,framePresentTime:m,formattedReactData:p})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${t} on a component named ${a}. This means, roughly, the component that handled the ${t} event was named ${a}.

We have a set of high level, and low level data about the performance issue.

The click took ${i.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${l.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${s.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${c.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${d.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${m===null?"":`- how long it took from dom commit for the frame to be presented: ${m.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${p}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,Dh=(t,a)=>kn(()=>{switch(t){case"data":switch(a.kind){case"dropped-frames":return W4({formattedReactData:mi(a.groupedFiberRenders),renderTime:a.groupedFiberRenders.reduce((i,l)=>i+l.totalTime,0),otherTime:a.timing.otherTime});case"interaction":return X4({commitTime:a.timing.frameConstruction,eHandlerTimeExcludingRenders:a.timing.otherJSTime,formattedReactData:mi(a.groupedFiberRenders),framePresentTime:a.timing.frameDraw,renderTime:a.groupedFiberRenders.reduce((i,l)=>i+l.totalTime,0),toRafTime:a.timing.framePreparation})}case"explanation":switch(a.kind){case"dropped-frames":return Z4({formattedReactData:mi(a.groupedFiberRenders),renderTime:a.groupedFiberRenders.reduce((i,l)=>i+l.totalTime,0),otherTime:a.timing.otherTime});case"interaction":return K4({commitTime:a.timing.frameConstruction,eHandlerTimeExcludingRenders:a.timing.otherJSTime,formattedReactData:mi(a.groupedFiberRenders),framePresentTime:a.timing.frameDraw,interactionType:a.type,name:io(a.componentPath),renderTime:a.groupedFiberRenders.reduce((i,l)=>i+l.totalTime,0),time:_t(a.timing),toRafTime:a.timing.framePreparation})}case"fix":switch(a.kind){case"dropped-frames":return Q4({formattedReactData:mi(a.groupedFiberRenders),renderTime:a.groupedFiberRenders.reduce((i,l)=>i+l.totalTime,0),otherTime:a.timing.otherTime});case"interaction":return I4({commitTime:a.timing.frameConstruction,componentPath:a.componentPath.join(">"),eHandlerTimeExcludingRenders:a.timing.otherJSTime,formattedReactData:mi(a.groupedFiberRenders),framePresentTime:a.timing.frameDraw,interactionType:a.type,name:io(a.componentPath),renderTime:a.groupedFiberRenders.reduce((i,l)=>i+l.totalTime,0),time:_t(a.timing),toRafTime:a.timing.framePreparation})}}}),J4=({selectedEvent:t})=>{const[a,i]=Ce("fix"),[l,s]=Ce(!1);return h("div",{className:D(["w-full h-full"]),children:[h("div",{className:D(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]),children:[h("div",{className:D(["bg-[#18181B] p-1 rounded-t-sm"]),children:h("div",{className:D(["flex items-center gap-x-1"]),children:[h("button",{onClick:()=>i("fix"),className:D(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",a==="fix"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Fix"}),h("button",{onClick:()=>i("explanation"),className:D(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",a==="explanation"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Explanation"}),h("button",{onClick:()=>i("data"),className:D(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",a==="data"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Data"})]})}),h("div",{className:D(["overflow-y-auto h-full"]),children:h("pre",{className:D(["p-2 h-full","whitespace-pre-wrap break-words","text-gray-300 font-mono "]),children:Dh(a,t)})})]}),h("button",{onClick:async()=>{const c=Dh(a,t);await navigator.clipboard.writeText(c),s(!0),setTimeout(()=>s(!1),1e3)},className:D(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm","hover:text-white transition-colors duration-200","flex items-center justify-center gap-x-2 text-xs"]),children:[h("span",{children:l?"Copied!":"Copy Prompt"}),h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:D(["transition-transform duration-200",l&&"scale-110"]),children:l?h("path",{d:"M20 6L9 17l-5-5"}):h($e,{children:[h("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),h("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})]})},P4=(t,a)=>{switch(t.kind){case"dropped-frames":return[...a?[{name:"Total Processing Time",time:_t(t.timing),color:"bg-red-500",kind:"total-processing-time"}]:[{name:"Renders",time:t.timing.renderTime,color:"bg-purple-500",kind:"render"},{name:"JavaScript, DOM updates, Draw Frame",time:t.timing.otherTime,color:"bg-[#4b4b4b]",kind:"other-frame-drop"}]];case"interaction":return[...a?[]:[{name:"Renders",time:t.timing.renderTime,color:"bg-purple-500",kind:"render"}],{name:a?"React Renders, Hooks, Other JavaScript":"JavaScript/React Hooks ",time:t.timing.otherJSTime,color:"bg-[#EFD81A]",kind:"other-javascript"},{name:"Update DOM and Draw New Frame",time:_t(t.timing)-t.timing.renderTime-t.timing.otherJSTime,color:"bg-[#1D3A66]",kind:"other-not-javascript"}]}},eA=({selectedEvent:t})=>{var a,i;const[l]=Ce((a=Bc())!=null?a:!1),{notificationState:s}=tn(),[c,d]=Ce((i=s.routeMessage)!=null&&i.name?[s.routeMessage.name]:[]),m=P4(t,l),p=Qh(Tm);Te(()=>{var b;if((b=s.routeMessage)!=null&&b.name){const w=p?.querySelector("#overview-scroll-container"),y=p?.querySelector(`#react-scan-overview-bar-${s.routeMessage.name}`);if(w&&y){const x=y.getBoundingClientRect().top,T=w.getBoundingClientRect().top,C=x-T;w.scrollTop=w.scrollTop+C}}},[s.route]),Te(()=>{s.route==="other-visualization"&&d(b=>{var w;return(w=s.routeMessage)!=null&&w.name?[s.routeMessage.name]:b})},[s.route]);const g=m.reduce((b,w)=>b+w.time,0);return h("div",{className:"rounded-sm border border-zinc-800 text-xs",children:[h("div",{className:"p-2 border-b border-zinc-800 bg-zinc-900/50",children:h("div",{className:"flex items-center justify-between",children:[h("h3",{className:"text-xs font-medium",children:"What was time spent on?"}),h("span",{className:"text-xs text-zinc-400",children:["Total: ",g.toFixed(0),"ms"]})]})}),h("div",{className:"divide-y divide-zinc-800",children:m.map(b=>{const w=c.includes(b.kind);return h("div",{id:`react-scan-overview-bar-${b.kind}`,children:[h("button",{onClick:()=>d(y=>y.includes(b.kind)?y.filter(x=>x!==b.kind):[...y,b.kind]),className:"w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",children:h("div",{className:"flex-1",children:[h("div",{className:"flex items-center justify-between mb-2",children:[h("div",{className:"flex items-center gap-0.5",children:[h("svg",{className:`h-4 w-4 text-zinc-400 transition-transform ${w?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:h("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),h("span",{className:"font-medium flex items-center text-left",children:b.name})]}),h("span",{className:" text-zinc-400",children:[b.time.toFixed(0),"ms"]})]}),h("div",{className:"h-1 bg-zinc-800 rounded-full overflow-hidden",children:h("div",{className:`h-full ${b.color} transition-all`,style:{width:`${b.time/g*100}%`}})})]})}),w&&h("div",{className:"bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",children:h("p",{className:" text-zinc-400 mb-4 text-xs",children:kn(()=>{switch(t.kind){case"interaction":switch(b.kind){case"render":return h(pi,{input:nA(t)});case"other-javascript":return h(pi,{input:aA(t)});case"other-not-javascript":return h(pi,{input:tA(t)})}case"dropped-frames":switch(b.kind){case"total-processing-time":return h(pi,{input:{kind:"total-processing",data:{time:_t(t.timing)}}});case"render":return h($e,{children:h(pi,{input:{kind:"render",data:{topByTime:t.groupedFiberRenders.toSorted((y,x)=>x.totalTime-y.totalTime).slice(0,3).map(y=>({name:y.name,percentage:y.totalTime/_t(t.timing)}))}}})});case"other-frame-drop":return h(pi,{input:{kind:"other"}})}}})})})]},b.kind)})})]})},tA=t=>{const a=t.groupedFiberRenders.reduce((c,d)=>c+d.count,0),i=t.timing.renderTime,l=_t(t.timing),s=i/l*100;return a>100?{kind:"high-render-count-update-dom-draw-frame",data:{count:a,percentageOfTotal:s,copyButton:h(iy,{})}}:{kind:"update-dom-draw-frame",data:{copyButton:h(iy,{})}}},iy=()=>{const[t,a]=Ce(!1),{notificationState:i}=tn();return h("button",{onClick:async()=>{i.selectedEvent&&(await navigator.clipboard.writeText(Dh("explanation",i.selectedEvent)),a(!0),setTimeout(()=>a(!1),1e3))},className:"bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",children:[h("span",{children:t?"Copied!":"Copy Prompt"}),h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:D(["transition-transform duration-200",t&&"scale-110"]),children:t?h("path",{d:"M20 6L9 17l-5-5"}):h($e,{children:[h("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),h("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})},nA=t=>t.timing.renderTime/_t(t.timing)>.3?{kind:"render",data:{topByTime:t.groupedFiberRenders.toSorted((a,i)=>i.totalTime-a.totalTime).slice(0,3).map(a=>({percentage:a.totalTime/_t(t.timing),name:a.name}))}}:{kind:"other"},aA=t=>{const a=t.groupedFiberRenders.reduce((i,l)=>i+l.count,0);return t.timing.otherJSTime/_t(t.timing)<.2?{kind:"js-explanation-base"}:t.groupedFiberRenders.find(i=>i.count>200)||t.groupedFiberRenders.reduce((i,l)=>i+l.count,0)>500?{kind:"high-render-count-high-js",data:{renderCount:a,topByCount:t.groupedFiberRenders.filter(i=>i.count>100).toSorted((i,l)=>l.count-i.count).slice(0,3)}}:t.timing.otherJSTime/_t(t.timing)>.3?t.timing.renderTime>.2?{kind:"js-explanation-base"}:{kind:"low-render-count-high-js",data:{renderCount:a}}:{kind:"js-explanation-base"}},pi=({input:t})=>{switch(t.kind){case"total-processing":return h("div",{className:D(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[h("p",{children:["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ","<=16ms"]}),h("p",{children:'To debug the issue, check the "Ranked" tab to see if there are significant component renders'}),h("p",{children:"On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build"}),h("p",{children:["To understand precisely what caused the slowdown while in production, use the ",h("strong",{children:"Chrome profiler"})," and analyze the function call times."]}),h("p",{})]});case"render":return h("div",{className:D(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[h("p",{children:"This is the time it took React to run components, and internal logic to handle the output of your component."}),h("div",{className:D(["flex flex-col"]),children:[h("p",{children:"The slowest components for this time period were:"}),t.data.topByTime.map(a=>h("div",{children:[h("strong",{children:a.name}),":"," ",(a.percentage*100).toFixed(0),"% of total"]},a.name))]}),h("p",{children:'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab'}),h("p",{children:'The "Ranked" tab shows the render times of every component.'}),h("p",{children:"The render times of the same components are grouped together into one bar."}),h("p",{children:"Clicking the component will show you what props, state, or context caused the component to re-render."})]});case"js-explanation-base":return h("div",{className:D(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[h("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),h("p",{children:["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ",h("code",{children:"useEffect"}),"'s or a large number of useEffect's called, but this can also be JavaScript event handlers (",h("code",{children:"'onclick'"}),", ",h("code",{children:"'onchange'"}),") that performed expensive computation."]}),h("p",{children:"If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run."}),h("p",{children:["You should profile your app using the"," ",h("strong",{children:"Chrome DevTools profiler"})," to learn exactly which functions took the longest to execute."]})]});case"high-render-count-high-js":return h("div",{className:D(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[h("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),t.data.renderCount===0?h($e,{children:[h("p",{children:"There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API"}),h("p",{children:["You should try to reproduce the slowdown while profiling your website with the",h("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]}):h($e,{children:[" ",h("p",{children:["There were ",h("strong",{children:t.data.renderCount})," renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ",h("code",{children:"useEffects"}),"."]}),h("div",{className:D(["flex flex-col"]),children:[h("p",{children:"You should try optimizing the renders of:"}),t.data.topByCount.map(a=>h("div",{children:["- ",h("strong",{children:a.name})," (rendered ",a.count,"x)"]},a.name))]}),"and then checking if the problem still exists.",h("p",{children:["You can also try profiling your app using the"," ",h("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]})]});case"low-render-count-high-js":return h("div",{className:D(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[h("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),h("p",{children:["There were only ",h("strong",{children:t.data.renderCount})," renders detected, which means either you had very expensive hooks like"," ",h("code",{children:"useEffect"}),"/",h("code",{children:"useLayoutEffect"}),", or there is other JavaScript running during this interaction that took up the majority of the time."]}),h("p",{children:["To understand precisely what caused the slowdown, use the"," ",h("strong",{children:"Chrome profiler"})," and analyze the function call times."]})]});case"high-render-count-update-dom-draw-frame":return h("div",{className:D(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[h("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),h("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),h("p",{children:["During this interaction, there were"," ",h("strong",{children:t.data.count})," renders, which was"," ",h("strong",{children:[t.data.percentageOfTotal.toFixed(0),"%"]})," of the time spent processing"]}),h("p",{children:"The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame."}),h("p",{children:'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.'}),h("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),h("p",{children:t.data.copyButton}),h("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),h("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"update-dom-draw-frame":return h("div",{className:D(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[h("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),h("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),h("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),h("p",{children:t.data.copyButton}),h("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),h("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"other":return h("div",{className:D(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[h("p",{children:["This is the time it took to run everything other than React renders. This can be hooks like ",h("code",{children:"useEffect"}),", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."]}),h("p",{children:["To get a better picture of what happened, profile your app using the"," ",h("strong",{children:"Chrome profiler"})," when the performance problem arises."]})]})}},We=null,ot=null,Xe=bt({kind:"idle",current:null}),Uf=null,gi=0,rA=1.8,iA=.05,lA=1/60,_i=()=>{Uf&&cancelAnimationFrame(Uf),Uf=requestAnimationFrame(t=>{if(!We||!ot)return;const a=gi?Math.min((t-gi)/1e3,iA):lA;gi=t;const i=rA*a;ot.clearRect(0,0,We.width,We.height);const l="hsl(271, 76%, 53%)",s=Xe.value,{alpha:c,current:d}=kn(()=>{var m,p,g;switch(s.kind){case"transition":{const b=(m=s.current)!=null&&m.alpha&&s.current.alpha>0?s.current:s.transitionTo;return{alpha:b?b.alpha:0,current:b}}case"move-out":return{alpha:(g=(p=s.current)==null?void 0:p.alpha)!=null?g:0,current:s.current};case"idle":return{alpha:1,current:s.current}}});switch(d?.rects.forEach(m=>{ot&&(ot.shadowColor=l,ot.shadowBlur=6,ot.strokeStyle=l,ot.lineWidth=2,ot.globalAlpha=c,ot.beginPath(),ot.rect(m.left,m.top,m.width,m.height),ot.stroke(),ot.shadowBlur=0,ot.beginPath(),ot.rect(m.left,m.top,m.width,m.height),ot.stroke())}),s.kind){case"move-out":{if(s.current.alpha===0){Xe.value={kind:"idle",current:null},gi=0;return}s.current.alpha<=.01&&(s.current.alpha=0),s.current.alpha=Math.max(0,s.current.alpha-i),_i();return}case"transition":{if(s.current&&s.current.alpha>0){s.current.alpha=Math.max(0,s.current.alpha-i),_i();return}if(s.transitionTo.alpha===1){Xe.value={kind:"idle",current:s.transitionTo},gi=0;return}s.transitionTo.alpha=Math.min(s.transitionTo.alpha+i,1),_i()}case"idle":{gi=0;return}}})},Hf=null,oA=t=>{if(We=document.createElement("canvas"),ot=We.getContext("2d",{alpha:!0}),!ot)return null;const a=window.devicePixelRatio||1,{innerWidth:i,innerHeight:l}=window;We.style.width=`${i}px`,We.style.height=`${l}px`,We.width=i*a,We.height=l*a,We.style.position="fixed",We.style.left="0",We.style.top="0",We.style.pointerEvents="none",We.style.zIndex="2147483600",ot.scale(a,a),t.appendChild(We),Hf&&window.removeEventListener("resize",Hf);const s=()=>{if(!We||!ot)return;const c=window.devicePixelRatio||1,{innerWidth:d,innerHeight:m}=window;We.style.width=`${d}px`,We.style.height=`${m}px`,We.width=d*c,We.height=m*c,ot.scale(c,c),_i()};return Hf=s,window.addEventListener("resize",s),Xe.subscribe(()=>{requestAnimationFrame(()=>{_i()})}),sA};function sA(){We?.parentNode&&We.parentNode.removeChild(We),We=null,ot=null}var Hl=()=>{var t,a;const i=Xe.value.current?Xe.value.current:Xe.value.kind==="transition"?Xe.value.transitionTo:null;if(i){if(Xe.value.kind==="transition"){Xe.value={kind:"move-out",current:((t=Xe.value.current)==null?void 0:t.alpha)===0?Xe.value.transitionTo:(a=Xe.value.current)!=null?a:Xe.value.transitionTo};return}Xe.value={kind:"move-out",current:{alpha:0,...i}}}},cA=({selectedEvent:t})=>{const a=_t(t.timing),i=a-t.timing.renderTime,[l]=Ce(Bc()),c=t.groupedFiberRenders.map(g=>({event:g,kind:"render",totalTime:l?g.count:g.totalTime})),d=kn(()=>{switch(t.kind){case"dropped-frames":return t.timing.renderTime/a<.1;case"interaction":return(t.timing.otherJSTime+t.timing.renderTime)/a<.2}});t.kind==="interaction"&&!l&&c.push({kind:"other-javascript",totalTime:t.timing.otherJSTime}),d&&!l&&(t.kind==="interaction"?c.push({kind:"other-not-javascript",totalTime:_t(t.timing)-t.timing.renderTime-t.timing.otherJSTime}):c.push({kind:"other-frame-drop",totalTime:i}));const m=me({lastCallAt:null,timer:null}),p=c.reduce((g,b)=>g+b.totalTime,0);return h("div",{className:D(["flex flex-col h-full w-full gap-y-1"]),children:[kn(()=>{if(l&&c.length===0)return h("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[h("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No data available"}),h("p",{className:"text-x w-full text-lefts",children:"No data was collected during this period"})]});if(c.length===0)return h("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[h("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No renders collected"}),h("p",{className:"text-x w-full text-lefts",children:"There were no renders during this period"})]})}),c.toSorted((g,b)=>b.totalTime-g.totalTime).map(g=>h(J1,{bars:c,bar:g,debouncedMouseEnter:m,totalBarTime:p,isProduction:l},g.kind==="render"?g.event.id:g.kind))]})},uA=t=>t.current&&t.current.alpha>0?"fading-out":"fading-in",J1=({bar:t,debouncedMouseEnter:a,totalBarTime:i,isProduction:l,bars:s,depth:c=0})=>{const{setNotificationState:d,setRoute:m}=tn(),[p,g]=Ce(!1),b=t.kind==="render"?t.event.parents.size===0:!0,w=s.filter(T=>T.kind==="render"&&t.kind==="render"?t.event.parents.has(T.event.name)&&T.event.name!==t.event.name:!1),y=t.kind==="render"?Array.from(t.event.parents).filter(T=>!s.some(C=>C.kind==="render"&&C.event.name===T)):[],x=()=>{t.kind==="render"?(d(T=>({...T,selectedFiber:t.event})),m({route:"render-explanation",routeMessage:null})):m({route:"other-visualization",routeMessage:{kind:"auto-open-overview-accordion",name:t.kind}})};return h("div",{className:"w-full",children:[h("div",{className:D(["w-full flex items-center relative text-xs min-w-0"]),children:[h("button",{onMouseLeave:()=>{a.current.timer&&clearTimeout(a.current.timer),Hl()},onMouseEnter:async()=>{const T=async()=>{if(a.current.lastCallAt=Date.now(),t.kind!=="render"){const H=Xe.value.current?Xe.value.current:Xe.value.kind==="transition"?Xe.value.transitionTo:null;if(!H){Xe.value={kind:"idle",current:null};return}Xe.value={kind:"move-out",current:{alpha:0,...H}};return}const C=Xe.value,M=kn(()=>{switch(C.kind){case"transition":return C.transitionTo;case"idle":case"move-out":return C.current}}),k=[];if(C.kind==="transition"){const H=uA(C);kn(()=>{switch(H){case"fading-in":{Xe.value={kind:"transition",current:C.transitionTo,transitionTo:{rects:k,alpha:0,name:t.event.name}};return}case"fading-out":{Xe.value={kind:"transition",current:Xe.value.current?{alpha:0,...Xe.value.current}:null,transitionTo:{rects:k,alpha:0,name:t.event.name}};return}}})}else Xe.value={kind:"transition",transitionTo:{rects:k,alpha:0,name:t.event.name},current:M?{alpha:0,...M}:null};const E=t.event.elements.filter(H=>H instanceof Element);for await(const H of V1(E))H.forEach(({boundingClientRect:Y})=>{k.push(Y)}),_i()};if(a.current.lastCallAt&&Date.now()-a.current.lastCallAt<200){a.current.timer&&clearTimeout(a.current.timer),a.current.timer=setTimeout(()=>{T()},200);return}T()},onClick:x,className:D(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]),children:[h("div",{style:{minWidth:"fit-content",width:`${t.totalTime/i*100}%`},className:D(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0",t.kind==="render"&&"bg-[#412162] group-hover:bg-[#5b2d89]",t.kind==="other-frame-drop"&&"bg-[#44444a] group-hover:bg-[#6a6a6a]",t.kind==="other-javascript"&&"bg-[#efd81a6b] group-hover:bg-[#efda1a2f]",t.kind==="other-not-javascript"&&"bg-[#214379d4] group-hover:bg-[#21437982]"])}),h("div",{className:D(["absolute inset-0 flex items-center px-2","min-w-0"]),children:h("div",{className:"flex items-center gap-x-2 min-w-0 w-full",children:[h("span",{className:D(["truncate"]),children:kn(()=>{switch(t.kind){case"other-frame-drop":return"JavaScript, DOM updates, Draw Frame";case"other-javascript":return"JavaScript/React Hooks";case"other-not-javascript":return"Update DOM and Draw New Frame";case"render":return t.event.name}})}),t.kind==="render"&&L4(t.event)&&h("div",{style:{lineHeight:"10px"},className:D(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]),children:"Memoizable"})]})})]}),h("button",{onClick:()=>t.kind==="render"&&!b&&g(!p),className:D(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]",!b&&"hover:bg-[#0f0f0f]",t.kind==="render"&&!b?"cursor-pointer":"cursor-default"]),children:[h("div",{className:"w-[20px] flex items-center justify-center",children:t.kind==="render"&&!b&&h(W1,{className:D("transition-transform",p&&"rotate-90"),size:16})}),h("div",{style:{minWidth:b?"fit-content":l?"30px":"60px"},className:"flex items-center justify-end gap-x-1",children:[t.kind==="render"&&h("span",{className:D(["text-[10px]"]),children:["x",t.event.count]}),(t.kind!=="render"||!l)&&h("span",{className:"text-[10px] text-[#7346a0] pr-1",children:[t.totalTime<1?"<1":t.totalTime.toFixed(0),"ms"]})]})]}),c===0&&h("div",{className:D(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16","pointer-events-none"]),children:"Click to learn more"})]}),p&&(w.length>0||y.length>0)&&h("div",{className:"pl-3 flex flex-col gap-y-1 mt-1",children:[w.toSorted((T,C)=>C.totalTime-T.totalTime).map((T,C)=>h(J1,{depth:c+1,bar:T,debouncedMouseEnter:a,totalBarTime:i,isProduction:l,bars:s},C)),y.map(T=>h("div",{className:"w-full",children:h("div",{className:"w-full flex items-center relative text-xs",children:h("div",{className:"h-full w-full flex items-center relative",children:[h("div",{className:"flex items-center rounded-sm text-white text-xs h-[28px] w-full"}),h("div",{className:"absolute inset-0 flex items-center px-2",children:h("span",{className:"truncate whitespace-nowrap text-white/70 w-full",children:T})})]})})},T))]})]})},dA=({selectedEvent:t,selectedFiber:a})=>{const{setRoute:i}=tn(),[l,s]=Ce(!0),[c]=Ce(Bc());Ih(()=>{const m=localStorage.getItem("react-scan-tip-shown"),p=m==="true"?!0:m==="false"?!1:null;if(p===null){s(!0),localStorage.setItem("react-scan-tip-is-shown","true");return}p||s(!1)},[]);const d=a.changes.context.length===0&&a.changes.props.length===0&&a.changes.state.length===0;return h("div",{className:D(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]),children:[h("div",{className:D(["flex items-start gap-x-4 "]),children:[h("button",{onClick:()=>{i({route:"render-visualization",routeMessage:null})},className:D(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]),children:[h(B4,{size:14})," ",h("span",{children:"Overview"})]}),h("div",{className:D(["flex flex-col gap-y-1"]),children:[h("div",{className:D(["text-sm font-bold text-white overflow-x-hidden"]),children:h("div",{className:"flex items-center gap-x-2 truncate",children:a.name})}),h("div",{className:D(["flex gap-x-2"]),children:[!c&&h($e,{children:h("div",{className:D(["text-xs text-gray-400"]),children:["• Render time: ",a.totalTime.toFixed(0),"ms"]})}),h("div",{className:D(["text-xs text-gray-400 mb-4"]),children:["• Renders: ",a.count,"x"]})]})]})]}),l&&!d&&h("div",{className:D(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]),children:[h("button",{onClick:()=>{s(!1),localStorage.setItem("react-scan-tip-shown","false")},className:D(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]),children:h(kc,{size:12})}),h("div",{className:D(["w-1 bg-[#d36cff]"])}),h("div",{className:D(["flex-1"]),children:[h("div",{className:D(["px-3 py-2 text-gray-100 text-xs font-semibold"]),children:"How to stop renders"}),h("div",{className:D(["px-3 pb-2 text-gray-400 text-[10px]"]),children:"Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already"})]})]}),d&&h("div",{className:D(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]),children:[h("div",{className:D(["w-1 bg-[#d36cff]"])}),h("div",{className:D(["flex-1"]),children:[h("div",{className:D(["px-3 py-2 text-gray-100 text-sm font-semibold"]),children:"No changes detected"}),h("div",{className:D(["px-3 pb-2 text-gray-400 text-xs"]),children:"This component would not have rendered if it was memoized"})]})]}),h("div",{className:D(["flex w-full"]),children:[h("div",{className:D(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]),children:[h("div",{className:D(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Props"}),a.changes.props.length>0?a.changes.props.toSorted((m,p)=>p.count-m.count).map(m=>h("div",{className:D(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[h("span",{className:D(["text-white "]),children:m.name}),h("div",{className:D([" text-[8px]  text-[#d36cff] pl-1 py-1 "]),children:[m.count,"/",a.count,"x"]})]},m.name)):h("div",{className:D(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),h("div",{className:D(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]),children:[h("div",{className:D([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed State"}),a.changes.state.length>0?a.changes.state.toSorted((m,p)=>p.count-m.count).map(m=>h("div",{className:D(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[h("span",{className:D(["text-white "]),children:["index ",m.index]}),h("div",{className:D(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]),children:[m.count,"/",a.count,"x"]})]},m.index)):h("div",{className:D(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),h("div",{className:D(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]),children:[h("div",{className:D([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Context"}),a.changes.context.length>0?a.changes.context.toSorted((m,p)=>p.count-m.count).map(m=>h("div",{className:D(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]),children:[h("span",{className:D(["text-white "]),children:m.name}),h("div",{className:D(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]),children:[m.count,"/",a.count,"x"]})]},m.name)):h("div",{className:D(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]),children:"No changes"})]})]})]})},fA=()=>{const{notificationState:t,setNotificationState:a}=tn(),[i,l]=Ce("..."),s=me(null);if(Te(()=>{const c=setInterval(()=>{l(d=>d==="..."?"":d+".")},500);return()=>clearInterval(c)},[]),!t.selectedEvent)return h("div",{ref:s,className:D(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]),children:[h("div",{className:D(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]),children:h("button",{onClick:()=>{Ie.value={view:"none"}},children:h(kc,{size:18,className:"text-[#6F6F78]"})})}),h("div",{className:D(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md"," shadow-lg"]),children:h("div",{className:D(["flex flex-col items-start gap-y-4"]),children:[h("div",{className:D(["flex items-center"]),children:h("span",{className:D(["text-zinc-400 font-medium text-[17px]"]),children:["Scanning for slowdowns",i]})}),t.events.length!==0&&h("p",{className:D(["text-xs"]),children:["Click on an item in the"," ",h("span",{className:D(["text-purple-400"]),children:"History"})," list to get started"]}),h("p",{className:D(["text-zinc-600 text-xs"]),children:"You don't need to keep this panel open for React Scan to record slowdowns"}),h("p",{className:D(["text-zinc-600 text-xs"]),children:"Enable audio alerts to hear a delightful ding every time a large slowdown is recorded"}),h("button",{onClick:()=>{if(t.audioNotificationsOptions.enabled){a(d=>{var m,p;return((m=d.audioNotificationsOptions.audioContext)==null?void 0:m.state)!=="closed"&&((p=d.audioNotificationsOptions.audioContext)==null||p.close()),localStorage.setItem("react-scan-notifications-audio","false"),{...d,audioNotificationsOptions:{audioContext:null,enabled:!1}}});return}localStorage.setItem("react-scan-notifications-audio","true");const c=new AudioContext;um(c),a(d=>({...d,audioNotificationsOptions:{enabled:!0,audioContext:c}}))},className:D(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full"," text-sm flex items-center gap-x-2 justify-center"]),children:t.audioNotificationsOptions.enabled?h($e,{children:h("span",{className:"flex items-center gap-x-1",children:"Disable audio alerts"})}):h($e,{children:h("span",{className:"flex items-center gap-x-1",children:"Enable audio alerts"})})})]})})]});switch(t.route){case"render-visualization":return h(Bs,{children:h(cA,{selectedEvent:t.selectedEvent})});case"render-explanation":{if(!t.selectedFiber)throw new Error("Invariant: must have selected fiber when viewing render explanation");return h(Bs,{children:h(dA,{selectedFiber:t.selectedFiber,selectedEvent:t.selectedEvent})})}case"other-visualization":return h(Bs,{children:h("div",{className:D(["flex w-full h-full flex-col overflow-y-auto"]),id:"overview-scroll-container",children:h(eA,{selectedEvent:t.selectedEvent})})});case"optimize":return h(Bs,{children:h(J4,{selectedEvent:t.selectedEvent})})}t.route},Bs=({children:t})=>{const{notificationState:a}=tn();if(!a.selectedEvent)throw new Error("Invariant: d must have selected event when viewing render explanation");return h("div",{className:D(["w-full h-full flex flex-col gap-y-2"]),children:[h("div",{className:D(["h-[50px] w-full"]),children:h(G4,{selectedEvent:a.selectedEvent})}),h("div",{className:D(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]),children:t})]})},hA=({selectedEvent:t})=>{const a=mo(t);switch(t.kind){case"interaction":return h("div",{className:D(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:h("div",{className:D(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[h("div",{className:D(["flex items-center gap-x-2 "]),children:[h("span",{className:D(["text-[#5a5a5a] mr-0.5"]),children:t.type==="click"?"Clicked ":"Typed in "}),h("span",{children:io(t.componentPath)}),h("div",{className:D(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",a==="low"&&"bg-green-500/50",a==="needs-improvement"&&"bg-[#b77116]",a==="high"&&"bg-[#b94040]"]),children:[_t(t.timing).toFixed(0),"ms processing time"]})]}),h("div",{className:D(["flex items-center gap-x-2  justify-end ml-auto"]),children:h("div",{className:D(["p-2 flex justify-center items-center border-[#27272A]"]),children:h("button",{onClick:()=>{Ie.value={view:"none"}},title:"Close",children:h(kc,{size:18,className:"text-[#6F6F78]"})})})})]})});case"dropped-frames":return h("div",{className:D(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:h("div",{className:D(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[h("div",{className:D(["flex items-center gap-x-2 "]),children:["FPS Drop",h("div",{className:D(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",a==="low"&&"bg-green-500/50",a==="needs-improvement"&&"bg-[#b77116]",a==="high"&&"bg-[#b94040]"]),children:["dropped to ",t.fps," FPS"]})]}),h("div",{className:D(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]),children:h("div",{className:D(["p-2 flex justify-center items-center border-[#27272A]"]),children:h("button",{onClick:()=>{Ie.value={view:"none"}},children:h(kc,{size:18,className:"text-[#6F6F78]"})})})})]})})}},mA=({flashingItemsCount:t,totalEvents:a})=>{const[i,l]=Ce(!1),s=me(0),c=me(0);return Te(()=>{if(s.current>=a)return;const d=Date.now(),m=250,p=d-c.current;if(p>=m){l(!1);const g=setTimeout(()=>{s.current=a,c.current=Date.now(),l(!0),setTimeout(()=>{l(!1)},2e3)},50);return()=>clearTimeout(g)}else{const g=m-p,b=setTimeout(()=>{l(!1),setTimeout(()=>{s.current=a,c.current=Date.now(),l(!0),setTimeout(()=>{l(!1)},2e3)},50)},g);return()=>clearTimeout(b)}},[t]),i},ly=({item:t,shouldFlash:a})=>{var i,l;const[s,c]=Ce(!1),d=t.events.map(mo).reduce((g,b)=>{switch(b){case"high":return"high";case"needs-improvement":return g==="high"?"high":"needs-improvement";case"low":return g}},"low"),m=t.events.reduce((g,b)=>a(b.id)?g+1:g,0),p=mA({flashingItemsCount:m,totalEvents:t.events.length});return h("div",{className:D(["flex flex-col gap-y-0.5"]),children:[h("button",{onClick:()=>c(g=>!g),className:D(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",p&&!s&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[h("div",{className:D(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]),children:[h("span",{className:D(["min-w-fit"]),children:h(W1,{className:D(["text-[#A1A1AA] transition-transform",s?"rotate-90":""]),size:14},`chevron-${t.timestamp}`)}),h("span",{className:D(["text-xs"]),children:t.kind==="collapsed-frame-drops"?"FPS Drops":io((l=(i=t.events.at(0))==null?void 0:i.componentPath)!=null?l:[])})]}),h("div",{className:D(["ml-auto min-w-fit flex justify-end items-center"]),children:h("div",{style:{lineHeight:"10px"},className:D(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold",d==="low"&&"bg-green-500/60",d==="needs-improvement"&&"bg-[#b77116] text-[10px]",d==="high"&&"bg-[#b94040]"]),children:["x",t.events.length]})})]}),s&&h(pA,{children:t.events.toSorted((g,b)=>b.timestamp-g.timestamp).map(g=>h(P1,{event:g,shouldFlash:a(g.id)}))})]})},pA=({children:t})=>h("div",{className:"relative pl-6 flex flex-col gap-y-1",children:[h("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-[#27272A]"}),t]}),gA=t=>{const a=me([]),[i,l]=Ce(new Set),s=me(!0);return Te(()=>{if(s.current){s.current=!1,a.current=t;return}const c=new Set(t.map(p=>p.id)),d=new Set(a.current.map(p=>p.id)),m=new Set;c.forEach(p=>{d.has(p)||m.add(p)}),m.size>0&&(l(m),setTimeout(()=>{l(new Set)},2e3)),a.current=t},[t]),c=>i.has(c)},vA=({shouldFlash:t})=>{const[a,i]=Ce(t);return Te(()=>{if(t){i(!0);const l=setTimeout(()=>{i(!1)},1e3);return()=>clearTimeout(l)}},[t]),a},P1=({event:t,shouldFlash:a})=>{var i,l;const{notificationState:s,setNotificationState:c}=tn(),d=mo(t),m=vA({shouldFlash:a});switch(t.kind){case"interaction":return h("button",{onClick:()=>{c(p=>({...p,selectedEvent:t,route:"render-visualization",selectedFiber:null}))},className:D(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",t.id===((i=s.selectedEvent)==null?void 0:i.id)&&"bg-[#18181B]",m&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[h("div",{className:D(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]),children:[h("span",{className:D(["min-w-fit text-xs"]),children:kn(()=>{switch(t.type){case"click":return h(F4,{size:14});case"keyboard":return h(V4,{size:14})}})}),h("span",{className:D(["text-xs pr-1 truncate"]),children:io(t.componentPath)})]}),h("div",{className:D([" min-w-fit flex justify-end items-center ml-auto"]),children:h("div",{style:{lineHeight:"10px"},className:D(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]",d==="low"&&"bg-green-500/50",d==="needs-improvement"&&"bg-[#b77116] text-[10px]",d==="high"&&"bg-[#b94040]"]),children:h("div",{style:{lineHeight:"10px"},className:D(["text-[10px] text-white flex items-end"]),children:[_t(t.timing).toFixed(0),"ms"]})})})]});case"dropped-frames":return h("button",{onClick:()=>{c(p=>({...p,selectedEvent:t,route:"render-visualization",selectedFiber:null}))},className:D(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",t.id===((l=s.selectedEvent)==null?void 0:l.id)&&"bg-[#18181B]",m&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[h("div",{className:D(["w-4/5 flex items-center justify-start h-full text-xs truncate"]),children:[h(Y4,{size:14,className:"mr-1.5"})," FPS Drop"]}),h("div",{className:D([" min-w-fit flex justify-end items-center ml-auto"]),children:h("div",{style:{lineHeight:"10px"},className:D(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold",d==="low"&&"bg-green-500/60",d==="needs-improvement"&&"bg-[#b77116] text-[10px]",d==="high"&&"bg-[#b94040]"]),children:[t.fps," FPS"]})})]})}},bA=t=>t.reduce((i,l)=>{const s=i.at(-1);if(!s)return[{kind:"single",event:l,timestamp:l.timestamp}];switch(s.kind){case"collapsed-keyboard":return l.kind==="interaction"&&l.type==="keyboard"&&l.componentPath.join("-")===s.events[0].componentPath.join("-")?[...i.filter(d=>d!==s),{kind:"collapsed-keyboard",events:[...s.events,l],timestamp:Math.max(...[...s.events,l].map(d=>d.timestamp))}]:[...i,{kind:"single",event:l,timestamp:l.timestamp}];case"single":return s.event.kind==="interaction"&&s.event.type==="keyboard"&&l.kind==="interaction"&&l.type==="keyboard"&&s.event.componentPath.join("-")===l.componentPath.join("-")?[...i.filter(d=>d!==s),{kind:"collapsed-keyboard",events:[s.event,l],timestamp:Math.max(s.event.timestamp,l.timestamp)}]:s.event.kind==="dropped-frames"&&l.kind==="dropped-frames"?[...i.filter(d=>d!==s),{kind:"collapsed-frame-drops",events:[s.event,l],timestamp:Math.max(s.event.timestamp,l.timestamp)}]:[...i,{kind:"single",event:l,timestamp:l.timestamp}];case"collapsed-frame-drops":return l.kind==="dropped-frames"?[...i.filter(d=>d!==s),{kind:"collapsed-frame-drops",events:[...s.events,l],timestamp:Math.max(...[...s.events,l].map(d=>d.timestamp))}]:[...i,{kind:"single",event:l,timestamp:l.timestamp}]}},[]),ex=(t=150)=>{const{notificationState:a}=tn(),[i,l]=Ce(a.events);return Te(()=>{setTimeout(()=>{l(a.events)},t)},[a.events]),[i,l]},yA=()=>{const{notificationState:t,setNotificationState:a}=tn(),i=gA(t.events),[l,s]=ex(),c=bA(l).toSorted((d,m)=>m.timestamp-d.timestamp);return h("div",{className:D(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]),children:[h("div",{className:D(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]),children:[h("span",{children:"History"}),h(K1,{wrapperProps:{className:"h-full flex items-center justify-center ml-auto"},triggerContent:h("button",{className:D(["hover:bg-[#18181B] rounded-full p-2"]),title:"Clear all events",onClick:()=>{ro.getState().actions.clear(),a(d=>({...d,selectedEvent:null,selectedFiber:null,route:d.route==="other-visualization"?"other-visualization":"render-visualization"})),s([])},children:h(q4,{className:D([""]),size:16})}),children:h("div",{className:D(["w-full flex justify-center"]),children:"Clear all events"})})]}),h("div",{className:D(["flex flex-col px-1 gap-y-1"]),children:[c.length===0&&h("div",{className:D(["flex items-center justify-center text-zinc-500 text-sm py-4"]),children:"No Events"}),c.map(d=>kn(()=>{switch(d.kind){case"collapsed-keyboard":return h(ly,{shouldFlash:i,item:d});case"single":return h(P1,{event:d.event,shouldFlash:i(d.event.id)},d.event.id);case"collapsed-frame-drops":return h(ly,{shouldFlash:i,item:d})}}))]})]})},wA=t=>Object.values(t).map(i=>({id:_n(),totalTime:i.nodeInfo.reduce((l,s)=>l+s.selfTime,0),count:i.nodeInfo.length,name:i.nodeInfo[0].name,deletedAll:!1,parents:i.parents,hasMemoCache:i.hasMemoCache,wasFiberRenderMount:i.wasFiberRenderMount,elements:i.nodeInfo.map(l=>l.element),changes:{context:i.changes.fiberContext.current.filter(l=>i.changes.fiberContext.changesCounts.get(l.name)).map(l=>{var s;return{name:String(l.name),count:(s=i.changes.fiberContext.changesCounts.get(l.name))!=null?s:0}}),props:i.changes.fiberProps.current.filter(l=>i.changes.fiberProps.changesCounts.get(l.name)).map(l=>{var s;return{name:String(l.name),count:(s=i.changes.fiberProps.changesCounts.get(l.name))!=null?s:0}}),state:i.changes.fiberState.current.filter(l=>i.changes.fiberState.changesCounts.get(Number(l.name))).map(l=>{var s;return{index:l.name,count:(s=i.changes.fiberState.changesCounts.get(Number(l.name)))!=null?s:0}})}})),xA=t=>{Te(()=>{const i=setInterval(()=>{t.forEach(l=>{l.groupedFiberRenders&&l.groupedFiberRenders.forEach(s=>{if(s.deletedAll)return;if(!s.elements||s.elements.length===0){s.deletedAll=!0;return}const c=s.elements.length;s.elements=s.elements.filter(d=>d&&d.isConnected),s.elements.length===0&&c>0&&(s.deletedAll=!0)})})},5e3);return()=>{clearInterval(i)}},[t])},tx=()=>{const t=M4(),a=[];return xA(a),t.state.events.forEach(i=>{const l=i.kind==="interaction"?i.data.meta.detailedTiming.fiberRenders:i.data.meta.fiberRenders,s=wA(l),c=s.reduce((d,m)=>d+m.totalTime,0);switch(i.kind){case"interaction":{const{commitEnd:d,jsEndDetail:m,interactionStartDetail:p,rafStart:g}=i.data.meta.detailedTiming,b=Math.max(0,m-p-c),w=Math.max(i.data.meta.latency-(d-p),0);a.push({componentPath:i.data.meta.detailedTiming.componentPath,groupedFiberRenders:s,id:i.id,kind:"interaction",memory:null,timestamp:i.data.startAt,type:i.data.meta.detailedTiming.interactionType==="keyboard"?"keyboard":"click",timing:{renderTime:c,kind:"interaction",otherJSTime:b,framePreparation:g-m,frameConstruction:d-g,frameDraw:w}});return}case"long-render":{a.push({kind:"dropped-frames",id:i.id,memory:null,timing:{kind:"dropped-frames",renderTime:c,otherTime:i.data.meta.latency},groupedFiberRenders:s,timestamp:i.data.startAt,fps:i.data.meta.fps});return}}}),a},_A=1e3,SA=()=>{const{notificationState:t,setNotificationState:a}=tn(),i=me(null),l=me(null),s=me(0),[c]=ex(),d=c.filter(m=>mo(m)==="high").length;return Te(()=>{const m=localStorage.getItem("react-scan-notifications-audio");if(m!=="false"&&m!=="true"){localStorage.setItem("react-scan-notifications-audio","false");return}if(m!=="false"){a(g=>g.audioNotificationsOptions.enabled?g:{...g,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}});return}},[]),Te(()=>{const{audioNotificationsOptions:m}=t;if(!m.enabled||d===0||i.current&&i.current>=d)return;l.current&&clearTimeout(l.current);const g=Date.now()-s.current,b=Math.max(0,_A-g);l.current=setTimeout(()=>{um(m.audioContext),i.current=d,s.current=Date.now(),l.current=null},b)},[d]),Te(()=>{d===0&&(i.current=null)},[d]),Te(()=>()=>{l.current&&clearTimeout(l.current)},[]),null},TA=Jh((t,a)=>{var i;const l=tx(),[s,c]=Ce({detailsExpanded:!1,events:l,filterBy:"latest",moreInfoExpanded:!1,route:"render-visualization",selectedEvent:(i=l.toSorted((d,m)=>d.timestamp-m.timestamp).at(-1))!=null?i:null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return s.events=l,h(Z1.Provider,{value:{notificationState:s,setNotificationState:c,setRoute:({route:d,routeMessage:m})=>{c(p=>{const g={...p,route:d,routeMessage:m};switch(d){case"render-visualization":return Hl(),{...g,selectedFiber:null};case"optimize":return Hl(),{...g,selectedFiber:null};case"other-visualization":return Hl(),{...g,selectedFiber:null};case"render-explanation":return Hl(),g}})}},children:[h(SA,{}),h(kA,{ref:a})]})}),kA=Jh((t,a)=>{var i;const{notificationState:l}=tn();return h("div",{ref:a,className:D(["h-full w-full flex flex-col"]),children:[l.selectedEvent&&h("div",{className:D(["w-full h-[48px] flex flex-col",l.moreInfoExpanded&&"h-[235px]",l.moreInfoExpanded&&l.selectedEvent.kind==="dropped-frames"&&"h-[150px]"]),children:[h(hA,{selectedEvent:l.selectedEvent}),l.moreInfoExpanded&&h(NA,{})]}),h("div",{className:D(["flex ",l.selectedEvent?"h-[calc(100%-48px)]":"h-full",l.moreInfoExpanded&&"h-[calc(100%-200px)]",l.moreInfoExpanded&&((i=l.selectedEvent)==null?void 0:i.kind)==="dropped-frames"&&"h-[calc(100%-150px)]"]),children:[h("div",{className:D(["h-full min-w-[200px]"]),children:h(yA,{})}),h("div",{className:D(["w-[calc(100%-200px)] h-full overflow-y-auto"]),children:h(fA,{})})]})]})}),NA=()=>{const{notificationState:t}=tn();if(!t.selectedEvent)throw new Error("Invariant must have selected event for more info");const a=t.selectedEvent;return h("div",{className:D(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]",a.kind==="dropped-frames"&&"h-[calc(100%-25px)]"]),children:h("div",{className:D(["flex flex-col gap-y-4 h-full"]),children:kn(()=>{switch(a.kind){case"interaction":return h($e,{children:[h("div",{className:D(["flex items-center gap-x-3"]),children:[h("span",{className:"text-[#6F6F78] text-xs font-medium",children:a.type==="click"?"Clicked component location":"Typed in component location"}),h("div",{className:"font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",children:a.componentPath.toReversed().map((i,l)=>h($e,{children:[h("span",{style:{lineHeight:"14px"},className:"text-[10px] whitespace-nowrap",children:i},i),l<a.componentPath.length-1&&h("span",{className:"text-[#6F6F78] mx-0.5",children:"‹"})]}))})]}),h("div",{className:D(["flex items-center gap-x-3"]),children:[h("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),h("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[_t(a.timing).toFixed(0),"ms"]})]}),h("div",{className:D(["flex items-center gap-x-3"]),children:[h("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),h("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-a.timestamp)/1e3).toFixed(0)}s ago`})]})]});case"dropped-frames":return h($e,{children:[h("div",{className:D(["flex items-center gap-x-3"]),children:[h("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),h("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[_t(a.timing).toFixed(0),"ms"]})]}),h("div",{className:D(["flex items-center gap-x-3"]),children:[h("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),h("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-a.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})})})},CA=hm(()=>{var t;const a=tx(),[i,l]=Ce(a);Te(()=>{const x=setTimeout(()=>{l(a)},600);return()=>{clearTimeout(x)}},[a]);const s=re.inspectState,c=s.value.kind==="inspecting",d=s.value.kind==="focused",[m,p]=Ce([]),g=st(()=>{switch(re.inspectState.value.kind){case"inspecting":{Ie.value={view:"none"},re.inspectState.value={kind:"inspect-off"};return}case"focused":{Ie.value={view:"inspector"},re.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"inspect-off":{Ie.value={view:"none"},re.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"uninitialized":return}},[]),b=st(x=>{if(x.preventDefault(),x.stopPropagation(),!De.instrumentation)return;const T=!De.instrumentation.isPaused.value;De.instrumentation.isPaused.value=T;const C=Ua("react-scan-options");Ft("react-scan-options",{...C,enabled:!T})},[]);Jl(()=>{re.inspectState.value.kind==="uninitialized"&&(re.inspectState.value={kind:"inspect-off"})});let w=null,y="#999";return c?(w=h(tt,{name:"icon-inspect"}),y="#8e61e3"):d?(w=h(tt,{name:"icon-focus"}),y="#8e61e3"):(w=h(tt,{name:"icon-inspect"}),y="#999"),Ih(()=>{if(Ie.value.view!=="notifications")return;const x=new Set(a.map(T=>T.id));p([...x.values()])},[a.length,Ie.value.view]),h("div",{className:"flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden",children:[h("div",{className:"h-full flex items-center min-w-fit",children:h("button",{type:"button",id:"react-scan-inspect-element",title:"Inspect element",onClick:g,className:"button flex items-center justify-center h-full w-full pl-3 pr-2.5",style:{color:y},children:w})}),h("div",{className:"h-full flex items-center justify-center",children:h("button",{type:"button",id:"react-scan-notifications",title:"Notifications",onClick:()=>{switch(re.inspectState.value.kind!=="inspect-off"&&(re.inspectState.value={kind:"inspect-off"}),Ie.value.view){case"inspector":{re.inspectState.value={kind:"inspect-off"};const x=new Set(a.map(T=>T.id));p([...x.values()]),Ie.value={view:"notifications"};return}case"notifications":{Ie.value={view:"none"};return}case"none":{const x=new Set(a.map(T=>T.id));p([...x.values()]),Ie.value={view:"notifications"};return}}},className:"button flex items-center justify-center h-full pl-2.5 pr-2.5",style:{color:y},children:h(j4,{events:i.filter(x=>!m.includes(x.id)).map(x=>mo(x)==="high"),size:16,className:D(["text-[#999]",Ie.value.view==="notifications"&&"text-[#8E61E3]"])})})}),h(d4,{checked:!((t=De.instrumentation)!=null&&t.isPaused.value),onChange:b,className:"place-self-center",title:"Outline Re-renders"}),De.options.value.showFPS&&h(h4,{})]})}),EA=Ba(()=>re.inspectState.value.kind==="inspecting"),AA=Ba(()=>D("relative","flex-1","flex flex-col","rounded-t-lg","overflow-hidden","opacity-100","transition-[opacity]",EA.value&&"opacity-0 duration-0 delay-0")),zA=Ba(()=>Ie.value.view==="inspector"),MA=Ba(()=>Ie.value.view==="notifications"),OA=()=>h("div",{className:D("flex flex-1 flex-col","overflow-hidden z-10","rounded-lg","bg-black","opacity-100","transition-[border-radius]","peer-hover/left:rounded-l-none","peer-hover/right:rounded-r-none","peer-hover/top:rounded-t-none","peer-hover/bottom:rounded-b-none"),children:[h("div",{className:AA,children:[h(u4,{}),h("div",{className:D("relative","flex-1 flex","text-white","bg-[#0A0A0A]","transition-opacity delay-150","overflow-hidden","border-b border-[#222]"),children:[h(oy,{isOpen:zA,children:h(u3,{})}),h(oy,{isOpen:MA,children:h(TA,{})})]})]}),h(CA,{})]}),oy=({isOpen:t,children:a})=>h("div",{className:D("flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",t.value&&"opacity-100 delay-150 pointer-events-auto"),children:h("div",{className:"absolute inset-0 flex",children:a})}),Fs=(t,a,i)=>t+(a-t)*i,Bf={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},vi=Rn&&window.devicePixelRatio||1,RA=()=>{const t=me(null),a=me(null),i=me(null),l=me(null),s=me(null),c=me(0),d=me(),m=me(new Map),p=me(!1),g=me(0),b=(_,z,R,X)=>{_.save(),_.strokeStyle="white",_.fillStyle="white",_.lineWidth=1.5;const F=X*.6,N=X*.5,L=z+(X-F)/2,W=R;_.beginPath(),_.arc(L+F/2,W+N/2,F/2,Math.PI,0,!1),_.stroke();const K=X*.8,ee=X*.5,te=z+(X-K)/2,ae=R+N/2;_.fillRect(te,ae,K,ee),_.restore()},w=(_,z,R,X)=>{var F;if(!X)return;const N=24,L=8,K=(F=X?.type&&xt(X.type))!=null?F:"Unknown";_.save(),_.font="12px system-ui, -apple-system, sans-serif";const te=_.measureText(K).width,ae=R==="locked"?14:0,ve=R==="locked"?6:0,le=te+L*2+ae+ve,et=z.left,rt=z.top-N-4;if(_.fillStyle="rgb(37, 37, 38, .75)",_.beginPath(),_.roundRect(et,rt,le,N,3),_.fill(),R==="locked"){const gn=et+L,St=rt+(N-ae)/2+2;b(_,gn,St,ae),l.current={x:gn,y:St,width:ae,height:ae}}else l.current=null;_.fillStyle="white",_.textBaseline="middle";const Vt=et+L+(R==="locked"?ae+ve:0);_.fillText(K,Vt,rt+N/2),_.restore()},y=(_,z,R,X)=>{if(!i.current)return;const F=i.current;z.clearRect(0,0,_.width,_.height),z.strokeStyle="rgba(142, 97, 227, 0.5)",z.fillStyle="rgba(173, 97, 230, 0.10)",R==="locked"?z.setLineDash([]):z.setLineDash([4]),z.lineWidth=1,z.fillRect(F.left,F.top,F.width,F.height),z.strokeRect(F.left,F.top,F.width,F.height),w(z,F,R,X)},x=(_,z,R,X,F,N)=>{var L;const W=De.options.value.animationSpeed,K=(L=Bf.speeds[W])!=null?L:Bf.speeds.off,ee=te=>{if(te-g.current<Bf.frameInterval){c.current=requestAnimationFrame(ee);return}if(g.current=te,!i.current){cancelAnimationFrame(c.current);return}i.current={left:Fs(i.current.left,R.left,K),top:Fs(i.current.top,R.top,K),width:Fs(i.current.width,R.width,K),height:Fs(i.current.height,R.height,K)},y(_,z,X,F),Math.abs(i.current.left-R.left)>.1||Math.abs(i.current.top-R.top)>.1||Math.abs(i.current.width-R.width)>.1||Math.abs(i.current.height-R.height)>.1?c.current=requestAnimationFrame(ee):(i.current=R,y(_,z,X,F),cancelAnimationFrame(c.current),z.restore())};cancelAnimationFrame(c.current),clearTimeout(d.current),c.current=requestAnimationFrame(ee),d.current=setTimeout(()=>{cancelAnimationFrame(c.current),i.current=R,y(_,z,X,F),z.restore()},1e3)},T=(_,z,R,X,F)=>{if(z.save(),!i.current){i.current=R,y(_,z,X,F),z.restore();return}x(_,z,R,X,F)},C=async(_,z,R,X)=>{if(!_||!z||!R)return;const{parentCompositeFiber:F}=pr(_),N=await d3(_);!F||!N||T(z,R,N,X,F)},M=()=>{for(const _ of m.current.values())_?.()},k=_=>{const z=_.getContext("2d");z&&z.clearRect(0,0,_.width,_.height),i.current=null,l.current=null,s.current=null,_.classList.remove("fade-in"),p.current=!1},E=_=>{if(!t.current||p.current)return;const z=X=>{!t.current||X.propertyName!=="opacity"||!p.current||(t.current.removeEventListener("transitionend",z),k(t.current),_?.())},R=m.current.get("fade-out");R&&(R(),m.current.delete("fade-out")),t.current.addEventListener("transitionend",z),m.current.set("fade-out",()=>{var X;(X=t.current)==null||X.removeEventListener("transitionend",z)}),p.current=!0,t.current.classList.remove("fade-in"),requestAnimationFrame(()=>{var X;(X=t.current)==null||X.classList.add("fade-out")})},H=()=>{t.current&&(p.current=!1,t.current.classList.remove("fade-out"),requestAnimationFrame(()=>{var _;(_=t.current)==null||_.classList.add("fade-in")}))},Y=_=>{_!==s.current&&(s.current=_,Nh.has(_.tagName)?E():H(),re.inspectState.value={kind:"inspecting",hoveredDomElement:_})},Q=()=>{!i.current||!t.current||p.current||E()},J=T1(_=>{var z,R;if(re.inspectState.peek().kind!=="inspecting"||!a.current)return;a.current.style.pointerEvents="none";const F=document.elementFromPoint((z=_?.clientX)!=null?z:0,(R=_?.clientY)!=null?R:0);if(a.current.style.removeProperty("pointer-events"),clearTimeout(d.current),F&&F!==t.current){const{parentCompositeFiber:N}=pr(F);if(N){const L=yc(N);if(L){Y(L);return}}}Q()},32),P=(_,z)=>{const R=l.current;if(!R)return!1;const X=z.getBoundingClientRect(),F=z.width/X.width,N=z.height/X.height,L=(_.clientX-X.left)*F,W=(_.clientY-X.top)*N,K=L/vi,ee=W/vi;return K>=R.x&&K<=R.x+R.width&&ee>=R.y&&ee<=R.y+R.height},Z=_=>{_.kind==="focused"&&(re.inspectState.value={kind:"inspecting",hoveredDomElement:_.focusedDomElement})},ie=_=>{var z,R;const X=["react-scan-inspect-element","react-scan-power"];if(_.target instanceof HTMLElement&&X.includes(_.target.id))return;const F=(z=s.current)==null?void 0:z.tagName;if(F&&Nh.has(F))return;_.preventDefault(),_.stopPropagation();const N=(R=s.current)!=null?R:document.elementFromPoint(_.clientX,_.clientY);if(!N)return;const L=_.composedPath().at(0);if(L instanceof HTMLElement&&X.includes(L.id)){const ee=new MouseEvent(_.type,_);ee.__reactScanSyntheticEvent=!0,L.dispatchEvent(ee);return}const{parentCompositeFiber:W}=pr(N);if(!W)return;const K=yc(W);if(!K){s.current=null,re.inspectState.value={kind:"inspect-off"};return}re.inspectState.value={kind:"focused",focusedDomElement:K,fiber:W}},ne=_=>{if(_.__reactScanSyntheticEvent)return;const z=re.inspectState.peek(),R=t.current;if(!(!R||!a.current)){if(P(_,R)){_.preventDefault(),_.stopPropagation(),Z(z);return}z.kind==="inspecting"&&ie(_)}},pe=_=>{var z;if(_.key!=="Escape")return;const R=re.inspectState.peek();if(t.current&&((z=document.activeElement)==null?void 0:z.id)!=="react-scan-root"&&(Ie.value={view:"none"},R.kind==="focused"||R.kind==="inspecting"))switch(_.preventDefault(),_.stopPropagation(),R.kind){case"focused":{H(),i.current=null,s.current=R.focusedDomElement,re.inspectState.value={kind:"inspecting",hoveredDomElement:R.focusedDomElement};break}case"inspecting":{E(()=>{Hc.value=!1,re.inspectState.value={kind:"inspect-off"}});break}}},ye=(_,z,R)=>{var X;(X=m.current.get(_.kind))==null||X(),a.current&&_.kind!=="inspecting"&&(a.current.style.pointerEvents="none"),c.current&&cancelAnimationFrame(c.current);let F;switch(_.kind){case"inspect-off":E();return;case"inspecting":C(_.hoveredDomElement,z,R,"inspecting");break;case"focused":if(!_.focusedDomElement)return;s.current!==_.focusedDomElement&&(s.current=_.focusedDomElement),Ie.value={view:"inspector"},C(_.focusedDomElement,z,R,"locked"),F=re.lastReportTime.subscribe(()=>{if(c.current&&i.current){const{parentCompositeFiber:N}=pr(_.focusedDomElement);N&&C(_.focusedDomElement,z,R,"locked")}}),F&&m.current.set(_.kind,F);break}},we=(_,z)=>{const R=_.getBoundingClientRect();_.width=R.width*vi,_.height=R.height*vi,z.scale(vi,vi),z.save()},ze=()=>{const _=re.inspectState.peek(),z=t.current;if(!z)return;const R=z?.getContext("2d");R&&(cancelAnimationFrame(c.current),clearTimeout(d.current),we(z,R),i.current=null,_.kind==="focused"&&_.focusedDomElement?C(_.focusedDomElement,z,R,"locked"):_.kind==="inspecting"&&_.hoveredDomElement&&C(_.hoveredDomElement,z,R,"inspecting"))},Me=_=>{const z=re.inspectState.peek(),R=t.current;R&&(z.kind==="inspecting"||P(_,R))&&(_.preventDefault(),_.stopPropagation(),_.stopImmediatePropagation())};return Te(()=>{const _=t.current;if(!_)return;const z=_?.getContext("2d");if(!z)return;we(_,z);const R=re.inspectState.subscribe(X=>{ye(X,_,z)});return window.addEventListener("scroll",ze,{passive:!0}),window.addEventListener("resize",ze,{passive:!0}),document.addEventListener("pointermove",J,{passive:!0,capture:!0}),document.addEventListener("pointerdown",Me,{capture:!0}),document.addEventListener("click",ne,{capture:!0}),document.addEventListener("keydown",pe,{capture:!0}),()=>{M(),R(),window.removeEventListener("scroll",ze),window.removeEventListener("resize",ze),document.removeEventListener("pointermove",J,{capture:!0}),document.removeEventListener("click",ne,{capture:!0}),document.removeEventListener("pointerdown",Me,{capture:!0}),document.removeEventListener("keydown",pe,{capture:!0}),c.current&&cancelAnimationFrame(c.current),clearTimeout(d.current)}},[]),h($e,{children:[h("div",{ref:a,className:D("fixed top-0 left-0 w-screen h-screen","z-[214748365]"),style:{pointerEvents:"none"}}),h("canvas",{ref:t,dir:"ltr",className:D("react-scan-inspector-overlay","fixed top-0 left-0 w-screen h-screen","pointer-events-none","z-[214748367]")})]})},DA=class{constructor(t,a,i){en(this,"width",t),en(this,"height",a),en(this,"safeArea",i),en(this,"maxWidth"),en(this,"maxHeight"),this.maxWidth=t-i.left-i.right,this.maxHeight=a-i.top-i.bottom}rightEdge(t){return this.width-t-this.safeArea.right}bottomEdge(t){return this.height-t-this.safeArea.bottom}isFullWidth(t){return t>=this.maxWidth}isFullHeight(t){return t>=this.maxHeight}},ur,$A=(t,a)=>t.top===a.top&&t.right===a.right&&t.bottom===a.bottom&&t.left===a.left,lo=()=>{const t=window.innerWidth,a=window.innerHeight,i=La();return ur&&ur.width===t&&ur.height===a&&$A(ur.safeArea,i)||(ur=new DA(t,a,i)),ur},LA=(t,a,i,l,s)=>{if(i){if(t==="top-left")return"bottom-right";if(t==="top-right")return"bottom-left";if(t==="bottom-left")return"top-right";if(t==="bottom-right")return"top-left";const[c,d]=a.split("-");if(t==="left")return`${c}-right`;if(t==="right")return`${c}-left`;if(t==="top")return`bottom-${d}`;if(t==="bottom")return`top-${d}`}if(l){if(t==="left")return`${a.split("-")[0]}-right`;if(t==="right")return`${a.split("-")[0]}-left`}if(s){if(t==="top")return`bottom-${a.split("-")[1]}`;if(t==="bottom")return`top-${a.split("-")[1]}`}return a},Il=(t,a,i)=>{const l=getComputedStyle(document.body).direction==="rtl",s=window.innerWidth,c=window.innerHeight,d=La(),m=a===mt.width,p=m?a:Math.min(a,s-d.left-d.right),g=m?i:Math.min(i,c-d.top-d.bottom);let b,w,y=d.left,x=s-p-d.right,T=d.top,C=c-g-d.bottom;const M=-d.right,k=-(s-p-d.left);switch(t){case"top-right":b=l?M:x,w=T;break;case"bottom-right":b=l?M:x,w=C;break;case"bottom-left":b=l?k:y,w=C;break;case"top-left":b=l?k:y,w=T;break;default:b=y,w=T;break}return m&&(l?b=Math.min(M,Math.max(b,k)):b=Math.max(y,Math.min(b,x)),w=Math.max(T,Math.min(w,C))),{x:b,y:w}},jA=(t,a)=>{const[i,l]=a.split("-");return t!==i&&t!==l},UA=(t,a,i,l)=>i&&l?!0:!i&&!l?jA(t,a):i?t!==a.split("-")[0]:l?t!==a.split("-")[1]:!1,Vs=(t,a,i)=>{const l=i?mt.width:mt.initialHeight,s=i?lo().maxWidth:lo().maxHeight,c=t+a;return Math.min(Math.max(l,c),s)},HA=(t,a,i,l,s)=>{const c=getComputedStyle(document.body).direction==="rtl",d=La(),m=window.innerWidth-d.left-d.right,p=window.innerHeight-d.top-d.bottom;let g=a.width,b=a.height,w=i.x,y=i.y;if(c&&t.includes("right")){const H=-i.x+a.width-d.right,Y=Math.min(a.width+l,H);g=Math.min(m,Math.max(mt.width,Y)),w=i.x+(g-a.width)}if(c&&t.includes("left")){const H=window.innerWidth-i.x-d.left,Y=Math.min(a.width-l,H);g=Math.min(m,Math.max(mt.width,Y))}if(!c&&t.includes("right")){const H=window.innerWidth-i.x-d.right,Y=Math.min(a.width+l,H);g=Math.min(m,Math.max(mt.width,Y))}if(!c&&t.includes("left")){const H=i.x+a.width-d.left,Y=Math.min(a.width-l,H);g=Math.min(m,Math.max(mt.width,Y)),w=i.x-(g-a.width)}if(t.includes("bottom")){const H=window.innerHeight-i.y-d.bottom,Y=Math.min(a.height+s,H);b=Math.min(p,Math.max(mt.initialHeight,Y))}if(t.includes("top")){const H=i.y+a.height-d.top,Y=Math.min(a.height-s,H);b=Math.min(p,Math.max(mt.initialHeight,Y)),y=i.y-(b-a.height)}let x=d.left,T=window.innerWidth-d.right-g,C=d.top,M=window.innerHeight-d.bottom-b;const k=-d.right,E=-(window.innerWidth-g-d.left);return c?w=Math.min(k,Math.max(w,E)):w=Math.max(x,Math.min(w,T)),y=Math.max(C,Math.min(y,M)),{newSize:{width:g,height:b},newPosition:{x:w,y}}},BA=t=>{const a=lo(),i={"top-left":Math.hypot(t.x,t.y),"top-right":Math.hypot(a.maxWidth-t.x,t.y),"bottom-left":Math.hypot(t.x,a.maxHeight-t.y),"bottom-right":Math.hypot(a.maxWidth-t.x,a.maxHeight-t.y)};let l="top-left";for(const s in i)i[s]<i[l]&&(l=s);return l},FA=(t,a,i,l,s=100)=>{const c=i!==void 0?t-i:0,d=l!==void 0?a-l:0,m=window.innerWidth/2,p=window.innerHeight/2,g=c>s,b=c<-s,w=d>s,y=d<-s;if(g||b){const x=a>p;return g?x?"bottom-right":"top-right":x?"bottom-left":"top-left"}if(w||y){const x=t>m;return w?x?"bottom-right":"bottom-left":x?"top-right":"top-left"}return t>m?a>p?"bottom-right":"top-right":a>p?"bottom-left":"top-left"},qs=({position:t})=>{const a=me(null),i=me(null),l=me(null),s=me(null);Te(()=>{const m=a.current;if(!m)return;const p=()=>{m.classList.remove("pointer-events-none");const w=re.inspectState.value.kind==="focused",y=Ie.value.view!=="none";(w||y)&&UA(t,se.value.corner,se.value.dimensions.isFullWidth,se.value.dimensions.isFullHeight)?m.classList.remove("hidden","pointer-events-none","opacity-0"):m.classList.add("hidden","pointer-events-none","opacity-0")},g=se.subscribe(w=>{i.current!==null&&l.current!==null&&s.current!==null&&w.dimensions.width===i.current&&w.dimensions.height===l.current&&w.corner===s.current||(p(),i.current=w.dimensions.width,l.current=w.dimensions.height,s.current=w.corner)}),b=re.inspectState.subscribe(()=>{p()});return()=>{g(),b(),i.current=null,l.current=null,s.current=null}},[]);const c=st(m=>{m.preventDefault(),m.stopPropagation();const p=_h.value;if(!p)return;const g=p.style,{dimensions:b}=se.value,w=m.clientX,y=m.clientY,x=b.width,T=b.height,C=b.position;se.value={...se.value,dimensions:{...b,isFullWidth:!1,isFullHeight:!1,width:x,height:T,position:C}};let M=null;const k=H=>{M||(g.transition="none",M=requestAnimationFrame(()=>{const{newSize:Y,newPosition:Q}=HA(t,{width:x,height:T},C,H.clientX-w,H.clientY-y);g.transform=`translate3d(${Q.x}px, ${Q.y}px, 0)`,g.width=`${Y.width}px`,g.height=`${Y.height}px`;const J=Math.floor(Y.width-Tn/2),P=se.value.componentsTree.width,Z=Math.min(J,Math.max(Tn,P));se.value={...se.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:Y.width,height:Y.height,position:Q},componentsTree:{...se.value.componentsTree,width:Z}},M=null}))},E=()=>{M&&(cancelAnimationFrame(M),M=null),document.removeEventListener("pointermove",k),document.removeEventListener("pointerup",E);const{dimensions:H,corner:Y}=se.value,Q=lo(),J=Q.isFullWidth(H.width),P=Q.isFullHeight(H.height),Z=J&&P;let ie=Y;(Z||J||P)&&(ie=BA(H.position));const ne=Il(ie,H.width,H.height),pe=()=>{p.removeEventListener("transitionend",pe)};p.addEventListener("transitionend",pe),g.transform=`translate3d(${ne.x}px, ${ne.y}px, 0)`,se.value={...se.value,corner:ie,dimensions:{isFullWidth:J,isFullHeight:P,width:H.width,height:H.height,position:ne},lastDimensions:{isFullWidth:J,isFullHeight:P,width:H.width,height:H.height,position:ne}},Ft(ra,{corner:ie,dimensions:se.value.dimensions,lastDimensions:se.value.lastDimensions,componentsTree:se.value.componentsTree})};document.addEventListener("pointermove",k,{passive:!0}),document.addEventListener("pointerup",E)},[]),d=st(m=>{m.preventDefault(),m.stopPropagation();const p=_h.value;if(!p)return;const g=p.style,{dimensions:b,corner:w}=se.value,y=lo(),x=y.isFullWidth(b.width),T=y.isFullHeight(b.height),C=x&&T,M=(x||T)&&!C;let k=b.width,E=b.height;const H=LA(t,w,C,x,T);t==="left"||t==="right"?(k=x?b.width:y.maxWidth,M&&(k=x?mt.width:y.maxWidth)):(E=T?b.height:y.maxHeight,M&&(E=T?mt.initialHeight:y.maxHeight)),C&&(t==="left"||t==="right"?k=mt.width:E=mt.initialHeight);const Y=Il(H,k,E),Q={isFullWidth:y.isFullWidth(k),isFullHeight:y.isFullHeight(E),width:k,height:E,position:Y},J=Math.floor(k-mt.width/2),P=se.value.componentsTree.width,Z=Math.floor(k*.3),ie=x?Tn:(t==="left"||t==="right")&&!x?Math.min(J,Math.max(Tn,Z)):Math.min(J,Math.max(Tn,P));requestAnimationFrame(()=>{se.value={corner:H,dimensions:Q,lastDimensions:b,componentsTree:{...se.value.componentsTree,width:ie}},g.transition="all 0.25s cubic-bezier(0, 0, 0.2, 1)",g.width=`${k}px`,g.height=`${E}px`,g.transform=`translate3d(${Y.x}px, ${Y.y}px, 0)`}),Ft(ra,{corner:H,dimensions:Q,lastDimensions:b,componentsTree:{...se.value.componentsTree,width:ie}})},[]);return h("div",{ref:a,onPointerDown:c,onDblClick:d,className:D("absolute z-50","flex items-center justify-center","group","transition-colors select-none","peer",{"resize-left peer/left":t==="left","resize-right peer/right z-10":t==="right","resize-top peer/top":t==="top","resize-bottom peer/bottom":t==="bottom"}),children:h("span",{className:"resize-line-wrapper",children:h("span",{className:"resize-line",children:h(tt,{name:"icon-ellipsis",size:18,className:D("text-neutral-400",(t==="left"||t==="right")&&"rotate-90")})})})})},sy={horizontal:{width:20,height:48},vertical:{width:48,height:20}},VA=()=>{const t=me(null),a=me(!1),i=me(0),l=me(0),s=me(!1),c=st((y=!0)=>{if(!t.current)return;const{corner:x}=se.value;let T,C;if(Pt.value){const ne=Pt.value.orientation||"horizontal",pe=sy[ne];T=pe.width,C=pe.height}else if(a.current){const ne=se.value.lastDimensions;T=Vs(ne.width,0,!0),C=Vs(ne.height,0,!1),s.current&&(s.current=!1)}else T=i.current,C=l.current;let k=Il(x,T,C);if(Pt.value){const{corner:ne,orientation:pe="horizontal"}=Pt.value,ye=sy[pe],we=La();switch(ne){case"top-left":k=pe==="horizontal"?{x:-1,y:we.top}:{x:we.left,y:-1};break;case"bottom-left":k=pe==="horizontal"?{x:-1,y:window.innerHeight-ye.height-we.bottom}:{x:we.left,y:window.innerHeight-ye.height+1};break;case"top-right":k=pe==="horizontal"?{x:window.innerWidth-ye.width+1,y:we.top}:{x:window.innerWidth-ye.width-we.right,y:-1};break;default:k=pe==="horizontal"?{x:window.innerWidth-ye.width+1,y:window.innerHeight-ye.height-we.bottom}:{x:window.innerWidth-ye.width-we.right,y:window.innerHeight-ye.height+1};break}}const E=T<mt.width||C<mt.initialHeight,H=y&&!E,Y=t.current,Q=Y.style;let J=null;const P=()=>{Sf(),Y.removeEventListener("transitionend",P),J&&(cancelAnimationFrame(J),J=null)};Y.addEventListener("transitionend",P),Q.transition="all 0.25s cubic-bezier(0, 0, 0.2, 1)",J=requestAnimationFrame(()=>{Q.width=`${T}px`,Q.height=`${C}px`,Q.transform=`translate3d(${k.x}px, ${k.y}px, 0)`,J=null});const Z=La(),ie={isFullWidth:T>=window.innerWidth-Z.left-Z.right,isFullHeight:C>=window.innerHeight-Z.top-Z.bottom,width:T,height:C,position:k};se.value={corner:x,dimensions:ie,lastDimensions:a?se.value.lastDimensions:T>i.current?ie:se.value.lastDimensions,componentsTree:se.value.componentsTree},H&&Ft(ra,{corner:se.value.corner,dimensions:se.value.dimensions,lastDimensions:se.value.lastDimensions,componentsTree:se.value.componentsTree}),Sf()},[]),d=st(y=>{if(y.target.closest(BC)||(y.preventDefault(),!t.current))return;const T=t.current,C=T.style,{dimensions:M}=se.value,k=y.clientX,E=y.clientY,H=M.position.x,Y=M.position.y;let Q=H,J=Y,P=null,Z=!1,ie=k,ne=E;const pe=we=>{P||(Z=!0,ie=we.clientX,ne=we.clientY,P=requestAnimationFrame(()=>{const ze=ie-k,Me=ne-E;Q=Number(H)+ze,J=Number(Y)+Me,C.transition="none",C.transform=`translate3d(${Q}px, ${J}px, 0)`;const _=Q+M.width,z=J+M.height,R=Math.max(0,-Q),X=Math.max(0,_-window.innerWidth),F=Math.max(0,-J),N=Math.max(0,z-window.innerHeight),L=Math.min(M.width,R+X),W=Math.min(M.height,F+N),K=L*M.height+W*M.width-L*W,ee=M.width*M.height;let te=K>ee*.35;if(!te&&De.options.value.showFPS){const ae=Q+M.width,ve=ae-100;te=ae<=0||ve>=window.innerWidth||J+M.height<=0||J>=window.innerHeight}if(te){const ae=Q+M.width/2,ve=J+M.height/2,le=window.innerWidth/2,et=window.innerHeight/2;let rt;ae<le?rt=ve<et?"top-left":"bottom-left":rt=ve<et?"top-right":"bottom-right";let Vt;const gn=Math.max(R,X),St=Math.max(F,N);Vt=gn>St?"horizontal":"vertical",se.value={...se.value,corner:rt,lastDimensions:{...M,position:Il(rt,M.width,M.height)}};const Cr={corner:rt,orientation:Vt};Pt.value=Cr,Ft(Ks,Cr),Ft(ra,se.value),c(!1),document.removeEventListener("pointermove",pe),document.removeEventListener("pointerup",ye),P&&(cancelAnimationFrame(P),P=null)}P=null}))},ye=()=>{if(!T)return;P&&(cancelAnimationFrame(P),P=null),document.removeEventListener("pointermove",pe),document.removeEventListener("pointerup",ye);const we=Math.abs(ie-k),ze=Math.abs(ne-E),Me=Math.sqrt(we*we+ze*ze);if(!Z||Me<60)return;const _=FA(ie,ne,k,E,re.inspectState.value.kind==="focused"?80:40);if(_===se.value.corner){C.transition="transform 0.25s cubic-bezier(0, 0, 0.2, 1)";const X=se.value.dimensions.position;requestAnimationFrame(()=>{C.transform=`translate3d(${X.x}px, ${X.y}px, 0)`});return}const z=Il(_,M.width,M.height);if(Q===H&&J===Y)return;const R=()=>{C.transition="none",Sf(),T.removeEventListener("transitionend",R),P&&(cancelAnimationFrame(P),P=null)};T.addEventListener("transitionend",R),C.transition="transform 0.25s cubic-bezier(0, 0, 0.2, 1)",requestAnimationFrame(()=>{C.transform=`translate3d(${z.x}px, ${z.y}px, 0)`}),se.value={corner:_,dimensions:{isFullWidth:M.isFullWidth,isFullHeight:M.isFullHeight,width:M.width,height:M.height,position:z},lastDimensions:se.value.lastDimensions,componentsTree:se.value.componentsTree},Ft(ra,{corner:_,dimensions:se.value.dimensions,lastDimensions:se.value.lastDimensions,componentsTree:se.value.componentsTree})};document.addEventListener("pointermove",pe),document.addEventListener("pointerup",ye)},[]),m=st(y=>{if(y.preventDefault(),!t.current||!Pt.value)return;const{corner:x,orientation:T="horizontal"}=Pt.value,C=y.clientX,M=y.clientY;let k=null,E=!1;const H=50,Y=J=>{if(E||k)return;const P=J.clientX-C,Z=J.clientY-M;let ie=!1;if(T==="horizontal"?(x.endsWith("left")&&P>H||x.endsWith("right")&&P<-H)&&(ie=!0):(x.startsWith("top")&&Z>H||x.startsWith("bottom")&&Z<-H)&&(ie=!0),ie){if(E=!0,Pt.value=null,Ft(Ks,null),i.current===0&&t.current)requestAnimationFrame(()=>{if(t.current){t.current.style.width="min-content";const ne=t.current.offsetWidth;i.current=ne||300;const pe=se.value.lastDimensions,ye=Vs(pe.width,0,!0),we=Vs(pe.height,0,!1);let ze=J.clientX-ye/2,Me=J.clientY-we/2;const _=La();ze=Math.max(_.left,Math.min(ze,window.innerWidth-ye-_.right)),Me=Math.max(_.top,Math.min(Me,window.innerHeight-we-_.bottom)),se.value={...se.value,dimensions:{...se.value.dimensions,position:{x:ze,y:Me}}},c(!0);const z=Ua(hi);Ie.value=z||{view:"none"},setTimeout(()=>{if(t.current){const R=new PointerEvent("pointerdown",{clientX:J.clientX,clientY:J.clientY,pointerId:J.pointerId,bubbles:!0});t.current.dispatchEvent(R)}},100)}});else{c(!0);const ne=Ua(hi);Ie.value=ne||{view:"none"}}document.removeEventListener("pointermove",Y),document.removeEventListener("pointerup",Q)}},Q=()=>{document.removeEventListener("pointermove",Y),document.removeEventListener("pointerup",Q)};document.addEventListener("pointermove",Y),document.addEventListener("pointerup",Q)},[]);Te(()=>{if(!t.current)return;Ab(hi),Pt.value?(l.current=36,i.current=0):(t.current.style.width="min-content",l.current=36,i.current=t.current.offsetWidth);const y=La();t.current.style.maxWidth=`calc(100vw - ${y.left+y.right}px)`,t.current.style.maxHeight=`calc(100vh - ${y.top+y.bottom}px)`,c(),re.inspectState.value.kind!=="focused"&&!Pt.value&&!s.current&&(se.value={...se.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:i.current,height:l.current,position:se.value.dimensions.position}}),_h.value=t.current;const x=se.subscribe(k=>{if(!t.current)return;const{x:E,y:H}=k.dimensions.position,{width:Y,height:Q}=k.dimensions,J=t.current;requestAnimationFrame(()=>{J.style.transform=`translate3d(${E}px, ${H}px, 0)`,J.style.width=`${Y}px`,J.style.height=`${Q}px`})}),T=Ie.subscribe(k=>{a.current=k.view!=="none",c(),Pt.value||(k.view!=="none"?Ft(hi,k):Ab(hi))}),C=re.inspectState.subscribe(k=>{a.current=k.kind==="focused",c()}),M=()=>{c(!0)};return window.addEventListener("resize",M,{passive:!0}),()=>{window.removeEventListener("resize",M),T(),C(),x(),Ft(ra,{...N1(),corner:se.value.corner})}},[]);const[p,g]=Ce(!1);Te(()=>{g(!0)},[]);const b=Pt.value;let w="";if(b){const{orientation:y="horizontal",corner:x}=b;y==="horizontal"?w=x?.endsWith("right")?"rotate-180":"":w=x?.startsWith("bottom")?"-rotate-90":"rotate-90"}return h($e,{children:[h(RA,{}),h(Tm.Provider,{value:t.current,children:h("div",{id:"react-scan-toolbar",dir:"ltr",ref:t,onPointerDown:b?m:d,className:D("fixed inset-0",b?(()=>{const{orientation:y="horizontal",corner:x}=b;return y==="horizontal"?x?.endsWith("right")?"rounded-tl-lg rounded-bl-lg shadow-lg":"rounded-tr-lg rounded-br-lg shadow-lg":x?.startsWith("bottom")?"rounded-tl-lg rounded-tr-lg shadow-lg":"rounded-bl-lg rounded-br-lg shadow-lg"})():"rounded-lg shadow-lg","flex flex-col","font-mono text-[13px]","user-select-none","opacity-0",b?"cursor-pointer":"cursor-move","z-[124124124124]","animate-fade-in animation-duration-300 animation-delay-300","will-change-transform","[touch-action:none]"),style:{WebkitAppRegion:"no-drag"},children:b?h("button",{type:"button",onClick:()=>{Pt.value=null,Ft(Ks,null),i.current===0&&t.current&&requestAnimationFrame(()=>{if(t.current){t.current.style.width="min-content";const x=t.current.offsetWidth;i.current=x||300,c(!0)}});const y=Ua(hi);Ie.value=y||{view:"none"}},className:"flex items-center justify-center w-full h-full text-white",title:"Expand toolbar",children:h(tt,{name:"icon-chevron-right",size:16,className:D("transition-transform",w)})}):h($e,{children:[h(qs,{position:"top"}),h(qs,{position:"bottom"}),h(qs,{position:"left"}),h(qs,{position:"right"}),h(OA,{})]})})})]})},Tm=Yy(null),qA=()=>h("svg",{xmlns:"http://www.w3.org/2000/svg",style:"display: none;",children:[h("title",{children:"React Scan Icons"}),h("symbol",{id:"icon-inspect",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),h("path",{d:"M5 3a2 2 0 0 0-2 2"}),h("path",{d:"M19 3a2 2 0 0 1 2 2"}),h("path",{d:"M5 21a2 2 0 0 1-2-2"}),h("path",{d:"M9 3h1"}),h("path",{d:"M9 21h2"}),h("path",{d:"M14 3h1"}),h("path",{d:"M3 9v1"}),h("path",{d:"M21 9v2"}),h("path",{d:"M3 14v1"})]}),h("symbol",{id:"icon-focus",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),h("path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"})]}),h("symbol",{id:"icon-next",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:h("path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"})}),h("symbol",{id:"icon-previous",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:h("path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"})}),h("symbol",{id:"icon-close",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),h("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),h("symbol",{id:"icon-replay",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),h("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),h("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),h("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),h("circle",{cx:"12",cy:"12",r:"1"}),h("path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"})]}),h("symbol",{id:"icon-ellipsis",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("circle",{cx:"12",cy:"12",r:"1"}),h("circle",{cx:"19",cy:"12",r:"1"}),h("circle",{cx:"5",cy:"12",r:"1"})]}),h("symbol",{id:"icon-copy",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),h("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]}),h("symbol",{id:"icon-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:h("path",{d:"M20 6 9 17l-5-5"})}),h("symbol",{id:"icon-chevron-right",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:h("path",{d:"m9 18 6-6-6-6"})}),h("symbol",{id:"icon-settings",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),h("circle",{cx:"12",cy:"12",r:"3"})]}),h("symbol",{id:"icon-flame",viewBox:"0 0 24 24",children:h("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),h("symbol",{id:"icon-function",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),h("path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}),h("path",{d:"M9 11.2h5.7"})]}),h("symbol",{id:"icon-triangle-alert",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),h("path",{d:"M12 9v4"}),h("path",{d:"M12 17h.01"})]}),h("symbol",{id:"icon-gallery-horizontal-end",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("path",{d:"M2 7v10"}),h("path",{d:"M6 5v14"}),h("rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"})]}),h("symbol",{id:"icon-search",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("circle",{cx:"11",cy:"11",r:"8"}),h("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),h("symbol",{id:"icon-lock",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),h("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),h("symbol",{id:"icon-lock-open",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),h("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"})]}),h("symbol",{id:"icon-sanil",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}),h("circle",{cx:"10",cy:"13",r:"8"}),h("path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}),h("path",{d:"M18 3 19.1 5.2"})]})]}),YA=class extends pn{constructor(){super(...arguments),en(this,"state",{hasError:!1,error:null}),en(this,"handleReset",()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(t){return{hasError:!0,error:t}}render(){var t;return this.state.hasError?h("div",{className:"fixed bottom-4 right-4 z-[124124124124]",children:h("div",{className:"p-3 bg-black rounded-lg shadow-lg w-80",children:[h("div",{className:"flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",children:[h(tt,{name:"icon-flame",className:"text-red-500",size:14}),"React Scan ran into a problem"]}),h("div",{className:"p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",children:((t=this.state.error)==null?void 0:t.message)||JSON.stringify(this.state.error)}),h("button",{type:"button",onClick:this.handleReset,className:"px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",children:"Restart"})]})}):this.props.children}},GA=t=>{const a=document.createElement("div");a.id="react-scan-toolbar-root",window.__REACT_SCAN_TOOLBAR_CONTAINER__=a,t.appendChild(a),Fl(h(YA,{children:h($e,{children:[h(qA,{}),h(VA,{})]})}),a);const i=a.remove.bind(a);return a.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,a.hasChildNodes()&&(Fl(null,a),Fl(null,a)),i()},a},cy=!1,XA=()=>{if(cy||(cy=!0,typeof window>"u")||window.__REACT_GRAB__||!navigator.onLine)return;const t={referrerPolicy:"origin",keepalive:!0,priority:"low",cache:"no-store"};try{fetch(`https://www.react-grab.com/api/version?source=react-scan&v=${xf}&t=${Date.now()}`,t).then(a=>a.ok?a.text():null).then(a=>{if(!a)return;const i=a.trim();/^\d+\.\d+\.\d+/.test(i)&&i!==xf&&console.warn(`[React Scan] react-grab v${xf} is outdated (latest: v${i}). Update react-scan to pick up the newer react-grab.`)}).catch(()=>null)}catch{}},IA=["top","right","bottom","left"],QA=t=>{if(fr(t))return{ok:!0,value:t};if(!k1(t))return{ok:!1,error:`- safeArea must be a non-negative number or { top?, right?, bottom?, left? }. Got "${JSON.stringify(t)}"`};const a={};for(const i of IA){const l=t[i];if(l!==void 0){if(!fr(l))return{ok:!1,error:`- safeArea.${i} must be a non-negative number. Got "${JSON.stringify(l)}"`};a[i]=l}}return{ok:!0,value:a}},ZA={version:"0.5.7"},dr=null,Ol=null,WA=()=>{if(dr&&Ol)return{rootContainer:dr,shadowRoot:Ol};dr=document.createElement("div"),dr.id="react-scan-root",Ol=dr.attachShadow({mode:"open"});const t=document.createElement("style");return t.textContent=t4,Ol.appendChild(t),document.documentElement.appendChild(dr),{rootContainer:dr,shadowRoot:Ol}},re={wasDetailsOpen:bt(!0),isInIframe:bt(Rn&&window.self!==window.top),inspectState:bt({kind:"uninitialized"}),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:bt(0),interactionListeningForRenders:null,changesListeners:new Map},De={instrumentation:null,componentAllowList:null,options:bt({enabled:!0,log:!1,showToolbar:!0,animationSpeed:"fast",dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,Store:re,version:ZA.version};Rn&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=De.version);var KA=t=>{const{onCommitStart:a,onRender:i,onCommitFinish:l,...s}=t;return s},nx=t=>{const a=[],i={};for(const l in t){const s=t[l];switch(l){case"enabled":case"log":case"showToolbar":case"showNotificationCount":case"dangerouslyForceRunInProduction":case"showFPS":case"allowInIframe":case"useOffscreenCanvasWorker":typeof s!="boolean"?a.push(`- ${l} must be a boolean. Got "${s}"`):i[l]=s;break;case"animationSpeed":["slow","fast","off"].includes(s)?i[l]=s:a.push(`- Invalid animation speed "${s}". Using default "fast"`);break;case"safeArea":{const c=QA(s);c.ok?i.safeArea=c.value:a.push(c.error);break}case"onCommitStart":typeof s!="function"?a.push(`- ${l} must be a function. Got "${s}"`):i.onCommitStart=s;break;case"onCommitFinish":typeof s!="function"?a.push(`- ${l} must be a function. Got "${s}"`):i.onCommitFinish=s;break;case"onRender":typeof s!="function"?a.push(`- ${l} must be a function. Got "${s}"`):i.onRender=s;break;default:a.push(`- Unknown option "${l}"`)}}return a.length>0&&console.warn(`[React Scan] Invalid options:
${a.join(`
`)}`),i},JA=t=>{var a;try{const i=nx(t);if(Object.keys(i).length===0)return;const l="showToolbar"in i&&i.showToolbar!==void 0,s={...De.options.value,...i},{instrumentation:c}=De;c&&"enabled"in i&&(c.isPaused.value=i.enabled===!1),De.options.value=s;try{const d=(a=Ua("react-scan-options"))==null?void 0:a.enabled;typeof d=="boolean"&&(s.enabled=d)}catch(d){De.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",d)}return Ft("react-scan-options",KA(s)),l&&ax(!!s.showToolbar),s}catch(i){De.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",i)}},PA=()=>De.options,uy=null,Ys,Bc=()=>{if(uy===!1)return!1;Ys??(Ys=jh());const t=Array.from(Ys.renderers.values());if(t.length===0)return null;for(const a of t)if(q2(a)!=="production")return uy=!1,!1;return!0},ez=()=>{try{if(!Rn||!De.runInAllEnvironments&&Bc()&&!De.options.value.dangerouslyForceRunInProduction)return;XA();const t=Ua("react-scan-options");if(t){const i=nx(t);Object.keys(i).length>0&&(De.options.value={...De.options.value,...i})}const a=PA();e4(()=>{ax(!!a.value.showToolbar)}),Rn&&setTimeout(()=>{Y2()||console.error("[React Scan] Failed to load. Must import React Scan before React runs.")},5e3)}catch(t){De.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",t)}},ax=t=>{var a;(a=window.reactScanCleanupListeners)==null||a.call(window);const i=$4(),l=tz();window.reactScanCleanupListeners=()=>{i(),l?.()};const s=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!t){s?.remove();return}s?.remove();const{shadowRoot:c}=WA();GA(c)},tz=()=>{try{const t=document.documentElement;return oA(t)}catch(t){De.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",t)}},nz=(t={})=>{JA(t),!(re.isInIframe.value&&!De.options.value.allowInIframe&&!De.runInAllEnvironments)&&(t.enabled===!1&&t.showToolbar!==!0||ez())},az=new WeakSet,Ff={exports:{}},_e={};var dy;function rz(){if(dy)return _e;dy=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),y=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function k(N,L,W){this.props=N,this.context=L,this.refs=M,this.updater=W||T}k.prototype.isReactComponent={},k.prototype.setState=function(N,L){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,L,"setState")},k.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function E(){}E.prototype=k.prototype;function H(N,L,W){this.props=N,this.context=L,this.refs=M,this.updater=W||T}var Y=H.prototype=new E;Y.constructor=H,C(Y,k.prototype),Y.isPureReactComponent=!0;var Q=Array.isArray;function J(){}var P={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function ie(N,L,W){var K=W.ref;return{$$typeof:t,type:N,key:L,ref:K!==void 0?K:null,props:W}}function ne(N,L){return ie(N.type,L,N.props)}function pe(N){return typeof N=="object"&&N!==null&&N.$$typeof===t}function ye(N){var L={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(W){return L[W]})}var we=/\/+/g;function ze(N,L){return typeof N=="object"&&N!==null&&N.key!=null?ye(""+N.key):L.toString(36)}function Me(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(J,J):(N.status="pending",N.then(function(L){N.status==="pending"&&(N.status="fulfilled",N.value=L)},function(L){N.status==="pending"&&(N.status="rejected",N.reason=L)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function _(N,L,W,K,ee){var te=typeof N;(te==="undefined"||te==="boolean")&&(N=null);var ae=!1;if(N===null)ae=!0;else switch(te){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(N.$$typeof){case t:case a:ae=!0;break;case b:return ae=N._init,_(ae(N._payload),L,W,K,ee)}}if(ae)return ee=ee(N),ae=K===""?"."+ze(N,0):K,Q(ee)?(W="",ae!=null&&(W=ae.replace(we,"$&/")+"/"),_(ee,L,W,"",function(et){return et})):ee!=null&&(pe(ee)&&(ee=ne(ee,W+(ee.key==null||N&&N.key===ee.key?"":(""+ee.key).replace(we,"$&/")+"/")+ae)),L.push(ee)),1;ae=0;var ve=K===""?".":K+":";if(Q(N))for(var le=0;le<N.length;le++)K=N[le],te=ve+ze(K,le),ae+=_(K,L,W,te,ee);else if(le=x(N),typeof le=="function")for(N=le.call(N),le=0;!(K=N.next()).done;)K=K.value,te=ve+ze(K,le++),ae+=_(K,L,W,te,ee);else if(te==="object"){if(typeof N.then=="function")return _(Me(N),L,W,K,ee);throw L=String(N),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return ae}function z(N,L,W){if(N==null)return N;var K=[],ee=0;return _(N,K,"","",function(te){return L.call(W,te,ee++)}),K}function R(N){if(N._status===-1){var L=N._result;L=L(),L.then(function(W){(N._status===0||N._status===-1)&&(N._status=1,N._result=W)},function(W){(N._status===0||N._status===-1)&&(N._status=2,N._result=W)}),N._status===-1&&(N._status=0,N._result=L)}if(N._status===1)return N._result.default;throw N._result}var X=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},F={map:z,forEach:function(N,L,W){z(N,function(){L.apply(this,arguments)},W)},count:function(N){var L=0;return z(N,function(){L++}),L},toArray:function(N){return z(N,function(L){return L})||[]},only:function(N){if(!pe(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return _e.Activity=w,_e.Children=F,_e.Component=k,_e.Fragment=i,_e.Profiler=s,_e.PureComponent=H,_e.StrictMode=l,_e.Suspense=p,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,_e.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},_e.cache=function(N){return function(){return N.apply(null,arguments)}},_e.cacheSignal=function(){return null},_e.cloneElement=function(N,L,W){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var K=C({},N.props),ee=N.key;if(L!=null)for(te in L.key!==void 0&&(ee=""+L.key),L)!Z.call(L,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&L.ref===void 0||(K[te]=L[te]);var te=arguments.length-2;if(te===1)K.children=W;else if(1<te){for(var ae=Array(te),ve=0;ve<te;ve++)ae[ve]=arguments[ve+2];K.children=ae}return ie(N.type,ee,K)},_e.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},_e.createElement=function(N,L,W){var K,ee={},te=null;if(L!=null)for(K in L.key!==void 0&&(te=""+L.key),L)Z.call(L,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(ee[K]=L[K]);var ae=arguments.length-2;if(ae===1)ee.children=W;else if(1<ae){for(var ve=Array(ae),le=0;le<ae;le++)ve[le]=arguments[le+2];ee.children=ve}if(N&&N.defaultProps)for(K in ae=N.defaultProps,ae)ee[K]===void 0&&(ee[K]=ae[K]);return ie(N,te,ee)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(N){return{$$typeof:m,render:N}},_e.isValidElement=pe,_e.lazy=function(N){return{$$typeof:b,_payload:{_status:-1,_result:N},_init:R}},_e.memo=function(N,L){return{$$typeof:g,type:N,compare:L===void 0?null:L}},_e.startTransition=function(N){var L=P.T,W={};P.T=W;try{var K=N(),ee=P.S;ee!==null&&ee(W,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(J,X)}catch(te){X(te)}finally{L!==null&&W.types!==null&&(L.types=W.types),P.T=L}},_e.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},_e.use=function(N){return P.H.use(N)},_e.useActionState=function(N,L,W){return P.H.useActionState(N,L,W)},_e.useCallback=function(N,L){return P.H.useCallback(N,L)},_e.useContext=function(N){return P.H.useContext(N)},_e.useDebugValue=function(){},_e.useDeferredValue=function(N,L){return P.H.useDeferredValue(N,L)},_e.useEffect=function(N,L){return P.H.useEffect(N,L)},_e.useEffectEvent=function(N){return P.H.useEffectEvent(N)},_e.useId=function(){return P.H.useId()},_e.useImperativeHandle=function(N,L,W){return P.H.useImperativeHandle(N,L,W)},_e.useInsertionEffect=function(N,L){return P.H.useInsertionEffect(N,L)},_e.useLayoutEffect=function(N,L){return P.H.useLayoutEffect(N,L)},_e.useMemo=function(N,L){return P.H.useMemo(N,L)},_e.useOptimistic=function(N,L){return P.H.useOptimistic(N,L)},_e.useReducer=function(N,L,W){return P.H.useReducer(N,L,W)},_e.useRef=function(N){return P.H.useRef(N)},_e.useState=function(N){return P.H.useState(N)},_e.useSyncExternalStore=function(N,L,W){return P.H.useSyncExternalStore(N,L,W)},_e.useTransition=function(){return P.H.useTransition()},_e.version="19.2.4",_e}var fy;function km(){return fy||(fy=1,Ff.exports=rz()),Ff.exports}var fe=km(),Vf={exports:{}},Rl={},qf={exports:{}},Yf={};var hy;function iz(){return hy||(hy=1,(function(t){function a(_,z){var R=_.length;_.push(z);e:for(;0<R;){var X=R-1>>>1,F=_[X];if(0<s(F,z))_[X]=z,_[R]=F,R=X;else break e}}function i(_){return _.length===0?null:_[0]}function l(_){if(_.length===0)return null;var z=_[0],R=_.pop();if(R!==z){_[0]=R;e:for(var X=0,F=_.length,N=F>>>1;X<N;){var L=2*(X+1)-1,W=_[L],K=L+1,ee=_[K];if(0>s(W,R))K<F&&0>s(ee,W)?(_[X]=ee,_[K]=R,X=K):(_[X]=W,_[L]=R,X=L);else if(K<F&&0>s(ee,R))_[X]=ee,_[K]=R,X=K;else break e}}return z}function s(_,z){var R=_.sortIndex-z.sortIndex;return R!==0?R:_.id-z.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var d=Date,m=d.now();t.unstable_now=function(){return d.now()-m}}var p=[],g=[],b=1,w=null,y=3,x=!1,T=!1,C=!1,M=!1,k=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function Y(_){for(var z=i(g);z!==null;){if(z.callback===null)l(g);else if(z.startTime<=_)l(g),z.sortIndex=z.expirationTime,a(p,z);else break;z=i(g)}}function Q(_){if(C=!1,Y(_),!T)if(i(p)!==null)T=!0,J||(J=!0,ye());else{var z=i(g);z!==null&&Me(Q,z.startTime-_)}}var J=!1,P=-1,Z=5,ie=-1;function ne(){return M?!0:!(t.unstable_now()-ie<Z)}function pe(){if(M=!1,J){var _=t.unstable_now();ie=_;var z=!0;try{e:{T=!1,C&&(C=!1,E(P),P=-1),x=!0;var R=y;try{t:{for(Y(_),w=i(p);w!==null&&!(w.expirationTime>_&&ne());){var X=w.callback;if(typeof X=="function"){w.callback=null,y=w.priorityLevel;var F=X(w.expirationTime<=_);if(_=t.unstable_now(),typeof F=="function"){w.callback=F,Y(_),z=!0;break t}w===i(p)&&l(p),Y(_)}else l(p);w=i(p)}if(w!==null)z=!0;else{var N=i(g);N!==null&&Me(Q,N.startTime-_),z=!1}}break e}finally{w=null,y=R,x=!1}z=void 0}}finally{z?ye():J=!1}}}var ye;if(typeof H=="function")ye=function(){H(pe)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,ze=we.port2;we.port1.onmessage=pe,ye=function(){ze.postMessage(null)}}else ye=function(){k(pe,0)};function Me(_,z){P=k(function(){_(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(_){_.callback=null},t.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<_?Math.floor(1e3/_):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_next=function(_){switch(y){case 1:case 2:case 3:var z=3;break;default:z=y}var R=y;y=z;try{return _()}finally{y=R}},t.unstable_requestPaint=function(){M=!0},t.unstable_runWithPriority=function(_,z){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var R=y;y=_;try{return z()}finally{y=R}},t.unstable_scheduleCallback=function(_,z,R){var X=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?X+R:X):R=X,_){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=R+F,_={id:b++,callback:z,priorityLevel:_,startTime:R,expirationTime:F,sortIndex:-1},R>X?(_.sortIndex=R,a(g,_),i(p)===null&&_===i(g)&&(C?(E(P),P=-1):C=!0,Me(Q,R-X))):(_.sortIndex=F,a(p,_),T||x||(T=!0,J||(J=!0,ye()))),_},t.unstable_shouldYield=ne,t.unstable_wrapCallback=function(_){var z=y;return function(){var R=y;y=z;try{return _.apply(this,arguments)}finally{y=R}}}})(Yf)),Yf}var my;function lz(){return my||(my=1,qf.exports=iz()),qf.exports}var Gf={exports:{}},Mt={};var py;function oz(){if(py)return Mt;py=1;var t=km();function a(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)g+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var l={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal");function c(p,g,b){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:w==null?null:""+w,children:p,containerInfo:g,implementation:b}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,Mt.createPortal=function(p,g){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(a(299));return c(p,g,null,b)},Mt.flushSync=function(p){var g=d.T,b=l.p;try{if(d.T=null,l.p=2,p)return p()}finally{d.T=g,l.p=b,l.d.f()}},Mt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,l.d.C(p,g))},Mt.prefetchDNS=function(p){typeof p=="string"&&l.d.D(p)},Mt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var b=g.as,w=m(b,g.crossOrigin),y=typeof g.integrity=="string"?g.integrity:void 0,x=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;b==="style"?l.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:y,fetchPriority:x}):b==="script"&&l.d.X(p,{crossOrigin:w,integrity:y,fetchPriority:x,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Mt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var b=m(g.as,g.crossOrigin);l.d.M(p,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&l.d.M(p)},Mt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var b=g.as,w=m(b,g.crossOrigin);l.d.L(p,b,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Mt.preloadModule=function(p,g){if(typeof p=="string")if(g){var b=m(g.as,g.crossOrigin);l.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else l.d.m(p)},Mt.requestFormReset=function(p){l.d.r(p)},Mt.unstable_batchedUpdates=function(p,g){return p(g)},Mt.useFormState=function(p,g,b){return d.H.useFormState(p,g,b)},Mt.useFormStatus=function(){return d.H.useHostTransitionStatus()},Mt.version="19.2.4",Mt}var gy;function sz(){if(gy)return Gf.exports;gy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),Gf.exports=oz(),Gf.exports}var vy;function cz(){if(vy)return Rl;vy=1;var t=lz(),a=km(),i=sz();function l(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(l(188))}function g(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(l(188));return n!==e?null:e}for(var r=e,o=n;;){var u=r.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===r)return p(u),e;if(f===o)return p(u),n;f=f.sibling}throw Error(l(188))}if(r.return!==o.return)r=u,o=f;else{for(var v=!1,S=u.child;S;){if(S===r){v=!0,r=u,o=f;break}if(S===o){v=!0,o=u,r=f;break}S=S.sibling}if(!v){for(S=f.child;S;){if(S===r){v=!0,r=f,o=u;break}if(S===o){v=!0,o=f,r=u;break}S=S.sibling}if(!v)throw Error(l(189))}}if(r.alternate!==o)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:n}function b(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=b(e),n!==null)return n;e=e.sibling}return null}var w=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),E=Symbol.for("react.consumer"),H=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),ne=Symbol.for("react.memo_cache_sentinel"),pe=Symbol.iterator;function ye(e){return e===null||typeof e!="object"?null:(e=pe&&e[pe]||e["@@iterator"],typeof e=="function"?e:null)}var we=Symbol.for("react.client.reference");function ze(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===we?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case k:return"Profiler";case M:return"StrictMode";case Q:return"Suspense";case J:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case H:return e.displayName||"Context";case E:return(e._context.displayName||"Context")+".Consumer";case Y:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:ze(e.type)||"Memo";case Z:n=e._payload,e=e._init;try{return ze(e(n))}catch{}}return null}var Me=Array.isArray,_=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},X=[],F=-1;function N(e){return{current:e}}function L(e){0>F||(e.current=X[F],X[F]=null,F--)}function W(e,n){F++,X[F]=e.current,e.current=n}var K=N(null),ee=N(null),te=N(null),ae=N(null);function ve(e,n){switch(W(te,n),W(ee,e),W(K,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Zv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Zv(n),e=Wv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(K),W(K,e)}function le(){L(K),L(ee),L(te)}function et(e){e.memoizedState!==null&&W(ae,e);var n=K.current,r=Wv(n,e.type);n!==r&&(W(ee,e),W(K,r))}function rt(e){ee.current===e&&(L(K),L(ee)),ae.current===e&&(L(ae),_l._currentValue=R)}var Vt,gn;function St(e){if(Vt===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Vt=n&&n[1]||"",gn=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vt+e+gn}var Cr=!1;function Fc(e,n){if(!e||Cr)return"";Cr=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch(V){var B=V}Reflect.construct(e,[],I)}else{try{I.call()}catch(V){B=V}e.call(I.prototype)}}else{try{throw Error()}catch(V){B=V}(I=e())&&typeof I.catch=="function"&&I.catch(function(){})}}catch(V){if(V&&B&&typeof V.stack=="string")return[V.stack,B.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],S=f[1];if(v&&S){var A=v.split(`
`),U=S.split(`
`);for(u=o=0;o<A.length&&!A[o].includes("DetermineComponentFrameRoot");)o++;for(;u<U.length&&!U[u].includes("DetermineComponentFrameRoot");)u++;if(o===A.length||u===U.length)for(o=A.length-1,u=U.length-1;1<=o&&0<=u&&A[o]!==U[u];)u--;for(;1<=o&&0<=u;o--,u--)if(A[o]!==U[u]){if(o!==1||u!==1)do if(o--,u--,0>u||A[o]!==U[u]){var q=`
`+A[o].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=o&&0<=u);break}}}finally{Cr=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?St(r):""}function ix(e,n){switch(e.tag){case 26:case 27:case 5:return St(e.type);case 16:return St("Lazy");case 13:return e.child!==n&&n!==null?St("Suspense Fallback"):St("Suspense");case 19:return St("SuspenseList");case 0:case 15:return Fc(e.type,!1);case 11:return Fc(e.type.render,!1);case 1:return Fc(e.type,!0);case 31:return St("Activity");default:return""}}function Nm(e){try{var n="",r=null;do n+=ix(e,r),r=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Vc=Object.prototype.hasOwnProperty,qc=t.unstable_scheduleCallback,Yc=t.unstable_cancelCallback,lx=t.unstable_shouldYield,ox=t.unstable_requestPaint,qt=t.unstable_now,sx=t.unstable_getCurrentPriorityLevel,Cm=t.unstable_ImmediatePriority,Em=t.unstable_UserBlockingPriority,po=t.unstable_NormalPriority,cx=t.unstable_LowPriority,Am=t.unstable_IdlePriority,ux=t.log,dx=t.unstable_setDisableYieldValue,Di=null,Yt=null;function la(e){if(typeof ux=="function"&&dx(e),Yt&&typeof Yt.setStrictMode=="function")try{Yt.setStrictMode(Di,e)}catch{}}var Gt=Math.clz32?Math.clz32:mx,fx=Math.log,hx=Math.LN2;function mx(e){return e>>>=0,e===0?32:31-(fx(e)/hx|0)|0}var go=256,vo=262144,bo=4194304;function qa(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yo(e,n,r){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var S=o&134217727;return S!==0?(o=S&~f,o!==0?u=qa(o):(v&=S,v!==0?u=qa(v):r||(r=S&~e,r!==0&&(u=qa(r))))):(S=o&~f,S!==0?u=qa(S):v!==0?u=qa(v):r||(r=o&~e,r!==0&&(u=qa(r)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,r=n&-n,f>=r||f===32&&(r&4194048)!==0)?n:u}function $i(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function px(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zm(){var e=bo;return bo<<=1,(bo&62914560)===0&&(bo=4194304),e}function Gc(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Li(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gx(e,n,r,o,u,f){var v=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var S=e.entanglements,A=e.expirationTimes,U=e.hiddenUpdates;for(r=v&~r;0<r;){var q=31-Gt(r),I=1<<q;S[q]=0,A[q]=-1;var B=U[q];if(B!==null)for(U[q]=null,q=0;q<B.length;q++){var V=B[q];V!==null&&(V.lane&=-536870913)}r&=~I}o!==0&&Mm(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Mm(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Gt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|r&261930}function Om(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var o=31-Gt(r),u=1<<o;u&n|e[o]&n&&(e[o]|=n),r&=~u}}function Rm(e,n){var r=n&-n;return r=(r&42)!==0?1:Xc(r),(r&(e.suspendedLanes|n))!==0?0:r}function Xc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ic(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Dm(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:y0(e.type))}function $m(e,n){var r=z.p;try{return z.p=e,n()}finally{z.p=r}}var oa=Math.random().toString(36).slice(2),Tt="__reactFiber$"+oa,Dt="__reactProps$"+oa,Er="__reactContainer$"+oa,Qc="__reactEvents$"+oa,vx="__reactListeners$"+oa,bx="__reactHandles$"+oa,Lm="__reactResources$"+oa,ji="__reactMarker$"+oa;function Zc(e){delete e[Tt],delete e[Dt],delete e[Qc],delete e[vx],delete e[bx]}function Ar(e){var n=e[Tt];if(n)return n;for(var r=e.parentNode;r;){if(n=r[Er]||r[Tt]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=a0(e);e!==null;){if(r=e[Tt])return r;e=a0(e)}return n}e=r,r=e.parentNode}return null}function zr(e){if(e=e[Tt]||e[Er]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ui(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(l(33))}function Mr(e){var n=e[Lm];return n||(n=e[Lm]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function yt(e){e[ji]=!0}var jm=new Set,Um={};function Ya(e,n){Or(e,n),Or(e+"Capture",n)}function Or(e,n){for(Um[e]=n,e=0;e<n.length;e++)jm.add(n[e])}var yx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hm={},Bm={};function wx(e){return Vc.call(Bm,e)?!0:Vc.call(Hm,e)?!1:yx.test(e)?Bm[e]=!0:(Hm[e]=!0,!1)}function wo(e,n,r){if(wx(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function xo(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function Ln(e,n,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+o)}}function nn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fm(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function xx(e,n,r){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){r=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(v){r=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wc(e){if(!e._valueTracker){var n=Fm(e)?"checked":"value";e._valueTracker=xx(e,n,""+e[n])}}function Vm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return e&&(o=Fm(e)?e.checked?"true":"false":e.value),e=o,e!==r?(n.setValue(e),!0):!1}function _o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var _x=/[\n"\\]/g;function an(e){return e.replace(_x,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Kc(e,n,r,o,u,f,v,S){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+nn(n)):e.value!==""+nn(n)&&(e.value=""+nn(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Jc(e,v,nn(n)):r!=null?Jc(e,v,nn(r)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.name=""+nn(S):e.removeAttribute("name")}function qm(e,n,r,o,u,f,v,S){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Wc(e);return}r=r!=null?""+nn(r):"",n=n!=null?""+nn(n):r,S||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=S?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Wc(e)}function Jc(e,n,r){n==="number"&&_o(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Rr(e,n,r,o){if(e=e.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=n.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&o&&(e[r].defaultSelected=!0)}else{for(r=""+nn(r),n=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ym(e,n,r){if(n!=null&&(n=""+nn(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+nn(r):""}function Gm(e,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(l(92));if(Me(o)){if(1<o.length)throw Error(l(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=nn(n),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o),Wc(e)}function Dr(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Sx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xm(e,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,r):typeof r!="number"||r===0||Sx.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function Im(e,n,r){if(n!=null&&typeof n!="object")throw Error(l(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&r[u]!==o&&Xm(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Xm(e,f,n[f])}function Pc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function So(e){return kx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function jn(){}var eu=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $r=null,Lr=null;function Qm(e){var n=zr(e);if(n&&(e=n.stateNode)){var r=e[Dt]||null;e:switch(e=n.stateNode,n.type){case"input":if(Kc(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+an(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==e&&o.form===e.form){var u=o[Dt]||null;if(!u)throw Error(l(90));Kc(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===e.form&&Vm(o)}break e;case"textarea":Ym(e,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&Rr(e,!!r.multiple,n,!1)}}}var nu=!1;function Zm(e,n,r){if(nu)return e(n,r);nu=!0;try{var o=e(n);return o}finally{if(nu=!1,($r!==null||Lr!==null)&&(us(),$r&&(n=$r,e=Lr,Lr=$r=null,Qm(n),e)))for(n=0;n<e.length;n++)Qm(e[n])}}function Hi(e,n){var r=e.stateNode;if(r===null)return null;var o=r[Dt]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,n,typeof r));return r}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=!1;if(Un)try{var Bi={};Object.defineProperty(Bi,"passive",{get:function(){au=!0}}),window.addEventListener("test",Bi,Bi),window.removeEventListener("test",Bi,Bi)}catch{au=!1}var sa=null,ru=null,To=null;function Wm(){if(To)return To;var e,n=ru,r=n.length,o,u="value"in sa?sa.value:sa.textContent,f=u.length;for(e=0;e<r&&n[e]===u[e];e++);var v=r-e;for(o=1;o<=v&&n[r-o]===u[f-o];o++);return To=u.slice(e,1<o?1-o:void 0)}function ko(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function No(){return!0}function Km(){return!1}function $t(e){function n(r,o,u,f,v){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(r=e[S],this[S]=r?r(f):f[S]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?No:Km,this.isPropagationStopped=Km,this}return w(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Co=$t(Ga),Fi=w({},Ga,{view:0,detail:0}),Nx=$t(Fi),iu,lu,Vi,Eo=w({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vi&&(Vi&&e.type==="mousemove"?(iu=e.screenX-Vi.screenX,lu=e.screenY-Vi.screenY):lu=iu=0,Vi=e),iu)},movementY:function(e){return"movementY"in e?e.movementY:lu}}),Jm=$t(Eo),Cx=w({},Eo,{dataTransfer:0}),Ex=$t(Cx),Ax=w({},Fi,{relatedTarget:0}),ou=$t(Ax),zx=w({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Mx=$t(zx),Ox=w({},Ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rx=$t(Ox),Dx=w({},Ga,{data:0}),Pm=$t(Dx),$x={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ux(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=jx[e])?!!n[e]:!1}function su(){return Ux}var Hx=w({},Fi,{key:function(e){if(e.key){var n=$x[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bx=$t(Hx),Fx=w({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ep=$t(Fx),Vx=w({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),qx=$t(Vx),Yx=w({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gx=$t(Yx),Xx=w({},Eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ix=$t(Xx),Qx=w({},Ga,{newState:0,oldState:0}),Zx=$t(Qx),Wx=[9,13,27,32],cu=Un&&"CompositionEvent"in window,qi=null;Un&&"documentMode"in document&&(qi=document.documentMode);var Kx=Un&&"TextEvent"in window&&!qi,tp=Un&&(!cu||qi&&8<qi&&11>=qi),np=" ",ap=!1;function rp(e,n){switch(e){case"keyup":return Wx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jr=!1;function Jx(e,n){switch(e){case"compositionend":return ip(n);case"keypress":return n.which!==32?null:(ap=!0,np);case"textInput":return e=n.data,e===np&&ap?null:e;default:return null}}function Px(e,n){if(jr)return e==="compositionend"||!cu&&rp(e,n)?(e=Wm(),To=ru=sa=null,jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tp&&n.locale!=="ko"?null:n.data;default:return null}}var e_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!e_[e.type]:n==="textarea"}function op(e,n,r,o){$r?Lr?Lr.push(o):Lr=[o]:$r=o,n=vs(n,"onChange"),0<n.length&&(r=new Co("onChange","change",null,r,o),e.push({event:r,listeners:n}))}var Yi=null,Gi=null;function t_(e){qv(e,0)}function Ao(e){var n=Ui(e);if(Vm(n))return e}function sp(e,n){if(e==="change")return n}var cp=!1;if(Un){var uu;if(Un){var du="oninput"in document;if(!du){var up=document.createElement("div");up.setAttribute("oninput","return;"),du=typeof up.oninput=="function"}uu=du}else uu=!1;cp=uu&&(!document.documentMode||9<document.documentMode)}function dp(){Yi&&(Yi.detachEvent("onpropertychange",fp),Gi=Yi=null)}function fp(e){if(e.propertyName==="value"&&Ao(Gi)){var n=[];op(n,Gi,e,tu(e)),Zm(t_,n)}}function n_(e,n,r){e==="focusin"?(dp(),Yi=n,Gi=r,Yi.attachEvent("onpropertychange",fp)):e==="focusout"&&dp()}function a_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ao(Gi)}function r_(e,n){if(e==="click")return Ao(n)}function i_(e,n){if(e==="input"||e==="change")return Ao(n)}function l_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xt=typeof Object.is=="function"?Object.is:l_;function Xi(e,n){if(Xt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!Vc.call(n,u)||!Xt(e[u],n[u]))return!1}return!0}function hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mp(e,n){var r=hp(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=n&&o>=n)return{node:r,offset:n-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=hp(r)}}function pp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?pp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function gp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=_o(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=_o(e.document)}return n}function fu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var o_=Un&&"documentMode"in document&&11>=document.documentMode,Ur=null,hu=null,Ii=null,mu=!1;function vp(e,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;mu||Ur==null||Ur!==_o(o)||(o=Ur,"selectionStart"in o&&fu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ii&&Xi(Ii,o)||(Ii=o,o=vs(hu,"onSelect"),0<o.length&&(n=new Co("onSelect","select",null,n,r),e.push({event:n,listeners:o}),n.target=Ur)))}function Xa(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var Hr={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},pu={},bp={};Un&&(bp=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function Ia(e){if(pu[e])return pu[e];if(!Hr[e])return e;var n=Hr[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in bp)return pu[e]=n[r];return e}var yp=Ia("animationend"),wp=Ia("animationiteration"),xp=Ia("animationstart"),s_=Ia("transitionrun"),c_=Ia("transitionstart"),u_=Ia("transitioncancel"),_p=Ia("transitionend"),Sp=new Map,gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gu.push("scrollEnd");function vn(e,n){Sp.set(e,n),Ya(n,[e])}var zo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},rn=[],Br=0,vu=0;function Mo(){for(var e=Br,n=vu=Br=0;n<e;){var r=rn[n];rn[n++]=null;var o=rn[n];rn[n++]=null;var u=rn[n];rn[n++]=null;var f=rn[n];if(rn[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&Tp(r,u,f)}}function Oo(e,n,r,o){rn[Br++]=e,rn[Br++]=n,rn[Br++]=r,rn[Br++]=o,vu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function bu(e,n,r,o){return Oo(e,n,r,o),Ro(e)}function Qa(e,n){return Oo(e,null,null,n),Ro(e)}function Tp(e,n,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var u=!1,f=e.return;f!==null;)f.childLanes|=r,o=f.alternate,o!==null&&(o.childLanes|=r),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Gt(r),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=r|536870912),f):null}function Ro(e){if(50<pl)throw pl=0,Cd=null,Error(l(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Fr={};function d_(e,n,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(e,n,r,o){return new d_(e,n,r,o)}function yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hn(e,n){var r=e.alternate;return r===null?(r=It(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function kp(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Do(e,n,r,o,u,f){var v=0;if(o=e,typeof e=="function")yu(e)&&(v=1);else if(typeof e=="string")v=g2(e,r,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ie:return e=It(31,r,n,u),e.elementType=ie,e.lanes=f,e;case C:return Za(r.children,u,f,n);case M:v=8,u|=24;break;case k:return e=It(12,r,n,u|2),e.elementType=k,e.lanes=f,e;case Q:return e=It(13,r,n,u),e.elementType=Q,e.lanes=f,e;case J:return e=It(19,r,n,u),e.elementType=J,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:v=10;break e;case E:v=9;break e;case Y:v=11;break e;case P:v=14;break e;case Z:v=16,o=null;break e}v=29,r=Error(l(130,e===null?"null":typeof e,"")),o=null}return n=It(v,r,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Za(e,n,r,o){return e=It(7,e,o,n),e.lanes=r,e}function wu(e,n,r){return e=It(6,e,null,n),e.lanes=r,e}function Np(e){var n=It(18,null,null,0);return n.stateNode=e,n}function xu(e,n,r){return n=It(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Cp=new WeakMap;function ln(e,n){if(typeof e=="object"&&e!==null){var r=Cp.get(e);return r!==void 0?r:(n={value:e,source:n,stack:Nm(n)},Cp.set(e,n),n)}return{value:e,source:n,stack:Nm(n)}}var Vr=[],qr=0,$o=null,Qi=0,on=[],sn=0,ca=null,Cn=1,En="";function Bn(e,n){Vr[qr++]=Qi,Vr[qr++]=$o,$o=e,Qi=n}function Ep(e,n,r){on[sn++]=Cn,on[sn++]=En,on[sn++]=ca,ca=e;var o=Cn;e=En;var u=32-Gt(o)-1;o&=~(1<<u),r+=1;var f=32-Gt(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Cn=1<<32-Gt(n)+u|r<<u|o,En=f+e}else Cn=1<<f|r<<u|o,En=e}function _u(e){e.return!==null&&(Bn(e,1),Ep(e,1,0))}function Su(e){for(;e===$o;)$o=Vr[--qr],Vr[qr]=null,Qi=Vr[--qr],Vr[qr]=null;for(;e===ca;)ca=on[--sn],on[sn]=null,En=on[--sn],on[sn]=null,Cn=on[--sn],on[sn]=null}function Ap(e,n){on[sn++]=Cn,on[sn++]=En,on[sn++]=ca,Cn=n.id,En=n.overflow,ca=e}var kt=null,Qe=null,Le=!1,ua=null,cn=!1,Tu=Error(l(519));function da(e){var n=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zi(ln(n,e)),Tu}function zp(e){var n=e.stateNode,r=e.type,o=e.memoizedProps;switch(n[Tt]=e,n[Dt]=o,r){case"dialog":Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":case"embed":Ae("load",n);break;case"video":case"audio":for(r=0;r<vl.length;r++)Ae(vl[r],n);break;case"source":Ae("error",n);break;case"img":case"image":case"link":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"input":Ae("invalid",n),qm(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ae("invalid",n);break;case"textarea":Ae("invalid",n),Gm(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||Iv(n.textContent,r)?(o.popover!=null&&(Ae("beforetoggle",n),Ae("toggle",n)),o.onScroll!=null&&Ae("scroll",n),o.onScrollEnd!=null&&Ae("scrollend",n),o.onClick!=null&&(n.onclick=jn),n=!0):n=!1,n||da(e,!0)}function Mp(e){for(kt=e.return;kt;)switch(kt.tag){case 5:case 31:case 13:cn=!1;return;case 27:case 3:cn=!0;return;default:kt=kt.return}}function Yr(e){if(e!==kt)return!1;if(!Le)return Mp(e),Le=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Vd(e.type,e.memoizedProps)),r=!r),r&&Qe&&da(e),Mp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Qe=n0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Qe=n0(e)}else n===27?(n=Qe,ka(e.type)?(e=Id,Id=null,Qe=e):Qe=n):Qe=kt?dn(e.stateNode.nextSibling):null;return!0}function Wa(){Qe=kt=null,Le=!1}function ku(){var e=ua;return e!==null&&(Ht===null?Ht=e:Ht.push.apply(Ht,e),ua=null),e}function Zi(e){ua===null?ua=[e]:ua.push(e)}var Nu=N(null),Ka=null,Fn=null;function fa(e,n,r){W(Nu,n._currentValue),n._currentValue=r}function Vn(e){e._currentValue=Nu.current,L(Nu)}function Cu(e,n,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===r)break;e=e.return}}function Eu(e,n,r,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var S=f;f=u;for(var A=0;A<n.length;A++)if(S.context===n[A]){f.lanes|=r,S=f.alternate,S!==null&&(S.lanes|=r),Cu(f.return,r,e),o||(v=null);break e}f=S.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(l(341));v.lanes|=r,f=v.alternate,f!==null&&(f.lanes|=r),Cu(v,r,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Gr(e,n,r,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(l(387));if(v=v.memoizedProps,v!==null){var S=u.type;Xt(u.pendingProps.value,v.value)||(e!==null?e.push(S):e=[S])}}else if(u===ae.current){if(v=u.alternate,v===null)throw Error(l(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(_l):e=[_l])}u=u.return}e!==null&&Eu(n,e,r,o),n.flags|=262144}function Lo(e){for(e=e.firstContext;e!==null;){if(!Xt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){Ka=e,Fn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nt(e){return Op(Ka,e)}function jo(e,n){return Ka===null&&Ja(e),Op(e,n)}function Op(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Fn===null){if(e===null)throw Error(l(308));Fn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Fn=Fn.next=n;return r}var f_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},h_=t.unstable_scheduleCallback,m_=t.unstable_NormalPriority,ut={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Au(){return{controller:new f_,data:new Map,refCount:0}}function Wi(e){e.refCount--,e.refCount===0&&h_(m_,function(){e.controller.abort()})}var Ki=null,zu=0,Xr=0,Ir=null;function p_(e,n){if(Ki===null){var r=Ki=[];zu=0,Xr=Rd(),Ir={status:"pending",value:void 0,then:function(o){r.push(o)}}}return zu++,n.then(Rp,Rp),n}function Rp(){if(--zu===0&&Ki!==null){Ir!==null&&(Ir.status="fulfilled");var e=Ki;Ki=null,Xr=0,Ir=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function g_(e,n){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var Dp=_.S;_.S=function(e,n){vv=qt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&p_(e,n),Dp!==null&&Dp(e,n)};var Pa=N(null);function Mu(){var e=Pa.current;return e!==null?e:Ge.pooledCache}function Uo(e,n){n===null?W(Pa,Pa.current):W(Pa,n.pool)}function $p(){var e=Mu();return e===null?null:{parent:ut._currentValue,pool:e}}var Qr=Error(l(460)),Ou=Error(l(474)),Ho=Error(l(542)),Bo={then:function(){}};function Lp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function jp(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(jn,jn),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Hp(e),e;default:if(typeof n.status=="string")n.then(jn,jn);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Hp(e),e}throw tr=n,Qr}}function er(e){try{var n=e._init;return n(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(tr=r,Qr):r}}var tr=null;function Up(){if(tr===null)throw Error(l(459));var e=tr;return tr=null,e}function Hp(e){if(e===Qr||e===Ho)throw Error(l(483))}var Zr=null,Ji=0;function Fo(e){var n=Ji;return Ji+=1,Zr===null&&(Zr=[]),jp(Zr,e,n)}function Pi(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Vo(e,n){throw n.$$typeof===y?Error(l(525)):(e=Object.prototype.toString.call(n),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Bp(e){function n($,O){if(e){var j=$.deletions;j===null?($.deletions=[O],$.flags|=16):j.push(O)}}function r($,O){if(!e)return null;for(;O!==null;)n($,O),O=O.sibling;return null}function o($){for(var O=new Map;$!==null;)$.key!==null?O.set($.key,$):O.set($.index,$),$=$.sibling;return O}function u($,O){return $=Hn($,O),$.index=0,$.sibling=null,$}function f($,O,j){return $.index=j,e?(j=$.alternate,j!==null?(j=j.index,j<O?($.flags|=67108866,O):j):($.flags|=67108866,O)):($.flags|=1048576,O)}function v($){return e&&$.alternate===null&&($.flags|=67108866),$}function S($,O,j,G){return O===null||O.tag!==6?(O=wu(j,$.mode,G),O.return=$,O):(O=u(O,j),O.return=$,O)}function A($,O,j,G){var ge=j.type;return ge===C?q($,O,j.props.children,G,j.key):O!==null&&(O.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===Z&&er(ge)===O.type)?(O=u(O,j.props),Pi(O,j),O.return=$,O):(O=Do(j.type,j.key,j.props,null,$.mode,G),Pi(O,j),O.return=$,O)}function U($,O,j,G){return O===null||O.tag!==4||O.stateNode.containerInfo!==j.containerInfo||O.stateNode.implementation!==j.implementation?(O=xu(j,$.mode,G),O.return=$,O):(O=u(O,j.children||[]),O.return=$,O)}function q($,O,j,G,ge){return O===null||O.tag!==7?(O=Za(j,$.mode,G,ge),O.return=$,O):(O=u(O,j),O.return=$,O)}function I($,O,j){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=wu(""+O,$.mode,j),O.return=$,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case x:return j=Do(O.type,O.key,O.props,null,$.mode,j),Pi(j,O),j.return=$,j;case T:return O=xu(O,$.mode,j),O.return=$,O;case Z:return O=er(O),I($,O,j)}if(Me(O)||ye(O))return O=Za(O,$.mode,j,null),O.return=$,O;if(typeof O.then=="function")return I($,Fo(O),j);if(O.$$typeof===H)return I($,jo($,O),j);Vo($,O)}return null}function B($,O,j,G){var ge=O!==null?O.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return ge!==null?null:S($,O,""+j,G);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case x:return j.key===ge?A($,O,j,G):null;case T:return j.key===ge?U($,O,j,G):null;case Z:return j=er(j),B($,O,j,G)}if(Me(j)||ye(j))return ge!==null?null:q($,O,j,G,null);if(typeof j.then=="function")return B($,O,Fo(j),G);if(j.$$typeof===H)return B($,O,jo($,j),G);Vo($,j)}return null}function V($,O,j,G,ge){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return $=$.get(j)||null,S(O,$,""+G,ge);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case x:return $=$.get(G.key===null?j:G.key)||null,A(O,$,G,ge);case T:return $=$.get(G.key===null?j:G.key)||null,U(O,$,G,ge);case Z:return G=er(G),V($,O,j,G,ge)}if(Me(G)||ye(G))return $=$.get(j)||null,q(O,$,G,ge,null);if(typeof G.then=="function")return V($,O,j,Fo(G),ge);if(G.$$typeof===H)return V($,O,j,jo(O,G),ge);Vo(O,G)}return null}function oe($,O,j,G){for(var ge=null,je=null,de=O,ke=O=0,Re=null;de!==null&&ke<j.length;ke++){de.index>ke?(Re=de,de=null):Re=de.sibling;var Ue=B($,de,j[ke],G);if(Ue===null){de===null&&(de=Re);break}e&&de&&Ue.alternate===null&&n($,de),O=f(Ue,O,ke),je===null?ge=Ue:je.sibling=Ue,je=Ue,de=Re}if(ke===j.length)return r($,de),Le&&Bn($,ke),ge;if(de===null){for(;ke<j.length;ke++)de=I($,j[ke],G),de!==null&&(O=f(de,O,ke),je===null?ge=de:je.sibling=de,je=de);return Le&&Bn($,ke),ge}for(de=o(de);ke<j.length;ke++)Re=V(de,$,ke,j[ke],G),Re!==null&&(e&&Re.alternate!==null&&de.delete(Re.key===null?ke:Re.key),O=f(Re,O,ke),je===null?ge=Re:je.sibling=Re,je=Re);return e&&de.forEach(function(za){return n($,za)}),Le&&Bn($,ke),ge}function be($,O,j,G){if(j==null)throw Error(l(151));for(var ge=null,je=null,de=O,ke=O=0,Re=null,Ue=j.next();de!==null&&!Ue.done;ke++,Ue=j.next()){de.index>ke?(Re=de,de=null):Re=de.sibling;var za=B($,de,Ue.value,G);if(za===null){de===null&&(de=Re);break}e&&de&&za.alternate===null&&n($,de),O=f(za,O,ke),je===null?ge=za:je.sibling=za,je=za,de=Re}if(Ue.done)return r($,de),Le&&Bn($,ke),ge;if(de===null){for(;!Ue.done;ke++,Ue=j.next())Ue=I($,Ue.value,G),Ue!==null&&(O=f(Ue,O,ke),je===null?ge=Ue:je.sibling=Ue,je=Ue);return Le&&Bn($,ke),ge}for(de=o(de);!Ue.done;ke++,Ue=j.next())Ue=V(de,$,ke,Ue.value,G),Ue!==null&&(e&&Ue.alternate!==null&&de.delete(Ue.key===null?ke:Ue.key),O=f(Ue,O,ke),je===null?ge=Ue:je.sibling=Ue,je=Ue);return e&&de.forEach(function(C2){return n($,C2)}),Le&&Bn($,ke),ge}function Ye($,O,j,G){if(typeof j=="object"&&j!==null&&j.type===C&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case x:e:{for(var ge=j.key;O!==null;){if(O.key===ge){if(ge=j.type,ge===C){if(O.tag===7){r($,O.sibling),G=u(O,j.props.children),G.return=$,$=G;break e}}else if(O.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===Z&&er(ge)===O.type){r($,O.sibling),G=u(O,j.props),Pi(G,j),G.return=$,$=G;break e}r($,O);break}else n($,O);O=O.sibling}j.type===C?(G=Za(j.props.children,$.mode,G,j.key),G.return=$,$=G):(G=Do(j.type,j.key,j.props,null,$.mode,G),Pi(G,j),G.return=$,$=G)}return v($);case T:e:{for(ge=j.key;O!==null;){if(O.key===ge)if(O.tag===4&&O.stateNode.containerInfo===j.containerInfo&&O.stateNode.implementation===j.implementation){r($,O.sibling),G=u(O,j.children||[]),G.return=$,$=G;break e}else{r($,O);break}else n($,O);O=O.sibling}G=xu(j,$.mode,G),G.return=$,$=G}return v($);case Z:return j=er(j),Ye($,O,j,G)}if(Me(j))return oe($,O,j,G);if(ye(j)){if(ge=ye(j),typeof ge!="function")throw Error(l(150));return j=ge.call(j),be($,O,j,G)}if(typeof j.then=="function")return Ye($,O,Fo(j),G);if(j.$$typeof===H)return Ye($,O,jo($,j),G);Vo($,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,O!==null&&O.tag===6?(r($,O.sibling),G=u(O,j),G.return=$,$=G):(r($,O),G=wu(j,$.mode,G),G.return=$,$=G),v($)):r($,O)}return function($,O,j,G){try{Ji=0;var ge=Ye($,O,j,G);return Zr=null,ge}catch(de){if(de===Qr||de===Ho)throw de;var je=It(29,de,null,$.mode);return je.lanes=G,je.return=$,je}}}var nr=Bp(!0),Fp=Bp(!1),ha=!1;function Ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Du(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,n,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(He&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ro(e),Tp(e,null,r),n}return Oo(e,o,n,r),Ro(e)}function el(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,Om(e,r)}}function $u(e,n){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var v={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,r=r.next}while(r!==null);f===null?u=f=n:f=f.next=n}else u=f=n;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var Lu=!1;function tl(){if(Lu){var e=Ir;if(e!==null)throw e}}function nl(e,n,r,o){Lu=!1;var u=e.updateQueue;ha=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,S=u.shared.pending;if(S!==null){u.shared.pending=null;var A=S,U=A.next;A.next=null,v===null?f=U:v.next=U,v=A;var q=e.alternate;q!==null&&(q=q.updateQueue,S=q.lastBaseUpdate,S!==v&&(S===null?q.firstBaseUpdate=U:S.next=U,q.lastBaseUpdate=A))}if(f!==null){var I=u.baseState;v=0,q=U=A=null,S=f;do{var B=S.lane&-536870913,V=B!==S.lane;if(V?(Oe&B)===B:(o&B)===B){B!==0&&B===Xr&&(Lu=!0),q!==null&&(q=q.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var oe=e,be=S;B=n;var Ye=r;switch(be.tag){case 1:if(oe=be.payload,typeof oe=="function"){I=oe.call(Ye,I,B);break e}I=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=be.payload,B=typeof oe=="function"?oe.call(Ye,I,B):oe,B==null)break e;I=w({},I,B);break e;case 2:ha=!0}}B=S.callback,B!==null&&(e.flags|=64,V&&(e.flags|=8192),V=u.callbacks,V===null?u.callbacks=[B]:V.push(B))}else V={lane:B,tag:S.tag,payload:S.payload,callback:S.callback,next:null},q===null?(U=q=V,A=I):q=q.next=V,v|=B;if(S=S.next,S===null){if(S=u.shared.pending,S===null)break;V=S,S=V.next,V.next=null,u.lastBaseUpdate=V,u.shared.pending=null}}while(!0);q===null&&(A=I),u.baseState=A,u.firstBaseUpdate=U,u.lastBaseUpdate=q,f===null&&(u.shared.lanes=0),wa|=v,e.lanes=v,e.memoizedState=I}}function Vp(e,n){if(typeof e!="function")throw Error(l(191,e));e.call(n)}function qp(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Vp(r[e],n)}var Wr=N(null),qo=N(0);function Yp(e,n){e=Kn,W(qo,e),W(Wr,n),Kn=e|n.baseLanes}function ju(){W(qo,Kn),W(Wr,Wr.current)}function Uu(){Kn=qo.current,L(Wr),L(qo)}var Qt=N(null),un=null;function ga(e){var n=e.alternate;W(it,it.current&1),W(Qt,e),un===null&&(n===null||Wr.current!==null||n.memoizedState!==null)&&(un=e)}function Hu(e){W(it,it.current),W(Qt,e),un===null&&(un=e)}function Gp(e){e.tag===22?(W(it,it.current),W(Qt,e),un===null&&(un=e)):va()}function va(){W(it,it.current),W(Qt,Qt.current)}function Zt(e){L(Qt),un===e&&(un=null),L(it)}var it=N(0);function Yo(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Gd(r)||Xd(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qn=0,Se=null,Ve=null,dt=null,Go=!1,Kr=!1,ar=!1,Xo=0,al=0,Jr=null,v_=0;function nt(){throw Error(l(321))}function Bu(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Xt(e[r],n[r]))return!1;return!0}function Fu(e,n,r,o,u,f){return qn=f,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,_.H=e===null||e.memoizedState===null?Eg:nd,ar=!1,f=r(o,u),ar=!1,Kr&&(f=Ip(n,r,o,u)),Xp(e),f}function Xp(e){_.H=ll;var n=Ve!==null&&Ve.next!==null;if(qn=0,dt=Ve=Se=null,Go=!1,al=0,Jr=null,n)throw Error(l(300));e===null||ft||(e=e.dependencies,e!==null&&Lo(e)&&(ft=!0))}function Ip(e,n,r,o){Se=e;var u=0;do{if(Kr&&(Jr=null),al=0,Kr=!1,25<=u)throw Error(l(301));if(u+=1,dt=Ve=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}_.H=Ag,f=n(r,o)}while(Kr);return f}function b_(){var e=_.H,n=e.useState()[0];return n=typeof n.then=="function"?rl(n):n,e=e.useState()[0],(Ve!==null?Ve.memoizedState:null)!==e&&(Se.flags|=1024),n}function Vu(){var e=Xo!==0;return Xo=0,e}function qu(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function Yu(e){if(Go){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Go=!1}qn=0,dt=Ve=Se=null,Kr=!1,al=Xo=0,Jr=null}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Se.memoizedState=dt=e:dt=dt.next=e,dt}function lt(){if(Ve===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var n=dt===null?Se.memoizedState:dt.next;if(n!==null)dt=n,Ve=e;else{if(e===null)throw Se.alternate===null?Error(l(467)):Error(l(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},dt===null?Se.memoizedState=dt=e:dt=dt.next=e}return dt}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rl(e){var n=al;return al+=1,Jr===null&&(Jr=[]),e=jp(Jr,e,n),n=Se,(dt===null?n.memoizedState:dt.next)===null&&(n=n.alternate,_.H=n===null||n.memoizedState===null?Eg:nd),e}function Qo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return rl(e);if(e.$$typeof===H)return Nt(e)}throw Error(l(438,String(e)))}function Gu(e){var n=null,r=Se.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=Se.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=Io(),Se.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),o=0;o<e;o++)r[o]=ne;return n.index++,r}function Yn(e,n){return typeof n=="function"?n(e):n}function Zo(e){var n=lt();return Xu(n,Ve,e)}function Xu(e,n,r){var o=e.queue;if(o===null)throw Error(l(311));o.lastRenderedReducer=r;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var S=v=null,A=null,U=n,q=!1;do{var I=U.lane&-536870913;if(I!==U.lane?(Oe&I)===I:(qn&I)===I){var B=U.revertLane;if(B===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),I===Xr&&(q=!0);else if((qn&B)===B){U=U.next,B===Xr&&(q=!0);continue}else I={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},A===null?(S=A=I,v=f):A=A.next=I,Se.lanes|=B,wa|=B;I=U.action,ar&&r(f,I),f=U.hasEagerState?U.eagerState:r(f,I)}else B={lane:I,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},A===null?(S=A=B,v=f):A=A.next=B,Se.lanes|=I,wa|=I;U=U.next}while(U!==null&&U!==n);if(A===null?v=f:A.next=S,!Xt(f,e.memoizedState)&&(ft=!0,q&&(r=Ir,r!==null)))throw r;e.memoizedState=f,e.baseState=v,e.baseQueue=A,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Iu(e){var n=lt(),r=n.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var o=r.dispatch,u=r.pending,f=n.memoizedState;if(u!==null){r.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Xt(f,n.memoizedState)||(ft=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),r.lastRenderedState=f}return[f,o]}function Qp(e,n,r){var o=Se,u=lt(),f=Le;if(f){if(r===void 0)throw Error(l(407));r=r()}else r=n();var v=!Xt((Ve||u).memoizedState,r);if(v&&(u.memoizedState=r,ft=!0),u=u.queue,Wu(Kp.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||dt!==null&&dt.memoizedState.tag&1){if(o.flags|=2048,Pr(9,{destroy:void 0},Wp.bind(null,o,u,r,n),null),Ge===null)throw Error(l(349));f||(qn&127)!==0||Zp(o,n,r)}return r}function Zp(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=Se.updateQueue,n===null?(n=Io(),Se.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function Wp(e,n,r,o){n.value=r,n.getSnapshot=o,Jp(n)&&Pp(e)}function Kp(e,n,r){return r(function(){Jp(n)&&Pp(e)})}function Jp(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Xt(e,r)}catch{return!0}}function Pp(e){var n=Qa(e,2);n!==null&&Bt(n,e,2)}function Qu(e){var n=Ot();if(typeof e=="function"){var r=e;if(e=r(),ar){la(!0);try{r()}finally{la(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},n}function eg(e,n,r,o){return e.baseState=r,Xu(e,Ve,typeof o=="function"?o:Yn)}function y_(e,n,r,o,u){if(Jo(e))throw Error(l(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};_.T!==null?r(!0):f.isTransition=!1,o(f),r=n.pending,r===null?(f.next=n.pending=f,tg(n,f)):(f.next=r.next,n.pending=r.next=f)}}function tg(e,n){var r=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=_.T,v={};_.T=v;try{var S=r(u,o),A=_.S;A!==null&&A(v,S),ng(e,n,S)}catch(U){Zu(e,n,U)}finally{f!==null&&v.types!==null&&(f.types=v.types),_.T=f}}else try{f=r(u,o),ng(e,n,f)}catch(U){Zu(e,n,U)}}function ng(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){ag(e,n,o)},function(o){return Zu(e,n,o)}):ag(e,n,r)}function ag(e,n,r){n.status="fulfilled",n.value=r,rg(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,tg(e,r)))}function Zu(e,n,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,rg(n),n=n.next;while(n!==o)}e.action=null}function rg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ig(e,n){return n}function lg(e,n){if(Le){var r=Ge.formState;if(r!==null){e:{var o=Se;if(Le){if(Qe){t:{for(var u=Qe,f=cn;u.nodeType!==8;){if(!f){u=null;break t}if(u=dn(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Qe=dn(u.nextSibling),o=u.data==="F!";break e}}da(o)}o=!1}o&&(n=r[0])}}return r=Ot(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ig,lastRenderedState:n},r.queue=o,r=kg.bind(null,Se,o),o.dispatch=r,o=Qu(!1),f=td.bind(null,Se,!1,o.queue),o=Ot(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,r=y_.bind(null,Se,u,f,r),u.dispatch=r,o.memoizedState=e,[n,r,!1]}function og(e){var n=lt();return sg(n,Ve,e)}function sg(e,n,r){if(n=Xu(e,n,ig)[0],e=Zo(Yn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=rl(n)}catch(v){throw v===Qr?Ho:v}else o=n;n=lt();var u=n.queue,f=u.dispatch;return r!==n.memoizedState&&(Se.flags|=2048,Pr(9,{destroy:void 0},w_.bind(null,u,r),null)),[o,f,e]}function w_(e,n){e.action=n}function cg(e){var n=lt(),r=Ve;if(r!==null)return sg(n,r,e);lt(),n=n.memoizedState,r=lt();var o=r.queue.dispatch;return r.memoizedState=e,[n,o,!1]}function Pr(e,n,r,o){return e={tag:e,create:r,deps:o,inst:n,next:null},n=Se.updateQueue,n===null&&(n=Io(),Se.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,n.lastEffect=e),e}function ug(){return lt().memoizedState}function Wo(e,n,r,o){var u=Ot();Se.flags|=e,u.memoizedState=Pr(1|n,{destroy:void 0},r,o===void 0?null:o)}function Ko(e,n,r,o){var u=lt();o=o===void 0?null:o;var f=u.memoizedState.inst;Ve!==null&&o!==null&&Bu(o,Ve.memoizedState.deps)?u.memoizedState=Pr(n,f,r,o):(Se.flags|=e,u.memoizedState=Pr(1|n,f,r,o))}function dg(e,n){Wo(8390656,8,e,n)}function Wu(e,n){Ko(2048,8,e,n)}function x_(e){Se.flags|=4;var n=Se.updateQueue;if(n===null)n=Io(),Se.updateQueue=n,n.events=[e];else{var r=n.events;r===null?n.events=[e]:r.push(e)}}function fg(e){var n=lt().memoizedState;return x_({ref:n,nextImpl:e}),function(){if((He&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}function hg(e,n){return Ko(4,2,e,n)}function mg(e,n){return Ko(4,4,e,n)}function pg(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function gg(e,n,r){r=r!=null?r.concat([e]):null,Ko(4,4,pg.bind(null,n,e),r)}function Ku(){}function vg(e,n){var r=lt();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&Bu(n,o[1])?o[0]:(r.memoizedState=[e,n],e)}function bg(e,n){var r=lt();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&Bu(n,o[1]))return o[0];if(o=e(),ar){la(!0);try{e()}finally{la(!1)}}return r.memoizedState=[o,n],o}function Ju(e,n,r){return r===void 0||(qn&1073741824)!==0&&(Oe&261930)===0?e.memoizedState=n:(e.memoizedState=r,e=yv(),Se.lanes|=e,wa|=e,r)}function yg(e,n,r,o){return Xt(r,n)?r:Wr.current!==null?(e=Ju(e,r,o),Xt(e,n)||(ft=!0),e):(qn&42)===0||(qn&1073741824)!==0&&(Oe&261930)===0?(ft=!0,e.memoizedState=r):(e=yv(),Se.lanes|=e,wa|=e,n)}function wg(e,n,r,o,u){var f=z.p;z.p=f!==0&&8>f?f:8;var v=_.T,S={};_.T=S,td(e,!1,n,r);try{var A=u(),U=_.S;if(U!==null&&U(S,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var q=g_(A,o);il(e,n,q,Jt(e))}else il(e,n,o,Jt(e))}catch(I){il(e,n,{then:function(){},status:"rejected",reason:I},Jt())}finally{z.p=f,v!==null&&S.types!==null&&(v.types=S.types),_.T=v}}function __(){}function Pu(e,n,r,o){if(e.tag!==5)throw Error(l(476));var u=xg(e).queue;wg(e,u,n,R,r===null?__:function(){return _g(e),r(o)})}function xg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:R},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function _g(e){var n=xg(e);n.next===null&&(n=e.alternate.memoizedState),il(e,n.next.queue,{},Jt())}function ed(){return Nt(_l)}function Sg(){return lt().memoizedState}function Tg(){return lt().memoizedState}function S_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=Jt();e=ma(r);var o=pa(n,e,r);o!==null&&(Bt(o,n,r),el(o,n,r)),n={cache:Au()},e.payload=n;return}n=n.return}}function T_(e,n,r){var o=Jt();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Jo(e)?Ng(n,r):(r=bu(e,n,r,o),r!==null&&(Bt(r,e,o),Cg(r,n,o)))}function kg(e,n,r){var o=Jt();il(e,n,r,o)}function il(e,n,r,o){var u={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Jo(e))Ng(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,S=f(v,r);if(u.hasEagerState=!0,u.eagerState=S,Xt(S,v))return Oo(e,n,u,0),Ge===null&&Mo(),!1}catch{}if(r=bu(e,n,u,o),r!==null)return Bt(r,e,o),Cg(r,n,o),!0}return!1}function td(e,n,r,o){if(o={lane:2,revertLane:Rd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Jo(e)){if(n)throw Error(l(479))}else n=bu(e,r,o,2),n!==null&&Bt(n,e,2)}function Jo(e){var n=e.alternate;return e===Se||n!==null&&n===Se}function Ng(e,n){Kr=Go=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Cg(e,n,r){if((r&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,Om(e,r)}}var ll={readContext:Nt,use:Qo,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useLayoutEffect:nt,useInsertionEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useSyncExternalStore:nt,useId:nt,useHostTransitionStatus:nt,useFormState:nt,useActionState:nt,useOptimistic:nt,useMemoCache:nt,useCacheRefresh:nt};ll.useEffectEvent=nt;var Eg={readContext:Nt,use:Qo,useCallback:function(e,n){return Ot().memoizedState=[e,n===void 0?null:n],e},useContext:Nt,useEffect:dg,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,Wo(4194308,4,pg.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Wo(4194308,4,e,n)},useInsertionEffect:function(e,n){Wo(4,2,e,n)},useMemo:function(e,n){var r=Ot();n=n===void 0?null:n;var o=e();if(ar){la(!0);try{e()}finally{la(!1)}}return r.memoizedState=[o,n],o},useReducer:function(e,n,r){var o=Ot();if(r!==void 0){var u=r(n);if(ar){la(!0);try{r(n)}finally{la(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=T_.bind(null,Se,e),[o.memoizedState,e]},useRef:function(e){var n=Ot();return e={current:e},n.memoizedState=e},useState:function(e){e=Qu(e);var n=e.queue,r=kg.bind(null,Se,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:Ku,useDeferredValue:function(e,n){var r=Ot();return Ju(r,e,n)},useTransition:function(){var e=Qu(!1);return e=wg.bind(null,Se,e.queue,!0,!1),Ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var o=Se,u=Ot();if(Le){if(r===void 0)throw Error(l(407));r=r()}else{if(r=n(),Ge===null)throw Error(l(349));(Oe&127)!==0||Zp(o,n,r)}u.memoizedState=r;var f={value:r,getSnapshot:n};return u.queue=f,dg(Kp.bind(null,o,f,e),[e]),o.flags|=2048,Pr(9,{destroy:void 0},Wp.bind(null,o,f,r,n),null),r},useId:function(){var e=Ot(),n=Ge.identifierPrefix;if(Le){var r=En,o=Cn;r=(o&~(1<<32-Gt(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=Xo++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=v_++,n="_"+n+"r_"+r.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ed,useFormState:lg,useActionState:lg,useOptimistic:function(e){var n=Ot();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=td.bind(null,Se,!0,r),r.dispatch=n,[e,n]},useMemoCache:Gu,useCacheRefresh:function(){return Ot().memoizedState=S_.bind(null,Se)},useEffectEvent:function(e){var n=Ot(),r={impl:e};return n.memoizedState=r,function(){if((He&2)!==0)throw Error(l(440));return r.impl.apply(void 0,arguments)}}},nd={readContext:Nt,use:Qo,useCallback:vg,useContext:Nt,useEffect:Wu,useImperativeHandle:gg,useInsertionEffect:hg,useLayoutEffect:mg,useMemo:bg,useReducer:Zo,useRef:ug,useState:function(){return Zo(Yn)},useDebugValue:Ku,useDeferredValue:function(e,n){var r=lt();return yg(r,Ve.memoizedState,e,n)},useTransition:function(){var e=Zo(Yn)[0],n=lt().memoizedState;return[typeof e=="boolean"?e:rl(e),n]},useSyncExternalStore:Qp,useId:Sg,useHostTransitionStatus:ed,useFormState:og,useActionState:og,useOptimistic:function(e,n){var r=lt();return eg(r,Ve,e,n)},useMemoCache:Gu,useCacheRefresh:Tg};nd.useEffectEvent=fg;var Ag={readContext:Nt,use:Qo,useCallback:vg,useContext:Nt,useEffect:Wu,useImperativeHandle:gg,useInsertionEffect:hg,useLayoutEffect:mg,useMemo:bg,useReducer:Iu,useRef:ug,useState:function(){return Iu(Yn)},useDebugValue:Ku,useDeferredValue:function(e,n){var r=lt();return Ve===null?Ju(r,e,n):yg(r,Ve.memoizedState,e,n)},useTransition:function(){var e=Iu(Yn)[0],n=lt().memoizedState;return[typeof e=="boolean"?e:rl(e),n]},useSyncExternalStore:Qp,useId:Sg,useHostTransitionStatus:ed,useFormState:cg,useActionState:cg,useOptimistic:function(e,n){var r=lt();return Ve!==null?eg(r,Ve,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Gu,useCacheRefresh:Tg};Ag.useEffectEvent=fg;function ad(e,n,r,o){n=e.memoizedState,r=r(o,n),r=r==null?n:w({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var rd={enqueueSetState:function(e,n,r){e=e._reactInternals;var o=Jt(),u=ma(o);u.payload=n,r!=null&&(u.callback=r),n=pa(e,u,o),n!==null&&(Bt(n,e,o),el(n,e,o))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var o=Jt(),u=ma(o);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=pa(e,u,o),n!==null&&(Bt(n,e,o),el(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Jt(),o=ma(r);o.tag=2,n!=null&&(o.callback=n),n=pa(e,o,r),n!==null&&(Bt(n,e,r),el(n,e,r))}};function zg(e,n,r,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!Xi(r,o)||!Xi(u,f):!0}function Mg(e,n,r,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==e&&rd.enqueueReplaceState(n,n.state,null)}function rr(e,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(e=e.defaultProps){r===n&&(r=w({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}function Og(e){zo(e)}function Rg(e){console.error(e)}function Dg(e){zo(e)}function Po(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function $g(e,n,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function id(e,n,r){return r=ma(r),r.tag=3,r.payload={element:null},r.callback=function(){Po(e,n)},r}function Lg(e){return e=ma(e),e.tag=3,e}function jg(e,n,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){$g(n,r,o)}}var v=r.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){$g(n,r,o),typeof u!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var S=o.stack;this.componentDidCatch(o.value,{componentStack:S!==null?S:""})})}function k_(e,n,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&Gr(n,r,u,!0),r=Qt.current,r!==null){switch(r.tag){case 31:case 13:return un===null?ds():r.alternate===null&&at===0&&(at=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===Bo?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),zd(e,o,u)),!1;case 22:return r.flags|=65536,o===Bo?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),zd(e,o,u)),!1}throw Error(l(435,r.tag))}return zd(e,o,u),ds(),!1}if(Le)return n=Qt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Tu&&(e=Error(l(422),{cause:o}),Zi(ln(e,r)))):(o!==Tu&&(n=Error(l(423),{cause:o}),Zi(ln(n,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ln(o,r),u=id(e.stateNode,o,u),$u(e,u),at!==4&&(at=2)),!1;var f=Error(l(520),{cause:o});if(f=ln(f,r),ml===null?ml=[f]:ml.push(f),at!==4&&(at=2),n===null)return!0;o=ln(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=id(r.stateNode,o,e),$u(r,e),!1;case 1:if(n=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(xa===null||!xa.has(f))))return r.flags|=65536,u&=-u,r.lanes|=u,u=Lg(u),jg(u,e,r,o),$u(r,u),!1}r=r.return}while(r!==null);return!1}var ld=Error(l(461)),ft=!1;function Ct(e,n,r,o){n.child=e===null?Fp(n,null,r,o):nr(n,e.child,r,o)}function Ug(e,n,r,o,u){r=r.render;var f=n.ref;if("ref"in o){var v={};for(var S in o)S!=="ref"&&(v[S]=o[S])}else v=o;return Ja(n),o=Fu(e,n,r,v,f,u),S=Vu(),e!==null&&!ft?(qu(e,n,u),Gn(e,n,u)):(Le&&S&&_u(n),n.flags|=1,Ct(e,n,o,u),n.child)}function Hg(e,n,r,o,u){if(e===null){var f=r.type;return typeof f=="function"&&!yu(f)&&f.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=f,Bg(e,n,f,o,u)):(e=Do(r.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!md(e,u)){var v=f.memoizedProps;if(r=r.compare,r=r!==null?r:Xi,r(v,o)&&e.ref===n.ref)return Gn(e,n,u)}return n.flags|=1,e=Hn(f,o),e.ref=n.ref,e.return=n,n.child=e}function Bg(e,n,r,o,u){if(e!==null){var f=e.memoizedProps;if(Xi(f,o)&&e.ref===n.ref)if(ft=!1,n.pendingProps=o=f,md(e,u))(e.flags&131072)!==0&&(ft=!0);else return n.lanes=e.lanes,Gn(e,n,u)}return od(e,n,r,o,u)}function Fg(e,n,r,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|r:r,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Vg(e,n,f,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Uo(n,f!==null?f.cachePool:null),f!==null?Yp(n,f):ju(),Gp(n);else return o=n.lanes=536870912,Vg(e,n,f!==null?f.baseLanes|r:r,r,o)}else f!==null?(Uo(n,f.cachePool),Yp(n,f),va(),n.memoizedState=null):(e!==null&&Uo(n,null),ju(),va());return Ct(e,n,u,r),n.child}function ol(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Vg(e,n,r,o,u){var f=Mu();return f=f===null?null:{parent:ut._currentValue,pool:f},n.memoizedState={baseLanes:r,cachePool:f},e!==null&&Uo(n,null),ju(),Gp(n),e!==null&&Gr(e,n,o,!0),n.childLanes=u,null}function es(e,n){return n=ns({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function qg(e,n,r){return nr(n,e.child,null,r),e=es(n,n.pendingProps),e.flags|=2,Zt(n),n.memoizedState=null,e}function N_(e,n,r){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Le){if(o.mode==="hidden")return e=es(n,o),n.lanes=536870912,ol(null,e);if(Hu(n),(e=Qe)?(e=t0(e,cn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ca!==null?{id:Cn,overflow:En}:null,retryLane:536870912,hydrationErrors:null},r=Np(e),r.return=n,n.child=r,kt=n,Qe=null)):e=null,e===null)throw da(n);return n.lanes=536870912,null}return es(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Hu(n),u)if(n.flags&256)n.flags&=-257,n=qg(e,n,r);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(l(558));else if(ft||Gr(e,n,r,!1),u=(r&e.childLanes)!==0,ft||u){if(o=Ge,o!==null&&(v=Rm(o,r),v!==0&&v!==f.retryLane))throw f.retryLane=v,Qa(e,v),Bt(o,e,v),ld;ds(),n=qg(e,n,r)}else e=f.treeContext,Qe=dn(v.nextSibling),kt=n,Le=!0,ua=null,cn=!1,e!==null&&Ap(n,e),n=es(n,o),n.flags|=4096;return n}return e=Hn(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function ts(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(l(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function od(e,n,r,o,u){return Ja(n),r=Fu(e,n,r,o,void 0,u),o=Vu(),e!==null&&!ft?(qu(e,n,u),Gn(e,n,u)):(Le&&o&&_u(n),n.flags|=1,Ct(e,n,r,u),n.child)}function Yg(e,n,r,o,u,f){return Ja(n),n.updateQueue=null,r=Ip(n,o,r,u),Xp(e),o=Vu(),e!==null&&!ft?(qu(e,n,f),Gn(e,n,f)):(Le&&o&&_u(n),n.flags|=1,Ct(e,n,r,f),n.child)}function Gg(e,n,r,o,u){if(Ja(n),n.stateNode===null){var f=Fr,v=r.contextType;typeof v=="object"&&v!==null&&(f=Nt(v)),f=new r(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=rd,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ru(n),v=r.contextType,f.context=typeof v=="object"&&v!==null?Nt(v):Fr,f.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(ad(n,r,v,o),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&rd.enqueueReplaceState(f,f.state,null),nl(n,o,f,u),tl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var S=n.memoizedProps,A=rr(r,S);f.props=A;var U=f.context,q=r.contextType;v=Fr,typeof q=="object"&&q!==null&&(v=Nt(q));var I=r.getDerivedStateFromProps;q=typeof I=="function"||typeof f.getSnapshotBeforeUpdate=="function",S=n.pendingProps!==S,q||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S||U!==v)&&Mg(n,f,o,v),ha=!1;var B=n.memoizedState;f.state=B,nl(n,o,f,u),tl(),U=n.memoizedState,S||B!==U||ha?(typeof I=="function"&&(ad(n,r,I,o),U=n.memoizedState),(A=ha||zg(n,r,A,o,B,U,v))?(q||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=U),f.props=o,f.state=U,f.context=v,o=A):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Du(e,n),v=n.memoizedProps,q=rr(r,v),f.props=q,I=n.pendingProps,B=f.context,U=r.contextType,A=Fr,typeof U=="object"&&U!==null&&(A=Nt(U)),S=r.getDerivedStateFromProps,(U=typeof S=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==I||B!==A)&&Mg(n,f,o,A),ha=!1,B=n.memoizedState,f.state=B,nl(n,o,f,u),tl();var V=n.memoizedState;v!==I||B!==V||ha||e!==null&&e.dependencies!==null&&Lo(e.dependencies)?(typeof S=="function"&&(ad(n,r,S,o),V=n.memoizedState),(q=ha||zg(n,r,q,o,B,V,A)||e!==null&&e.dependencies!==null&&Lo(e.dependencies))?(U||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,V,A),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,V,A)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=V),f.props=o,f.state=V,f.context=A,o=q):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,ts(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=nr(n,e.child,null,u),n.child=nr(n,null,r,u)):Ct(e,n,r,u),n.memoizedState=f.state,e=n.child):e=Gn(e,n,u),e}function Xg(e,n,r,o){return Wa(),n.flags|=256,Ct(e,n,r,o),n.child}var sd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cd(e){return{baseLanes:e,cachePool:$p()}}function ud(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=Kt),e}function Ig(e,n,r){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(it.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Le){if(u?ga(n):va(),(e=Qe)?(e=t0(e,cn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ca!==null?{id:Cn,overflow:En}:null,retryLane:536870912,hydrationErrors:null},r=Np(e),r.return=n,n.child=r,kt=n,Qe=null)):e=null,e===null)throw da(n);return Xd(e)?n.lanes=32:n.lanes=536870912,null}var S=o.children;return o=o.fallback,u?(va(),u=n.mode,S=ns({mode:"hidden",children:S},u),o=Za(o,u,r,null),S.return=n,o.return=n,S.sibling=o,n.child=S,o=n.child,o.memoizedState=cd(r),o.childLanes=ud(e,v,r),n.memoizedState=sd,ol(null,o)):(ga(n),dd(n,S))}var A=e.memoizedState;if(A!==null&&(S=A.dehydrated,S!==null)){if(f)n.flags&256?(ga(n),n.flags&=-257,n=fd(e,n,r)):n.memoizedState!==null?(va(),n.child=e.child,n.flags|=128,n=null):(va(),S=o.fallback,u=n.mode,o=ns({mode:"visible",children:o.children},u),S=Za(S,u,r,null),S.flags|=2,o.return=n,S.return=n,o.sibling=S,n.child=o,nr(n,e.child,null,r),o=n.child,o.memoizedState=cd(r),o.childLanes=ud(e,v,r),n.memoizedState=sd,n=ol(null,o));else if(ga(n),Xd(S)){if(v=S.nextSibling&&S.nextSibling.dataset,v)var U=v.dgst;v=U,o=Error(l(419)),o.stack="",o.digest=v,Zi({value:o,source:null,stack:null}),n=fd(e,n,r)}else if(ft||Gr(e,n,r,!1),v=(r&e.childLanes)!==0,ft||v){if(v=Ge,v!==null&&(o=Rm(v,r),o!==0&&o!==A.retryLane))throw A.retryLane=o,Qa(e,o),Bt(v,e,o),ld;Gd(S)||ds(),n=fd(e,n,r)}else Gd(S)?(n.flags|=192,n.child=e.child,n=null):(e=A.treeContext,Qe=dn(S.nextSibling),kt=n,Le=!0,ua=null,cn=!1,e!==null&&Ap(n,e),n=dd(n,o.children),n.flags|=4096);return n}return u?(va(),S=o.fallback,u=n.mode,A=e.child,U=A.sibling,o=Hn(A,{mode:"hidden",children:o.children}),o.subtreeFlags=A.subtreeFlags&65011712,U!==null?S=Hn(U,S):(S=Za(S,u,r,null),S.flags|=2),S.return=n,o.return=n,o.sibling=S,n.child=o,ol(null,o),o=n.child,S=e.child.memoizedState,S===null?S=cd(r):(u=S.cachePool,u!==null?(A=ut._currentValue,u=u.parent!==A?{parent:A,pool:A}:u):u=$p(),S={baseLanes:S.baseLanes|r,cachePool:u}),o.memoizedState=S,o.childLanes=ud(e,v,r),n.memoizedState=sd,ol(e.child,o)):(ga(n),r=e.child,e=r.sibling,r=Hn(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=r,n.memoizedState=null,r)}function dd(e,n){return n=ns({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ns(e,n){return e=It(22,e,null,n),e.lanes=0,e}function fd(e,n,r){return nr(n,e.child,null,r),e=dd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Qg(e,n,r){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Cu(e.return,n,r)}function hd(e,n,r,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=r,v.tailMode=u,v.treeForkCount=f)}function Zg(e,n,r){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=it.current,S=(v&2)!==0;if(S?(v=v&1|2,n.flags|=128):v&=1,W(it,v),Ct(e,n,o,r),o=Le?Qi:0,!S&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qg(e,r,n);else if(e.tag===19)Qg(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(r=n.child,u=null;r!==null;)e=r.alternate,e!==null&&Yo(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),hd(n,!1,u,r,f,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Yo(e)===null){n.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}hd(n,!0,r,null,f,o);break;case"together":hd(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Gn(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),wa|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(Gr(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(l(153));if(n.child!==null){for(e=n.child,r=Hn(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Hn(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function md(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Lo(e)))}function C_(e,n,r){switch(n.tag){case 3:ve(n,n.stateNode.containerInfo),fa(n,ut,e.memoizedState.cache),Wa();break;case 27:case 5:et(n);break;case 4:ve(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ga(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Ig(e,n,r):(ga(n),e=Gn(e,n,r),e!==null?e.sibling:null);ga(n);break;case 19:var u=(e.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(Gr(e,n,r,!1),o=(r&n.childLanes)!==0),u){if(o)return Zg(e,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),W(it,it.current),o)break;return null;case 22:return n.lanes=0,Fg(e,n,r,n.pendingProps);case 24:fa(n,ut,e.memoizedState.cache)}return Gn(e,n,r)}function Wg(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)ft=!0;else{if(!md(e,r)&&(n.flags&128)===0)return ft=!1,C_(e,n,r);ft=(e.flags&131072)!==0}else ft=!1,Le&&(n.flags&1048576)!==0&&Ep(n,Qi,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=er(n.elementType),n.type=e,typeof e=="function")yu(e)?(o=rr(e,o),n.tag=1,n=Gg(null,n,e,o,r)):(n.tag=0,n=od(null,n,e,o,r));else{if(e!=null){var u=e.$$typeof;if(u===Y){n.tag=11,n=Ug(null,n,e,o,r);break e}else if(u===P){n.tag=14,n=Hg(null,n,e,o,r);break e}}throw n=ze(e)||e,Error(l(306,n,""))}}return n;case 0:return od(e,n,n.type,n.pendingProps,r);case 1:return o=n.type,u=rr(o,n.pendingProps),Gg(e,n,o,u,r);case 3:e:{if(ve(n,n.stateNode.containerInfo),e===null)throw Error(l(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Du(e,n),nl(n,o,null,r);var v=n.memoizedState;if(o=v.cache,fa(n,ut,o),o!==f.cache&&Eu(n,[ut],r,!0),tl(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Xg(e,n,o,r);break e}else if(o!==u){u=ln(Error(l(424)),n),Zi(u),n=Xg(e,n,o,r);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Qe=dn(e.firstChild),kt=n,Le=!0,ua=null,cn=!0,r=Fp(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Wa(),o===u){n=Gn(e,n,r);break e}Ct(e,n,o,r)}n=n.child}return n;case 26:return ts(e,n),e===null?(r=o0(n.type,null,n.pendingProps,null))?n.memoizedState=r:Le||(r=n.type,e=n.pendingProps,o=bs(te.current).createElement(r),o[Tt]=n,o[Dt]=e,Et(o,r,e),yt(o),n.stateNode=o):n.memoizedState=o0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return et(n),e===null&&Le&&(o=n.stateNode=r0(n.type,n.pendingProps,te.current),kt=n,cn=!0,u=Qe,ka(n.type)?(Id=u,Qe=dn(o.firstChild)):Qe=u),Ct(e,n,n.pendingProps.children,r),ts(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Le&&((u=o=Qe)&&(o=a2(o,n.type,n.pendingProps,cn),o!==null?(n.stateNode=o,kt=n,Qe=dn(o.firstChild),cn=!1,u=!0):u=!1),u||da(n)),et(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,Vd(u,f)?o=null:v!==null&&Vd(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Fu(e,n,b_,null,null,r),_l._currentValue=u),ts(e,n),Ct(e,n,o,r),n.child;case 6:return e===null&&Le&&((e=r=Qe)&&(r=r2(r,n.pendingProps,cn),r!==null?(n.stateNode=r,kt=n,Qe=null,e=!0):e=!1),e||da(n)),null;case 13:return Ig(e,n,r);case 4:return ve(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=nr(n,null,o,r):Ct(e,n,o,r),n.child;case 11:return Ug(e,n,n.type,n.pendingProps,r);case 7:return Ct(e,n,n.pendingProps,r),n.child;case 8:return Ct(e,n,n.pendingProps.children,r),n.child;case 12:return Ct(e,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,fa(n,n.type,o.value),Ct(e,n,o.children,r),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ja(n),u=Nt(u),o=o(u),n.flags|=1,Ct(e,n,o,r),n.child;case 14:return Hg(e,n,n.type,n.pendingProps,r);case 15:return Bg(e,n,n.type,n.pendingProps,r);case 19:return Zg(e,n,r);case 31:return N_(e,n,r);case 22:return Fg(e,n,r,n.pendingProps);case 24:return Ja(n),o=Nt(ut),e===null?(u=Mu(),u===null&&(u=Ge,f=Au(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=r),u=f),n.memoizedState={parent:o,cache:u},Ru(n),fa(n,ut,u)):((e.lanes&r)!==0&&(Du(e,n),nl(n,null,null,r),tl()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),fa(n,ut,o)):(o=f.cache,fa(n,ut,o),o!==u.cache&&Eu(n,[ut],r,!0))),Ct(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(l(156,n.tag))}function Xn(e){e.flags|=4}function pd(e,n,r,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Sv())e.flags|=8192;else throw tr=Bo,Ou}else e.flags&=-16777217}function Kg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!f0(n))if(Sv())e.flags|=8192;else throw tr=Bo,Ou}function as(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?zm():536870912,e.lanes|=n,ai|=n)}function sl(e,n){if(!Le)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(n)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=r,n}function E_(e,n,r){var o=n.pendingProps;switch(Su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return r=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vn(ut),le(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yr(n)?Xn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ku())),Ze(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Xn(n),f!==null?(Ze(n),Kg(n,f)):(Ze(n),pd(n,u,null,o,r))):f?f!==e.memoizedState?(Xn(n),Ze(n),Kg(n,f)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Xn(n),Ze(n),pd(n,u,e,o,r)),null;case 27:if(rt(n),r=te.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Xn(n);else{if(!o){if(n.stateNode===null)throw Error(l(166));return Ze(n),null}e=K.current,Yr(n)?zp(n):(e=r0(u,o,r),n.stateNode=e,Xn(n))}return Ze(n),null;case 5:if(rt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Xn(n);else{if(!o){if(n.stateNode===null)throw Error(l(166));return Ze(n),null}if(f=K.current,Yr(n))zp(n);else{var v=bs(te.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[Tt]=n,f[Dt]=o;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Et(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Xn(n)}}return Ze(n),pd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,r),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Xn(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(l(166));if(e=te.current,Yr(n)){if(e=n.stateNode,r=n.memoizedProps,o=null,u=kt,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Tt]=n,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||Iv(e.nodeValue,r)),e||da(n,!0)}else e=bs(e).createTextNode(o),e[Tt]=n,n.stateNode=e}return Ze(n),null;case 31:if(r=n.memoizedState,e===null||e.memoizedState!==null){if(o=Yr(n),r!==null){if(e===null){if(!o)throw Error(l(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[Tt]=n}else Wa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else r=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return n.flags&256?(Zt(n),n):(Zt(n),null);if((n.flags&128)!==0)throw Error(l(558))}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Yr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(l(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(l(317));u[Tt]=n}else Wa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Zt(n),n):(Zt(n),null)}return Zt(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,e=e!==null&&e.memoizedState!==null,r&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),r!==e&&r&&(n.child.flags|=8192),as(n,n.updateQueue),Ze(n),null);case 4:return le(),e===null&&jd(n.stateNode.containerInfo),Ze(n),null;case 10:return Vn(n.type),Ze(n),null;case 19:if(L(it),o=n.memoizedState,o===null)return Ze(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)sl(o,!1);else{if(at!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Yo(e),f!==null){for(n.flags|=128,sl(o,!1),e=f.updateQueue,n.updateQueue=e,as(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)kp(r,e),r=r.sibling;return W(it,it.current&1|2),Le&&Bn(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&qt()>ss&&(n.flags|=128,u=!0,sl(o,!1),n.lanes=4194304)}else{if(!u)if(e=Yo(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,as(n,e),sl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Le)return Ze(n),null}else 2*qt()-o.renderingStartTime>ss&&r!==536870912&&(n.flags|=128,u=!0,sl(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=qt(),e.sibling=null,r=it.current,W(it,u?r&1|2:r&1),Le&&Bn(n,o.treeForkCount),e):(Ze(n),null);case 22:case 23:return Zt(n),Uu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),r=n.updateQueue,r!==null&&as(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),e!==null&&L(Pa),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Vn(ut),Ze(n),null;case 25:return null;case 30:return null}throw Error(l(156,n.tag))}function A_(e,n){switch(Su(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vn(ut),le(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return rt(n),null;case 31:if(n.memoizedState!==null){if(Zt(n),n.alternate===null)throw Error(l(340));Wa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Zt(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(l(340));Wa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return L(it),null;case 4:return le(),null;case 10:return Vn(n.type),null;case 22:case 23:return Zt(n),Uu(),e!==null&&L(Pa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vn(ut),null;case 25:return null;default:return null}}function Jg(e,n){switch(Su(n),n.tag){case 3:Vn(ut),le();break;case 26:case 27:case 5:rt(n);break;case 4:le();break;case 31:n.memoizedState!==null&&Zt(n);break;case 13:Zt(n);break;case 19:L(it);break;case 10:Vn(n.type);break;case 22:case 23:Zt(n),Uu(),e!==null&&L(Pa);break;case 24:Vn(ut)}}function cl(e,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&e)===e){o=void 0;var f=r.create,v=r.inst;o=f(),v.destroy=o}r=r.next}while(r!==u)}}catch(S){Fe(n,n.return,S)}}function ba(e,n,r){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,S=v.destroy;if(S!==void 0){v.destroy=void 0,u=n;var A=r,U=S;try{U()}catch(q){Fe(u,A,q)}}}o=o.next}while(o!==f)}}catch(q){Fe(n,n.return,q)}}function Pg(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{qp(n,r)}catch(o){Fe(e,e.return,o)}}}function ev(e,n,r){r.props=rr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){Fe(e,n,o)}}function ul(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof r=="function"?e.refCleanup=r(o):r.current=o}}catch(u){Fe(e,n,u)}}function An(e,n){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Fe(e,n,u)}else r.current=null}function tv(e){var n=e.type,r=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){Fe(e,e.return,u)}}function gd(e,n,r){try{var o=e.stateNode;K_(o,e.type,r,n),o[Dt]=n}catch(u){Fe(e,e.return,u)}}function nv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function vd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bd(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=jn));else if(o!==4&&(o===27&&ka(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(bd(e,n,r),e=e.sibling;e!==null;)bd(e,n,r),e=e.sibling}function rs(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(o!==4&&(o===27&&ka(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(rs(e,n,r),e=e.sibling;e!==null;)rs(e,n,r),e=e.sibling}function av(e){var n=e.stateNode,r=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Et(n,o,r),n[Tt]=e,n[Dt]=r}catch(f){Fe(e,e.return,f)}}var In=!1,ht=!1,yd=!1,rv=typeof WeakSet=="function"?WeakSet:Set,wt=null;function z_(e,n){if(e=e.containerInfo,Bd=ks,e=gp(e),fu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break e}var v=0,S=-1,A=-1,U=0,q=0,I=e,B=null;t:for(;;){for(var V;I!==r||u!==0&&I.nodeType!==3||(S=v+u),I!==f||o!==0&&I.nodeType!==3||(A=v+o),I.nodeType===3&&(v+=I.nodeValue.length),(V=I.firstChild)!==null;)B=I,I=V;for(;;){if(I===e)break t;if(B===r&&++U===u&&(S=v),B===f&&++q===o&&(A=v),(V=I.nextSibling)!==null)break;I=B,B=I.parentNode}I=V}r=S===-1||A===-1?null:{start:S,end:A}}else r=null}r=r||{start:0,end:0}}else r=null;for(Fd={focusedElem:e,selectionRange:r},ks=!1,wt=n;wt!==null;)if(n=wt,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,wt=e;else for(;wt!==null;){switch(n=wt,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)u=e[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,r=n,u=f.memoizedProps,f=f.memoizedState,o=r.stateNode;try{var oe=rr(r.type,u);e=o.getSnapshotBeforeUpdate(oe,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(be){Fe(r,r.return,be)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)Yd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=n.sibling,e!==null){e.return=n.return,wt=e;break}wt=n.return}}function iv(e,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Zn(e,r),o&4&&cl(5,r);break;case 1:if(Zn(e,r),o&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(v){Fe(r,r.return,v)}else{var u=rr(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Fe(r,r.return,v)}}o&64&&Pg(r),o&512&&ul(r,r.return);break;case 3:if(Zn(e,r),o&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{qp(e,n)}catch(v){Fe(r,r.return,v)}}break;case 27:n===null&&o&4&&av(r);case 26:case 5:Zn(e,r),n===null&&o&4&&tv(r),o&512&&ul(r,r.return);break;case 12:Zn(e,r);break;case 31:Zn(e,r),o&4&&sv(e,r);break;case 13:Zn(e,r),o&4&&cv(e,r),o&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=H_.bind(null,r),i2(e,r))));break;case 22:if(o=r.memoizedState!==null||In,!o){n=n!==null&&n.memoizedState!==null||ht,u=In;var f=ht;In=o,(ht=n)&&!f?Wn(e,r,(r.subtreeFlags&8772)!==0):Zn(e,r),In=u,ht=f}break;case 30:break;default:Zn(e,r)}}function lv(e){var n=e.alternate;n!==null&&(e.alternate=null,lv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Zc(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,Lt=!1;function Qn(e,n,r){for(r=r.child;r!==null;)ov(e,n,r),r=r.sibling}function ov(e,n,r){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Di,r)}catch{}switch(r.tag){case 26:ht||An(r,n),Qn(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:ht||An(r,n);var o=Ke,u=Lt;ka(r.type)&&(Ke=r.stateNode,Lt=!1),Qn(e,n,r),yl(r.stateNode),Ke=o,Lt=u;break;case 5:ht||An(r,n);case 6:if(o=Ke,u=Lt,Ke=null,Qn(e,n,r),Ke=o,Lt=u,Ke!==null)if(Lt)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(r.stateNode)}catch(f){Fe(r,n,f)}else try{Ke.removeChild(r.stateNode)}catch(f){Fe(r,n,f)}break;case 18:Ke!==null&&(Lt?(e=Ke,Pv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),di(e)):Pv(Ke,r.stateNode));break;case 4:o=Ke,u=Lt,Ke=r.stateNode.containerInfo,Lt=!0,Qn(e,n,r),Ke=o,Lt=u;break;case 0:case 11:case 14:case 15:ba(2,r,n),ht||ba(4,r,n),Qn(e,n,r);break;case 1:ht||(An(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&ev(r,n,o)),Qn(e,n,r);break;case 21:Qn(e,n,r);break;case 22:ht=(o=ht)||r.memoizedState!==null,Qn(e,n,r),ht=o;break;default:Qn(e,n,r)}}function sv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{di(e)}catch(r){Fe(n,n.return,r)}}}function cv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{di(e)}catch(r){Fe(n,n.return,r)}}function M_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new rv),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new rv),n;default:throw Error(l(435,e.tag))}}function is(e,n){var r=M_(e);n.forEach(function(o){if(!r.has(o)){r.add(o);var u=B_.bind(null,e,o);o.then(u,u)}})}function jt(e,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],f=e,v=n,S=v;e:for(;S!==null;){switch(S.tag){case 27:if(ka(S.type)){Ke=S.stateNode,Lt=!1;break e}break;case 5:Ke=S.stateNode,Lt=!1;break e;case 3:case 4:Ke=S.stateNode.containerInfo,Lt=!0;break e}S=S.return}if(Ke===null)throw Error(l(160));ov(f,v,u),Ke=null,Lt=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)uv(n,e),n=n.sibling}var bn=null;function uv(e,n){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jt(n,e),Ut(e),o&4&&(ba(3,e,e.return),cl(3,e),ba(5,e,e.return));break;case 1:jt(n,e),Ut(e),o&512&&(ht||r===null||An(r,r.return)),o&64&&In&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=bn;if(jt(n,e),Ut(e),o&512&&(ht||r===null||An(r,r.return)),o&4){var f=r!==null?r.memoizedState:null;if(o=e.memoizedState,r===null)if(o===null)if(e.stateNode===null){e:{o=e.type,r=e.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ji]||f[Tt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Et(f,o,r),f[Tt]=e,yt(f),o=f;break e;case"link":var v=u0("link","href",u).get(o+(r.href||""));if(v){for(var S=0;S<v.length;S++)if(f=v[S],f.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){v.splice(S,1);break t}}f=u.createElement(o),Et(f,o,r),u.head.appendChild(f);break;case"meta":if(v=u0("meta","content",u).get(o+(r.content||""))){for(S=0;S<v.length;S++)if(f=v[S],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){v.splice(S,1);break t}}f=u.createElement(o),Et(f,o,r),u.head.appendChild(f);break;default:throw Error(l(468,o))}f[Tt]=e,yt(f),o=f}e.stateNode=o}else d0(u,e.type,e.stateNode);else e.stateNode=c0(u,o,e.memoizedProps);else f!==o?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,o===null?d0(u,e.type,e.stateNode):c0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&gd(e,e.memoizedProps,r.memoizedProps)}break;case 27:jt(n,e),Ut(e),o&512&&(ht||r===null||An(r,r.return)),r!==null&&o&4&&gd(e,e.memoizedProps,r.memoizedProps);break;case 5:if(jt(n,e),Ut(e),o&512&&(ht||r===null||An(r,r.return)),e.flags&32){u=e.stateNode;try{Dr(u,"")}catch(oe){Fe(e,e.return,oe)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,gd(e,u,r!==null?r.memoizedProps:u)),o&1024&&(yd=!0);break;case 6:if(jt(n,e),Ut(e),o&4){if(e.stateNode===null)throw Error(l(162));o=e.memoizedProps,r=e.stateNode;try{r.nodeValue=o}catch(oe){Fe(e,e.return,oe)}}break;case 3:if(xs=null,u=bn,bn=ys(n.containerInfo),jt(n,e),bn=u,Ut(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{di(n.containerInfo)}catch(oe){Fe(e,e.return,oe)}yd&&(yd=!1,dv(e));break;case 4:o=bn,bn=ys(e.stateNode.containerInfo),jt(n,e),Ut(e),bn=o;break;case 12:jt(n,e),Ut(e);break;case 31:jt(n,e),Ut(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,is(e,o)));break;case 13:jt(n,e),Ut(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(os=qt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,is(e,o)));break;case 22:u=e.memoizedState!==null;var A=r!==null&&r.memoizedState!==null,U=In,q=ht;if(In=U||u,ht=q||A,jt(n,e),ht=q,In=U,Ut(e),o&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||A||In||ht||ir(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){A=r=n;try{if(f=A.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{S=A.stateNode;var I=A.memoizedProps.style,B=I!=null&&I.hasOwnProperty("display")?I.display:null;S.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(oe){Fe(A,A.return,oe)}}}else if(n.tag===6){if(r===null){A=n;try{A.stateNode.nodeValue=u?"":A.memoizedProps}catch(oe){Fe(A,A.return,oe)}}}else if(n.tag===18){if(r===null){A=n;try{var V=A.stateNode;u?e0(V,!0):e0(A.stateNode,!1)}catch(oe){Fe(A,A.return,oe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,is(e,r))));break;case 19:jt(n,e),Ut(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,is(e,o)));break;case 30:break;case 21:break;default:jt(n,e),Ut(e)}}function Ut(e){var n=e.flags;if(n&2){try{for(var r,o=e.return;o!==null;){if(nv(o)){r=o;break}o=o.return}if(r==null)throw Error(l(160));switch(r.tag){case 27:var u=r.stateNode,f=vd(e);rs(e,f,u);break;case 5:var v=r.stateNode;r.flags&32&&(Dr(v,""),r.flags&=-33);var S=vd(e);rs(e,S,v);break;case 3:case 4:var A=r.stateNode.containerInfo,U=vd(e);bd(e,U,A);break;default:throw Error(l(161))}}catch(q){Fe(e,e.return,q)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function dv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;dv(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Zn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)iv(e,n.alternate,n),n=n.sibling}function ir(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ba(4,n,n.return),ir(n);break;case 1:An(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&ev(n,n.return,r),ir(n);break;case 27:yl(n.stateNode);case 26:case 5:An(n,n.return),ir(n);break;case 22:n.memoizedState===null&&ir(n);break;case 30:ir(n);break;default:ir(n)}e=e.sibling}}function Wn(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Wn(u,f,r),cl(4,f);break;case 1:if(Wn(u,f,r),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(U){Fe(o,o.return,U)}if(o=f,u=o.updateQueue,u!==null){var S=o.stateNode;try{var A=u.shared.hiddenCallbacks;if(A!==null)for(u.shared.hiddenCallbacks=null,u=0;u<A.length;u++)Vp(A[u],S)}catch(U){Fe(o,o.return,U)}}r&&v&64&&Pg(f),ul(f,f.return);break;case 27:av(f);case 26:case 5:Wn(u,f,r),r&&o===null&&v&4&&tv(f),ul(f,f.return);break;case 12:Wn(u,f,r);break;case 31:Wn(u,f,r),r&&v&4&&sv(u,f);break;case 13:Wn(u,f,r),r&&v&4&&cv(u,f);break;case 22:f.memoizedState===null&&Wn(u,f,r),ul(f,f.return);break;case 30:break;default:Wn(u,f,r)}n=n.sibling}}function wd(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Wi(r))}function xd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Wi(e))}function yn(e,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)fv(e,n,r,o),n=n.sibling}function fv(e,n,r,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:yn(e,n,r,o),u&2048&&cl(9,n);break;case 1:yn(e,n,r,o);break;case 3:yn(e,n,r,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Wi(e)));break;case 12:if(u&2048){yn(e,n,r,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,S=f.onPostCommit;typeof S=="function"&&S(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(A){Fe(n,n.return,A)}}else yn(e,n,r,o);break;case 31:yn(e,n,r,o);break;case 13:yn(e,n,r,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?yn(e,n,r,o):dl(e,n):f._visibility&2?yn(e,n,r,o):(f._visibility|=2,ei(e,n,r,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&wd(v,n);break;case 24:yn(e,n,r,o),u&2048&&xd(n.alternate,n);break;default:yn(e,n,r,o)}}function ei(e,n,r,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,S=r,A=o,U=v.flags;switch(v.tag){case 0:case 11:case 15:ei(f,v,S,A,u),cl(8,v);break;case 23:break;case 22:var q=v.stateNode;v.memoizedState!==null?q._visibility&2?ei(f,v,S,A,u):dl(f,v):(q._visibility|=2,ei(f,v,S,A,u)),u&&U&2048&&wd(v.alternate,v);break;case 24:ei(f,v,S,A,u),u&&U&2048&&xd(v.alternate,v);break;default:ei(f,v,S,A,u)}n=n.sibling}}function dl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,o=n,u=o.flags;switch(o.tag){case 22:dl(r,o),u&2048&&wd(o.alternate,o);break;case 24:dl(r,o),u&2048&&xd(o.alternate,o);break;default:dl(r,o)}n=n.sibling}}var fl=8192;function ti(e,n,r){if(e.subtreeFlags&fl)for(e=e.child;e!==null;)hv(e,n,r),e=e.sibling}function hv(e,n,r){switch(e.tag){case 26:ti(e,n,r),e.flags&fl&&e.memoizedState!==null&&v2(r,bn,e.memoizedState,e.memoizedProps);break;case 5:ti(e,n,r);break;case 3:case 4:var o=bn;bn=ys(e.stateNode.containerInfo),ti(e,n,r),bn=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=fl,fl=16777216,ti(e,n,r),fl=o):ti(e,n,r));break;default:ti(e,n,r)}}function mv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function hl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];wt=o,gv(o,e)}mv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)pv(e),e=e.sibling}function pv(e){switch(e.tag){case 0:case 11:case 15:hl(e),e.flags&2048&&ba(9,e,e.return);break;case 3:hl(e);break;case 12:hl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ls(e)):hl(e);break;default:hl(e)}}function ls(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];wt=o,gv(o,e)}mv(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ba(8,n,n.return),ls(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,ls(n));break;default:ls(n)}e=e.sibling}}function gv(e,n){for(;wt!==null;){var r=wt;switch(r.tag){case 0:case 11:case 15:ba(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Wi(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,wt=o;else e:for(r=e;wt!==null;){o=wt;var u=o.sibling,f=o.return;if(lv(o),o===r){wt=null;break e}if(u!==null){u.return=f,wt=u;break e}wt=f}}}var O_={getCacheForType:function(e){var n=Nt(ut),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r},cacheSignal:function(){return Nt(ut).controller.signal}},R_=typeof WeakMap=="function"?WeakMap:Map,He=0,Ge=null,Ee=null,Oe=0,Be=0,Wt=null,ya=!1,ni=!1,_d=!1,Kn=0,at=0,wa=0,lr=0,Sd=0,Kt=0,ai=0,ml=null,Ht=null,Td=!1,os=0,vv=0,ss=1/0,cs=null,xa=null,pt=0,_a=null,ri=null,Jn=0,kd=0,Nd=null,bv=null,pl=0,Cd=null;function Jt(){return(He&2)!==0&&Oe!==0?Oe&-Oe:_.T!==null?Rd():Dm()}function yv(){if(Kt===0)if((Oe&536870912)===0||Le){var e=vo;vo<<=1,(vo&3932160)===0&&(vo=262144),Kt=e}else Kt=536870912;return e=Qt.current,e!==null&&(e.flags|=32),Kt}function Bt(e,n,r){(e===Ge&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(ii(e,0),Sa(e,Oe,Kt,!1)),Li(e,r),((He&2)===0||e!==Ge)&&(e===Ge&&((He&2)===0&&(lr|=r),at===4&&Sa(e,Oe,Kt,!1)),zn(e))}function wv(e,n,r){if((He&6)!==0)throw Error(l(327));var o=!r&&(n&127)===0&&(n&e.expiredLanes)===0||$i(e,n),u=o?L_(e,n):Ad(e,n,!0),f=o;do{if(u===0){ni&&!o&&Sa(e,n,0,!1);break}else{if(r=e.current.alternate,f&&!D_(r)){u=Ad(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var S=e;u=ml;var A=S.current.memoizedState.isDehydrated;if(A&&(ii(S,v).flags|=256),v=Ad(S,v,!1),v!==2){if(_d&&!A){S.errorRecoveryDisabledLanes|=f,lr|=f,u=4;break e}f=Ht,Ht=u,f!==null&&(Ht===null?Ht=f:Ht.push.apply(Ht,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){ii(e,0),Sa(e,n,0,!0);break}e:{switch(o=e,f=u,f){case 0:case 1:throw Error(l(345));case 4:if((n&4194048)!==n)break;case 6:Sa(o,n,Kt,!ya);break e;case 2:Ht=null;break;case 3:case 5:break;default:throw Error(l(329))}if((n&62914560)===n&&(u=os+300-qt(),10<u)){if(Sa(o,n,Kt,!ya),yo(o,0,!0)!==0)break e;Jn=n,o.timeoutHandle=Kv(xv.bind(null,o,r,Ht,cs,Td,n,Kt,lr,ai,ya,f,"Throttled",-0,0),u);break e}xv(o,r,Ht,cs,Td,n,Kt,lr,ai,ya,f,null,-0,0)}}break}while(!0);zn(e)}function xv(e,n,r,o,u,f,v,S,A,U,q,I,B,V){if(e.timeoutHandle=-1,I=n.subtreeFlags,I&8192||(I&16785408)===16785408){I={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:jn},hv(n,f,I);var oe=(f&62914560)===f?os-qt():(f&4194048)===f?vv-qt():0;if(oe=b2(I,oe),oe!==null){Jn=f,e.cancelPendingCommit=oe(Av.bind(null,e,n,f,r,o,u,v,S,A,q,I,null,B,V)),Sa(e,f,v,!U);return}}Av(e,n,f,r,o,u,v,S,A)}function D_(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],f=u.getSnapshot;u=u.value;try{if(!Xt(f(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Sa(e,n,r,o){n&=~Sd,n&=~lr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Gt(u),v=1<<f;o[f]=-1,u&=~v}r!==0&&Mm(e,r,n)}function us(){return(He&6)===0?(gl(0),!1):!0}function Ed(){if(Ee!==null){if(Be===0)var e=Ee.return;else e=Ee,Fn=Ka=null,Yu(e),Zr=null,Ji=0,e=Ee;for(;e!==null;)Jg(e.alternate,e),e=e.return;Ee=null}}function ii(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,e2(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Jn=0,Ed(),Ge=e,Ee=r=Hn(e.current,null),Oe=n,Be=0,Wt=null,ya=!1,ni=$i(e,n),_d=!1,ai=Kt=Sd=lr=wa=at=0,Ht=ml=null,Td=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Gt(o),f=1<<u;n|=e[u],o&=~f}return Kn=n,Mo(),r}function _v(e,n){Se=null,_.H=ll,n===Qr||n===Ho?(n=Up(),Be=3):n===Ou?(n=Up(),Be=4):Be=n===ld?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Wt=n,Ee===null&&(at=1,Po(e,ln(n,e.current)))}function Sv(){var e=Qt.current;return e===null?!0:(Oe&4194048)===Oe?un===null:(Oe&62914560)===Oe||(Oe&536870912)!==0?e===un:!1}function Tv(){var e=_.H;return _.H=ll,e===null?ll:e}function kv(){var e=_.A;return _.A=O_,e}function ds(){at=4,ya||(Oe&4194048)!==Oe&&Qt.current!==null||(ni=!0),(wa&134217727)===0&&(lr&134217727)===0||Ge===null||Sa(Ge,Oe,Kt,!1)}function Ad(e,n,r){var o=He;He|=2;var u=Tv(),f=kv();(Ge!==e||Oe!==n)&&(cs=null,ii(e,n)),n=!1;var v=at;e:do try{if(Be!==0&&Ee!==null){var S=Ee,A=Wt;switch(Be){case 8:Ed(),v=6;break e;case 3:case 2:case 9:case 6:Qt.current===null&&(n=!0);var U=Be;if(Be=0,Wt=null,li(e,S,A,U),r&&ni){v=0;break e}break;default:U=Be,Be=0,Wt=null,li(e,S,A,U)}}$_(),v=at;break}catch(q){_v(e,q)}while(!0);return n&&e.shellSuspendCounter++,Fn=Ka=null,He=o,_.H=u,_.A=f,Ee===null&&(Ge=null,Oe=0,Mo()),v}function $_(){for(;Ee!==null;)Nv(Ee)}function L_(e,n){var r=He;He|=2;var o=Tv(),u=kv();Ge!==e||Oe!==n?(cs=null,ss=qt()+500,ii(e,n)):ni=$i(e,n);e:do try{if(Be!==0&&Ee!==null){n=Ee;var f=Wt;t:switch(Be){case 1:Be=0,Wt=null,li(e,n,f,1);break;case 2:case 9:if(Lp(f)){Be=0,Wt=null,Cv(n);break}n=function(){Be!==2&&Be!==9||Ge!==e||(Be=7),zn(e)},f.then(n,n);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:Lp(f)?(Be=0,Wt=null,Cv(n)):(Be=0,Wt=null,li(e,n,f,7));break;case 5:var v=null;switch(Ee.tag){case 26:v=Ee.memoizedState;case 5:case 27:var S=Ee;if(v?f0(v):S.stateNode.complete){Be=0,Wt=null;var A=S.sibling;if(A!==null)Ee=A;else{var U=S.return;U!==null?(Ee=U,fs(U)):Ee=null}break t}}Be=0,Wt=null,li(e,n,f,5);break;case 6:Be=0,Wt=null,li(e,n,f,6);break;case 8:Ed(),at=6;break e;default:throw Error(l(462))}}j_();break}catch(q){_v(e,q)}while(!0);return Fn=Ka=null,_.H=o,_.A=u,He=r,Ee!==null?0:(Ge=null,Oe=0,Mo(),at)}function j_(){for(;Ee!==null&&!lx();)Nv(Ee)}function Nv(e){var n=Wg(e.alternate,e,Kn);e.memoizedProps=e.pendingProps,n===null?fs(e):Ee=n}function Cv(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=Yg(r,n,n.pendingProps,n.type,void 0,Oe);break;case 11:n=Yg(r,n,n.pendingProps,n.type.render,n.ref,Oe);break;case 5:Yu(n);default:Jg(r,n),n=Ee=kp(n,Kn),n=Wg(r,n,Kn)}e.memoizedProps=e.pendingProps,n===null?fs(e):Ee=n}function li(e,n,r,o){Fn=Ka=null,Yu(n),Zr=null,Ji=0;var u=n.return;try{if(k_(e,u,n,r,Oe)){at=1,Po(e,ln(r,e.current)),Ee=null;return}}catch(f){if(u!==null)throw Ee=u,f;at=1,Po(e,ln(r,e.current)),Ee=null;return}n.flags&32768?(Le||o===1?e=!0:ni||(Oe&536870912)!==0?e=!1:(ya=e=!0,(o===2||o===9||o===3||o===6)&&(o=Qt.current,o!==null&&o.tag===13&&(o.flags|=16384))),Ev(n,e)):fs(n)}function fs(e){var n=e;do{if((n.flags&32768)!==0){Ev(n,ya);return}e=n.return;var r=E_(n.alternate,n,Kn);if(r!==null){Ee=r;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=e}while(n!==null);at===0&&(at=5)}function Ev(e,n){do{var r=A_(e.alternate,e);if(r!==null){r.flags&=32767,Ee=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=r}while(e!==null);at=6,Ee=null}function Av(e,n,r,o,u,f,v,S,A){e.cancelPendingCommit=null;do hs();while(pt!==0);if((He&6)!==0)throw Error(l(327));if(n!==null){if(n===e.current)throw Error(l(177));if(f=n.lanes|n.childLanes,f|=vu,gx(e,r,f,v,S,A),e===Ge&&(Ee=Ge=null,Oe=0),ri=n,_a=e,Jn=r,kd=f,Nd=u,bv=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,F_(po,function(){return Dv(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=_.T,_.T=null,u=z.p,z.p=2,v=He,He|=4;try{z_(e,n,r)}finally{He=v,z.p=u,_.T=o}}pt=1,zv(),Mv(),Ov()}}function zv(){if(pt===1){pt=0;var e=_a,n=ri,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=_.T,_.T=null;var o=z.p;z.p=2;var u=He;He|=4;try{uv(n,e);var f=Fd,v=gp(e.containerInfo),S=f.focusedElem,A=f.selectionRange;if(v!==S&&S&&S.ownerDocument&&pp(S.ownerDocument.documentElement,S)){if(A!==null&&fu(S)){var U=A.start,q=A.end;if(q===void 0&&(q=U),"selectionStart"in S)S.selectionStart=U,S.selectionEnd=Math.min(q,S.value.length);else{var I=S.ownerDocument||document,B=I&&I.defaultView||window;if(B.getSelection){var V=B.getSelection(),oe=S.textContent.length,be=Math.min(A.start,oe),Ye=A.end===void 0?be:Math.min(A.end,oe);!V.extend&&be>Ye&&(v=Ye,Ye=be,be=v);var $=mp(S,be),O=mp(S,Ye);if($&&O&&(V.rangeCount!==1||V.anchorNode!==$.node||V.anchorOffset!==$.offset||V.focusNode!==O.node||V.focusOffset!==O.offset)){var j=I.createRange();j.setStart($.node,$.offset),V.removeAllRanges(),be>Ye?(V.addRange(j),V.extend(O.node,O.offset)):(j.setEnd(O.node,O.offset),V.addRange(j))}}}}for(I=[],V=S;V=V.parentNode;)V.nodeType===1&&I.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<I.length;S++){var G=I[S];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}ks=!!Bd,Fd=Bd=null}finally{He=u,z.p=o,_.T=r}}e.current=n,pt=2}}function Mv(){if(pt===2){pt=0;var e=_a,n=ri,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=_.T,_.T=null;var o=z.p;z.p=2;var u=He;He|=4;try{iv(e,n.alternate,n)}finally{He=u,z.p=o,_.T=r}}pt=3}}function Ov(){if(pt===4||pt===3){pt=0,ox();var e=_a,n=ri,r=Jn,o=bv;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pt=5:(pt=0,ri=_a=null,Rv(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(xa=null),Ic(r),n=n.stateNode,Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Di,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=_.T,u=z.p,z.p=2,_.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var S=o[v];f(S.value,{componentStack:S.stack})}}finally{_.T=n,z.p=u}}(Jn&3)!==0&&hs(),zn(e),u=e.pendingLanes,(r&261930)!==0&&(u&42)!==0?e===Cd?pl++:(pl=0,Cd=e):pl=0,gl(0)}}function Rv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Wi(n)))}function hs(){return zv(),Mv(),Ov(),Dv()}function Dv(){if(pt!==5)return!1;var e=_a,n=kd;kd=0;var r=Ic(Jn),o=_.T,u=z.p;try{z.p=32>r?32:r,_.T=null,r=Nd,Nd=null;var f=_a,v=Jn;if(pt=0,ri=_a=null,Jn=0,(He&6)!==0)throw Error(l(331));var S=He;if(He|=4,pv(f.current),fv(f,f.current,v,r),He=S,gl(0,!1),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Di,f)}catch{}return!0}finally{z.p=u,_.T=o,Rv(e,n)}}function $v(e,n,r){n=ln(r,n),n=id(e.stateNode,n,2),e=pa(e,n,2),e!==null&&(Li(e,2),zn(e))}function Fe(e,n,r){if(e.tag===3)$v(e,e,r);else for(;n!==null;){if(n.tag===3){$v(n,e,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(xa===null||!xa.has(o))){e=ln(r,e),r=Lg(2),o=pa(n,r,2),o!==null&&(jg(r,o,n,e),Li(o,2),zn(o));break}}n=n.return}}function zd(e,n,r){var o=e.pingCache;if(o===null){o=e.pingCache=new R_;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(r)||(_d=!0,u.add(r),e=U_.bind(null,e,n,r),n.then(e,e))}function U_(e,n,r){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ge===e&&(Oe&r)===r&&(at===4||at===3&&(Oe&62914560)===Oe&&300>qt()-os?(He&2)===0&&ii(e,0):Sd|=r,ai===Oe&&(ai=0)),zn(e)}function Lv(e,n){n===0&&(n=zm()),e=Qa(e,n),e!==null&&(Li(e,n),zn(e))}function H_(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),Lv(e,r)}function B_(e,n){var r=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(l(314))}o!==null&&o.delete(n),Lv(e,r)}function F_(e,n){return qc(e,n)}var ms=null,oi=null,Md=!1,ps=!1,Od=!1,Ta=0;function zn(e){e!==oi&&e.next===null&&(oi===null?ms=oi=e:oi=oi.next=e),ps=!0,Md||(Md=!0,q_())}function gl(e,n){if(!Od&&ps){Od=!0;do for(var r=!1,o=ms;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,S=o.pingedLanes;f=(1<<31-Gt(42|e)+1)-1,f&=u&~(v&~S),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,Bv(o,f))}else f=Oe,f=yo(o,o===Ge?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||$i(o,f)||(r=!0,Bv(o,f));o=o.next}while(r);Od=!1}}function V_(){jv()}function jv(){ps=Md=!1;var e=0;Ta!==0&&P_()&&(e=Ta);for(var n=qt(),r=null,o=ms;o!==null;){var u=o.next,f=Uv(o,n);f===0?(o.next=null,r===null?ms=u:r.next=u,u===null&&(oi=r)):(r=o,(e!==0||(f&3)!==0)&&(ps=!0)),o=u}pt!==0&&pt!==5||gl(e),Ta!==0&&(Ta=0)}function Uv(e,n){for(var r=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Gt(f),S=1<<v,A=u[v];A===-1?((S&r)===0||(S&o)!==0)&&(u[v]=px(S,n)):A<=n&&(e.expiredLanes|=S),f&=~S}if(n=Ge,r=Oe,r=yo(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,r===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Yc(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||$i(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(o!==null&&Yc(o),Ic(r)){case 2:case 8:r=Em;break;case 32:r=po;break;case 268435456:r=Am;break;default:r=po}return o=Hv.bind(null,e),r=qc(r,o),e.callbackPriority=n,e.callbackNode=r,n}return o!==null&&o!==null&&Yc(o),e.callbackPriority=2,e.callbackNode=null,2}function Hv(e,n){if(pt!==0&&pt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(hs()&&e.callbackNode!==r)return null;var o=Oe;return o=yo(e,e===Ge?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(wv(e,o,n),Uv(e,qt()),e.callbackNode!=null&&e.callbackNode===r?Hv.bind(null,e):null)}function Bv(e,n){if(hs())return null;wv(e,n,!0)}function q_(){t2(function(){(He&6)!==0?qc(Cm,V_):jv()})}function Rd(){if(Ta===0){var e=Xr;e===0&&(e=go,go<<=1,(go&261888)===0&&(go=256)),Ta=e}return Ta}function Fv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:So(""+e)}function Vv(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function Y_(e,n,r,o,u){if(n==="submit"&&r&&r.stateNode===u){var f=Fv((u[Dt]||null).action),v=o.submitter;v&&(n=(n=v[Dt]||null)?Fv(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var S=new Co("action","action",null,o,u);e.push({event:S,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ta!==0){var A=v?Vv(u,v):new FormData(u);Pu(r,{pending:!0,data:A,method:u.method,action:f},null,A)}}else typeof f=="function"&&(S.preventDefault(),A=v?Vv(u,v):new FormData(u),Pu(r,{pending:!0,data:A,method:u.method,action:f},f,A))},currentTarget:u}]})}}for(var Dd=0;Dd<gu.length;Dd++){var $d=gu[Dd],G_=$d.toLowerCase(),X_=$d[0].toUpperCase()+$d.slice(1);vn(G_,"on"+X_)}vn(yp,"onAnimationEnd"),vn(wp,"onAnimationIteration"),vn(xp,"onAnimationStart"),vn("dblclick","onDoubleClick"),vn("focusin","onFocus"),vn("focusout","onBlur"),vn(s_,"onTransitionRun"),vn(c_,"onTransitionStart"),vn(u_,"onTransitionCancel"),vn(_p,"onTransitionEnd"),Or("onMouseEnter",["mouseout","mouseover"]),Or("onMouseLeave",["mouseout","mouseover"]),Or("onPointerEnter",["pointerout","pointerover"]),Or("onPointerLeave",["pointerout","pointerover"]),Ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ya("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vl));function qv(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var S=o[v],A=S.instance,U=S.currentTarget;if(S=S.listener,A!==f&&u.isPropagationStopped())break e;f=S,u.currentTarget=U;try{f(u)}catch(q){zo(q)}u.currentTarget=null,f=A}else for(v=0;v<o.length;v++){if(S=o[v],A=S.instance,U=S.currentTarget,S=S.listener,A!==f&&u.isPropagationStopped())break e;f=S,u.currentTarget=U;try{f(u)}catch(q){zo(q)}u.currentTarget=null,f=A}}}}function Ae(e,n){var r=n[Qc];r===void 0&&(r=n[Qc]=new Set);var o=e+"__bubble";r.has(o)||(Yv(n,e,2,!1),r.add(o))}function Ld(e,n,r){var o=0;n&&(o|=4),Yv(r,e,o,n)}var gs="_reactListening"+Math.random().toString(36).slice(2);function jd(e){if(!e[gs]){e[gs]=!0,jm.forEach(function(r){r!=="selectionchange"&&(I_.has(r)||Ld(r,!1,e),Ld(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[gs]||(n[gs]=!0,Ld("selectionchange",!1,n))}}function Yv(e,n,r,o){switch(y0(n)){case 2:var u=x2;break;case 8:u=_2;break;default:u=Jd}r=u.bind(null,n,r,e),u=void 0,!au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,r,{capture:!0,passive:u}):e.addEventListener(n,r,!0):u!==void 0?e.addEventListener(n,r,{passive:u}):e.addEventListener(n,r,!1)}function Ud(e,n,r,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var S=o.stateNode.containerInfo;if(S===u)break;if(v===4)for(v=o.return;v!==null;){var A=v.tag;if((A===3||A===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;S!==null;){if(v=Ar(S),v===null)return;if(A=v.tag,A===5||A===6||A===26||A===27){o=f=v;continue e}S=S.parentNode}}o=o.return}Zm(function(){var U=f,q=tu(r),I=[];e:{var B=Sp.get(e);if(B!==void 0){var V=Co,oe=e;switch(e){case"keypress":if(ko(r)===0)break e;case"keydown":case"keyup":V=Bx;break;case"focusin":oe="focus",V=ou;break;case"focusout":oe="blur",V=ou;break;case"beforeblur":case"afterblur":V=ou;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=Ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=qx;break;case yp:case wp:case xp:V=Mx;break;case _p:V=Gx;break;case"scroll":case"scrollend":V=Nx;break;case"wheel":V=Ix;break;case"copy":case"cut":case"paste":V=Rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=ep;break;case"toggle":case"beforetoggle":V=Zx}var be=(n&4)!==0,Ye=!be&&(e==="scroll"||e==="scrollend"),$=be?B!==null?B+"Capture":null:B;be=[];for(var O=U,j;O!==null;){var G=O;if(j=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||j===null||$===null||(G=Hi(O,$),G!=null&&be.push(bl(O,G,j))),Ye)break;O=O.return}0<be.length&&(B=new V(B,oe,null,r,q),I.push({event:B,listeners:be}))}}if((n&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",B&&r!==eu&&(oe=r.relatedTarget||r.fromElement)&&(Ar(oe)||oe[Er]))break e;if((V||B)&&(B=q.window===q?q:(B=q.ownerDocument)?B.defaultView||B.parentWindow:window,V?(oe=r.relatedTarget||r.toElement,V=U,oe=oe?Ar(oe):null,oe!==null&&(Ye=c(oe),be=oe.tag,oe!==Ye||be!==5&&be!==27&&be!==6)&&(oe=null)):(V=null,oe=U),V!==oe)){if(be=Jm,G="onMouseLeave",$="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(be=ep,G="onPointerLeave",$="onPointerEnter",O="pointer"),Ye=V==null?B:Ui(V),j=oe==null?B:Ui(oe),B=new be(G,O+"leave",V,r,q),B.target=Ye,B.relatedTarget=j,G=null,Ar(q)===U&&(be=new be($,O+"enter",oe,r,q),be.target=j,be.relatedTarget=Ye,G=be),Ye=G,V&&oe)t:{for(be=Q_,$=V,O=oe,j=0,G=$;G;G=be(G))j++;G=0;for(var ge=O;ge;ge=be(ge))G++;for(;0<j-G;)$=be($),j--;for(;0<G-j;)O=be(O),G--;for(;j--;){if($===O||O!==null&&$===O.alternate){be=$;break t}$=be($),O=be(O)}be=null}else be=null;V!==null&&Gv(I,B,V,be,!1),oe!==null&&Ye!==null&&Gv(I,Ye,oe,be,!0)}}e:{if(B=U?Ui(U):window,V=B.nodeName&&B.nodeName.toLowerCase(),V==="select"||V==="input"&&B.type==="file")var je=sp;else if(lp(B))if(cp)je=i_;else{je=a_;var de=n_}else V=B.nodeName,!V||V.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?U&&Pc(U.elementType)&&(je=sp):je=r_;if(je&&(je=je(e,U))){op(I,je,r,q);break e}de&&de(e,B,U),e==="focusout"&&U&&B.type==="number"&&U.memoizedProps.value!=null&&Jc(B,"number",B.value)}switch(de=U?Ui(U):window,e){case"focusin":(lp(de)||de.contentEditable==="true")&&(Ur=de,hu=U,Ii=null);break;case"focusout":Ii=hu=Ur=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,vp(I,r,q);break;case"selectionchange":if(o_)break;case"keydown":case"keyup":vp(I,r,q)}var ke;if(cu)e:{switch(e){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else jr?rp(e,r)&&(Re="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Re="onCompositionStart");Re&&(tp&&r.locale!=="ko"&&(jr||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&jr&&(ke=Wm()):(sa=q,ru="value"in sa?sa.value:sa.textContent,jr=!0)),de=vs(U,Re),0<de.length&&(Re=new Pm(Re,e,null,r,q),I.push({event:Re,listeners:de}),ke?Re.data=ke:(ke=ip(r),ke!==null&&(Re.data=ke)))),(ke=Kx?Jx(e,r):Px(e,r))&&(Re=vs(U,"onBeforeInput"),0<Re.length&&(de=new Pm("onBeforeInput","beforeinput",null,r,q),I.push({event:de,listeners:Re}),de.data=ke)),Y_(I,e,U,r,q)}qv(I,n)})}function bl(e,n,r){return{instance:e,listener:n,currentTarget:r}}function vs(e,n){for(var r=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Hi(e,r),u!=null&&o.unshift(bl(e,u,f)),u=Hi(e,n),u!=null&&o.push(bl(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Q_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gv(e,n,r,o,u){for(var f=n._reactName,v=[];r!==null&&r!==o;){var S=r,A=S.alternate,U=S.stateNode;if(S=S.tag,A!==null&&A===o)break;S!==5&&S!==26&&S!==27||U===null||(A=U,u?(U=Hi(r,f),U!=null&&v.unshift(bl(r,U,A))):u||(U=Hi(r,f),U!=null&&v.push(bl(r,U,A)))),r=r.return}v.length!==0&&e.push({event:n,listeners:v})}var Z_=/\r\n?/g,W_=/\u0000|\uFFFD/g;function Xv(e){return(typeof e=="string"?e:""+e).replace(Z_,`
`).replace(W_,"")}function Iv(e,n){return n=Xv(n),Xv(e)===n}function qe(e,n,r,o,u,f){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Dr(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Dr(e,""+o);break;case"className":xo(e,"class",o);break;case"tabIndex":xo(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":xo(e,r,o);break;case"style":Im(e,o,f);break;case"data":if(n!=="object"){xo(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=So(""+o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(n!=="input"&&qe(e,n,"name",u.name,u,null),qe(e,n,"formEncType",u.formEncType,u,null),qe(e,n,"formMethod",u.formMethod,u,null),qe(e,n,"formTarget",u.formTarget,u,null)):(qe(e,n,"encType",u.encType,u,null),qe(e,n,"method",u.method,u,null),qe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=So(""+o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=jn);break;case"onScroll":o!=null&&Ae("scroll",e);break;case"onScrollEnd":o!=null&&Ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(l(60));e.innerHTML=r}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=So(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""+o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":Ae("beforetoggle",e),Ae("toggle",e),wo(e,"popover",o);break;case"xlinkActuate":Ln(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ln(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ln(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ln(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ln(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ln(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":wo(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Tx.get(r)||r,wo(e,r,o))}}function Hd(e,n,r,o,u,f){switch(r){case"style":Im(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(l(60));e.innerHTML=r}}break;case"children":typeof o=="string"?Dr(e,o):(typeof o=="number"||typeof o=="bigint")&&Dr(e,""+o);break;case"onScroll":o!=null&&Ae("scroll",e);break;case"onScrollEnd":o!=null&&Ae("scrollend",e);break;case"onClick":o!=null&&(e.onclick=jn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Um.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),f=e[Dt]||null,f=f!=null?f[r]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,o,u);break e}r in e?e[r]=o:o===!0?e.setAttribute(r,""):wo(e,r,o)}}}function Et(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",e),Ae("load",e);var o=!1,u=!1,f;for(f in r)if(r.hasOwnProperty(f)){var v=r[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:qe(e,n,f,v,r,null)}}u&&qe(e,n,"srcSet",r.srcSet,r,null),o&&qe(e,n,"src",r.src,r,null);return;case"input":Ae("invalid",e);var S=f=v=u=null,A=null,U=null;for(o in r)if(r.hasOwnProperty(o)){var q=r[o];if(q!=null)switch(o){case"name":u=q;break;case"type":v=q;break;case"checked":A=q;break;case"defaultChecked":U=q;break;case"value":f=q;break;case"defaultValue":S=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(l(137,n));break;default:qe(e,n,o,q,r,null)}}qm(e,f,S,A,U,v,u,!1);return;case"select":Ae("invalid",e),o=v=f=null;for(u in r)if(r.hasOwnProperty(u)&&(S=r[u],S!=null))switch(u){case"value":f=S;break;case"defaultValue":v=S;break;case"multiple":o=S;default:qe(e,n,u,S,r,null)}n=f,r=v,e.multiple=!!o,n!=null?Rr(e,!!o,n,!1):r!=null&&Rr(e,!!o,r,!0);return;case"textarea":Ae("invalid",e),f=u=o=null;for(v in r)if(r.hasOwnProperty(v)&&(S=r[v],S!=null))switch(v){case"value":o=S;break;case"defaultValue":u=S;break;case"children":f=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(l(91));break;default:qe(e,n,v,S,r,null)}Gm(e,o,u,f);return;case"option":for(A in r)r.hasOwnProperty(A)&&(o=r[A],o!=null)&&(A==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":qe(e,n,A,o,r,null));return;case"dialog":Ae("beforetoggle",e),Ae("toggle",e),Ae("cancel",e),Ae("close",e);break;case"iframe":case"object":Ae("load",e);break;case"video":case"audio":for(o=0;o<vl.length;o++)Ae(vl[o],e);break;case"image":Ae("error",e),Ae("load",e);break;case"details":Ae("toggle",e);break;case"embed":case"source":case"link":Ae("error",e),Ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in r)if(r.hasOwnProperty(U)&&(o=r[U],o!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:qe(e,n,U,o,r,null)}return;default:if(Pc(n)){for(q in r)r.hasOwnProperty(q)&&(o=r[q],o!==void 0&&Hd(e,n,q,o,r,void 0));return}}for(S in r)r.hasOwnProperty(S)&&(o=r[S],o!=null&&qe(e,n,S,o,r,null))}function K_(e,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,S=null,A=null,U=null,q=null;for(V in r){var I=r[V];if(r.hasOwnProperty(V)&&I!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":A=I;default:o.hasOwnProperty(V)||qe(e,n,V,null,o,I)}}for(var B in o){var V=o[B];if(I=r[B],o.hasOwnProperty(B)&&(V!=null||I!=null))switch(B){case"type":f=V;break;case"name":u=V;break;case"checked":U=V;break;case"defaultChecked":q=V;break;case"value":v=V;break;case"defaultValue":S=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(l(137,n));break;default:V!==I&&qe(e,n,B,V,o,I)}}Kc(e,v,S,A,U,q,f,u);return;case"select":V=v=S=B=null;for(f in r)if(A=r[f],r.hasOwnProperty(f)&&A!=null)switch(f){case"value":break;case"multiple":V=A;default:o.hasOwnProperty(f)||qe(e,n,f,null,o,A)}for(u in o)if(f=o[u],A=r[u],o.hasOwnProperty(u)&&(f!=null||A!=null))switch(u){case"value":B=f;break;case"defaultValue":S=f;break;case"multiple":v=f;default:f!==A&&qe(e,n,u,f,o,A)}n=S,r=v,o=V,B!=null?Rr(e,!!r,B,!1):!!o!=!!r&&(n!=null?Rr(e,!!r,n,!0):Rr(e,!!r,r?[]:"",!1));return;case"textarea":V=B=null;for(S in r)if(u=r[S],r.hasOwnProperty(S)&&u!=null&&!o.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:qe(e,n,S,null,o,u)}for(v in o)if(u=o[v],f=r[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":B=u;break;case"defaultValue":V=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(l(91));break;default:u!==f&&qe(e,n,v,u,o,f)}Ym(e,B,V);return;case"option":for(var oe in r)B=r[oe],r.hasOwnProperty(oe)&&B!=null&&!o.hasOwnProperty(oe)&&(oe==="selected"?e.selected=!1:qe(e,n,oe,null,o,B));for(A in o)B=o[A],V=r[A],o.hasOwnProperty(A)&&B!==V&&(B!=null||V!=null)&&(A==="selected"?e.selected=B&&typeof B!="function"&&typeof B!="symbol":qe(e,n,A,B,o,V));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in r)B=r[be],r.hasOwnProperty(be)&&B!=null&&!o.hasOwnProperty(be)&&qe(e,n,be,null,o,B);for(U in o)if(B=o[U],V=r[U],o.hasOwnProperty(U)&&B!==V&&(B!=null||V!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(l(137,n));break;default:qe(e,n,U,B,o,V)}return;default:if(Pc(n)){for(var Ye in r)B=r[Ye],r.hasOwnProperty(Ye)&&B!==void 0&&!o.hasOwnProperty(Ye)&&Hd(e,n,Ye,void 0,o,B);for(q in o)B=o[q],V=r[q],!o.hasOwnProperty(q)||B===V||B===void 0&&V===void 0||Hd(e,n,q,B,o,V);return}}for(var $ in r)B=r[$],r.hasOwnProperty($)&&B!=null&&!o.hasOwnProperty($)&&qe(e,n,$,null,o,B);for(I in o)B=o[I],V=r[I],!o.hasOwnProperty(I)||B===V||B==null&&V==null||qe(e,n,I,B,o,V)}function Qv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function J_(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var u=r[o],f=u.transferSize,v=u.initiatorType,S=u.duration;if(f&&S&&Qv(v)){for(v=0,S=u.responseEnd,o+=1;o<r.length;o++){var A=r[o],U=A.startTime;if(U>S)break;var q=A.transferSize,I=A.initiatorType;q&&Qv(I)&&(A=A.responseEnd,v+=q*(A<S?1:(S-U)/(A-U)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Bd=null,Fd=null;function bs(e){return e.nodeType===9?e:e.ownerDocument}function Zv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Vd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qd=null;function P_(){var e=window.event;return e&&e.type==="popstate"?e===qd?!1:(qd=e,!0):(qd=null,!1)}var Kv=typeof setTimeout=="function"?setTimeout:void 0,e2=typeof clearTimeout=="function"?clearTimeout:void 0,Jv=typeof Promise=="function"?Promise:void 0,t2=typeof queueMicrotask=="function"?queueMicrotask:typeof Jv<"u"?function(e){return Jv.resolve(null).then(e).catch(n2)}:Kv;function n2(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function Pv(e,n){var r=n,o=0;do{var u=r.nextSibling;if(e.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(o===0){e.removeChild(u),di(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")yl(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,yl(r);for(var f=r.firstChild;f;){var v=f.nextSibling,S=f.nodeName;f[ji]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&f.rel.toLowerCase()==="stylesheet"||r.removeChild(f),f=v}}else r==="body"&&yl(e.ownerDocument.body);r=u}while(r);di(n)}function e0(e,n){var r=e;e=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=o}while(r)}function Yd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Yd(r),Zc(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function a2(e,n,r,o){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ji])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=dn(e.nextSibling),e===null)break}return null}function r2(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=dn(e.nextSibling),e===null))return null;return e}function t0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=dn(e.nextSibling),e===null))return null;return e}function Gd(e){return e.data==="$?"||e.data==="$~"}function Xd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function i2(e,n){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function dn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Id=null;function n0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(n===0)return dn(e.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}e=e.nextSibling}return null}function a0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return e;n--}else r!=="/$"&&r!=="/&"||n++}e=e.previousSibling}return null}function r0(e,n,r){switch(n=bs(r),e){case"html":if(e=n.documentElement,!e)throw Error(l(452));return e;case"head":if(e=n.head,!e)throw Error(l(453));return e;case"body":if(e=n.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function yl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Zc(e)}var fn=new Map,i0=new Set;function ys(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pn=z.d;z.d={f:l2,r:o2,D:s2,C:c2,L:u2,m:d2,X:h2,S:f2,M:m2};function l2(){var e=Pn.f(),n=us();return e||n}function o2(e){var n=zr(e);n!==null&&n.tag===5&&n.type==="form"?_g(n):Pn.r(e)}var si=typeof document>"u"?null:document;function l0(e,n,r){var o=si;if(o&&typeof n=="string"&&n){var u=an(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),i0.has(u)||(i0.add(u),e={rel:e,crossOrigin:r,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Et(n,"link",e),yt(n),o.head.appendChild(n)))}}function s2(e){Pn.D(e),l0("dns-prefetch",e,null)}function c2(e,n){Pn.C(e,n),l0("preconnect",e,n)}function u2(e,n,r){Pn.L(e,n,r);var o=si;if(o&&e&&n){var u='link[rel="preload"][as="'+an(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+an(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+an(r.imageSizes)+'"]')):u+='[href="'+an(e)+'"]';var f=u;switch(n){case"style":f=ci(e);break;case"script":f=ui(e)}fn.has(f)||(e=w({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),fn.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(wl(f))||n==="script"&&o.querySelector(xl(f))||(n=o.createElement("link"),Et(n,"link",e),yt(n),o.head.appendChild(n)))}}function d2(e,n){Pn.m(e,n);var r=si;if(r&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+an(o)+'"][href="'+an(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ui(e)}if(!fn.has(f)&&(e=w({rel:"modulepreload",href:e},n),fn.set(f,e),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(xl(f)))return}o=r.createElement("link"),Et(o,"link",e),yt(o),r.head.appendChild(o)}}}function f2(e,n,r){Pn.S(e,n,r);var o=si;if(o&&e){var u=Mr(o).hoistableStyles,f=ci(e);n=n||"default";var v=u.get(f);if(!v){var S={loading:0,preload:null};if(v=o.querySelector(wl(f)))S.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":n},r),(r=fn.get(f))&&Qd(e,r);var A=v=o.createElement("link");yt(A),Et(A,"link",e),A._p=new Promise(function(U,q){A.onload=U,A.onerror=q}),A.addEventListener("load",function(){S.loading|=1}),A.addEventListener("error",function(){S.loading|=2}),S.loading|=4,ws(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:S},u.set(f,v)}}}function h2(e,n){Pn.X(e,n);var r=si;if(r&&e){var o=Mr(r).hoistableScripts,u=ui(e),f=o.get(u);f||(f=r.querySelector(xl(u)),f||(e=w({src:e,async:!0},n),(n=fn.get(u))&&Zd(e,n),f=r.createElement("script"),yt(f),Et(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function m2(e,n){Pn.M(e,n);var r=si;if(r&&e){var o=Mr(r).hoistableScripts,u=ui(e),f=o.get(u);f||(f=r.querySelector(xl(u)),f||(e=w({src:e,async:!0,type:"module"},n),(n=fn.get(u))&&Zd(e,n),f=r.createElement("script"),yt(f),Et(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function o0(e,n,r,o){var u=(u=te.current)?ys(u):null;if(!u)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=ci(r.href),r=Mr(u).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=ci(r.href);var f=Mr(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(wl(e)))&&!f._p&&(v.instance=f,v.state.loading=5),fn.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},fn.set(e,r),f||p2(u,e,r,v.state))),n&&o===null)throw Error(l(528,""));return v}if(n&&o!==null)throw Error(l(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ui(r),r=Mr(u).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function ci(e){return'href="'+an(e)+'"'}function wl(e){return'link[rel="stylesheet"]['+e+"]"}function s0(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function p2(e,n,r,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Et(n,"link",r),yt(n),e.head.appendChild(n))}function ui(e){return'[src="'+an(e)+'"]'}function xl(e){return"script[async]"+e}function c0(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+an(r.href)+'"]');if(o)return n.instance=o,yt(o),o;var u=w({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),yt(o),Et(o,"style",u),ws(o,r.precedence,e),n.instance=o;case"stylesheet":u=ci(r.href);var f=e.querySelector(wl(u));if(f)return n.state.loading|=4,n.instance=f,yt(f),f;o=s0(r),(u=fn.get(u))&&Qd(o,u),f=(e.ownerDocument||e).createElement("link"),yt(f);var v=f;return v._p=new Promise(function(S,A){v.onload=S,v.onerror=A}),Et(f,"link",o),n.state.loading|=4,ws(f,r.precedence,e),n.instance=f;case"script":return f=ui(r.src),(u=e.querySelector(xl(f)))?(n.instance=u,yt(u),u):(o=r,(u=fn.get(f))&&(o=w({},r),Zd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),yt(u),Et(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(l(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ws(o,r.precedence,e));return n.instance}function ws(e,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var S=o[v];if(S.dataset.precedence===n)f=S;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function Qd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Zd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var xs=null;function u0(e,n,r){if(xs===null){var o=new Map,u=xs=new Map;u.set(r,o)}else u=xs,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var f=r[u];if(!(f[ji]||f[Tt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var S=o.get(v);S?S.push(f):o.set(v,[f])}}return o}function d0(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function g2(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function f0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function v2(e,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=ci(o.href),f=n.querySelector(wl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=_s.bind(e),n.then(e,e)),r.state.loading|=4,r.instance=f,yt(f);return}f=n.ownerDocument||n,o=s0(o),(u=fn.get(u))&&Qd(o,u),f=f.createElement("link"),yt(f);var v=f;v._p=new Promise(function(S,A){v.onload=S,v.onerror=A}),Et(f,"link",o),r.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=_s.bind(e),n.addEventListener("load",r),n.addEventListener("error",r))}}var Wd=0;function b2(e,n){return e.stylesheets&&e.count===0&&Ts(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var o=setTimeout(function(){if(e.stylesheets&&Ts(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Wd===0&&(Wd=62500*J_());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ts(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Wd?50:800)+n);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function _s(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ts(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ss=null;function Ts(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ss=new Map,n.forEach(y2,e),Ss=null,_s.call(e))}function y2(e,n){if(!(n.state.loading&4)){var r=Ss.get(e);if(r)var o=r.get(null);else{r=new Map,Ss.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(r.set(v.dataset.precedence,v),o=v)}o&&r.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=r.get(v)||o,f===o&&r.set(null,u),r.set(v,u),this.count++,o=_s.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var _l={$$typeof:H,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function w2(e,n,r,o,u,f,v,S,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gc(0),this.hiddenUpdates=Gc(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function h0(e,n,r,o,u,f,v,S,A,U,q,I){return e=new w2(e,n,r,v,A,U,q,I,S),n=1,f===!0&&(n|=24),f=It(3,null,null,n),e.current=f,f.stateNode=e,n=Au(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:r,cache:n},Ru(f),e}function m0(e){return e?(e=Fr,e):Fr}function p0(e,n,r,o,u,f){u=m0(u),o.context===null?o.context=u:o.pendingContext=u,o=ma(n),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=pa(e,o,n),r!==null&&(Bt(r,e,n),el(r,e,n))}function g0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Kd(e,n){g0(e,n),(e=e.alternate)&&g0(e,n)}function v0(e){if(e.tag===13||e.tag===31){var n=Qa(e,67108864);n!==null&&Bt(n,e,67108864),Kd(e,67108864)}}function b0(e){if(e.tag===13||e.tag===31){var n=Jt();n=Xc(n);var r=Qa(e,n);r!==null&&Bt(r,e,n),Kd(e,n)}}var ks=!0;function x2(e,n,r,o){var u=_.T;_.T=null;var f=z.p;try{z.p=2,Jd(e,n,r,o)}finally{z.p=f,_.T=u}}function _2(e,n,r,o){var u=_.T;_.T=null;var f=z.p;try{z.p=8,Jd(e,n,r,o)}finally{z.p=f,_.T=u}}function Jd(e,n,r,o){if(ks){var u=Pd(o);if(u===null)Ud(e,n,o,Ns,r),w0(e,o);else if(T2(u,e,n,r,o))o.stopPropagation();else if(w0(e,o),n&4&&-1<S2.indexOf(e)){for(;u!==null;){var f=zr(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=qa(f.pendingLanes);if(v!==0){var S=f;for(S.pendingLanes|=2,S.entangledLanes|=2;v;){var A=1<<31-Gt(v);S.entanglements[1]|=A,v&=~A}zn(f),(He&6)===0&&(ss=qt()+500,gl(0))}}break;case 31:case 13:S=Qa(f,2),S!==null&&Bt(S,f,2),us(),Kd(f,2)}if(f=Pd(o),f===null&&Ud(e,n,o,Ns,r),f===u)break;u=f}u!==null&&o.stopPropagation()}else Ud(e,n,o,null,r)}}function Pd(e){return e=tu(e),ef(e)}var Ns=null;function ef(e){if(Ns=null,e=Ar(e),e!==null){var n=c(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=d(n),e!==null)return e;e=null}else if(r===31){if(e=m(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ns=e,null}function y0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sx()){case Cm:return 2;case Em:return 8;case po:case cx:return 32;case Am:return 268435456;default:return 32}default:return 32}}var tf=!1,Na=null,Ca=null,Ea=null,Sl=new Map,Tl=new Map,Aa=[],S2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w0(e,n){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":Sl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tl.delete(n.pointerId)}}function kl(e,n,r,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=zr(n),n!==null&&v0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function T2(e,n,r,o,u){switch(n){case"focusin":return Na=kl(Na,e,n,r,o,u),!0;case"dragenter":return Ca=kl(Ca,e,n,r,o,u),!0;case"mouseover":return Ea=kl(Ea,e,n,r,o,u),!0;case"pointerover":var f=u.pointerId;return Sl.set(f,kl(Sl.get(f)||null,e,n,r,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Tl.set(f,kl(Tl.get(f)||null,e,n,r,o,u)),!0}return!1}function x0(e){var n=Ar(e.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=d(r),n!==null){e.blockedOn=n,$m(e.priority,function(){b0(r)});return}}else if(n===31){if(n=m(r),n!==null){e.blockedOn=n,$m(e.priority,function(){b0(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cs(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Pd(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);eu=o,r.target.dispatchEvent(o),eu=null}else return n=zr(r),n!==null&&v0(n),e.blockedOn=r,!1;n.shift()}return!0}function _0(e,n,r){Cs(e)&&r.delete(n)}function k2(){tf=!1,Na!==null&&Cs(Na)&&(Na=null),Ca!==null&&Cs(Ca)&&(Ca=null),Ea!==null&&Cs(Ea)&&(Ea=null),Sl.forEach(_0),Tl.forEach(_0)}function Es(e,n){e.blockedOn===n&&(e.blockedOn=null,tf||(tf=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,k2)))}var As=null;function S0(e){As!==e&&(As=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){As===e&&(As=null);for(var n=0;n<e.length;n+=3){var r=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(ef(o||r)===null)continue;break}var f=zr(r);f!==null&&(e.splice(n,3),n-=3,Pu(f,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function di(e){function n(A){return Es(A,e)}Na!==null&&Es(Na,e),Ca!==null&&Es(Ca,e),Ea!==null&&Es(Ea,e),Sl.forEach(n),Tl.forEach(n);for(var r=0;r<Aa.length;r++){var o=Aa[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Aa.length&&(r=Aa[0],r.blockedOn===null);)x0(r),r.blockedOn===null&&Aa.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],f=r[o+1],v=u[Dt]||null;if(typeof f=="function")v||S0(r);else if(v){var S=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[Dt]||null)S=v.formAction;else if(ef(u)!==null)continue}else S=v.action;typeof S=="function"?r[o+1]=S:(r.splice(o,3),o-=3),S0(r)}}}function T0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function nf(e){this._internalRoot=e}zs.prototype.render=nf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(l(409));var r=n.current,o=Jt();p0(r,o,e,n,null,null)},zs.prototype.unmount=nf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;p0(e.current,2,null,e,null,null),us(),n[Er]=null}};function zs(e){this._internalRoot=e}zs.prototype.unstable_scheduleHydration=function(e){if(e){var n=Dm();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Aa.length&&n!==0&&n<Aa[r].priority;r++);Aa.splice(r,0,e),r===0&&x0(e)}};var k0=a.version;if(k0!=="19.2.4")throw Error(l(527,k0,"19.2.4"));z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=g(n),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var N2={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ms.isDisabled&&Ms.supportsFiber)try{Di=Ms.inject(N2),Yt=Ms}catch{}}return Rl.createRoot=function(e,n){if(!s(e))throw Error(l(299));var r=!1,o="",u=Og,f=Rg,v=Dg;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=h0(e,1,!1,null,null,r,o,null,u,f,v,T0),e[Er]=n.current,jd(e),new nf(n)},Rl.hydrateRoot=function(e,n,r){if(!s(e))throw Error(l(299));var o=!1,u="",f=Og,v=Rg,S=Dg,A=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(v=r.onCaughtError),r.onRecoverableError!==void 0&&(S=r.onRecoverableError),r.formState!==void 0&&(A=r.formState)),n=h0(e,1,!0,n,r??null,o,u,A,f,v,S,T0),n.context=m0(null),r=n.current,o=Jt(),o=Xc(o),u=ma(o),u.callback=null,pa(r,u,o),r=o,n.current.lanes=r,Li(n,r),zn(n),e[Er]=n.current,jd(e),new zs(n)},Rl.version="19.2.4",Rl}var by;function uz(){if(by)return Vf.exports;by=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),Vf.exports=cz(),Vf.exports}var dz=uz();const fz=()=>{const[t,a]=fe.useState(null),[i,l]=fe.useState(!0),[s,c]=fe.useState(null);return fe.useEffect(()=>{(async()=>{l(!0);try{const m=await fetch("/react-performance/data/owid-co2-data.json");if(!m.ok)throw new Error("Failed to fetch CO2 data");const p=await m.json(),g=Object.entries(p).map(([b,w])=>{const y=w;return{id:b,iso_code:y.iso_code,data:y.data}});a(g),c(null)}catch(m){console.error(m),c(m instanceof Error?m.message:"Unknown error"),a(null)}finally{l(!1)}})()},[]),{data:t,isLoading:i,error:s}},hz="_container_1m5gd_1",mz={container:hz},pz=()=>he.jsx("div",{className:mz.container,children:he.jsx("div",{className:"spinner",children:"Loading CO2 data..."})}),gz="_container_16mu1_1",vz="_label_16mu1_5",bz="_input_16mu1_9",Xf={container:gz,label:vz,input:bz},yz=fe.memo(({value:t,onChange:a})=>he.jsxs("div",{className:Xf.container,children:[he.jsx("label",{htmlFor:"search",className:Xf.label,children:"Search countries:"}),he.jsx("input",{id:"search",type:"text",value:t,onChange:i=>a(i.target.value),placeholder:"Type to search...",className:Xf.input})]})),wz="_container_8lebf_1",xz="_label_8lebf_5",_z="_select_8lebf_9",Si={container:wz,label:xz,select:_z};fe.memo(({value:t,onChange:a})=>he.jsxs("div",{className:Si.container,children:[he.jsx("label",{htmlFor:"search",className:Si.label,children:"Search countries:"}),he.jsx("input",{id:"search",type:"text",value:t,onChange:i=>a(i.target.value),placeholder:"Type to search...",className:Si.input})]}));const Sz=fe.memo(({year:t,years:a,onChange:i})=>{const l=fe.useMemo(()=>a.map(s=>he.jsx("option",{value:s,children:s},s)),[a]);return he.jsxs("div",{className:Si.container,children:[he.jsx("label",{htmlFor:"year",className:Si.label,children:"Select year:"}),he.jsx("select",{id:"year",value:t,onChange:s=>i(Number(s.target.value)),className:Si.select,children:l})]})}),$h=(t,a)=>t==null?"N/A":t.toLocaleString("en-US",a??{maximumFractionDigits:0}),Tz="_table_117q5_1",kz="_row_117q5_7",Nz="_labelCell_117q5_11",Cz="_valueCell_117q5_17",Ez="_noData_117q5_21",Dl={table:Tz,row:kz,labelCell:Nz,valueCell:Cz,noData:Ez},Az=fe.memo(({data:t,year:a,columns:i})=>t?he.jsx("table",{className:Dl.table,children:he.jsx("tbody",{children:i.map(l=>he.jsxs("tr",{className:Dl.row,children:[he.jsx("td",{className:Dl.labelCell,children:l.replace(/_/g," ").toUpperCase()}),he.jsx("td",{className:Dl.valueCell,children:$h(t[l],{maximumFractionDigits:2})})]},l))})}):he.jsxs("div",{className:Dl.noData,children:["No data available for year ",a]})),zz="_card_16s5s_1",Mz="_header_16s5s_9",Oz="_title_16s5s_16",Rz="_isoCode_16s5s_20",Dz="_stats_16s5s_27",$l={card:zz,header:Mz,title:Oz,isoCode:Rz,stats:Dz},$z=fe.memo(({country:t,selectedYear:a,selectedColumns:i,yearDataMap:l})=>{const s=l?.get(a),c=s?.population,d=s?.co2;return he.jsxs("div",{className:$l.card,children:[he.jsxs("div",{className:$l.header,children:[he.jsx("h3",{className:$l.title,children:t.id}),t.iso_code&&he.jsx("span",{className:$l.isoCode,children:t.iso_code})]}),he.jsxs("div",{className:$l.stats,children:[he.jsxs("div",{children:["Population (",a,"): ",$h(c)]}),he.jsxs("div",{children:["CO₂ Emissions (",a,"): ",$h(d)," tonnes"]})]}),he.jsx(Az,{data:s,year:a,columns:i})]})}),Lz=()=>["year","population","co2","co2_per_capita","cement_co2","cement_co2_per_capita","coal_co2","coal_co2_per_capita","gas_co2","gas_co2_per_capita","oil_co2","oil_co2_per_capita","methane","methane_per_capita","nitrous_oxide","nitrous_oxide_per_capita","temperature_change_from_co2","total_ghg","total_ghg_per_capita"],jz=t=>{const a=new Map;return t.forEach(i=>{a.set(i.year,i)}),a},yy=(t,a)=>t.get(a)?.population,Uz=t=>{const a=new Set;return t.forEach(i=>{i.data.forEach(l=>{a.add(l.year)})}),Array.from(a).sort((i,l)=>i-l)},Ci=typeof window<"u"?fe.useLayoutEffect:fe.useEffect;function wy(t){if(t!==void 0)switch(typeof t){case"number":return t;case"string":{if(t.endsWith("px"))return parseFloat(t);break}}}function Hz({box:t,defaultHeight:a,defaultWidth:i,disabled:l,element:s,mode:c,style:d}){const{styleHeight:m,styleWidth:p}=fe.useMemo(()=>({styleHeight:wy(d?.height),styleWidth:wy(d?.width)}),[d?.height,d?.width]),[g,b]=fe.useState({height:a,width:i}),w=l||m!==void 0||c==="only-width"||m!==void 0&&p!==void 0;return Ci(()=>{if(s===null||w)return;const y=new ResizeObserver(x=>{for(const T of x){const{contentRect:C,target:M}=T;s===M&&b(k=>k.height===C.height&&k.width===C.width?k:{height:C.height,width:C.width})}});return y.observe(s,{box:t}),()=>{y?.unobserve(s)}},[t,w,s,m,p]),fe.useMemo(()=>({height:m??g.height,width:p??g.width}),[g,m,p])}function Nc(t){const a=fe.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return Ci(()=>{a.current=t},[t]),fe.useCallback((...i)=>a.current?.(...i),[a])}function Gs({containerElement:t,direction:a,isRtl:i,scrollOffset:l}){return l}function On(t,a="Assertion error"){if(!t)throw console.error(a),Error(a)}function Ti(t,a){if(t===a)return!0;if(!!t!=!!a||(On(t!==void 0),On(a!==void 0),Object.keys(t).length!==Object.keys(a).length))return!1;for(const i in t)if(!Object.hasOwn(a,i)||!Object.is(a[i],t[i]))return!1;return!0}function rx({cachedBounds:t,itemCount:a,itemSize:i}){if(a===0)return 0;if(typeof i=="number")return a*i;{const l=t.get(t.size===0?0:t.size-1);On(l!==void 0,"Unexpected bounds cache miss");const s=(l.scrollOffset+l.size)/t.size;return a*s}}function Bz({align:t,cachedBounds:a,index:i,itemCount:l,itemSize:s,containerScrollOffset:c,containerSize:d}){if(i<0||i>=l)throw RangeError(`Invalid index specified: ${i}`,{cause:`Index ${i} is not within the range of 0 - ${l-1}`});const m=a.get(i),p=rx({cachedBounds:a,itemCount:l,itemSize:s}),g=Math.max(0,Math.min(p-d,m.scrollOffset)),b=Math.max(0,m.scrollOffset-d+m.size),w=m.size>d?c>=m.scrollOffset&&c<=b:c>=b&&c<=m.scrollOffset;switch(t==="smart"&&(t=w?"auto":"center"),t){case"start":return g;case"end":return b;case"center":return Math.max(0,Math.min(p-d,m.scrollOffset+m.size/2-d/2));default:return w?c:c<b?b:g}}function If({cachedBounds:t,containerScrollOffset:a,containerSize:i,itemCount:l,overscanCount:s}){const c=l-1;if(l===0)return{startIndexVisible:0,stopIndexVisible:-1,startIndexOverscan:0,stopIndexOverscan:-1};let d,m;const{itemSize:p}=t;if(p!==void 0&&p>0)d=Math.max(0,Math.min(c,Math.floor(a/p))),m=Math.max(d,Math.min(c,Math.ceil((a+i)/p)-1));else{let g=0,b=Math.min(c,Math.max(0,t.size-1));for(;g<b;){const w=Math.floor((g+b)/2),y=t.get(w);y.scrollOffset+y.size>a?b=w:g=w+1}for(;g<c;){const w=t.get(g);if(w.scrollOffset+w.size>a)break;g++}for(d=g,m=g;m<c;){const w=t.get(m);if(w.scrollOffset+w.size>=a+i)break;m++}}return{startIndexVisible:d,stopIndexVisible:m,startIndexOverscan:Math.max(0,d-s),stopIndexOverscan:Math.min(c,m+s)}}function Fz({itemCount:t,itemProps:a,itemSize:i}){const l=new Map;return{itemSize:typeof i=="number"?i:void 0,get(s){if(On(s<t,`Invalid index ${s}`),typeof i=="number"){On(s>=0,`Invalid index ${s}`);let d=l.get(s);return d===void 0&&(d={size:i,scrollOffset:s*i},l.set(s,d)),d}for(;l.size-1<s;){const d=l.size,m=i(d,a);if(d===0)l.set(d,{size:m,scrollOffset:0});else{const p=l.get(d-1);On(p!==void 0,`Unexpected bounds cache miss for index ${s}`),l.set(d,{scrollOffset:p.scrollOffset+p.size,size:m})}}const c=l.get(s);return On(c!==void 0,`Unexpected bounds cache miss for index ${s}`),c},set(s,c){l.set(s,c)},get size(){return l.size}}}function Vz({itemCount:t,itemProps:a,itemSize:i}){return fe.useMemo(()=>Fz({itemCount:t,itemProps:a,itemSize:i}),[t,a,i])}function qz({containerSize:t,itemSize:a}){let i;return typeof a==="string"?(On(a.endsWith("%"),`Invalid item size: "${a}"; string values must be percentages (e.g. "100%")`),On(t!==void 0,"Container size must be defined if a percentage item size is specified"),i=t*parseFloat(a)/100):i=a,i}function Yz({containerElement:t,containerStyle:a,defaultContainerSize:i=0,direction:l,isRtl:s=!1,itemCount:c,itemProps:d,itemSize:m,onResize:p,overscanCount:g}){const{height:b=i,width:w=i}=Hz({defaultHeight:i,defaultWidth:void 0,element:t,mode:"only-height",style:a}),y=fe.useRef({height:0,width:0}),x=b,T=qz({containerSize:x,itemSize:m});fe.useLayoutEffect(()=>{if(typeof p=="function"){const ne=y.current;(ne.height!==b||ne.width!==w)&&(p({height:b,width:w},{...ne}),ne.height=b,ne.width=w)}},[b,p,w]);const C=Vz({itemCount:c,itemProps:d,itemSize:T}),M=fe.useCallback(ne=>C.get(ne),[C]),[k,E]=fe.useState(()=>If({cachedBounds:C,containerScrollOffset:0,containerSize:x,itemCount:c,overscanCount:g})),{startIndexVisible:H,startIndexOverscan:Y,stopIndexVisible:Q,stopIndexOverscan:J}={startIndexVisible:Math.min(c-1,k.startIndexVisible),startIndexOverscan:Math.min(c-1,k.startIndexOverscan),stopIndexVisible:Math.min(c-1,k.stopIndexVisible),stopIndexOverscan:Math.min(c-1,k.stopIndexOverscan)},P=fe.useCallback(()=>rx({cachedBounds:C,itemCount:c,itemSize:T}),[C,c,T]),Z=fe.useCallback(ne=>{const pe=Gs({containerElement:t,direction:l,isRtl:s,scrollOffset:ne});return If({cachedBounds:C,containerScrollOffset:pe,containerSize:x,itemCount:c,overscanCount:g})},[C,t,x,l,s,c,g]);Ci(()=>{const ne=t?.scrollTop??0;E(Z(ne))},[t,l,Z]),Ci(()=>{if(!t)return;const ne=()=>{E(pe=>{const{scrollLeft:ye,scrollTop:we}=t,ze=Gs({containerElement:t,direction:l,isRtl:s,scrollOffset:we}),Me=If({cachedBounds:C,containerScrollOffset:ze,containerSize:x,itemCount:c,overscanCount:g});return Ti(Me,pe)?pe:Me})};return t.addEventListener("scroll",ne),()=>{t.removeEventListener("scroll",ne)}},[C,t,x,l,s,c,g]);const ie=Nc(({align:ne="auto",containerScrollOffset:pe,index:ye})=>{let we=Bz({align:ne,cachedBounds:C,containerScrollOffset:Gs({containerElement:t,direction:l,isRtl:s,scrollOffset:pe}),containerSize:x,index:ye,itemCount:c,itemSize:T});if(t){if(we=Gs({containerElement:t,direction:l,isRtl:s,scrollOffset:we}),typeof t.scrollTo!="function"){const ze=Z(we);Ti(k,ze)||E(ze)}return we}});return{getCellBounds:M,getEstimatedSize:P,scrollToIndex:ie,startIndexOverscan:Y,startIndexVisible:H,stopIndexOverscan:J,stopIndexVisible:Q}}function Gz(t){const[a,i]=fe.useState(t);return Ti(a,t)?a:(i(t),t)}function Xz(t,a){const{ariaAttributes:i,style:l,...s}=t,{ariaAttributes:c,style:d,...m}=a;return Ti(i,c)&&Ti(l,d)&&Ti(s,m)}function Iz(t){return t!=null&&typeof t=="object"&&"getAverageRowHeight"in t&&typeof t.getAverageRowHeight=="function"}function Qz({element:t,getCellBounds:a,isDynamicRowHeight:i,rowCount:l,rowElements:s,scrollToIndex:c}){const d=fe.useRef(null),m=fe.useRef(void 0),p=Nc(()=>{d.current=null,m.current!==void 0&&(cancelAnimationFrame(m.current),m.current=void 0)}),g=Nc(()=>{m.current=void 0;const b=d.current;if(!b)return;if(!t||!i||b.index>=l||performance.now()>=b.deadline){p();return}const w=c({align:b.align,containerScrollOffset:t.scrollTop,index:b.index});if(w!==void 0){const y=Math.max(0,Math.min(w,t.scrollHeight-t.clientHeight));if(Math.abs(y-t.scrollTop)>1)b.stableFrames=0,t.scrollTo({behavior:"instant",top:y});else{const x=s.current;if(!(x.some(T=>T.getAttribute(oo)===`${b.index}`)&&x.every(T=>{const C=Number(T.getAttribute(oo));return Math.abs(a(C).size-T.offsetHeight)<=1})))b.stableFrames=0;else if(++b.stableFrames>=2){p();return}}}m.current=requestAnimationFrame(g)});return Ci(()=>{if(!t)return;const b=w=>{switch(w.key){case"ArrowUp":case"ArrowDown":case"PageUp":case"PageDown":case"Home":case"End":case" ":p()}};return t.addEventListener("wheel",p,{passive:!0}),t.addEventListener("touchstart",p,{passive:!0}),t.addEventListener("pointerdown",p),t.addEventListener("keydown",b),()=>{p(),t.removeEventListener("wheel",p),t.removeEventListener("touchstart",p),t.removeEventListener("pointerdown",p),t.removeEventListener("keydown",b)}},[p,t]),fe.useCallback(({align:b="auto",behavior:w="auto",index:y})=>{i&&b==="smart"&&(b=c({align:"auto",containerScrollOffset:t?.scrollTop??0,index:y})===(t?.scrollTop??0)?"auto":"center");const x=c({align:b,containerScrollOffset:t?.scrollTop??0,index:y});p(),typeof t?.scrollTo=="function"&&(i&&(d.current={align:b,index:y,deadline:performance.now()+1e3,stableFrames:0},m.current=requestAnimationFrame(g)),t.scrollTo({behavior:i?"instant":w,top:x}))},[p,g,t,i,c])}const oo="data-react-window-index";function Zz({children:t,className:a,defaultHeight:i=0,listRef:l,onResize:s,onRowsRendered:c,overscanCount:d=3,rowComponent:m,rowCount:p,rowHeight:g,rowKey:b,rowProps:w,tagName:y="div",style:x,...T}){const C=Gz(w),M=fe.useMemo(()=>fe.memo(m,Xz),[m]),[k,E]=fe.useState(null),H=Iz(g),Y=fe.useMemo(()=>H?_=>g.getRowHeight(_)??g.getAverageRowHeight():g,[H,g]),{getCellBounds:Q,getEstimatedSize:J,scrollToIndex:P,startIndexOverscan:Z,startIndexVisible:ie,stopIndexOverscan:ne,stopIndexVisible:pe}=Yz({containerElement:k,containerStyle:x,defaultContainerSize:i,direction:"vertical",itemCount:p,itemProps:C,itemSize:Y,onResize:s,overscanCount:d}),ye=fe.useRef([]),we=Qz({element:k,getCellBounds:Q,isDynamicRowHeight:H,rowCount:p,rowElements:ye,scrollToIndex:P});fe.useImperativeHandle(l,()=>({get element(){return k},scrollToRow:we}),[k,we]),Ci(()=>{if(!k)return;const _=Array.from(k.children).slice(0,Z<0?0:ne-Z+1).filter((z,R)=>{if(z.hasAttribute("aria-hidden"))return!1;const X=`${Z+R}`;return z.setAttribute(oo,X),!0});if(ye.current=_,H)return g.observeRowElements(_)},[M,k,H,p,g,b,C,Z,ne]),fe.useEffect(()=>{Z>=0&&ne>=0&&c&&c({startIndex:ie,stopIndex:pe},{startIndex:Z,stopIndex:ne})},[c,Z,ie,ne,pe]);const ze=fe.useMemo(()=>{const _=[];if(p>0)for(let z=Z;z<=ne;z++){const R=Q(z);_.push(fe.createElement(M,{...C,ariaAttributes:{"aria-posinset":z+1,"aria-setsize":p,role:"listitem"},key:b?b(z,C):z,index:z,style:{position:"absolute",left:0,transform:`translateY(${R.scrollOffset}px)`,height:H?void 0:R.size,width:"100%"}}))}return _},[M,Q,H,p,b,C,Z,ne]),Me=he.jsx("div",{"aria-hidden":!0,style:{height:J(),width:"100%",zIndex:-1}});return fe.createElement(y,{role:"list",...T,className:a,ref:E,style:{position:"relative",maxHeight:"100%",flexGrow:1,overflowY:"auto",...x}},ze,t,Me)}function Wz({defaultRowHeight:t,key:a}){const[i,l]=fe.useState({key:a,map:new Map});i.key!==a&&l({key:a,map:new Map});const{map:s}=i,c=fe.useCallback(()=>{let w=0;return s.forEach(y=>{w+=y}),w===0?t:w/s.size},[t,s]),d=fe.useCallback(w=>{const y=s.get(w);return y!==void 0?y:t},[t,s]),m=fe.useCallback((w,y)=>{l(x=>{if(x.map.get(w)===y)return x;const T=new Map(x.map);return T.set(w,y),{...x,map:T}})},[]),p=Nc(w=>{w.length!==0&&w.forEach(y=>{const{borderBoxSize:x,target:T}=y,C=T.getAttribute(oo);On(C!==null,`Invalid ${oo} attribute value`);const M=parseInt(C),{blockSize:k}=x[0];k&&m(M,k)})}),[g]=fe.useState(()=>{if(typeof ResizeObserver<"u")return new ResizeObserver(p)});fe.useEffect(()=>{if(g)return()=>{g.disconnect()}},[g]);const b=fe.useCallback(w=>g?(w.forEach(y=>g.observe(y)),()=>{w.forEach(y=>g.unobserve(y))}):()=>{},[g]);return fe.useMemo(()=>({getAverageRowHeight:c,getRowHeight:d,setRowHeight:m,observeRowElements:b}),[c,d,m,b])}const Kz=({index:t,style:a,countries:i,selectedYear:l,selectedColumns:s,yearMap:c})=>{const d=i[t];return he.jsx("div",{style:a,children:he.jsx($z,{country:d,selectedYear:l,selectedColumns:s,yearDataMap:c.get(d.id)})})},Jz=fe.memo(({countries:t,searchQuery:a,selectedColumns:i,selectedRegion:l,selectedYear:s,sortField:c,sortOrder:d})=>{const m=Wz({defaultRowHeight:300}),p=fe.useMemo(()=>new Map(t.map(b=>[b.id,jz(b.data)])),[t]),g=fe.useMemo(()=>t.filter(b=>{const w=b.id.toLowerCase().includes(a.toLowerCase()),y=!l||b.data.some(x=>x.region===l);return w&&y}).sort((b,w)=>{if(c==="name")return d==="asc"?b.id.localeCompare(w.id):w.id.localeCompare(b.id);{const y=p.get(b.id),x=p.get(w.id),T=y&&yy(y,s)||0,C=x&&yy(x,s)||0;return d==="asc"?T-C:C-T}}),[t,a,l,c,d,s,p]);return he.jsx(Zz,{rowComponent:Kz,rowCount:g.length,rowHeight:m,rowProps:{countries:g,selectedYear:s,selectedColumns:i,yearMap:p},style:{height:600,width:"100%",border:"3px solid black"}})}),Pz="_overlay_zpkao_1",e5="_modal_zpkao_14",t5="_title_zpkao_23",n5="_columnList_zpkao_28",a5="_columnItem_zpkao_32",r5="_checkbox_zpkao_36",i5="_buttonContainer_zpkao_40",l5="_closeButton_zpkao_46",Ra={overlay:Pz,modal:e5,title:t5,columnList:n5,columnItem:a5,checkbox:r5,buttonContainer:i5,closeButton:l5},o5=fe.memo(({isOpen:t,availableColumns:a,selectedColumns:i,onToggle:l,onClose:s})=>t?he.jsx("div",{className:Ra.overlay,children:he.jsxs("div",{className:Ra.modal,children:[he.jsx("h2",{className:Ra.title,children:"Select columns to display"}),he.jsx("div",{className:Ra.columnList,children:a.map(c=>he.jsx("div",{className:Ra.columnItem,children:he.jsxs("label",{children:[he.jsx("input",{type:"checkbox",checked:i.includes(c),onChange:()=>l(c),className:Ra.checkbox}),c]})},c))}),he.jsx("div",{className:Ra.buttonContainer,children:he.jsx("button",{onClick:s,className:Ra.closeButton,children:"Close"})})]})}):null),s5="_container_kqzw8_1",c5="_title_kqzw8_7",u5="_controls_kqzw8_12",d5="_sortContainer_kqzw8_19",f5="_sortLabel_kqzw8_23",h5="_sortSelect_kqzw8_27",m5="_sortButton_kqzw8_33",p5="_columnButtonContainer_kqzw8_39",g5="_columnButton_kqzw8_39",v5="_errorMessage_kqzw8_49",b5="_noDataMessage_kqzw8_54",xn={container:s5,title:c5,controls:u5,sortContainer:d5,sortLabel:f5,sortSelect:h5,sortButton:m5,columnButtonContainer:p5,columnButton:g5,errorMessage:v5,noDataMessage:b5},y5=()=>{const{data:t,isLoading:a,error:i}=fz(),[l,s]=fe.useState({searchQuery:"",selectedRegion:"",selectedYear:2020,sortField:"population",sortOrder:"desc",selectedColumns:["year","population","co2","co2_per_capita"],isColumnModalOpen:!1}),c=fe.useMemo(()=>t?Uz(t):[],[t]),d=fe.useMemo(()=>Lz(),[]),m=fe.useCallback(x=>{s(T=>({...T,searchQuery:x}))},[]),p=fe.useCallback(x=>{s(T=>({...T,selectedYear:x}))},[]),g=fe.useCallback(x=>{s(T=>({...T,sortField:x}))},[]),b=fe.useCallback(()=>{s(x=>({...x,sortOrder:x.sortOrder==="asc"?"desc":"asc"}))},[]),w=fe.useCallback(x=>{s(T=>({...T,selectedColumns:T.selectedColumns.includes(x)?T.selectedColumns.filter(C=>C!==x):[...T.selectedColumns,x]}))},[]),y=fe.useCallback(()=>{s(x=>({...x,isColumnModalOpen:!x.isColumnModalOpen}))},[]);return a?he.jsx(pz,{}):i?he.jsxs("div",{className:xn.errorMessage,children:["Error: ",i]}):t?he.jsxs("div",{className:xn.container,children:[he.jsx("h1",{className:xn.title,children:"CO₂ Emissions Data Explorer"}),he.jsxs("div",{className:xn.controls,children:[he.jsx(yz,{value:l.searchQuery,onChange:m}),he.jsx(Sz,{year:l.selectedYear,years:c,onChange:p}),he.jsxs("div",{className:xn.sortContainer,children:[he.jsx("label",{className:xn.sortLabel,children:"Sort by:"}),he.jsxs("select",{value:l.sortField,onChange:x=>g(x.target.value),className:xn.sortSelect,children:[he.jsx("option",{value:"population",children:"Population"}),he.jsx("option",{value:"name",children:"Name"})]}),he.jsx("button",{onClick:b,className:xn.sortButton,children:l.sortOrder==="asc"?"Ascending":"Descending"})]}),he.jsx("div",{className:xn.columnButtonContainer,children:he.jsxs("button",{onClick:y,className:xn.columnButton,children:["Select columns (",l.selectedColumns.length," selected)"]})})]}),he.jsx(Jz,{countries:t,searchQuery:l.searchQuery,selectedColumns:l.selectedColumns,selectedRegion:l.selectedRegion,selectedYear:l.selectedYear,sortField:l.sortField,sortOrder:l.sortOrder,onYearChange:p}),he.jsx(o5,{isOpen:l.isColumnModalOpen,availableColumns:d,selectedColumns:l.selectedColumns,onToggle:w,onClose:y})]}):he.jsx("div",{className:xn.noDataMessage,children:"No data available"})};nz({enabled:!1});function w5(t,a,i){console.log(`${t} [${a}]: ${i.toFixed(2)}ms`)}dz.createRoot(document.getElementById("root")).render(he.jsx(fe.StrictMode,{children:he.jsx(fe.Profiler,{id:"App",onRender:w5,children:he.jsx(y5,{})})}));
