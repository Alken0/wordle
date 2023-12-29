export type Guess = (string | undefined)[]

export const isUncompletedGuess = (currentGuess: Guess) => {
  return currentGuess.some((guess) => guess === undefined)
}

export const convertGuessToString = (currentGuess: Guess) => {
  return currentGuess.filter((char) => char !== undefined).join('')
}
