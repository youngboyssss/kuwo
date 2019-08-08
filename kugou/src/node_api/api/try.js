/*
function fn() {
    try{
        //console.log(aaaaaaa)
        //throw "跑出一个错误"
    }catch (e) {
        console.log(555555555)
    }
    finally {
        console.log("不管try当中有没有异常，我都会执行")
    }
}
fn()*/

/*父类*/
function Parent(add,net,no,teacher) {
    this.add = add;
    this.net = net;
    this.no = no;
    this.teacher = teacher
}
/*子类*/
/*function Child(name,age,sex,id) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.id = id;
    Parent.call(this,"山东","www.baidu.com","1608","ccy"); //这个时候的Parent中的this已经被Child所代替
}
var child = new Child("fangMing","18","男","10086");
console.log(child.add)*/

/*let a = {
    w:1
}

let b = {
    f:2
}

Object.assign(a,b);
console.log(a);
console.log(b)*/

let index = 1;
console.log({index})