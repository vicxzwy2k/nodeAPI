import{Model, DataTypes} from 'sequelize'
import { sequelize } from '../instances/mysql'



export interface FraseInstances extends Model{
    id: number,
    autor: string,
    txt: string
}
export const Frases = sequelize.define<FraseInstances>("frases,",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true
    },
    autor:{
        type:DataTypes.STRING
    },
    txt:{
        type:DataTypes.STRING
    }
},{
    tableName:'frases',
    timestamps: false
})