// index.ts

import { loggerSingleton, Logger } from './Logger'
import { Payment } from './Payment'

const myLogger: Logger = loggerSingleton

myLogger.log('Starting the payment processor app.')
myLogger.log(myLogger.count.toString())

const myPayment: Payment = new Payment()
myPayment.process(3)

myLogger.log(myLogger.count.toString())
