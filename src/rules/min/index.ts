// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { isNumber, isValid, IValidFn } from '../../core';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

export const min = (errorMessage: string, min: number): IValidFn => (value, allValues) =>
	isValid(isNumber(value) && value >= min, errorMessage);
