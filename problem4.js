// Problem #4
function Photo(filename, location) {
  this.filename = filename
  this.location = location
}

var photo1 = new Photo("yosemite.jpg", "Yosemite, CA")
var photo2 = new Photo("bigbear.jpg", "Big Bear, CA")
var photo3 = new Photo("yellowstone.jpg", "Yellowstone, CA")

function Album(name) {
  this.name = name
  this.album = []
  this.add_photo = function(photoObject) {
    this.album.push(photoObject)
  }
}

var roadTrip = new Album("Road Trip 2016")

roadTrip.add_photo(photo1)
roadTrip.add_photo(photo2)
roadTrip.add_photo(photo3)

console.log(roadTrip.album)