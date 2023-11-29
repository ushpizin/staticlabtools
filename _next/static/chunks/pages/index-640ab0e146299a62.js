(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1760)}])},1760:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Home}});var r=n(5893),s=n(5161),i=n(3610),a=n(2291),o=n(7239),l=n(2757),c=n(6854),d=n(3717),u=n(5028),p=n(3108),f=n(9289),h=n(103),m=n(6522),x=n(8590),j=n(6712),b=n(1170),y=n(4040),_=n(7294);let AsyncButton=e=>{let{onClick:t,...n}=e,[s,i]=(0,_.useState)(!1);return(0,r.jsx)(p.z,{isLoading:s,...n,onClick:async function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];i(!0);try{await t(...n)}finally{i(!1)}}})};var v=n(6147),w=n(7739),g=n.n(w),C=n(8230),k=n(1136);let AsyncMenuItem=e=>{let{onClick:t,...n}=e,[{loading:s},i]=(0,h.Z)((0,_.useCallback)(async function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return await t(...n)},[t]),[t]);return(0,r.jsx)(C.s,{isDisabled:s,icon:s?(0,r.jsx)(k.$,{}):void 0,...n,onClick:e=>i(e)})},_getDefaultToastOptions=e=>({loading:{title:"".concat(e,"...")},success:{title:"Done",isClosable:!0},error:{title:"Failed",isClosable:!0}}),handleOnClick=async(e,t,n,r)=>{let{name:s,execute:i,toastOptions:a}=n,o=i(t,r);return o instanceof Promise?e.promise(o,null!=a?a:_getDefaultToastOptions(s)):e({status:"success",..._getDefaultToastOptions(s).success}),o};function DataActionButtons(e){let{data:t,onUpdateWorkspaceData:n,actions:s,...i}=e,a=(0,m.p)(),o=(0,_.useMemo)(()=>Object.entries(g()(s,e=>{let{type:t}=e;return t})).sort((e,t)=>{let[n,r]=e,[s,i]=t;return r.length!=i.length?r.length-i.length:n.localeCompare(s)}),[s]);return(0,r.jsx)(x.h,{justifyContent:"end",flexWrap:"wrap",...i,children:o.map(e=>{var s;let[i,o]=e;return 1===o.length?(0,r.jsx)(AsyncButton,{onClick:()=>handleOnClick(a,t,o[0],n),children:null===(s=o[0])||void 0===s?void 0:s.name},i):(0,r.jsxs)(j.v,{children:[(0,r.jsx)(b.j,{as:p.z,rightIcon:(0,r.jsx)(v.v,{}),children:i}),(0,r.jsx)(y.q,{children:o.map(e=>{var s;return(0,r.jsx)(AsyncMenuItem,{onClick:()=>handleOnClick(a,t,e,n),children:null!==(s=e.shortName)&&void 0!==s?s:e.name},e.name)})})]},i)})})}var P=n(5527),T=n(3990),q=n(3614),E=n(4880),S=n(4e3),I=n(9993),A=n(297),D=n(607),z=n(1557),L=n(991),M=n(9840),O=n(510),N=n(4693),B=n(5115),V=n(4698);function StructureCardBody(e){let{data:t,...n}=e;return(0,r.jsx)(D.e,{...n,children:(0,r.jsx)(z.x,{children:(0,r.jsxs)(L.i,{size:"sm",children:[(0,r.jsx)(M.h,{children:(0,r.jsx)(O.Tr,{children:(0,r.jsx)(N.Th,{children:"Chains"})})}),(0,r.jsx)(B.p,{children:t.chains.map(e=>(0,r.jsx)(O.Tr,{children:(0,r.jsx)(V.Td,{children:e})},e))})]})})})}var Z=n(2215),F=n(8087),W=n(4071),R=n(7334),U=n(2185);let getTablePreview=e=>{let{headers:t,rows:n}=e;return(0,r.jsx)(Z.U,{allowToggle:!0,children:(0,r.jsxs)(F.Q,{children:[(0,r.jsx)("h2",{children:(0,r.jsxs)(W.K,{children:[(0,r.jsx)(S.x,{flex:"1",textAlign:"left",children:n.length<5?"Preview of the table (".concat(n.length," rows)"):"Preview of the first ".concat(5," rows out of ").concat(n.length)}),(0,r.jsx)(R.X,{})]})}),(0,r.jsx)(U.H,{pb:4,children:(0,r.jsx)(z.x,{children:(0,r.jsxs)(L.i,{size:"sm",children:[(0,r.jsx)(M.h,{children:(0,r.jsx)(O.Tr,{children:t.map(e=>(0,r.jsx)(N.Th,{children:e},e))})}),(0,r.jsx)(B.p,{children:n.slice(0,5).map((e,n)=>(0,r.jsx)(O.Tr,{children:t.map(t=>(0,r.jsx)(V.Td,{children:String(e[t])},t))},n))})]})})})]})})};function TableCardBody(e){let{data:t,...n}=e;return(0,r.jsx)(D.e,{...n,children:0===t.rows.length?(0,r.jsx)(S.x,{children:"The table is empty"}):getTablePreview(t)})}var X=n(64),H=n.n(X);let K=/^\s*[;>].*$/gm,$=/\s*/g,Q=/.{1,10}/g;function Sequence(e){var t;let{sequence:n}=e,s=null!==(t=n.replace(K,"").replace($,"").match(Q))&&void 0!==t?t:[];return(0,r.jsx)("div",{className:H().raw_sequence_viewer,children:s.map((e,t)=>(0,r.jsx)("span",{className:H().sequence_word,style:{zIndex:s.length-t},children:e},t))})}function SequenceCardBody_StructureCardBody(e){let{data:t,...n}=e;return(0,r.jsx)(D.e,{...n,children:(0,r.jsx)(Sequence,{sequence:t.sequence})})}function DataCard(e){let{data:t,onUpdateWorkspaceData:n,actions:s,...i}=e;return(0,r.jsxs)(T.Z,{size:"sm",...i,children:[(0,r.jsx)(q.O,{children:(0,r.jsxs)(d.k,{alignItems:"center",children:[(0,r.jsx)(E.C,{mr:3,colorScheme:"teal",children:t.type}),(0,r.jsx)(S.x,{children:t.name}),(0,r.jsx)(u.L,{}),(0,r.jsx)(I.h,{icon:(0,r.jsx)(P.p,{}),variant:"ghost","aria-label":"Delete",onClick:()=>n(void 0,[t.id])})]})}),"table"===t.type?(0,r.jsx)(TableCardBody,{data:t}):"structure"===t.type?(0,r.jsx)(StructureCardBody,{data:t}):"sequence"===t.type?(0,r.jsx)(SequenceCardBody_StructureCardBody,{data:t}):null,(0,r.jsx)(A.e,{justifyContent:"end",children:(0,r.jsx)(DataActionButtons,{data:[t],onUpdateWorkspaceData:n,actions:s})})]})}var Y=n(2512);let G={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},J={borderColor:"#2196f3"},ee={borderColor:"#00e676"},et={borderColor:"#ff1744"};function MyDropzone(e){let{...t}=e,{getRootProps:n,getInputProps:s,isFocused:i,isDragAccept:a,isDragReject:o}=(0,Y.uI)(t),l=(0,_.useMemo)(()=>({...G,...i?J:{},...a?ee:{},...o?et:{}}),[i,a,o]);return(0,r.jsx)(T.Z,{...n({style:l}),children:(0,r.jsxs)(D.e,{children:[(0,r.jsx)("input",{...s()}),(0,r.jsx)(S.x,{fontWeight:"medium",children:"Drop some files here, or click to select files"})]})})}var en=n(1604),er=n(7460),es=n.n(er),ei=n(7632),ea=n(5823),eo=n.n(ea),el=n(5733),ec=n.n(el);let _isTable=e=>"table"===e.type;function exportAsCsv(e,t){let n=(0,er.unparse)(e),r=t.endsWith(".csv")?t:t+".csv";eo()(n,r,"text/csv")}var ed=[{type:"Export",name:"Export as CSV",shortName:"CSV",isValidInput:e=>_isTable(e),isValidInputs:e=>e.length>0&&e.every(_isTable),execute:async e=>{if(0===e.length||!e.every(_isTable))throw Error("Invalid input");if(1===e.length)exportAsCsv(e[0].rows,e[0].name);else{let t=new(ec());e.forEach(e=>{let{rows:n,name:r}=e;return t.file(r,(0,er.unparse)(n))}),eo()(await t.generateAsync({type:"blob"}),"data.zip","application/zip")}}},{type:"Transform",name:"Merge tables",isValidInputs:e=>e.length>1&&e.every(_isTable),execute:(e,t)=>{if(e.length<=1||!e.every(_isTable))throw Error("Invalid input");let n={id:(0,ei.Z)(),type:"table",name:"Merged table",headers:Array.from(new Set(e.flatMap(e=>{let{headers:t}=e;return t}))),rows:e.flatMap(e=>{let{rows:t}=e;return t})};t([n],e.map(e=>{let{id:t}=e;return t}))}}];let eu=en.z.object({Protein1:en.z.string(),LinkPos1:en.z.number(),Protein2:en.z.string(),LinkPos2:en.z.number(),Score:en.z.optional(en.z.number())}),_isCrosslinksTable=e=>"table"===e.type&&en.z.array(eu).safeParse(e.rows).success,_getCrosslinkId=e=>{let{Protein1:t,LinkPos1:n,Protein2:r,LinkPos2:s}=e;return["".concat(t,"_").concat(n),"".concat(r,"_").concat(s)].sort().join("_")},_getUniqueCrosslinks=e=>Object.values(g()(e.filter(e=>{let{LinkPos1:t,LinkPos2:n}=e;return t>0&&n>0}),e=>_getCrosslinkId(e))).map(e=>({...e[0],count:e.length})),_hasDuplicatedCrosslinks=e=>{let t=new Set;return e.some(e=>{let n=_getCrosslinkId(e);return!!t.has(n)||(t.add(n),!1)})};var ep=[{type:"Export",name:"Export to xiNET",shortName:"xiNET",isValidInput:e=>_isCrosslinksTable(e),execute:e=>{if(1!==e.length)throw Error("Invalid input");let t=e[0];if(_isCrosslinksTable(t)){let e=_getUniqueCrosslinks(t.rows);exportAsCsv(e.map(e=>({Protein1:e.Protein1,LinkPos1:e.LinkPos1,Protein2:e.Protein2,LinkPos2:e.LinkPos2,Score:e.Score,count:e.count})),t.name+"_xinet.csv")}}},{type:"Export",name:"Export to PAE Viewer",shortName:"PAE Viewer",isValidInput:e=>_isCrosslinksTable(e),execute:e=>{if(1!==e.length)throw Error("Invalid input");let t=e[0];_isCrosslinksTable(t)&&exportAsCsv(t.rows.map(e=>({Protein1:e.Protein1,SeqPos1:e.LinkPos1,Protein2:e.Protein2,SeqPos2:e.LinkPos2})),t.name+"_paeview.csv")}},{type:"Export",name:"Export as pseudobond file",shortName:"Pseudobond file",isValidInput:e=>_isCrosslinksTable(e),execute:e=>{if(1!==e.length)throw Error("Invalid input");let t=e[0];if(_isCrosslinksTable(t)){let e=Object.fromEntries([["UBX4","A"],["N","B"]]);eo()("; radius = 0.5\n; dashes = 12\n"+t.rows.filter(e=>e.LinkPos1>0&&e.LinkPos2>0).filter(e=>!(e.Protein1===e.Protein2&&e.LinkPos1===e.LinkPos2)).filter(t=>Object.keys(e).includes(t.Protein1)&&Object.keys(e).includes(t.Protein2)).map(t=>{let{Protein1:n,Protein2:r,LinkPos1:s,LinkPos2:i}=t;return"/".concat(e[n],":").concat(s,"@ca /").concat(e[r],":").concat(i,"@ca")}).join("\n"),t.name+".pb","text/plain")}}},{type:"Transform",name:"Remove duplicated crosslinks",isValidInput:e=>_isCrosslinksTable(e)&&_hasDuplicatedCrosslinks(e.rows),execute:(e,t)=>{let n=e[0];if(!n||!_isCrosslinksTable(n))throw Error("Invalid input");let r=_getUniqueCrosslinks(n.rows),s=Object.keys(r[0]);t([{...n,rows:r,headers:s}])}}];let ef=en.z.object({Sequence:en.z.string(),Modifications:en.z.string().nullable(),Position:en.z.number().optional()}),_isPeptidesTable=e=>"table"===e.type&&en.z.array(ef).safeParse(e.rows).success,eh=RegExp("(?<aminoacid>[A-Z])(?<position>\\d+)\\((?<modification>.*?)\\)","g");var em=[{type:"Transform",name:"Find peptide positions in reference sequence",isValidInputs:e=>{if(2!==e.length)return!1;let t=e.find(_isPeptidesTable),n=e.find(e=>"sequence"===e.type);return!(!t||!n||t.headers.includes("Position"))},execute:(e,t)=>{let n=e.find(_isPeptidesTable),r=e.find(e=>"sequence"===e.type),s=[...n.headers,"Position"],i=n.rows.flatMap(e=>{let t=r.sequence.toLowerCase().indexOf(e.Sequence.toLowerCase());if(t<0)return e;let n=[];if(e.Modifications)for(let s of e.Modifications.matchAll(eh)){let[e,i,a,o]=s;if(r.sequence[t+parseInt(a)-1]!==i)return console.error("Failed to process ".concat(e,": Mismatch with the reference sequence")),[];n.push("".concat(i).concat(t+parseInt(a),"(").concat(o,")"))}return{...e,Position:t+1,Modifications:e.Modifications?n.join("; "):null}});t([{...n,rows:i,headers:s}])}},{type:"Export",name:"Export Residues Summary",isValidInputs:e=>{if(2!==e.length)return!1;let t=e.find(_isPeptidesTable),n=e.find(e=>"sequence"===e.type);return!!(t&&n&&t.headers.includes("Modifications")&&t.headers.includes("Position"))},execute:e=>{let t=e.find(_isPeptidesTable),n=e.find(e=>"sequence"===e.type),r=Array.from(n.sequence).map((e,t)=>({residue:e,position:t+1,modifications:{None:0}})),s=new Set(["None"]);for(let{Sequence:e,Modifications:n,Position:a}of t.rows){let t=Array.from(e).map((e,t)=>({residue:e,position:a+t,modification:"None"}));if(n)for(let e of n.matchAll(eh)){var i;let[n,r,o,l]=e,c=parseInt(o)-a;if((null===(i=t[c])||void 0===i?void 0:i.residue.toLowerCase())!==r.toLowerCase()){console.error("Failed to process ".concat(n,": Mismatch with the reference sequence"));return}t[c].modification=l,s.add(l)}for(let e of t){let t=r[e.position-1].modifications[e.modification];r[e.position-1].modifications[e.modification]=(null!=t?t:0)+1}}exportAsCsv(r.map(e=>{let{modifications:t,...n}=e;return{...n,...Object.fromEntries(Array.from(s).map(e=>{var n;return[e,null!==(n=t[e])&&void 0!==n?n:0]}))}}),t.name+"_summary.csv")}}];let ex=[...ep,...ed,...em];var ej=n(1864),eb=n.n(ej);function _papaResultToTableData(e,t){let{data:n}=t;return{id:(0,ei.Z)(),type:"table",name:e,headers:n.length>0?Object.keys(n[0]):[],rows:n}}var ey=n(4105);async function _parse(e){let t=ey.ZP.read(await e.arrayBuffer());return Promise.all(Object.entries(t.Sheets).map(async t=>{var n;let[r,s]=t,i=ey.ZP.utils.sheet_to_csv(s,{skipHidden:!0});return await (n="".concat(e.name,": ").concat(r),new Promise(e=>{es().parse(i,{header:!0,dynamicTyping:!0,complete:t=>{e(_papaResultToTableData(n,t))}})}))}))}var e_=n(5066),ev=n.n(e_);async function pdb_parse(e){let t=await e.text(),n=ev()(t),r=n.atoms;return console.log(n),[{id:(0,ei.Z)(),type:"structure",name:e.name,atoms:r,chains:[...new Set(r.map(e=>{let{chainID:t}=e;return t}))]}]}var ew=n(8663);async function _parseFasta(e){let t=await e.text(),n=await (0,ew.rA)(t,{fileName:e.name,isProtein:!0});return n.map(e=>{let{parsedSequence:{name:t,sequence:n}}=e;return{id:(0,ei.Z)(),type:"sequence",name:t.trim(),sequence:n}})}let eg={csv:function(e){return new Promise(t=>{es().parse(e,{header:!0,dynamicTyping:!0,complete:n=>{t([_papaResultToTableData(e.name,n)])}})})},xlsx:_parse,pdb:pdb_parse,fasta:_parseFasta,fa:_parseFasta};async function parse(e){let t=eb().extname(e.name).split(".").filter(e=>e.length>0).join(".");if(!(t in eg))throw Error('File format "'.concat(t,'" not supported'));return await eg[t](e)}function Home(){let{toggleColorMode:e}=(0,s.If)(),{workspaceData:t,parseFiles:n,updateWorkspaceData:m}=function(){let[e,t]=(0,_.useState)([]);return{workspaceData:e,parseFiles:(0,_.useCallback)(async e=>{for(let n of e){let e=await parse(n);t(t=>[...t,...e])}},[]),updateWorkspaceData:(0,_.useCallback)((e,n)=>t(t=>[...t.filter(e=>{let{id:t}=e;return!(null==n?void 0:n.includes(t))}).map(t=>{var n;return null!==(n=null==e?void 0:e.find(e=>{let{id:n}=e;return n===t.id}))&&void 0!==n?n:t}),...(null!=e?e:[]).filter(e=>!t.find(t=>{let{id:n}=t;return n===e.id}))]),[])}}(),[{loading:x},j]=(0,h.Z)(n,[n]);return(0,r.jsx)(i.W,{maxWidth:"container.xl",my:6,children:(0,r.jsxs)(a.K,{spacing:6,children:[(0,r.jsx)(o.M,{children:(0,r.jsx)(l.X,{onClick:()=>e(),children:"Lab Tools"})}),(0,r.jsx)(c.O,{isLoaded:!x,children:(0,r.jsx)(MyDropzone,{onDrop:e=>j(e)})}),t.length>0?(0,r.jsxs)(d.k,{px:6,children:[(0,r.jsx)(DataActionButtons,{data:t,actions:ex.filter(e=>{let{isValidInputs:n}=e;return n&&n(t)}),onUpdateWorkspaceData:m}),(0,r.jsx)(u.L,{}),(0,r.jsx)(p.z,{colorScheme:"red",variant:"link",onClick:()=>m(void 0,t.map(e=>{let{id:t}=e;return t})),children:"Delete all files"})]}):null,(0,r.jsx)(f.i,{}),t.map(e=>(0,r.jsx)(DataCard,{data:e,onUpdateWorkspaceData:m,actions:ex.filter(t=>{let{isValidInput:n}=t;return n&&n(e)})},e.id))]})})}},64:function(e){e.exports={raw_sequence_viewer:"style_raw_sequence_viewer__YgebR",sequence_word:"style_sequence_word__tqKep"}},67:function(){},2061:function(){}},function(e){e.O(0,[251,956,580,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);