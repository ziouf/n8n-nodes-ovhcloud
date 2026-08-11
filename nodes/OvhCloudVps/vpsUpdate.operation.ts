import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { serviceNameLocator } from '../../shared/nodes/locators';
import { ApiClient } from '../../shared/transport/ApiClient';

/** Update VPS service properties (e.g. name). */
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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'The new VPS service name (optional)',
			placeholder: 'vps1234567.ovh.net',
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;

	const body: IDataObject = {};
	try {
		const nameParam = (this.getNodeParameter('name', itemIndex ?? 0) ?? '') as string;
		if (nameParam) body.name = nameParam;
	} catch {
		/* name is optional */
	}

	const data = (await client.httpPut(`/vps/${serviceName}`, body)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
