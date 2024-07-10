const Controller = require('./Controller.js');
const ContractServices = require('../services/ContractServices.js')

const contractServices = new ContractServices();

class ContractsController extends Controller{
    constructor(){
        super(contractServices);
    }
}

module.exports = ContractsController;