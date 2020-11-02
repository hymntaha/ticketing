import { Message } from "node-nats-streaming";
import { Listener } from "./base-listener";
import { Subjects } from "./subjects";
import { TicketCreatedEvents } from "./ticket-created-events";

export class TicketCreatedListener extends Listener<TicketCreatedEvents> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = "payments-service";

  onMessage(data: any, msg: Message) {
    console.log("event data!", data);

    msg.ack();
  }
}
