import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { serviceNameLocator } from '../../shared/nodes/locators';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * WARNING: This operation RESTORES the VPS to a previous backup point.
 * All data written since that backup will be PERMANENTLY DESTROYED and CANNOT BE RECOVERED.
 * Use with extreme caution — this is an IRREVERSIBLE destructive action on all current VPS state.
 */
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

	const data = (await client.httpPost(
		`/vps/${serviceName}/automatedBackup/restore`,
		{},
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
