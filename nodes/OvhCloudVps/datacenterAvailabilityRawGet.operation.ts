import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { serviceNameLocator } from '../../shared/nodes/locators';
import { ApiClient } from '../../shared/transport/ApiClient';

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
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex!, '', {
		extractValue: true,
	}) as string;
	const zone = this.getNodeParameter('zone', itemIndex!) as string;

	const data = (await client.httpGet(`/vps/${serviceName}/datacenter/availabilities/raw`, {
		query: { zone },
	})) as IDataObject[];
	return this.helpers.returnJsonArray(data.map((item) => ({ ...item })));
}
