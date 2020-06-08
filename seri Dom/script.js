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

