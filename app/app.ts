export const init = () =>  {
  let button = document.createElement('button');
  button.textContent = 'Click me';
  button.addEventListener('click', () => {
    require(['popup'], function(popup) {
      popup.subscribe(x => console.log(x));
    });
  });
  document.body.appendChild(button);
};
