import { Message } from 'node-nats-streaming';
import { Listener } from '@iceydc-tickets/common';
import { OrderCreatedEvent } from '@iceydc-tickets/common/build/events/order-created-event';
import { Subjects } from '@iceydc-tickets/common/build/events/subjects';
import { queueGroupName } from './queue-group-name';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent['data'], msg: Message) {}
}
