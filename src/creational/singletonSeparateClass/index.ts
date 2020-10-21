import { Logger, Singleton } from './Logger'
import { Payment } from './Payment'

const myLogger: Logger = Singleton.getInstance()

myLogger.log('Starting the payment processor app.')
console.log('Log count: ' + myLogger.count.toString())

const myPayment: Payment = new Payment()
myPayment.process(3)

console.log('Log count: ' + myLogger.count.toString())
