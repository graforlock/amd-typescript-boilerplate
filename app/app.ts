export const init = () =>  {
  let button = document.createElement('button');
  button.textContent = 'Click me';
  button.addEventListener('click', () => {
    require(['popup'], function(popup) {
      console.log(popup.default());
    });
  });
  document.body.appendChild(button);
};
