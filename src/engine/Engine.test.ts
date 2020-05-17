import { next } from './Engine'

test('next', () => {
    const position: [number, number] = [0, 0];
    const velocity: [number, number] = [0, 0];

    const world = {
        boids: [
            {
                position,
                velocity,
            }
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