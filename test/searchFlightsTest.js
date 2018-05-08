var assert = chai.assert;

describe('searchFlights', function () {

  it('should return all valid flights', function () {

    assert.deepEqual(searchFlights('YVR', 'YYZ'), [{
      Origin: 'YVR',
      'Departure Time': '6/23/2014 9:20:00',
      Destination: 'YYZ',
      'Destination Time': '6/23/2014 15:22:00',
      Price: '$1122.00'
    }])

    assert.equal(searchFlights('YYZ', 'YYC').length, 3)
  });

  it('should return no flight found if there is no match', function () {
    assert.deepEqual(searchFlights('YVR', 'TTC'), [])
  });

  it('should display the flights in ascending order of price first then departure time', function () {
    assert.deepEqual(searchFlights('YYZ', 'YYC'), [
      {
        Origin: 'YYZ',
        'Departure Time': '6/22/2014 12:00:00',
        Destination: 'YYC',
        'Destination Time': '6/22/2014 14:09:00',
        Price: '$630.00'
      },
      {
        Origin: 'YYZ',
        'Departure Time': '6/26/2014 12:00:00',
        Destination: 'YYC',
        'Destination Time': '6/26/2014 14:09:00',
        Price: '$630.00'
      },
      {
        Origin: 'YYZ',
        'Departure Time': '6/15/2014 6:45:00',
        Destination: 'YYC',
        'Destination Time': '6/15/2014 8:54:00',
        Price: '$878.00'
      }
    ])
  });

  it('should display the flights even with lower case letters', function () {
    assert.equal(searchFlights('YYZ', 'yyc').length, 3)
  });


});