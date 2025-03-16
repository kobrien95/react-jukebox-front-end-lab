

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;


async function index(){
    try {
        const response = await fetch(BASE_URL)
        const data = await response.json()
        return data

    } catch(err) {
        console.log(err)
    }
}

async function create(formData){

    try {
        const response = await fetch(BASE_URL, {
            method: 'Post',
            headers: {
                'Content-type': 'application/json'
            },

            body: JSON.stringify(formData)
        })

        const data = await response.json()
        return data

    }   catch(err){
        console.log(err)
    }
}

async function deleteTrack(trackId){
    try {

        const response = await fetch(BASE_URL + `/${trackId}`, {
            method: 'DELETE'
        })
        
        const data = await response.json()
        return data
        
    } catch(err){
        console.log(err)
    }
}

export { index, create, deleteTrack }