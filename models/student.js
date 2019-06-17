const mongoose = require(`mongoose`);
const StudentSchema = new mongoose.Schema({
	firstname:{
		type: String,
		required: true
	},
	lastname:{
		type: String,
		required: true
	},
	status:{
		type: String,
    enum: ['FULL-TIME', 'PART-TIME'],
    default: 'PART-TIME'
	}
},{
  timestamps: true
});


module.exports = mongoose.model('student', StudentSchema);