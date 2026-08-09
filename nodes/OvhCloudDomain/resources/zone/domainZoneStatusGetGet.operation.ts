import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The zoneName identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Get zone status operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/zone/{zoneName}/status
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const zoneName = this.getNodeParameter('zoneName', _itemIndex) as string;

	const data = (await client.httpGet(`/domain/zone/${encodeURIComponent(zoneName)}/status`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
