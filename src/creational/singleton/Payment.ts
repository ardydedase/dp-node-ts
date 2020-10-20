import { Singleton, Logger } from './Logger'

export class Payment {
    private paymentLogger: Logger = Singleton.getInstance()
    constructor() {
        this.paymentLogger.log('payment instance constructed')
    }

    public process(amount: number) {
        this.paymentLogger.log('processing payment: ' + amount.toString())
    }
}