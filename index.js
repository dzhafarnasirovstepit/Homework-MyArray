console.clear();

function MyArray(...args) {
    
    this.elements = {
        length: 0
    }

    this.push = function (...args) {

        for (const arg of args) {
            const index = this.elements.length;

            this.elements[index] = arg;

            ++this.elements.length;

        }

        return this.elements.length;

    }

    this.pop = function() {

        const length = this.elements.length;

        if (length === 0) return;

        const lastItem = this.elements[length - 1];

        delete this.elements[length - 1];

        --this.elements.length;

        return lastItem;
    }

    this.shift = function() {

        if (this.elements.length === 0) return;

        const firstItem = this.elements[0];

        for (let i = 0; i < this.elements.length - 1; i++) {
            this.elements[i] = this.elements[i + 1];
        }

        delete this.elements[this.elements.length - 1];

        --this.elements.length;

        return firstItem;

    };

    this.unshift = function (...args) {

        const originalLength = this.elements.length;

        for (let i = originalLength - 1; i >= 0; i--) {
            this.elements[i + args.length] = this.elements[i];
        }

        for (let i = 0; i < args.length; i++) {
            this.elements[i] = args[i];
        }

        this.elements.length += args.length;

        return this.elements.length;

    };



    this.push(...args);
}


const arr = new MyArray(1, '2', [3]);

console.log(arr.elements);

arr.push(['4'], { x: 5 }, null);

console.log(arr.elements);

const lastItem = arr.pop();

console.log(lastItem, arr.elements);

const firstItem = arr.shift();

console.log('Shifted item:', firstItem, arr.elements);

arr.unshift('newItem1', 'newItem2');

console.log('After unshift:', arr.elements);
