import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../shared/nodes/notices';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice('This action is destructive and cannot be undone.', displayOptions),
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The service name',
			displayOptions,
		},
		{
			displayName: 'DedicatedServerInterface',
			name: 'dedicatedServerInterface',
			type: 'string',
			default: '',
			required: true,
			description: 'The Dedicated Server interface',
			displayOptions,
		},
	];
}

/**
 * remove this server interface from this vrack
 *
 * HTTP method: DELETE
 * Endpoint: /vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const dedicatedServerInterface = this.getNodeParameter('dedicatedServerInterface', _itemIndex) as string;





	const client = getClient(this);
	const data = (await client.httpDelete('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'dedicatedServerInterface' + '/' + encodeURIComponent(dedicatedServerInterface))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

