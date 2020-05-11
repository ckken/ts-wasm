# rust wasm  

## 安装     
+ wasm-pack `curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh`

## 编译 
+ `cd rust/fabonacci` && `wasm-pack build`
+ `wasm-pack build --target web --out-name index` 生成web支持模块 