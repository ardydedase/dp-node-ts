import { Logger } from './Logger'
import { Payment } from './Payment'

const myLogger: Logger = Logger.getInstance()

myLogger.log('hello world')
myLogger.log(myLogger.count.toString())

const myPayment: Payment = new Payment()
myPayment.process(3)

myLogger.log(myLogger.count.toString())
