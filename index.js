#! /usr/bin/env node
var readline = require('readline');
var spawn = require('child_process').spawn;

function std(optionObject) {
  readline.createInterface(optionObject).on('line', function(line) {
    console.log(line);
  });
}

javac = spawn('javac', [process.argv[2] + '.java']);

std({
  input     : javac.stderr,
  terminal  : false
});

javac.on('close', function (code) {
  if(code === 0) {
    execute();
  }
  else {
    console.log('Process exited with code ' + code);
  }
});

function execute() {
  run = spawn('java', [process.argv[2]]);

  std({
    input     : run.stdout,
    terminal  : false
  });

  std({
    input     : run.stderr,
    terminal  : false
  });

  run.on('close', function (code) {
  console.log('Process exited with code ' + code);
  });
}
