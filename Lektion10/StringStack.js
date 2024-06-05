
class StringStack {
    constructor() {
        this.stack = [];
        this.top = -1;
    }
    
    push(string) {
        if (typeof string !== 'string') {
            throw new Error('Det er ikke en string');
        }
        this.top++;
        this.stack[this.top] = string;
    }

    pop() {
        if (this.top === -1) {
            return null;
        }
        let poppedValue = this.stack[this.top];
        this.top--;
        return poppedValue;
    }

    peek() {
        if (this.top === -1) {
            return null;
        }
        return this.stack[this.top];
    }
}

