import linecache
import re


def generate_words():
    words = []

    with open('sources/wordle-at.txt') as file:
        data = file.read().replace('\n', '')
        words += re.findall(r"'([A-Z]{5})'", data)

    with open('sources/wordle-de.txt') as file:
        data = file.read().replace('\n', '')
        words += re.findall(r'"([A-Z]{5})"', data)

    words = {w for w in words}  # removing duplicates by converting to a set
    words = sorted(list(words))
    print(f"words: {len(words)}")

    with open('wordlist.ts', 'w') as file:
        content = "export const WORDS = [\n" \
                  + '\n'.join([f"'{str(s).lower()}'," for s in words]) \
                  + "\n]"
        file.write(content)


def generate_solutions():
    solutions = []

    line = linecache.getline('sources/wordle-de.txt', 19399)
    solutions += re.findall(r'"([A-Z]{5})"', line)
    line = linecache.getline('sources/wordle-at.txt', 29)
    solutions += re.findall(r'"([A-Z]{5})"', line)

    solutions = sorted(list({s for s in solutions}))
    print(f"solutions: {len(solutions)}")

    with open('validGuesses.ts', 'w') as file:
        content = "export const VALID_GUESSES = [\n" \
                  + '\n'.join([f"'{str(s).lower()}'," for s in solutions]) \
                  + "\n]"
        file.write(content)


if __name__ == '__main__':
    generate_words()
    generate_solutions()
