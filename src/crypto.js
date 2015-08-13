
// Just Like Python Range function.
function range (start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;
    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);
    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }
    return range;
}

// Like python .....
function unichr (code){
    return String.fromCharCode(parseInt(code));
};
function ord(char){
    return char.charCodeAt(0);
}

function repr(s) {
    var bytes = s.bytes();
    var hex_codes = [];
    var is_unicode = bytes.every(function (byte, i){
        console.log( byte );
        var hex_code = byte.toString(16);
        hex_codes.push( hex_code );
        return hex_code == parseInt(hex_code).toString();
    });
    if ( is_unicode == true ) {
        return hex_codes.join("\\u");
    } else {
        return hex_codes.join("\\x");
    }
}

// Like Rust.
String.prototype.to_utf8 = function (){
    // http://monsur.hossa.in/2012/07/20/utf-8-in-javascript.html
    return unescape(encodeURIComponent(this));
};
String.prototype.from_utf8 = function (){
    try{
        return decodeURIComponent(escape(this));
    }catch(e){
        console.warn("invalid UTF-8 ...");
        return this;
    }
};
String.prototype.chars = function (){
    var self = this;
    return range(this.length).map(function (i){
        return self[i];
    });
};
String.prototype.bytes = function (){
    var self = this;
    return range(this.length).map(function (i){
        return ord(self[i]);
    });
};






/*
    @ JS 加密库
*/

if ( !this.crypto ) this.crypto = {};

/*
    Base64
*/
crypto.Base64 = function (){
    this.name = "Base64";
    this.version = "0.1";
};
crypto.Base64.prototype.decode = function (message){

};
crypto.Base64.prototype.encode = function (message){
    
};

crypto.aes = function (){
    this.name = "aes";
    this.version = "0.1";
};