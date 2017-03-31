document.querySelectorAll('.image-slider').forEach( slider => {
  const div = slider.querySelector('div');
  const img = slider.querySelector('img');

  const range = slider.querySelector('input');
  range.type = 'range';

  range.oninput = e => {
    div.style.width = e.target.value + '%';
  }
});