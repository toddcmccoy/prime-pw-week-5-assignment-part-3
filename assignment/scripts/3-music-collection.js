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
}// end addToCollection

addToCollection('Nevermind ', 'Nirvana ', 1991);
addToCollection('Kilroy Was Here ','Styx ', 1983);
addToCollection('Paradise Theatre ','Styx ', 1981);
addToCollection('Moving Pictures ','Rush ', 1981);
addToCollection('Test for Echo ','Rush ', 1996);
addToCollection('Second Helping ','Lynyrd Skynyrd ', 1974);
// end albums

console.log(collection);

function showCollection(){
    for (let i = 0; i < collection.length; i++){
        console.log(collection[i]);
      }
}
console.log(collection.length);
//showCollection;
