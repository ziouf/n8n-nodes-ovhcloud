import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../shared/nodes/locators';

/** Get raw datacenter availability for a VPS. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getVpsServices',
				displayName: 'VPS Service Name',
				description: 'The VPS service name (e.g. vps1234567.ovh.net)',
				placeholder: 'vps1234567.ovh.net',
			}),
			displayOptions,
		},
		{
			displayName: 'Zone',
			name: 'zone',
			type: 'options',
			default: 'GRA',
			required: true,
			description: 'The datacenter zone to check availability for',
			options: [
				{ name: 'GRA', value: 'GRA' },
				{ name: 'BHS', value: 'BHS' },
				{ name: 'SBG', value: 'SBG' },
				{ name: 'RBS', value: 'RBS' },
			],
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const zone = this.getNodeParameter('zone', itemIndex ?? 0) as string;

	const data = (await client.httpGet(`/vps/${serviceName}/datacenter/availabilities/raw`, {
		query: { zone },
	})) as IDataObject[];
	return this.helpers.returnJsonArray(data.map((item) => ({ ...item })));
}
