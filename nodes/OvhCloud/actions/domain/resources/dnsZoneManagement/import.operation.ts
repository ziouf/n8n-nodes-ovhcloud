import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Import DNS Zone operation
 *
 * Imports a DNS zone.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/import
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
			required: true,
			description: 'The zone content to import',
			displayOptions,
		},
	];
}

/**
 * Executes the Import DNS Zone operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;
	const zone = this.getNodeParameter('zone', 0) as string;

	const body: IDataObject = { zone };
	const data = (await client.httpPost(`/domain/zone/${zoneName}/import`, body)) as IDataObject;
	return [{ json: data }];
}
