import {Controller} from "@nestjs/common";
import {PaymentService} from "../Services/payment.service";
import {MessagePattern, Payload} from "@nestjs/microservices";
import {RpcValidationPipe} from "../Utils/rpc-validation";
import {WalletEventType} from "cdm-models";

@Controller('payment')
export class PaymentController {
    constructor(private paymentService: PaymentService) {}

    @MessagePattern({cmd: WalletEventType.ADD_MONEY})
    async makePayment(@Payload(new RpcValidationPipe()) payload: { amountToAdd: number }){
        return await this.paymentService.makePayment(payload.amountToAdd);
    }
}