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
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID identifier',
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
 * Executes the Get record object properties operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/zone/{zoneName}/record/{id}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const id = this.getNodeParameter('id', _itemIndex) as string;
		const zoneName = this.getNodeParameter('zoneName', _itemIndex) as string;

	const data = (await client.httpGet(`/domain/zone/${encodeURIComponent(zoneName)}/record/${encodeURIComponent(id)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
