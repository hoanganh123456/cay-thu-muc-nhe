/**
 * Created by hoanganh on 10/07/2017.
 */
const fs = require('fs');
const path = require('path');
const prog = require('caporal');
const colors = require('colors');
prog
// let directory = '/home/hoanganh/Desktop/test';
    .version('1.0.0')
    .command('cay thu muc')
    .argument('<directory>')
    .action(function(args) {
        let directory = args.directory
        let str = '  '
        function duyet(directory) {
            let file = fs.readdirSync(directory)
            for(let i = 0 ; i < file.length ; i++ ){
                let fileName =  directory + '/' + file[i];
                if(i===file.length - 1){
                    if(fs.statSync(fileName).isDirectory()){
                        console.log(str + '└──' + file[i].green)
                    }
                    else {
                        console.log(str + '└──' + file[i].yellow )
                    }
                }
                else{
                    if(fs.statSync(fileName).isDirectory()){
                        console.log(str + '├──' + file[i].gray)
                    }
                    else {
                        console.log(str + '├──'+ file[i].magenta)
                    }

                }
                if(fs.statSync(fileName).isDirectory()){
                    str += '  '
                    duyet(fileName)
                    str = str.substr(0,str.length - 2)
                }
            }
        }
        duyet(directory)
    });
prog.parse(process.argv);