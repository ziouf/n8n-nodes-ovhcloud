import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Cart ID',
			name: 'cartId',
			type: 'string',
			default: '' ,
			required: true,
			displayOptions,
		},
		{
			displayName: 'Plan Code',
			name: 'planCode',
			type: 'string',
			default: '' ,
			required: true,
			description: 'Identifier of the Veeam Managed Backup Service for VMware Cloud Director offer',
			displayOptions,
		}
	];
}

/**
 * Executes the Get Vmware Cloud Director Backup options operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}/vmwareCloudDirectorBackup/options
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const cartId = this.getNodeParameter('cartId', itemIndex) as string;
	const planCode = this.getNodeParameter('planCode', itemIndex ?? 0, '') as string;
	const qs: IDataObject = {
		planCode: planCode
	};
	const data = (await client.httpGet(`/order/cart/${cartId}/vmwareCloudDirectorBackup/options`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
