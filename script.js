async function getMatchData(){
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=faf85dc6-8693-40fd-b988-bca13a7d6c1b&offset=0")
           .then(data=> data.json())
           .then(data=>{
            if(data.status != "success")return;

            const matchList= data.data;

            if(!matchList) return[];

            const relventData = matchList.map(match=>  `${match.name}, ${match.status}`);

            console.log({relventData});

            document.getElementById("matches").innerHTML = relventData.map(match=> `<p>${match}</p>`).join('');

            return relventData;
           })

           .catch(e=>console.log(e));
}

getMatchData();