const songs=[
    {id:1, name:"Recovery", artist:"LP", money:1000010},
    {id:2, name:"$ave Dat Money", artist:"Lil Dicky", money:1100000},
    {id:3, name:"Palomita Cuculí", artist:"Cementerio de Elefantes", money:121000},
    {id:4, name:"Chlorine", artist:"Twenty One Pilots", money:1002000}
];
/* map */

/* array conteniendo todos los nombres de canciones */
/* no EMS6 */
/* const names=[];
for(let song in songs){
    names.push(songs[song].name);
}
console.log(names);
 */
/* EMS6 */
/* const songNames=songs.map(song=>song.name);
console.log(songNames); */

/* filter */

/* No EMS6 */
/* const artists=[];
for(let song in songs){
    if(songs[song].artist==="Twenty One Pilots")
        artists.push(songs[song]);
}
console.log(artists); */

/* EMS6 */
/* const artistTOP=songs.filter(value=>value.artist==="Twenty One Pilots");
console.log(artistTOP); */

/* reduce */

/* No EMS6 */
let avg=0, sum=0;
for(let song in songs){
    sum+=songs[song].money;
}
avg=sum/songs.length;
console.log(avg);

/* EMS6 */

const mess=songs.reduce((prev, actual)=>{
    return prev+actual.money;
}, 0);
console.log(mess/songs.length);