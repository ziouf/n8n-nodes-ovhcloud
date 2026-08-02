import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// Contact operations
import * as formGet from './resources/formGet.operation';
import * as formSendPost from './resources/formSendPost.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'contactOperation',
		type: 'options',
		noDataExpression: true,
		default: undefined,
		options: [
			{
				name: 'Get Form Characteristics',
				value: 'formGet',
				action: 'Retrieve form characteristics',
			},
			{
				name: 'Send Form',
				value: 'formSendPost',
				action: 'Send a form according to the characteristics in /contact/form',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('contactOperation', 0) as string;

	switch (operation) {
		case 'formGet':
			return formGet.execute.call(this);
		case 'formSendPost':
			return formSendPost.execute.call(this);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
