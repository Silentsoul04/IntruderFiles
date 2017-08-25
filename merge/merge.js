var fs = require('fs');

var array1 = fs.readFileSync('1.txt').toString().split("\n");
var array2 = fs.readFileSync('2.txt').toString().split("\n");
// var array3 = fs.readFileSync('3.txt').toString().split("\n");
// var array4 = fs.readFileSync('4.txt').toString().split("\n");
// var array5 = fs.readFileSync('5.txt').toString().split("\n");
// var array6 = fs.readFileSync('6.txt').toString().split("\n");
// var array7 = fs.readFileSync('7.txt').toString().split("\n");

var arrayf = array1.concat(array2);
// var arrayf = array3.concat(arrayf);
// var arrayf = array4.concat(arrayf);
// var arrayf = array5.concat(arrayf);
// var arrayf = array6.concat(arrayf);
// var arrayf = array7.concat(arrayf);

var a = arrayf.concat();
var c = 0;

for(var i=0; i<a.length; ++i) {
  for(var j=i+1; j<a.length; ++j) {
    if(a[i] === a[j]) {
      console.log('******Duplicate: '+a[i]+'  +++  '+a[j]+' ******');
      c++;
      a.splice(j--, 1);
    }
  }
}

var finalstring = '';

for(var x = 0; x < a.length; x++) {
  finalstring += a[x]+'\n';
}

fs.writeFile('final.txt', finalstring, function(err) {
  if(err) { console.log(err); }
});

console.log('!!!! Done: '+c+' matches !!!!');
console.log('Array1: '+array1.length+' lines');
console.log('Array2: '+array2.length+' lines');
// console.log('Array3: '+array3.length+' lines');
// console.log('Array4: '+array4.length+' lines');
// console.log('Array5: '+array5.length+' lines');
// console.log('Array6: '+array6.length+' lines');
// console.log('Array7: '+array7.length+' lines');
console.log('Original Total: '+arrayf.length+' lines');
console.log('Final Total: '+a.length+' lines');
