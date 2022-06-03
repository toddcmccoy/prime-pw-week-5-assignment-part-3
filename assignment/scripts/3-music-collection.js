console.log('***** Music Collection *****')

let collection=[];

function addToCollection(title, artist, yearPublished){
    const album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
    }
    collection.push(album);
    console.log(album);
    return album
}

addToCollection('Nevermind ', 'Nirvana ', 1991);
addToCollection('Kilroy Was Here ','Styx ', 1983);
addToCollection('Paradise Theatre ','Styx ', 1981);
addToCollection('Moving Pictures ','Rush ', 1981);
addToCollection('Test for Echo ','Rush ', 1996);
addToCollection('Second Helping ','Lynyrd Skynyrd ', 1974);

console.log(collection);


