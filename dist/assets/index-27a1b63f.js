import{h as G,j as i,ao as V,ap as le,k as De,aq as mt,ar as pt,as as gt,l as J,u as Ue,o as he,at as bt,r as z,m as yt,p as C,t as wt,n as xt,au as Me,a9 as ye,av as kt,s as xe,v as $t,w as ke,x as _,V as St,y as _t,aw as Ct,A as zt,T as Ae,H as re,ax as de,ay as ce,az as Rt,aA as Tt,aB as It,aC as Vt,aD as Dt,aE as Mt,aF as Nt,ab as Bt,I as Pt,X as Ut,a4 as Ee,J as O,K as Z,S as s,a2 as l,a5 as g,L as u,N as ue,a7 as x,aj as D,ak as P,a1 as At,a3 as K,aG as Et,R as jt,ah as Ft,aH as Ht,Y as X,aI as Ot,aJ as je,Z as Lt,O as $e,a6 as Se,aK as Gt,aL as Kt,aM as we,aN as Wt}from"./index-0bf17fa2.js";const Yt=G([i("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[V("reverse",[i("slider-handles",[i("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),i("slider-dots",[i("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),V("vertical",[i("slider-handles",[i("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),i("slider-marks",[i("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),i("slider-dots",[i("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),V("vertical",`
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[i("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[i("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),i("slider-rail",`
 height: 100%;
 `,[le("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),V("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),i("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[i("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),i("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[i("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),V("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[i("slider-handle",`
 cursor: not-allowed;
 `)]),V("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),G("&:hover",[i("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[le("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),i("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),V("active",[i("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[le("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),i("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),i("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[i("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),i("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[le("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),i("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[i("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[i("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[G("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),G("&:focus",[i("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[G("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),i("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[V("transition-disabled",[i("slider-dot","transition: none;")]),i("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[V("active","border: var(--n-dot-border-active);")])])]),i("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[De()]),i("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[V("top",`
 margin-bottom: 12px;
 `),V("right",`
 margin-left: 12px;
 `),V("bottom",`
 margin-top: 12px;
 `),V("left",`
 margin-right: 12px;
 `),De()]),mt(i("slider",[i("slider-dot","background-color: var(--n-dot-color-modal);")])),pt(i("slider",[i("slider-dot","background-color: var(--n-dot-color-popover);")]))]);function Ne(n){return window.TouchEvent&&n instanceof window.TouchEvent}function Be(){const n=new Map,o=m=>r=>{n.set(m,r)};return gt(()=>{n.clear()}),[n,o]}const Xt=0,Jt=Object.assign(Object.assign({},he.props),{to:ke.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),Pe=J({name:"Slider",props:Jt,slots:Object,setup(n){const{mergedClsPrefixRef:o,namespaceRef:m,inlineThemeDisabled:r}=Ue(n),d=he("Slider","-slider",Yt,bt,n,o),f=z(null),[p,$]=Be(),[c,h]=Be(),k=z(new Set),j=yt(n),{mergedDisabledRef:U}=j,A=C(()=>{const{step:e}=n;if(Number(e)<=0||e==="mark")return 0;const t=e.toString();let a=0;return t.includes(".")&&(a=t.length-t.indexOf(".")-1),a}),L=z(n.defaultValue),ve=wt(n,"value"),q=xt(ve,L),M=C(()=>{const{value:e}=q;return(n.range?e:[e]).map(Re)}),Q=C(()=>M.value.length>2),y=C(()=>n.placement===void 0?n.vertical?"right":"top":n.placement),S=C(()=>{const{marks:e}=n;return e?Object.keys(e).map(Number.parseFloat):null}),b=z(-1),F=z(-1),B=z(-1),N=z(!1),ee=z(!1),fe=C(()=>{const{vertical:e,reverse:t}=n;return e?t?"top":"bottom":t?"right":"left"}),Fe=C(()=>{if(Q.value)return;const e=M.value,t=te(n.range?Math.min(...e):n.min),a=te(n.range?Math.max(...e):e[0]),{value:v}=fe;return n.vertical?{[v]:`${t}%`,height:`${a-t}%`}:{[v]:`${t}%`,width:`${a-t}%`}}),He=C(()=>{const e=[],{marks:t}=n;if(t){const a=M.value.slice();a.sort((I,T)=>I-T);const{value:v}=fe,{value:w}=Q,{range:R}=n,E=w?()=>!1:I=>R?I>=a[0]&&I<=a[a.length-1]:I<=a[0];for(const I of Object.keys(t)){const T=Number(I);e.push({active:E(T),key:T,label:t[I],style:{[v]:`${te(T)}%`}})}}return e});function Oe(e,t){const a=te(e),{value:v}=fe;return{[v]:`${a}%`,zIndex:t===b.value?1:0}}function _e(e){return n.showTooltip||B.value===e||b.value===e&&N.value}function Le(e){return N.value?!(b.value===e&&F.value===e):!0}function Ge(e){var t;~e&&(b.value=e,(t=p.get(e))===null||t===void 0||t.focus())}function Ke(){c.forEach((e,t)=>{_e(t)&&e.syncPosition()})}function Ce(e){const{"onUpdate:value":t,onUpdateValue:a}=n,{nTriggerFormInput:v,nTriggerFormChange:w}=j;a&&re(a,e),t&&re(t,e),L.value=e,v(),w()}function ze(e){const{range:t}=n;if(t){if(Array.isArray(e)){const{value:a}=M;e.join()!==a.join()&&Ce(e)}}else Array.isArray(e)||M.value[0]!==e&&Ce(e)}function me(e,t){if(n.range){const a=M.value.slice();a.splice(t,1,e),ze(a)}else ze(e)}function pe(e,t,a){const v=a!==void 0;a||(a=e-t>0?1:-1);const w=S.value||[],{step:R}=n;if(R==="mark"){const T=ne(e,w.concat(t),v?a:void 0);return T?T.value:t}if(R<=0)return t;const{value:E}=A;let I;if(v){const T=Number((t/R).toFixed(E)),H=Math.floor(T),ge=T>H?H:H-1,be=T<H?H:H+1;I=ne(t,[Number((ge*R).toFixed(E)),Number((be*R).toFixed(E)),...w],a)}else{const T=Ye(e);I=ne(e,[...w,T])}return I?Re(I.value):t}function Re(e){return Math.min(n.max,Math.max(n.min,e))}function te(e){const{max:t,min:a}=n;return(e-a)/(t-a)*100}function We(e){const{max:t,min:a}=n;return a+(t-a)*e}function Ye(e){const{step:t,min:a}=n;if(Number(t)<=0||t==="mark")return e;const v=Math.round((e-a)/t)*t+a;return Number(v.toFixed(A.value))}function ne(e,t=S.value,a){if(!(t!=null&&t.length))return null;let v=null,w=-1;for(;++w<t.length;){const R=t[w]-e,E=Math.abs(R);(a===void 0||R*a>0)&&(v===null||E<v.distance)&&(v={index:w,distance:E,value:t[w]})}return v}function Te(e){const t=f.value;if(!t)return;const a=Ne(e)?e.touches[0]:e,v=t.getBoundingClientRect();let w;return n.vertical?w=(v.bottom-a.clientY)/v.height:w=(a.clientX-v.left)/v.width,n.reverse&&(w=1-w),We(w)}function Xe(e){if(U.value||!n.keyboard)return;const{vertical:t,reverse:a}=n;switch(e.key){case"ArrowUp":e.preventDefault(),ae(t&&a?-1:1);break;case"ArrowRight":e.preventDefault(),ae(!t&&a?-1:1);break;case"ArrowDown":e.preventDefault(),ae(t&&a?1:-1);break;case"ArrowLeft":e.preventDefault(),ae(!t&&a?1:-1);break}}function ae(e){const t=b.value;if(t===-1)return;const{step:a}=n,v=M.value[t],w=Number(a)<=0||a==="mark"?v:v+a*e;me(pe(w,v,e>0?1:-1),t)}function Je(e){var t,a;if(U.value||!Ne(e)&&e.button!==Xt)return;const v=Te(e);if(v===void 0)return;const w=M.value.slice(),R=n.range?(a=(t=ne(v,w))===null||t===void 0?void 0:t.index)!==null&&a!==void 0?a:-1:0;R!==-1&&(e.preventDefault(),Ge(R),qe(),me(pe(v,M.value[R]),R))}function qe(){N.value||(N.value=!0,n.onDragstart&&re(n.onDragstart),de("touchend",document,ie),de("mouseup",document,ie),de("touchmove",document,oe),de("mousemove",document,oe))}function se(){N.value&&(N.value=!1,n.onDragend&&re(n.onDragend),ce("touchend",document,ie),ce("mouseup",document,ie),ce("touchmove",document,oe),ce("mousemove",document,oe))}function oe(e){const{value:t}=b;if(!N.value||t===-1){se();return}const a=Te(e);a!==void 0&&me(pe(a,M.value[t]),t)}function ie(){se()}function Ze(e){b.value=e,U.value||(B.value=e)}function Qe(e){b.value===e&&(b.value=-1,se()),B.value===e&&(B.value=-1)}function et(e){B.value=e}function tt(e){B.value===e&&(B.value=-1)}Me(b,(e,t)=>void ye(()=>F.value=t)),Me(q,()=>{if(n.marks){if(ee.value)return;ee.value=!0,ye(()=>{ee.value=!1})}ye(Ke)}),kt(()=>{se()});const Ie=C(()=>{const{self:{markFontSize:e,railColor:t,railColorHover:a,fillColor:v,fillColorHover:w,handleColor:R,opacityDisabled:E,dotColor:I,dotColorModal:T,handleBoxShadow:H,handleBoxShadowHover:ge,handleBoxShadowActive:be,handleBoxShadowFocus:nt,dotBorder:at,dotBoxShadow:st,railHeight:ot,railWidthVertical:it,handleSize:lt,dotHeight:rt,dotWidth:dt,dotBorderRadius:ct,fontSize:ut,dotBorderActive:ht,dotColorPopover:vt},common:{cubicBezierEaseInOut:ft}}=d.value;return{"--n-bezier":ft,"--n-dot-border":at,"--n-dot-border-active":ht,"--n-dot-border-radius":ct,"--n-dot-box-shadow":st,"--n-dot-color":I,"--n-dot-color-modal":T,"--n-dot-color-popover":vt,"--n-dot-height":rt,"--n-dot-width":dt,"--n-fill-color":v,"--n-fill-color-hover":w,"--n-font-size":ut,"--n-handle-box-shadow":H,"--n-handle-box-shadow-active":be,"--n-handle-box-shadow-focus":nt,"--n-handle-box-shadow-hover":ge,"--n-handle-color":R,"--n-handle-size":lt,"--n-opacity-disabled":E,"--n-rail-color":t,"--n-rail-color-hover":a,"--n-rail-height":ot,"--n-rail-width-vertical":it,"--n-mark-font-size":e}}),W=r?xe("slider",void 0,Ie,n):void 0,Ve=C(()=>{const{self:{fontSize:e,indicatorColor:t,indicatorBoxShadow:a,indicatorTextColor:v,indicatorBorderRadius:w}}=d.value;return{"--n-font-size":e,"--n-indicator-border-radius":w,"--n-indicator-box-shadow":a,"--n-indicator-color":t,"--n-indicator-text-color":v}}),Y=r?xe("slider-indicator",void 0,Ve,n):void 0;return{mergedClsPrefix:o,namespace:m,uncontrolledValue:L,mergedValue:q,mergedDisabled:U,mergedPlacement:y,isMounted:$t(),adjustedTo:ke(n),dotTransitionDisabled:ee,markInfos:He,isShowTooltip:_e,shouldKeepTooltipTransition:Le,handleRailRef:f,setHandleRefs:$,setFollowerRefs:h,fillStyle:Fe,getHandleStyle:Oe,activeIndex:b,arrifiedValues:M,followerEnabledIndexSet:k,handleRailMouseDown:Je,handleHandleFocus:Ze,handleHandleBlur:Qe,handleHandleMouseEnter:et,handleHandleMouseLeave:tt,handleRailKeyDown:Xe,indicatorCssVars:r?void 0:Ve,indicatorThemeClass:Y==null?void 0:Y.themeClass,indicatorOnRender:Y==null?void 0:Y.onRender,cssVars:r?void 0:Ie,themeClass:W==null?void 0:W.themeClass,onRender:W==null?void 0:W.onRender}},render(){var n;const{mergedClsPrefix:o,themeClass:m,formatTooltip:r}=this;return(n=this.onRender)===null||n===void 0||n.call(this),_("div",{class:[`${o}-slider`,m,{[`${o}-slider--disabled`]:this.mergedDisabled,[`${o}-slider--active`]:this.activeIndex!==-1,[`${o}-slider--with-mark`]:this.marks,[`${o}-slider--vertical`]:this.vertical,[`${o}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},_("div",{class:`${o}-slider-rail`},_("div",{class:`${o}-slider-rail__fill`,style:this.fillStyle}),this.marks?_("div",{class:[`${o}-slider-dots`,this.dotTransitionDisabled&&`${o}-slider-dots--transition-disabled`]},this.markInfos.map(d=>_("div",{key:d.key,class:[`${o}-slider-dot`,{[`${o}-slider-dot--active`]:d.active}],style:d.style}))):null,_("div",{ref:"handleRailRef",class:`${o}-slider-handles`},this.arrifiedValues.map((d,f)=>{const p=this.isShowTooltip(f);return _(St,null,{default:()=>[_(_t,null,{default:()=>_("div",{ref:this.setHandleRefs(f),class:`${o}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":d,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(d,f),onFocus:()=>{this.handleHandleFocus(f)},onBlur:()=>{this.handleHandleBlur(f)},onMouseenter:()=>{this.handleHandleMouseEnter(f)},onMouseleave:()=>{this.handleHandleMouseLeave(f)}},Ct(this.$slots.thumb,()=>[_("div",{class:`${o}-slider-handle`})]))}),this.tooltip&&_(zt,{ref:this.setFollowerRefs(f),show:p,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(f),teleportDisabled:this.adjustedTo===ke.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>_(Ae,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(f),onEnter:()=>{this.followerEnabledIndexSet.add(f)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(f)}},{default:()=>{var $;return p?(($=this.indicatorOnRender)===null||$===void 0||$.call(this),_("div",{class:[`${o}-slider-handle-indicator`,this.indicatorThemeClass,`${o}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof r=="function"?r(d):d)):null}})})]})})),this.marks?_("div",{class:`${o}-slider-marks`},this.markInfos.map(d=>_("div",{key:d.key,class:`${o}-slider-mark`,style:d.style},typeof d.label=="function"?d.label():d.label))):null))}}),qt=G([G("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),i("spin-container",`
 position: relative;
 `,[i("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Rt()])]),i("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),i("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[V("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),i("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),i("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[V("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),Zt={small:20,medium:18,large:16},Qt=Object.assign(Object.assign({},he.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),en=J({name:"Spin",props:Qt,slots:Object,setup(n){const{mergedClsPrefixRef:o,inlineThemeDisabled:m}=Ue(n),r=he("Spin","-spin",qt,Tt,n,o),d=C(()=>{const{size:c}=n,{common:{cubicBezierEaseInOut:h},self:k}=r.value,{opacitySpinning:j,color:U,textColor:A}=k,L=typeof c=="number"?It(c):k[Vt("size",c)];return{"--n-bezier":h,"--n-opacity-spinning":j,"--n-size":L,"--n-color":U,"--n-text-color":A}}),f=m?xe("spin",C(()=>{const{size:c}=n;return typeof c=="number"?String(c):c[0]}),d,n):void 0,p=Dt(n,["spinning","show"]),$=z(!1);return Mt(c=>{let h;if(p.value){const{delay:k}=n;if(k){h=window.setTimeout(()=>{$.value=!0},k),c(()=>{clearTimeout(h)});return}}$.value=p.value}),{mergedClsPrefix:o,active:$,mergedStrokeWidth:C(()=>{const{strokeWidth:c}=n;if(c!==void 0)return c;const{size:h}=n;return Zt[typeof h=="number"?"medium":h]}),cssVars:m?void 0:d,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){var n,o;const{$slots:m,mergedClsPrefix:r,description:d}=this,f=m.icon&&this.rotate,p=(d||m.description)&&_("div",{class:`${r}-spin-description`},d||((n=m.description)===null||n===void 0?void 0:n.call(m))),$=m.icon?_("div",{class:[`${r}-spin-body`,this.themeClass]},_("div",{class:[`${r}-spin`,f&&`${r}-spin--rotate`],style:m.default?"":this.cssVars},m.icon()),p):_("div",{class:[`${r}-spin-body`,this.themeClass]},_(Nt,{clsPrefix:r,style:m.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${r}-spin`}),p);return(o=this.onRender)===null||o===void 0||o.call(this),m.default?_("div",{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},_("div",{class:[`${r}-spin-content`,this.active&&`${r}-spin-content--spinning`,this.contentClass],style:this.contentStyle},m),_(Ae,{name:"fade-in-transition"},{default:()=>this.active?$:null})):$}});function tn(){const n=new Date,o=n.getDate(),m=n.getMonth()+1;return`${n.getFullYear()}-${m}-${o}`}const nn={class:"p-4 space-y-5 min-h-[200px]"},an={class:"space-y-6"},sn={class:"flex items-center space-x-4"},on={class:"flex-shrink-0 w-[100px]"},ln={class:"flex-1"},rn={class:"flex items-center space-x-4"},dn={class:"flex-shrink-0 w-[100px]"},cn={class:"w-[200px]"},un={class:"flex items-center space-x-4"},hn={class:"flex-shrink-0 w-[100px]"},vn={class:"flex-1"},fn={class:"flex-shrink-0 w-[100px]"},mn={class:"flex flex-wrap items-center gap-4"},pn={class:"flex items-center space-x-4"},gn={class:"flex-shrink-0 w-[100px]"},bn={class:"flex flex-wrap items-center gap-4"},yn={class:"flex items-center space-x-4"},wn={class:"flex-shrink-0 w-[100px]"},xn={class:"flex flex-wrap items-center gap-4"},kn={class:"flex items-center space-x-4"},$n={class:"flex-shrink-0 w-[100px]"},Sn=J({__name:"General",setup(n){const o=Bt(),m=Pt(),{isMobile:r}=Ut(),d=Ee(),f=C(()=>o.theme),p=C(()=>m.userInfo),$=z(p.value.avatar??""),c=z(p.value.name??""),h=z(p.value.description??""),k=C({get(){return o.language},set(y){o.setLanguage(y)}}),j=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],U=[{label:"English",key:"en-US",value:"en-US"},{label:"Español",key:"es-ES",value:"es-ES"},{label:"한국어",key:"ko-KR",value:"ko-KR"},{label:"Русский язык",key:"ru-RU",value:"ru-RU"},{label:"Tiếng Việt",key:"vi-VN",value:"vi-VN"},{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"}];function A(y){m.updateUserInfo(y),d.success(X("common.success"))}function L(){m.resetUserInfo(),d.success(X("common.success")),window.location.reload()}function ve(){const y=tn(),S=localStorage.getItem("chatStorage")||"{}",b=JSON.stringify(JSON.parse(S),null,2),F=new Blob([b],{type:"application/json"}),B=URL.createObjectURL(F),N=document.createElement("a");N.href=B,N.download=`chat-store_${y}.json`,document.body.appendChild(N),N.click(),document.body.removeChild(N)}function q(y){const S=y.target;if(!S||!S.files)return;const b=S.files[0];if(!b)return;const F=new FileReader;F.onload=()=>{try{const B=JSON.parse(F.result);localStorage.setItem("chatStorage",JSON.stringify(B)),d.success(X("common.success")),location.reload()}catch{d.error(X("common.invalidFileFormat"))}},F.readAsText(b)}function M(){localStorage.removeItem("chatStorage"),location.reload()}function Q(){const y=document.getElementById("fileInput");y&&y.click()}return(y,S)=>(O(),Z("div",nn,[s("div",an,[s("div",sn,[s("span",on,l(y.$t("setting.avatarLink")),1),s("div",ln,[g(u(ue),{value:$.value,"onUpdate:value":S[0]||(S[0]=b=>$.value=b),placeholder:""},null,8,["value"])]),g(u(P),{size:"tiny",text:"",type:"primary",onClick:S[1]||(S[1]=b=>A({avatar:$.value}))},{default:x(()=>[D(l(y.$t("common.save")),1)]),_:1})]),s("div",rn,[s("span",dn,l(y.$t("setting.name")),1),s("div",cn,[g(u(ue),{value:c.value,"onUpdate:value":S[2]||(S[2]=b=>c.value=b),placeholder:""},null,8,["value"])]),g(u(P),{size:"tiny",text:"",type:"primary",onClick:S[3]||(S[3]=b=>A({name:c.value}))},{default:x(()=>[D(l(y.$t("common.save")),1)]),_:1})]),s("div",un,[s("span",hn,l(y.$t("setting.description")),1),s("div",vn,[g(u(ue),{value:h.value,"onUpdate:value":S[4]||(S[4]=b=>h.value=b),placeholder:""},null,8,["value"])]),g(u(P),{size:"tiny",text:"",type:"primary",onClick:S[5]||(S[5]=b=>A({description:h.value}))},{default:x(()=>[D(l(y.$t("common.save")),1)]),_:1})]),s("div",{class:At(["flex items-center space-x-4",u(r)&&"items-start"])},[s("span",fn,l(y.$t("setting.chatHistory")),1),s("div",mn,[g(u(P),{size:"small",onClick:ve},{icon:x(()=>[g(u(K),{icon:"ri:download-2-fill"})]),default:x(()=>[D(" "+l(y.$t("common.export")),1)]),_:1}),s("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:q},null,32),g(u(P),{size:"small",onClick:Q},{icon:x(()=>[g(u(K),{icon:"ri:upload-2-fill"})]),default:x(()=>[D(" "+l(y.$t("common.import")),1)]),_:1}),g(u(Et),{placement:"bottom",onPositiveClick:M},{trigger:x(()=>[g(u(P),{size:"small"},{icon:x(()=>[g(u(K),{icon:"ri:close-circle-line"})]),default:x(()=>[D(" "+l(y.$t("common.clear")),1)]),_:1})]),default:x(()=>[D(" "+l(y.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),s("div",pn,[s("span",gn,l(y.$t("setting.theme")),1),s("div",bn,[(O(),Z(jt,null,Ft(j,b=>g(u(P),{key:b.key,size:"small",type:b.key===f.value?"primary":void 0,onClick:F=>u(o).setTheme(b.key)},{icon:x(()=>[g(u(K),{icon:b.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),s("div",yn,[s("span",wn,l(y.$t("setting.language")),1),s("div",xn,[g(u(Ht),{style:{width:"140px"},value:k.value,options:U,onUpdateValue:S[6]||(S[6]=b=>u(o).setLanguage(b))},null,8,["value"])])]),s("div",kn,[s("span",$n,l(y.$t("setting.resetUserInfo")),1),g(u(P),{size:"small",onClick:L},{default:x(()=>[D(l(y.$t("common.reset")),1)]),_:1})])])]))}}),_n={class:"p-4 space-y-5 min-h-[200px]"},Cn={class:"space-y-6"},zn={class:"flex items-center space-x-4"},Rn={class:"flex-shrink-0 w-[120px]"},Tn={class:"flex-1"},In={class:"flex items-center space-x-4"},Vn={class:"flex-shrink-0 w-[120px]"},Dn={class:"flex-1"},Mn={class:"flex items-center space-x-4"},Nn={class:"flex-shrink-0 w-[120px]"},Bn={class:"flex-1"},Pn={class:"flex items-center space-x-4"},Un=J({__name:"Advanced",setup(n){const o=Ot(),m=Ee(),r=z(o.systemMessage??""),d=z(o.temperature??.5),f=z(o.top_p??1);function p(c){o.updateSetting(c),m.success(X("common.success"))}function $(){o.resetSetting(),m.success(X("common.success")),window.location.reload()}return(c,h)=>(O(),Z("div",_n,[s("div",Cn,[s("div",zn,[s("span",Rn,l(c.$t("setting.role")),1),s("div",Tn,[g(u(ue),{value:r.value,"onUpdate:value":h[0]||(h[0]=k=>r.value=k),type:"textarea",autosize:{minRows:1,maxRows:4}},null,8,["value"])]),g(u(P),{size:"tiny",text:"",type:"primary",onClick:h[1]||(h[1]=k=>p({systemMessage:r.value}))},{default:x(()=>[D(l(c.$t("common.save")),1)]),_:1})]),s("div",In,[s("span",Vn,l(c.$t("setting.temperature")),1),s("div",Dn,[g(u(Pe),{value:d.value,"onUpdate:value":h[2]||(h[2]=k=>d.value=k),max:2,min:0,step:.1},null,8,["value"])]),s("span",null,l(d.value),1),g(u(P),{size:"tiny",text:"",type:"primary",onClick:h[3]||(h[3]=k=>p({temperature:d.value}))},{default:x(()=>[D(l(c.$t("common.save")),1)]),_:1})]),s("div",Mn,[s("span",Nn,l(c.$t("setting.top_p")),1),s("div",Bn,[g(u(Pe),{value:f.value,"onUpdate:value":h[4]||(h[4]=k=>f.value=k),max:1,min:0,step:.1},null,8,["value"])]),s("span",null,l(f.value),1),g(u(P),{size:"tiny",text:"",type:"primary",onClick:h[5]||(h[5]=k=>p({top_p:f.value}))},{default:x(()=>[D(l(c.$t("common.save")),1)]),_:1})]),s("div",Pn,[h[6]||(h[6]=s("span",{class:"flex-shrink-0 w-[120px]"}," ",-1)),g(u(P),{size:"small",onClick:$},{default:x(()=>[D(l(c.$t("common.reset")),1)]),_:1})])])]))}}),An="chatgpt-web",En="2.11.1",jn="ChatGPT Web",Fn="ChenZhaoYu <chenzhaoyu1994@gmail.com>",Hn=["chatgpt-web","chatgpt","chatbot","vue"],On={dev:"vite",build:"run-p type-check build-only",preview:"vite preview","build-only":"vite build","type-check":"vue-tsc --noEmit",lint:"eslint .","lint:fix":"eslint . --fix",bootstrap:"pnpm install && pnpm run common:prepare","common:cleanup":"rimraf node_modules && rimraf pnpm-lock.yaml","common:prepare":"husky install"},Ln={"@vscode/markdown-it-katex":"^1.0.3","@vueuse/core":"^9.13.0","highlight.js":"^11.7.0","html-to-image":"^1.11.11",katex:"^0.16.4","markdown-it":"^13.0.1","mermaid-it-markdown":"^1.0.8","naive-ui":"^2.34.3",pinia:"^2.0.33",vue:"^3.2.47","vue-i18n":"^9.2.2","vue-router":"^4.1.6"},Gn={"@antfu/eslint-config":"^0.35.3","@commitlint/cli":"^17.4.4","@commitlint/config-conventional":"^17.4.4","@iconify/vue":"^4.1.0","@types/crypto-js":"^4.1.1","@types/katex":"^0.16.0","@types/markdown-it":"^12.2.3","@types/markdown-it-link-attributes":"^3.0.1","@types/node":"^18.14.6","@vitejs/plugin-vue":"^4.0.0",autoprefixer:"^10.4.13",axios:"^1.3.4","crypto-js":"^4.1.1",eslint:"^8.35.0",husky:"^8.0.3",less:"^4.1.3","lint-staged":"^13.1.2","markdown-it-link-attributes":"^4.0.1","npm-run-all":"^4.1.5",postcss:"^8.4.21",rimraf:"^4.3.0",tailwindcss:"^3.2.7",typescript:"~4.9.5",vite:"^4.2.0","vite-plugin-pwa":"^0.14.4","vue-tsc":"^1.2.0"},Kn={name:An,version:En,private:!1,description:jn,author:Fn,keywords:Hn,scripts:On,dependencies:Ln,devDependencies:Gn,"lint-staged":{"*.{ts,tsx,vue}":["pnpm lint:fix"]}},Wn={class:"p-4 space-y-4"},Yn={class:"text-xl font-bold"},Xn={class:"p-2 space-y-2 rounded-md bg-neutral-100 dark:bg-neutral-700"},Jn={key:0},qn={key:1},Zn=J({__name:"About",setup(n){const o=je(),m=z(!1),r=z(),d=C(()=>!!o.isChatGPTAPI);async function f(){try{m.value=!0;const{data:p}=await Gt();r.value=p}finally{m.value=!1}}return Lt(()=>{f()}),(p,$)=>(O(),$e(u(en),{show:m.value},{default:x(()=>{var c,h,k,j,U,A;return[s("div",Wn,[s("h2",Yn," Version - "+l(u(Kn).version),1),s("div",Xn,[s("p",null,[D(l(p.$t("setting.openSource"))+" ",1),$[0]||($[0]=s("a",{class:"text-blue-600 dark:text-blue-500",href:"https://github.com/Chanzhaoyu/chatgpt-web",target:"_blank"}," GitHub ",-1)),D(" "+l(p.$t("setting.freeMIT")),1)]),s("p",null,l(p.$t("setting.stars")),1)]),s("p",null,l(p.$t("setting.api"))+"："+l(((c=r.value)==null?void 0:c.apiModel)??"-"),1),d.value?(O(),Z("p",Jn,l(p.$t("setting.monthlyUsage"))+"："+l(((h=r.value)==null?void 0:h.usage)??"-"),1)):Se("",!0),d.value?Se("",!0):(O(),Z("p",qn,l(p.$t("setting.reverseProxy"))+"："+l(((k=r.value)==null?void 0:k.reverseProxy)??"-"),1)),s("p",null,l(p.$t("setting.timeout"))+"："+l(((j=r.value)==null?void 0:j.timeoutMs)??"-"),1),s("p",null,l(p.$t("setting.socks"))+"："+l(((U=r.value)==null?void 0:U.socksProxy)??"-"),1),s("p",null,l(p.$t("setting.httpsProxy"))+"："+l(((A=r.value)==null?void 0:A.httpsProxy)??"-"),1)])]}),_:1},8,["show"]))}}),Qn={class:"ml-2"},ea={class:"min-h-[100px]"},ta={class:"ml-2"},na={class:"min-h-[100px]"},aa={class:"ml-2"},oa=J({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(n,{emit:o}){const m=n,r=o,d=je(),f=C(()=>!!d.isChatGPTAPI),p=z("General"),$=C({get(){return m.visible},set(c){r("update:visible",c)}});return(c,h)=>(O(),$e(u(Wt),{show:$.value,"onUpdate:show":h[1]||(h[1]=k=>$.value=k),"auto-focus":!1,preset:"card",style:{width:"95%","max-width":"640px"}},{default:x(()=>[s("div",null,[g(u(Kt),{value:p.value,"onUpdate:value":h[0]||(h[0]=k=>p.value=k),type:"line",animated:""},{default:x(()=>[g(u(we),{name:"General",tab:"General"},{tab:x(()=>[g(u(K),{class:"text-lg",icon:"ri:file-user-line"}),s("span",Qn,l(c.$t("setting.general")),1)]),default:x(()=>[s("div",ea,[g(Sn)])]),_:1}),f.value?(O(),$e(u(we),{key:0,name:"Advanced",tab:"Advanced"},{tab:x(()=>[g(u(K),{class:"text-lg",icon:"ri:equalizer-line"}),s("span",ta,l(c.$t("setting.advanced")),1)]),default:x(()=>[s("div",na,[g(Un)])]),_:1})):Se("",!0),g(u(we),{name:"Config",tab:"Config"},{tab:x(()=>[g(u(K),{class:"text-lg",icon:"ri:list-settings-line"}),s("span",aa,l(c.$t("setting.config")),1)]),default:x(()=>[g(Zn)]),_:1})]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{oa as default};
