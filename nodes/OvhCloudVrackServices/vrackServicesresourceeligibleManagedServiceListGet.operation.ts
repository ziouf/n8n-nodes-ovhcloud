import type {

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
 * Executes the Get List every managed service eligible to the requested vRack Services operation.
 *
 * HTTP method: GET
 * Endpoint: /vrackServices/resource/{vrackServicesId}/eligibleManagedService
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const vrackServicesId = this.getNodeParameter('vrackServicesId', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpGet('/vrackServices/resource/' + vrackServicesId + '/eligibleManagedService')) as unknown[];


	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
