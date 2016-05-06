define('app',['rxjs','button'], ({Observable}, button) => {
    return {
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
    };
});
