
import React from 'react'

function onWordSubmit(hangmanWord) {
    console.log(hangmanWord);
}

const WordInput = () => {
    const [hangmanWord, setHangmanWord] = React.useState('');

    return (
        <div>
            <form onSubmit={onWordSubmit(hangmanWord)}>        <label>
                    Word:
                <input type="text" value={hangmanWord} onChange={setHangmanWord}/>        </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
        
    );

};

export default WordInput;