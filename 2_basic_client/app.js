async function getMessage(){
    const response = await fetch("http://localhost:9000/",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body:
            JSON.stringify({query: 'query {message}'})   
        ,
    });

    const body = await response.json()
    console.log(body)
    // const {data} = await response.json()
    return body.data.message;
}

getMessage().then((m)=>{
    document.getElementById("message").textContent=m
});



