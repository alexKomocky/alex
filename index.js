//const user = {name: 'ivan'};
//const admin = user ;
//admin.name = 'pete';
//console.log(user.name);


//const user = { name :'ivan'};
//const user2 = { name: 'Ivan'};


//console.log('user',user);
//console.log('user2', user2);


//const strUser = JSON.stringify(user);// переводит обьект в строку
//const strUser2 = JSON.stringify(user);
//const strUser2 = JSON.parse(user);// преображает строку в обьект с ключами
//console.log('strUser', strUser);
//console.log('strUser2', strUser2);

//console.log('eq-user', user === user2);
//console.log('eq', strUser === strUser);


//let user = {
    //name:'nic',
    //age:30,
    //email:{
    //    name:'orange',
   // },
//};

//let clone = Object.assign({},user);
//clone.name = '1';
//console.log('clone', clone);
//console.log('user', user);
//const str = JSON.stringify(clone);
//const newObj = JSON.parse(JSON.stringify(clone));
//console.log(newObj);



//function foo(x) { // замыкание функция
  //  return function (y) {
    //    return x*y;
    //};
//}
//const q = foo(10);


//console.log q(5);
//console.log q(10);
//console.log q(68);

//function argsExample (...args) {
    //args имя массива
   // console.log(args);
//}


//argsExample(1, 2, 3, 4, 5, 7);



//setTimeout(()=> {
    //console.log('setTimeout example');// принимает в себя колбэк

//}, 1000);


setInterval(() => {
    console.log ('setInterval example');
}, 1000 );
let count = 0 ;

const refreshIntervalId = setInterval(() =>{
    console.log(count);
    if (count ===3) {
        clearInterval(refreshIntervalId);

    }
    count = count +1;
},1000 ) ;



function pow (x,n) {
    let result = 1;
// умножаем result на х п раз в цикле
    for (let i=0; i< n ; i++ ) {
        result *=x;

    }
    return result;
}
console.log(pow(2, 3)); 

//рекурсивный метод. функція вызывает сама себя
function pow (x, n) {
    if (n==1) {
        return x;
    } else {
        return x * pow (x, n -1);
    }
}




console.log (pow(2, 3));


function main () {
    console.log("A");
    setTimeout(() => {
        console.log("B");
    }, 0);
    console.log ("C")
}
main();