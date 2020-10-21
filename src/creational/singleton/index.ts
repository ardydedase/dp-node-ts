import { Singleton, Logger } from './Logger'
import { Payment } from './Payment'

const myLogger: Logger = Singleton.getInstance()

myLogger.log('Starting the payment processor app.')
myLogger.log(myLogger.count.toString())

const myPayment: Payment = new Payment()
myPayment.process(3)

myLogger.log(myLogger.count.toString())
