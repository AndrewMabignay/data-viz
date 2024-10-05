console.log("Hello Friend!");
 
// Current Date for Title
const dateElement = document.getElementById('date');

console.log(dateElement);

let currentDate = new Date();
console.log(currentDate);

// "dateOptions" Object will allow us to change the format retrieve from currentDate.
let dateOptions = {
    year: 'numeric', 
    month: 'long',
    day: 'numeric'
};

// Will allow us to change the format to US Time using the "dateOptions" object.
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);

// Rapid API code to retrieve trending twitter topics.
const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const data = new FormData();
data.append('woeid', '23424934');

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '00c167c031mshd62b954e97308d4p141793jsn65fdcbb3ce64',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com'
	},
	body: data
};

// Dummy Data to Comment Out ==============================================

// let myPost = {
//     name:"#AlwaysToYouHannie",
//     query:"%23AlwaysToYouHannie",
//     url:"search?q=%23AlwaysToYouHannie",
//     volume:98800,
//     volumeShort:"97.9K",
//     domainContext:"Korean music",
//     groupedTrends:[]
// };

// console.log(myPost);
// // dot notation - to access a property or method of an object.
// console.log(myPost.name);
// console.log(myPost.url);
// console.log(myPost.volume);

// // Array of Objects ___________________________
// let graphData = [
//     {
//         name:"2ne1",
//         query:"2ne1",
//         url:"search?q=2ne1",
//         volume:394000,
//         volumeShort:"394K",
//         domainContext:"K-pop",
//         groupedTrends:[]
//     },
//     {
//         name:"#FudgeeBarrxBINI",
//         query:"%23FudgeeBarrxBINI",
//         url:"search?q=%23FudgeeBarrxBINI",
//         volume:23200,
//         volumeShort:"22.6K",
//         domainContext:"",
//         groupedTrends:[]

//     }
// ];

// console.log(graphData);

// // Array uses "index" tp select the position of an element.
// console.log(graphData[0]);
// console.log(graphData[0].name);

// console.log(Object.keys(graphData[0])[0]);
// // push() method - Add element at the end of an array.
// graphData.push(myPost);
// console.log(graphData);
// console.log(graphData[2]);

// End of dummy data to Comment Out ==============================================

let graphData = [];

// Fetch Request _____________

fetch(url, options)
.then(res => res.json())
.then(data => {
    console.log(data);
    console.log(graphData.length);

    for (let i = 0; i < 25; i++) {
        graphData.push(
            {
                "name": data.trends[i].name,
                "volume": data.trends[i].volume
            }
        );
    }

    let topics = graphData.map(Object => {
        console.log(Object);
        console.log(Object.name);
        return Object.name;
    });

    console.log(topics);

    let volumes = graphData.map(Object => {
        return Object.volume;
    });

    console.log(volumes);

    const myChart = document.getElementById('myChart');

    let barChart = new Chart(myChart, {
        type: 'bar',
        data: {
            labels: topics,
            datasets: [{
                label: '# of Tweets/Xeets',
                data: volumes,
                borderWidth: 2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                hoverBackgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ]
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

// // Copy Paste to Fetch Request ___________________
// console.log(graphData.length);

// // Loops are used to do repetitive tasks _____________________
// // Print each individual element in the graphData ________________

// for (let i = 0; i < graphData.length; i++) {
//     console.log(graphData[i]);
//     console.log(graphData[i].name);
//     console.log(graphData[i].volume);
//     console.log(); // Spacing
// }

// // Map method is used to loop through all elements/items of an array and execute some code.
// // It creates a new array.

// // this will create a topics variable that contains the "object.name".
// let topics = graphData.map(Object => {
//     console.log(Object);
//     console.log(Object.name);
//     return Object.name;
// });

// console.log(topics);

// // This will create volumes variable that will contain "object.volume" property values.
// let volumes = graphData.map(Object => {
//     return Object.volume;
// });

// console.log(volumes);

// const myChart = document.getElementById('myChart');

// let barChart = new Chart(myChart, {
//     type: 'bar',
//     data: {
//         labels: topics,
//         datasets: [{
//             label: '# of Tweets/Xeets',
//             data: volumes,
//             borderWidth: 2,
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//                 'rgba(255, 205, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(201, 203, 207, 0.2)'
//             ],
//             borderColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(255, 159, 64)',
//                 'rgb(255, 205, 86)',
//                 'rgb(75, 192, 192)',
//                 'rgb(54, 162, 235)',
//                 'rgb(153, 102, 255)',
//                 'rgb(201, 203, 207)'
//             ],
//             hoverBackgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(255, 159, 64)',
//                 'rgb(255, 205, 86)',
//                 'rgb(75, 192, 192)',
//                 'rgb(54, 162, 235)',
//                 'rgb(153, 102, 255)',
//                 'rgb(201, 203, 207)'
//             ]
//         }]
//     },
//     options: {
//         indexAxis: 'y',
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

// // End of Copy Paste to Fetch Request _____________________