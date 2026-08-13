import type {
	IDataObject,
	IDisplayOptions,
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
			description: 'Filter the value of label property (=)',
			displayOptions,
		},
	];
}


/**
 * Options linked to this license.
 *
 * HTTP method: GET
 * Endpoint: /license/virtuozzo/{serviceName}/option
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', { extractValue: true }) as string;
	const label = this.getNodeParameter('label', _itemIndex, '') as string;

	const qs: IDataObject = {
    label: label
  };
	const data = (await client.httpGet('/license/virtuozzo/' + encodeURIComponent(serviceName) + '/option', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

