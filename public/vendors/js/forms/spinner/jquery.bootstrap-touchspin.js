!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=function(n,o){return void 0===o&&(o="undefined"!=typeof window?require("jquery"):require("jquery")(n)),t(o),o}:t(jQuery)}(function(t){"use strict";var n=0;t.fn.TouchSpin=function(o){var s={min:0,max:100,initval:"",replacementval:"",step:1,decimals:0,stepinterval:100,forcestepdivisibility:"round",stepintervaldelay:500,verticalbuttons:!1,verticalup:"+",verticaldown:"-",verticalupclass:"",verticaldownclass:"",prefix:"",postfix:"",prefix_extraclass:"",postfix_extraclass:"",booster:!0,boostat:10,maxboostedstep:!1,mousewheel:!0,buttondown_class:"btn btn-primary",buttonup_class:"btn btn-primary",buttondown_txt:"-",buttonup_txt:"+",callback_before_calculation:function(t){return t},callback_after_calculation:function(t){return t}},a={min:"min",max:"max",initval:"init-val",replacementval:"replacement-val",step:"step",decimals:"decimals",stepinterval:"step-interval",verticalbuttons:"vertical-buttons",verticalupclass:"vertical-up-class",verticaldownclass:"vertical-down-class",forcestepdivisibility:"force-step-divisibility",stepintervaldelay:"step-interval-delay",prefix:"prefix",postfix:"postfix",prefix_extraclass:"prefix-extra-class",postfix_extraclass:"postfix-extra-class",booster:"booster",boostat:"boostat",maxboostedstep:"max-boosted-step",mousewheel:"mouse-wheel",buttondown_class:"button-down-class",buttonup_class:"button-up-class",buttondown_txt:"button-down-txt",buttonup_txt:"button-up-txt"};return this.each(function(){var p,e,i,u,r,c,l,d,f,b,h=t(this),v=h.data(),x=0,g=!1;function m(){""===p.prefix&&(e=r.prefix.detach()),""===p.postfix&&(i=r.postfix.detach())}function w(){var t,n,o;""!==(t=p.callback_before_calculation(h.val()))?p.decimals>0&&"."===t||(n=parseFloat(t),isNaN(n)&&(n=""!==p.replacementval?p.replacementval:0),o=n,n.toString()!==t&&(o=n),null!==p.min&&n<p.min&&(o=p.min),null!==p.max&&n>p.max&&(o=p.max),o=function(t){switch(p.forcestepdivisibility){case"round":return(Math.round(t/p.step)*p.step).toFixed(p.decimals);case"floor":return(Math.floor(t/p.step)*p.step).toFixed(p.decimals);case"ceil":return(Math.ceil(t/p.step)*p.step).toFixed(p.decimals);default:return t}}(o),Number(t).toString()!==o.toString()&&(h.val(o),h.trigger("change"))):""!==p.replacementval&&(h.val(p.replacementval),h.trigger("change"))}function _(){if(p.booster){var t=Math.pow(2,Math.floor(x/p.boostat))*p.step;return p.maxboostedstep&&t>p.maxboostedstep&&(t=p.maxboostedstep,c=Math.round(c/t)*t),Math.max(p.step,t)}return p.step}function y(){w(),c=parseFloat(p.callback_before_calculation(r.input.val())),isNaN(c)&&(c=0);var t=c,n=_();c+=n,null!==p.max&&c>p.max&&(c=p.max,h.trigger("touchspin.on.max"),D()),r.input.val(p.callback_after_calculation(Number(c).toFixed(p.decimals))),t!==c&&h.trigger("change")}function k(){w(),c=parseFloat(p.callback_before_calculation(r.input.val())),isNaN(c)&&(c=0);var t=c,n=_();c-=n,null!==p.min&&c<p.min&&(c=p.min,h.trigger("touchspin.on.min"),D()),r.input.val(p.callback_after_calculation(Number(c).toFixed(p.decimals))),t!==c&&h.trigger("change")}function C(){D(),x=0,g="down",h.trigger("touchspin.on.startspin"),h.trigger("touchspin.on.startdownspin"),f=setTimeout(function(){l=setInterval(function(){x++,k()},p.stepinterval)},p.stepintervaldelay)}function j(){D(),x=0,g="up",h.trigger("touchspin.on.startspin"),h.trigger("touchspin.on.startupspin"),b=setTimeout(function(){d=setInterval(function(){x++,y()},p.stepinterval)},p.stepintervaldelay)}function D(){switch(clearTimeout(f),clearTimeout(b),clearInterval(l),clearInterval(d),g){case"up":h.trigger("touchspin.on.stopupspin"),h.trigger("touchspin.on.stopspin");break;case"down":h.trigger("touchspin.on.stopdownspin"),h.trigger("touchspin.on.stopspin")}x=0,g=!1}!function(){if(h.data("alreadyinitialized"))return;if(h.data("alreadyinitialized",!0),n+=1,h.data("spinnerid",n),!h.is("input"))return void console.log("Must be an input.");p=t.extend({},s,v,(c={},t.each(a,function(t,n){var o="bts-"+n;h.is("[data-"+o+"]")&&(c[t]=h.data(o))}),c),o),""!==p.initval&&""===h.val()&&h.val(p.initval),w(),function(){var n=h.val(),o=h.parent();""!==n&&(n=p.callback_after_calculation(Number(n).toFixed(p.decimals)));h.data("initvalue",n).val(n),h.addClass("form-control"),o.hasClass("input-group")?function(n){n.addClass("bootstrap-touchspin");var o,s,a=h.prev(),e=h.next(),i='<span class="input-group-prepend bootstrap-touchspin-prefix input-group-prepend bootstrap-touchspin-injected"><span class="input-group-text">'+p.prefix+"</span></span>",r='<span class="input-group-append bootstrap-touchspin-postfix input-group-append bootstrap-touchspin-injected"><span class="input-group-text">'+p.postfix+"</span></span>";a.hasClass("input-group-btn")||a.hasClass("input-group-prepend")?(o='<button class="'+p.buttondown_class+' bootstrap-touchspin-down bootstrap-touchspin-injected" type="button">'+p.buttondown_txt+"</button>",a.append(o)):(o='<span class="input-group-btn input-group-prepend bootstrap-touchspin-injected"><button class="'+p.buttondown_class+' bootstrap-touchspin-down" type="button">'+p.buttondown_txt+"</button></span>",t(o).insertBefore(h));e.hasClass("input-group-btn")||e.hasClass("input-group-append")?(s='<button class="'+p.buttonup_class+' bootstrap-touchspin-up bootstrap-touchspin-injected" type="button">'+p.buttonup_txt+"</button>",e.prepend(s)):(s='<span class="input-group-btn input-group-append bootstrap-touchspin-injected"><button class="'+p.buttonup_class+' bootstrap-touchspin-up" type="button">'+p.buttonup_txt+"</button></span>",t(s).insertAfter(h));t(i).insertBefore(h),t(r).insertAfter(h),u=n}(o):function(){var n,o="";h.hasClass("input-sm")&&(o="input-group-sm");h.hasClass("input-lg")&&(o="input-group-lg");n=p.verticalbuttons?'<div class="input-group '+o+' bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-prepend bootstrap-touchspin-prefix"><span class="input-group-text">'+p.prefix+'</span></span><span class="bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">'+p.postfix+'</span></span><span class="input-group-btn-vertical"><button class="'+p.buttondown_class+" bootstrap-touchspin-up "+p.verticalupclass+'" type="button">'+p.verticalup+'</button><button class="'+p.buttonup_class+" bootstrap-touchspin-down "+p.verticaldownclass+'" type="button">'+p.verticaldown+"</button></span></div>":'<div class="input-group bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-btn input-group-prepend"><button class="'+p.buttondown_class+' bootstrap-touchspin-down" type="button">'+p.buttondown_txt+'</button></span><span class="bootstrap-touchspin-prefix input-group-prepend"><span class="input-group-text">'+p.prefix+'</span></span><span class="bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">'+p.postfix+'</span></span><span class="input-group-btn input-group-append"><button class="'+p.buttonup_class+' bootstrap-touchspin-up" type="button">'+p.buttonup_txt+"</button></span></div>";u=t(n).insertBefore(h),t(".bootstrap-touchspin-prefix",u).after(h),h.hasClass("input-sm")?u.addClass("input-group-sm"):h.hasClass("input-lg")&&u.addClass("input-group-lg")}()}(),r={down:t(".bootstrap-touchspin-down",u),up:t(".bootstrap-touchspin-up",u),input:t("input",u),prefix:t(".bootstrap-touchspin-prefix",u).addClass(p.prefix_extraclass),postfix:t(".bootstrap-touchspin-postfix",u).addClass(p.postfix_extraclass)},m(),h.on("keydown.touchspin",function(t){var n=t.keyCode||t.which;38===n?("up"!==g&&(y(),j()),t.preventDefault()):40===n&&("down"!==g&&(k(),C()),t.preventDefault())}),h.on("keyup.touchspin",function(t){var n=t.keyCode||t.which;38===n?D():40===n&&D()}),h.on("blur.touchspin",function(){w(),h.val(p.callback_after_calculation(h.val()))}),r.down.on("keydown",function(t){var n=t.keyCode||t.which;32!==n&&13!==n||("down"!==g&&(k(),C()),t.preventDefault())}),r.down.on("keyup.touchspin",function(t){var n=t.keyCode||t.which;32!==n&&13!==n||D()}),r.up.on("keydown.touchspin",function(t){var n=t.keyCode||t.which;32!==n&&13!==n||("up"!==g&&(y(),j()),t.preventDefault())}),r.up.on("keyup.touchspin",function(t){var n=t.keyCode||t.which;32!==n&&13!==n||D()}),r.down.on("mousedown.touchspin",function(t){r.down.off("touchstart.touchspin"),h.is(":disabled")||(k(),C(),t.preventDefault(),t.stopPropagation())}),r.down.on("touchstart.touchspin",function(t){r.down.off("mousedown.touchspin"),h.is(":disabled")||(k(),C(),t.preventDefault(),t.stopPropagation())}),r.up.on("mousedown.touchspin",function(t){r.up.off("touchstart.touchspin"),h.is(":disabled")||(y(),j(),t.preventDefault(),t.stopPropagation())}),r.up.on("touchstart.touchspin",function(t){r.up.off("mousedown.touchspin"),h.is(":disabled")||(y(),j(),t.preventDefault(),t.stopPropagation())}),r.up.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin",function(t){g&&(t.stopPropagation(),D())}),r.down.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin",function(t){g&&(t.stopPropagation(),D())}),r.down.on("mousemove.touchspin touchmove.touchspin",function(t){g&&(t.stopPropagation(),t.preventDefault())}),r.up.on("mousemove.touchspin touchmove.touchspin",function(t){g&&(t.stopPropagation(),t.preventDefault())}),h.on("mousewheel.touchspin DOMMouseScroll.touchspin",function(t){if(p.mousewheel&&h.is(":focus")){var n=t.originalEvent.wheelDelta||-t.originalEvent.deltaY||-t.originalEvent.detail;t.stopPropagation(),t.preventDefault(),n<0?k():y()}}),h.on("touchspin.destroy",function(){var n;n=h.parent(),D(),h.off(".touchspin"),n.hasClass("bootstrap-touchspin-injected")?(h.siblings().remove(),h.unwrap()):(t(".bootstrap-touchspin-injected",n).remove(),n.removeClass("bootstrap-touchspin")),h.data("alreadyinitialized",!1)}),h.on("touchspin.uponce",function(){D(),y()}),h.on("touchspin.downonce",function(){D(),k()}),h.on("touchspin.startupspin",function(){j()}),h.on("touchspin.startdownspin",function(){C()}),h.on("touchspin.stopspin",function(){D()}),h.on("touchspin.updatesettings",function(n,o){!function(n){(function(n){if(p=t.extend({},p,n),n.postfix){var o=h.parent().find(".bootstrap-touchspin-postfix");0===o.length&&i.insertAfter(h),h.parent().find(".bootstrap-touchspin-postfix .input-group-text").text(n.postfix)}if(n.prefix){var s=h.parent().find(".bootstrap-touchspin-prefix");0===s.length&&e.insertBefore(h),h.parent().find(".bootstrap-touchspin-prefix .input-group-text").text(n.prefix)}m()})(n),w();var o=r.input.val();""!==o&&(o=Number(p.callback_before_calculation(r.input.val())),r.input.val(p.callback_after_calculation(Number(o).toFixed(p.decimals))))}(o)});var c}()})}});
