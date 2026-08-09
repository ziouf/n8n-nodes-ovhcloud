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
			displayName: 'Listener ID',
			name: 'listenerId',
			type: 'string',
			default: '',
			required: true,
			description: 'The listener UUID',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',

			description: 'New name',
			displayOptions,
		},
		{
			displayName: 'Default Pool ID',
			name: 'defaultPoolId',
			type: 'string',
			default: '',

			description: 'New default pool',
			displayOptions,
		},
		{
			displayName: 'Certificate ID',
			name: 'certificateId',
			type: 'string',
			default: '',

			description: 'New certificate ID',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',

			description: 'New description',
			displayOptions,
		},
	];
}

/**
 * Executes the loadbalancing Listener Update Put operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/loadbalancing/listener/${listenerIdVal}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const body = {} as import('n8n-workflow').IDataObject;

	const listenerIdVal = (this.getNodeParameter('listenerId', _itemIndex ?? 0) || '') as string;
	if (listenerIdVal !== '') {
		body.listenerId = listenerIdVal;
	}
	const nameVal = (this.getNodeParameter('name', _itemIndex ?? 0) || '') as string;
	if (nameVal !== '') {
		body.name = nameVal;
	}
	const defaultPoolIdVal = (this.getNodeParameter('defaultPoolId', _itemIndex ?? 0) || '') as string;
	if (defaultPoolIdVal !== '') {
		body.defaultPoolId = defaultPoolIdVal;
	}
	const certificateIdVal = (this.getNodeParameter('certificateId', _itemIndex ?? 0) || '') as string;
	if (certificateIdVal !== '') {
		body.certificateId = certificateIdVal;
	}
	const descriptionVal = (this.getNodeParameter('description', _itemIndex ?? 0) || '') as string;
	if (descriptionVal !== '') {
		body.description = descriptionVal;
	}
	const data = (await client.httpPut(
		`/publicCloud/project/${projectId}/region/${regionName}/loadbalancing/listener/${listenerIdVal}`,
		body as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
