import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name/ID of the VMware on OVHcloud infrastructure',
			displayOptions,
		},
		{
			displayName: 'Can Delete At Expiration',
			name: 'canDeleteAtExpiration',
			type: 'boolean',
			default: false,
			description: 'Whether indicates that the service can be set up to be deleted at expiration',
			displayOptions,
		},
	];
}

/**
 * Executes the Update service information operation.
 *
 * HTTP method: PUT
 * Endpoint: /dedicatedCloud/{serviceName}/serviceInfos
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	const canDeleteAtExpiration = this.getNodeParameter('canDeleteAtExpiration', _itemIndex) as boolean;
	if (canDeleteAtExpiration) { body.canDeleteAtExpiration = canDeleteAtExpiration; }
	const data = (await client.httpPut(`/dedicatedCloud/${serviceName}/serviceInfos`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
