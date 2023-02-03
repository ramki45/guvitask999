
const router = require("express").Router();
const {Data, validate} = require("../models/userdata");

router.get('/', async (req, res) => {
  try {
    const contacts = await Data.find({})
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post("/",async (req, res) => {
   
    const { age, gender, dob, mobile } = req.body;
	// const { error } = validate(req.body);

    try {
      const newData = new Data({
        age,
        gender,
        dob,
        mobile
      });

      const contact = await newData.save();

      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  
  





module.exports = router;