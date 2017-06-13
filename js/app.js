var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CookieStand(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale, idDOM) {
  this.locationName = locationName;
  this.idDOM = idDOM,
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  CookieStand.all.push(this);
}

CookieStand.prototype.calcCustomersEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
  }
};

CookieStand.prototype.calcCookiesEachHour = function() {
  this.calcCustomersEachHour();
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += oneHour;
  }
};

CookieStand.prototype.render = function() {
  this.calcCookiesEachHour();
  var theUL = document.getElementById(this.idDOM);
  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    // 6am = 16 cookies
    liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
    theUL.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
  theUL.appendChild(liEl);
}

CookieStand.all = [];
new CookieStand('Pike Place Market', 23, 65, 6.3, 'pike');
new CookieStand('SeaTac International Airport', 3, 24, 1.2, 'seatac');
new CookieStand('Seattle Center', 11, 38, 3.7, 'seattlecenter');
new CookieStand('Capitol Hill', 20, 38, 2.3, 'caphill');
new CookieStand('Alki', 2, 16, 4.6, 'alki');

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

(function renderAllShops() {
  for(var i = 0; i < CookieStand.all.length; i++){
    CookieStand.all[i].render();
  }
})();
