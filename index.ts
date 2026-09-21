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

function subtractNumbers(): void {
    console.log(`Результат вычитания: ${n1 - n2}`);
}
subtractNumbers();
