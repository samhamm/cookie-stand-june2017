'use strict';

function CookieStand(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  CookieStand.all.push(this);
  this.calcCookiesEachHour();
}

CookieStand.random = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

CookieStand.prototype.calcCustomersEachHour = function() {
  for (var i = 0; i < CookieStand.hours.length; i++) {
    this.customersEachHour.push(CookieStand.random(this.minCustomersPerHour, this.maxCustomersPerHour));
  }
};

CookieStand.prototype.calcCookiesEachHour = function() {
  this.calcCustomersEachHour();
  this.totalDailyCookies = 0;
  for (var i = 0; i < CookieStand.hours.length; i++) {
    var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += oneHour;
  }
};

CookieStand.prototype.render = function() {
  var trEl = document.createElement('tr');
  CookieStand.newElement('td', this.locationName, trEl);
  for (var i = 0; i < CookieStand.hours.length; i++) {
    CookieStand.newElement('td',this.cookiesEachHour[i], trEl);
  }
  CookieStand.newElement('th', this.totalDailyCookies, trEl);
  CookieStand.theTable.appendChild(trEl);
}

CookieStand.all = [];
CookieStand.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
CookieStand.theTable = document.getElementById('sales-table');
CookieStand.theForm = document.getElementById('add-location')
new CookieStand('Pike Place Market', 23, 65, 6.3, 'pike');
new CookieStand('SeaTac Airport', 3, 24, 1.2, 'seatac');
new CookieStand('Seattle Center', 11, 38, 3.7, 'seattlecenter');
new CookieStand('Capitol Hill', 20, 38, 2.3, 'caphill');
new CookieStand('Alki', 2, 16, 4.6, 'alki');


CookieStand.newElement = function(type, content, parent){
  var newEl = document.createElement(type);
  newEl.textContent = content;
  parent.appendChild(newEl);
}

CookieStand.handleForm = function(e){
  e.preventDefault();
  // console.log('event object', e);
  var loc = e.target.locName.value;
  var min = parseInt(e.target.min.value);
  var max = parseInt(e.target.max.value);
  var avg = parseFloat(e.target.avg.value);

  for (var i = 0; i < CookieStand.all.length; i++){
    if(loc === CookieStand.all[i].locationName) {
      // reassigning the starter properties
      CookieStand.all[i].minCustomersPerHour = min;
      CookieStand.all[i].maxCustomersPerHour = max;
      CookieStand.all[i].avgCookiesPerSale = avg;

      // zeroing out the results of our calculations
      CookieStand.all[i].customersEachHour = [];
      CookieStand.all[i].totalDailyCookies = 0;
      CookieStand.all[i].cookiesEachHour = [];

      // doing the calculations
      CookieStand.all[i].calcCookiesEachHour();
      clearForm();
      CookieStand.renderTable();
      return;
    }
  }

  new CookieStand(loc, min, max, avg);
  function clearForm() {
    e.target.locName.value = null;
    e.target.min.value = null;
    e.target.max.value = null;
    e.target.avg.value = null;
    CookieStand.renderTable();
  }
}

CookieStand.makeHeaderRow = function() {
  var trEl = document.createElement('tr');
  CookieStand.newElement('th', 'Locations', trEl);
  for (var i = 0; i < CookieStand.hours.length; i++) {
    CookieStand.newElement('th', CookieStand.hours[i], trEl)
  }
  CookieStand.newElement('th', 'Location Totals', trEl);
  CookieStand.theTable.appendChild(trEl);
}

CookieStand.makeFooterRow = function() {
  var trEl = document.createElement('tr');
  CookieStand.newElement('th', 'Hourly Totals for All Locations', trEl);
  var totalOfTotals = 0;
  var hourlyTotal = 0;
  for (var i = 0; i < CookieStand.hours.length; i++) {
    hourlyTotal = 0;
    for (var j = 0; j < CookieStand.all.length; j++){
      hourlyTotal += CookieStand.all[j].cookiesEachHour[i];
      totalOfTotals += CookieStand.all[j].cookiesEachHour[i];
    }
    CookieStand.newElement('th', hourlyTotal, trEl);
  }
  CookieStand.newElement('th', totalOfTotals, trEl);
  CookieStand.theTable.appendChild(trEl);
}

CookieStand.renderTable = function() {
  CookieStand.theTable.innerHTML = '';
  CookieStand.makeHeaderRow();
  CookieStand.all.forEach(function(store) {
    return store.render();
  });
  CookieStand.makeFooterRow();
}
CookieStand.renderTable();

CookieStand.theForm.addEventListener('submit', CookieStand.handleForm);









//make some waves.
var ocean = document.getElementById("ocean"),
    waveWidth = 10,
    waveCount = Math.floor(window.innerWidth/waveWidth),
    docFrag = document.createDocumentFragment();

for(var i = 0; i < waveCount; i++){
  var wave = document.createElement("div");
  wave.className += " wave";
  docFrag.appendChild(wave);
  wave.style.left = i * waveWidth + "px";
  wave.style.webkitAnimationDelay = (i/100) + "s";
}

ocean.appendChild(docFrag);
