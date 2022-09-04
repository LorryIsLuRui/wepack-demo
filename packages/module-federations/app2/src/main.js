// // import fn from 'app1/util';
// const fn = await import('app1/util')
// console.log('====：fn', fn);

// console.log(3333)
// import fn from 'app1/util';
import('App1/util')
.then(res => {
    console.log('====：fn', res);
})


console.log(3333)