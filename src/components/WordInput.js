
import React from 'react'

function onWordSubmit(e) {
        // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    // fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson.myInput);
}

const WordInput = () => {
    // const [hangmanWord, setHangmanWord] = React.useState('');

    return (
        <div>
            <form method="post" onSubmit={onWordSubmit}>
                <label>
                    Hangman Word: <input name="myInput" defaultValue="Some initial value" />
                </label>

                <button type="submit">Submit form</button>
            </form>
        </div>
        
    );

};

export default WordInput;