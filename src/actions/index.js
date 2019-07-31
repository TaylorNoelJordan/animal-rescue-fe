export const getAnimals = animals => ({
    type: 'GET_ANIMALS',
    animals
});

export const hasErrored = errorMsg => ({
    type: 'HAS_ERRORED',
    errorMsg
});

export const loadComplete = () => ({
    type: 'LOAD_COMPLETE'
});