import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'organization Id',
			name: 'organizationId',
			type: 'string',
			default: '',
			required: true,
			description: 'The organizationId identifier',
		},

	];
}

/**
 * Executes the Post Reset the VMware Cloud Director organization administrator password operation.
 *
 * HTTP method: POST
 * Endpoint: /vmwareCloudDirector/organization/{organizationId}/password
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const organizationId = this.getNodeParameter('organizationId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpPost('/vmwareCloudDirector/organization/' + organizationId + '/password')) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
