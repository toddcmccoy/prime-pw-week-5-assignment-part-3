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

addToCollection('Nevermind, ', 'Nirvana, ', 1993);
addToCollection('Caught in the act, ','Styx, ', 1983);

