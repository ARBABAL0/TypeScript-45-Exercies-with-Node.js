// Define the make_album function
function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };

    if (tracks !== undefined){
        album.tracks = tracks;
    }

    return album;

}

// Calling three functions and creating 3 variables with Different Value 

let album1 = make_album("Arbab", "album title 1");

let album2 = make_album("shahbaz", "Album title 2");

// Calling a make _album function with third parameter 
let album3 = make_album("Zain", "Album title 3", 10);

// Printing  the variables 
console.log(album1);
console.log(album2);
console.log(album3);



