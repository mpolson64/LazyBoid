import { next } from './Engine'
import { tuple } from '../util'

test('next on empty does not mutate', () => {
    const boid = {
        position: tuple(0, 0),
        velocity: tuple(0, 1),
    };

    const world = {
        boids: [
            boid,
            boid,
            boid,
            boid,
        ],
        lookAngle: 0,
        lookRadius: 0,
    };

    const nextWorld = next(world);

    // these should not be mutated through next() calls
    expect(nextWorld.boids.length).toEqual(world.boids.length);
    expect(nextWorld.lookAngle).toEqual(world.lookAngle);
    expect(nextWorld.lookRadius).toEqual(world.lookRadius);
});


test('next on single boid', () => {
    const world = {
        boids: [
            {
                position: tuple(0, 0),
                velocity: tuple(1, 0),
            }
        ],
        lookAngle: 0,
        lookRadius: 0,
    };

    const nextWorld = next(world);
    const nextNextWorld = next(nextWorld);

    expect(world.boids[0].velocity).toEqual([1, 0]);  // velocity should not change
    expect(world.boids[0].position).toEqual([0, 0]);  // should move 1 to the right

    expect(nextWorld.boids[0].velocity).toEqual([1, 0]);  // velocity should not change
    expect(nextWorld.boids[0].position).toEqual([1, 0]);  // should move 1 to the right

    expect(nextNextWorld.boids[0].velocity).toEqual([1, 0]);  // velocity should not change
    expect(nextNextWorld.boids[0].position).toEqual([2, 0]);  // should move 1 to the right
});