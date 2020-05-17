import * as util from './util'
import { tuple } from '../util'


test('average position', () => {
    const first = {
        position: tuple(2, 7),
        velocity: tuple(3, 0),
    };

    const second = {
        position: tuple(1, 8),
        velocity: tuple(1, 32),
    };

    const third = {
        position: tuple(6, 4),
        velocity: tuple(22, 1),
    };

    // average identity
    expect(util.averagePosition([first])).toEqual(first.position);
    expect(util.averagePosition([second])).toEqual(second.position);
    expect(util.averagePosition([third])).toEqual(third.position);

    // more complex averages
    expect(util.averagePosition([first, second])).toEqual([1.5, 7.5]);
    expect(util.averagePosition([first, second, third])).toEqual([3, 19 / 3]);
});

test('average velocity', () => {
    const first = {
        position: tuple(2, 7),
        velocity: tuple(3, 0),
    };

    const second = {
        position: tuple(1, 8),
        velocity: tuple(1, 32),
    };

    const third = {
        position: tuple(6, 4),
        velocity: tuple(22, 1),
    };

    // average identity
    expect(util.averageVelocity([first])).toEqual(first.velocity);
    expect(util.averageVelocity([second])).toEqual(second.velocity);
    expect(util.averageVelocity([third])).toEqual(third.velocity);

    // more complex averages
    expect(util.averageVelocity([first, second])).toEqual([2, 16]);
    expect(util.averageVelocity([first, second, third])).toEqual([26 / 3, 11]);
});

test('turn towards vector', () => {
    const a = tuple(1, 3);
    const b = tuple(2, 7);

    const turned = util.turnTowardsVector(a, b);

    expect(Math.sqrt(turned[0] ** 2 + turned[1] ** 2)).toBeCloseTo(Math.sqrt(b[0] ** 2 + b[1] ** 2));   // turning should not change magnitude

    // angle between a and turned should be less than that between a and b
    const angleBetween = (a: [number, number], b: [number, number]) => Math.atan2(b[1], b[0]) - Math.atan2(a[1], a[0]);
    expect(angleBetween(a, turned)).toBeLessThanOrEqual(angleBetween(a, b));
});