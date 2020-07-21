(this.webpackJsonpphotos=this.webpackJsonpphotos||[]).push([[0],{11:function(e,t,a){e.exports={Container:"EditForm_Container__2wdI1",Input:"EditForm_Input__3ZrnZ"}},12:function(e,t,a){e.exports={Container:"AddForm_Container__1XM0w",Input:"AddForm_Input__1wovI"}},19:function(e,t,a){e.exports={Card:"Card_Card__3m6NL",Info:"Card_Info__-WdOE"}},20:function(e,t,a){e.exports={Button:"Button_Button__2WEAi",Edit:"Button_Edit__3mU0q",Delete:"Button_Delete__z1FT8",GoBack:"Button_GoBack__QcgVF"}},21:function(e,t,a){e.exports={wholeCard:"MoreDetails_wholeCard__KsyN_",container:"MoreDetails_container__1ADPV"}},22:function(e,t,a){e.exports={Container:"ConfirmationForm_Container__38RKH",Red:"ConfirmationForm_Red__yu645"}},36:function(e,t,a){e.exports={TopNav:"NavBar_TopNav__Z4fY9",active:"NavBar_active__JZSju"}},37:function(e,t,a){e.exports={Modal:"Modal_Modal__iJFMs"}},42:function(e,t,a){e.exports=a(72)},48:function(e,t,a){},49:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=(a(44),a(35)),l=a.n(o),i=(a(48),a(17)),c=a(6),h=a(8),s=a(13),u=a(14),d=a(16),m=a(15),p=(a(49),a(19)),f=a.n(p),g=function(e){return n.a.createElement("div",{onClick:e.selectPhoto,className:f.a.Card},n.a.createElement("img",{src:e.thumbnailURL,className:"gallery-image",alt:""}),n.a.createElement("div",{className:f.a.Info},n.a.createElement("p",null,e.title," ")))},E=a(36),v=a.n(E),b=function(e){return n.a.createElement("div",{className:v.a.TopNav},n.a.createElement("a",{href:"",onClick:function(t){return e.changeUrl(t,"home")},className:"active"},"Home"),n.a.createElement("a",{href:"",onClick:function(t){return e.changeUrl(t,"addphoto")}},"Add Photo"))},C=a(20),_=a.n(C),j=function(e){return n.a.createElement("button",{className:[_.a.Button,_.a[e.btnType]].join(" "),onClick:function(t){return e.clicked(t)}},e.children)},U=a(21),y=a.n(U),O=function(e){return n.a.createElement("div",{className:y.a.wholeCard},n.a.createElement("img",{src:e.photoObj.url}),n.a.createElement("div",{className:y.a.container},n.a.createElement("p",null,"Published by: ",n.a.createElement("strong",null,e.photoObj.author)),n.a.createElement("h3",null,e.photoObj.title),n.a.createElement("p",null,e.photoObj.description," "),n.a.createElement(j,{clicked:function(t){return e.changeUrl(t,"home")},btnType:"GoBack"},"Back"),n.a.createElement(j,{clicked:function(t){return e.editPhoto(t)},btnType:"Edit"},"Edit"),n.a.createElement(j,{clicked:function(t){return e.openModal(t)},btnType:"Delete"},"Delete")))},N=a(37),P=a.n(N),w=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:P.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children)}}]),a}(n.a.Component),k=a(22),I=a.n(k),B=function(e){return n.a.createElement("div",{className:I.a.Container},n.a.createElement("h1",null,"Delete photo"),n.a.createElement("p",{className:I.a.Red},"Are you sure you want to delete the photo?"),n.a.createElement("div",null,n.a.createElement(j,{clicked:e.toggleModal,btnType:"GoBack"},"Cancel"),n.a.createElement(j,{clicked:e.deletePhoto,btnType:"Delete"},"Delete")))},M=a(11),x=a.n(M),F=a(73),D=a(74),S=a(75),A=function(e){var t;return n.a.createElement("div",{className:x.a.Container},n.a.createElement(F.a,null,n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"fname"},"Author"),n.a.createElement(D.a,{className:x.a.Input,type:"text",name:"author",placeholder:e.photoObj.author,onChange:e.handleChange,onBlur:e.handleError("author"),invalid:""!==e.errors.author,value:e.form.author}),n.a.createElement(S.a,null,e.errors.author)),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"title"},"Image title"),n.a.createElement(D.a,{className:x.a.Input,type:"text",invalid:""!==e.errors.title,name:"title",placeholder:e.photoObj.title,onBlur:e.handleError("title"),onChange:e.handleChange,value:e.form.title}),n.a.createElement(S.a,null,e.errors.title)),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"photoUrl"},"Image url"),n.a.createElement(D.a,{invalid:""!==e.errors.imageUrl,className:x.a.Input,type:"text",name:"imageUrl",placeholder:e.photoObj.url,onBlur:e.handleError("imageUrl"),onChange:e.handleChange,value:e.form.imageUrl}),n.a.createElement(S.a,null,e.errors.imageUrl)),n.a.createElement("div",null,n.a.createElement(D.a,(t={type:"textarea",name:"text",invalid:""!==e.errors.description,onChange:e.handleChange,onBlur:e.handleError("description"),placeholder:e.photoObj.description},Object(c.a)(t,"name","description"),Object(c.a)(t,"className",x.a.Input),t)),n.a.createElement(S.a,null,e.errors.description)),n.a.createElement(D.a,{disabled:e.btn,type:"submit",value:"Submit",onClick:e.saveEditChanges})))},T=a(12),R=a.n(T),W=function(e){var t,a=!1;for(var r in e.errors)""!==e.errors[r]&&(a=!0);return n.a.createElement("div",{className:R.a.Container},n.a.createElement(F.a,null,n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"fname"},"Author"),n.a.createElement(D.a,{className:R.a.Input,type:"text",name:"author",placeholder:"Author",onChange:e.handleChange,onBlur:e.handleError("author"),invalid:""!==e.errors.author,value:e.form.author}),n.a.createElement(S.a,null,e.errors.author)),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"title"},"Image title"),n.a.createElement(D.a,{className:R.a.Input,type:"text",invalid:""!==e.errors.title,name:"title",placeholder:"Title",onBlur:e.handleError("title"),onChange:e.handleChange,value:e.form.title}),n.a.createElement(S.a,null,e.errors.title)),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"photoUrl"},"Image url"),n.a.createElement(D.a,{invalid:""!==e.errors.imageUrl,className:R.a.Input,type:"text",name:"imageUrl",placeholder:"image url",onBlur:e.handleError("imageUrl"),onChange:e.handleChange,value:e.form.imageUrl}),n.a.createElement(S.a,null,e.errors.imageUrl)),n.a.createElement("div",null,n.a.createElement(D.a,(t={type:"textarea",name:"text",invalid:""!==e.errors.description,onChange:e.handleChange,onBlur:e.handleError("description"),placeholder:"description"},Object(c.a)(t,"name","description"),Object(c.a)(t,"className",R.a.Input),t)),n.a.createElement(S.a,null,e.errors.description)),n.a.createElement(D.a,{disabled:a,type:"submit",value:"Submit",onClick:e.addNewPhoto})))},G=a(38),J=a.n(G),L=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={photos:[],currentPhoto:"",route:"home",showModal:!1,form:{author:"",title:"",imageUrl:"",description:""},touched:{author:!1,title:!1,imageUrl:!1,description:!1}},e.handleError=function(t){return function(a){e.setState({touched:Object(h.a)(Object(h.a)({},e.state.touched),{},Object(c.a)({},t,!0))})}},e.changeUrl=function(t,a){t.preventDefault(),e.setState({route:a})},e.selectPhoto=function(t){var a=e.state.photos.find((function(e){return e.id===t}));e.setState({currentPhoto:a,route:"details"})},e.toggleModal=function(){var t=e.state.showModal;e.setState({showModal:!t})},e.deletePhoto=function(){var t=Object(h.a)({},e.state.currentPhoto),a=Object(i.a)(e.state.photos),r=a.findIndex((function(e){return e.id===t.id}));a.splice(r,1),e.setState({photos:a,currentPhoto:"",route:"home",showModal:!1})},e.editPhoto=function(){e.setState({route:"editPhoto"})},e.saveEditChanges=function(t){var a=Object(h.a)({},e.state.currentPhoto),r=Object(i.a)(e.state.photos),n=r.findIndex((function(e){return e.id===a.id}));r[n].author=e.state.form.author,r[n].title=e.state.form.title,r[n].url=e.state.form.imageUrl,r[n].description=e.state.form.description,r[n].thumbnailUrl=e.state.form.imageUrl,console.log(r),e.setState({photos:r,currentPhoto:"",route:"home",form:{author:"",title:"",imageUrl:"",description:""},touched:{author:!1,title:!1,imageUrl:!1,description:!1}})},e.handleChange=function(t){var a=t.target,r=a.name,n=a.value;e.setState((function(e){return{form:Object(h.a)(Object(h.a)({},e.form),{},Object(c.a)({},r,n))}}))},e.ID=function(){return"_"+Math.random().toString(36).substr(2,9)},e.addNewPhoto=function(t){var a=e.ID();t.preventDefault();var r=Object(i.a)(e.state.photos),n={key:a,id:a,author:e.state.form.author,title:e.state.form.title,url:e.state.form.imageUrl,description:e.state.form.description,thumbnailUrl:e.state.form.imageUrl};r.unshift(n),e.setState({photos:r,currentPhoto:"",route:"home",form:{author:"",title:"",imageUrl:"",description:""},touched:{author:!1,title:!1,imageUrl:!1,description:!1}})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;J.a.get("https://jsonplaceholder.typicode.com/photos/").then((function(e){return e.data})).then((function(e){return e.splice(0,100)})).then((function(e){return e.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{author:"Albert",description:"This is a stock photo from the jsonplaceholder api"})}))})).then((function(t){return e.setState({photos:t})}))}},{key:"validateForm",value:function(e,t,a,r){var n={author:"",title:"",imageUrl:"",description:""},o=!1;return(a.endsWith("jpg")||a.endsWith("png")||a.endsWith("jpeg"))&&(o=!0),this.state.touched.author&&e.length<3?n.author="Author should be more than 3 characters":this.state.touched.author&&e.length>16&&(n.author="First name should be less than 16 characters"),this.state.touched.title&&t.length<3?n.title="title should be more than 3 characters":this.state.touched.author&&e.length>16&&(n.title="title should be less than 16 characters"),this.state.touched.imageUrl&&!o&&(n.imageUrl="Image should finish with jpg,png,jpeg"),this.state.touched.description&&r.length<3?n.description="title should be more than 8 characters":this.state.touched.description&&r.length>50&&(n.description="description should be less than 50 characters"),n}},{key:"render",value:function(){var e=this,t=this.validateForm(this.state.form.author,this.state.form.title,this.state.form.imageUrl,this.state.form.description),a=!1;for(var r in t)""!==t[r]&&(a=!0);var o=this.state.form,l=!1;for(var i in o)""===o[i]&&(l=!0);var c=!1;(a||l)&&(c=!0);var h="";return"home"===this.state.route?h=this.state.photos.map((function(t){return n.a.createElement(g,{selectPhoto:function(a){return e.selectPhoto(t.id)},key:t.id,id:t.id,title:t.title,author:t.author,description:t.description,thumbnailURL:t.thumbnailUrl,imgURL:t.url})})):"details"===this.state.route?h=n.a.createElement(O,{photoObj:this.state.currentPhoto,changeUrl:this.changeUrl,openModal:this.toggleModal,editPhoto:this.editPhoto}):"addphoto"===this.state.route?h=n.a.createElement(W,{btn:c,errors:t,touched:this.state.touched,handleError:this.handleError,addNewPhoto:this.addNewPhoto,form:this.state.form,handleChange:this.handleChange}):"editPhoto"===this.state.route&&(h=n.a.createElement(A,{btn:c,errors:t,touched:this.state.touched,handleError:this.handleError,photoObj:this.state.currentPhoto,saveEditChanges:this.saveEditChanges,form:this.state.form,handleChange:this.handleChange})),n.a.createElement("div",null,n.a.createElement(b,{changeUrl:this.changeUrl}),n.a.createElement("div",{className:"App"},h),n.a.createElement(w,{show:this.state.showModal},n.a.createElement(B,{toggleModal:this.toggleModal,deletePhoto:this.deletePhoto})))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=a(40);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Z.a,null,n.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.ee8208d2.chunk.js.map