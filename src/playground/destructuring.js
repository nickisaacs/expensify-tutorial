//Object destructuing

const person = {
    name: 'Nick',
    age: 24,
    location: {
        city: 'Kochi',
        temp: 92
    }

};

//default for name, along with an alias
const {name: firstName = 'Anonymous', age} = person;

console.log(`${firstName} is ${age}`);


//alias for temp
const {city, temp: temperature} = person.location;

if(city && temperature){
    console.log(`its ${temperature} in ${city}`);
}

//Array Destructuring

const address = ['1299 S j street','Philadelphia','Pensylvania','12456'];

const [street,city1,state,zip] = address;

//also possible:
//elements at the end can be ignored if not used
//const [street,city1,state] = address;
//elements in between should be an empty comma if not used
//const [,city1,state] = address;

//default:
//const [street,city1,state = 'New York',zip] = address;

console.log(`you are in ${city1} ${state}`);