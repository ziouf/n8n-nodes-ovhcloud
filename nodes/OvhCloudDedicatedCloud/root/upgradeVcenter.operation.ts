import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedCloudServices',
				displayName: 'Service Name',
				description: 'Domain of the service',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			}),
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
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	const release = this.getNodeParameter('release', _itemIndex, '') as string; if (release !== '') { body.release = release; }
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/upgradeVcenter`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
