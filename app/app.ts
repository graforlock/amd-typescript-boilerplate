export const init = () =>  {
  let button = document.createElement('button');
  button.textContent = 'Click me';
  button.addEventListener('click', () => {
    require(['popup'], function(popup) {
      let div = document.createElement('h5');
      document.body.appendChild(div);
      popup.subscribe(x => div.textContent = x);
    });
  });
  document.body.appendChild(button);
};
