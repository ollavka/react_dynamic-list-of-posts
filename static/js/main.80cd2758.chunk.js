(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{18:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(10),s=n.n(c),r=(n(16),n(17),n(18),n(11)),a=n(7),i=n(2),o=n(4),l=n.n(o),d=n(1),u="https://mate.academy/students-api";function j(e){return new Promise((function(t){setTimeout(t,e)}))}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return n&&(c.body=JSON.stringify(n),c.headers={"Content-Type":"application/json; charset=UTF-8"}),j(300).then((function(){return fetch(u+e,c)})).then((function(e){return e.json()}))}var m,O,h,f=function(e){return b(e)},x=function(e,t){return b(e,"POST",t)},v=function(e){return b(e,"DELETE")},p=n(9),N=n(0),y=Object(d.createContext)({}),g=Object(d.createContext)({}),C=Object(d.createContext)({}),S=Object(d.createContext)({}),E=function(e){var t=e.children,n=Object(d.useState)(!1),c=Object(i.a)(n,2),s=c[0],o=c[1],u=Object(d.useState)([]),j=Object(i.a)(u,2),b=j[0],m=j[1],O=Object(d.useState)(null),h=Object(i.a)(O,2),E=h[0],P=h[1],w=Object(d.useState)(!1),k=Object(i.a)(w,2),I=k[0],L=k[1],T=Object(d.useState)([]),M=Object(i.a)(T,2),U=M[0],D=M[1],F=Object(d.useState)(!1),B=Object(i.a)(F,2),A=B[0],R=B[1],W=Object(d.useState)(null),_=Object(i.a)(W,2),J=_[0],q=_[1],G=Object(d.useState)([]),Y=Object(i.a)(G,2),z=Y[0],H=Y[1],K=Object(d.useState)(!1),Q=Object(i.a)(K,2),V=Q[0],X=Q[1],Z=Object(d.useState)(!1),$=Object(i.a)(Z,2),ee=$[0],te=$[1];Object(d.useEffect)((function(){o(!1),L(!0);var e=function(){var e=Object(a.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("/users");case 3:t=e.sent,m(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o(!0);case 10:return e.prev=10,L(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(d.useEffect)((function(){var e;o(!1),q(null),E&&(e=E.id,f("/posts?userId=".concat(e))).then((function(e){return D(e)})).catch((function(){return o(!0)})).finally((function(){return R(!1)}))}),[E]),Object(d.useEffect)((function(){var e;o(!1),J&&(e=J.id,f("/comments?postId=".concat(e))).then((function(e){return H(e)})).catch((function(){return o(!0)})).finally((function(){return X(!1)}))}),[J]);var ne=function(e){E!==e&&(P(e),D([]),R(!0))},ce=function(e){H([]),e.id!==(null===J||void 0===J?void 0:J.id)?(X(!0),q(e)):q(null)},se=function(e){return o(!1),te(!0),function(e,t){return x("/comments",Object(p.a)(Object(p.a)({},t),{},{postId:e}))}(null===J||void 0===J?void 0:J.id,e).then((function(e){return H((function(t){return[].concat(Object(r.a)(t),[e])})),!0})).catch((function(){return o(!0),!1})).finally((function(){return te(!1)}))},re=function(e){o(!1),H((function(t){return t.filter((function(t){return t.id!==e}))})),function(e){return v("/comments/".concat(e))}(e).catch((function(){o(!0),H(z)}))},ae=Object(d.useMemo)((function(){return{error:s,resetError:function(){return o(!1)}}}),[s]),ie=Object(d.useMemo)((function(){return{posts:U,selectedPost:J,isPostsLoading:A,onSelectPost:ce}}),[U,J,A]),oe=Object(d.useMemo)((function(){return{users:b,selectedUser:E,isUsersLoading:I,onSelectUser:ne}}),[b,E,I]),le=Object(d.useMemo)((function(){return{comments:z,isCommentsLoading:V,commentIsProcessing:ee,onAddNewComment:se,onDeleteComment:re}}),[z,V,ee]);return Object(N.jsx)(y.Provider,{value:ae,children:Object(N.jsx)(C.Provider,{value:oe,children:Object(N.jsx)(g.Provider,{value:ie,children:Object(N.jsx)(S.Provider,{value:le,children:t})})})})},P=n(3),w=n.n(P),k=function(){return Object(d.useContext)(y)},I=function(){return Object(d.useContext)(g)},L=function(){return Object(d.useContext)(C)},T=function(){return Object(d.useContext)(S)},M=(n(21),function(){return Object(N.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(N.jsx)("div",{className:"Loader__content"})})}),U=function(e){var t=e.onCloseDropdown,n=L(),c=n.onSelectUser,s=n.selectedUser,r=n.users;return Object(N.jsx)(N.Fragment,{children:r.map((function(e){return Object(N.jsx)("a",{href:"#user-".concat(e.id),className:w()("dropdown-item",{"is-active":(null===s||void 0===s?void 0:s.id)===e.id}),onClick:function(){return function(e){c(e),t()}(e)},children:e.name},e.id)}))})},D=function(){var e=L(),t=e.isUsersLoading,n=e.selectedUser,c=Object(d.useState)(!1),s=Object(i.a)(c,2),r=s[0],a=s[1],o=Object(d.useRef)(null),l=function(){return a(!1)};return Object(d.useEffect)((function(){var e=function(e){var t=o.current;t&&!t.contains(e.target)&&l()};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]),Object(N.jsxs)("div",{ref:o,"data-cy":"UserSelector",className:w()("dropdown",{"is-active":r}),children:[Object(N.jsx)("div",{className:"dropdown-trigger",children:Object(N.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){a((function(e){return!e}))},children:[Object(N.jsx)("span",{children:(null===n||void 0===n?void 0:n.name)||"Choose a user"}),Object(N.jsx)("span",{className:"icon is-small",children:Object(N.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(N.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(N.jsx)("div",{className:"dropdown-content",children:t?Object(N.jsx)(M,{}):Object(N.jsx)(U,{onCloseDropdown:l})})})]})},F=function(e){var t=e.field,n=e.type,c=e.id,s=e.label,r=e.placeholder,a=e.name,o=e.icon,l=e.isErrorIcon,u=e.errorMessage,j=e.value,b=e.isSubmitted,m=e.isReseted,O=e.setIsSubmitted,h=e.onChange,f=Object(d.useState)(!1),x=Object(i.a)(f,2),v=x[0],p=x[1];Object(d.useEffect)((function(){b&&(p(!j),O(!1))}),[b]),Object(d.useEffect)((function(){m&&(p(!1),h(""))}),[m]);var y=function(e){p(!1),h(e.target.value)};return Object(N.jsxs)("div",{className:"field","data-cy":t,children:[Object(N.jsx)("label",{className:"label",htmlFor:c,children:s}),Object(N.jsxs)("div",{className:w()("control",{"has-icons-left has-icons-right":"text"===n}),children:["text"===n?Object(N.jsx)("input",{type:n,value:j,name:a,id:c,placeholder:r,className:w()({input:"text"===n,"is-danger":v}),onChange:y}):Object(N.jsx)("textarea",{value:j,id:c,name:a,placeholder:r,className:w()({textarea:"textarea"===n,"is-danger":v}),onChange:y}),o&&Object(N.jsx)("span",{className:"icon is-small is-left",children:Object(N.jsx)("i",{className:o})}),l&&v&&Object(N.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(N.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),v&&Object(N.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:u})]})};!function(e){e.PostsError="PostsLoadingError",e.CommentsError="CommentsError",e.PostsWarning="NoPostsYet"}(m||(m={})),function(e){e.Name="NameField",e.Email="EmailField",e.Body="BodyField"}(O||(O={})),function(e){e.NameIcon="fas fa-user",e.EmailIcon="fas fa-envelope"}(h||(h={}));var B=function(){var e=k().resetError,t=T(),n=t.onAddNewComment,c=t.commentIsProcessing,s=Object(d.useState)(""),r=Object(i.a)(s,2),o=r[0],u=r[1],j=Object(d.useState)(""),b=Object(i.a)(j,2),m=b[0],f=b[1],x=Object(d.useState)(""),v=Object(i.a)(x,2),p=v[0],y=v[1],g=Object(d.useState)(!1),C=Object(i.a)(g,2),S=C[0],E=C[1],P=Object(d.useState)(!1),I=Object(i.a)(P,2),L=I[0],M=I[1],U=function(){var e=Object(a.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),E(!0),o&&m&&p){e.next=4;break}return e.abrupt("return");case 4:return c={name:o,email:m,body:p},e.next=7,n(c);case 7:e.sent&&y("");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){L&&M(!1)}),[L]),Object(N.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:U,onReset:function(){M(!0),e()},children:[Object(N.jsx)(F,{field:O.Name,id:"comment-author-name",label:"Author Name",type:"text",name:"name",placeholder:"Name Surname",errorMessage:"Name is required",icon:h.NameIcon,isErrorIcon:!0,isSubmitted:S,isReseted:L,setIsSubmitted:E,value:o,onChange:u}),Object(N.jsx)(F,{field:O.Email,id:"comment-author-email",label:"Author Email",type:"text",name:"email",placeholder:"email@test.com",errorMessage:"Email is required",icon:h.EmailIcon,isErrorIcon:!0,isSubmitted:S,isReseted:L,setIsSubmitted:E,value:m,onChange:f}),Object(N.jsx)(F,{field:O.Body,id:"comment-body",label:"Comment Text",type:"textarea",name:"body",placeholder:"Type comment here",errorMessage:"Enter some text",isSubmitted:S,isReseted:L,setIsSubmitted:E,value:p,onChange:y}),Object(N.jsxs)("div",{className:"field is-grouped",children:[Object(N.jsx)("div",{className:"control",children:Object(N.jsx)("button",{type:"submit",className:w()("button is-link",{"is-loading":c}),children:"Add"})}),Object(N.jsx)("div",{className:"control",children:Object(N.jsx)("button",{type:"reset",className:"button is-link is-light",children:"Clear"})})]})]})},A=function(e){var t=e.comment,n=T().onDeleteComment;return Object(N.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(N.jsxs)("div",{className:"message-header",children:[Object(N.jsx)("a",{href:"mailto:".concat(t.email),"data-cy":"CommentAuthor",children:t.name}),Object(N.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return n(t.id)}})]}),Object(N.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:t.body})]})},R=function(e){var t=e.writingNewPost,n=e.onWritingNewPost,c=k().error,s=T().comments,r=!c,a=s.length,i=!a&&r,o=!t&&(r||a);return Object(N.jsxs)(N.Fragment,{children:[i?Object(N.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}):Object(N.jsx)("p",{className:"title is-4",children:"Comments:"}),s.map((function(e){return Object(N.jsx)(A,{comment:e},e.id)})),o&&Object(N.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return n(!0)},children:"Write a comment"})]})},W=function(e){var t=e.type,n=e.warningText,c=k().error;return Object(N.jsx)("div",{className:w()("notification",{"is-danger":c,"is-warning":!c}),"data-cy":t,children:c?"Something went wrong!":n})},_=function(){var e=k().error,t=I().selectedPost,n=T().isCommentsLoading,c=Object(d.useState)(!1),s=Object(i.a)(c,2),r=s[0],a=s[1];return Object(d.useEffect)((function(){a(!1)}),[t]),t?Object(N.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(N.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(N.jsxs)("div",{className:"block",children:[Object(N.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(t.id,": ").concat(t.title)}),Object(N.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(N.jsx)("div",{className:"block",children:n?Object(N.jsx)(M,{}):Object(N.jsx)(R,{writingNewPost:r,onWritingNewPost:a})}),r&&Object(N.jsx)(B,{})]}),e&&Object(N.jsx)(W,{type:m.CommentsError})]}):Object(N.jsx)(W,{type:m.PostsError})},J=function(){var e=I().selectedPost;return Object(N.jsx)("div",{"data-cy":"Sidebar",className:w()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":e}),children:e&&Object(N.jsx)("div",{className:"tile is-child box is-success",children:Object(N.jsx)(_,{})})})},q=function(e){var t=e.post,n=I(),c=n.selectedPost,s=n.onSelectPost;return Object(N.jsxs)("tr",{"data-cy":"Post",children:[Object(N.jsx)("td",{"data-cy":"PostId",children:t.id}),Object(N.jsx)("td",{"data-cy":"PostTitle",children:t.title}),Object(N.jsx)("td",{className:"has-text-right is-vcentered",children:Object(N.jsx)("button",{type:"button","data-cy":"PostButton",className:w()("button is-link",{"is-light":t.id!==(null===c||void 0===c?void 0:c.id)}),onClick:function(){return s(t)},children:t.id===(null===c||void 0===c?void 0:c.id)?"Close":"Open"})})]})},G=function(){var e=k().error,t=I(),n=t.posts,c=t.isPostsLoading,s=!n.length&&!c;return s&&e?Object(N.jsx)(W,{type:m.PostsError}):s?Object(N.jsx)(W,{type:m.PostsWarning,warningText:"No posts yet"}):Object(N.jsx)(N.Fragment,{children:c?Object(N.jsx)(M,{}):Object(N.jsxs)("div",{"data-cy":"PostsList",children:[Object(N.jsx)("p",{className:"title",children:"Posts:"}),Object(N.jsxs)("table",{className:w()("table","is-fullwidth","is-striped","is-hoverable","is-narrow"),children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{className:"has-background-link-light",children:[Object(N.jsx)("th",{children:"#"}),Object(N.jsx)("th",{children:"Title"}),Object(N.jsx)("th",{children:" "})]})}),Object(N.jsx)("tbody",{children:n.map((function(e){return Object(N.jsx)(q,{post:e},e.id)}))})]})]})})},Y=function(){var e=L().selectedUser;return Object(N.jsx)("main",{className:"section",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("div",{className:"tile is-ancestor",children:[Object(N.jsx)("div",{className:"tile is-parent",children:Object(N.jsxs)("div",{className:"tile is-child box is-success",children:[Object(N.jsx)("div",{className:"block",children:Object(N.jsx)(D,{})}),Object(N.jsx)("div",{className:"block","data-cy":"MainContent",children:e?Object(N.jsx)(G,{}):Object(N.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"})})]})}),Object(N.jsx)(J,{})]})})})},z=function(){return Object(N.jsx)(E,{children:Object(N.jsx)(Y,{})})};s.a.render(Object(N.jsx)(z,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.80cd2758.chunk.js.map