const userFname = document.getElementById("userFname");
const userLname = document.getElementById("userLname");
const userAge = document.getElementById("userAge");
const userID = document.getElementById("userID");
const userCity = document.getElementById("userCity");
const formButton = document.getElementById("submitBtn");
const contentDisplay = document.getElementById("userDisplay")
const motherTable = document.getElementById("motherTable");

const patients = [
    {
        firstName: "Avi",
        lastName: "Jano",
        age: 24,
        id: "100",
        city: "Tel - Aviv",
        checkDate: "21/8/2021",
        checkTime: "18:37pm",
        status: "NEGETIVE"
    },
    {
        firstName: "Tanya",
        lastName: "Valdo",
        age: 32,
        id: "123",
        city: "Tel - Aviv",
        checkDate: "23/8/2021",
        checkTime: "15:20pm",
        status: "STILL IN LAB"
    },
    {
        firstName: "Amir",
        lastName: "Kindo",
        age: 25,
        id: "132",
        city: "Tel - Aviv",
        checkDate: "22/8/2021",
        checkTime: "20:04pm",
        status: "POSITIVE"
    },
    {
        firstName: "Yoni",
        lastName: "Rambo",
        age: 17,
        id: "112",
        city: "Tel - Aviv",
        checkDate: "22/8/2021",
        checkTime: "10:37am",
        status: "NEGETIVE"
    }
];

// function isIDExist (newPaitent){
//     for (let i = 0; i < patients.length; i++){
//         if(newPaitent.id != patients[i].id){
//             return true;
//         }
//         return false;
//     }
// }

formButton.onclick = function () {
    let today = new Date();
    let todayDate = `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}`;
    let newPaitent = {};
    newPaitent.firstName = userFname.value;
    newPaitent.lastName = userLname.value;
    newPaitent.age = today.getFullYear() - userAge.value;
    newPaitent.id = userID.value;
    newPaitent.city = userCity.value;
    newPaitent.checkDate = todayDate;
    newPaitent.checkTime = `${today.getHours()}:${today.getMinutes()}`
    newPaitent.status = "STILL IN LAB"

    for (let i = 0; i < patients.length; i++) {
        if (patients[i].id == newPaitent.id) {
            contentDisplay.innerHTML = "Patient exists"
            break
        }
        else {
            patients.push(newPaitent);
            break
        }
    }
    contentDisplay.innerHTML = `${newPaitent.firstName} <br>
    ${newPaitent.lastName} <br>
    ${newPaitent.age} <br>
    ${newPaitent.id} <br>
    ${newPaitent.city} <br>
    ${newPaitent.checkDate} <br>
    ${newPaitent.checkTime} <br>
    ${newPaitent.status}`
}



for (let i = 0; i < patients.length; i++) {
    motherTable.innerHTML += `<td>${patients[i].firstName}</td>
    <td>${patients[i].lastName}</td>
    <td>${patients[i].age}</td>
    <td>${patients[i].id}</td>
    <td>${patients[i].city}</td>
    <td>${patients[i].checkDate}</td>
    <td>${patients[i].checkTime}</td>
    <td>${patients[i].status}</td>`
}



userFname.onfocus = function () {
    userFname.style = "text-transform : uppercase;"
}

userLname.onfocus = function () {
    userLname.style = "text-transform : uppercase;"
}

userCity.onfocus = function () {
    userCity.style = "text-transform : uppercase;"
}

const searchByNameInput = document.getElementById("searchInput");
const searchNameButton = document.getElementById("searchBtn");
const searchResult = document.getElementById("searchResult")

searchNameButton.onclick = function () {
    for (let i = 0; i < patients.length; i++) {
        if (searchByNameInput.value == patients[i].firstName) {
            searchResult.innerHTML = `${patients[i].firstName},
            ${patients[i].lastName},
            ${patients[i].age},
            ${patients[i].id},
            ${patients[i].city},
            ${patients[i].checkDate},
            ${patients[i].checkTime},
            ${patients[i].status}`
        }
    }
    if (searchResult.innerHTML.length < 3) {
        searchResult.innerHTML = "Patient does not exist"
    }
}

const searchByIdInput = document.getElementById("searchId");
const searchIdButton = document.getElementById("idSearch");

searchIdButton.onclick = function () {
    for (let i = 0; i < patients.length; i++) {
        if (searchByIdInput.value == patients[i].id) {
            searchResult.innerHTML = `${patients[i].firstName},
            ${patients[i].lastName},
            ${patients[i].age},
            ${patients[i].id},
            ${patients[i].city},
            ${patients[i].checkDate},
            ${patients[i].checkTime},
            ${patients[i].status}`
        }
        if (searchResult.innerHTML.length < 3) {
            searchResult.innerHTML = "Patient does not exist"
        }
    }
}

