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

	];
}

/**
 * Executes the Get Get VMware Cloud Director organization details operation.
 *
 * HTTP method: GET
 * Endpoint: /vmwareCloudDirector/organization/{organizationId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const organizationId = this.getNodeParameter('organizationId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/vmwareCloudDirector/organization/' + organizationId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
