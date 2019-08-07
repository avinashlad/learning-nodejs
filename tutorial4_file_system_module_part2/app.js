const fs = require('fs');

//CREATE DIRECTORY
// fs.mkdir('tutorial', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('Folder created successfully!');

//         // DELETE DIRECTORY
//         // console.log('Now deleting the folder...');
//         // fs.rmdir('tutorial', (err) => {
//         //     if (err)
//         //         console.log(err);
//         //     else 
//         //         console.log('Folder deleted successfully!');
//         // });

//         fs.writeFile('./tutorial/example.txt', 'This is an example file.', (err)=>{
//             if (err)
//                 console.log(err);
//             else 
//                 console.log('File created successfully!');
//         });
// });

// Deleting the folder with files in it will throw error of Directory not empty
// fs.rmdir('tutorial', (err) => {
//     if (err)
//         console.log(err);
//     else 
//         console.log('Folder deleted successfully!');
// });

// fs.unlink('./tutorial/example.txt', (err) => {
//     if (err)
//         console.log(err);
//     else 
//         console.log('File deleted successfully!');

//         fs.rmdir('tutorial', (err) => {
//             if (err)
//                 console.log(err);
//             else 
//                 console.log('Folder deleted successfully!');
//         });
// });

//Before executing below code, create a folder example with 2 files in it. For eg: a.txt, b.txt
fs.readdir('example', (err, files) => {
    if (err)
        console.log (err);
    else 
        console.log(files); // Display array of file names

        for (let file of files) {
            fs.unlink('./example/'+file, (err) => {
                if (err) 
                    console.log(err);
                else 
                    console.log(`File ${file} deleted successfully`);
            })
        }
})