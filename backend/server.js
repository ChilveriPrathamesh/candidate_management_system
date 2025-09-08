const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const candidateRoutes = require('./routes/candidateRoutes');
const{swaggerUi , swaggerSpec, swaggerDocs} = require('./swagger');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Swagger UI setup 

// app.use('/api-docs' , swaggerUi.serve , swaggerUi.setup(swaggerSpec))
swaggerDocs(app , process.env.PORT || 5000) ;

//Routes
app.use('/api/candidates' , candidateRoutes)

//Default route
app.get('/' , (req,res)=> {
    res.send('Candidate Management System API is running')
})
const PORT =  process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);

})

module.exports = app ;