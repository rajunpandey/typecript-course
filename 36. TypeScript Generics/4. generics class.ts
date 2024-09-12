/*
//Syntax

class class_name<T, U> {
    // Class body
}
let obj1 = new class_name<data_type_1, data_type_2>();
*/


/*
//Example
class Box<T> {
    val: T;

    constructor(value: T) {
        this.val = value;
    }

    get(): T {
        return this.val;
    }

    set(value: T): void {
        this.val = value;
    }
}

let box1 = new Box<number>(10);
console.log(box1.get()); // 10

let box2 = new Box<string>("Hello");
console.log(box2.get()); // Hello
*/



/*
//Example
class Stack<T> {
    private st: T[] = [];

    constructor(initialContents?: T[]) {
        if (initialContents) {
            this.st = initialContents;
        }
    }

    push(item: T): void {
        this.st.push(item);
    }

    pop(): T | undefined {
        return this.st.pop();
    }

    peek(): T | undefined {
        return this.st[this.st.length - 1];
    }

    isEmpty(): boolean {
        return this.st.length === 0;
    }

    size(): number {
        return this.st.length;
    }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

console.log(numberStack.peek());  // Outputs: 3
console.log(numberStack.pop());   // Outputs: 3
console.log(numberStack.peek());  // Outputs: 2
console.log(numberStack.isEmpty()); // Outputs: false
console.log(numberStack.size());    // Outputs: 2
*/




//example:Implementing Generic Interface with Generic Classes
interface dataBase<T> {
    findById(id: number): T | undefined;
    save(item: T): void;
}

class MemorydataBase<T> implements dataBase<T> {
    private items = new Map<number, T>();

    findById(id: number): T | undefined {
        return this.items.get(id);
    }

    save(item: T): void {
        const id = this.items.size + 1;
        this.items.set(id, item);
    }
}

const repo = new MemorydataBase<string>();
repo.save("Hello");
console.log(repo.findById(1)); 

