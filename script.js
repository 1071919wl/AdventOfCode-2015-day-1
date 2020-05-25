const fs = require('fs');
// fs=file system (if you have node it comes with it)

fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log('errorrrrrr');
  }
  console.log('Async', data.toString('utf8'));
})
// readFile is asynchronos. Its going to read the file first and will
// return when its ready

const file = fs.readFileSync('./hello.txt');
console.log('Sync' ,file.toString());

//APPEND
// fs.appendFile('./hello.txt', ' This is so cool! ', err => {
//   if (err) {
//     console.log(err)
//   }
// })


//WRITE
// fs.writeFile('bye.txt', 'Sad to see you go', err => {
//   if (err) {
//     console.log(err)
//   }
// })

//DELETE
// fs.unlink('./bye.txt', err => {
//   if (err) {
//     console.log(err)
//   }
//   console.log('Inception')
// })
