webpackJsonp([85],{

/***/ 1037:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1038);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(800)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./cropper.css", function() {
			var newContent = require("!!../../css-loader/index.js!./cropper.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1038:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "/*!\n * Cropper.js v1.5.7\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2020-05-23T05:22:57.283Z\n */\n\n.cropper-container {\n  direction: ltr;\n  font-size: 0;\n  line-height: 0;\n  position: relative;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.cropper-container img {\n  display: block;\n  height: 100%;\n  image-orientation: 0deg;\n  max-height: none !important;\n  max-width: none !important;\n  min-height: 0 !important;\n  min-width: 0 !important;\n  width: 100%;\n}\n\n.cropper-wrap-box,\n.cropper-canvas,\n.cropper-drag-box,\n.cropper-crop-box,\n.cropper-modal {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.cropper-wrap-box,\n.cropper-canvas {\n  overflow: hidden;\n}\n\n.cropper-drag-box {\n  background-color: #fff;\n  opacity: 0;\n}\n\n.cropper-modal {\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.cropper-view-box {\n  display: block;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n  overflow: hidden;\n  width: 100%;\n}\n\n.cropper-dashed {\n  border: 0 dashed #eee;\n  display: block;\n  opacity: 0.5;\n  position: absolute;\n}\n\n.cropper-dashed.dashed-h {\n  border-bottom-width: 1px;\n  border-top-width: 1px;\n  height: calc(100% / 3);\n  left: 0;\n  top: calc(100% / 3);\n  width: 100%;\n}\n\n.cropper-dashed.dashed-v {\n  border-left-width: 1px;\n  border-right-width: 1px;\n  height: 100%;\n  left: calc(100% / 3);\n  top: 0;\n  width: calc(100% / 3);\n}\n\n.cropper-center {\n  display: block;\n  height: 0;\n  left: 50%;\n  opacity: 0.75;\n  position: absolute;\n  top: 50%;\n  width: 0;\n}\n\n.cropper-center::before,\n.cropper-center::after {\n  background-color: #eee;\n  content: ' ';\n  display: block;\n  position: absolute;\n}\n\n.cropper-center::before {\n  height: 1px;\n  left: -3px;\n  top: 0;\n  width: 7px;\n}\n\n.cropper-center::after {\n  height: 7px;\n  left: 0;\n  top: -3px;\n  width: 1px;\n}\n\n.cropper-face,\n.cropper-line,\n.cropper-point {\n  display: block;\n  height: 100%;\n  opacity: 0.1;\n  position: absolute;\n  width: 100%;\n}\n\n.cropper-face {\n  background-color: #fff;\n  left: 0;\n  top: 0;\n}\n\n.cropper-line {\n  background-color: #39f;\n}\n\n.cropper-line.line-e {\n  cursor: ew-resize;\n  right: -3px;\n  top: 0;\n  width: 5px;\n}\n\n.cropper-line.line-n {\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n  top: -3px;\n}\n\n.cropper-line.line-w {\n  cursor: ew-resize;\n  left: -3px;\n  top: 0;\n  width: 5px;\n}\n\n.cropper-line.line-s {\n  bottom: -3px;\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n}\n\n.cropper-point {\n  background-color: #39f;\n  height: 5px;\n  opacity: 0.75;\n  width: 5px;\n}\n\n.cropper-point.point-e {\n  cursor: ew-resize;\n  margin-top: -3px;\n  right: -3px;\n  top: 50%;\n}\n\n.cropper-point.point-n {\n  cursor: ns-resize;\n  left: 50%;\n  margin-left: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-w {\n  cursor: ew-resize;\n  left: -3px;\n  margin-top: -3px;\n  top: 50%;\n}\n\n.cropper-point.point-s {\n  bottom: -3px;\n  cursor: s-resize;\n  left: 50%;\n  margin-left: -3px;\n}\n\n.cropper-point.point-ne {\n  cursor: nesw-resize;\n  right: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-nw {\n  cursor: nwse-resize;\n  left: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-sw {\n  bottom: -3px;\n  cursor: nesw-resize;\n  left: -3px;\n}\n\n.cropper-point.point-se {\n  bottom: -3px;\n  cursor: nwse-resize;\n  height: 20px;\n  opacity: 1;\n  right: -3px;\n  width: 20px;\n}\n\n@media (min-width: 768px) {\n  .cropper-point.point-se {\n    height: 15px;\n    width: 15px;\n  }\n}\n\n@media (min-width: 992px) {\n  .cropper-point.point-se {\n    height: 10px;\n    width: 10px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .cropper-point.point-se {\n    height: 5px;\n    opacity: 0.75;\n    width: 5px;\n  }\n}\n\n.cropper-point.point-se::before {\n  background-color: #39f;\n  bottom: -50%;\n  content: ' ';\n  display: block;\n  height: 200%;\n  opacity: 0;\n  position: absolute;\n  right: -50%;\n  width: 200%;\n}\n\n.cropper-invisible {\n  opacity: 0;\n}\n\n.cropper-bg {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');\n}\n\n.cropper-hide {\n  display: block;\n  height: 0;\n  position: absolute;\n  width: 0;\n}\n\n.cropper-hidden {\n  display: none !important;\n}\n\n.cropper-move {\n  cursor: move;\n}\n\n.cropper-crop {\n  cursor: crosshair;\n}\n\n.cropper-disabled .cropper-drag-box,\n.cropper-disabled .cropper-face,\n.cropper-disabled .cropper-line,\n.cropper-disabled .cropper-point {\n  cursor: not-allowed;\n}\n", ""]);

// exports


/***/ }),

/***/ 1047:
/***/ (function(module, exports) {

module.exports=function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=76)}([function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var i=n(53),r=n(14);e.exports=function(e){return i(r(e))}},function(e,t,n){e.exports=!n(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,n){var i=n(5),r=n(11);e.exports=n(3)?function(e,t,n){return i.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var i=n(7),r=n(30),a=n(23),o=Object.defineProperty;t.f=n(3)?Object.defineProperty:function(e,t,n){if(i(e),t=a(t,!0),i(n),r)try{return o(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var i=n(21)("wks"),r=n(12),a=n(0).Symbol,o="function"==typeof a;(e.exports=function(e){return i[e]||(i[e]=o&&a[e]||(o?a:r)("Symbol."+e))}).store=i},function(e,t,n){var i=n(9);e.exports=function(e){if(!i(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var i=n(35),r=n(15);e.exports=Object.keys||function(e){return i(e,r)}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var n=0,i=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+i).toString(36))}},function(e,t){var n=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){e.exports={}},function(e,t){e.exports=!0},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){var i=n(5).f,r=n(1),a=n(6)("toStringTag");e.exports=function(e,t,n){e&&!r(e=n?e:e.prototype,a)&&i(e,a,{configurable:!0,value:t})}},function(e,t,n){var i=n(21)("keys"),r=n(12);e.exports=function(e){return i[e]||(i[e]=r(e))}},function(e,t,n){var i=n(0),r=i["__core-js_shared__"]||(i["__core-js_shared__"]={});e.exports=function(e){return r[e]||(r[e]={})}},function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?i:n)(e)}},function(e,t,n){var i=n(9);e.exports=function(e,t){if(!i(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!i(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var i=n(0),r=n(13),a=n(17),o=n(25),s=n(5).f;e.exports=function(e){var t=r.Symbol||(r.Symbol=a?{}:i.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:o.f(e)})}},function(e,t,n){t.f=n(6)},function(e,t,n){"use strict";t.a={translations:{af:{language:"Afrikaans",months:{original:["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"],abbr:["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des"]},days:["So.","Ma.","Di.","Wo.","Do.","Vr.","Sa."]},ar:{language:"Arabic",rtl:!0,months:{original:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوڤمبر","ديسمبر"],abbr:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوڤمبر","ديسمبر"]},days:["أحد","إثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"]},bg:{language:"Bulgarian",months:{original:["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],abbr:["Ян","Фев","Мар","Апр","Май","Юни","Юли","Авг","Сеп","Окт","Ное","Дек"]},days:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"]},bs:{language:"Bosnian",months:{original:["Januar","Februar","Mart","April","Maj","Juni","Juli","Avgust","Septembar","Oktobar","Novembar","Decembar"],abbr:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"]},days:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"]},cs:{language:"Czech",months:{original:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"],abbr:["led","úno","bře","dub","kvě","čer","čec","srp","zář","říj","lis","pro"]},days:["ne","po","út","st","čt","pá","so"]},da:{language:"Danish",months:{original:["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],abbr:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"]},days:["Sø","Ma","Ti","On","To","Fr","Lø"]},de:{language:"German",months:{original:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],abbr:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]},days:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]},ee:{language:"Estonian",months:{original:["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"],abbr:["Jaan","Veebr","Märts","Apr","Mai","Juuni","Juuli","Aug","Sept","Okt","Nov","Dets"]},days:["P","E","T","K","N","R","L"]},el:{language:"Greek",months:{original:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάϊος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],abbr:["Ιαν","Φεβ","Μαρ","Απρ","Μαι","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"]},days:["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σατ"]},en:{language:"English",months:{original:["January","February","March","April","May","June","July","August","September","October","November","December"],abbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},es:{language:"Spanish",months:{original:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],abbr:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"]},days:["Dom","Lun","Mar","Mié","Jue","Vie","Sab"]},ca:{language:"Catalan",months:{original:["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],abbr:["Gen","Feb","Mar","Abr","Mai","Jun","Jul","Ago","Set","Oct","Nov","Des"]},days:["Diu","Dil","Dmr","Dmc","Dij","Div","Dis"]},fi:{language:"Finish",months:{original:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],abbr:["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"]},days:["su","ma","ti","ke","to","pe","la"]},fr:{language:"French",months:{original:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],abbr:["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Août","Sep","Oct","Nov","Déc"]},days:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"]},ge:{language:"Georgia",months:{original:["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"],abbr:["იან","თებ","მარ","აპრ","მაი","ივნ","ივლ","აგვ","სექ","ოქტ","ნოე","დეკ"]},days:["კვი","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"]},ja:{language:"Japanese",ymd:!0,months:{original:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],abbr:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},days:["日","月","火","水","木","金","土"]},he:{language:"Hebrew",rtl:!0,months:{original:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],abbr:["ינו","פבר","מרץ","אפר","מאי","יונ","יול","אוג","ספט","אוק","נוב","דצמ"]},days:["א","ב","ג","ד","ה","ו","ש"]},hu:{language:"Hungarian",ymd:!0,months:{original:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],abbr:["Jan","Febr","Márc","Ápr","Máj","Jún","Júl","Aug","Szept","Okt","Nov","Dec"]},days:["Vas","Hét","Ke","Sze","Csü","Pén","Szo"]},hr:{language:"Croatian",months:{original:["Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"],abbr:["Sij","Velj","Ožu","Tra","Svi","Lip","Srp","Kol","Ruj","Lis","Stu","Pro"]},days:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"]},id:{language:"Indonesian",months:{original:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],abbr:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"]},days:["Min","Sen","Sel","Rab","Kam","Jum","Sab"]},it:{language:"Italian",months:{original:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],abbr:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"]},days:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"]},is:{language:"Icelandic",months:{original:["Janúar","Febrúar","Mars","Apríl","Maí","Júní","Júlí","Ágúst","September","Október","Nóvember","Desember"],abbr:["Jan","Feb","Mars","Apr","Maí","Jún","Júl","Ágú","Sep","Okt","Nóv","Des"]},days:["Sun","Mán","Þri","Mið","Fim","Fös","Lau"]},fa:{language:"Persian",months:{original:["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],abbr:["فرو","ارد","خرد","تیر","مرد","شهر","مهر","آبا","آذر","دی","بهم","اسف"]},days:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"]},ko:{language:"Korean",ymd:!0,months:{original:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],abbr:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]},days:["일","월","화","수","목","금","토"]},lb:{language:"Luxembourgish",months:{original:["Januar","Februar","Mäerz","Abrëll","Mäi","Juni","Juli","August","September","Oktober","November","Dezember"],abbr:["Jan","Feb","Mäe","Abr","Mäi","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]},days:["So.","Mé.","Dë.","Më.","Do.","Fr.","Sa."]},lt:{language:"Lithuanian",ymd:!0,months:{original:["Sausis","Vasaris","Kovas","Balandis","Gegužė","Birželis","Liepa","Rugpjūtis","Rugsėjis","Spalis","Lapkritis","Gruodis"],abbr:["Sau","Vas","Kov","Bal","Geg","Bir","Lie","Rugp","Rugs","Spa","Lap","Gru"]},days:["Sek","Pir","Ant","Tre","Ket","Pen","Šeš"]},lv:{language:"Latvian",months:{original:["Janvāris","Februāris","Marts","Aprīlis","Maijs","Jūnijs","Jūlijs","Augusts","Septembris","Oktobris","Novembris","Decembris"],abbr:["Jan","Feb","Mar","Apr","Mai","Jūn","Jūl","Aug","Sep","Okt","Nov","Dec"]},days:["Sv","Pr","Ot","Tr","Ce","Pk","Se"]},mn:{language:"Mongolia",ymd:!0,months:{original:["1 дүгээр сар","2 дугаар сар","3 дугаар сар","4 дүгээр сар","5 дугаар сар","6 дугаар сар","7 дугаар сар","8 дугаар сар","9 дүгээр сар","10 дугаар сар","11 дүгээр сар","12 дугаар сар"],abbr:["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар"]},days:["Ня","Да","Мя","Лх","Пү","Ба","Бя"]},nl:{language:"Dutch",months:{original:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],abbr:["jan","feb","maa","apr","mei","jun","jul","aug","sep","okt","nov","dec"]},days:["zo","ma","di","wo","do","vr","za"]},"nb-no":{language:"Norwegian Bokmål",months:{original:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],abbr:["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Des"]},days:["Sø","Ma","Ti","On","To","Fr","Lø"]},pl:{language:"Polish",months:{original:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],abbr:["Sty","Lut","Mar","Kwi","Maj","Cze","Lip","Sie","Wrz","Paź","Lis","Gru"]},days:["Nd","Pn","Wt","Śr","Czw","Pt","Sob"]},"pt-br":{language:"Brazilian",months:{original:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],abbr:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]},days:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"]},ro:{language:"Romanian",months:{original:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],abbr:["Ian","Feb","Mar","Apr","Mai","Iun","Iul","Aug","Sep","Oct","Noi","Dec"]},days:["D","L","Ma","Mi","J","V","S"]},ru:{language:"Russian",months:{original:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],abbr:["Янв","Февр","Март","Апр","Май","Июнь","Июль","Авг","Сент","Окт","Нояб","Дек"]},days:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]},sv:{language:"Swedish",months:{original:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],abbr:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"]},days:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"]},sk:{language:"Slovakian",months:{original:["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"],abbr:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"]},days:["ne","po","ut","st","št","pi","so"]},"sl-si":{language:"Sloveian",months:{original:["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],abbr:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"]},days:["Ned","Pon","Tor","Sre","Čet","Pet","Sob"]},sr:{language:"Serbian",months:{original:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],abbr:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"]},days:["Ned","Pon","Uto","Sre","Čet","Pet","Sub"]},"sr-Cyrl":{language:"Serbian in Cyrillic script",months:{original:["Јануар","Фебруар","Март","Април","Мај","Јун","Јул","Август","Септембар","Октобар","Новембар","Децембар"],abbr:["Јан","Феб","Мар","Апр","Мај","Јун","Јул","Авг","Сеп","Окт","Нов","Дец"]},days:["Нед","Пон","Уто","Сре","Чет","Пет","Суб"]},th:{language:"Thai",months:{original:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],abbr:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."]},days:["อา","จ","อ","พ","พฤ","ศ","ส"]},tr:{language:"Turkish",months:{original:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],abbr:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"]},days:["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"]},uk:{language:"Ukraine",months:{original:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],abbr:["Січ","Лют","Бер","Квіт","Трав","Чер","Лип","Серп","Вер","Жовт","Лист","Груд"]},days:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"]},ur:{language:"Urdu",rtl:!0,months:{original:["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","سپتمبر","اکتوبر","نومبر","دسمبر"],abbr:["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","سپتمبر","اکتوبر","نومبر","دسمبر"]},days:["اتوار","پیر","منگل","بدھ","جمعرات","جمعہ","ہفتہ"]},vi:{language:"Vientnamese",months:{original:["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],abbr:["T 01","T 02","T 03","T 04","T 05","T 06","T 07","T 08","T 09","T 10","T 11","T 12"]},days:["CN","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"]},zh:{language:"Chinese",ymd:!0,months:{original:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],abbr:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},days:["日","一","二","三","四","五","六"]}}}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var i=n(9),r=n(0).document,a=i(r)&&i(r.createElement);e.exports=function(e){return a?r.createElement(e):{}}},function(e,t,n){var i=n(0),r=n(13),a=n(50),o=n(4),s=function(e,t,n){var l,u,c,d=e&s.F,h=e&s.G,p=e&s.S,f=e&s.P,g=e&s.B,b=e&s.W,m=h?r:r[t]||(r[t]={}),v=m.prototype,y=h?i:p?i[t]:(i[t]||{}).prototype;h&&(n=t);for(l in n)(u=!d&&y&&void 0!==y[l])&&l in m||(c=u?y[l]:n[l],m[l]=h&&"function"!=typeof y[l]?n[l]:g&&u?a(c,i):b&&y[l]==c?function(e){var t=function(t,n,i){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(c):f&&"function"==typeof c?a(Function.call,c):c,f&&((m.virtual||(m.virtual={}))[l]=c,e&s.R&&v&&!v[l]&&o(v,l,c)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},function(e,t,n){e.exports=!n(3)&&!n(8)(function(){return 7!=Object.defineProperty(n(28)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){"use strict";var i=n(17),r=n(29),a=n(36),o=n(4),s=n(1),l=n(16),u=n(55),c=n(19),d=n(62),h=n(6)("iterator"),p=!([].keys&&"next"in[].keys()),f=function(){return this};e.exports=function(e,t,n,g,b,m,v){u(n,t,g);var y,D,M,S=function(e){if(!p&&e in x)return x[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},w=t+" Iterator",_="values"==b,k=!1,x=e.prototype,O=x[h]||x["@@iterator"]||b&&x[b],J=O||S(b),F=b?_?S("entries"):J:void 0,A="Array"==t?x.entries||O:O;if(A&&(M=d(A.call(new e)))!==Object.prototype&&(c(M,w,!0),i||s(M,h)||o(M,h,f)),_&&O&&"values"!==O.name&&(k=!0,J=function(){return O.call(this)}),i&&!v||!p&&!k&&x[h]||o(x,h,J),l[t]=J,l[w]=f,b)if(y={values:_?J:S("values"),keys:m?J:S("keys"),entries:F},v)for(D in y)D in x||a(x,D,y[D]);else r(r.P+r.F*(p||k),t,y);return y}},function(e,t,n){var i=n(7),r=n(59),a=n(15),o=n(20)("IE_PROTO"),s=function(){},l=function(){var e,t=n(28)("iframe"),i=a.length;for(t.style.display="none",n(52).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),l=e.F;i--;)delete l.prototype[a[i]];return l()};e.exports=Object.create||function(e,t){var n;return null!==e?(s.prototype=i(e),n=new s,s.prototype=null,n[o]=e):n=l(),void 0===t?n:r(n,t)}},function(e,t,n){var i=n(35),r=n(15).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,r)}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var i=n(1),r=n(2),a=n(49)(!1),o=n(20)("IE_PROTO");e.exports=function(e,t){var n,s=r(e),l=0,u=[];for(n in s)n!=o&&i(s,n)&&u.push(n);for(;t.length>l;)i(s,n=t[l++])&&(~a(u,n)||u.push(n));return u}},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(41),r=n(26);t.default={props:{value:{validator:function(e){return null===e||e instanceof Date||"string"==typeof e||"number"==typeof e}},name:String,refName:String,id:String,format:{type:[String,Function],default:"dd MMM yyyy"},language:{type:String,default:"en"},openDate:{validator:function(e){return null===e||e instanceof Date||"string"==typeof e}},fullMonthName:Boolean,disabled:Object,highlighted:Object,placeholder:String,inline:Boolean,calendarClass:[String,Object],inputClass:[String,Object],wrapperClass:[String,Object],mondayFirst:Boolean,clearButton:Boolean,clearButtonIcon:String,calendarButton:Boolean,calendarButtonIcon:String,calendarButtonIconContent:String,bootstrapStyling:Boolean,initialView:String,disabledPicker:Boolean,required:Boolean,minimumView:{type:String,default:"day"},maximumView:{type:String,default:"year"}},data:function(){return{pageTimestamp:(this.openDate?new Date(this.openDate):new Date).setDate(1),selectedDate:null,showDayView:!1,showMonthView:!1,showYearView:!1,calendarHeight:0}},watch:{value:function(e){this.setValue(e)},openDate:function(){this.setPageDate()},initialView:function(){this.setInitialView()}},computed:{computedInitialView:function(){return this.initialView?this.initialView:this.minimumView},pageDate:function(){return new Date(this.pageTimestamp)},formattedValue:function(){return this.selectedDate?"function"==typeof this.format?this.format(this.selectedDate):i.a.formatDate(new Date(this.selectedDate),this.format,this.translation):null},translation:function(){return r.a.translations[this.language]},currMonthName:function(){var e=this.fullMonthName?this.translation.months.original:this.translation.months.abbr;return i.a.getMonthNameAbbr(this.pageDate.getMonth(),e)},currYear:function(){return this.pageDate.getFullYear()},blankDays:function(){var e=this.pageDate,t=new Date(e.getFullYear(),e.getMonth(),1,e.getHours(),e.getMinutes());return this.mondayFirst?t.getDay()>0?t.getDay()-1:6:t.getDay()},daysOfWeek:function(){if(this.mondayFirst){var e=this.translation.days.slice();return e.push(e.shift()),e}return this.translation.days},days:function(){for(var e=this.pageDate,t=[],n=new Date(e.getFullYear(),e.getMonth(),1,e.getHours(),e.getMinutes()),r=i.a.daysInMonth(n.getFullYear(),n.getMonth()),a=0;a<r;a++)t.push({date:n.getDate(),timestamp:n.getTime(),isSelected:this.isSelectedDate(n),isDisabled:this.isDisabledDate(n),isHighlighted:this.isHighlightedDate(n),isHighlightStart:this.isHighlightStart(n),isHighlightEnd:this.isHighlightEnd(n),isToday:n.toDateString()===(new Date).toDateString(),isWeekend:0===n.getDay()||6===n.getDay(),isSaturday:6===n.getDay(),isSunday:0===n.getDay()}),n.setDate(n.getDate()+1);return t},months:function(){for(var e=this.pageDate,t=[],n=new Date(e.getFullYear(),0,e.getDate(),e.getHours(),e.getMinutes()),r=0;r<12;r++)t.push({month:i.a.getMonthName(r,this.translation.months.original),timestamp:n.getTime(),isSelected:this.isSelectedMonth(n),isDisabled:this.isDisabledMonth(n)}),n.setMonth(n.getMonth()+1);return t},years:function(){for(var e=this.pageDate,t=[],n=new Date(10*Math.floor(e.getFullYear()/10),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes()),i=0;i<10;i++)t.push({year:n.getFullYear(),timestamp:n.getTime(),isSelected:this.isSelectedYear(n),isDisabled:this.isDisabledYear(n)}),n.setFullYear(n.getFullYear()+1);return t},calendarStyle:function(){return{position:this.isInline?"static":void 0}},isOpen:function(){return this.showDayView||this.showMonthView||this.showYearView},isInline:function(){return!!this.inline},isRtl:function(){return!0===this.translation.rtl},isYmd:function(){return!0===this.translation.ymd}},methods:{close:function(e){this.showDayView=this.showMonthView=this.showYearView=!1,this.isInline||(e&&this.$emit("closed"),document.removeEventListener("click",this.clickOutside,!1))},resetDefaultDate:function(){if(null===this.selectedDate)return void this.setPageDate();this.setPageDate(this.selectedDate)},showCalendar:function(){return!this.disabledPicker&&!this.isInline&&(this.isOpen?this.close(!0):(this.setInitialView(),void(this.isInline||this.$emit("opened"))))},setInitialView:function(){var e=this.computedInitialView;if(!this.allowedToShowView(e))throw new Error("initialView '"+this.initialView+"' cannot be rendered based on minimum '"+this.minimumView+"' and maximum '"+this.maximumView+"'");switch(e){case"year":this.showYearCalendar();break;case"month":this.showMonthCalendar();break;default:this.showDayCalendar()}},allowedToShowView:function(e){var t=["day","month","year"],n=t.indexOf(this.minimumView),i=t.indexOf(this.maximumView),r=t.indexOf(e);return r>=n&&r<=i},showDayCalendar:function(){if(!this.allowedToShowView("day"))return!1;this.close(),this.showDayView=!0,this.addOutsideClickListener()},showMonthCalendar:function(){if(!this.allowedToShowView("month"))return!1;this.close(),this.showMonthView=!0,this.addOutsideClickListener()},showYearCalendar:function(){if(!this.allowedToShowView("year"))return!1;this.close(),this.showYearView=!0,this.addOutsideClickListener()},addOutsideClickListener:function(){var e=this;this.isInline||setTimeout(function(){document.addEventListener("click",e.clickOutside,!1)},100)},setDate:function(e){var t=new Date(e);this.selectedDate=new Date(t),this.setPageDate(t),this.$emit("selected",new Date(t)),this.$emit("input",new Date(t))},clearDate:function(){this.selectedDate=null,this.$emit("selected",null),this.$emit("input",null),this.$emit("cleared")},selectDate:function(e){if(e.isDisabled)return this.$emit("selectedDisabled",e),!1;this.setDate(e.timestamp),this.isInline||this.close(!0)},selectMonth:function(e){if(e.isDisabled)return!1;var t=new Date(e.timestamp);this.allowedToShowView("day")?(this.setPageDate(t),this.$emit("changedMonth",e),this.showDayCalendar()):(this.setDate(t),this.isInline||this.close(!0))},selectYear:function(e){if(e.isDisabled)return!1;var t=new Date(e.timestamp);this.allowedToShowView("month")?(this.setPageDate(t),this.$emit("changedYear",e),this.showMonthCalendar()):(this.setDate(t),this.isInline||this.close(!0))},getPageDate:function(){return this.pageDate.getDate()},getPageMonth:function(){return this.pageDate.getMonth()},getPageYear:function(){return this.pageDate.getFullYear()},getPageDecade:function(){var e=10*Math.floor(this.pageDate.getFullYear()/10);return e+" - "+(e+9)},changeMonth:function(e){var t=this.pageDate;t.setMonth(t.getMonth()+e),this.setPageDate(t),this.$emit("changedMonth",t)},previousMonth:function(){this.previousMonthDisabled()||this.changeMonth(-1)},previousMonthDisabled:function(){if(!this.disabled||!this.disabled.to)return!1;var e=this.pageDate;return this.disabled.to.getMonth()>=e.getMonth()&&this.disabled.to.getFullYear()>=e.getFullYear()},nextMonth:function(){this.nextMonthDisabled()||this.changeMonth(1)},nextMonthDisabled:function(){if(!this.disabled||!this.disabled.from)return!1;var e=this.pageDate;return this.disabled.from.getMonth()<=e.getMonth()&&this.disabled.from.getFullYear()<=e.getFullYear()},changeYear:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"changedYear",n=this.pageDate;n.setYear(n.getFullYear()+e),this.setPageDate(n),this.$emit(t,n)},previousYear:function(){this.previousYearDisabled()||this.changeYear(-1)},previousYearDisabled:function(){return!(!this.disabled||!this.disabled.to)&&this.disabled.to.getFullYear()>=this.pageDate.getFullYear()},nextYear:function(){this.nextYearDisabled()||this.changeYear(1)},nextYearDisabled:function(){return!(!this.disabled||!this.disabled.from)&&this.disabled.from.getFullYear()<=this.pageDate.getFullYear()},previousDecade:function(){this.previousDecadeDisabled()||this.changeYear(-10,"changeDecade")},previousDecadeDisabled:function(){return!(!this.disabled||!this.disabled.to)&&10*Math.floor(this.disabled.to.getFullYear()/10)>=10*Math.floor(this.pageDate.getFullYear()/10)},nextDecade:function(){this.nextDecadeDisabled()||this.changeYear(10,"changeDecade")},nextDecadeDisabled:function(){return!(!this.disabled||!this.disabled.from)&&10*Math.ceil(this.disabled.from.getFullYear()/10)<=10*Math.ceil(this.pageDate.getFullYear()/10)},isSelectedDate:function(e){return this.selectedDate&&this.selectedDate.toDateString()===e.toDateString()},isDisabledDate:function(e){var t=!1;return void 0!==this.disabled&&(void 0!==this.disabled.dates&&this.disabled.dates.forEach(function(n){if(e.toDateString()===n.toDateString())return t=!0,!0}),void 0!==this.disabled.to&&this.disabled.to&&e<this.disabled.to&&(t=!0),void 0!==this.disabled.from&&this.disabled.from&&e>this.disabled.from&&(t=!0),void 0!==this.disabled.ranges&&this.disabled.ranges.forEach(function(n){if(void 0!==n.from&&n.from&&void 0!==n.to&&n.to&&e<n.to&&e>n.from)return t=!0,!0}),void 0!==this.disabled.days&&-1!==this.disabled.days.indexOf(e.getDay())&&(t=!0),void 0!==this.disabled.daysOfMonth&&-1!==this.disabled.daysOfMonth.indexOf(e.getDate())&&(t=!0),"function"==typeof this.disabled.customPredictor&&this.disabled.customPredictor(e)&&(t=!0),t)},isHighlightedDate:function(e){if((!this.highlighted||!this.highlighted.includeDisabled)&&this.isDisabledDate(e))return!1;var t=!1;return void 0!==this.highlighted&&(void 0!==this.highlighted.dates&&this.highlighted.dates.forEach(function(n){if(e.toDateString()===n.toDateString())return t=!0,!0}),this.isDefined(this.highlighted.from)&&this.isDefined(this.highlighted.to)&&(t=e>=this.highlighted.from&&e<=this.highlighted.to),void 0!==this.highlighted.days&&-1!==this.highlighted.days.indexOf(e.getDay())&&(t=!0),void 0!==this.highlighted.daysOfMonth&&-1!==this.highlighted.daysOfMonth.indexOf(e.getDate())&&(t=!0),"function"==typeof this.highlighted.customPredictor&&this.highlighted.customPredictor(e)&&(t=!0),t)},isHighlightStart:function(e){return this.isHighlightedDate(e)&&this.highlighted.from instanceof Date&&this.highlighted.from.getFullYear()===e.getFullYear()&&this.highlighted.from.getMonth()===e.getMonth()&&this.highlighted.from.getDate()===e.getDate()},isHighlightEnd:function(e){return this.isHighlightedDate(e)&&this.highlighted.to instanceof Date&&this.highlighted.to.getFullYear()===e.getFullYear()&&this.highlighted.to.getMonth()===e.getMonth()&&this.highlighted.to.getDate()===e.getDate()},isDefined:function(e){return void 0!==e&&e},isSelectedMonth:function(e){return this.selectedDate&&this.selectedDate.getFullYear()===e.getFullYear()&&this.selectedDate.getMonth()===e.getMonth()},isDisabledMonth:function(e){var t=!1;return void 0!==this.disabled&&(void 0!==this.disabled.to&&this.disabled.to&&(e.getMonth()<this.disabled.to.getMonth()&&e.getFullYear()<=this.disabled.to.getFullYear()||e.getFullYear()<this.disabled.to.getFullYear())&&(t=!0),void 0!==this.disabled.from&&this.disabled.from&&(this.disabled.from&&e.getMonth()>this.disabled.from.getMonth()&&e.getFullYear()>=this.disabled.from.getFullYear()||e.getFullYear()>this.disabled.from.getFullYear())&&(t=!0),t)},isSelectedYear:function(e){return this.selectedDate&&this.selectedDate.getFullYear()===e.getFullYear()},isDisabledYear:function(e){var t=!1;return!(void 0===this.disabled||!this.disabled)&&(void 0!==this.disabled.to&&this.disabled.to&&e.getFullYear()<this.disabled.to.getFullYear()&&(t=!0),void 0!==this.disabled.from&&this.disabled.from&&e.getFullYear()>this.disabled.from.getFullYear()&&(t=!0),t)},setValue:function(e){if("string"==typeof e||"number"==typeof e){var t=new Date(e);e=isNaN(t.valueOf())?null:t}if(!e)return this.setPageDate(),void(this.selectedDate=null);this.selectedDate=e,this.setPageDate(e)},setPageDate:function(e){e||(e=this.openDate?new Date(this.openDate):new Date),this.pageTimestamp=new Date(e).setDate(1)},clickOutside:function(e){if(this.$el&&!this.$el.contains(e.target)){if(this.isInline)return this.showDayCalendar();this.resetDefaultDate(),this.close(!0),document.removeEventListener("click",this.clickOutside,!1)}},dayClasses:function(e){return{selected:e.isSelected,disabled:e.isDisabled,highlighted:e.isHighlighted,today:e.isToday,weekend:e.isWeekend,sat:e.isSaturday,sun:e.isSunday,"highlight-start":e.isHighlightStart,"highlight-end":e.isHighlightEnd}},init:function(){this.value&&this.setValue(this.value),this.isInline&&this.setInitialView()}},mounted:function(){this.init()}}},function(e,t){e.exports=function(e,t,n,i,r){var a,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(a=e,o=e.default);var l="function"==typeof o?o.options:o;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),i&&(l._scopeId=i);var u;if(r?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=u):n&&(u=n),u){var c=l.functional,d=c?l.render:l.beforeCreate;c?l.render=function(e,t){return u.call(t),d(e,t)}:l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:a,exports:o,options:l}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vdp-datepicker",class:[e.wrapperClass,e.isRtl?"rtl":""]},[n("div",{class:{"input-group":e.bootstrapStyling}},[e.calendarButton?n("span",{staticClass:"vdp-datepicker__calendar-button",class:{"input-group-addon":e.bootstrapStyling},style:{"cursor:not-allowed;":e.disabledPicker},on:{click:e.showCalendar}},[n("i",{class:e.calendarButtonIcon},[e._v("\n        "+e._s(e.calendarButtonIconContent)+"\n        "),e.calendarButtonIcon?e._e():n("span",[e._v("…")])])]):e._e(),e._v(" "),n("input",{ref:e.refName,class:[e.inputClass,{"form-control":e.bootstrapStyling}],attrs:{type:e.inline?"hidden":"text",name:e.name,id:e.id,"open-date":e.openDate,placeholder:e.placeholder,"clear-button":e.clearButton,disabled:e.disabledPicker,required:e.required,readonly:""},domProps:{value:e.formattedValue},on:{click:e.showCalendar}}),e._v(" "),e.clearButton&&e.selectedDate?n("span",{staticClass:"vdp-datepicker__clear-button",class:{"input-group-addon":e.bootstrapStyling},on:{click:function(t){e.clearDate()}}},[n("i",{class:e.clearButtonIcon},[e.clearButtonIcon?e._e():n("span",[e._v("×")])])]):e._e()]),e._v(" "),e.allowedToShowView("day")?[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showDayView,expression:"showDayView"}],class:[e.calendarClass,"vdp-datepicker__calendar"],style:e.calendarStyle},[n("header",[n("span",{staticClass:"prev",class:{disabled:e.isRtl?e.nextMonthDisabled(e.pageTimestamp):e.previousMonthDisabled(e.pageTimestamp)},on:{click:function(t){e.isRtl?e.nextMonth():e.previousMonth()}}},[e._v("<")]),e._v(" "),n("span",{class:e.allowedToShowView("month")?"up":"",on:{click:e.showMonthCalendar}},[e._v(e._s(e.isYmd?e.currYear:e.currMonthName)+" "+e._s(e.isYmd?e.currMonthName:e.currYear))]),e._v(" "),n("span",{staticClass:"next",class:{disabled:e.isRtl?e.previousMonthDisabled(e.pageTimestamp):e.nextMonthDisabled(e.pageTimestamp)},on:{click:function(t){e.isRtl?e.previousMonth():e.nextMonth()}}},[e._v(">")])]),e._v(" "),n("div",{class:e.isRtl?"flex-rtl":""},[e._l(e.daysOfWeek,function(t){return n("span",{key:t.timestamp,staticClass:"cell day-header"},[e._v(e._s(t))])}),e._v(" "),e.blankDays>0?e._l(e.blankDays,function(e){return n("span",{key:e.timestamp,staticClass:"cell day blank"})}):e._e(),e._l(e.days,function(t){return n("span",{key:t.timestamp,staticClass:"cell day",class:e.dayClasses(t),attrs:{"track-by":"timestamp"},on:{click:function(n){e.selectDate(t)}}},[e._v(e._s(t.date))])})],2)])]:e._e(),e._v(" "),e.allowedToShowView("month")?[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showMonthView,expression:"showMonthView"}],class:[e.calendarClass,"vdp-datepicker__calendar"],style:e.calendarStyle},[n("header",[n("span",{staticClass:"prev",class:{disabled:e.previousYearDisabled(e.pageTimestamp)},on:{click:e.previousYear}},[e._v("<")]),e._v(" "),n("span",{class:e.allowedToShowView("year")?"up":"",on:{click:e.showYearCalendar}},[e._v(e._s(e.getPageYear()))]),e._v(" "),n("span",{staticClass:"next",class:{disabled:e.nextYearDisabled(e.pageTimestamp)},on:{click:e.nextYear}},[e._v(">")])]),e._v(" "),e._l(e.months,function(t){return n("span",{key:t.timestamp,staticClass:"cell month",class:{selected:t.isSelected,disabled:t.isDisabled},attrs:{"track-by":"timestamp"},on:{click:function(n){n.stopPropagation(),e.selectMonth(t)}}},[e._v(e._s(t.month))])})],2)]:e._e(),e._v(" "),e.allowedToShowView("year")?[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showYearView,expression:"showYearView"}],class:[e.calendarClass,"vdp-datepicker__calendar"],style:e.calendarStyle},[n("header",[n("span",{staticClass:"prev",class:{disabled:e.previousDecadeDisabled(e.pageTimestamp)},on:{click:e.previousDecade}},[e._v("<")]),e._v(" "),n("span",[e._v(e._s(e.getPageDecade()))]),e._v(" "),n("span",{staticClass:"next",class:{disabled:e.nextMonthDisabled(e.pageTimestamp)},on:{click:e.nextDecade}},[e._v(">")])]),e._v(" "),e._l(e.years,function(t){return n("span",{key:t.timestamp,staticClass:"cell year",class:{selected:t.isSelected,disabled:t.isDisabled},attrs:{"track-by":"timestamp"},on:{click:function(n){n.stopPropagation(),e.selectYear(t)}}},[e._v(e._s(t.year))])})],2)]:e._e()],2)},staticRenderFns:[]}},function(e,t,n){var i=n(74);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(77)("7da62ad4",i,!0)},function(e,t,n){"use strict";var i=n(44),r=n.n(i),a=n(26);t.a={isValidDate:function(e){return"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())},getDayNameAbbr:function(e,t){if("object"!==(void 0===e?"undefined":r()(e)))throw TypeError("Invalid Type");return t[e.getDay()]},getMonthName:function(e,t){if(!t)throw Error("missing 2nd parameter Months array");if("object"===(void 0===e?"undefined":r()(e)))return t[e.getMonth()];if("number"==typeof e)return t[e];throw TypeError("Invalid type")},getMonthNameAbbr:function(e,t){if(!t)throw Error("missing 2nd paramter Months array");if("object"===(void 0===e?"undefined":r()(e)))return t[e.getMonth()];if("number"==typeof e)return t[e];throw TypeError("Invalid type")},daysInMonth:function(e,t){return/8|3|5|10/.test(t)?30:1===t?(e%4||!(e%100))&&e%400?28:29:31},getNthSuffix:function(e){switch(e){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th"}},formatDate:function(e,t,n){n=n||a.a.translations.en;var i=e.getFullYear(),r=e.getMonth()+1,o=e.getDate();return t.replace(/dd/,("0"+o).slice(-2)).replace(/d/,o).replace(/yyyy/,i).replace(/yy/,String(i).slice(2)).replace(/MMMM/,this.getMonthName(e.getMonth(),n.months.original)).replace(/MMM/,this.getMonthNameAbbr(e.getMonth(),n.months.abbr)).replace(/MM/,("0"+r).slice(-2)).replace(/M(?!a|ä|e)/,r).replace(/su/,this.getNthSuffix(e.getDate())).replace(/D(?!e|é|i)/,this.getDayNameAbbr(e,n.days))},createDateArray:function(e,t){for(var n=[];e<=t;)n.push(new Date(e)),e=new Date(e).setDate(new Date(e).getDate()+1);return n}}},function(e,t,n){e.exports={default:n(45),__esModule:!0}},function(e,t,n){e.exports={default:n(46),__esModule:!0}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(43),a=i(r),o=n(42),s=i(o),l="function"==typeof s.default&&"symbol"==typeof a.default?function(e){return typeof e}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":typeof e};t.default="function"==typeof s.default&&"symbol"===l(a.default)?function(e){return void 0===e?"undefined":l(e)}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":void 0===e?"undefined":l(e)}},function(e,t,n){n(70),n(68),n(71),n(72),e.exports=n(13).Symbol},function(e,t,n){n(69),n(73),e.exports=n(25).f("iterator")},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t){e.exports=function(){}},function(e,t,n){var i=n(2),r=n(65),a=n(64);e.exports=function(e){return function(t,n,o){var s,l=i(t),u=r(l.length),c=a(o,u);if(e&&n!=n){for(;u>c;)if((s=l[c++])!=s)return!0}else for(;u>c;c++)if((e||c in l)&&l[c]===n)return e||c||0;return!e&&-1}}},function(e,t,n){var i=n(47);e.exports=function(e,t,n){if(i(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,r){return e.call(t,n,i,r)}}return function(){return e.apply(t,arguments)}}},function(e,t,n){var i=n(10),r=n(34),a=n(18);e.exports=function(e){var t=i(e),n=r.f;if(n)for(var o,s=n(e),l=a.f,u=0;s.length>u;)l.call(e,o=s[u++])&&t.push(o);return t}},function(e,t,n){e.exports=n(0).document&&document.documentElement},function(e,t,n){var i=n(27);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==i(e)?e.split(""):Object(e)}},function(e,t,n){var i=n(27);e.exports=Array.isArray||function(e){return"Array"==i(e)}},function(e,t,n){"use strict";var i=n(32),r=n(11),a=n(19),o={};n(4)(o,n(6)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=i(o,{next:r(1,n)}),a(e,t+" Iterator")}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){var i=n(10),r=n(2);e.exports=function(e,t){for(var n,a=r(e),o=i(a),s=o.length,l=0;s>l;)if(a[n=o[l++]]===t)return n}},function(e,t,n){var i=n(12)("meta"),r=n(9),a=n(1),o=n(5).f,s=0,l=Object.isExtensible||function(){return!0},u=!n(8)(function(){return l(Object.preventExtensions({}))}),c=function(e){o(e,i,{value:{i:"O"+ ++s,w:{}}})},d=function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,i)){if(!l(e))return"F";if(!t)return"E";c(e)}return e[i].i},h=function(e,t){if(!a(e,i)){if(!l(e))return!0;if(!t)return!1;c(e)}return e[i].w},p=function(e){return u&&f.NEED&&l(e)&&!a(e,i)&&c(e),e},f=e.exports={KEY:i,NEED:!1,fastKey:d,getWeak:h,onFreeze:p}},function(e,t,n){var i=n(5),r=n(7),a=n(10);e.exports=n(3)?Object.defineProperties:function(e,t){r(e);for(var n,o=a(t),s=o.length,l=0;s>l;)i.f(e,n=o[l++],t[n]);return e}},function(e,t,n){var i=n(18),r=n(11),a=n(2),o=n(23),s=n(1),l=n(30),u=Object.getOwnPropertyDescriptor;t.f=n(3)?u:function(e,t){if(e=a(e),t=o(t,!0),l)try{return u(e,t)}catch(e){}if(s(e,t))return r(!i.f.call(e,t),e[t])}},function(e,t,n){var i=n(2),r=n(33).f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return r(e)}catch(e){return o.slice()}};e.exports.f=function(e){return o&&"[object Window]"==a.call(e)?s(e):r(i(e))}},function(e,t,n){var i=n(1),r=n(66),a=n(20)("IE_PROTO"),o=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=r(e),i(e,a)?e[a]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?o:null}},function(e,t,n){var i=n(22),r=n(14);e.exports=function(e){return function(t,n){var a,o,s=String(r(t)),l=i(n),u=s.length;return l<0||l>=u?e?"":void 0:(a=s.charCodeAt(l),a<55296||a>56319||l+1===u||(o=s.charCodeAt(l+1))<56320||o>57343?e?s.charAt(l):a:e?s.slice(l,l+2):o-56320+(a-55296<<10)+65536)}}},function(e,t,n){var i=n(22),r=Math.max,a=Math.min;e.exports=function(e,t){return e=i(e),e<0?r(e+t,0):a(e,t)}},function(e,t,n){var i=n(22),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}},function(e,t,n){var i=n(14);e.exports=function(e){return Object(i(e))}},function(e,t,n){"use strict";var i=n(48),r=n(56),a=n(16),o=n(2);e.exports=n(31)(Array,"Array",function(e,t){this._t=o(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,r(1)):"keys"==t?r(0,n):"values"==t?r(0,e[n]):r(0,[n,e[n]])},"values"),a.Arguments=a.Array,i("keys"),i("values"),i("entries")},function(e,t){},function(e,t,n){"use strict";var i=n(63)(!0);n(31)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=i(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){"use strict";var i=n(0),r=n(1),a=n(3),o=n(29),s=n(36),l=n(58).KEY,u=n(8),c=n(21),d=n(19),h=n(12),p=n(6),f=n(25),g=n(24),b=n(57),m=n(51),v=n(54),y=n(7),D=n(2),M=n(23),S=n(11),w=n(32),_=n(61),k=n(60),x=n(5),O=n(10),J=k.f,F=x.f,A=_.f,j=i.Symbol,T=i.JSON,N=T&&T.stringify,Y=p("_hidden"),C=p("toPrimitive"),P={}.propertyIsEnumerable,V=c("symbol-registry"),E=c("symbols"),I=c("op-symbols"),L=Object.prototype,z="function"==typeof j,B=i.QObject,R=!B||!B.prototype||!B.prototype.findChild,H=a&&u(function(){return 7!=w(F({},"a",{get:function(){return F(this,"a",{value:7}).a}})).a})?function(e,t,n){var i=J(L,t);i&&delete L[t],F(e,t,n),i&&e!==L&&F(L,t,i)}:F,G=function(e){var t=E[e]=w(j.prototype);return t._k=e,t},$=z&&"symbol"==typeof j.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof j},U=function(e,t,n){return e===L&&U(I,t,n),y(e),t=M(t,!0),y(n),r(E,t)?(n.enumerable?(r(e,Y)&&e[Y][t]&&(e[Y][t]=!1),n=w(n,{enumerable:S(0,!1)})):(r(e,Y)||F(e,Y,S(1,{})),e[Y][t]=!0),H(e,t,n)):F(e,t,n)},K=function(e,t){y(e);for(var n,i=m(t=D(t)),r=0,a=i.length;a>r;)U(e,n=i[r++],t[n]);return e},W=function(e,t){return void 0===t?w(e):K(w(e),t)},q=function(e){var t=P.call(this,e=M(e,!0));return!(this===L&&r(E,e)&&!r(I,e))&&(!(t||!r(this,e)||!r(E,e)||r(this,Y)&&this[Y][e])||t)},X=function(e,t){if(e=D(e),t=M(t,!0),e!==L||!r(E,t)||r(I,t)){var n=J(e,t);return!n||!r(E,t)||r(e,Y)&&e[Y][t]||(n.enumerable=!0),n}},Q=function(e){for(var t,n=A(D(e)),i=[],a=0;n.length>a;)r(E,t=n[a++])||t==Y||t==l||i.push(t);return i},Z=function(e){for(var t,n=e===L,i=A(n?I:D(e)),a=[],o=0;i.length>o;)!r(E,t=i[o++])||n&&!r(L,t)||a.push(E[t]);return a};z||(j=function(){if(this instanceof j)throw TypeError("Symbol is not a constructor!");var e=h(arguments.length>0?arguments[0]:void 0),t=function(n){this===L&&t.call(I,n),r(this,Y)&&r(this[Y],e)&&(this[Y][e]=!1),H(this,e,S(1,n))};return a&&R&&H(L,e,{configurable:!0,set:t}),G(e)},s(j.prototype,"toString",function(){return this._k}),k.f=X,x.f=U,n(33).f=_.f=Q,n(18).f=q,n(34).f=Z,a&&!n(17)&&s(L,"propertyIsEnumerable",q,!0),f.f=function(e){return G(p(e))}),o(o.G+o.W+o.F*!z,{Symbol:j});for(var ee="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),te=0;ee.length>te;)p(ee[te++]);for(var ee=O(p.store),te=0;ee.length>te;)g(ee[te++]);o(o.S+o.F*!z,"Symbol",{for:function(e){return r(V,e+="")?V[e]:V[e]=j(e)},keyFor:function(e){if($(e))return b(V,e);throw TypeError(e+" is not a symbol!")},useSetter:function(){R=!0},useSimple:function(){R=!1}}),o(o.S+o.F*!z,"Object",{create:W,defineProperty:U,defineProperties:K,getOwnPropertyDescriptor:X,getOwnPropertyNames:Q,getOwnPropertySymbols:Z}),T&&o(o.S+o.F*(!z||u(function(){var e=j();return"[null]"!=N([e])||"{}"!=N({a:e})||"{}"!=N(Object(e))})),"JSON",{stringify:function(e){if(void 0!==e&&!$(e)){for(var t,n,i=[e],r=1;arguments.length>r;)i.push(arguments[r++]);return t=i[1],"function"==typeof t&&(n=t),!n&&v(t)||(t=function(e,t){if(n&&(t=n.call(this,e,t)),!$(t))return t}),i[1]=t,N.apply(T,i)}}}),j.prototype[C]||n(4)(j.prototype,C,j.prototype.valueOf),d(j,"Symbol"),d(Math,"Math",!0),d(i.JSON,"JSON",!0)},function(e,t,n){n(24)("asyncIterator")},function(e,t,n){n(24)("observable")},function(e,t,n){n(67);for(var i=n(0),r=n(4),a=n(16),o=n(6)("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],l=0;l<5;l++){var u=s[l],c=i[u],d=c&&c.prototype;d&&!d[o]&&r(d,o,u),a[u]=a.Array}},function(e,t,n){t=e.exports=n(75)(!1),t.push([e.i,'.rtl{direction:rtl}.vdp-datepicker{position:relative;text-align:left}.vdp-datepicker *{box-sizing:border-box}.vdp-datepicker__calendar{position:absolute;z-index:100;background:#fff;width:300px;border:1px solid #ccc}.vdp-datepicker__calendar header{display:block;line-height:40px}.vdp-datepicker__calendar header span{display:inline-block;text-align:center;width:71.42857142857143%;float:left}.vdp-datepicker__calendar header .next,.vdp-datepicker__calendar header .prev{width:14.285714285714286%;float:left;text-indent:-10000px;position:relative}.vdp-datepicker__calendar header .next:after,.vdp-datepicker__calendar header .prev:after{content:"";position:absolute;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);border:6px solid transparent}.vdp-datepicker__calendar header .prev:after{border-right:10px solid #000;margin-left:-5px}.vdp-datepicker__calendar header .prev.disabled:after{border-right:10px solid #ddd}.vdp-datepicker__calendar header .next:after{border-left:10px solid #000;margin-left:5px}.vdp-datepicker__calendar header .next.disabled:after{border-left:10px solid #ddd}.vdp-datepicker__calendar header .next:not(.disabled),.vdp-datepicker__calendar header .prev:not(.disabled),.vdp-datepicker__calendar header .up:not(.disabled){cursor:pointer}.vdp-datepicker__calendar header .next:not(.disabled):hover,.vdp-datepicker__calendar header .prev:not(.disabled):hover,.vdp-datepicker__calendar header .up:not(.disabled):hover{background:#eee}.vdp-datepicker__calendar .disabled{color:#ddd;cursor:default}.vdp-datepicker__calendar .flex-rtl{display:-webkit-box;display:-ms-flexbox;display:flex;width:inherit;-ms-flex-wrap:wrap;flex-wrap:wrap}.vdp-datepicker__calendar .cell{display:inline-block;padding:0 5px;width:14.285714285714286%;height:40px;line-height:40px;text-align:center;vertical-align:middle;border:1px solid transparent}.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day,.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month,.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year{cursor:pointer}.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover{border:1px solid #4bd}.vdp-datepicker__calendar .cell.selected,.vdp-datepicker__calendar .cell.selected.highlighted,.vdp-datepicker__calendar .cell.selected:hover{background:#4bd}.vdp-datepicker__calendar .cell.highlighted{background:#cae5ed}.vdp-datepicker__calendar .cell.highlighted.disabled{color:#a3a3a3}.vdp-datepicker__calendar .cell.grey{color:#888}.vdp-datepicker__calendar .cell.grey:hover{background:inherit}.vdp-datepicker__calendar .cell.day-header{font-size:75%;white-space:no-wrap;cursor:inherit}.vdp-datepicker__calendar .cell.day-header:hover{background:inherit}.vdp-datepicker__calendar .month,.vdp-datepicker__calendar .year{width:33.333%}.vdp-datepicker__calendar-button,.vdp-datepicker__clear-button{cursor:pointer;font-style:normal}.vdp-datepicker__calendar-button.disabled,.vdp-datepicker__clear-button.disabled{color:#999;cursor:default}',""])},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=i(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=n(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(i[a]=!0)}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){function i(e){n(40)}var r=n(38)(n(37),n(39),i,null,null);e.exports=r.exports},function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=c[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(a(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var o=[],r=0;r<n.parts.length;r++)o.push(a(n.parts[r]));c[n.id]={id:n.id,refs:1,parts:o}}}}function r(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function a(e){var t,n,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(f)return g;i.parentNode.removeChild(i)}if(b){var a=p++;i=h||(h=r()),t=o.bind(null,i,a,!1),n=o.bind(null,i,a,!0)}else i=r(),t=s.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function o(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=m(t,r);else{var a=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function s(e,t){var n=t.css,i=t.media,r=t.sourceMap;if(i&&e.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(78),c={},d=l&&(document.head||document.getElementsByTagName("head")[0]),h=null,p=0,f=!1,g=function(){},b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){f=n;var r=u(e,t);return i(r),function(t){for(var n=[],a=0;a<r.length;a++){var o=r[a],s=c[o.id];s.refs--,n.push(s)}t?(r=u(e,t),i(r)):r=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete c[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],i={},r=0;r<t.length;r++){var a=t[r],o=a[0],s=a[1],l=a[2],u=a[3],c={id:e+":"+r,css:s,media:l,sourceMap:u};i[o]?i[o].parts.push(c):n.push(i[o]={id:o,parts:[c]})}return n}}]);

/***/ }),

/***/ 1659:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1660);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("5dfc6015", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1965b309\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit-question.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1965b309\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit-question.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1660:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n.custom-select{\n    background: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 1661:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1662);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("a640e29a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1965b309\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./edit-question.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1965b309\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./edit-question.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1662:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n.datatable-material[data-v-1965b309]{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    width: 100%;\n    margin: 30px 0;\n    overflow: unset;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\n    border-radius: 6px;\n    background: #fff;\n    font-family: \"Helvetica Neue\", Roboto, Arial, \"Droid Sans\", sans-serif;\n    font-size: 13px;\n    font-weight: 500;\n    color: #333333;\n    border: none;\n}\n.topic-title[data-v-1965b309]{\n    width: 25%;\n}\n.question-num[data-v-1965b309]{\n    width: 45%;\n}\n.card-header-icon[data-v-1965b309]{\n    margin-top: -20px;\n}\n#topic-area[data-v-1965b309]{\n    width: 100%;\n}\n.audio[data-v-1965b309]{\n    width: 50%;\n}\n.r-content[data-v-1965b309]{\n    width: 100%;\n}\n.question-available[data-v-1965b309]{\n    display: flex;\n}\n.add-translation[data-v-1965b309]{\n    text-align: right;\n}\n.r-content[data-v-1965b309]{\n    border: 1px solid gray;\n    border-radius: 3px;\n    padding: 6px 12px;\n}\n.form-control[data-v-1965b309]:read-only {\n    background-image: none;\n}\nselect[data-v-1965b309], select.form-control[data-v-1965b309] {\n    -moz-appearance: none;\n    -webkit-appearance: auto;\n}\n#modal-xl .modal-dialog modal-xl[data-v-1965b309]{\n    display: initial !important;\n}\n.upload-question-image[data-v-1965b309]{\n    margin-top: 26px;\n}\n.form-control[data-v-1965b309], .is-focused .form-control[data-v-1965b309] {\n    background-image: none;\n}\n.close-translation[data-v-1965b309]{\n    width: 30px;\n    padding: 8px;\n    height: 30px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1663:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1664);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("645589d2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1965b309\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=2!./edit-question.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1965b309\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=2!./edit-question.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1664:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n.custom-control-indicator{\n    margin-right: 5px;\n}\n.close-trans{\n    text-align: right;\n    margin-top: 30px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_cropperjs__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_cropperjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_cropperjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cropperjs_dist_cropper_css__ = __webpack_require__(1037);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cropperjs_dist_cropper_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cropperjs_dist_cropper_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_form__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_validations_validations_js__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuejs_datepicker__ = __webpack_require__(1047);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuejs_datepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vuejs_datepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mini_toastr__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_admin_api_service__ = __webpack_require__(807);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









__WEBPACK_IMPORTED_MODULE_6_mini_toastr__["a" /* default */].init();

__WEBPACK_IMPORTED_MODULE_7__common_admin_api_service__["a" /* default */].init();
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vue_form___default.a, __WEBPACK_IMPORTED_MODULE_4_src_validations_validations_js__["a" /* default */]);
/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        VueCropper: __WEBPACK_IMPORTED_MODULE_0_vue_cropperjs___default.a
    },
    name: "edit-question",
    data: function data() {
        return {
            imageSrc: "",
            croppedImageSrc: "",
            counter: 1,
            AdminPassCodeShower: false,
            value: '',
            formstate: {},
            model: {
                QuestionTransData: [],
                selected: '',
                options: [{ item: 'isCommon', name: 'Common' }, { item: 'isSpecific', name: 'Specific' }],

                question_available: '',
                picked: 'one',
                questionData: {},
                questionId: this.$route.params.question_id,
                studentId: "",
                password: "",
                repeatPassword: "",
                adminPassCode: "",
                first_name: "",
                last_name: "",
                email: "",
                dob: "",
                nationality: "",
                emirates_id_details: "",
                passport_details: "",
                profile_image: "",

                TopicArea: '',
                TopicAreaData: [],
                category: '1',
                CategoryData: [],
                language: '',
                languageData: []
            }
        };
    },
    methods: {
        question_available: function question_available($available) {
            console.log('question_available', $available);
            this.model.question_available = $available;
        },
        addTranslation: function addTranslation() {
            $(".add-translation-content").append('\n                    <div class="close-trans">\n                        <button class="btn btn-danger btn-sm close-translation"><li class="material-icons">close</li></button>\n                    </div>\n                    <div>\n                        <label>Enter your question here....</label>\n                        <b-form-textarea\n                            v-model=""\n                            required\n                            size="lg"\n                            placeholder=""\n                            rows="5"\n                            class="r-content"\n                            ref = "question"\n                        ></b-form-textarea>\n                    </div>\n                    <div>\n                        <label>Question Attributes</label>\n                        <table class="table table-striped">\n                        <tbody>\n                        <tr>\n                            <td>\n                                Audio\n                            </td>\n                            <td>\n                                <label>Choose new audio:</label>\n                                <input type="file">\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                Choose Language\n                            </td>\n                            <td>\n\n                            </td>\n                        </tr>\n                        </tbody>\n                    </div>\n                    <table class="table table-striped">\n                        <tbody>\n                        <tr>\n                            <td>\n                                <input type="text" ref="answer1">\n                            </td>\n                            <td>\n                                <label>Choose new audio:</label>\n                                <input type="file">\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <input type="text" ref="answer1">\n                            </td>\n                            <td>\n                                <label>Choose new audio:</label>\n                                <input type="file">\n                            </td>\n                        </tr>\n                        <tr>\n\n                            <td>\n                                <input type="text" ref="answer1">\n                            </td>\n                            <td>\n                                <label>Choose new audio:</label>\n                                <input type="file">\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>');
        },
        CancelCropImage: function CancelCropImage() {
            this.croppedImageSrc = '';
        },

        setImage: function setImage(e) {
            var _this = this;

            var file = e.target.files[0];
            if (!file.type.includes('image/')) {
                alert('Please select an image file');
                return;
            }
            if (typeof FileReader === 'function') {
                var reader = new FileReader();
                reader.onload = function (event) {
                    _this.imageSrc = event.target.result;

                    // Rebuild cropperjs with the updated source
                    _this.$refs.cropper.replace(event.target.result);
                };
                reader.readAsDataURL(file);
            } else {
                alert('Sorry, FileReader API not supported');
            }
        },
        cropImage: function cropImage() {

            // Get image data for post processing, e.g. upload or setting image src
            this.croppedImageSrc = this.$refs.cropper.getCroppedCanvas().toDataURL();
        }
    },
    created: function created() {
        var _this2 = this;

        __WEBPACK_IMPORTED_MODULE_7__common_admin_api_service__["a" /* default */].post('GetQuestionTransData', this.model).then(function (result) {
            var data = result.data;
            if (data.success) {
                console.log('GetQuestionTransData', data.transData);
                _this2.model.QuestionTransData = data.transData;
                console.log('000000000000000', _this2.model.QuestionTransData);
            } else console.log('error', data);
        }, function (error) {

            console.log('error');
        });
        __WEBPACK_IMPORTED_MODULE_7__common_admin_api_service__["a" /* default */].post('GetQuestionData', this.model).then(function (result) {
            var data = result.data;
            if (data.success) {
                // this.getData = data;
                console.log('questionData', data);
                console.log('--------------', data.questionData.question);
                _this2.model.questionData = data.questionData[0];
                if (_this2.model.questionData.isCommon == 1) {
                    _this2.model.selected = 'isCommon';
                }
                if (_this2.model.questionData.isCommon == 0) {
                    _this2.model.selected = 'isSpecific';
                }
                // this.model.CategoryData = data.CategoryData;
            }
        }, function (error) {
            console.log('error');
        });
        __WEBPACK_IMPORTED_MODULE_7__common_admin_api_service__["a" /* default */].post('GetTopicArea').then(function (result) {
            var data = result.data;
            if (data.success) {
                _this2.getData = data;
                console.log('GetTopicArea', data);
                _this2.model.TopicAreaData = data.topicAreaData;
            }
        }, function (error) {
            console.log('error');
        });
        __WEBPACK_IMPORTED_MODULE_7__common_admin_api_service__["a" /* default */].post('GetCategory').then(function (result) {
            var data = result.data;
            if (data.success) {
                _this2.getData = data;
                console.log('CategoryData', data.CategoryData);
                _this2.model.CategoryData = data.CategoryData;
            }
        }, function (error) {
            console.log('error');
        });
        __WEBPACK_IMPORTED_MODULE_7__common_admin_api_service__["a" /* default */].post('getLanguage').then(function (result) {
            var data = result.data;
            if (data.success) {
                _this2.getData = data;
                console.log('languageData', data.languageData);
                _this2.model.languageData = data.languageData;
            }
        }, function (error) {
            console.log('error');
        });
        __WEBPACK_IMPORTED_MODULE_6_mini_toastr__["a" /* default */].setIcon('error', 'i', {
            'class': 'fa fa-times'
        });
        __WEBPACK_IMPORTED_MODULE_6_mini_toastr__["a" /* default */].setIcon('success', 'i', {
            'class': 'fa fa-arrow-circle-o-down'
        });
    },

    mounted: function mounted() {
        console.log('------locale--------', this.$i18n.locale);
    },
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1666:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("br"),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-lg-12 mb-3" },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-success-card datatable-material",
            attrs: { header: "", "header-tag": "h4" }
          },
          [
            _c(
              "div",
              { staticClass: "card-header card-header-icon card-header-rose" },
              [
                _c("div", { staticClass: "card-icon" }, [
                  _c("i", { staticClass: "material-icons" }, [
                    _vm._v("assignment")
                  ])
                ])
              ]
            ),
            _c("br"),
            _c("br"),
            _c("br"),
            _c("br"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _vm._l(_vm.model.QuestionTransData, function(item, index) {
                  return _c("div", [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-lg-9" },
                        [
                          _c("label", [_vm._v("Enter your question here...")]),
                          _vm._v(" "),
                          _c("b-form-textarea", {
                            ref: "question",
                            refInFor: true,
                            staticClass: "r-content",
                            attrs: {
                              id: "textarea-large",
                              required: "",
                              size: "lg",
                              placeholder: "",
                              rows: "10"
                            },
                            model: {
                              value: item.question,
                              callback: function($$v) {
                                _vm.$set(item, "question", $$v)
                              },
                              expression: "item.question"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      !index
                        ? _c("div", { staticClass: "col-lg-3" }, [
                            _c("div", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: {
                                    type: "button",
                                    "data-toggle": "modal",
                                    "data-target": "#exampleModal"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                    Launch demo modal\n                                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("img", {
                                staticClass: "ml-2 w-50 bg-light",
                                attrs: { src: _vm.croppedImageSrc }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "modal fade",
                                  attrs: {
                                    id: "exampleModal",
                                    tabindex: "-1",
                                    role: "dialog",
                                    "aria-labelledby": "exampleModalLabel",
                                    "aria-hidden": "true"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "modal-dialog",
                                      attrs: { role: "document" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "modal-content" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "modal-header" },
                                            [
                                              _c(
                                                "h5",
                                                {
                                                  staticClass: "modal-title",
                                                  attrs: {
                                                    id: "exampleModalLabel"
                                                  }
                                                },
                                                [_vm._v("Modal title")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass: "close",
                                                  attrs: {
                                                    type: "button",
                                                    "data-dismiss": "modal",
                                                    "aria-label": "Close"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      attrs: {
                                                        "aria-hidden": "true"
                                                      }
                                                    },
                                                    [_vm._v("×")]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "modal-body" },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "p-3 bg-white shadow rounded-lg"
                                                },
                                                [
                                                  _c("input", {
                                                    attrs: {
                                                      type: "file",
                                                      name: "image",
                                                      accept: "image/*"
                                                    },
                                                    on: { change: _vm.setImage }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("img", {
                                                    attrs: {
                                                      src: _vm.imageSrc,
                                                      width: "100"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _vm.imageSrc
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "my-3 d-flex align-items-center justify-content-center mx-auto"
                                                        },
                                                        [
                                                          _c("vue-cropper", {
                                                            ref: "cropper",
                                                            refInFor: true,
                                                            staticClass:
                                                              "mr-2 w-50",
                                                            attrs: {
                                                              guides: true,
                                                              src: _vm.imageSrc
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c("img", {
                                                            staticClass:
                                                              "ml-2 w-50 bg-light",
                                                            attrs: {
                                                              src:
                                                                _vm.croppedImageSrc
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.imageSrc
                                                    ? _c(
                                                        "button",
                                                        {
                                                          on: {
                                                            click: _vm.cropImage
                                                          }
                                                        },
                                                        [_vm._v("Crop")]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.croppedImageSrc
                                                    ? _c(
                                                        "button",
                                                        {
                                                          on: {
                                                            click:
                                                              _vm.uploadImage
                                                          }
                                                        },
                                                        [_vm._v("Upload")]
                                                      )
                                                    : _vm._e()
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "modal-footer" },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-secondary",
                                                  attrs: {
                                                    type: "button",
                                                    "data-dismiss": "modal"
                                                  }
                                                },
                                                [_vm._v("Close")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-primary",
                                                  attrs: { type: "button" }
                                                },
                                                [_vm._v("Save changes")]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ])
                          ])
                        : _vm._e()
                    ]),
                    _c("br"),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "table-responsive" }, [
                      _c("table", { staticClass: "table table-striped" }, [
                        _c("tbody", [
                          _c("tr", [
                            _c("td", { staticClass: "text-left" }, [
                              _vm._v("Audio")
                            ]),
                            _vm._v(" "),
                            _c("td", [_c("input", { attrs: { type: "file" } })])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "text-left" }, [
                              _vm._v("Choose Topic Area")
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c("b-form-select", {
                                  staticClass: "mb-3 r-content form-control",
                                  attrs: {
                                    options: _vm.model.TopicAreaData,
                                    "value-field": "id",
                                    "text-field": "name",
                                    name: "married",
                                    id: "topic-area",
                                    required: "",
                                    "disabled-field": "notEnabled"
                                  },
                                  model: {
                                    value: item.topicArea,
                                    callback: function($$v) {
                                      _vm.$set(item, "topicArea", $$v)
                                    },
                                    expression: "item.topicArea"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "text-left" }, [
                              _vm._v("Choose Language")
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c("b-form-select", {
                                  staticClass: "mb-3 r-content form-control",
                                  attrs: {
                                    options: _vm.model.languageData,
                                    "value-field": "code",
                                    "text-field": "name",
                                    name: "language",
                                    id: "language",
                                    required: "",
                                    "disabled-field": "notEnabled"
                                  },
                                  model: {
                                    value: item.language,
                                    callback: function($$v) {
                                      _vm.$set(item, "language", $$v)
                                    },
                                    expression: "item.language"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _vm.model.question_available == "isSpecific"
                            ? _c("tr", [
                                _c("td", { staticClass: "text-left" }, [
                                  _vm._v("Choose Category")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-select", {
                                      staticClass:
                                        "mb-3 r-content form-control",
                                      attrs: {
                                        options: _vm.model.CategoryData,
                                        "value-field": "id",
                                        "text-field": "name",
                                        name: "gender",
                                        id: "gender",
                                        required: "",
                                        "disabled-field": "notEnabled"
                                      },
                                      model: {
                                        value: item.category,
                                        callback: function($$v) {
                                          _vm.$set(item, "category", $$v)
                                        },
                                        expression: "item.category"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          !index
                            ? _c("tr", [
                                _c("td", { staticClass: "text-left" }, [
                                  _vm._v("Question available in")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "question-available" },
                                  [
                                    _c(
                                      "div",
                                      [
                                        _c("b-form-radio-group", {
                                          staticClass: "mb-3",
                                          staticStyle: { display: "flex" },
                                          attrs: {
                                            options: _vm.model.options,
                                            "value-field": "item",
                                            "text-field": "name",
                                            "disabled-field": "notEnabled",
                                            "@click": _vm.question_available(
                                              _vm.model.selected
                                            )
                                          },
                                          model: {
                                            value: _vm.model.selected,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.model,
                                                "selected",
                                                $$v
                                              )
                                            },
                                            expression: "model.selected"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ])
                            : _vm._e()
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "table-responsive add-translation-content"
                      },
                      [
                        _c("br"),
                        _vm._v(" "),
                        _c("div", [_vm._v("Answer Questions")]),
                        _c("br"),
                        _vm._v(" "),
                        _c("table", { staticClass: "table table-striped" }, [
                          _c("tbody", [
                            _c("tr", [
                              !index
                                ? _c("td", { staticClass: "text-center" }, [
                                    _c("label", [
                                      item.answer == 1
                                        ? _c("input", {
                                            staticClass: "radiobox-focus",
                                            attrs: {
                                              type: "radio",
                                              name: "choose1",
                                              checked: ""
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.answer != 1
                                        ? _c("input", {
                                            staticClass: "radiobox-focus",
                                            attrs: {
                                              type: "radio",
                                              name: "choose1"
                                            }
                                          })
                                        : _vm._e()
                                    ])
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  ref: "choice1",
                                  refInFor: true,
                                  staticClass: "form-control r-content",
                                  attrs: { type: "text" },
                                  domProps: { value: item.choice1 }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _c("td", [
                                _c("label", [_vm._v("Choose new audio:")]),
                                _vm._v(" "),
                                _c("input", { attrs: { type: "file" } })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              !index
                                ? _c("td", { staticClass: "text-center" }, [
                                    _c("label", [
                                      item.answer == 2
                                        ? _c("input", {
                                            staticClass: "radiobox-focus",
                                            attrs: {
                                              type: "radio",
                                              name: "choose1",
                                              checked: ""
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.answer != 2
                                        ? _c("input", {
                                            staticClass: "radiobox-focus",
                                            attrs: {
                                              type: "radio",
                                              name: "choose1"
                                            }
                                          })
                                        : _vm._e()
                                    ])
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  ref: "choice2",
                                  refInFor: true,
                                  staticClass: "form-control r-content",
                                  attrs: { type: "text" },
                                  domProps: { value: item.choice2 }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _c("td", [
                                _c("label", [_vm._v("Choose new audio:")]),
                                _vm._v(" "),
                                _c("input", { attrs: { type: "file" } })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              !index
                                ? _c("td", { staticClass: "text-center" }, [
                                    _c("label", [
                                      item.answer == 3
                                        ? _c("input", {
                                            staticClass: "radiobox-focus",
                                            attrs: {
                                              type: "radio",
                                              name: "choose1",
                                              checked: ""
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.answer != 3
                                        ? _c("input", {
                                            staticClass: "radiobox-focus",
                                            attrs: {
                                              type: "radio",
                                              name: "choose1"
                                            }
                                          })
                                        : _vm._e()
                                    ])
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  ref: "choice3",
                                  refInFor: true,
                                  staticClass: "form-control r-content",
                                  attrs: { type: "text" },
                                  domProps: { value: item.choice3 }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _c("td", [
                                _c("label", [_vm._v("Choose new audio:")]),
                                _vm._v(" "),
                                _c("input", { attrs: { type: "file" } })
                              ])
                            ])
                          ])
                        ])
                      ]
                    )
                  ])
                }),
                _vm._v(" "),
                _c("div", { staticClass: "add-translation" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      on: { click: _vm.addTranslation }
                    },
                    [
                      _c("i", { staticClass: "material-icons" }, [
                        _vm._v("add_circle_outline")
                      ]),
                      _vm._v(
                        "\n                        Add Translation\n                    "
                      )
                    ]
                  )
                ])
              ],
              2
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1965b309", module.exports)
  }
}

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1659)
  __webpack_require__(1661)
  __webpack_require__(1663)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1665)
/* template */
var __vue_template__ = __webpack_require__(1666)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1965b309"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/pages/admin/edit-question.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1965b309", Component.options)
  } else {
    hotAPI.reload("data-v-1965b309", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(803);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};!function(){function o(e,t){if(!o.installed){if(o.installed=!0,!t)return void console.error("You have to install axios");e.axios=t,Object.defineProperties(e.prototype,{axios:{get:function(){return t}},$http:{get:function(){return t}}})}}"object"==( false?"undefined":_typeof(exports))?module.exports=o: true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return o}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):window.Vue&&window.axios&&Vue.use(o,window.axios)}();

/***/ }),

/***/ 803:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueForm = factory());
}(this, (function () { 'use strict';

var emailRegExp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i; // from angular
var urlRegExp = /^(http\:\/\/|https\:\/\/)(.{4,})$/;

var email = function email(value, attrValue, vnode) {
  return emailRegExp.test(value);
};
email._allowNulls = true;

var number = function number(value, attrValue, vnode) {
  return !isNaN(value);
};
number._allowNulls = true;

var url = function url(value, attrValue, vnode) {
  return urlRegExp.test(value);
};
url._allowNulls = true;

var validators = {
  email: email,
  number: number,
  url: url,
  required: function required(value, attrValue, vnode) {
    if (attrValue === false) {
      return true;
    }

    if (value === 0) {
      return true;
    }

    if (vnode.data.attrs && typeof vnode.data.attrs.bool !== 'undefined' || vnode.componentOptions && vnode.componentOptions.propsData && typeof vnode.componentOptions.propsData.bool !== 'undefined') {
      // bool attribute is present, allow false pass validation
      if (value === false) {
        return true;
      }
    }

    if (Array.isArray(value)) {
      return !!value.length;
    }
    return !!value;
  },
  minlength: function minlength(value, length) {
    return value.length >= length;
  },
  maxlength: function maxlength(value, length) {
    return length >= value.length;
  },
  pattern: function pattern(value, _pattern) {
    var patternRegExp = new RegExp('^' + _pattern + '$');
    return patternRegExp.test(value);
  },
  min: function min(value, _min, vnode) {
    if ((vnode.data.attrs.type || '').toLowerCase() == 'number') {
      return +value >= +_min;
    }
    return value >= _min;
  },
  max: function max(value, _max, vnode) {
    if ((vnode.data.attrs.type || '').toLowerCase() == 'number') {
      return +_max >= +value;
    }
    return _max >= value;
  }
};

var config = {
  validators: validators,
  formComponent: 'VueForm',
  formTag: 'form',
  messagesComponent: 'FieldMessages',
  messagesTag: 'div',
  showMessages: '',
  validateComponent: 'Validate',
  validateTag: 'div',
  fieldComponent: 'Field',
  fieldTag: 'div',
  formClasses: {
    dirty: 'vf-form-dirty',
    pristine: 'vf-form-pristine',
    valid: 'vf-form-valid',
    invalid: 'vf-form-invalid',
    touched: 'vf-form-touched',
    untouched: 'vf-form-untouched',
    focused: 'vf-form-focused',
    submitted: 'vf-form-submitted',
    pending: 'vf-form-pending'
  },
  validateClasses: {
    dirty: 'vf-field-dirty',
    pristine: 'vf-field-pristine',
    valid: 'vf-field-valid',
    invalid: 'vf-field-invalid',
    touched: 'vf-field-touched',
    untouched: 'vf-field-untouched',
    focused: 'vf-field-focused',
    submitted: 'vf-field-submitted',
    pending: 'vf-field-pending'
  },
  inputClasses: {
    dirty: 'vf-dirty',
    pristine: 'vf-pristine',
    valid: 'vf-valid',
    invalid: 'vf-invalid',
    touched: 'vf-touched',
    untouched: 'vf-untouched',
    focused: 'vf-focused',
    submitted: 'vf-submitted',
    pending: 'vf-pending'
  },
  Promise: typeof Promise === 'function' ? Promise : null
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

function getClasses(classConfig, state) {
  var _ref;

  return _ref = {}, defineProperty(_ref, classConfig.dirty, state.$dirty), defineProperty(_ref, classConfig.pristine, state.$pristine), defineProperty(_ref, classConfig.valid, state.$valid), defineProperty(_ref, classConfig.invalid, state.$invalid), defineProperty(_ref, classConfig.touched, state.$touched), defineProperty(_ref, classConfig.untouched, state.$untouched), defineProperty(_ref, classConfig.focused, state.$focused), defineProperty(_ref, classConfig.pending, state.$pending), defineProperty(_ref, classConfig.submitted, state.$submitted), _ref;
}

function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
}

function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

function vModelValue(data) {
  if (data.model) {
    return data.model.value;
  }
  return data.directives.filter(function (v) {
    return v.name === 'model';
  })[0].value;
}

function getVModelAndLabel(nodes, config) {
  var foundVnodes = {
    vModel: [],
    label: null,
    messages: null
  };

  if (!nodes) {
    return foundVnodes;
  }

  function traverse(nodes) {
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];

      if (node.componentOptions) {
        if (node.componentOptions.tag === hyphenate(config.messagesComponent)) {
          foundVnodes.messages = node;
        }
      }

      if (node.tag === 'label' && !foundVnodes.label) {
        foundVnodes.label = node;
      }

      if (node.data) {
        if (node.data.model) {
          // model check has to come first. If a component has
          // a directive and v-model, the directive will be in .directives
          // and v-modelstored in .model
          foundVnodes.vModel.push(node);
        } else if (node.data.directives) {
          var match = node.data.directives.filter(function (v) {
            return v.name === 'model';
          });
          if (match.length) {
            foundVnodes.vModel.push(node);
          }
        }
      }
      if (node.children) {
        traverse(node.children);
      } else if (node.componentOptions && node.componentOptions.children) {
        traverse(node.componentOptions.children);
      }
    }
  }

  traverse(nodes);

  return foundVnodes;
}

function getName(vnode) {
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.name) {
    return vnode.data.attrs.name;
  } else if (vnode.componentOptions && vnode.componentOptions.propsData && vnode.componentOptions.propsData.name) {
    return vnode.componentOptions.propsData.name;
  }
}

var hyphenateRE = /([^-])([A-Z])/g;
function hyphenate(str) {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
}

function randomId() {
  return Math.random().toString(36).substr(2, 10);
}

// https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function isShallowObjectDifferent(a, b) {
  var aValue = '';
  var bValue = '';
  Object.keys(a).sort().filter(function (v) {
    return typeof a[v] !== 'function';
  }).forEach(function (v) {
    return aValue += a[v];
  });
  Object.keys(b).sort().filter(function (v) {
    return typeof a[v] !== 'function';
  }).forEach(function (v) {
    return bValue += b[v];
  });
  return aValue !== bValue;
}

var vueFormConfig = 'VueFormProviderConfig' + randomId();
var vueFormState = 'VueFormProviderState' + randomId();
var vueFormParentForm = 'VueFormProviderParentForm' + randomId();

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty$1 = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty$1 && options.name === '__proto__') {
		defineProperty$1(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

var extend = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};

var vueForm = {
  render: function render(h) {
    var _this = this;

    var attrs = {};

    if (typeof window !== 'undefined') {
      attrs.novalidate = '';
    }

    return h(this.tag || this.vueFormConfig.formTag, {
      on: {
        submit: function submit(event) {
          if (_this.state.$pending) {
            event.preventDefault();
            _this.vueFormConfig.Promise.all(_this.promises).then(function () {
              _this.state._submit();
              _this.$emit('submit', event);
              _this.promises = [];
            });
          } else {
            _this.state._submit();
            _this.$emit('submit', event);
          }
        },
        reset: function reset(event) {
          _this.state._reset();
          _this.$emit('reset', event);
        }
      },
      class: this.className,
      attrs: attrs
    }, [this.$slots.default]);
  },

  props: {
    state: {
      type: Object,
      required: true
    },
    tag: String,
    showMessages: String
  },
  inject: { vueFormConfig: vueFormConfig },
  provide: function provide() {
    var _ref;

    return _ref = {}, defineProperty(_ref, vueFormState, this.state), defineProperty(_ref, vueFormParentForm, this), _ref;
  },

  data: function data() {
    return {
      promises: []
    };
  },
  created: function created() {
    var _this2 = this;

    if (!this.state) {
      return;
    }
    var controls = {};
    var state = this.state;
    var formstate = {
      $dirty: false,
      $pristine: true,
      $valid: true,
      $invalid: false,
      $submitted: false,
      $touched: false,
      $untouched: true,
      $focused: false,
      $pending: false,
      $error: {},
      $submittedState: {},
      _id: '',
      _submit: function _submit() {
        _this2.state.$submitted = true;
        _this2.state._cloneState();
      },
      _cloneState: function _cloneState() {
        var cloned = JSON.parse(JSON.stringify(state));
        delete cloned.$submittedState;
        Object.keys(cloned).forEach(function (key) {
          _this2.$set(_this2.state.$submittedState, key, cloned[key]);
        });
      },
      _addControl: function _addControl(ctrl) {
        controls[ctrl.$name] = ctrl;
        _this2.$set(state, ctrl.$name, ctrl);
      },
      _removeControl: function _removeControl(ctrl) {
        delete controls[ctrl.$name];
        _this2.$delete(_this2.state, ctrl.$name);
        _this2.$delete(_this2.state.$error, ctrl.$name);
      },
      _validate: function _validate() {
        Object.keys(controls).forEach(function (key) {
          controls[key]._validate();
        });
      },
      _reset: function _reset() {
        state.$submitted = false;
        state.$pending = false;
        state.$submittedState = {};
        Object.keys(controls).forEach(function (key) {
          var control = controls[key];
          control._hasFocused = false;
          control._setUntouched();
          control._setPristine();
          control.$submitted = false;
          control.$pending = false;
        });
      }
    };

    Object.keys(formstate).forEach(function (key) {
      _this2.$set(_this2.state, key, formstate[key]);
    });

    this.$watch('state', function () {
      var isDirty = false;
      var isValid = true;
      var isTouched = false;
      var isFocused = false;
      var isPending = false;
      Object.keys(controls).forEach(function (key) {
        var control = controls[key];

        control.$submitted = state.$submitted;

        if (control.$dirty) {
          isDirty = true;
        }
        if (control.$touched) {
          isTouched = true;
        }
        if (control.$focused) {
          isFocused = true;
        }
        if (control.$pending) {
          isPending = true;
        }
        if (!control.$valid) {
          isValid = false;
          // add control to errors
          _this2.$set(state.$error, control.$name, control);
        } else {
          _this2.$delete(state.$error, control.$name);
        }
      });

      state.$dirty = isDirty;
      state.$pristine = !isDirty;
      state.$touched = isTouched;
      state.$untouched = !isTouched;
      state.$focused = isFocused;
      state.$valid = isValid;
      state.$invalid = !isValid;
      state.$pending = isPending;
    }, {
      deep: true,
      immediate: true
    });

    /* watch pristine? if set to true, set all children to pristine
    Object.keys(controls).forEach((ctrl) => {
      controls[ctrl].setPristine();
    });*/
  },

  computed: {
    className: function className() {
      var classes = getClasses(this.vueFormConfig.formClasses, this.state);
      return classes;
    }
  },
  methods: {
    reset: function reset() {
      this.state._reset();
    },
    validate: function validate() {
      this.state._validate();
    }
  }
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var scope_eval = createCommonjsModule(function (module) {
// Generated by CoffeeScript 1.10.0
(function() {
  var hasProp = {}.hasOwnProperty,
    slice = [].slice;

  module.exports = function(source, scope) {
    var key, keys, value, values;
    keys = [];
    values = [];
    for (key in scope) {
      if (!hasProp.call(scope, key)) continue;
      value = scope[key];
      if (key === 'this') {
        continue;
      }
      keys.push(key);
      values.push(value);
    }
    return Function.apply(null, slice.call(keys).concat(["return eval(" + (JSON.stringify(source)) + ")"])).apply(scope["this"], values);
  };

}).call(commonjsGlobal);
});

function findLabel(nodes) {
  if (!nodes) {
    return;
  }
  for (var i = 0; i < nodes.length; i++) {
    var vnode = nodes[i];
    if (vnode.tag === 'label') {
      return nodes[i];
    } else if (nodes[i].children) {
      return findLabel(nodes[i].children);
    }
  }
}

var messages = {
  inject: { vueFormConfig: vueFormConfig, vueFormState: vueFormState, vueFormParentForm: vueFormParentForm },
  render: function render(h) {
    var _this = this;

    var children = [];
    var field = this.formstate[this.fieldname];
    if (field && field.$error && this.isShown) {
      Object.keys(field.$error).forEach(function (key) {
        if (_this.$slots[key] || _this.$scopedSlots[key]) {
          var out = _this.$slots[key] || _this.$scopedSlots[key](field);
          if (_this.autoLabel) {
            var label = findLabel(out);
            if (label) {
              label.data = label.data || {};
              label.data.attrs = label.data.attrs || {};
              label.data.attrs.for = field._id;
            }
          }
          children.push(out);
        }
      });
      if (!children.length && field.$valid) {
        if (this.$slots.default || this.$scopedSlots.default) {
          var out = this.$slots.default || this.$scopedSlots.default(field);
          if (this.autoLabel) {
            var label = findLabel(out);
            if (label) {
              label.data = label.data || {};
              label.data.attrs = label.data.attrs || {};
              label.data.attrs.for = field._id;
            }
          }
          children.push(out);
        }
      }
    }
    return h(this.tag || this.vueFormConfig.messagesTag, children);
  },

  props: {
    state: Object,
    name: String,
    show: {
      type: String,
      default: ''
    },
    tag: {
      type: String
    },
    autoLabel: Boolean
  },
  data: function data() {
    return {
      formstate: null,
      fieldname: ''
    };
  },
  created: function created() {
    this.fieldname = this.name;
    this.formstate = this.state || this.vueFormState;
  },

  computed: {
    isShown: function isShown() {
      var field = this.formstate[this.fieldname];
      var show = this.show || this.vueFormParentForm.showMessages || this.vueFormConfig.showMessages;

      if (!show || !field) {
        return true;
      }

      return scope_eval(show, field);
    }
  }
};

var validate = {
  render: function render(h) {
    var _this = this;

    var foundVnodes = getVModelAndLabel(this.$slots.default, this.vueFormConfig);
    var vModelnodes = foundVnodes.vModel;
    var attrs = {
      for: null
    };
    if (vModelnodes.length) {
      this.name = getName(vModelnodes[0]);

      if (foundVnodes.messages) {
        this.$nextTick(function () {
          var messagesVm = foundVnodes.messages.componentInstance;
          if (messagesVm) {
            messagesVm.fieldname = messagesVm.fieldname || _this.name;
          }
        });
      }

      if (this.autoLabel) {
        var id = vModelnodes[0].data.attrs.id || this.fieldstate._id;
        this.fieldstate._id = id;
        vModelnodes[0].data.attrs.id = id;
        if (foundVnodes.label) {
          foundVnodes.label.data = foundVnodes.label.data || {};
          foundVnodes.label.data.attrs = foundVnodes.label.data.attrs || {};
          foundVnodes.label.data.attrs.for = id;
        } else if (this.tag === 'label') {
          attrs.for = id;
        }
      }
      vModelnodes.forEach(function (vnode) {
        if (!vnode.data.directives) {
          vnode.data.directives = [];
        }
        vnode.data.directives.push({ name: 'vue-form-validator', value: { fieldstate: _this.fieldstate, config: _this.vueFormConfig } });
        vnode.data.attrs['vue-form-validator'] = '';
        vnode.data.attrs['debounce'] = _this.debounce;
      });
    } else {
      //console.warn('Element with v-model not found');
    }
    return h(this.tag || this.vueFormConfig.validateTag, { 'class': this.className, attrs: attrs }, this.$slots.default);
  },

  props: {
    state: Object,
    custom: null,
    autoLabel: Boolean,
    tag: {
      type: String
    },
    debounce: Number
  },
  inject: { vueFormConfig: vueFormConfig, vueFormState: vueFormState, vueFormParentForm: vueFormParentForm },
  data: function data() {
    return {
      name: '',
      formstate: null,
      fieldstate: {}
    };
  },

  methods: {
    getClasses: function getClasses$$1(classConfig) {
      var s = this.fieldstate;
      return Object.keys(s.$error).reduce(function (classes, error) {
        classes[classConfig.invalid + '-' + hyphenate(error)] = true;
        return classes;
      }, getClasses(classConfig, s));
    }
  },
  computed: {
    className: function className() {
      return this.getClasses(this.vueFormConfig.validateClasses);
    },
    inputClassName: function inputClassName() {
      return this.getClasses(this.vueFormConfig.inputClasses);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.fieldstate.$name = this.name;
    this.formstate._addControl(this.fieldstate);

    var vModelEls = this.$el.querySelectorAll('[vue-form-validator]');

    // add classes to the input element
    this.$watch('inputClassName', function (value, oldValue) {
      var out = void 0;

      var _loop = function _loop(i, el) {
        if (oldValue) {
          Object.keys(oldValue).filter(function (k) {
            return oldValue[k];
          }).forEach(function (k) {
            return removeClass(el, k);
          });
        }
        out = [];
        Object.keys(value).filter(function (k) {
          return value[k];
        }).forEach(function (k) {
          out.push(k);
          addClass(el, k);
        });
      };

      for (var i = 0, el; el = vModelEls[i++];) {
        _loop(i, el);
      }
      _this2.fieldstate._className = out;
    }, {
      deep: true,
      immediate: true
    });

    this.$watch('name', function (value, oldValue) {
      _this2.formstate._removeControl(_this2.fieldstate);
      _this2.fieldstate.$name = value;
      _this2.formstate._addControl(_this2.fieldstate);
    });
  },
  created: function created() {
    var _this4 = this;

    this.formstate = this.state || this.vueFormState;
    var vm = this;
    var pendingValidators = [];
    var _val = void 0;
    var prevVnode = void 0;
    this.fieldstate = {
      $name: '',
      $dirty: false,
      $pristine: true,
      $valid: true,
      $invalid: false,
      $touched: false,
      $untouched: true,
      $focused: false,
      $pending: false,
      $submitted: false,
      $error: {},
      $attrs: {},
      _className: null,
      _id: 'vf' + randomId(),
      _setValidatorValidity: function _setValidatorValidity(validator, isValid) {
        if (isValid) {
          vm.$delete(this.$error, validator);
        } else {
          vm.$set(this.$error, validator, true);
        }
      },
      _setValidity: function _setValidity(isValid) {
        this.$valid = isValid;
        this.$invalid = !isValid;
      },
      _setDirty: function _setDirty() {
        this.$dirty = true;
        this.$pristine = false;
      },
      _setPristine: function _setPristine() {
        this.$dirty = false;
        this.$pristine = true;
      },
      _setTouched: function _setTouched() {
        this.$touched = true;
        this.$untouched = false;
      },
      _setUntouched: function _setUntouched() {
        this.$touched = false;
        this.$untouched = true;
      },
      _setFocused: function _setFocused(value) {
        this.$focused = typeof value === 'boolean' ? value : false;
        if (this.$focused) {
          this._setHasFocused();
        } else {
          this._setTouched();
        }
      },
      _setHasFocused: function _setHasFocused() {
        this._hasFocused = true;
      },

      _hasFocused: false,
      _validators: {},
      _validate: function _validate(vnode) {
        var _this3 = this;

        if (!vnode) {
          vnode = prevVnode;
        } else {
          prevVnode = vnode;
        }
        this.$pending = true;
        var isValid = true;
        var emptyAndRequired = false;
        var value = vModelValue(vnode.data);
        _val = value;

        var pending = {
          promises: [],
          names: []
        };

        pendingValidators.push(pending);

        var attrs = vnode.data.attrs || {};
        var childvm = vnode.componentInstance;
        if (childvm && childvm._vfValidationData_) {
          attrs = extend({}, attrs, childvm._vfValidationData_);
        }

        var propsData = vnode.componentOptions && vnode.componentOptions.propsData ? vnode.componentOptions.propsData : {};

        Object.keys(this._validators).forEach(function (validator) {
          // when value is empty and current validator is not the required validator, the field is valid
          if ((value === '' || value === undefined || value === null) && validator !== 'required') {
            _this3._setValidatorValidity(validator, true);
            emptyAndRequired = true;
            // return early, required validator will
            // fall through if it is present
            return;
          }

          var attrValue = typeof attrs[validator] !== 'undefined' ? attrs[validator] : propsData[validator];
          var isFunction = typeof _this3._validators[validator] === 'function';

          // match vue behaviour, ignore if attribute is null or undefined. But for type=email|url|number and custom validators, the value will be null, so allow with _allowNulls
          if (isFunction && (attrValue === null || typeof attrValue === 'undefined') && !_this3._validators[validator]._allowNulls) {
            return;
          }

          if (attrValue) {
            _this3.$attrs[validator] = attrValue;
          }

          var result = isFunction ? _this3._validators[validator](value, attrValue, vnode) : vm.custom[validator];

          if (typeof result === 'boolean') {
            if (result) {
              _this3._setValidatorValidity(validator, true);
            } else {
              isValid = false;
              _this3._setValidatorValidity(validator, false);
            }
          } else {
            pending.promises.push(result);
            pending.names.push(validator);
            vm.vueFormParentForm.promises.push(result);
          }
        });

        if (pending.promises.length) {
          vm.vueFormConfig.Promise.all(pending.promises).then(function (results) {

            // only concerned with the last promise results, in case
            // async responses return out of order
            if (pending !== pendingValidators[pendingValidators.length - 1]) {
              //console.log('ignoring old promise', pending.promises);
              return;
            }

            pendingValidators = [];

            results.forEach(function (result, i) {
              var name = pending.names[i];
              if (result) {
                _this3._setValidatorValidity(name, true);
              } else {
                isValid = false;
                _this3._setValidatorValidity(name, false);
              }
            });
            _this3._setValidity(isValid);
            _this3.$pending = false;
          });
        } else {
          this._setValidity(isValid);
          this.$pending = false;
        }
      }
    };

    // add custom validators
    if (this.custom) {
      Object.keys(this.custom).forEach(function (prop) {
        if (typeof _this4.custom[prop] === 'function') {
          _this4.custom[prop]._allowNulls = true;
          _this4.fieldstate._validators[prop] = _this4.custom[prop];
        } else {
          _this4.fieldstate._validators[prop] = _this4.custom[prop];
        }
      });
    }

    this.$watch('custom', function (v, oldV) {
      if (!oldV || !v) {
        return;
      }
      if (isShallowObjectDifferent(v, oldV)) {
        _this4.fieldstate._validate();
      }
    }, {
      deep: true
    });
  },
  destroyed: function destroyed() {
    this.formstate._removeControl(this.fieldstate);
  }
};

var field = {
  inject: { vueFormConfig: vueFormConfig },
  render: function render(h) {
    var foundVnodes = getVModelAndLabel(this.$slots.default, this.vueFormConfig);
    var vModelnodes = foundVnodes.vModel;
    var attrs = {
      for: null
    };
    if (vModelnodes.length) {
      if (this.autoLabel) {
        var id = vModelnodes[0].data.attrs && vModelnodes[0].data.attrs.id || 'vf' + randomId();
        vModelnodes[0].data.attrs.id = id;
        if (foundVnodes.label) {
          foundVnodes.label.data = foundVnodes.label.data || {};
          foundVnodes.label.data.attrs = foundVnodes.label.data.attrs = {};
          foundVnodes.label.data.attrs.for = id;
        } else if (this.tag === 'label') {
          attrs.for = id;
        }
      }
    }
    return h(this.tag || this.vueFormConfig.fieldTag, { attrs: attrs }, this.$slots.default);
  },

  props: {
    tag: {
      type: String
    },
    autoLabel: {
      type: Boolean,
      default: true
    }
  }
};

var debouncedValidators = {};

function addValidators(attrs, validators, fieldValidators) {
  Object.keys(attrs).forEach(function (attr) {
    var prop = attr === 'type' ? attrs[attr].toLowerCase() : attr.toLowerCase();

    if (validators[prop] && !fieldValidators[prop]) {
      fieldValidators[prop] = validators[prop];
    }
  });
}

function compareChanges(vnode, oldvnode, validators) {

  var hasChanged = false;
  var attrs = vnode.data.attrs || {};
  var oldAttrs = oldvnode.data.attrs || {};
  var out = {};

  if (vModelValue(vnode.data) !== vModelValue(oldvnode.data)) {
    out.vModel = true;
    hasChanged = true;
  }

  Object.keys(validators).forEach(function (validator) {
    if (attrs[validator] !== oldAttrs[validator]) {
      out[validator] = true;
      hasChanged = true;
    }
  });

  // if is a component
  if (vnode.componentOptions && vnode.componentOptions.propsData) {
    var _attrs = vnode.componentOptions.propsData;
    var _oldAttrs = oldvnode.componentOptions.propsData;
    Object.keys(validators).forEach(function (validator) {
      if (_attrs[validator] !== _oldAttrs[validator]) {
        out[validator] = true;
        hasChanged = true;
      }
    });
  }

  if (hasChanged) {
    return out;
  }
}

var vueFormValidator = {
  name: 'vue-form-validator',
  bind: function bind(el, binding, vnode) {
    var fieldstate = binding.value.fieldstate;
    var validators = binding.value.config.validators;

    var attrs = vnode.data.attrs || {};
    var inputName = getName(vnode);

    if (!inputName) {
      console.warn('vue-form: name attribute missing');
      return;
    }

    if (attrs.debounce) {
      debouncedValidators[fieldstate._id] = debounce(function (fieldstate, vnode) {
        if (fieldstate._hasFocused) {
          fieldstate._setDirty();
        }
        fieldstate._validate(vnode);
      }, attrs.debounce);
    }

    // add validators
    addValidators(attrs, validators, fieldstate._validators);

    // if is a component, a validator attribute could be a prop this component uses
    if (vnode.componentOptions && vnode.componentOptions.propsData) {
      addValidators(vnode.componentOptions.propsData, validators, fieldstate._validators);
    }

    fieldstate._validate(vnode);

    // native listeners
    el.addEventListener('blur', function () {
      fieldstate._setFocused(false);
    }, false);
    el.addEventListener('focus', function () {
      fieldstate._setFocused(true);
    }, false);

    // component listeners
    var vm = vnode.componentInstance;
    if (vm) {
      vm.$on('blur', function () {
        fieldstate._setFocused(false);
      });
      vm.$on('focus', function () {
        fieldstate._setFocused(true);
      });

      vm.$once('vf:addFocusListeners', function () {
        el.addEventListener('focusout', function () {
          fieldstate._setFocused(false);
        }, false);
        el.addEventListener('focusin', function () {
          fieldstate._setFocused(true);
        }, false);
      });

      vm.$on('vf:validate', function (data) {
        if (!vm._vfValidationData_) {
          addValidators(data, validators, fieldstate._validators);
        }
        vm._vfValidationData_ = data;
        fieldstate._validate(vm.$vnode);
      });
    }
  },
  update: function update(el, binding, vnode, oldVNode) {
    var validators = binding.value.config.validators;

    var changes = compareChanges(vnode, oldVNode, validators);
    var fieldstate = binding.value.fieldstate;


    var attrs = vnode.data.attrs || {};
    var vm = vnode.componentInstance;
    if (vm && vm._vfValidationData_) {
      attrs = extend({}, attrs, vm[vm._vfValidationData_]);
    }

    if (vnode.elm.className.indexOf(fieldstate._className[0]) === -1) {
      vnode.elm.className = vnode.elm.className + ' ' + fieldstate._className.join(' ');
    }

    if (!changes) {
      return;
    }

    if (changes.vModel) {
      // re-validate all
      if (attrs.debounce) {
        fieldstate.$pending = true;
        debouncedValidators[fieldstate._id](fieldstate, vnode);
      } else {
        if (fieldstate._hasFocused) {
          fieldstate._setDirty();
        }
        fieldstate._validate(vnode);
      }
    } else {
      // attributes have changed
      // to do: loop through them and re-validate changed ones
      //for(let prop in changes) {
      //  fieldstate._validate(vnode, validator);
      //}
      // for now
      fieldstate._validate(vnode);
    }
  }
};

function VueFormBase(options) {
  var _components;

  var c = extend(true, {}, config, options);
  this.provide = function () {
    return defineProperty({}, vueFormConfig, c);
  };
  this.components = (_components = {}, defineProperty(_components, c.formComponent, vueForm), defineProperty(_components, c.messagesComponent, messages), defineProperty(_components, c.validateComponent, validate), defineProperty(_components, c.fieldComponent, field), _components);
  this.directives = { vueFormValidator: vueFormValidator };
}

var VueForm = function (_VueFormBase) {
  inherits(VueForm, _VueFormBase);

  function VueForm() {
    classCallCheck(this, VueForm);
    return possibleConstructorReturn(this, (VueForm.__proto__ || Object.getPrototypeOf(VueForm)).apply(this, arguments));
  }

  createClass(VueForm, null, [{
    key: 'install',
    value: function install(Vue, options) {
      Vue.mixin(new this(options));
    }
  }, {
    key: 'installed',
    get: function get$$1() {
      return !!this.install.done;
    },
    set: function set$$1(val) {
      this.install.done = val;
    }
  }]);
  return VueForm;
}(VueFormBase);

VueFormBase.call(VueForm);
// temp fix for vue 2.3.0
VueForm.options = new VueForm();

return VueForm;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var options = {
    validators: {
        checkbox: function checkbox(value, attrValue, vnode) {
            return value;
        },
        sameas: function sameas(value, attrValue, vnode) {
            return value == attrValue;
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (options);

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fadeOut */
/* unused harmony export flatten */
/* unused harmony export makeCss */
/* unused harmony export appendStyles */
/* unused harmony export makeNode */
/* unused harmony export createIcon */
/* unused harmony export addElem */
/* unused harmony export getTypeClass */
function fadeOut (element, cb) {
  if (element.style.opacity && element.style.opacity > 0.05) {
    element.style.opacity = element.style.opacity - 0.05
  } else if (element.style.opacity && element.style.opacity <= 0.1) {
    if (element.parentNode) {
      element.parentNode.removeChild(element)
      if (cb) cb()
    }
  } else {
    element.style.opacity = 0.9
  }
  setTimeout(() => fadeOut.apply(this, [element, cb]), 1000 / 30
  )
}

const LIB_NAME = 'mini-toastr'
/* unused harmony export LIB_NAME */


const ERROR = 'error'
/* unused harmony export ERROR */

const WARN = 'warn'
/* unused harmony export WARN */

const SUCCESS = 'success'
/* unused harmony export SUCCESS */

const INFO = 'info'
/* unused harmony export INFO */

const CONTAINER_CLASS = LIB_NAME
/* unused harmony export CONTAINER_CLASS */

const NOTIFICATION_CLASS = `${LIB_NAME}__notification`
/* unused harmony export NOTIFICATION_CLASS */

const TITLE_CLASS = `${LIB_NAME}-notification__title`
/* unused harmony export TITLE_CLASS */

const ICON_CLASS = `${LIB_NAME}-notification__icon`
/* unused harmony export ICON_CLASS */

const MESSAGE_CLASS = `${LIB_NAME}-notification__message`
/* unused harmony export MESSAGE_CLASS */

const ERROR_CLASS = `-${ERROR}`
/* unused harmony export ERROR_CLASS */

const WARN_CLASS = `-${WARN}`
/* unused harmony export WARN_CLASS */

const SUCCESS_CLASS = `-${SUCCESS}`
/* unused harmony export SUCCESS_CLASS */

const INFO_CLASS = `-${INFO}`
/* unused harmony export INFO_CLASS */

const DEFAULT_TIMEOUT = 3000
/* unused harmony export DEFAULT_TIMEOUT */



function flatten (obj, into, prefix) {
  into = into || {}
  prefix = prefix || ''

  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      const prop = obj[k]
      if (prop && typeof prop === 'object' && !(prop instanceof Date || prop instanceof RegExp)) {
        flatten(prop, into, prefix + k + ' ')
      } else {
        if (into[prefix] && typeof into[prefix] === 'object') {
          into[prefix][k] = prop
        } else {
          into[prefix] = {}
          into[prefix][k] = prop
        }
      }
    }
  }

  return into
}

function makeCss (obj) {
  const flat = flatten(obj)
  let str = JSON.stringify(flat, null, 2)
  str = str.replace(/"([^"]*)": {/g, '$1 {')
    .replace(/"([^"]*)"/g, '$1')
    .replace(/(\w*-?\w*): ([\w\d .#]*),?/g, '$1: $2;')
    .replace(/},/g, '}\n')
    .replace(/ &([.:])/g, '$1')

  str = str.substr(1, str.lastIndexOf('}') - 1)

  return str
}

function appendStyles (css) {
  let head = document.head || document.getElementsByTagName('head')[0]
  let styleElem = makeNode('style')
  styleElem.id = `${LIB_NAME}-styles`
  styleElem.type = 'text/css'

  if (styleElem.styleSheet) {
    styleElem.styleSheet.cssText = css
  } else {
    styleElem.appendChild(document.createTextNode(css))
  }

  head.appendChild(styleElem)
}

const config = {
  types: {ERROR, WARN, SUCCESS, INFO},
  animation: fadeOut,
  timeout: DEFAULT_TIMEOUT,
  icons: {},
  appendTarget: document.body,
  node: makeNode(),
  style: {
    [`.${CONTAINER_CLASS}`]: {
      position: 'fixed',
      'z-index': 99999,
      right: '12px',
      top: '12px'
    },
    [`.${NOTIFICATION_CLASS}`]: {
      cursor: 'pointer',
      padding: '12px 18px',
      margin: '0 0 6px 0',
      'background-color': '#000',
      opacity: 0.8,
      color: '#fff',
      'border-radius': '3px',
      'box-shadow': '#3c3b3b 0 0 12px',
      width: '300px',
      [`&.${ERROR_CLASS}`]: {
        'background-color': '#D5122B'
      },
      [`&.${WARN_CLASS}`]: {
        'background-color': '#F5AA1E'
      },
      [`&.${SUCCESS_CLASS}`]: {
        'background-color': '#7AC13E'
      },
      [`&.${INFO_CLASS}`]: {
        'background-color': '#4196E1'
      },
      '&:hover': {
        opacity: 1,
        'box-shadow': '#000 0 0 12px'
      }
    },
    [`.${TITLE_CLASS}`]: {
      'font-weight': '500'
    },
    [`.${MESSAGE_CLASS}`]: {
      display: 'inline-block',
      'vertical-align': 'middle',
      width: '240px',
      padding: '0 12px'
    }
  }
}
/* unused harmony export config */


function makeNode (type = 'div') {
  return document.createElement(type)
}

function createIcon (node, type, config) {
  const iconNode = makeNode(config.icons[type].nodeType)
  const attrs = config.icons[type].attrs

  for (const k in attrs) {
    if (attrs.hasOwnProperty(k)) {
      iconNode.setAttribute(k, attrs[k])
    }
  }

  node.appendChild(iconNode)
}

function addElem (node, text, className) {
  const elem = makeNode()
  elem.className = className
  elem.appendChild(document.createTextNode(text))
  node.appendChild(elem)
}

function getTypeClass (type) {
  if (type === SUCCESS) return SUCCESS_CLASS
  if (type === WARN) return WARN_CLASS
  if (type === ERROR) return ERROR_CLASS
  if (type === INFO) return INFO_CLASS

  return ''
}

const miniToastr = {
  config,
  isInitialised: false,
  showMessage (message, title, type, timeout, cb, overrideConf) {
    const config = {}
    Object.assign(config, this.config)
    Object.assign(config, overrideConf)

    const notificationElem = makeNode()
    notificationElem.className = `${NOTIFICATION_CLASS} ${getTypeClass(type)}`

    notificationElem.onclick = function () {
      config.animation(notificationElem, null)
    }

    if (title) addElem(notificationElem, title, TITLE_CLASS)
    if (config.icons[type]) createIcon(notificationElem, type, config)
    if (message) addElem(notificationElem, message, MESSAGE_CLASS)

    config.node.insertBefore(notificationElem, config.node.firstChild)
    setTimeout(() => config.animation(notificationElem, cb), timeout || config.timeout
    )

    if (cb) cb()
    return this
  },
  init (aConfig) {
    const newConfig = {}
    Object.assign(newConfig, config)
    Object.assign(newConfig, aConfig)
    this.config = newConfig

    const cssStr = makeCss(newConfig.style)
    appendStyles(cssStr)

    newConfig.node.id = CONTAINER_CLASS
    newConfig.node.className = CONTAINER_CLASS
    newConfig.appendTarget.appendChild(newConfig.node)

    Object.keys(newConfig.types).forEach(v => {
        this[newConfig.types[v]] = function (message, title, timeout, cb, config) {
          this.showMessage(message, title, newConfig.types[v], timeout, cb, config)
          return this
        }.bind(this)
      }
    )

    this.isInitialised = true;

    return this
  },
  setIcon (type, nodeType = 'i', attrs = []) {
    attrs.class = attrs.class ? attrs.class + ' ' + ICON_CLASS : ICON_CLASS

    this.config.icons[type] = {nodeType, attrs}
  }
}

/* harmony default export */ __webpack_exports__["a"] = (miniToastr);

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_axios__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jwt_service__ = __webpack_require__(228);





var Admin_ApiService = {
    init: function init() {
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_axios___default.a, __WEBPACK_IMPORTED_MODULE_1_axios___default.a);
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.defaults.baseURL = 'api/admin/';
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    },
    setHeader: function setHeader() {
        var user_data = __WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* default */].getUser('admin');
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.defaults.headers.common["user_id"] = "" + user_data.user_id;
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.defaults.headers.common["password"] = "" + user_data.password;
    },
    query: function query(resource, params) {
        return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.get(resource, params).catch(function (error) {
            throw new Error("[RWV] ApiService " + error);
        });
    },
    get: function get(resource) {
        var slug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        if (__WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* default */].getUser() !== null) {
            this.setHeader();
        }
        var params = '';
        if (!_.isNaN(slug)) {
            params = '?' + slug;
        }
        if (_.isObject(slug)) {
            params = '?' + _.keys(slug).filter(function (key) {
                return slug[key] != null && slug[key] !== 'null';
            }).map(function (key) {
                return key + '=' + slug[key];
            }).join('&');
        }
        return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.get("" + resource + params).catch(function (error) {
            throw new Error("[RWV] ApiService " + error);
        });
    },
    post: function post(resource, params) {
        if (__WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* default */].getUser() !== null) {
            this.setHeader();
        } else {}
        return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.post("" + resource, params);
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Admin_ApiService);

/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cropperjs = __webpack_require__(859);

var _cropperjs2 = _interopRequireDefault(_cropperjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var previewPropType = typeof window === 'undefined' ? [String, Array] : [String, Array, Element, NodeList];

exports.default = {
  render: function render(h) {
    return h('div', { style: this.containerStyle }, [h('img', {
      ref: 'img',
      attrs: {
        src: this.src,
        alt: this.alt || 'image',
        style: 'max-width: 100%'
      },
      on: this.$listeners,
      style: this.imgStyle
    })]);
  },

  props: {
    containerStyle: Object,
    src: {
      type: String,
      default: ''
    },
    alt: String,
    imgStyle: Object,

    viewMode: Number,
    dragMode: String,
    initialAspectRatio: Number,
    aspectRatio: Number,
    data: Object,
    preview: previewPropType,
    responsive: {
      type: Boolean,
      default: true
    },
    restore: {
      type: Boolean,
      default: true
    },
    checkCrossOrigin: {
      type: Boolean,
      default: true
    },
    checkOrientation: {
      type: Boolean,
      default: true
    },
    modal: {
      type: Boolean,
      default: true
    },
    guides: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: true
    },
    highlight: {
      type: Boolean,
      default: true
    },
    background: {
      type: Boolean,
      default: true
    },
    autoCrop: {
      type: Boolean,
      default: true
    },
    autoCropArea: Number,
    movable: {
      type: Boolean,
      default: true
    },
    rotatable: {
      type: Boolean,
      default: true
    },
    scalable: {
      type: Boolean,
      default: true
    },
    zoomable: {
      type: Boolean,
      default: true
    },
    zoomOnTouch: {
      type: Boolean,
      default: true
    },
    zoomOnWheel: {
      type: Boolean,
      default: true
    },
    wheelZoomRatio: Number,
    cropBoxMovable: {
      type: Boolean,
      default: true
    },
    cropBoxResizable: {
      type: Boolean,
      default: true
    },
    toggleDragModeOnDblclick: {
      type: Boolean,
      default: true
    },

    minCanvasWidth: Number,
    minCanvasHeight: Number,
    minCropBoxWidth: Number,
    minCropBoxHeight: Number,
    minContainerWidth: Number,
    minContainerHeight: Number,

    ready: Function,
    cropstart: Function,
    cropmove: Function,
    cropend: Function,
    crop: Function,
    zoom: Function
  },
  mounted: function mounted() {
    var _$options$props = this.$options.props,
        containerStyle = _$options$props.containerStyle,
        src = _$options$props.src,
        alt = _$options$props.alt,
        imgStyle = _$options$props.imgStyle,
        data = _objectWithoutProperties(_$options$props, ['containerStyle', 'src', 'alt', 'imgStyle']);

    var props = {};

    for (var key in data) {
      if (this[key] !== undefined) {
        props[key] = this[key];
      }
    }

    this.cropper = new _cropperjs2.default(this.$refs.img, props);
  },

  methods: {
    reset: function reset() {
      return this.cropper.reset();
    },
    clear: function clear() {
      return this.cropper.clear();
    },
    initCrop: function initCrop() {
      return this.cropper.crop();
    },
    replace: function replace(url) {
      var onlyColorChanged = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return this.cropper.replace(url, onlyColorChanged);
    },
    enable: function enable() {
      return this.cropper.enable();
    },
    disable: function disable() {
      return this.cropper.disable();
    },
    destroy: function destroy() {
      return this.cropper.destroy();
    },
    move: function move(offsetX, offsetY) {
      return this.cropper.move(offsetX, offsetY);
    },
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

      return this.cropper.moveTo(x, y);
    },
    relativeZoom: function relativeZoom(ratio, _originalEvent) {
      return this.cropper.zoom(ratio, _originalEvent);
    },
    zoomTo: function zoomTo(ratio, _originalEvent) {
      return this.cropper.zoomTo(ratio, _originalEvent);
    },
    rotate: function rotate(degree) {
      return this.cropper.rotate(degree);
    },
    rotateTo: function rotateTo(degree) {
      return this.cropper.rotateTo(degree);
    },
    scaleX: function scaleX(_scaleX) {
      return this.cropper.scaleX(_scaleX);
    },
    scaleY: function scaleY(_scaleY) {
      return this.cropper.scaleY(_scaleY);
    },
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;

      return this.cropper.scale(scaleX, scaleY);
    },
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      return this.cropper.getData(rounded);
    },
    setData: function setData(data) {
      return this.cropper.setData(data);
    },
    getContainerData: function getContainerData() {
      return this.cropper.getContainerData();
    },
    getImageData: function getImageData() {
      return this.cropper.getImageData();
    },
    getCanvasData: function getCanvasData() {
      return this.cropper.getCanvasData();
    },
    setCanvasData: function setCanvasData(data) {
      return this.cropper.setCanvasData(data);
    },
    getCropBoxData: function getCropBoxData() {
      return this.cropper.getCropBoxData();
    },
    setCropBoxData: function setCropBoxData(data) {
      return this.cropper.setCropBoxData(data);
    },
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.cropper.getCroppedCanvas(options);
    },
    setAspectRatio: function setAspectRatio(aspectRatio) {
      return this.cropper.setAspectRatio(aspectRatio);
    },
    setDragMode: function setDragMode(mode) {
      return this.cropper.setDragMode(mode);
    }
  }
};

/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Cropper.js v1.5.7
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2020-05-23T05:23:00.081Z
 */

(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Cropper = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  var WINDOW = IS_BROWSER ? window : {};
  var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? 'ontouchstart' in WINDOW.document.documentElement : false;
  var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
  var NAMESPACE = 'cropper'; // Actions

  var ACTION_ALL = 'all';
  var ACTION_CROP = 'crop';
  var ACTION_MOVE = 'move';
  var ACTION_ZOOM = 'zoom';
  var ACTION_EAST = 'e';
  var ACTION_WEST = 'w';
  var ACTION_SOUTH = 's';
  var ACTION_NORTH = 'n';
  var ACTION_NORTH_EAST = 'ne';
  var ACTION_NORTH_WEST = 'nw';
  var ACTION_SOUTH_EAST = 'se';
  var ACTION_SOUTH_WEST = 'sw'; // Classes

  var CLASS_CROP = "".concat(NAMESPACE, "-crop");
  var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
  var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
  var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
  var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
  var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
  var CLASS_MOVE = "".concat(NAMESPACE, "-move"); // Data keys

  var DATA_ACTION = "".concat(NAMESPACE, "Action");
  var DATA_PREVIEW = "".concat(NAMESPACE, "Preview"); // Drag modes

  var DRAG_MODE_CROP = 'crop';
  var DRAG_MODE_MOVE = 'move';
  var DRAG_MODE_NONE = 'none'; // Events

  var EVENT_CROP = 'crop';
  var EVENT_CROP_END = 'cropend';
  var EVENT_CROP_MOVE = 'cropmove';
  var EVENT_CROP_START = 'cropstart';
  var EVENT_DBLCLICK = 'dblclick';
  var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
  var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
  var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
  var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
  var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
  var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
  var EVENT_READY = 'ready';
  var EVENT_RESIZE = 'resize';
  var EVENT_WHEEL = 'wheel';
  var EVENT_ZOOM = 'zoom'; // Mime types

  var MIME_TYPE_JPEG = 'image/jpeg'; // RegExps

  var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
  var REGEXP_DATA_URL = /^data:/;
  var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
  var REGEXP_TAG_NAME = /^img|canvas$/i; // Misc

  var DEFAULTS = {
    // Define the view mode of the cropper
    viewMode: 0,
    // 0, 1, 2, 3
    // Define the dragging mode of the cropper
    dragMode: DRAG_MODE_CROP,
    // 'crop', 'move' or 'none'
    // Define the initial aspect ratio of the crop box
    initialAspectRatio: NaN,
    // Define the aspect ratio of the crop box
    aspectRatio: NaN,
    // An object with the previous cropping result data
    data: null,
    // A selector for adding extra containers to preview
    preview: '',
    // Re-render the cropper when resize the window
    responsive: true,
    // Restore the cropped area after resize the window
    restore: true,
    // Check if the current image is a cross-origin image
    checkCrossOrigin: true,
    // Check the current image's Exif Orientation information
    checkOrientation: true,
    // Show the black modal
    modal: true,
    // Show the dashed lines for guiding
    guides: true,
    // Show the center indicator for guiding
    center: true,
    // Show the white modal to highlight the crop box
    highlight: true,
    // Show the grid background
    background: true,
    // Enable to crop the image automatically when initialize
    autoCrop: true,
    // Define the percentage of automatic cropping area when initializes
    autoCropArea: 0.8,
    // Enable to move the image
    movable: true,
    // Enable to rotate the image
    rotatable: true,
    // Enable to scale the image
    scalable: true,
    // Enable to zoom the image
    zoomable: true,
    // Enable to zoom the image by dragging touch
    zoomOnTouch: true,
    // Enable to zoom the image by wheeling mouse
    zoomOnWheel: true,
    // Define zoom ratio when zoom the image by wheeling mouse
    wheelZoomRatio: 0.1,
    // Enable to move the crop box
    cropBoxMovable: true,
    // Enable to resize the crop box
    cropBoxResizable: true,
    // Toggle drag mode between "crop" and "move" when click twice on the cropper
    toggleDragModeOnDblclick: true,
    // Size limitation
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: 200,
    minContainerHeight: 100,
    // Shortcuts of events
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  };

  var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + '</div>' + '</div>';

  /**
   * Check if the given value is not a number.
   */

  var isNaN = Number.isNaN || WINDOW.isNaN;
  /**
   * Check if the given value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a number, else `false`.
   */

  function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  /**
   * Check if the given value is a positive number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
   */

  var isPositiveNumber = function isPositiveNumber(value) {
    return value > 0 && value < Infinity;
  };
  /**
   * Check if the given value is undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
   */

  function isUndefined(value) {
    return typeof value === 'undefined';
  }
  /**
   * Check if the given value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is an object, else `false`.
   */

  function isObject(value) {
    return _typeof(value) === 'object' && value !== null;
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /**
   * Check if the given value is a plain object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
   */

  function isPlainObject(value) {
    if (!isObject(value)) {
      return false;
    }

    try {
      var _constructor = value.constructor;
      var prototype = _constructor.prototype;
      return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
    } catch (error) {
      return false;
    }
  }
  /**
   * Check if the given value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a function, else `false`.
   */

  function isFunction(value) {
    return typeof value === 'function';
  }
  var slice = Array.prototype.slice;
  /**
   * Convert array-like or iterable object to an array.
   * @param {*} value - The value to convert.
   * @returns {Array} Returns a new array.
   */

  function toArray(value) {
    return Array.from ? Array.from(value) : slice.call(value);
  }
  /**
   * Iterate the given data.
   * @param {*} data - The data to iterate.
   * @param {Function} callback - The process function for each element.
   * @returns {*} The original data.
   */

  function forEach(data, callback) {
    if (data && isFunction(callback)) {
      if (Array.isArray(data) || isNumber(data.length)
      /* array-like */
      ) {
          toArray(data).forEach(function (value, key) {
            callback.call(data, value, key, data);
          });
        } else if (isObject(data)) {
        Object.keys(data).forEach(function (key) {
          callback.call(data, data[key], key, data);
        });
      }
    }

    return data;
  }
  /**
   * Extend the given object.
   * @param {*} target - The target object to extend.
   * @param {*} args - The rest objects for merging to the target object.
   * @returns {Object} The extended object.
   */

  var assign = Object.assign || function assign(target) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (isObject(target) && args.length > 0) {
      args.forEach(function (arg) {
        if (isObject(arg)) {
          Object.keys(arg).forEach(function (key) {
            target[key] = arg[key];
          });
        }
      });
    }

    return target;
  };
  var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
  /**
   * Normalize decimal number.
   * Check out {@link https://0.30000000000000004.com/}
   * @param {number} value - The value to normalize.
   * @param {number} [times=100000000000] - The times for normalizing.
   * @returns {number} Returns the normalized number.
   */

  function normalizeDecimalNumber(value) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
    return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
  }
  var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
  /**
   * Apply styles to the given element.
   * @param {Element} element - The target element.
   * @param {Object} styles - The styles for applying.
   */

  function setStyle(element, styles) {
    var style = element.style;
    forEach(styles, function (value, property) {
      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
        value = "".concat(value, "px");
      }

      style[property] = value;
    });
  }
  /**
   * Check if the given element has a special class.
   * @param {Element} element - The element to check.
   * @param {string} value - The class to search.
   * @returns {boolean} Returns `true` if the special class was found.
   */

  function hasClass(element, value) {
    return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
  }
  /**
   * Add classes to the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be added.
   */

  function addClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        addClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.add(value);
      return;
    }

    var className = element.className.trim();

    if (!className) {
      element.className = value;
    } else if (className.indexOf(value) < 0) {
      element.className = "".concat(className, " ").concat(value);
    }
  }
  /**
   * Remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be removed.
   */

  function removeClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        removeClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.remove(value);
      return;
    }

    if (element.className.indexOf(value) >= 0) {
      element.className = element.className.replace(value, '');
    }
  }
  /**
   * Add or remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be toggled.
   * @param {boolean} added - Add only.
   */

  function toggleClass(element, value, added) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        toggleClass(elem, value, added);
      });
      return;
    } // IE10-11 doesn't support the second parameter of `classList.toggle`


    if (added) {
      addClass(element, value);
    } else {
      removeClass(element, value);
    }
  }
  var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
  /**
   * Transform the given string from camelCase to kebab-case
   * @param {string} value - The value to transform.
   * @returns {string} The transformed value.
   */

  function toParamCase(value) {
    return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
  }
  /**
   * Get data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to get.
   * @returns {string} The data value.
   */

  function getData(element, name) {
    if (isObject(element[name])) {
      return element[name];
    }

    if (element.dataset) {
      return element.dataset[name];
    }

    return element.getAttribute("data-".concat(toParamCase(name)));
  }
  /**
   * Set data to the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to set.
   * @param {string} data - The data value.
   */

  function setData(element, name, data) {
    if (isObject(data)) {
      element[name] = data;
    } else if (element.dataset) {
      element.dataset[name] = data;
    } else {
      element.setAttribute("data-".concat(toParamCase(name)), data);
    }
  }
  /**
   * Remove data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to remove.
   */

  function removeData(element, name) {
    if (isObject(element[name])) {
      try {
        delete element[name];
      } catch (error) {
        element[name] = undefined;
      }
    } else if (element.dataset) {
      // #128 Safari not allows to delete dataset property
      try {
        delete element.dataset[name];
      } catch (error) {
        element.dataset[name] = undefined;
      }
    } else {
      element.removeAttribute("data-".concat(toParamCase(name)));
    }
  }
  var REGEXP_SPACES = /\s\s*/;

  var onceSupported = function () {
    var supported = false;

    if (IS_BROWSER) {
      var once = false;

      var listener = function listener() {};

      var options = Object.defineProperty({}, 'once', {
        get: function get() {
          supported = true;
          return once;
        },

        /**
         * This setter can fix a `TypeError` in strict mode
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
         * @param {boolean} value - The value to set
         */
        set: function set(value) {
          once = value;
        }
      });
      WINDOW.addEventListener('test', listener, options);
      WINDOW.removeEventListener('test', listener, options);
    }

    return supported;
  }();
  /**
   * Remove event listener from the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */


  function removeListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (!onceSupported) {
        var listeners = element.listeners;

        if (listeners && listeners[event] && listeners[event][listener]) {
          handler = listeners[event][listener];
          delete listeners[event][listener];

          if (Object.keys(listeners[event]).length === 0) {
            delete listeners[event];
          }

          if (Object.keys(listeners).length === 0) {
            delete element.listeners;
          }
        }
      }

      element.removeEventListener(event, handler, options);
    });
  }
  /**
   * Add event listener to the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */

  function addListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var _handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (options.once && !onceSupported) {
        var _element$listeners = element.listeners,
            listeners = _element$listeners === void 0 ? {} : _element$listeners;

        _handler = function handler() {
          delete listeners[event][listener];
          element.removeEventListener(event, _handler, options);

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          listener.apply(element, args);
        };

        if (!listeners[event]) {
          listeners[event] = {};
        }

        if (listeners[event][listener]) {
          element.removeEventListener(event, listeners[event][listener], options);
        }

        listeners[event][listener] = _handler;
        element.listeners = listeners;
      }

      element.addEventListener(event, _handler, options);
    });
  }
  /**
   * Dispatch event on the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Object} data - The additional event data.
   * @returns {boolean} Indicate if the event is default prevented or not.
   */

  function dispatchEvent(element, type, data) {
    var event; // Event and CustomEvent on IE9-11 are global objects, not constructors

    if (isFunction(Event) && isFunction(CustomEvent)) {
      event = new CustomEvent(type, {
        detail: data,
        bubbles: true,
        cancelable: true
      });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data);
    }

    return element.dispatchEvent(event);
  }
  /**
   * Get the offset base on the document.
   * @param {Element} element - The target element.
   * @returns {Object} The offset data.
   */

  function getOffset(element) {
    var box = element.getBoundingClientRect();
    return {
      left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: box.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }
  var location = WINDOW.location;
  var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
  /**
   * Check if the given URL is a cross origin URL.
   * @param {string} url - The target URL.
   * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
   */

  function isCrossOriginURL(url) {
    var parts = url.match(REGEXP_ORIGINS);
    return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
  }
  /**
   * Add timestamp to the given URL.
   * @param {string} url - The target URL.
   * @returns {string} The result URL.
   */

  function addTimestamp(url) {
    var timestamp = "timestamp=".concat(new Date().getTime());
    return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
  }
  /**
   * Get transforms base on the given object.
   * @param {Object} obj - The target object.
   * @returns {string} A string contains transform values.
   */

  function getTransforms(_ref) {
    var rotate = _ref.rotate,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        translateX = _ref.translateX,
        translateY = _ref.translateY;
    var values = [];

    if (isNumber(translateX) && translateX !== 0) {
      values.push("translateX(".concat(translateX, "px)"));
    }

    if (isNumber(translateY) && translateY !== 0) {
      values.push("translateY(".concat(translateY, "px)"));
    } // Rotate should come first before scale to match orientation transform


    if (isNumber(rotate) && rotate !== 0) {
      values.push("rotate(".concat(rotate, "deg)"));
    }

    if (isNumber(scaleX) && scaleX !== 1) {
      values.push("scaleX(".concat(scaleX, ")"));
    }

    if (isNumber(scaleY) && scaleY !== 1) {
      values.push("scaleY(".concat(scaleY, ")"));
    }

    var transform = values.length ? values.join(' ') : 'none';
    return {
      WebkitTransform: transform,
      msTransform: transform,
      transform: transform
    };
  }
  /**
   * Get the max ratio of a group of pointers.
   * @param {string} pointers - The target pointers.
   * @returns {number} The result ratio.
   */

  function getMaxZoomRatio(pointers) {
    var pointers2 = _objectSpread2({}, pointers);

    var ratios = [];
    forEach(pointers, function (pointer, pointerId) {
      delete pointers2[pointerId];
      forEach(pointers2, function (pointer2) {
        var x1 = Math.abs(pointer.startX - pointer2.startX);
        var y1 = Math.abs(pointer.startY - pointer2.startY);
        var x2 = Math.abs(pointer.endX - pointer2.endX);
        var y2 = Math.abs(pointer.endY - pointer2.endY);
        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
        var z2 = Math.sqrt(x2 * x2 + y2 * y2);
        var ratio = (z2 - z1) / z1;
        ratios.push(ratio);
      });
    });
    ratios.sort(function (a, b) {
      return Math.abs(a) < Math.abs(b);
    });
    return ratios[0];
  }
  /**
   * Get a pointer from an event object.
   * @param {Object} event - The target event object.
   * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
   * @returns {Object} The result pointer contains start and/or end point coordinates.
   */

  function getPointer(_ref2, endOnly) {
    var pageX = _ref2.pageX,
        pageY = _ref2.pageY;
    var end = {
      endX: pageX,
      endY: pageY
    };
    return endOnly ? end : _objectSpread2({
      startX: pageX,
      startY: pageY
    }, end);
  }
  /**
   * Get the center point coordinate of a group of pointers.
   * @param {Object} pointers - The target pointers.
   * @returns {Object} The center point coordinate.
   */

  function getPointersCenter(pointers) {
    var pageX = 0;
    var pageY = 0;
    var count = 0;
    forEach(pointers, function (_ref3) {
      var startX = _ref3.startX,
          startY = _ref3.startY;
      pageX += startX;
      pageY += startY;
      count += 1;
    });
    pageX /= count;
    pageY /= count;
    return {
      pageX: pageX,
      pageY: pageY
    };
  }
  /**
   * Get the max sizes in a rectangle under the given aspect ratio.
   * @param {Object} data - The original sizes.
   * @param {string} [type='contain'] - The adjust type.
   * @returns {Object} The result sizes.
   */

  function getAdjustedSizes(_ref4) // or 'cover'
  {
    var aspectRatio = _ref4.aspectRatio,
        height = _ref4.height,
        width = _ref4.width;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
    var isValidWidth = isPositiveNumber(width);
    var isValidHeight = isPositiveNumber(height);

    if (isValidWidth && isValidHeight) {
      var adjustedWidth = height * aspectRatio;

      if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
        height = width / aspectRatio;
      } else {
        width = height * aspectRatio;
      }
    } else if (isValidWidth) {
      height = width / aspectRatio;
    } else if (isValidHeight) {
      width = height * aspectRatio;
    }

    return {
      width: width,
      height: height
    };
  }
  /**
   * Get the new sizes of a rectangle after rotated.
   * @param {Object} data - The original sizes.
   * @returns {Object} The result sizes.
   */

  function getRotatedSizes(_ref5) {
    var width = _ref5.width,
        height = _ref5.height,
        degree = _ref5.degree;
    degree = Math.abs(degree) % 180;

    if (degree === 90) {
      return {
        width: height,
        height: width
      };
    }

    var arc = degree % 90 * Math.PI / 180;
    var sinArc = Math.sin(arc);
    var cosArc = Math.cos(arc);
    var newWidth = width * cosArc + height * sinArc;
    var newHeight = width * sinArc + height * cosArc;
    return degree > 90 ? {
      width: newHeight,
      height: newWidth
    } : {
      width: newWidth,
      height: newHeight
    };
  }
  /**
   * Get a canvas which drew the given image.
   * @param {HTMLImageElement} image - The image for drawing.
   * @param {Object} imageData - The image data.
   * @param {Object} canvasData - The canvas data.
   * @param {Object} options - The options.
   * @returns {HTMLCanvasElement} The result canvas.
   */

  function getSourceCanvas(image, _ref6, _ref7, _ref8) {
    var imageAspectRatio = _ref6.aspectRatio,
        imageNaturalWidth = _ref6.naturalWidth,
        imageNaturalHeight = _ref6.naturalHeight,
        _ref6$rotate = _ref6.rotate,
        rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate,
        _ref6$scaleX = _ref6.scaleX,
        scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX,
        _ref6$scaleY = _ref6.scaleY,
        scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
    var aspectRatio = _ref7.aspectRatio,
        naturalWidth = _ref7.naturalWidth,
        naturalHeight = _ref7.naturalHeight;
    var _ref8$fillColor = _ref8.fillColor,
        fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor,
        _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
        imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE,
        _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
        imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ,
        _ref8$maxWidth = _ref8.maxWidth,
        maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth,
        _ref8$maxHeight = _ref8.maxHeight,
        maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight,
        _ref8$minWidth = _ref8.minWidth,
        minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth,
        _ref8$minHeight = _ref8.minHeight,
        minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var maxSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var minSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
    var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight)); // Note: should always use image's natural sizes for drawing as
    // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90

    var destMaxSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var destMinSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
    var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
    var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = fillColor;
    context.fillRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    context.rotate(rotate * Math.PI / 180);
    context.scale(scaleX, scaleY);
    context.imageSmoothingEnabled = imageSmoothingEnabled;
    context.imageSmoothingQuality = imageSmoothingQuality;
    context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function (param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    context.restore();
    return canvas;
  }
  var fromCharCode = String.fromCharCode;
  /**
   * Get string from char code in data view.
   * @param {DataView} dataView - The data view for read.
   * @param {number} start - The start index.
   * @param {number} length - The read length.
   * @returns {string} The read result.
   */

  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    length += start;

    for (var i = start; i < length; i += 1) {
      str += fromCharCode(dataView.getUint8(i));
    }

    return str;
  }
  var REGEXP_DATA_URL_HEAD = /^data:.*,/;
  /**
   * Transform Data URL to array buffer.
   * @param {string} dataURL - The Data URL to transform.
   * @returns {ArrayBuffer} The result array buffer.
   */

  function dataURLToArrayBuffer(dataURL) {
    var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
    var binary = atob(base64);
    var arrayBuffer = new ArrayBuffer(binary.length);
    var uint8 = new Uint8Array(arrayBuffer);
    forEach(uint8, function (value, i) {
      uint8[i] = binary.charCodeAt(i);
    });
    return arrayBuffer;
  }
  /**
   * Transform array buffer to Data URL.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
   * @param {string} mimeType - The mime type of the Data URL.
   * @returns {string} The result Data URL.
   */

  function arrayBufferToDataURL(arrayBuffer, mimeType) {
    var chunks = []; // Chunk Typed Array for better performance (#435)

    var chunkSize = 8192;
    var uint8 = new Uint8Array(arrayBuffer);

    while (uint8.length > 0) {
      // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
      // eslint-disable-next-line prefer-spread
      chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
      uint8 = uint8.subarray(chunkSize);
    }

    return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
  }
  /**
   * Get orientation value from given array buffer.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
   * @returns {number} The read orientation value.
   */

  function resetAndGetOrientation(arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var orientation; // Ignores range error when the image does not have correct Exif information

    try {
      var littleEndian;
      var app1Start;
      var ifdStart; // Only handle JPEG image (start by 0xFFD8)

      if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
        var length = dataView.byteLength;
        var offset = 2;

        while (offset + 1 < length) {
          if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
            app1Start = offset;
            break;
          }

          offset += 1;
        }
      }

      if (app1Start) {
        var exifIDCode = app1Start + 4;
        var tiffOffset = app1Start + 10;

        if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
          var endianness = dataView.getUint16(tiffOffset);
          littleEndian = endianness === 0x4949;

          if (littleEndian || endianness === 0x4D4D
          /* bigEndian */
          ) {
              if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
                var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

                if (firstIFDOffset >= 0x00000008) {
                  ifdStart = tiffOffset + firstIFDOffset;
                }
              }
            }
        }
      }

      if (ifdStart) {
        var _length = dataView.getUint16(ifdStart, littleEndian);

        var _offset;

        var i;

        for (i = 0; i < _length; i += 1) {
          _offset = ifdStart + i * 12 + 2;

          if (dataView.getUint16(_offset, littleEndian) === 0x0112
          /* Orientation */
          ) {
              // 8 is the offset of the current tag's value
              _offset += 8; // Get the original orientation value

              orientation = dataView.getUint16(_offset, littleEndian); // Override the orientation with its default value

              dataView.setUint16(_offset, 1, littleEndian);
              break;
            }
        }
      }
    } catch (error) {
      orientation = 1;
    }

    return orientation;
  }
  /**
   * Parse Exif Orientation value.
   * @param {number} orientation - The orientation to parse.
   * @returns {Object} The parsed result.
   */

  function parseOrientation(orientation) {
    var rotate = 0;
    var scaleX = 1;
    var scaleY = 1;

    switch (orientation) {
      // Flip horizontal
      case 2:
        scaleX = -1;
        break;
      // Rotate left 180°

      case 3:
        rotate = -180;
        break;
      // Flip vertical

      case 4:
        scaleY = -1;
        break;
      // Flip vertical and rotate right 90°

      case 5:
        rotate = 90;
        scaleY = -1;
        break;
      // Rotate right 90°

      case 6:
        rotate = 90;
        break;
      // Flip horizontal and rotate right 90°

      case 7:
        rotate = 90;
        scaleX = -1;
        break;
      // Rotate left 90°

      case 8:
        rotate = -90;
        break;
    }

    return {
      rotate: rotate,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var render = {
    render: function render() {
      this.initContainer();
      this.initCanvas();
      this.initCropBox();
      this.renderCanvas();

      if (this.cropped) {
        this.renderCropBox();
      }
    },
    initContainer: function initContainer() {
      var element = this.element,
          options = this.options,
          container = this.container,
          cropper = this.cropper;
      addClass(cropper, CLASS_HIDDEN);
      removeClass(element, CLASS_HIDDEN);
      var containerData = {
        width: Math.max(container.offsetWidth, Number(options.minContainerWidth) || 200),
        height: Math.max(container.offsetHeight, Number(options.minContainerHeight) || 100)
      };
      this.containerData = containerData;
      setStyle(cropper, {
        width: containerData.width,
        height: containerData.height
      });
      addClass(element, CLASS_HIDDEN);
      removeClass(cropper, CLASS_HIDDEN);
    },
    // Canvas (image wrapper)
    initCanvas: function initCanvas() {
      var containerData = this.containerData,
          imageData = this.imageData;
      var viewMode = this.options.viewMode;
      var rotated = Math.abs(imageData.rotate) % 180 === 90;
      var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
      var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
      var aspectRatio = naturalWidth / naturalHeight;
      var canvasWidth = containerData.width;
      var canvasHeight = containerData.height;

      if (containerData.height * aspectRatio > containerData.width) {
        if (viewMode === 3) {
          canvasWidth = containerData.height * aspectRatio;
        } else {
          canvasHeight = containerData.width / aspectRatio;
        }
      } else if (viewMode === 3) {
        canvasHeight = containerData.width / aspectRatio;
      } else {
        canvasWidth = containerData.height * aspectRatio;
      }

      var canvasData = {
        aspectRatio: aspectRatio,
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
        width: canvasWidth,
        height: canvasHeight
      };
      canvasData.left = (containerData.width - canvasWidth) / 2;
      canvasData.top = (containerData.height - canvasHeight) / 2;
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      this.canvasData = canvasData;
      this.limited = viewMode === 1 || viewMode === 2;
      this.limitCanvas(true, true);
      this.initialImageData = assign({}, imageData);
      this.initialCanvasData = assign({}, canvasData);
    },
    limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var viewMode = options.viewMode;
      var aspectRatio = canvasData.aspectRatio;
      var cropped = this.cropped && cropBoxData;

      if (sizeLimited) {
        var minCanvasWidth = Number(options.minCanvasWidth) || 0;
        var minCanvasHeight = Number(options.minCanvasHeight) || 0;

        if (viewMode > 1) {
          minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
          minCanvasHeight = Math.max(minCanvasHeight, containerData.height);

          if (viewMode === 3) {
            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        } else if (viewMode > 0) {
          if (minCanvasWidth) {
            minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
          } else if (minCanvasHeight) {
            minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
          } else if (cropped) {
            minCanvasWidth = cropBoxData.width;
            minCanvasHeight = cropBoxData.height;

            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        }

        var _getAdjustedSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: minCanvasWidth,
          height: minCanvasHeight
        });

        minCanvasWidth = _getAdjustedSizes.width;
        minCanvasHeight = _getAdjustedSizes.height;
        canvasData.minWidth = minCanvasWidth;
        canvasData.minHeight = minCanvasHeight;
        canvasData.maxWidth = Infinity;
        canvasData.maxHeight = Infinity;
      }

      if (positionLimited) {
        if (viewMode > (cropped ? 0 : 1)) {
          var newCanvasLeft = containerData.width - canvasData.width;
          var newCanvasTop = containerData.height - canvasData.height;
          canvasData.minLeft = Math.min(0, newCanvasLeft);
          canvasData.minTop = Math.min(0, newCanvasTop);
          canvasData.maxLeft = Math.max(0, newCanvasLeft);
          canvasData.maxTop = Math.max(0, newCanvasTop);

          if (cropped && this.limited) {
            canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
            canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
            canvasData.maxLeft = cropBoxData.left;
            canvasData.maxTop = cropBoxData.top;

            if (viewMode === 2) {
              if (canvasData.width >= containerData.width) {
                canvasData.minLeft = Math.min(0, newCanvasLeft);
                canvasData.maxLeft = Math.max(0, newCanvasLeft);
              }

              if (canvasData.height >= containerData.height) {
                canvasData.minTop = Math.min(0, newCanvasTop);
                canvasData.maxTop = Math.max(0, newCanvasTop);
              }
            }
          }
        } else {
          canvasData.minLeft = -canvasData.width;
          canvasData.minTop = -canvasData.height;
          canvasData.maxLeft = containerData.width;
          canvasData.maxTop = containerData.height;
        }
      }
    },
    renderCanvas: function renderCanvas(changed, transformed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;

      if (transformed) {
        var _getRotatedSizes = getRotatedSizes({
          width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
          height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
          degree: imageData.rotate || 0
        }),
            naturalWidth = _getRotatedSizes.width,
            naturalHeight = _getRotatedSizes.height;

        var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
        var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
        canvasData.left -= (width - canvasData.width) / 2;
        canvasData.top -= (height - canvasData.height) / 2;
        canvasData.width = width;
        canvasData.height = height;
        canvasData.aspectRatio = naturalWidth / naturalHeight;
        canvasData.naturalWidth = naturalWidth;
        canvasData.naturalHeight = naturalHeight;
        this.limitCanvas(true, false);
      }

      if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
        canvasData.left = canvasData.oldLeft;
      }

      if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
        canvasData.top = canvasData.oldTop;
      }

      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      this.limitCanvas(false, true);
      canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
      canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      setStyle(this.canvas, assign({
        width: canvasData.width,
        height: canvasData.height
      }, getTransforms({
        translateX: canvasData.left,
        translateY: canvasData.top
      })));
      this.renderImage(changed);

      if (this.cropped && this.limited) {
        this.limitCropBox(true, true);
      }
    },
    renderImage: function renderImage(changed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;
      var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
      var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
      assign(imageData, {
        width: width,
        height: height,
        left: (canvasData.width - width) / 2,
        top: (canvasData.height - height) / 2
      });
      setStyle(this.image, assign({
        width: imageData.width,
        height: imageData.height
      }, getTransforms(assign({
        translateX: imageData.left,
        translateY: imageData.top
      }, imageData))));

      if (changed) {
        this.output();
      }
    },
    initCropBox: function initCropBox() {
      var options = this.options,
          canvasData = this.canvasData;
      var aspectRatio = options.aspectRatio || options.initialAspectRatio;
      var autoCropArea = Number(options.autoCropArea) || 0.8;
      var cropBoxData = {
        width: canvasData.width,
        height: canvasData.height
      };

      if (aspectRatio) {
        if (canvasData.height * aspectRatio > canvasData.width) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }

      this.cropBoxData = cropBoxData;
      this.limitCropBox(true, true); // Initialize auto crop area

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight); // The width/height of auto crop area must large than "minWidth/Height"

      cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
      cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
      cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
      cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;
      this.initialCropBoxData = assign({}, cropBoxData);
    },
    limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData,
          limited = this.limited;
      var aspectRatio = options.aspectRatio;

      if (sizeLimited) {
        var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
        var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
        var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
        var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height; // The min/maxCropBoxWidth/Height must be less than container's width/height

        minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
        minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);

        if (aspectRatio) {
          if (minCropBoxWidth && minCropBoxHeight) {
            if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
              minCropBoxHeight = minCropBoxWidth / aspectRatio;
            } else {
              minCropBoxWidth = minCropBoxHeight * aspectRatio;
            }
          } else if (minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else if (minCropBoxHeight) {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }

          if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
            maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
          } else {
            maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
          }
        } // The minWidth/Height must be less than maxWidth/Height


        cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
        cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
        cropBoxData.maxWidth = maxCropBoxWidth;
        cropBoxData.maxHeight = maxCropBoxHeight;
      }

      if (positionLimited) {
        if (limited) {
          cropBoxData.minLeft = Math.max(0, canvasData.left);
          cropBoxData.minTop = Math.max(0, canvasData.top);
          cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
          cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
        } else {
          cropBoxData.minLeft = 0;
          cropBoxData.minTop = 0;
          cropBoxData.maxLeft = containerData.width - cropBoxData.width;
          cropBoxData.maxTop = containerData.height - cropBoxData.height;
        }
      }
    },
    renderCropBox: function renderCropBox() {
      var options = this.options,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData;

      if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
        cropBoxData.left = cropBoxData.oldLeft;
      }

      if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
        cropBoxData.top = cropBoxData.oldTop;
      }

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
      this.limitCropBox(false, true);
      cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
      cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;

      if (options.movable && options.cropBoxMovable) {
        // Turn to move the canvas when the crop box is equal to the container
        setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
      }

      setStyle(this.cropBox, assign({
        width: cropBoxData.width,
        height: cropBoxData.height
      }, getTransforms({
        translateX: cropBoxData.left,
        translateY: cropBoxData.top
      })));

      if (this.cropped && this.limited) {
        this.limitCanvas(true, true);
      }

      if (!this.disabled) {
        this.output();
      }
    },
    output: function output() {
      this.preview();
      dispatchEvent(this.element, EVENT_CROP, this.getData());
    }
  };

  var preview = {
    initPreview: function initPreview() {
      var element = this.element,
          crossOrigin = this.crossOrigin;
      var preview = this.options.preview;
      var url = crossOrigin ? this.crossOriginUrl : this.url;
      var alt = element.alt || 'The image to preview';
      var image = document.createElement('img');

      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }

      image.src = url;
      image.alt = alt;
      this.viewBox.appendChild(image);
      this.viewBoxImage = image;

      if (!preview) {
        return;
      }

      var previews = preview;

      if (typeof preview === 'string') {
        previews = element.ownerDocument.querySelectorAll(preview);
      } else if (preview.querySelector) {
        previews = [preview];
      }

      this.previews = previews;
      forEach(previews, function (el) {
        var img = document.createElement('img'); // Save the original size for recover

        setData(el, DATA_PREVIEW, {
          width: el.offsetWidth,
          height: el.offsetHeight,
          html: el.innerHTML
        });

        if (crossOrigin) {
          img.crossOrigin = crossOrigin;
        }

        img.src = url;
        img.alt = alt;
        /**
         * Override img element styles
         * Add `display:block` to avoid margin top issue
         * Add `height:auto` to override `height` attribute on IE8
         * (Occur only when margin-top <= -height)
         */

        img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
        el.innerHTML = '';
        el.appendChild(img);
      });
    },
    resetPreview: function resetPreview() {
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        setStyle(element, {
          width: data.width,
          height: data.height
        });
        element.innerHTML = data.html;
        removeData(element, DATA_PREVIEW);
      });
    },
    preview: function preview() {
      var imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var cropBoxWidth = cropBoxData.width,
          cropBoxHeight = cropBoxData.height;
      var width = imageData.width,
          height = imageData.height;
      var left = cropBoxData.left - canvasData.left - imageData.left;
      var top = cropBoxData.top - canvasData.top - imageData.top;

      if (!this.cropped || this.disabled) {
        return;
      }

      setStyle(this.viewBoxImage, assign({
        width: width,
        height: height
      }, getTransforms(assign({
        translateX: -left,
        translateY: -top
      }, imageData))));
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        var originalWidth = data.width;
        var originalHeight = data.height;
        var newWidth = originalWidth;
        var newHeight = originalHeight;
        var ratio = 1;

        if (cropBoxWidth) {
          ratio = originalWidth / cropBoxWidth;
          newHeight = cropBoxHeight * ratio;
        }

        if (cropBoxHeight && newHeight > originalHeight) {
          ratio = originalHeight / cropBoxHeight;
          newWidth = cropBoxWidth * ratio;
          newHeight = originalHeight;
        }

        setStyle(element, {
          width: newWidth,
          height: newHeight
        });
        setStyle(element.getElementsByTagName('img')[0], assign({
          width: width * ratio,
          height: height * ratio
        }, getTransforms(assign({
          translateX: -left * ratio,
          translateY: -top * ratio
        }, imageData))));
      });
    }
  };

  var events = {
    bind: function bind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        addListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        addListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        addListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        addListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        addListener(element, EVENT_ZOOM, options.zoom);
      }

      addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));

      if (options.zoomable && options.zoomOnWheel) {
        addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
      }

      addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
      addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));

      if (options.responsive) {
        addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
      }
    },
    unbind: function unbind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        removeListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        removeListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        removeListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        removeListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        removeListener(element, EVENT_ZOOM, options.zoom);
      }

      removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);

      if (options.zoomable && options.zoomOnWheel) {
        removeListener(cropper, EVENT_WHEEL, this.onWheel, {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
      }

      removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
      removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);

      if (options.responsive) {
        removeListener(window, EVENT_RESIZE, this.onResize);
      }
    }
  };

  var handlers = {
    resize: function resize() {
      if (this.disabled) {
        return;
      }

      var options = this.options,
          container = this.container,
          containerData = this.containerData;
      var ratio = container.offsetWidth / containerData.width; // Resize when width changed or height changed

      if (ratio !== 1 || container.offsetHeight !== containerData.height) {
        var canvasData;
        var cropBoxData;

        if (options.restore) {
          canvasData = this.getCanvasData();
          cropBoxData = this.getCropBoxData();
        }

        this.render();

        if (options.restore) {
          this.setCanvasData(forEach(canvasData, function (n, i) {
            canvasData[i] = n * ratio;
          }));
          this.setCropBoxData(forEach(cropBoxData, function (n, i) {
            cropBoxData[i] = n * ratio;
          }));
        }
      }
    },
    dblclick: function dblclick() {
      if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
        return;
      }

      this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
    },
    wheel: function wheel(event) {
      var _this = this;

      var ratio = Number(this.options.wheelZoomRatio) || 0.1;
      var delta = 1;

      if (this.disabled) {
        return;
      }

      event.preventDefault(); // Limit wheel speed to prevent zoom too fast (#21)

      if (this.wheeling) {
        return;
      }

      this.wheeling = true;
      setTimeout(function () {
        _this.wheeling = false;
      }, 50);

      if (event.deltaY) {
        delta = event.deltaY > 0 ? 1 : -1;
      } else if (event.wheelDelta) {
        delta = -event.wheelDelta / 120;
      } else if (event.detail) {
        delta = event.detail > 0 ? 1 : -1;
      }

      this.zoom(-delta * ratio, event);
    },
    cropStart: function cropStart(event) {
      var buttons = event.buttons,
          button = event.button;

      if (this.disabled // Handle mouse event and pointer event and ignore touch event
      || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && ( // No primary button (Usually the left button)
      isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 // Open context menu
      || event.ctrlKey)) {
        return;
      }

      var options = this.options,
          pointers = this.pointers;
      var action;

      if (event.changedTouches) {
        // Handle touch event
        forEach(event.changedTouches, function (touch) {
          pointers[touch.identifier] = getPointer(touch);
        });
      } else {
        // Handle mouse event and pointer event
        pointers[event.pointerId || 0] = getPointer(event);
      }

      if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
        action = ACTION_ZOOM;
      } else {
        action = getData(event.target, DATA_ACTION);
      }

      if (!REGEXP_ACTIONS.test(action)) {
        return;
      }

      if (dispatchEvent(this.element, EVENT_CROP_START, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      } // This line is required for preventing page zooming in iOS browsers


      event.preventDefault();
      this.action = action;
      this.cropping = false;

      if (action === ACTION_CROP) {
        this.cropping = true;
        addClass(this.dragBox, CLASS_MODAL);
      }
    },
    cropMove: function cropMove(event) {
      var action = this.action;

      if (this.disabled || !action) {
        return;
      }

      var pointers = this.pointers;
      event.preventDefault();

      if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      }

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          // The first parameter should not be undefined (#432)
          assign(pointers[touch.identifier] || {}, getPointer(touch, true));
        });
      } else {
        assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
      }

      this.change(event);
    },
    cropEnd: function cropEnd(event) {
      if (this.disabled) {
        return;
      }

      var action = this.action,
          pointers = this.pointers;

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          delete pointers[touch.identifier];
        });
      } else {
        delete pointers[event.pointerId || 0];
      }

      if (!action) {
        return;
      }

      event.preventDefault();

      if (!Object.keys(pointers).length) {
        this.action = '';
      }

      if (this.cropping) {
        this.cropping = false;
        toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
      }

      dispatchEvent(this.element, EVENT_CROP_END, {
        originalEvent: event,
        action: action
      });
    }
  };

  var change = {
    change: function change(event) {
      var options = this.options,
          canvasData = this.canvasData,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData,
          pointers = this.pointers;
      var action = this.action;
      var aspectRatio = options.aspectRatio;
      var left = cropBoxData.left,
          top = cropBoxData.top,
          width = cropBoxData.width,
          height = cropBoxData.height;
      var right = left + width;
      var bottom = top + height;
      var minLeft = 0;
      var minTop = 0;
      var maxWidth = containerData.width;
      var maxHeight = containerData.height;
      var renderable = true;
      var offset; // Locking aspect ratio in "free mode" by holding shift key

      if (!aspectRatio && event.shiftKey) {
        aspectRatio = width && height ? width / height : 1;
      }

      if (this.limited) {
        minLeft = cropBoxData.minLeft;
        minTop = cropBoxData.minTop;
        maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
        maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
      }

      var pointer = pointers[Object.keys(pointers)[0]];
      var range = {
        x: pointer.endX - pointer.startX,
        y: pointer.endY - pointer.startY
      };

      var check = function check(side) {
        switch (side) {
          case ACTION_EAST:
            if (right + range.x > maxWidth) {
              range.x = maxWidth - right;
            }

            break;

          case ACTION_WEST:
            if (left + range.x < minLeft) {
              range.x = minLeft - left;
            }

            break;

          case ACTION_NORTH:
            if (top + range.y < minTop) {
              range.y = minTop - top;
            }

            break;

          case ACTION_SOUTH:
            if (bottom + range.y > maxHeight) {
              range.y = maxHeight - bottom;
            }

            break;
        }
      };

      switch (action) {
        // Move crop box
        case ACTION_ALL:
          left += range.x;
          top += range.y;
          break;
        // Resize crop box

        case ACTION_EAST:
          if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_EAST);
          width += range.x;

          if (width < 0) {
            action = ACTION_WEST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_NORTH:
          if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;

          if (height < 0) {
            action = ACTION_SOUTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_WEST:
          if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_WEST);
          width -= range.x;
          left += range.x;

          if (width < 0) {
            action = ACTION_EAST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_SOUTH:
          if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_SOUTH);
          height += range.y;

          if (height < 0) {
            action = ACTION_NORTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_NORTH_EAST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
          } else {
            check(ACTION_NORTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_NORTH_WEST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
            left += cropBoxData.width - width;
          } else {
            check(ACTION_NORTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_WEST:
          if (aspectRatio) {
            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_WEST);
            width -= range.x;
            left += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_EAST:
          if (aspectRatio) {
            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_EAST);
            width += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            top -= height;
          }

          break;
        // Move canvas

        case ACTION_MOVE:
          this.move(range.x, range.y);
          renderable = false;
          break;
        // Zoom canvas

        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(pointers), event);
          renderable = false;
          break;
        // Create crop box

        case ACTION_CROP:
          if (!range.x || !range.y) {
            renderable = false;
            break;
          }

          offset = getOffset(this.cropper);
          left = pointer.startX - offset.left;
          top = pointer.startY - offset.top;
          width = cropBoxData.minWidth;
          height = cropBoxData.minHeight;

          if (range.x > 0) {
            action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
          } else if (range.x < 0) {
            left -= width;
            action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
          }

          if (range.y < 0) {
            top -= height;
          } // Show the crop box if is hidden


          if (!this.cropped) {
            removeClass(this.cropBox, CLASS_HIDDEN);
            this.cropped = true;

            if (this.limited) {
              this.limitCropBox(true, true);
            }
          }

          break;
      }

      if (renderable) {
        cropBoxData.width = width;
        cropBoxData.height = height;
        cropBoxData.left = left;
        cropBoxData.top = top;
        this.action = action;
        this.renderCropBox();
      } // Override


      forEach(pointers, function (p) {
        p.startX = p.endX;
        p.startY = p.endY;
      });
    }
  };

  var methods = {
    // Show the crop box manually
    crop: function crop() {
      if (this.ready && !this.cropped && !this.disabled) {
        this.cropped = true;
        this.limitCropBox(true, true);

        if (this.options.modal) {
          addClass(this.dragBox, CLASS_MODAL);
        }

        removeClass(this.cropBox, CLASS_HIDDEN);
        this.setCropBoxData(this.initialCropBoxData);
      }

      return this;
    },
    // Reset the image and crop box to their initial states
    reset: function reset() {
      if (this.ready && !this.disabled) {
        this.imageData = assign({}, this.initialImageData);
        this.canvasData = assign({}, this.initialCanvasData);
        this.cropBoxData = assign({}, this.initialCropBoxData);
        this.renderCanvas();

        if (this.cropped) {
          this.renderCropBox();
        }
      }

      return this;
    },
    // Clear the crop box
    clear: function clear() {
      if (this.cropped && !this.disabled) {
        assign(this.cropBoxData, {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        });
        this.cropped = false;
        this.renderCropBox();
        this.limitCanvas(true, true); // Render canvas after crop box rendered

        this.renderCanvas();
        removeClass(this.dragBox, CLASS_MODAL);
        addClass(this.cropBox, CLASS_HIDDEN);
      }

      return this;
    },

    /**
     * Replace the image's src and rebuild the cropper
     * @param {string} url - The new URL.
     * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
     * @returns {Cropper} this
     */
    replace: function replace(url) {
      var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.disabled && url) {
        if (this.isImg) {
          this.element.src = url;
        }

        if (hasSameSize) {
          this.url = url;
          this.image.src = url;

          if (this.ready) {
            this.viewBoxImage.src = url;
            forEach(this.previews, function (element) {
              element.getElementsByTagName('img')[0].src = url;
            });
          }
        } else {
          if (this.isImg) {
            this.replaced = true;
          }

          this.options.data = null;
          this.uncreate();
          this.load(url);
        }
      }

      return this;
    },
    // Enable (unfreeze) the cropper
    enable: function enable() {
      if (this.ready && this.disabled) {
        this.disabled = false;
        removeClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },
    // Disable (freeze) the cropper
    disable: function disable() {
      if (this.ready && !this.disabled) {
        this.disabled = true;
        addClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },

    /**
     * Destroy the cropper and remove the instance from the image
     * @returns {Cropper} this
     */
    destroy: function destroy() {
      var element = this.element;

      if (!element[NAMESPACE]) {
        return this;
      }

      element[NAMESPACE] = undefined;

      if (this.isImg && this.replaced) {
        element.src = this.originalUrl;
      }

      this.uncreate();
      return this;
    },

    /**
     * Move the canvas with relative offsets
     * @param {number} offsetX - The relative offset distance on the x-axis.
     * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
     * @returns {Cropper} this
     */
    move: function move(offsetX) {
      var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
      var _this$canvasData = this.canvasData,
          left = _this$canvasData.left,
          top = _this$canvasData.top;
      return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
    },

    /**
     * Move the canvas to an absolute point
     * @param {number} x - The x-axis coordinate.
     * @param {number} [y=x] - The y-axis coordinate.
     * @returns {Cropper} this
     */
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var canvasData = this.canvasData;
      var changed = false;
      x = Number(x);
      y = Number(y);

      if (this.ready && !this.disabled && this.options.movable) {
        if (isNumber(x)) {
          canvasData.left = x;
          changed = true;
        }

        if (isNumber(y)) {
          canvasData.top = y;
          changed = true;
        }

        if (changed) {
          this.renderCanvas(true);
        }
      }

      return this;
    },

    /**
     * Zoom the canvas with a relative ratio
     * @param {number} ratio - The target ratio.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoom: function zoom(ratio, _originalEvent) {
      var canvasData = this.canvasData;
      ratio = Number(ratio);

      if (ratio < 0) {
        ratio = 1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }

      return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
    },

    /**
     * Zoom the canvas to an absolute ratio
     * @param {number} ratio - The target ratio.
     * @param {Object} pivot - The zoom pivot point coordinate.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
      var options = this.options,
          canvasData = this.canvasData;
      var width = canvasData.width,
          height = canvasData.height,
          naturalWidth = canvasData.naturalWidth,
          naturalHeight = canvasData.naturalHeight;
      ratio = Number(ratio);

      if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
        var newWidth = naturalWidth * ratio;
        var newHeight = naturalHeight * ratio;

        if (dispatchEvent(this.element, EVENT_ZOOM, {
          ratio: ratio,
          oldRatio: width / naturalWidth,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }

        if (_originalEvent) {
          var pointers = this.pointers;
          var offset = getOffset(this.cropper);
          var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
            pageX: _originalEvent.pageX,
            pageY: _originalEvent.pageY
          }; // Zoom from the triggering point of the event

          canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
        } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
          canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
        } else {
          // Zoom from the center of the canvas
          canvasData.left -= (newWidth - width) / 2;
          canvasData.top -= (newHeight - height) / 2;
        }

        canvasData.width = newWidth;
        canvasData.height = newHeight;
        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Rotate the canvas with a relative degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotate: function rotate(degree) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
    },

    /**
     * Rotate the canvas to an absolute degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotateTo: function rotateTo(degree) {
      degree = Number(degree);

      if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
        this.imageData.rotate = degree % 360;
        this.renderCanvas(true, true);
      }

      return this;
    },

    /**
     * Scale the image on the x-axis.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @returns {Cropper} this
     */
    scaleX: function scaleX(_scaleX) {
      var scaleY = this.imageData.scaleY;
      return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
    },

    /**
     * Scale the image on the y-axis.
     * @param {number} scaleY - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scaleY: function scaleY(_scaleY) {
      var scaleX = this.imageData.scaleX;
      return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
    },

    /**
     * Scale the image
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
      var imageData = this.imageData;
      var transformed = false;
      scaleX = Number(scaleX);
      scaleY = Number(scaleY);

      if (this.ready && !this.disabled && this.options.scalable) {
        if (isNumber(scaleX)) {
          imageData.scaleX = scaleX;
          transformed = true;
        }

        if (isNumber(scaleY)) {
          imageData.scaleY = scaleY;
          transformed = true;
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }
      }

      return this;
    },

    /**
     * Get the cropped area position and size data (base on the original image)
     * @param {boolean} [rounded=false] - Indicate if round the data values or not.
     * @returns {Object} The result cropped data.
     */
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          x: cropBoxData.left - canvasData.left,
          y: cropBoxData.top - canvasData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
        var ratio = imageData.width / imageData.naturalWidth;
        forEach(data, function (n, i) {
          data[i] = n / ratio;
        });

        if (rounded) {
          // In case rounding off leads to extra 1px in right or bottom border
          // we should round the top-left corner and the dimension (#343).
          var bottom = Math.round(data.y + data.height);
          var right = Math.round(data.x + data.width);
          data.x = Math.round(data.x);
          data.y = Math.round(data.y);
          data.width = right - data.x;
          data.height = bottom - data.y;
        }
      } else {
        data = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }

      if (options.rotatable) {
        data.rotate = imageData.rotate || 0;
      }

      if (options.scalable) {
        data.scaleX = imageData.scaleX || 1;
        data.scaleY = imageData.scaleY || 1;
      }

      return data;
    },

    /**
     * Set the cropped area position and size with new data
     * @param {Object} data - The new data.
     * @returns {Cropper} this
     */
    setData: function setData(data) {
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData;
      var cropBoxData = {};

      if (this.ready && !this.disabled && isPlainObject(data)) {
        var transformed = false;

        if (options.rotatable) {
          if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
            imageData.rotate = data.rotate;
            transformed = true;
          }
        }

        if (options.scalable) {
          if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
            imageData.scaleX = data.scaleX;
            transformed = true;
          }

          if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
            imageData.scaleY = data.scaleY;
            transformed = true;
          }
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }

        var ratio = imageData.width / imageData.naturalWidth;

        if (isNumber(data.x)) {
          cropBoxData.left = data.x * ratio + canvasData.left;
        }

        if (isNumber(data.y)) {
          cropBoxData.top = data.y * ratio + canvasData.top;
        }

        if (isNumber(data.width)) {
          cropBoxData.width = data.width * ratio;
        }

        if (isNumber(data.height)) {
          cropBoxData.height = data.height * ratio;
        }

        this.setCropBoxData(cropBoxData);
      }

      return this;
    },

    /**
     * Get the container size data.
     * @returns {Object} The result container data.
     */
    getContainerData: function getContainerData() {
      return this.ready ? assign({}, this.containerData) : {};
    },

    /**
     * Get the image position and size data.
     * @returns {Object} The result image data.
     */
    getImageData: function getImageData() {
      return this.sized ? assign({}, this.imageData) : {};
    },

    /**
     * Get the canvas position and size data.
     * @returns {Object} The result canvas data.
     */
    getCanvasData: function getCanvasData() {
      var canvasData = this.canvasData;
      var data = {};

      if (this.ready) {
        forEach(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
          data[n] = canvasData[n];
        });
      }

      return data;
    },

    /**
     * Set the canvas position and size with new data.
     * @param {Object} data - The new canvas data.
     * @returns {Cropper} this
     */
    setCanvasData: function setCanvasData(data) {
      var canvasData = this.canvasData;
      var aspectRatio = canvasData.aspectRatio;

      if (this.ready && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          canvasData.left = data.left;
        }

        if (isNumber(data.top)) {
          canvasData.top = data.top;
        }

        if (isNumber(data.width)) {
          canvasData.width = data.width;
          canvasData.height = data.width / aspectRatio;
        } else if (isNumber(data.height)) {
          canvasData.height = data.height;
          canvasData.width = data.height * aspectRatio;
        }

        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Get the crop box position and size data.
     * @returns {Object} The result crop box data.
     */
    getCropBoxData: function getCropBoxData() {
      var cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          left: cropBoxData.left,
          top: cropBoxData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
      }

      return data || {};
    },

    /**
     * Set the crop box position and size with new data.
     * @param {Object} data - The new crop box data.
     * @returns {Cropper} this
     */
    setCropBoxData: function setCropBoxData(data) {
      var cropBoxData = this.cropBoxData;
      var aspectRatio = this.options.aspectRatio;
      var widthChanged;
      var heightChanged;

      if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          cropBoxData.left = data.left;
        }

        if (isNumber(data.top)) {
          cropBoxData.top = data.top;
        }

        if (isNumber(data.width) && data.width !== cropBoxData.width) {
          widthChanged = true;
          cropBoxData.width = data.width;
        }

        if (isNumber(data.height) && data.height !== cropBoxData.height) {
          heightChanged = true;
          cropBoxData.height = data.height;
        }

        if (aspectRatio) {
          if (widthChanged) {
            cropBoxData.height = cropBoxData.width / aspectRatio;
          } else if (heightChanged) {
            cropBoxData.width = cropBoxData.height * aspectRatio;
          }
        }

        this.renderCropBox();
      }

      return this;
    },

    /**
     * Get a canvas drawn the cropped image.
     * @param {Object} [options={}] - The config options.
     * @returns {HTMLCanvasElement} - The result canvas.
     */
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.ready || !window.HTMLCanvasElement) {
        return null;
      }

      var canvasData = this.canvasData;
      var source = getSourceCanvas(this.image, this.imageData, canvasData, options); // Returns the source canvas if it is not cropped.

      if (!this.cropped) {
        return source;
      }

      var _this$getData = this.getData(),
          initialX = _this$getData.x,
          initialY = _this$getData.y,
          initialWidth = _this$getData.width,
          initialHeight = _this$getData.height;

      var ratio = source.width / Math.floor(canvasData.naturalWidth);

      if (ratio !== 1) {
        initialX *= ratio;
        initialY *= ratio;
        initialWidth *= ratio;
        initialHeight *= ratio;
      }

      var aspectRatio = initialWidth / initialHeight;
      var maxSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.maxWidth || Infinity,
        height: options.maxHeight || Infinity
      });
      var minSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.minWidth || 0,
        height: options.minHeight || 0
      }, 'cover');

      var _getAdjustedSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.width || (ratio !== 1 ? source.width : initialWidth),
        height: options.height || (ratio !== 1 ? source.height : initialHeight)
      }),
          width = _getAdjustedSizes.width,
          height = _getAdjustedSizes.height;

      width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
      height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = normalizeDecimalNumber(width);
      canvas.height = normalizeDecimalNumber(height);
      context.fillStyle = options.fillColor || 'transparent';
      context.fillRect(0, 0, width, height);
      var _options$imageSmoothi = options.imageSmoothingEnabled,
          imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi,
          imageSmoothingQuality = options.imageSmoothingQuality;
      context.imageSmoothingEnabled = imageSmoothingEnabled;

      if (imageSmoothingQuality) {
        context.imageSmoothingQuality = imageSmoothingQuality;
      } // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage


      var sourceWidth = source.width;
      var sourceHeight = source.height; // Source canvas parameters

      var srcX = initialX;
      var srcY = initialY;
      var srcWidth;
      var srcHeight; // Destination canvas parameters

      var dstX;
      var dstY;
      var dstWidth;
      var dstHeight;

      if (srcX <= -initialWidth || srcX > sourceWidth) {
        srcX = 0;
        srcWidth = 0;
        dstX = 0;
        dstWidth = 0;
      } else if (srcX <= 0) {
        dstX = -srcX;
        srcX = 0;
        srcWidth = Math.min(sourceWidth, initialWidth + srcX);
        dstWidth = srcWidth;
      } else if (srcX <= sourceWidth) {
        dstX = 0;
        srcWidth = Math.min(initialWidth, sourceWidth - srcX);
        dstWidth = srcWidth;
      }

      if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
        srcY = 0;
        srcHeight = 0;
        dstY = 0;
        dstHeight = 0;
      } else if (srcY <= 0) {
        dstY = -srcY;
        srcY = 0;
        srcHeight = Math.min(sourceHeight, initialHeight + srcY);
        dstHeight = srcHeight;
      } else if (srcY <= sourceHeight) {
        dstY = 0;
        srcHeight = Math.min(initialHeight, sourceHeight - srcY);
        dstHeight = srcHeight;
      }

      var params = [srcX, srcY, srcWidth, srcHeight]; // Avoid "IndexSizeError"

      if (dstWidth > 0 && dstHeight > 0) {
        var scale = width / initialWidth;
        params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
      } // All the numerical parameters should be integer for `drawImage`
      // https://github.com/fengyuanchen/cropper/issues/476


      context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function (param) {
        return Math.floor(normalizeDecimalNumber(param));
      }))));
      return canvas;
    },

    /**
     * Change the aspect ratio of the crop box.
     * @param {number} aspectRatio - The new aspect ratio.
     * @returns {Cropper} this
     */
    setAspectRatio: function setAspectRatio(aspectRatio) {
      var options = this.options;

      if (!this.disabled && !isUndefined(aspectRatio)) {
        // 0 -> NaN
        options.aspectRatio = Math.max(0, aspectRatio) || NaN;

        if (this.ready) {
          this.initCropBox();

          if (this.cropped) {
            this.renderCropBox();
          }
        }
      }

      return this;
    },

    /**
     * Change the drag mode.
     * @param {string} mode - The new drag mode.
     * @returns {Cropper} this
     */
    setDragMode: function setDragMode(mode) {
      var options = this.options,
          dragBox = this.dragBox,
          face = this.face;

      if (this.ready && !this.disabled) {
        var croppable = mode === DRAG_MODE_CROP;
        var movable = options.movable && mode === DRAG_MODE_MOVE;
        mode = croppable || movable ? mode : DRAG_MODE_NONE;
        options.dragMode = mode;
        setData(dragBox, DATA_ACTION, mode);
        toggleClass(dragBox, CLASS_CROP, croppable);
        toggleClass(dragBox, CLASS_MOVE, movable);

        if (!options.cropBoxMovable) {
          // Sync drag mode to crop box when it is not movable
          setData(face, DATA_ACTION, mode);
          toggleClass(face, CLASS_CROP, croppable);
          toggleClass(face, CLASS_MOVE, movable);
        }
      }

      return this;
    }
  };

  var AnotherCropper = WINDOW.Cropper;

  var Cropper = /*#__PURE__*/function () {
    /**
     * Create a new Cropper.
     * @param {Element} element - The target element for cropping.
     * @param {Object} [options={}] - The configuration options.
     */
    function Cropper(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Cropper);

      if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
        throw new Error('The first argument is required and must be an <img> or <canvas> element.');
      }

      this.element = element;
      this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
      this.cropped = false;
      this.disabled = false;
      this.pointers = {};
      this.ready = false;
      this.reloading = false;
      this.replaced = false;
      this.sized = false;
      this.sizing = false;
      this.init();
    }

    _createClass(Cropper, [{
      key: "init",
      value: function init() {
        var element = this.element;
        var tagName = element.tagName.toLowerCase();
        var url;

        if (element[NAMESPACE]) {
          return;
        }

        element[NAMESPACE] = this;

        if (tagName === 'img') {
          this.isImg = true; // e.g.: "img/picture.jpg"

          url = element.getAttribute('src') || '';
          this.originalUrl = url; // Stop when it's a blank image

          if (!url) {
            return;
          } // e.g.: "https://example.com/img/picture.jpg"


          url = element.src;
        } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
          url = element.toDataURL();
        }

        this.load(url);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this = this;

        if (!url) {
          return;
        }

        this.url = url;
        this.imageData = {};
        var element = this.element,
            options = this.options;

        if (!options.rotatable && !options.scalable) {
          options.checkOrientation = false;
        } // Only IE10+ supports Typed Arrays


        if (!options.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        } // Detect the mime type of the image directly if it is a Data URL


        if (REGEXP_DATA_URL.test(url)) {
          // Read ArrayBuffer from Data URL of JPEG images directly for better performance
          if (REGEXP_DATA_URL_JPEG.test(url)) {
            this.read(dataURLToArrayBuffer(url));
          } else {
            // Only a JPEG image may contains Exif Orientation information,
            // the rest types of Data URLs are not necessary to check orientation at all.
            this.clone();
          }

          return;
        } // 1. Detect the mime type of the image by a XMLHttpRequest.
        // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.


        var xhr = new XMLHttpRequest();
        var clone = this.clone.bind(this);
        this.reloading = true;
        this.xhr = xhr; // 1. Cross origin requests are only supported for protocol schemes:
        // http, https, data, chrome, chrome-extension.
        // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
        // in some browsers as IE11 and Safari.

        xhr.onabort = clone;
        xhr.onerror = clone;
        xhr.ontimeout = clone;

        xhr.onprogress = function () {
          // Abort the request directly if it not a JPEG image for better performance
          if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) {
            xhr.abort();
          }
        };

        xhr.onload = function () {
          _this.read(xhr.response);
        };

        xhr.onloadend = function () {
          _this.reloading = false;
          _this.xhr = null;
        }; // Bust cache when there is a "crossOrigin" property to avoid browser cache error


        if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
          url = addTimestamp(url);
        }

        xhr.open('GET', url);
        xhr.responseType = 'arraybuffer';
        xhr.withCredentials = element.crossOrigin === 'use-credentials';
        xhr.send();
      }
    }, {
      key: "read",
      value: function read(arrayBuffer) {
        var options = this.options,
            imageData = this.imageData; // Reset the orientation value to its default value 1
        // as some iOS browsers will render image with its orientation

        var orientation = resetAndGetOrientation(arrayBuffer);
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;

        if (orientation > 1) {
          // Generate a new URL which has the default orientation value
          this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);

          var _parseOrientation = parseOrientation(orientation);

          rotate = _parseOrientation.rotate;
          scaleX = _parseOrientation.scaleX;
          scaleY = _parseOrientation.scaleY;
        }

        if (options.rotatable) {
          imageData.rotate = rotate;
        }

        if (options.scalable) {
          imageData.scaleX = scaleX;
          imageData.scaleY = scaleY;
        }

        this.clone();
      }
    }, {
      key: "clone",
      value: function clone() {
        var element = this.element,
            url = this.url;
        var crossOrigin = element.crossOrigin;
        var crossOriginUrl = url;

        if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
          if (!crossOrigin) {
            crossOrigin = 'anonymous';
          } // Bust cache when there is not a "crossOrigin" property (#519)


          crossOriginUrl = addTimestamp(url);
        }

        this.crossOrigin = crossOrigin;
        this.crossOriginUrl = crossOriginUrl;
        var image = document.createElement('img');

        if (crossOrigin) {
          image.crossOrigin = crossOrigin;
        }

        image.src = crossOriginUrl || url;
        image.alt = element.alt || 'The image to crop';
        this.image = image;
        image.onload = this.start.bind(this);
        image.onerror = this.stop.bind(this);
        addClass(image, CLASS_HIDE);
        element.parentNode.insertBefore(image, element.nextSibling);
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;

        var image = this.image;
        image.onload = null;
        image.onerror = null;
        this.sizing = true; // Match all browsers that use WebKit as the layout engine in iOS devices,
        // such as Safari for iOS, Chrome for iOS, and in-app browsers.

        var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);

        var done = function done(naturalWidth, naturalHeight) {
          assign(_this2.imageData, {
            naturalWidth: naturalWidth,
            naturalHeight: naturalHeight,
            aspectRatio: naturalWidth / naturalHeight
          });
          _this2.sizing = false;
          _this2.sized = true;

          _this2.build();
        }; // Most modern browsers (excepts iOS WebKit)


        if (image.naturalWidth && !isIOSWebKit) {
          done(image.naturalWidth, image.naturalHeight);
          return;
        }

        var sizingImage = document.createElement('img');
        var body = document.body || document.documentElement;
        this.sizingImage = sizingImage;

        sizingImage.onload = function () {
          done(sizingImage.width, sizingImage.height);

          if (!isIOSWebKit) {
            body.removeChild(sizingImage);
          }
        };

        sizingImage.src = image.src; // iOS WebKit will convert the image automatically
        // with its orientation once append it into DOM (#279)

        if (!isIOSWebKit) {
          sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
          body.appendChild(sizingImage);
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var image = this.image;
        image.onload = null;
        image.onerror = null;
        image.parentNode.removeChild(image);
        this.image = null;
      }
    }, {
      key: "build",
      value: function build() {
        if (!this.sized || this.ready) {
          return;
        }

        var element = this.element,
            options = this.options,
            image = this.image; // Create cropper elements

        var container = element.parentNode;
        var template = document.createElement('div');
        template.innerHTML = TEMPLATE;
        var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
        var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
        var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
        var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
        var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
        this.container = container;
        this.cropper = cropper;
        this.canvas = canvas;
        this.dragBox = dragBox;
        this.cropBox = cropBox;
        this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
        this.face = face;
        canvas.appendChild(image); // Hide the original image

        addClass(element, CLASS_HIDDEN); // Inserts the cropper after to the current image

        container.insertBefore(cropper, element.nextSibling); // Show the image if is hidden

        if (!this.isImg) {
          removeClass(image, CLASS_HIDE);
        }

        this.initPreview();
        this.bind();
        options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
        options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
        options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
        addClass(cropBox, CLASS_HIDDEN);

        if (!options.guides) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
        }

        if (!options.center) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
        }

        if (options.background) {
          addClass(cropper, "".concat(NAMESPACE, "-bg"));
        }

        if (!options.highlight) {
          addClass(face, CLASS_INVISIBLE);
        }

        if (options.cropBoxMovable) {
          addClass(face, CLASS_MOVE);
          setData(face, DATA_ACTION, ACTION_ALL);
        }

        if (!options.cropBoxResizable) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
        }

        this.render();
        this.ready = true;
        this.setDragMode(options.dragMode);

        if (options.autoCrop) {
          this.crop();
        }

        this.setData(options.data);

        if (isFunction(options.ready)) {
          addListener(element, EVENT_READY, options.ready, {
            once: true
          });
        }

        dispatchEvent(element, EVENT_READY);
      }
    }, {
      key: "unbuild",
      value: function unbuild() {
        if (!this.ready) {
          return;
        }

        this.ready = false;
        this.unbind();
        this.resetPreview();
        this.cropper.parentNode.removeChild(this.cropper);
        removeClass(this.element, CLASS_HIDDEN);
      }
    }, {
      key: "uncreate",
      value: function uncreate() {
        if (this.ready) {
          this.unbuild();
          this.ready = false;
          this.cropped = false;
        } else if (this.sizing) {
          this.sizingImage.onload = null;
          this.sizing = false;
          this.sized = false;
        } else if (this.reloading) {
          this.xhr.onabort = null;
          this.xhr.abort();
        } else if (this.image) {
          this.stop();
        }
      }
      /**
       * Get the no conflict cropper class.
       * @returns {Cropper} The cropper class.
       */

    }], [{
      key: "noConflict",
      value: function noConflict() {
        window.Cropper = AnotherCropper;
        return Cropper;
      }
      /**
       * Change the default options.
       * @param {Object} options - The new default options.
       */

    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        assign(DEFAULTS, isPlainObject(options) && options);
      }
    }]);

    return Cropper;
  }();

  assign(Cropper.prototype, render, preview, events, handlers, change, methods);

  return Cropper;

})));


/***/ })

});