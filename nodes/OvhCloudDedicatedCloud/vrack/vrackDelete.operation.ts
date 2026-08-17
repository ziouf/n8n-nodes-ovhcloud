import { SERVICE_NAME } from '../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice('This action is destructive and cannot be undone.', displayOptions),
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'vRack',
			name: 'vrack',
			type: 'string',
			default: '',
			required: true,
			description: 'Vrack name',
			displayOptions,
		},
	];
}

/**
 * Executes the Remove VMware on OVHcloud from vRack operation.
 *
 * HTTP method: DELETE
 * Endpoint: /dedicatedCloud/{serviceName}/vrack/{vrack}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const vrack = this.getNodeParameter('vrack', _itemIndex) as string;
	const data = (await client.httpDelete(`/dedicatedCloud/${serviceName}/vrack/${vrack}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
