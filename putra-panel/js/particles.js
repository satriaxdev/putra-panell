// Simple particle background
const canvas=document.getElementById('particles');
if(canvas){
  const ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  const particles=[];
  for(let i=0;i<100;i++){
    particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2+1,speed:Math.random()*1});
  }
  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle='rgba(255,0,0,0.5)';
      ctx.fill();
      p.y+=p.speed;
      if(p.y>canvas.height)p.y=0;
    });
    requestAnimationFrame(animate);
  }
  animate();
  window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});
}
