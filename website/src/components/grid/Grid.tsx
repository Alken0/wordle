import { Guess } from 'lib/guess';

import { MAX_CHALLENGES } from '../../constants/settings';
import { CompletedRow } from './CompletedRow';
import { CurrentRow } from './CurrentRow';
import { EmptyRow } from './EmptyRow';

type Props = {
    solution: string;
    guesses: string[];
    currentGuess: Guess;
    isRevealing?: boolean;
    currentRowClassName: string;
    setIndex: any;
};

export const Grid = ({
    solution,
    guesses,
    currentGuess,
    isRevealing,
    currentRowClassName,
    setIndex,
}: Props) => {
    const empties =
        guesses.length < MAX_CHALLENGES - 1
            ? Array.from(Array(MAX_CHALLENGES - 1 - guesses.length))
            : [];

    return (
        <>
            {guesses.map((guess, i) => (
                <CompletedRow
                    key={i}
                    solution={solution}
                    guess={guess}
                    isRevealing={isRevealing && guesses.length - 1 === i}
                />
            ))}
            {guesses.length < MAX_CHALLENGES && (
                <CurrentRow
                    guess={currentGuess}
                    className={currentRowClassName}
                    setIndex={(index: number) => setIndex(index)}
                />
            )}
            {empties.map((_, i) => (
                <EmptyRow key={i} />
            ))}
        </>
    );
};
