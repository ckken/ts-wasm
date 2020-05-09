function fabonacciJS(n){
    return n < 2 ? n : fabonacciJS(n - 1) +  fabonacciJS(n - 2);
  }

(async () => {
  //
/*   const response = await fetch('../build/optimized.wasm');
  const buffer = await response.arrayBuffer();
  const fnmodule = new WebAssembly.Module(buffer);
  const instance = new WebAssembly.Instance(fnmodule);
  console.log('fnmodule',instance) */
  //
  const importObject = {
      env: {
          abort(_msg, _file, line, column) {
              console.error("abort called at index.ts:" + line + ":" + column);
          }
      }
  };
  const module = await WebAssembly.instantiateStreaming(
      fetch("../build/optimized.wasm"),
      importObject
  );
  console.log('module',module)
  const {isPrime,fabonacci} = module.instance.exports;
  //===
  const waStart = Date.now()
  console.log('fabonacci_wasm',fabonacci(40))
  const waEnd = Date.now()
  const waSpend = waEnd - waStart
  document.querySelector("#fabonacci_wasm").innerHTML=`${waSpend} ms`
  //
  const jsStart = Date.now()
  console.log('fabonacci_js',fabonacciJS(40))
  const jsEnd = Date.now()
  const jsSpend = jsEnd - jsStart
  document.querySelector("#fabonacci_js").innerHTML=`${jsSpend} ms`
  document.querySelector("#fabonacci_compare").innerHTML=`WASM Fast: ${jsSpend - waSpend} ms`
  
  //  
  const result = document.querySelector("#result");
  document.querySelector("#prime-checker").addEventListener("submit", event => {
      event.preventDefault();
      result.innerText = "";
      const number = event.target.elements.number.value;
      result.innerText = `${number} is ${isPrime(number) ? '' : 'not '}prime.`;
  });
})();
