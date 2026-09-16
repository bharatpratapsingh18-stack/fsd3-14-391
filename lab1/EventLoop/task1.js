const f1 = () => {
  console.log("f1 starts");
  f2();
  console.log("f1 running");
  console.log("f1 end");
};
const f2 = () => {
  console.log("f2 starts");
  f3();
  console.log("f2 running");
  console.log("f2 ends");
};

const f3 = () => {    
  console.log("f3 starts"); 
  console.log("f3 running");
  console.log("f3 end");
};    
function main() {
  console.log("main");
  f1(); 
  console.log("end main");
}
main();
//the calling process which we used here is called synchronous call.
//it is single threaded => it only perform onr task at a time.
// in asynchronous we use event loop to manage the call stack.
// asynchronous call using timers-
//1.set Timeout 
//2.set immediate
//3. process.nexttick
//4.set internal
