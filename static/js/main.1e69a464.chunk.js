(this["webpackJsonpreact-colorbox-exercise"]=this["webpackJsonpreact-colorbox-exercise"]||[]).push([[0],{13:function(e,o,r){},14:function(e,o,r){"use strict";r.r(o);var t=r(0),n=r.n(t),a=r(2),l=r.n(a),c=(r(13),r(5)),s=r(3),u=r(4),i=r(7),p=r(6),m=function(e){Object(i.a)(r,e);var o=Object(p.a)(r);function r(){var e;Object(s.a)(this,r);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=o.call.apply(o,[this].concat(n))).state={nColors:e.props.colors.map((function(o){return Math.floor(Math.random()*e.props.colors.length)}))},e.changeColor=function(o){var r=Math.floor(Math.random()*e.props.colors.length),t=Object(c.a)(e.state.nColors);t[o]===r?(r+=1,t.splice(o,1,r),e.setState({nColors:t})):t[o]===e.props.colors.length?(r-=2,t.splice(o,1,r),e.setState({nColors:t})):(t.splice(o,1,r),e.setState({nColors:t}))},e}return Object(u.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"color-boxes"},n.a.createElement("ul",null,this.state.nColors.map((function(o,r){return n.a.createElement("li",{onClick:function(){return e.changeColor(r)},key:"".concat(r),className:"boxes",style:{backgroundColor:e.props.colors[o]}},e.props.colors[o])}))))}}]),r}(t.Component);m.defaultProps={colors:["aqua","black","blue","fuchsia","green","maroon","purple","red","orange","gray","lime","olive","yellow","teal","navy","plum","peru","indigo"]};var h=m;var f=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"React ColorBoxes Exercise"),n.a.createElement(h,null))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root"))},8:function(e,o,r){e.exports=r(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.1e69a464.chunk.js.map