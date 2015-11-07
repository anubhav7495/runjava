#! /usr/bin/env node

var spawn = require('child_process').spawn,
    javac    = spawn('javac', [process.argv[2] + '.java']);

javac.stderr.on('data', function (data) {
  console.log(data.toString());
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

  run.stdout.on('data', function (data) {
  console.log(data.toString());
  });

  run.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
  });

  run.on('close', function (code) {
  console.log('Process exited with code ' + code);
  });
}
