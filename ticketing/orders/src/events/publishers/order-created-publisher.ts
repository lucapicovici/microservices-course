import { Publisher, OrderCreatedEvent, Subjects } from '@iceydc-tickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
