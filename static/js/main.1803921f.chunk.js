(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{28:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},85:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(41),r=c.n(s),i=c(4),o=c(6),j=c(3),l=c.n(j),u=c(5),d=c(7),b=c.n(d),h=(c(39),c(1));function p(e){var t=e.setAdmin,c=e.setToken,n=e.setUserId,s=Object(a.useState)(""),r=Object(i.a)(s,2),j=r[0],d=r[1],p=Object(a.useState)(""),O=Object(i.a)(p,2),x=O[0],m=O[1],v=Object(u.e)(),f=function(){var e=Object(o.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat("https://psychiatric-clinics.herokuapp.com","/login"),{Email:j,Pass:x});case 3:a=e.sent,console.log(a.data),c(a.data.token),t(a.data.payload.admin),n(a.data.payload.userId),console.log(a.data.payload.userId,"it is useeer"),v.push("/video"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"signUp",children:Object(h.jsxs)("div",{className:"signBox",children:[Object(h.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BaxevbHsera-I9b57I40phEGm3caprMeLA&usqp=CAU"}),Object(h.jsx)("div",{children:Object(h.jsx)("input",{className:"input2",onChange:function(e){!function(e){d(e.target.value)}(e)},placeholder:"enter your Email"})}),Object(h.jsx)("div",{children:Object(h.jsx)("input",{className:"input2",onChange:function(e){!function(e){m(e.target.value)}(e)},type:"Password",placeholder:"enter your Password"})}),Object(h.jsx)("div",{children:Object(h.jsxs)("button",{id:"button2",onClick:function(){f()},children:[Object(h.jsx)("h2",{children:"Login"})," "]})}),Object(h.jsx)("h3",{className:"su",children:"\u0644\u0627 \u0627\u0645\u062a\u0644\u0643 \u062d\u0633\u0627\u0628 \u061f"}),Object(h.jsx)("a",{className:"suu",href:"/signUp",children:"  \u0623\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628 \u062c\u062f\u064a\u062f"})]})})}function O(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),j=r[0],d=r[1],p=Object(a.useState)(""),O=Object(i.a)(p,2),x=O[0],m=O[1],v=Object(u.e)(),f=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat("https://psychiatric-clinics.herokuapp.com","/signUp"),{UserName:c,Email:j,Pass:x});case 3:200===e.sent.status&&v.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("err");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"signUp",children:Object(h.jsxs)("div",{className:"signBox",children:[Object(h.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BaxevbHsera-I9b57I40phEGm3caprMeLA&usqp=CAU"}),Object(h.jsx)("div",{children:Object(h.jsx)("input",{className:"input2",onChange:function(e){!function(e){n(e.target.value)}(e)},placeholder:"enter your name"})}),Object(h.jsx)("div",{children:Object(h.jsx)("input",{className:"input2",onChange:function(e){!function(e){d(e.target.value)}(e)},placeholder:"enter your Email"})}),Object(h.jsx)("div",{children:Object(h.jsx)("input",{className:"input2",onChange:function(e){!function(e){m(e.target.value)}(e)},type:"password",placeholder:"enter your password"})}),Object(h.jsx)("div",{children:Object(h.jsxs)("button",{id:"button1",onClick:function(){f()},children:[" ",Object(h.jsx)("h2",{children:"sign up"})," "]})}),Object(h.jsx)("h3",{className:"su",children:" \u0647\u0644 \u062a\u0645\u062a\u0644\u0643 \u062d\u0633\u0627\u0628 \u061f"}),Object(h.jsx)("a",{className:"suu",href:"/login",children:" \u062a\u0633\u062c\u064a\u0644 \u062f\u062e\u0648\u0644 "})]})})}var x=c(14),m=(c(28),c(30)),v=c(44);function f(e){var t=e.token,c=e.setToken,a=(Object(u.e)(),document.getElementById("navLink"));function n(){a.style.right="-200px"}return Object(h.jsxs)("div",{className:"navB",children:[Object(h.jsx)("img",{id:"lo",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBUlthFW7iUXmASKBcvdni_K8mZ6CDYM4Ag&usqp=CAU"}),Object(h.jsx)("h3",{children:"\u0628\u0640\u0640\u0627\u0644\u0627\u0646\u0640\u0640\u0640\u0633"}),Object(h.jsx)("div",{className:"navL",id:"navLink",children:t?Object(h.jsxs)("div",{children:[Object(h.jsx)(m.a,{onClick:function(){n()},className:"btn"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(x.b,{className:"link",to:"/login",onClick:function(){c("")},children:"\u062a\u0633\u062c\u064a\u0644 \u062e\u0631\u0648\u062c "})}),Object(h.jsx)("li",{children:Object(h.jsx)(x.b,{className:"link",to:"/chat",children:"\u0627\u0644\u0631\u0633\u0627\u0626\u0644"})}),Object(h.jsx)("li",{children:Object(h.jsx)(x.b,{className:"link",to:"/favorite",children:"\u0627\u0644\u062a\u0641\u0636\u064a\u0644\u0627\u062a"})}),Object(h.jsx)("li",{children:Object(h.jsx)(x.b,{className:"link",to:"/post",children:"\u0637\u0645\u0646\u0627 \u0639\u0646\u0643"})}),Object(h.jsx)("li",{children:Object(h.jsx)(x.b,{className:"link",to:"/Consultants",children:"\u0627\u0644\u0623\u0633\u062a\u0634\u0627\u0631\u064a\u0648\u0646"})}),Object(h.jsx)("li",{children:Object(h.jsx)(x.b,{className:"link",to:"/Video",children:"\u0641\u064a\u062f\u064a\u0648 \u062a\u062d\u0641\u064a\u0632\u064a"})})]})]}):Object(h.jsxs)("div",{children:[Object(h.jsx)(m.a,{onClick:function(){n()},className:"btn"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/CallUs",children:" \u0627\u062a\u0635\u0644 \u0628\u0646\u0627 "})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/AboutUs",children:"\u0639\u0646\u0646\u0627 "})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})})]}),Object(h.jsxs)("div",{className:"helloBox",children:[Object(h.jsx)("h1",{children:"\u0645\u0640\u0631\u062d\u0628\u0640\u0640\u0627 \u0628\u0643\u0640\u0640\u0645 \u0641\u0640\u064a \u0628\u0640\u0640\u0627\u0644\u0627\u0646\u0640\u0640\u0640\u0633"}),Object(h.jsx)("a",{href:"/login",children:"\u062a\u0633\u062c\u064a\u0644 \u062f\u062e\u0648\u0644"}),Object(h.jsx)("a",{href:"/signUp",children:" \u0623\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628"})]})]})}),Object(h.jsx)(v.a,{onClick:function(){a.style.right="0"},className:"btnM"})]})}var g=c(11),N=c(17),k=c(21);c(40);function C(e){var t=e.token,c=e.admin,n=Object(a.useState)([]),s=Object(i.a)(n,2),r=s[0],j=s[1],u=Object(a.useState)(""),d=Object(i.a)(u,2),p=d[0],O=d[1],x=Object(a.useState)(""),m=Object(i.a)(x,2),v=m[0],f=m[1],C=Object(a.useState)(!1),w=Object(i.a)(C,2),y=w[0],S=w[1];Object(a.useEffect)(Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat("https://psychiatric-clinics.herokuapp.com","/Video"),{headers:{authorization:"Bearer "+t}});case 2:c=e.sent,j(c.data);case 4:case"end":return e.stop()}}),e)}))),[]);var A=function(){var e=Object(o.a)(l.a.mark((function e(){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("okkkkk"),e.prev=1,e.next=4,b.a.post("".concat("https://psychiatric-clinics.herokuapp.com","/Video"),{description:p,video:v},{headers:{authorization:"Bearer "+t}});case 4:c=e.sent,console.log(c.data),(a=Object(g.a)(r)).push(c.data),j(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("err");case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(o.a)(l.a.mark((function e(c){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat("https://psychiatric-clinics.herokuapp.com","/favor/").concat(c),{},{headers:{authorization:"Bearer "+t}});case 3:a=e.sent,console.log(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:1==c?Object(h.jsxs)("div",{className:"Video",children:[Object(h.jsx)("img",{src:"https://i.ibb.co/qFNdN9m/Whats-App-Image-2022-01-10-at-12-15-08-AM.jpg "}),y?Object(h.jsxs)("div",{className:"addingV",children:[Object(h.jsx)("input",{className:"inp1",onChange:function(e){!function(e){O(e.target.value)}(e)},placeholder:"\u0627\u0644\u0648\u0635\u0641"})," ",Object(h.jsx)("input",{className:"inp1",onChange:function(e){!function(e){f(e.target.value)}(e)},placeholder:"\u0631\u0627\u0628\u0637 \u0627\u0644\u0641\u064a\u062f\u064a\u0648"}),Object(h.jsx)("button",{className:"but1",onClick:function(){A()},children:" \u0627\u0636\u0627\u0641\u0629 \u0641\u064a\u062f\u064a\u0648"})]}):Object(h.jsx)("div",{className:"addingV",children:Object(h.jsx)(N.a,{className:"MdAddCircle",onClick:function(){S(!0)}})}),Object(h.jsx)("div",{className:"Videoo",children:r.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"Vidd",children:[Object(h.jsxs)("p",{id:"pp",children:["  ",e.description]}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{children:Object(h.jsx)("iframe",{id:"n",src:"https://www.youtube.com/embed/".concat(e.video)})}),Object(h.jsx)(k.a,{className:"HEART",onClick:function(){B(e._id)}})]})},e._id)}))})," "]}):Object(h.jsxs)("div",{className:"Video",children:[Object(h.jsx)("img",{src:"https://i.ibb.co/qFNdN9m/Whats-App-Image-2022-01-10-at-12-15-08-AM.jpg "}),Object(h.jsx)("div",{className:"Videoo",children:r.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"Vidd",children:[Object(h.jsxs)("p",{id:"pp",children:["  ",e.description]}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{children:Object(h.jsx)("iframe",{id:"n",src:"https://www.youtube.com/embed/".concat(e.video)})}),Object(h.jsx)(k.a,{className:"HEART",onClick:function(){B(e._id)}})]})},e._id)}))})," "]})})}var w=c(18),y=c(15);c(77);function S(e){var t=e.token,c=e.userId,n=Object(a.useState)([]),s=Object(i.a)(n,2),r=s[0],j=s[1],u=Object(a.useState)(""),d=Object(i.a)(u,2),p=d[0],O=d[1],x=Object(a.useState)(""),m=Object(i.a)(x,2),v=m[0],f=m[1],k=Object(a.useState)(!1),C=Object(i.a)(k,2),S=C[0],A=C[1],B=Object(a.useState)(!1),M=Object(i.a)(B,2),I=M[0],_=M[1];Object(a.useEffect)(Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat("https://psychiatric-clinics.herokuapp.com","/post"),{headers:{authorization:"Bearer "+t}});case 2:c=e.sent,j(c.data);case 4:case"end":return e.stop()}}),e)}))),[]);var U=function(){var e=Object(o.a)(l.a.mark((function e(){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat("https://psychiatric-clinics.herokuapp.com","/post"),{post:p},{headers:{authorization:"Bearer "+t}});case 3:c=e.sent,(a=Object(g.a)(r)).push(c.data),j(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("err");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(l.a.mark((function e(c,a){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("".concat("https://psychiatric-clinics.herokuapp.com","/post/").concat(c),{headers:{authorization:"Bearer "+t}});case 3:n=e.sent,console.log(n.data),null!==n.data&&((s=Object(g.a)(r)).splice(a,1),j(s)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("err");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,c){return e.apply(this,arguments)}}(),z=function(){var e=Object(o.a)(l.a.mark((function e(c){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.put("".concat("https://psychiatric-clinics.herokuapp.com","/post/").concat(c),{post:v},{headers:{authorization:"Bearer "+t}});case 3:a=e.sent,j(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("err");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"bigCont",children:[Object(h.jsx)("div",{className:"Cont",children:Object(h.jsx)("img",{className:"wwimg",src:"https://i.ibb.co/H2nhcs4/Whats-App-Image-2022-01-09-at-11-49-09-PM.jpg"})}),Object(h.jsxs)("div",{className:"minCont",children:[I?Object(h.jsxs)("div",{className:"adding",children:[Object(h.jsx)("input",{className:"inp",placeholder:"... \u0623\u0643\u062a\u0628 \u0647\u0646\u0627",onChange:function(e){!function(e){O(e.target.value)}(e)}})," ",Object(h.jsxs)("button",{className:"but",onClick:function(){U()},children:[" ","\u0627\u0631\u0633\u0644"," "]})]}):Object(h.jsx)("div",{className:"adding",children:Object(h.jsx)(N.a,{className:"MdAddCircle",onClick:function(){_(!0)}})}),Object(h.jsx)("div",{className:"bigDiv",children:r.map((function(e,t){return Object(h.jsxs)("div",{className:"postBox",children:[" ",Object(h.jsx)("p",{children:e.post}),e.user==c?Object(h.jsxs)("div",{className:"inpDiv",children:[Object(h.jsx)(w.a,{className:"delbtn",onClick:function(){E(e._id,t)}}),S?Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{onChange:function(e){!function(e){f(e.target.value)}(e)}}),Object(h.jsx)(y.a,{onClick:function(){z(e._id)}})]}):Object(h.jsx)(y.a,{onClick:function(){e._id.i,A(!0)}})]}):""]},e._id)}))})]})]})}c(78);function A(e){var t=e.token,c=e.admin,n=Object(a.useState)([]),s=Object(i.a)(n,2),r=s[0],j=s[1],u=Object(a.useState)(""),d=Object(i.a)(u,2),p=d[0],O=d[1],x=Object(a.useState)(""),m=Object(i.a)(x,2),v=m[0],f=m[1],k=Object(a.useState)(""),C=Object(i.a)(k,2),y=C[0],S=C[1],A=Object(a.useState)(""),B=Object(i.a)(A,2),M=B[0],I=B[1],_=Object(a.useState)(!1),U=Object(i.a)(_,2),E=U[0],z=U[1];Object(a.useEffect)(Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat("https://psychiatric-clinics.herokuapp.com","/consultant"),{headers:{authorization:"Bearer "+t}});case 2:c=e.sent,j(c.data);case 4:case"end":return e.stop()}}),e)}))),[]);var V=function(){var e=Object(o.a)(l.a.mark((function e(){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat("https://psychiatric-clinics.herokuapp.com","/Consultant"),{Name:p,specialty:y,aboutYou:v,img:M},{headers:{authorization:"Bearer "+t}});case 3:c=e.sent,(a=Object(g.a)(r)).push(c.data),j(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("err");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(o.a)(l.a.mark((function e(c,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("".concat("https://psychiatric-clinics.herokuapp.com","/Consultant/").concat(c),{headers:{authorization:"Bearer "+t}});case 3:e.sent,(n=Object(g.a)(r)).splice(a,1),j(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("err");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"containerbig",children:1==c?Object(h.jsxs)("div",{className:"coco",children:[Object(h.jsx)("img",{className:"imggg",src:"https://i.ibb.co/1zyJ9F3/Whats-App-Image-2022-01-09-at-10-12-08-PM.jpg"}),Object(h.jsx)("div",{className:"container",children:r.map((function(e,t){return Object(h.jsxs)("div",{className:"elemDiv",children:[Object(h.jsx)("div",{className:"imgg",children:Object(h.jsx)("img",{className:"img1",src:e.img,alt:"\u0627\u0636\u0641 \u0635\u0648\u0631\u0629"})}),Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{className:"chaildC chaildC1",children:[" ",e.Name," "]}),Object(h.jsxs)("p",{className:"chaildC chaildC1",children:[" ",e.specialty," "]}),Object(h.jsxs)("p",{className:"chaildC chaildC3",children:[" ",e.aboutYou," "]}),Object(h.jsx)(w.a,{className:"delbtn",onClick:function(){P(e._id,t)}})]},e._id)}))}),E?Object(h.jsxs)("div",{className:"addDoctor",children:[Object(h.jsx)("input",{onChange:function(e){!function(e){O(e.target.value)}(e)},placeholder:"\u0627\u0644\u0627\u0633\u0645"}),Object(h.jsx)("input",{onChange:function(e){!function(e){f(e.target.value)}(e)},placeholder:"\u0627\u0644\u062a\u062e\u0635\u0635"}),Object(h.jsx)("input",{placeholder:"\u0633\u0646\u0648\u0627\u062a \u0627\u0644\u062e\u0628\u0631\u0629",onChange:function(e){!function(e){S(e.target.value)}(e)}}),Object(h.jsx)("input",{placeholder:"\u0627\u0644\u0635\u0648\u0631\u0629",onChange:function(e){!function(e){I(e.target.value)}(e)}}),Object(h.jsx)("button",{onClick:function(){V()},children:"add"})]}):Object(h.jsx)("div",{className:"adding",children:Object(h.jsx)(N.a,{className:"MdAddCircle",onClick:function(){z(!0)}})})]}):Object(h.jsxs)("div",{className:"coco",children:[Object(h.jsx)("img",{className:"imggg",src:"https://i.ibb.co/1zyJ9F3/Whats-App-Image-2022-01-09-at-10-12-08-PM.jpg"}),Object(h.jsx)("div",{className:"container",children:r.map((function(e,t){return Object(h.jsxs)("div",{className:"elemDiv",children:[Object(h.jsx)("div",{className:"imgg",children:Object(h.jsx)("img",{className:"img1",src:e.img,alt:"\u0627\u0636\u0641 \u0635\u0648\u0631\u0629"})}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{id:"pColor",className:"chaildC chaildC1",children:Object(h.jsx)("b",{children:e.Name})}),Object(h.jsx)("p",{className:"chaildC chaildC3",children:e.aboutYou}),Object(h.jsx)("p",{className:"chaildC chaildC1",children:e.specialty})]},e._id)}))})]})})}function B(e){var t=e.token,c=Object(a.useState)([""]),n=Object(i.a)(c,2),s=n[0],r=n[1];Object(a.useEffect)(Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=7;break}return e.next=4,b.a.get("".concat("https://psychiatric-clinics.herokuapp.com","/favoritee"),{headers:{authorization:"Bearer "+t}});case 4:c=e.sent,r(c.data),console.log(c.data);case 7:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),[t]);var j=function(){var e=Object(o.a)(l.a.mark((function e(c,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("".concat("https://psychiatric-clinics.herokuapp.com","/unfavor/").concat(c),{headers:{authorization:"Bearer "+t}});case 3:e.sent,(n=Object(g.a)(s)).splice(a,1),r(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("err");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"Video",children:[Object(h.jsx)("img",{src:"https://i.ibb.co/q13hxKH/Whats-App-Image-2022-01-09-at-11-37-22-PM.jpg "}),Object(h.jsx)("div",{className:"Videoo",children:s.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"Vidd",children:[Object(h.jsxs)("p",{id:"pp",children:["  ",e.description]}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{children:Object(h.jsx)("iframe",{id:"n",src:"https://www.youtube.com/embed/".concat(e.video)})}),Object(h.jsx)(k.a,{className:"HEART2",onClick:function(){j(e._id,t)}})]})},e._id)}))})," "]})})}c(79);function M(e){var t=e.token,c=e.admin,n=Object(a.useState)([]),s=Object(i.a)(n,2),r=s[0],j=s[1],u=Object(a.useState)(""),d=Object(i.a)(u,2),p=d[0],O=d[1],x=Object(a.useState)(""),m=Object(i.a)(x,2),v=m[0],f=m[1],N=Object(a.useState)(""),k=Object(i.a)(N,2),C=k[0],y=k[1],S=Object(a.useState)(""),A=Object(i.a)(S,2),B=A[0],M=A[1],I=Object(a.useState)(""),_=Object(i.a)(I,2),U=_[0],E=_[1],z=Object(a.useState)(""),V=Object(i.a)(z,2),P=V[0],T=V[1];Object(a.useEffect)(Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat("https://psychiatric-clinics.herokuapp.com","/Amasege"),{headers:{authorization:"Bearer "+t}});case 2:c=e.sent,j(c.data);case 4:case"end":return e.stop()}}),e)}))),[]);var q=function(){var e=Object(o.a)(l.a.mark((function e(){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("inter try"),e.next=4,b.a.post("".concat("https://psychiatric-clinics.herokuapp.com","/Amasege"),{Names:p,EmailMsgs:v,PhoneMsgs:C,DoctorNames:B,Titles:U,MasgeIss:P},{headers:{authorization:"Bearer "+t}});case 4:c=e.sent,(a=Object(g.a)(r)).push(c.data),j(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("err");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(o.a)(l.a.mark((function e(c,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("".concat("https://psychiatric-clinics.herokuapp.com","/Amasege/").concat(c),{headers:{authorization:"Bearer "+t}});case 3:e.sent,(n=Object(g.a)(r)).splice(a,1),j(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("err");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"bigMsg",children:[Object(h.jsx)("img",{src:"https://i.ibb.co/KVBmJR5/Whats-App-Image-2022-01-10-at-12-10-17-AM.jpg"}),2==c?Object(h.jsx)("div",{className:"bigDiv",children:r.map((function(e,t){return Object(h.jsxs)("div",{className:"msgggBox",children:[" "," ",Object(h.jsxs)("div",{className:"pharagraph",children:[Object(h.jsxs)("p",{className:"pst",children:["\u0627\u0644\u0627\u0633\u0645:",e.Names]}),Object(h.jsxs)("p",{className:"pst",children:[e.EmailMsgs,":\u0627\u0644\u0627\u064a\u0645\u064a\u0644"]}),Object(h.jsxs)("p",{className:"pst",children:["\u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644:",e.PhoneMsgs]}),Object(h.jsxs)("p",{className:"pst",children:["\u0627\u0633\u0645 \u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u064a:",e.DoctorNames]}),Object(h.jsxs)("p",{className:"pst",children:["\u0627\u0644\u0645\u0648\u0636\u0648\u0639:",e.Titles]}),Object(h.jsxs)("p",{className:"pst",children:["\u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a:",e.MasgeIss]})]}),Object(h.jsx)("div",{className:"delbtn",children:Object(h.jsx)(w.a,{onClick:function(){D(e._id,t)}})})]},e._id)}))}):Object(h.jsxs)("div",{className:"masegs",children:[Object(h.jsxs)("div",{className:"top",children:[Object(h.jsx)("input",{onChange:function(e){!function(e){M(e.target.value)}(e)},placeholder:"\u0627\u0633\u0645 \u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u064a"}),Object(h.jsx)("input",{onChange:function(e){!function(e){E(e.target.value)}(e)},placeholder:"\u0627\u0644\u0645\u0648\u0636\u0648\u0639"})]}),Object(h.jsxs)("div",{className:"medel",children:[Object(h.jsx)("input",{onChange:function(e){!function(e){y(e.target.value)}(e)},placeholder:"\u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644"}),Object(h.jsx)("input",{onChange:function(e){!function(e){f(e.target.value)}(e)},placeholder:"\u0627\u0644\u0627\u064a\u0645\u064a\u0644"}),Object(h.jsx)("input",{onChange:function(e){!function(e){O(e.target.value)}(e)},placeholder:"\u0627\u0644\u0627\u0633\u0645"})]}),Object(h.jsx)("div",{className:"doun",children:Object(h.jsx)("input",{onChange:function(e){!function(e){T(e.target.value)}(e)},placeholder:"\u0627\u0633\u062a\u0634\u0627\u0631\u062a\u0643"})}),Object(h.jsx)("div",{className:"nn",children:Object(h.jsx)("button",{onClick:function(){q()},children:" \u0627\u0631\u0633\u0627\u0644 "})}),Object(h.jsx)("h1",{children:"\u0645\u0644\u0627\u062d\u0638\u0629: \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u062a\u0623\u0643\u062f \u0645\u0646 \u0635\u062d\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u062f\u062e\u0644\u0647 \u062d\u062a\u0649 \u064a\u062a\u0645 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0643\u0645 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d \u0648\u0633\u0631\u064a\u0639  "})]})]})}function I(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{}),Object(h.jsx)("div",{className:"hrader"})]})}c(80);function _(){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"about",children:[Object(h.jsx)("h1",{children:"\u0639\u0646 \u0628\u0640\u0640\u0627\u0644\u0627\u0646\u0640\u0640\u0633"}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"aboutContain",children:[Object(h.jsx)("h2",{children:"\u0647\u062f\u0641\u0646\u0627 "}),Object(h.jsxs)("h4",{children:["\u0646\u0647\u062f\u0641 \u0646\u062d\u0646 \u0641\u064a \u0628\u0640\u0627\u0644\u0627\u0646\u0640\u0640\u0633 \u0625\u0644\u0649 \u062a\u0646\u0645\u064a\u0629 \u0627\u0644\u0648\u0639\u064a \u0628\u0627\u0644\u0635\u062d\u0629 \u0627\u0644\u0646\u0641\u0633\u064a\u0629 \u0648\u0627\u0644\u0639\u0642\u0644\u064a\u0629 ",Object(h.jsx)("br",{}),"\u0648\u0645\u0633\u0627\u0639\u062f\u0629 \u0627\u0644\u0646\u0627\u0633 \u0639\u0644\u0649 \u0627\u0644\u062a\u0645\u062a\u0639 \u0628\u0645\u0633\u062a\u0648\u0649 \u0639\u0627\u0637\u0641\u064a \u0648\u0633\u0644\u0648\u0643\u064a \u062c\u064a\u062f \u0648\u062a\u0646\u0645\u064a\u0629 \u0642\u062f\u0631\u0629 \u0627\u0644\u0641\u0631\u062f \u0639\u0644\u0649 \u0627\u0644\u0627\u0633\u062a\u0645\u062a\u0627\u0639 \u0628\u0627\u0644\u062d\u064a\u0627\u0629 ",Object(h.jsx)("br",{}),"\u0648\u062e\u0644\u0642 \u0627\u0644\u062a\u0648\u0627\u0632\u0646 \u0628\u064a\u0646 \u0623\u0646\u0634\u0637\u0629 \u0627\u0644\u062d\u064a\u0627\u0629 \u0648\u0645\u062a\u0637\u0644\u0628\u0627\u062a\u0647\u0627 \u0644\u062a\u062d\u0642\u064a\u0642 \u0627\u0644\u0645\u0631\u0648\u0646\u0629 \u0627\u0644\u0646\u0641\u0633\u064a\u0629."]})]}),Object(h.jsxs)("div",{className:"aboutContain",children:[Object(h.jsx)("h2",{children:"\u0646\u0639\u062a\u0645\u062f \u0639\u0644\u0649  "}),Object(h.jsxs)("h4",{children:["\u0646\u0639\u062a\u0645\u062f  \u0641\u064a \u0628\u0640\u0640\u0627\u0644\u0627\u0646\u0640\u0640\u0633 \u0628\u0634\u0643\u0644 \u0631\u0626\u064a\u0633\u064a \u0639\u0644\u0649 \u0625\u0646\u062a\u0627\u062c \u0645\u062d\u062a\u0648\u0649 \u0639\u0644\u0645\u064a \u0648\u0639\u0645\u0644\u064a \u0645\u064f\u0628\u0633\u0637 \u0639\u0644\u0649 \u0645\u0648\u0642\u0639\u0646\u0627 \u0639\u0644\u0649 \u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",Object(h.jsx)("br",{})," \u0648\u062e\u0644\u0642 \u0645\u062d\u062a\u0648\u0649 \u062a\u0641\u0627\u0639\u0644\u064a \u0639\u0644\u0649 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a \u0648\u0645\u0646 \u0627\u0644\u0645\u0642\u0631\u0631 \u0623\u0646 \u0646\u0642\u0648\u0645 \u0628\u0625\u0637\u0644\u0627\u0642 \u0646\u0634\u0627\u0637\u0627\u062a\u0646\u0627 \u0639\u0644\u0649 \u0627\u0644\u0623\u0631\u0636 ",Object(h.jsx)("br",{}),"\u0642\u0631\u064a\u0628\u064b\u0627 \u0628\u0627\u0644\u062a\u0639\u0627\u0648\u0646 \u0645\u0639 \u0645\u064f\u062a\u062e\u0635\u0635\u064a\u0646 \u0641\u064a \u0627\u0644\u0639\u0644\u0627\u062c \u0627\u0644\u0646\u0641\u0633\u064a \u0648\u0627\u0644\u0639\u0644\u0627\u062c \u0627\u0644\u062c\u0645\u0627\u0639\u064a."]})]})]})]})})}var U=c(45);function E(){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"about",children:[Object(h.jsx)("h1",{children:"\u062d\u0633\u0627\u0628\u0627\u062a\u0646\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0648\u0634\u0627\u0644 \u0645\u064a\u062f\u064a\u0627 "}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"aboutContain",children:Object(h.jsxs)("a",{href:"https://twitter.com/najah_rul",children:[Object(h.jsx)(y.c,{className:"butt tw"}),Object(h.jsx)("h4",{children:"@najah_rul"})]})}),Object(h.jsx)("div",{className:"aboutContain",children:Object(h.jsxs)("a",{href:" ",children:[Object(h.jsx)(y.b,{className:"butt sn"}),Object(h.jsx)("h4",{children:"@balansSn.ksa "})]})}),Object(h.jsx)("div",{className:"aboutContain",children:Object(h.jsxs)("a",{href:"https://t.me/najah_rul",children:[Object(h.jsx)(U.a,{className:"butt tel"}),Object(h.jsx)("h4",{children:"@najah_rul "})]})}),Object(h.jsx)("div",{className:"aboutContain",children:Object(h.jsxs)("a",{href:" ",children:[Object(h.jsx)(y.d,{className:"butt wh"}),Object(h.jsx)("h4",{children:" 0506179014 "})]})})]})]})})}function z(){console.log("https://psychiatric-clinics.herokuapp.com","backend URL");var e=Object(a.useState)(),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(null),r=Object(i.a)(s,2),o=r[0],j=r[1],l=Object(a.useState)(""),d=Object(i.a)(l,2),b=d[0],x=d[1];return Object(h.jsxs)("div",{className:"s",children:[Object(h.jsx)(f,{token:c,setToken:n,admin:o}),Object(h.jsx)(u.a,{exact:!0,path:"/",element:Object(h.jsx)(I,{})}),Object(h.jsx)(u.a,{exact:!0,path:"/AboutUs",render:function(){return Object(h.jsx)(_,{token:c})}}),Object(h.jsx)(u.a,{exact:!0,path:"/CallUs",render:function(){return Object(h.jsx)(E,{token:c})}}),Object(h.jsx)(u.a,{exact:!0,path:"/login",render:function(){return Object(h.jsx)(p,{setAdmin:j,setUserId:x,setToken:n})}}),Object(h.jsx)(u.a,{exact:!0,path:"/signUp",component:O}),Object(h.jsx)(u.a,{exact:!0,path:"/video",render:function(){return Object(h.jsx)(C,{token:c,admin:o})}}),Object(h.jsx)(u.a,{exact:!0,path:"/Post",render:function(){return Object(h.jsx)(S,{token:c,userId:b})}}),Object(h.jsx)(u.a,{exact:!0,path:"/Consultants",render:function(){return Object(h.jsx)(A,{token:c,admin:o})}}),Object(h.jsx)(u.a,{exact:!0,path:"/favorite",render:function(){return Object(h.jsx)(B,{token:c})}}),Object(h.jsx)(u.a,{exact:!0,path:"/Chat",render:function(){return Object(h.jsx)(M,{token:c,admin:o})}})]})}c(81).config(),r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(x.a,{children:Object(h.jsx)(z,{})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.1803921f.chunk.js.map