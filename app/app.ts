import {Observable} from 'rxjs';
import {button} from './button';

export const app = {
    init: () => {
      button
      .subscribe((event: MouseEvent) => {
        require(['popup'], function(popup) {
          let div = document.createElement('div');
          document.body.appendChild(div);
          popup.subscribe(x => div.textContent = x);
        });
      });
    }
 }

