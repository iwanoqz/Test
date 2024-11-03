"use strict";!function(t){const o="undefined"!=typeof chrome&&chrome||"undefined"!=typeof browser&&browser||void 0;if(!o)return;const n=[{default:!1,id:"showVideoIndex"},{default:!1,id:"preserveSelection"},{default:!1,id:"sortPlaylistNames"},{default:!1,id:"showPlaylistNames"},{default:!1,id:"noRemovalConfirmation"},{default:!1,id:"findDuplicatesBackwards"},{default:!1,id:"customMenuWidth"},{default:"center",id:"positioning",group:[{id:"bottomCenter",value:"center"},{id:"bottomLeft",value:"left"},{id:"custom",value:"custom"}]}],e=t=>n.find((o=>o.id===t)),i=o.i18n.getMessage("extensionName")||"Multiselect for YouTube™",s=-1!==navigator.userAgent.indexOf("Firefox/"),c=-1!==navigator.userAgent.indexOf("Edg/"),a="/popup.html"===location.pathname,u=t.querySelector(".settings");function d(o,n){const e=t.getElementById(o);e&&(e.checked=n)}function r(t){const n=t.target,i="radio"===n.type?n.name:n.id,s=e(i);if(s){const t="radio"===n.type?n.value:n.checked;t===s.default?o.storage.local.remove(i):o.storage.local.set({[i]:t})}}function l(t,n){t?.addEventListener("click",(t=>{t.preventDefault(),o.tabs.create({url:n,active:!0}),s&&a&&window.close()}))}function f(n){const e=function(t){const n="https://www.youtube.com",e=(t,o)=>`<input type="hidden" name="${t}" value="${o}">`;return`<form action="https://www.paypal.com/donate" method="post" target="_blank">\n  ${e("cmd","_donations")}\n  ${e("business","donation@ms4yt.com")}\n  ${e("item_name",t)}\n  ${e("amount","5")}\n  ${e("currency_code","EUR")}\n  ${e("no_recurring",0)}\n  ${e("rm",2)}\n  ${e("return",`${n}?msfydo=y`)}\n  ${e("cancel_return",`${n}?msfydo=n`)}\n  <button id="donate-button" type="submit">${o.i18n.getMessage("donate")}</button>\n</form>`}(n),i=t.createElement("footer");i.innerHTML=e+'<a id="coffee-button"><img src="icons/coffee.png"></a><a id="patreon-button"><img src="icons/patreon.png"></a>',s&&a&&i.firstElementChild.addEventListener("click",(()=>setTimeout((()=>window.close())))),l(i.firstElementChild.nextElementSibling,"https://www.buymeacoffee.com/msfy"),l(i.lastElementChild,"https://www.patreon.com/msfy"),u.appendChild(i)}o.storage.onChanged.addListener((t=>{for(const o in t){const n=e(o);if(n){const e=t[o].hasOwnProperty("newValue")?t[o].newValue:n.default;d(n.group?n.group.find((t=>t.value===e))?.id:o,e)}}t.dark&&location.reload()})),async function(){const e=await o.storage.local.get();e.dark&&t.documentElement.setAttribute("dark",""),a?function(){const n=t.createElement("header");n.innerHTML=`<img src="icons/24.png"><span>${i}</span><button id="help"><img src="icons/help.svg"></button>`,n.querySelector("#help").addEventListener("click",(()=>(o.runtime.openOptionsPage(),s&&window.close()))),u.appendChild(n)}():(t.title=i,t.querySelectorAll("[data-text]").forEach((t=>t.innerText=o.i18n.getMessage(t.dataset.text))),t.querySelectorAll("[data-html]").forEach((t=>t.innerHTML=o.i18n.getMessage(t.dataset.html)))),function(e){const i=t=>`<span>${o.i18n.getMessage(t)||t}</span>`,s=t.createElement("ul");s.innerHTML=n.map((({id:t,group:o})=>o?`<div>${i(t)}`+o.map((o=>`<div><label for="${o.id}">${((t,o)=>`<input type="radio" name="${t}" id="${o.id}" value="${o.value}">`)(t,o)}${i(o.id)}</label></div>`)).join("")+"</div>":`<li><label for="${t}">${(t=>`<input type="checkbox" id="${t}">`)(t)}${i(t)}</label></li>`)).join(""),u.appendChild(s);for(const t of n){const o=e.hasOwnProperty(t.id)?e[t.id]:t.default;d(t.group?t.group.find((t=>t.value===o))?.id:t.id,o)}}(e),function(){const n=t.createElement("section");n.id="options-buttons";const e=`<button id="shortcuts">${o.i18n.getMessage("shortcuts")}</button>`,i=`<button id="reset-callouts">${o.i18n.getMessage("resetCallouts")}</button>`;n.innerHTML=`${e}<br>${i}`,l(n.querySelector("#shortcuts"),s?"https://mzl.la/3Qwp5QQ":(c?"edge":"chrome")+"://extensions/shortcuts"),n.querySelector("#reset-callouts").addEventListener("click",(()=>(o.storage.local.set({callout:0}),a&&window.close()))),u.appendChild(n)}(),f(e.handle),t.addEventListener("change",r,!0)}()}(document);