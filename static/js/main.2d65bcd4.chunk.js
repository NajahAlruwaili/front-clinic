(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},86:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(41),r=c.n(s),i=c(4),o=c(7),j=c(3),l=c.n(j),u=c(5),d=c(6),b=c(8),h=c.n(b),p=(c(38),c(1));function O(e){var t=e.setAdmin,c=e.setToken,n=e.setUserId,s=Object(a.useState)(""),r=Object(i.a)(s,2),j=r[0],b=r[1],O=Object(a.useState)(""),x=Object(i.a)(O,2),m=x[0],v=x[1],f=Object(u.e)(),g=function(){var e=Object(o.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat("https://psychiatric-clinics.herokuapp.com","/login"),{Email:j,Pass:m});case 3:a=e.sent,console.log(a.data),c(a.data.token),t(a.data.payload.admin),n(a.data.payload.userId),console.log(a.data.payload.admin,"admin?"),console.log(a.data.payload.userId,"it is useeer"),f.push("/video"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"signUp",children:Object(p.jsxs)("div",{className:"signBox",children:[Object(p.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BaxevbHsera-I9b57I40phEGm3caprMeLA&usqp=CAU"}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{className:"input2",onChange:function(e){!function(e){b(e.target.value)}(e)},placeholder:"enter your Email"})}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{className:"input2",onChange:function(e){!function(e){v(e.target.value)}(e)},type:"Password",placeholder:"enter your Password"})}),Object(p.jsx)("div",{children:Object(p.jsxs)("button",{id:"button2",onClick:function(){g()},children:[Object(p.jsx)("h2",{children:"Login"})," "]})}),Object(p.jsx)("h3",{className:"su",children:"\u0644\u0627 \u0627\u0645\u062a\u0644\u0643 \u062d\u0633\u0627\u0628 \u061f"}),Object(p.jsx)(d.b,{className:"suu",to:"/signUp",children:"  \u0623\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628 \u062c\u062f\u064a\u062f"})]})})}function x(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),j=r[0],b=r[1],O=Object(a.useState)(""),x=Object(i.a)(O,2),m=x[0],v=x[1],f=Object(u.e)(),g=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat("https://psychiatric-clinics.herokuapp.com","/signUp"),{UserName:c,Email:j,Pass:m});case 3:200===e.sent.status&&f.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("err");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"signUp",children:Object(p.jsxs)("div",{className:"signBox",children:[Object(p.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BaxevbHsera-I9b57I40phEGm3caprMeLA&usqp=CAU"}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{className:"input2",onChange:function(e){!function(e){n(e.target.value)}(e)},placeholder:"enter your name"})}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{className:"input2",onChange:function(e){!function(e){b(e.target.value)}(e)},placeholder:"enter your Email"})}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{className:"input2",onChange:function(e){!function(e){v(e.target.value)}(e)},type:"password",placeholder:"enter your password"})}),Object(p.jsx)("div",{children:Object(p.jsxs)("button",{id:"button1",onClick:function(){g()},children:[" ",Object(p.jsx)("h2",{children:"sign up"})," "]})}),Object(p.jsx)("h3",{className:"su",children:" \u0647\u0644 \u062a\u0645\u062a\u0644\u0643 \u062d\u0633\u0627\u0628 \u061f"}),Object(p.jsx)(d.b,{className:"suu",to:"/login",children:" \u062a\u0633\u062c\u064a\u0644 \u062f\u062e\u0648\u0644 "})]})})}c(39);var m=c(29),v=c(44);function f(e){var t=e.token,c=e.setToken,a=(Object(u.e)(),document.getElementById("navLink"));function n(){a.style.right="-200px"}return Object(p.jsxs)("div",{className:"navB",children:[Object(p.jsx)("img",{id:"lo",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBUlthFW7iUXmASKBcvdni_K8mZ6CDYM4Ag&usqp=CAU"}),Object(p.jsx)("h3",{children:"\u0628\u0640\u0640\u0627\u0644\u0627\u0646\u0640\u0640\u0640\u0633"}),Object(p.jsx)("div",{className:"navL",id:"navLink",children:t?Object(p.jsxs)("div",{children:[Object(p.jsx)(m.a,{onClick:function(){n()},className:"btn"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{className:"link",to:"/login",onClick:function(){c("")},children:"\u062a\u0633\u062c\u064a\u0644 \u062e\u0631\u0648\u062c "})}),Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{className:"link",to:"/chat",children:"\u0627\u0644\u0631\u0633\u0627\u0626\u0644"})}),Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{className:"link",to:"/favorite",children:"\u0627\u0644\u062a\u0641\u0636\u064a\u0644\u0627\u062a"})}),Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{className:"link",to:"/post",children:"\u0637\u0645\u0646\u0627 \u0639\u0646\u0643"})}),Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{className:"link",to:"/Consultants",children:"\u0627\u0644\u0623\u0633\u062a\u0634\u0627\u0631\u064a\u0648\u0646"})}),Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{className:"link",to:"/Video",children:"\u0641\u064a\u062f\u064a\u0648 \u062a\u062d\u0641\u064a\u0632\u064a"})})]})]}):Object(p.jsxs)("div",{children:[Object(p.jsx)(m.a,{onClick:function(){n()},className:"btn"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:"/CallUs",children:" \u0627\u062a\u0635\u0644 \u0628\u0646\u0627 "})}),Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:"/AboutUs",children:"\u0639\u0646\u0646\u0627 "})}),Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:"/",children:"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})})]}),Object(p.jsxs)("div",{className:"helloBox",children:[Object(p.jsx)("h1",{children:"\u0645\u0640\u0631\u062d\u0628\u0640\u0640\u0627 \u0628\u0643\u0640\u0640\u0645 \u0641\u0640\u064a \u0628\u0640\u0640\u0627\u0644\u0627\u0646\u0640\u0640\u0640\u0633"}),Object(p.jsx)(d.b,{to:"/login",children:"\u062a\u0633\u062c\u064a\u0644 \u062f\u062e\u0648\u0644"}),Object(p.jsx)(d.b,{to:"/signUp",children:" \u0623\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628"})]})]})}),Object(p.jsx)(v.a,{onClick:function(){a.style.right="0"},className:"btnM"})]})}var g=c(10),N=c(18),k=c(21),C=c(16);c(40);function y(e){var t=e.token,c=e.admin,n=Object(a.useState)([]),s=Object(i.a)(n,2),r=s[0],j=s[1],u=Object(a.useState)(""),d=Object(i.a)(u,2),b=d[0],O=d[1],x=Object(a.useState)(""),m=Object(i.a)(x,2),v=m[0],f=m[1],y=Object(a.useState)(!1),w=Object(i.a)(y,2),S=w[0],A=w[1];Object(a.useEffect)(Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat("https://psychiatric-clinics.herokuapp.com","/Video"),{headers:{authorization:"Bearer "+t}});case 2:c=e.sent,j(c.data);case 4:case"end":return e.stop()}}),e)}))),[]);var B=function(){var e=Object(o.a)(l.a.mark((function e(){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat("https://psychiatric-clinics.herokuapp.com","/Video"),{description:b,video:v},{headers:{authorization:"Bearer "+t}});case 3:c=e.sent,console.log(c.data),(a=Object(g.a)(r)).push(c.data),j(a),console.log(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("err");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(o.a)(l.a.mark((function e(c,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("".concat("https://psychiatric-clinics.herokuapp.com","/Video/").concat(c),{headers:{authorization:"Bearer "+t}});case 3:e.sent,(n=Object(g.a)(r)).splice(a,1),j(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("err");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,c){return e.apply(this,arguments)}}(),I=function(){var e=Object(o.a)(l.a.mark((function e(c){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat("https://psychiatric-clinics.herokuapp.com","/favor/").concat(c),{},{headers:{authorization:"Bearer "+t}});case 3:a=e.sent,console.log(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:1==c?Object(p.jsxs)("div",{className:"Video",children:[Object(p.jsx)("img",{src:"https://i.ibb.co/qFNdN9m/Whats-App-Image-2022-01-10-at-12-15-08-AM.jpg "}),S?Object(p.jsxs)("div",{className:"addingV",children:[Object(p.jsx)("input",{className:"inp1",onChange:function(e){!function(e){O(e.target.value)}(e)},placeholder:"\u0627\u0644\u0648\u0635\u0641"})," ",Object(p.jsx)("input",{className:"inp1",onChange:function(e){!function(e){f(e.target.value)}(e)},placeholder:"\u0631\u0627\u0628\u0637 \u0627\u0644\u0641\u064a\u062f\u064a\u0648"}),Object(p.jsx)("button",{className:"but1",onClick:function(){B()},children:" \u0627\u0636\u0627\u0641\u0629 \u0641\u064a\u062f\u064a\u0648"})]}):Object(p.jsx)("div",{className:"addingV",children:Object(p.jsx)(N.a,{className:"MdAddCircle",onClick:function(){A(!0)}})}),Object(p.jsx)("div",{className:"Videoo",children:r.map((function(e,t){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"Vidd",children:[Object(p.jsxs)("p",{id:"pp",children:["  ",e.description]}),Object(p.jsx)("hr",{}),Object(p.jsx)("p",{children:Object(p.jsx)("iframe",{id:"n",src:"https://www.youtube.com/embed/".concat(e.video)})}),Object(p.jsx)(C.a,{className:"button",onClick:function(){M(e._id,t)}}),Object(p.jsx)(k.a,{className:"HEART",onClick:function(){I(e._id)}})]})},e._id)}))})," "]}):Object(p.jsxs)("div",{className:"Video",children:[Object(p.jsx)("img",{src:"https://i.ibb.co/qFNdN9m/Whats-App-Image-2022-01-10-at-12-15-08-AM.jpg "}),Object(p.jsx)("div",{className:"Videoo",children:r.map((function(e,t){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"Vidd",children:[Object(p.jsxs)("p",{id:"pp",children:["  ",e.description]}),Object(p.jsx)("hr",{}),Object(p.jsx)("p",{children:Object(p.jsx)("iframe",{id:"n",src:"https://www.youtube.com/embed/".concat(e.video)})}),Object(p.jsx)(k.a,{className:"HEART",onClick:function(){I(e._id)}})]})},e._id)}))})," "]})})}var w=c(15);c(77);function S(e){var t=e.token,c=e.userId,n=Object(a.useState)([]),s=Object(i.a)(n,2),r=s[0],j=s[1],u=Object(a.useState)(""),d=Object(i.a)(u,2),b=d[0],O=d[1],x=Object(a.useState)(""),m=Object(i.a)(x,2),v=m[0],f=m[1],k=Object(a.useState)(!1),y=Object(i.a)(k,2),S=y[0],A=y[1],B=Object(a.useState)(!1),M=Object(i.a)(B,2),I=M[0],_=M[1];Object(a.useEffect)(Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat("https://psychiatric-clinics.herokuapp.com","/post"),{headers:{authorization:"Bearer "+t}});case 2:c=e.sent,j(c.data);case 4:case"end":return e.stop()}}),e)}))),[]);var U=function(){var e=Object(o.a)(l.a.mark((function e(){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat("https://psychiatric-clinics.herokuapp.com","/post"),{post:b},{headers:{authorization:"Bearer "+t}});case 3:c=e.sent,(a=Object(g.a)(r)).push(c.data),j(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("err");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(o.a)(l.a.mark((function e(c,a){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("".concat("https://psychiatric-clinics.herokuapp.com","/post/").concat(c),{headers:{authorization:"Bearer "+t}});case 3:n=e.sent,console.log(n.data),null!==n.data&&((s=Object(g.a)(r)).splice(a,1),j(s)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("err");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,c){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(l.a.mark((function e(c){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.put("".concat("https://psychiatric-clinics.herokuapp.com","/post/").concat(c),{post:v},{headers:{authorization:"Bearer "+t}});case 3:a=e.sent,j(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("err");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"bigCont",children:[Object(p.jsx)("div",{className:"Cont",children:Object(p.jsx)("img",{className:"wwimg",src:"https://i.ibb.co/H2nhcs4/Whats-App-Image-2022-01-09-at-11-49-09-PM.jpg"})}),Object(p.jsxs)("div",{className:"minCont",children:[I?Object(p.jsxs)("div",{className:"adding",children:[Object(p.jsx)("input",{className:"inp",placeholder:"... \u0623\u0643\u062a\u0628 \u0647\u0646\u0627",onChange:function(e){!function(e){O(e.target.value)}(e)}})," ",Object(p.jsxs)("button",{className:"but",onClick:function(){U()},children:[" ","\u0627\u0631\u0633\u0644"," "]})]}):Object(p.jsx)("div",{className:"adding",children:Object(p.jsx)(N.a,{className:"MdAddCircle",onClick:function(){_(!0)}})}),Object(p.jsx)("div",{className:"bigDiv",children:r.map((function(e,t){return Object(p.jsxs)("div",{className:"postBox",children:[" ",Object(p.jsx)("p",{children:e.post}),e.user==c?Object(p.jsxs)("div",{className:"inpDiv",children:[Object(p.jsx)(C.a,{className:"delbtn",onClick:function(){z(e._id,t)}}),S?Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{onChange:function(e){!function(e){f(e.target.value)}(e)}}),Object(p.jsx)(w.a,{onClick:function(){E(e._id)}})]}):Object(p.jsx)(w.a,{onClick:function(){e._id.i,A(!0)}})]}):""]},e._id)}))})]})]})}c(78);function A(e){var t=e.token,c=e.admin,n=Object(a.useState)([]),s=Object(i.a)(n,2),r=s[0],j=s[1],u=Object(a.useState)(""),d=Object(i.a)(u,2),b=d[0],O=d[1],x=Object(a.useState)(""),m=Object(i.a)(x,2),v=m[0],f=m[1],k=Object(a.useState)(""),y=Object(i.a)(k,2),w=y[0],S=y[1],A=Object(a.useState)(""),B=Object(i.a)(A,2),M=B[0],I=B[1],_=Object(a.useState)(!1),U=Object(i.a)(_,2),z=U[0],E=U[1];Object(a.useEffect)(Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat("https://psychiatric-clinics.herokuapp.com","/consultant"),{headers:{authorization:"Bearer "+t}});case 2:c=e.sent,j(c.data);case 4:case"end":return e.stop()}}),e)}))),[]);var V=function(){var e=Object(o.a)(l.a.mark((function e(){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat("https://psychiatric-clinics.herokuapp.com","/Consultant"),{Name:b,specialty:w,aboutYou:v,img:M},{headers:{authorization:"Bearer "+t}});case 3:c=e.sent,(a=Object(g.a)(r)).push(c.data),j(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("err");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(o.a)(l.a.mark((function e(c,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("".concat("https://psychiatric-clinics.herokuapp.com","/Consultant/").concat(c),{headers:{authorization:"Bearer "+t}});case 3:e.sent,(n=Object(g.a)(r)).splice(a,1),j(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("err");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"containerbig",children:1==c?Object(p.jsxs)("div",{className:"coco",children:[Object(p.jsx)("img",{className:"imggg",src:"https://i.ibb.co/1zyJ9F3/Whats-App-Image-2022-01-09-at-10-12-08-PM.jpg"}),Object(p.jsx)("div",{className:"container",children:r.map((function(e,t){return Object(p.jsxs)("div",{className:"elemDiv",children:[Object(p.jsx)("div",{className:"imgg",children:Object(p.jsx)("img",{className:"img1",src:e.img,alt:"\u0627\u0636\u0641 \u0635\u0648\u0631\u0629"})}),Object(p.jsx)("hr",{}),Object(p.jsxs)("p",{className:"chaildC chaildC1",children:[" ",e.Name," "]}),Object(p.jsxs)("p",{className:"chaildC chaildC1",children:[" ",e.specialty," "]}),Object(p.jsxs)("p",{className:"chaildC chaildC3",children:[" ",e.aboutYou," "]}),Object(p.jsx)(C.a,{className:"delbtn",onClick:function(){P(e._id,t)}})]},e._id)}))}),z?Object(p.jsxs)("div",{className:"addDoctor",children:[Object(p.jsx)("input",{onChange:function(e){!function(e){O(e.target.value)}(e)},placeholder:"\u0627\u0644\u0627\u0633\u0645"}),Object(p.jsx)("input",{onChange:function(e){!function(e){f(e.target.value)}(e)},placeholder:"\u0627\u0644\u062a\u062e\u0635\u0635"}),Object(p.jsx)("input",{placeholder:"\u0633\u0646\u0648\u0627\u062a \u0627\u0644\u062e\u0628\u0631\u0629",onChange:function(e){!function(e){S(e.target.value)}(e)}}),Object(p.jsx)("input",{placeholder:"\u0627\u0644\u0635\u0648\u0631\u0629",onChange:function(e){!function(e){I(e.target.value)}(e)}}),Object(p.jsx)("button",{onClick:function(){V()},children:"add"})]}):Object(p.jsx)("div",{className:"adding",children:Object(p.jsx)(N.a,{className:"MdAddCircle",onClick:function(){E(!0)}})})]}):Object(p.jsxs)("div",{className:"coco",children:[Object(p.jsx)("img",{className:"imggg",src:"https://i.ibb.co/1zyJ9F3/Whats-App-Image-2022-01-09-at-10-12-08-PM.jpg"}),Object(p.jsx)("div",{className:"container",children:r.map((function(e,t){return Object(p.jsxs)("div",{className:"elemDiv",children:[Object(p.jsx)("div",{className:"imgg",children:Object(p.jsx)("img",{className:"img1",src:e.img,alt:"\u0627\u0636\u0641 \u0635\u0648\u0631\u0629"})}),Object(p.jsx)("hr",{}),Object(p.jsx)("p",{id:"pColor",className:"chaildC chaildC1",children:Object(p.jsx)("b",{children:e.Name})}),Object(p.jsx)("p",{className:"chaildC chaildC3",children:e.aboutYou}),Object(p.jsx)("p",{className:"chaildC chaildC1",children:e.specialty})]},e._id)}))})]})})}function B(e){var t=e.token,c=Object(a.useState)([""]),n=Object(i.a)(c,2),s=n[0],r=n[1];Object(a.useEffect)(Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=7;break}return e.next=4,h.a.get("".concat("https://psychiatric-clinics.herokuapp.com","/favoritee"),{headers:{authorization:"Bearer "+t}});case 4:c=e.sent,r(c.data),console.log(c.data);case 7:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),[t]);var j=function(){var e=Object(o.a)(l.a.mark((function e(c,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("".concat("https://psychiatric-clinics.herokuapp.com","/unfavor/").concat(c),{headers:{authorization:"Bearer "+t}});case 3:e.sent,(n=Object(g.a)(s)).splice(a,1),r(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("err");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"Video",children:[Object(p.jsx)("img",{src:"https://i.ibb.co/q13hxKH/Whats-App-Image-2022-01-09-at-11-37-22-PM.jpg "}),Object(p.jsx)("div",{className:"Videoo",children:s.map((function(e,t){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"Vidd",children:[Object(p.jsxs)("p",{id:"pp",children:["  ",e.description]}),Object(p.jsx)("hr",{}),Object(p.jsx)("p",{children:Object(p.jsx)("iframe",{id:"n",src:"https://www.youtube.com/embed/".concat(e.video)})}),Object(p.jsx)(k.a,{className:"HEART2",onClick:function(){j(e._id,t)}})]})},e._id)}))})," "]})})}c(79);function M(e){var t=e.token,c=e.admin,n=Object(a.useState)([]),s=Object(i.a)(n,2),r=s[0],j=s[1],u=Object(a.useState)(""),d=Object(i.a)(u,2),b=d[0],O=d[1],x=Object(a.useState)(""),m=Object(i.a)(x,2),v=m[0],f=m[1],N=Object(a.useState)(""),k=Object(i.a)(N,2),y=k[0],w=k[1],S=Object(a.useState)(""),A=Object(i.a)(S,2),B=A[0],M=A[1],I=Object(a.useState)(""),_=Object(i.a)(I,2),U=_[0],z=_[1],E=Object(a.useState)(""),V=Object(i.a)(E,2),P=V[0],T=V[1];Object(a.useEffect)(Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat("https://psychiatric-clinics.herokuapp.com","/Amasege"),{headers:{authorization:"Bearer "+t}});case 2:c=e.sent,j(c.data);case 4:case"end":return e.stop()}}),e)}))),[]);var q=function(){var e=Object(o.a)(l.a.mark((function e(){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("inter try"),e.next=4,h.a.post("".concat("https://psychiatric-clinics.herokuapp.com","/Amasege"),{Names:b,EmailMsgs:v,PhoneMsgs:y,DoctorNames:B,Titles:U,MasgeIss:P},{headers:{authorization:"Bearer "+t}});case 4:c=e.sent,(a=Object(g.a)(r)).push(c.data),j(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("err");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(o.a)(l.a.mark((function e(c,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("".concat("https://psychiatric-clinics.herokuapp.com","/Amasege/").concat(c),{headers:{authorization:"Bearer "+t}});case 3:e.sent,(n=Object(g.a)(r)).splice(a,1),j(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("err");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"bigMsg",children:[Object(p.jsx)("img",{src:"https://i.ibb.co/KVBmJR5/Whats-App-Image-2022-01-10-at-12-10-17-AM.jpg"}),2==c?Object(p.jsx)("div",{className:"bigDiv",children:r.map((function(e,t){return Object(p.jsxs)("div",{className:"msgggBox",children:[" "," ",Object(p.jsxs)("div",{className:"pharagraph",children:[Object(p.jsxs)("p",{className:"pst",children:["\u0627\u0644\u0627\u0633\u0645:",e.Names]}),Object(p.jsxs)("p",{className:"pst",children:[e.EmailMsgs,":\u0627\u0644\u0627\u064a\u0645\u064a\u0644"]}),Object(p.jsxs)("p",{className:"pst",children:["\u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644:",e.PhoneMsgs]}),Object(p.jsxs)("p",{className:"pst",children:["\u0627\u0633\u0645 \u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u064a:",e.DoctorNames]}),Object(p.jsxs)("p",{className:"pst",children:["\u0627\u0644\u0645\u0648\u0636\u0648\u0639:",e.Titles]}),Object(p.jsxs)("p",{className:"pst",children:["\u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a:",e.MasgeIss]})]}),Object(p.jsx)("div",{className:"delbtn",children:Object(p.jsx)(C.a,{onClick:function(){D(e._id,t)}})})]},e._id)}))}):Object(p.jsxs)("div",{className:"masegs",children:[Object(p.jsxs)("div",{className:"top",children:[Object(p.jsx)("input",{onChange:function(e){!function(e){M(e.target.value)}(e)},placeholder:"\u0627\u0633\u0645 \u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u064a"}),Object(p.jsx)("input",{onChange:function(e){!function(e){z(e.target.value)}(e)},placeholder:"\u0627\u0644\u0645\u0648\u0636\u0648\u0639"})]}),Object(p.jsxs)("div",{className:"medel",children:[Object(p.jsx)("input",{onChange:function(e){!function(e){w(e.target.value)}(e)},placeholder:"\u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644"}),Object(p.jsx)("input",{onChange:function(e){!function(e){f(e.target.value)}(e)},placeholder:"\u0627\u0644\u0627\u064a\u0645\u064a\u0644"}),Object(p.jsx)("input",{onChange:function(e){!function(e){O(e.target.value)}(e)},placeholder:"\u0627\u0644\u0627\u0633\u0645"})]}),Object(p.jsx)("div",{className:"doun",children:Object(p.jsx)("input",{onChange:function(e){!function(e){T(e.target.value)}(e)},placeholder:"\u0627\u0633\u062a\u0634\u0627\u0631\u062a\u0643"})}),Object(p.jsx)("div",{className:"nn",children:Object(p.jsx)("button",{onClick:function(){q()},children:" \u0627\u0631\u0633\u0627\u0644 "})}),Object(p.jsx)("h1",{children:"\u0645\u0644\u0627\u062d\u0638\u0629: \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u062a\u0623\u0643\u062f \u0645\u0646 \u0635\u062d\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u062f\u062e\u0644\u0647 \u062d\u062a\u0649 \u064a\u062a\u0645 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0643\u0645 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d \u0648\u0633\u0631\u064a\u0639  "})]})]})}c(80);function I(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"helloBox",children:[Object(p.jsx)("h1",{children:"\u0645\u0640\u0631\u062d\u0628\u0640\u0640\u0627 \u0628\u0643\u0640\u0640\u0645 \u0641\u0640\u064a \u0628\u0640\u0640\u0627\u0644\u0627\u0646\u0640\u0640\u0640\u0633"}),Object(p.jsx)(d.b,{to:"/login",children:"\u062a\u0633\u062c\u064a\u0644 \u062f\u062e\u0648\u0644"}),Object(p.jsx)(d.b,{to:"/signUp",children:" \u0623\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628"})]})})}c(81);function _(){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"about",children:[Object(p.jsx)("h1",{children:"\u0639\u0646 \u0628\u0640\u0640\u0627\u0644\u0627\u0646\u0640\u0640\u0633"}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"aboutContain",children:[Object(p.jsx)("h2",{children:"\u0647\u062f\u0641\u0646\u0627 "}),Object(p.jsxs)("h4",{children:["\u0646\u0647\u062f\u0641 \u0646\u062d\u0646 \u0641\u064a \u0628\u0640\u0627\u0644\u0627\u0646\u0640\u0640\u0633 \u0625\u0644\u0649 \u062a\u0646\u0645\u064a\u0629 \u0627\u0644\u0648\u0639\u064a \u0628\u0627\u0644\u0635\u062d\u0629 \u0627\u0644\u0646\u0641\u0633\u064a\u0629 \u0648\u0627\u0644\u0639\u0642\u0644\u064a\u0629 ",Object(p.jsx)("br",{}),"\u0648\u0645\u0633\u0627\u0639\u062f\u0629 \u0627\u0644\u0646\u0627\u0633 \u0639\u0644\u0649 \u0627\u0644\u062a\u0645\u062a\u0639 \u0628\u0645\u0633\u062a\u0648\u0649 \u0639\u0627\u0637\u0641\u064a \u0648\u0633\u0644\u0648\u0643\u064a \u062c\u064a\u062f \u0648\u062a\u0646\u0645\u064a\u0629 \u0642\u062f\u0631\u0629 \u0627\u0644\u0641\u0631\u062f \u0639\u0644\u0649 \u0627\u0644\u0627\u0633\u062a\u0645\u062a\u0627\u0639 \u0628\u0627\u0644\u062d\u064a\u0627\u0629 ",Object(p.jsx)("br",{}),"\u0648\u062e\u0644\u0642 \u0627\u0644\u062a\u0648\u0627\u0632\u0646 \u0628\u064a\u0646 \u0623\u0646\u0634\u0637\u0629 \u0627\u0644\u062d\u064a\u0627\u0629 \u0648\u0645\u062a\u0637\u0644\u0628\u0627\u062a\u0647\u0627 \u0644\u062a\u062d\u0642\u064a\u0642 \u0627\u0644\u0645\u0631\u0648\u0646\u0629 \u0627\u0644\u0646\u0641\u0633\u064a\u0629."]})]}),Object(p.jsxs)("div",{className:"aboutContain",children:[Object(p.jsx)("h2",{children:"\u0646\u0639\u062a\u0645\u062f \u0639\u0644\u0649  "}),Object(p.jsxs)("h4",{children:["\u0646\u0639\u062a\u0645\u062f  \u0641\u064a \u0628\u0640\u0640\u0627\u0644\u0627\u0646\u0640\u0640\u0633 \u0628\u0634\u0643\u0644 \u0631\u0626\u064a\u0633\u064a \u0639\u0644\u0649 \u0625\u0646\u062a\u0627\u062c \u0645\u062d\u062a\u0648\u0649 \u0639\u0644\u0645\u064a \u0648\u0639\u0645\u0644\u064a \u0645\u064f\u0628\u0633\u0637 \u0639\u0644\u0649 \u0645\u0648\u0642\u0639\u0646\u0627 \u0639\u0644\u0649 \u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",Object(p.jsx)("br",{})," \u0648\u062e\u0644\u0642 \u0645\u062d\u062a\u0648\u0649 \u062a\u0641\u0627\u0639\u0644\u064a \u0639\u0644\u0649 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a \u0648\u0645\u0646 \u0627\u0644\u0645\u0642\u0631\u0631 \u0623\u0646 \u0646\u0642\u0648\u0645 \u0628\u0625\u0637\u0644\u0627\u0642 \u0646\u0634\u0627\u0637\u0627\u062a\u0646\u0627 \u0639\u0644\u0649 \u0627\u0644\u0623\u0631\u0636 ",Object(p.jsx)("br",{}),"\u0642\u0631\u064a\u0628\u064b\u0627 \u0628\u0627\u0644\u062a\u0639\u0627\u0648\u0646 \u0645\u0639 \u0645\u064f\u062a\u062e\u0635\u0635\u064a\u0646 \u0641\u064a \u0627\u0644\u0639\u0644\u0627\u062c \u0627\u0644\u0646\u0641\u0633\u064a \u0648\u0627\u0644\u0639\u0644\u0627\u062c \u0627\u0644\u062c\u0645\u0627\u0639\u064a."]})]})]})]})})}var U=c(45);function z(){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"about",children:[Object(p.jsx)("h1",{children:"\u062d\u0633\u0627\u0628\u0627\u062a\u0646\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0648\u0634\u0627\u0644 \u0645\u064a\u062f\u064a\u0627 "}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"aboutContain",children:Object(p.jsxs)(d.b,{href:"https://twitter.com/najah_rul",children:[Object(p.jsx)(w.c,{className:"butt tw"}),Object(p.jsx)("h4",{children:"@najah_rul"})]})}),Object(p.jsx)("div",{className:"aboutContain",children:Object(p.jsxs)(d.b,{href:" ",children:[Object(p.jsx)(w.b,{className:"butt sn"}),Object(p.jsx)("h4",{children:"@balansSn.ksa "})]})}),Object(p.jsx)("div",{className:"aboutContain",children:Object(p.jsxs)(d.b,{href:"https://t.me/najah_rul",children:[Object(p.jsx)(U.a,{className:"butt tel"}),Object(p.jsx)("h4",{children:"@najah_rul "})]})}),Object(p.jsx)("div",{className:"aboutContain",children:Object(p.jsxs)(d.b,{href:" ",children:[Object(p.jsx)(w.d,{className:"butt wh"}),Object(p.jsx)("h4",{children:" 0506179014 "})]})})]})]})})}function E(){console.log("https://psychiatric-clinics.herokuapp.com","backend URL");var e=Object(a.useState)(),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(null),r=Object(i.a)(s,2),o=r[0],j=r[1],l=Object(a.useState)(""),d=Object(i.a)(l,2),b=d[0],h=d[1];return Object(p.jsxs)("div",{className:"s",children:[Object(p.jsx)(f,{token:c,setToken:n,admin:o}),Object(p.jsx)(u.a,{exact:!0,path:"/",render:function(){return Object(p.jsx)(I,{})}}),Object(p.jsx)(u.a,{exact:!0,path:"/AboutUs",render:function(){return Object(p.jsx)(_,{token:c})}}),Object(p.jsx)(u.a,{exact:!0,path:"/CallUs",render:function(){return Object(p.jsx)(z,{token:c})}}),Object(p.jsx)(u.a,{exact:!0,path:"/login",render:function(){return Object(p.jsx)(O,{setAdmin:j,setUserId:h,setToken:n})}}),Object(p.jsx)(u.a,{exact:!0,path:"/signUp",component:x}),Object(p.jsx)(u.a,{exact:!0,path:"/video",render:function(){return Object(p.jsx)(y,{token:c,admin:o})}}),Object(p.jsx)(u.a,{exact:!0,path:"/Post",render:function(){return Object(p.jsx)(S,{token:c,userId:b})}}),Object(p.jsx)(u.a,{exact:!0,path:"/Consultants",render:function(){return Object(p.jsx)(A,{token:c,admin:o})}}),Object(p.jsx)(u.a,{exact:!0,path:"/favorite",render:function(){return Object(p.jsx)(B,{token:c})}}),Object(p.jsx)(u.a,{exact:!0,path:"/Chat",render:function(){return Object(p.jsx)(M,{token:c,admin:o})}})]})}c(82).config(),r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(d.a,{children:Object(p.jsx)(E,{})})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.2d65bcd4.chunk.js.map