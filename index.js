// let place = prompt("Enter the place you wanna see the time")
const updateTime = ()=>{
    let place = timezone.value
    console.log(place)
    var d = new Date(); 
    document.getElementById('cid').innerHTML= d.toLocaleString('en-US', { timeZone: place})
    // let hour = alarmid.value.split(":")[0]
    // let min = alarmid.value.split(":")[1]
    // aid.innerHTML = hour+":"+min+" If Equal to"+d.getHours()+":"+d.getMinutes()
    // if(d.getHours()==hour && d.getMinutes()==min){
    //     console.log("ok")
    //     let audio = new Audio("alarmsound.mp3")
    //     audio.play();
    // }
}
setInterval(updateTime,1000)



