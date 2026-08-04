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
		{
			displayName: 'Zone File',
			name: 'zoneFile',
			type: 'string',
			default: '',
			required: true,
			description: 'Zone file that will be imported',
			displayOptions,
		},
	];
}

/**
 * Executes the Import a DNS zone from a zone file operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/import
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const zoneName = this.getNodeParameter('zoneName', itemIndex) as string;

	const body: IDataObject = {};
		const zoneFile = this.getNodeParameter('zoneFile', itemIndex, '') as string;
		body['zoneFile'] = zoneFile;

	const data = (await client.httpPost(`/domain/zone/${encodeURIComponent(zoneName)}/import`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
