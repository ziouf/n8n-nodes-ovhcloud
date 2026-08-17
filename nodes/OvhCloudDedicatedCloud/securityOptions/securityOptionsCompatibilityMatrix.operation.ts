import { SERVICE_NAME } from '../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
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
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const qs: IDataObject = {};
	const showIncompatible = this.getNodeParameter('showIncompatible', _itemIndex) as boolean;
	if (showIncompatible) {
		qs.showIncompatible = showIncompatible;
	}
	const showInternal = this.getNodeParameter('showInternal', _itemIndex) as boolean;
	if (showInternal) {
		qs.showInternal = showInternal;
	}
	const data = (await client.httpGet(
		`/dedicatedCloud/${serviceName}/securityOptions/compatibilityMatrix`,
		qs,
	)) as IDataObject;
	const returnAll = this.getNodeParameter('returnAll', _itemIndex) as boolean;

	if (returnAll) {
		return data as unknown as INodeExecutionData[];
	}

	const limit = this.getNodeParameter('limit', _itemIndex) as number;
	return (data as unknown as INodeExecutionData[]).slice(0, limit);
}
