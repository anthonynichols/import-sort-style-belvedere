import 'mocha';

import {assert} from 'chai';
import {applyChanges, sortImports} from 'import-sort';
import * as parser from 'import-sort-parser-typescript';
import {IStyle, IStyleAPI, IStyleItem} from 'import-sort-style';

import BELVEDERE_STYLE from '../src';

describe('sortImports (typescript, BELVEDERE_STYLE)', () => {
  it('should sort external modules', async () => {
    const {code, expected} = await import('./fixtures/external-modules');
    const result = sortImports(code, parser, BELVEDERE_STYLE);
    const actual = result.code;
    const changes = result.changes;

    assert.equal(actual, expected);
    assert.equal(applyChanges(code, changes), expected);
  });

  it('should sort named external modules', async () => {
    const {code, expected} = await import('./fixtures/named-external-modules');
    const result = sortImports(code, parser, BELVEDERE_STYLE);
    const actual = result.code;
    const changes = result.changes;

    assert.equal(actual, expected);
    assert.equal(applyChanges(code, changes), expected);
  });

  it('should sort local modules', async () => {
    const {code, expected} = await import('./fixtures/local-modules');
    const result = sortImports(code, parser, BELVEDERE_STYLE);
    const actual = result.code;
    const changes = result.changes;

    assert.equal(actual, expected);
    assert.equal(applyChanges(code, changes), expected);
  });

  it('should sort named local modules', async () => {
    const {code, codeUnderscore, expected, expectedUnderscore} = await import('./fixtures/named-local-modules');
    const result1 = sortImports(code, parser, BELVEDERE_STYLE);
    const result2 = sortImports(codeUnderscore, parser, BELVEDERE_STYLE);
    const actual1 = result1.code;
    const actual2 = result2.code;
    const changes1 = result1.changes;
    const changes2 = result2.changes;

    assert.equal(actual1, expected);
    assert.equal(applyChanges(code, changes1), expected);
    assert.equal(actual2, expectedUnderscore);
    assert.equal(applyChanges(code, changes2), expectedUnderscore);

  });

  it('should sort relative modules', async () => {
    const {code, expected} = await import('./fixtures/relative-modules');
    const result = sortImports(code, parser, BELVEDERE_STYLE);
    const actual = result.code;
    const changes = result.changes;

    assert.equal(actual, expected);
    assert.equal(applyChanges(code, changes), expected);
  });

  it('should sort named relative modules', async () => {
    const {code, expected} = await import('./fixtures/named-relative-modules');
    const result = sortImports(code, parser, BELVEDERE_STYLE);
    const actual = result.code;
    const changes = result.changes;

    assert.equal(actual, expected);
    assert.equal(applyChanges(code, changes), expected);
  });

  describe('all of the things!', () => {
    it('should sort all of the things with the ~ prefix', async () => {
      const {codePrefix1: code, expectedPrefix1: expected} = await import('./fixtures/all-of-the-things');
      const result = sortImports(code, parser, BELVEDERE_STYLE);
      const actual = result.code;
      const changes = result.changes;

      assert.equal(actual, expected);
      assert.equal(applyChanges(code, changes), expected);
    });

    it('should sort all of the things with the _ prefix', async () => {
      const {codePrefix2: code, expectedPrefix2: expected} = await import('./fixtures/all-of-the-things');
      const result = sortImports(code, parser, BELVEDERE_STYLE);
      const actual = result.code;
      const changes = result.changes;

      assert.equal(actual, expected);
      assert.equal(applyChanges(code, changes), expected);
    });

    it('should be sure stylesheets are being sorted correctly', async () => {
      const {codePrefix3: code, expectedPrefix3: expected} = await import('./fixtures/all-of-the-things');
      const result = sortImports(code, parser, BELVEDERE_STYLE);
      const actual = result.code;
      const changes = result.changes;

      assert.equal(actual, expected);
      assert.equal(applyChanges(code, changes), expected);
    });
  })

  it('should sort the rando modules', async () => {
    const {code, expected} = await import('./fixtures/rando-test');
    const result1 = sortImports(code, parser, BELVEDERE_STYLE);
    const actual1 = result1.code;
    const changes1 = result1.changes;

    assert.equal(actual1, expected);
    assert.equal(applyChanges(code, changes1), expected);
  });
});
