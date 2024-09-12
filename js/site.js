document.getElementById("btnSubmit").addEventListener("click", getValues);

// get the values from the page
function getValues()
{
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  // convert the input into integer
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  let numbers = generateNumbers(startValue, endValue);

  displayNumbers(numbers);
}

// generate numbers from start value to end value
function generateNumbers(sValue, eValue)
{
  let numbers = [];

  for (let i = sValue; i <= eValue; i++)
  {
    numbers.push(i);
  }

  return numbers
}

// display the numbers and mark even numbers bold
function displayNumbers(numbers)
{
  let templateRow = "";
  for (let i = 0; i < numbers.length; i++)
  {
    let number = numbers[i];
  }
}
