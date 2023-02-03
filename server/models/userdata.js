const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");



const userDataSchema = new mongoose.Schema({
	
	age: { type: String, required: true },
	gender: { type: String, required: true },
	dob: { type: String, required: true },
    mobile: {type: String, required:true}
});


const Data = mongoose.model("userData", userDataSchema);


const validate = (data) => {
	const schema = Joi.object({
		
		age: Joi.number().required().label("Age"),
		gender: Joi.string().required().label("Gender"),
		dob: Joi.string().required().label("Dob"),
        mobile:Joi.number().required().label("Mobile")
	});
	return schema.validate(data);
};

module.exports  = { Data, validate};