mod lib;
use lib::fibonacci;
fn main() {
  println!("Fibonacci generator");
  println!("number 1=>{}", fibonacci(1));
  println!("number 2=>{}", fibonacci(2));
  println!("number 3=>{}", fibonacci(3));
  println!("number 5=>{}", fibonacci(5));
  println!("number 40=>{}", fibonacci(40));
}