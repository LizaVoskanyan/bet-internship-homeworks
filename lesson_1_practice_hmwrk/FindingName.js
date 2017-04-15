
function findingName(str){
  
	var obj = '[object ';
	var len = obj.length;
	var strLen = str.length;
	if(str.includes(obj)){
	  return  str.substring( len - 1 , strLen -1  );
	  }   
	else   { return "somthing goes wrong"; }
}
console.log(findingName('[someobject anun]'));
console.log(findingName('[object anun]'));
