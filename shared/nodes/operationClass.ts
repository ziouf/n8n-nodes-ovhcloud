/**
 * Operation classification for per-item concurrency in {@link executeTemplate}.
 *
 * Operations are classified into three classes that map to different concurrency limits:
 *
 * - **`read`** — Safe to run concurrently at a higher rate (default: 3). Covers list/get/describe
 *   and other read-only API calls.
 * - **`write`** — Moderate concurrency (default: 1). Non-destructive mutations such as
 *   rename, update, add.
 * - **`destructive`** — Strictly sequential (default: 1). Irreversible or state-changing
 *   operations such as terminate, reboot, delete, reinstall.
 *
 * The classification is heuristic-based: the operation string is lowercased and checked
 * against keyword lists. Destructive keywords are checked first so they take precedence.
 * Unknown operations fall through to `'write'` (conservative default).
 */

/** An operation class that maps to a specific concurrency limit. */
export type OperationClass = 'read' | 'write' | 'destructive';

/** Default concurrency limits per operation class. */
export const DEFAULT_CLASS_CONCURRENCY: Record<OperationClass, number> = {
	read: 3,
	write: 1,
	destructive: 1,
};

/** Destructive keywords checked first (higher precedence). */
const DESTRUCTIVE_KEYWORDS = [
	'terminate',
	'reinstall',
	'reboot',
	'reset',
	'destroy',
	'delete',
	'stop',
	'poweroff',
	'remove',
] as const;

/** Read keywords checked second. */
const READ_KEYWORDS = [
	'list',
	'get',
	'describe',
	'available',
	'search',
	'statistics',
	'restorepoint',
	'restore',
	'model',
	'template',
	'distribution',
	'task',
	'option',
	'serviceinfos',
	'service',
	'image',
	'ip',
] as const;

/**
 * Classify an operation string into one of the three {@link OperationClass} values.
 *
 * @param operationValue - The raw operation value from the node parameter.
 * @returns `'destructive'`, `'read'`, or `'write'` (default for unknown).
 */
export function classifyOperation(operationValue: string): OperationClass {
	const op = operationValue.toLowerCase();

	// Check destructive first (higher precedence).
	for (const keyword of DESTRUCTIVE_KEYWORDS) {
		if (op.includes(keyword)) {
			return 'destructive';
		}
	}

	// Then check read keywords.
	for (const keyword of READ_KEYWORDS) {
		if (op.includes(keyword)) {
			return 'read';
		}
	}

	// Unknown → write (conservative).
	return 'write';
}
