import { Guess } from 'lib/guess'

import { Cell } from './Cell'

type Props = {
  guess: Guess
  className: string
  setIndex: any
}

export const CurrentRow = ({ guess, className, setIndex }: Props) => {
  const classes = `flex justify-center mb-1 ${className}`

  return (
    <div className={classes}>
      {guess.map((letter, i) => (
        <Cell
          key={i}
          value={letter}
          index={i}
          setIndex={(index: number) => setIndex(index)}
        />
      ))}
    </div>
  )
}
