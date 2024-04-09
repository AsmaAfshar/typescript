function sandwhich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwhich order:");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
}
console.log("enjoy your sandwhich asma khan");
sandwhich('capsicum', 'chicken', 'tomato');
sandwhich('chesse', 'club');
sandwhich('mayo', 'bbq');
