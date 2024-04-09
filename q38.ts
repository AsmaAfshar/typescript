function describeCity(city: string, country: string= 'Pakistan'): void {
    console.log(`${city} is in ${country}`)
}
describeCity('Karachi'); //default sentence
describeCity('France', 'Europe');
describeCity('Lahore');
describeCity('Quetta', 'Gilgit'); //just for practice
