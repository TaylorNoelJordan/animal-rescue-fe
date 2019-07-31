export const fetchAnimals = async () => {
    try {
        const url = 'http://localhost:3001/api/v1/rescue-animals';
        const animals = await fetch(url);
        const response = await animals.json()
        console.log(response)
    } catch (error) {
        throw new Error(error.message)
    }
}