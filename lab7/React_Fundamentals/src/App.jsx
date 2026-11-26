function Hello(args){
  return(
    <>
    <h1>{args.name}</h1>
    <h2>Rs. {args.price} </h2>
    <h3>Author {args.author}</h3>
    </>
  );
}

// <> </> : fragments can be used to wrap multiple elements 
// function must return single element
// compnent - any js function returns html directly
//compnent can be called as html tag. The tag must be closed.
//component first character must be capital.
export default function App(){
  return(
    <>
  <h1>Hello React</h1>
  <Hello name="let us c" price="150" author="F. Scott Fitzgerald" />
 </>
)
}