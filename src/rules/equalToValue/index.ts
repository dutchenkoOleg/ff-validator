// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { isValid, IValidFn } from '../../core';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

export const equalToValue = (errorMessage: string, compareValue: any): IValidFn => (
	value,
	allValues
) => isValid(value === compareValue, errorMessage);