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
			displayName: 'platform Id',
			name: 'platformId',
			type: 'string',
			default: '',
			required: true,
			description: 'The platformId identifier',
		},
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
 * Executes the Delete Delete an organization operation.
 *
 * HTTP method: DELETE
 * Endpoint: /zimbra/platform/{platformId}/organization/{organizationId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const platformId = this.getNodeParameter('platformId', itemIndex) as string;
	const organizationId = this.getNodeParameter('organizationId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpDelete('/zimbra/platform/' + platformId + '/organization/' + organizationId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
