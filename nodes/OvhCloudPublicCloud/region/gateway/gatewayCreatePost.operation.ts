import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Public Cloud Project',
			name: 'publicCloudProjectId',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Public Cloud project ID (e.g. 12345678-1234-1234-1234-1234567890ab)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPublicCloudProjects' },
				},
				{
					displayName: 'By ID',
					name: 'name',
					type: 'string',
					placeholder: '12345678-1234-1234-1234-1234567890ab',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Region Name',
			name: 'regionName',
			type: 'string',
			default: '',
			required: true,
			description: 'The region name (e.g. GRA63, BHS62)',
			displayOptions,
		},
		{
			displayName: 'Gateway Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the gateway',
			displayOptions,
		},
		{
			displayName: 'Model',
			name: 'model',
			type: 'string',
			default: '',

			description: 'The gateway model (e.g. standard, premium)',
			displayOptions,
		},
		{
			displayName: 'Network ID',
			name: 'networkId',
			type: 'string',
			default: '',
			required: true,
			description: 'The private network UUID',
			displayOptions,
		},
		{
			displayName: 'Subnet ID',
			name: 'subnetId',
			type: 'string',
			default: '',
			required: true,
			description: 'The subnet UUID',
			displayOptions,
		},
	];
}

/**
 * Executes the gateway Create Post operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/gateway
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', 0) as string;
	const body = {} as import('n8n-workflow').IDataObject;

	const nameVal = (this.getNodeParameter('name', 0) || '') as string;
	if (nameVal !== '') {
		body.name = nameVal;
	}
	const modelVal = (this.getNodeParameter('model', 0) || '') as string;
	if (modelVal !== '') {
		body.model = modelVal;
	}
	const networkIdVal = (this.getNodeParameter('networkId', 0) || '') as string;
	if (networkIdVal !== '') {
		body.networkId = networkIdVal;
	}
	const subnetIdVal = (this.getNodeParameter('subnetId', 0) || '') as string;
	if (subnetIdVal !== '') {
		body.subnetId = subnetIdVal;
	}
	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/region/${regionName}/gateway`,
		body as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
