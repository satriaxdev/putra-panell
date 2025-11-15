function setROLECard(role, username){
  const main = document.getElementById('main-container');
  // buat card jika belum ada
  if(!document.getElementById('role-card')){
    const card = document.createElement('div');
    card.id='role-card';
    card.style.cssText='padding:1rem;border:1px solid #ff0000;border-radius:10px;background:rgba(255,0,0,0.05);color:#fff;font-weight:600;margin-bottom:10px;';
    card.innerHTML=`<span id="role-text">ROLE: ${role}</span>`;
    main.prepend(card);
  }else{
    document.getElementById('role-text').textContent=`ROLE: ${role}`;
  }
  try{
    sessionStorage.setItem('panel_role', role);
    sessionStorage.setItem('panel_user', username || '');
  }catch(e){}
}

(function restoreROLEOnLoad(){
  try{
    const savedROLE = sessionStorage.getItem('panel_role');
    const savedUser = sessionStorage.getItem('panel_user');
    if(savedROLE) setROLECard(savedROLE,savedUser);
  }catch(e){}
})();

function checkLogin(){
  const u=document.getElementById('username').value.trim();
  const p=document.getElementById('password').value.trim();
  const err=document.getElementById('login-error');
  const loginPage=document.getElementById('login-page');
  const loading=document.getElementById('loading');

  const roles=[
    {role:'Developer',prefix:'DEVELOPER'},
    {role:'Admin',prefix:'ADMIN'},
    {role:'Member',prefix:'MEMBER'}
  ];

  for(const r of roles){
    if(u.toUpperCase().startsWith(r.prefix)){
      const num=u.substring(r.prefix.length);
      if(/^\d+$/.test(num) && p===r.prefix+num){
        loading.classList.add('active');
        setTimeout(()=>{
          loading.classList.remove('active');
          loginPage.classList.add('hidden');
          setTimeout(()=>loginPage.style.display='none',800);
          setROLECard(r.role,u.toUpperCase());
          showNotif(`Login berhasil. Selamat datang, ${u.toUpperCase()}!`);
        },1200);
        return;
      }
    }
  }
  err.classList.add('visible');
  showNotif('Login gagal!');
  setTimeout(()=> err.classList.remove('visible'),1800);
}
