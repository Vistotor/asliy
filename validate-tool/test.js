const valid = require('./index.js');

console.log("valid.email('128739274925') expect false, get ", valid.email('128739274925') ===  false)
console.log("valid.email('32333@qq.com') expect true, get", valid.email('32333@qq.com') ===  true)