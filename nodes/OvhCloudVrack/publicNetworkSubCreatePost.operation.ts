import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Vrack ID',
			name: 'vrackId',
			type: 'string',
			default: '',
			required: true,
			description: 'The vrackId identifier',
			displayOptions,
		},

	];
}

/**
 * Executes the Post AddPublicNetworktoVrack operation.
 *
 * HTTP method: POST
 * Endpoint: /vrack/{vrackId}/publicNetwork
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const vrackId = this.getNodeParameter('vrackId', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/vrack/' + vrackId + '/publicNetwork', body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
