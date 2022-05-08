// // const url ="https://restcountries.com/#api-endpoints-v2-all"
// // fetch(url)
// // .then((response) => response.json())
// // .then((data) => {
// //     console.log(data);
// // })
// // .catch ((error) => {
// //     console.log(error);
// // });

// const fetchDataBtn = document.querySelector("#fetchdata");
// const result=document.querySelector("#result");

// async function getData(){
//     result.innerHTML="Loading...";
//     try {
//         const res=await fetch("http://api.github.com/users/lavishjain36");
//         const data=await res.json();



//         result.innerHTML=JSON.stringify(data);
//     }
//     catch (error) {
//         result.innerHTML="Error";
//     }
// }

// fetchDataBtn.addEventListener("click", getData)


// // const GetusersList = document.querySelector("#UsersList");
// // const result=document.querySelector("#result");

// //  async function fetchdata() {
// //     result.innerHTML="Loading the list...";
// //     try {
// //         const respose=await fetch("https://jsonplaceholder.typicode.com/users");
// //         const data=await response.json();
// //         result.innerHTML=JSON.stringify(data);
// //     } catch (error) {
// //         result.innerHTML="Error";
// //     }
// // }



// Building HTML elements
document.body.innerHTML=`<div class="heading-container">
<h1>Brewery List</h1>
<img class="icon" src="https://https://www.google.com/url?sa=i&url=https%3A%2F%2Fhypro.co.in%2Fproduct-showcase%2Fbrewing%2Fmicro-pub-brewery%2F&psig=AOvVaw38UyeeIpftG89fFAeqX9Is&ust=1652070013985000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKCZk7aHz_cCFQAAAAAdAAAAABAD">;
</div>
<div id="main-container" class="main-container"></div>`;

const getdata=async()=> {
    try {
        const data = await fetch("https://api.openbrewerydb.org/breweries");
        const brewerys = await data.json();
        console.log(brewerys);
        maincontainer.innerHTML="";
        brewerys.forEach((brewery)=>{
            displayData(brewery)
        })
    } catch (error) {
        
    }
}
getdata();
const displayData=(obj)=>{
    maincontainer.innerHTML+=`
    <div class="container">
    <h3 class="blue">Brewery Name:<span>${obj.name}</span></h3>
    </div>`
}
