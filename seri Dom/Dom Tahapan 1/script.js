<<<<<<< HEAD
// Manipulasi Element

// ke-1 Pengunaan innerHTML untuk menganti isi dari html tanpa menyentuh langsung HTMLNYA
const napi = document.getElementById('judul');
 napi.innerHTML = 'Pace Batss';

//ke-2 Pengunaan element.Style.<propertiCSS>
const pace = document.querySelector('#judul');
 pace.style.color = 'red';

 //ke- 3 Pengunaan element.setAttribute(), element.setAttribute(), elementremoveAttribute
 //Atrribute adalah sesuatu yang menempel Pada element HTML dan setAttribut bisa di gunakan untuk menambahkan atrribut baru
const mace = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'zoro');
const war = document.querySelector('section#a a');
war.setAttribute('id', 'link');
//untuk mengetahui Isi dari sebuah atribute maka bisa mengunakan getAttribute
war.getAttribute('href');//tulis di console
//untuk menghilangkan sebuah attribute
war.removeAttribute('href');//tulis d console


               //element.classsList//
               const p2 = document.querySelector('.p2');
              //element.classList.add ()-> untuk menembahkan class baru
               p2.classList.add('lable');
              //element.classList.remove () -> untuk menghapus class
               p2.classList.remove('lable');
              //element.classList.toggle () -> untuk menambahkan kelas tertentu
               p2.classList.add('lable');      
              //element.classList.item() -> untuk mengetahui class tertentu dalam sebuah elelment
              p2.classList.item(2);
              //element.classList.contains() -> untuk mengecek apapkah dalam sebuah elelment apakah mempunyai kelas tertentu
              p2.classList.contains('empat');
              //element.classList.replace() -> untuk menganti kelas yang ada dengan kelas yang baru
              p2.classList.replace('tiga' , 'empat');
=======
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
  
   dengan mengunakan 2 query  ini untuk supaya tidak merubah haaman htmlNya
ke-4 document.querrySelctor() -> mengembalikan hanya 1 element
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
>>>>>>> 1f5763f6ab10e173ec56187016dd2388e2cbd405
