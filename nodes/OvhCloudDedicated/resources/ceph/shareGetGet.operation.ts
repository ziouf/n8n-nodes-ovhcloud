import type { IDataObject, IDisplayOptions, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Nasha Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Nasha (NAS) service name (e.g. ns12345678.ovh.net)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'nashaListGet' },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'ns12345678.ovh.net',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Share ID',
			name: 'shareId',
			type: 'string',
			default: '',
			required: true,
			description: 'The share identifier',
			placeholder: 'e.g. 123456',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Share operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha/{serviceName}/share/{shareId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', {
		extractValue: true,
	}) as string;
	const shareId = (this.getNodeParameter('shareId', 0) as string) || '';
	const data = (await client.httpGet(`/dedicated/nasha/${serviceName}/share/${shareId}`)) as unknown as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
