import { Guess } from 'lib/guess';

import { Cell } from './Cell';

type Props = {
    guess: Guess;
    className: string;
    setIndex: any;
    currentIndex: number
};

export const CurrentRow = ({ guess, className, setIndex, currentIndex }: Props) => {
    const classes = `flex justify-center mb-1 ${className}`;

    return (
        <div className={classes}>
            {guess.map((letter, i) => (
                <Cell
                    key={i}
                    value={letter}
                    index={i}
                    setIndex={(index: number) => setIndex(index)}
                    currentIndex={currentIndex}
                />
            ))}
        </div>
    );
};
