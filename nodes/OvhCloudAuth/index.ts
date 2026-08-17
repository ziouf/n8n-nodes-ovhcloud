import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as executeCredentialPost } from './resources/credentialPost.operation';
import { execute as executeCurrentCredentialGet } from './resources/currentCredentialGet.operation';
import { execute as executeDetailsGet } from './resources/detailsGet.operation';
import { execute as executeLogoutPost } from './resources/logoutPost.operation';
import { execute as executeTimeGet } from './resources/timeGet.operation';
import { execute as executeTokenPost } from './resources/tokenPost.operation';

// Les opérations Auth n'exposent historiquement aucune sous-propriété dans
// l'UI : on conserve ce comportement exact (description vide).
const noProps = (): never[] => [];

// Auth conserve volontairement l'absence de défaut du dropdown d'origine.
const { description, execute } = createOperationDispatcher(
	'authOperation',
	'auth',
	[
		{
			name: 'Get Authentication Details',
			value: 'detailsGet',
			action: 'Get details on the current authentication (identity and permissions)',
			execute: executeDetailsGet,
			description: noProps,
		},
		{
			name: 'Get Current Credential',
			value: 'currentCredentialGet',
			action: 'Get details of the current credential',
			execute: executeCurrentCredentialGet,
			description: noProps,
		},
		{
			name: 'Get Server Time',
			value: 'timeGet',
			action: 'Get the current OVH server time as UNIX timestamp',
			execute: executeTimeGet,
			description: noProps,
		},
		{
			name: 'Logout',
			value: 'logoutPost',
			action: 'Expire the current credential (disconnect)',
			execute: executeLogoutPost,
			description: noProps,
		},
		{
			name: 'Request Credential',
			value: 'credentialPost',
			action: 'Request a new credential for your application',
			execute: executeCredentialPost,
			description: noProps,
		},
		{
			name: 'Request Token',
			value: 'tokenPost',
			action: 'Generate a unique one-time token (chatbot auth)',
			execute: executeTokenPost,
			description: noProps,
		},
	],
	{ noDefault: true },
);

export { description, execute };
