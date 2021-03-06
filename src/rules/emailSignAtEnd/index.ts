// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { isValid, IValidFn } from '../../core';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

export const emailSignAtEnd = (errorMessage: string): IValidFn => (value, allValues) =>
	isValid(!/@$/.test(value), errorMessage);
