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
			displayName: 'Commentary',
			name: 'commentary',
			type: 'string',
			default: '',
			description: 'The commentary value',
			displayOptions,
		},
		{
			displayName: 'FutureUse',
			name: 'futureUse',
			type: 'string',
			default: '',
			description: 'The futureuse value',
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'string',
			default: '',
			description: 'The reason value',
			displayOptions,
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'The token value',
			displayOptions,
		},
	];
}

/**
 * Confirm service termination
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/confirmTermination
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;



	const commentary = this.getNodeParameter('commentary', _itemIndex) as string;
	const futureUse = this.getNodeParameter('futureUse', _itemIndex) as string;
	const reason = this.getNodeParameter('reason', _itemIndex) as string;
	const token = this.getNodeParameter('token', _itemIndex) as string;


const body: IDataObject = {
    commentary: commentary,
    futureUse: futureUse,
    reason: reason,
    token: token
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'confirmTermination', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

