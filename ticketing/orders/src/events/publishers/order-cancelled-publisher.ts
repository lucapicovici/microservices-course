import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from '@iceydc-tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
