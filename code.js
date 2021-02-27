// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// BOTHSIDEACFGJKLMNPQRUVWXYZ

let normAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_", "=", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "`", "~", "[", "{", "]", "}", "\\", "|", ";", ":", "\'", "\"", ",", "<", ".", ">", "/", "?", " "];
let encoAlphabet = ["B", "O", "T", "H", "S", "I", "D", "E", "A", "C", "F", "G", "J", "K", "L", "M", "N", "P", "Q", "R", "U", "V", "W", "X", "Y", "Z", "b", "o", "t", "h", "s", "i", "d", "e", "a", "c", "f", "g", "j", "k", "l", "m", "n", "p", "q", "r", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_", "=", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "`", "~", "[", "{", "]", "}", "\\", "|", ";", ":", "\'", "\"", ",", "<", ".", ">", "/", "?", " "];

document.addEventListener("DOMContentLoaded", () => {
    triggered();
    document.querySelector("#encodeDecode").addEventListener("change", triggered);
});

function triggered(e) {
    if (e == null) {
        document.querySelector("#chosen").innerHTML = ``;
        document.querySelector("#chosen").innerHTML += `<div class="input-group">
                                                            <div class="input-group-prepend>
                                                                <span class="input-group-text">Encode</span>
                                                            </div>
                                                            <input type="text" id="encode" placeholder="Type plaintext here..." class="form-control" aria-label="type">
                                                            <input type="text" id="result" placeholder="Result will come here..." class="form-control" arir-label="result" disabled>
                                                        </div>`;
        document.querySelector("#encode").addEventListener("keyup", () => {
            textInBox = document.querySelector("#encode").value;
            document.querySelector("#result").value = "";
            for (let i = 0; i < textInBox.length; i++) {
                document.querySelector("#result").value += encoAlphabet[normAlphabet.indexOf(textInBox[i])];
            }
        });

        document.querySelector("#encode").addEventListener("keydown", () => {
            textInBox = document.querySelector("#encode").value;
            document.querySelector("#result").value = "";
            for (let i = 0; i < textInBox.length; i++) {
                document.querySelector("#result").value += encoAlphabet[normAlphabet.indexOf(textInBox[i])];
            }
        });
    } else if (e.target.value == "Encode") {
        document.querySelector("#chosen").innerHTML = ``;
        document.querySelector("#chosen").innerHTML += `<div class="input-group">
                                                            <div class="input-group-prepend>
                                                                <span class="input-group-text">Encode</span>
                                                            </div>
                                                            <input type="text" id="encode" placeholder="Type plaintext here..." class="form-control" aria-label="type">
                                                            <input type="text" id="result" placeholder="Result will come here..." class="form-control" arir-label="result" disabled>
                                                        </div>`;
        document.querySelector("#encode").addEventListener("keydown", () => {
            textInBox = document.querySelector("#encode").value;
            document.querySelector("#result").value = "";
            for (let i = 0; i < textInBox.length; i++) {
                document.querySelector("#result").value += encoAlphabet[normAlphabet.indexOf(textInBox[i])];
            }
        });
        document.querySelector("#encode").addEventListener("keyup", () => {
            textInBox = document.querySelector("#encode").value;
            document.querySelector("#result").value = "";
            for (let i = 0; i < textInBox.length; i++) {
                document.querySelector("#result").value += encoAlphabet[normAlphabet.indexOf(textInBox[i])];
            }
        });
    } else {
        document.querySelector("#chosen").innerHTML = ``;
        document.querySelector("#chosen").innerHTML += `<div class="input-group">
                                                            <div class="input-group-prepend>
                                                                <span class="input-group-text">Decode</span>
                                                            </div>
                                                            <input type="text" id="decode" placeholder="Type plaintext here..." class="form-control" aria-label="type">
                                                            <input type="text" id="result" placeholder="Result will come here..." class="form-control" arir-label="result" disabled>
                                                        </div>`;
        document.querySelector("#decode").addEventListener("keydown", () => {
            textInBox = document.querySelector("#decode").value;
            document.querySelector("#result").value = "";
            for (let i = 0; i < textInBox.length; i++) {
                document.querySelector("#result").value += normAlphabet[encoAlphabet.indexOf(textInBox[i])];
            }
        });
        document.querySelector("#decode").addEventListener("keyup", () => {
            textInBox = document.querySelector("#decode").value;
            document.querySelector("#result").value = "";
            for (let i = 0; i < textInBox.length; i++) {
                document.querySelector("#result").value += normAlphabet[encoAlphabet.indexOf(textInBox[i])];
            }
        });
    }
}