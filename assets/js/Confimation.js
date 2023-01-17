n=Number(localStorage.getItem('n'));

let promise = Promise.resolve();  // Used to hold chain of typesetting calls

function typeset(code) {
  promise = promise.then(() => MathJax.typesetPromise(code()))
                   .catch((err) => console.log('Typeset failed: ' + err.message));
  return promise;
}

typeset(() => {
    const math = document.querySelector('#coeff');
    math.innerHTML = '\\((1-x^2)y\'\'-2xy\'+ '+n*(n+1)+'y=0\\)';
    return [math];
});

document.getElementById('yes').addEventListener('click',function(){
  open("solution.html","_self")
})
document.getElementById('no').addEventListener('click',function(){
  open("index.html","_self")
})

/*typeset(() => {
    const math = document.querySelector('#coeff');
    math.innerHTML = '$$\\frac{a}{1-a^2}$$';
    return [math];
});*/