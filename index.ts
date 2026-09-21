let n1: number = 0;
let n2: number =0;

function displayMenu(): void {
    console.log("МЕНЮ");
    console.log("1. Ввести два числа");
    console.log("2. Выполнить сложение");
    console.log("3. Выполнить вычитание");
    console.log("4. Выполнить деление");
    console.log("5. Возвести число в степень");
}

displayMenu();

function inputNumbers(newN1: number, newN2: number): void {
    n1 = newN1;
    n2 = newN2;
    console.log(`Числа заданы: n1 = ${n1}, n2 = ${n2}`);
}
inputNumbers(10, 5);

function addNumbers(): void {
    console.log(`Результат сложения: ${n1 + n2}`);
}

addNumbers();