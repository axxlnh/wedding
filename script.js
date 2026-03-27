// fade animation
const elements = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
});

elements.forEach(el => observer.observe(el));

// message rotation
const messages = [
  "너의 모든 날이 사랑으로 가득하길",
  "세상에서 제일 행복한 신부가 되길",
  "믿음, 소망, 사랑 그 중의 제일은 사랑이라\n(고린도전서 13:13)",
  "두 사람이 한 사람보다 나음은 그들이 수고함으로 좋은 상을 얻을 것임이라\n(전도서 4:9-10)",
  "정신 안차리면 술로 혼나 ♥",
  "하나님이 짝지어 주신 것을 사람이 나누지 못할지니라\n(마태복음 19:6)"
];

function showMessage(){
  const random = messages[Math.floor(Math.random()*messages.length)];
  document.getElementById('msg').innerText = random;
}

// confetti effect
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];
for(let i=0;i<100;i++){
  pieces.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*6+4,
    d:Math.random()*100
  });
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="#c6a989";
  ctx.beginPath();
  for(let i=0;i<pieces.length;i++){
    let p=pieces[i];
    ctx.moveTo(p.x,p.y);
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2,true);
  }
  ctx.fill();
  update();
}

function update(){
  for(let i=0;i<pieces.length;i++){
    let p=pieces[i];
    p.y += Math.cos(p.d)+1;
    p.x += Math.sin(p.d);
    if(p.y>canvas.height){
      p.y=0;
      p.x=Math.random()*canvas.width;
    }
  }
}

setInterval(draw,30);

/* 슬라이드 자동 변경 */
let index = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
  slides.forEach(s => s.classList.remove('active'));
  slides[index].classList.add('active');
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000);