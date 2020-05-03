// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { isValid, IValidFn } from '../../core';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

export const noSpacesAtEnd = (errorMessage: string): IValidFn => (value, allValues) =>
	isValid(!/\s|\t|(\r)?\n$/.test(value), errorMessage);