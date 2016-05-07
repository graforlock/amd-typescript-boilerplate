import {Observable} from 'rxjs';

let _button = document.createElement('button');
_button.id = 'clicky-btn';
_button.textContent = 'Click me';
document.body.appendChild(_button);

export const button = Observable.fromEvent(_button, 'click');

