function hsvtorgb( hue, saturation, value) {
    var i;
    var f;
    var p;
    var q;
    var t;
    function format( red, green, blue) {
        return "rgb(" + Math.round(red * 255) + "," + Math.round(green * 255) + "," + Math.round(blue * 255) + ")";
    }
    if (saturation == 0){
        return format( value, value, value);
    }
    hue = ((hue + 360) % 360) / 60;
    i = Math.floor(hue);
    f = hue - i;
    p = value * (1 - saturation);
    q = value * (1 - saturation * f);
    t = value * (1 - saturation * (1 - f));
    switch(i) {
    case 0:
        red = value; green = t; blue = p;
        break;
    case 1:
        red = q; green = value; blue = p;
        break;
    case 2:
        red = p; green = value; blue = t;
        break;
	case 3:
        red = p; green = q; b = value;
        break;
    case 4:
        red = t; green = p; blue = value;
        break;
    default:
        red = value; green = p; blue = q;
    }
    return format(red, green, blue);
};