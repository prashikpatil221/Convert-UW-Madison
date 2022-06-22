// Select input field
const input = document.querySelector("#input");
const molwtin = document.querySelector("#molwtin");

// Select unit selections
const unit = document.querySelector("#unit");

const convert = () => {

    // Get value of user input and units
    const value = input.value;
    const mol = molwtin.value;
    // const catw = catwtin.value;
    const unitValue = unit.value;
    const output = document.querySelector("#output");

    // Show output when there is a value
    (value !== "") ?
      output.style.display = "block" : output.style.display = "none";

    // check unit type
    switch(unitValue) {
        case "Mole-product/ Gram-catalyst/ Sec":
            mgs(value);
            break;
        case "Mole-product/ Kg-catalyst/ Sec":
            mks(value);
            break;
        case "Gram-product/ Gram-catalyst/ Sec":
            ggs(value);
            break;
        case "Gram-product/ Gram-catalyst/ Hour":
            ggh(value);
            break;
    }
}

const card1 = document.querySelector("#card-1");
const card2 = document.querySelector("#card-2");
const card3 = document.querySelector("#card-3");
// const card4 = document.querySelector("#card-4");

const mgs = value => {

    x = document.getElementById("molwtin").value;

    card1.querySelector('h4').textContent="Mole-product/ Kg-catalyst/ Sec:"
    card2.querySelector('h4').textContent="Gram-product/ Gram-catalyst/ Sec:"
    card3.querySelector('h4').textContent="Gram-product/ Gram-catalyst/ Hour:"

    card1.querySelector('div').textContent= value*1000;
    card2.querySelector('div').textContent= value * x ;
    card3.querySelector('div').textContent= value * x * 3600;
}

const mks = value => {

    x = document.getElementById("molwtin").value;

    // document.write(x);
    card1.querySelector('h4').textContent="Mole-product/ Gram-catalyst/ Sec:"
    card2.querySelector('h4').textContent="Gram-product/ Gram-catalyst/ Sec:"
    card3.querySelector('h4').textContent="Gram-product/ Gram-catalyst/ Hour:"
    // card4.querySelector('h4').textContent="Mole-product/ Gram-catalyst/ Min:"

    card1.querySelector('div').textContent= value * 1000 ;
    card2.querySelector('div').textContent= value * x * 1000 ;
    card3.querySelector('div').textContent= value * x * 1000 * 3600;
    // card4.querySelector('div').textContent= value
}

const ggs = value => {
    x = document.getElementById("molwtin").value;

    card1.querySelector('h4').textContent="Mole-product/ Gram-catalyst/ Sec:"
    card2.querySelector('h4').textContent="Mole-product/ Kg-catalyst/ Sec:"
    card3.querySelector('h4').textContent="Gram-product/ Gram-catalyst/ Hour:"

    card1.querySelector('div').textContent= value/x;
    card2.querySelector('div').textContent= value/x * 1000 ;
    card3.querySelector('div').textContent= value/x * 3600;
}



const ggh = value => {

    x = document.getElementById("molwtin").value;

    card1.querySelector('h4').textContent="Mole-product/ Gram-catalyst/ Sec:"
    card2.querySelector('h4').textContent="Mole-product/ Kg-catalyst/ Sec:"
    card3.querySelector('h4').textContent="Gram-product/ Gram-catalyst/ Sec:"

    card1.querySelector('div').textContent= value/x * 3600;
    card2.querySelector('div').textContent= value/x * 1000 * 3600;
    card3.querySelector('div').textContent= value * 3600 ;
}


// Catch user input event and unit change
input.addEventListener("input", convert);
unit.addEventListener("input", convert);