import { SERVICE_NAME } from '../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
	];
}

/**
 * Executes the Generate a NSX-V Inventory operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/generateNsxvInventory
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/generateNsxvInventory`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
