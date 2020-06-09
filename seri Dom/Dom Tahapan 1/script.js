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
