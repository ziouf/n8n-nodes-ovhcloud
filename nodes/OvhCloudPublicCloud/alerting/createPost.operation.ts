import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The alert name',
			displayOptions,
		},
		{
			displayName: 'Delay',
			name: 'delay',
			type: 'number',
			default: 0,
			required: true,
			description: 'Delay before sending the alert (in minutes)',
			displayOptions,
		},
		{
			displayName: 'Monthly Threshold',
			name: 'monthlyThreshold',
			type: 'number',
			default: 0,
			required: true,
			description: 'Monthly billing threshold to trigger the alert',
			displayOptions,
		},
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			description: 'Email address to send the alert to',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Alerting Rule operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/alerting
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	const delay = this.getNodeParameter('delay', _itemIndex ?? 0) as number;
	const monthlyThreshold = this.getNodeParameter('monthlyThreshold', _itemIndex ?? 0) as number;
	const email = this.getNodeParameter('email', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		name,
		delay,
		monthlyThreshold,
	};
	if (email) {
		body.email = email;
	}

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/alerting`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
