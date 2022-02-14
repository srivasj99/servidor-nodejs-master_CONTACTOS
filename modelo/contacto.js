const mongoose = require('mongoose');
const ContactoSchema = mongoose.Schema(
{
    nombre: {
        type:String,
        required: [true,'El nombre es obligatorio']
    },
    telefono: {
        type:String,
        required: [true,'El teléfono es obligatorio']
    },
    imagen: {
        type:String
    }
}
)
//sobreescribimos un método del Schema para modificar el objeto que exporta
ContactoSchema.methods.toJSON = function (){
    const {_id, ...contacto} = this.toObject();
    contacto.id = _id;
    return contacto;
}

let Contacto = mongoose.model('Contacto',ContactoSchema);
module.exports = Contacto;