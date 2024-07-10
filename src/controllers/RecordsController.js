const Controller = require('./Controller.js');
const RecordServices = require('../services/RecordServices.js')

const recordServices = new RecordServices();

class RecordsController extends Controller{
    constructor(){
        super(recordServices);
    }
}

module.exports = RecordsController;