require('./out/runtime/package');
System.import('server/server').catch(function(e){
    console.error(e.stack);
    process.exit(1);
});