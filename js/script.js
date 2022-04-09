const generateBtn = document.getElementById("generate-btn");
console.log(generateBtn);
generateBtn.addEventListener("click",
function() {

    const userData = document.getElementById("userdata").value;
    console.log(userData);

    const distanceIn = document.getElementById("distance-in").value;
    console.log(distanceIn);

    const userAge = document.getElementById("user-age").value;
    console.log(userAge);

    let price = distanceIn * 0.21;
    let discount = 0;
    console.log(price);

    if (userAge === 'underage') {
        discount = price * 0.2
    } else if (userAge === 'over65') {
        discount = price * 0.4
    }

    price = price - discount;
    console.log(price);

    const totalPrice = document.querySelector("#price-ticket");
    console.log(totalPrice);
    totalPrice.innerHTML = `€ ${price}`;

    let randCarriage = Math.floor(Math.random() * 10) + 1;
    console.log(randCarriage);
    document.getElementById('number-carriage').innerHTML = randCarriage;

    let randCp = Math.floor(Math.random() * 99998) + 90000;
    console.log(randCp);
    document.getElementById('number-cp').innerHTML = randCp;
}
);

