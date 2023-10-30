console.log('HELLO WORLD')

const parentContainer =document.createElement('div');
parentContainer.classList.add('parent-container');
document.body.appendChild(parentContainer)


const spotData ='https://randomuser.me/api/';

async function userData(){
    try{
        const response = await fetch(spotData)
        const data = await response.json()
        console.log(data.results)
        
        const userContainer = document.createElement('div')
        const imageForm = document.createElement('img');
        imageForm.classList.add('photo')
        imageForm.src = data.results[0].picture.large;
        userContainer.appendChild(imageForm)
        userContainer.classList.add('user-container')
        parentContainer.appendChild(userContainer)

        const nameForm = document.createElement('p')
        nameForm.classList.add('letter')
         const title = data.results[0].name.title;
         nameForm.innerHTML=`${title}`
         const firstName = data.results[0].name.first;
         nameForm.innerHTML= `${firstName}`
         const lastName = data.results[0].name.last;
         nameForm.innerHTML= `${lastName}`
        nameForm.innerHTML = `${title}. ${firstName} ${lastName}`
        userContainer.appendChild(nameForm)
        // document.body.appendChild(nameForm)

        const profile = document.createElement('p')
        profile.classList.add('age')
        const ageing  =data.results[0].dob.age
        profile.innerHTML = ` Age:${ageing}`
        userContainer.appendChild(profile)
        // document.body.appendChild(profile)

        const proData = document.createElement('p')
        proData.classList.add('gender')
        const genderData  =data.results[0].gender
        proData.innerHTML = `Sex:${genderData}`
        userContainer.appendChild(proData)
        // document.body.appendChild(proData) 
        

        const proLocation = document.createElement('p')
        proLocation.classList.add('city')
        const localData  =data.results[0].location.city
        proLocation.innerHTML = `location:${localData}`
        userContainer.appendChild(proLocation)
        // document.body.appendChild(proLocation) 


        
        const proNation = document.createElement('p')
        proNation.classList.add('country')
        const venueData  =data.results[0].location.country
        proNation.innerHTML = `Nationality:${venueData}`
        userContainer.appendChild(proNation)
        // document.body.appendChild(proNation) 
        
        const proWeb = document.createElement('p')
        proWeb.classList.add('email')
        const webData  =data.results[0].email
        proWeb.innerHTML = `Email:${webData}`
        userContainer.appendChild(proWeb)
        // document.body.appendChild(proWeb) 


        const proPhone = document.createElement('p')
        proPhone.classList.add('phone')
        const phoneLine  =data.results[0].phone
        proPhone.innerHTML = `Call:${phoneLine}`
        userContainer.appendChild(proPhone)
        // document.body.appendChild(proPhone) 


    }catch{
        console.log('Any error that pops on')
    }
}
userData()
userData()
userData()
userData()


const payloadContainer =document.createElement('div');
payloadContainer.classList.add('pal-container');
document.body.appendChild(payloadContainer)


const spitData ='https://randomuser.me/api/';

async function compData(){
    try{
        const response = await fetch(spitData)
        const data = await response.json()
        console.log(data.results)
        
        const lowerContainer = document.createElement('div')
        const imageForm = document.createElement('img');
        imageForm.classList.add('photo')
        imageForm.src = data.results[0].picture.large;
        lowerContainer.appendChild(imageForm)
        lowerContainer.classList.add('lower-container')
        payloadContainer.appendChild(lowerContainer)

        const nameForm = document.createElement('p')
        nameForm.classList.add('letter')
         const title = data.results[0].name.title;
         nameForm.innerHTML=`${title}`
         const firstName = data.results[0].name.first;
         nameForm.innerHTML= `${firstName}`
         const lastName = data.results[0].name.last;
         nameForm.innerHTML= `${lastName}`
        nameForm.innerHTML = `${title}. ${firstName} ${lastName}`
        lowerContainer.appendChild(nameForm)
        // document.body.appendChild(nameForm)

        const profile = document.createElement('p')
        profile.classList.add('age')
        const ageing  =data.results[0].dob.age
        profile.innerHTML = ` Age:${ageing}`
        lowerContainer.appendChild(profile)
        // document.body.appendChild(profile)

        const proData = document.createElement('p')
        proData.classList.add('gender')
        const genderData  =data.results[0].gender
        proData.innerHTML = `Sex:${genderData}`
        lowerContainer.appendChild(proData)
        // document.body.appendChild(proData) 
        

        const proLocation = document.createElement('p')
        proLocation.classList.add('city')
        const localData  =data.results[0].location.city
        proLocation.innerHTML = `location:${localData}`
        lowerContainer.appendChild(proLocation)
        // document.body.appendChild(proLocation) 


        
        const proNation = document.createElement('p')
        proNation.classList.add('country')
        const venueData  =data.results[0].location.country
        proNation.innerHTML = `Nationality:${venueData}`
        lowerContainer.appendChild(proNation)
        // document.body.appendChild(proNation) 
        
        const proWeb = document.createElement('p')
        proWeb.classList.add('email')
        const webData  =data.results[0].email
        proWeb.innerHTML = `Email:${webData}`
        lowerContainer.appendChild(proWeb)
        // document.body.appendChild(proWeb) 


        const proPhone = document.createElement('p')
        proPhone.classList.add('phone')
        const phoneLine  =data.results[0].phone
        proPhone.innerHTML = `Call:${phoneLine}`
        lowerContainer.appendChild(proPhone)
        // document.body.appendChild(proPhone) 


    }catch{
        console.log('Any error that pops on')
    }
}
compData()
compData()
compData()
compData()




const subContainer =document.createElement('div');
subContainer.classList.add('sub-container');
document.body.appendChild(subContainer)


const chatData ='https://randomuser.me/api/';

async function caseData(){
    try{
        const response = await fetch(chatData)
        const data = await response.json()
        console.log(data.results)
        
        const localContainer = document.createElement('div')
        const imageForm = document.createElement('img');
        imageForm.classList.add('photo')
        imageForm.src = data.results[0].picture.large;
        localContainer.appendChild(imageForm)
        localContainer.classList.add('local-container')
        subContainer.appendChild(localContainer)

        const nameForm = document.createElement('p')
        nameForm.classList.add('letter')
         const title = data.results[0].name.title;
         nameForm.innerHTML=`${title}`
         const firstName = data.results[0].name.first;
         nameForm.innerHTML= `${firstName}`
         const lastName = data.results[0].name.last;
         nameForm.innerHTML= `${lastName}`
        nameForm.innerHTML = `${title}. ${firstName} ${lastName}`
        localContainer.appendChild(nameForm)
        // document.body.appendChild(nameForm)

        const profile = document.createElement('p')
        profile.classList.add('age')
        const ageing  =data.results[0].dob.age
        profile.innerHTML = ` Age:${ageing}`
        localContainer.appendChild(profile)
        // document.body.appendChild(profile)

        const proData = document.createElement('p')
        proData.classList.add('gender')
        const genderData  =data.results[0].gender
        proData.innerHTML = `Sex:${genderData}`
        localContainer.appendChild(proData)
        // document.body.appendChild(proData) 
        

        const proLocation = document.createElement('p')
        proLocation.classList.add('city')
        const localData  =data.results[0].location.city
        proLocation.innerHTML = `location:${localData}`
        localContainer.appendChild(proLocation)
        // document.body.appendChild(proLocation) 


        
        const proNation = document.createElement('p')
        proNation.classList.add('country')
        const venueData  =data.results[0].location.country
        proNation.innerHTML = `Nationality:${venueData}`
        localContainer.appendChild(proNation)
        // document.body.appendChild(proNation) 
        
        const proWeb = document.createElement('p')
        proWeb.classList.add('email')
        const webData  =data.results[0].email
        proWeb.innerHTML = `Email:${webData}`
        localContainer.appendChild(proWeb)
        // document.body.appendChild(proWeb) 


        const proPhone = document.createElement('p')
        proPhone.classList.add('phone')
        const phoneLine  =data.results[0].phone
        proPhone.innerHTML = `Call:${phoneLine}`
        localContainer.appendChild(proPhone)
        // document.body.appendChild(proPhone) 


    }catch{
        console.log('Any error that pops on')
    }
}
caseData()
caseData()
caseData()
caseData()



























// const packageData = 'https://api.agify.io/?name=meelad';

// const spotData ='https://randomuser.me/api/';

// async function humanData(){
//     try{
//        const response = await fetch(spotData)
//        const data = await response.json();
//        console.log(data.results)
//     }catch{

//     }
// }

// humanData()
