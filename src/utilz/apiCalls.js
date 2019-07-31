export const fetchAnimals = async () => {
    try {
        const url = 'http://localhost:3001/api/v1/rescue-animals';
        const animals = await fetch(url);
        const response = await animals.json()
        return response
    } catch (error) {
        throw new Error(error.message)
    }
}

export const fetchDonations = async () => {
    try {
        const url = 'http://localhost:3001/api/v1/donations';
        const donations = await fetch(url);
        const response = await donations.json();
        return response

    } catch (error) {
        throw new Error(error.message)
    }
}