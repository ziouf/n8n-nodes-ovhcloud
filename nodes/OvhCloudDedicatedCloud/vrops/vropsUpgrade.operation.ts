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
		{
			displayName: 'Version',
			name: 'version',
			type: 'string',
			default: '',
			description: 'Target version for VMware Aria Operations upgrade',
			displayOptions,
		},
	];
}

/**
 * Executes the Upgrade VMware Aria Operations operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/vrops/upgrade
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	const version = this.getNodeParameter('version', _itemIndex, '') as string; if (version !== '') { body.version = version; }
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/vrops/upgrade`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
