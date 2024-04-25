/**********************************************************************************************************************
 * Autor: Vitor Paes Kolle
 * Objetivo: Arquivo responsável pelo acesso ao banco de dados MySql, aqui faremos o CRUD na tabela de atores
 * Data: 25/04
 * Versão: 1.0 
 *********************************************************************************************************************/
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

const selectALlAtores = async function(){
    try {
        let sql = 'select * from tbl_ator'

        let rsAtor = await prisma.$queryRawUnsafe(sql)

        if(rsAtor){
            return rsAtor
        }else{
            return false
        }
    } catch (error) {
        return false
    }
}
const selectSexo = async function(id){
    try {
        let sql = `select * from tbl_sexoA where id = ${id}`

        let rsSexo = await prisma.$queryRawUnsafe(sql)

        if(rsSexo){
            return rsSexo
        }else{
            return false
        }
    } catch (error) {
        return false
    }
}

module.exports = {
    selectALlAtores,
    selectSexo
}