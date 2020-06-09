// DOM selection
//ke-1 document.getElementById() -> mengembalikan element
   const judul = document.getElementById('judul');
judul.style.backgroundColor = 'black';
judul.style.color = 'white';
judul.innerHTML = 'Halaman Zoro';


//ke-2 document.getElementsByTagName() -> mengembalikan HTML colection
    const napi = document.getElementsByTagName('p');
    for( let i = 0; i < napi.length; i++){
       napi[i].style.backgroundColor = 'lightblue';
    }


//ke-3 document.getElementsByClassName() -> mengembalikan HTML colection
  const pace = document.getElementsByClassName('p1');
pace[0].innerHTML = 'ini di ubah mengunakan javascript';  
  
 // dengan mengunakan 2 query  ini untuk supaya tidak merubah haaman htmlNya
//ke-4 document.querrySelctor() -> mengembalikan hanya 1 element
 const p4 = document.querySelector('#b p');
p4.style.color = 'white';
p4.style.fontSize = '20px';
p4.style.opacity = '80%';
p4.style.cursor = 'pointer';
p4.style.borderRadius = '20px';
p4.style.backgroundColor = 'black';

   //document.querySelectorAll() ->Mengembalikan semua elemant tapi megunakan indeks ke berapa
  const p = document.querySelectorAll ('p');
p[2].style.backgroundColor = 'pink';
