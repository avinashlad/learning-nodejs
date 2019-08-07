const fs = require('fs');
//Create a file
// fs.writeFile('example.txt', "This is an example.", (err) => {
//     if (err)
//         console.log(err);
//     else {
//         console.log('File successfully created!');
//         fs.readFile('example.txt', 'utf8', (err, file) => {
//             if(err)
//                 console.log(err);
//             else 
//                 console.log(file);
//         });
//     }
// });

// fs.rename('example.txt', 'example2.txt', (err) => {
//     if (err) 
//         console.log(err);
//     else 
//         console.log('Successfully renamed the file.');
// });

// fs.appendFile('example2.txt', 'Some data to append.', (err) => {
//     if (err)
//         console.log(err);
//     else 
//         console.log('Successfully appended data to the file.');
// });

fs.unlink('example2.txt', (err) => {
    if (err) 
        console.log(err);
    else 
        console.log("File deleted successfully!.");
});