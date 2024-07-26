function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById('controls');
    const inputNumber = controls.querySelector('input[type="number"]');
    const createButton = controls.querySelector('button[data-create]');
    const destroyButton = controls.querySelector('button[data-destroy]');
    const boxesContainer = document.getElementById('boxes');

    createButton.addEventListener('click', () => {
      const amount = Number(inputNumber.value);
      if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        inputNumber.value = '';
      } else {
        alert('Please enter a number between 1 and 100');
      }
    });
  
    destroyButton.addEventListener('click', destroyBoxes);
  
    function createBoxes(amount) {
       

      destroyBoxes();
  
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        const size = 30 + i * 10;
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        fragment.appendChild(box);
      }
      boxesContainer.appendChild(fragment);
    }
    function destroyBoxes() {
        boxesContainer.innerHTML = '';
      }
   ;