import React, { useState } from 'react';
import MadLibForm from './MadLibForm';
import { rapLibIceCube, rapLibSnoopDogg } from './madLibStories';
import './Madlib.css';
import { v4 as uuid } from 'uuid';

/** Madlib will manage displaying the major steps of the Mad Lib experience
 *  Starts with providing options for your MadLib story.
 *  Then provides a form to fill out all the needed words.
 *  Lastly it will show the finished Mad Lib!
 */
function Madlib() {
  // set initial states
  const [ storyChosen, setStoryChosen ] = useState(null);
  const [ storyComplete, setStoryComplete ] = useState(null);

  // handle complete formdata by adding UX element and merging with full story
  const handleFormSubmit = formData => {
    let answerIdx = 0; // index for array of answers
    let storyArray = [ ...storyChosen.story ]; // prevents submitted data from persisting on app restart
    for ( let i = 0; i < storyArray.length; i++ ) {
      if ( storyArray[i] === "XXXXX" ) {
        // adds a class and unique key to each answer (key for React, class for UX)
        storyArray[i] = <span key={ uuid() } className="submitted-word">{ formData[answerIdx] }</span>;
        answerIdx++;
      }
    }
    setStoryComplete(storyArray);
  }

  // handles click event of selecting a story
  const handleSelection = evt => {
    evt.target.className === "choice-icecube"
      ? setStoryChosen(rapLibIceCube)
      : setStoryChosen(rapLibSnoopDogg);
  }

  // upon initial load, render the selection of stories available
  const renderStoryChoice = () => {
    return (
      <div>
        <h3>Choose your Rap Lib</h3>
        <div className="inner-container">
          <div className="choice-icecube" onClick={handleSelection}></div>
          <div className="choice-snoopdogg" onClick={handleSelection}></div>
        </div>
      </div>
    )
  }

  // reset app to beginning state to try app again
  const resetApp = () => {
    setStoryComplete(null);
    setStoryChosen(null);
  }

  // When we have user inputs, render full story based on user inputs
  const renderCompleteStory = () => {
    return (
      <>
        <div className="story-complete">
          {storyChosen.rapLib === "snoopDogg"
            ? <div className="choice-snoopdogg center"></div>
            : <div className="choice-icecube center"></div>}
          <h3>{storyChosen.caption}</h3>
          <div className="final-madlib">{storyComplete}</div>
        </div>
        <button onClick={resetApp}>Restart Rap Lib!</button>
      </>
    )
  }

  // using states to manage progress through Mad Lib
  return (
    <>
      <div>
        <h1 onClick={resetApp}>Rap Libs</h1>
      </div>
      {
        storyComplete ? renderCompleteStory()
          : storyChosen ? <MadLibForm storyWords={storyChosen.words} renderStory={handleFormSubmit} />
          : renderStoryChoice()
      }
    </>
  );
}

export default Madlib;