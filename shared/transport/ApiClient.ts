import type { IExecuteFunctions, ILoadOptionsFunctions } from 'n8n-workflow';
export { ApiClient } from './ApiClientImpl';
import { ApiClient } from './ApiClientImpl';

// Use a regular Map instead of WeakMap for compatibility with the test environment.
// Keys are the n8n execution context objects (this).
const clientCache = new Map<object, ApiClient>();

/**
 * Factory mémoïsée : retourne un unique ApiClient par contexte d'exécution.
 *
 * Utilise un Map keyed par `this` (IExecuteFunctions | ILoadOptionsFunctions)
 * pour garantir qu'un seul client est instancié par exécution n8n, évitant
 * les appels redondants à getCredentials() et le gaspillage de mémoire.
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

/**
 * Supprime tous les clients mémoïsés. Utile dans les tests pour forcer
 * la réinitialisation de l'état entre chaque test.
 */
export function clearClientCache(): void {
	clientCache.clear();
}
