// 상단
window.addEventListener("load", function () {


  document.querySelector('.topmenu').addEventListener('click',e=>{
      if(e.target.nodeName === 'LI'){
        let id_value = e.target.dataset.link;
        document.querySelector(id_value).scrollIntoView({behavior : 'smooth'});
      }
    });
});