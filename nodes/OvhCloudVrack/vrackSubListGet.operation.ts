import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Vrack ID',
			name: 'vrackId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},

	];
}

/**
 * Executes the Get ListVrackServices operation.
 *
 * HTTP method: GET
 * Endpoint: /vrack/{vrackId}/vRack
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const vrackId = this.getNodeParameter('vrackId', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpGet('/vrack/' + vrackId + '/vRack')) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
