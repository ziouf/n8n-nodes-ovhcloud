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
			displayName: 'Vrack Services ID',
			name: 'vrackServicesId',
			type: 'string',
			default: '',
			required: true,
			description: 'VRACK service ID',
			displayOptions,
		},

	];
}

/**
 * Executes the Put Request updates on the vRack Services configuration operation.
 *
 * HTTP method: PUT
 * Endpoint: /vrackServices/resource/{vrackServicesId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const vrackServicesId = this.getNodeParameter('vrackServicesId', _itemIndex) as string;

	const body: IDataObject = {};

	const client = getClient(this);
	const data = (await client.httpPut('/vrackServices/resource/' + vrackServicesId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
