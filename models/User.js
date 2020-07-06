import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: [true, 'Please provide a name for this pet.'],
        maxlength: [20, 'Name cannot be more than 60 characters'],
    },
    Pass: {
        /* The owner of this pet */

        type: String,
        required: [true, "Please provide the pet owner's name"],
        maxlength: [20, "Owner's Name cannot be more than 60 characters"],
    },
    Type: {
        /* The species of your pet */

        type: Number,
    },
    Active: {
        /* Pet's age, if applicable */

        type: Number,
    },
    Ad: {
        /* Boolean poddy_trained value, if applicable */
        type: String,
        required: [true, 'Please provide a name for this pet.'],
        maxlength: [20, 'Name cannot be more than 60 characters'],
    },
    Soyad: {
        /* List of dietary needs, if applicale */

        type: String,
        required: [true, 'Please provide a name for this pet.'],
        maxlength: [20, 'Name cannot be more than 60 characters'],
    },

})

export default mongoose.models.Users || mongoose.model('Users', UserSchema)
