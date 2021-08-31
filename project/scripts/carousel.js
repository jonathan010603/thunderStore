// Troca automática de slides 
$(document).ready(function() {
  
  // Tempo para ativação do carrossel
  $("#myCarousel").carousel({interval: 4000});
  
  // Indicadores de slides
  $(".item1").click(function() {
      $("#myCarousel").carousel(0);
  });
  $(".item2").click(function() {
      $("#myCarousel").carousel(1);
  });
  $(".item3").click(function() {
      $("#myCarousel").carousel(2);
  });
  $(".item4").click(function() {
      $("#myCarousel").carousel(3);
  });
  
  // Controles esquerda e direita
  $(".left").click(function() {
      $("#myCarousel").carousel("prev");
  });
  $(".right").click(function() {
      $("#myCarousel").carousel("next");
  });
});