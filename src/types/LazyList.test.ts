import { take } from './LazyList'

test('take', () => {
    const nats = {
        head: 0,
        next: (n: number) => n + 1,
    };

    expect(nats.head).toEqual(0);
    expect(take(4, nats)).toEqual([0, 1, 2, 3]);

    expect(nats.head).toEqual(0);   // take should not mutate the list
})