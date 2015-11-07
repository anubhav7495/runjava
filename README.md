# runjava

A simple command line utility written in Node.js that Compiles and Executes a Java source file.

Currently it works only for Programs that do not take input from stdin or those that are GUI applications
written using awt or swing.

## Installation

```sh
$ npm install runjava -g
```

## Usage

After installing the module globally, open up your terminal, navigate to directory with your java source file and type:
```sh
$ runjava filename
```

### Important

filename should not have a .java extension at the end as the module does this for you. Only provide the filename to the command.
