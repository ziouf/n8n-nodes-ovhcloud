import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as formGetExecute } from './resources/formGet.operation';
import { execute as formSendPostExecute } from './resources/formSendPost.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'contactOperation',
	'contact',
	[
	{
		name: 'Get Form Characteristics',
		value: 'formGet',
		action: 'Retrieve form characteristics',
		execute: formGetExecute,
		description: noProps,
	},
	{
		name: 'Send Form',
		value: 'formSendPost',
		action: 'Send a form according to the characteristics in /contact/form',
		execute: formSendPostExecute,
		description: noProps,
	},
	],
	{ noDefault: true },

);

export { description, execute };
