const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express')

const options = {
    definition : {
        openapi : '3.0.0' , 
        info : {
            title : 'Candidate Management API' , 
            version : '1.0.0' , 
            description : 'API documentation for managing candidates'
        },
        servers : [{
            url : 'http://localhost:5000'
        }] ,
    } , 
    apis : ['./routes/*.js'] ,
};

const swaggerSpec = swaggerJsDoc(options); 

function swaggerDocs(app , port) {
    app.use("/api-docs" , swaggerUi.serve , swaggerUi.setup(swaggerSpec)) ;
    console.log(`Swagger docs available at http://loclahost:${port}/api-docs`)
}

module.exports = {swaggerDocs}