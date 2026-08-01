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
			displayName: 'Organization ID',
			name: 'organizationId',
			type: 'string',
			default: '',
			required: true,
			description: 'The organizationId identifier',
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID identifier',
		},

	];
}

/**
 * Executes the Put Update organization network access control list resources operation.
 *
 * HTTP method: PUT
 * Endpoint: /vmwareCloudDirector/organization/{organizationId}/networkAcl/{id}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const organizationId = this.getNodeParameter('organizationId', itemIndex) as string;
	const id = this.getNodeParameter('id', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/vmwareCloudDirector/organization/' + organizationId + '/networkAcl/' + id, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
