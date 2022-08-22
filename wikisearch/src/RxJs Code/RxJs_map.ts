/* Below are Pratice RxJS code 
const { fromEvent } = Rx;
const { map } = RxOperators;

const input = document.createElement('input');
const container = document.querySelector('.container');
container.appendChild(input);

const observable = fromEvent(input, 'input')
	.pipe(
    		map(event => event.target.value),
    		map(value => parseInt(value)),
    		map(value => {
          if (isNaN(value)) {
            throw new Error('Enter a Number!');
          }
          return value;
        })
  )

observable.subscribe({
 
  next(value) {
    console.log(`Your value is ${value}`)
  },
  error(err) {
    console.error('BAD THINGS HAPPEN!!!', err.message);
  }
  
});


observable;

const { Observable } = Rx;
const observable = new Observable((subscriber) => {
  subscriber.next(1);
   subscriber.error(new Error('new error'));
  subscriber.complete();
   
});
  
  observable.subscribe({
    next(value){
    console.log('got a value', value);
    },
    error(err){
      console.log('bad errors', err.message);
    },
    complete(){
    console.log('complete');
    }
    
  });

observable;

*/