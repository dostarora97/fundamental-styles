(self.webpackChunkfundamental_styles=self.webpackChunkfundamental_styles||[]).push([[2406],{"./node_modules/tocbot/src/js/build-html.js":function(module){module.exports=function(options){var forEach=[].forEach,some=[].some,body=document.body,currentlyHighlighting=!0;function createEl(d,container){var link=container.appendChild(function createLink(data){var item=document.createElement("li"),a=document.createElement("a");options.listItemClass&&item.setAttribute("class",options.listItemClass);options.onClick&&(a.onclick=options.onClick);options.includeTitleTags&&a.setAttribute("title",data.textContent);options.includeHtml&&data.childNodes.length?forEach.call(data.childNodes,(function(node){a.appendChild(node.cloneNode(!0))})):a.textContent=data.textContent;return a.setAttribute("href",options.basePath+"#"+data.id),a.setAttribute("class",options.linkClass+" node-name--"+data.nodeName+" "+options.extraLinkClasses),item.appendChild(a),item}(d));if(d.children.length){var list=createList(d.isCollapsed);d.children.forEach((function(child){createEl(child,list)})),link.appendChild(list)}}function createList(isCollapsed){var listElement=options.orderedList?"ol":"ul",list=document.createElement(listElement),classes=options.listClass+" "+options.extraListClasses;return isCollapsed&&(classes+=" "+options.collapsibleClass,classes+=" "+options.isCollapsedClass),list.setAttribute("class",classes),list}function getHeadingTopPos(obj){var position=0;return obj!==document.querySelector(options.contentSelector&&null!=obj)&&(position=obj.offsetTop,options.hasInnerContainers&&(position+=getHeadingTopPos(obj.offsetParent))),position}function removeCollapsedFromParents(element){return element&&-1!==element.className.indexOf(options.collapsibleClass)&&-1!==element.className.indexOf(options.isCollapsedClass)?(element.className=element.className.split(" "+options.isCollapsedClass).join(""),removeCollapsedFromParents(element.parentNode.parentNode)):element}return{enableTocAnimation:function enableTocAnimation(){currentlyHighlighting=!0},disableTocAnimation:function disableTocAnimation(event){var target=event.target||event.srcElement;"string"==typeof target.className&&-1!==target.className.indexOf(options.linkClass)&&(currentlyHighlighting=!1)},render:function render(parent,data){var container=createList(!1);if(data.forEach((function(d){createEl(d,container)})),null!==parent)return parent.firstChild&&parent.removeChild(parent.firstChild),0===data.length?parent:parent.appendChild(container)},updateToc:function updateToc(headingsArray){var top;top=options.scrollContainer&&document.querySelector(options.scrollContainer)?document.querySelector(options.scrollContainer).scrollTop:document.documentElement.scrollTop||body.scrollTop,options.positionFixedSelector&&function updateFixedSidebarClass(){var top;top=options.scrollContainer&&document.querySelector(options.scrollContainer)?document.querySelector(options.scrollContainer).scrollTop:document.documentElement.scrollTop||body.scrollTop;var posFixedEl=document.querySelector(options.positionFixedSelector);"auto"===options.fixedSidebarOffset&&(options.fixedSidebarOffset=document.querySelector(options.tocSelector).offsetTop),top>options.fixedSidebarOffset?-1===posFixedEl.className.indexOf(options.positionFixedClass)&&(posFixedEl.className+=" "+options.positionFixedClass):posFixedEl.className=posFixedEl.className.split(" "+options.positionFixedClass).join("")}();var topHeader,headings=headingsArray;if(currentlyHighlighting&&null!==document.querySelector(options.tocSelector)&&headings.length>0){some.call(headings,(function(heading,i){return getHeadingTopPos(heading)>top+options.headingsOffset+10?(topHeader=headings[0===i?i:i-1],!0):i===headings.length-1?(topHeader=headings[headings.length-1],!0):void 0}));var tocLinks=document.querySelector(options.tocSelector).querySelectorAll("."+options.linkClass);forEach.call(tocLinks,(function(tocLink){tocLink.className=tocLink.className.split(" "+options.activeLinkClass).join("")}));var tocLis=document.querySelector(options.tocSelector).querySelectorAll("."+options.listItemClass);forEach.call(tocLis,(function(tocLi){tocLi.className=tocLi.className.split(" "+options.activeListItemClass).join("")}));var activeTocLink=document.querySelector(options.tocSelector).querySelector("."+options.linkClass+".node-name--"+topHeader.nodeName+'[href="'+options.basePath+"#"+topHeader.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/@])/g,"\\$1")+'"]');activeTocLink&&-1===activeTocLink.className.indexOf(options.activeLinkClass)&&(activeTocLink.className+=" "+options.activeLinkClass);var li=activeTocLink&&activeTocLink.parentNode;li&&-1===li.className.indexOf(options.activeListItemClass)&&(li.className+=" "+options.activeListItemClass);var tocLists=document.querySelector(options.tocSelector).querySelectorAll("."+options.listClass+"."+options.collapsibleClass);forEach.call(tocLists,(function(list){-1===list.className.indexOf(options.isCollapsedClass)&&(list.className+=" "+options.isCollapsedClass)})),activeTocLink&&activeTocLink.nextSibling&&-1!==activeTocLink.nextSibling.className.indexOf(options.isCollapsedClass)&&(activeTocLink.nextSibling.className=activeTocLink.nextSibling.className.split(" "+options.isCollapsedClass).join("")),removeCollapsedFromParents(activeTocLink&&activeTocLink.parentNode.parentNode)}}}}},"./node_modules/tocbot/src/js/default-options.js":function(module){module.exports={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,includeTitleTags:!1,onClick:function(e){},orderedList:!0,scrollContainer:null,skipRendering:!1,headingLabelCallback:!1,ignoreHiddenElements:!1,headingObjectCallback:null,basePath:"",disableTocScrollSync:!1}},"./node_modules/tocbot/src/js/index.js":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__,root;root=void 0!==__webpack_require__.g?__webpack_require__.g:this.window||this.global,__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_FACTORY__=function(root){"use strict";var buildHtml,parseContent,headingsArray,defaultOptions=__webpack_require__("./node_modules/tocbot/src/js/default-options.js"),options={},tocbot={},BuildHtml=__webpack_require__("./node_modules/tocbot/src/js/build-html.js"),ParseContent=__webpack_require__("./node_modules/tocbot/src/js/parse-content.js"),updateTocScroll=__webpack_require__("./node_modules/tocbot/src/js/update-toc-scroll.js"),supports=!!(root&&root.document&&root.document.querySelector&&root.addEventListener);if("undefined"!=typeof window||supports){var hasOwnProperty=Object.prototype.hasOwnProperty;return tocbot.destroy=function(){var tocElement=getTocElement(options);null!==tocElement&&(options.skipRendering||tocElement&&(tocElement.innerHTML=""),options.scrollContainer&&document.querySelector(options.scrollContainer)?(document.querySelector(options.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(options.scrollContainer).removeEventListener("resize",this._scrollListener,!1),buildHtml&&document.querySelector(options.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),buildHtml&&document.removeEventListener("click",this._clickListener,!1)))},tocbot.init=function(customOptions){if(supports){options=extend(defaultOptions,customOptions||{}),this.options=options,this.state={},options.scrollSmooth&&(options.duration=options.scrollSmoothDuration,options.offset=options.scrollSmoothOffset,tocbot.scrollSmooth=__webpack_require__("./node_modules/tocbot/src/js/scroll-smooth/index.js").initSmoothScrolling(options)),buildHtml=BuildHtml(options),parseContent=ParseContent(options),this._buildHtml=buildHtml,this._parseContent=parseContent,tocbot.destroy();var contentElement=getContentElement(options);if(null!==contentElement){var tocElement=getTocElement(options);if(null!==tocElement&&null!==(headingsArray=parseContent.selectHeadings(contentElement,options.headingSelector))){var nestedHeadings=parseContent.nestHeadingsArray(headingsArray).nest;options.skipRendering||buildHtml.render(tocElement,nestedHeadings),this._scrollListener=throttle((function(e){buildHtml.updateToc(headingsArray),!options.disableTocScrollSync&&updateTocScroll(options);var isTop=e&&e.target&&e.target.scrollingElement&&0===e.target.scrollingElement.scrollTop;(e&&(0===e.eventPhase||null===e.currentTarget)||isTop)&&(buildHtml.updateToc(headingsArray),options.scrollEndCallback&&options.scrollEndCallback(e))}),options.throttleTimeout),this._scrollListener(),options.scrollContainer&&document.querySelector(options.scrollContainer)?(document.querySelector(options.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(options.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var timeout=null;return this._clickListener=throttle((function(event){options.scrollSmooth&&buildHtml.disableTocAnimation(event),buildHtml.updateToc(headingsArray),timeout&&clearTimeout(timeout),timeout=setTimeout((function(){buildHtml.enableTocAnimation()}),options.scrollSmoothDuration)}),options.throttleTimeout),options.scrollContainer&&document.querySelector(options.scrollContainer)?document.querySelector(options.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}}}},tocbot.refresh=function(customOptions){tocbot.destroy(),tocbot.init(customOptions||this.options)},root.tocbot=tocbot,tocbot}function extend(){for(var target={},i=0;i<arguments.length;i++){var source=arguments[i];for(var key in source)hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}function throttle(fn,threshhold,scope){var last,deferTimer;return threshhold||(threshhold=250),function(){var context=scope||this,now=+new Date,args=arguments;last&&now<last+threshhold?(clearTimeout(deferTimer),deferTimer=setTimeout((function(){last=now,fn.apply(context,args)}),threshhold)):(last=now,fn.apply(context,args))}}function getContentElement(options){try{return options.contentElement||document.querySelector(options.contentSelector)}catch(e){return console.warn("Contents element not found: "+options.contentSelector),null}}function getTocElement(options){try{return options.tocElement||document.querySelector(options.tocSelector)}catch(e){return console.warn("TOC element not found: "+options.tocSelector),null}}}(root),void 0===(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof __WEBPACK_AMD_DEFINE_FACTORY__?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__)||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},"./node_modules/tocbot/src/js/parse-content.js":function(module){module.exports=function parseContent(options){var reduce=[].reduce;function getLastItem(array){return array[array.length-1]}function getHeadingLevel(heading){return+heading.nodeName.toUpperCase().replace("H","")}function getHeadingObject(heading){if(!(heading instanceof window.HTMLElement))return heading;if(options.ignoreHiddenElements&&(!heading.offsetHeight||!heading.offsetParent))return null;const headingLabel=heading.getAttribute("data-heading-label")||(options.headingLabelCallback?String(options.headingLabelCallback(heading.textContent)):heading.textContent.trim());var obj={id:heading.id,children:[],nodeName:heading.nodeName,headingLevel:getHeadingLevel(heading),textContent:headingLabel};return options.includeHtml&&(obj.childNodes=heading.childNodes),options.headingObjectCallback?options.headingObjectCallback(obj,heading):obj}return{nestHeadingsArray:function nestHeadingsArray(headingsArray){return reduce.call(headingsArray,(function reducer(prev,curr){var currentHeading=getHeadingObject(curr);return currentHeading&&function addNode(node,nest){for(var obj=getHeadingObject(node),level=obj.headingLevel,array=nest,lastItem=getLastItem(array),counter=level-(lastItem?lastItem.headingLevel:0);counter>0&&(!(lastItem=getLastItem(array))||level!==lastItem.headingLevel);)lastItem&&void 0!==lastItem.children&&(array=lastItem.children),counter--;return level>=options.collapseDepth&&(obj.isCollapsed=!0),array.push(obj),array}(currentHeading,prev.nest),prev}),{nest:[]})},selectHeadings:function selectHeadings(contentElement,headingSelector){var selectors=headingSelector;options.ignoreSelector&&(selectors=headingSelector.split(",").map((function mapSelectors(selector){return selector.trim()+":not("+options.ignoreSelector+")"})));try{return contentElement.querySelectorAll(selectors)}catch(e){return console.warn("Headers not found with selector: "+selectors),null}}}}},"./node_modules/tocbot/src/js/scroll-smooth/index.js":function(__unused_webpack_module,exports){exports.initSmoothScrolling=function initSmoothScrolling(options){var duration=options.duration,offset=options.offset,pageUrl=location.hash?stripHash(location.href):location.href;function stripHash(url){return url.slice(0,url.lastIndexOf("#"))}!function delegatedLinkHijacking(){document.body.addEventListener("click",(function onClick(e){!function isInPageLink(n){return"a"===n.tagName.toLowerCase()&&(n.hash.length>0||"#"===n.href.charAt(n.href.length-1))&&(stripHash(n.href)===pageUrl||stripHash(n.href)+"#"===pageUrl)}(e.target)||e.target.className.indexOf("no-smooth-scroll")>-1||"#"===e.target.href.charAt(e.target.href.length-2)&&"!"===e.target.href.charAt(e.target.href.length-1)||-1===e.target.className.indexOf(options.linkClass)||function jump(target,options){var timeStart,timeElapsed,start=window.pageYOffset,opt={duration:options.duration,offset:options.offset||0,callback:options.callback,easing:options.easing||easeInOutQuad},tgt=document.querySelector('[id="'+decodeURI(target).split("#").join("")+'"]')||document.querySelector('[id="'+target.split("#").join("")+'"]'),distance="string"==typeof target?opt.offset+(target?tgt&&tgt.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):target,duration="function"==typeof opt.duration?opt.duration(distance):opt.duration;function loop(time){timeElapsed=time-timeStart,window.scrollTo(0,opt.easing(timeElapsed,start,distance,duration)),timeElapsed<duration?requestAnimationFrame(loop):end()}function end(){window.scrollTo(0,start+distance),"function"==typeof opt.callback&&opt.callback()}function easeInOutQuad(t,b,c,d){return(t/=d/2)<1?c/2*t*t+b:-c/2*(--t*(t-2)-1)+b}requestAnimationFrame((function(time){timeStart=time,loop(time)}))}(e.target.hash,{duration:duration,offset:offset,callback:function(){!function setFocus(hash){var element=document.getElementById(hash.substring(1));element&&(/^(?:a|select|input|button|textarea)$/i.test(element.tagName)||(element.tabIndex=-1),element.focus())}(e.target.hash)}})}),!1)}()}},"./node_modules/tocbot/src/js/update-toc-scroll.js":function(module){module.exports=function updateTocScroll(options){var toc=document.querySelector(options.tocSelector);if(toc&&toc.scrollHeight>toc.clientHeight){var activeItem=toc.querySelector("."+options.activeListItemClass);activeItem&&(toc.scrollTop=activeItem.offsetTop)}}},"./node_modules/ts-dedent/esm/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.C=function dedent(templ){for(var values=[],_i=1;_i<arguments.length;_i++)values[_i-1]=arguments[_i];var strings=Array.from("string"==typeof templ?[templ]:templ);strings[strings.length-1]=strings[strings.length-1].replace(/\r?\n([\t ]*)$/,"");var indentLengths=strings.reduce((function(arr,str){var matches=str.match(/\n([\t ]+|(?!\s).)/g);return matches?arr.concat(matches.map((function(match){var _a,_b;return null!==(_b=null===(_a=match.match(/[\t ]/g))||void 0===_a?void 0:_a.length)&&void 0!==_b?_b:0}))):arr}),[]);if(indentLengths.length){var pattern_1=new RegExp("\n[\t ]{"+Math.min.apply(Math,indentLengths)+"}","g");strings=strings.map((function(str){return str.replace(pattern_1,"\n")}))}strings[0]=strings[0].replace(/^\r?\n/,"");var string=strings[0];return values.forEach((function(value,i){var endentations=string.match(/(?:^|\n)( *)$/),endentation=endentations?endentations[1]:"",indentedValue=value;"string"==typeof value&&value.includes("\n")&&(indentedValue=String(value).split("\n").map((function(str,i){return 0===i?str:""+endentation+str})).join("\n")),string+=indentedValue+strings[i+1]})),string}},"./node_modules/util-deprecate/browser.js":function(module,__unused_webpack_exports,__webpack_require__){function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}},"./node_modules/uuid-browser/lib/bytesToUuid.js":function(module){for(var byteToHex=[],i=0;i<256;++i)byteToHex[i]=(i+256).toString(16).substr(1);module.exports=function bytesToUuid(buf,offset){var i=offset||0,bth=byteToHex;return bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]+"-"+bth[buf[i++]]+bth[buf[i++]]+"-"+bth[buf[i++]]+bth[buf[i++]]+"-"+bth[buf[i++]]+bth[buf[i++]]+"-"+bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]}},"./node_modules/uuid-browser/lib/rng-browser.js":function(module,__unused_webpack_exports,__webpack_require__){var rng,crypto=void 0!==__webpack_require__.g&&(__webpack_require__.g.crypto||__webpack_require__.g.msCrypto);if(crypto&&crypto.getRandomValues){var rnds8=new Uint8Array(16);rng=function whatwgRNG(){return crypto.getRandomValues(rnds8),rnds8}}if(!rng){var rnds=new Array(16);rng=function(){for(var r,i=0;i<16;i++)0==(3&i)&&(r=4294967296*Math.random()),rnds[i]=r>>>((3&i)<<3)&255;return rnds}}module.exports=rng},"./node_modules/uuid-browser/v4.js":function(module,__unused_webpack_exports,__webpack_require__){var rng=__webpack_require__("./node_modules/uuid-browser/lib/rng-browser.js"),bytesToUuid=__webpack_require__("./node_modules/uuid-browser/lib/bytesToUuid.js");module.exports=function v4(options,buf,offset){var i=buf&&offset||0;"string"==typeof options&&(buf="binary"==options?new Array(16):null,options=null);var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf)for(var ii=0;ii<16;++ii)buf[i+ii]=rnds[ii];return buf||bytesToUuid(rnds)}}}]);