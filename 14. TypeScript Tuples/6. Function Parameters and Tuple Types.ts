function processData(data: [string, number]): void {
    const [name, age] = data;
    console.log(`Name: ${name}, Age: ${age}`);
}
let data: [string, number] = ["rajun", 23]
processData(data);