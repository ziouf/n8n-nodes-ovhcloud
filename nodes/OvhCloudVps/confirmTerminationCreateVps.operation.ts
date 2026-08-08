import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { serviceNameLocator } from '../../shared/nodes/locators';
import { ApiClient } from '../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../shared/nodes/notices';

/**
 * WARNING: This operation CONFIRMS TERMINATION of the VPS service.
 * All data on this VPS will be PERMANENTLY DESTROYED and CANNOT BE RECOVERED.
 * Use with extreme caution — this is an IRREVERSIBLE destructive action that terminates the entire service.
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice(
			'This will confirm the termination of the VPS service. This action is irreversible.',
			displayOptions,
		),
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

	const data = (await client.httpPost(`/vps/${serviceName}/confirmTermination`, {})) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
