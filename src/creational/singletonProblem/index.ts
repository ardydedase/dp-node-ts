import { Logger } from './Logger'
import { Payment } from './Payment'

const myLogger: Logger = new Logger()

myLogger.log('Starting the payment processor app.')
myLogger.log('log count: ' + myLogger.count.toString())

const myPayment: Payment = new Payment()
myPayment.process(3)

myLogger.log('log count: ' + myLogger.count.toString())
