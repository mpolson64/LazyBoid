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