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
 * Executes the Restart a zone task operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/task/{id}/relaunch
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const id = this.getNodeParameter('id', itemIndex) as string;
		const zoneName = this.getNodeParameter('zoneName', itemIndex) as string;

	const data = (await client.httpPost(`/domain/zone/${encodeURIComponent(zoneName)}/task/${encodeURIComponent(id)}/relaunch`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
