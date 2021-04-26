window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  // Create a variable for the ride data
  let rideMasterData = json
  // Loop through the ride data
  for (i = 0; i < rideMasterData.length; i++) {
    // Create a variable to store each ride in memory
    let rideData = json[i]
    // Create a variable for the HTML element we're going to add
    let rideType
    let borderColor
    if (rideData.purpleRequested == true) {
      rideType = `Noober Purple`
      borderColor = `purple`
    } else if (rideData.numberOfPassengers > 3) {
      rideType = `Noober XL`
      borderColor = `blue`
    } else {
      rideType = `Noober X`
      borderColor = `gray`
    }
    let rideList = document.querySelector(`.rides`)
    // Insert HTML into the ride element, using the data from each ride
    rideList.insertAdjacentHTML(`beforeend`,
    `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${rideType}</span>
    </h1>

    <div class="border-4 border-${borderColor}-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${rideData.passengerDetails.first} ${rideData.passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${rideData.passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
          ${rideData.numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${rideData.pickupLocation.address}</p>
          <p>${rideData.pickupLocation.city} , ${rideData.pickupLocation.state} ${rideData.pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${rideData.dropoffLocation.address}</p>
          <p>${rideData.dropoffLocation.city} , ${rideData.dropoffLocation.state} ${rideData.dropoffLocation.zip}</p>
        </div>
      </div>
    </div>`)
  }

})