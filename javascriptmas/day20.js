const podcasts = [
  {
    id: 1,
    title: 'Scrimba Podcast',
    duration: 50,
    tags: ['education', 'jobs', 'technology'],
    hosts: ['Alex Booker'],
    rating: 10,
    genre: 'education',
    paid: false,
  },
  {
    id: 2,
    title: 'Crime Fan',
    duration: 150,
    tags: ['crime', 'entertainment', 'mature'],
    hosts: ['Bob Smith', 'Camilla Lambert'],
    genre: 'true crime',
    rating: 5,
    paid: true,
  },
  {
    id: 3,
    title: 'Mythical Creatures',
    duration: 99,
    tags: ['entertainment', 'general', 'unicorns'],
    hosts: ['Esmerelda Shelley', 'Duke Dukington', 'Felix the Cat'],
    genre: 'fantasy',
    rating: 8,
    paid: true,
  },
  {
    title: 'Crime Crime Crime',
    duration: 70,
    tags: ['crime', 'entertainment', 'mature'],
    hosts: ['Jessica Jones', 'Humphrey Bogart', 'Inspector Gadget'],
    genre: 'true crime',
    rating: 6,
    paid: true,
  },
  {
    title: 'Something about Witches',
    duration: 35,
    tags: ['fantasy', 'entertainment'],
    hosts: ['Frewin Wyrm', 'Evanora Highmore'],
    genre: 'fantasy',
    rating: 8,
    paid: false,
  },
  {
    title: 'Coding Corner',
    duration: 55,
    tags: ['education', 'jobs', 'technology'],
    hosts: ['Treasure Porth', 'Guil Hernandez', 'Tom Chant'],
    genre: 'education',
    rating: 9,
    paid: false,
  },
]

/* Find Free Podcasts 

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 

Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
]
*/

function getFreePodcasts(data) {
  return data
    .filter((i) => i.paid === false)
    .map((i) => ({
      title: i.title,
      rating: i.rating,
      paid: i.paid,
    }))
}

console.log(getFreePodcasts(podcasts))
