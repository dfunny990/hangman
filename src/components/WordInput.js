
import React from 'react'
import {StyleSheet, TextInput} from 'react-native';

function onWordSubmit(hangmanWord) {
    console.log(hangmanWord);
}

const WordInput = () => {
    const [hangmanWord, setHangmanWord] = React.useState('');

    return (
        <div>
            <TextInput
                style={styles.input}
                onChangeText={setHangmanWord}
                value={hangmanWord}
            />
            <button className="receiveWord" onClick={onWordSubmit(hangmanWord)}>Submit</button>

        </div>
        
    );

};


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
})
export default WordInput;