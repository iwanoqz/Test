"use strict";!function(e,t){const o="undefined"!=typeof chrome&&chrome||"undefined"!=typeof browser&&browser||void 0;if(!o)return;if("404 Not Found"===t.title)return;if(!t.querySelector("ytd-app"))return;const a=-1!==navigator.userAgent.indexOf("Firefox"),i="msfy",n=i+"-outer-message",l=i+"-inner-message",s={showVideoIndex:!1,preserveSelection:!1,sortPlaylistNames:!1,showPlaylistNames:!1,noRemovalConfirmation:!1,findDuplicatesBackwards:!1,customMenuWidth:!1,positioning:"center"},c=(t,o)=>((t,o=n,a=e)=>a.dispatchEvent(new CustomEvent(o,t)))({detail:JSON.stringify({type:t,value:o})});function r(e){try{const t=JSON.parse(e.detail),{type:a,value:i}=t;switch(a){case"average":case"barPosition":case"callout":case"collapsed":case"filterPosition":case"handle":case"menuWidth":o.storage.local.set({[a]:i});break;case"url":o.runtime.sendMessage(t)}}catch(e){}}function d(e){const{type:t,value:o}=e;if("command"===t)c(t,o)}function u(e){let t;for(t in delete e.average,e)e[t]=e[t].hasOwnProperty("newValue")?e[t].newValue:s.hasOwnProperty(t)?s[t]:void 0;t&&Object.keys(e).length&&c("options-changed",e)}function m(){e.removeEventListener(l,r,!0),o.runtime.onMessage.removeListener(d),o.storage?.onChanged.removeListener(u),c("destroy")}a&&m(),location,function e(t){const i=o.runtime.connect();if(!a){function n(t){a?t.error:o.runtime.lastError;t.onDisconnect.removeListener(n),setTimeout((()=>{!o.runtime.id?m():e(!0)}),100)}i.onDisconnect.addListener(n)}}(),e.addEventListener(l,r,!0),function(){if(!t.querySelector("html[data-cast-api-enabled]")){const e=()=>{const e={};return["addToPlaylist","addToQueue","addToWatchLater","addVideosFromFile","callout1","callout2","callout3","callout4","callout5","callout6","callout7","callout8","cancel","caseSensitive","channelName","chooseOutputFormat","clickToClose","close","collapse","confirmRemoveContent","copy","cut","deselectAllVideos","donate","downloadSelection","expand","exportHistory","exportPlaylist","exportingHistory","exportingPlaylist","extensionName","filterHelpTooltip","invalidData","invalidFilter","invertFilter","keys","loadEntirePlaylist","loadingEntirePlaylist","localeDir","moveAfter","moveToBottom","moveToTop","noDuplicatesFound","paste","reloadRequired","remove","removeVideos","selectAllVideos","selectDuplicates","selectWithFilter","selected","title","watched"].forEach((t=>e[t]=o.i18n.getMessage(t))),e};(async()=>{const a="js/polymer.js",i=t.createElement("script");i.src=o.runtime.getURL(a);const n=await o.storage.local.get(),l=t.documentElement.hasAttribute("dark");l!==(n.dark||!1)&&(await o.storage.local.set({dark:l}),n.dark=l),i.setAttribute("data-messages",JSON.stringify(e())),i.setAttribute("data-options",JSON.stringify(n)),i.async=!1,o.runtime.onMessage.addListener(d),o.storage.onChanged.addListener(u),t.documentElement.appendChild(i),i.remove()})()}}()}(window,document);