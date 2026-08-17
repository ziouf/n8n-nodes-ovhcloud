import { projectIdLocator } from '../../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
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
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const body = {} as import('n8n-workflow').IDataObject;

	const nameVal = (this.getNodeParameter('name', _itemIndex ?? 0) || '') as string;
	if (nameVal !== '') {
		body.name = nameVal;
	}
	const modelVal = (this.getNodeParameter('model', _itemIndex ?? 0) || '') as string;
	if (modelVal !== '') {
		body.model = modelVal;
	}
	const networkIdVal = (this.getNodeParameter('networkId', _itemIndex ?? 0) || '') as string;
	if (networkIdVal !== '') {
		body.networkId = networkIdVal;
	}
	const subnetIdVal = (this.getNodeParameter('subnetId', _itemIndex ?? 0) || '') as string;
	if (subnetIdVal !== '') {
		body.subnetId = subnetIdVal;
	}
	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/region/${regionName}/gateway`,
		body as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
