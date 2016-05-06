define('button',['rxjs'],({Observable}) => {
    let button = document.createElement('button');
    button.id = 'clicky-btn';
    button.textContent = 'Click me';
    document.body.appendChild(button);
    return Observable.fromEvent(button, 'click');
});
