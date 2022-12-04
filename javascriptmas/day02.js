/* Totally Private Data Farm 

Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 

We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}

Read about toDateString() for info on formatting a readable date. 

*/

const userData = [
  {
    name: {
      title: 'Mr',
      first: 'Levent',
      last: 'Busser',
    },
    dob: {
      date: '1971-08-21T01:08:00.099Z',
      age: 51,
    },
  },
  {
    name: {
      title: 'Mr',
      first: 'Kornelius',
      last: 'Hamnes',
    },
    dob: {
      date: '1961-09-23T13:13:49.283Z',
      age: 61,
    },
  },
]

const formatUser = (obj) => {
  const fullName = obj.name.first + ' ' + obj.name.last
  const birthday = new Date(obj.dob.date).toDateString()
  return { fullName, birthday }
}
function transformData(data) {
  const result = data.map((user) => formatUser(user))
  return result
}

console.log(transformData(userData))
