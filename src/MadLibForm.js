import React, { useState } from 'react';
import InputField from './InputField';
import './MadLibForm.css';

/** MadLibForm handles form concerns: rendering the form, handling data.
 *  Generates field inputs based on passed story.
 *  When story is submitted, it will pass formData up to MadLib for display.
 */
function MadLibForm({ storyWords, renderStory }) {
  // set initial state
  const [ formData, setFormData ] = useState(storyWords);

  // on every render, check if all fields have value before enabling submit button
  const checkButtonState = formData.every(field => field.value);

  // handle all changes in field inputs so React knows
  const handleChange = evt => {
    const { name, value } = evt.target;

    // find the correct word and update its value
    setFormData(currData => currData.map(wordObj => (
      wordObj.word === name
        ? {...wordObj, value}
        : wordObj
    )));
  }

  // format submission for easier handling, then pass to parent
  const handleFormSubmit = evt => {
    evt.preventDefault();
    let answersOnly = formData.map(field => field.value)
    renderStory(answersOnly);
  }

  // loop through list of words and generate form inputs
  const renderFields = () => {
    return (
      <>
        {formData.map(wordObj => (
          <InputField
            wordType={wordObj.word}
            value={wordObj.value}
            key={wordObj.id}
            label={wordObj.label}
            placeholder={wordObj.placeholder}
            handleChange={handleChange}
          />
        ))}
      </>
    );
  }

  return (
    <>
      <h3>Fill out your Rap Lib</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="form-wrapper">
          {renderFields()}
        </div>
        <button disabled={!checkButtonState} className="form-button">Submit Masterpiece</button>
      </form>
    </>
  );
}

export default MadLibForm;