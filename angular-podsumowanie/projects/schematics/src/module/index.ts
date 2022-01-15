import { classify, dasherize } from '@angular-devkit/core/src/utils/strings';
import {
  apply,
  branchAndMerge,
  chain,
  mergeWith,
  move,
  Rule,
  template,
  url,
} from '@angular-devkit/schematics';
import { normalize } from 'path';
import { schemaOptions } from './schema';

const stringUtils = { classify, dasherize };

export function module(_options: schemaOptions): Rule {
  const movePath = normalize(_options.path + '/');

  const templateSource = apply(url('./files/'), [
    template({ ...stringUtils, ..._options }),
    move(movePath),
  ]);

  return chain([branchAndMerge(chain([mergeWith(templateSource)]))]);
}
