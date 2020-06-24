import React from 'react';
import './InputField.css'

/** InputField - dumb component
 *  Not every Mad Lib has the same number or type of words,
 *  so this component helps us programmatically generate forms
 *  based on the story's needs.
 *    - wordType - Noun, Verb, etc. Used to connect label and input
 *    - label - UX label for input
 *    - value - field value
 *    - placeholder - sample words for given field
 *    - handleChange - sends new value to State on every change
 */ 
function InputField({ wordType, label, placeholder, value, handleChange }) {

  return (
    <label htmlFor={wordType}>{label}<br />
      <input
        name={wordType}
        className="field"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      /><br />
    </label>
  )
}

export default InputField;