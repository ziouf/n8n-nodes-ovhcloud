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
			description: 'The OfficePrepaid license service name',
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
					placeholder: 'officePrepaid-1',
				},
			],
			displayOptions,
		},
	];
}


/**
 * Unconfigure the office user.
 *
 * HTTP method: POST
 * Endpoint: /license/officePrepaid/{serviceName}/unconfigure
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', { extractValue: true }) as string;
	const body: IDataObject = {};
	const data = (await client.httpPost('/license/officePrepaid/' + encodeURIComponent(serviceName) + '/unconfigure', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

