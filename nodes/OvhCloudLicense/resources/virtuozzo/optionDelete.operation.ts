import type {IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'License Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Virtuozzo license service name',
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
					placeholder: 'virtuozzo-1',
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
 * Endpoint: /license/virtuozzo/{serviceName}/option/{label}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', { extractValue: true }) as string;
	const label = this.getNodeParameter('label', _itemIndex) as string;
	await client.httpDelete('/license/virtuozzo/' + encodeURIComponent(serviceName) + '/option/' + encodeURIComponent(label) + '');
	return this.helpers.returnJsonArray([{ success: true }]);
}

