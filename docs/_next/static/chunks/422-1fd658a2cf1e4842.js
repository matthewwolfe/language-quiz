"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[422],{4422:function(e,r,n){n.d(r,{A:function(){return W}});var t=n(5893),o=n(7294),i=n(7583),u=n(1163),a=n(3321);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=function(e){var r=e.variant,n=void 0===r?"contained":r,o=l(e,["variant"]);return(0,t.jsx)(a.Z,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){c(e,r,n[r])}))}return e}({},o,{disableElevation:!0,disableRipple:!0,sx:{borderRadius:4,fontSize:24,py:4,px:12},variant:n}))},f=n(4073);(0,n(1496).ZP)(f.Z)((function(){return{"@media print":{border:0,padding:0}}}));var d=n(7357);function b(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var p=function(e){return(0,t.jsx)(d.Z,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){b(e,r,n[r])}))}return e}({},e,{display:"flex"}))},h=n(122),y=n(1664),x=n.n(y);function m(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function j(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var v=function(e){var r=e.children,n=j(e,["children"]);return(0,t.jsx)(x(),function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){m(e,r,n[r])}))}return e}({},n,{passHref:!0,children:(0,t.jsx)(h.Z,{sx:{fontSize:18,textDecoration:"none"},children:r})}))};var g=function(){var e=(0,u.useRouter)().pathname;return(0,t.jsxs)(p,{children:["/"!==e&&(0,t.jsx)(p,{sx:{flexDirection:"column",justifyContent:"center",mr:4},children:(0,t.jsx)(v,{href:"/",children:"Words"})}),"/phrases"!==e&&(0,t.jsx)(p,{sx:{flexDirection:"column",justifyContent:"center"},children:(0,t.jsx)(v,{href:"/phrases",children:"Phrases"})})]})};var O=function(e,r){return Math.floor(Math.random()*(r-e+1)+e)};function w(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function P(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return w(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S=function(e){var r=(0,i.q)().pairs;return{answers:(0,o.useMemo)((function(){return e?P(Array.from(Array(3)).map((function(){var e=O(1,r.length);return r[e]}))).concat([e]).map((function(e){return{value:e,sort:Math.random()}})).sort((function(e,r){return e.sort-r.sort})).map((function(e){return e.value})):[]}),[e,r])}},C=n(52),k=n(8288),A=n(5861),q=n(480),M=n(7027);var Z=function(e){var r=e.answer,n=e.disabled,i=e.error,u=e.onChange,a=e.selected,c=e.success,l=(0,o.useMemo)((function(){return i?"error.light":c?"success.light":a?"primary.main":"primary.50"}),[i,a,c]);return(0,t.jsx)(q.Z,{control:(0,t.jsx)(M.Z,{disabled:n,onChange:u,sx:{"&.Mui-checked":{color:"background.paper"}}}),label:r.english,sx:{backgroundColor:l,borderRadius:4,display:"flex",margin:0,p:4,py:3,mb:3,"& .MuiFormControlLabel-label, & .Mui-disabled.MuiFormControlLabel-label":{color:a?"background.paper":"text.primary",fontSize:24,marginLeft:4}},value:r.english})};var E=function(e){var r=e.answers,n=e.onNext,o=e.onSubmit,i=e.revealAnswer,u=e.selectedAnswer,a=e.selectedPair,c=e.setSelectedAnswer;return(0,t.jsxs)(p,{sx:{flexDirection:"column",width:1},children:[(0,t.jsx)(p,{sx:{mb:4},children:(0,t.jsx)(A.Z,{variant:"h2",sx:{fontWeight:"bold"},children:a.spanish})}),(0,t.jsx)(p,{sx:{width:1},children:(0,t.jsx)(C.Z,{sx:{width:1},children:(0,t.jsx)(k.Z,{sx:{width:1},children:r.map((function(e){var r=u===e;return(0,t.jsx)(Z,{answer:e,disabled:i,error:i&&u!==a&&r,onChange:function(){return c(e)},selected:r,success:i&&a===e},e.number)}))})})}),(0,t.jsxs)(p,{sx:{mt:2,width:1},children:[!i&&(0,t.jsx)(s,{disabled:null===u,fullWidth:!0,onClick:o,children:"Submit"}),i&&(0,t.jsx)(s,{fullWidth:!0,onClick:n,children:"Next"})]})]})};var D=function(){var e=(0,i.q)(),r=e.selectedPair,n=e.generateSelectedPair,u=S(r).answers,a=(0,o.useState)(null),c=a[0],l=a[1],s=(0,o.useState)(!1),f=s[0],d=s[1],b=(0,o.useCallback)((function(){d(!1),l(null),n()}),[n]),p=(0,o.useCallback)((function(){d(!0)}),[]);return r?(0,t.jsx)(E,{answers:u,onNext:b,onSubmit:p,revealAnswer:f,selectedAnswer:c,selectedPair:r,setSelectedAnswer:l}):null};var I=function(e){var r=e.questionCount;return(0,t.jsx)(p,{children:(0,t.jsxs)(A.Z,{variant:"h4",sx:{color:"secondary.main"},children:["Question ",r]})})};var N=function(){var e=(0,i.q)().questionCount;return(0,t.jsx)(I,{questionCount:e})};var R=function(){return(0,t.jsxs)(p,{sx:{flexDirection:"column",px:6,py:2},children:[(0,t.jsxs)(p,{sx:{justifyContent:"space-between",mb:2},children:[(0,t.jsx)(N,{}),(0,t.jsx)(g,{})]}),(0,t.jsx)(D,{})]})};var W=function(){var e=(0,i.q)(),r=e.generateSelectedPair,n=e.pairs;return(0,o.useEffect)((function(){n.length&&r()}),[r,n]),(0,t.jsx)(R,{})}},7583:function(e,r,n){n.d(r,{q:function(){return t}});var t=(0,n(6902).ZP)()((function(e){return{pairs:[],questionCount:0,selectedPair:null,generateSelectedPair:function(){return e((function(e){var r=e.questionCount,n=e.pairs;return{questionCount:r+1,selectedPair:n[Math.floor(Math.random()*n.length)]}}))},setPairs:function(r){return e({questionCount:0,pairs:r})}}}))}}]);