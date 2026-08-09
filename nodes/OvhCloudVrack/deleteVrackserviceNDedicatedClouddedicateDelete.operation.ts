import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The servicename identifier',
			displayOptions,
		},
		{
			displayName: 'DedicatedCloud',
			name: 'dedicatedCloud',
			type: 'string',
			default: '',
			required: true,
			description: 'The dedicatedcloud identifier',
			displayOptions,
		},
	];
}

/**
 * Remove VMware on OVHcloud from vRack
 *
 * HTTP method: DELETE
 * Endpoint: /vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const dedicatedCloud = this.getNodeParameter('dedicatedCloud', _itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpDelete('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'dedicatedCloud' + '/' + encodeURIComponent(dedicatedCloud))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

