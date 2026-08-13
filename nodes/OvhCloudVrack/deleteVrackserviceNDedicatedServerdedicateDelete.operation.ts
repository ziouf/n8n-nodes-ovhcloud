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
			displayName: 'DedicatedServer',
			name: 'dedicatedServer',
			type: 'string',
			default: '',
			required: true,
			description: 'The Dedicated Server',
			displayOptions,
		},
	];
}

/**
 * remove this server from this vrack (LEGACY)
 *
 * HTTP method: DELETE
 * Endpoint: /vrack/{serviceName}/dedicatedServer/{dedicatedServer}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const dedicatedServer = this.getNodeParameter('dedicatedServer', _itemIndex) as string;





	const client = getClient(this);
	const data = (await client.httpDelete('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'dedicatedServer' + '/' + encodeURIComponent(dedicatedServer))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

