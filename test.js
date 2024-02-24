const alice = {  first: 'Alice',  last: 'Wonderland',  salary: 100000};

alice['salary'] = alice.salary + 10000;
console.log(alice['salary']);

alice.salary += 10000;

alice.['salary'] += 10000;
