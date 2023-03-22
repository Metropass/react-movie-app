var io = require('indian-ocean');

export const tsvSplit = (path, filename, path_to_save) => {
let filedata = io.readDataSync(path);
let filetypeInName = new RegExp('^.*\.(json)$');
if(filetypeInName.test(filename)){
    io.writeDataSync(`${path_to_save}` + `${filename}`,filedata, function(err){
        if(err){
            console.error(err);
        }
    });
} else {
    io.writeDataSync((`${path_to_save}` + `${filename}` + `.json`),filedata, function(err){
        console.error(err);
    });
}
}

