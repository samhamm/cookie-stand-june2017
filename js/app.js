var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var pikePlace = {
  locationName: 'Pike Place Market',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerSale: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCookiesEachHour();
    var theUL = document.getElementById('pike');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      // 6am: 16 cookies
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      theUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    theUL.appendChild(liEl);
  }
}

var seatacAirport = {
  locationName: 'SeaTac International Airport',
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiesPerSale: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCookiesEachHour();
    var theUL = document.getElementById('seatac');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      // 6am: 16 cookies
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      theUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    theUL.appendChild(liEl);
  }
}

var seattleCenter = {
  locationName: 'Pike Place Market',
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerSale: 3.7,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCookiesEachHour();
    var theUL = document.getElementById('seattlecenter');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      // 6am: 16 cookies
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      theUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    theUL.appendChild(liEl);
  }
}

var capitolHill = {
  locationName: 'Capitol Hill',
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiesPerSale: 2.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCookiesEachHour();
    var theUL = document.getElementById('caphill');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      // 6am: 16 cookies
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      theUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    theUL.appendChild(liEl);
  }
}

var alki = {
  locationName: 'Alki Beach',
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiesPerSale: 4.6,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCookiesEachHour();
    var theUL = document.getElementById('alki');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      // 6am: 16 cookies
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      theUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    theUL.appendChild(liEl);
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var allShops = [pikePlace, seatacAirport, seattleCenter, capitolHill, alki];

(function renderAllShops() {
  for(var i = 0; i < allShops.length; i++){
    allShops[i].render();
  }
})();
