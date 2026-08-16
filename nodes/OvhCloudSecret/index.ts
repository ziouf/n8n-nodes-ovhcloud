import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// Secret operations
import * as retrievePost from './resources/retrievePost.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'secretOperation',
		type: 'options',
		noDataExpression: true,
		default: 'retrievePost',
		options: [
			{
				name: 'Retrieve Secret',
				value: 'retrievePost',
				action: 'Retrieve a secret sent by email',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions, itemIndex?: number): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('secretOperation', 0) as string;

	switch (operation) {
		case 'retrievePost':
			return retrievePost.execute.call(this, itemIndex ?? 0);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
