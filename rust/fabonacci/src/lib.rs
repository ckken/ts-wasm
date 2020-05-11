// mod utils;

// use wasm_bindgen::prelude::*;

// // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// // allocator.
// #[cfg(feature = "wee_alloc")]
// #[global_allocator]
// static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

// #[wasm_bindgen]
// extern {
//     fn alert(s: &str);
// }

// #[wasm_bindgen]
// pub fn greet() {
//     alert("Hello, fabonacci!");
// }

use wasm_bindgen::prelude::*;
#[wasm_bindgen]
pub fn fibonacci(number: u32) -> u32 { 
    if number == 0 { 
        0
    } else if number == 1 { 
        1
    } else {
         fibonacci(number -1) + fibonacci(number -2) 
    } 
 }
//  pub fn fibonacci(n: u32) -> u32 {
//     match n {
//         0 => 1,
//         1 => 1,
//         _ => fibonacci(n - 1) + fibonacci(n - 2),
//     }
// } 


// function fabonacciJS(n){
//     return n < 2 ? n : fabonacciJS(n - 1) +  fabonacciJS(n - 2);
// }
