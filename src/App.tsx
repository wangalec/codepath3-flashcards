import { useState } from 'react';
import './App.css';
import FlashCard from './components/FlashCard';

const App = () => {

  const[currIndex, setCurrIndex] = useState(0);
  const newIndex = () => {
    setCurrIndex(Math.floor(Math.random() * 10))
  }

  const flashCards: {front: string, back: string}[] = [
    { "front": "Monophonic", "back": "A single melody line/tune played by many people"},
    { "front": "Polyphonic", "back": "Many melody lines/tunes, many rhythms played by many people"},
    { "front": "Rondo Form", "back": "Structure takes the form of A B A C A etc"},
    { "front": "Major", "back": "a key whose harmony is based on the major scale which sounds happy"},
    { "front": "Chromatic", "back": "motion by half steps; also describes harmony or melody that employs some of the sequential 12 pitches (semi-tones) in an octave - Chromatic notes are notes not in the key"},
    { "front": "Sonata Form", "back": "The form most often used for the 1st movement of large works like symphonies and concertos. It is a large 3-part form, usually with an Introduction, Exposition (A), Development (B), and Recapitulation (A), with a coda to end. There are 2 Subjects or tunes used.    "},
    { "front": "Tempo", "back": "The speed at which the pulse of a composition is to be played"},
    { "front": "Dynamics", "back": "how loud or soft the music is"},
    { "front": "Pitch", "back": "High and Lowness in music"},
    { "front": "Cresendo", "back": "Getting louder"},
  ]

  return (
    <div className="App">
      <h1> Music Terms </h1>
      <h2> How good is your music knowledge? Try out these music flashcards </h2>
      <h2> Number of Cards: 10 </h2>
      <FlashCard
        front = {flashCards[currIndex].front}
        back = {flashCards[currIndex].back}
      />
      <button onClick={newIndex}> Next </button>
    </div>
  )
}

export default App