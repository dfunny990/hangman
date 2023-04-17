
import { React, useEffect, post } from 'react'
 
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
    // post('localhost:8080/greeting');
    fetch('localhost:8080/greeting', {  // Enter your IP address here

    method: 'GET', 
    mode: 'cors', 
    // body: JSON.stringify(formData) // body data type must match "Content-Type" header

  })

    console.log(formJson.myInput);
}

const WordInput = () => {

    // useEffect(() => {
    //     post('/analytics/event', { eventName: 'visit_form' });
    // }, []);
    // // const [hangmanWord, setHangmanWord] = React.useState('');
    
    return (
        <div>
            <form method="post" onSubmit={onWordSubmit}>
                <label>
                    Hangman Word: <input word="word" defaultValue="input" />
                </label>

                <button type="submit">Submit form</button>
            </form>
        </div>
        
    );

};

export default WordInput;