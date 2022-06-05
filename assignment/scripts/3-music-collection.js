console.log('***** Music Collection *****')

const collection=[];
const vinyls = [];

// const album = {
//     title, 
//     artist,
//     yearPublished,
//     }

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

addToCollection('Nevermind ', 'Nirvana', 1991);
addToCollection('Kilroy Was Here ','Styx', 1983);
addToCollection('Paradise Theatre ','Styx', 1981);
addToCollection('Moving Pictures ','Rush', 1981);
addToCollection('Test for Echo ','Rush', 1996);
addToCollection('Second Helping ','Lynyrd Skynyrd', 1974);
// end albums

console.log(collection);

function showCollection(array){

    console.log(array.length);
    for (let i = 0; i < array.length; i++){
        console.log(`${array[i].title}by ${array[i].artist},${array[i].yearPublished}`);
      }
}
showCollection(collection);
// end showCollection

function findByArtist(band){
        for (let i = 0; i < collection.length; i++){
            if (collection[i].artist === band) {
            let vinyl = {
                title: collection[i].title,
                artist: collection[i].artist,
                yearPublished: collection[i].yearPublished
            }
            vinyls.push(vinyl);
        }
    }
    console.log(vinyls);
    }// end findByArtist. definitely missing something here.
findByArtist('Styx');
// findByArtist('Ray Charles');
// findByArtist('Nirvana');
showCollection(vinyls);
// console.log(vinyls);


// function search(artist, year){
//     for (let i = 0; i < collection.length; i++){
//         if  (collection[i].artist === artist && collection[i].yearPublished === year) {
//             newVinyls.push(collection[i].artist, collection[i].title, collection[i].yearPublished);
            
//         }
//         else if (collection[i].artist != artist || collection[i].yearPublished != year){

//         }
//     }
// }