(this["webpackJsonplauren-portfolio-final"]=this["webpackJsonplauren-portfolio-final"]||[]).push([[0],{153:function(e,t,c){},155:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(49),i=c.n(s),l=(c(55),c(25)),r=c.n(l),o=c(50),d=c(4),j=c(26),b=c.n(j),u=c(27),m=c.n(u),h=(c(153),c(0));var x=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),i=Object(d.a)(s,2),l=i[0],j=i[1],u=Object(n.useState)(),x=Object(d.a)(u,2),O=x[0],p=x[1],g=Object(n.useState)("all"),f=Object(d.a)(g,2),y=f[0],v=f[1],S=Object(n.useState)(),C=Object(d.a)(S,2),w=C[0],N=C[1],q=Object(n.useState)(!1),k=Object(d.a)(q,2),z=k[0],M=k[1],I=Object(n.useState)(),T=Object(d.a)(I,2),A=T[0],D=T[1],E=Object(n.useState)(),H=Object(d.a)(E,2),L=H[0],B=H[1],V=Object(n.useState)(!1),F=Object(d.a)(V,2),P=F[0],J=F[1],R=Object(n.useState)(!1),X=Object(d.a)(R,2),Y=X[0],G=X[1],K=Object(n.useState)(!1),U=Object(d.a)(K,2),_=U[0],Q=U[1],W=Object(n.useState)("#all"),Z=Object(d.a)(W,2),$=Z[0],ee=Z[1],te=Object(n.useState)("#all"),ce=Object(d.a)(te,2),ne=ce[0],ae=ce[1],se="https://lauren-api-mongo.herokuapp.com";return Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(se+"/pieces");case 2:return t=e.sent,e.next=5,m.a.get(se+"/abouts");case 5:c=e.sent,p(c.data),j(t.data),a(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){if(!1===c){document.querySelector(".lightbox").id="image-"+w,!0===z?(document.querySelector(".lightbox").style.display="flex",document.querySelector(".lightbox").style.textDecoration="none"):document.querySelector(".lightbox").style.display="none";var e=document.querySelectorAll(".mobile-menu");if(!0===_){document.querySelector("#bottom-span").style.display="none",document.querySelector("#top-span").style.transform="translateY(14px) rotate(45deg)",document.querySelector("#top-span").style.borderColor="white",document.querySelector("#middle-span").style.transform="rotate(-45deg)",document.querySelector("#middle-span").style.borderColor="white",document.querySelector("#mobile-menu-container").style.width="80%";for(var t=0;t<e.length;t++)e[t].style.transform="translateX(0)"}else{document.querySelector("#bottom-span").style.display="block",document.querySelector("#top-span").style.transform="translateY(0) rotate(0)",document.querySelector("#top-span").style.borderColor="#615e5a",document.querySelector("#middle-span").style.transform="rotate(0)",document.querySelector("#middle-span").style.borderColor="#615e5a",document.querySelector("#mobile-menu-container").style.width="0";for(var n=0;n<e.length;n++)e[n].style.transform="translateX(%200)"}!0===Y?(document.querySelector("#imageContainer").style.display="none",document.querySelector(".ac-container").style.display="flex"):(document.querySelector("#imageContainer").style.display="flex",document.querySelector(".ac-container").style.display="none"),$!==ne&&(document.querySelector(ne).classList.remove("active"),document.querySelector($).classList.add("active"))}})),c?"Loading...":Object(h.jsxs)("div",{className:"App",id:"container",children:[Object(h.jsxs)("div",{id:"mobile-menu-container",children:[Object(h.jsxs)("button",{onClick:function(){return Q(!_)},className:"open-menu",children:[Object(h.jsx)("span",{id:"top-span"}),Object(h.jsx)("span",{id:"middle-span"}),Object(h.jsx)("span",{id:"bottom-span"})]}),Object(h.jsx)("a",{className:"mobile-menu",onClick:function(){v("all"),G(!1),Q(!1)},children:"All"}),Object(h.jsx)("a",{className:"mobile-menu",onClick:function(){v("characters"),G(!1),Q(!1)},children:"Characters"}),Object(h.jsx)("a",{className:"mobile-menu",onClick:function(){v("environments"),G(!1),Q(!1)},children:"Environments"}),Object(h.jsx)("a",{className:"mobile-menu",onClick:function(){v("drawings"),G(!1),Q(!1)},children:"Drawings"}),Object(h.jsx)("a",{className:"mobile-menu",onClick:function(){v(null),G(!0),Q(!1)},children:"About / Contact"})]}),Object(h.jsxs)("div",{id:"header",children:[Object(h.jsxs)("div",{id:"logo",children:[Object(h.jsx)("p",{id:"logo-name",children:"LAUREN PICKERING"}),Object(h.jsx)("p",{id:"logo-job",children:"Visual Development / Character Design"})]}),Object(h.jsxs)("div",{id:"menu",children:[Object(h.jsx)("a",{className:"active",id:"all",onClick:function(){v("all"),G(!1),ae($),ee("#all")},children:"All"}),Object(h.jsx)("a",{id:"characters",onClick:function(){v("characters"),G(!1),ae($),ee("#characters")},children:"Characters"}),Object(h.jsx)("a",{id:"environments",onClick:function(){v("environments"),G(!1),ae($),ee("#environments")},children:"Environments"}),Object(h.jsx)("a",{id:"drawings",onClick:function(){v("drawings"),G(!1),ae($),ee("#drawings")},children:"Drawings"}),Object(h.jsx)("a",{id:"about-contact",onClick:function(){v(null),G(!0),ae($),ee("#about-contact")},children:"About / Contact"})]})]}),Object(h.jsx)("div",{id:"imageContainer",children:l.filter((function(e){return"all"===y||e.ImageType===y})).map((function(e,t){return Object(h.jsxs)("a",{onClick:function(){N(t),J(se+e.Image[0].url),M(!0),D(e.Title),B(e.Description)},href:"#image-"+t,className:"image-parent "+e.ImageSize+" "+e.ImageType,children:[Object(h.jsx)("img",{className:"image",src:se+e.Image[0].url},t),Object(h.jsxs)("div",{className:"overlay-container",children:[Object(h.jsx)("div",{className:"overlay"}),Object(h.jsx)("p",{className:"title",children:e.Title})]})]},t)}))}),Object(h.jsxs)("a",{onClick:function(){return M(!1)},href:"#",className:"lightbox",children:[Object(h.jsx)("img",{className:"lightbox-image",src:P}),Object(h.jsxs)("div",{className:"lightbox-text",children:[Object(h.jsx)("p",{className:"lightbox-text-title",children:A}),Object(h.jsx)("p",{className:"lightbox-text-description",children:Object(h.jsx)(b.a,{children:L})})]})]}),Object(h.jsxs)("div",{className:"ac-container",children:[Object(h.jsxs)("div",{className:"about-container",children:[Object(h.jsx)("img",{src:se+O[0].Image[0].url}),Object(h.jsxs)("div",{id:"about-text-container",children:[Object(h.jsx)("p",{className:"about-container-title",children:O[0].Title}),Object(h.jsx)("p",{className:"about-container-description",children:Object(h.jsx)(b.a,{children:O[0].Description})}),Object(h.jsxs)("div",{className:"about-container-social",children:[Object(h.jsx)("a",{href:"https://linkedin.com/",children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"48",height:"48",children:[Object(h.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(h.jsx)("path",{d:"M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z",fill:"rgba(39,130,188,1)"})]})}),Object(h.jsx)("a",{href:"#",children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"46",height:"46",children:[Object(h.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(h.jsx)("path",{d:"M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z",fill:"rgba(155,89,182,1)"})]})}),Object(h.jsx)("a",{href:"#",children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"48",height:"48",children:[Object(h.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(h.jsx)("path",{d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z",fill:"rgba(255,201,239,1)"})]})})]})]})]}),Object(h.jsxs)("div",{className:"contact-container",children:[Object(h.jsx)("p",{children:"CONTACT ME"}),Object(h.jsxs)("form",{action:"https://formspree.io/f/xnqokqbn",method:"POST",children:[Object(h.jsx)("label",{children:Object(h.jsx)("input",{placeholder:"Name...",type:"text",name:"name"})}),Object(h.jsx)("label",{children:Object(h.jsx)("input",{placeholder:"Email...",type:"text",name:"_replyto"})}),Object(h.jsx)("label",{children:Object(h.jsx)("textarea",{placeholder:"Description...",name:"message"})}),Object(h.jsx)("button",{type:"submit",children:"Send"})]})]})]})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,156)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),O()},55:function(e,t,c){}},[[155,1,2]]]);
//# sourceMappingURL=main.68af27f9.chunk.js.map