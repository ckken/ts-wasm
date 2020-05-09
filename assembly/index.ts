// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function isPrime(x: u32): bool {
  if (x < 2) {
      return false;
  }

  for (let i: u32 = 2; i < x; i++) {
      if (x % i === 0) {
          return false;
      }
  }

  return true;
}


export function fabonacci(n:number):number{
  return n < 2 ? n : fabonacci(n - 1) +  fabonacci(n - 2);
}