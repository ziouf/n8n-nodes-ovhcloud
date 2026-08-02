import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Xdsl Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The name of the xDSL service (e.g. xdsl-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getXdslServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'xdsl-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Enabled',
			name: 'enabled',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Whether the email sending capability is enabled',
			displayOptions,
		},
	];
}

/**
 * Enable or disable the email sending capability of an xDSL service.
 *
 * HTTP method: POST
 * Endpoint: /xdsl/{serviceName}/mailSending
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const enabled = this.getNodeParameter('enabled', 0, false) as boolean;

	const body: IDataObject = {};
	if (enabled !== undefined) body.enabled = enabled;

	const data = (await client.httpPost(`/xdsl/${encodeURIComponent(serviceName)}/mailSending`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
