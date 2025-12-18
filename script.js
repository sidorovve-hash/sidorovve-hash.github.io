document.addEventListener('DOMContentLoaded', function() {
  const year = new Date().getFullYear();
  document.querySelector('footer p:last-child').innerHTML = `© ${year} Servak Minecraft Server`;
});