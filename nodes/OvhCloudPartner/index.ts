import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// Partner operations
import * as get from './resources/get.operation';
import * as registerPost from './resources/registerPost.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'partnerOperation',
		type: 'options',
		noDataExpression: true,
		default: undefined,
		options: [
			{
				name: 'Get Partner Status',
				value: 'get',
				action: 'Retrieve the current status of a partner registration',
			},
			{
				name: 'Register as Partner',
				value: 'registerPost',
				action: 'Register an organization as a partner in the OVHcloud Partner Program',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('partnerOperation', 0) as string;

	switch (operation) {
		case 'get':
			return get.execute.call(this);
		case 'registerPost':
			return registerPost.execute.call(this);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
