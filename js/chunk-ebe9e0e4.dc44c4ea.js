(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ebe9e0e4"],{"6a61":function(a,t,r){var e=function(a){"use strict";var t,r=Object.prototype,e=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",y=i.asyncIterator||"@@asyncIterator",n=i.toStringTag||"@@toStringTag";function o(a,t,r){return Object.defineProperty(a,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),a[t]}try{o({},"")}catch(S){o=function(a,t,r){return a[t]=r}}function u(a,t,r,e){var i=t&&t.prototype instanceof d?t:d,c=Object.create(i.prototype),y=new N(e||[]);return c._invoke=O(a,r,y),c}function h(a,t,r){try{return{type:"normal",arg:a.call(t,r)}}catch(S){return{type:"throw",arg:S}}}a.wrap=u;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",v={};function d(){}function g(){}function w(){}var m={};m[c]=function(){return this};var b=Object.getPrototypeOf,L=b&&b(b(P([])));L&&L!==r&&e.call(L,c)&&(m=L);var x=w.prototype=d.prototype=Object.create(m);function E(a){["next","throw","return"].forEach((function(t){o(a,t,(function(a){return this._invoke(t,a)}))}))}function _(a,t){function r(i,c,y,n){var o=h(a[i],a,c);if("throw"!==o.type){var u=o.arg,f=u.value;return f&&"object"===typeof f&&e.call(f,"__await")?t.resolve(f.__await).then((function(a){r("next",a,y,n)}),(function(a){r("throw",a,y,n)})):t.resolve(f).then((function(a){u.value=a,y(u)}),(function(a){return r("throw",a,y,n)}))}n(o.arg)}var i;function c(a,e){function c(){return new t((function(t,i){r(a,e,t,i)}))}return i=i?i.then(c,c):c()}this._invoke=c}function O(a,t,r){var e=f;return function(i,c){if(e===l)throw new Error("Generator is already running");if(e===p){if("throw"===i)throw c;return F()}r.method=i,r.arg=c;while(1){var y=r.delegate;if(y){var n=j(y,r);if(n){if(n===v)continue;return n}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(e===f)throw e=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e=l;var o=h(a,t,r);if("normal"===o.type){if(e=r.done?p:s,o.arg===v)continue;return{value:o.arg,done:r.done}}"throw"===o.type&&(e=p,r.method="throw",r.arg=o.arg)}}}function j(a,r){var e=a.iterator[r.method];if(e===t){if(r.delegate=null,"throw"===r.method){if(a.iterator["return"]&&(r.method="return",r.arg=t,j(a,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=h(e,a.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var c=i.arg;return c?c.done?(r[a.resultName]=c.value,r.next=a.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function k(a){var t={tryLoc:a[0]};1 in a&&(t.catchLoc=a[1]),2 in a&&(t.finallyLoc=a[2],t.afterLoc=a[3]),this.tryEntries.push(t)}function G(a){var t=a.completion||{};t.type="normal",delete t.arg,a.completion=t}function N(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(k,this),this.reset(!0)}function P(a){if(a){var r=a[c];if(r)return r.call(a);if("function"===typeof a.next)return a;if(!isNaN(a.length)){var i=-1,y=function r(){while(++i<a.length)if(e.call(a,i))return r.value=a[i],r.done=!1,r;return r.value=t,r.done=!0,r};return y.next=y}}return{next:F}}function F(){return{value:t,done:!0}}return g.prototype=x.constructor=w,w.constructor=g,g.displayName=o(w,n,"GeneratorFunction"),a.isGeneratorFunction=function(a){var t="function"===typeof a&&a.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,w):(a.__proto__=w,o(a,n,"GeneratorFunction")),a.prototype=Object.create(x),a},a.awrap=function(a){return{__await:a}},E(_.prototype),_.prototype[y]=function(){return this},a.AsyncIterator=_,a.async=function(t,r,e,i,c){void 0===c&&(c=Promise);var y=new _(u(t,r,e,i),c);return a.isGeneratorFunction(r)?y:y.next().then((function(a){return a.done?a.value:y.next()}))},E(x),o(x,n,"Generator"),x[c]=function(){return this},x.toString=function(){return"[object Generator]"},a.keys=function(a){var t=[];for(var r in a)t.push(r);return t.reverse(),function r(){while(t.length){var e=t.pop();if(e in a)return r.value=e,r.done=!1,r}return r.done=!0,r}},a.values=P,N.prototype={constructor:N,reset:function(a){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!a)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var a=this.tryEntries[0],t=a.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(a){if(this.done)throw a;var r=this;function i(e,i){return n.type="throw",n.arg=a,r.next=e,i&&(r.method="next",r.arg=t),!!i}for(var c=this.tryEntries.length-1;c>=0;--c){var y=this.tryEntries[c],n=y.completion;if("root"===y.tryLoc)return i("end");if(y.tryLoc<=this.prev){var o=e.call(y,"catchLoc"),u=e.call(y,"finallyLoc");if(o&&u){if(this.prev<y.catchLoc)return i(y.catchLoc,!0);if(this.prev<y.finallyLoc)return i(y.finallyLoc)}else if(o){if(this.prev<y.catchLoc)return i(y.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<y.finallyLoc)return i(y.finallyLoc)}}}},abrupt:function(a,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&e.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var c=i;break}}c&&("break"===a||"continue"===a)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var y=c?c.completion:{};return y.type=a,y.arg=t,c?(this.method="next",this.next=c.finallyLoc,v):this.complete(y)},complete:function(a,t){if("throw"===a.type)throw a.arg;return"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):"normal"===a.type&&t&&(this.next=t),v},finish:function(a){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===a)return this.complete(r.completion,r.afterLoc),G(r),v}},catch:function(a){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===a){var e=r.completion;if("throw"===e.type){var i=e.arg;G(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(a,r,e){return this.delegate={iterator:P(a),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=t),v}},a}(a.exports);try{regeneratorRuntime=e}catch(i){Function("r","regeneratorRuntime = r")(e)}},b59c:function(a,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return y}));var e=r("15bd"),i=(r("5580"),[{city:"北京市",area:["东城区","西城区","朝阳区","丰台区","石景山区","海淀区","门头沟区","房山区","通州区","顺义区","昌平区","大兴区","怀柔区","平谷区","密云区","延庆区"]},{city:"天津市",area:["和平区","河东区","河西区","南开区","河北区","红桥区","东丽区","西青区","津南区","北辰区","武清区","宝坻区","滨海新区","宁河区","静海区","蓟州区"]},{city:"石家庄市",area:["长安区","桥西区","新华区","井陉矿区","裕华区","藁城区","鹿泉区","栾城区","井陉县","正定县","行唐县","灵寿县","高邑县","深泽县","赞皇县","无极县","平山县","元氏县","赵县","晋州市","新乐市"]},{city:"唐山市",area:["路南区","路北区","古冶区","开平区","丰南区","丰润区","曹妃甸区","滦县","滦南县","乐亭县","迁西县","玉田县","遵化市","迁安市"]},{city:"秦皇岛市",area:["海港区","山海关区","北戴河区","抚宁区","青龙满族自治县","昌黎县","卢龙县"]},{city:"邯郸市",area:["邯山区","丛台区","复兴区","峰峰矿区","邯郸县","临漳县","成安县","大名县","涉县","磁县","肥乡县","永年县","邱县","鸡泽县","广平县","馆陶县","魏县","曲周县","武安市"]},{city:"邢台市",area:["桥东区","桥西区","邢台县","临城县","内丘县","柏乡县","隆尧县","任县","南和县","宁晋县","巨鹿县","新河县","广宗县","平乡县","威县","清河县","临西县","南宫市","沙河市"]},{city:"保定市",area:["竞秀区","莲池区","满城区","清苑区","徐水区","涞水县","阜平县","定兴县","唐县","高阳县","容城县","涞源县","望都县","安新县","易县","曲阳县","蠡县","顺平县","博野县","雄县","涿州市","安国市","高碑店市"]},{city:"张家口市",area:["桥东区","桥西区","宣化区","下花园区","万全区","崇礼区","张北县","康保县","沽源县","尚义县","蔚县","阳原县","怀安县","怀来县","涿鹿县","赤城县"]},{city:"承德市",area:["双桥区","双滦区","鹰手营子矿区","承德县","兴隆县","平泉县","滦平县","隆化县","丰宁满族自治县","宽城满族自治县","围场满族蒙古族自治县"]},{city:"沧州市",area:["新华区","运河区","沧县","青县","东光县","海兴县","盐山县","肃宁县","南皮县","吴桥县","献县","孟村回族自治县","泊头市","任丘市","黄骅市","河间市"]},{city:"廊坊市",area:["安次区","广阳区","固安县","永清县","香河县","大城县","文安县","大厂回族自治县","霸州市","三河市"]},{city:"衡水市",area:["桃城区","冀州区","枣强县","武邑县","武强县","饶阳县","安平县","故城县","景县","阜城县","深州市"]},{city:"定州市",area:["定州市","辛集市"]},{city:"辛集市",area:["辛集市"]},{city:"太原市",area:["小店区","迎泽区","杏花岭区","尖草坪区","万柏林区","晋源区","清徐县","阳曲县","娄烦县","古交市"]},{city:"大同市",area:["城区","矿区","南郊区","新荣区","阳高县","天镇县","广灵县","灵丘县","浑源县","左云县","大同县"]},{city:"阳泉市",area:["城区","矿区","郊区","平定县","盂县"]},{city:"长治市",area:["城区","郊区","长治县","襄垣县","屯留县","平顺县","黎城县","壶关县","长子县","武乡县","沁县","沁源县","潞城市"]},{city:"晋城市",area:["城区","沁水县","阳城县","陵川县","泽州县","高平市"]},{city:"朔州市",area:["朔城区","平鲁区","山阴县","应县","右玉县","怀仁县"]},{city:"晋中市",area:["榆次区","榆社县","左权县","和顺县","昔阳县","寿阳县","太谷县","祁县","平遥县","灵石县","介休市"]},{city:"运城市",area:["盐湖区","临猗县","万荣县","闻喜县","稷山县","新绛县","绛县","垣曲县","夏县","平陆县","芮城县","永济市","河津市"]},{city:"忻州市",area:["忻府区","定襄县","五台县","代县","繁峙县","宁武县","静乐县","神池县","五寨县","岢岚县","河曲县","保德县","偏关县","原平市"]},{city:"临汾市",area:["尧都区","曲沃县","翼城县","襄汾县","洪洞县","古县","安泽县","浮山县","吉县","乡宁县","大宁县","隰县","永和县","蒲县","汾西县","侯马市","霍州市"]},{city:"吕梁市",area:["离石区","文水县","交城县","兴县","临县","柳林县","石楼县","岚县","方山县","中阳县","交口县","孝义市","汾阳市"]},{city:"呼和浩特市",area:["新城区","回民区","玉泉区","赛罕区","土默特左旗","托克托县","和林格尔县","清水河县","武川县"]},{city:"包头市",area:["东河区","昆都仑区","青山区","石拐区","白云鄂博矿区","九原区","土默特右旗","固阳县","达尔罕茂明安联合旗"]},{city:"乌海市",area:["海勃湾区","海南区","乌达区"]},{city:"赤峰市",area:["红山区","元宝山区","松山区","阿鲁科尔沁旗","巴林左旗","巴林右旗","林西县","克什克腾旗","翁牛特旗","喀喇沁旗","宁城县","敖汉旗"]},{city:"通辽市",area:["科尔沁区","科尔沁左翼中旗","科尔沁左翼后旗","开鲁县","库伦旗","奈曼旗","扎鲁特旗","霍林郭勒市"]},{city:"鄂尔多斯市",area:["东胜区","康巴什区","达拉特旗","准格尔旗","鄂托克前旗","鄂托克旗","杭锦旗","乌审旗","伊金霍洛旗"]},{city:"呼伦贝尔市",area:["海拉尔区","扎赉诺尔区","阿荣旗","莫力达瓦达斡尔族自治旗","鄂伦春自治旗","鄂温克族自治旗","陈巴尔虎旗","新巴尔虎左旗","新巴尔虎右旗","满洲里市","牙克石市","扎兰屯市","额尔古纳市","根河市"]},{city:"巴彦淖尔市",area:["临河区","五原县","磴口县","乌拉特前旗","乌拉特中旗","乌拉特后旗","杭锦后旗"]},{city:"乌兰察布市",area:["集宁区","卓资县","化德县","商都县","兴和县","凉城县","察哈尔右翼前旗","察哈尔右翼中旗","察哈尔右翼后旗","四子王旗","丰镇市"]},{city:"兴安盟",area:["乌兰浩特市","阿尔山市","科尔沁右翼前旗","科尔沁右翼中旗","扎赉特旗","突泉县"]},{city:"锡林郭勒盟",area:["二连浩特市","锡林浩特市","阿巴嘎旗","苏尼特左旗","苏尼特右旗","东乌珠穆沁旗","西乌珠穆沁旗","太仆寺旗","镶黄旗","正镶白旗","正蓝旗","多伦县"]},{city:"阿拉善盟",area:["阿拉善左旗","阿拉善右旗","额济纳旗"]},{city:"沈阳市",area:["和平区","沈河区","大东区","皇姑区","铁西区","苏家屯区","浑南区","沈北新区","于洪区","辽中区","康平县","法库县","新民市"]},{city:"大连市",area:["中山区","西岗区","沙河口区","甘井子区","旅顺口区","金州区","普兰店区","长海县","瓦房店市","庄河市"]},{city:"鞍山市",area:["铁东区","铁西区","立山区","千山区","台安县","岫岩满族自治县","海城市"]},{city:"抚顺市",area:["新抚区","东洲区","望花区","顺城区","抚顺县","新宾满族自治县","清原满族自治县"]},{city:"本溪市",area:["平山区","溪湖区","明山区","南芬区","本溪满族自治县","桓仁满族自治县"]},{city:"丹东市",area:["元宝区","振兴区","振安区","宽甸满族自治县","东港市","凤城市"]},{city:"锦州市",area:["古塔区","凌河区","太和区","黑山县","义县","凌海市","北镇市"]},{city:"营口市",area:["站前区","西市区","鲅鱼圈区","老边区","盖州市","大石桥市"]},{city:"阜新市",area:["海州区","新邱区","太平区","清河门区","细河区","阜新蒙古族自治县","彰武县"]},{city:"辽阳市",area:["白塔区","文圣区","宏伟区","弓长岭区","太子河区","辽阳县","灯塔市"]},{city:"盘锦市",area:["双台子区","兴隆台区","大洼区","盘山县"]},{city:"铁岭市",area:["银州区","清河区","铁岭县","西丰县","昌图县","调兵山市","开原市"]},{city:"朝阳市",area:["双塔区","龙城区","朝阳县","建平县","喀喇沁左翼蒙古族自治县","北票市","凌源市"]},{city:"葫芦岛市",area:["连山区","龙港区","南票区","绥中县","建昌县","兴城市"]},{city:"长春市",area:["南关区","宽城区","朝阳区","二道区","绿园区","双阳区","九台区","农安县","榆树市","德惠市"]},{city:"吉林市",area:["昌邑区","龙潭区","船营区","丰满区","永吉县","蛟河市","桦甸市","舒兰市","磐石市"]},{city:"四平市",area:["铁西区","铁东区","梨树县","伊通满族自治县","公主岭市","双辽市"]},{city:"辽源市",area:["龙山区","西安区","东丰县","东辽县"]},{city:"通化市",area:["东昌区","二道江区","通化县","辉南县","柳河县","梅河口市","集安市"]},{city:"白山市",area:["浑江区","江源区","抚松县","靖宇县","长白朝鲜族自治县","临江市"]},{city:"松原市",area:["宁江区","前郭尔罗斯蒙古族自治县","长岭县","乾安县","扶余市"]},{city:"白城市",area:["洮北区","镇赉县","通榆县","洮南市","大安市"]},{city:"延边朝鲜族自治州",area:["延吉市","图们市","敦化市","珲春市","龙井市","和龙市","汪清县","安图县"]},{city:"哈尔滨市",area:["道里区","南岗区","道外区","平房区","松北区","香坊区","呼兰区","阿城区","双城区","依兰县","方正县","宾县","巴彦县","木兰县","通河县","延寿县","尚志市","五常市"]},{city:"齐齐哈尔市",area:["龙沙区","建华区","铁锋区","昂昂溪区","富拉尔基区","碾子山区","梅里斯达斡尔族区","龙江县","依安县","泰来县","甘南县","富裕县","克山县","克东县","拜泉县","讷河市"]},{city:"鸡西市",area:["鸡冠区","恒山区","滴道区","梨树区","城子河区","麻山区","鸡东县","虎林市","密山市"]},{city:"鹤岗市",area:["向阳区","工农区","南山区","兴安区","东山区","兴山区","萝北县","绥滨县"]},{city:"双鸭山市",area:["尖山区","岭东区","四方台区","宝山区","集贤县","友谊县","宝清县","饶河县"]},{city:"大庆市",area:["萨尔图区","龙凤区","让胡路区","红岗区","大同区","肇州县","肇源县","林甸县","杜尔伯特蒙古族自治县"]},{city:"伊春市",area:["伊春区","南岔区","友好区","西林区","翠峦区","新青区","美溪区","金山屯区","五营区","乌马河区","汤旺河区","带岭区","乌伊岭区","红星区","上甘岭区","嘉荫县","铁力市"]},{city:"佳木斯市",area:["向阳区","前进区","东风区","郊区","桦南县","桦川县","汤原县","同江市","富锦市","抚远市"]},{city:"七台河市",area:["新兴区","桃山区","茄子河区","勃利县"]},{city:"牡丹江市",area:["东安区","阳明区","爱民区","西安区","林口县","绥芬河市","海林市","宁安市","穆棱市","东宁市"]},{city:"黑河市",area:["爱辉区","嫩江县","逊克县","孙吴县","北安市","五大连池市"]},{city:"绥化市",area:["北林区","望奎县","兰西县","青冈县","庆安县","明水县","绥棱县","安达市","肇东市","海伦市"]},{city:"大兴安岭地区",area:["呼玛县","塔河县","漠河县"]},{city:"上海市",area:["黄浦区","徐汇区","长宁区","静安区","普陀区","虹口区","杨浦区","闵行区","宝山区","嘉定区","浦东新区","金山区","松江区","青浦区","奉贤区","崇明区"]},{city:"南京市",area:["玄武区","秦淮区","建邺区","鼓楼区","浦口区","栖霞区","雨花台区","江宁区","六合区","溧水区","高淳区"]},{city:"无锡市",area:["锡山区","惠山区","滨湖区","梁溪区","新吴区","江阴市","宜兴市"]},{city:"徐州市",area:["鼓楼区","云龙区","贾汪区","泉山区","铜山区","丰县","沛县","睢宁县","新沂市","邳州市"]},{city:"常州市",area:["天宁区","钟楼区","新北区","武进区","金坛区","溧阳市"]},{city:"苏州市",area:["虎丘区","吴中区","相城区","姑苏区","吴江区","常熟市","张家港市","昆山市","太仓市"]},{city:"南通市",area:["崇川区","港闸区","通州区","海安县","如东县","启东市","如皋市","海门市"]},{city:"连云港市",area:["连云区","海州区","赣榆区","东海县","灌云县","灌南县"]},{city:"淮安市",area:["淮安区","淮阴区","清江浦区","洪泽区","涟水县","盱眙县","金湖县"]},{city:"盐城市",area:["亭湖区","盐都区","大丰区","响水县","滨海县","阜宁县","射阳县","建湖县","东台市"]},{city:"扬州市",area:["广陵区","邗江区","江都区","宝应县","仪征市","高邮市"]},{city:"镇江市",area:["京口区","润州区","丹徒区","丹阳市","扬中市","句容市"]},{city:"泰州市",area:["海陵区","高港区","姜堰区","兴化市","靖江市","泰兴市"]},{city:"宿迁市",area:["宿城区","宿豫区","沭阳县","泗阳县","泗洪县"]},{city:"杭州市",area:["上城区","下城区","江干区","拱墅区","西湖区","滨江区","萧山区","余杭区","富阳区","桐庐县","淳安县","建德市","临安市"]},{city:"宁波市",area:["海曙区","江东区","江北区","北仑区","镇海区","鄞州区","象山县","宁海县","余姚市","慈溪市","奉化市"]},{city:"温州市",area:["鹿城区","龙湾区","瓯海区","洞头区","永嘉县","平阳县","苍南县","文成县","泰顺县","瑞安市","乐清市"]},{city:"嘉兴市",area:["南湖区","秀洲区","嘉善县","海盐县","海宁市","平湖市","桐乡市"]},{city:"湖州市",area:["吴兴区","南浔区","德清县","长兴县","安吉县"]},{city:"绍兴市",area:["越城区","柯桥区","上虞区","新昌县","诸暨市","嵊州市"]},{city:"金华市",area:["婺城区","金东区","武义县","浦江县","磐安县","兰溪市","义乌市","东阳市","永康市"]},{city:"衢州市",area:["柯城区","衢江区","常山县","开化县","龙游县","江山市"]},{city:"舟山市",area:["定海区","普陀区","岱山县","嵊泗县"]},{city:"台州市",area:["椒江区","黄岩区","路桥区","玉环县","三门县","天台县","仙居县","温岭市","临海市"]},{city:"丽水市",area:["莲都区","青田县","缙云县","遂昌县","松阳县","云和县","庆元县","景宁畲族自治县","龙泉市"]},{city:"合肥市",area:["瑶海区","庐阳区","蜀山区","包河区","长丰县","肥东县","肥西县","庐江县","巢湖市"]},{city:"芜湖市",area:["镜湖区","弋江区","鸠江区","三山区","芜湖县","繁昌县","南陵县","无为县"]},{city:"蚌埠市",area:["龙子湖区","蚌山区","禹会区","淮上区","怀远县","五河县","固镇县"]},{city:"淮南市",area:["大通区","田家庵区","谢家集区","八公山区","潘集区","凤台县","寿县"]},{city:"马鞍山市",area:["花山区","雨山区","博望区","当涂县","含山县","和县"]},{city:"淮北市",area:["杜集区","相山区","烈山区","濉溪县"]},{city:"铜陵市",area:["铜官区","义安区","郊区","枞阳县"]},{city:"安庆市",area:["迎江区","大观区","宜秀区","怀宁县","潜山县","太湖县","宿松县","望江县","岳西县","桐城市"]},{city:"黄山市",area:["屯溪区","黄山区","徽州区","歙县","休宁县","黟县","祁门县"]},{city:"滁州市",area:["琅琊区","南谯区","来安县","全椒县","定远县","凤阳县","天长市","明光市"]},{city:"阜阳市",area:["颍州区","颍东区","颍泉区","临泉县","太和县","阜南县","颍上县","界首市"]},{city:"宿州市",area:["埇桥区","砀山县","萧县","灵璧县","泗县"]},{city:"六安市",area:["金安区","裕安区","叶集区","霍邱县","舒城县","金寨县","霍山县"]},{city:"亳州市",area:["谯城区","涡阳县","蒙城县","利辛县"]},{city:"池州市",area:["贵池区","东至县","石台县","青阳县"]},{city:"宣城市",area:["宣州区","郎溪县","广德县","泾县","绩溪县","旌德县","宁国市"]},{city:"福州市",area:["鼓楼区","台江区","仓山区","马尾区","晋安区","闽侯县","连江县","罗源县","闽清县","永泰县","平潭县","福清市","长乐市"]},{city:"厦门市",area:["思明区","海沧区","湖里区","集美区","同安区","翔安区"]},{city:"莆田市",area:["城厢区","涵江区","荔城区","秀屿区","仙游县"]},{city:"三明市",area:["梅列区","三元区","明溪县","清流县","宁化县","大田县","尤溪县","沙县","将乐县","泰宁县","建宁县","永安市"]},{city:"泉州市",area:["鲤城区","丰泽区","洛江区","泉港区","惠安县","安溪县","永春县","德化县","金门县","石狮市","晋江市","南安市"]},{city:"漳州市",area:["芗城区","龙文区","云霄县","漳浦县","诏安县","长泰县","东山县","南靖县","平和县","华安县","龙海市"]},{city:"南平市",area:["延平区","建阳区","顺昌县","浦城县","光泽县","松溪县","政和县","邵武市","武夷山市","建瓯市"]},{city:"龙岩市",area:["新罗区","永定区","长汀县","上杭县","武平县","连城县","漳平市"]},{city:"宁德市",area:["蕉城区","霞浦县","古田县","屏南县","寿宁县","周宁县","柘荣县","福安市","福鼎市"]},{city:"南昌市",area:["东湖区","西湖区","青云谱区","湾里区","青山湖区","新建区","南昌县","安义县","进贤县"]},{city:"景德镇市",area:["昌江区","珠山区","浮梁县","乐平市"]},{city:"萍乡市",area:["安源区","湘东区","莲花县","上栗县","芦溪县"]},{city:"九江市",area:["濂溪区","浔阳区","九江县","武宁县","修水县","永修县","德安县","都昌县","湖口县","彭泽县","瑞昌市","共青城市","庐山市"]},{city:"新余市",area:["渝水区","分宜县"]},{city:"鹰潭市",area:["月湖区","余江县","贵溪市"]},{city:"赣州市",area:["章贡区","南康区","赣县","信丰县","大余县","上犹县","崇义县","安远县","龙南县","定南县","全南县","宁都县","于都县","兴国县","会昌县","寻乌县","石城县","瑞金市"]},{city:"吉安市",area:["吉州区","青原区","吉安县","吉水县","峡江县","新干县","永丰县","泰和县","遂川县","万安县","安福县","永新县","井冈山市"]},{city:"宜春市",area:["袁州区","奉新县","万载县","上高县","宜丰县","靖安县","铜鼓县","丰城市","樟树市","高安市"]},{city:"抚州市",area:["临川区","南城县","黎川县","南丰县","崇仁县","乐安县","宜黄县","金溪县","资溪县","东乡区","广昌县"]},{city:"上饶市",area:["信州区","广丰区","上饶县","玉山县","铅山县","横峰县","弋阳县","余干县","鄱阳县","万年县","婺源县","德兴市"]},{city:"济南市",area:["历下区","市中区","槐荫区","天桥区","历城区","长清区","平阴县","济阳县","商河县","章丘市"]},{city:"青岛市",area:["市南区","市北区","黄岛区","崂山区","李沧区","城阳区","胶州市","即墨市","平度市","莱西市"]},{city:"淄博市",area:["淄川区","张店区","博山区","临淄区","周村区","桓台县","高青县","沂源县"]},{city:"枣庄市",area:["市中区","薛城区","峄城区","台儿庄区","山亭区","滕州市"]},{city:"东营市",area:["东营区","河口区","垦利区","利津县","广饶县"]},{city:"烟台市",area:["芝罘区","福山区","牟平区","莱山区","长岛县","龙口市","莱阳市","莱州市","蓬莱市","招远市","栖霞市","海阳市"]},{city:"潍坊市",area:["潍城区","寒亭区","坊子区","奎文区","临朐县","昌乐县","青州市","诸城市","寿光市","安丘市","高密市","昌邑市"]},{city:"济宁市",area:["任城区","兖州区","微山县","鱼台县","金乡县","嘉祥县","汶上县","泗水县","梁山县","曲阜市","邹城市"]},{city:"泰安市",area:["泰山区","岱岳区","宁阳县","东平县","新泰市","肥城市"]},{city:"威海市",area:["环翠区","文登区","荣成市","乳山市"]},{city:"日照市",area:["东港区","岚山区","五莲县","莒县"]},{city:"莱芜市",area:["莱城区","钢城区"]},{city:"临沂市",area:["兰山区","罗庄区","河东区","沂南县","郯城县","沂水县","兰陵县","费县","平邑县","莒南县","蒙阴县","临沭县"]},{city:"德州市",area:["德城区","陵城区","宁津县","庆云县","临邑县","齐河县","平原县","夏津县","武城县","乐陵市","禹城市"]},{city:"聊城市",area:["东昌府区","阳谷县","莘县","茌平县","东阿县","冠县","高唐县","临清市"]},{city:"滨州市",area:["滨城区","沾化区","惠民县","阳信县","无棣县","博兴县","邹平县"]},{city:"菏泽市",area:["牡丹区","定陶区","曹县","单县","成武县","巨野县","郓城县","鄄城县","东明县"]},{city:"郑州市",area:["中原区","二七区","管城回族区","金水区","上街区","惠济区","中牟县","巩义市","荥阳市","新密市","新郑市","登封市"]},{city:"开封市",area:["龙亭区","顺河回族区","鼓楼区","禹王台区","金明区","祥符区","杞县","通许县","尉氏县","兰考县"]},{city:"洛阳市",area:["老城区","西工区","瀍河回族区","涧西区","吉利区","洛龙区","孟津县","新安县","栾川县","嵩县","汝阳县","宜阳县","洛宁县","伊川县","偃师市"]},{city:"平顶山市",area:["新华区","卫东区","石龙区","湛河区","宝丰县","叶县","鲁山县","郏县","舞钢市","汝州市"]},{city:"安阳市",area:["文峰区","北关区","殷都区","龙安区","安阳县","汤阴县","滑县","内黄县","林州市"]},{city:"鹤壁市",area:["鹤山区","山城区","淇滨区","浚县","淇县"]},{city:"新乡市",area:["红旗区","卫滨区","凤泉区","牧野区","新乡县","获嘉县","原阳县","延津县","封丘县","长垣县","卫辉市","辉县市"]},{city:"焦作市",area:["解放区","中站区","马村区","山阳区","修武县","博爱县","武陟县","温县","沁阳市","孟州市"]},{city:"濮阳市",area:["华龙区","清丰县","南乐县","范县","台前县","濮阳县"]},{city:"许昌市",area:["魏都区","许昌县","鄢陵县","襄城县","禹州市","长葛市"]},{city:"漯河市",area:["源汇区","郾城区","召陵区","舞阳县","临颍县"]},{city:"三门峡市",area:["湖滨区","陕州区","渑池县","卢氏县","义马市","灵宝市"]},{city:"南阳市",area:["宛城区","卧龙区","南召县","方城县","西峡县","镇平县","内乡县","淅川县","社旗县","唐河县","新野县","桐柏县","邓州市"]},{city:"商丘市",area:["梁园区","睢阳区","民权县","睢县","宁陵县","柘城县","虞城县","夏邑县","永城市"]},{city:"信阳市",area:["浉河区","平桥区","罗山县","光山县","新县","商城县","固始县","潢川县","淮滨县","息县"]},{city:"周口市",area:["川汇区","扶沟县","西华县","商水县","沈丘县","郸城县","淮阳县","太康县","鹿邑县","项城市"]},{city:"驻马店市",area:["驿城区","西平县","上蔡县","平舆县","正阳县","确山县","泌阳县","汝南县","遂平县","新蔡县"]},{city:"济源市",area:["济源市"]},{city:"武汉市",area:["江岸区","江汉区","硚口区","汉阳区","武昌区","青山区","洪山区","东西湖区","汉南区","蔡甸区","江夏区","黄陂区","新洲区"]},{city:"黄石市",area:["黄石港区","西塞山区","下陆区","铁山区","阳新县","大冶市"]},{city:"十堰市",area:["茅箭区","张湾区","郧阳区","郧西县","竹山县","竹溪县","房县","丹江口市"]},{city:"宜昌市",area:["西陵区","伍家岗区","点军区","猇亭区","夷陵区","远安县","兴山县","秭归县","长阳土家族自治县","五峰土家族自治县","宜都市","当阳市","枝江市"]},{city:"襄阳市",area:["襄城区","樊城区","襄州区","南漳县","谷城县","保康县","老河口市","枣阳市","宜城市"]},{city:"鄂州市",area:["梁子湖区","华容区","鄂城区"]},{city:"荆门市",area:["东宝区","掇刀区","京山县","沙洋县","钟祥市"]},{city:"孝感市",area:["孝南区","孝昌县","大悟县","云梦县","应城市","安陆市","汉川市"]},{city:"荆州市",area:["沙市区","荆州区","公安县","监利县","江陵县","石首市","洪湖市","松滋市"]},{city:"黄冈市",area:["黄州区","团风县","红安县","罗田县","英山县","浠水县","蕲春县","黄梅县","麻城市","武穴市"]},{city:"咸宁市",area:["咸安区","嘉鱼县","通城县","崇阳县","通山县","赤壁市"]},{city:"随州市",area:["曾都区","随县","广水市"]},{city:"恩施土家族苗族自治州",area:["恩施市","利川市","建始县","巴东县","宣恩县","咸丰县","来凤县","鹤峰县"]},{city:"仙桃市",area:["沙嘴街道办事处","干河街道办事处","龙华山办事处","郑场镇","毛嘴镇","豆河镇","三伏潭镇","胡场镇","长倘口镇","西流河镇","沙湖镇","杨林尾镇","彭场镇","张沟镇","郭河镇","沔城回族镇","通海口镇","陈场镇","工业园区","九合垸原种场","沙湖原种场","五湖渔场","赵西垸林场","畜禽良种场","排湖风景区"]},{city:"潜江市",area:["园林办事处","杨市办事处","周矶办事处","广华办事处","泰丰办事处","高场办事处","竹根滩镇","渔洋镇","王场镇","高石碑镇","熊口镇","老新镇","浩口镇","积玉口镇","张金镇","龙湾镇","江汉石油管理局","潜江经济开发区","周矶管理区","后湖管理区","熊口管理区","总口管理区","白鹭湖管理区","运粮湖管理区","浩口原种场"]},{city:"天门市",area:["竟陵街道办事处","侨乡街道开发区","杨林街道办事处","多宝镇","拖市镇","张港镇","蒋场镇","汪场镇","渔薪镇","黄潭镇","岳口镇","横林镇","彭市镇","麻洋镇","多祥镇","干驿镇","马湾镇","卢市镇","小板镇","九真镇","皂市镇","胡市镇","石家河镇","佛子山镇","净潭乡","蒋湖农场","白茅湖农场","沉湖管委会"]},{city:"神农架林区",area:["松柏镇","阳日镇","木鱼镇","红坪镇","新华镇","九湖镇","宋洛乡","下谷坪土家族乡"]},{city:"长沙市",area:["芙蓉区","天心区","岳麓区","开福区","雨花区","望城区","长沙县","宁乡县","浏阳市"]},{city:"株洲市",area:["荷塘区","芦淞区","石峰区","天元区","株洲县","攸县","茶陵县","炎陵县","醴陵市"]},{city:"湘潭市",area:["雨湖区","岳塘区","湘潭县","湘乡市","韶山市"]},{city:"衡阳市",area:["珠晖区","雁峰区","石鼓区","蒸湘区","南岳区","衡阳县","衡南县","衡山县","衡东县","祁东县","耒阳市","常宁市"]},{city:"邵阳市",area:["双清区","大祥区","北塔区","邵东县","新邵县","邵阳县","隆回县","洞口县","绥宁县","新宁县","城步苗族自治县","武冈市"]},{city:"岳阳市",area:["岳阳楼区","云溪区","君山区","岳阳县","华容县","湘阴县","平江县","汨罗市","临湘市"]},{city:"常德市",area:["武陵区","鼎城区","安乡县","汉寿县","澧县","临澧县","桃源县","石门县","津市市"]},{city:"张家界市",area:["永定区","武陵源区","慈利县","桑植县"]},{city:"益阳市",area:["资阳区","赫山区","南县","桃江县","安化县","沅江市"]},{city:"郴州市",area:["北湖区","苏仙区","桂阳县","宜章县","永兴县","嘉禾县","临武县","汝城县","桂东县","安仁县","资兴市"]},{city:"永州市",area:["零陵区","冷水滩区","祁阳县","东安县","双牌县","道县","江永县","宁远县","蓝山县","新田县","江华瑶族自治县"]},{city:"怀化市",area:["鹤城区","中方县","沅陵县","辰溪县","溆浦县","会同县","麻阳苗族自治县","新晃侗族自治县","芷江侗族自治县","靖州苗族侗族自治县","通道侗族自治县","洪江市"]},{city:"娄底市",area:["娄星区","双峰县","新化县","冷水江市","涟源市"]},{city:"湘西土家族苗族自治州",area:["吉首市","泸溪县","凤凰县","花垣县","保靖县","古丈县","永顺县","龙山县"]},{city:"广州市",area:["荔湾区","越秀区","海珠区","天河区","白云区","黄埔区","番禺区","花都区","南沙区","从化区","增城区"]},{city:"韶关市",area:["武江区","浈江区","曲江区","始兴县","仁化县","翁源县","乳源瑶族自治县","新丰县","乐昌市","南雄市"]},{city:"深圳市",area:["罗湖区","福田区","南山区","宝安区","龙岗区","盐田区"]},{city:"珠海市",area:["香洲区","斗门区","金湾区"]},{city:"汕头市",area:["龙湖区","金平区","濠江区","潮阳区","潮南区","澄海区","南澳县"]},{city:"佛山市",area:["禅城区","南海区","顺德区","三水区","高明区"]},{city:"江门市",area:["蓬江区","江海区","新会区","台山市","开平市","鹤山市","恩平市"]},{city:"湛江市",area:["赤坎区","霞山区","坡头区","麻章区","遂溪县","徐闻县","廉江市","雷州市","吴川市"]},{city:"茂名市",area:["茂南区","电白区","高州市","化州市","信宜市"]},{city:"肇庆市",area:["端州区","鼎湖区","高要区","广宁县","怀集县","封开县","德庆县","四会市"]},{city:"惠州市",area:["惠城区","惠阳区","博罗县","惠东县","龙门县"]},{city:"梅州市",area:["梅江区","梅县区","大埔县","丰顺县","五华县","平远县","蕉岭县","兴宁市"]},{city:"汕尾市",area:["城区","海丰县","陆河县","陆丰市"]},{city:"河源市",area:["源城区","紫金县","龙川县","连平县","和平县","东源县"]},{city:"阳江市",area:["江城区","阳东区","阳西县","阳春市"]},{city:"清远市",area:["清城区","清新区","佛冈县","阳山县","连山壮族瑶族自治县","连南瑶族自治县","英德市","连州市"]},{city:"东莞市",area:["东城街道办事处","南城街道办事处","万江街道办事处","莞城街道办事处","石碣镇","石龙镇","茶山镇","石排镇","企石镇","横沥镇","桥头镇","谢岗镇","东坑镇","常平镇","寮步镇","樟木头镇","大朗镇","黄江镇","清溪镇","塘厦镇","凤岗镇","大岭山镇","长安镇","虎门镇","厚街镇","沙田镇","道滘镇","洪梅镇"]},{city:"中山市",area:["石岐区街道办事处","东区街道办事处","火炬开发区街道办事处","西区街道办事处","南区街道办事处","五桂山街道办事处","小榄镇","黄圃镇","民众镇","东凤镇","东升镇","古镇镇","沙溪镇","坦洲镇","港口镇","三角镇","横栏镇","南头镇","阜沙镇","南朗镇","三乡镇","板芙镇","大涌镇","神湾镇"]},{city:"潮州市",area:["湘桥区","潮安区","饶平县"]},{city:"揭阳市",area:["榕城区","揭东区","揭西县","惠来县","普宁市"]},{city:"云浮市",area:["云城区","云安区","新兴县","郁南县","罗定市"]},{city:"南宁市",area:["兴宁区","青秀区","江南区","西乡塘区","良庆区","邕宁区","武鸣区","隆安县","马山县","上林县","宾阳县","横县"]},{city:"柳州市",area:["城中区","鱼峰区","柳南区","柳北区","柳江区","柳城县","鹿寨县","融安县","融水苗族自治县","三江侗族自治县"]},{city:"桂林市",area:["秀峰区","叠彩区","象山区","七星区","雁山区","临桂区","阳朔县","灵川县","全州县","兴安县","永福县","灌阳县","龙胜各族自治县","资源县","平乐县","荔浦县","恭城瑶族自治县"]},{city:"梧州市",area:["万秀区","长洲区","龙圩区","苍梧县","藤县","蒙山县","岑溪市"]},{city:"北海市",area:["海城区","银海区","铁山港区","合浦县"]},{city:"防城港市",area:["港口区","防城区","上思县","东兴市"]},{city:"钦州市",area:["钦南区","钦北区","灵山县","浦北县"]},{city:"贵港市",area:["港北区","港南区","覃塘区","平南县","桂平市"]},{city:"玉林市",area:["玉州区","福绵区","容县","陆川县","博白县","兴业县","北流市"]},{city:"百色市",area:["右江区","田阳县","田东县","平果县","德保县","那坡县","凌云县","乐业县","田林县","西林县","隆林各族自治县","靖西市"]},{city:"贺州市",area:["八步区","平桂区","昭平县","钟山县","富川瑶族自治县"]},{city:"河池市",area:["金城江区","南丹县","天峨县","凤山县","东兰县","罗城仫佬族自治县","环江毛南族自治县","巴马瑶族自治县","都安瑶族自治县","大化瑶族自治县","宜州市"]},{city:"来宾市",area:["兴宾区","忻城县","象州县","武宣县","金秀瑶族自治县","合山市"]},{city:"崇左市",area:["江州区","扶绥县","宁明县","龙州县","大新县","天等县","凭祥市"]},{city:"海口市",area:["秀英区","龙华区","琼山区","美兰区"]},{city:"三亚市",area:["海棠区","吉阳区","天涯区","崖州区"]},{city:"三沙市",area:["三沙市"]},{city:"儋州市",area:["儋州市"]},{city:"省直辖县级行政区划",area:["五指山市","琼海市","文昌市","万宁市","东方市","定安县","屯昌县","澄迈县","临高县","白沙黎族自治县","昌江黎族自治县","乐东黎族自治县","陵水黎族自治县","保亭黎族苗族自治县","琼中黎族苗族自治县"]},{city:"重庆市",area:["万州区","涪陵区","渝中区","大渡口区","江北区","沙坪坝区","九龙坡区","南岸区","北碚区","綦江区","大足区","渝北区","巴南区","黔江区","长寿区","江津区","合川区","永川区","南川区","璧山区","铜梁区","潼南区","荣昌区","开州区"]},{city:"县",area:["梁平县","城口县","丰都县","垫江县","武隆县","忠县","云阳县","奉节县","巫山县","巫溪县","石柱土家族自治县","秀山土家族苗族自治县","酉阳土家族苗族自治县","彭水苗族土家族自治县"]},{city:"成都市",area:["锦江区","青羊区","金牛区","武侯区","成华区","龙泉驿区","青白江区","新都区","温江区","双流区","金堂县","郫县","大邑县","蒲江县","新津县","都江堰市","彭州市","邛崃市","崇州市","简阳市"]},{city:"自贡市",area:["自流井区","贡井区","大安区","沿滩区","荣县","富顺县"]},{city:"攀枝花市",area:["东区","西区","仁和区","米易县","盐边县"]},{city:"泸州市",area:["江阳区","纳溪区","龙马潭区","泸县","合江县","叙永县","古蔺县"]},{city:"德阳市",area:["旌阳区","中江县","罗江县","广汉市","什邡市","绵竹市"]},{city:"绵阳市",area:["涪城区","游仙区","安州区","三台县","盐亭县","梓潼县","北川羌族自治县","平武县","江油市"]},{city:"广元市",area:["利州区","昭化区","朝天区","旺苍县","青川县","剑阁县","苍溪县"]},{city:"遂宁市",area:["船山区","安居区","蓬溪县","射洪县","大英县"]},{city:"内江市",area:["市中区","东兴区","威远县","资中县","隆昌县"]},{city:"乐山市",area:["市中区","沙湾区","五通桥区","金口河区","犍为县","井研县","夹江县","沐川县","峨边彝族自治县","马边彝族自治县","峨眉山市"]},{city:"南充市",area:["顺庆区","高坪区","嘉陵区","南部县","营山县","蓬安县","仪陇县","西充县","阆中市"]},{city:"眉山市",area:["东坡区","彭山区","仁寿县","洪雅县","丹棱县","青神县"]},{city:"宜宾市",area:["翠屏区","南溪区","宜宾县","江安县","长宁县","高县","珙县","筠连县","兴文县","屏山县"]},{city:"广安市",area:["广安区","前锋区","岳池县","武胜县","邻水县","华蓥市"]},{city:"达州市",area:["通川区","达川区","宣汉县","开江县","大竹县","渠县","万源市"]},{city:"雅安市",area:["雨城区","名山区","荥经县","汉源县","石棉县","天全县","芦山县","宝兴县"]},{city:"巴中市",area:["巴州区","恩阳区","通江县","南江县","平昌县"]},{city:"资阳市",area:["雁江区","安岳县","乐至县"]},{city:"阿坝藏族羌族自治州",area:["马尔康市","汶川县","理县","茂县","松潘县","九寨沟县","金川县","小金县","黑水县","壤塘县","阿坝县","若尔盖县","红原县"]},{city:"甘孜藏族自治州",area:["康定市","泸定县","丹巴县","九龙县","雅江县","道孚县","炉霍县","甘孜县","新龙县","德格县","白玉县","石渠县","色达县","理塘县","巴塘县","乡城县","稻城县","得荣县"]},{city:"凉山彝族自治州",area:["西昌市","木里藏族自治县","盐源县","德昌县","会理县","会东县","宁南县","普格县","布拖县","金阳县","昭觉县","喜德县","冕宁县","越西县","甘洛县","美姑县","雷波县"]},{city:"贵阳市",area:["南明区","云岩区","花溪区","乌当区","白云区","观山湖区","开阳县","息烽县","修文县","清镇市"]},{city:"六盘水市",area:["钟山区","六枝特区","水城县","盘县"]},{city:"遵义市",area:["红花岗区","汇川区","播州区","桐梓县","绥阳县","正安县","道真仡佬族苗族自治县","务川仡佬族苗族自治县","凤冈县","湄潭县","余庆县","习水县","赤水市","仁怀市"]},{city:"安顺市",area:["西秀区","平坝区","普定县","镇宁布依族苗族自治县","关岭布依族苗族自治县","紫云苗族布依族自治县"]},{city:"毕节市",area:["七星关区","大方县","黔西县","金沙县","织金县","纳雍县","威宁彝族回族苗族自治县","赫章县"]},{city:"铜仁市",area:["碧江区","万山区","江口县","玉屏侗族自治县","石阡县","思南县","印江土家族苗族自治县","德江县","沿河土家族自治县","松桃苗族自治县"]},{city:"黔西南布依族苗族自治州",area:["兴义市","兴仁县","普安县","晴隆县","贞丰县","望谟县","册亨县","安龙县"]},{city:"黔东南苗族侗族自治州",area:["凯里市","黄平县","施秉县","三穗县","镇远县","岑巩县","天柱县","锦屏县","剑河县","台江县","黎平县","榕江县","从江县","雷山县","麻江县","丹寨县"]},{city:"黔南布依族苗族自治州",area:["都匀市","福泉市","荔波县","贵定县","瓮安县","独山县","平塘县","罗甸县","长顺县","龙里县","惠水县","三都水族自治县"]},{city:"昆明市",area:["五华区","盘龙区","官渡区","西山区","东川区","呈贡区","晋宁县","富民县","宜良县","石林彝族自治县","嵩明县","禄劝彝族苗族自治县","寻甸回族彝族自治县","安宁市"]},{city:"曲靖市",area:["麒麟区","沾益区","马龙县","陆良县","师宗县","罗平县","富源县","会泽县","宣威市"]},{city:"玉溪市",area:["红塔区","江川区","澄江县","通海县","华宁县","易门县","峨山彝族自治县","新平彝族傣族自治县","元江哈尼族彝族傣族自治县"]},{city:"保山市",area:["隆阳区","施甸县","龙陵县","昌宁县","腾冲市"]},{city:"昭通市",area:["昭阳区","鲁甸县","巧家县","盐津县","大关县","永善县","绥江县","镇雄县","彝良县","威信县","水富县"]},{city:"丽江市",area:["古城区","玉龙纳西族自治县","永胜县","华坪县","宁蒗彝族自治县"]},{city:"普洱市",area:["思茅区","宁洱哈尼族彝族自治县","墨江哈尼族自治县","景东彝族自治县","景谷傣族彝族自治县","镇沅彝族哈尼族拉祜族自治县","江城哈尼族彝族自治县","孟连傣族拉祜族佤族自治县","澜沧拉祜族自治县","西盟佤族自治县"]},{city:"临沧市",area:["临翔区","凤庆县","云县","永德县","镇康县","双江拉祜族佤族布朗族傣族自治县","耿马傣族佤族自治县","沧源佤族自治县"]},{city:"楚雄彝族自治州",area:["楚雄市","双柏县","牟定县","南华县","姚安县","大姚县","永仁县","元谋县","武定县","禄丰县"]},{city:"红河哈尼族彝族自治州",area:["个旧市","开远市","蒙自市","弥勒市","屏边苗族自治县","建水县","石屏县","泸西县","元阳县","红河县","金平苗族瑶族傣族自治县","绿春县","河口瑶族自治县"]},{city:"文山壮族苗族自治州",area:["文山市","砚山县","西畴县","麻栗坡县","马关县","丘北县","广南县","富宁县"]},{city:"西双版纳傣族自治州",area:["景洪市","勐海县","勐腊县"]},{city:"大理白族自治州",area:["大理市","漾濞彝族自治县","祥云县","宾川县","弥渡县","南涧彝族自治县","巍山彝族回族自治县","永平县","云龙县","洱源县","剑川县","鹤庆县"]},{city:"德宏傣族景颇族自治州",area:["瑞丽市","芒市","梁河县","盈江县","陇川县"]},{city:"怒江傈僳族自治州",area:["泸水市","福贡县","贡山独龙族怒族自治县","兰坪白族普米族自治县"]},{city:"迪庆藏族自治州",area:["香格里拉市","德钦县","维西傈僳族自治县"]},{city:"拉萨市",area:["城关区","堆龙德庆区","林周县","当雄县","尼木县","曲水县","达孜县","墨竹工卡县"]},{city:"日喀则市",area:["桑珠孜区","南木林县","江孜县","定日县","萨迦县","拉孜县","昂仁县","谢通门县","白朗县","仁布县","康马县","定结县","仲巴县","亚东县","吉隆县","聂拉木县","萨嘎县","岗巴县"]},{city:"昌都市",area:["卡若区","江达县","贡觉县","类乌齐县","丁青县","察雅县","八宿县","左贡县","芒康县","洛隆县","边坝县"]},{city:"林芝市",area:["巴宜区","工布江达县","米林县","墨脱县","波密县","察隅县","朗县"]},{city:"山南市",area:["乃东区","扎囊县","贡嘎县","桑日县","琼结县","曲松县","措美县","洛扎县","加查县","隆子县","错那县","浪卡子县"]},{city:"那曲地区",area:["那曲县","嘉黎县","比如县","聂荣县","安多县","申扎县","索县","班戈县","巴青县","尼玛县","双湖县"]},{city:"阿里地区",area:["普兰县","札达县","噶尔县","日土县","革吉县","改则县","措勤县"]},{city:"西安市",area:["新城区","碑林区","莲湖区","灞桥区","未央区","雁塔区","阎良区","临潼区","长安区","高陵区","蓝田县","周至县","户县"]},{city:"铜川市",area:["王益区","印台区","耀州区","宜君县"]},{city:"宝鸡市",area:["渭滨区","金台区","陈仓区","凤翔县","岐山县","扶风县","眉县","陇县","千阳县","麟游县","凤县","太白县"]},{city:"咸阳市",area:["秦都区","杨陵区","渭城区","三原县","泾阳县","乾县","礼泉县","永寿县","彬县","长武县","旬邑县","淳化县","武功县","兴平市"]},{city:"渭南市",area:["临渭区","华州区","潼关县","大荔县","合阳县","澄城县","蒲城县","白水县","富平县","韩城市","华阴市"]},{city:"延安市",area:["宝塔区","安塞区","延长县","延川县","子长县","志丹县","吴起县","甘泉县","富县","洛川县","宜川县","黄龙县","黄陵县"]},{city:"汉中市",area:["汉台区","南郑县","城固县","洋县","西乡县","勉县","宁强县","略阳县","镇巴县","留坝县","佛坪县"]},{city:"榆林市",area:["榆阳区","横山区","神木县","府谷县","靖边县","定边县","绥德县","米脂县","佳县","吴堡县","清涧县","子洲县"]},{city:"安康市",area:["汉滨区","汉阴县","石泉县","宁陕县","紫阳县","岚皋县","平利县","镇坪县","旬阳县","白河县"]},{city:"商洛市",area:["商州区","洛南县","丹凤县","商南县","山阳县","镇安县","柞水县"]},{city:"兰州市",area:["城关区","七里河区","西固区","安宁区","红古区","永登县","皋兰县","榆中县"]},{city:"嘉峪关市",area:[]},{city:"金昌市",area:["金川区","永昌县"]},{city:"白银市",area:["白银区","平川区","靖远县","会宁县","景泰县"]},{city:"天水市",area:["秦州区","麦积区","清水县","秦安县","甘谷县","武山县","张家川回族自治县"]},{city:"武威市",area:["凉州区","民勤县","古浪县","天祝藏族自治县"]},{city:"张掖市",area:["甘州区","肃南裕固族自治县","民乐县","临泽县","高台县","山丹县"]},{city:"平凉市",area:["崆峒区","泾川县","灵台县","崇信县","华亭县","庄浪县","静宁县"]},{city:"酒泉市",area:["肃州区","金塔县","瓜州县","肃北蒙古族自治县","阿克塞哈萨克族自治县","玉门市","敦煌市"]},{city:"庆阳市",area:["西峰区","庆城县","环县","华池县","合水县","正宁县","宁县","镇原县"]},{city:"定西市",area:["安定区","通渭县","陇西县","渭源县","临洮县","漳县","岷县"]},{city:"陇南市",area:["武都区","成县","文县","宕昌县","康县","西和县","礼县","徽县","两当县"]},{city:"临夏回族自治州",area:["临夏市","临夏县","康乐县","永靖县","广河县","和政县","东乡族自治县","积石山保安族东乡族撒拉族自治县"]},{city:"甘南藏族自治州",area:["合作市","临潭县","卓尼县","舟曲县","迭部县","玛曲县","碌曲县","夏河县"]},{city:"西宁市",area:["城东区","城中区","城西区","城北区","大通回族土族自治县","湟中县","湟源县"]},{city:"海东市",area:["乐都区","平安区","民和回族土族自治县","互助土族自治县","化隆回族自治县","循化撒拉族自治县"]},{city:"海北藏族自治州",area:["门源回族自治县","祁连县","海晏县","刚察县"]},{city:"黄南藏族自治州",area:["同仁县","尖扎县","泽库县","河南蒙古族自治县"]},{city:"海南藏族自治州",area:["共和县","同德县","贵德县","兴海县","贵南县"]},{city:"果洛藏族自治州",area:["玛沁县","班玛县","甘德县","达日县","久治县","玛多县"]},{city:"玉树藏族自治州",area:["玉树市","杂多县","称多县","治多县","囊谦县","曲麻莱县"]},{city:"海西蒙古族藏族自治州",area:["格尔木市","德令哈市","乌兰县","都兰县","天峻县"]},{city:"银川市",area:["兴庆区","西夏区","金凤区","永宁县","贺兰县","灵武市"]},{city:"石嘴山市",area:["大武口区","惠农区","平罗县"]},{city:"吴忠市",area:["利通区","红寺堡区","盐池县","同心县","青铜峡市"]},{city:"固原市",area:["原州区","西吉县","隆德县","泾源县","彭阳县"]},{city:"中卫市",area:["沙坡头区","中宁县","海原县"]},{city:"乌鲁木齐市",area:["天山区","沙依巴克区","新市区","水磨沟区","头屯河区","达坂城区","米东区","乌鲁木齐县"]},{city:"克拉玛依市",area:["独山子区","克拉玛依区","白碱滩区","乌尔禾区"]},{city:"吐鲁番市",area:["高昌区","鄯善县","托克逊县"]},{city:"哈密市",area:["伊州区","巴里坤哈萨克自治县","伊吾县"]},{city:"昌吉回族自治州",area:["昌吉市","阜康市","呼图壁县","玛纳斯县","奇台县","吉木萨尔县","木垒哈萨克自治县"]},{city:"博尔塔拉蒙古自治州",area:["博乐市","阿拉山口市","精河县","温泉县"]},{city:"巴音郭楞蒙古自治州",area:["库尔勒市","轮台县","尉犁县","若羌县","且末县","焉耆回族自治县","和静县","和硕县","博湖县"]},{city:"阿克苏地区",area:["阿克苏市","温宿县","库车县","沙雅县","新和县","拜城县","乌什县","阿瓦提县","柯坪县"]},{city:"克孜勒苏柯尔克孜自治州",area:["阿图什市","阿克陶县","阿合奇县","乌恰县"]},{city:"喀什地区",area:["喀什市","疏附县","疏勒县","英吉沙县","泽普县","莎车县","叶城县","麦盖提县","岳普湖县","伽师县","巴楚县","塔什库尔干塔吉克自治县"]},{city:"和田地区",area:["和田市","和田县","墨玉县","皮山县","洛浦县","策勒县","于田县","民丰县"]},{city:"伊犁哈萨克自治州",area:["伊宁市","奎屯市","霍尔果斯市","伊宁县","察布查尔锡伯自治县","霍城县","巩留县","新源县","昭苏县","特克斯县","尼勒克县"]},{city:"塔城地区",area:["塔城市","乌苏市","额敏县","沙湾县","托里县","裕民县","和布克赛尔蒙古自治县"]},{city:"阿勒泰地区",area:["阿勒泰市","布尔津县","富蕴县","福海县","哈巴河县","青河县","吉木乃县"]},{city:"石河子市",area:["石河子市"]},{city:"阿拉尔市",area:["阿拉尔市"]},{city:"图木舒克市",area:["图木舒克市"]},{city:"五家渠市",area:["五家渠市"]},{city:"铁门关市",area:["铁门关市"]}]),c=function(){return i.map((function(a){return a.city}))},y=function(a){var t,r=Object(e["a"])(i);try{for(r.s();!(t=r.n()).done;){var c=t.value;if(c.city===a)return c.area}}catch(y){r.e(y)}finally{r.f()}return[]}},cd6d:function(a,t,r){"use strict";r.d(t,"a",(function(){return i}));r("147f");function e(a,t,r,e,i,c,y){try{var n=a[c](y),o=n.value}catch(u){return void r(u)}n.done?t(o):Promise.resolve(o).then(e,i)}function i(a){return function(){var t=this,r=arguments;return new Promise((function(i,c){var y=a.apply(t,r);function n(a){e(y,i,c,n,o,"next",a)}function o(a){e(y,i,c,n,o,"throw",a)}n(void 0)}))}}}}]);
//# sourceMappingURL=chunk-ebe9e0e4.dc44c4ea.js.map