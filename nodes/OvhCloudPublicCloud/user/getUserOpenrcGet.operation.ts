import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
			displayOptions,
		},
		{
			displayName: 'User ID',
			name: 'userId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Region',
			name: 'region',
			type: 'string',
			default: '',
			required: true,
			description: 'Region of the OpenRC configuration',
			displayOptions,
		},
		{
			displayName: 'Version',
			name: 'version',
			type: 'string',
			default: '',
			description: 'OpenRC version to generate',
			displayOptions,
		},
	];
}

/**
 * Executes the Get User OpenRC operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/user/{userId}/openrc
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const userId = this.getNodeParameter('userId', _itemIndex ?? 0) as string;

	const qs: IDataObject = {};
	const region = (this.getNodeParameter('region', _itemIndex ?? 0) || '') as string;
	const version = (this.getNodeParameter('version', _itemIndex ?? 0) || '') as string;
	qs['region'] = region;
	if (version) {
		qs['version'] = version;
	}

	const data = (await client.httpGet(
		`/cloud/project/${serviceName}/user/${userId}/openrc`,
		qs as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
