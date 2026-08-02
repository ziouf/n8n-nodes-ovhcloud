import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// Startup operations
import * as get from './resources/get.operation';
import * as registerPost from './resources/registerPost.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'startupOperation',
		type: 'options',
		noDataExpression: true,
		default: 'get',
		options: [
			{
				name: 'Get Startup Status',
				value: 'get',
				action: 'Get the status of the registered startup',
			},
			{
				name: 'Register Startup',
				value: 'registerPost',
				action: 'Register a startup',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('startupOperation', 0) as string;

	switch (operation) {
		case 'get':
			return get.execute.call(this);
		case 'registerPost':
			return registerPost.execute.call(this);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
