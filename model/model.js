import {pool} from "../config/config.js"

//get operation
const getInfo = async () => {
    let [data] = await pool.query("SELECT* FROM `schema`.`table`")
    return data
};

//get by id
const getInfoId = async (id) => {
    let [data] = await pool.query("SELECT * FROM `schema`.`table` WHERE `schema`.`table`.`id` = ?",[id])
    return data
};

//insert info
const insertInfo = async (UNKNOWN1,UNKNOWN2) => {
    await pool.query("INSERT INTO `schema`.`table` (`UNKNOW1`,`UNKNOWN2) VALUES (?,?)",[UNKNOWN1,UNKNOWN2])
};

//delete info by id
const deleteInfo = async(id)=>{
    await pool.query('DELETE FROM `schema`.`table` WHERE (`id` = ?)',[id])
};

//update by id
const updateInfo = async(UNKNOWN1,UNKNOWN2,id)=>{
    await pool.query('UPDATE `schema`.`table` SET `UNKNOWN1` = ?, `UNKNOWN2` = ?,  WHERE (`id` = ?)',[UNKNOWN1,UNKNOWN2.id])
}

export { getInfo, getInfoId, insertInfo, deleteInfo, updateInfo };