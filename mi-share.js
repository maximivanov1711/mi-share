// load shareon css
var shareoncssId = "shareon-css"; // you could encode the css path itself to generate id..
if (!document.getElementById(shareoncssId)) {
  var head = document.getElementsByTagName("head")[0];
  var link = document.createElement("link");
  link.id = shareoncssId;
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.min.css";
  link.media = "all";
  head.appendChild(link);
}

// load custom css
var micssId = "mi-share-css"; // you could encode the css path itself to generate id..
if (!document.getElementById(micssId)) {
  var head = document.getElementsByTagName("head")[0];
  var link = document.createElement("link");
  link.id = micssId;
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "mi-share.css";
  link.media = "all";
  head.appendChild(link);
}

// parse tel
var script = document.querySelector("#mi-share-js");
var tel = script.getAttribute("data-contact-tel");

// create mi_footer element
var mi_footer = document.createElement("div");
mi_footer.innerHTML = `
<div class="mi_footer">
      <a
        class="mi_btn mi_add_contact_btn"
        href="https://infomap.mobi/ajax/vcard?phone=${tel}"
      >
        Add contact
      </a>
      <a class="mi_btn mi_share_btn">Share</a>
      <div class="mi_share_container">
        <div class="shareon">
          <a class="facebook"></a>
          <a class="linkedin"></a>
          <a class="mastodon"></a>
          <a class="messenger"></a>
          <a class="odnoklassniki"></a>
          <a class="pinterest"></a>
          <a class="reddit"></a>
          <a class="telegram"></a>
          <a class="twitter"></a>
          <a class="viber"></a>
          <a class="vkontakte"></a>
          <a class="whatsapp"></a>
        </div>
      </div>
    </div>
`;

// fix position
var doc_height = document.documentElement.clientHeight;
var body_height = document.body.clientHeight;

if (doc_height > body_height) {
  mi_footer.style.position = "absolute";
  mi_footer.style.width = "100%";
  mi_footer.style.left = 0;
  mi_footer.style.right = 0;
  mi_footer.style.bottom = 0;
}

// add mi_footer element
document.querySelector("body").appendChild(mi_footer);

// add event on contact button
document.querySelector(".mi_share_btn").addEventListener("click", () => {
  document.querySelector(".mi_share_container").classList.toggle("open");
});

// shareon script
var Shareon=function(t){"use strict";const e={facebook:t=>`https://www.facebook.com/sharer/sharer.php?u=${t.url}`,linkedin:t=>`https://www.linkedin.com/sharing/share-offsite/?url=${t.url}`,mastodon:t=>`https://toot.kytta.dev/?text=${t.title}%0D%0A${t.url}${t.text?`%0D%0A%0D%0A${t.text}`:""}${t.via?`%0D%0A%0D%0A${t.via}`:""}`,messenger:t=>`https://www.facebook.com/dialog/send?app_id=${t.fbAppId}&link=${t.url}&redirect_uri=${t.url}`,odnoklassniki:t=>`https://connect.ok.ru/offer?url=${t.url}&title=${t.title}${t.media?`&imageUrl=${t.media}`:""}`,pinterest:t=>`https://pinterest.com/pin/create/button/?url=${t.url}&description=${t.title}${t.media?`&media=${t.media}`:""}`,pocket:t=>`https://getpocket.com/edit.php?url=${t.url}`,reddit:t=>`https://www.reddit.com/submit?title=${t.title}&url=${t.url}`,telegram:t=>`https://telegram.me/share/url?url=${t.url}${t.text?`&text=${t.text}`:""}`,twitter:t=>`https://twitter.com/intent/tweet?url=${t.url}&text=${t.title}${t.via?`&via=${t.via}`:""}`,viber:t=>`viber://forward?text=${t.title}%0D%0A${t.url}${t.text?`%0D%0A%0D%0A${t.text}`:""}`,vkontakte:t=>`https://vk.com/share.php?url=${t.url}&title=${t.title}${t.media?`&image=${t.media}`:""}`,whatsapp:t=>`https://wa.me/?text=${t.title}%0D%0A${t.url}${t.text?`%0D%0A%0D%0A${t.text}`:""}`},r=t=>()=>{window.open(t,"_blank","noopener,noreferrer")},o=()=>{const t=document.querySelectorAll(".shareon");for(const o of t)for(const t of o.children)if(t){const a=t.classList.length;for(let i=0;i<a;i+=1){const a=t.classList.item(i);if(Object.prototype.hasOwnProperty.call(e,a)){const i={url:encodeURIComponent(t.dataset.url||o.dataset.url||window.location.href),title:encodeURIComponent(t.dataset.title||o.dataset.title||document.title),media:encodeURIComponent(t.dataset.media||o.dataset.media||""),text:encodeURIComponent(t.dataset.text||o.dataset.text||""),via:encodeURIComponent(t.dataset.via||o.dataset.via||""),fbAppId:encodeURIComponent(t.dataset.fbAppId||o.dataset.fbAppId||"")},n=e[a](i);"a"===t.tagName.toLowerCase()?(t.setAttribute("href",n),t.setAttribute("rel","noopener noreferrer"),t.setAttribute("target","_blank")):t.addEventListener("click",r(n));break}}}},a=document.currentScript;return a&&a.hasAttribute("init")&&o(),t.init=o,Object.defineProperty(t,"__esModule",{value:!0}),t[Symbol.toStringTag]="Module",t}({});

Shareon.init();
