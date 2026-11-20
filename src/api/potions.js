const API_URL="/api/potions";

const getPotions= async ()=>{
    const response=await fetch(API_URL)
    return response.json();
}
const createPotions=async ()=>{
    const response=await fetch(API_URL,{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(potion)
    });
    return response.json();
}
const deletePotion=async (id)=>{
    const response=await fetch(API_URL+"/"+id,{
        method:"DELETE",
    })
    return response.json();
}
const updatePotion=async(id,name,effect,isDangerous)=>{
    const response=await fetch(API_URL+"/"+id, {
        method: "PUT"
    })
    return response.json();
}

export {createPotions, getPotions, deletePotion, updatePotion}