const input = document.querySelector(`[id="name-input"]`);
const output = document.querySelector(`[id="name-output"]`);

input.addEventListener('input', () => {
  const value = input.value;
  if (value === '' || /^\s*$/.test(value)) {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = value;
  }
});
