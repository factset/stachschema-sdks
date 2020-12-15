var pbjs = require("protobufjs/cli/pbjs"); // or require("protobufjs/cli").pbjs / .pbts
var pbts = require("protobufjs/cli/pbts"); // or require("protobufjs/cli").pbjs / .pbts
var fs = require('fs');

var jsOutputFileName = "packages/stach/stach.js";
var tsOutputFileName = "packages/stach/stach.d.ts";
var moduleName = "stach";

// Recursively getting all STACH proto models
var protoFiles = (function getStachProtoFiles(dir, filelist) {
  files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = getStachProtoFiles(dir + '/' + file, filelist);
    }
    else {
      filelist.push(dir + '/' + file);
    }
  });
  return filelist;
})("/schema/fds/protobuf/stach/v2");

pbjs.main([ "-t", "static-module", "-w", "commonjs", "-r", moduleName, "-o", jsOutputFileName ].concat(protoFiles), function(err, jsOutput) {
  if (err) throw err;
  console.log("Generated javascript");

  jsOutput = jsOutput.replace(/^ *if \(typeof [^ ]+ !== "object"\)\r?\n^ *throw TypeError\("[^ ]+: object expected"\);\r?\n^( *message\.[^ ]+ = \$root\.google\.protobuf\.(?:Struct|ListValue|Value)\.fromObject\([^ ]+\);)/mg, "$1");

  fs.writeFile(jsOutputFileName, jsOutput, function(err) {
    if(err) return console.log(err);
    console.log("Wrote " + jsOutputFileName);
  });

  var pbtsArgs = [ "-n", moduleName, jsOutputFileName ];
  pbts.main(pbtsArgs, function(err, tsOutput) {
    if (err) throw err;
    console.log("Generated typescript");

    fs.writeFile(tsOutputFileName, tsOutput, function(err) {
        if(err) return console.log(err);
        console.log("Wrote " + tsOutputFileName);
    });
  });
});