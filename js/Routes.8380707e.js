(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Routes"],{1799:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"mt-4",attrs:{"aria-label":"Page navigation"}},[a("ul",{staticClass:"pagination justify-content-center"},[a("li",{staticClass:"page-item",class:1===t.page?"disabled":""},[a("a",{staticClass:"page-link",on:{click:t.prevPage}},[t._v("Previous")])]),a("li",{staticClass:"page-link",staticStyle:{"background-color":"inherit"}},[t._v(" "+t._s(t.page)+" of "+t._s(null==t.lastPage?1:t.lastPage)+" ")]),a("li",{staticClass:"page-item",class:t.page===t.lastPage||null===t.lastPage?"disabled":""},[a("a",{staticClass:"page-link",on:{click:t.nextPage}},[t._v("Next")])])])])},i=[],o={props:["page","lastPage","prevPage","nextPage"],name:"Pagination"},r=o,n=(a("2984"),a("2877")),c=Object(n["a"])(r,s,i,!1,null,"3cc44525",null);e["a"]=c.exports},"20a5":function(t,e,a){"use strict";a("64c7")},2984:function(t,e,a){"use strict";a("fc5c")},"4ff9":function(t,e,a){},"64c7":function(t,e,a){},7949:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"card",attrs:{to:"/movie/"+t.movie.id}},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col"},[a("img",{staticClass:"card-img img-height",attrs:{alt:t.movie.title+" poster picture",src:"http://image.tmdb.org/t/p/w500/"+t.movie.poster_path},on:{error:t.defaultImg}})]),a("div",{staticClass:"col"},[a("div",{staticClass:"h-100 card-body d-flex flex-column justify-content-between align-items-center p-3"},[a("h6",{staticClass:"mt-1 card-title"},[t._v(t._s(t.movie.title))]),a("div",[a("p",{staticClass:"card-text m-0"},[a("small",[t._v("Popularity: "+t._s(t.movie.popularity))])]),a("p",{staticClass:"card-text m-0"},[a("small",[t._v("Votes: "+t._s(t.movie.vote_count))])])])])])])])},i=[],o={props:["movie"],name:"MovieTile",data:function(){return{defaultImage:a("c452")}},methods:{defaultImg:function(t){t.target.src=this.defaultImage}}},r=o,n=(a("20a5"),a("2877")),c=Object(n["a"])(r,s,i,!1,null,"74c1f5ae",null);e["a"]=c.exports},"81d4":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"min-height container d-flex justify-content-center"},[a("div",{staticClass:"card mt-4"},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-4 my-auto"},[a("img",{staticClass:"card-img img-width",attrs:{src:"http://image.tmdb.org/t/p/w500/"+t.movie.poster_path,alt:"test-alt"}})]),a("div",{staticClass:"col-8"},[a("div",{staticClass:"h-100 card-body d-flex flex-column justify-content-start"},[a("h3",{staticClass:"mb-3 card-title"},[t._v(t._s(t.movie.title))]),a("div",[a("p",{staticClass:"card-text m-0"},[a("strong",[t._v("Genre:")]),t._v(" "+t._s(t._f("arrayJoin")(t.movie.genres))+" ")]),a("p",{staticClass:"card-text m-0"},[a("strong",[t._v("Prod. countries:")]),t._v(" "+t._s(t._f("arrayJoin")(t.movie.production_countries))+" ")]),a("p",{staticClass:"card-text m-0"},[a("strong",[t._v("Popularity:")]),t._v(" "+t._s(t.movie.popularity)+" ")]),a("p",{staticClass:"card-text m-0"},[a("strong",[t._v("Votes:")]),t._v(" "+t._s(t.movie.vote_count)+" ")]),a("p",{staticClass:"card-text m-0"},[a("strong",[t._v("Vote Average:")]),t._v(" "+t._s(t.movie.vote_average)+" ")]),a("p",{staticClass:"card-text mt-2"},[a("a",{attrs:{href:"https://www.themoviedb.org/movie/"+t.movie.id,rel:"noopener noreferrer",target:"_blank"}},[a("strong",[t._v("IMDB Link")])])])])])])]),a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-12"}),a("p",{staticClass:"card-text text-justify p-3"},[a("strong",[t._v("Description:")]),t._v(" "+t._s(t.movie.overview)+" ")])])])])},i=[],o=(a("a15b"),a("d81d"),a("b0c0"),{name:"MovieDetails",computed:{movie:function(){return this.$store.getters.selectedMovie}},created:function(){this.$store.dispatch("fetchSelectedMovie",this.$route.params.id)},filters:{arrayJoin:function(t){return t.map((function(t){return t.name})).join(", ")}}}),r=o,n=(a("d6c7"),a("2877")),c=Object(n["a"])(r,s,i,!1,null,"24c1522e",null);e["default"]=c.exports},8607:function(t,e,a){"use strict";a("fc1d")},"8fd0":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"min-height"},[t._m(0),a("form",{staticClass:"d-flex align-center justify-content-center my-3 mr-lg-5"},[a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.message,expression:"message",modifiers:{lazy:!0}}],staticClass:"form-control mr-1 search-input",attrs:{"aria-label":"Search movies",placeholder:"Search",type:"search"},domProps:{value:t.message},on:{change:function(e){t.message=e.target.value}}}),a("button",{staticClass:"btn btn-outline-danger my-sm-0",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.search.apply(null,arguments)}}},[t._v(" Search ")])]),a("div",{staticClass:"min-height-content d-flex flex-wrap justify-content-center"},t._l(t.showMovies,(function(t){return a("MovieTile",{key:t.id,attrs:{movie:t}})})),1),a("Pagination",{attrs:{lastPage:t.lastPage,nextPage:t.nextPage,page:t.page,prevPage:t.prevPage}})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jumbotron m-0 p-4 text-center"},[a("h1",{staticClass:"display-4"},[t._v("Search movies")])])}],o=a("5530"),r=(a("fb6a"),a("2f62")),n=a("7949"),c=a("1799"),l={name:"SearchMovie",data:function(){return{page:1,perPage:20}},computed:Object(o["a"])(Object(o["a"])({},Object(r["b"])(["searchResults"])),{},{showMovies:function(){var t=(this.page-1)*this.perPage,e=t+this.perPage;return this.searchResults.slice(t,e)},message:{get:function(){return this.$store.state.searchQuery},set:function(t){this.$store.commit("FETCH_SEARCHQUERY",t)}},lastPage:function(){return this.$store.state.lastPageSearch}}),methods:{search:function(){this.$store.dispatch("fetchSearchResults",this.message),this.page=1},prevPage:function(){this.page-=1,window.scrollTo({top:0,behavior:"smooth"})},nextPage:function(){window.scrollTo({top:0,behavior:"smooth"}),this.page+=1,this.$store.dispatch("fetchNextSearchPage",this.page)}},components:{MovieTile:n["a"],Pagination:c["a"]}},u=l,v=(a("94c8"),a("2877")),p=Object(v["a"])(u,s,i,!1,null,"40b95651",null);e["default"]=p.exports},"94c8":function(t,e,a){"use strict";a("4ff9")},a15b:function(t,e,a){"use strict";var s=a("23e7"),i=a("44ad"),o=a("fc6a"),r=a("a640"),n=[].join,c=i!=Object,l=r("join",",");s({target:"Array",proto:!0,forced:c||!l},{join:function(t){return n.call(o(this),void 0===t?",":t)}})},c452:function(t,e,a){t.exports=a.p+"img/no-img.f395fa18.jpg"},d6c7:function(t,e,a){"use strict";a("dc07")},d81d:function(t,e,a){"use strict";var s=a("23e7"),i=a("b727").map,o=a("1dde"),r=o("map");s({target:"Array",proto:!0,forced:!r},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},da27:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"min-height"},[t._m(0),a("div",{staticClass:"select my-3"},[a("label",{attrs:{for:"select"}},[t._v("Sort by:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.sortBy,expression:"sortBy"}],staticClass:"custom-select",attrs:{id:"select"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.sortBy=e.target.multiple?a:a[0]}}},[a("option",{attrs:{selected:"",value:"popularity.desc"}},[t._v("Popularity ↓")]),a("option",{attrs:{value:"popularity.asc"}},[t._v("Popularity ↑")]),a("option",{attrs:{value:"original_title.desc"}},[t._v("Original title ↓")]),a("option",{attrs:{value:"original_title.asc"}},[t._v("Original title ↑")]),a("option",{attrs:{value:"release_date.desc"}},[t._v("Release date ↓")]),a("option",{attrs:{value:"release_date.asc"}},[t._v("Release date ↑")]),a("option",{attrs:{value:"vote_count.desc"}},[t._v("Vote count ↓")]),a("option",{attrs:{value:"vote_count.asc"}},[t._v("Vote count ↑")])])]),a("div",{staticClass:"min-height-content d-flex flex-wrap justify-content-center"},t._l(t.showMovies,(function(t){return a("MovieTile",{key:t.id,attrs:{movie:t}})})),1),a("Pagination",{attrs:{lastPage:t.lastPage,nextPage:t.nextPage,page:t.page,prevPage:t.prevPage}})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jumbotron m-0 p-4 text-center"},[a("h1",{staticClass:"display-4"},[t._v("List of movies")])])}],o=a("5530"),r=(a("fb6a"),a("2f62")),n=a("7949"),c=a("1799"),l={name:"Movies",data:function(){return{page:1,perPage:20}},computed:Object(o["a"])(Object(o["a"])({},Object(r["b"])(["allMovies"])),{},{showMovies:function(){var t=(this.page-1)*this.perPage,e=t+this.perPage;return this.allMovies.slice(t,e)},lastPage:function(){return this.$store.state.lastPageMovies},sortBy:{get:function(){return this.$store.state.sortBy},set:function(t){this.$store.commit("SET_SORTBY",t)}}}),methods:{prevPage:function(){this.page-=1,window.scrollTo({top:0,behavior:"smooth"})},nextPage:function(){window.scrollTo({top:0,behavior:"smooth"}),this.page+=1,this.$store.dispatch("fetchNextPage",this.page,this.sortBy)}},created:function(){this.$store.dispatch("fetchAllMovies",this.page,this.sortBy)},watch:{sortBy:function(){this.$store.dispatch("fetchAllMovies",this.page,this.sortBy),this.page=1}},components:{MovieTile:n["a"],Pagination:c["a"]}},u=l,v=(a("8607"),a("2877")),p=Object(v["a"])(u,s,i,!1,null,"57365256",null);e["default"]=p.exports},dc07:function(t,e,a){},fc1d:function(t,e,a){},fc5c:function(t,e,a){}}]);
//# sourceMappingURL=Routes.8380707e.js.map