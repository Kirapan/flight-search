const data = [{
  Origin: 'YYZ',
  'Departure Time': '6/15/2014 6:45:00',
  Destination: 'YYC',
  'Destination Time': '6/15/2014 8:54:00',
  Price: '$878.00'
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
  'Departure Time': '6/22/2014 12:00:00',
  Destination: 'YYC',
  'Destination Time': '6/22/2014 14:09:00',
  Price: '$630.00'
},
{
  Origin: 'YVR',
  'Departure Time': '6/23/2014 9:20:00',
  Destination: 'YYZ',
  'Destination Time': '6/23/2014 15:22:00',
  Price: '$1122.00'
}]


function searchFlights(from, to) {
  
  from = from.toUpperCase()
  to = to.toUpperCase()
  const result = data.filter(item => {
    if (item.Origin === from && item.Destination === to) {
      return item
    }
  })
  result.sort(function(a,b){
    if (a.Price !== b.Price) {
      return Number(a.Price.slice(1)) - Number(b.Price.slice(1))
    } else {
      let timeA = new Date(a['Departure Time'])
      let timeB = new Date(b['Departure Time'])
      return timeA - timeB
    }
  })
  return result
}