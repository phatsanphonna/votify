import{t as oe,e as le}from"./create.Bvef7Gho.js";import"./disclose-version.Bg9kRutz.js";var D=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,y=e=>!e||typeof e!="object"||Object.keys(e).length===0,ie=(e,c)=>JSON.stringify(e)===JSON.stringify(c);function I(e,c){e.forEach(function(r){Array.isArray(r)?I(r,c):c.push(r)})}function L(e){let c=[];return I(e,c),c}var U=(...e)=>L(e).filter(Boolean),W=(e,c)=>{let r={},w=Object.keys(e),V=Object.keys(c);for(let d of w)if(V.includes(d)){let g=e[d],A=c[d];typeof g=="object"&&typeof A=="object"?r[d]=W(g,A):Array.isArray(g)||Array.isArray(A)?r[d]=U(A,g):r[d]=A+" "+g}else r[d]=e[d];for(let d of V)w.includes(d)||(r[d]=c[d]);return r},F=e=>!e||typeof e!="string"?e:e.replace(/\s+/g," ").trim(),se={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},Z=e=>e||void 0,M=(...e)=>Z(L(e).filter(Boolean).join(" ")),E=null,h={},J=!1,k=(...e)=>c=>c.twMerge?((!E||J)&&(J=!1,E=y(h)?oe:le({...h,extend:{theme:h.theme,classGroups:h.classGroups,conflictingClassGroupModifiers:h.conflictingClassGroupModifiers,conflictingClassGroups:h.conflictingClassGroups,...h.extend}})),Z(E(M(e)))):M(e),H=(e,c)=>{for(let r in c)e.hasOwnProperty(r)?e[r]=M(e[r],c[r]):e[r]=c[r];return e},ae=(e,c)=>{let{extend:r=null,slots:w={},variants:V={},compoundVariants:d=[],compoundSlots:g=[],defaultVariants:A={}}=e,v={...se,...c},G=r!=null&&r.base?M(r.base,e==null?void 0:e.base):e==null?void 0:e.base,b=r!=null&&r.variants&&!y(r.variants)?W(V,r.variants):V,C=r!=null&&r.defaultVariants&&!y(r.defaultVariants)?{...r.defaultVariants,...A}:A;!y(v.twMergeConfig)&&!ie(v.twMergeConfig,h)&&(J=!0,h=v.twMergeConfig);let N=y(r==null?void 0:r.slots),S=y(w)?{}:{base:M(e==null?void 0:e.base,N&&(r==null?void 0:r.base)),...w},$=N?S:H({...r==null?void 0:r.slots},y(S)?{base:e==null?void 0:e.base}:S),x=y(r==null?void 0:r.compoundVariants)?d:U(r==null?void 0:r.compoundVariants,d),m=f=>{if(y(b)&&y(w)&&N)return k(G,f==null?void 0:f.class,f==null?void 0:f.className)(v);if(x&&!Array.isArray(x))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof x}`);if(g&&!Array.isArray(g))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof g}`);let Q=(t,o,n=[],i)=>{let l=n;if(typeof o=="string")l=l.concat(F(o).split(" ").map(s=>`${t}:${s}`));else if(Array.isArray(o))l=l.concat(o.reduce((s,a)=>s.concat(`${t}:${a}`),[]));else if(typeof o=="object"&&typeof i=="string"){for(let s in o)if(o.hasOwnProperty(s)&&s===i){let a=o[s];if(a&&typeof a=="string"){let u=F(a);l[i]?l[i]=l[i].concat(u.split(" ").map(p=>`${t}:${p}`)):l[i]=u.split(" ").map(p=>`${t}:${p}`)}else Array.isArray(a)&&a.length>0&&(l[i]=a.reduce((u,p)=>u.concat(`${t}:${p}`),[]))}}return l},P=(t,o=b,n=null,i=null)=>{var l;let s=o[t];if(!s||y(s))return null;let a=(l=i==null?void 0:i[t])!=null?l:f==null?void 0:f[t];if(a===null)return null;let u=D(a),p=Array.isArray(v.responsiveVariants)&&v.responsiveVariants.length>0||v.responsiveVariants===!0,O=C==null?void 0:C[t],j=[];if(typeof u=="object"&&p)for(let[z,q]of Object.entries(u)){let ne=s[q];if(z==="initial"){O=q;continue}Array.isArray(v.responsiveVariants)&&!v.responsiveVariants.includes(z)||(j=Q(z,ne,j,n))}let te=u!=null&&typeof u!="object"?u:D(O),T=s[te||"false"];return typeof j=="object"&&typeof n=="string"&&j[n]?H(j,T):j.length>0?(j.push(T),j):T},X=()=>b?Object.keys(b).map(t=>P(t,b)):null,Y=(t,o)=>{if(!b||typeof b!="object")return null;let n=new Array;for(let i in b){let l=P(i,b,t,o),s=t==="base"&&typeof l=="string"?l:l&&l[t];s&&(n[n.length]=s)}return n},R={};for(let t in f)f[t]!==void 0&&(R[t]=f[t]);let B=(t,o)=>{var n;let i=typeof(f==null?void 0:f[t])=="object"?{[t]:(n=f[t])==null?void 0:n.initial}:{};return{...C,...R,...i,...o}},K=(t=[],o)=>{let n=[];for(let{class:i,className:l,...s}of t){let a=!0;for(let[u,p]of Object.entries(s)){let O=B(u,o);if(Array.isArray(p)){if(!p.includes(O[u])){a=!1;break}}else if(O[u]!==p){a=!1;break}}a&&(i&&n.push(i),l&&n.push(l))}return n},ee=t=>{let o=K(x,t);if(!Array.isArray(o))return o;let n={};for(let i of o)if(typeof i=="string"&&(n.base=k(n.base,i)(v)),typeof i=="object")for(let[l,s]of Object.entries(i))n[l]=k(n[l],s)(v);return n},re=t=>{if(g.length<1)return null;let o={};for(let{slots:n=[],class:i,className:l,...s}of g){if(!y(s)){let a=!0;for(let u of Object.keys(s)){let p=B(u,t)[u];if(p===void 0||(Array.isArray(s[u])?!s[u].includes(p):s[u]!==p)){a=!1;break}}if(!a)continue}for(let a of n)o[a]=o[a]||[],o[a].push([i,l])}return o};if(!y(w)||!N){let t={};if(typeof $=="object"&&!y($))for(let o of Object.keys($))t[o]=n=>{var i,l;return k($[o],Y(o,n),((i=ee(n))!=null?i:[])[o],((l=re(n))!=null?l:[])[o],n==null?void 0:n.class,n==null?void 0:n.className)(v)};return t}return k(G,X(),K(x),f==null?void 0:f.class,f==null?void 0:f.className)(v)},_=()=>{if(!(!b||typeof b!="object"))return Object.keys(b)};return m.variantKeys=_(),m.extend=r,m.base=G,m.slots=$,m.variants=b,m.defaultVariants=C,m.compoundSlots=g,m.compoundVariants=x,m};const fe=ae({base:"focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",outline:"border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}});export{fe as b};