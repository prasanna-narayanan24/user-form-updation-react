(this["webpackJsonpuser-profile"]=this["webpackJsonpuser-profile"]||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/boy-2.99e8fdf6.png"},101:function(e,t,a){e.exports=a.p+"static/media/boy.d7fd9e0b.png"},102:function(e,t,a){e.exports=a.p+"static/media/girl.543cca41.png"},103:function(e,t,a){e.exports=a.p+"static/media/girl-1.0a7ca2a2.png"},104:function(e,t,a){e.exports=a.p+"static/media/girl-2.e1b10c9b.png"},105:function(e,t,a){e.exports=a.p+"static/media/man.6f2bab19.png"},107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),o=a(42),i=a(5),s=a(6),m=a(8),u=a(7),p=a(9),d=(a(51),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.accountInformation;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Account Information"),r.a.createElement("div",{className:"d-block"},r.a.createElement("span",null,e.dob)),r.a.createElement("div",{className:"d-block mt-2"},r.a.createElement("strong",null,"Bio")),r.a.createElement("hr",null),r.a.createElement("p",null,e.bio))}}]),t}(r.a.Component)),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).renderSettings=function(e){return e.map((function(e){return r.a.createElement("div",{key:e.name,className:"d-flex justify-content-between"},r.a.createElement("span",null,e.name),r.a.createElement("span",{className:"text-dark glyphicon ".concat(e.value?"glyphicon-star":"glyphicon-star-empty")}))}))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.settings;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Settings"),this.renderSettings(e))}}]),t}(r.a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Contact us"),r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("div",{className:"d-block"},r.a.createElement("strong",{className:"mr-3"},"Email:"),this.props.info.email),r.a.createElement("div",{className:"d-block"},r.a.createElement("strong",{className:"mr-3"},"Phone:"),this.props.info.phone),r.a.createElement("hr",null),r.a.createElement("a",{href:"https://"+this.props.info.link},"View page")))}}]),t}(r.a.Component),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).getIcon=function(e){var t="glyphicon-heart text-danger";return(e=e.toLowerCase()).includes("follow")?t="glyphicon-tasks text-primary":e.includes("react")&&(t="glyphicon-fire text-warning"),e.includes("comment")&&(t="glyphicon-comment text-primary"),t},a.renderAcitivity=function(e){return e.map((function(e){return r.a.createElement("li",{key:e.name,className:"list-group-item d-flex justify-content-between align-items-center"},r.a.createElement("div",{className:"d-inline"},r.a.createElement("span",{className:"glyphicon ".concat(a.getIcon(e.name)," mr-3")}),e.name),r.a.createElement("span",{className:"badge badge-primary badge-pill p-2"},e.timestamp))}))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Recent Activities"),r.a.createElement("ul",{className:"list-group list-group-flush"},this.renderAcitivity(this.props.activities)))}}]),t}(r.a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.userProfile,t=e.accountInformation;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container p-5"},r.a.createElement("div",{className:"row profile-info-contaienr"},r.a.createElement("div",{className:"col-sm-6 col-md-6 user-details"},r.a.createElement("div",{className:"user-image"},r.a.createElement("img",{src:e.logo,alt:"",className:"img-circle user-image-container"})),r.a.createElement("div",{className:"user-info-block"},r.a.createElement("div",{className:"user-heading"},r.a.createElement("h3",null,e.name),r.a.createElement("span",{className:"help-block"},e.location)),r.a.createElement("ul",{className:"navigation"},r.a.createElement("li",{className:"active"},r.a.createElement("a",{"data-toggle":"tab",href:"#information"},r.a.createElement("span",{className:"glyphicon glyphicon-user"}))),r.a.createElement("li",null,r.a.createElement("a",{"data-toggle":"tab",href:"#settings"},r.a.createElement("span",{className:"glyphicon glyphicon-cog"}))),r.a.createElement("li",null,r.a.createElement("a",{"data-toggle":"tab",href:"#email"},r.a.createElement("span",{className:"glyphicon glyphicon-envelope"}))),r.a.createElement("li",null,r.a.createElement("a",{"data-toggle":"tab",href:"#events"},r.a.createElement("span",{className:"glyphicon glyphicon-calendar"})))),r.a.createElement("div",{className:"user-body border"},r.a.createElement("div",{className:"tab-content"},r.a.createElement("div",{id:"information",className:"tab-pane active"},r.a.createElement(d,{accountInformation:t})),r.a.createElement("div",{id:"settings",className:"tab-pane"},r.a.createElement(h,{settings:e.settings})),r.a.createElement("div",{id:"email",className:"tab-pane"},r.a.createElement(f,{info:e.contacts})),r.a.createElement("div",{id:"events",className:"tab-pane"},r.a.createElement(g,{activities:e.activities})))))))))}}]),t}(r.a.Component),b=a(43),v=a.n(b),N=(a(98),a(99)),y=a(100),k=[a(101),N,y,a(102),a(103),a(104),a(105)],O=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.currentLogo;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{id:"mdb-lightbox-ui"}),r.a.createElement("div",{className:"mdb-lightbox no-margin"},k.map((function(a){return r.a.createElement("figure",{onClick:function(){return e.props.onImageSelect(a)},key:a,className:"cursor-pointer col-md-3 image-gallery-item"},t===a&&r.a.createElement("span",{className:"border border-success p-2 selected-image-badge text-success glyphicon glyphicon-ok"}),r.a.createElement("img",{src:a,alt:"",className:"img-fluid"}))}))))))}}]),t}(r.a.Component),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t="".concat(a.months[e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear());a.props.actions.handleDate(t)},a.handleSettings=function(e){var t=e.target.id.split("-")[2];a.props.actions.toggleSettings(t)},a.months=["January","February","March","April","May","June","July","August","September","October","November","December"],a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.userInfo;return r.a.createElement("div",{className:"container p-5"},r.a.createElement(O,{onImageSelect:this.props.actions.handleLogo,currentLogo:e.logo}),r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{onChange:this.props.actions.handleName,value:e.name,type:"text",placeholder:"Your name",className:"form-control form-control-lg"}))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{onChange:this.props.actions.handleEmail,value:e.accountInformation.email,type:"text",placeholder:"Email address",className:"form-control form-control-lg"})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",placeholder:"password",className:"form-control form-control-lg"}))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Confirm password"),r.a.createElement("input",{type:"password",placeholder:"password confirmation",className:"form-control form-control-lg"})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Location"),r.a.createElement("input",{onChange:this.props.actions.handleLocation,value:e.location,type:"text",placeholder:"Location",className:"form-control form-control-lg"}))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date of birth"),r.a.createElement("br",null),r.a.createElement(v.a,{onChange:this.handleChange,placeholderText:"Date of birth",className:"form-control form-control-lg",selected:new Date(e.accountInformation.dob),dateFormat:"MMM dd, yyyy"})))),r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Phone number"),r.a.createElement("input",{onChange:this.props.actions.handlePhone,value:e.contacts.phone,type:"text",placeholder:"Phone number",className:"form-control form-control-lg"}))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Page link"),r.a.createElement("input",{onChange:this.props.actions.handleLink,value:e.contacts.link,type:"text",placeholder:"Link to your page / profile",className:"form-control form-control-lg"})))),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{onChange:this.handleSettings,className:"form-check-input",id:"settings-index-".concat(0),type:"checkbox",value:e.settings[0].value,checked:e.settings[0].value}),r.a.createElement("label",{className:"form-check-label",htmlFor:"settings-index-".concat(0)},"Show Notifications")),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{onChange:this.handleSettings,className:"form-check-input",id:"settings-index-".concat(1),type:"checkbox",value:e.settings[1].value,checked:e.settings[1].value}),r.a.createElement("label",{className:"form-check-label",htmlFor:"settings-index-".concat(1)},"Dark theme")),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{onChange:this.handleSettings,className:"form-check-input",id:"settings-index-".concat(2),type:"checkbox",value:e.settings[2].value,checked:e.settings[2].value}),r.a.createElement("label",{className:"form-check-label",htmlFor:"settings-index-".concat(2)},"Ad-Blocks")),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{onChange:this.handleSettings,id:"settings-index-".concat(3),className:"form-check-input",type:"checkbox",value:e.settings[3].value,checked:e.settings[3].value}),r.a.createElement("label",{className:"form-check-label",htmlFor:"settings-index-".concat(3)},"Email updates")),r.a.createElement("div",{className:"form-group mt-2"},r.a.createElement("label",null,"Bio"),r.a.createElement("textarea",{className:"form-control form-control-lg",onChange:this.props.actions.handleBio,value:e.accountInformation.bio,rows:"7",style:{resize:"none"}}))))}}]),t}(r.a.Component),w={name:"Karthikeyini SK",logo:k[0],location:"Chennai, India",accountInformation:{email:"karthikeyini@gmail.com",password:"*********",dob:"November 14, 1997",bio:"Biodata is an abbreviation for the term biographical data. ... The biodata format includes relevant factual information about an individual, such as: personal information (e.g., date of birth, gender, marital status, religion, height, complexion, father's name, etc.) educational background. occupational history."},settings:[{name:"Show Notification",value:!0},{name:"Dark theme",value:!1},{name:"Ad-Blocks",value:!1},{name:"Send email updates",value:!0}],contacts:{phone:"+91 9983092199",email:"karthikeyini@gmail.com",link:"www.google.com"},activities:[{name:"Started following Mark Zuckerberg",timestamp:"1d ago"},{name:"Liked StarSport's page",timestamp:"1d ago"},{name:"Reacted to Remote's profile pic",timestamp:"1d ago"},{name:"Liked Gold's comment",timestamp:"1d ago"}]};a(106);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleEmail=function(e){var t=e.target.value,n=a.state.userProfile,r=n.accountInformation,l=n.contacts;r.email=t,l.email=t,a.setState({userProfile:x({},a.state.userProfile,{accountInformation:r,contacts:l})})},a.toggleSettings=function(e){var t=a.state.userProfile.settings;t[e].value=!t[e].value,a.setState({userProfile:x({},a.state.userProfile,{settings:t})})},a.state={userProfile:w},a.actions={handleName:function(e){return a.setState({userProfile:x({},a.state.userProfile,{name:e.target.value})})},handleEmail:a.handleEmail,handleLocation:function(e){return a.setState({userProfile:x({},a.state.userProfile,{location:e.target.value})})},handleDate:function(e){return a.setState({userProfile:x({},a.state.userProfile,{accountInformation:x({},a.state.userProfile.accountInformation,{dob:e})})})},handlePhone:function(e){return a.setState({userProfile:x({},a.state.userProfile,{contacts:x({},a.state.userProfile.contacts,{phone:e.target.value})})})},handleLink:function(e){return a.setState({userProfile:x({},a.state.userProfile,{contacts:x({},a.state.userProfile.contacts,{link:e.target.value})})})},handleBio:function(e){return a.setState({userProfile:x({},a.state.userProfile,{accountInformation:x({},a.state.userProfile.accountInformation,{bio:e.target.value})})})},handleLogo:function(e){return a.setState({userProfile:x({},a.state.userProfile,{logo:e})})},toggleSettings:a.toggleSettings},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-6 col-sm-3 form-wrapper border-right"},r.a.createElement(j,{userInfo:this.state.userProfile,actions:this.actions})),r.a.createElement("div",{className:"col-12 col-md-6 col-sm-9"},r.a.createElement(E,{userProfile:this.state.userProfile}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},46:function(e,t,a){e.exports=a(107)},51:function(e,t,a){},99:function(e,t,a){e.exports=a.p+"static/media/boy-1.44a5c053.png"}},[[46,1,2]]]);
//# sourceMappingURL=main.ec30fe33.chunk.js.map