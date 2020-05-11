// const fnum = Math.floor(Math.random() * 40)
const fnum = 40

function fabonacciJS(n){
    return n < 2 ? n : fabonacciJS(n - 1) +  fabonacciJS(n - 2);
}
const importObject = {
  env: {
      abort(_msg, _file, line, column) {
          console.error("abort called at index.ts:" + line + ":" + column);
      }
  }
};
async function getWasm(src){
  const module = await WebAssembly.instantiateStreaming(
      fetch(src),
      importObject
  );
  return module
}
 function jsRunTime(){
  const jsStart = Date.now()
  const rs = fabonacciJS(fnum)
  const jsEnd = Date.now()
  const jsSpend = jsEnd - jsStart
  document.querySelector("#fabonacci_js").innerHTML=`<b>${jsSpend}</b> ms => Resut:${rs}`
  return jsSpend
}

document.querySelector("#fabonacci_compare").innerHTML=`fnum is ${fnum}`
async function runTime(name,src,n=fnum){
  let fn=(n)=>{
    console.log(name,'init fn',n)
    return n
  }
  if(name==='ts'){
    const module = await getWasm(src)
   const {fabonacci} = module.instance.exports;
   fn = fabonacci
  }else{
    const d = await import(src)
    const m =await d.default()
    console.log(m.fibonacci)
    fn = m.fibonacci
  }
  const start = Date.now()
  const rs = fn(n)
  const end = Date.now()
  const spend =   end -start
  document.querySelector(`#fabonacci_${name}`).innerHTML=`<b>${spend}</b> ms => Result:${rs}`
  return spend
}

(async () => {
  //
/*   const response = await fetch('../build/optimized.wasm');
  const buffer = await response.arrayBuffer();
  const fnmodule = new WebAssembly.Module(buffer);
  const instance = new WebAssembly.Instance(fnmodule);
  console.log('fnmodule',instance) */
  //
  const rustSpend = await runTime('rust','../rust/fabonacci/pkg/index.js')
  //
  const waSpend = await runTime('ts','../build/optimized.wasm')
  const jsSpend = jsRunTime()
  //

  // document.querySelector("#fabonacci_compare").innerHTML=`WASM Fast: ${jsSpend - waSpend} ms`
  
  //  
  const result = document.querySelector("#result");
  document.querySelector("#prime-checker").addEventListener("submit", event => {
      event.preventDefault();
      result.innerText = "";
      const number = event.target.elements.number.value;
      result.innerText = `${number} is ${isPrime(number) ? '' : 'not '}prime.`;
  });
})();


/* if (typeof(Worker) !== "undefined") {  
  worker = new Worker();
  console.log('worker',worker)
}  */