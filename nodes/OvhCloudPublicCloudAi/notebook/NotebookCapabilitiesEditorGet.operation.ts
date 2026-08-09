import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions = {} as IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The OVHcloud service name',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPublicCloudProjects' },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Compatible with Framework',
			name: 'compatibleWithFramework',
			type: 'string',
			default: '',
			description: 'Only list editors compatible with this framework',
			displayOptions,
		},
	];
}

/**
 * Executes the List AI Solutions Notebook available code editors operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/ai/notebook/capabilities/editor
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const compatibleWithFramework = this.getNodeParameter('compatibleWithFramework', _itemIndex ?? 0) as string;

	const qs: Record<string, string> = {};
	if (compatibleWithFramework) qs.compatibleWithFramework = compatibleWithFramework;

	const client = new ApiClient(this);
	const data = (await client.httpGet('cloud/project' + serviceName + '/ai/notebook/capabilities/editor', qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
