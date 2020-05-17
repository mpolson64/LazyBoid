import { next } from './Engine'

test('next on empty does not mutate', () => {
    const world = {
        boids: [],
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
    const position: [number, number] = [0, 0];
    const velocity: [number, number] = [1, 0];
    const boid = {
        position,
        velocity,
    };

    const world = {
        boids: [boid],
        lookAngle: 0,
        lookRadius: 0,
    };

    const nextWorld = next(world);
    const nextNextWorld = next(nextWorld);
    const nextBoid = nextWorld.boids[0];
    const nextNextBoid = nextNextWorld.boids[0];

    expect(boid.velocity).toEqual([1, 0]);  // velocity should not change
    expect(boid.position).toEqual([0, 0]);  // should move 1 to the right

    expect(nextBoid.velocity).toEqual([1, 0]);  // velocity should not change
    expect(nextBoid.position).toEqual([1, 0]);  // should move 1 to the right

    expect(nextNextBoid.velocity).toEqual([1, 0]);  // velocity should not change
    expect(nextNextBoid.position).toEqual([2, 0]);  // should move 1 to the right
});