import{S as SvelteComponent,i as init,s as safe_not_equal,l as element,u as text,a as space,m as claim_element,p as children,v as claim_text,h as detach,c as claim_space,q as attr,b as insert_hydration,C as append_hydration,J as listen,w as set_data,n as noop,f as transition_in,g as group_outros,d as check_outros,t as transition_out,K as destroy_each,x as create_component,y as claim_component,z as mount_component,A as destroy_component}from"../../chunks/index-f623cb83.js";function create_fragment$3(n){let e,a,t,c,i,h,l,_,d,x,r,v,u,b;return{c(){e=element("div"),a=element("div"),t=element("div"),c=element("span"),i=text("$system>"),h=space(),l=element("input"),_=space(),d=element("pre"),x=text("		"),r=text(n[1]),v=text(`\r
    `),this.h()},l(p){e=claim_element(p,"DIV",{});var g=children(e);a=claim_element(g,"DIV",{});var y=children(a);t=claim_element(y,"DIV",{class:!0});var o=children(t);c=claim_element(o,"SPAN",{class:!0});var $=children(c);i=claim_text($,"$system>"),$.forEach(detach),h=claim_space(o),l=claim_element(o,"INPUT",{class:!0,type:!0,tabindex:!0}),o.forEach(detach),y.forEach(detach),_=claim_space(g),d=claim_element(g,"PRE",{class:!0});var s=children(d);x=claim_text(s,"		"),r=claim_text(s,n[1]),v=claim_text(s,`\r
    `),s.forEach(detach),g.forEach(detach),this.h()},h(){attr(c,"class","py-1 pl-2 pr-4 font-bold rounded-l-lg text-chalk-green font-mono"),l.autofocus=!0,attr(l,"class","pl-4 font-mono caret-chalk-green bg-transparent flex-grow p-1 text-chalk-light-gray focus:outline-0 "),attr(l,"type","text"),attr(l,"tabindex","0"),l.disabled=n[2],l.value=n[0],attr(t,"class","flex "),attr(d,"class","text-chalk-light-gray pl-2 -mt-6")},m(p,g){insert_hydration(p,e,g),append_hydration(e,a),append_hydration(a,t),append_hydration(t,c),append_hydration(c,i),append_hydration(t,h),append_hydration(t,l),append_hydration(e,_),append_hydration(e,d),append_hydration(d,x),append_hydration(d,r),append_hydration(d,v),l.focus(),u||(b=listen(l,"keydown",n[3]),u=!0)},p(p,[g]){g&4&&(l.disabled=p[2]),g&1&&l.value!==p[0]&&(l.value=p[0]),g&2&&set_data(r,p[1])},i:noop,o:noop,d(p){p&&detach(e),u=!1,b()}}}function instance$1($$self,$$props,$$invalidate){let{globalString=""}=$$props,{initialValue=""}=$$props,{addGlobalString=n=>{console.log(n)}}=$$props,{addTerminalLine=()=>{console.log("add terminal line")}}=$$props,{clearTerminal=()=>{console.log("clear terminal")}}=$$props,result="",disable_input=!1;const handleKeyDown=event=>{if(event.key==="Enter"){if(event.target.value.trim()==="clear"||event.target.value.trim()==="cls"||event.target.value.trim()==="clear()"){clearTerminal();return}try{let elementValue=event.target.value;const consoleLog=/console.log/g;consoleLog.test(elementValue)&&(elementValue=elementValue.replace(consoleLog,"logs.push"),elementValue+=` 
 JSON.parse(JSON.stringify(logs))`),$$invalidate(1,result=JSON.stringify(eval(globalString+elementValue),null,4)),addGlobalString(event.target.value)}catch(n){$$invalidate(1,result=n.message)}$$invalidate(1,result=`
`+result),$$invalidate(2,disable_input=!0),addTerminalLine()}};return initialValue&&(result=JSON.stringify(eval(globalString+initialValue),null,4),result=`
`+result,disable_input=!0,addTerminalLine()),$$self.$$set=n=>{"globalString"in n&&$$invalidate(4,globalString=n.globalString),"initialValue"in n&&$$invalidate(0,initialValue=n.initialValue),"addGlobalString"in n&&$$invalidate(5,addGlobalString=n.addGlobalString),"addTerminalLine"in n&&$$invalidate(6,addTerminalLine=n.addTerminalLine),"clearTerminal"in n&&$$invalidate(7,clearTerminal=n.clearTerminal)},[initialValue,result,disable_input,handleKeyDown,globalString,addGlobalString,addTerminalLine,clearTerminal]}class Terminal_line extends SvelteComponent{constructor(e){super(),init(this,e,instance$1,create_fragment$3,safe_not_equal,{globalString:4,initialValue:0,addGlobalString:5,addTerminalLine:6,clearTerminal:7})}}function get_each_context(n,e,a){const t=n.slice();return t[8]=e[a],t}function create_each_block(n){let e,a;return e=new Terminal_line({props:{clearTerminal:n[3],addTerminalLine:n[4],addGlobalString:n[5],globalString:n[1],initialValue:n[8]}}),{c(){create_component(e.$$.fragment)},l(t){claim_component(e.$$.fragment,t)},m(t,c){mount_component(e,t,c),a=!0},p(t,c){const i={};c&2&&(i.globalString=t[1]),c&1&&(i.initialValue=t[8]),e.$set(i)},i(t){a||(transition_in(e.$$.fragment,t),a=!0)},o(t){transition_out(e.$$.fragment,t),a=!1},d(t){destroy_component(e,t)}}}function create_fragment$2(n){let e,a,t,c,i,h,l,_,d,x,r,v,u,b,p,g,y=n[0],o=[];for(let s=0;s<y.length;s+=1)o[s]=create_each_block(get_each_context(n,y,s));const $=s=>transition_out(o[s],1,1,()=>{o[s]=null});return{c(){e=element("div"),a=element("div"),t=element("p"),c=text("fake-js-console by LLuth"),i=space(),h=element("div"),l=element("div"),_=space(),d=element("div"),x=space(),r=element("div"),v=space(),u=element("div");for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){e=claim_element(s,"DIV",{class:!0});var f=children(e);a=claim_element(f,"DIV",{id:!0,class:!0});var m=children(a);t=claim_element(m,"P",{class:!0});var S=children(t);c=claim_text(S,"fake-js-console by LLuth"),S.forEach(detach),i=claim_space(m),h=claim_element(m,"DIV",{class:!0});var V=children(h);l=claim_element(V,"DIV",{class:!0}),children(l).forEach(detach),_=claim_space(V),d=claim_element(V,"DIV",{class:!0}),children(d).forEach(detach),x=claim_space(V),r=claim_element(V,"DIV",{class:!0}),children(r).forEach(detach),V.forEach(detach),m.forEach(detach),v=claim_space(f),u=claim_element(f,"DIV",{id:!0,class:!0});var T=children(u);for(let k=0;k<o.length;k+=1)o[k].l(T);T.forEach(detach),f.forEach(detach),this.h()},h(){attr(t,"class","font-mono text-chalk-orange"),attr(l,"class","w-[1rem] h-[1rem] bg-chalk-green rounded-full mx-1 my-auto"),attr(d,"class","w-[1rem] h-[1rem] bg-chalk-yellow rounded-full mx-1 my-auto"),attr(r,"class","w-[1rem] h-[1rem] bg-chalk-red rounded-full mx-1 my-auto"),attr(h,"class","flex ml-auto"),attr(a,"id","terminal-head"),attr(a,"class","flex "),attr(u,"id","terminal-body"),attr(u,"class","terminal-body p-4 overflow-auto sc3 flex-grow"),attr(e,"class","terminal flex flex-col m-auto bg-chalk-black min-w-[350px] w-[50%] h-[300px] max-w-[100%] rounded-lg p-4 ")},m(s,f){insert_hydration(s,e,f),append_hydration(e,a),append_hydration(a,t),append_hydration(t,c),append_hydration(a,i),append_hydration(a,h),append_hydration(h,l),append_hydration(h,_),append_hydration(h,d),append_hydration(h,x),append_hydration(h,r),append_hydration(e,v),append_hydration(e,u);for(let m=0;m<o.length;m+=1)o[m].m(u,null);b=!0,p||(g=listen(e,"click",n[2]),p=!0)},p(s,[f]){if(f&59){y=s[0];let m;for(m=0;m<y.length;m+=1){const S=get_each_context(s,y,m);o[m]?(o[m].p(S,f),transition_in(o[m],1)):(o[m]=create_each_block(S),o[m].c(),transition_in(o[m],1),o[m].m(u,null))}for(group_outros(),m=y.length;m<o.length;m+=1)$(m);check_outros()}},i(s){if(!b){for(let f=0;f<y.length;f+=1)transition_in(o[f]);b=!0}},o(s){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)transition_out(o[f]);b=!1},d(s){s&&detach(e),destroy_each(o,s),p=!1,g()}}}function instance(n,e,a){let{initData:t=`{
        name : "Luthfi",
        gender: "Male"
    }`}=e,c=["data.greeting"],i=`
    let logs = [];
    let data = ${t}
    

    `;const h=async r=>new Promise(v=>setTimeout(v,r)),l=()=>{const r=document.querySelectorAll("input");r[r.length-1].focus()},_=async()=>{a(0,c=[]),await h(100),a(0,c=[""])},d=()=>{a(0,c=[...c,""])},x=r=>{const v=/const.*=/g,u=/let.*=/g,b=/var.*=/g,p=/=/g;(v.test(r)||u.test(r)||b.test(r)||p.test(r))&&a(1,i=i+r+`
`)};return n.$$set=r=>{"initData"in r&&a(6,t=r.initData)},[c,i,l,_,d,x,t]}class Terminal extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment$2,safe_not_equal,{initData:6})}}const data={name:"Luthfi",fullname:"Muhammad Luthfi Albiansyah",greeting:"Hello, I'm Luthfi, a web developer from Indonesia"};function create_fragment$1(n){let e,a,t,c,i,h,l,_,d,x,r,v,u,b;return{c(){e=element("div"),a=element("div"),t=element("p"),c=text("hi, i'm "),i=element("span"),h=text("Luthfi"),l=text(","),_=space(),d=element("p"),x=text(`i'm web developer from\r
			`),r=element("span"),v=text("Indo"),u=element("span"),b=text("nesia"),this.h()},l(p){e=claim_element(p,"DIV",{class:!0});var g=children(e);a=claim_element(g,"DIV",{class:!0});var y=children(a);t=claim_element(y,"P",{class:!0});var o=children(t);c=claim_text(o,"hi, i'm "),i=claim_element(o,"SPAN",{class:!0});var $=children(i);h=claim_text($,"Luthfi"),$.forEach(detach),l=claim_text(o,","),o.forEach(detach),_=claim_space(y),d=claim_element(y,"P",{class:!0});var s=children(d);x=claim_text(s,`i'm web developer from\r
			`),r=claim_element(s,"SPAN",{class:!0});var f=children(r);v=claim_text(f,"Indo"),f.forEach(detach),u=claim_element(s,"SPAN",{class:!0});var m=children(u);b=claim_text(m,"nesia"),m.forEach(detach),s.forEach(detach),y.forEach(detach),g.forEach(detach),this.h()},h(){attr(i,"class","text-chalk-orange "),attr(t,"class","text-chalk-light-gray text-center m-auto text-4xl"),attr(r,"class","text-chalk-red"),attr(u,"class","text-chalk-light-gray"),attr(d,"class","text-chalk-gray text-center m-auto text-3xl"),attr(a,"class","flex flex-col font-mono"),attr(e,"class","bg-chalk-black p-4 pt-32")},m(p,g){insert_hydration(p,e,g),append_hydration(e,a),append_hydration(a,t),append_hydration(t,c),append_hydration(t,i),append_hydration(i,h),append_hydration(t,l),append_hydration(a,_),append_hydration(a,d),append_hydration(d,x),append_hydration(d,r),append_hydration(r,v),append_hydration(d,u),append_hydration(u,b)},p:noop,i:noop,o:noop,d(p){p&&detach(e)}}}class About extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment$1,safe_not_equal,{})}}function create_fragment(n){let e,a,t,c,i,h;return t=new Terminal({props:{initData:JSON.stringify(data)}}),i=new About({}),{c(){e=element("div"),a=element("div"),create_component(t.$$.fragment),c=space(),create_component(i.$$.fragment),this.h()},l(l){e=claim_element(l,"DIV",{class:!0});var _=children(e);a=claim_element(_,"DIV",{class:!0});var d=children(a);claim_component(t.$$.fragment,d),d.forEach(detach),c=claim_space(_),claim_component(i.$$.fragment,_),_.forEach(detach),this.h()},h(){attr(a,"class","container flex lg:p-8 md:p-4 sm:p-1 py-4"),attr(e,"class","m-auto ")},m(l,_){insert_hydration(l,e,_),append_hydration(e,a),mount_component(t,a,null),append_hydration(e,c),mount_component(i,e,null),h=!0},p:noop,i(l){h||(transition_in(t.$$.fragment,l),transition_in(i.$$.fragment,l),h=!0)},o(l){transition_out(t.$$.fragment,l),transition_out(i.$$.fragment,l),h=!1},d(l){l&&detach(e),destroy_component(t),destroy_component(i)}}}class Page extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export{Page as default};
