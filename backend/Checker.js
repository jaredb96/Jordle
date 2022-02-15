const WORD_LENGTH = 5;

const INCORRECT = 1;
const MISPLACED = 2;
const CORRECT = 3;

const checkWordMatch = (target, guess) => {
    const matchResult = {
        0: INCORRECT,
        1: INCORRECT,
        2: INCORRECT,
        3: INCORRECT,
        4: INCORRECT
    }

    const targetLetterPositions = getTargetLetterPositions(target);

    for (let i = 0; i < WORD_LENGTH; i++){
        const letterMatch = checkLetterMatch(targetLetterPositions, guess[i], i);
        matchResult[i] = letterMatch;
    }

    return matchResult;
}

const checkLetterMatch = (targetLetterPositions, guess, position) => {
    if (guess in targetLetterPositions && position in targetLetterPositions[position]){
        return CORRECT
    } else if (guess in targetLetterPositions){
        return MISPLACED
    }

    return INCORRECT 
}

const getTargetLetterPositions = (target) => {
    const positions = {}
    for (let i = 0; i < WORD_LENGTH; i++){
        if (target[i] in positions){
            positions[target[i]].push(i)
        } else {
            positions[target[i]] = [i]
        }
    }

    return positions
}