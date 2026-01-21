import {ConflictException, Injectable} from "@nestjs/common";


@Injectable()
export class PaymentService {
    constructor()
    {}

    async makePayment(amountToAdd:number): Promise<boolean> {
        if(amountToAdd == 0 ||isNaN(amountToAdd))
            throw new ConflictException("Amount must be a positive number");

        // faire le paiement
        let paymentIsAuthorized = true

        if(paymentIsAuthorized)
            return true
        else
            throw new ConflictException('Payment was not authorized');
    }
}