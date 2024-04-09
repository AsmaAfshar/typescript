function make_album(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = make_album("ali", "light");
console.log(album);
album = make_album("hamza", "good manners");
console.log(album);
album = make_album("zohan", "scenries");
console.log(album);
