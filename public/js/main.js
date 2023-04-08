const cityName = document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn')

const city_name = document.getElementById('city_name')
// console.log('city_name',city_name);
const temp_status = document.getElementById('temp_status')
const temp_real_val = document.getElementById('temp_real_val');

const datahide = document.querySelector('.middle_layer')


const getInfo = async (event) => {
    event.preventDefault();
        let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');
    }
    else {
        try{
        let utl = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=868641c131aa1dbb40cf7b30f8e35dcc`
        const response = await fetch(utl);
        const data = await response.json(); // convert data into JSON format
        const arrData = [data];


        city_name.innerText = `${arrData[0.].name}, ${arrData[0.].sys.country}`;
        temp_real_val.innerText = arrData[0].main.temp;
       // temp_status.innerText = arrData[0].weather[0].main;


        let tempMood = arrData[0].weather[0].main;
        //condition check sunnay or cloud
        if (tempMood === "Clear") {
            temp_status.innerHTML=
            "<i class='fas fa-sun' style='color: #eccc68;'></i>"
        } else if(tempMood === "Cloud") {
            temp_status.innerHTML=
            "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
        } else if(tempMood === "Rain") {
            temp_status.innerHTML=
            "<i class='fas fa-rain' style='color: #a4b0be;'></i>"
        } else {
            temp_status.innerHTML=
            "<i class='fas fa-sun' style='color: #eccc68;'></i>"
        }
        datahide.classList.remove('data_hide');

        } catch{
            city_name.innerText = `Plz write the name of city correct`;
            datahide.classList.add('data_hide');
        }
    }

}

submitBtn.addEventListener('click', getInfo);

// chatGPT code below 

// document.addEventListener('DOMContentLoaded', () => {
//     const cityName = document.getElementById('cityName')
//     const submitBtn = document.getElementById('submitBtn')
//     const city_name = document.getElementById('city_name')
  
//     const getInfo = async (event) => {
//         event.preventDefault();
//         let cityVal = cityName.value;
//         if (cityVal === "") {
//             city_name.innerText = `Please write the name before search`;
//         }
//         else {
//             try{
//                 let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=868641c131aa1dbb40cf7b30f8e35dcc`
//                 const response = await fetch(url);
//                 console.log(response);
//             } catch{
//                 city_name.innerText = `Please write the name of city correctly`;
//             }
//         }
//     }
  
//     submitBtn.addEventListener('click', getInfo);
//   });
  