(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{4873:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new/[[...workspace]]",function(){return s(5790)}])},5790:function(e,a,s){"use strict";s.r(a),s.d(a,{__N_SSG:function(){return u},default:function(){return p}});var r=s(5893),t=s(9008),l=s.n(t),n=s(7294),i=s(3162),o=s(8813),c=s(3157),d=s(1163),m=JSON.parse('{"wZ":[{"description":"The Brave browser is a fast, private and secure web browser with VPN support","docker_registry":"https://index.docker.io/v1/","image_src":"brave.png","name":"brlathanjr/kasm-brave-vpn:1.16.1","run_config":{"hostname":"kasm","dns":["8.8.8.8","8.8.4.4"],"sysctls":{"net.ipv4.conf.all.src_valid_mark":1},"environment":{"TAILSCALE_KEY":"","SHOW_IP_STATUS":"1","SHOW_VPN_STATUS":"1"}},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"},"first_launch":{"cmd":"bash -c \'/usr/bin/desktop_ready && xfce4-terminal -T OpenVPN  -x openvpn /dockerstartup/openvpn.conf\'","user":"root"}},"categories":["Browser"],"friendly_name":"Brave VPN","architecture":["amd64","arm64"],"compatibility":["1.13.x","1.14.x","1.15.x","1.16.x"],"uncompressed_size_mb":2170,"sha":"20606b165146a0c25e6b6b85066ff09add5f910d"},{"description":"Google Chrome is a cross-platform web browser developed by Google with VPN support","docker_registry":"https://index.docker.io/v1/","image_src":"chrome.png","name":"brlathanjr/kasm-chrome-vpn:1.16.1","run_config":{"hostname":"kasm","dns":["8.8.8.8","8.8.4.4"],"sysctls":{"net.ipv4.conf.all.src_valid_mark":1},"environment":{"TAILSCALE_KEY":"","SHOW_IP_STATUS":"1","SHOW_VPN_STATUS":"1"}},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"},"first_launch":{"cmd":"bash -c \'/usr/bin/desktop_ready && xfce4-terminal -T OpenVPN  -x openvpn /dockerstartup/openvpn.conf\'","user":"root"}},"categories":["Browser"],"friendly_name":"Chrome VPN","architecture":["amd64"],"compatibility":["1.13.x","1.14.x","1.15.x","1.16.x"],"uncompressed_size_mb":2170,"sha":"6c930176518cf7704a5323993dbda8b3857508d7"},{"description":"Chromium is a free and open-source browser, primarily developed and maintained by Google.","docker_registry":"https://index.docker.io/v1/","image_src":"chromium.png","name":"kasmweb/chromium:develop","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Browser"],"friendly_name":"Chromium","architecture":["amd64","arm64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":2170,"sha":"365ce0f48ab56c008eb362a1b40e2af8aae793c1"},{"description":"Firefox was created by Mozilla as a faster, more private alternative to browsers like Internet Explorer, and now Chrome with VPN support","docker_registry":"https://index.docker.io/v1/","image_src":"firefox.png","name":"brlathanjr/kasm-firefox-vpn:1.16.1","run_config":{"hostname":"kasm","dns":["8.8.8.8","8.8.4.4"],"sysctls":{"net.ipv4.conf.all.src_valid_mark":1},"environment":{"TAILSCALE_KEY":"","SHOW_IP_STATUS":"1","SHOW_VPN_STATUS":"1"}},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"},"first_launch":{"cmd":"bash -c \'/usr/bin/desktop_ready && xfce4-terminal -T OpenVPN  -x openvpn /dockerstartup/openvpn.conf\'","user":"root"}},"categories":["Browser"],"friendly_name":"Firefox VPN","architecture":["amd64","arm64"],"compatibility":["1.13.x","1.14.x","1.15.x","1.16.x"],"uncompressed_size_mb":2170,"sha":"e61cd5543bc86d372dce4837b202af1a2e367ee8"},{"description":"Ubuntu is a Linux distribution based on Debian.","docker_registry":"https://index.docker.io/v1/","image_src":"ubuntu.png","name":"brlathanjr/ubuntu-focal-desktop:1.15.0-2024-11-29.17.21","run_config":{"hostname":"kasm"},"categories":["Browser"],"friendly_name":"Ubuntu Focal Clean","architecture":["arm64"],"compatibility":["1.13.x","1.14.x","1.15.x","1.16.x"],"uncompressed_size_mb":2170,"sha":"3eb3b2717dc89e028fb7d4960bcd3995c1e4fac4"}]}'),u=!0;function p(e){let{workspace:a}=e,t=(0,n.useRef)(null),u=(0,n.useRef)(null),p=(0,n.useRef)(null),[b,f]=(0,n.useState)(null),[x,g]=(0,n.useState)(null),[_,v]=(0,n.useState)(null),[w,y]=(0,n.useState)("png"),[j,N]=(0,n.useState)(null),k={friendly_name:null,image_src:null,description:null,name:null,cores:2,memory:2768,gpu_count:0,cpu_allocation_method:"Inherit",docker_registry:"https://index.docker.io/v1/",categories:[],require_gpu:!1,enabled:!0,image_type:"Container"},[S,A]=(0,n.useState)(k);(0,d.useRouter)(),(0,n.useEffect)(()=>{if(null===a)p.current.value="",t.current.value="",u.current.value="",f(null),g(null),v(null),A(k);else if(a&&a[0]){let e=m.wZ.find(e=>e.name===atob(a[0]));if(delete e.sha,p.current.value=e.description,t.current.value=e.name,u.current.value=e.friendly_name,e.categories){let s=[];e.categories.map(e=>s.push({label:e,value:e})),f(s)}if(e.architecture){let r=[];e.architecture.map(e=>r.push({label:e,value:e})),g(r)}N("../../icons/"+e.image_src),A({...S,...e})}},[a]);let C={control:(e,a)=>({...e,background:"#f1f5f9",borderRadius:"0.5rem",borderColor:"#94a3b8"}),multiValue(e,a){let{data:s}=a;return{...e,backgroundColor:"#dde6f1"}}};(0,n.useEffect)(()=>{if(S&&S.friendly_name){let e={...S};e.image_src=P(e.friendly_name)+"."+w,A(e)}},[w]);let L=e=>{let a={...S};a.categories=e.map(e=>e.value),A(a);let s=[];a.categories.map(e=>s.push({label:e,value:e})),f(s)},T=e=>{let a={...S};a.architecture=e.map(e=>e.value),A(a);let s=[];a.architecture.map(e=>s.push({label:e,value:e})),g(s)};function P(e){var a=e.toString().toLowerCase();return(a=(a=(a=a.split(/\&+/).join("-and-")).split(/[^a-z0-9]/).join("-")).split(/-+/).join("-")).trim("-")}let O=()=>{var e=s(5733);let a=new e,r=a.folder(S.friendly_name);if(r.file("workspace.json",JSON.stringify(S,null,2)),_)r.file(S.image_src,_.file);else if(j){let t=fetch(j).then(e=>e.blob());r.file(S.image_src,t)}a.generateAsync({type:"blob"}).then(function(e){(0,i.saveAs)(e,P(S.friendly_name)+".zip")})},R=e=>{let a={...S};a[e.target.name]=e.target.value,"icon"===e.target.name&&(delete a.icon,v({value:e.target.value,file:e.target.files[0]}),y(e.target.value.substr(e.target.value.lastIndexOf(".")+1)),N(null)),a.friendly_name&&(a.image_src=P(a.friendly_name)+"."+w),A(a)};return(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:"Kasm Workspaces"}),(0,r.jsx)("meta",{name:"description",content:"List of workspaces for Kasm Webspaces"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto",children:[(0,r.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-300",children:[(0,r.jsx)("h1",{className:"text-2xl font-medium mb-2",children:"Add Workspace"}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("p",{className:"mb-8 opacity-70",children:'This page is designed to allow admins to generate the JSON they need to upload to the "workspaces" directory. It also allows end users to see what settings are needed if they want to manually copy them into a new workspace.'}),(0,r.jsx)("label",{className:"mb-2 font-medium",children:"Icon"}),(0,r.jsx)("input",{type:"file",name:"icon",onChange:R,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,r.jsx)("p",{className:"mb-6 opacity-70",children:"Select the image to use, image will be renamed when it's downloaded."}),(0,r.jsx)("label",{className:"mb-2 font-medium",children:"Friendly Name"}),(0,r.jsx)("input",{ref:u,name:"friendly_name",onChange:R,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,r.jsx)("p",{className:"mb-6 opacity-70",children:"This is the name that will show for users"}),(0,r.jsx)("label",{className:"mb-2 font-medium",children:"Categories"}),(0,r.jsx)(o.Z,{instanceId:"1",name:"categories",isMulti:!0,options:[{value:"Browser",label:"Browser"},{value:"Communication",label:"Communication"},{value:"Desktop",label:"Desktop"},{value:"Development",label:"Development"},{value:"Games",label:"Games"},{value:"Multimedia",label:"Multimedia"},{value:"Office",label:"Office"},{value:"Privacy",label:"Privacy"},{value:"Productivity",label:"Productivity"},{value:"Remote Access",label:"Remote Access"}],onChange:L,styles:C,value:b}),(0,r.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."}),(0,r.jsx)("label",{className:"mb-2 font-medium",children:"Description"}),(0,r.jsx)("input",{ref:p,name:"description",onChange:R,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,r.jsx)("p",{className:"mb-6 opacity-70",children:"A short description about the workspace"}),(0,r.jsx)("label",{className:"mb-2 font-medium",children:"Docker Image"}),(0,r.jsx)("input",{ref:t,name:"name",onChange:R,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,r.jsxs)("p",{className:"mb-6 opacity-70",children:["The docker image to use, i.e. ",(0,r.jsx)("code",{className:"text-xs p-1 px-2 rounded bg-white/40",children:"kasmweb/filezilla:develop"})]}),(0,r.jsx)("label",{className:"mb-2 font-medium",children:"Architecture"}),(0,r.jsx)(c.ZP,{instanceId:"2",name:"architecture",isMulti:!0,options:[{value:"amd64",label:"amd64"},{value:"arm64",label:"arm64"}],onChange:T,styles:C,value:x}),(0,r.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."})]})]}),(0,r.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-100",children:[(0,r.jsx)(h,{workspace:S,icon:_,inlineImage:j}),(0,r.jsx)("pre",{className:"my-8 overflow-y-auto text-xs",children:JSON.stringify({...S},null,2)}),(0,r.jsx)("button",{onClick:O,className:"p-4 relative z-10 px-5 bg-cyan-700 border-t border-white/20 border-solid hover:bg-slate-900 transition m-2 rounded items-center text-white/70 flex cursor-pointer",children:"Download"})]})]})]})}function h(e){let{workspace:a,icon:s,inlineImage:t}=e,[l,i]=(0,n.useState)(!1),o=null;if(s){let c=new Blob([s.file]);o=URL.createObjectURL(c),a.image_src=o}return(0,r.jsx)("div",{className:"rounded-xl group w-full shadow max-w-xs relative overflow-hidden h-[100px] border border-solid flex flex-col justify-between bg-slate-300 border-slate-400/50",children:(0,r.jsxs)("div",{className:"absolute top-0 left-0 right-0 h-[200px] transition-all"+(l?" -translate-y-1/2":""),children:[(0,r.jsxs)("div",{onClick:()=>i(!0),className:"h-[100px] p-4 relative overflow-hidden cursor-pointer",children:[(0,r.jsx)("img",{className:"h-[90px] group-hover:scale-150 transition-all absolute left-2 top-1",src:a.image_src,onError(e){null!==t&&(e.target.src=t)},alt:a.friendly_name}),(0,r.jsxs)("div",{className:"flex-col pl-28",children:[(0,r.jsx)("div",{className:"font-bold",children:a.friendly_name||"Friendly Name"}),(0,r.jsxs)("div",{className:"text-xs mb-2 flex gap-2",children:["BRLathanJr"," ",(0,r.jsx)("span",{children:void 0})]}),(0,r.jsx)("div",{className:" h-8"})]}),(0,r.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 bg-slate-400/20 h-8 text-[10px] flex items-center justify-center",children:[a.architecture&&a.architecture.map((e,a)=>(0,r.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-400/70",children:e},"arch"+a)),a.categories.map((e,a)=>(0,r.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-300/90",children:e},"cat"+a))]}),!1]}),(0,r.jsxs)("div",{className:"h-[100px] text-xs relative p-2 pl-4 flex",children:[(0,r.jsx)("button",{className:"absolute right-2 top-2 bg-slate-100 rounded-full flex justify-center items-center h-6 w-6",onClick:()=>i(!1),children:(0,r.jsx)("svg",{style:{height:"14px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,r.jsx)("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})}),(0,r.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,r.jsx)("div",{className:"font-bold",children:a.friendly_name})," ",a.description]}),(0,r.jsxs)("div",{className:"flex flex-col justify-end gap-1",children:[(0,r.jsx)("div",{className:"text-xs text-color w-full p-4 py-1 rounded-lg bg-black/5 flex justify-center items-center",children:"Edit"}),(0,r.jsx)("button",{className:"text-xs w-full p-4 py-1 rounded-lg flex justify-center items-center bg-blue-500 font-bold text-white",children:"Install"})]})]})]})})}}},function(e){e.O(0,[484,774,888,179],function(){return e(e.s=4873)}),_N_E=e.O()}]);