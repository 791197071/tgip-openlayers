var rimraf = require('rimraf')
var async = require('async')
var exec = require('child_process').exec
var cacheFile = './node_modules/npm-svn/.cache';
async.waterfall(
  [
    function(cb) {
      console.log('删除缓存', cacheFile)
      rimraf(cacheFile, function(error) {
        cb(error)
      })
    },
    function(cb) {
      console.log('安装 svn 依赖中，请稍后');
      exec('node ./node_modules/npm-svn/src/scanner.js', function callback(
        error,
        stdout,
        stderr
      ) {
        stdout.split('\n').forEach(v=>console.log(v))
        stderr.split('\n').forEach(v=>console.log(v))
        cb(error)
      })
    }
  ],
  function(error) {}
)
