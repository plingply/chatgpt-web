import{bg as O,a as j,d as ue,bh as W,bi as L,aZ as c,aW as $,bj as Z,bk as he,bl as fe,bm as de,bn as J,bo as ce,bp as Q,g as v,bq as w,ba as X,b3 as ge,br as le,b as be,bs as _e,bt as pe,bu as ye,b7 as me,bv as Te,b2 as je,bw as P,bx as Ae,aY as z,by as Ee,b9 as Ce,bz as S,bA as k,bB as Oe,bC as we,aU as Le,bD as Se,be as E,aP as M}from"./index-0bf17fa2.js";import{aq as G}from"./index-544e9bbb.js";function Fe(){}function ee(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}function Ie(t,e,n,r){for(var s=t.length,i=n+(r?1:-1);r?i--:++i<s;)if(e(t[i],i,t))return i;return-1}function Ne(t){return t!==t}function $e(t,e,n){for(var r=n-1,s=t.length;++r<s;)if(t[r]===e)return r;return-1}function ve(t,e,n){return e===e?$e(t,e,n):Ie(t,Ne,n)}function Pe(t,e){var n=t==null?0:t.length;return!!n&&ve(t,e,0)>-1}var U=O?O.isConcatSpreadable:void 0;function xe(t){return j(t)||ue(t)||!!(U&&t&&t[U])}function te(t,e,n,r,s){var i=-1,a=t.length;for(n||(n=xe),s||(s=[]);++i<a;){var o=t[i];e>0&&n(o)?e>1?te(o,e-1,n,r,s):W(s,o):r||(s[s.length]=o)}return s}function De(t,e,n,r){var s=-1,i=t==null?0:t.length;for(r&&i&&(n=t[++s]);++s<i;)n=e(n,t[s],s,t);return n}function Me(t,e){return t&&L(e,c(e),t)}function Ge(t,e){return t&&L(e,$(e),t)}function Ue(t,e){return L(t,Z(t),e)}var Be=Object.getOwnPropertySymbols,Re=Be?function(t){for(var e=[];t;)W(e,Z(t)),t=fe(t);return e}:he;const ne=Re;function Ve(t,e){return L(t,ne(t),e)}function Ye(t){return de(t,$,ne)}var Ke=Object.prototype,qe=Ke.hasOwnProperty;function He(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&qe.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function We(t,e){var n=e?J(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var Ze=/\w*$/;function Je(t){var e=new t.constructor(t.source,Ze.exec(t));return e.lastIndex=t.lastIndex,e}var B=O?O.prototype:void 0,R=B?B.valueOf:void 0;function Qe(t){return R?Object(R.call(t)):{}}var Xe="[object Boolean]",ze="[object Date]",ke="[object Map]",et="[object Number]",tt="[object RegExp]",nt="[object Set]",rt="[object String]",st="[object Symbol]",it="[object ArrayBuffer]",at="[object DataView]",ot="[object Float32Array]",ut="[object Float64Array]",ht="[object Int8Array]",ft="[object Int16Array]",dt="[object Int32Array]",ct="[object Uint8Array]",gt="[object Uint8ClampedArray]",lt="[object Uint16Array]",bt="[object Uint32Array]";function _t(t,e,n){var r=t.constructor;switch(e){case it:return J(t);case Xe:case ze:return new r(+t);case at:return We(t,n);case ot:case ut:case ht:case ft:case dt:case ct:case gt:case lt:case bt:return ce(t,n);case ke:return new r;case et:case rt:return new r(t);case tt:return Je(t);case nt:return new r;case st:return Qe(t)}}var pt="[object Map]";function yt(t){return Q(t)&&v(t)==pt}var V=w&&w.isMap,mt=V?X(V):yt;const Tt=mt;var jt="[object Set]";function At(t){return Q(t)&&v(t)==jt}var Y=w&&w.isSet,Et=Y?X(Y):At;const Ct=Et;var Ot=1,wt=2,Lt=4,re="[object Arguments]",St="[object Array]",Ft="[object Boolean]",It="[object Date]",Nt="[object Error]",se="[object Function]",$t="[object GeneratorFunction]",vt="[object Map]",Pt="[object Number]",ie="[object Object]",xt="[object RegExp]",Dt="[object Set]",Mt="[object String]",Gt="[object Symbol]",Ut="[object WeakMap]",Bt="[object ArrayBuffer]",Rt="[object DataView]",Vt="[object Float32Array]",Yt="[object Float64Array]",Kt="[object Int8Array]",qt="[object Int16Array]",Ht="[object Int32Array]",Wt="[object Uint8Array]",Zt="[object Uint8ClampedArray]",Jt="[object Uint16Array]",Qt="[object Uint32Array]",u={};u[re]=u[St]=u[Bt]=u[Rt]=u[Ft]=u[It]=u[Vt]=u[Yt]=u[Kt]=u[qt]=u[Ht]=u[vt]=u[Pt]=u[ie]=u[xt]=u[Dt]=u[Mt]=u[Gt]=u[Wt]=u[Zt]=u[Jt]=u[Qt]=!0;u[Nt]=u[se]=u[Ut]=!1;function F(t,e,n,r,s,i){var a,o=e&Ot,h=e&wt,A=e&Lt;if(n&&(a=s?n(t,r,s,i):n(t)),a!==void 0)return a;if(!ge(t))return t;var d=j(t);if(d){if(a=He(t),!o)return le(t,a)}else{var f=v(t),m=f==se||f==$t;if(be(t))return _e(t,o);if(f==ie||f==re||m&&!s){if(a=h||m?{}:pe(t),!o)return h?Ve(t,Ge(a,t)):Ue(t,Me(a,t))}else{if(!u[f])return s?t:{};a=_t(t,f,o)}}i||(i=new ye);var x=i.get(t);if(x)return x;i.set(t,a),Ct(t)?t.forEach(function(g){a.add(F(g,e,n,g,t,i))}):Tt(t)&&t.forEach(function(g,b){a.set(b,F(g,e,n,b,t,i))});var oe=A?h?Ye:Te:h?$:c,D=d?void 0:oe(t);return ee(D||t,function(g,b){D&&(b=g,g=t[b]),me(a,b,F(g,e,n,b,t,i))}),a}function Xt(t,e,n){for(var r=-1,s=t==null?0:t.length;++r<s;)if(n(e,t[r]))return!0;return!1}function zt(t){return typeof t=="function"?t:je}function _(t,e){var n=j(t)?ee:P;return n(t,zt(e))}function kt(t,e){var n=[];return P(t,function(r,s,i){e(r,s,i)&&n.push(r)}),n}function C(t,e){var n=j(t)?Ae:kt;return n(t,z(e))}var en=Object.prototype,tn=en.hasOwnProperty;function nn(t,e){return t!=null&&tn.call(t,e)}function l(t,e){return t!=null&&Ee(t,e,nn)}function rn(t,e){return Ce(e,function(n){return t[n]})}function I(t){return t==null?[]:rn(t,c(t))}function y(t){return t===void 0}function sn(t,e,n,r,s){return s(t,function(i,a,o){n=r?(r=!1,i):e(n,i,a,o)}),n}function an(t,e,n){var r=j(t)?De:sn,s=arguments.length<3;return r(t,z(e),n,s,P)}var on=1/0,un=S&&1/k(new S([,-0]))[1]==on?function(t){return new S(t)}:Fe;const hn=un;var fn=200;function dn(t,e,n){var r=-1,s=Pe,i=t.length,a=!0,o=[],h=o;if(n)a=!1,s=Xt;else if(i>=fn){var A=e?null:hn(t);if(A)return k(A);a=!1,s=we,h=new Oe}else h=e?[]:o;e:for(;++r<i;){var d=t[r],f=e?e(d):d;if(d=n||d!==0?d:0,a&&f===f){for(var m=h.length;m--;)if(h[m]===f)continue e;e&&h.push(f),o.push(d)}else s(h,f,n)||(h!==o&&h.push(f),o.push(d))}return o}var cn=Le(function(t){return dn(te(t,1,Se,!0))});const gn=cn;var ln="\0",p="\0",K="";class ae{constructor(e={}){this._isDirected=l(e,"directed")?e.directed:!0,this._isMultigraph=l(e,"multigraph")?e.multigraph:!1,this._isCompound=l(e,"compound")?e.compound:!1,this._label=void 0,this._defaultNodeLabelFn=E(void 0),this._defaultEdgeLabelFn=E(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[p]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(e){return this._label=e,this}graph(){return this._label}setDefaultNodeLabel(e){return M(e)||(e=E(e)),this._defaultNodeLabelFn=e,this}nodeCount(){return this._nodeCount}nodes(){return c(this._nodes)}sources(){var e=this;return C(this.nodes(),function(n){return G(e._in[n])})}sinks(){var e=this;return C(this.nodes(),function(n){return G(e._out[n])})}setNodes(e,n){var r=arguments,s=this;return _(e,function(i){r.length>1?s.setNode(i,n):s.setNode(i)}),this}setNode(e,n){return l(this._nodes,e)?(arguments.length>1&&(this._nodes[e]=n),this):(this._nodes[e]=arguments.length>1?n:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]=p,this._children[e]={},this._children[p][e]=!0),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount,this)}node(e){return this._nodes[e]}hasNode(e){return l(this._nodes,e)}removeNode(e){var n=this;if(l(this._nodes,e)){var r=function(s){n.removeEdge(n._edgeObjs[s])};delete this._nodes[e],this._isCompound&&(this._removeFromParentsChildList(e),delete this._parent[e],_(this.children(e),function(s){n.setParent(s)}),delete this._children[e]),_(c(this._in[e]),r),delete this._in[e],delete this._preds[e],_(c(this._out[e]),r),delete this._out[e],delete this._sucs[e],--this._nodeCount}return this}setParent(e,n){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(y(n))n=p;else{n+="";for(var r=n;!y(r);r=this.parent(r))if(r===e)throw new Error("Setting "+n+" as parent of "+e+" would create a cycle");this.setNode(n)}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=n,this._children[n][e]=!0,this}_removeFromParentsChildList(e){delete this._children[this._parent[e]][e]}parent(e){if(this._isCompound){var n=this._parent[e];if(n!==p)return n}}children(e){if(y(e)&&(e=p),this._isCompound){var n=this._children[e];if(n)return c(n)}else{if(e===p)return this.nodes();if(this.hasNode(e))return[]}}predecessors(e){var n=this._preds[e];if(n)return c(n)}successors(e){var n=this._sucs[e];if(n)return c(n)}neighbors(e){var n=this.predecessors(e);if(n)return gn(n,this.successors(e))}isLeaf(e){var n;return this.isDirected()?n=this.successors(e):n=this.neighbors(e),n.length===0}filterNodes(e){var n=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});n.setGraph(this.graph());var r=this;_(this._nodes,function(a,o){e(o)&&n.setNode(o,a)}),_(this._edgeObjs,function(a){n.hasNode(a.v)&&n.hasNode(a.w)&&n.setEdge(a,r.edge(a))});var s={};function i(a){var o=r.parent(a);return o===void 0||n.hasNode(o)?(s[a]=o,o):o in s?s[o]:i(o)}return this._isCompound&&_(n.nodes(),function(a){n.setParent(a,i(a))}),n}setDefaultEdgeLabel(e){return M(e)||(e=E(e)),this._defaultEdgeLabelFn=e,this}edgeCount(){return this._edgeCount}edges(){return I(this._edgeObjs)}setPath(e,n){var r=this,s=arguments;return an(e,function(i,a){return s.length>1?r.setEdge(i,a,n):r.setEdge(i,a),a}),this}setEdge(){var e,n,r,s,i=!1,a=arguments[0];typeof a=="object"&&a!==null&&"v"in a?(e=a.v,n=a.w,r=a.name,arguments.length===2&&(s=arguments[1],i=!0)):(e=a,n=arguments[1],r=arguments[3],arguments.length>2&&(s=arguments[2],i=!0)),e=""+e,n=""+n,y(r)||(r=""+r);var o=T(this._isDirected,e,n,r);if(l(this._edgeLabels,o))return i&&(this._edgeLabels[o]=s),this;if(!y(r)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(e),this.setNode(n),this._edgeLabels[o]=i?s:this._defaultEdgeLabelFn(e,n,r);var h=bn(this._isDirected,e,n,r);return e=h.v,n=h.w,Object.freeze(h),this._edgeObjs[o]=h,q(this._preds[n],e),q(this._sucs[e],n),this._in[n][o]=h,this._out[e][o]=h,this._edgeCount++,this}edge(e,n,r){var s=arguments.length===1?N(this._isDirected,arguments[0]):T(this._isDirected,e,n,r);return this._edgeLabels[s]}hasEdge(e,n,r){var s=arguments.length===1?N(this._isDirected,arguments[0]):T(this._isDirected,e,n,r);return l(this._edgeLabels,s)}removeEdge(e,n,r){var s=arguments.length===1?N(this._isDirected,arguments[0]):T(this._isDirected,e,n,r),i=this._edgeObjs[s];return i&&(e=i.v,n=i.w,delete this._edgeLabels[s],delete this._edgeObjs[s],H(this._preds[n],e),H(this._sucs[e],n),delete this._in[n][s],delete this._out[e][s],this._edgeCount--),this}inEdges(e,n){var r=this._in[e];if(r){var s=I(r);return n?C(s,function(i){return i.v===n}):s}}outEdges(e,n){var r=this._out[e];if(r){var s=I(r);return n?C(s,function(i){return i.w===n}):s}}nodeEdges(e,n){var r=this.inEdges(e,n);if(r)return r.concat(this.outEdges(e,n))}}ae.prototype._nodeCount=0;ae.prototype._edgeCount=0;function q(t,e){t[e]?t[e]++:t[e]=1}function H(t,e){--t[e]||delete t[e]}function T(t,e,n,r){var s=""+e,i=""+n;if(!t&&s>i){var a=s;s=i,i=a}return s+K+i+K+(y(r)?ln:r)}function bn(t,e,n,r){var s=""+e,i=""+n;if(!t&&s>i){var a=s;s=i,i=a}var o={v:s,w:i};return r&&(o.name=r),o}function N(t,e){return T(t,e.v,e.w,e.name)}export{ae as G,F as a,te as b,Ie as c,zt as d,C as e,_ as f,l as h,y as i,an as r,I as v};
