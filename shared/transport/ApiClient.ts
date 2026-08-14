import type { IExecuteFunctions, ILoadOptionsFunctions } from 'n8n-workflow';
export { ApiClient } from './ApiClientImpl';
import { ApiClient } from './ApiClientImpl';

// WeakMap auto-GCs with the execution context — no manual cache clearing needed.
const clientCache = new WeakMap<object, ApiClient>();

/**
 * Factory mémoïsée : retourne un unique ApiClient par contexte d'exécution.
 *
 * Utilise un WeakMap keyed par `this` (IExecuteFunctions | ILoadOptionsFunctions)
 * pour garantir qu'un seul client est instancié par exécution n8n, évitant
 * les appels redondants à getCredentials() et le gaspillage de mémoire.
 * Le WeakMap garantit la libération automatique du client quand le contexte
 * n8n est détruit (fin d'exécution).
 *
 * @param fn - Contexte n8n (execute ou load options)
 * @returns L'ApiClient mémoïsé pour ce contexte
 */
export function getClient(fn: IExecuteFunctions | ILoadOptionsFunctions): ApiClient {
	if (!clientCache.has(fn)) {
		clientCache.set(fn, new ApiClient(fn));
	}
	return clientCache.get(fn)!;
}
