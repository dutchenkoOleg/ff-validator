// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { isString, isValid, IValidFn } from '../../core';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

export const string = (errorMessage: string): IValidFn => (value, allValues) =>
	isValid(isString(value), errorMessage);
