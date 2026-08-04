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
			displayName: 'Creation Date',
			name: 'creationDate',
			type: 'string',
			default: '',
			required: true,
			description: 'The creationDate identifier',
			displayOptions,
		},
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
 * Executes the Get a zone history operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/zone/{zoneName}/history/{creationDate}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const creationDate = this.getNodeParameter('creationDate', itemIndex) as string;
		const zoneName = this.getNodeParameter('zoneName', itemIndex) as string;

	const data = (await client.httpGet(`/domain/zone/${encodeURIComponent(zoneName)}/history/${encodeURIComponent(creationDate)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
