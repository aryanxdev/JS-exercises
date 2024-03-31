// subscribe
let subscribe_button = () => {
    buttonElement = document.querySelector(".subscribe");

    if (buttonElement.innerText === "Subscribe") {
        buttonElement.innerText = "Subscribed";
        buttonElement.classList.add("isSubscribed"); //added a class when the button is clicked and the text is changed to 'Subscribed' and then the class is targeted using css to make certain changes
    } else {
        buttonElement.innerText = "Subscribe";
        buttonElement.classList.remove("isSubscribed"); //removed the class if the text if text is 'Subscribed' when the button is clicked
    }
};

// amazon shipping calculator
let cost,shippingCharge = 10;

let costCalc = () => {
    cost = document.querySelector(".costInput");

    cost = Number(cost.value); //converting the input to number cause the  input entered in the input box is a string by default. Whenever we get a value from the DOM, it's a string. We need to convert it into a number before performing operations on it

    if (cost > 0 && isNaN(cost) === false) {
        cost = cost * 100;

        if (cost < 4000) {
            document.querySelector(".calculatedCost").innerHTML = `$${(cost + (shippingCharge * 100)) / 100
                }`;
        } else {
            document.querySelector(".calculatedCost").innerHTML = `$${cost / 100
                }`;
        }
    } else {
        document.querySelector(".calculatedCost").innerHTML = `Invalid Input`;
    }
};

let keydownAction = (event) => {
    if (event.key === "Enter") {
        costCalc();
    }
};

// onkeyup
let keyPress = (event) => {
    let keyRecord = document.querySelector(".onkeyUP");
    let keyPressRecord;
    keyRecord = keyRecord.value;
    keyPressRecord = event.key; //this just tells the key you pressed
    document.querySelector(".onkeyUPaction").innerHTML = `${keyRecord}`;
    document.querySelector(
        ".recentKeyPress"
    ).innerHTML = `${keyPressRecord}`;
};

let press,
    belem,
    g = 0,
    m = 0,
    t = 0;

let oneButton = () => {
    if (press === "Gaming") {
        belem = document.querySelector(".gaming");
        if (g % 2 !== 0) {
            belem.classList.add("coloronclick");
        } else {
            belem.classList.remove("coloronclick");
        }
        document.querySelector(".music").classList.remove("coloronclick");
        document.querySelector(".tech").classList.remove("coloronclick");
    } else if (press === "Music") {
        belem = document.querySelector(".music");
        if (m % 2 !== 0) {
            belem.classList.add("coloronclick");
        } else {
            belem.classList.remove("coloronclick");
        }
        document.querySelector(".gaming").classList.remove("coloronclick");
        document.querySelector(".tech").classList.remove("coloronclick");
    } else {
        belem = document.querySelector(".tech");
        if (t % 2 !== 0) {
            belem.classList.add("coloronclick");
        } else {
            belem.classList.remove("coloronclick");
        }
        document.querySelector(".music").classList.remove("coloronclick");
        document.querySelector(".gaming").classList.remove("coloronclick");
    }
};