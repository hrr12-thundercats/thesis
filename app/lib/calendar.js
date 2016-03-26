var moment = require('moment');
require('moment-range');

// Generates labels for calendar
var calendarLabel = function () {
  var result = [];
  var arr = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
  
  arr.forEach(function (item) {
    result.push({calendarHeading: item});
  });
  return result;
};

// Creates an array of dates (moment objects) in ISOString format
// Current range - Start of 3 weeks prior to start of current week to end of the current week
var getPeriodArray = function () {
  // Current range
  var timeInterval = moment().startOf('week').subtract(3, 'weeks').format() + '/' + moment().endOf('week').add(1, 'weeks').format();
  var dr = moment.range(timeInterval);

  var test = dr.toArray('weeks');
  
  // Converts moment object to ISOString format
  var periodArray = test.map(function (week) {
    return week.format();
  });
  
  return periodArray;
};

// Creates an array containing objects representing each day in the period
var getDaysArray = function (array) {
  var daysArray = [];
  
  for (var i = 0; i < 4; i++ ) {
    var weekInterval;
    var weekRange;
    var weekRangeArray;
    
    if( i + 1 < array.length) {
      weekInterval = array[i] + '/' + array[ i + 1 ];
      weekRange = moment.range(weekInterval);
      weekRangeArray = weekRange.toArray('days');
    }
    
    var transform = weekRangeArray.map(function(day) {
      return {ISOString: day.format(), date: day.date(), done: false};
    });
    
    transform.pop(); // removes duplicate end-of-week day
    
    transform.forEach(function(day){
      daysArray.push(day);
    });
  }
  return daysArray;
};


module.exports.getPeriodArray = getPeriodArray;
module.exports.getDaysArray = getDaysArray;
module.exports.calendarLabel = calendarLabel;




