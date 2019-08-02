function fn(a,b){
    console.log(a,b);
    const arr = [...arguments];
    arr.push(3);
    console.log(arr)
}
const obj= [1,2]
fn(...obj);