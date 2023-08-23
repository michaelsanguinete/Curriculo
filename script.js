document.addEventListener("DOMContentLoaded", function() {
    const carregarExperienciasBtn = document.querySelector('.carregar-experiencias a');
    const experienciasExtras = document.getElementById('experiencias-extras');
    const descricoes = document.querySelector('.descricoes');
  
    carregarExperienciasBtn.addEventListener('click', function(event) {
      event.preventDefault();
      
      if (experienciasExtras.style.display === 'none' || experienciasExtras.style.display === '') {
        experienciasExtras.style.display = 'block';
        carregarExperienciasBtn.textContent = 'Ocultar experiências extras';
      } else {
        experienciasExtras.style.display = 'none';
        carregarExperienciasBtn.textContent = 'Carregar mais experiências';
      }
    });
  });
  