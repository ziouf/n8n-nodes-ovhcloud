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
			displayName: 'Horizon View Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The domain of the Horizon View service (e.g. service1)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getHorizonViewServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'service1',
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
			description: 'The name of the customer network',
			displayOptions,
		},
		{
			displayName: 'Network',
			name: 'network',
			type: 'string',
			default: '',
			required: true,
			placeholder: '10.0.0.0/24',
			description: 'The private network you want to reach from the desktops',
			displayOptions,
		},
	];
}

/**
 * Add a customer network to a Horizon View service.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/customerNetwork
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;

	const body: IDataObject = {
		name: this.getNodeParameter('name', _itemIndex ?? 0) as string,
		network: this.getNodeParameter('network', _itemIndex ?? 0) as string,
	};

	const data = (await client.httpPost(
		`/horizonView/${encodeURIComponent(serviceName)}/customerNetwork`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
