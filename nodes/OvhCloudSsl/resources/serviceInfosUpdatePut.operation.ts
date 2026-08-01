import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Certificate ID',
			name: 'certificateId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Suspend',
			name: 'suspend',
			type: 'boolean',
			default: false,
			description: 'Whether to suspend or unsuspend the SSL service',
			displayOptions,
		},
	];
}

/**
 * Update SSL service information
 *
 * HTTP method: PUT
 * Endpoint: /ssl/{serviceName}/serviceInfos
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const certificateId = this.getNodeParameter('certificateId', itemIndex) as string;
	const body: IDataObject = {};
	const suspend = this.getNodeParameter('suspend', itemIndex) as boolean;
	body.suspend = suspend;
	const data = (await client.httpPut(`/ssl/${certificateId}/serviceInfos`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
