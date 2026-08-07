import type {
	IDataObject,
	IDisplayOptions,
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
			description: 'The Plesk license service name',
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
					placeholder: 'plesk-1',
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
 * Get this object properties.
 *
 * HTTP method: GET
 * Endpoint: /license/plesk/{serviceName}/option/{label}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '', { extractValue: true }) as string;
	const label = this.getNodeParameter('label', itemIndex) as string;
	const data = (await client.httpGet('/license/plesk/' + encodeURIComponent(serviceName) + '/option/' + encodeURIComponent(label) + '')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

