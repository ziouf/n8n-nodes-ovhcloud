import type {IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'License Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Windows license service name',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getWorkLightLicenses', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'windows-1',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Label',
			name: 'label',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}


/**
 * release this Option.
 *
 * HTTP method: DELETE
 * Endpoint: /license/windows/{serviceName}/option/{label}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '', { extractValue: true }) as string;
	const label = this.getNodeParameter('label', itemIndex) as string;
	await client.httpDelete('/license/windows/' + encodeURIComponent(serviceName) + '/option/' + encodeURIComponent(label) + '');
	return this.helpers.returnJsonArray([{ success: true }]);
}

