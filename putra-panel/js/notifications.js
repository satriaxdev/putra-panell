function showNotif(text){
  const container = document.getElementById('notif-container');
  const n = document.createElement('div');
  n.className = 'notif';
  n.innerText = text;
  container.appendChild(n);
  const beep = document.getElementById('beep-sound');
  try{ beep.currentTime = 0; beep.play(); }catch(e){}
  setTimeout(()=> n.classList.add('show'), 10);
  setTimeout(()=> { n.classList.remove('show'); setTimeout(()=> n.remove(), 400); }, 2200);
}
