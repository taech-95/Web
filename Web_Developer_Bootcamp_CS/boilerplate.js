const fs = require('fs');
// fs.mkdir('Node folder', {recursive: true}, (err)=>{
//     console.log('from callback)')
//     if(err) throw err;
// });

// console.log('I come after ')


const folderName = process.argv[2] || 'Project';
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/style.css`,'')
    fs.writeFileSync(`${folderName}/app.js`,'')
    fs.writeFileSync(`${folderName}/index.html`,'')
} catch(e){
    console.log("Something went wrong");
}
