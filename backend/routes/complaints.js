const router = require('express').Router();
let Complaint = require('../models/complaints.model');

router.route('/').get((req, res) => {
    Complaint.find()
        .then(users => res.json(complaints))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const complaint = req.body.complaint;
    const date = Date.parse(req.body.date);

    const newComplaint = new Complaint({
        username,
        complaint,
        date
    });

    newComplaint.save()
    .then(() => res.json('Complaint added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;