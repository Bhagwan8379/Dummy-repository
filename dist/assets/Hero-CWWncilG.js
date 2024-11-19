import{u as x,a as v,c as w,b as m,r as p,_ as f,j as n,T as k,F as C,d as j,e as P,f as S}from"./index-iJdlwSna.js";import{u as T,c as E,C as N}from"./Contact-Bd5QJ1a1.js";import B from"./Education-CuSJkAFk.js";import A from"./Skills-CpQDr5_w.js";import I from"./Projects-BF9WBXP7.js";import O from"./About-CADtYtBx.js";import D from"./Footer-BEDlgDwt.js";import L from"./Progress-CsckVLDa.js";import"./index-yVj9fitM.js";const F="/assets/home-DhgV6NVx.jpg",H="/assets/dummy-Dl4P9j88.pdf";function h(){return h=Object.assign?Object.assign.bind():function(o){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(o[s]=t[s])}return o},h.apply(this,arguments)}var q={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(o){},onComplete:function(o){},preStringTyped:function(o,i){},onStringTyped:function(o,i){},onLastStringBackspaced:function(o){},onTypingPaused:function(o,i){},onTypingResumed:function(o,i){},onReset:function(o){},onStop:function(o,i){},onStart:function(o,i){},onDestroy:function(o){}},M=new(function(){function o(){}var i=o.prototype;return i.load=function(t,s,e){if(t.el=typeof e=="string"?document.querySelector(e):e,t.options=h({},q,s),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(l){return l.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var a=Array.prototype.slice.apply(t.stringsElement.children),r=a.length;if(r)for(var c=0;c<r;c+=1)t.strings.push(a[c].innerHTML.trim())}for(var u in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[u]=u;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},i.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},i.appendCursorAnimationCss=function(t){var s="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(e)}},i.appendFadeOutAnimationCss=function(t){var s="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(e)}},o}()),g=new(function(){function o(){}var i=o.prototype;return i.typeHtmlChars=function(t,s,e){if(e.contentType!=="html")return s;var a=t.substring(s).charAt(0);if(a==="<"||a==="&"){var r;for(r=a==="<"?">":";";t.substring(s+1).charAt(0)!==r&&!(1+ ++s>t.length););s++}return s},i.backSpaceHtmlChars=function(t,s,e){if(e.contentType!=="html")return s;var a=t.substring(s).charAt(0);if(a===">"||a===";"){var r;for(r=a===">"?"<":"&";t.substring(s-1).charAt(0)!==r&&!(--s<0););s--}return s},o}()),_=function(){function o(t,s){M.load(this,s,t),this.begin()}var i=o.prototype;return i.toggle=function(){this.pause.status?this.start():this.stop()},i.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},i.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},i.destroy=function(){this.reset(!1),this.options.onDestroy(this)},i.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},i.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},i.typewrite=function(t,s){var e=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var a=this.humanizer(this.typeSpeed),r=1;this.pause.status!==!0?this.timeout=setTimeout(function(){s=g.typeHtmlChars(t,s,e);var c=0,u=t.substring(s);if(u.charAt(0)==="^"&&/^\^\d+/.test(u)){var l=1;l+=(u=/\d+/.exec(u)[0]).length,c=parseInt(u),e.temporaryPause=!0,e.options.onTypingPaused(e.arrayPos,e),t=t.substring(0,s)+t.substring(s+l),e.toggleBlinking(!0)}if(u.charAt(0)==="`"){for(;t.substring(s+r).charAt(0)!=="`"&&(r++,!(s+r>t.length)););var d=t.substring(0,s),y=t.substring(d.length+1,s+r),b=t.substring(s+r+1);t=d+y+b,r--}e.timeout=setTimeout(function(){e.toggleBlinking(!1),s>=t.length?e.doneTyping(t,s):e.keepTyping(t,s,r),e.temporaryPause&&(e.temporaryPause=!1,e.options.onTypingResumed(e.arrayPos,e))},c)},a):this.setPauseStatus(t,s,!0)},i.keepTyping=function(t,s,e){s===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var a=t.substring(0,s+=e);this.replaceText(a),this.typewrite(t,s)},i.doneTyping=function(t,s){var e=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){e.backspace(t,s)},this.backDelay))},i.backspace=function(t,s){var e=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var a=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){s=g.backSpaceHtmlChars(t,s,e);var r=t.substring(0,s);if(e.replaceText(r),e.smartBackspace){var c=e.strings[e.arrayPos+1];e.stopNum=c&&r===c.substring(0,s)?s:0}s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.options.onLastStringBackspaced(),e.shuffleStringsIfNeeded(),e.begin()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s))},a)}else this.setPauseStatus(t,s,!1)},i.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},i.setPauseStatus=function(t,s,e){this.pause.typewrite=e,this.pause.curString=t,this.pause.curStrPos=s},i.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},i.humanizer=function(t){return Math.round(Math.random()*t/2)+t},i.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},i.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},i.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},i.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(s){t.stop()}),this.el.addEventListener("blur",function(s){t.el.value&&t.el.value.length!==0||t.start()}))},i.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},o}();const R=()=>{const o=x(),[i,{isSuccess:t,isError:s,error:e,isLoading:a}]=v(),r=T({initialValues:{email:"",password:""},validationSchema:w({email:m().required("Enter Email"),password:m().required("Enter Password")}),onSubmit:(u,{resetForm:l})=>{i(u),l()}}),c=u=>E({"input input-bordered text-slate-400 w-full bg-transparent grow":!0,"input input-bordered text-slate-400 w-full bg-transparent input-success":!r.errors[u]&&r.touched[u],"input input-bordered text-slate-400 w-full bg-transparent input-error":r.errors[u]&&r.touched[u]});return p.useEffect(()=>{t&&(f.success("👍 Admin Register.."),o("/admin"))},[t]),p.useEffect(()=>{s&&f.error("👎 Admin Register Error..")},[s]),n.jsx("div",{children:n.jsx("div",{children:n.jsxs("dialog",{id:"my_modal_2",className:"modal ",children:[n.jsx("form",{onSubmit:r.handleSubmit,children:n.jsxs("div",{className:"modal-box bg-transparent w-96 opacity-100 backdrop-blur-3xl border-white border brightness-200 ",children:[n.jsx("div",{className:"flex justify-center items-center ",children:n.jsx("input",{...r.getFieldProps("email"),type:"text",className:c("email"),placeholder:"Enter Email"})}),n.jsx("div",{className:"flex justify-center items-center  pt-2",children:n.jsx("input",{...r.getFieldProps("password"),type:"password",className:c("password"),placeholder:"Enter Password"})}),n.jsx("button",{type:"submit",class:"btn btn-primary w-full mt-4",children:"Login"})]})}),n.jsx("form",{method:"dialog",className:"modal-backdrop",children:n.jsx("button",{children:"close"})})]})})})},z=()=>{const{isDark:o,ToggleTheme:i}=p.useContext(k),t=p.useRef(null),s=()=>{window.open("https://www.instagram.com/bhagwan_gire_96k?igsh=MWR4aDg5eG5pZXFweA==")},e=()=>{window.open("https://github.com/Bhagwan8379")},a=()=>{window.open("https://www.linkedin.com/in/bhagwan-gire-84013a293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")};return p.useEffect(()=>{const r=new _(t.current,{strings:["FrontEnd Developer...!","BackEnd Devloper...!","Graphic Designer...!","Android Developer...!"],typeSpeed:50,loop:!0});return()=>{r.destroy()}},[]),n.jsx("div",{id:"hero",style:{backgroundImage:`url(${o?"https://i.pinimg.com/736x/e5/80/84/e58084c7456ca2654e8ae52ff72f6c1d.jpg":"https://i.pinimg.com/736x/d8/fb/ce/d8fbceffb4f8579ee4c1331dbe392ed7.jpg"})`},className:"background-container bg-cover bg-fixed bg-no-repeat bg-center w-full",children:n.jsxs("div",{className:"md:flex p-4 md:justify-start md:items-center gap-10 ",children:[n.jsx("div",{className:" p-2 pt-10  ps-5 md:size-[150%] size-72 justify-center flex",children:n.jsx("img",{className:" py-2 mt-3 px-2 rounded-full border shadow-2xl shadow-black dark:shadow-white ",src:F,alt:""})}),n.jsx("div",{className:"flex justify-center md:items-center pt-10 h-screen md:h-full",children:n.jsxs("div",{className:"md:p-4 ",children:[n.jsxs("div",{className:"font-bold text-6xl text-center md:text-left dark:text-slate-100 text-slate-300 pb-4",children:["Hi 👋 I'M ",n.jsx("span",{className:"animate-pulse",children:"Bhagwan"})]}),n.jsx("div",{className:" md:flex-none flex justify-center md:justify-normal",children:n.jsx("div",{className:" pb-4 ",children:n.jsxs("span",{className:"dark:text-slate-200 text-slate-400 font-bold text-xl",children:["I'm a",n.jsx("span",{ref:t,className:"py-6  text-green-500 font-bold text-xl ms-2"})]})})}),n.jsx("p",{className:"text-white md:w-[90%]",children:"Welcome to My Portfolio! Hello and thank you for visiting! This is where I showcase my work in web and mobile development, combining design and functionality to create impactful digital experiences. Here, you’ll find projects that highlight my approach to frontend, backend, and full-stack development, as well as my commitment to continuous learning and growth in the tech world. Take a look around, explore my work, and feel free to reach out—I’m always excited to connect and collaborate on new ideas!"}),n.jsxs("div",{className:"flex gap-16 py-5",children:[n.jsx(C,{onClick:s,className:"size-8 hover:animate-pulse  dark:text-secondary text-white hover:dark:text-white hover:text-secondary hover:cursor-pointer"}),n.jsx(j,{onClick:e,className:"size-8 hover:animate-pulse  dark:text-primary text-white hover:dark:text-white hover:text-primary hover:cursor-pointer"}),n.jsx(P,{onClick:a,className:"size-8 hover:animate-pulse  dark:text-info text-white hover:dark:text-white hover:text-info hover:cursor-pointer"})]}),n.jsxs("button",{onClick:()=>window.location.href=H,className:"w-auto dark:text-slate-200 btn btn-outline btn-info mt-2 ",children:["Download CV ",n.jsx("i",{children:n.jsx(S,{size:15})})]})]})}),n.jsx(R,{})]})})},K=()=>n.jsxs(n.Fragment,{children:[n.jsx(z,{}),n.jsx(B,{}),n.jsx(A,{}),n.jsx(L,{}),n.jsx(I,{}),n.jsx(O,{}),n.jsx(N,{}),n.jsx(D,{})]});export{K as default};