const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const complaintSchema = new Schema({
    username: {
        required: true,
        type: String
    },
    complaint: {
        type: String,
        required: true
    },
    date: {
        required: true,
        type: Date
    }
}, {
    timestamps: true
});

const Complaint = mongoose.model("Complaint", complaintSchema);


// would it be the same to do 'export default User' here?
module.exports = Complaint;