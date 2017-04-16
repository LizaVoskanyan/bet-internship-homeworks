function toBool(str){
     if (str === "false" || str === "NaN" || str === "null"  || str === "undefined" || str === "0" ){return false ;}
     else {return !!str;}
}
