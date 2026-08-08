import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { serviceNameLocator } from '../../shared/nodes/locators';
import { ApiClient } from '../../shared/transport/ApiClient';

/** Get monitoring stats for a specific VPS disk. */
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
			displayName: 'From (Date)',
			name: 'from',
			type: 'string',
			default: '',
			description: 'Start date for monitoring stats query (ISO 8601 format, optional)',
			placeholder: '2024-01-01T00:00:00Z',
			displayOptions,
		},
		{
			displayName: 'To (Date)',
			name: 'to',
			type: 'string',
			default: '',
			description: 'End date for monitoring stats query (ISO 8601 format, optional)',
			placeholder: '2024-01-31T23:59:59Z',
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

	const query: IDataObject = {};
	try {
		const fromParam = (this.getNodeParameter('from', itemIndex!) ?? '') as string;
		if (fromParam) query.from = fromParam;
	} catch {
		/* optional */
	}
	try {
		const toParam = (this.getNodeParameter('to', itemIndex!) ?? '') as string;
		if (toParam) query.to = toParam;
	} catch {
		/* optional */
	}

	const data = (await client.httpGet(
		`/vps/${serviceName}/disks/monitoring/stats`,
		query,
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
