import {getInfo, getInfoId, insertInfo, deleteInfo, updateInfo} from '../model/model.js'

//getInfo
const getInfoCon = async(requestAnimationFrame,res) => {
    res.json({info:await getInfo()})
};

//getInfo by id
const getInfoId