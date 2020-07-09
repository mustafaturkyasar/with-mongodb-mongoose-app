import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
    UserId: {
        type: String,
        required: [true, 'Please provide a name for this pet.'],

    },
    DosyaAd: {
        /* The owner of this pet */

        type: String,
        required: [true, "Please provide the pet owner's name"],

    },
    Path: {
        /* The species of your pet */
        type: String,
        required: [true, "Please provide the pet owner's name"],
    },
    Aktif: {
        /* Pet's age, if applicable */

        type: Number,
    },
    Tarih: {
        /* Boolean poddy_trained value, if applicable */
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now
    },


})

export default mongoose.models.Files || mongoose.model('Files', UserSchema)
