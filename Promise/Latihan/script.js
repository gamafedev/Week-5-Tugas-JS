const janji = new Promise(function(resolve, reject){
    if(true){
        resolve('Promise berhasil');
    }else{
        reject('Promise gagal!');
    }
});

janji.then(function(result){
    console.log(result);
}).catch(error => console.log(error))
.finally(() => {
    console.log('Promise selesai di eksekusi');
})