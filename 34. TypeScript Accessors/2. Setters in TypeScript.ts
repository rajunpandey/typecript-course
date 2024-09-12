
//Example
class TextContainer {
    private _content: string = '';

    set content(value: string) {
        this._content = value.trim().toLowerCase();
    }

    get content(): string {
        return this._content;
    }
}

const text = new TextContainer();
text.content = "  Hello, WORLD!  ";
console.log(text.content); // Outputs: hello, world!



