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
			displayName: 'Platform ID',
			name: 'platformId',
			type: 'string',
			default: '',
			required: true,
			description: 'Zimbra platform ID',
			displayOptions,
		},
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
 * Executes the Get Get an organization operation.
 *
 * HTTP method: GET
 * Endpoint: /zimbra/platform/{platformId}/organization/{organizationId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const platformId = this.getNodeParameter('platformId', _itemIndex) as string;
	const organizationId = this.getNodeParameter('organizationId', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpGet('/zimbra/platform/' + platformId + '/organization/' + organizationId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
