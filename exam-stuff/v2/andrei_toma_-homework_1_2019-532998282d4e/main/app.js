// function distance(array1, array2) {
// 	if (!Array.isArray(array1) || !Array.isArray(array2)) {
// 	  throw new Error('InvalidType');
// 	}
  
// 	let uniqueArray1 = Array.from(new Set(array1));
// 	let uniqueArray2 = Array.from(new Set(array2));
  
// 	let difference = uniqueArray1
// 	  .filter(x => !uniqueArray2.includes(x))
// 	  .concat(uniqueArray2.filter(x => !uniqueArray1.includes(x)));
  
// 	return difference.length;
//   }
function distance(first , second){

	if(!Array.isArray(first) || !Array.isArray(second)){
		throw new Error("InvalidType")
	}
	if(first.length == 0 && second.length == 0){
		return 0
	}
	//remove duplicates
	first = Array.from(new Set(first))
	second = Array.from(new Set(second))
	//calculate the difference between the two arrays
	let difference = first.filter(x => !second.includes(x)).concat(second.filter(x => !first.includes(x)))
	return difference.length

}
  


module.exports.distance = distance