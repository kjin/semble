/// <reference path="./types.d.ts" />

import * as stringLength from 'string-length';

/**
 * Given an 2D array of strings, assemble the strings so that each string is
 * contained within a cell. The inner dimension represents columns, while the
 * outer dimension represents rows. Columns and rows will automatically be
 * padded for alignment.
 * @param args A 2D array of strings.
 */
export function semble(args: string[][]): string {
  const delimitedArgs = args.map(a => a.map(b => b.split('\n')));
  const columnWidths: number[] = [];
  const rowHeights: number[] = [];
  for (let y = 0; y < delimitedArgs.length; y++) {
    let tallestEntry = 0;
    for (let x = 0; x < delimitedArgs[y].length; x++) {
      if (columnWidths.length === x) {
        columnWidths.push(0);
      }
      const longestEntry = delimitedArgs[y][x].reduce((acc, line) => Math.max(acc, stringLength(line)), 0);
      if (columnWidths[x] < longestEntry) {
        columnWidths[x] = longestEntry;
      }
      tallestEntry = Math.max(tallestEntry, delimitedArgs[y][x].length);
    }
    rowHeights.push(tallestEntry);
  }
  let result = '';
  for (let y = 0; y < delimitedArgs.length; y++) {
    for (let l = 0; l < rowHeights[y]; l++) {
      for (let x = 0; x < delimitedArgs[y].length; x++) {
        result += (delimitedArgs[y][x][l] || '') + ' '.repeat(columnWidths[x] - stringLength(delimitedArgs[y][x][l] || '')) + ' ';
      }
      result = result.trim() + '\n';
    }
    result = result.trim() + '\n\n';
  }
  return result.trim();
}
