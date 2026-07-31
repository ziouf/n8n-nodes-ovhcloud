import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// MX Plan operations
import { execute as executeMxPlanListGet } from './resources/mxplan/mxPlanListGet.operation';
import { execute as executeMxPlanGetGet } from './resources/mxplan/mxPlanGetGet.operation';
import { execute as executeMxPlanUpdatePut } from './resources/mxplan/mxPlanUpdatePut.operation';
import { execute as executeMxPlanDeleteDelete } from './resources/mxplan/mxPlanDeleteDelete.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker
	props.push({
		displayName: 'Operation',
		name: 'mxPlanOperation',
		type: 'options',
		noDataExpression: true,
		default: undefined,
		options: [
			{ displayName: 'List MX Plans', name: 'mxPlanListGet', value: 'mxPlanListGet' },
			{ displayName: 'Get MX Plan', name: 'mxPlanGetGet', value: 'mxPlanGetGet' },
			{ displayName: 'Update MX Plan', name: 'mxPlanUpdatePut', value: 'mxPlanUpdatePut' },
			{ displayName: 'Delete MX Plan', name: 'mxPlanDeleteDelete', value: 'mxPlanDeleteDelete' },
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('mxPlanOperation', 0) as string;

	switch (operation) {
		case 'mxPlanListGet':
			return executeMxPlanListGet.call(this);
		case 'mxPlanGetGet':
			return executeMxPlanGetGet.call(this);
		case 'mxPlanUpdatePut':
			return executeMxPlanUpdatePut.call(this);
		case 'mxPlanDeleteDelete':
			return executeMxPlanDeleteDelete.call(this);
		default: {
			throw new Error(`No handler for operation '${operation}'`);
		}
	}
}
