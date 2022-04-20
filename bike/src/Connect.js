import axios from "axios";

const roshan="http://localhost:8080";

export const attach = async(obj)=>{
 const hai= await axios.post(`${roshan}/add`, obj)
 return hai;

}

export const list = async()=>{
    const li = await axios.get(`${roshan}/home`)
    return li;
}

export const gather=async(pos)=>{
    const re= await axios.get(`${roshan}/read/${pos}`)
    return re;
}

export const update=async(obj)=>{
    const up= await axios.put(`${roshan}/update`,obj)
    return up;
}

export const erase= async(ak)=>{
    const de= await axios.delete(`${roshan}/new/${ak}`)
    return de;
}



