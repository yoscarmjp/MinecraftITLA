
const urlAPI = "https://api.mcsrvstat.us/3/23.111.144.130:50052";
const version = document.getElementById('version');
const players = document.getElementById('players');
const statusSrv = document.getElementById('status');
const ip = document.getElementById('ip');
const copyBtn = document.getElementById('copy-ip')

async function updateInformation() {
    try{
        const response = await fetch(urlAPI);
        const data = await response.json()
        console.log(data)
        version.textContent = data.version
        players.textContent = `${data.players.online}/${data.players.max}`
        ip.textContent = `${data.ip}:${data.port}`
        statusSrv.textContent = "Online"   
    }catch(error){
        statusSrv.textContent = "Offline"
        statusSrv.style.backgroundColor = "red"
        statusSrv.style.color = "white"
        players.textContent = "0/0"
        version.textContent = "No data"
        ip.textContent = "No data"
        console.log("hjola")
    }
}

setInterval(updateInformation(), 5000)



copyBtn.addEventListener('click', () =>{
    const direccionIP = "23.111.144.130:50052"
    navigator.clipboard.writeText(direccionIP)
})