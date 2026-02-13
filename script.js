const title = document.getElementById("title");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const bgm = document.getElementById("bgm");

bgm.volume = 0.25;

/* typewriter */
const msg = "Will you be my Valentine? 💖";
let i = 0;

function type(){
  if(i < msg.length){
    title.innerHTML += msg[i++];
    setTimeout(type, 35);
  }
}
type();

/* floating hearts */
setInterval(()=>{
  const h=document.createElement("div");
  h.className="heart";
  h.innerHTML="💗";
  h.style.left=Math.random()*100+"%";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),6000);
},300);

/* runaway button */
noBtn.onmouseover=()=>{
  noBtn.style.position="absolute";
  noBtn.style.left=Math.random()*80+"%";
  noBtn.style.top=Math.random()*80+"%";
};

/* success */
yesBtn.onclick=()=>{
  document.body.innerHTML = `
    <div style="height:100vh;display:flex;justify-content:center;align-items:center;font-family:system-ui">
      <h1>Yay! ❤️</h1>
    </div>
  `;
};