import { Message } from "node-nats-streaming";
import { Listener } from "../../../common/src/events/base-listener";
import { Subjects } from "../../../common/src/events/subjects";
import { TicketCreatedEvents } from "../../../common/src/events/ticket-created-events";

export class TicketCreatedListener extends Listener<TicketCreatedEvents> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = "payments-service";

  onMessage(data: TicketCreatedEvents["data"], msg: Message) {
    console.log("event data!", data);

    console.log(data.id);
    console.log(data.title);
    console.log(data.price);

    msg.ack();
  }
}
