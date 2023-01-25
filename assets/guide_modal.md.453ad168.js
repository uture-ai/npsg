import{V as F,_ as i,c as E,a as y,w as d,d as t,b as C,r as D,o as x,e as o}from"./app.96b69884.js";const{defineComponent:b}=F,A=b({name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:l,resolveComponent:c,withCtx:s,createVNode:e,Fragment:p,openBlock:r,createElementBlock:a}=F;function u(V,N){const n=c("xl-button");return r(),a(p,null,[e(n,null,{default:s(()=>[l("默认按钮")]),_:1}),e(n,{type:"primary"},{default:s(()=>[l("主要按钮")]),_:1}),e(n,{type:"success"},{default:s(()=>[l("成功按钮")]),_:1}),e(n,{type:"info"},{default:s(()=>[l("信息按钮")]),_:1}),e(n,{type:"warning"},{default:s(()=>[l("警告按钮")]),_:1}),e(n,{type:"danger"},{default:s(()=>[l("危险按钮")]),_:1})],64)}return{render:u,...{}}}()}}),$=JSON.parse('{"title":"Modal 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"guide/modal.md","lastUpdated":1674651305000}'),_=t("h1",{id:"modal-对话框",tabindex:"-1"},"Modal 对话框",-1),m=t("p",null,"在保留当前页面状态的情况下，告知用户并承载相关操作。",-1),h=t("h2",{id:"基础用法",tabindex:"-1"},"基础用法",-1),B=t("p",null,"Modal 弹出一个对话框，适合需要定制性更大的场景。",-1),f=t("div",{class:"language-vue"},[t("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#C9D1D9"}},"<"),t("span",{style:{color:"#7EE787"}},"template"),t("span",{style:{color:"#C9D1D9"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#C9D1D9"}},"  <"),t("span",{style:{color:"#7EE787"}},"xl-button"),t("span",{style:{color:"#C9D1D9"}},">默认按钮</"),t("span",{style:{color:"#7EE787"}},"xl-button"),t("span",{style:{color:"#C9D1D9"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#C9D1D9"}},"  <"),t("span",{style:{color:"#7EE787"}},"xl-button"),t("span",{style:{color:"#C9D1D9"}}," "),t("span",{style:{color:"#79C0FF"}},"type"),t("span",{style:{color:"#C9D1D9"}},"="),t("span",{style:{color:"#A5D6FF"}},'"primary"'),t("span",{style:{color:"#C9D1D9"}},">主要按钮</"),t("span",{style:{color:"#7EE787"}},"xl-button"),t("span",{style:{color:"#C9D1D9"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#C9D1D9"}},"  <"),t("span",{style:{color:"#7EE787"}},"xl-button"),t("span",{style:{color:"#C9D1D9"}}," "),t("span",{style:{color:"#79C0FF"}},"type"),t("span",{style:{color:"#C9D1D9"}},"="),t("span",{style:{color:"#A5D6FF"}},'"success"'),t("span",{style:{color:"#C9D1D9"}},">成功按钮</"),t("span",{style:{color:"#7EE787"}},"xl-button"),t("span",{style:{color:"#C9D1D9"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#C9D1D9"}},"  <"),t("span",{style:{color:"#7EE787"}},"xl-button"),t("span",{style:{color:"#C9D1D9"}}," "),t("span",{style:{color:"#79C0FF"}},"type"),t("span",{style:{color:"#C9D1D9"}},"="),t("span",{style:{color:"#A5D6FF"}},'"info"'),t("span",{style:{color:"#C9D1D9"}},">信息按钮</"),t("span",{style:{color:"#7EE787"}},"xl-button"),t("span",{style:{color:"#C9D1D9"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#C9D1D9"}},"  <"),t("span",{style:{color:"#7EE787"}},"xl-button"),t("span",{style:{color:"#C9D1D9"}}," "),t("span",{style:{color:"#79C0FF"}},"type"),t("span",{style:{color:"#C9D1D9"}},"="),t("span",{style:{color:"#A5D6FF"}},'"warning"'),t("span",{style:{color:"#C9D1D9"}},">警告按钮</"),t("span",{style:{color:"#7EE787"}},"xl-button"),t("span",{style:{color:"#C9D1D9"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#C9D1D9"}},"  <"),t("span",{style:{color:"#7EE787"}},"xl-button"),t("span",{style:{color:"#C9D1D9"}}," "),t("span",{style:{color:"#79C0FF"}},"type"),t("span",{style:{color:"#C9D1D9"}},"="),t("span",{style:{color:"#A5D6FF"}},'"danger"'),t("span",{style:{color:"#C9D1D9"}},">危险按钮</"),t("span",{style:{color:"#7EE787"}},"xl-button"),t("span",{style:{color:"#C9D1D9"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#C9D1D9"}},"</"),t("span",{style:{color:"#7EE787"}},"template"),t("span",{style:{color:"#C9D1D9"}},">")]),o(`
`),t("span",{class:"line"})])]),t("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#24292F"}},"<"),t("span",{style:{color:"#116329"}},"template"),t("span",{style:{color:"#24292F"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#24292F"}},"  <"),t("span",{style:{color:"#116329"}},"xl-button"),t("span",{style:{color:"#24292F"}},">默认按钮</"),t("span",{style:{color:"#116329"}},"xl-button"),t("span",{style:{color:"#24292F"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#24292F"}},"  <"),t("span",{style:{color:"#116329"}},"xl-button"),t("span",{style:{color:"#24292F"}}," "),t("span",{style:{color:"#0550AE"}},"type"),t("span",{style:{color:"#24292F"}},"="),t("span",{style:{color:"#0A3069"}},'"primary"'),t("span",{style:{color:"#24292F"}},">主要按钮</"),t("span",{style:{color:"#116329"}},"xl-button"),t("span",{style:{color:"#24292F"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#24292F"}},"  <"),t("span",{style:{color:"#116329"}},"xl-button"),t("span",{style:{color:"#24292F"}}," "),t("span",{style:{color:"#0550AE"}},"type"),t("span",{style:{color:"#24292F"}},"="),t("span",{style:{color:"#0A3069"}},'"success"'),t("span",{style:{color:"#24292F"}},">成功按钮</"),t("span",{style:{color:"#116329"}},"xl-button"),t("span",{style:{color:"#24292F"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#24292F"}},"  <"),t("span",{style:{color:"#116329"}},"xl-button"),t("span",{style:{color:"#24292F"}}," "),t("span",{style:{color:"#0550AE"}},"type"),t("span",{style:{color:"#24292F"}},"="),t("span",{style:{color:"#0A3069"}},'"info"'),t("span",{style:{color:"#24292F"}},">信息按钮</"),t("span",{style:{color:"#116329"}},"xl-button"),t("span",{style:{color:"#24292F"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#24292F"}},"  <"),t("span",{style:{color:"#116329"}},"xl-button"),t("span",{style:{color:"#24292F"}}," "),t("span",{style:{color:"#0550AE"}},"type"),t("span",{style:{color:"#24292F"}},"="),t("span",{style:{color:"#0A3069"}},'"warning"'),t("span",{style:{color:"#24292F"}},">警告按钮</"),t("span",{style:{color:"#116329"}},"xl-button"),t("span",{style:{color:"#24292F"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#24292F"}},"  <"),t("span",{style:{color:"#116329"}},"xl-button"),t("span",{style:{color:"#24292F"}}," "),t("span",{style:{color:"#0550AE"}},"type"),t("span",{style:{color:"#24292F"}},"="),t("span",{style:{color:"#0A3069"}},'"danger"'),t("span",{style:{color:"#24292F"}},">危险按钮</"),t("span",{style:{color:"#116329"}},"xl-button"),t("span",{style:{color:"#24292F"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#24292F"}},"</"),t("span",{style:{color:"#116329"}},"template"),t("span",{style:{color:"#24292F"}},">")]),o(`
`),t("span",{class:"line"})])])],-1),g=C('<h2 id="attributes" tabindex="-1">Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>visible</td><td>是否展示</td><td>boolean</td><td>true / false</td><td>normal</td></tr><tr><td>ok</td><td>确认触发函数</td><td>function</td><td>()=&gt;{}</td><td>—</td></tr><tr><td>cancel</td><td>取消触发函数</td><td>function</td><td>()=&gt;{}</td><td>—</td></tr></tbody></table>',2);function v(l,c,s,e,p,r){const a=D("render-demo-0"),u=D("demo");return x(),E("div",null,[_,m,h,B,y(u,{customClass:"undefined",sourceCode:`<template>
  <xl-button>默认按钮</xl-button>
  <xl-button type="primary">主要按钮</xl-button>
  <xl-button type="success">成功按钮</xl-button>
  <xl-button type="info">信息按钮</xl-button>
  <xl-button type="warning">警告按钮</xl-button>
  <xl-button type="danger">危险按钮</xl-button>
</template>
`},{highlight:d(()=>[f]),default:d(()=>[y(a)]),_:1}),g])}const M=i(A,[["render",v]]);export{$ as __pageData,M as default};
