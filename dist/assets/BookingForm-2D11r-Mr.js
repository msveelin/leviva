import{_ as b,u as g,r as w,c as y,a as _,e as t,w as x,f as d,v as m,g as S,F as k,b as q,o as D,L as N,d as T,p as j,h as F}from"./index-LcKunmKa.js";const c={_origin:"https://api.emailjs.com"},B=(s,e="https://api.emailjs.com")=>{c._userID=s,c._origin=e},h=(s,e,o)=>{if(!s)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class f{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const v=(s,e,o={})=>new Promise((l,r)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:a})=>{const u=new f(a);u.status===200||u.text==="OK"?l(u):r(u)}),i.addEventListener("error",({target:a})=>{r(new f(a))}),i.open("POST",c._origin+s,!0),Object.keys(o).forEach(a=>{i.setRequestHeader(a,o[a])}),i.send(e)}),V=(s,e,o,l)=>{const r=l||c._userID;return h(r,s,e),v("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:r,service_id:s,template_id:e,template_params:o}),{"Content-type":"application/json"})},P=s=>{let e;if(typeof s=="string"?e=document.querySelector(s):e=s,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},E=(s,e,o,l)=>{const r=l||c._userID,i=P(o);h(r,s,e);const a=new FormData(i);return a.append("lib_version","3.11.0"),a.append("service_id",s),a.append("template_id",e),a.append("user_id",r),v("/api/v1.0/email/send-form",a)},p={init:B,send:V,sendForm:E},n=s=>(j("data-v-f034caa3"),s=s(),F(),s),I={class:"bg-white text-black"},L=q('<main class="intro bg-black text-white" data-v-f034caa3><div class="p-4 fixed top-0 w-full" data-v-f034caa3></div><div class="intro-main pt-10 flex justify-center items-center" data-v-f034caa3><div class="items-center flex flex-col justify-center" data-v-f034caa3><h1 class="text-6xl mb-2 homemade drop-shadow-xl" data-v-f034caa3>Book a Trip / Flight</h1></div></div></main>',1),M={class:"mt-5 flex flex-col justify-center items-center w-full p-10"},H=n(()=>t("label",{for:"name"},"Name:",-1)),O=n(()=>t("br",null,null,-1)),R=n(()=>t("label",{for:"email"},"Email:",-1)),U=n(()=>t("br",null,null,-1)),A=n(()=>t("label",{for:"tour"},"Select Safari Tour:",-1)),C=n(()=>t("option",{value:"Arusha National Park Day Safari"},"Arusha National Park Day Safari",-1)),J=n(()=>t("option",{value:"Tarangire National Park Dy Safari"},"Tarangire National Park Dy Safari",-1)),z=n(()=>t("option",{value:"Chemka Hot Spring Day Safari"},"Chemka Hot Spring Day Safari",-1)),G=n(()=>t("option",{value:"Balloon Safari"},"Balloon Safari",-1)),K=[C,J,z,G],Q=n(()=>t("br",null,null,-1)),X=n(()=>t("label",{for:"participants"},"Number of Participants:",-1)),Y=n(()=>t("br",null,null,-1)),W=n(()=>t("label",{for:"date"},"Tour Date:",-1)),Z=n(()=>t("button",{class:"bg-orange-400 text-white hover:bg-black mt-3 rounded-md p-2",type:"submit"},"Book Now",-1)),$={__name:"BookingForm",setup(s){const e=g();p.init("6sG6eYDndzcj1QsJP");const o=w({name:"",email_id:"",destination:"",participants:null,date:""}),l=async()=>{try{const r=await p.send("service_vjyw5ti","template_dqrqwbg",o.value);console.log("Booking confirmation email sent:",r);const i=await p.send("service_vjyw5ti","template_dqrqwbg",{to_email:o.value.email_id});console.log("Auto-reply email sent:",i),e.push("/thank-you")}catch(r){console.error("Error sending emails:",r)}};return(r,i)=>(D(),y(k,null,[_(N),t("div",I,[L,t("div",M,[t("form",{onSubmit:x(l,["prevent"]),class:"w-2/3 flex flex-col"},[H,d(t("input",{class:"shadow-sm bg-gray-50","onUpdate:modelValue":i[0]||(i[0]=a=>o.value.name=a),type:"text",id:"name",name:"name",required:""},null,512),[[m,o.value.name]]),O,R,d(t("input",{class:"shadow-sm bg-gray-50","onUpdate:modelValue":i[1]||(i[1]=a=>o.value.email_id=a),type:"email",id:"email",name:"email_id",required:""},null,512),[[m,o.value.email_id]]),U,A,d(t("select",{class:"p-2 bg-gray-50 text-black rounded-xl mt-2 outline-none",id:"tour",name:"destination","onUpdate:modelValue":i[2]||(i[2]=a=>o.value.destination=a),required:""},K,512),[[S,o.value.destination]]),Q,X,d(t("input",{type:"number",class:"shadow-sm bg-gray-50","onUpdate:modelValue":i[3]||(i[3]=a=>o.value.participants=a),id:"participants",name:"participants",min:"1",required:""},null,512),[[m,o.value.participants]]),Y,W,d(t("input",{type:"date",class:"shadow-sm bg-gray-50","onUpdate:modelValue":i[4]||(i[4]=a=>o.value.date=a),id:"date",name:"date",required:""},null,512),[[m,o.value.date]]),Z],32)]),t("div",null,[_(T)])])],64))}},te=b($,[["__scopeId","data-v-f034caa3"]]);export{te as default};
