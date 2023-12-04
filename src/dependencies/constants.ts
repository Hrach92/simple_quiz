import { QuestionType } from "./types";

export const questions: QuestionType[] = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", isRight: false, answered: false },
      { text: "Paris", isRight: true, answered: false },
      { text: "Madrid", isRight: false, answered: false },
      { text: "London", isRight: false, answered: false },
    ],
    number: 1,
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", isRight: false, answered: false },
      { text: "Venus", isRight: false, answered: false },
      { text: "Mars", isRight: true, answered: false },
      { text: "Jupiter", isRight: false, answered: false },
    ],
    number: 2,
  },
  {
    question: "What is the powerhouse of the cell?",
    answers: [
      { text: "Nucleus", isRight: false, answered: false },
      { text: "Cell Membrane", isRight: false, answered: false },
      { text: "Chloroplast", isRight: false, answered: false },
      { text: "Mitochondria", isRight: true, answered: false },
    ],
    number: 3,
  },
  {
    question: "Which country is known as the land of the rising sun?",
    answers: [
      { text: "China", isRight: false, answered: false },
      { text: "Japan", isRight: true, answered: false },
      { text: "South Korea", isRight: false, answered: false },
      { text: "Thailand", isRight: false, answered: false },
    ],
    number: 4,
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Leonardo da Vinci", isRight: true, answered: false },
      { text: "Pablo Picasso", isRight: false, answered: false },
      { text: "Vincent van Gogh", isRight: false, answered: false },
      { text: "Michelangelo", isRight: false, answered: false },
    ],
    number: 5,
  },
  {
    question: "Which is the largest ocean on Earth?",
    answers: [
      { text: "Indian Ocean", isRight: false, answered: false },
      { text: "Arctic Ocean", isRight: false, answered: false },
      { text: "Atlantic Ocean", isRight: false, answered: false },
      { text: "Pacific Ocean", isRight: true, answered: false },
    ],
    number: 6,
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "O", isRight: false, answered: false },
      { text: "W", isRight: false, answered: false },
      { text: "H2O", isRight: true, answered: false },
      { text: "WA", isRight: false, answered: false },
    ],
    number: 7,
  },
  {
    question: "What is the largest mammal in the world?",
    answers: [
      { text: "Elephant", isRight: false, answered: false },
      { text: "Blue Whale", isRight: true, answered: false },
      { text: "Giraffe", isRight: false, answered: false },
      { text: "Hippo", isRight: false, answered: false },
    ],
    number: 8,
  },
  {
    question: "Which gas do plants use for photosynthesis?",
    answers: [
      { text: "Oxygen", isRight: false, answered: false },
      { text: "Carbon Dioxide", isRight: true, answered: false },
      { text: "Nitrogen", isRight: false, answered: false },
      { text: "Hydrogen", isRight: false, answered: false },
    ],
    number: 9,
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens", isRight: false, answered: false },
      { text: "William Shakespeare", isRight: true, answered: false },
      { text: "Jane Austen", isRight: false, answered: false },
      { text: "Emily Brontë", isRight: false, answered: false },
    ],
    number: 10,
  },
];
