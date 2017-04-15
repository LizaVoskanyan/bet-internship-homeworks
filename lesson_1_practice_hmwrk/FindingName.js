
function findingName(string){
	var str = string; 
	var reg = /({\w+})/i;
	var found = str.match(reg);
	return found[1];
}
findingName('[someObject ${anun}]');
