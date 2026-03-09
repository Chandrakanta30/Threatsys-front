"use client";
import React, { useState } from "react";

const questions = [
  {
    title: "What is Your Workplace?",
    options: [
      "A place where people don’t question my authority",
      "Where ever my best friends are, that’s where i want to be",
      "One that’s organized, structured and has workplace policies set.",
      "A place where everyone knows I’m the boss.",
      "A place where I’m the CEO",
    ],
  },
  {
    title: "The main producers of free gas are?",
    options: [
      "the south Bassein and Tapti fields in the western offshore",
      "the gas fields in Tripura and Andhra Pradesh (KG Basin)",
      "both (a) and (b)",
      "Iran, Iraq, Saudi Arabia, Kuwait",
      "None of the above",
    ],
  },
  {
    title: "The moon?",
    options: [
      "is the natural satellite of earth",
      "has no liquid water",
      "both (a) and (b)",
      "has no atmosphere",
      "All of the above",
    ],
  },
  {
    title: "The main crops of kharif are?",
    options: [
      "rice, jowar, bajra",
      "ragi, maize",
      "both (a) and (b)",
      "cotton, jute",
      "All of the above",
    ],
  },
  {
    title: "The Penumbra is?",
    options: [
      "the outer portion of the moon's shadow",
      "formed by the tangent that intersects between the sun and the moon",
      "both (a) and (b)",
      "None of the above",
      "All of the above",
    ],
  },
];

function MultiStepTest() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleSelect = (value) => {
    setAnswers({ ...answers, [step]: value });
  };

  const nextStep = () => {
    if (step < questions.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="wrapper-test pt-5">
      <div className="container">
        <form className="multisteps_form position-relative">
          {/* Progress */}
          <div className="step_progress text-center mb-4">
            {questions.map((_, index) => (
              <span
                key={index}
                className={`step ${index === step ? "active" : ""}`}
              ></span>
            ))}
          </div>

          {/* Question */}
          <div className="multisteps_form_panel">
            <span className="question_number text-uppercase d-flex justify-content-center">
              Question {step + 1}/{questions.length}
            </span>

            <h2 className="question_title text-center">
              {questions[step].title}
            </h2>

            <div className="form_items d-flex justify-content-center">
              <ul className="ps-0">
                {questions[step].options.map((option, index) => (
                  <li key={index} className="rounded-pill bg-white">
                    <input
                      type="radio"
                      name={`step_${step}`}
                      checked={answers[step] === option}
                      onChange={() => handleSelect(option)}
                    />
                    <label>{option}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Buttons */}
          <div className="form_btn text-center mt-4">
            <button
              type="button"
              className="f_btn rounded-pill border-0"
              onClick={prevStep}
              disabled={step === 0}
            >
              Last Question
            </button>

            {step < questions.length - 1 ? (
              <button
                type="button"
                className="f_btn rounded-pill border-0"
                onClick={nextStep}
              >
                Next Question
              </button>
            ) : (
              <button type="submit" className="f_btn rounded-pill border-0">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default MultiStepTest;
