// function fakeDownload(done){
// //     console.log("Downloading...")
// //     setTimeout(function(){
// //         let data = "Some downloaded data";
// //         done(data);
// //     }, 3000);
// // }
// //
// // fakeDownload(function(data){
// //     console.log("Downloaded data->", data);
// // })
/*--------Promises------------*/
console.log("Promises\n")
function fakeDownloadPromise(bool){
    return new Promise(function(resolve, reject){
        if (bool){
            setTimeout(function () {
                let data = "Some downloaded data";
                resolve(data);
            }, 1000);
        }
        else{
            reject(new Error("Couldn't download the file"))
        }
    })
}

// fakeDownloadPromise(true).then(function(data){
//     console.log("Downloaded data->", data);
// }).catch(function(err){
//     console.log(err)
// })

// if you wanna work with the downloaded data some time later

let fkdown = fakeDownloadPromise(true);
fkdown.catch(function(err){
    console.log(err)
});
setTimeout(function(){
    fkdown.then(function(data){
        console.log("Downloaded data->", data);
    })
}, 3000)