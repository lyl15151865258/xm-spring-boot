(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d487"],{d148:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.className,style:{height:t.height,width:t.width}})},s=[],n=i("5c3d"),r=i.n(n),h=i("df6d");i("d5f7");var o=6e3,c={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},barChartData:{type:Object,require:!0}},data:function(){return{chart:null}},watch:{barChartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.initChart(),this.__resizeHandler=Object(h["a"])((function(){t.chart&&t.chart.resize()}),100),window.addEventListener("resize",this.__resizeHandler)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHandler),this.chart.dispose(),this.chart=null)},methods:{setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.dates,i=t.counts;this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:10,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:e,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",axisTick:{show:!1}}],series:[{name:"注册用户总数",type:"bar",stack:"vistors",barWidth:"60%",data:i,animationDuration:o}]})},initChart:function(){this.chart=r.a.init(this.$el,"macarons"),this.setOptions(this.barChartData)}}},d=c,l=i("623f"),u=Object(l["a"])(d,a,s,!1,null,null,null);e["default"]=u.exports}}]);