import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// Supply operations
import * as mondialRelayPost from './resources/mondialRelayPost.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'supplyOperation',
		type: 'options',
		noDataExpression: true,
		default: 'mondialRelayPost',
		options: [
			{
				name: 'Find Nearest MondialRelay Points',
				value: 'mondialRelayPost',
				action: 'Find the 10 nearest MondialRelay points from an address or city',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('supplyOperation', 0) as string;

	switch (operation) {
		case 'mondialRelayPost':
			return mondialRelayPost.execute.call(this);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
