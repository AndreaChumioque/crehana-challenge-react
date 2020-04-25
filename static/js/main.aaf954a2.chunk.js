(this["webpackJsonpcrehana-challenge-react"]=this["webpackJsonpcrehana-challenge-react"]||[]).push([[0],{104:function(e,t,a){e.exports=a(121)},109:function(e,t,a){},119:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n,c,r,o,l,s=a(0),i=a.n(s),m=a(13),d=a.n(m),u=a(96),p=a(9),A=a(158),g=(a(109),a(51)),E=a(36),C=a(37),D=a.n(C),S=(a(110),a(157)),b=(a(57),a(54)),f=a(39),_=a.n(f),y=(a(31),a(55),a(24));function v(){var e=Object(b.a)(["\n    query getCountries {\n  countries {\n    id\n    name\n  }\n}\n    "]);return v=function(){return e},e}function h(){var e=Object(b.a)(["\n    query getCompanies {\n  companies {\n    id\n    name\n    slug\n  }\n}\n    "]);return h=function(){return e},e}function j(){var e=Object(b.a)(["\n    query getJobList {\n  jobs {\n    id\n    title\n    slug\n    cities {\n      name\n      country {\n        id\n        name\n      }\n    }\n    remotes {\n      id\n      type\n    }\n    company {\n      id\n      name\n      slug\n      logoUrl\n    }\n    postedAt\n  }\n}\n    "]);return j=function(){return e},e}function N(){var e=Object(b.a)(["\n    query getJobDetail($input: JobInput!) {\n  job(input: $input) {\n    id\n    title\n    description\n    locationNames\n    userEmail\n    commitment {\n      title\n    }\n    cities {\n      name\n      country {\n        id\n        name\n      }\n    }\n    remotes {\n      id\n      type\n    }\n    company {\n      id\n      name\n      logoUrl\n    }\n    postedAt\n  }\n}\n    "]);return N=function(){return e},e}!function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.TitleAsc="title_ASC",e.TitleDesc="title_DESC",e.SlugAsc="slug_ASC",e.SlugDesc="slug_DESC",e.DescriptionAsc="description_ASC",e.DescriptionDesc="description_DESC",e.ApplyUrlAsc="applyUrl_ASC",e.ApplyUrlDesc="applyUrl_DESC",e.IsPublishedAsc="isPublished_ASC",e.IsPublishedDesc="isPublished_DESC",e.IsFeaturedAsc="isFeatured_ASC",e.IsFeaturedDesc="isFeatured_DESC",e.LocationNamesAsc="locationNames_ASC",e.LocationNamesDesc="locationNames_DESC",e.UserEmailAsc="userEmail_ASC",e.UserEmailDesc="userEmail_DESC",e.PostedAtAsc="postedAt_ASC",e.PostedAtDesc="postedAt_DESC",e.CreatedAtAsc="createdAt_ASC",e.CreatedAtDesc="createdAt_DESC",e.UpdatedAtAsc="updatedAt_ASC",e.UpdatedAtDesc="updatedAt_DESC"}(n||(n={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.NameAsc="name_ASC",e.NameDesc="name_DESC",e.SlugAsc="slug_ASC",e.SlugDesc="slug_DESC",e.TypeAsc="type_ASC",e.TypeDesc="type_DESC",e.CreatedAtAsc="createdAt_ASC",e.CreatedAtDesc="createdAt_DESC",e.UpdatedAtAsc="updatedAt_ASC",e.UpdatedAtDesc="updatedAt_DESC"}(c||(c={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.NameAsc="name_ASC",e.NameDesc="name_DESC",e.SlugAsc="slug_ASC",e.SlugDesc="slug_DESC",e.TypeAsc="type_ASC",e.TypeDesc="type_DESC",e.IsoCodeAsc="isoCode_ASC",e.IsoCodeDesc="isoCode_DESC",e.CreatedAtAsc="createdAt_ASC",e.CreatedAtDesc="createdAt_DESC",e.UpdatedAtAsc="updatedAt_ASC",e.UpdatedAtDesc="updatedAt_DESC"}(r||(r={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.NameAsc="name_ASC",e.NameDesc="name_DESC",e.SlugAsc="slug_ASC",e.SlugDesc="slug_DESC",e.TypeAsc="type_ASC",e.TypeDesc="type_DESC",e.CreatedAtAsc="createdAt_ASC",e.CreatedAtDesc="createdAt_DESC",e.UpdatedAtAsc="updatedAt_ASC",e.UpdatedAtDesc="updatedAt_DESC"}(o||(o={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.NameAsc="name_ASC",e.NameDesc="name_DESC",e.SlugAsc="slug_ASC",e.SlugDesc="slug_DESC",e.CreatedAtAsc="createdAt_ASC",e.CreatedAtDesc="createdAt_DESC",e.UpdatedAtAsc="updatedAt_ASC",e.UpdatedAtDesc="updatedAt_DESC"}(l||(l={}));var I=_()(N());var U=_()(j());var O=_()(h());var x=_()(v());var w=a(56),k=a(32),P=a(147),T=a(165),B=a(149),R=a(151),L=a(159),F=a(152),J=a(163),W=a(153),q=a(161),M=a(160),H=Object(P.a)((function(e){return Object(T.a)({logo:{color:"#60e7f3",fontSize:"2.5em"},formControl:{margin:"".concat(e.spacing(1),"px 0")},select:{border:"1px solid #dcdcdc",padding:e.spacing(1),borderRadius:e.spacing(1)},dropDownIcon:{right:8},label:{marginTop:e.spacing(1),marginBottom:0},avatar:{backgroundColor:"#ffd391"},large:{height:50,width:50,marginRight:e.spacing(2)},link:{textDecoration:"none"},jobPaper:{margin:"".concat(e.spacing(2),"px 0"),padding:e.spacing(2),borderRadius:e.spacing(1)}})})),V={PaperProps:{style:{maxHeight:224,width:250}}},$=function(e){var t=e.jobsData,a=e.companiesData,n=e.countriesData,c=H(),r=s.useState(Object(k.orderBy)(t.jobs,"postedAt","desc")),o=Object(w.a)(r,2),l=o[0],i=o[1],m=s.useState([]),d=Object(w.a)(m,2),u=d[0],p=d[1],A=s.useState([]),E=Object(w.a)(A,2),C=E[0],S=E[1],b=s.useState("desc"),f=Object(w.a)(b,2),_=f[0],y=f[1],v=s.useCallback((function(e,a){if(Object(k.isEmpty)(e)&&Object(k.isEmpty)(a))i(t.jobs);else{var n=Object(k.cloneDeep)(t.jobs);Object(k.isEmpty)(a)||(n=n.filter((function(e){var t;return a.includes(null===(t=e.company)||void 0===t?void 0:t.id)}))),Object(k.isEmpty)(e)||(n=n.filter((function(t){return t.cities&&t.cities.some((function(t){return e.includes(t.country.id)}))}))),i(Object(k.orderBy)(n,"postedAt",_))}}),[t.jobs,_]),h=s.useCallback((function(e){y(e);var t=Object(k.orderBy)(l,["postedAt"],[e]);i(t)}),[l]);return s.createElement(s.Fragment,null,s.createElement("h1",{className:c.logo},"GraphQl Jobs"),s.createElement("h4",{className:c.label},"Filtrar por"),s.createElement(B.a,{container:!0,spacing:3},s.createElement(B.a,{item:!0,xs:12,sm:6,md:4},s.createElement(R.a,{fullWidth:!0,className:c.formControl},s.createElement(L.a,{id:"select-country",displayEmpty:!0,multiple:!0,className:c.select,classes:{icon:c.dropDownIcon},value:C,onChange:function(e){S(e.target.value),v(e.target.value,u)},renderValue:function(e){return 0===e.length?s.createElement("em",null,"Pa\xeds"):e.map((function(e){var t=n.countries.find((function(t){return t.id===e}));return t&&t.name})).join(", ")},input:s.createElement(F.a,{disableUnderline:!0}),MenuProps:V},s.createElement(J.a,{disabled:!0,value:""},s.createElement("em",null,"Pa\xeds")),n.countries&&n.countries.map((function(e){return s.createElement(J.a,{key:e.id,value:e.id},e.name)}))))),s.createElement(B.a,{item:!0,xs:12,sm:6,md:4},s.createElement(R.a,{fullWidth:!0,className:c.formControl},s.createElement(L.a,{id:"select-company",displayEmpty:!0,multiple:!0,className:c.select,classes:{icon:c.dropDownIcon},value:u,onChange:function(e){p(e.target.value),v(C,e.target.value)},renderValue:function(e){return 0===e.length?s.createElement("em",null,"Compa\xf1\xeda"):e.map((function(e){var t=a.companies.find((function(t){return t.id===e}));return t&&t.name})).join(", ")},input:s.createElement(F.a,{disableUnderline:!0}),MenuProps:V},s.createElement(J.a,{disabled:!0,value:""},s.createElement("em",null,"Compa\xf1\xeda")),a.companies&&a.companies.map((function(e){return s.createElement(J.a,{key:e.id,value:e.id},e.name)})))))),s.createElement("h4",{className:c.label},"Ordenar por fecha"),s.createElement(B.a,{container:!0,spacing:3},s.createElement(B.a,{item:!0,xs:12,sm:6},s.createElement(R.a,{fullWidth:!0,className:c.formControl},s.createElement(L.a,{labelId:"select-order-label",id:"select-order",className:c.select,classes:{icon:c.dropDownIcon},value:_,onChange:function(e){h(e.target.value)},input:s.createElement(F.a,{disableUnderline:!0}),MenuProps:V},s.createElement(J.a,{key:"order-desc",value:"desc"},"De m\xe1s nuevo a m\xe1s antiguo"),s.createElement(J.a,{key:"order-asc",value:"asc"},"De m\xe1s antiguo a m\xe1s nuevo"))))),s.createElement("h2",null,"Empleos"),l&&l.map((function(e,t){var a;return!!e&&s.createElement(g.b,{key:t,to:"/detail/".concat(e.company.slug,"/").concat(e.slug),style:{textDecoration:"none"}},s.createElement(W.a,{variant:"outlined",className:c.jobPaper},s.createElement(B.a,{container:!0,direction:"row",alignItems:"center"},e.company.logoUrl?s.createElement(q.a,{alt:e.company.name,src:e.company.logoUrl,className:c.large}):s.createElement(q.a,{alt:e.company.name,className:"".concat(c.large," ").concat(c.avatar)},e.company.name.charAt(0).toUpperCase()),s.createElement(M.a,{flexGrow:1},s.createElement("h3",null,e.title),s.createElement(B.a,{container:!0},s.createElement(B.a,{item:!0,xs:12,sm:4},null===(a=e.company)||void 0===a?void 0:a.name),s.createElement(B.a,{item:!0,xs:12,sm:4},e.cities.length?e.cities[0].country.name:""),s.createElement(B.a,{item:!0,xs:12,sm:4},s.createElement("span",null,D.a(e.postedAt).format("LL"))))))))})))},G=a(93),z=a.n(G),Q=Object(P.a)((function(e){return Object(T.a)({fullHeight:{height:"100vh"},loader:{width:80}})})),K=function(){var e=Q();return s.createElement(B.a,{container:!0,alignItems:"center",justify:"center",className:e.fullHeight},s.createElement("img",{src:z.a,alt:"This loader is provided by loading.io",className:e.loader}))},X=function(){var e,t=y.c(U,e),a=t.data,n=t.error,c=t.loading,r=function(e){return y.c(O,e)}(),o=r.data,l=r.error,i=r.loading,m=function(e){return y.c(x,e)}(),d=m.data,u=m.error,p=m.loading;return c||i||p?s.createElement(K,null):n||l||u||!a||!o||!d?s.createElement("div",null,"ERROR"):s.createElement($,{jobsData:a,countriesData:d,companiesData:o})},Y=a(94),Z=a(154),ee=a(155),te=a(156),ae=a(95),ne=a.n(ae),ce=Object(P.a)((function(e){return Object(T.a)({avatar:{backgroundColor:"#ffd391"},small:{height:35,width:35,marginRight:e.spacing(2)},link:{textDecoration:"none"},title:{marginBottom:e.spacing(1),color:"#ff727d"},caption:{margin:"".concat(e.spacing(2),"px 0")},button:{borderRadius:e.spacing(1),marginTop:e.spacing(2)},iconButton:{color:"#60e7f3"},divider:{marginTop:e.spacing(2)}})})),re=function(e){var t,a=e.data,n=ce(),c=Object(E.e)();return a.job&&a.job?s.createElement(s.Fragment,null,s.createElement(Z.a,{className:n.button,startIcon:s.createElement(ne.a,{className:n.iconButton}),onClick:function(){return c.goBack()}},"Volver"),s.createElement("h1",{className:n.title},a.job.title),s.createElement(ee.a,{variant:"caption",display:"block",gutterBottom:!0,className:n.caption},"Publicado el ",D.a(a.job.postedAt).format("LL")),s.createElement(B.a,{container:!0,direction:"row",alignItems:"center"},a.job.company.logoUrl?s.createElement(q.a,{alt:a.job.company.name,src:a.job.company.logoUrl,className:n.small}):s.createElement(q.a,{alt:a.job.company.name,className:"".concat(n.small," ").concat(n.avatar)},a.job.company.name.charAt(0).toUpperCase()),s.createElement("span",null,null===(t=a.job.company)||void 0===t?void 0:t.name)),s.createElement(te.a,{light:!0,className:n.divider}),s.createElement(B.a,{item:!0,xs:12,sm:10,md:8,id:"descriptionContainer"},s.createElement("div",{dangerouslySetInnerHTML:{__html:Y.Marked.parse(a.job.description)}}))):s.createElement("div",null,"No tenemos informaci\xf3n por el momento.")},oe=function(e){var t=e.match;console.log(t);var a,n=(a={variables:{input:{jobSlug:t.params.jobslug,companySlug:t.params.companyslug}}},y.c(I,a)),c=n.data,r=n.error;return n.loading?s.createElement(K,null):r?s.createElement("div",null,"ERROR"):c?s.createElement(re,{data:c}):s.createElement("div",null,"No tenemos informaci\xf3n disponible.")};a(119);D.a().locale("es");var le=function(){return i.a.createElement(g.a,{basename:"/"},i.a.createElement(S.a,{maxWidth:"md"},i.a.createElement(E.a,{path:"/",exact:!0,component:X}),i.a.createElement(E.a,{path:"/detail/:companyslug/:jobslug",exact:!0,component:oe})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=new u.a({uri:"https://api.graphql.jobs/"});d.a.render(i.a.createElement(p.b,{client:se},i.a.createElement(A.a,{client:se},i.a.createElement(le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,t,a){e.exports=a.p+"static/media/loader.34e4b8cb.svg"}},[[104,1,2]]]);
//# sourceMappingURL=main.aaf954a2.chunk.js.map