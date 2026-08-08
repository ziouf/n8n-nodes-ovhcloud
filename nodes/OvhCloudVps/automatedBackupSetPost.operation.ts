import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { serviceNameLocator } from '../../shared/nodes/locators';
import { ApiClient } from '../../shared/transport/ApiClient';

/** Set a backup restore plan for the VPS. */
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
			displayName: 'Restore Plan',
			name: 'restorePlan',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the restore plan to apply (e.g. 1day)',
			placeholder: '1day',
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
	const restorePlan = this.getNodeParameter('restorePlan', itemIndex!) as string;

	const body: IDataObject = { restorePlan };
	const data = (await client.httpPost(
		`/vps/${serviceName}/automatedBackup/set`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
