import type { INodeProperties, IDisplayOptions } from 'n8n-workflow';

/**
 * Returns a warning notice property for destructive or irreversible operations.
 *
 * When included in a resource operation's `description()` function as the first
 * element of the returned array, this renders a yellow warning box in the n8n
 * UI to alert users that the operation is destructive (e.g. deletes data,
 * reboots a server, or terminates a service).
 *
 * Usage:
 * ```ts
 * export function description(displayOptions: IDisplayOptions): INodeProperties[] {
 *   return [
 *     destructiveActionNotice('This will permanently delete the service.', displayOptions),
 *     // ... other properties
 *   ];
 * }
 * ```
 *
 * @param message  — Short warning message shown in the notice (prefix with ⚠️ manually if desired).
 * @param displayOptions — The displayOptions object passed to `description()`.
 * @returns An n8n `notice` property.
 */
export function destructiveActionNotice(
	message: string,
	displayOptions: IDisplayOptions,
): INodeProperties {
	return {
		displayName: `⚠️ ${message}`,
		name: 'destructiveActionNotice',
		type: 'notice',
		default: '',
		noDataExpression: true,
		displayOptions,
	};
}
