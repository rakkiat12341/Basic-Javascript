const form = document.getElementById('form')
const search = document.getElementById('search')
const result = document.getElementById('result')


const apiURL = 'https://api.lyrics.ovh/'

form.addEventListener ('submit', e=>{
    e.preventDefault();
     const songtxt = search.value.trim();

     if(!songtxt){
        alert('กรุณาป้อนข้อมูล')
     }else {
        searchLyrics();
        
     }
});

async function searchLyrics(song){
   const res = await fetch(`${apiURL}/suggest/${song}`);
   const allSong = await res.json();
   showData(allSong);
  
}

function showData(song){
    result.innerHTML = `
    <ul class="songs">
    ${song.data.map(song=>
    `<li>
        <span>
        <strong>${song.artist.name}</strong>
        </span>
    </li>`
        ).join('')}
    </ul>
    `;

    if(song.next  || song.prev){
        MutationRecord.innerHTML =`
        ${song.next?`<button class = "btn">ก่อนหน้า</button>` : ''}
        ${song.next?`<button class = "btn" onclick = "getMoreSong${songs.next}" >ถัดไป</button>` : ''}
        `
    }else{
        MutationRecord.innerHTML = ''
    }


}

async function getMoreSong(songs){
 console.log(songs);
 const res = await fetch(`${songUrl}`);
   const allSong = await res.json();
   showData(allSong);
}