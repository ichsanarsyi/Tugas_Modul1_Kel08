inputValue = () =>
{
    var num0 = document.getElementById("inputNum").text0.value;
    var num1 = document.getElementById("inputNum").text1.value;
    var num2 = document.getElementById("inputNum").text2.value;

    var arrayNum = [num0, num1, num2];

    var systemComment = document.getElementById("container");

    if (num0 && num1 && num2)
    {
        console.log(arrayNum);
        
        arrayNum.forEach((number, index) => {
            console.log("index : " + index + " // number : " + number);
        });

        var timesBy2 = arrayNum.map(number => 2 * number);

        console.log(timesBy2);

        timesBy2.forEach((number, index) => {
            console.log("index : " + index + " // number : " + number);
        });
        }
    else
    {
        console.log("Nothing Here..")
    }

    (num0 && num1 && num2) ? systemComment.innerHTML = "Kalkulasi berhasil. Periksa console browser." : systemComment.innerHTML = "Kalkulasi tidak berjalan. Lengkapi dulu isian index."
}

// function calculate()
// {
//     var timesBy2 = arrayNum.map(function(number)
//     {
//         return 2 * number;
//     });
//     console.log(timesBy2);
// }