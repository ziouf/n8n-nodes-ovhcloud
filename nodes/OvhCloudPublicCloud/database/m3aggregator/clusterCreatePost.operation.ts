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
			default: '',
			required: true,
			description: 'The Public Cloud project ID',
			typeOptions: { searchListMethod: 'getPublicCloudProjects' },
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Plan',
			name: 'plan',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Version',
			name: 'version',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Create M3 Aggregator cluster operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/m3aggregator
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const publicCloudProjectId = this.getNodeParameter('publicCloudProjectId', 0) as string;
	const description = this.getNodeParameter('description', 0) as string;
	const plan = this.getNodeParameter('plan', 0) as string;
	const version = this.getNodeParameter('version', 0) as string;

	const body: IDataObject = {};
	if (description) body.description = description;
	if (plan) body.plan = plan;
	if (version) body.version = version;

	const data = (await await client.httpPost('/cloud/project/' + publicCloudProjectId + '/database/m3aggregator', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
