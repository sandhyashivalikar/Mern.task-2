const body = document.querySelector('body');
const inputs = [
  {
    id: 'name',
    alertId: 'nameAlert',
    errorMessage: 'This field is required',
    validationFn: (value) => value === '',
  },
  {
    id: 'email',
    alertId: 'emailAlert',
    errorMessage: 'A valid email is required',
    validationFn: (value) => value === '',
  },
  {
    id: 'website',
    alertId: 'websiteAlert',
    errorMessage: 'A valid URL is required',
    validationFn: (value) => value === '',
  },
  {
    id: 'message',
    alertId: 'messageAlert',
    errorMessage: 'This field is required',
    validationFn: (value) => value === '',
  },
];

inputs.forEach((inputData) => {
  const input = document.getElementById(inputData.id);
  const alert = document.getElementById(inputData.alertId);

  input.addEventListener('blur', () => {
    if (inputData.validationFn(input.value)) {
      input.style.borderColor = 'red';
      alert.innerHTML = inputData.errorMessage;
    } else {
      input.style.borderColor = 'black';
      alert.innerHTML = '';
    }
  });
});
