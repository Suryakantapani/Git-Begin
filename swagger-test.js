const swaggerAutogen = require('swagger-autogen')();
const doc = {
  info: {
    title: 'My API',
    description: 'Description of my API',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js']; // Path to your main file or routes


swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log("swagger file generated");

}).catch(err => {
  console.error("error generating the file", err);
  
});