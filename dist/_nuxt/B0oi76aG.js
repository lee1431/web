import{_ as x,r as p,o as g,v as i,z as h,K as N,x as t,N as b,O as _,M as T,P as f,Q as y,t as d,y as c,R as k}from"./BoWSK4DC.js";import{_ as S}from"./Bago3RAo.js";import{T as U,a as V}from"./CUknQatV.js";const B={id:"notice",class:"section py-5"},C={class:"container"},D={class:"row"},$={class:"card card-header"},j={class:"card-body"},I={class:"card-title"},O={class:"card-subtitle mb-2 text-muted"},A={class:"card-text"},E=["href"],M={id:"notice2",class:"section py-5"},R={class:"container"},z={class:"row",id:"data-container"},J={class:"card card-header"},Q={class:"card-body"},q={class:"card-title"},F={class:"card-subtitle mb-2 text-muted"},P={class:"card-text"},G={id:"add-notice",class:"section py-5"},H={class:"container"},K={class:"mb-3"},L={class:"mb-3"},X={__name:"contact",setup(W){const n=p([]),r=p(null),o=p({title:"",content:""});async function m(){const u="https://api.github.com/repos/lee1431/web/contents/notices.json";try{const e=await fetch(u,{headers:{Accept:"application/vnd.github.v3+json"}});if(!e.ok)throw new Error(`네트워크 응답이 불량합니다. 상태 코드: ${e.status}`);const s=await e.json(),a=new TextDecoder("utf-8").decode(Uint8Array.from(atob(s.content),v=>v.charCodeAt(0)));n.value=JSON.parse(a),r.value=s.sha}catch(e){console.error("공지사항 데이터를 가져오는 중 오류가 발생했습니다:",e),n.value=[],r.value=null}}async function w(){if(!r.value){alert("기존 공지사항 데이터를 가져오는 데 실패했습니다.");return}const u={title:o.value.title,content:o.value.content,date:new Date().toISOString().split("T")[0],uid:crypto.randomUUID()};n.value.push(u);const e={message:"공지사항 업데이트",content:btoa(unescape(encodeURIComponent(JSON.stringify(n.value,null,2)))),sha:r.value},s="ghp_R62pfNEz",a="nXVBQx2eywNo",v="2veQ47EiGC3in7ek";try{const l=await fetch("https://api.github.com/repos/lee1431/web/contents/notices.json",{method:"PUT",headers:{Authorization:`Bearer ${s}${a}${v}`,"Content-Type":"application/json"},body:JSON.stringify(e)});l.ok?(alert("공지사항이 성공적으로 추가되었습니다."),o.value.title="",o.value.content="",setTimeout(()=>{m()},5e3)):console.error("공지사항 업데이트 실패:",l.status,l.statusText)}catch(l){console.error("공지사항 추가 중 오류 발생:",l)}}return g(()=>{m()}),(u,e)=>(d(),i("div",null,[h(U),e[9]||(e[9]=N('<section id="about" data-v-1c2ad607><div class="container position-relative" data-v-1c2ad607><img src="'+S+'" class="img-fluid cropped-main-img" alt="main_12" data-v-1c2ad607><div class="text-overlay" data-v-1c2ad607><h1 class="fade-in fw-bold" data-v-1c2ad607>기장 엔지니어링</h1><p class="fade-in delay" data-v-1c2ad607>사람과 자연이 공존하는 세상을 추구합니다.</p></div></div></section>',1)),t("section",B,[t("div",C,[e[2]||(e[2]=t("h2",{class:"text-center mb-4"},"공지사항",-1)),t("div",D,[(d(!0),i(b,null,_(n.value,(s,a)=>(d(),i("div",{key:s.uid||a,class:"col-md-6 mb-4"},[t("div",$,[t("div",j,[t("h5",I,c(s.title),1),t("h6",O,c(s.date),1),t("p",A,c(s.content),1),s.uid?(d(),i("a",{key:0,class:"card-link",href:`https://llsshh.com/contact.html?view=${s.link}`}," 자세히 보기 ",8,E)):k("",!0)])])]))),128))])])]),t("section",M,[t("div",R,[e[3]||(e[3]=t("h2",{class:"text-center mb-4"},"공지사항2",-1)),t("div",z,[(d(!0),i(b,null,_(n.value,(s,a)=>(d(),i("div",{key:s.uid||`n2-${a}`,class:"col-md-6 mb-4"},[t("div",J,[t("div",Q,[t("h5",q,c(s.title),1),t("h6",F,c(s.date),1),t("p",P,c(s.content),1)])])]))),128))]),e[4]||(e[4]=t("div",{id:"pagination"},null,-1))])]),t("section",G,[t("div",H,[e[8]||(e[8]=t("h2",{class:"text-center mb-4"},"새 공지사항 추가",-1)),t("form",{onSubmit:T(w,["prevent"])},[t("div",K,[e[5]||(e[5]=t("label",{for:"title",class:"form-label"},"제목",-1)),f(t("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=s=>o.value.title=s),required:""},null,512),[[y,o.value.title]])]),t("div",L,[e[6]||(e[6]=t("label",{for:"content",class:"form-label"},"내용",-1)),f(t("textarea",{class:"form-control",id:"content","onUpdate:modelValue":e[1]||(e[1]=s=>o.value.content=s),required:""},null,512),[[y,o.value.content]])]),e[7]||(e[7]=t("button",{type:"submit",class:"btn btn-primary"},"공지사항 추가",-1))],32)])]),h(V),e[10]||(e[10]=t("button",{id:"scrollToTopBtn",class:"btn btn-light border position-fixed bottom-0 end-0 m-3"},[t("i",{class:"bi bi-arrow-up"})],-1))]))}},et=x(X,[["__scopeId","data-v-1c2ad607"]]);export{et as default};
