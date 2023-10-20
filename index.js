console.log('HELLO WORLD')


const spotData ='https://randomuser.me/api/';

async function userData(){
    try{
        const response = await fetch(spotData)
        const data = await response.json()
        console.log(data.results[0])
           
        const imageForm = document.createElement('img');
        imageForm.classList.add('photo')
        imageForm.src = data.results[0].picture.large;
        document.body.appendChild(imageForm)

        const nameForm = document.createElement('p')
        nameForm.classList.add('letter')
         const title = data.results[0].name.title;
         nameForm.innerHTML=`${title}`
         const firstName = data.results[0].name.first;
         nameForm.innerHTML= `${firstName}`
         const lastName = data.results[0].name.last;
         nameForm.innerHTML= `${lastName}`
        nameForm.innerHTML = `${title}. ${firstName} ${lastName}`
        document.body.appendChild(nameForm)

        const profile = document.createElement('p')
        profile.classList.add('age')
        const ageing  =data.results[0].dob.age
        profile.innerHTML = ` Age:${ageing}`
        document.body.appendChild(profile)

        const proData = document.createElement('p')
        proData.classList.add('gender')
        const genderData  =data.results[0].gender
        proData.innerHTML = `Sex:${genderData}`
        document.body.appendChild(proData) 
        

        const proLocation = document.createElement('p')
        proLocation.classList.add('city')
        const localData  =data.results[0].location.city
        proLocation.innerHTML = `location:${localData}`
        document.body.appendChild(proLocation) 


        
        const proNation = document.createElement('p')
        proNation.classList.add('country')
        const venueData  =data.results[0].location.country
        proNation.innerHTML = `Nationality:${venueData}`
        document.body.appendChild(proNation) 
        
        const proWeb = document.createElement('p')
        proWeb.classList.add('email')
        const webData  =data.results[0].email
        proWeb.innerHTML = `Email:${webData}`
        document.body.appendChild(proWeb) 


        const proPhone = document.createElement('p')
        proPhone.classList.add('phone')
        const phoneLine  =data.results[0].phone
        proPhone.innerHTML = `Call:${phoneLine}`
        document.body.appendChild(proPhone) 


    }catch{
        console.log('Any error that pops on')
    }
}
userData()
userData()
userData()
userData()
userData()
userData()
userData()