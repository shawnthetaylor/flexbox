const radios = document.querySelectorAll('input[type="radio"]');

function updateCSSVariable(e) {
  document.documentElement.style.setProperty(`--${this.dataset.rule}`, this.value);
 }

radios.forEach(input => {
  input.addEventListener('change', updateCSSVariable);
});

const order = document.querySelectorAll('.children .order input[type="number"]');

function updateChildOrder(e) {
  document.documentElement.style.setProperty(`--order-c${this.dataset.child}`, parseInt(this.value));
}

order.forEach(input => {
  input.addEventListener('change', updateChildOrder);
});

const flexGrow = document.querySelectorAll('.children .flex-grow input[type="number"]');

function updateChildFlexGrow(e) {
  document.documentElement.style.setProperty(`--flex-grow-c${this.dataset.child}`, parseInt(this.value));
}

flexGrow.forEach(input => {
  input.addEventListener('change', updateChildFlexGrow);
});
