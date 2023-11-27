window.onload
{
    let randomdiv=document.querySelector("#random")
    let imgdiv=document.querySelector("#img")
    let userinputdiv=document.querySelector("#userinput")
    let searchdiv=document.querySelector("#search")
    randomdiv.onclick=()=>
    {   
        let r=Math.ceil(Math.random()*721)
        fetch(`https://superheroapi.com/api.php/103643096130261/${r}`)
        .then(res=>res.json()).then(data=>{
            let urllink=data.image.url
            let name=data.name
            let stats=data.powerstats
            let bio=data.biography
            imgdiv.innerHTML=`<hr><img src="${urllink}" id="displayedimage"/>
            <br>Id of this hero is : ${r}<br>The name of the hero is : ${name}<br>
            <h3>BIOGRAPHY</h3>`
            for (i in bio){
                imgdiv.innerHTML+=`${i.toUpperCase()} : ${bio[i]} <br>`
            }
            imgdiv.innerHTML+=`<h3>POWER STATS</h3>`
            for(i in stats)
            {
                imgdiv.innerHTML+=`${i.toUpperCase()} : ${stats[i]} <br>`  
            }
            imgdiv.innerHTML+="<hr>"
        }) 
        
    }

    searchdiv.onclick=()=>
    {
        searchwithname(userinputdiv.value)
    }

    searchwithname=(name)=>{
        fetch(`https://superheroapi.com/api.php/103643096130261/search/${name}`)
        .then(res=>res.json()).then(data=>
            {
                let arr=data.results
                imgdiv.innerHTML="<hr>"
                count=1
                arr.forEach(i=> {
                    let li=i.image.url
                    let n=i.name
                    let s=i.powerstats
                    let b=i.biography
                    let identity=i.id
                    //console.log(data)
                    imgdiv.innerHTML+=`<h1>${count}.</h1><img src="${li}" id="displayedimage"/>
                    <br>Id of this hero is : ${identity}<br>The name of the hero is : ${n}<br>
                    <h3>BIOGRAPHY</h3>`
                    for (i in b){
                        imgdiv.innerHTML+=`${i.toUpperCase()} : ${b[i]} <br>`
                    }
                    imgdiv.innerHTML+=`<h3>POWER STATS</h3>`
                    for(i in s)
                    {
                        imgdiv.innerHTML+=`${i.toUpperCase()} : ${s[i]} <br>`  
                    }
                    imgdiv.innerHTML+="<hr>"
                    count+=1
                });
                
            })
    }



     
    
    
}