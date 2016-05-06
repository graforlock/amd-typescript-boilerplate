define(['rxjs'],({Observable}) => {
  return Observable.interval(300)
    .map(event => event*2);
})
