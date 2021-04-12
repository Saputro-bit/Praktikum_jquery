/**
 * Kode Vanilla JavaScript(Javascript Murni) untuk menambahkan Value
 * Pada Elemen HTML
 */
 document.getElementById('nama').innerHTML = 'Saputro';

 /**
  * kode Jquery Untuk Menambahkan Value
  * Pada Elemen HTML
  */
 $('#nim').html('20190140003');
 /**
  * Jquery menggunakan selector sama seperti css
  * . untuk class
  * # untuk id
  * kita dapat menuliskan tag html bila ingin memilih berdasarkan tag
  * misal: <button></button maka tinggal tulis button
  * Dalam kode berikut, kita akan menampilkan console.log saat document ready
  */
 $(function() {
     console.log("Hello");
 });
 
 // kode Jquery untuk menyembunyikan Elemen
 $("#hide").on("click", function() {
     $("#nama").hide();
 });
 
 //kode Jquery Untuk Menampilkan Kembali Elemen
 $("#show").on("click", function() {
     $("#nama").show();
 });
 
 //Coba ini :)))
 $("#toggle").on("click", function() {
     $("#nama").toggle();
 })
 
 //Kode Jquery Untuk Fade In Elemen HTML
 $("#fadeIn").on("click", function(){
     $("#tanggal").fadeIn();
 });
 
 //Kode Jquery Untuk Fade In Elemen HTML
 $("#fadeOut").on("click", function(){
     $("#tanggal").fadeOut();
 });
 
 //Coba ini:))
 $("#fadeToggle").on("click", function(){
     $("#tanggal").fadeToggle();
 });
 
 //kode Jquery untuk slide up Elemen HTML
 $("#slideUp").on("click", function(){
     $("img").slideUp();
 });
 
 
 //kode Jquery untuk slide up Elemen HTML
 $("#slideDown").on("click", function(){
     $("img").slideDown();
 });
 
 //Coba Ini:)))
 $("#slideToggle").on("click", function(){
     $("#img").slideToggle();
 });
