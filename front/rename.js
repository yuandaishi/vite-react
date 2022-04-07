const fs = require("fs");
const path = require("path");

//解析需要便利的文件夹
const filePath = path.resolve("./src");

//调用文件夹遍历方法
flieDisplay(filePath);

function flieDisplay(filePath) {
  fs.readdir(filePath, function (err, files) {
    // files是一个文件数组
    if (err) {
      console.warn(err);
    } else {
      //遍历读取的文件
      files.forEach(function (filename) {
        var filedir = path.join(filePath, filename);
        //根据文件路径获取文件信息，返回fs.Stats对象
        fs.stat(filedir, function (err, stats) {
          if (err) {
            console.warn(err);
          } else {
            const isFile = stats.isFile(); // 是文件
            const isDir = stats.isDirectory(); //是文件夹
            if (isFile) {
              console.log(filedir);
              if (filedir.substring(filedir.length - 3) === ".js") {
                fs.rename(
                  filedir,
                  filedir.replace(".js", ".jsx"),
                  (err, data) => {
                    if (err) throw err;
                    console.log("Rename complete");
                  }
                );
              }
            }
            if (isDir) {
              flieDisplay(filedir); //递归遍历文件夹
            }
          }
        });
      });
    }
  });
}
