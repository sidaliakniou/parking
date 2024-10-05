import { toSlug } from '../utils/toSlug';
import { describe, it, expect } from 'bun:test';

describe('toSlug', () => {
  it('devrait convertir une chaîne en slug', () => {
    expect(toSlug('Je suis un exemple')).toBe('je-suis-un-exemple');
  });

  it('devrait gérer les accents correctement', () => {
    expect(toSlug('àççéñtüé')).toBe('accentue');
  });

  it('devrait remplacer les espaces par des tirets', () => {
    expect(toSlug('Hello World')).toBe('hello-world');
  });

  it('devrait ignorer les caractères spéciaux', () => {
    expect(toSlug('Hello@# World!')).toBe('hello-world');
  });

  it('devrait gérer une chaîne vide', () => {
    expect(toSlug('')).toBe('');
  });
});
