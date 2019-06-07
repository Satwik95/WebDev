/*---------------------Higher Order functions--------------------------*/
function f1(a, delta){
    let val = a;
    let bag = {
        incr: function (){
            val+=delta
        },
        decr: function (){
            val-=delta
        },
        show: function (){
            console.log(val)
        }
    };
    return bag;
}
temp = f1(10,5);
console.log(temp.show());// 10
temp.incr(); // 15
temp.incr(); // 20
temp.decr(); // 15
console.log(temp.show()); // 15
console.log(typeof temp);  // object
console.log(typeof temp.show()); // undefined
console.log(typeof temp.show); // function
/*---------------------Sorting--------------------------*/
let arr = [1,4,3,55,22,1,6];
function compare(a, b){return a-b;}
let x = arr.sort(compare);
console.log(arr);
x = arr.sort(function(a, b){return b-a;});
console.log(arr);
/*---------------------Mapping--------------------------*/
arr = [1, 2,3, 4,5];
let arr2 = arr.map(function(x){return x*x;});
console.log(arr2);
let arr3 = arr.map(Math.sqrt);
console.log(arr3);
/*---------------------Filter--------------------------*/
arr2 = arr.filter(function(x){
    return x%2==0;
});
// reducer, starts from arr[1], with a as arr[0]
console.log(arr.reduce(function(a, b){return a+b}));

/*---------Something like class but not really---------*/
function F(x, y){
    this.x = x;
    this.y = y;
    this.f2 = function(){
        return this.x+this.y;
    }
}

let yo = new F(2, 3);
console.log(yo.f2());

/*------------Inheritance/Prototype-------------------------*/
let p = {
    a:10
};
let q = Object.create(p);
q.b = 20;
let r = Object.create(q);
r.c = 30;
console.log(r.a);
console.log(r.__proto__.__proto__);
q.a =q.a+1;
r.a += 1;
console.log(q.a);
console.log(r.a);
console.log(p.a);
console.log(r);
/*----------------Asynchronous Functions------------*/
function done(){
    console.log("Yo");
}
setTimeout(done, 1000);
console.log("yoyo");

function task(done){
    console.log('We are doing a task');
    setTimeout(done, 1000);
}
task(function(){console.log("task was done")});
console.log("we did a task");

//let a = false;
// setTimeout(function(){a=true;}, 1000);
//while(!a){
//    console.log(1);
//}
// in the above case, the interpreter never gets free
// hence it never gets to run the set timer function
arr = [1, 2]
arr.push(3, 4, 5)
console.log(arr)
arr.splice(0,2, 5, 5, 5);
console.log(arr)

// without IIFE
for(var i=0;i<10;i++){
    setTimeout(function(){
            console.log(i);
        },100);
};
// IIFE
// for(let i=0;i<10;i++){
//     (function(j){
//         setTimeout(function(){
//             console.log(j);
//         },100)
//     })(i);
// };

(function(l, p){
    l(p(3, 4));
})(console.log, Math.pow);