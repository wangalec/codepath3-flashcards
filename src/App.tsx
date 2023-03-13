import { useState } from 'react';
import './App.css';
import FlashCard from './components/FlashCard';

const App = () => {

  const flashCards: {front: string, back: string}[] = [
    { "front": "Monophonic", "back": "A single melody line"},
    { "front": "Polyphonic", "back": "Many melody lines"},
    { "front": "Rondo Form", "back": "Structure takes the form of A B A C A etc"},
    { "front": "Major", "back": "a key whose harmony is based on the major scale which sounds happy"},
    { "front": "Chromatic", "back": "motion by half steps; also describes harmony or melody that employs some of the sequential 12 pitches (semi-tones) in an octave - Chromatic notes are notes not in the key"},
    { "front": "Sonata Form", "back": "The form most often used for the 1st movement of large works like symphonies and concertos. It is a large 3-part form, usually with an Introduction, Exposition (A), Development (B), and Recapitulation (A), with a coda to end. There are 2 Subjects or tunes used.    "},
    { "front": "Tempo", "back": "The speed at which the pulse of a composition is to be played"},
    { "front": "Dynamics", "back": "how loud or soft the music is"},
    { "front": "Pitch", "back": "High and Lowness in music"},
    { "front": "Cresendo", "back": "Getting louder"},
  ]

  const[currIndex, setCurrIndex] = useState(0);
  const[answer, setAnswer] = useState("");
  const[isCorrect, setIsCorrect] = useState(false);

  const nextIndex = () => {
    if(currIndex < 9) setCurrIndex(currIndex + 1);
    setIsCorrect(false);
  }
  const previousIndex = () => {
    if(currIndex > 0) setCurrIndex(currIndex - 1);
    setIsCorrect(false);
  }
  const handleAnswerChange = (event: any) => {
    setAnswer(event.target.value);
  }
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if(flashCards[currIndex].back == answer) setIsCorrect(true);
    setAnswer('');
  }

  

  return (
    <div className="App">
      <h1> Music Terms </h1>
      <h2> How good is your music knowledge? Try out these music flashcards </h2>
      <h2> Number of Cards: 10 </h2>
      <FlashCard
        front = {flashCards[currIndex].front}
        back = {flashCards[currIndex].back}
      />
      <form onSubmit={handleSubmit}>
        <input
          value = {answer}
          onChange = {handleAnswerChange}
        />
        <button> Check </button>
        {isCorrect ? <h2> Correct! </h2> : <></>}
      </form>
      <div>
        <button onClick={previousIndex}> Previous </button>
        <button onClick={nextIndex}> Next </button>
      </div>
    </div>
  )
}

export default App