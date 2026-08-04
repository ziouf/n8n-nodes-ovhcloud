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
			description: 'Domain of the service',
			displayOptions,
		},
		{
			displayName: 'Release',
			name: 'release',
			type: 'options',
			options: [
				{ name: 'Major', value: 'major' },
				{ name: 'Minor', value: 'minor' },
			],
			default: 'major',
			description: 'Version information for vCenter upgrade (minor by default)',
			displayOptions,
		},
	];
}

/**
 * Executes the Upgrade vCenter to Next Version operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/upgradeVcenter
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const body: IDataObject = {};
	const release = this.getNodeParameter('release', itemIndex, '') as string; if (release !== '') { body.release = release; }
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/upgradeVcenter`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
