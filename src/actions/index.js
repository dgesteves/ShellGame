export const selectedLevel = level => {
    return {
        type: 'LEVEL_SELECTED',
        payload: level
    }
};

export const currentScore = score => {
    return {
        type: 'CURRENT_SCORE',
        payload: score
    };
};
