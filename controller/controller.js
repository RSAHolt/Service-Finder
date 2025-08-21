import {getInfo, getInfoId, insertInfo, deleteInfo, updateInfo} from '../model/modelFirebase.js'

//getInfo
const getInfoCon = async(req,res) => {
    res.json({info:await getInfo()})
};

//getInfo by id
const getInfoId