let bar = document.getElementById("myChart").getContext('2d');
let mychart = document.getElementById("myChartone").getContext("2d")
let mycharttwo = document.getElementById("myCharttwo").getContext("2d")

let chart3 = document.getElementById("myChartthree").getContext("2d");

let chart1 = new Chart(bar, {
    type: 'bar',
    data: {
        labels: ['red', 'green',"yellow" , "blue"],
        datasets: [ {
            label: 'My First dataset',
            data: [10, 31 , 20 , 55],
            backgroundColor: [
                'red',
                'lightgreen',
                'rgb(237, 240, 83)',
                'rgb(103, 149, 235)',
              ],
            borderWidth: 1,
        }]
    },
    options: {
        title: {
            text: "Do you like doughnuts?",
            display: true
        }
    },
});


let databases = new Chart(mychart , {
    type: 'doughnut',
    data: {
        labels: ['red', 'green',"yellow" , "blue"],
        datasets: [ {
            label: 'My First dataset',
            data: [10, 31 , 20 , 55],
            backgroundColor: [
                'red',
                'lightgreen',
                'rgb(237, 240, 83)',
                'rgb(103, 149, 235)',
              ],
              borderWidth: 0,
           
            
        }]
    },
    options: {
        title: {
            text: "Do you like doughnuts?",
            display: true
        }
    },
})

let databasers = new Chart(mycharttwo , {
    type: 'line',
    data: {
        labels: ['red', 'green',"yellow" , "blue"],
        datasets: [ {
            label: 'My First dataset',
            data: [10, 31 , 20 , 40,60],

            backgroundColor: [
                'red',
                'lightgreen',
                'rgb(237, 240, 83)',
                'rgb(103, 149, 235)',
              ],
            borderWidth: 2,
            borderColor: [
                  "red"
              ],
        }]
    },

    
    options: {
        title: {
            text: "Do you like doughnuts?",
            display: true
        }
    },
})

let databasers1 = new Chart(chart3 , {
    type: 'polarArea',
    data: {
        labels: ['red', 'green',"yellow" , "blue"],
        datasets: [ {
            label: 'My First dataset',
            data: [10, 31 , 20 , 40],

            backgroundColor: [
                'red',
                'lightgreen',
                'rgb(237, 240, 83)',
                'rgb(103, 149, 235)',
              ],
              borderWidth: 0,
           
        }]
    },

    
    options: {
        title: {
            text: "Do you like doughnuts?",
            display: true
        }
    },
})
