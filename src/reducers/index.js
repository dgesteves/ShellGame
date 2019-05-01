import { combineReducers } from 'redux';

const scoreReducer = (currentScore = 0, action) => {
    if (action.type === 'CURRENT_SCORE') {
        return action.payload
    }
    return currentScore;
};

const levelsReducer = () => {
    return [
        { name: 'normal', shellsNumber: 3, ball: 1 },
        { name: 'hard', shellsNumber: 4, ball: 1 },
        { name: 'extreme', shellsNumber: 5, ball: 2 }
    ];
};

const selectedLevelReducer = (selectedLevel = 'normal', action) => {
    if (action.type === 'LEVEL_SELECTED') {
        return action.payload;
    }
    return selectedLevel;
};

export default combineReducers({
                                   score: scoreReducer,
                                   level: levelsReducer,
                                   selectedLevel: selectedLevelReducer
                               });
