import { tsvSplit } from "./tsv-split";
let fs = require('fs');


export const createIMDBJSON = (path_to_file, filename) => {
    fs.access(path_to_file, fs.F_OK, function(err){
        if(err){
            console.log("No IMDB JSON exists! Creating from file.");
            tsvSplit(path_to_file, filename, ".", function(err){
                console.error(err);
            });

        }
    })
}