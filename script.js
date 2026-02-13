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
noBtn.onmouseover = () => {
  startMusic();
  noBtn.style.position="absolute";
  noBtn.style.left=Math.random()*80+"%";
  noBtn.style.top=Math.random()*80+"%";
};

/* success */
const container = document.querySelector(".container");

yesBtn.onclick = () => {
  startMusic();
  container.innerHTML = `
    <div class="success">
      <h1>Too late 😮‍💨<br>You're mine now 😼❤️</h1>
    </div>
  `;
};

bgm.volume = 0.4;

function startMusic() {
  bgm.play().catch(() => {});
}