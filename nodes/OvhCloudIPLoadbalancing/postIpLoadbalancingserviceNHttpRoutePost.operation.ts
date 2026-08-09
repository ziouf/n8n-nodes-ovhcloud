import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The servicename identifier',
			displayOptions,
		},
		{
			displayName: 'Action',
			name: 'action',
			type: 'string',
			default: '',
			description: 'The action value',
			displayOptions,
		},
		{
			displayName: 'DisplayName',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'The displayname value',
			displayOptions,
		},
		{
			displayName: 'FrontendId',
			name: 'frontendId',
			type: 'string',
			default: '',
			description: 'The frontendid value',
			displayOptions,
		},
		{
			displayName: 'Weight',
			name: 'weight',
			type: 'string',
			default: '',
			description: 'The weight value',
			displayOptions,
		},
	];
}

/**
 * Add a new HTTP route to your frontend
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/http/route
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;



	const action = this.getNodeParameter('action', _itemIndex) as string;
	const displayName = this.getNodeParameter('displayName', _itemIndex) as string;
	const frontendId = this.getNodeParameter('frontendId', _itemIndex) as string;
	const weight = this.getNodeParameter('weight', _itemIndex) as string;


const body: IDataObject = {
    action: action,
    displayName: displayName,
    frontendId: frontendId,
    weight: weight
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'http' + '/' + 'route', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

