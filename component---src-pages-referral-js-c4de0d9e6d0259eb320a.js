"use strict";(self.webpackChunkgodlfish_static_landing_page=self.webpackChunkgodlfish_static_landing_page||[]).push([[910],{3135:function(e,l,t){t.r(l),t.d(l,{Head:function(){return E},default:function(){return d}});var a=t(6540),r=t(6456),n=t(7528),c=t(3107),s=t(2922),o=t(3158),m=t(6266),i=t(1693);var u=()=>{const{0:e,1:l}=(0,a.useState)(!1),{0:t,1:r}=(0,a.useState)(!1),n=()=>l(!1),{0:u,1:E}=(0,a.useState)(),d=(0,s.v)(),f=(0,i.useLocation)(),p=f.href?f.href.replace("/referral",""):"";console.log(p);const h=async()=>{if(d.publicKey){console.log("getting code..");const e={method:"post",url:"https://api.godlenfish.com/referral/code/",withCredentials:!1,headers:{"Content-Type":"application/json"},data:JSON.stringify({address:d.publicKey.toString()})};m.A.request(e).then((e=>{const l=e.data.code;E(l)})).catch((e=>{console.log(e)}))}else(async()=>{console.log("Trying to connect");try{await d.connect(),r(!0)}catch(e){l((e=>!e)),console.error("Error connecting wallet:",e)}})()};return a.createElement("div",{id:"referral",className:"referralSection"},a.createElement("div",{className:"referralInnerWrap"},a.createElement("div",{className:"referralRow"},a.createElement("h2",null,"Referrals"),a.createElement("div",{className:"referralBlocksContainer"},a.createElement("h3",null,"Invite friend"),a.createElement("p",null,"For each friend that joing and meets the tasks"),a.createElement("div",{className:"referralInner"},a.createElement("span",null,"My referral link code"),a.createElement("span",{className:"textToCopy"},u?p+"/?referral="+u:"Connect wallet to get code"),t?a.createElement("button",{onClick:()=>{h()},className:"connectButton"},"Get link"):a.createElement("button",{onClick:()=>{h()},className:"connectButton"},"Connect Wallet"))))),a.createElement("div",{className:"referralOuterWrap"},a.createElement("div",{className:"referralInnerWrap2"},a.createElement("h3",null,"Statistics"),a.createElement("div",{style:{maxWidth:"calc(50% - 5px)"},className:"referralInner2"},a.createElement("span",{className:"large"},"x"),a.createElement("p",null,"New transactions were made by using your link")),a.createElement("div",{style:{maxWidth:"calc(50% - 5px)"},className:"referralInner2"},a.createElement("span",{className:"large"},"x"),a.createElement("p",null,"Were invested using your link")),a.createElement("div",{style:{maxWidth:"100%"},className:"referralInner2"},a.createElement("div",{className:"centerText"},a.createElement("span",{className:"large"},"x"),"(X $SOL)"),a.createElement("p",null,"Your reward"))),a.createElement("div",{className:"referralInnerWrap3"},a.createElement("h3",null,"Main information $BISH army"),a.createElement("div",{className:"referralWrapIt"},a.createElement("div",{className:"referralInner3"},a.createElement("span",null,"Info for generals"),a.createElement("ul",null,a.createElement("li",null,"1. Connect your wallet"),a.createElement("li",null,"2. Generate code"),a.createElement("li",null,"3. Share code anywhere"),a.createElement("li",null,"4. Enjoy 5% from your soldiers")),a.createElement("span",{className:"example"},"Example"),a.createElement("p",null,"Your friend bought $BISH for 1  $SOL, you received 0.05 $SOL worth of $BISH")),a.createElement("div",{className:"referralInner3"},a.createElement("span",null,"Info for soldiers"),a.createElement("ul",null,a.createElement("li",null,"1. Find code somewhere"),a.createElement("li",null,"2. Buy with referral code"),a.createElement("li",null,"3. Enjoy extra 3% to $BISH purchase")),a.createElement("span",{className:"example"},"Example"),a.createElement("p",null,"You bought 1 $SOL worth of $BISH by using code, you received 1.03 $SOL worth of $BISH"))))),a.createElement(c.A,{className:"modalWrapper",open:e,closeOnDocumentClick:!0,onClose:n},a.createElement("div",{className:"modal"},a.createElement("a",{className:"close",onClick:n},"×"),a.createElement(o.A,{closeModal:n}))))};const E=()=>a.createElement(n.A,{title:"Referrals"});var d=()=>a.createElement(r.A,null,a.createElement(n.A,{title:"Referrals"}),a.createElement("div",{className:"section"},a.createElement(u,null)))}}]);
//# sourceMappingURL=component---src-pages-referral-js-c4de0d9e6d0259eb320a.js.map