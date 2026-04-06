import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Reset DNS Zone operation
 *
 * Resets a DNS zone.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/reset
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the DNS zone',
			displayOptions,
		},
		{
			displayName: 'Zone',
			name: 'zone',
			type: 'string',
			default: '',
			description: 'Optional zone content to reset to',
			displayOptions,
		},
	];
}

/**
 * Executes the Reset DNS Zone operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;

	const body: IDataObject = {};
	const zone = this.getNodeParameter('zone', 0, '') as string;
	if (zone) body.zone = zone;

	const data = (await client.httpPost(`/domain/zone/${zoneName}/reset`, body)) as IDataObject;
	return [{ json: data }];
}
