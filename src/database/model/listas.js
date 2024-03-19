import mongoose, {Schema} from "mongoose";

const listasSchema = new Schema({
    contenido:{
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        maxLength: 60
    }
})

const Listas = mongoose.model("producto", listasSchema);

export default Listas;