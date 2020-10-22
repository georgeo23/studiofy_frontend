const loadUserData = (data) => ({
    type: "LOAD_USERDATA",
    payload: data,
})
const loadCovers = (data) => ({
    type: "LOAD_COVERS",
    payload: data,
})
export const getUserData = () => {
    return async (dispatch) => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    "Content-type": "application/json",
                    Authorization: `JWT ${localStorage.getItem("token")}`,
                },
            }
            const resp = await fetch('/core/current_user/', options)
            const userData = await resp.json();
            dispatch(loadUserData(userData))
        } catch (err) {
            throw new Error(err.message)
        }
    }
}
export const getCovers = () => {
    return async (dispatch) => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    "Content-type": "application/json",
                    Authorization: `JWT ${localStorage.getItem("token")}`,
                },
            }
            const resp = await fetch('/core/covers/', options)
            const coverData = await resp.json();
            dispatch(loadCovers(coverData))
        } catch (err) {
            throw new Error(err.message)
        }
    }
}