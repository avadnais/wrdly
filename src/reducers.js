const initialState = {
  guess: "",
  solution: "",
  correct: false,
  submittedGuesses: [],
  submittedGuessesClues: [],
  guessedLetters: {},
  gameOver: false,
  modalVisible: false,
  copiedToClipboard: false,
  easterEggRows: [],
};

export const guessReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addLetter":
      return {
        ...state,
        guess: state.guess + action.payload,
      };
    case "removeLetter":
      return {
        ...state,
        guess: state.guess.slice(0, -1),
      };
    case "toggleCorrect":
      return {
        ...state,
        correct: !state.correct,
      };
    case "setSolution":
      return {
        ...state,
        solution: action.payload,
      };
    case "submitGuess":
      return {
        ...state,
        submittedGuesses: [...state.submittedGuesses, state.guess],
        guess: "",
      };
    case "addClue":
      return {
        ...state,
        submittedGuessesClues: [...state.submittedGuessesClues, action.payload],
      };
    case "addGuessedLetter":
      return {
        ...state,
        guessedLetters: {
          ...state.guessedLetters,
          [action.payload.letter]: action.payload.isThere,
        },
      };
    case "toggleGameOver":
      return {
        ...state,
        gameOver: !state.gameOver,
      };
    case "newGame":
      return initialState;
    case "toggleModal":
      return {
        ...state,
        modalVisible: !state.modalVisible,
      };
    case "toggleCopiedToClipboard":
      return {
        ...state,
        copiedToClipboard: !state.copiedToClipboard,
      };
    case "toggleIsEasterEgg":
      return {
        ...state,
        isEasterEgg: !state.isEasterEgg,
      };
    case "addEasterEggRow":
      return {
        ...state,
        easterEggRows: [...state.easterEggRows, action.payload],
      };
    default:
      return state;
  }
};

export function addEasterEggRow(rowNum) {
  return {
    type: "addEasterEggRow",
    payload: rowNum,
  };
}

export function addLetter(letter) {
  return {
    type: `addLetter`,
    payload: letter,
  };
}
export function removeLetter() {
  return {
    type: `removeLetter`,
  };
}

export function toggleCorrect() {
  return {
    type: "toggleCorrect",
  };
}

export function setSolution(word) {
  return {
    type: "setSolution",
    payload: word,
  };
}

export function submitGuess() {
  return {
    type: "submitGuess",
  };
}

export function addClue(clue) {
  return {
    type: "addClue",
    payload: clue,
  };
}

export function addGuessedLetter(letter, isThere) {
  return {
    type: "addGuessedLetter",
    payload: {
      letter: letter,
      isThere: isThere,
    },
  };
}

export function toggleGameOver() {
  return {
    type: "toggleGameOver",
  };
}

export function newGame() {
  return {
    type: "newGame",
  };
}

export function toggleModal() {
  return {
    type: "toggleModal",
  };
}
export function toggleCopiedToClipboard() {
  return {
    type: "toggleCopiedToClipboard",
  };
}
