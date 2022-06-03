console.log('***** Music Collection *****')

let collection=[];

function addToCollection(title, artist, yearPublished){
    let album = (title + artist + yearPublished);
    collection.push(album);
    console.log(album);
    return album
}

addToCollection('Nevermind, ', 'Nirvana, ', 1993);

