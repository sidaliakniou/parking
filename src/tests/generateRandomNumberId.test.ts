import { generateRandomNumberId } from '../utils/generateRandomNumberId';
import { describe, it, expect } from 'bun:test';

describe('generateRandomNumberId', () => {
  it('devrait générer un nombre aléatoire de 6 chiffres', () => {
    const id = generateRandomNumberId();
    expect(id).toBeGreaterThanOrEqual(100000);
    expect(id).toBeLessThanOrEqual(999999);
  });

  it('devrait générer un entier', () => {
    const id = generateRandomNumberId();
    expect(Number.isInteger(id)).toBe(true);
  });

  it('devrait générer des nombres différents à chaque appel', () => {
    const id1 = generateRandomNumberId();
    const id2 = generateRandomNumberId();
    expect(id1).not.toBe(id2);
  });
});
