import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain of the service',
			displayOptions,
		},
		{
			displayName: 'Show Incompatible',
			name: 'showIncompatible',
			type: 'boolean',
			default: false,
			description: 'Whether to show incompatible security options (enabled by default)',
			displayOptions,
		},
		{
			displayName: 'Show Internal',
			name: 'showInternal',
			type: 'boolean',
			default: false,
			description: 'Whether to show internal security options',
			displayOptions,
		},
		{
			displayName: 'Return All',
			name: 'returnAll',
			type: 'boolean',
			default: false,
			description: 'Whether to return all results or only up to a given limit',
			displayOptions,
		},
		{
			displayName: 'Limit',
			name: 'limit',
			type: 'number',
			typeOptions: {
				minValue: 1,
			},
			default: 50,
			description: 'Max number of results to return',
			displayOptions: {
				show: {
					returnAll: [false],
				},
			},
		},
	];
}

/**
 * Executes the Get Security Options Compatibility Matrix operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/securityOptions/compatibilityMatrix
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const qs: IDataObject = {};
	const showIncompatible = this.getNodeParameter('showIncompatible', itemIndex) as boolean;
	if (showIncompatible) {
		qs.showIncompatible = showIncompatible;
	}
	const showInternal = this.getNodeParameter('showInternal', itemIndex) as boolean;
	if (showInternal) {
		qs.showInternal = showInternal;
	}
	const data = (await client.httpGet(
		`/dedicatedCloud/${serviceName}/securityOptions/compatibilityMatrix`,
		qs,
	)) as IDataObject;
	const returnAll = this.getNodeParameter('returnAll', itemIndex) as boolean;

	if (returnAll) {
		return data as unknown as INodeExecutionData[];
	}

	const limit = this.getNodeParameter('limit', itemIndex) as number;
	return (data as unknown as INodeExecutionData[]).slice(0, limit);
}
