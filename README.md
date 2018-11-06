# Portkey

## Background and Overview

Portkey is a mobile application that allows users to compare the cost of ride services, such as Uber and Lyft. Rides can filtered based on shared, standard or premium (XL, Black, etc.) trips and can be booked with the corresponding ride service.

## Functionality & MVP

In Portkey, users will be able to:
* See current location on Map
* Enter a specificed origin and destination and get directions/ETA
* Compare Lyft & Uber prices and wait times based on route and filters (shared, standard or premium time)
* Deeplink to book a ride with the desired service with all 
* User auth
* User profile page that tracks total money saved, total distance and total rides with Portkey (all gameified).


## Wireframes

The app will consist of three main screens. The first will be a map with your location and an option to enter an address towards the bottom (first screenshot on the left). The second will be a dropdown to input an origin and destination (screenshot two), and the third will be the original map page will options to compare/order an Uber or Lyft towards the bottom(final screenshot on the right).

<div display="flex">
<img src="https://i.imgur.com/uP0Vtjn.jpg" alt="drawing" width="200"/>
<img src="https://i.imgur.com/OwGLHHv.png" alt="drawing" width="200" margin="20"/>
<img src="https://i.imgur.com/dwP5h1v.jpg" alt="drawing" width="200"/>

</div>

## Architecture and Technologies

* Javascript, React Native, Swift, Xcode to manage frontend
* Graph QL to manage API calls
* Ruby on Rails & Postgres backend
* Google API (Google Places & Google Maps) for destination auto-complete, map and routes
* Uber & Lyft API to compare prices, wait times and book rides

## Implementation Timeline

#### Day 1:

* Learn and init React Native project (first-time using)
* Learn Graph QL (first-time using)

#### Day 2:

* Integrate Google Maps and Places API and setup current location tracking

#### Day 3:

* Integrate Uber and Lyft API, compare prices based on destination

#### Day 4/5:

* Styling

#### Over the weekend:

* Deploy to App & Play Store

