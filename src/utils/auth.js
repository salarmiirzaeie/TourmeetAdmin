export const authenticated=()=>{
    const token=localStorage.getItem("token")
    if (token) {
        return true
    } else {
       return false 
    }
}