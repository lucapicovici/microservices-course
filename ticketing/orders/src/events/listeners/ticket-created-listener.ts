import { Message } from 'node-nats-streaming';
import { Listener, Subjects, TicketCreatedEvent } from '@iceydc-tickets/common';
import { Ticket } from '../../models/ticket';
import { queueGroupName } from './queue-group-name';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: TicketCreatedEvent['data'], msg: Message) {
    // Upon receiving 'ticket:created' event, create the same ticket
    // on Orders service, but only with the minimum required fields
    // for the Orders service to work correctly (data replication)
    const { id, title, price } = data;

    const ticket = Ticket.build({ id, title, price });
    await ticket.save();

    msg.ack();
  }
}
