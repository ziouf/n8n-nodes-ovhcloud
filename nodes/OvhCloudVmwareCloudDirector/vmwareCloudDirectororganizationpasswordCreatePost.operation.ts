import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Organization ID',
			name: 'organizationId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},

	];
}

/**
 * Executes the Post Reset the VMware Cloud Director organization administrator password operation.
 *
 * HTTP method: POST
 * Endpoint: /vmwareCloudDirector/organization/{organizationId}/password
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const organizationId = this.getNodeParameter('organizationId', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpPost('/vmwareCloudDirector/organization/' + organizationId + '/password')) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
