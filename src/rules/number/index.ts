// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { isNumber, isValid, IValidFn } from '../../core';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

export const number = (errorMessage: string): IValidFn => (value, allValues) =>
	isValid(isNumber(value), errorMessage);