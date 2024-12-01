"use strict";(self.webpackChunkbi_graph=self.webpackChunkbi_graph||[]).push([[838],{53860:function(_,r,n){n.r(r),n.d(r,{demos:function(){return g}});var v=n(17061),a=n.n(v),P=n(17156),p=n.n(P),l=n(67294),j=n(63486),D=n(28566),g={"foo-demo-0":{component:l.memo(l.lazy(p()(a()().mark(function m(){var o,s;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.bind(n,28566));case 2:return o=t.sent,s=o.Foo,t.abrupt("return",{default:function(){return l.createElement(s,{title:"Hello dumi!"})}});case 5:case"end":return t.stop()}},m)})))),asset:{type:"BLOCK",id:"foo-demo-0",refAtomIds:["Foo"],dependencies:{"index.jsx":{type:"FILE",value:`import { Foo } from 'bi-graph';

export default () => <Foo title="Hello dumi!" />`},"bi-graph":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{"bi-graph":D},renderOpts:{compile:function(){var m=p()(a()().mark(function s(){var i,t=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(i=e.sent).default.apply(i,t));case 3:case"end":return e.stop()}},s)}));function o(){return m.apply(this,arguments)}return o}()}}}},7250:function(_,r,n){n.r(r),n.d(r,{demos:function(){return g}});var v=n(17061),a=n.n(v),P=n(17156),p=n.n(P),l=n(67294),j=n(60195),D=n(28566),g={"graph-demo-0":{component:l.memo(l.lazy(p()(a()().mark(function m(){var o,s,i;return a()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(n.bind(n,28566));case 2:return o=h.sent,s=o.Graph,i=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],h.abrupt("return",{default:function(){return l.createElement(s,{data:i})}});case 6:case"end":return h.stop()}},m)})))),asset:{type:"BLOCK",id:"graph-demo-0",refAtomIds:["Graph"],dependencies:{"index.jsx":{type:"FILE",value:`import { Graph } from 'bi-graph';

const demoData = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default () => <Graph data={demoData} />`},"bi-graph":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{"bi-graph":D},renderOpts:{compile:function(){var m=p()(a()().mark(function s(){var i,t=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(i=e.sent).default.apply(i,t));case 3:case"end":return e.stop()}},s)}));function o(){return m.apply(this,arguments)}return o}()}}}},28566:function(_,r,n){n.r(r),n.d(r,{Foo:function(){return p},Graph:function(){return T}});var v=n(67294),a=n(85893),P=function(f){return(0,a.jsx)("h4",{children:f.title})},p=P,l=n(27424),j=n.n(l),D=n(59212),g=n(29009),m=n(94831),o=n(14195),s=n(3023),i=n(75358),t=n(26050),h=n(33558),e=n(18001),O=n(13481),K=n(98687),y=n(56880),L=n(73604),R=n(46208),u=function(d){return d[d.BarChart=0]="BarChart",d[d.PieChart=1]="PieChart",d[d.LineChart=2]="LineChart",d}(u||{}),I=function(f){var b=(0,v.useState)(u.BarChart),M=j()(b,2),C=M[0],G=M[1],x=Object.keys(f.data[0]).filter(function(c){return c!=="name"}),B=x.map(function(){return[]});return x.forEach(function(c,E){f.data.forEach(function(A){B[E].push({name:A.name,value:A[c]})})}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D.Z,{style:{width:100},defaultValue:u.BarChart,onChange:function(E){G(E)},options:[{label:"\u67F1\u72B6\u56FE",value:u.BarChart},{label:"\u997C\u72B6\u56FE",value:u.PieChart},{label:"\u6298\u7EBF\u56FE",value:u.LineChart}]}),C===u.BarChart&&(0,a.jsx)(g.h,{width:"100%",height:300,children:(0,a.jsxs)(m.v,{width:500,height:300,data:f.data,margin:{top:5,right:30,left:20,bottom:5},children:[(0,a.jsx)(o.q,{strokeDasharray:"3 3"}),(0,a.jsx)(s.K,{dataKey:"name"}),(0,a.jsx)(i.B,{}),(0,a.jsx)(t.u,{}),(0,a.jsx)(h.D,{}),(0,a.jsx)(e.$,{dataKey:"pv",fill:"#8884d8",activeBar:(0,a.jsx)(O.A,{fill:"pink",stroke:"blue"})}),(0,a.jsx)(e.$,{dataKey:"uv",fill:"#82ca9d",activeBar:(0,a.jsx)(O.A,{fill:"gold",stroke:"purple"})})]})}),C===u.LineChart&&(0,a.jsx)(g.h,{width:"100%",height:300,children:(0,a.jsxs)(K.w,{width:500,height:300,data:f.data,margin:{top:5,right:30,left:20,bottom:5},children:[(0,a.jsx)(o.q,{strokeDasharray:"3 3"}),(0,a.jsx)(s.K,{dataKey:"name"}),(0,a.jsx)(i.B,{}),(0,a.jsx)(t.u,{}),(0,a.jsx)(h.D,{}),(0,a.jsx)(y.x,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),(0,a.jsx)(y.x,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"})]})}),C===u.PieChart&&B.map(function(c,E){return(0,a.jsx)(g.h,{width:"100%",height:300,children:(0,a.jsxs)(L.u,{width:400,height:400,children:[(0,a.jsx)(R.b,{dataKey:"value",isAnimationActive:!1,data:c,cx:"50%",cy:"50%",outerRadius:80,fill:"#8884d8",label:!0},x[E]),(0,a.jsx)(t.u,{})]})},E)})]})},T=I},63115:function(_,r,n){n.r(r),n.d(r,{texts:function(){return a}});var v=n(63486);const a=[{value:"This is an example component.",paraId:0,tocIndex:0}]},35987:function(_,r,n){n.r(r),n.d(r,{texts:function(){return a}});var v=n(60195);const a=[]}}]);
