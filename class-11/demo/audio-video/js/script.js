const leeves = document.getElementById('leeves');
const randomizer = document.getElementById('randomizer');

randomizer.addEventListener('click', function () {
  leeves.volume = Math.random();
  leeves.muted = !leeves.muted;
});
