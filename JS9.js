

function ClientBank(name, surname, age, passport, money) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.passport = passport;
    this.money = money;
}

function WorkerClinic(name, surname, age, passport, workExperience) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.passport = passport;
    this.workExperience = workExperience;
}

function CitizenRF(name, surname, age, passport, address) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.passport = passport;
    this.address = address;
}

var clientBank = new ClientBank('Ivan', 'Ivanov', 25, '1234567890', 100000);
var workerClinic = new WorkerClinic('Petr', 'Petrov', 30, '0987654321', 5);
var citizenRF = new CitizenRF('Sidor', 'Sidorov', 35, '1357924680', 'Moscow');

console.log(clientBank);
console.log(workerClinic);
console.log(citizenRF);
