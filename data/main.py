import re

words = []

with open('sources/wordle-at.txt') as file:
    data = file.read().replace('\n', '')
    words += re.findall(r"'([A-Z]{5})'", data)
    print(f"words after adding wordle-at: {len(words)}")

with open('sources/wordle-de.txt') as file:
    data = file.read().replace('\n', '')
    words += re.findall(r'"([A-Z]{5})"', data)
    print(f"words after adding wordle-de: {len(words)}")

words = {w for w in words}  # removing duplicates by converting to a set
words = sorted(list(words))
print(f"words after removing duplicates: {len(words)}")

with open('all_words.txt', 'w') as file:
    file.write('\n'.join(words))
